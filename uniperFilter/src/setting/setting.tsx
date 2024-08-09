/** @jsx jsx */
import {
  React, jsx, DataSourceManager, Immutable, type UseDataSource, type ImmutableObject, type IMSqlExpression,
  type IMIconResult, ClauseLogic, urlUtils, defaultMessages as jimuCoreMessages, type DataSource, getAppStore, APP_FRAME_NAME_IN_BUILDER, type IMGroupSqlExpression
} from 'jimu-core'
import { getAppConfigAction, type AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow, SidePopper } from 'jimu-ui/advanced/setting-components'
import FilterItem from './filter-item'
import { Button, Icon, AdvancedButtonGroup, Switch, Tooltip, Label, defaultMessages as jimuUIMessages, Checkbox, Alert, Dropdown, DropdownButton, DropdownMenu, DropdownItem } from 'jimu-ui'
import { type WidgetConfig, type filterItemConfig, FilterArrangeType, FilterTriggerType } from '../config'
import defaultMessages from './translations/default'
import { getStyleForWidget } from './style'
import { getJimuFieldNamesBySqlExpression, getUpdatedGroupExpression } from 'jimu-ui/basic/sql-expression-runtime'
import FilterItemDataSource from './filter-item-ds'
import { List, TreeItemActionType } from 'jimu-ui/basic/list-tree'
import {
  getUseDataSourcesByDsAdded, getUseDataSourcesBySingleFiltersChanged, getUseDataSourcesByGroupFiltersChanged, getUseDataSourcesByRemovedAction, getGroupName
} from './utils'
import { LayoutItemSizeModes } from 'jimu-layouts/layout-runtime'

import { ClickOutlined } from 'jimu-icons/outlined/application/click'
import { CloseOutlined } from 'jimu-icons/outlined/editor/close'
import { PlusOutlined } from 'jimu-icons/outlined/editor/plus'
import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'
import { DownOutlined } from 'jimu-icons/outlined/directional/down'
import { DuplicateOutlined } from 'jimu-icons/outlined/editor/duplicate'

const FilterIcon = require('jimu-icons/svg/outlined/editor/filter.svg')
const GroupFilterIcon = require('jimu-icons/svg/outlined/editor/filter-group.svg')

const allDefaultMessages = Object.assign({}, defaultMessages, jimuCoreMessages, jimuUIMessages)

const DefaultFilterIconResult: IMIconResult = Immutable({
  svg: FilterIcon,
  properties: {
    color: '',
    filename: '',
    originalName: 'filter.svg',
    inlineSvg: true,
    size: 14
  }
})

const DefaultFilterIconResultForGroup: IMIconResult = Immutable({
  svg: GroupFilterIcon,
  properties: {
    color: '',
    filename: '',
    originalName: 'filter-group.svg',
    inlineSvg: true,
    size: 14
  }
})

interface State {
  popperFocusNode: HTMLElement
  showFilterItemPanel: boolean
  isGroupItemPanel: boolean
  refreshFilterItemPanel: boolean
  dataSources: { [dsId: string]: DataSource }
  filterIconResult: IMIconResult
  filterIconResultForGroup: IMIconResult
}

export default class Setting extends React.PureComponent<AllWidgetSettingProps<WidgetConfig>, State> {
  index: number
  dsHash: { [index: number]: ImmutableObject<UseDataSource> }
  dsManager: DataSourceManager
  sidePopperTrigger = React.createRef<HTMLDivElement>()

  constructor (props) {
    super(props)
    this.index = 0
    this.dsManager = DataSourceManager.getInstance()
    this.state = {
      popperFocusNode: null,
      showFilterItemPanel: false,
      isGroupItemPanel: false,
      refreshFilterItemPanel: false,
      dataSources: {},
      filterIconResult: DefaultFilterIconResult.setIn(['properties', 'filename'], this.i18nMessage('filter')),
      filterIconResultForGroup: DefaultFilterIconResultForGroup.setIn(['properties', 'filename'], this.i18nMessage('groupFilter'))
    }
  }
  // optionsContainerStyle : any = {position: 'absolute', bottom: '0', height: 'auto'};

