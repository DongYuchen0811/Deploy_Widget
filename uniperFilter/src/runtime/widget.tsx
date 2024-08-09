/** @jsx jsx */
import {
  React, classNames, css, type AllWidgetProps, SessionManager, DataSourceManager, jsx, type DataSource, type QueriableDataSource,
  dataSourceUtils, type ImmutableArray, type UseDataSource, type ImmutableObject, Immutable, type IMSqlExpression,
  type IconResult, DataSourceStatus, MessageManager, DataSourceFilterChangeMessage, lodash, type SqlQueryParams,
  getAppStore
} from 'jimu-core'
import { type WidgetConfig, type filterItemConfig, type filterConfig, FilterArrangeType, FilterTriggerType } from '../config'
import FilterItem from './filter-item'
import { WidgetPlaceholder, Button, Icon, Popper, Badge, maxSizeModifier, applyMaxSizeModifier, getCustomFlipModifier, defaultMessages as jimuUIMessages } from 'jimu-ui'
import { versionManager } from '../version-manager'
import defaultMessages from './translations/default'
import { getStyles } from './style'
import { getShownClauseNumberByExpression, getTotalClauseNumberByExpression } from 'jimu-ui/basic/sql-expression-runtime'
import FilterItemDataSource from './filter-item-ds'
import { ResetOutlined } from 'jimu-icons/outlined/editor/reset'
import { addFeatures } from '@esri/arcgis-rest-feature-layer';
import { setDefaultRequestOptions } from '@esri/arcgis-rest-request'

const FilterIcon = require('../../icon.svg')

interface State {
  popperVersion: number
  isOpen: boolean
  // needQuery: boolean;
  filterItems: ImmutableArray<filterItemConfig>
  dataSources: { [dsId: string]: DataSource }
  outputDataSourceIsNotReady: { [dsId: string]: boolean }
}

const modifiers = [
  getCustomFlipModifier({ fallbackPlacements: ['top', 'left', 'right'], useClosestVerticalPlacement: true }),
  maxSizeModifier,
  applyMaxSizeModifier
]

export default class Widget extends React.PureComponent<AllWidgetProps<WidgetConfig>, State> {
  static versionManager = versionManager

  index: number
  filterState: any = this.props.config.filterItems
  // filterItems: ImmutableArray<filterItemConfig>;
  widgetIconRef: any
  _autoApplyInit: boolean
  __unmount: boolean  

  constructor (props) {
    super(props)
    this.__unmount = false
    this.index = 0
    this._autoApplyInit = true
    this.state = {
      popperVersion: 1,
      isOpen: false,
      // needQuery: true,
      filterItems: this.props.config.filterItems,
      dataSources: {},
      outputDataSourceIsNotReady: {}
    }
  }

