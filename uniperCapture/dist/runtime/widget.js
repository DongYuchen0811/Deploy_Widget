System.register(["jimu-core","jimu-ui","jimu-arcgis","esri/rest/query","esri/rest/support/Query","esri/geometry/SpatialReference"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_query__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_query__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_query__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/brand/widget-survey.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/brand/widget-survey.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 20\"><path fill=\"#000\" d=\"M10.227 13.694 7.211 10.55c-.294-.307-.28-.818.03-1.143.312-.324.802-.339 1.096-.032l2.66 2.774 4.695-4.896c.311-.324.802-.339 1.095-.032.294.306.28.817-.03 1.142l-5.113 5.33a.974.974 0 0 1-1.418 0\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M20 2c0-1.105-.948-2-2.118-2H4.118C2.948 0 2 .895 2 2v2H1a1 1 0 0 0 0 2h1v3H1a1 1 0 1 0 0 2h1v3H1a1 1 0 1 0 0 2h1v2c0 1.105.948 2 2.118 2h13.764c1.17 0 2.118-.895 2.118-2zM3 16v2c0 .552.478 1 1.067 1h13.866c.59 0 1.067-.448 1.067-1V2c0-.552-.478-1-1.067-1H4.067C3.477 1 3 1.448 3 2v2h1a1 1 0 0 1 0 2H3v3h1a1 1 0 1 1 0 2H3v3h1a1 1 0 1 1 0 2z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/uniperCapture/src/runtime/css/style.ts":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/uniperCapture/src/runtime/css/style.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getStyle(theme) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    &.survey123{
        width: 100%;
        height: 100%;
        overflow: auto;

        .title{
            font-weight: bold;
        }

        .survey123__noSurvey{
            width:100%;
            height:100%;
            text-align:center;
        }

        .survey123__webform{
            width:100%;
            height:100%;

            .embed-container {
                position: relative;
                height: 100%;
                // padding-bottom:80%;
                width: 100%;
            }

            .embed-container iframe,
            .embed-container object,
            .embed-container iframe{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0px;
            }
            small{
                position: absolute;
                z-index: 40;
                bottom: 0;
                margin-bottom: -15px;
            }
        }
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/uniperCapture/src/runtime/translations/default.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/uniperCapture/src/runtime/translations/default.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Uniper Capture'
});


/***/ }),

/***/ "./your-extensions/widgets/uniperCapture/src/service/survey123.service.ts":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/uniperCapture/src/service/survey123.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Survey123Service: () => (/* binding */ Survey123Service),
/* harmony export */   survey123Service: () => (/* binding */ survey123Service)
/* harmony export */ });
/**
 * survey123 service
 */
class Survey123Service {
    setQueryObject(obj) {
        const objStr = obj ? obj.survey123 : '';
        const urlString = objStr ? decodeURIComponent(objStr + '') : '';
        const val = this._urlParamToJson(urlString);
        this.queryObj = val;
    }
    /**
     * https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder-Web-Extensions/issues/4659
     * get survey host url from portal's config.js file
     * @param portalUrl
     */
    getSurveyHostUrlFromPortal(portalUrl) {
        portalUrl = portalUrl || 'https://www.arcgis.com';
        // read cache from this.surveyUrlFromPortal
        if (this.surveyUrlFromPortal || this.surveyUrlFromPortal === null) {
            return Promise.resolve(this.surveyUrlFromPortal);
        }
        // read cache from window.esriGeowConfig.surveyUrl
        const esriGeowConfig = window.esriGeowConfig;
        if (esriGeowConfig && esriGeowConfig.surveyUrl) {
            this.surveyUrlFromPortal = esriGeowConfig.surveyUrl;
            return Promise.resolve(this.surveyUrlFromPortal);
        }
        let configJSUrl = '';
        if (!(portalUrl.endsWith('/'))) {
            portalUrl += '/';
        }
        configJSUrl = portalUrl + 'home/js/arcgisonline/config.js';
        // In order to avoid cross domain error, create a script tag to load the config js.
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = configJSUrl;
        const htmlNode = document.documentElement;
        const htmlDir = htmlNode.getAttribute('dir');
        return new Promise((resolve, reject) => {
            script.onload = () => {
                // reset the html direction, see https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder/issues/11310#issuecomment-3061509
                if (htmlNode.getAttribute('dir') !== htmlDir) {
                    htmlNode.setAttribute('dir', htmlDir);
                }
                const cfg = window.esriGeowConfig;
                if (cfg && cfg.surveyUrl) {
                    this.surveyUrlFromPortal = cfg.surveyUrl;
                    resolve(cfg.surveyUrl);
                }
                else {
                    this.surveyUrlFromPortal = null;
                    resolve(null);
                }
            };
            script.onerror = () => {
                if (htmlNode.getAttribute('dir') !== htmlDir) {
                    htmlNode.setAttribute('dir', htmlDir);
                }
                console.log('Failed to get survey url from portal\'s config.js, will fallback to use the default survey123 url.');
                this.surveyUrlFromPortal = null;
                resolve(null);
            };
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
    /**
     * get survey123 host url
     */
    getSurvey123HostUrl() {
        /**
         * Beijing-R-D-Center/ExperienceBuilder/issues/88
         * we need to check url host to see which survey123 host url we will use
         * wabbuild.esri.com > survey123dec.arcgis.com
         * experiencedev.arcgis.com > survey123dev.arcgis.com
         * experienceqa.arcgis.com > survey123qa.arcgis.com
         * experience.arcgis.com > survey123.arcgis.com
         * default > survey123.arcgis.com
         *
         */
        let url = 'https://survey123.arcgis.com';
        // url from portal config.js
        if (this.surveyUrlFromPortal) {
            url = this.surveyUrlFromPortal;
        }
        let env = window.jimuConfig.hostEnv;
        if (this.queryObj && this.queryObj.env) {
            env = this.queryObj.env + '';
            // when the env is a url: refer to: https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder-Web-Extensions/issues/5975#issuecomment-2866368
            if (env.startsWith('http://') || env.startsWith('https://')) {
                return env;
            }
        }
        // if the url mode is like https://survey123${subName}.arcgis.com, will let the env from url work,
        // otherwise, ignore the env from url.
        let isNormalSurveyUrl = true;
        if (url !== 'https://survey123.arcgis.com') {
            const matchRst = url.match(/https:\/\/survey123(.[^\.]*)\.arcgis\.com/);
            isNormalSurveyUrl = !!((matchRst && matchRst.length));
        }
        if (env && env !== 'prd' && env !== 'prod' && isNormalSurveyUrl) {
            url = `https://survey123${env}.arcgis.com`;
        }
        return url;
    }
    /**
    * get the api url
    */
    getSurvey123HostAPIUrl() {
        let url = this.getSurvey123HostUrl() + '/api/jsapi/3.19/'; //  '/share/survey123webform-jsapi.js';
        if (this.queryObj && this.queryObj.jsapi) {
            url = this.getSurvey123HostUrl() + '/api/jsapi/' + this.queryObj.jsapi;
        }
        // only for debugger locally
        // const isDebug: boolean = false;
        // if (isDebug) {
        //   url = `https://nanzhang.arcgis.com:8443/webclient/survey123webform-jsapi.js`;
        // }
        return url;
    }
    /**
     * create survey by survey123 rest api
     * @param title
     * @param tags
     * @param options
     */
    createSurvey(title, tags, commonParams, options) {
        // options
        options = Object.assign({
            snippet: ''
        }, options || {});
        return Promise.resolve(true)
            .then(() => {
            if (!title || !commonParams || !commonParams.token || !commonParams.username) {
                throw new Error('missing title, tags, username or token');
            }
        })
            .then(() => {
            const url = `${this.getSurvey123HostUrl()}/api/survey/create`;
            const params = {
                title: title,
                tags: tags && Array.isArray(tags) ? tags.join(',') : (tags || null),
                snippet: options.snippet,
                thumbnailUrl: options.thumbnailUrl,
                token: commonParams.token,
                username: commonParams.username,
                portalUrl: commonParams.portalUrl || 'https://www.arcgis.com'
            };
            return fetch(url, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(params)
            })
                .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            });
        });
    }
    /**
     * isPortal is to check if the current portalUrl (from config or from url params) is arcgis online portals or not
     */
    isPortal(portalUrl) {
        const arcgisOnlinePortalUrls = ['www.arcgis.com', 'devext.arcgis.com', 'qaext.arcgis.com'];
        // check if the portalUrl is arcgis online url
        const isArcgisOnline = arcgisOnlinePortalUrls.find((url, i) => {
            return portalUrl.includes(url);
        });
        return !isArcgisOnline;
    }
    /**
     * query survey
     * @param commonParams
     * @param options
     * Reminder: if searchSurveyType is 'all-admin', even the isSearchAll is true, the result count still has a limitation: 1000. this is the api's behaviour
     */
    querySurvey(commonParams, options) {
        // options
        options = Object.assign({
            isPublished: false,
            isSearchAll: true,
            surveyClientAPI: null
        }, options || {});
        return Promise.resolve(true)
            .then(() => {
            if (!commonParams || !commonParams.token || !commonParams.username) {
                throw new Error('missing token or username');
            }
        })
            .then(() => {
            const params = {
                isPublished: options.isPublished,
                isSearchAll: options.isSearchAll,
                token: commonParams.token,
                username: commonParams.username,
                portalUrl: commonParams.portalUrl || 'https://www.arcgis.com'
            };
            if (options.searchSurveyType) {
                params.searchSurveyType = options.searchSurveyType;
            }
            if (!options.surveyClientAPI) {
                console.log('Survey client api is not provided.');
                // todo: do we need to request rest api if the js api failed to work?
                return null;
            }
            return options.surveyClientAPI.survey123.searchSurvey(params)
                .then((res) => {
                if (res && res.results) {
                    return res.results;
                }
                throw res;
            });
        });
    }
    /**
     * query others' survey
     * @param commonParams
     * @param options
     * todo: will use survey api instead when the api emplements this feature
     */
    queryOthersSurvey(commonParams, options) {
        return Promise.resolve(true)
            .then(() => {
            if (!commonParams || !commonParams.token || !commonParams.username) {
                throw new Error('missing token or username');
            }
        })
            .then(() => {
            const params = {
                token: commonParams.token,
                username: commonParams.username,
                portalUrl: commonParams.portalUrl || 'https://www.arcgis.com',
                orgId: options.orgId
            };
            let response = null;
            // build query parameter: q
            const q = `((type:Form AND (typekeywords:xForm OR typekeywords:Form)) OR (type:'Code Sample' AND typekeywords:XForms AND tags:'xform')) AND (NOT owner:${params.username}) AND (access:shared OR access:org OR (access:public AND orgid:${params.orgId}) OR access:private)`;
            // get search url
            const searchUrl = `${params.portalUrl}/sharing/rest/search`;
            // search params
            const searchParams = {
                q: q
            };
            return this.searchAGO(searchUrl, searchParams, commonParams)
                .then((res) => {
                response = res;
                // the first 100 surveys
                res.results = (res.results || []).map((item) => {
                    return this.convertItemToSurveyInfo(item, commonParams);
                });
                /**
                 * there is not more searched items
                 * return results
                 */
                if (res.nextStart === -1) {
                    return response;
                }
                /**
                 * recusively search remaing items
                 */
                const promises = [];
                let count = Math.floor(res.total / res.num);
                const remainder = res.total % res.num;
                if (remainder > 0) {
                    count += 1;
                }
                for (let i = 1; i < count; i++) {
                    const params = Object.assign({}, searchParams, {
                        start: (i * res.num) + 1
                    });
                    if (params.start <= res.total) {
                        promises.push(this.searchAGO(searchUrl, params, commonParams));
                    }
                }
                return Promise.all(promises)
                    .then((results) => {
                    if (!results) {
                        throw new Error('something wrong when searchAll');
                    }
                    // the first 100 surveys
                    let items = res.results || [];
                    let nextStart = -1;
                    // the 101st - last surveys
                    results.forEach((result, i) => {
                        // conver the item to survey info(to let it be identical with the data structure returned from survey search api)
                        const surveys = result.results.map((item) => {
                            return this.convertItemToSurveyInfo(item, commonParams);
                        });
                        items = items.concat(surveys);
                        /**
                        * get nextStart in the last result
                        */
                        if (i === results.length - 1) {
                            nextStart = result.nextStart;
                        }
                    });
                    response.nextStart = nextStart;
                    response.results = items;
                    return response;
                });
            });
        })
            .then((response) => {
            return response ? (response.results || []) : [];
        });
    }
    /**
     * search from ago
     * @param searchUrl
     * @param searchParams
     * @param commonParams
     * @returns
     */
    searchAGO(searchUrl, searchParams, commonParams) {
        searchParams = Object.assign({
            num: 100,
            start: 1,
            sortField: 'title',
            sortOrder: 'asc'
        }, searchParams);
        const reuqestParams = Object.assign({}, {
            f: 'json',
            token: commonParams.token
        }, searchParams);
        const requestUrl = `${searchUrl}?${Object.keys(reuqestParams).map((k) => k + '=' + reuqestParams[k]).join('&')}`;
        return fetch(requestUrl, {
            mode: 'cors',
            method: 'GET'
        })
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        });
    }
    convertItemToSurveyInfo(item, params) {
        return {
            created: item.created,
            featureService: null,
            form: null,
            formItemInfo: item,
            id: item.id,
            owner: item.owner,
            report: null,
            snippet: item.snippet,
            tags: item.tags,
            thumbnail: `${params.portalUrl}/sharing/rest/content/items/${item.id}/info/${item.thumbnail}?token=${params.token}`,
            title: item.title
        };
    }
    /**
     * get survey123 designer url
     */
    getSurvey123DesignerUrl(surveyItemId, options) {
        // options
        options = Object.assign({}, options || {});
        let url = `${this.getSurvey123HostUrl()}/surveys/${surveyItemId}/design?embed=exb`;
        if (options.portalUrl && options.portalUrl !== 'https://www.arcgis.com') {
            url += `&portalUrl=${options.portalUrl}`;
        }
        if (this.getSurvey123HostUrl() === 'https://survey123dev.arcgis.com' && (!options.portalUrl || options.portalUrl === 'https://www.arcgis.com')) {
            url += `&portalUrl=${options.portalUrl}`;
        }
        return url;
    }
    /**
     *
     * @param surveyItemId
     * @param options
     */
    getSurvey123WebformUrl(surveyItemId, options) {
        // options
        options = Object.assign({
            queryParams: []
        }, options || {});
        const isDebug = false;
        let url = `${this.getSurvey123HostUrl()}/share/${surveyItemId}`;
        /**
         * debugg only
         */
        if (isDebug) {
            url = `https://nanzhang.arcgis.com:8443/webclient/?appid=${surveyItemId}`;
        }
        if (options.queryParams.length > 0) {
            url += `${(isDebug) ? '&' : '?'}${options.queryParams.join('&')}`;
        }
        return url;
    }
    /**
     * flat questions, move the questions out if they are in the group.
     * ignore repeat questions until we plan to support it.
     */
    flatQuestions(questions) {
        let result = [];
        questions.forEach((ques) => {
            // single question
            if (!ques.questions) {
                result.push(ques);
            }
            else if (ques.type !== 'esriQuestionTypeRepeat') {
                if (ques.type === 'esriQuestionTypeAddress') {
                    result.push(ques);
                }
                result = result.concat(this.flatQuestions(ques.questions));
            }
        });
        return result;
    }
    /**
     * Deprecated
     * get survey question fields
     * @param surveyItemId
     * @param commonParams
     */
    getSurveyQuestionFields(surveyItemId, commonParams) {
        return Promise.resolve(true)
            .then(() => {
            if (!surveyItemId || !commonParams || !commonParams.token) {
                throw new Error('missing surveyItemId or token');
            }
        })
            .then(() => {
            let url = `${this.getSurvey123HostUrl()}/api/survey/${surveyItemId}/form`;
            const params = {
                token: commonParams.token,
                portalUrl: commonParams.portalUrl
            };
            url = `${url}?${Object.keys(params).map((k) => k + '=' + params[k]).join('&')}`;
            return fetch(url, {
                mode: 'cors',
                method: 'GET'
            })
                .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            });
        });
    }
    /**
     * for multilingual survey, the label is an object like:
     * {
     *    en: 'English label',
     *    'zh-cn': 'Chinese label'
     * }
     * @param question
     * @returns
     */
    getQuesLabelString(question, options) {
        var _a;
        options = Object.assign({
            locales: [],
            currentLocale: 'en'
        }, options || {});
        if (!question || !question.label) {
            return '';
        }
        let label = question.label;
        if (typeof label === 'object') {
            /**
             * get default locale
             */
            let defaultLocale = Object.keys(options.locales || []).find((localConfig) => {
                return (localConfig.isDefault + '') === 'true';
            });
            if (defaultLocale) {
                defaultLocale = defaultLocale.code || 'en';
            }
            /**
             * get the matched locale
             */
            const localesCodes = (_a = options.locales) === null || _a === void 0 ? void 0 : _a.map((locale) => {
                return (locale.code + '').trim();
            });
            const matchedLocale = this._findMatchedLocale(options.currentLocale, localesCodes) || defaultLocale;
            if (matchedLocale && matchedLocale in question.label) {
                label = question.label[matchedLocale];
            }
            else {
                const firstLocale = Object.keys(question.label)[0];
                label = firstLocale ? question.label[firstLocale] : '';
            }
        }
        return label;
    }
    /**
     * parse a url parameter to json, if the parameter string is simple, keep it as string
     * @param str  eg: 0.q2:pie;1.q3:{"type":"map","basemapItemId":"{itemId}"};2.q11:{"type":"wordCloud","show":"response"}
     * @param urlKey
     */
    _urlParamToJson(str) {
        if (!str) {
            return null;
        }
        str = str + '';
        const subObjs = str.split(';');
        if (subObjs.length < 2 && str.split(':').length < 2) {
            // this url parameter has no sub parameters
            if (str.split(',').length > 1) {
                // consider it as an array
                return str.split(',');
            }
            else {
                return str;
            }
        }
        else {
            const obj = {};
            subObjs.forEach((subStr) => {
                const keyVals = (subStr + '').split(':');
                if (keyVals.length > 1) {
                    const key = keyVals[0];
                    let val = (Array.isArray(keyVals.slice(1)) ? keyVals.slice(1) : []).join(':');
                    if (val.length && val[0] === '{') {
                        // try to parse it to a json
                        val = this._stringToJson(val);
                    }
                    if (typeof val === 'string') {
                        if (val.split(',').length > 1) {
                            // consider it as an array
                            val = val.split(',');
                        }
                    }
                    obj[key] = val;
                }
            });
            return obj;
        }
    }
    /**
     * find the matched locale from locales array by the given localeCode
     * @param localCode
     * @param locals
     */
    _findMatchedLocale(localeCode, locales) {
        if (!locales || !locales.length || !localeCode) {
            return null;
        }
        /**
         * find the code which equals to localeCode
         */
        if (locales.indexOf(localeCode) >= 0) {
            return localeCode;
        }
        /**
         * find the code that matchs partially
         * ie: if localeCode is zh-tw, will match 'zh' if the 'zh' is in locales array
         * if localeCode is zh, will match 'zh-tw' if the 'zh-tw' is in locales array
         * if localeCode is zh-tw, will match 'zh-cn' if the 'zh-ch' is in locales array and 'zh-tw' is not in the locales array
         */
        const mainLocale = localeCode.split('-')[0];
        if (locales.indexOf(mainLocale) >= 0) {
            return mainLocale;
        }
        else {
            return locales.find((code) => {
                return code.startsWith(`${mainLocale}-`);
            });
        }
    }
    _stringToJson(str) {
        let result = str;
        try {
            result = JSON.parse(str);
        }
        catch (e) {
            result = str;
        }
        return result;
    }
}
const survey123Service = new Survey123Service();


/***/ }),

/***/ "esri/geometry/SpatialReference":
/*!*************************************************!*\
  !*** external "esri/geometry/SpatialReference" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__;

/***/ }),

/***/ "esri/rest/query":
/*!**********************************!*\
  !*** external "esri/rest/query" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_query__;

/***/ }),

/***/ "esri/rest/support/Query":
/*!******************************************!*\
  !*** external "esri/rest/support/Query" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/uniperCapture/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _service_survey123_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/survey123.service */ "./your-extensions/widgets/uniperCapture/src/service/survey123.service.ts");
/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style */ "./your-extensions/widgets/uniperCapture/src/runtime/css/style.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/uniperCapture/src/runtime/translations/default.ts");
/* harmony import */ var jimu_icons_svg_outlined_brand_widget_survey_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/svg/outlined/brand/widget-survey.svg */ "./jimu-icons/svg/outlined/brand/widget-survey.svg");
/* harmony import */ var jimu_icons_svg_outlined_brand_widget_survey_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_brand_widget_survey_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var esri_rest_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/rest/query */ "esri/rest/query");
/* harmony import */ var esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/rest/support/Query */ "esri/rest/support/Query");
/* harmony import */ var esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/geometry/SpatialReference */ "esri/geometry/SpatialReference");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */










/**
 * survey123 widget
 */
class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    // private _extentWatch: __esri.WatchHandle;
    // private _cachedTimeStamp: number = this.props.config.timestamp;
    constructor(props) {
        super(props);
        this.API = {
            Survey123WebForm: null
        };
        // the web app status
        // todo: need to change the default webappStatus to: 'loading'
        this.webappStatus = 'normal';
        // showDiffLog = true;
        this.state = {
            featureLayerViewDS: null,
            selectRecord: null
        };
        this._dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        this._isMapViewAddedClickEvent = false;
        /**
         * prepare:
         * get survey123 host url from portal's config.js
         * load survey123 js api
         */
        this.prepare = () => {
            const portalUrl = this.props.config.portalUrl || this.props.portalUrl || 'https://www.arcgis.com';
            const isPortal = !(jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.isAGOLDomain(portalUrl));
            return Promise.resolve(true)
                .then(() => {
                if (isPortal) {
                    return _service_survey123_service__WEBPACK_IMPORTED_MODULE_3__.survey123Service.getSurveyHostUrlFromPortal(portalUrl);
                }
                return true;
            })
                /**
                 * load survey client api
                 */
                .then(() => {
                return this.loadSurveyAPI();
            });
        };
        // load survey api
        this.loadSurveyAPI = () => {
            const apiUrl = _service_survey123_service__WEBPACK_IMPORTED_MODULE_3__.survey123Service.getSurvey123HostAPIUrl();
            if (!this.API.Survey123WebForm) {
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule(apiUrl)
                    .then((data) => {
                    if (data && data.Survey123WebForm) {
                        this.API = data;
                    }
                    else {
                        this.API.Survey123WebForm = data;
                    }
                    return this.API.Survey123WebForm;
                });
            }
            else {
                return Promise.resolve(this.API.Survey123WebForm);
            }
        };
        this.updateDomId = () => {
            const randomId = ((Math.random() * 1000000) | 0).toString();
            this.domId = 'survey_container_' + this.props.id + '_' + randomId;
            return this.domId;
        };
        /**
         * isDsConfigured
         */
        this.isDsConfigured = () => {
            const mode = this.props.config.mode || 'new';
            if (this.props.useDataSources &&
                this.props.useDataSources.length === 1 && (this.props.config.activeLinkData || mode === 'edit' || mode === 'view')) {
                return true;
            }
            return false;
        };
        /**
         * do feature layer query to get layer's features in the map extent
         */
        this.doQuery = (extent) => {
            const q = {
                geometry: extent,
                spatialRelationship: 'intersects',
                returnGeometry: true
            };
            if (this.getUsedDataSource().getStatus() !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loading) {
                this.getUsedDataSource().load(q);
            }
        };
        /**
         * data source renderer
         */
        // dataRender = (ds: DataSource) => {
        //   /**
        //    * if mapView datasource
        //    */
        //   if (ds.type === ArcGISDataSourceTypes.WebMap) {
        //     this.mapViewHandler(ds)
        //   }
        //   /**
        //    * if featurelayerView datasource
        //    */
        //   if (ds.type === DataSourceTypes.FeatureLayer) {
        //     this.featureLayerViewHandler(null, ds)
        //   }
        //   return <div></div>
        // }
        /**
         * check the webform option change
         */
        this.checkWebformOptionChanged = (newOption) => {
            const cachedOption = this._formOption;
            if (Object.is(cachedOption, newOption)) {
                return false;
            }
            if (!cachedOption && newOption) {
                return true;
            }
            if (cachedOption.itemId !== newOption.itemId ||
                cachedOption.surveyItemId !== newOption.surveyItemId ||
                cachedOption.portalUrl !== newOption.portalUrl ||
                cachedOption.token !== newOption.token ||
                cachedOption.surveyStatusCode !== newOption.surveyStatusCode ||
                (cachedOption.mode || 'new') !== (newOption.mode || 'new') ||
                ((newOption.mode === 'edit' || newOption.mode === 'view') && this._cachedUniqueId !== this._currentGlobalId) ||
                (cachedOption.hideElements ? cachedOption.hideElements.asMutable() : []).sort().join(',') !== (newOption.hideElements ? newOption.hideElements.asMutable() : []).sort().join(',')) {
                return true;
            }
            return false;
        };
        /**
         * update style
         */
        this.updateStyle = () => {
            // only for safari
            const ua = window.jimuUA.browser ? (window.jimuUA.browser.name + '').toLowerCase() : '';
            if (ua === 'safari') {
                const formNode = document.querySelector('#' + this.domId);
                // eslint-disable-next-line
                // @ts-ignore
                formNode.style.cssText = 'overflow-y: auto;';
                const rootNode = formNode.closest('.widget-content');
                // eslint-disable-next-line
                // @ts-ignore
                rootNode.style.cssText = 'position: absolute;';
            }
        };
        /**
         * get selected record from the data source
         * if the geometry spatial reference is not web mercator or WGS84,
         * send a request to get a new geometry by specifiy the returned wkid as 4326
         */
        this.getSelectedDsRecord = (ds) => {
            var _a;
            if (!ds) {
                return Promise.resolve(null);
            }
            const record = ds.getSelectedRecords();
            if (!record || !record.length || !(record[0].feature)) {
                return Promise.resolve(null);
            }
            const feature = record[0].feature;
            /**
             * #18266, if there are fields missing, need to query for all fields
             */
            let hasMissingFields = false;
            const mode = this.props.config.mode || 'new';
            let requiredFields = [];
            if (mode === 'new' && this.props.config.activeLinkData && this.props.config.fieldQuestionMapping) {
                this.props.config.fieldQuestionMapping.forEach((item) => {
                    requiredFields.push(item.field);
                });
            }
            else if (mode === 'view' || mode === 'edit') {
                const globalIdField = this.getUniqueFieldName();
                requiredFields = globalIdField ? [globalIdField] : [];
            }
            if (feature.attributes) {
                const currentFields = Object.keys(feature.attributes);
                hasMissingFields = requiredFields.find((field) => {
                    return !(currentFields.includes(field));
                });
            }
            if (!hasMissingFields) {
                let sr = (_a = feature.geometry) === null || _a === void 0 ? void 0 : _a.spatialReference;
                if (!sr) {
                    return Promise.resolve(feature);
                }
                sr = new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_9__["default"](typeof sr.toJSON === 'function' ? sr.toJSON() : sr);
                // #14676, for polygon/polyline, if the geometry is web mercator, we still need to send request
                if (sr.isWGS84) {
                    return Promise.resolve(feature);
                }
                // point type and the gemetry is AGSJSAPI-type and the longitude/latitude is existing
                if ((feature.geometry.longitude || feature.geometry.longitude === 0) && (feature.geometry.latitude || feature.geometry.latitude === 0)) {
                    return Promise.resolve(feature);
                }
            }
            // the spatial reference is not web mercator or WGS84, send a request to get a converted WGS84 geoemtry
            if (!ds.url) {
                return Promise.resolve(feature);
            }
            const idField = ds.getIdField() || 'objectid';
            const queryOption = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_8__["default"]({
                where: `${idField} = ${feature.attributes[idField]}`,
                outFields: ['*'],
                returnGeometry: true,
                outSpatialReference: new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_9__["default"]({ wkid: 4326 })
            });
            return esri_rest_query__WEBPACK_IMPORTED_MODULE_7__["default"].executeQueryJSON(ds.url, queryOption).then((results) => {
                if (results.features && results.features[0]) {
                    return results.features[0];
                }
                return feature;
            });
        };
        this.onDataSourceCreated = () => {
        };
        this.onDataSourceInfoChange = () => {
            const dataSource = this._dsManager.getDataSource(this.props.useDataSources[0].dataSourceId);
            if (dataSource) {
                // call the sync function getSelectedRecords here to detect whether need to send feature to survey
                const record = dataSource.getSelectedRecords();
                if (record && record.length) {
                    const feature = record[0].feature;
                    const mode = this.props.config.mode || 'new';
                    const uniqueId = this.getFeatureUniqueId(feature, mode === 'new');
                    if (!uniqueId || uniqueId !== this._cachedUniqueId) {
                        // #5699, if the source layer is scene layer, it's not necessary to send request to get geometry with specified wkid
                        const isSceneLayer = (dataSource.type + '').toUpperCase() === 'SCENE_LAYER';
                        if (isSceneLayer) {
                            this.featureLayerViewHandler(feature);
                        }
                        else {
                            // call the async function getSelectedDsRecord here because maybe a new request is needed
                            this.getSelectedDsRecord(dataSource).then((feature) => {
                                this.featureLayerViewHandler(feature);
                            });
                        }
                    }
                }
            }
        };
        this.getSelectedFeatureDsId = () => {
            let selectedFeatureDsId;
            const dataSource = this._dsManager.getDataSource(this.props.useDataSources[0].dataSourceId);
            if (dataSource) {
                const rec = dataSource.getSelectedRecords();
                if (rec.length > 0) {
                    const feature = rec[0].feature;
                    selectedFeatureDsId = feature.layer.dataSourceId;
                }
            }
            return selectedFeatureDsId !== null ? selectedFeatureDsId : null;
        };
        this.openRatingWidget = () => {
            this.refreshMap();
            this.openAnotherWidget();
            this.closeCurrentWidget();
        };
        this.refreshMap = () => __awaiter(this, void 0, void 0, function* () {
            const [Map] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)(['esri/Map']);
            const map = new Map({
                layers: this.props.jimuMapView.view.map.layers
            });
            this.props.jimuMapView.updateMap(map);
        });
        this.openAnotherWidget = () => {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch({
                type: 'OPEN_WIDGET',
                widgetId: 'widget_43'
            });
        };
        this.closeCurrentWidget = () => {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch({
                type: 'CLOSE_WIDGET',
                widgetId: this.props.id
            });
        };
        this.getClientId();
        /**
         * listen survey123 webform event
         */
        this.listenSurvey123WebformEvent();
    }
    componentDidMount() {
        _service_survey123_service__WEBPACK_IMPORTED_MODULE_3__.survey123Service.setQueryObject(this.props.queryObject);
        this.prepare(); //this.loadSurveyAPI();
    }
    // listen the map click
    // onActiveViewChange = (jimuMapView: JimuMapView) => {
    //   if (jimuMapView && jimuMapView.view) {
    //     this._mapView = jimuMapView.view as __esri.MapView
    //     this._mapView.when(() => {
    //       this._mapView.on('click', this.onMapClick)
    //     })
    //   }
    // }
    // event listener of the click event of map view
    // onMapClick = (screenPoint) => {
    //   this._mapView.hitTest(screenPoint).then(response => {
    //     if (response.results.length) {
    //       const graphicResults = response.results.filter(r => r.type === 'graphic') as __esri.GraphicHit[]
    //       graphicResults.forEach(result => {
    //         const graphic = result.graphic
    //         const layerId = graphic.layer.id
    //         if (this.props.useDataSources[0].rootDataSourceId + '-' + layerId !== this.props.useDataSources[0].dataSourceId) {
    //           return
    //         }
    //         const layer = graphic.layer as __esri.FeatureLayer
    //         const objectIdField = layer.objectIdField || 'objectid'
    //         const query = new Query({
    //           where: `${objectIdField} = ${graphic.attributes[objectIdField]}`,
    //           outFields: ['*'],
    //           returnGeometry: true,
    //           outSpatialReference: new SpatialReference({ wkid: 4326 })
    //         })
    //         layer.queryFeatures(query).then((results) => {
    //           if (results.features && results.features[0]) {
    //             this.featureLayerViewHandler(results.features[0])
    //           }
    //         })
    //       })
    //     }
    //   })
    // }
    /**
     * get used data source
     */
    getUsedDataSource() {
        const dataSources = this.props.useDataSources;
        let ds = null;
        if (dataSources && dataSources.length > 0) {
            const dataSourceId = dataSources[0].dataSourceId;
            ds = this._dsManager.getDataSource(dataSourceId);
        }
        return ds;
    }
    /**
     * get globalId field name from the data source layer
     * if no globalId field, fallback to the object id field
     */
    getUniqueFieldName(fallbackToObjectId) {
        const ds = this.getUsedDataSource();
        const layer = ds ? ds.getLayerDefinition() : null;
        if (!layer) {
            return '';
        }
        const globalIdField = layer.globalIdField;
        const objectIdField = layer.objectIdField;
        if (globalIdField) {
            return globalIdField;
        }
        else if (fallbackToObjectId) {
            return objectIdField;
        }
    }
    /**
     * map view handler
     */
    mapViewHandler(ds) {
        if (ds && ds.view && !this._isMapViewAddedClickEvent) {
            /**
             * add click event on the map view
             */
            const mapView = ds.view;
            mapView.on('click', (e) => {
                const mapPoint = mapView.toMap({ x: e.x, y: e.y });
                if (mapPoint) {
                    const lat = mapPoint.latitude;
                    const lng = mapPoint.longitude;
                    this.postMessageToSurvey123Webform({
                        event: 'survey123:onDrawEnd',
                        data: {
                            x: lng,
                            y: lat
                        }
                    });
                }
            });
            this._isMapViewAddedClickEvent = true;
        }
    }
    /**
     * feature layer view handler
     */
    featureLayerViewHandler(graphic, ds) {
        return Promise.resolve(true)
            .then(() => {
            if (graphic) {
                return graphic;
            }
            if (ds && ds.getSelectedRecords()) {
                return this.getSelectedDsRecord(ds);
            }
        })
            .then((feature) => {
            if (!feature) {
                return;
            }
            const mode = this.props.config.mode || 'new';
            /**
             * 'new' mode
             */
            // let feature = (selectedRecords[0] as FeatureDataRecord).feature;
            if (mode === 'new' && this.props.config.activeLinkData && this.props.config.fieldQuestionMapping) {
                const attr = feature.attributes || {}; // the attribute of the selected record
                const dataParams = {};
                let geoParams = null;
                this.props.config.fieldQuestionMapping.forEach((item) => {
                    const field = item.field;
                    const questionName = item.question;
                    if (field === 'geometry') {
                        const geometry = feature.geometry;
                        // GeoPoint
                        if (geometry && (geometry.y || geometry.y === 0) && (geometry.x || geometry.x === 0)) {
                            geoParams = geometry;
                            if ((geometry.longitude || geometry.longitude === 0) && (geometry.latitude || geometry.latitude === 0)) {
                                geoParams = {
                                    x: geometry.longitude,
                                    y: geometry.latitude
                                };
                            }
                            /**
                             * note: we shouldn't check "geometry.type" here,
                             * because sometimes the selected feature from dataSource is not an JSAPI-type geometry,
                             * and the geometry has no type property(https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm)
                             */
                        }
                        else if (geometry && geometry.paths && geometry.paths.length) {
                            // Polyline
                            geoParams = geometry;
                        }
                        else if (geometry && geometry.rings && geometry.rings.length) {
                            // Polygon
                            geoParams = geometry;
                        }
                    }
                    else {
                        const val = attr[field];
                        dataParams[questionName] = val || '';
                        // dataParams.push(`field:${questionName}=${val || ''}`);
                    }
                });
                this.sendValueFromMapToSurvey(dataParams, geoParams);
                // this._cachedUniqueId = this._currentGlobalId
                const uniqueId = this.getFeatureUniqueId(feature, true);
                if (uniqueId) {
                    this._cachedUniqueId = uniqueId;
                }
            }
            else if (mode === 'view' || mode === 'edit') {
                this._currentGlobalId = '';
                const globalId = this.getFeatureUniqueId(feature);
                if (globalId) {
                    this._currentGlobalId = globalId;
                }
                else {
                    console.log('The global id field is not existing in the source layer');
                    return;
                }
                this.renderDS(); // refresh the webapp
                this._cachedUniqueId = this._currentGlobalId;
            }
        });
    }
    sendValueFromMapToSurvey(dataParams, geoParams) {
        if (this.webappStatus === 'loading') {
            // skip
        }
        else if (this.webappStatus === 'normal') {
            if (!this.webform) {
                return;
            }
            if (dataParams) {
                // call survey jsapi to change value on-fly
                this.webform.setQuestionValue(dataParams);
            }
            if (geoParams) {
                if (geoParams.toJSON) {
                    geoParams = geoParams.toJSON();
                }
                this.webform.setGeometry(geoParams);
            }
        }
        else if (this.webappStatus === 'thankyouScreen') {
            const options = this.buildWebFormConfig({
                setQuestionValue: dataParams,
                setGeometry: geoParams
            });
            this.createWebForm(options);
        }
    }
    /**
     * listen survey123 webform event by iframe message
     */
    listenSurvey123WebformEvent() {
        const eventHandler = (evt) => {
            if (evt && evt.data) {
                let payload;
                try {
                    if (typeof evt.data === 'string') {
                        payload = JSON.parse(evt.data);
                    }
                    else if (evt.data && evt.data.payload) {
                        if (typeof evt.data.payload === 'string') {
                            payload = JSON.parse(evt.data.payload);
                        }
                        else {
                            payload = evt.data.payload;
                        }
                    }
                    else {
                        payload = evt.data;
                    }
                }
                catch (err) {
                    console.error(err);
                }
                // console.log(payload)
                const event = payload.event;
                const data = payload.data;
                if (event === 'survey123:onDrawPoint') {
                    this.onDrawPoint(data);
                }
                if (event === 'survey123:onFormLoaded') {
                    if (event === 'survey123:onFormLoaded' && payload.contentHeight) {
                        /**
                         * set iframe height
                         */
                        // this.iframeContainer.style.height = `${payload.contentHeight - 50}px`;
                        // this.iframeContainer.style['padding-bottom'] = 'auto';
                    }
                }
                if (event === 'survey123:onSubmitted') {
                    console.log('survey123:onSubmitted!', data);
                }
            }
        };
        if (window.addEventListener) {
            window.addEventListener('message', eventHandler, false);
        }
        else {
            // eslint-disable-next-line
            // @ts-ignore
            window.attachEvent('onmessage', eventHandler);
        }
    }
    /**
     * get client id (for webform js api)
     */
    getClientId() {
        var _a, _b;
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        this._clientId = '';
        // should we send client id to webform id when the clientId is 'experienceBuilder'?
        if (session && session.clientId) {
            // if (session && session.clientId && session.clientId !== 'experienceBuilder') {
            this._clientId = session.clientId;
        }
        else if ((_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.clientId) {
            this._clientId = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.attributes.clientId;
        }
    }
    /**
     * on draw point
     */
    onDrawPoint(data) {
        console.log('start draw point');
        if (this._mapViewDSFromFeatureLayerView) {
            this.mapViewHandler(this._mapViewDSFromFeatureLayerView);
        }
    }
    /**
     * post message to survey123 webform
     */
    postMessageToSurvey123Webform(payload) {
        if (this.survey123webform && this.survey123webform.contentWindow) {
            this.survey123webform.contentWindow.postMessage(JSON.stringify(payload), '*');
        }
        else {
            console.log('cannot find survey123webform iframe contentWindow!');
        }
    }
    getFeatureUniqueId(feature, fallbackToObjectId) {
        if (!feature) {
            return null;
        }
        const attr = feature.attributes || {}; // the attribute of the selected record
        const fieldName = this.getUniqueFieldName(fallbackToObjectId);
        if (fieldName) {
            return attr[fieldName];
        }
        else {
            return null;
        }
    }
    /**
     * create/update webform
     * @param options
     */
    createWebForm(options) {
        const formNode = document.querySelector('#' + this.domId);
        if (formNode) {
            document.querySelector('#' + this.domId).innerHTML = ''; // clear the webform and reload
            this.webform = null;
        }
        this.webappStatus = 'loading';
        this.webform = new this.API.Survey123WebForm(options);
    }
    /**
     * build config for survey jsapi
     */
    buildWebFormConfig(postProcess) {
        const config = this.props.config;
        const option = {
            clientId: this._clientId || 'survey123hub',
            container: this.domId || this.updateDomId(),
            itemId: config.surveyItemId,
            // portalUrl: 'https://devext.arcgis.com',
            // token: '',
            // hideElements: ['navbar'],
            // autoRefresh: 3,
            // eslint-disable-next-line
            isDebugMode: 'production' !== 'production'
            // defaultValue: {
            //   'field_1': 'werewrwewer'
            // },
        };
        // portal url
        const portalUrl = config.portalUrl || this.props.portalUrl || 'https://www.arcgis.com';
        option.portalUrl = portalUrl;
        // token
        const token = this.props.token;
        if (token) {
            option.portalUrl = portalUrl;
            option.token = token;
        }
        // autoRefresh
        const originExbVersion = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.originExbVersion;
        const isOldVersion = jimu_core__WEBPACK_IMPORTED_MODULE_0__.semver.lt(originExbVersion, window.jimuConfig.isInPortal ? '1.8.0' : '1.9.0');
        if (isOldVersion) {
            option.autoRefresh = 3;
        }
        /**
         * hide url params
         */
        const hides = config.hides || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(['navbar', 'header', 'description', 'footer', 'theme']);
        if (hides.length > 0) {
            option.hideElements = hides;
        }
        /**
         * default value
         */
        const defaultValue = config.defaultValue;
        if (defaultValue && typeof defaultValue === 'object' && defaultValue !== null && defaultValue !== undefined) {
            option.defaultValue = defaultValue;
        }
        /**
         * mode: edit/view
         */
        if (config.mode === 'edit' || config.mode === 'view') {
            option.mode = config.mode;
            option.globalId = this._currentGlobalId || '';
        }
        // surveyStatusCode will change after survey republished
        const code = this.props.stateProps ? this.props.stateProps.surveyStatusCode : 0;
        if (code) {
            option.surveyStatusCode = code;
        }
        /**
         * add event listener, all the event listener is to detect the current webapp status
         * https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder-Web-Extensions/issues/4092
         */
        option.onFormLoaded = (data) => {
            this.webappStatus = 'normal';
            if (postProcess) {
                this.sendValueFromMapToSurvey(postProcess.setQuestionValue, postProcess.setGeometry);
            }
            else if (this.webappStatus === 'normal') {
                /**
                 * After webapp loaded, if the current linked data source has selection, send the selection records from map to survey
                 * https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder-Web-Extensions/issues/10494
                 */
                const linkedDataSource = this.getUsedDataSource();
                if (linkedDataSource) {
                    this.featureLayerViewHandler(null, linkedDataSource);
                }
            }
        };
        option.onFormSubmitted = (data) => {
            this.webappStatus = 'thankyouScreen';
            /**
             * https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder-Web-Extensions/issues/13375
             */
            const dataSource = this.getUsedDataSource();
            if (dataSource) {
                dataSource.addVersion();
            }
        };
        option.onFormFailed = (err) => {
            this.webappStatus = 'error';
        };
        return option;
    }
    /**
     * get webform url
     */
    getWebformUrl() {
        const config = this.props.config;
        /**
         * params
         */
        const surveyItemId = config.surveyItemId;
        const portalUrl = config.portalUrl || this.props.portalUrl || 'https://www.arcgis.com';
        let webformUrl = null;
        if (surveyItemId) {
            /**
           * url params
           */
            const urlParams = [];
            /**
             * portalUrl
             */
            if (portalUrl !== 'https://www.arcgis.com') {
                urlParams.push(`portalUrl=${portalUrl}`);
            }
            if (_service_survey123_service__WEBPACK_IMPORTED_MODULE_3__.survey123Service.getSurvey123HostUrl() === 'https://survey123dev.arcgis.com' && portalUrl === 'https://www.arcgis.com') {
                urlParams.push(`portalUrl=${portalUrl}`);
            }
            /**
             * embed url params
             */
            let embeds = config.embeds || []; // || ['fullScreen', 'onSubmitted', 'associatedMap'];
            if (!embeds.includes('jsapi')) {
                embeds = embeds.concat(['jsapi']); // from 3.7, we must to add embed=jsapi to let postMessage: setParams work
            }
            if (!embeds.includes('onSubmitted')) {
                embeds = embeds.concat(['onSubmitted']);
            }
            if (embeds.length > 0) {
                urlParams.push(`embed=${embeds.join(',')}`);
            }
            /**
             * hide url params
             */
            const hides = config.hides || ['navbar', 'header', 'description', 'footer', 'theme'];
            if (hides.length > 0) {
                urlParams.push(`hide=${hides.join(',')}`);
            }
            /**
             * default value
             */
            const defaultValue = config.defaultValue;
            if (defaultValue && typeof defaultValue === 'object' && defaultValue !== null && defaultValue !== undefined) {
                Object.keys(defaultValue).forEach((key) => {
                    urlParams.push(`field:${key}=${defaultValue[key]}`);
                });
            }
            /**
             * open mode
             */
            const open = config.open || 'web';
            const openWhiteLists = ['web', 'menu', 'native'];
            if (open && open !== 'web' && openWhiteLists.includes(open)) {
                urlParams.push(`open=${open}`);
            }
            /**
             * token
             * we can add token in url params to avoid login in survey123 webform
             * TODO:
             * need to ask Junshan how to get user token in the widget
             */
            const token = this.props.token;
            if (token) {
                urlParams.push(`token=${token}`);
            }
            /**
             * need to set version >=3.2 to use hide and embed params
             */
            // urlParams.push('version=latest');
            /**
             * add autoRefresh=3
             * to auto refresh in 3s after submit
             */
            urlParams.push('autoRefresh=3');
            /**
             * add timestamp randon params to ensure the iframe can refresh correctly
             * only when timestamp is different
             */
            // let configTimestamp = config.timestamp;
            // if (configTimestamp && this._cachedTimeStamp !== configTimestamp) {
            //   this._cachedTimeStamp = configTimestamp;
            // }
            // urlParams.push(`timestamp=${this._cachedTimeStamp}`);
            /**
             * webform url
             */
            webformUrl = _service_survey123_service__WEBPACK_IMPORTED_MODULE_3__.survey123Service.getSurvey123WebformUrl(surveyItemId, {
                queryParams: urlParams
            });
        }
        return webformUrl;
    }
    /**
     * render ds
     */
    renderDS() {
        const { id } = this.props;
        const dataSource = this._dsManager.getDataSource(this.props.useDataSources[0].dataSourceId);
        let useDataSource = null;
        /**
         * because we're now calling the survey jsapi to create/updat the survey webform
         * we need to detect webform option change
         * if the the surveyId/hideElements/token/portalUrl is changed, we should recreate the webform
         * if the default value changed, or the entire option is not changed at all, do not recreate the webform
         */
        let dsId = null;
        let rootDsId = null;
        const options = this.buildWebFormConfig();
        if (this.isDsConfigured()) {
            /**
             * get used data source
             */
            dsId = this.props.useDataSources[0].dataSourceId;
            rootDsId = this.props.useDataSources[0].rootDataSourceId;
            useDataSource = this.props.useDataSources[0];
        }
        const needRecreateWebform = this.checkWebformOptionChanged(options);
        this._formOption = options;
        const webformUrl = this.getWebformUrl();
        this.prepare().then(() => {
            if (webformUrl && (!this.webform || needRecreateWebform)) {
                this.createWebForm(options);
                this.updateStyle();
                return true;
            }
        });
        if (dsId && rootDsId && this.isDsConfigured()) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { widgetId: id, useDataSource: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDataSource), onDataSourceCreated: this.onDataSourceCreated, onDataSourceInfoChange: this.onDataSourceInfoChange });
            // return <DataSourceComponent useDataSource={this.props.useDataSources[0]}>
            //   {
            //     this.dataRender
            //   }
            // </DataSourceComponent>
            // return <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.onActiveViewChange} ></JimuMapViewComponent>
        }
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null);
    }
    /**
     * render
     */
    render() {
        _service_survey123_service__WEBPACK_IMPORTED_MODULE_3__.survey123Service.setQueryObject(this.props.queryObject);
        const webformUrl = this.getWebformUrl();
        // let options = this.buildWebFormConfig();
        let result;
        /**
         * if no webformUrl
         */
        if (!webformUrl) {
            result = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "survey123__noSurvey" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.WidgetPlaceholder, { icon: (jimu_icons_svg_outlined_brand_widget_survey_svg__WEBPACK_IMPORTED_MODULE_6___default()), message: this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"]._widgetLabel }), widgetId: "" }));
        }
        else {
            if (!this.domId) {
                this.updateDomId();
            }
            result = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "survey123__webform" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "embed-container", id: this.domId }));
        }
        /**
         * html
         */
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,_css_style__WEBPACK_IMPORTED_MODULE_4__.getStyle)(this.props.theme), className: "survey123" },
            result,
            //this.renderLayout()
            this.renderDS()));
    }
    renderLayout() {
        const useDataSourceId = this.props.useDataSources[0].dataSourceId;
        const selectedFeatureDsId = this.getSelectedFeatureDsId();
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, useDataSourceId === selectedFeatureDsId ? this.renderDS() : selectedFeatureDsId));
    }
}
Widget.mapExtraStateProps = (state) => {
    return {
        queryObject: state.queryObject
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy91bmlwZXJDYXB0dXJlL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkU7QUFFdEUsU0FBUyxRQUFRLENBQUUsS0FBdUI7SUFDL0MsT0FBTyw4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNUO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERCxpRUFBZTtJQUNiLFlBQVksRUFBRSxnQkFBZ0I7Q0FDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOEJEOztHQUVHO0FBQ0ksTUFBTSxnQkFBZ0I7SUFHcEIsY0FBYyxDQUFFLEdBQUc7UUFDeEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQy9ELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRztJQUNyQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUEwQixDQUFFLFNBQWlCO1FBQ2xELFNBQVMsR0FBRyxTQUFTLElBQUksd0JBQXdCO1FBQ2pELDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbEUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRCxDQUFDO1FBRUQsa0RBQWtEO1FBQ2xELE1BQU0sY0FBYyxHQUFJLE1B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cmFuZC93aWRnZXQtc3VydmV5LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdW5pcGVyQ2FwdHVyZS9zcmMvcnVudGltZS9jc3Mvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3VuaXBlckNhcHR1cmUvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3VuaXBlckNhcHR1cmUvc3JjL3NlcnZpY2Uvc3VydmV5MTIzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2VcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9xdWVyeVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdW5pcGVyQ2FwdHVyZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMTAuMjI3IDEzLjY5NCA3LjIxMSAxMC41NWMtLjI5NC0uMzA3LS4yOC0uODE4LjAzLTEuMTQzLjMxMi0uMzI0LjgwMi0uMzM5IDEuMDk2LS4wMzJsMi42NiAyLjc3NCA0LjY5NS00Ljg5NmMuMzExLS4zMjQuODAyLS4zMzkgMS4wOTUtLjAzMi4yOTQuMzA2LjI4LjgxNy0uMDMgMS4xNDJsLTUuMTEzIDUuMzNhLjk3NC45NzQgMCAwIDEtMS40MTggMFxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTIwIDJjMC0xLjEwNS0uOTQ4LTItMi4xMTgtMkg0LjExOEMyLjk0OCAwIDIgLjg5NSAyIDJ2MkgxYTEgMSAwIDAgMCAwIDJoMXYzSDFhMSAxIDAgMSAwIDAgMmgxdjNIMWExIDEgMCAxIDAgMCAyaDF2MmMwIDEuMTA1Ljk0OCAyIDIuMTE4IDJoMTMuNzY0YzEuMTcgMCAyLjExOC0uODk1IDIuMTE4LTJ6TTMgMTZ2MmMwIC41NTIuNDc4IDEgMS4wNjcgMWgxMy44NjZjLjU5IDAgMS4wNjctLjQ0OCAxLjA2Ny0xVjJjMC0uNTUyLS40NzgtMS0xLjA2Ny0xSDQuMDY3QzMuNDc3IDEgMyAxLjQ0OCAzIDJ2MmgxYTEgMSAwIDAgMSAwIDJIM3YzaDFhMSAxIDAgMSAxIDAgMkgzdjNoMWExIDEgMCAxIDEgMCAyelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gIHJldHVybiBjc3NgXHJcbiAgICAmLnN1cnZleTEyM3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VydmV5MTIzX19ub1N1cnZleXtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1cnZleTEyM19fd2ViZm9ybXtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcblxyXG4gICAgICAgICAgICAuZW1iZWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOjgwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZW1iZWQtY29udGFpbmVyIGlmcmFtZSxcclxuICAgICAgICAgICAgLmVtYmVkLWNvbnRhaW5lciBvYmplY3QsXHJcbiAgICAgICAgICAgIC5lbWJlZC1jb250YWluZXIgaWZyYW1le1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc21hbGx7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA0MDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIGBcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnVW5pcGVyIENhcHR1cmUnXHJcbn1cclxuIiwiLyoqXHJcbiAqIHN1cnZleTEyMyBjb21tb24gcGFyYW1zXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1cnZleTEyM0NvbW1vblBhcmFtcyB7XHJcbiAgdXNlcm5hbWU/OiBzdHJpbmdcclxuICB0b2tlbj86IHN0cmluZ1xyXG4gIGY/OiBzdHJpbmdcclxuICBwb3J0YWxVcmw/OiBzdHJpbmdcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFBhcmFtIHtcclxuICAvKipcclxuICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCB0aGUgZ3JvdXBzIGFnYWluc3QuXHJcbiAgICovXHJcbiAgcT86IHN0cmluZ1xyXG4gIHNvcnRGaWVsZD86IHN0cmluZ1xyXG4gIHNvcnRPcmRlcj86ICdhc2MnIHwgJ2Rlc2MnXHJcbiAgc3RhcnQ/OiBudW1iZXJcclxuICAvKipcclxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IHNldCByZXNwb25zZS5cclxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxMCwgYW5kIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUgaXMgMTAwLlxyXG4gICAqL1xyXG4gIG51bT86IG51bWJlclxyXG59XHJcblxyXG4vKipcclxuICogc3VydmV5MTIzIGlmcmFtZSBtZXNzYWdlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1cnZleTEyM01lc3NhZ2Uge1xyXG4gIGV2ZW50OiBzdHJpbmdcclxuICBkYXRhOiBhbnlcclxufVxyXG5cclxuLyoqXHJcbiAqIHN1cnZleTEyMyBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3VydmV5MTIzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBxdWVyeU9iajogYW55XHJcbiAgcHJpdmF0ZSBzdXJ2ZXlVcmxGcm9tUG9ydGFsOiBzdHJpbmdcclxuICBwdWJsaWMgc2V0UXVlcnlPYmplY3QgKG9iaikge1xyXG4gICAgY29uc3Qgb2JqU3RyID0gb2JqID8gb2JqLnN1cnZleTEyMyA6ICcnXHJcbiAgICBjb25zdCB1cmxTdHJpbmcgPSBvYmpTdHIgPyBkZWNvZGVVUklDb21wb25lbnQob2JqU3RyICsgJycpIDogJydcclxuICAgIGNvbnN0IHZhbCA9IHRoaXMuX3VybFBhcmFtVG9Kc29uKHVybFN0cmluZylcclxuICAgIHRoaXMucXVlcnlPYmogPSB2YWxcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGh0dHBzOi8vZGV2dG9waWEuZXNyaS5jb20vQmVpamluZy1SLUQtQ2VudGVyL0V4cGVyaWVuY2VCdWlsZGVyLVdlYi1FeHRlbnNpb25zL2lzc3Vlcy80NjU5XHJcbiAgICogZ2V0IHN1cnZleSBob3N0IHVybCBmcm9tIHBvcnRhbCdzIGNvbmZpZy5qcyBmaWxlXHJcbiAgICogQHBhcmFtIHBvcnRhbFVybFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRTdXJ2ZXlIb3N0VXJsRnJvbVBvcnRhbCAocG9ydGFsVXJsOiBzdHJpbmcpIHtcclxuICAgIHBvcnRhbFVybCA9IHBvcnRhbFVybCB8fCAnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbSdcclxuICAgIC8vIHJlYWQgY2FjaGUgZnJvbSB0aGlzLnN1cnZleVVybEZyb21Qb3J0YWxcclxuICAgIGlmICh0aGlzLnN1cnZleVVybEZyb21Qb3J0YWwgfHwgdGhpcy5zdXJ2ZXlVcmxGcm9tUG9ydGFsID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zdXJ2ZXlVcmxGcm9tUG9ydGFsKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlYWQgY2FjaGUgZnJvbSB3aW5kb3cuZXNyaUdlb3dDb25maWcuc3VydmV5VXJsXHJcbiAgICBjb25zdCBlc3JpR2Vvd0NvbmZpZyA9ICh3aW5kb3cgYXMgYW55KS5lc3JpR2Vvd0NvbmZpZ1xyXG4gICAgaWYgKGVzcmlHZW93Q29uZmlnICYmIGVzcmlHZW93Q29uZmlnLnN1cnZleVVybCkge1xyXG4gICAgICB0aGlzLnN1cnZleVVybEZyb21Qb3J0YWwgPSBlc3JpR2Vvd0NvbmZpZy5zdXJ2ZXlVcmxcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnN1cnZleVVybEZyb21Qb3J0YWwpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvbmZpZ0pTVXJsID0gJydcclxuICAgIGlmICghKHBvcnRhbFVybC5lbmRzV2l0aCgnLycpKSkge1xyXG4gICAgICBwb3J0YWxVcmwgKz0gJy8nXHJcbiAgICB9XHJcbiAgICBjb25maWdKU1VybCA9IHBvcnRhbFVybCArICdob21lL2pzL2FyY2dpc29ubGluZS9jb25maWcuanMnXHJcblxyXG4gICAgLy8gSW4gb3JkZXIgdG8gYXZvaWQgY3Jvc3MgZG9tYWluIGVycm9yLCBjcmVhdGUgYSBzY3JpcHQgdGFnIHRvIGxvYWQgdGhlIGNvbmZpZyBqcy5cclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXHJcbiAgICBzY3JpcHQuc3JjID0gY29uZmlnSlNVcmxcclxuXHJcbiAgICBjb25zdCBodG1sTm9kZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4gICAgY29uc3QgaHRtbERpciA9IGh0bWxOb2RlLmdldEF0dHJpYnV0ZSgnZGlyJylcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gcmVzZXQgdGhlIGh0bWwgZGlyZWN0aW9uLCBzZWUgaHR0cHM6Ly9kZXZ0b3BpYS5lc3JpLmNvbS9CZWlqaW5nLVItRC1DZW50ZXIvRXhwZXJpZW5jZUJ1aWxkZXIvaXNzdWVzLzExMzEwI2lzc3VlY29tbWVudC0zMDYxNTA5XHJcbiAgICAgICAgaWYgKGh0bWxOb2RlLmdldEF0dHJpYnV0ZSgnZGlyJykgIT09IGh0bWxEaXIpIHtcclxuICAgICAgICAgIGh0bWxOb2RlLnNldEF0dHJpYnV0ZSgnZGlyJywgaHRtbERpcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNmZyA9ICh3aW5kb3cgYXMgYW55KS5lc3JpR2Vvd0NvbmZpZ1xyXG4gICAgICAgIGlmIChjZmcgJiYgY2ZnLnN1cnZleVVybCkge1xyXG4gICAgICAgICAgdGhpcy5zdXJ2ZXlVcmxGcm9tUG9ydGFsID0gY2ZnLnN1cnZleVVybFxyXG4gICAgICAgICAgcmVzb2x2ZShjZmcuc3VydmV5VXJsKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN1cnZleVVybEZyb21Qb3J0YWwgPSBudWxsXHJcbiAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChodG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ2RpcicpICE9PSBodG1sRGlyKSB7XHJcbiAgICAgICAgICBodG1sTm9kZS5zZXRBdHRyaWJ1dGUoJ2RpcicsIGh0bWxEaXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZ2V0IHN1cnZleSB1cmwgZnJvbSBwb3J0YWxcXCdzIGNvbmZpZy5qcywgd2lsbCBmYWxsYmFjayB0byB1c2UgdGhlIGRlZmF1bHQgc3VydmV5MTIzIHVybC4nKVxyXG4gICAgICAgIHRoaXMuc3VydmV5VXJsRnJvbVBvcnRhbCA9IG51bGxcclxuICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0IHN1cnZleTEyMyBob3N0IHVybFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRTdXJ2ZXkxMjNIb3N0VXJsICgpOiBzdHJpbmcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCZWlqaW5nLVItRC1DZW50ZXIvRXhwZXJpZW5jZUJ1aWxkZXIvaXNzdWVzLzg4XHJcbiAgICAgKiB3ZSBuZWVkIHRvIGNoZWNrIHVybCBob3N0IHRvIHNlZSB3aGljaCBzdXJ2ZXkxMjMgaG9zdCB1cmwgd2Ugd2lsbCB1c2VcclxuICAgICAqIHdhYmJ1aWxkLmVzcmkuY29tID4gc3VydmV5MTIzZGVjLmFyY2dpcy5jb21cclxuICAgICAqIGV4cGVyaWVuY2VkZXYuYXJjZ2lzLmNvbSA+IHN1cnZleTEyM2Rldi5hcmNnaXMuY29tXHJcbiAgICAgKiBleHBlcmllbmNlcWEuYXJjZ2lzLmNvbSA+IHN1cnZleTEyM3FhLmFyY2dpcy5jb21cclxuICAgICAqIGV4cGVyaWVuY2UuYXJjZ2lzLmNvbSA+IHN1cnZleTEyMy5hcmNnaXMuY29tXHJcbiAgICAgKiBkZWZhdWx0ID4gc3VydmV5MTIzLmFyY2dpcy5jb21cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9zdXJ2ZXkxMjMuYXJjZ2lzLmNvbSdcclxuICAgIC8vIHVybCBmcm9tIHBvcnRhbCBjb25maWcuanNcclxuICAgIGlmICh0aGlzLnN1cnZleVVybEZyb21Qb3J0YWwpIHtcclxuICAgICAgdXJsID0gdGhpcy5zdXJ2ZXlVcmxGcm9tUG9ydGFsXHJcbiAgICB9XHJcbiAgICBsZXQgZW52ID0gd2luZG93LmppbXVDb25maWcuaG9zdEVudiBhcyBhbnlcclxuICAgIGlmICh0aGlzLnF1ZXJ5T2JqICYmIHRoaXMucXVlcnlPYmouZW52KSB7XHJcbiAgICAgIGVudiA9IHRoaXMucXVlcnlPYmouZW52ICsgJydcclxuICAgICAgLy8gd2hlbiB0aGUgZW52IGlzIGEgdXJsOiByZWZlciB0bzogaHR0cHM6Ly9kZXZ0b3BpYS5lc3JpLmNvbS9CZWlqaW5nLVItRC1DZW50ZXIvRXhwZXJpZW5jZUJ1aWxkZXItV2ViLUV4dGVuc2lvbnMvaXNzdWVzLzU5NzUjaXNzdWVjb21tZW50LTI4NjYzNjhcclxuICAgICAgaWYgKGVudi5zdGFydHNXaXRoKCdodHRwOi8vJykgfHwgZW52LnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcclxuICAgICAgICByZXR1cm4gZW52XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiB0aGUgdXJsIG1vZGUgaXMgbGlrZSBodHRwczovL3N1cnZleTEyMyR7c3ViTmFtZX0uYXJjZ2lzLmNvbSwgd2lsbCBsZXQgdGhlIGVudiBmcm9tIHVybCB3b3JrLFxyXG4gICAgLy8gb3RoZXJ3aXNlLCBpZ25vcmUgdGhlIGVudiBmcm9tIHVybC5cclxuICAgIGxldCBpc05vcm1hbFN1cnZleVVybCA9IHRydWVcclxuICAgIGlmICh1cmwgIT09ICdodHRwczovL3N1cnZleTEyMy5hcmNnaXMuY29tJykge1xyXG4gICAgICBjb25zdCBtYXRjaFJzdCA9IHVybC5tYXRjaCgvaHR0cHM6XFwvXFwvc3VydmV5MTIzKC5bXlxcLl0qKVxcLmFyY2dpc1xcLmNvbS8pXHJcbiAgICAgIGlzTm9ybWFsU3VydmV5VXJsID0gISEoKG1hdGNoUnN0ICYmIG1hdGNoUnN0Lmxlbmd0aCkpXHJcbiAgICB9XHJcbiAgICBpZiAoZW52ICYmIGVudiAhPT0gJ3ByZCcgJiYgZW52ICE9PSAncHJvZCcgJiYgaXNOb3JtYWxTdXJ2ZXlVcmwpIHtcclxuICAgICAgdXJsID0gYGh0dHBzOi8vc3VydmV5MTIzJHtlbnZ9LmFyY2dpcy5jb21gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBnZXQgdGhlIGFwaSB1cmxcclxuICAqL1xyXG4gIHB1YmxpYyBnZXRTdXJ2ZXkxMjNIb3N0QVBJVXJsICgpIHtcclxuICAgIGxldCB1cmwgPSB0aGlzLmdldFN1cnZleTEyM0hvc3RVcmwoKSArICcvYXBpL2pzYXBpLzMuMTkvJyAvLyAgJy9zaGFyZS9zdXJ2ZXkxMjN3ZWJmb3JtLWpzYXBpLmpzJztcclxuICAgIGlmICh0aGlzLnF1ZXJ5T2JqICYmIHRoaXMucXVlcnlPYmouanNhcGkpIHtcclxuICAgICAgdXJsID0gdGhpcy5nZXRTdXJ2ZXkxMjNIb3N0VXJsKCkgKyAnL2FwaS9qc2FwaS8nICsgdGhpcy5xdWVyeU9iai5qc2FwaVxyXG4gICAgfVxyXG4gICAgLy8gb25seSBmb3IgZGVidWdnZXIgbG9jYWxseVxyXG4gICAgLy8gY29uc3QgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gaWYgKGlzRGVidWcpIHtcclxuICAgIC8vICAgdXJsID0gYGh0dHBzOi8vbmFuemhhbmcuYXJjZ2lzLmNvbTo4NDQzL3dlYmNsaWVudC9zdXJ2ZXkxMjN3ZWJmb3JtLWpzYXBpLmpzYDtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gdXJsXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjcmVhdGUgc3VydmV5IGJ5IHN1cnZleTEyMyByZXN0IGFwaVxyXG4gICAqIEBwYXJhbSB0aXRsZVxyXG4gICAqIEBwYXJhbSB0YWdzXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICBwdWJsaWMgY3JlYXRlU3VydmV5ICh0aXRsZTogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSwgY29tbW9uUGFyYW1zOiBTdXJ2ZXkxMjNDb21tb25QYXJhbXMsIG9wdGlvbnM/OiB7XHJcbiAgICBzbmlwcGV0Pzogc3RyaW5nXHJcbiAgICB0aHVtYm5haWxVcmw/OiBzdHJpbmdcclxuICB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIC8vIG9wdGlvbnNcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgc25pcHBldDogJydcclxuICAgIH0sIG9wdGlvbnMgfHwge30pXHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aXRsZSB8fCAhY29tbW9uUGFyYW1zIHx8ICFjb21tb25QYXJhbXMudG9rZW4gfHwgIWNvbW1vblBhcmFtcy51c2VybmFtZSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHRpdGxlLCB0YWdzLCB1c2VybmFtZSBvciB0b2tlbicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5nZXRTdXJ2ZXkxMjNIb3N0VXJsKCl9L2FwaS9zdXJ2ZXkvY3JlYXRlYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgdGFnczogdGFncyAmJiBBcnJheS5pc0FycmF5KHRhZ3MpID8gdGFncy5qb2luKCcsJykgOiAodGFncyB8fCBudWxsKSxcclxuICAgICAgICAgIHNuaXBwZXQ6IG9wdGlvbnMuc25pcHBldCxcclxuICAgICAgICAgIHRodW1ibmFpbFVybDogb3B0aW9ucy50aHVtYm5haWxVcmwsXHJcbiAgICAgICAgICB0b2tlbjogY29tbW9uUGFyYW1zLnRva2VuLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGNvbW1vblBhcmFtcy51c2VybmFtZSxcclxuICAgICAgICAgIHBvcnRhbFVybDogY29tbW9uUGFyYW1zLnBvcnRhbFVybCB8fCAnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNQb3J0YWwgaXMgdG8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgcG9ydGFsVXJsIChmcm9tIGNvbmZpZyBvciBmcm9tIHVybCBwYXJhbXMpIGlzIGFyY2dpcyBvbmxpbmUgcG9ydGFscyBvciBub3RcclxuICAgKi9cclxuICBwdWJsaWMgaXNQb3J0YWwgKHBvcnRhbFVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhcmNnaXNPbmxpbmVQb3J0YWxVcmxzID0gWyd3d3cuYXJjZ2lzLmNvbScsICdkZXZleHQuYXJjZ2lzLmNvbScsICdxYWV4dC5hcmNnaXMuY29tJ11cclxuXHJcbiAgICAvLyBjaGVjayBpZiB0aGUgcG9ydGFsVXJsIGlzIGFyY2dpcyBvbmxpbmUgdXJsXHJcbiAgICBjb25zdCBpc0FyY2dpc09ubGluZSA9IGFyY2dpc09ubGluZVBvcnRhbFVybHMuZmluZCgodXJsLCBpKSA9PiB7XHJcbiAgICAgIHJldHVybiBwb3J0YWxVcmwuaW5jbHVkZXModXJsKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAhaXNBcmNnaXNPbmxpbmVcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHF1ZXJ5IHN1cnZleVxyXG4gICAqIEBwYXJhbSBjb21tb25QYXJhbXNcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqIFJlbWluZGVyOiBpZiBzZWFyY2hTdXJ2ZXlUeXBlIGlzICdhbGwtYWRtaW4nLCBldmVuIHRoZSBpc1NlYXJjaEFsbCBpcyB0cnVlLCB0aGUgcmVzdWx0IGNvdW50IHN0aWxsIGhhcyBhIGxpbWl0YXRpb246IDEwMDAuIHRoaXMgaXMgdGhlIGFwaSdzIGJlaGF2aW91clxyXG4gICAqL1xyXG4gIHB1YmxpYyBxdWVyeVN1cnZleSAoY29tbW9uUGFyYW1zOiBTdXJ2ZXkxMjNDb21tb25QYXJhbXMsIG9wdGlvbnM/OiB7XHJcbiAgICBpc1B1Ymxpc2hlZD86IGJvb2xlYW5cclxuICAgIGlzU2VhcmNoQWxsPzogYm9vbGVhblxyXG4gICAgc2VhcmNoU3VydmV5VHlwZT86IHN0cmluZ1xyXG4gICAgc3VydmV5Q2xpZW50QVBJPzogYW55XHJcbiAgfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAvLyBvcHRpb25zXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgIGlzUHVibGlzaGVkOiBmYWxzZSxcclxuICAgICAgaXNTZWFyY2hBbGw6IHRydWUsXHJcbiAgICAgIHN1cnZleUNsaWVudEFQSTogbnVsbFxyXG4gICAgfSwgb3B0aW9ucyB8fCB7fSlcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBpZiAoIWNvbW1vblBhcmFtcyB8fCAhY29tbW9uUGFyYW1zLnRva2VuIHx8ICFjb21tb25QYXJhbXMudXNlcm5hbWUpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyB0b2tlbiBvciB1c2VybmFtZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XHJcbiAgICAgICAgICBpc1B1Ymxpc2hlZDogb3B0aW9ucy5pc1B1Ymxpc2hlZCxcclxuICAgICAgICAgIGlzU2VhcmNoQWxsOiBvcHRpb25zLmlzU2VhcmNoQWxsLFxyXG4gICAgICAgICAgdG9rZW46IGNvbW1vblBhcmFtcy50b2tlbixcclxuICAgICAgICAgIHVzZXJuYW1lOiBjb21tb25QYXJhbXMudXNlcm5hbWUsXHJcbiAgICAgICAgICBwb3J0YWxVcmw6IGNvbW1vblBhcmFtcy5wb3J0YWxVcmwgfHwgJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLnNlYXJjaFN1cnZleVR5cGUpIHtcclxuICAgICAgICAgIHBhcmFtcy5zZWFyY2hTdXJ2ZXlUeXBlID0gb3B0aW9ucy5zZWFyY2hTdXJ2ZXlUeXBlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5zdXJ2ZXlDbGllbnRBUEkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTdXJ2ZXkgY2xpZW50IGFwaSBpcyBub3QgcHJvdmlkZWQuJylcclxuICAgICAgICAgIC8vIHRvZG86IGRvIHdlIG5lZWQgdG8gcmVxdWVzdCByZXN0IGFwaSBpZiB0aGUganMgYXBpIGZhaWxlZCB0byB3b3JrP1xyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuc3VydmV5Q2xpZW50QVBJLnN1cnZleTEyMy5zZWFyY2hTdXJ2ZXkocGFyYW1zKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5yZXN1bHRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcXVlcnkgb3RoZXJzJyBzdXJ2ZXlcclxuICAgKiBAcGFyYW0gY29tbW9uUGFyYW1zXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiB0b2RvOiB3aWxsIHVzZSBzdXJ2ZXkgYXBpIGluc3RlYWQgd2hlbiB0aGUgYXBpIGVtcGxlbWVudHMgdGhpcyBmZWF0dXJlXHJcbiAgICovXHJcbiAgcHVibGljIHF1ZXJ5T3RoZXJzU3VydmV5IChjb21tb25QYXJhbXM6IFN1cnZleTEyM0NvbW1vblBhcmFtcywgb3B0aW9uczogeyBvcmdJZDogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb21tb25QYXJhbXMgfHwgIWNvbW1vblBhcmFtcy50b2tlbiB8fCAhY29tbW9uUGFyYW1zLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgdG9rZW4gb3IgdXNlcm5hbWUnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xyXG4gICAgICAgICAgdG9rZW46IGNvbW1vblBhcmFtcy50b2tlbixcclxuICAgICAgICAgIHVzZXJuYW1lOiBjb21tb25QYXJhbXMudXNlcm5hbWUsXHJcbiAgICAgICAgICBwb3J0YWxVcmw6IGNvbW1vblBhcmFtcy5wb3J0YWxVcmwgfHwgJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20nLFxyXG4gICAgICAgICAgb3JnSWQ6IG9wdGlvbnMub3JnSWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBhbnkgPSBudWxsXHJcblxyXG4gICAgICAgIC8vIGJ1aWxkIHF1ZXJ5IHBhcmFtZXRlcjogcVxyXG4gICAgICAgIGNvbnN0IHEgPSBgKCh0eXBlOkZvcm0gQU5EICh0eXBla2V5d29yZHM6eEZvcm0gT1IgdHlwZWtleXdvcmRzOkZvcm0pKSBPUiAodHlwZTonQ29kZSBTYW1wbGUnIEFORCB0eXBla2V5d29yZHM6WEZvcm1zIEFORCB0YWdzOid4Zm9ybScpKSBBTkQgKE5PVCBvd25lcjoke3BhcmFtcy51c2VybmFtZX0pIEFORCAoYWNjZXNzOnNoYXJlZCBPUiBhY2Nlc3M6b3JnIE9SIChhY2Nlc3M6cHVibGljIEFORCBvcmdpZDoke3BhcmFtcy5vcmdJZH0pIE9SIGFjY2Vzczpwcml2YXRlKWBcclxuICAgICAgICAvLyBnZXQgc2VhcmNoIHVybFxyXG4gICAgICAgIGNvbnN0IHNlYXJjaFVybCA9IGAke3BhcmFtcy5wb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9zZWFyY2hgXHJcbiAgICAgICAgLy8gc2VhcmNoIHBhcmFtc1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtczogU2VhcmNoUGFyYW0gPSB7XHJcbiAgICAgICAgICBxOiBxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaEFHTyhzZWFyY2hVcmwsIHNlYXJjaFBhcmFtcywgY29tbW9uUGFyYW1zKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc1xyXG4gICAgICAgICAgICAvLyB0aGUgZmlyc3QgMTAwIHN1cnZleXNcclxuICAgICAgICAgICAgcmVzLnJlc3VsdHMgPSAocmVzLnJlc3VsdHMgfHwgW10pLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRJdGVtVG9TdXJ2ZXlJbmZvKGl0ZW0sIGNvbW1vblBhcmFtcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIHRoZXJlIGlzIG5vdCBtb3JlIHNlYXJjaGVkIGl0ZW1zXHJcbiAgICAgICAgICAgICAqIHJldHVybiByZXN1bHRzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAocmVzLm5leHRTdGFydCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogcmVjdXNpdmVseSBzZWFyY2ggcmVtYWluZyBpdGVtc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXM6IGFueVtdID0gW11cclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcihyZXMudG90YWwgLyByZXMubnVtKVxyXG4gICAgICAgICAgICBjb25zdCByZW1haW5kZXIgPSByZXMudG90YWwgJSByZXMubnVtXHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgY291bnQgKz0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHNlYXJjaFBhcmFtcywge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IChpICogcmVzLm51bSkgKyAxXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBpZiAocGFyYW1zLnN0YXJ0IDw9IHJlcy50b3RhbCkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLnNlYXJjaEFHTyhzZWFyY2hVcmwsIHBhcmFtcywgY29tbW9uUGFyYW1zKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXN1bHRzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIHdyb25nIHdoZW4gc2VhcmNoQWxsJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCAxMDAgc3VydmV5c1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLnJlc3VsdHMgfHwgW11cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0U3RhcnQgPSAtMVxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIDEwMXN0IC0gbGFzdCBzdXJ2ZXlzXHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb252ZXIgdGhlIGl0ZW0gdG8gc3VydmV5IGluZm8odG8gbGV0IGl0IGJlIGlkZW50aWNhbCB3aXRoIHRoZSBkYXRhIHN0cnVjdHVyZSByZXR1cm5lZCBmcm9tIHN1cnZleSBzZWFyY2ggYXBpKVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzdXJ2ZXlzID0gcmVzdWx0LnJlc3VsdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEl0ZW1Ub1N1cnZleUluZm8oaXRlbSwgY29tbW9uUGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBpdGVtcyA9IGl0ZW1zLmNvbmNhdChzdXJ2ZXlzKVxyXG4gICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgKiBnZXQgbmV4dFN0YXJ0IGluIHRoZSBsYXN0IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXJ0ID0gcmVzdWx0Lm5leHRTdGFydFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubmV4dFN0YXJ0ID0gbmV4dFN0YXJ0XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHRzID0gaXRlbXNcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UgPyAocmVzcG9uc2UucmVzdWx0cyB8fCBbXSkgOiBbXVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoIGZyb20gYWdvXHJcbiAgICogQHBhcmFtIHNlYXJjaFVybFxyXG4gICAqIEBwYXJhbSBzZWFyY2hQYXJhbXNcclxuICAgKiBAcGFyYW0gY29tbW9uUGFyYW1zXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBwdWJsaWMgc2VhcmNoQUdPIChzZWFyY2hVcmw6IHN0cmluZywgc2VhcmNoUGFyYW1zOiBTZWFyY2hQYXJhbSwgY29tbW9uUGFyYW1zOiBTdXJ2ZXkxMjNDb21tb25QYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgc2VhcmNoUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgIG51bTogMTAwLFxyXG4gICAgICBzdGFydDogMSxcclxuICAgICAgc29ydEZpZWxkOiAndGl0bGUnLFxyXG4gICAgICBzb3J0T3JkZXI6ICdhc2MnXHJcbiAgICB9LCBzZWFyY2hQYXJhbXMpXHJcbiAgICBjb25zdCByZXVxZXN0UGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwge1xyXG4gICAgICBmOiAnanNvbicsXHJcbiAgICAgIHRva2VuOiBjb21tb25QYXJhbXMudG9rZW5cclxuICAgIH0sIHNlYXJjaFBhcmFtcylcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0VXJsID0gYCR7c2VhcmNoVXJsfT8ke09iamVjdC5rZXlzKHJldXFlc3RQYXJhbXMpLm1hcCgoaykgPT4gayArICc9JyArIHJldXFlc3RQYXJhbXNba10pLmpvaW4oJyYnKX1gXHJcbiAgICByZXR1cm4gZmV0Y2gocmVxdWVzdFVybCwge1xyXG4gICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IHJlc1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRJdGVtVG9TdXJ2ZXlJbmZvIChpdGVtOiBhbnksIHBhcmFtczogU3VydmV5MTIzQ29tbW9uUGFyYW1zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjcmVhdGVkOiBpdGVtLmNyZWF0ZWQsXHJcbiAgICAgIGZlYXR1cmVTZXJ2aWNlOiBudWxsLFxyXG4gICAgICBmb3JtOiBudWxsLFxyXG4gICAgICBmb3JtSXRlbUluZm86IGl0ZW0sXHJcbiAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICBvd25lcjogaXRlbS5vd25lcixcclxuICAgICAgcmVwb3J0OiBudWxsLFxyXG4gICAgICBzbmlwcGV0OiBpdGVtLnNuaXBwZXQsXHJcbiAgICAgIHRhZ3M6IGl0ZW0udGFncyxcclxuICAgICAgdGh1bWJuYWlsOiBgJHtwYXJhbXMucG9ydGFsVXJsfS9zaGFyaW5nL3Jlc3QvY29udGVudC9pdGVtcy8ke2l0ZW0uaWR9L2luZm8vJHtpdGVtLnRodW1ibmFpbH0/dG9rZW49JHtwYXJhbXMudG9rZW59YCxcclxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldCBzdXJ2ZXkxMjMgZGVzaWduZXIgdXJsXHJcbiAgICovXHJcbiAgcHVibGljIGdldFN1cnZleTEyM0Rlc2lnbmVyVXJsIChzdXJ2ZXlJdGVtSWQ6IHN0cmluZywgb3B0aW9ucz86IHtcclxuICAgIHBvcnRhbFVybD86IHN0cmluZ1xyXG4gIH0pOiBzdHJpbmcge1xyXG4gICAgLy8gb3B0aW9uc1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG5cclxuICAgIH0sIG9wdGlvbnMgfHwge30pXHJcblxyXG4gICAgbGV0IHVybCA9IGAke3RoaXMuZ2V0U3VydmV5MTIzSG9zdFVybCgpfS9zdXJ2ZXlzLyR7c3VydmV5SXRlbUlkfS9kZXNpZ24/ZW1iZWQ9ZXhiYFxyXG4gICAgaWYgKG9wdGlvbnMucG9ydGFsVXJsICYmIG9wdGlvbnMucG9ydGFsVXJsICE9PSAnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbScpIHtcclxuICAgICAgdXJsICs9IGAmcG9ydGFsVXJsPSR7b3B0aW9ucy5wb3J0YWxVcmx9YFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0U3VydmV5MTIzSG9zdFVybCgpID09PSAnaHR0cHM6Ly9zdXJ2ZXkxMjNkZXYuYXJjZ2lzLmNvbScgJiYgKCFvcHRpb25zLnBvcnRhbFVybCB8fCBvcHRpb25zLnBvcnRhbFVybCA9PT0gJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20nKSkge1xyXG4gICAgICB1cmwgKz0gYCZwb3J0YWxVcmw9JHtvcHRpb25zLnBvcnRhbFVybH1gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3VydmV5SXRlbUlkXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U3VydmV5MTIzV2ViZm9ybVVybCAoc3VydmV5SXRlbUlkOiBzdHJpbmcsIG9wdGlvbnM/OiB7XHJcbiAgICBxdWVyeVBhcmFtcz86IHN0cmluZ1tdXHJcbiAgfSk6IHN0cmluZyB7XHJcbiAgICAvLyBvcHRpb25zXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiBbXVxyXG4gICAgfSwgb3B0aW9ucyB8fCB7fSlcclxuXHJcbiAgICBjb25zdCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5nZXRTdXJ2ZXkxMjNIb3N0VXJsKCl9L3NoYXJlLyR7c3VydmV5SXRlbUlkfWBcclxuXHJcbiAgICAvKipcclxuICAgICAqIGRlYnVnZyBvbmx5XHJcbiAgICAgKi9cclxuICAgIGlmIChpc0RlYnVnKSB7XHJcbiAgICAgIHVybCA9IGBodHRwczovL25hbnpoYW5nLmFyY2dpcy5jb206ODQ0My93ZWJjbGllbnQvP2FwcGlkPSR7c3VydmV5SXRlbUlkfWBcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5xdWVyeVBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHVybCArPSBgJHsoaXNEZWJ1ZykgPyAnJicgOiAnPyd9JHtvcHRpb25zLnF1ZXJ5UGFyYW1zLmpvaW4oJyYnKX1gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmxhdCBxdWVzdGlvbnMsIG1vdmUgdGhlIHF1ZXN0aW9ucyBvdXQgaWYgdGhleSBhcmUgaW4gdGhlIGdyb3VwLlxyXG4gICAqIGlnbm9yZSByZXBlYXQgcXVlc3Rpb25zIHVudGlsIHdlIHBsYW4gdG8gc3VwcG9ydCBpdC5cclxuICAgKi9cclxuICBwdWJsaWMgZmxhdFF1ZXN0aW9ucyAocXVlc3Rpb25zKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgIHF1ZXN0aW9ucy5mb3JFYWNoKChxdWVzKSA9PiB7XHJcbiAgICAgIC8vIHNpbmdsZSBxdWVzdGlvblxyXG4gICAgICBpZiAoIXF1ZXMucXVlc3Rpb25zKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2gocXVlcylcclxuICAgICAgfSBlbHNlIGlmIChxdWVzLnR5cGUgIT09ICdlc3JpUXVlc3Rpb25UeXBlUmVwZWF0Jykge1xyXG4gICAgICAgIGlmIChxdWVzLnR5cGUgPT09ICdlc3JpUXVlc3Rpb25UeXBlQWRkcmVzcycpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHF1ZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5mbGF0UXVlc3Rpb25zKHF1ZXMucXVlc3Rpb25zKSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2F0ZWRcclxuICAgKiBnZXQgc3VydmV5IHF1ZXN0aW9uIGZpZWxkc1xyXG4gICAqIEBwYXJhbSBzdXJ2ZXlJdGVtSWRcclxuICAgKiBAcGFyYW0gY29tbW9uUGFyYW1zXHJcbiAgICovXHJcbiAgcHVibGljIGdldFN1cnZleVF1ZXN0aW9uRmllbGRzIChzdXJ2ZXlJdGVtSWQ6IHN0cmluZywgY29tbW9uUGFyYW1zOiBTdXJ2ZXkxMjNDb21tb25QYXJhbXMpOiBQcm9taXNlPEFycmF5PHtcclxuICAgIG5hbWU/OiBzdHJpbmdcclxuICAgIGxhYmVsPzogc3RyaW5nXHJcbiAgfT4+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGlmICghc3VydmV5SXRlbUlkIHx8ICFjb21tb25QYXJhbXMgfHwgIWNvbW1vblBhcmFtcy50b2tlbikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHN1cnZleUl0ZW1JZCBvciB0b2tlbicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuZ2V0U3VydmV5MTIzSG9zdFVybCgpfS9hcGkvc3VydmV5LyR7c3VydmV5SXRlbUlkfS9mb3JtYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xyXG4gICAgICAgICAgdG9rZW46IGNvbW1vblBhcmFtcy50b2tlbixcclxuICAgICAgICAgIHBvcnRhbFVybDogY29tbW9uUGFyYW1zLnBvcnRhbFVybFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXJsID0gYCR7dXJsfT8ke09iamVjdC5rZXlzKHBhcmFtcykubWFwKChrKSA9PiBrICsgJz0nICsgcGFyYW1zW2tdKS5qb2luKCcmJyl9YFxyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmb3IgbXVsdGlsaW5ndWFsIHN1cnZleSwgdGhlIGxhYmVsIGlzIGFuIG9iamVjdCBsaWtlOlxyXG4gICAqIHtcclxuICAgKiAgICBlbjogJ0VuZ2xpc2ggbGFiZWwnLFxyXG4gICAqICAgICd6aC1jbic6ICdDaGluZXNlIGxhYmVsJ1xyXG4gICAqIH1cclxuICAgKiBAcGFyYW0gcXVlc3Rpb25cclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRRdWVzTGFiZWxTdHJpbmcgKHF1ZXN0aW9uOiBhbnksIG9wdGlvbnM/OiB7XHJcbiAgICBsb2NhbGVzPzogYW55W11cclxuICAgIGN1cnJlbnRMb2NhbGU/OiBzdHJpbmdcclxuICB9KTogc3RyaW5nIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgbG9jYWxlczogW10sXHJcbiAgICAgIGN1cnJlbnRMb2NhbGU6ICdlbidcclxuICAgIH0sIG9wdGlvbnMgfHwge30pXHJcblxyXG4gICAgaWYgKCFxdWVzdGlvbiB8fCAhcXVlc3Rpb24ubGFiZWwpIHtcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxhYmVsID0gcXVlc3Rpb24ubGFiZWxcclxuICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBnZXQgZGVmYXVsdCBsb2NhbGVcclxuICAgICAgICovXHJcbiAgICAgIGxldCBkZWZhdWx0TG9jYWxlOiBhbnkgPSBPYmplY3Qua2V5cyhvcHRpb25zLmxvY2FsZXMgfHwgW10pLmZpbmQoKGxvY2FsQ29uZmlnOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gKGxvY2FsQ29uZmlnLmlzRGVmYXVsdCArICcnKSA9PT0gJ3RydWUnXHJcbiAgICAgIH0pXHJcbiAgICAgIGlmIChkZWZhdWx0TG9jYWxlKSB7XHJcbiAgICAgICAgZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGUuY29kZSB8fCAnZW4nXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBnZXQgdGhlIG1hdGNoZWQgbG9jYWxlXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCBsb2NhbGVzQ29kZXMgPSBvcHRpb25zLmxvY2FsZXM/Lm1hcCgobG9jYWxlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChsb2NhbGUuY29kZSArICcnKS50cmltKClcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgbWF0Y2hlZExvY2FsZSA9IHRoaXMuX2ZpbmRNYXRjaGVkTG9jYWxlKG9wdGlvbnMuY3VycmVudExvY2FsZSwgbG9jYWxlc0NvZGVzKSB8fCBkZWZhdWx0TG9jYWxlXHJcbiAgICAgIGlmIChtYXRjaGVkTG9jYWxlICYmIG1hdGNoZWRMb2NhbGUgaW4gcXVlc3Rpb24ubGFiZWwpIHtcclxuICAgICAgICBsYWJlbCA9IHF1ZXN0aW9uLmxhYmVsW21hdGNoZWRMb2NhbGVdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2NhbGUgPSBPYmplY3Qua2V5cyhxdWVzdGlvbi5sYWJlbClbMF1cclxuICAgICAgICBsYWJlbCA9IGZpcnN0TG9jYWxlID8gcXVlc3Rpb24ubGFiZWxbZmlyc3RMb2NhbGVdIDogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxhYmVsXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBwYXJzZSBhIHVybCBwYXJhbWV0ZXIgdG8ganNvbiwgaWYgdGhlIHBhcmFtZXRlciBzdHJpbmcgaXMgc2ltcGxlLCBrZWVwIGl0IGFzIHN0cmluZ1xyXG4gICAqIEBwYXJhbSBzdHIgIGVnOiAwLnEyOnBpZTsxLnEzOntcInR5cGVcIjpcIm1hcFwiLFwiYmFzZW1hcEl0ZW1JZFwiOlwie2l0ZW1JZH1cIn07Mi5xMTE6e1widHlwZVwiOlwid29yZENsb3VkXCIsXCJzaG93XCI6XCJyZXNwb25zZVwifVxyXG4gICAqIEBwYXJhbSB1cmxLZXlcclxuICAgKi9cclxuICBwcml2YXRlIF91cmxQYXJhbVRvSnNvbiAoc3RyOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnXHJcbiAgICBjb25zdCBzdWJPYmpzID0gc3RyLnNwbGl0KCc7JylcclxuICAgIGlmIChzdWJPYmpzLmxlbmd0aCA8IDIgJiYgc3RyLnNwbGl0KCc6JykubGVuZ3RoIDwgMikge1xyXG4gICAgICAvLyB0aGlzIHVybCBwYXJhbWV0ZXIgaGFzIG5vIHN1YiBwYXJhbWV0ZXJzXHJcbiAgICAgIGlmIChzdHIuc3BsaXQoJywnKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgLy8gY29uc2lkZXIgaXQgYXMgYW4gYXJyYXlcclxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KCcsJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IHt9XHJcbiAgICAgIHN1Yk9ianMuZm9yRWFjaCgoc3ViU3RyKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5VmFscyA9IChzdWJTdHIgKyAnJykuc3BsaXQoJzonKVxyXG4gICAgICAgIGlmIChrZXlWYWxzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIGNvbnN0IGtleSA9IGtleVZhbHNbMF1cclxuICAgICAgICAgIGxldCB2YWwgPSAoQXJyYXkuaXNBcnJheShrZXlWYWxzLnNsaWNlKDEpKSA/IGtleVZhbHMuc2xpY2UoMSkgOiBbXSkuam9pbignOicpIGFzIGFueVxyXG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggJiYgdmFsWzBdID09PSAneycpIHtcclxuICAgICAgICAgICAgLy8gdHJ5IHRvIHBhcnNlIGl0IHRvIGEganNvblxyXG4gICAgICAgICAgICB2YWwgPSB0aGlzLl9zdHJpbmdUb0pzb24odmFsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwuc3BsaXQoJywnKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc2lkZXIgaXQgYXMgYW4gYXJyYXlcclxuICAgICAgICAgICAgICB2YWwgPSB2YWwuc3BsaXQoJywnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvYmpba2V5XSA9IHZhbFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIG9ialxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmluZCB0aGUgbWF0Y2hlZCBsb2NhbGUgZnJvbSBsb2NhbGVzIGFycmF5IGJ5IHRoZSBnaXZlbiBsb2NhbGVDb2RlXHJcbiAgICogQHBhcmFtIGxvY2FsQ29kZVxyXG4gICAqIEBwYXJhbSBsb2NhbHNcclxuICAgKi9cclxuICBwcml2YXRlIF9maW5kTWF0Y2hlZExvY2FsZSAobG9jYWxlQ29kZSwgbG9jYWxlcykge1xyXG4gICAgaWYgKCFsb2NhbGVzIHx8ICFsb2NhbGVzLmxlbmd0aCB8fCAhbG9jYWxlQ29kZSkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmluZCB0aGUgY29kZSB3aGljaCBlcXVhbHMgdG8gbG9jYWxlQ29kZVxyXG4gICAgICovXHJcbiAgICBpZiAobG9jYWxlcy5pbmRleE9mKGxvY2FsZUNvZGUpID49IDApIHtcclxuICAgICAgcmV0dXJuIGxvY2FsZUNvZGVcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZpbmQgdGhlIGNvZGUgdGhhdCBtYXRjaHMgcGFydGlhbGx5XHJcbiAgICAgKiBpZTogaWYgbG9jYWxlQ29kZSBpcyB6aC10dywgd2lsbCBtYXRjaCAnemgnIGlmIHRoZSAnemgnIGlzIGluIGxvY2FsZXMgYXJyYXlcclxuICAgICAqIGlmIGxvY2FsZUNvZGUgaXMgemgsIHdpbGwgbWF0Y2ggJ3poLXR3JyBpZiB0aGUgJ3poLXR3JyBpcyBpbiBsb2NhbGVzIGFycmF5XHJcbiAgICAgKiBpZiBsb2NhbGVDb2RlIGlzIHpoLXR3LCB3aWxsIG1hdGNoICd6aC1jbicgaWYgdGhlICd6aC1jaCcgaXMgaW4gbG9jYWxlcyBhcnJheSBhbmQgJ3poLXR3JyBpcyBub3QgaW4gdGhlIGxvY2FsZXMgYXJyYXlcclxuICAgICAqL1xyXG4gICAgY29uc3QgbWFpbkxvY2FsZSA9IGxvY2FsZUNvZGUuc3BsaXQoJy0nKVswXVxyXG4gICAgaWYgKGxvY2FsZXMuaW5kZXhPZihtYWluTG9jYWxlKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBtYWluTG9jYWxlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbG9jYWxlcy5maW5kKChjb2RlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvZGUuc3RhcnRzV2l0aChgJHttYWluTG9jYWxlfS1gKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RyaW5nVG9Kc29uIChzdHI6IHN0cmluZyk6IGFueSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc3RyXHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHN0cilcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmVzdWx0ID0gc3RyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3VydmV5MTIzU2VydmljZSA9IG5ldyBTdXJ2ZXkxMjNTZXJ2aWNlKClcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfU3BhdGlhbFJlZmVyZW5jZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3Jlc3RfcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X3N1cHBvcnRfUXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBEYXRhU291cmNlTWFuYWdlciwgU2Vzc2lvbk1hbmFnZXIsIERhdGFTb3VyY2VTdGF0dXMsIEltbXV0YWJsZSwgZ2V0QXBwU3RvcmUsIHR5cGUgSU1VcmxQYXJhbWV0ZXJzLCB0eXBlIElNU3RhdGUsIHBvcnRhbFVybFV0aWxzLFxyXG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGpzeCwgbW9kdWxlTG9hZGVyLCBzZW12ZXIsIERhdGFTb3VyY2VDb21wb25lbnQsIFF1ZXJpYWJsZURhdGFTb3VyY2VcclxufSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG5pbXBvcnQgeyBXaWRnZXRQbGFjZWhvbGRlciwgQnV0dG9ufSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgSmltdU1hcFZpZXdDb21wb25lbnQsIEFyY0dJU0RhdGFTb3VyY2VUeXBlcywgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBzdXJ2ZXkxMjNTZXJ2aWNlLCB0eXBlIFN1cnZleTEyM01lc3NhZ2UgfSBmcm9tICcuLi9zZXJ2aWNlL3N1cnZleTEyMy5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBnZXRTdHlsZSB9IGZyb20gJy4vY3NzL3N0eWxlJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCBXaWRnZXRJY29uIGZyb20gJ2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2JyYW5kL3dpZGdldC1zdXJ2ZXkuc3ZnJ1xyXG5cclxuaW1wb3J0IHR5cGUgRXh0ZW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvRXh0ZW50J1xyXG5pbXBvcnQgcXVlcnkgZnJvbSAnZXNyaS9yZXN0L3F1ZXJ5J1xyXG5pbXBvcnQgUXVlcnkgZnJvbSAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknXHJcblxyXG5pbXBvcnQgU3BhdGlhbFJlZmVyZW5jZSBmcm9tICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICBxdWVyeU9iamVjdDogSU1VcmxQYXJhbWV0ZXJzXHJcbn1cclxuLyoqXHJcbiAqIHN1cnZleTEyMyB3aWRnZXRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+ICYgRXh0cmFQcm9wcywgYW55PiB7XHJcbiAgc3RhdGljIG1hcEV4dHJhU3RhdGVQcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSk6IEV4dHJhUHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcXVlcnlPYmplY3Q6IHN0YXRlLnF1ZXJ5T2JqZWN0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzdXJ2ZXkxMjN3ZWJmb3JtIGlmcmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdXJ2ZXkxMjN3ZWJmb3JtOiBhbnlcclxuICBwdWJsaWMgd2ViZm9ybTogYW55IC8vIHRoZSBpbnN0YW5jZSBvZiBzdXJ2ZXkxMjMgd2ViZm9ybSBmcm9tIGpzYXBpXHJcbiAgcHVibGljIGlmcmFtZUNvbnRhaW5lcjogYW55XHJcbiAgcHVibGljIEFQSTogYW55ID0ge1xyXG4gICAgU3VydmV5MTIzV2ViRm9ybTogbnVsbFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRvbUlkOiBzdHJpbmdcclxuICAvLyB0aGUgd2ViIGFwcCBzdGF0dXNcclxuICAvLyB0b2RvOiBuZWVkIHRvIGNoYW5nZSB0aGUgZGVmYXVsdCB3ZWJhcHBTdGF0dXMgdG86ICdsb2FkaW5nJ1xyXG4gIHB1YmxpYyB3ZWJhcHBTdGF0dXM6ICdub3JtYWwnIHwgJ3RoYW5reW91U2NyZWVuJyB8ICdlcnJvcicgfCAnbG9hZGluZycgPSAnbm9ybWFsJ1xyXG4gIC8vIHNob3dEaWZmTG9nID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHN0YXRlID0ge1xyXG4gICAgZmVhdHVyZUxheWVyVmlld0RTOiBudWxsLFxyXG4gICAgc2VsZWN0UmVjb3JkOiBudWxsXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IF9kc01hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgcHJpdmF0ZSBfaXNNYXBWaWV3QWRkZWRDbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2VcclxuICBwcml2YXRlIHJlYWRvbmx5IF9tYXBWaWV3RFNGcm9tRmVhdHVyZUxheWVyVmlldzogYW55IC8vdG9kbzogc2hvdWxkIHJlbW92ZSB0aGlzIHZhcmlhYmxlXHJcbiAgLy8gcHJpdmF0ZSBfbWFwVmlldzogX19lc3JpLk1hcFZpZXdcclxuICBwcml2YXRlIF9mb3JtT3B0aW9uOiBhbnlcclxuICBwcml2YXRlIF9jbGllbnRJZDogYW55XHJcbiAgcHJpdmF0ZSBfY2FjaGVkVW5pcXVlSWQ6IHN0cmluZyAvLyBjYWNoZWQgdW5pcXVlIGlkIHRvIGhlbHAgdG8gZGV0ZXJtaW4gd2hlbiB0byByZWZyZXNoIHRoZSB3ZWJmb3JtXHJcbiAgcHJpdmF0ZSBfY3VycmVudEdsb2JhbElkOiBzdHJpbmdcclxuICAvLyBwcml2YXRlIF9leHRlbnRXYXRjaDogX19lc3JpLldhdGNoSGFuZGxlO1xyXG4gIC8vIHByaXZhdGUgX2NhY2hlZFRpbWVTdGFtcDogbnVtYmVyID0gdGhpcy5wcm9wcy5jb25maWcudGltZXN0YW1wO1xyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5nZXRDbGllbnRJZCgpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBsaXN0ZW4gc3VydmV5MTIzIHdlYmZvcm0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgdGhpcy5saXN0ZW5TdXJ2ZXkxMjNXZWJmb3JtRXZlbnQoKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgc3VydmV5MTIzU2VydmljZS5zZXRRdWVyeU9iamVjdCh0aGlzLnByb3BzLnF1ZXJ5T2JqZWN0KVxyXG4gICAgdGhpcy5wcmVwYXJlKCkgLy90aGlzLmxvYWRTdXJ2ZXlBUEkoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHByZXBhcmU6XHJcbiAgICogZ2V0IHN1cnZleTEyMyBob3N0IHVybCBmcm9tIHBvcnRhbCdzIGNvbmZpZy5qc1xyXG4gICAqIGxvYWQgc3VydmV5MTIzIGpzIGFwaVxyXG4gICAqL1xyXG4gIHByZXBhcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwb3J0YWxVcmwgPSB0aGlzLnByb3BzLmNvbmZpZy5wb3J0YWxVcmwgfHwgdGhpcy5wcm9wcy5wb3J0YWxVcmwgfHwgJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20nXHJcbiAgICBjb25zdCBpc1BvcnRhbCA9ICEocG9ydGFsVXJsVXRpbHMuaXNBR09MRG9tYWluKHBvcnRhbFVybCkpXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBpZiAoaXNQb3J0YWwpIHtcclxuICAgICAgICAgIHJldHVybiBzdXJ2ZXkxMjNTZXJ2aWNlLmdldFN1cnZleUhvc3RVcmxGcm9tUG9ydGFsKHBvcnRhbFVybClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSlcclxuICAgIC8qKlxyXG4gICAgICogbG9hZCBzdXJ2ZXkgY2xpZW50IGFwaVxyXG4gICAgICovXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkU3VydmV5QVBJKClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIC8vIGxvYWQgc3VydmV5IGFwaVxyXG4gIGxvYWRTdXJ2ZXlBUEkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcGlVcmwgPSBzdXJ2ZXkxMjNTZXJ2aWNlLmdldFN1cnZleTEyM0hvc3RBUElVcmwoKVxyXG4gICAgaWYgKCF0aGlzLkFQSS5TdXJ2ZXkxMjNXZWJGb3JtKSB7XHJcbiAgICAgIHJldHVybiBtb2R1bGVMb2FkZXIubG9hZE1vZHVsZShhcGlVcmwpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuU3VydmV5MTIzV2ViRm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLkFQSSA9IGRhdGFcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuQVBJLlN1cnZleTEyM1dlYkZvcm0gPSBkYXRhXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5BUEkuU3VydmV5MTIzV2ViRm9ybVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuQVBJLlN1cnZleTEyM1dlYkZvcm0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEb21JZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbUlkID0gKChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkgfCAwKS50b1N0cmluZygpXHJcbiAgICB0aGlzLmRvbUlkID0gJ3N1cnZleV9jb250YWluZXJfJyArIHRoaXMucHJvcHMuaWQgKyAnXycgKyByYW5kb21JZFxyXG4gICAgcmV0dXJuIHRoaXMuZG9tSWRcclxuICB9XHJcblxyXG4gIC8vIGxpc3RlbiB0aGUgbWFwIGNsaWNrXHJcbiAgLy8gb25BY3RpdmVWaWV3Q2hhbmdlID0gKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykgPT4ge1xyXG4gIC8vICAgaWYgKGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAvLyAgICAgdGhpcy5fbWFwVmlldyA9IGppbXVNYXBWaWV3LnZpZXcgYXMgX19lc3JpLk1hcFZpZXdcclxuICAvLyAgICAgdGhpcy5fbWFwVmlldy53aGVuKCgpID0+IHtcclxuICAvLyAgICAgICB0aGlzLl9tYXBWaWV3Lm9uKCdjbGljaycsIHRoaXMub25NYXBDbGljaylcclxuICAvLyAgICAgfSlcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBjbGljayBldmVudCBvZiBtYXAgdmlld1xyXG4gIC8vIG9uTWFwQ2xpY2sgPSAoc2NyZWVuUG9pbnQpID0+IHtcclxuICAvLyAgIHRoaXMuX21hcFZpZXcuaGl0VGVzdChzY3JlZW5Qb2ludCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgLy8gICAgIGlmIChyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCkge1xyXG4gIC8vICAgICAgIGNvbnN0IGdyYXBoaWNSZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cy5maWx0ZXIociA9PiByLnR5cGUgPT09ICdncmFwaGljJykgYXMgX19lc3JpLkdyYXBoaWNIaXRbXVxyXG4gIC8vICAgICAgIGdyYXBoaWNSZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcclxuICAvLyAgICAgICAgIGNvbnN0IGdyYXBoaWMgPSByZXN1bHQuZ3JhcGhpY1xyXG4gIC8vICAgICAgICAgY29uc3QgbGF5ZXJJZCA9IGdyYXBoaWMubGF5ZXIuaWRcclxuICAvLyAgICAgICAgIGlmICh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWQgKyAnLScgKyBsYXllcklkICE9PSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCkge1xyXG4gIC8vICAgICAgICAgICByZXR1cm5cclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIGNvbnN0IGxheWVyID0gZ3JhcGhpYy5sYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgLy8gICAgICAgICBjb25zdCBvYmplY3RJZEZpZWxkID0gbGF5ZXIub2JqZWN0SWRGaWVsZCB8fCAnb2JqZWN0aWQnXHJcbiAgLy8gICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSh7XHJcbiAgLy8gICAgICAgICAgIHdoZXJlOiBgJHtvYmplY3RJZEZpZWxkfSA9ICR7Z3JhcGhpYy5hdHRyaWJ1dGVzW29iamVjdElkRmllbGRdfWAsXHJcbiAgLy8gICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgLy8gICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlLFxyXG4gIC8vICAgICAgICAgICBvdXRTcGF0aWFsUmVmZXJlbmNlOiBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7IHdraWQ6IDQzMjYgfSlcclxuICAvLyAgICAgICAgIH0pXHJcblxyXG4gIC8vICAgICAgICAgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gIC8vICAgICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcyAmJiByZXN1bHRzLmZlYXR1cmVzWzBdKSB7XHJcbiAgLy8gICAgICAgICAgICAgdGhpcy5mZWF0dXJlTGF5ZXJWaWV3SGFuZGxlcihyZXN1bHRzLmZlYXR1cmVzWzBdKVxyXG4gIC8vICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICB9KVxyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBnZXQgdXNlZCBkYXRhIHNvdXJjZVxyXG4gICAqL1xyXG4gIGdldFVzZWREYXRhU291cmNlICgpIHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1xyXG4gICAgbGV0IGRzID0gbnVsbFxyXG5cclxuICAgIGlmIChkYXRhU291cmNlcyAmJiBkYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VJZCA9IGRhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gICAgICBkcyA9IHRoaXMuX2RzTWFuYWdlci5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZClcclxuICAgIH1cclxuICAgIHJldHVybiBkc1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0IGdsb2JhbElkIGZpZWxkIG5hbWUgZnJvbSB0aGUgZGF0YSBzb3VyY2UgbGF5ZXJcclxuICAgKiBpZiBubyBnbG9iYWxJZCBmaWVsZCwgZmFsbGJhY2sgdG8gdGhlIG9iamVjdCBpZCBmaWVsZFxyXG4gICAqL1xyXG4gIGdldFVuaXF1ZUZpZWxkTmFtZSAoZmFsbGJhY2tUb09iamVjdElkPykge1xyXG4gICAgY29uc3QgZHMgPSB0aGlzLmdldFVzZWREYXRhU291cmNlKClcclxuICAgIGNvbnN0IGxheWVyID0gZHMgPyBkcy5nZXRMYXllckRlZmluaXRpb24oKSA6IG51bGxcclxuICAgIGlmICghbGF5ZXIpIHtcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2xvYmFsSWRGaWVsZCA9IGxheWVyLmdsb2JhbElkRmllbGRcclxuICAgIGNvbnN0IG9iamVjdElkRmllbGQgPSBsYXllci5vYmplY3RJZEZpZWxkXHJcbiAgICBpZiAoZ2xvYmFsSWRGaWVsZCkge1xyXG4gICAgICByZXR1cm4gZ2xvYmFsSWRGaWVsZFxyXG4gICAgfSBlbHNlIGlmIChmYWxsYmFja1RvT2JqZWN0SWQpIHtcclxuICAgICAgcmV0dXJuIG9iamVjdElkRmllbGRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGlzRHNDb25maWd1cmVkXHJcbiAgICovXHJcbiAgaXNEc0NvbmZpZ3VyZWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5jb25maWcubW9kZSB8fCAnbmV3J1xyXG4gICAgaWYgKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgJiZcclxuICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEgJiYgKHRoaXMucHJvcHMuY29uZmlnLmFjdGl2ZUxpbmtEYXRhIHx8IG1vZGUgPT09ICdlZGl0JyB8fCBtb2RlID09PSAndmlldycpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRvIGZlYXR1cmUgbGF5ZXIgcXVlcnkgdG8gZ2V0IGxheWVyJ3MgZmVhdHVyZXMgaW4gdGhlIG1hcCBleHRlbnRcclxuICAgKi9cclxuICBkb1F1ZXJ5ID0gKGV4dGVudDogRXh0ZW50KSA9PiB7XHJcbiAgICBjb25zdCBxID0ge1xyXG4gICAgICBnZW9tZXRyeTogZXh0ZW50LFxyXG4gICAgICBzcGF0aWFsUmVsYXRpb25zaGlwOiAnaW50ZXJzZWN0cycsXHJcbiAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRVc2VkRGF0YVNvdXJjZSgpLmdldFN0YXR1cygpICE9PSBEYXRhU291cmNlU3RhdHVzLkxvYWRpbmcpIHtcclxuICAgICAgdGhpcy5nZXRVc2VkRGF0YVNvdXJjZSgpLmxvYWQocSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hcCB2aWV3IGhhbmRsZXJcclxuICAgKi9cclxuICBtYXBWaWV3SGFuZGxlciAoZHM6IGFueSkge1xyXG4gICAgaWYgKGRzICYmIGRzLnZpZXcgJiYgIXRoaXMuX2lzTWFwVmlld0FkZGVkQ2xpY2tFdmVudCkge1xyXG4gICAgICAvKipcclxuICAgICAgICogYWRkIGNsaWNrIGV2ZW50IG9uIHRoZSBtYXAgdmlld1xyXG4gICAgICAgKi9cclxuICAgICAgY29uc3QgbWFwVmlldyA9IGRzLnZpZXdcclxuICAgICAgbWFwVmlldy5vbignY2xpY2snLCAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFwUG9pbnQgPSBtYXBWaWV3LnRvTWFwKHsgeDogZS54LCB5OiBlLnkgfSlcclxuICAgICAgICBpZiAobWFwUG9pbnQpIHtcclxuICAgICAgICAgIGNvbnN0IGxhdCA9IG1hcFBvaW50LmxhdGl0dWRlXHJcbiAgICAgICAgICBjb25zdCBsbmcgPSBtYXBQb2ludC5sb25naXR1ZGVcclxuXHJcbiAgICAgICAgICB0aGlzLnBvc3RNZXNzYWdlVG9TdXJ2ZXkxMjNXZWJmb3JtKHtcclxuICAgICAgICAgICAgZXZlbnQ6ICdzdXJ2ZXkxMjM6b25EcmF3RW5kJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIHg6IGxuZyxcclxuICAgICAgICAgICAgICB5OiBsYXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuX2lzTWFwVmlld0FkZGVkQ2xpY2tFdmVudCA9IHRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZlYXR1cmUgbGF5ZXIgdmlldyBoYW5kbGVyXHJcbiAgICovXHJcbiAgZmVhdHVyZUxheWVyVmlld0hhbmRsZXIgKGdyYXBoaWM6IGFueSwgZHM/OiBhbnkpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGlmIChncmFwaGljKSB7XHJcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpY1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHMgJiYgZHMuZ2V0U2VsZWN0ZWRSZWNvcmRzKCkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkRHNSZWNvcmQoZHMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgIGlmICghZmVhdHVyZSkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5jb25maWcubW9kZSB8fCAnbmV3J1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAnbmV3JyBtb2RlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gbGV0IGZlYXR1cmUgPSAoc2VsZWN0ZWRSZWNvcmRzWzBdIGFzIEZlYXR1cmVEYXRhUmVjb3JkKS5mZWF0dXJlO1xyXG4gICAgICAgIGlmIChtb2RlID09PSAnbmV3JyAmJiB0aGlzLnByb3BzLmNvbmZpZy5hY3RpdmVMaW5rRGF0YSAmJiB0aGlzLnByb3BzLmNvbmZpZy5maWVsZFF1ZXN0aW9uTWFwcGluZykge1xyXG4gICAgICAgICAgY29uc3QgYXR0ciA9IGZlYXR1cmUuYXR0cmlidXRlcyB8fCB7fSAvLyB0aGUgYXR0cmlidXRlIG9mIHRoZSBzZWxlY3RlZCByZWNvcmRcclxuICAgICAgICAgIGNvbnN0IGRhdGFQYXJhbXMgPSB7fVxyXG4gICAgICAgICAgbGV0IGdlb1BhcmFtcyA9IG51bGxcclxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmZpZWxkUXVlc3Rpb25NYXBwaW5nLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBpdGVtLmZpZWxkXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uTmFtZSA9IGl0ZW0ucXVlc3Rpb25cclxuICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZ2VvbWV0cnknKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnk6IGFueSA9IGZlYXR1cmUuZ2VvbWV0cnlcclxuICAgICAgICAgICAgICAvLyBHZW9Qb2ludFxyXG4gICAgICAgICAgICAgIGlmIChnZW9tZXRyeSAmJiAoZ2VvbWV0cnkueSB8fCBnZW9tZXRyeS55ID09PSAwKSAmJiAoZ2VvbWV0cnkueCB8fCBnZW9tZXRyeS54ID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgZ2VvUGFyYW1zID0gZ2VvbWV0cnlcclxuICAgICAgICAgICAgICAgIGlmICgoZ2VvbWV0cnkubG9uZ2l0dWRlIHx8IGdlb21ldHJ5LmxvbmdpdHVkZSA9PT0gMCkgJiYgKGdlb21ldHJ5LmxhdGl0dWRlIHx8IGdlb21ldHJ5LmxhdGl0dWRlID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICBnZW9QYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogZ2VvbWV0cnkubG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGdlb21ldHJ5LmxhdGl0dWRlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogbm90ZTogd2Ugc2hvdWxkbid0IGNoZWNrIFwiZ2VvbWV0cnkudHlwZVwiIGhlcmUsXHJcbiAgICAgICAgICAgICAgICAgKiBiZWNhdXNlIHNvbWV0aW1lcyB0aGUgc2VsZWN0ZWQgZmVhdHVyZSBmcm9tIGRhdGFTb3VyY2UgaXMgbm90IGFuIEpTQVBJLXR5cGUgZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgICAgKiBhbmQgdGhlIGdlb21ldHJ5IGhhcyBubyB0eXBlIHByb3BlcnR5KGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2RvY3VtZW50YXRpb24vY29tbW9uLWRhdGEtdHlwZXMvZ2VvbWV0cnktb2JqZWN0cy5odG0pXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5ICYmIGdlb21ldHJ5LnBhdGhzICYmIGdlb21ldHJ5LnBhdGhzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUG9seWxpbmVcclxuICAgICAgICAgICAgICAgIGdlb1BhcmFtcyA9IGdlb21ldHJ5XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSAmJiBnZW9tZXRyeS5yaW5ncyAmJiBnZW9tZXRyeS5yaW5ncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFBvbHlnb25cclxuICAgICAgICAgICAgICAgIGdlb1BhcmFtcyA9IGdlb21ldHJ5XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGF0dHJbZmllbGRdXHJcbiAgICAgICAgICAgICAgZGF0YVBhcmFtc1txdWVzdGlvbk5hbWVdID0gdmFsIHx8ICcnXHJcbiAgICAgICAgICAgICAgLy8gZGF0YVBhcmFtcy5wdXNoKGBmaWVsZDoke3F1ZXN0aW9uTmFtZX09JHt2YWwgfHwgJyd9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLnNlbmRWYWx1ZUZyb21NYXBUb1N1cnZleShkYXRhUGFyYW1zLCBnZW9QYXJhbXMpXHJcbiAgICAgICAgICAvLyB0aGlzLl9jYWNoZWRVbmlxdWVJZCA9IHRoaXMuX2N1cnJlbnRHbG9iYWxJZFxyXG4gICAgICAgICAgY29uc3QgdW5pcXVlSWQgPSB0aGlzLmdldEZlYXR1cmVVbmlxdWVJZChmZWF0dXJlLCB0cnVlKVxyXG4gICAgICAgICAgaWYgKHVuaXF1ZUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFVuaXF1ZUlkID0gdW5pcXVlSWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICd2aWV3JyB8fCBtb2RlID09PSAnZWRpdCcpIHtcclxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRHbG9iYWxJZCA9ICcnXHJcbiAgICAgICAgICBjb25zdCBnbG9iYWxJZCA9IHRoaXMuZ2V0RmVhdHVyZVVuaXF1ZUlkKGZlYXR1cmUpXHJcbiAgICAgICAgICBpZiAoZ2xvYmFsSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEdsb2JhbElkID0gZ2xvYmFsSWRcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgZ2xvYmFsIGlkIGZpZWxkIGlzIG5vdCBleGlzdGluZyBpbiB0aGUgc291cmNlIGxheWVyJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJlbmRlckRTKCkgLy8gcmVmcmVzaCB0aGUgd2ViYXBwXHJcbiAgICAgICAgICB0aGlzLl9jYWNoZWRVbmlxdWVJZCA9IHRoaXMuX2N1cnJlbnRHbG9iYWxJZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHNlbmRWYWx1ZUZyb21NYXBUb1N1cnZleSAoZGF0YVBhcmFtcywgZ2VvUGFyYW1zKSB7XHJcbiAgICBpZiAodGhpcy53ZWJhcHBTdGF0dXMgPT09ICdsb2FkaW5nJykge1xyXG4gICAgICAvLyBza2lwXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMud2ViYXBwU3RhdHVzID09PSAnbm9ybWFsJykge1xyXG4gICAgICBpZiAoIXRoaXMud2ViZm9ybSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhUGFyYW1zKSB7XHJcbiAgICAgICAgLy8gY2FsbCBzdXJ2ZXkganNhcGkgdG8gY2hhbmdlIHZhbHVlIG9uLWZseVxyXG4gICAgICAgIHRoaXMud2ViZm9ybS5zZXRRdWVzdGlvblZhbHVlKGRhdGFQYXJhbXMpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdlb1BhcmFtcykge1xyXG4gICAgICAgIGlmIChnZW9QYXJhbXMudG9KU09OKSB7XHJcbiAgICAgICAgICBnZW9QYXJhbXMgPSBnZW9QYXJhbXMudG9KU09OKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53ZWJmb3JtLnNldEdlb21ldHJ5KGdlb1BhcmFtcylcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLndlYmFwcFN0YXR1cyA9PT0gJ3RoYW5reW91U2NyZWVuJykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5idWlsZFdlYkZvcm1Db25maWcoe1xyXG4gICAgICAgIHNldFF1ZXN0aW9uVmFsdWU6IGRhdGFQYXJhbXMsXHJcbiAgICAgICAgc2V0R2VvbWV0cnk6IGdlb1BhcmFtc1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmNyZWF0ZVdlYkZvcm0ob3B0aW9ucylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGxpc3RlbiBzdXJ2ZXkxMjMgd2ViZm9ybSBldmVudCBieSBpZnJhbWUgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGxpc3RlblN1cnZleTEyM1dlYmZvcm1FdmVudCAoKSB7XHJcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSAoZXZ0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGV2dCAmJiBldnQuZGF0YSkge1xyXG4gICAgICAgIGxldCBwYXlsb2FkXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgZXZ0LmRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGV2dC5kYXRhKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChldnQuZGF0YSAmJiBldnQuZGF0YS5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZ0LmRhdGEucGF5bG9hZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShldnQuZGF0YS5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHBheWxvYWQgPSBldnQuZGF0YS5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBheWxvYWQgPSBldnQuZGF0YVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBheWxvYWQpXHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBwYXlsb2FkLmV2ZW50XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHBheWxvYWQuZGF0YVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQgPT09ICdzdXJ2ZXkxMjM6b25EcmF3UG9pbnQnKSB7XHJcbiAgICAgICAgICB0aGlzLm9uRHJhd1BvaW50KGRhdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQgPT09ICdzdXJ2ZXkxMjM6b25Gb3JtTG9hZGVkJykge1xyXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSAnc3VydmV5MTIzOm9uRm9ybUxvYWRlZCcgJiYgcGF5bG9hZC5jb250ZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBzZXQgaWZyYW1lIGhlaWdodFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLy8gdGhpcy5pZnJhbWVDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7cGF5bG9hZC5jb250ZW50SGVpZ2h0IC0gNTB9cHhgO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlmcmFtZUNvbnRhaW5lci5zdHlsZVsncGFkZGluZy1ib3R0b20nXSA9ICdhdXRvJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudCA9PT0gJ3N1cnZleTEyMzpvblN1Ym1pdHRlZCcpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdXJ2ZXkxMjM6b25TdWJtaXR0ZWQhJywgZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudEhhbmRsZXIsIGZhbHNlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBldmVudEhhbmRsZXIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXQgY2xpZW50IGlkIChmb3Igd2ViZm9ybSBqcyBhcGkpXHJcbiAgICovXHJcbiAgZ2V0Q2xpZW50SWQgKCkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxyXG4gICAgdGhpcy5fY2xpZW50SWQgPSAnJ1xyXG4gICAgLy8gc2hvdWxkIHdlIHNlbmQgY2xpZW50IGlkIHRvIHdlYmZvcm0gaWQgd2hlbiB0aGUgY2xpZW50SWQgaXMgJ2V4cGVyaWVuY2VCdWlsZGVyJz9cclxuICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24uY2xpZW50SWQpIHtcclxuICAgIC8vIGlmIChzZXNzaW9uICYmIHNlc3Npb24uY2xpZW50SWQgJiYgc2Vzc2lvbi5jbGllbnRJZCAhPT0gJ2V4cGVyaWVuY2VCdWlsZGVyJykge1xyXG4gICAgICB0aGlzLl9jbGllbnRJZCA9IHNlc3Npb24uY2xpZW50SWRcclxuICAgIH0gZWxzZSBpZiAoZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZz8uYXR0cmlidXRlcz8uY2xpZW50SWQpIHtcclxuICAgICAgdGhpcy5fY2xpZW50SWQgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLmF0dHJpYnV0ZXMuY2xpZW50SWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG9uIGRyYXcgcG9pbnRcclxuICAgKi9cclxuICBvbkRyYXdQb2ludCAoZGF0YT86IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IGRyYXcgcG9pbnQnKVxyXG5cclxuICAgIGlmICh0aGlzLl9tYXBWaWV3RFNGcm9tRmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICB0aGlzLm1hcFZpZXdIYW5kbGVyKHRoaXMuX21hcFZpZXdEU0Zyb21GZWF0dXJlTGF5ZXJWaWV3KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcG9zdCBtZXNzYWdlIHRvIHN1cnZleTEyMyB3ZWJmb3JtXHJcbiAgICovXHJcbiAgcG9zdE1lc3NhZ2VUb1N1cnZleTEyM1dlYmZvcm0gKHBheWxvYWQ6IFN1cnZleTEyM01lc3NhZ2UpIHtcclxuICAgIGlmICh0aGlzLnN1cnZleTEyM3dlYmZvcm0gJiYgdGhpcy5zdXJ2ZXkxMjN3ZWJmb3JtLmNvbnRlbnRXaW5kb3cpIHtcclxuICAgICAgdGhpcy5zdXJ2ZXkxMjN3ZWJmb3JtLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksICcqJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjYW5ub3QgZmluZCBzdXJ2ZXkxMjN3ZWJmb3JtIGlmcmFtZSBjb250ZW50V2luZG93IScpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRGZWF0dXJlVW5pcXVlSWQgKGZlYXR1cmUsIGZhbGxiYWNrVG9PYmplY3RJZD8pIHtcclxuICAgIGlmICghZmVhdHVyZSkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgYXR0ciA9IGZlYXR1cmUuYXR0cmlidXRlcyB8fCB7fSAvLyB0aGUgYXR0cmlidXRlIG9mIHRoZSBzZWxlY3RlZCByZWNvcmRcclxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMuZ2V0VW5pcXVlRmllbGROYW1lKGZhbGxiYWNrVG9PYmplY3RJZClcclxuICAgIGlmIChmaWVsZE5hbWUpIHtcclxuICAgICAgcmV0dXJuIGF0dHJbZmllbGROYW1lXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNyZWF0ZS91cGRhdGUgd2ViZm9ybVxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICovXHJcbiAgY3JlYXRlV2ViRm9ybSAob3B0aW9ucykge1xyXG4gICAgY29uc3QgZm9ybU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZG9tSWQpXHJcbiAgICBpZiAoZm9ybU5vZGUpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRvbUlkKS5pbm5lckhUTUwgPSAnJyAvLyBjbGVhciB0aGUgd2ViZm9ybSBhbmQgcmVsb2FkXHJcbiAgICAgIHRoaXMud2ViZm9ybSA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndlYmFwcFN0YXR1cyA9ICdsb2FkaW5nJ1xyXG4gICAgdGhpcy53ZWJmb3JtID0gbmV3IHRoaXMuQVBJLlN1cnZleTEyM1dlYkZvcm0ob3B0aW9ucylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGJ1aWxkIGNvbmZpZyBmb3Igc3VydmV5IGpzYXBpXHJcbiAgICovXHJcbiAgYnVpbGRXZWJGb3JtQ29uZmlnIChwb3N0UHJvY2Vzcz86IGFueSkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWdcclxuXHJcbiAgICBjb25zdCBvcHRpb246IGFueSA9IHtcclxuICAgICAgY2xpZW50SWQ6IHRoaXMuX2NsaWVudElkIHx8ICdzdXJ2ZXkxMjNodWInLFxyXG4gICAgICBjb250YWluZXI6IHRoaXMuZG9tSWQgfHwgdGhpcy51cGRhdGVEb21JZCgpLFxyXG4gICAgICBpdGVtSWQ6IGNvbmZpZy5zdXJ2ZXlJdGVtSWQsXHJcbiAgICAgIC8vIHBvcnRhbFVybDogJ2h0dHBzOi8vZGV2ZXh0LmFyY2dpcy5jb20nLFxyXG4gICAgICAvLyB0b2tlbjogJycsXHJcbiAgICAgIC8vIGhpZGVFbGVtZW50czogWyduYXZiYXInXSxcclxuICAgICAgLy8gYXV0b1JlZnJlc2g6IDMsXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICBpc0RlYnVnTW9kZTogJ3Byb2R1Y3Rpb24nICE9PSAncHJvZHVjdGlvbidcclxuICAgICAgLy8gZGVmYXVsdFZhbHVlOiB7XHJcbiAgICAgIC8vICAgJ2ZpZWxkXzEnOiAnd2VyZXdyd2V3ZXInXHJcbiAgICAgIC8vIH0sXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9ydGFsIHVybFxyXG4gICAgY29uc3QgcG9ydGFsVXJsID0gY29uZmlnLnBvcnRhbFVybCB8fCB0aGlzLnByb3BzLnBvcnRhbFVybCB8fCAnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbSdcclxuICAgIG9wdGlvbi5wb3J0YWxVcmwgPSBwb3J0YWxVcmxcclxuXHJcbiAgICAvLyB0b2tlblxyXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnByb3BzLnRva2VuXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgb3B0aW9uLnBvcnRhbFVybCA9IHBvcnRhbFVybFxyXG4gICAgICBvcHRpb24udG9rZW4gPSB0b2tlblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dG9SZWZyZXNoXHJcbiAgICBjb25zdCBvcmlnaW5FeGJWZXJzaW9uID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5vcmlnaW5FeGJWZXJzaW9uXHJcbiAgICBjb25zdCBpc09sZFZlcnNpb24gPSBzZW12ZXIubHQob3JpZ2luRXhiVmVyc2lvbiwgd2luZG93LmppbXVDb25maWcuaXNJblBvcnRhbCA/ICcxLjguMCcgOiAnMS45LjAnKVxyXG4gICAgaWYgKGlzT2xkVmVyc2lvbikge1xyXG4gICAgICBvcHRpb24uYXV0b1JlZnJlc2ggPSAzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlIHVybCBwYXJhbXNcclxuICAgICAqL1xyXG4gICAgY29uc3QgaGlkZXMgPSBjb25maWcuaGlkZXMgfHwgSW1tdXRhYmxlKFsnbmF2YmFyJywgJ2hlYWRlcicsICdkZXNjcmlwdGlvbicsICdmb290ZXInLCAndGhlbWUnXSlcclxuICAgIGlmIChoaWRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG9wdGlvbi5oaWRlRWxlbWVudHMgPSBoaWRlc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVmYXVsdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBjb25maWcuZGVmYXVsdFZhbHVlXHJcbiAgICBpZiAoZGVmYXVsdFZhbHVlICYmIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdvYmplY3QnICYmIGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvcHRpb24uZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtb2RlOiBlZGl0L3ZpZXdcclxuICAgICAqL1xyXG4gICAgaWYgKGNvbmZpZy5tb2RlID09PSAnZWRpdCcgfHwgY29uZmlnLm1vZGUgPT09ICd2aWV3Jykge1xyXG4gICAgICBvcHRpb24ubW9kZSA9IGNvbmZpZy5tb2RlXHJcbiAgICAgIG9wdGlvbi5nbG9iYWxJZCA9IHRoaXMuX2N1cnJlbnRHbG9iYWxJZCB8fCAnJ1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN1cnZleVN0YXR1c0NvZGUgd2lsbCBjaGFuZ2UgYWZ0ZXIgc3VydmV5IHJlcHVibGlzaGVkXHJcbiAgICBjb25zdCBjb2RlID0gdGhpcy5wcm9wcy5zdGF0ZVByb3BzID8gdGhpcy5wcm9wcy5zdGF0ZVByb3BzLnN1cnZleVN0YXR1c0NvZGUgOiAwXHJcbiAgICBpZiAoY29kZSkge1xyXG4gICAgICBvcHRpb24uc3VydmV5U3RhdHVzQ29kZSA9IGNvZGVcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBldmVudCBsaXN0ZW5lciwgYWxsIHRoZSBldmVudCBsaXN0ZW5lciBpcyB0byBkZXRlY3QgdGhlIGN1cnJlbnQgd2ViYXBwIHN0YXR1c1xyXG4gICAgICogaHR0cHM6Ly9kZXZ0b3BpYS5lc3JpLmNvbS9CZWlqaW5nLVItRC1DZW50ZXIvRXhwZXJpZW5jZUJ1aWxkZXItV2ViLUV4dGVuc2lvbnMvaXNzdWVzLzQwOTJcclxuICAgICAqL1xyXG4gICAgb3B0aW9uLm9uRm9ybUxvYWRlZCA9IChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMud2ViYXBwU3RhdHVzID0gJ25vcm1hbCdcclxuICAgICAgaWYgKHBvc3RQcm9jZXNzKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kVmFsdWVGcm9tTWFwVG9TdXJ2ZXkocG9zdFByb2Nlc3Muc2V0UXVlc3Rpb25WYWx1ZSwgcG9zdFByb2Nlc3Muc2V0R2VvbWV0cnkpXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy53ZWJhcHBTdGF0dXMgPT09ICdub3JtYWwnKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWZ0ZXIgd2ViYXBwIGxvYWRlZCwgaWYgdGhlIGN1cnJlbnQgbGlua2VkIGRhdGEgc291cmNlIGhhcyBzZWxlY3Rpb24sIHNlbmQgdGhlIHNlbGVjdGlvbiByZWNvcmRzIGZyb20gbWFwIHRvIHN1cnZleVxyXG4gICAgICAgICAqIGh0dHBzOi8vZGV2dG9waWEuZXNyaS5jb20vQmVpamluZy1SLUQtQ2VudGVyL0V4cGVyaWVuY2VCdWlsZGVyLVdlYi1FeHRlbnNpb25zL2lzc3Vlcy8xMDQ5NFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGxpbmtlZERhdGFTb3VyY2UgPSB0aGlzLmdldFVzZWREYXRhU291cmNlKClcclxuICAgICAgICBpZiAobGlua2VkRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgdGhpcy5mZWF0dXJlTGF5ZXJWaWV3SGFuZGxlcihudWxsLCBsaW5rZWREYXRhU291cmNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3B0aW9uLm9uRm9ybVN1Ym1pdHRlZCA9IChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMud2ViYXBwU3RhdHVzID0gJ3RoYW5reW91U2NyZWVuJ1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIGh0dHBzOi8vZGV2dG9waWEuZXNyaS5jb20vQmVpamluZy1SLUQtQ2VudGVyL0V4cGVyaWVuY2VCdWlsZGVyLVdlYi1FeHRlbnNpb25zL2lzc3Vlcy8xMzM3NVxyXG4gICAgICAgKi9cclxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHRoaXMuZ2V0VXNlZERhdGFTb3VyY2UoKVxyXG4gICAgICBpZiAoZGF0YVNvdXJjZSkge1xyXG4gICAgICAgIGRhdGFTb3VyY2UuYWRkVmVyc2lvbigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9wdGlvbi5vbkZvcm1GYWlsZWQgPSAoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMud2ViYXBwU3RhdHVzID0gJ2Vycm9yJ1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvcHRpb25cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldCB3ZWJmb3JtIHVybFxyXG4gICAqL1xyXG4gIGdldFdlYmZvcm1VcmwgKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHN1cnZleUl0ZW1JZCA9IGNvbmZpZy5zdXJ2ZXlJdGVtSWRcclxuICAgIGNvbnN0IHBvcnRhbFVybCA9IGNvbmZpZy5wb3J0YWxVcmwgfHwgdGhpcy5wcm9wcy5wb3J0YWxVcmwgfHwgJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20nXHJcbiAgICBsZXQgd2ViZm9ybVVybDogc3RyaW5nID0gbnVsbFxyXG5cclxuICAgIGlmIChzdXJ2ZXlJdGVtSWQpIHtcclxuICAgICAgLyoqXHJcbiAgICAgKiB1cmwgcGFyYW1zXHJcbiAgICAgKi9cclxuICAgICAgY29uc3QgdXJsUGFyYW1zOiBzdHJpbmdbXSA9IFtdXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogcG9ydGFsVXJsXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAocG9ydGFsVXJsICE9PSAnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbScpIHtcclxuICAgICAgICB1cmxQYXJhbXMucHVzaChgcG9ydGFsVXJsPSR7cG9ydGFsVXJsfWApXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cnZleTEyM1NlcnZpY2UuZ2V0U3VydmV5MTIzSG9zdFVybCgpID09PSAnaHR0cHM6Ly9zdXJ2ZXkxMjNkZXYuYXJjZ2lzLmNvbScgJiYgcG9ydGFsVXJsID09PSAnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbScpIHtcclxuICAgICAgICB1cmxQYXJhbXMucHVzaChgcG9ydGFsVXJsPSR7cG9ydGFsVXJsfWApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBlbWJlZCB1cmwgcGFyYW1zXHJcbiAgICAgICAqL1xyXG4gICAgICBsZXQgZW1iZWRzID0gY29uZmlnLmVtYmVkcyB8fCBbXSAvLyB8fCBbJ2Z1bGxTY3JlZW4nLCAnb25TdWJtaXR0ZWQnLCAnYXNzb2NpYXRlZE1hcCddO1xyXG4gICAgICBpZiAoIWVtYmVkcy5pbmNsdWRlcygnanNhcGknKSkge1xyXG4gICAgICAgIGVtYmVkcyA9IGVtYmVkcy5jb25jYXQoWydqc2FwaSddKSAvLyBmcm9tIDMuNywgd2UgbXVzdCB0byBhZGQgZW1iZWQ9anNhcGkgdG8gbGV0IHBvc3RNZXNzYWdlOiBzZXRQYXJhbXMgd29ya1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZW1iZWRzLmluY2x1ZGVzKCdvblN1Ym1pdHRlZCcpKSB7XHJcbiAgICAgICAgZW1iZWRzID0gZW1iZWRzLmNvbmNhdChbJ29uU3VibWl0dGVkJ10pXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVtYmVkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdXJsUGFyYW1zLnB1c2goYGVtYmVkPSR7ZW1iZWRzLmpvaW4oJywnKX1gKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogaGlkZSB1cmwgcGFyYW1zXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCBoaWRlcyA9IGNvbmZpZy5oaWRlcyB8fCBbJ25hdmJhcicsICdoZWFkZXInLCAnZGVzY3JpcHRpb24nLCAnZm9vdGVyJywgJ3RoZW1lJ11cclxuICAgICAgaWYgKGhpZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB1cmxQYXJhbXMucHVzaChgaGlkZT0ke2hpZGVzLmpvaW4oJywnKX1gKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgKi9cclxuICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gY29uZmlnLmRlZmF1bHRWYWx1ZVxyXG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICYmIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdvYmplY3QnICYmIGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRWYWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICB1cmxQYXJhbXMucHVzaChgZmllbGQ6JHtrZXl9PSR7ZGVmYXVsdFZhbHVlW2tleV19YClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogb3BlbiBtb2RlXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCBvcGVuID0gY29uZmlnLm9wZW4gfHwgJ3dlYidcclxuICAgICAgY29uc3Qgb3BlbldoaXRlTGlzdHMgPSBbJ3dlYicsICdtZW51JywgJ25hdGl2ZSddXHJcbiAgICAgIGlmIChvcGVuICYmIG9wZW4gIT09ICd3ZWInICYmIG9wZW5XaGl0ZUxpc3RzLmluY2x1ZGVzKG9wZW4pKSB7XHJcbiAgICAgICAgdXJsUGFyYW1zLnB1c2goYG9wZW49JHtvcGVufWApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiB0b2tlblxyXG4gICAgICAgKiB3ZSBjYW4gYWRkIHRva2VuIGluIHVybCBwYXJhbXMgdG8gYXZvaWQgbG9naW4gaW4gc3VydmV5MTIzIHdlYmZvcm1cclxuICAgICAgICogVE9ETzpcclxuICAgICAgICogbmVlZCB0byBhc2sgSnVuc2hhbiBob3cgdG8gZ2V0IHVzZXIgdG9rZW4gaW4gdGhlIHdpZGdldFxyXG4gICAgICAgKi9cclxuICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnByb3BzLnRva2VuXHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHVybFBhcmFtcy5wdXNoKGB0b2tlbj0ke3Rva2VufWApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBuZWVkIHRvIHNldCB2ZXJzaW9uID49My4yIHRvIHVzZSBoaWRlIGFuZCBlbWJlZCBwYXJhbXNcclxuICAgICAgICovXHJcbiAgICAgIC8vIHVybFBhcmFtcy5wdXNoKCd2ZXJzaW9uPWxhdGVzdCcpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIGFkZCBhdXRvUmVmcmVzaD0zXHJcbiAgICAgICAqIHRvIGF1dG8gcmVmcmVzaCBpbiAzcyBhZnRlciBzdWJtaXRcclxuICAgICAgICovXHJcbiAgICAgIHVybFBhcmFtcy5wdXNoKCdhdXRvUmVmcmVzaD0zJylcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBhZGQgdGltZXN0YW1wIHJhbmRvbiBwYXJhbXMgdG8gZW5zdXJlIHRoZSBpZnJhbWUgY2FuIHJlZnJlc2ggY29ycmVjdGx5XHJcbiAgICAgICAqIG9ubHkgd2hlbiB0aW1lc3RhbXAgaXMgZGlmZmVyZW50XHJcbiAgICAgICAqL1xyXG4gICAgICAvLyBsZXQgY29uZmlnVGltZXN0YW1wID0gY29uZmlnLnRpbWVzdGFtcDtcclxuICAgICAgLy8gaWYgKGNvbmZpZ1RpbWVzdGFtcCAmJiB0aGlzLl9jYWNoZWRUaW1lU3RhbXAgIT09IGNvbmZpZ1RpbWVzdGFtcCkge1xyXG4gICAgICAvLyAgIHRoaXMuX2NhY2hlZFRpbWVTdGFtcCA9IGNvbmZpZ1RpbWVzdGFtcDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyB1cmxQYXJhbXMucHVzaChgdGltZXN0YW1wPSR7dGhpcy5fY2FjaGVkVGltZVN0YW1wfWApO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIHdlYmZvcm0gdXJsXHJcbiAgICAgICAqL1xyXG4gICAgICB3ZWJmb3JtVXJsID0gc3VydmV5MTIzU2VydmljZS5nZXRTdXJ2ZXkxMjNXZWJmb3JtVXJsKHN1cnZleUl0ZW1JZCwge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB1cmxQYXJhbXNcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2ViZm9ybVVybFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZGF0YSBzb3VyY2UgcmVuZGVyZXJcclxuICAgKi9cclxuICAvLyBkYXRhUmVuZGVyID0gKGRzOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgLy8gICAvKipcclxuICAvLyAgICAqIGlmIG1hcFZpZXcgZGF0YXNvdXJjZVxyXG4gIC8vICAgICovXHJcbiAgLy8gICBpZiAoZHMudHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkge1xyXG4gIC8vICAgICB0aGlzLm1hcFZpZXdIYW5kbGVyKGRzKVxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIC8qKlxyXG4gIC8vICAgICogaWYgZmVhdHVyZWxheWVyVmlldyBkYXRhc291cmNlXHJcbiAgLy8gICAgKi9cclxuICAvLyAgIGlmIChkcy50eXBlID09PSBEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyKSB7XHJcbiAgLy8gICAgIHRoaXMuZmVhdHVyZUxheWVyVmlld0hhbmRsZXIobnVsbCwgZHMpXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVjayB0aGUgd2ViZm9ybSBvcHRpb24gY2hhbmdlXHJcbiAgICovXHJcbiAgY2hlY2tXZWJmb3JtT3B0aW9uQ2hhbmdlZCA9IChuZXdPcHRpb24pID0+IHtcclxuICAgIGNvbnN0IGNhY2hlZE9wdGlvbiA9IHRoaXMuX2Zvcm1PcHRpb25cclxuICAgIGlmIChPYmplY3QuaXMoY2FjaGVkT3B0aW9uLCBuZXdPcHRpb24pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKCFjYWNoZWRPcHRpb24gJiYgbmV3T3B0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoY2FjaGVkT3B0aW9uLml0ZW1JZCAhPT0gbmV3T3B0aW9uLml0ZW1JZCB8fFxyXG4gICAgICBjYWNoZWRPcHRpb24uc3VydmV5SXRlbUlkICE9PSBuZXdPcHRpb24uc3VydmV5SXRlbUlkIHx8XHJcbiAgICAgIGNhY2hlZE9wdGlvbi5wb3J0YWxVcmwgIT09IG5ld09wdGlvbi5wb3J0YWxVcmwgfHxcclxuICAgICAgY2FjaGVkT3B0aW9uLnRva2VuICE9PSBuZXdPcHRpb24udG9rZW4gfHxcclxuICAgICAgY2FjaGVkT3B0aW9uLnN1cnZleVN0YXR1c0NvZGUgIT09IG5ld09wdGlvbi5zdXJ2ZXlTdGF0dXNDb2RlIHx8XHJcbiAgICAgIChjYWNoZWRPcHRpb24ubW9kZSB8fCAnbmV3JykgIT09IChuZXdPcHRpb24ubW9kZSB8fCAnbmV3JykgfHxcclxuICAgICAgKChuZXdPcHRpb24ubW9kZSA9PT0gJ2VkaXQnIHx8IG5ld09wdGlvbi5tb2RlID09PSAndmlldycpICYmIHRoaXMuX2NhY2hlZFVuaXF1ZUlkICE9PSB0aGlzLl9jdXJyZW50R2xvYmFsSWQpIHx8XHJcbiAgICAgIChjYWNoZWRPcHRpb24uaGlkZUVsZW1lbnRzID8gY2FjaGVkT3B0aW9uLmhpZGVFbGVtZW50cy5hc011dGFibGUoKSA6IFtdKS5zb3J0KCkuam9pbignLCcpICE9PSAobmV3T3B0aW9uLmhpZGVFbGVtZW50cyA/IG5ld09wdGlvbi5oaWRlRWxlbWVudHMuYXNNdXRhYmxlKCkgOiBbXSkuc29ydCgpLmpvaW4oJywnKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB1cGRhdGUgc3R5bGVcclxuICAgKi9cclxuICB1cGRhdGVTdHlsZSA9ICgpID0+IHtcclxuICAgIC8vIG9ubHkgZm9yIHNhZmFyaVxyXG4gICAgY29uc3QgdWEgPSB3aW5kb3cuamltdVVBLmJyb3dzZXIgPyAod2luZG93LmppbXVVQS5icm93c2VyLm5hbWUgKyAnJykudG9Mb3dlckNhc2UoKSA6ICcnXHJcbiAgICBpZiAodWEgPT09ICdzYWZhcmknKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmRvbUlkKVxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBmb3JtTm9kZS5zdHlsZS5jc3NUZXh0ID0gJ292ZXJmbG93LXk6IGF1dG87J1xyXG4gICAgICBjb25zdCByb290Tm9kZSA9IGZvcm1Ob2RlLmNsb3Nlc3QoJy53aWRnZXQtY29udGVudCcpXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHJvb3ROb2RlLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGFic29sdXRlOydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldCBzZWxlY3RlZCByZWNvcmQgZnJvbSB0aGUgZGF0YSBzb3VyY2VcclxuICAgKiBpZiB0aGUgZ2VvbWV0cnkgc3BhdGlhbCByZWZlcmVuY2UgaXMgbm90IHdlYiBtZXJjYXRvciBvciBXR1M4NCxcclxuICAgKiBzZW5kIGEgcmVxdWVzdCB0byBnZXQgYSBuZXcgZ2VvbWV0cnkgYnkgc3BlY2lmaXkgdGhlIHJldHVybmVkIHdraWQgYXMgNDMyNlxyXG4gICAqL1xyXG4gIGdldFNlbGVjdGVkRHNSZWNvcmQgPSAoZHMpID0+IHtcclxuICAgIGlmICghZHMpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVjb3JkID0gZHMuZ2V0U2VsZWN0ZWRSZWNvcmRzKClcclxuICAgIGlmICghcmVjb3JkIHx8ICFyZWNvcmQubGVuZ3RoIHx8ICEocmVjb3JkWzBdLmZlYXR1cmUpKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZWF0dXJlID0gcmVjb3JkWzBdLmZlYXR1cmVcclxuICAgIC8qKlxyXG4gICAgICogIzE4MjY2LCBpZiB0aGVyZSBhcmUgZmllbGRzIG1pc3NpbmcsIG5lZWQgdG8gcXVlcnkgZm9yIGFsbCBmaWVsZHNcclxuICAgICAqL1xyXG4gICAgbGV0IGhhc01pc3NpbmdGaWVsZHM6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMucHJvcHMuY29uZmlnLm1vZGUgfHwgJ25ldydcclxuICAgIGxldCByZXF1aXJlZEZpZWxkczogYW55ID0gW11cclxuICAgIGlmIChtb2RlID09PSAnbmV3JyAmJiB0aGlzLnByb3BzLmNvbmZpZy5hY3RpdmVMaW5rRGF0YSAmJiB0aGlzLnByb3BzLmNvbmZpZy5maWVsZFF1ZXN0aW9uTWFwcGluZykge1xyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5maWVsZFF1ZXN0aW9uTWFwcGluZy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICByZXF1aXJlZEZpZWxkcy5wdXNoKGl0ZW0uZmllbGQpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICd2aWV3JyB8fCBtb2RlID09PSAnZWRpdCcpIHtcclxuICAgICAgY29uc3QgZ2xvYmFsSWRGaWVsZCA9IHRoaXMuZ2V0VW5pcXVlRmllbGROYW1lKClcclxuICAgICAgcmVxdWlyZWRGaWVsZHMgPSBnbG9iYWxJZEZpZWxkID8gW2dsb2JhbElkRmllbGRdIDogW11cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmVhdHVyZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRGaWVsZHMgPSBPYmplY3Qua2V5cyhmZWF0dXJlLmF0dHJpYnV0ZXMpXHJcbiAgICAgIGhhc01pc3NpbmdGaWVsZHMgPSByZXF1aXJlZEZpZWxkcy5maW5kKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAhKGN1cnJlbnRGaWVsZHMuaW5jbHVkZXMoZmllbGQpKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGFzTWlzc2luZ0ZpZWxkcykge1xyXG4gICAgICBsZXQgc3IgPSBmZWF0dXJlLmdlb21ldHJ5Py5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgIGlmICghc3IpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNyID0gbmV3IFNwYXRpYWxSZWZlcmVuY2UodHlwZW9mIHNyLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyA/IHNyLnRvSlNPTigpIDogc3IpXHJcbiAgICAgIC8vICMxNDY3NiwgZm9yIHBvbHlnb24vcG9seWxpbmUsIGlmIHRoZSBnZW9tZXRyeSBpcyB3ZWIgbWVyY2F0b3IsIHdlIHN0aWxsIG5lZWQgdG8gc2VuZCByZXF1ZXN0XHJcbiAgICAgIGlmIChzci5pc1dHUzg0KSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmZWF0dXJlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBwb2ludCB0eXBlIGFuZCB0aGUgZ2VtZXRyeSBpcyBBR1NKU0FQSS10eXBlIGFuZCB0aGUgbG9uZ2l0dWRlL2xhdGl0dWRlIGlzIGV4aXN0aW5nXHJcbiAgICAgIGlmICgoZmVhdHVyZS5nZW9tZXRyeS5sb25naXR1ZGUgfHwgZmVhdHVyZS5nZW9tZXRyeS5sb25naXR1ZGUgPT09IDApICYmIChmZWF0dXJlLmdlb21ldHJ5LmxhdGl0dWRlIHx8IGZlYXR1cmUuZ2VvbWV0cnkubGF0aXR1ZGUgPT09IDApKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmZWF0dXJlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIHNwYXRpYWwgcmVmZXJlbmNlIGlzIG5vdCB3ZWIgbWVyY2F0b3Igb3IgV0dTODQsIHNlbmQgYSByZXF1ZXN0IHRvIGdldCBhIGNvbnZlcnRlZCBXR1M4NCBnZW9lbXRyeVxyXG4gICAgaWYgKCFkcy51cmwpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmZWF0dXJlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaWRGaWVsZCA9IGRzLmdldElkRmllbGQoKSB8fCAnb2JqZWN0aWQnXHJcbiAgICBjb25zdCBxdWVyeU9wdGlvbiA9IG5ldyBRdWVyeSh7XHJcbiAgICAgIHdoZXJlOiBgJHtpZEZpZWxkfSA9ICR7ZmVhdHVyZS5hdHRyaWJ1dGVzW2lkRmllbGRdfWAsXHJcbiAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlLFxyXG4gICAgICBvdXRTcGF0aWFsUmVmZXJlbmNlOiBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7IHdraWQ6IDQzMjYgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHF1ZXJ5LmV4ZWN1dGVRdWVyeUpTT04oZHMudXJsLCBxdWVyeU9wdGlvbikudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcyAmJiByZXN1bHRzLmZlYXR1cmVzWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXNbMF1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmVhdHVyZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRGF0YVNvdXJjZUNyZWF0ZWQgPSAoKSA9PiB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25EYXRhU291cmNlSW5mb0NoYW5nZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLl9kc01hbmFnZXIuZ2V0RGF0YVNvdXJjZSh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCkgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZVxyXG4gICAgaWYgKGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gY2FsbCB0aGUgc3luYyBmdW5jdGlvbiBnZXRTZWxlY3RlZFJlY29yZHMgaGVyZSB0byBkZXRlY3Qgd2hldGhlciBuZWVkIHRvIHNlbmQgZmVhdHVyZSB0byBzdXJ2ZXlcclxuICAgICAgY29uc3QgcmVjb3JkID0gZGF0YVNvdXJjZS5nZXRTZWxlY3RlZFJlY29yZHMoKVxyXG4gICAgICBpZiAocmVjb3JkICYmIHJlY29yZC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBmZWF0dXJlID0gKHJlY29yZFswXSBhcyBhbnkpLmZlYXR1cmVcclxuICAgICAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5jb25maWcubW9kZSB8fCAnbmV3J1xyXG5cclxuICAgICAgICBjb25zdCB1bmlxdWVJZCA9IHRoaXMuZ2V0RmVhdHVyZVVuaXF1ZUlkKGZlYXR1cmUsIG1vZGUgPT09ICduZXcnKVxyXG4gICAgICAgIGlmICghdW5pcXVlSWQgfHwgdW5pcXVlSWQgIT09IHRoaXMuX2NhY2hlZFVuaXF1ZUlkKSB7XHJcbiAgICAgICAgICAvLyAjNTY5OSwgaWYgdGhlIHNvdXJjZSBsYXllciBpcyBzY2VuZSBsYXllciwgaXQncyBub3QgbmVjZXNzYXJ5IHRvIHNlbmQgcmVxdWVzdCB0byBnZXQgZ2VvbWV0cnkgd2l0aCBzcGVjaWZpZWQgd2tpZFxyXG4gICAgICAgICAgY29uc3QgaXNTY2VuZUxheWVyID0gKGRhdGFTb3VyY2UudHlwZSArICcnKS50b1VwcGVyQ2FzZSgpID09PSAnU0NFTkVfTEFZRVInXHJcbiAgICAgICAgICBpZiAoaXNTY2VuZUxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZUxheWVyVmlld0hhbmRsZXIoZmVhdHVyZSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGwgdGhlIGFzeW5jIGZ1bmN0aW9uIGdldFNlbGVjdGVkRHNSZWNvcmQgaGVyZSBiZWNhdXNlIG1heWJlIGEgbmV3IHJlcXVlc3QgaXMgbmVlZGVkXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWREc1JlY29yZChkYXRhU291cmNlKS50aGVuKChmZWF0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlTGF5ZXJWaWV3SGFuZGxlcihmZWF0dXJlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRGZWF0dXJlRHNJZCA9ICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZEZlYXR1cmVEc0lkXHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5fZHNNYW5hZ2VyLmdldERhdGFTb3VyY2UodGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQpIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcclxuICAgIGlmIChkYXRhU291cmNlKSB7XHJcbiAgICAgIGNvbnN0IHJlYyA9IGRhdGFTb3VyY2UuZ2V0U2VsZWN0ZWRSZWNvcmRzKClcclxuICAgICAgaWYgKHJlYy5sZW5ndGggPjAgKSB7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZSA9IChyZWNbMF0gYXMgYW55KS5mZWF0dXJlXHJcbiAgICAgICAgc2VsZWN0ZWRGZWF0dXJlRHNJZCA9IGZlYXR1cmUubGF5ZXIuZGF0YVNvdXJjZUlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzZWxlY3RlZEZlYXR1cmVEc0lkICE9PSBudWxsID8gc2VsZWN0ZWRGZWF0dXJlRHNJZDogbnVsbFxyXG4gIH1cclxuICAgIFxyXG4gIG9wZW5SYXRpbmdXaWRnZXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnJlZnJlc2hNYXAoKVxyXG4gICAgdGhpcy5vcGVuQW5vdGhlcldpZGdldCgpXHJcbiAgICB0aGlzLmNsb3NlQ3VycmVudFdpZGdldCgpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaE1hcCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0W01hcF0gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFsnZXNyaS9NYXAnXSlcclxuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoe1xyXG4gICAgICBsYXllcnM6IHRoaXMucHJvcHMuamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzXHJcbiAgICB9KVxyXG4gICAgdGhpcy5wcm9wcy5qaW11TWFwVmlldy51cGRhdGVNYXAobWFwKVxyXG4gIH1cclxuXHJcbiAgb3BlbkFub3RoZXJXaWRnZXQgPSAoKSA9PiB7XHJcbiAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTonT1BFTl9XSURHRVQnLFxyXG4gICAgICB3aWRnZXRJZDond2lkZ2V0XzQzJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsb3NlQ3VycmVudFdpZGdldCA9ICgpID0+IHtcclxuICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOidDTE9TRV9XSURHRVQnLFxyXG4gICAgICB3aWRnZXRJZDogdGhpcy5wcm9wcy5pZFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbmRlciBkc1xyXG4gICAqL1xyXG4gIHJlbmRlckRTICgpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLl9kc01hbmFnZXIuZ2V0RGF0YVNvdXJjZSh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCkgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZVxyXG5cclxuICAgIGxldCB1c2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgLyoqXHJcbiAgICAgKiBiZWNhdXNlIHdlJ3JlIG5vdyBjYWxsaW5nIHRoZSBzdXJ2ZXkganNhcGkgdG8gY3JlYXRlL3VwZGF0IHRoZSBzdXJ2ZXkgd2ViZm9ybVxyXG4gICAgICogd2UgbmVlZCB0byBkZXRlY3Qgd2ViZm9ybSBvcHRpb24gY2hhbmdlXHJcbiAgICAgKiBpZiB0aGUgdGhlIHN1cnZleUlkL2hpZGVFbGVtZW50cy90b2tlbi9wb3J0YWxVcmwgaXMgY2hhbmdlZCwgd2Ugc2hvdWxkIHJlY3JlYXRlIHRoZSB3ZWJmb3JtXHJcbiAgICAgKiBpZiB0aGUgZGVmYXVsdCB2YWx1ZSBjaGFuZ2VkLCBvciB0aGUgZW50aXJlIG9wdGlvbiBpcyBub3QgY2hhbmdlZCBhdCBhbGwsIGRvIG5vdCByZWNyZWF0ZSB0aGUgd2ViZm9ybVxyXG4gICAgICovXHJcbiAgICBsZXQgZHNJZCA9IG51bGxcclxuICAgIGxldCByb290RHNJZCA9IG51bGxcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5idWlsZFdlYkZvcm1Db25maWcoKVxyXG4gICAgaWYgKHRoaXMuaXNEc0NvbmZpZ3VyZWQoKSkge1xyXG4gICAgICAvKipcclxuICAgICAgICogZ2V0IHVzZWQgZGF0YSBzb3VyY2VcclxuICAgICAgICovXHJcbiAgICAgIGRzSWQgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gICAgICByb290RHNJZCA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxyXG4gICAgICB1c2VEYXRhU291cmNlID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1swXVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IG5lZWRSZWNyZWF0ZVdlYmZvcm0gPSB0aGlzLmNoZWNrV2ViZm9ybU9wdGlvbkNoYW5nZWQob3B0aW9ucylcclxuICAgIHRoaXMuX2Zvcm1PcHRpb24gPSBvcHRpb25zXHJcbiAgICBjb25zdCB3ZWJmb3JtVXJsID0gdGhpcy5nZXRXZWJmb3JtVXJsKClcclxuXHJcbiAgICB0aGlzLnByZXBhcmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKHdlYmZvcm1VcmwgJiYgKCF0aGlzLndlYmZvcm0gfHwgbmVlZFJlY3JlYXRlV2ViZm9ybSkpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVdlYkZvcm0ob3B0aW9ucylcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKClcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChkc0lkICYmIHJvb3REc0lkICYmIHRoaXMuaXNEc0NvbmZpZ3VyZWQoKSkge1xyXG4gICAgICByZXR1cm4gPERhdGFTb3VyY2VDb21wb25lbnRcclxuICAgICAgd2lkZ2V0SWQ9e2lkfVxyXG4gICAgICB1c2VEYXRhU291cmNlPXtJbW11dGFibGUodXNlRGF0YVNvdXJjZSl9XHJcbiAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3RoaXMub25EYXRhU291cmNlQ3JlYXRlZH1cclxuICAgICAgb25EYXRhU291cmNlSW5mb0NoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VJbmZvQ2hhbmdlfVxyXG4gICAgICAvLyBvblF1ZXJ5UmVxdWlyZWQ9e3RoaXMub25RdWVyeVJlcXVpcmVkfVxyXG4gICAgLz5cclxuXHJcbiAgICAgIC8vIHJldHVybiA8RGF0YVNvdXJjZUNvbXBvbmVudCB1c2VEYXRhU291cmNlPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdfT5cclxuICAgICAgLy8gICB7XHJcbiAgICAgIC8vICAgICB0aGlzLmRhdGFSZW5kZXJcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIDwvRGF0YVNvdXJjZUNvbXBvbmVudD5cclxuICAgICAgLy8gcmV0dXJuIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX0gPjwvSmltdU1hcFZpZXdDb21wb25lbnQ+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW5kZXJcclxuICAgKi9cclxuICByZW5kZXIgKCkge1xyXG4gICAgc3VydmV5MTIzU2VydmljZS5zZXRRdWVyeU9iamVjdCh0aGlzLnByb3BzLnF1ZXJ5T2JqZWN0KVxyXG4gICAgY29uc3Qgd2ViZm9ybVVybCA9IHRoaXMuZ2V0V2ViZm9ybVVybCgpXHJcbiAgICAvLyBsZXQgb3B0aW9ucyA9IHRoaXMuYnVpbGRXZWJGb3JtQ29uZmlnKCk7XHJcbiAgICBsZXQgcmVzdWx0XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpZiBubyB3ZWJmb3JtVXJsXHJcbiAgICAgKi9cclxuICAgIGlmICghd2ViZm9ybVVybCkge1xyXG4gICAgICByZXN1bHQgPSA8ZGl2IGNsYXNzTmFtZT1cInN1cnZleTEyM19fbm9TdXJ2ZXlcIj5cclxuICAgICAgICA8V2lkZ2V0UGxhY2Vob2xkZXIgaWNvbj17V2lkZ2V0SWNvbn0gbWVzc2FnZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ193aWRnZXRMYWJlbCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuX3dpZGdldExhYmVsIH0pfSB3aWRnZXRJZD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmRvbUlkKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEb21JZCgpXHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0ID0gPGRpdiBjbGFzc05hbWU9XCJzdXJ2ZXkxMjNfX3dlYmZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLWNvbnRhaW5lclwiIGlkPXt0aGlzLmRvbUlkfT48L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZW1iZWQtY29udGFpbmVyXCIgcmVmPXsoZikgPT4gdGhpcy5pZnJhbWVDb250YWluZXIgPSBmfT5cclxuICAgICAgICAgIDxpZnJhbWUgbmFtZT1cInN1cnZleTEyM3dlYmZvcm1cIiB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjQwMFwiIHNyYz17d2ViZm9ybVVybH0gcmVmPXsoZikgPT4gdGhpcy5zdXJ2ZXkxMjN3ZWJmb3JtID0gZn0+PC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vPGlmcmFtZSBzcmM9e3dlYmZvcm1Vcmx9IG5hbWU9XCJzdXJ2ZXkxMjN3ZWJmb3JtXCIgcmVmPXsoZikgPT4gdGhpcy5zdXJ2ZXkxMjN3ZWJmb3JtID0gZn0+PC9pZnJhbWU+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGh0bWxcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjc3M9e2dldFN0eWxlKHRoaXMucHJvcHMudGhlbWUpfSBjbGFzc05hbWU9XCJzdXJ2ZXkxMjNcIj4gXHJcbiAgICAgICAgey8qXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3N0YXJ0UmF0aW5nJ1xyXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgb25DbGljayA9IHt0aGlzLm9wZW5SYXRpbmdXaWRnZXR9XHJcbiAgICAgICAgICA+IFxyXG4gICAgICAgICAgICBSYXRpbmcgRmVhdHVyZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKi99XHJcbiAgICAgICAgeyByZXN1bHQgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vdGhpcy5yZW5kZXJMYXlvdXQoKVxyXG4gICAgICAgICAgdGhpcy5yZW5kZXJEUygpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgXHJcbiAgfVxyXG5cclxuICByZW5kZXJMYXlvdXQgKCkge1xyXG5cclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VJZCA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXHJcbiAgICBjb25zdCBzZWxlY3RlZEZlYXR1cmVEc0lkID0gdGhpcy5nZXRTZWxlY3RlZEZlYXR1cmVEc0lkKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt1c2VEYXRhU291cmNlSWQgPT09IHNlbGVjdGVkRmVhdHVyZURzSWQgPyB0aGlzLnJlbmRlckRTKCkgOiBzZWxlY3RlZEZlYXR1cmVEc0lkfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==