  /** ********** For widget ***********/
  i18nMessage = (id: string, values?: any) => {
    return this.props.intl.formatMessage({ id: id, defaultMessage: allDefaultMessages[id] }, values)
  }

  toggleTimeout: NodeJS.Timer
  onShowFilterItemPanel = (index: number, newAdded: boolean, isGroup: boolean) => {
    this.settSidePopperAnchor(index, newAdded)
    if (index === this.index) {
      this.setState({
        showFilterItemPanel: !this.state.showFilterItemPanel
      })
    } else {
      this.setState({
        showFilterItemPanel: true,
        refreshFilterItemPanel: !this.state.refreshFilterItemPanel
      })
      this.index = index
    }
    this.setState({
      isGroupItemPanel: isGroup
    })
  }

  settSidePopperAnchor = (index?: number, newAdded = false) => {
    let node: any
    if (newAdded) {
      node = this.sidePopperTrigger.current.getElementsByClassName('add-filter-btn')[0]
    } else {
      node = this.sidePopperTrigger.current.getElementsByClassName('jimu-tree-item__body')[index]
    }
    this.setState({
      popperFocusNode: node
    })
  }

  onCloseFilterItemPanel = () => {
    this.setState({
      showFilterItemPanel: false
    })
    this.index = 0
  }

  updateConfigForOptions = (prop: string, value: boolean | ClauseLogic | FilterArrangeType | FilterTriggerType) => {
    const config = {
      id: this.props.id,
      config: this.props.config.set(prop, value)
    }
    this.props.onSettingChange(config)
  }

  /** ********** For Filter Item config ***********/

  duplicateFilterItem = (index: number) => {
    const fItems = this.props.config.filterItems.asMutable({ deep: true })
    fItems.push(fItems[index])
    const config = {
      id: this.props.id,
      config: this.props.config.set('filterItems', fItems)
    } as any
    this.props.onSettingChange(config)
  }

  removeFilterItem = (index: number) => {
    if (this.index === index) {
      this.onCloseFilterItemPanel()
    }

    // del current filter item
    const fItems = this.props.config.filterItems.asMutable({ deep: true })
    fItems.splice(index, 1)
    const fis = this.props.config.set('filterItems', fItems)

    const config = {
      id: this.props.id,
      config: fis
    } as any

    const currentItem = this.props.config.filterItems[index]
    config.useDataSources = getUseDataSourcesByRemovedAction(fItems, currentItem.useDataSources, this.props.useDataSources)

    this.props.onSettingChange(config)

    if (this.index > index) {
      this.index--
    }
  }

  optionChangeForFI = (prop: string, value: string | boolean | IMIconResult) => {
    const currentFI = this.props.config.filterItems[this.index]
    if (currentFI) {
      const fItems = this.props.config.filterItems.asMutable({ deep: true })
      const fItem = Immutable(fItems[this.index]).set(prop, value)
      fItems.splice(this.index, 1, fItem.asMutable({ deep: true }))

      const config = {
        id: this.props.id,
        config: this.props.config.set('filterItems', fItems)
      }
      this.props.onSettingChange(config)
    }
  }

  optionChangeByDrag = (fItems) => {
    const config = {
      id: this.props.id,
      config: this.props.config.set('filterItems', fItems)
    }
    this.props.onSettingChange(config)
  }

  getDataSourcesByUseDss = (useDataSources: UseDataSource[]) => {
    return useDataSources.map(usdDs => this.state.dataSources[usdDs.dataSourceId])
  }