  setLoadedFilterItems = (objectAsString, sqlExprObjForGroup) =>{

    let fI = this.props.config.filterItems;
    let LSFilterItems = JSON.parse(objectAsString)
    let LSSqlExprObjForGroup = JSON.parse(sqlExprObjForGroup)
    
    // add functions
    LSFilterItems.asMutable = this.filterState.asMutable;
    LSFilterItems.asObject = this.filterState.asObject;
    LSFilterItems.concat = this.filterState.concat;
    LSFilterItems.filter = this.filterState.filter;
    LSFilterItems.flatMap = this.filterState.flatMap;
    LSFilterItems.getIn = this.filterState.getIn;
    LSFilterItems.keys = this.filterState.keys;
    LSFilterItems.map = this.filterState.map;
    LSFilterItems.reduce = this.filterState.reduce;
    LSFilterItems.reduceRight = this.filterState.reduceRight;
    LSFilterItems.set = this.filterState.set;
    LSFilterItems.setIn = this.filterState.setIn;
    LSFilterItems.slice = this.filterState.slice;
    LSFilterItems.update = this.filterState.update;
    LSFilterItems.updateIn = this.filterState.updateIn;

    for (let i = 0; i < LSFilterItems.length; i++) 
    {
      

      LSFilterItems[i].asMutable = fI[0].asMutable;
      LSFilterItems[i].replace = fI[0].replace;
      LSFilterItems[i].merge = fI[0].merge;
      LSFilterItems[i].getIn = fI[0].getIn;
      LSFilterItems[i].set = fI[0].set;
      LSFilterItems[i].setIn = fI[0].setIn;
      LSFilterItems[i].whitout = fI[0].without;
      LSFilterItems[i].update = fI[0].update;
      LSFilterItems[i].updateIn = fI[0].updateIn;

      if(!LSFilterItems[i].isGroup)
      {
        LSFilterItems[i].sqlExprObj.asMutable = fI[0].asMutable;
        LSFilterItems[i].sqlExprObj.replace = fI[0].replace;
        LSFilterItems[i].sqlExprObj.merge = fI[0].merge;
        LSFilterItems[i].sqlExprObj.getIn = fI[0].getIn;
        LSFilterItems[i].sqlExprObj.set = fI[0].set;
        LSFilterItems[i].sqlExprObj.setIn = fI[0].setIn;
        LSFilterItems[i].sqlExprObj.whitout = fI[0].without;
        LSFilterItems[i].sqlExprObj.update = fI[0].update;
        LSFilterItems[i].sqlExprObj.updateIn = fI[0].updateIn;

        for (let j = 0; j < LSFilterItems[i].sqlExprObj.parts.length; j++) 
        {
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.asMutable = fI[0].asMutable; 
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.replace = fI[0].replace; 
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.merge = fI[0].merge; 
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.getIn = fI[0].getIn; 
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.set = fI[0].set; 
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.setIn = fI[0].setIn; 
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.whitout = fI[0].without; 
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.update = fI[0].update; 
          LSFilterItems[i].sqlExprObj.parts[j].valueOptions.updateIn = fI[0].updateIn; 

          if(LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value != null)
          {
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.asMutable = fI[0].asMutable; 
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.replace = fI[0].replace; 
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.merge = fI[0].merge; 
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.getIn = fI[0].getIn; 
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.set = fI[0].set; 
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.setIn = fI[0].setIn; 
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.whitout = fI[0].without; 
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.update = fI[0].update; 
            LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value.updateIn = fI[0].updateIn;
          }
        }

        
      }
      else 
      {
        /*LSFilterItems[i].sqlExprObjForGroup.asMutable = fI[0].sqlExprObjForGroup.asMutable;
        LSFilterItems[i].sqlExprObjForGroup.asObject = fI[0].sqlExprObjForGroup.asObject;
        LSFilterItems[i].sqlExprObjForGroup.concat = fI[0].sqlExprObjForGroup.concat;
        LSFilterItems[i].sqlExprObjForGroup.filter = fI[0].sqlExprObjForGroup.filter;
        LSFilterItems[i].sqlExprObjForGroup.flatMap = fI[0].sqlExprObjForGroup.flatMap;
        LSFilterItems[i].sqlExprObjForGroup.getIn = fI[0].sqlExprObjForGroup.getIn;
        LSFilterItems[i].sqlExprObjForGroup.keys = fI[0].sqlExprObjForGroup.keys;
        LSFilterItems[i].sqlExprObjForGroup.map = fI[0].sqlExprObjForGroup.map;
        LSFilterItems[i].sqlExprObjForGroup.reduce = fI[0].sqlExprObjForGroup.reduce;
        LSFilterItems[i].sqlExprObjForGroup.reduceRight = fI[0].sqlExprObjForGroup.reduceRight;
        LSFilterItems[i].sqlExprObjForGroup.set = fI[0].sqlExprObjForGroup.set;
        LSFilterItems[i].sqlExprObjForGroup.setIn = fI[0].sqlExprObjForGroup.setIn;
        LSFilterItems[i].sqlExprObjForGroup.slice = fI[0].sqlExprObjForGroup.slice;
        LSFilterItems[i].sqlExprObjForGroup.update = fI[0].sqlExprObjForGroup.update;
        LSFilterItems[i].sqlExprObjForGroup.updateIn = fI[0].sqlExprObjForGroup.updateIn;

        for (let j = 0; j < LSFilterItems[i].sqlExprObjForGroup.length; j++) 
          {
            LSFilterItems[i].sqlExprObjForGroup[j].asMutable = fI[0].sqlExprObjForGroup[j].asMutable; 
            LSFilterItems[i].sqlExprObjForGroup[j].replace = fI[0].sqlExprObjForGroup[j].replace; 
            LSFilterItems[i].sqlExprObjForGroup[j].merge = fI[0].sqlExprObjForGroup[j].merge; 
            LSFilterItems[i].sqlExprObjForGroup[j].getIn = fI[0].sqlExprObjForGroup[j].getIn; 
            LSFilterItems[i].sqlExprObjForGroup[j].set = fI[0].sqlExprObjForGroup[j].set; 
            LSFilterItems[i].sqlExprObjForGroup[j].setIn = fI[0].sqlExprObjForGroup[j].setIn; 
            LSFilterItems[i].sqlExprObjForGroup[j].whitout = fI[0].sqlExprObjForGroup[j].whitout; 
            LSFilterItems[i].sqlExprObjForGroup[j].update = fI[0].sqlExprObjForGroup[j].update; 
            LSFilterItems[i].sqlExprObjForGroup[j].updateIn = fI[0].sqlExprObjForGroup[j].updateIn;   
          }
          */

          LSSqlExprObjForGroup.map = this.filterState.map;
          LSSqlExprObjForGroup.filter = this.filterState.filter;
          //LSSqlExprObjForGroup.parts[0].valueOptions.value.filter = LSFilterItems[0].sqlExprObjForGroup[0].clause.valueOptions.value.filter
          LSFilterItems[0] = LSFilterItems[0].setIn(['sqlExprObjForGroupforUpdate'], (LSSqlExprObjForGroup as any))
      }

      //Object.assign(fI[0], LSFilterItems[i] )

    }

    return LSFilterItems
  }

  getStringifiedFilterItems = () =>{
    this.filterState = this.state.filterItems;
    let LSFilterItems = [];

    for (let i = 0; i < this.state.filterItems.length; i++) {
      LSFilterItems.push(this.state.filterItems[i]);      
    }    
    return JSON.stringify(LSFilterItems);
  }

  getStringifiedGroupFilterSqlExp = () =>{
    
    return JSON.stringify(this.lastSqlExpChanged);
  }

  componentDidMount () 
  {
    setDefaultRequestOptions({
      authentication: SessionManager.getInstance().getMainSession()
    })
  }

  componentWillUnmount () {
    this.__unmount = true
    // Remove SQLs for dss, and publish msg when widget is removed.
    const dsIds = []
    Object.keys(this.state.dataSources).forEach(dsId => {
      const ds = this.state.dataSources[dsId]
      // Only when ds and its sql exist. (skip: undefined and '')
      if (ds && (ds.getInfo().widgetQueries?.[this.props.id] as SqlQueryParams)?.where) {
        (ds as QueriableDataSource)?.updateQueryParams(null, this.props.id)
        dsIds.push(ds.id)
      }
    })
    if (dsIds.length > 0) {
      this.publishFilterMessage(dsIds)
    }

  }

  componentDidUpdate (prevProps: AllWidgetProps<filterConfig>, prevState: State) {
    if (this.__unmount) {
      return
    }
    this._autoApplyInit = false
    // refresh all sqls for different dataSources when setting's changed, including filter item is removed.
    if (prevProps.config !== this.props.config) {
      this.setState({
        filterItems: this.props.config.filterItems
      })
      this.setSqlToAllDs()
      // update auto apply by arrangement & styles
    } else if (this.state.dataSources !== prevState.dataSources) {
      this._autoApplyInit = true
      this.applyAutoFiltersAtStart()
    }

    if(this.props.hasOwnProperty("stateProps") && this.props.stateProps?.resetFilter )
    {
      if(this.props.stateProps.resetFilter != undefined)
      {
        const shouldReset = JSON.parse(this.props.stateProps.resetFilter)
        this.props.stateProps.resetFilter = undefined;

        if(shouldReset)
          this.onResetChange();
      }
    }

    if(this.props.hasOwnProperty("stateProps") && this.props.stateProps?.setFilterValues)
    {
      if(this.props.stateProps.setFilterValues != undefined)
      {

        const configJson = JSON.parse(this.props.stateProps.setFilterValues)
        this.props.stateProps.setFilterValues = undefined;

        const ds = Object.values(this.state.dataSources)[0] as QueriableDataSource 
        const configDs= DataSourceManager.getInstance().getDataSource(configJson.configDs) as QueriableDataSource     
        
        const queryParams: SqlQueryParams = {
          where: `filterConfig_relationId LIKE '%${configJson.relationId}%' AND filterConfig_name LIKE '%${this.props.label}%'`
        }
                
        configDs.query(queryParams).then( (res:QueryResult[]) =>
        {
          if(res.records.length > 0)
          {
            let r = res.records[0];
            let objectAsString = this.decode64(r.getFieldValue("filterConfig_value"));

            let config = JSON.parse(objectAsString)            
            
            return this.setLoadedFilterItems(config.objectAsAString, config.sqlExprObjForGroup);
          }
          else
            console.log("Keine Filterconfiguration gefunden. Relation ID -> "+ configJson.relationId +" Filter -> "+ this.props.label)
        })
        .then( (res) => 
        {
            if(res)
            this.setState({filterItems: res}, () => 
            {

              this.onResetChange();

              if (!res[0].isGroup) 
              {
                this.onFilterItemChange(0,ds,this.state.filterItems[0].sqlExprObj, res[0].autoApplyWhenWidgetOpen);
              } 
              else if (res[0].sqlExprObjForGroup) 
              {                
                this.onFilterItemChange(0,ds,this.state.filterItems[0].sqlExprObjForGroupforUpdate, res[0].autoApplyWhenWidgetOpen);
              }

              
            })
            //this.onFilterItemChange(0,ds,this.state.filterItems[0].sqlExprObj, res[0].autoApplyWhenWidgetOpen);
        })        
      }
    } 

    if(this.props.hasOwnProperty("stateProps") && this.props.stateProps?.saveConfigTrigger )
    {
      if(this.props.stateProps.saveConfigTrigger != undefined)
      {
        const configJson = JSON.parse(this.props.stateProps.saveConfigTrigger)
        this.props.stateProps.saveConfigTrigger = undefined;
        
        const useDataSource = configJson.dsToSave;
        const ds= DataSourceManager.getInstance().getDataSource(useDataSource) as QueriableDataSource

        console.log(this.lastSqlExpChanged);

        let stringifiedFilterItems = this.getStringifiedFilterItems();

        let stringifiedGroupFilterSqlExp = this.getStringifiedGroupFilterSqlExp();

        let bothQobjects = JSON.stringify({ objectAsAString: stringifiedFilterItems, sqlExprObjForGroup: stringifiedGroupFilterSqlExp });
        let base64BothQobjects = this.base64(bothQobjects);

        addFeatures(
          {
            url: ds.url,
            features: [{
              geometry: { x: 0, y: 0 },
              attributes: { filterConfig_name: this.props.label, filterConfig_creator: this.props.user.username,
                            filterConfig_relationId: configJson.relationId, filterConfig_value: base64BothQobjects,
                            filterConfig_startOnLoad: prevState.filterItems[0].autoApplyWhenWidgetOpen
                          }
            }]
          })
          .then( (res) =>
          {
            console.log(res);
            ds.setNeedRefresh(true);            
          })


      }
    }
  }