  // Remove one ds for group filter item, need to check if it's main ds.
  removeDsForGroupFilterItem = (useDataSources: UseDataSource[]): boolean => {
    const fItems = this.props.config.filterItems
    const currentFI = fItems[this.index]
    const isDsRemoved = currentFI?.isGroup && currentFI.useDataSources.length > useDataSources.length
    if (isDsRemoved) {
      const newDss = useDataSources.map(ds => ds.dataSourceId)
      const removedDs = currentFI.useDataSources.filter(useDs => !newDss.includes(useDs.dataSourceId))[0]
      const mainDsExists = currentFI.sqlExprObjForGroup ? currentFI.sqlExprObjForGroup?.[0].dataSourceId !== removedDs.dataSourceId : false

      let sqlExprObjForGroup
      let useDss
      if (mainDsExists) { // Remove related item from sqlExprObjForGroup when removeing a normal ds.
        sqlExprObjForGroup = getUpdatedGroupExpression(currentFI?.sqlExprObjForGroup, removedDs.dataSourceId, false)
        useDss = useDataSources
      } else { // Clear all to null
        sqlExprObjForGroup = null
        useDss = useDataSources.map(ds => Immutable(ds).without('fields'))
      }
      const newFItem = currentFI
        .set('sqlExprObjForGroup', sqlExprObjForGroup)
        .set('useDataSources', useDss)
      const newFItems = (fItems as any).set(this.index, newFItem)

      const widgetJson = {
        id: this.props.id,
        config: this.props.config.set('filterItems', newFItems)
      } as any

      // update fields for previous dss
      widgetJson.useDataSources = getUseDataSourcesByGroupFiltersChanged(newFItems, Immutable(useDss), this.props.useDataSources)
      // remove ds & fields for new added ds
      widgetJson.useDataSources = getUseDataSourcesByRemovedAction(newFItems, Immutable([removedDs]), widgetJson.useDataSources)
      this.props.onSettingChange(widgetJson)
    }
    return isDsRemoved
  }

  // save currentSelectedDs to array;
  dataSourceChangeForFI = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    // Delete ds from useDss of group item.
    if (this.removeDsForGroupFilterItem(useDataSources)) {
      return
    }