  base64(data) {
    const bytes = new TextEncoder().encode(data);
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
  }

  decode64(base64) {
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
    return new TextDecoder().decode(bytes);
  }



  lastSqlExpChanged:IMSqlExpression = null;

  onFilterItemChange = (index: number, dataSource: DataSource, sqlExprObj: IMSqlExpression, applied: boolean) => {
    if (this.__unmount) {
      return
    }

    // get updated fItems
    const fItems = this.state.filterItems
    let fItem = fItems[index].set('autoApplyWhenWidgetOpen', applied)
    if (!fItem.isGroup) {
      fItem = fItem.set('sqlExprObj', sqlExprObj)
    } else if (fItem.sqlExprObjForGroup) {
      this.lastSqlExpChanged = sqlExprObj;
      fItem = fItem.setIn(['sqlExprObjForGroup', '0', 'clause', 'valueOptions', 'value'], (sqlExprObj.parts[0] as any).valueOptions.value)
    }
    const updatedFItems = (fItems as any).set(index, fItem)

    this.setState({
      filterItems: updatedFItems
    })

    const needQuery = !((!applied && !fItems[index].autoApplyWhenWidgetOpen))
    if (needQuery) {
      const dss = {}
      dss[dataSource.id] = dataSource
      if (fItem.isGroup && fItem.sqlExprObjForGroup) {
        const itemUseDsIds = fItem.useDataSources.map(useDs => useDs.dataSourceId)
        itemUseDsIds.forEach(dsId => {
          dss[dsId] = this.state.dataSources[dsId]
        })
      }
      this.setSqlToAllDs(dss, updatedFItems)
    }
  }

  setSqlToAllDs = (dss = this.state.dataSources, filterItems = this.props.config.filterItems) => {
    const dsIds = []
    Object.keys(dss).forEach(dsId => {
      const ds = dss[dsId]
      if (ds) { // exclude invalid dataSources
        const prevSqlForDs = (ds.getInfo().widgetQueries?.[this.props.id] as SqlQueryParams)?.where
        const sqlResult = this.getQuerySqlFromDs(ds, filterItems)
        this.setSqlToDs(ds, sqlResult)
        if (prevSqlForDs !== sqlResult.sql) {
          dsIds.push(ds.id)
        }
      }
    })
    if (dsIds.length > 0) {
      this.publishFilterMessage(dsIds)
    }
  }

  setSqlToDs = (dataSource: DataSource, sqlResult) => {
    // Not set empty SQL for ds, because it would cause many useless requests.
    if (this._autoApplyInit && sqlResult.sql === '') {
      return
    }
    if (dataSource) {
      const queryParams = { where: sqlResult.sql, sqlExpression: sqlResult.sqlExpression } as any
      (dataSource as QueriableDataSource).updateQueryParams?.(queryParams, this.props.id)
    }
  }

  publishFilterMessage = (dataSourceIds: string[]) => {
    MessageManager.getInstance().publishMessage(new DataSourceFilterChangeMessage(this.props.id, dataSourceIds))
  }

  // get merged sqlExpression from current ds
  getQuerySqlFromDs = (dataSource: DataSource, filterItems = this.props.config.filterItems) => {
    const sqlExprs = []
    filterItems.forEach(item => {
      // collect sqls from autoApplid, manual apply, or expaned single clause. dataSource could be null when it's not available.
      if (item.autoApplyWhenWidgetOpen || (this.props.config.omitInternalStyle && getShownClauseNumberByExpression(item.sqlExprObj) === 1)) {
        const sqlExprObj = item.isGroup
          ? dataSourceUtils.getSQLExpressionFromGroupSQLExpression(item.sqlExprObjForGroup, dataSource)
          : item.useDataSources[0].dataSourceId === dataSource?.id && item.sqlExprObj
        if (sqlExprObj) {
          const sqlResult = dataSourceUtils.getArcGISSQL(sqlExprObj, dataSource)
          if (sqlResult.sql) {
            sqlExprs.push(sqlResult.sqlExpression)
          }
        }
      }
    })
    let sqlExpression = null
    if (sqlExprs.length) {
      sqlExpression = dataSourceUtils.getMergedSQLExpressions(sqlExprs, dataSource, this.props.config.logicalOperator)
    }
    return {
      sql: sqlExpression?.sql || '',
      sqlExpression
    }
  }

  getDataSourceById = (dataSourceId: string): ImmutableObject<UseDataSource> => {
    const dsList = this.props.useDataSources.asMutable({ deep: true }).filter(ds => ds.dataSourceId === dataSourceId)
    return Immutable(dsList[0])
  }

  // check if it's in props.useDataSources.
  isDataSourceRemoved = (dataSourceId: string) => {
    return this.props.useDataSources?.filter(useDs => dataSourceId === useDs.dataSourceId).length === 0
  }

  onResetChange = () => {
    this.setState({
      filterItems: this.props.config.filterItems
    })
    this.setSqlToAllDs()
  }