    // init new added one
    this.dsManager.createDataSourceByUseDataSource(Immutable(useDataSources[useDataSources.length - 1])).then(currentDs => {
      const fItems = this.props.config.filterItems
      const currentFI = fItems[this.index]
      const filterItem: filterItemConfig = {
        isGroup: this.state.isGroupItemPanel,
        icon: this.state.isGroupItemPanel ? this.state.filterIconResultForGroup : this.state.filterIconResult,
        name: this.state.isGroupItemPanel ? getGroupName(fItems, currentFI, this.i18nMessage) : currentDs.getLabel(),
        useDataSources: useDataSources.map(ds => Immutable(ds)), // .without('fields')
        autoApplyWhenWidgetOpen: false,
        collapseFilterExprs: false
      }

      if (this.state.isGroupItemPanel) { // For group, add new ds related item to sqlExprObjForGroup.
        filterItem.sqlExprObjForGroup = getUpdatedGroupExpression(currentFI?.sqlExprObjForGroup, useDataSources[useDataSources.length - 1].dataSourceId, true)
      } else {
        filterItem.sqlExprObj = null
      }

      let filterItems
      if (currentFI) { // update FI, reset other opts for current FI
        const _fis = fItems.asMutable({ deep: true })
        _fis.splice(this.index, 1, filterItem)
        filterItems = Immutable(_fis)
      } else { // add new FI to FIs
        filterItems = fItems.concat(Immutable([filterItem]))
      }

      const widgetJson = {
        id: this.props.id,
        config: this.props.config.set('filterItems', filterItems)
      } as any

      widgetJson.useDataSources = getUseDataSourcesByDsAdded(filterItems, useDataSources[useDataSources.length - 1], this.props.useDataSources, currentFI)

      this.props.onSettingChange(widgetJson)
    })
  }

  sqlExprBuilderChange = (sqlExprObj: IMSqlExpression) => {
    let fields = []
    if (sqlExprObj?.parts?.length > 0) {
      fields = getJimuFieldNamesBySqlExpression(sqlExprObj) // get fields
    } else {
      sqlExprObj = null // when no valid clauses in builder
    }
    const currentUseDs = this.props.config.filterItems[this.index].useDataSources[0]
    const updatedDs: UseDataSource[] = [{ ...currentUseDs, fields: fields }]

    // update sqlExprObj, sqlExprObj and ds
    const fItems = this.props.config.filterItems.asMutable({ deep: true })
    const fItem = Object.assign({}, fItems[this.index], { sqlExprObj: sqlExprObj, useDataSources: updatedDs })
    fItems.splice(this.index, 1, fItem)

    const widgetJson = {
      id: this.props.id,
      config: this.props.config.set('filterItems', Immutable(fItems))
    } as any

    widgetJson.useDataSources = getUseDataSourcesBySingleFiltersChanged(fItems, updatedDs[0].dataSourceId, this.props.useDataSources)

    this.props.onSettingChange(widgetJson)
  }

  groupSqlExprBuilderChange = (sqlExprObjForGroup: IMGroupSqlExpression) => {
    const currentFItem = this.props.config.filterItems[this.index]

    // New useDss should honor the order of sqlExprObjForGroup.
    const newUseDss = []
    sqlExprObjForGroup.forEach((singleSqlItem, index) => {
      currentFItem.useDataSources.some(useDs => {
        if (useDs.dataSourceId === singleSqlItem.dataSourceId) {
          newUseDss.push(useDs.set('fields', sqlExprObjForGroup[index].fieldList))
          return true
        }
        return false
      })
    })

    // update sqlExprObjForGroup, and useDss with new fields.
    const newFItems = (this.props.config.filterItems as any).set(
      this.index,
      currentFItem.set('sqlExprObjForGroup', sqlExprObjForGroup).set('useDataSources', newUseDss)
    )

    const widgetJson = {
      id: this.props.id,
      config: this.props.config.set('filterItems', newFItems)
    } as any

    // update all related dss' fields
    widgetJson.useDataSources = getUseDataSourcesByGroupFiltersChanged(newFItems, currentFItem.useDataSources, this.props.useDataSources)
    this.props.onSettingChange(widgetJson)
  }

  getDataSourceById = (useDataSources: UseDataSource[], dataSourceId: string): ImmutableObject<UseDataSource> => {
    const dsList = useDataSources.filter(ds => ds.dataSourceId === dataSourceId)
    return Immutable(dsList[0])
  }

  changeAndOR = (logicalOperator: ClauseLogic) => {
    this.updateConfigForOptions('logicalOperator', logicalOperator)
  }

  changeUseWrap = (wrap: boolean) => {
    this.updateConfigForOptions('wrap', wrap)
  }

  changeArrangeType = (type: FilterArrangeType) => {
    const { arrangeType } = this.props.config
    if (type !== arrangeType) {
      this.updateConfigForOptions('arrangeType', type)
      this.updateSizeStypeByType(arrangeType, type)
    }
  }

  querySelector = (selector: string): HTMLElement => {
    const appFrame: HTMLFrameElement = document.querySelector(`iframe[name="${APP_FRAME_NAME_IN_BUILDER}"]`)
    if (appFrame) {
      const appFrameDoc = appFrame.contentDocument ?? appFrame.contentWindow.document
      return appFrameDoc.querySelector(selector)
    }
    return null
  }

  // Update width, height when changing type.
  updateSizeStypeByType = (currentType, newType) => {
    if (currentType !== FilterArrangeType.Popper && newType !== FilterArrangeType.Popper) {
      return
    }
    const runtimeState = getAppStore().getState().appStateInBuilder
    const layoutInfo = runtimeState?.appRuntimeInfo?.selection
    const layout = runtimeState.appConfig.layouts?.[layoutInfo?.layoutId]
    const layoutItem = layout?.content?.[layoutInfo?.layoutItemId]

    if (!layout || !layoutItem) {
      return
    }

    let widthType
    let ratioWidth = null
    // Others to popper, changet to autoWidth, autoHeight
    if (newType === FilterArrangeType.Popper) {
      widthType = LayoutItemSizeModes.Auto
    } else { // Popper to others, only autoHeight, width is from manifest
      widthType = LayoutItemSizeModes.Custom
      const selector = `div.layout[data-layoutid=${layoutInfo.layoutId}]`
      const parentElement = this.querySelector(selector)
      const { clientWidth = 100 } = parentElement || {}
      ratioWidth = `${350 * 100 / clientWidth}%`
    }

    getAppConfigAction()
      .editLayoutItemProperty(
        layoutInfo,
        'setting.autoProps',
        {
          width: widthType,
          height: LayoutItemSizeModes.Auto
        }
      )
      .editLayoutItemProperty(layoutInfo, 'bbox', layoutItem.bbox.set('width', ratioWidth))
      .exec()
  }

  changeTriggerType = (type: FilterTriggerType) => {
    this.updateConfigForOptions('triggerType', type)
  }

  changeOmitInternalStyle = (omit: boolean) => {
    this.updateConfigForOptions('omitInternalStyle', omit)
  }

  onCreateDataSourceCreatedOrFailed = (dataSourceId: string, dataSource: DataSource) => {
    // The next state depends on the current state. Can't use this.state since it's not updated in in a cycle
    this.setState((state: State) => {
      const newDataSources = Object.assign({}, state.dataSources)
      newDataSources[dataSourceId] = dataSource
      return { dataSources: newDataSources }
    })
  }

  isDataSourceCreated = (dataSourceId: string) => {
    // loading or created states from data component, and it's in props.useDataSources.
    return this.state.dataSources[dataSourceId] !== null && this.props.useDataSources.filter(useDs => dataSourceId === useDs.dataSourceId).length > 0
  }

  CreateFilterItemElement = (item, index) => {
    return <div
      key={index}
      className='filter-item align-items-center'
    >
      {
        item.icon && <div className='filter-item-icon'>
          <Icon icon={item.icon.svg} size={14} />
        </div>
      }
      <div className='filter-item-name flex-grow-1'>{item.name}</div>
      {
        !this.isDataSourceCreated(this.props.config.filterItems[index]?.useDataSources[0].dataSourceId) &&
        <Alert
          buttonType='tertiary'
          form='tooltip'
          size='small'
          type='error'
          text={this.i18nMessage('dataSourceCreateError')}
        >
        </Alert>
      }
      <Button
        size='sm' type="tertiary" icon
        className='p-0 ml-2 mr-2'
        title={this.i18nMessage('duplicate')}
        aria-label={this.i18nMessage('duplicate')}
        onClick={(evt) => { evt.stopPropagation(); this.duplicateFilterItem(index) }}
        onKeyDown={evt => {
          if (evt.key === 'Enter' || evt.key === ' ') {
            evt.preventDefault()
            evt.stopPropagation()
          }
        }}
        onKeyUp={(evt) => {
          if (evt.key === 'Enter' || evt.key === ' ') {
            evt.stopPropagation()
            this.duplicateFilterItem(index)
          }
        }}
      >
        <DuplicateOutlined />
      </Button>
      <Button
        size='sm' type="tertiary" icon
        className='p-0'
        title={this.i18nMessage('delete')}
        aria-label={this.i18nMessage('delete')}
        onClick={(evt) => { evt.stopPropagation(); this.removeFilterItem(index) }}
        onKeyDown={evt => {
          if (evt.key === 'Enter' || evt.key === ' ') {
            evt.preventDefault()
            evt.stopPropagation()
          }
        }}
        onKeyUp={(evt) => {
          if (evt.key === 'Enter' || evt.key === ' ') {
            evt.stopPropagation()
            this.removeFilterItem(index)
          }
        }}
      >
        <CloseOutlined />
      </Button>
    </div>
  }

  createFilterItems = (isEditingState: boolean) => {
    return (
      <div className={`filter-items-container ${this.props.config.filterItems.length > 1 ? 'mt-2' : 'mt-4'}`}>
        <List
          className='setting-ui-unit-list'
          itemsJson={this.props.config.filterItems.asMutable().map((i, x) => ({
            itemStateDetailContent: i,
            itemKey: `${x}`,
            itemStateChecked: this.state.showFilterItemPanel && this.index === x
          }))}
          dndEnabled
          onDidDrop={(actionData, refComponent) => {
            const { itemJsons: [, listItemJsons] } = refComponent.props
            this.optionChangeByDrag((listItemJsons as any).map(i => i.itemStateDetailContent))
          }}
          onClickItemBody={(actionData, refComponent) => {
            const { itemJsons } = refComponent.props
            const currentItemJson = itemJsons[0]
            const listItemJsons = itemJsons[1] as any
            const index = listItemJsons.indexOf(currentItemJson)
            this.onShowFilterItemPanel(index, false, this.props.config.filterItems[index].isGroup)
          }}
          overrideItemBlockInfo={({ itemBlockInfo }) => {
            return {
              name: TreeItemActionType.RenderOverrideItem,
              children: [{
                name: TreeItemActionType.RenderOverrideItemDroppableContainer,
                children: [{
                  name: TreeItemActionType.RenderOverrideItemDraggableContainer,
                  children: [{
                    name: TreeItemActionType.RenderOverrideItemBody,
                    children: [{
                      name: TreeItemActionType.RenderOverrideItemDragHandle
                    }, {
                      name: TreeItemActionType.RenderOverrideItemMainLine
                    }]
                  }]
                }]
              }]
            }
          }}

          renderOverrideItemMainLine={(actionData, refComponent) => {
            const { itemJsons } = refComponent.props
            const currentItemJson = itemJsons[0]
            const listItemJsons = itemJsons[1] as any
            return this.CreateFilterItemElement(currentItemJson.itemStateDetailContent, listItemJsons.indexOf(currentItemJson))
          }}
        />

        {
          isEditingState && <List className='mt-1'
          itemsJson={[{
            itemKey: this.index + '',
            itemStateChecked: true,
            itemStateIcon: () => ({ icon: this.state.isGroupItemPanel ? GroupFilterIcon : FilterIcon, size: 14 }),
            itemStateTitle: '......',
            itemStateCommands: []
          }]}
          dndEnabled={false}
          isItemFocused={() => true}
          overrideItemBlockInfo={(itemBlockInfo) => {
            return {
              name: TreeItemActionType.RenderOverrideItem,
              children: [{
                name: TreeItemActionType.RenderOverrideItemDroppableContainer,
                children: [{
                  name: TreeItemActionType.RenderOverrideItemDraggableContainer,
                  children: [{
                    name: TreeItemActionType.RenderOverrideItemBody,
                    children: [
                      {
                        name: TreeItemActionType.RenderOverrideItemMainLine,
                        children: [{
                          name: TreeItemActionType.RenderOverrideItemDragHandle
                        }, {
                          name: TreeItemActionType.RenderOverrideItemIcon
                        }, {
                          name: TreeItemActionType.RenderOverrideItemTitle
                        }]
                      }]
                  }]
                }]
              }]
            }
          }}
          />
        }
      </div>
    )
  }

  render () {
    const { config } = this.props
    const isEditingState = config.filterItems.length === this.index && this.state.showFilterItemPanel
    const hasItems = config.filterItems.length > 0 || isEditingState
    return (
      <div className='jimu-widget-setting widget-setting-filter h-100' css={getStyleForWidget(this.props.theme)}>
        {
          this.props.useDataSources?.map((useDs, index) => {
            return (
              <FilterItemDataSource
                key={index}
                useDataSource={useDs}
                onCreateDataSourceCreatedOrFailed={this.onCreateDataSourceCreatedOrFailed}
              />
            )
          })
        }
        <SettingSection className={hasItems ? '' : 'border-0'} role='group'>
          <div ref={this.sidePopperTrigger}>
            <SettingRow label={<span id='newFilterDesc'>{this.i18nMessage('filtersDesc')}</span>} flow='wrap' />
            <SettingRow className='mt-2' >
              <Button
                type='primary'
                className='w-100 text-dark add-filter-btn'
                aria-label={this.i18nMessage('newFilter')}
                aria-describedby={'newFilterDesc filter-blank-msg'}
                onClick={() => { this.onShowFilterItemPanel(config.filterItems.length, true, false) }}
              >
                <div className='w-100 px-2 text-truncate'>
                  <PlusOutlined className='mr-1' />
                  {this.i18nMessage('newFilter')}
                </div>
              </Button>
              <Dropdown className='ml-1'>
                <DropdownButton icon arrow={false}
                  type='primary'
                  title={this.i18nMessage('newGroup')}
                >
                  <DownOutlined className='group-dropdown-icon' />
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem
                    className='dropdown-item-group'
                    onClick={() => { this.onShowFilterItemPanel(config.filterItems.length, true, true) }}
                  >
                    <div>
                      <PlusOutlined className='group-plus-icon mr-2' />
                      {this.i18nMessage('newGroup')}
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </SettingRow>

            {
              hasItems && <React.Fragment>
                {
                  config.filterItems.length > 1 && <SettingRow>
                    <AdvancedButtonGroup className='w-100 and-or-group'>
                      <Button
                        onClick={() => { this.changeAndOR(ClauseLogic.And) }}
                        className='btn-secondary max-width-50' size='sm'
                        active={config.logicalOperator === ClauseLogic.And}
                      >
                        <div className='text-truncate'>
                          {this.i18nMessage('and')}
                        </div>
                      </Button>
                      <Button
                        onClick={() => { this.changeAndOR(ClauseLogic.Or) }}
                        className='btn-secondary max-width-50' size='sm'
                        active={config.logicalOperator === ClauseLogic.Or}
                      >
                        <div className='text-truncate'>
                          {this.i18nMessage('or')}
                        </div>
                      </Button>
                    </AdvancedButtonGroup>
                  </SettingRow>
                }
                { this.createFilterItems(isEditingState) }
              </React.Fragment>
            }
          </div>
        </SettingSection>

        {
          config.filterItems.length > 0
            ? <React.Fragment>
              <SettingSection
                className='arrange-style-container'
                title={this.i18nMessage('arrangeAndStyle')}
                role='group'
                aria-label={this.i18nMessage('arrangeAndStyle')}
              >
                <SettingRow className='arrange_container'>
                  <Tooltip title={this.i18nMessage('vertical')} placement='bottom'>
                    <Button
                      onClick={() => { this.changeArrangeType(FilterArrangeType.Block) }}
                      icon size='sm' type='tertiary'
                      active={config.arrangeType === FilterArrangeType.Block}
                      aria-pressed={config.arrangeType === FilterArrangeType.Block}
                      aria-label={this.i18nMessage('vertical')}
                    >
                      <Icon width={68} height={68} icon={require('./assets/arrange_block.svg')} autoFlip />
                    </Button>
                  </Tooltip>
                  <Tooltip title={this.i18nMessage('horizontal')} placement='bottom'>
                    <Button
                      onClick={() => { this.changeArrangeType(FilterArrangeType.Inline) }}
                      icon size='sm' type='tertiary'
                      active={config.arrangeType === FilterArrangeType.Inline}
                      aria-pressed={config.arrangeType === FilterArrangeType.Inline}
                      aria-label={this.i18nMessage('horizontal')}
                    >
                      <Icon width={68} height={68} icon={require('./assets/arrange_inline.svg')} autoFlip />
                    </Button>
                  </Tooltip>
                  <Tooltip title={this.i18nMessage('icon')} placement='bottom'>
                    <Button
                      onClick={() => { this.changeArrangeType(FilterArrangeType.Popper) }}
                      icon size='sm' type='tertiary'
                      active={config.arrangeType === FilterArrangeType.Popper}
                      aria-pressed={config.arrangeType === FilterArrangeType.Popper}
                      aria-label={this.i18nMessage('icon')}
                    >
                      <Icon width={68} height={68} icon={require('./assets/arrange_popup.svg')} autoFlip />
                    </Button>
                  </Tooltip>
                </SettingRow>
                {
                  config.arrangeType === FilterArrangeType.Inline && <SettingRow label={this.i18nMessage('wrapFilters')}>
                    <Switch
                      checked={config.wrap}
                      aria-label={this.i18nMessage('wrapFilters')}
                      onChange={() => { this.changeUseWrap(!config.wrap) }}
                    />
                  </SettingRow>
                }
                <SettingRow
                  className='trigger_container'
                  label={this.i18nMessage('activationMethods')} flow='wrap'
                  role='group'
                  aria-label={this.i18nMessage('activationMethods')}
                >
                  {
                    [{ type: FilterTriggerType.Toggle, icon: 'toggle' },
                      { type: FilterTriggerType.Button, icon: 'button' }].map((item, index) => {
                      return (
                        <Tooltip key={index} title={this.i18nMessage(`${item.icon}Tooltip`)} placement='bottom'>
                          <Button
                            onClick={() => { this.changeTriggerType(item.type) }}
                            icon size='sm' type='tertiary'
                            active={item.type === config.triggerType}
                            aria-pressed={item.type === config.triggerType}
                            aria-label={this.i18nMessage(`${item.icon}Tooltip`)}
                          >
                            <Icon width={70} height={50} icon={require(`./assets/trigger_${item.icon}.svg`)} autoFlip />
                          </Button>
                        </Tooltip>
                      )
                    })
                  }
                </SettingRow>

                <SettingRow className='w-100 d-flex justify-content-between'>
                  <Label>
                    <Checkbox
                      style={{ cursor: 'pointer', marginTop: '2px' }}
                      checked={config.omitInternalStyle}
                      aria-label={this.i18nMessage('omitInternalStyle')}
                      onChange={() => { this.changeOmitInternalStyle(!config.omitInternalStyle) }}
                    />
                    <div className='m-0 ml-2 flex-grow-1 omit-label'>
                      {this.i18nMessage('omitInternalStyle')}
                    </div>
                  </Label>
                  <Tooltip title={this.i18nMessage('omitInternalStyleTip')} showArrow placement='left'>
                    <Button icon type='tertiary' size='sm' className='ml-2 p-0'>
                      <InfoOutlined />
                    </Button>
                  </Tooltip>
                </SettingRow>
              </SettingSection>
              <SettingSection
                title={this.i18nMessage('advancedTools')}
                role='group'
                aria-label={this.i18nMessage('advancedTools')}
              >
                <SettingRow label={this.i18nMessage('resetAllFilters')}>
                  <Switch
                    checked={config.resetAll}
                    aria-label={this.i18nMessage('resetAllFilters')}
                    onChange={() => { this.updateConfigForOptions('resetAll', !config.resetAll) }}
                  />
                </SettingRow>
              </SettingSection>
            </React.Fragment>
            : <React.Fragment>
              {
                isEditingState
                  ? null
                  : <div className='empty-placeholder w-100'>
                      <div className='empty-placeholder-inner'>
                        <div className='empty-placeholder-icon'><ClickOutlined size={48} /></div>
                          <div
                            className='empty-placeholder-text'
                            id='filter-blank-msg'
                            dangerouslySetInnerHTML={{ __html: this.i18nMessage('blankStatusMsg', { newFilter: this.i18nMessage('newFilter'), newGroup: this.i18nMessage('newGroup') }) }}
                          />
                      </div>
                    </div>
              }
            </React.Fragment>
        }

        <SidePopper
          position='right'
          title={this.i18nMessage(this.state.isGroupItemPanel ? 'setFilterItemForGroup' : 'setFilterItem')}
          isOpen={this.state.showFilterItemPanel && !urlUtils.getAppIdPageIdFromUrl().pageId}
          trigger={this.sidePopperTrigger?.current}
          backToFocusNode={this.state.popperFocusNode}
          toggle={this.onCloseFilterItemPanel}
        >
          <FilterItem
            {...config.filterItems[this.index] as any}
            isGroup={this.state.isGroupItemPanel} // must use state, because it can't get isGroup from new added item
            intl={this.props.intl}
            theme={this.props.theme}
            customIcons={[this.state[this.state.isGroupItemPanel ? 'filterIconResultForGroup' : 'filterIconResult'].asMutable({ deep: true })]}
            dataSources={this.state.dataSources}
            dataSourceChange={this.dataSourceChangeForFI} optionChange={this.optionChangeForFI}
            onSqlExprBuilderChange={this.sqlExprBuilderChange}
            onGroupSqlExprBuilderChange={this.groupSqlExprBuilderChange}
            i18nMessage={this.i18nMessage}
          />
        </SidePopper>

      </div>
    )
  }
}