  /**
   * Whether to show reset button at bottom of widget
   * By default: bottom.
   * Special case: right. Only when filter item(s) are displayed as buttons.
   */
  showResetAtBottom = (resetAll, arrangeType, wrap, filterItems): boolean => {
    let atBottom = true
    if (
      resetAll && arrangeType === FilterArrangeType.Inline && !wrap &&
      (filterItems.length > 1 || (filterItems.length === 1 && getShownClauseNumberByExpression(filterItems[0].sqlExprObj) === 0))
    ) {
      atBottom = false
    }
    return atBottom
  }

  getItemUseDs = (item: filterItemConfig) => {
    let useDs = item.useDataSources[0]
    if (item.isGroup && item.sqlExprObjForGroup) {
      useDs = item.useDataSources.filter(ds => ds.dataSourceId === item.sqlExprObjForGroup[0].dataSourceId)[0]
    }
    return useDs
  }

  getFilterItems = (config, arrangeType = FilterArrangeType.Block, wrap = false, isPopup = false) => {
    const showResetAtBottom = this.showResetAtBottom(config.resetAll, arrangeType, wrap, config.filterItems)
    return (
      <div className={classNames('w-100 h-100 d-flex justify-content-between',
        showResetAtBottom ? 'flex-column' : 'flex-row')}
        css={getStyles(this.props.theme, this.props.config)}>
        <div
          className={classNames('w-100 filter-items-container',
            arrangeType && config.arrangeType === FilterArrangeType.Inline ? 'filter-items-inline' : '',
            wrap ? 'filter-items-wrap' : '', isPopup ? 'filter-items-popup' : '')}
        >
          {(this.state.filterItems as unknown as filterItemConfig[]).map((item, index) => {
            const useDs = this.getItemUseDs(item)
            const ds = this.isDataSourceRemoved(useDs.dataSourceId) ? null : this.state.dataSources[useDs.dataSourceId]
            const isNotReadyFromWidget = this.state.outputDataSourceIsNotReady[useDs.dataSourceId]
            return (
              <FilterItem
                key={index} id={index} widgetId={this.props.id} intl={this.props.intl}
                selectedDs={ds} useDataSource={useDs}
                isNotReadyFromWidget={isNotReadyFromWidget} logicalOperator={config.logicalOperator} config={item}
                arrangeType={arrangeType} triggerType={config.triggerType} wrap={wrap} omitInternalStyle={config.omitInternalStyle} filterNum={this.state.filterItems.length}
                onChange={this.onFilterItemChange} itemBgColor={this.props.theme.colors.palette.light[300]} theme={this.props.theme}
              />
            )
          })}
        </div>
        {
          config.resetAll && <div className={classNames('filter-reset-container', showResetAtBottom ? 'bottom-reset' : 'right-reset')}>
            <Button icon type='default' size='default' className='reset-button'
              style={{ borderRadius: config.triggerType === FilterTriggerType.Toggle ? '16px' : null }}
              title={this.props.intl.formatMessage({ id: 'resetAllFilters', defaultMessage: jimuUIMessages.resetAllFilters })}
              aria-label={this.props.intl.formatMessage({ id: 'resetAllFilters', defaultMessage: jimuUIMessages.resetAllFilters })}
              onClick={this.onResetChange}
            >
              <ResetOutlined />
            </Button>
          </div>
        }
      </div>
    )
  }

  onShowPopper = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      popperVersion: !this.state.isOpen ? this.state.popperVersion + 1 : this.state.popperVersion
    })
  }

  onTogglePopper = () => {
    this.setState({
      isOpen: false
    })
    lodash.defer(() => {
      this.widgetIconRef.focus()
    })
  }

  checkIfAnyFiltersApplied = (): boolean => {
    const { omitInternalStyle } = this.props.config
    const filterItems = this.state?.filterItems || this.props.config.filterItems
    const isApplied = (filterItems as unknown as filterItemConfig[]).some((item) => {
      const sqlExprObj = item.isGroup
        ? dataSourceUtils.getSQLExpressionFromGroupSQLExpression(item.sqlExprObjForGroup, this.state.dataSources[item.sqlExprObjForGroup?.[0].dataSourceId])
        : item.sqlExprObj

      if (omitInternalStyle && getTotalClauseNumberByExpression(sqlExprObj) === 1 && getShownClauseNumberByExpression(sqlExprObj) === 1) {
        const useDsId = item.isGroup
          ? this.state.dataSources[item.sqlExprObjForGroup?.[0].dataSourceId]?.id
          : item.useDataSources[0].dataSourceId
        // ds exists, or it hasn't created when widget starts
        return (this.state.dataSources[useDsId]
          ? dataSourceUtils.getArcGISSQL(sqlExprObj, this.state.dataSources[useDsId]).sql
          : sqlExprObj.sql) !== ''
      } else {
        return item.autoApplyWhenWidgetOpen
      }
    })
    return isApplied
  }

  onIsDataSourceNotReady = (dataSourceId: string, dataSourceStatus) => {
    this.setState((state: State) => {
      const isOutPutDs = state.dataSources[dataSourceId]?.getDataSourceJson().isOutputFromWidget
      if (!isOutPutDs) {
        return
      }
      const outputDataSource = Object.assign({}, state.outputDataSourceIsNotReady)
      outputDataSource[dataSourceId] = dataSourceStatus === DataSourceStatus.NotReady
      return { outputDataSourceIsNotReady: outputDataSource }
    })
  }

  onCreateDataSourceCreatedOrFailed = (dataSourceId: string, dataSource: DataSource) => {
    this.setState((state: State) => {
      const newDataSources = Object.assign({}, state.dataSources)
      newDataSources[dataSourceId] = dataSource
      return { dataSources: newDataSources }
    })
  }

  // Only for first time & autoApply option, after all datasources are ready
  applyAutoFiltersAtStart = () => {
    if (this._autoApplyInit) {
      const dsLength = Object.keys(this.state.dataSources).map(() => true).length
      if (dsLength === this.props.useDataSources?.length) {
        setTimeout(() => {
          this.setSqlToAllDs()
          this._autoApplyInit = false
        }, 0)
      }
    }
  }

  render () {
    const { config, icon, label } = this.props
    if (this.state.filterItems.length === 0) {
      return (
        <WidgetPlaceholder
          icon={FilterIcon} widgetId={this.props.id}
          message={this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })}
        />
      )
    }
    return (
      <div className='jimu-widget widget-filter overflow-auto'>
        {
          this.props.useDataSources?.map((useDs, key) => {
            return (
              <FilterItemDataSource
                key={key}
                useDataSource={useDs}
                onIsDataSourceNotReady={this.onIsDataSourceNotReady}
                onCreateDataSourceCreatedOrFailed={this.onCreateDataSourceCreatedOrFailed}
              />
            )
          })
        }
        {
          // Filters & Clauses on Popup are as the same as Block panel.
          config.arrangeType === FilterArrangeType.Popper
            ? <div className='filter-widget-popper'>
              <Badge dot className='m-1' hideBadge={!this.checkIfAnyFiltersApplied()} color='primary'>
                <Button
                  icon size='sm' className='filter-widget-pill h-100'
                  ref={ref => { this.widgetIconRef = ref }}
                  title={label}
                  type='tertiary'
                  onClick={this.onShowPopper}
                  aria-pressed={this.checkIfAnyFiltersApplied()}
                >
                  <Icon
                    icon={typeof icon === 'string' ? icon : (icon as IconResult).svg} size={16}
                    color={typeof icon === 'string' ? '' : (icon as IconResult).properties.color}
                  />
                </Button>
              </Badge>
              {
                this.state.popperVersion > 1 && <Popper
                  open={this.state.isOpen}
                  version={this.state.popperVersion}
                  keepMount
                  toggle={this.onTogglePopper}
                  showArrow
                  modifiers={modifiers}
                  forceLatestFocusElements
                  reference={this.widgetIconRef}
                >
                  <div className='p-2'>
                    {this.getFilterItems(config, FilterArrangeType.Block, false, true)}
                  </div>
                </Popper>
              }
            </div>
            : <div className='w-100 h-100' css={css`max-height: 100vh;`}>
              {this.getFilterItems(config, config.arrangeType, config.wrap)}
            </div>
        }
      </div>
    )
  }
}
