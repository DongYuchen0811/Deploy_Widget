System.register(["jimu-core","jimu-ui","jimu-ui/basic/sql-expression-runtime"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@esri/arcgis-rest-feature-layer/dist/esm/add.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-feature-layer/dist/esm/add.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFeatures: () => (/* binding */ addFeatures)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@esri/arcgis-rest-feature-layer/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @esri/arcgis-rest-request */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/clean-url.js");
/* harmony import */ var _esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @esri/arcgis-rest-request */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/append-custom-params.js");
/* harmony import */ var _esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @esri/arcgis-rest-request */ "./node_modules/@esri/arcgis-rest-request/dist/esm/request.js");
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */


/**
 * ```js
 * import { addFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * addFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   features: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }]
 * })
 *   .then(response)
 * ```
 * Add features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/add-features.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */
function addFeatures(requestOptions) {
    var url = (0,_esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_0__.cleanUrl)(requestOptions.url) + "/addFeatures";
    // edit operations are POST only
    var options = (0,_esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_1__.appendCustomParams)(requestOptions, ["features", "gdbVersion", "returnEditMoment", "rollbackOnFailure"], { params: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, requestOptions.params) });
    return (0,_esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_3__.request)(url, options);
}
//# sourceMappingURL=add.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-feature-layer/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-feature-layer/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/request.js":
/*!********************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/request.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGISAuthError: () => (/* binding */ ArcGISAuthError),
/* harmony export */   NODEJS_DEFAULT_REFERER_HEADER: () => (/* binding */ NODEJS_DEFAULT_REFERER_HEADER),
/* harmony export */   checkForErrors: () => (/* binding */ checkForErrors),
/* harmony export */   request: () => (/* binding */ request),
/* harmony export */   setDefaultRequestOptions: () => (/* binding */ setDefaultRequestOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@esri/arcgis-rest-request/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_encode_form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/encode-form-data */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-form-data.js");
/* harmony import */ var _utils_encode_query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/encode-query-string */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-query-string.js");
/* harmony import */ var _utils_process_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/process-params */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js");
/* harmony import */ var _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ArcGISRequestError */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/ArcGISRequestError.js");
/* harmony import */ var _utils_warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/warn */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/warn.js");
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */






var NODEJS_DEFAULT_REFERER_HEADER = "@esri/arcgis-rest-js";
var DEFAULT_ARCGIS_REQUEST_OPTIONS = {
    httpMethod: "POST",
    params: {
        f: "json",
    },
};
/**
 * Sets the default options that will be passed in **all requests across all `@esri/arcgis-rest-js` modules**.
 *
 *
 * ```js
 * import { setDefaultRequestOptions } from "@esri/arcgis-rest-request";
 * setDefaultRequestOptions({
 *   authentication: userSession // all requests will use this session by default
 * })
 * ```
 * You should **never** set a default `authentication` when you are in a server side environment where you may be handling requests for many different authenticated users.
 *
 * @param options The default options to pass with every request. Existing default will be overwritten.
 * @param hideWarnings Silence warnings about setting default `authentication` in shared environments.
 */
function setDefaultRequestOptions(options, hideWarnings) {
    if (options.authentication && !hideWarnings) {
        (0,_utils_warn__WEBPACK_IMPORTED_MODULE_0__.warn)("You should not set `authentication` as a default in a shared environment such as a web server which will process multiple users requests. You can call `setDefaultRequestOptions` with `true` as a second argument to disable this warning.");
    }
    DEFAULT_ARCGIS_REQUEST_OPTIONS = options;
}
var ArcGISAuthError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ArcGISAuthError, _super);
    /**
     * Create a new `ArcGISAuthError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options of the request
     */
    function ArcGISAuthError(message, code, response, url, options) {
        if (message === void 0) { message = "AUTHENTICATION_ERROR"; }
        if (code === void 0) { code = "AUTHENTICATION_ERROR_CODE"; }
        var _this = _super.call(this, message, code, response, url, options) || this;
        _this.name = "ArcGISAuthError";
        _this.message =
            code === "AUTHENTICATION_ERROR_CODE" ? message : code + ": " + message;
        return _this;
    }
    ArcGISAuthError.prototype.retry = function (getSession, retryLimit) {
        var _this = this;
        if (retryLimit === void 0) { retryLimit = 3; }
        var tries = 0;
        var retryRequest = function (resolve, reject) {
            getSession(_this.url, _this.options)
                .then(function (session) {
                var newOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _this.options), { authentication: session });
                tries = tries + 1;
                return request(_this.url, newOptions);
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (e) {
                if (e.name === "ArcGISAuthError" && tries < retryLimit) {
                    retryRequest(resolve, reject);
                }
                else if (e.name === "ArcGISAuthError" && tries >= retryLimit) {
                    reject(_this);
                }
                else {
                    reject(e);
                }
            });
        };
        return new Promise(function (resolve, reject) {
            retryRequest(resolve, reject);
        });
    };
    return ArcGISAuthError;
}(_utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError));

/**
 * Checks for errors in a JSON response from the ArcGIS REST API. If there are no errors, it will return the `data` passed in. If there is an error, it will throw an `ArcGISRequestError` or `ArcGISAuthError`.
 *
 * @param data The response JSON to check for errors.
 * @param url The url of the original request
 * @param params The parameters of the original request
 * @param options The options of the original request
 * @returns The data that was passed in the `data` parameter
 */
function checkForErrors(response, url, params, options, originalAuthError) {
    // this is an error message from billing.arcgis.com backend
    if (response.code >= 400) {
        var message = response.message, code = response.code;
        throw new _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError(message, code, response, url, options);
    }
    // error from ArcGIS Online or an ArcGIS Portal or server instance.
    if (response.error) {
        var _a = response.error, message = _a.message, code = _a.code, messageCode = _a.messageCode;
        var errorCode = messageCode || code || "UNKNOWN_ERROR_CODE";
        if (code === 498 ||
            code === 499 ||
            messageCode === "GWM_0003" ||
            (code === 400 && message === "Unable to generate token.")) {
            if (originalAuthError) {
                throw originalAuthError;
            }
            else {
                throw new ArcGISAuthError(message, errorCode, response, url, options);
            }
        }
        throw new _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError(message, errorCode, response, url, options);
    }
    // error from a status check
    if (response.status === "failed" || response.status === "failure") {
        var message = void 0;
        var code = "UNKNOWN_ERROR_CODE";
        try {
            message = JSON.parse(response.statusMessage).message;
            code = JSON.parse(response.statusMessage).code;
        }
        catch (e) {
            message = response.statusMessage || response.message;
        }
        throw new _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError(message, code, response, url, options);
    }
    return response;
}
/**
 * ```js
 * import { request } from '@esri/arcgis-rest-request';
 * //
 * request('https://www.arcgis.com/sharing/rest')
 *   .then(response) // response.currentVersion === 5.2
 * //
 * request('https://www.arcgis.com/sharing/rest', {
 *   httpMethod: "GET"
 * })
 * //
 * request('https://www.arcgis.com/sharing/rest/search', {
 *   params: { q: 'parks' }
 * })
 *   .then(response) // response.total => 78379
 * ```
 * Generic method for making HTTP requests to ArcGIS REST API endpoints.
 *
 * @param url - The URL of the ArcGIS REST API endpoint.
 * @param requestOptions - Options for the request, including parameters relevant to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function request(url, requestOptions) {
    if (requestOptions === void 0) { requestOptions = { params: { f: "json" } }; }
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ httpMethod: "POST" }, DEFAULT_ARCGIS_REQUEST_OPTIONS), requestOptions), {
        params: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, DEFAULT_ARCGIS_REQUEST_OPTIONS.params), requestOptions.params),
        headers: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, DEFAULT_ARCGIS_REQUEST_OPTIONS.headers), requestOptions.headers),
    });
    var missingGlobals = [];
    var recommendedPackages = [];
    // don't check for a global fetch if a custom implementation was passed through
    if (!options.fetch && typeof fetch !== "undefined") {
        options.fetch = fetch.bind(Function("return this")());
    }
    else {
        missingGlobals.push("`fetch`");
        recommendedPackages.push("`node-fetch`");
    }
    if (typeof Promise === "undefined") {
        missingGlobals.push("`Promise`");
        recommendedPackages.push("`es6-promise`");
    }
    if (typeof FormData === "undefined") {
        missingGlobals.push("`FormData`");
        recommendedPackages.push("`isomorphic-form-data`");
    }
    if (!options.fetch ||
        typeof Promise === "undefined" ||
        typeof FormData === "undefined") {
        throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing " + missingGlobals.join(", ") + ". We recommend installing the " + recommendedPackages.join(", ") + " modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");
    }
    var httpMethod = options.httpMethod, authentication = options.authentication, rawResponse = options.rawResponse;
    var params = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ f: "json" }, options.params);
    var originalAuthError = null;
    var fetchOptions = {
        method: httpMethod,
        /* ensures behavior mimics XMLHttpRequest.
        needed to support sending IWA cookies */
        credentials: options.credentials || "same-origin",
    };
    // the /oauth2/platformSelf route will add X-Esri-Auth-Client-Id header
    // and that request needs to send cookies cross domain
    // so we need to set the credentials to "include"
    if (options.headers &&
        options.headers["X-Esri-Auth-Client-Id"] &&
        url.indexOf("/oauth2/platformSelf") > -1) {
        fetchOptions.credentials = "include";
    }
    return (authentication
        ? authentication.getToken(url, { fetch: options.fetch }).catch(function (err) {
            /**
             * append original request url and requestOptions
             * to the error thrown by getToken()
             * to assist with retrying
             */
            err.url = url;
            err.options = options;
            /**
             * if an attempt is made to talk to an unfederated server
             * first try the request anonymously. if a 'token required'
             * error is thrown, throw the UNFEDERATED error then.
             */
            originalAuthError = err;
            return Promise.resolve("");
        })
        : Promise.resolve(""))
        .then(function (token) {
        if (token.length) {
            params.token = token;
        }
        if (authentication && authentication.getDomainCredentials) {
            fetchOptions.credentials = authentication.getDomainCredentials(url);
        }
        // Custom headers to add to request. IRequestOptions.headers with merge over requestHeaders.
        var requestHeaders = {};
        if (fetchOptions.method === "GET") {
            // Prevents token from being passed in query params when hideToken option is used.
            /* istanbul ignore if - window is always defined in a browser. Test case is covered by Jasmine in node test */
            if (params.token &&
                options.hideToken &&
                // Sharing API does not support preflight check required by modern browsers https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request
                typeof window === "undefined") {
                requestHeaders["X-Esri-Authorization"] = "Bearer " + params.token;
                delete params.token;
            }
            // encode the parameters into the query string
            var queryParams = (0,_utils_encode_query_string__WEBPACK_IMPORTED_MODULE_3__.encodeQueryString)(params);
            // dont append a '?' unless parameters are actually present
            var urlWithQueryString = queryParams === "" ? url : url + "?" + (0,_utils_encode_query_string__WEBPACK_IMPORTED_MODULE_3__.encodeQueryString)(params);
            if (
            // This would exceed the maximum length for URLs specified by the consumer and requires POST
            (options.maxUrlLength &&
                urlWithQueryString.length > options.maxUrlLength) ||
                // Or if the customer requires the token to be hidden and it has not already been hidden in the header (for browsers)
                (params.token && options.hideToken)) {
                // the consumer specified a maximum length for URLs
                // and this would exceed it, so use post instead
                fetchOptions.method = "POST";
                // If the token was already added as a Auth header, add the token back to body with other params instead of header
                if (token.length && options.hideToken) {
                    params.token = token;
                    // Remove existing header that was added before url query length was checked
                    delete requestHeaders["X-Esri-Authorization"];
                }
            }
            else {
                // just use GET
                url = urlWithQueryString;
            }
        }
        /* updateResources currently requires FormData even when the input parameters dont warrant it.
    https://developers.arcgis.com/rest/users-groups-and-items/update-resources.htm
        see https://github.com/Esri/arcgis-rest-js/pull/500 for more info. */
        var forceFormData = new RegExp("/items/.+/updateResources").test(url);
        if (fetchOptions.method === "POST") {
            fetchOptions.body = (0,_utils_encode_form_data__WEBPACK_IMPORTED_MODULE_4__.encodeFormData)(params, forceFormData);
        }
        // Mixin headers from request options
        fetchOptions.headers = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, requestHeaders), options.headers);
        /* istanbul ignore next - karma reports coverage on browser tests only */
        if (typeof window === "undefined" && !fetchOptions.headers.referer) {
            fetchOptions.headers.referer = NODEJS_DEFAULT_REFERER_HEADER;
        }
        /* istanbul ignore else blob responses are difficult to make cross platform we will just have to trust the isomorphic fetch will do its job */
        if (!(0,_utils_process_params__WEBPACK_IMPORTED_MODULE_5__.requiresFormData)(params) && !forceFormData) {
            fetchOptions.headers["Content-Type"] =
                "application/x-www-form-urlencoded";
        }
        return options.fetch(url, fetchOptions);
    })
        .then(function (response) {
        if (!response.ok) {
            // server responded w/ an actual error (404, 500, etc)
            var status_1 = response.status, statusText = response.statusText;
            throw new _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError(statusText, "HTTP " + status_1, response, url, options);
        }
        if (rawResponse) {
            return response;
        }
        switch (params.f) {
            case "json":
                return response.json();
            case "geojson":
                return response.json();
            case "html":
                return response.text();
            case "text":
                return response.text();
            /* istanbul ignore next blob responses are difficult to make cross platform we will just have to trust that isomorphic fetch will do its job */
            default:
                return response.blob();
        }
    })
        .then(function (data) {
        if ((params.f === "json" || params.f === "geojson") && !rawResponse) {
            var response = checkForErrors(data, url, params, options, originalAuthError);
            if (originalAuthError) {
                /* If the request was made to an unfederated service that
                didn't require authentication, add the base url and a dummy token
                to the list of trusted servers to avoid another federation check
                in the event of a repeat request */
                var truncatedUrl = url
                    .toLowerCase()
                    .split(/\/rest(\/admin)?\/services\//)[0];
                options.authentication.federatedServers[truncatedUrl] = {
                    token: [],
                    // default to 24 hours
                    expires: new Date(Date.now() + 86400 * 1000),
                };
                originalAuthError = null;
            }
            return response;
        }
        else {
            return data;
        }
    });
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/ArcGISRequestError.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/ArcGISRequestError.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGISRequestError: () => (/* binding */ ArcGISRequestError)
/* harmony export */ });
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
// TypeScript 2.1 no longer allows you to extend built in types. See https://github.com/Microsoft/TypeScript/issues/12790#issuecomment-265981442
// and https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
//
// This code is from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types.
var ArcGISRequestError = /** @class */ (function () {
    /**
     * Create a new `ArcGISRequestError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options and parameters of the request
     */
    function ArcGISRequestError(message, code, response, url, options) {
        message = message || "UNKNOWN_ERROR";
        code = code || "UNKNOWN_ERROR_CODE";
        this.name = "ArcGISRequestError";
        this.message =
            code === "UNKNOWN_ERROR_CODE" ? message : code + ": " + message;
        this.originalMessage = message;
        this.code = code;
        this.response = response;
        this.url = url;
        this.options = options;
    }
    return ArcGISRequestError;
}());

ArcGISRequestError.prototype = Object.create(Error.prototype);
ArcGISRequestError.prototype.constructor = ArcGISRequestError;
//# sourceMappingURL=ArcGISRequestError.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/append-custom-params.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/append-custom-params.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendCustomParams: () => (/* binding */ appendCustomParams)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@esri/arcgis-rest-request/node_modules/tslib/tslib.es6.js");
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/**
 * Helper for methods with lots of first order request options to pass through as request parameters.
 */
function appendCustomParams(customOptions, keys, baseOptions) {
    var requestOptionsKeys = [
        "params",
        "httpMethod",
        "rawResponse",
        "authentication",
        "portal",
        "fetch",
        "maxUrlLength",
        "headers"
    ];
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ params: {} }, baseOptions), customOptions);
    // merge all keys in customOptions into options.params
    options.params = keys.reduce(function (value, key) {
        if (customOptions[key] || typeof customOptions[key] === "boolean") {
            value[key] = customOptions[key];
        }
        return value;
    }, options.params);
    // now remove all properties in options that don't exist in IRequestOptions
    return requestOptionsKeys.reduce(function (value, key) {
        if (options[key]) {
            value[key] = options[key];
        }
        return value;
    }, {});
}
//# sourceMappingURL=append-custom-params.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/clean-url.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/clean-url.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanUrl: () => (/* binding */ cleanUrl)
/* harmony export */ });
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper method to ensure that user supplied urls don't include whitespace or a trailing slash.
 */
function cleanUrl(url) {
    // Guard so we don't try to trim something that's not a string
    if (typeof url !== "string") {
        return url;
    }
    // trim leading and trailing spaces, but not spaces inside the url
    url = url.trim();
    // remove the trailing slash to the url if one was included
    if (url[url.length - 1] === "/") {
        url = url.slice(0, -1);
    }
    return url;
}
//# sourceMappingURL=clean-url.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-form-data.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-form-data.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeFormData: () => (/* binding */ encodeFormData)
/* harmony export */ });
/* harmony import */ var _process_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-params */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js");
/* harmony import */ var _encode_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encode-query-string */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-query-string.js");
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */


/**
 * Encodes parameters in a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object in browsers or in a [FormData](https://github.com/form-data/form-data) in Node.js
 *
 * @param params An object to be encoded.
 * @returns The complete [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object.
 */
function encodeFormData(params, forceFormData) {
    // see https://github.com/Esri/arcgis-rest-js/issues/499 for more info.
    var useFormData = (0,_process_params__WEBPACK_IMPORTED_MODULE_0__.requiresFormData)(params) || forceFormData;
    var newParams = (0,_process_params__WEBPACK_IMPORTED_MODULE_0__.processParams)(params);
    if (useFormData) {
        var formData_1 = new FormData();
        Object.keys(newParams).forEach(function (key) {
            if (typeof Blob !== "undefined" && newParams[key] instanceof Blob) {
                /* To name the Blob:
                 1. look to an alternate request parameter called 'fileName'
                 2. see if 'name' has been tacked onto the Blob manually
                 3. if all else fails, use the request parameter
                */
                var filename = newParams["fileName"] || newParams[key].name || key;
                formData_1.append(key, newParams[key], filename);
            }
            /* istanbul ignore next */
            else if (newParams[key].constructor &&
                newParams[key].constructor.name === 'ReadStream' &&
                // TODO: only specify the knownLength option if a valid value is given.
                // If we can verify in all REST API that the option is need for
                // node ReadStream, it can throw an error for the missing dataSize value.
                // Note that such change will be a breaking change.
                Number.isInteger(newParams["dataSize"])) {
                // have to cast the formData to any so that I can use the unofficial API
                // in the form-data library to handle Node ReadStream. See
                // https://github.com/form-data/form-data/issues/508
                formData_1.append(key, newParams[key], {
                    knownLength: newParams["dataSize"]
                });
            }
            else {
                formData_1.append(key, newParams[key]);
            }
        });
        return formData_1;
    }
    else {
        return (0,_encode_query_string__WEBPACK_IMPORTED_MODULE_1__.encodeQueryString)(params);
    }
}
//# sourceMappingURL=encode-form-data.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-query-string.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-query-string.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeParam: () => (/* binding */ encodeParam),
/* harmony export */   encodeQueryString: () => (/* binding */ encodeQueryString)
/* harmony export */ });
/* harmony import */ var _process_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-params */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js");
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/**
 * Encodes keys and parameters for use in a URL's query string.
 *
 * @param key Parameter's key
 * @param value Parameter's value
 * @returns Query string with key and value pairs separated by "&"
 */
function encodeParam(key, value) {
    // For array of arrays, repeat key=value for each element of containing array
    if (Array.isArray(value) && value[0] && Array.isArray(value[0])) {
        return value.map(function (arrayElem) { return encodeParam(key, arrayElem); }).join("&");
    }
    return encodeURIComponent(key) + "=" + encodeURIComponent(value);
}
/**
 * Encodes the passed object as a query string.
 *
 * @param params An object to be encoded.
 * @returns An encoded query string.
 */
function encodeQueryString(params) {
    var newParams = (0,_process_params__WEBPACK_IMPORTED_MODULE_0__.processParams)(params);
    return Object.keys(newParams)
        .map(function (key) {
        return encodeParam(key, newParams[key]);
    })
        .join("&");
}
//# sourceMappingURL=encode-query-string.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processParams: () => (/* binding */ processParams),
/* harmony export */   requiresFormData: () => (/* binding */ requiresFormData)
/* harmony export */ });
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Checks parameters to see if we should use FormData to send the request
 * @param params The object whose keys will be encoded.
 * @return A boolean indicating if FormData will be required.
 */
function requiresFormData(params) {
    return Object.keys(params).some(function (key) {
        var value = params[key];
        if (!value) {
            return false;
        }
        if (value && value.toParam) {
            value = value.toParam();
        }
        var type = value.constructor.name;
        switch (type) {
            case "Array":
                return false;
            case "Object":
                return false;
            case "Date":
                return false;
            case "Function":
                return false;
            case "Boolean":
                return false;
            case "String":
                return false;
            case "Number":
                return false;
            default:
                return true;
        }
    });
}
/**
 * Converts parameters to the proper representation to send to the ArcGIS REST API.
 * @param params The object whose keys will be encoded.
 * @return A new object with properly encoded values.
 */
function processParams(params) {
    var newParams = {};
    Object.keys(params).forEach(function (key) {
        var _a, _b;
        var param = params[key];
        if (param && param.toParam) {
            param = param.toParam();
        }
        if (!param &&
            param !== 0 &&
            typeof param !== "boolean" &&
            typeof param !== "string") {
            return;
        }
        var type = param.constructor.name;
        var value;
        // properly encodes objects, arrays and dates for arcgis.com and other services.
        // ported from https://github.com/Esri/esri-leaflet/blob/master/src/Request.js#L22-L30
        // also see https://github.com/Esri/arcgis-rest-js/issues/18:
        // null, undefined, function are excluded. If you want to send an empty key you need to send an empty string "".
        switch (type) {
            case "Array":
                // Based on the first element of the array, classify array as an array of arrays, an array of objects
                // to be stringified, or an array of non-objects to be comma-separated
                // eslint-disable-next-line no-case-declarations
                var firstElementType = (_b = (_a = param[0]) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name;
                value =
                    firstElementType === "Array" ? param : // pass thru array of arrays
                        firstElementType === "Object" ? JSON.stringify(param) : // stringify array of objects
                            param.join(","); // join other types of array elements
                break;
            case "Object":
                value = JSON.stringify(param);
                break;
            case "Date":
                value = param.valueOf();
                break;
            case "Function":
                value = null;
                break;
            case "Boolean":
                value = param + "";
                break;
            default:
                value = param;
                break;
        }
        if (value || value === 0 || typeof value === "string" || Array.isArray(value)) {
            newParams[key] = value;
        }
    });
    return newParams;
}
//# sourceMappingURL=process-params.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/warn.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/warn.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warn: () => (/* binding */ warn)
/* harmony export */ });
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Method used internally to surface messages to developers.
 */
function warn(message) {
    if (console && console.warn) {
        console.warn.apply(console, [message]);
    }
}
//# sourceMappingURL=warn.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/node_modules/tslib/tslib.es6.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./jimu-icons/svg/filled/directional/down.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/filled/directional/down.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m14 4-6 8-6-8z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/reset.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/reset.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M14.938 8A7 7 0 0 1 1.01 9H0a8.001 8.001 0 0 0 15.938-1A8 8 0 0 0 1.02 3.98L1 .702a.5.5 0 1 0-1 .006L.031 5.9l5.128-.826a.5.5 0 0 0-.16-.987L1.819 4.6A7 7 0 0 1 14.938 8\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/uniperFilter/icon.svg":
/*!*******************************************************!*\
  !*** ./your-extensions/widgets/uniperFilter/icon.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M14 0H0v1.207l5.5 5.5v4.5l2.146 2.147A.5.5 0 0 0 8.5 13V6.707l5.5-5.5zM6.5 6.293 1.207 1h11.586L7.5 6.293v5.5l-1-1z\" clip-rule=\"evenodd\"></path><path fill=\"#000\" d=\"M15 2.793V2h1v1.207l-4.5 4.5V15.5a.5.5 0 0 1-.854.354L10 15.207v-1.414l.5.5v-7z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/filled/directional/down.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/filled/directional/down.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownFilled: () => (/* binding */ DownFilled)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_filled_directional_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/filled/directional/down.svg */ "./jimu-icons/svg/filled/directional/down.svg");
/* harmony import */ var _svg_filled_directional_down_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_filled_directional_down_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const DownFilled = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_filled_directional_down_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/reset.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/reset.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetOutlined: () => (/* binding */ ResetOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/reset.svg */ "./jimu-icons/svg/outlined/editor/reset.svg");
/* harmony import */ var _svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const ResetOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./your-extensions/widgets/uniperFilter/src/config.ts":
/*!************************************************************!*\
  !*** ./your-extensions/widgets/uniperFilter/src/config.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterArrangeType: () => (/* binding */ FilterArrangeType),
/* harmony export */   FilterTriggerType: () => (/* binding */ FilterTriggerType)
/* harmony export */ });
var FilterArrangeType;
(function (FilterArrangeType) {
    FilterArrangeType["Block"] = "BLOCK";
    FilterArrangeType["Inline"] = "INLINE";
    FilterArrangeType["Popper"] = "POPPER";
})(FilterArrangeType || (FilterArrangeType = {}));
var FilterTriggerType;
(function (FilterTriggerType) {
    FilterTriggerType["Toggle"] = "TOGGLE";
    FilterTriggerType["Button"] = "BUTTON";
})(FilterTriggerType || (FilterTriggerType = {}));


/***/ }),

/***/ "./your-extensions/widgets/uniperFilter/src/runtime/filter-item-ds.tsx":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/uniperFilter/src/runtime/filter-item-ds.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterItemDataSource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/** @jsx jsx */

class FilterItemDataSource extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onDataSourceCreated = (ds) => {
            this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId, ds);
        };
        this.onDataSourceInfoChange = (info) => {
            this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId, info === null || info === void 0 ? void 0 : info.status);
        };
        this.onCreateDataSourceFailed = () => {
            this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId, null);
        };
    }
    componentWillUnmount() {
        this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId, null);
        this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady);
    }
    render() {
        const { useDataSource } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDataSource, onDataSourceCreated: this.onDataSourceCreated, onCreateDataSourceFailed: this.onCreateDataSourceFailed, onDataSourceInfoChange: this.onDataSourceInfoChange }));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/uniperFilter/src/runtime/filter-item.tsx":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/uniperFilter/src/runtime/filter-item.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterItem)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/uniperFilter/src/config.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/sql-expression-runtime */ "jimu-ui/basic/sql-expression-runtime");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./your-extensions/widgets/uniperFilter/src/runtime/style.ts");
/* harmony import */ var jimu_icons_filled_directional_down__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/filled/directional/down */ "./jimu-icons/filled/directional/down.tsx");
/** @jsx jsx */






const allDefaultMessages = Object.assign({}, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages, jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
const modifiers = [
    {
        name: 'preventOverflow',
        options: {
            altAxis: true
        }
    }
];
class FilterItem extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.getSqlExprObjFromItem = () => {
            const { selectedDs, config } = this.props;
            let sqlExpr = config.sqlExprObj;
            if (config.isGroup) {
                sqlExpr = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDisplayedSQLExpressionFromGroupSQLExpression(config.sqlExprObjForGroup, selectedDs, this.formatMessage);
            }
            return sqlExpr;
        };
        this.formatMessage = (id, values) => {
            return this.props.intl.formatMessage({ id: id, defaultMessage: allDefaultMessages[id] }, values);
        };
        this.getOutPutWidgetLabel = () => {
            var _a;
            const widgets = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets;
            const wId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.getWidgetIdByOutputDataSource(this.props.useDataSource);
            return (_a = widgets[wId]) === null || _a === void 0 ? void 0 : _a.label;
        };
        this.getAppliedState = () => {
            let applied = this.props.config.autoApplyWhenWidgetOpen;
            if (this.props.omitInternalStyle && this.endUserClausesNum === 1 && this.clausesNumConfigured === 1) {
                applied = true;
            }
            return applied;
        };
        this.oncollapsedChange = () => {
            this.setState({ collapsed: !this.state.collapsed });
        };
        this.onApplyChange = (checked) => {
            this.setState({ sqlChanged: false });
            this.props.onChange(this.props.id, this.props.selectedDs, this.state.sqlExprObj, checked);
        };
        this.onToggleChange = (checked) => {
            this.setState({ applied: checked });
            this.onApplyChange(checked);
        };
        this.onPillClick = (hasPopper, pillTarget) => {
            if (hasPopper) {
                this.setState({
                    popperVersion: !this.state.isOpen ? this.state.popperVersion + 1 : this.state.popperVersion
                });
                this.onTogglePopper();
            }
            else {
                const willActive = pillTarget.className.indexOf('active') < 0;
                this.onToggleChange(!!willActive);
            }
        };
        this.onSqlExpressionChange = (sqlExprObj) => {
            const { omitInternalStyle, id, selectedDs, triggerType, onChange } = this.props;
            const isSqlChanged = this.getSqlExprObjFromItem().sql !== (sqlExprObj === null || sqlExprObj === void 0 ? void 0 : sqlExprObj.sql);
            this.setState({
                sqlExprObj: sqlExprObj,
                sqlChanged: !!(triggerType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Button && !omitInternalStyle && isSqlChanged)
            });
            if (triggerType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Toggle || omitInternalStyle) {
                onChange(id, selectedDs, sqlExprObj, this.state.applied);
            }
        };
        this.onTogglePopper = () => {
            if (this.state.isOpen) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
                    this.pillButton.focus();
                });
            }
            this.setState({ isOpen: !this.state.isOpen });
        };
        this.getFilterItem = (hasEndUserClauses, isTitleHidden = false) => {
            const { icon, name } = this.props.config;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'h-100' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('d-flex justify-content-between w-100 pr-2 align-items-center', jimu_ui__WEBPACK_IMPORTED_MODULE_2__.FOCUSABLE_CONTAINER_CLASS, isTitleHidden ? 'flex-row-reverse' : '') },
                    !isTitleHidden && hasEndUserClauses && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', icon: true, type: 'tertiary', onClick: this.oncollapsedChange, className: 'jimu-outline-inside' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_filled_directional_down__WEBPACK_IMPORTED_MODULE_5__.DownFilled, { className: this.state.collapsed ? 'filter-item-arrow' : '', size: 's' })),
                    !isTitleHidden && icon && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('filter-item-icon', hasEndUserClauses ? '' : 'no-arrow') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: icon.svg, size: icon.properties.size })),
                    !isTitleHidden && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('filter-item-name flex-grow-1', !hasEndUserClauses && !icon ? 'no-icons' : '') }, name),
                    this.props.triggerType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Toggle && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'ml-1 d-flex align-items-center' }, this.getToggle())),
                this.state.sqlExprObj && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: this.state.collapsed ? 'none' : 'block' }, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 pl-6 pr-6', this.state.collapsed ? '' : jimu_ui__WEBPACK_IMPORTED_MODULE_2__.FOCUSABLE_CONTAINER_CLASS, this.props.arrangeType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Inline && this.props.filterNum === 1 && this.props.omitInternalStyle ? 'sql-expression-inline' : '', this.props.arrangeType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Inline && this.props.filterNum === 1 && this.props.wrap ? 'sql-expression-wrap' : '') }, this.getSqlExpression()),
                this.props.triggerType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Button && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-end pl-5 pr-5 pt-2 pb-2' }, this.getApplyButtons())));
        };
        this.isDataSourceError = () => {
            return this.props.selectedDs === null;
        };
        this.isOutputFromWidget = () => {
            var _a;
            return (_a = this.props.selectedDs) === null || _a === void 0 ? void 0 : _a.getDataSourceJson().isOutputFromWidget;
        };
        this.isOutputDataSourceValid = () => {
            return this.isOutputFromWidget() && !this.props.isNotReadyFromWidget;
        };
        this.isOutputDataSourceInvalid = () => {
            return this.isOutputFromWidget() && this.props.isNotReadyFromWidget;
        };
        // valid: for display all clauses of current filter.
        this.isDataSourceValid = () => {
            return this.props.selectedDs && ((this.isOutputFromWidget() && !this.props.isNotReadyFromWidget) || !this.isOutputDataSourceInvalid());
        };
        // loading or invalid: for the enabled/disabled state of Swith and Button.
        this.isDataSourceLoadingOrInvalid = () => {
            return !this.isDataSourceValid();
        };
        this.getErrorIcon = () => {
            if (this.isDataSourceError()) {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { buttonType: 'tertiary', form: 'tooltip', size: 'small', type: 'error', text: this.formatMessage('dataSourceCreateError') }));
            }
            else if (this.isOutputDataSourceInvalid()) {
                const warningLabel = this.formatMessage('outputDataIsNotGenerated', { outputDsLabel: this.props.selectedDs.getLabel(), sourceWidgetName: this.state.outputWidgetLabel });
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { buttonType: 'tertiary', form: 'tooltip', size: 'small', type: 'warning', text: warningLabel }));
            }
            else {
                return null;
            }
        };
        this.getToggle = () => {
            // bind error icon with toggle
            // return <Switch checked={this.state.applied} disabled={!this.props.selectedDs} onChange={evt => this.onToggleChange(evt.target.checked)} />
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                this.getErrorIcon(),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: this.state.applied, disabled: this.isDataSourceLoadingOrInvalid(), "aria-label": this.props.config.name, onChange: evt => { this.onToggleChange(evt.target.checked); } })));
        };
        this.getApplyButtons = () => {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 d-flex justify-content-end apply-cancel-group' },
                this.getErrorIcon(),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: 'primary', className: 'filter-apply-button wrap', disabled: this.isDataSourceLoadingOrInvalid() || !!(this.state.applied && !this.state.sqlChanged), onClick: () => { this.onApplyChange(true); } }, this.formatMessage('apply')),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: 'default', className: 'filter-cancel-button ml-2', disabled: this.isDataSourceLoadingOrInvalid() || !this.state.applied, onClick: () => { this.onApplyChange(false); } }, this.formatMessage('cancel'))));
        };
        this.getTriggerNodeForClauses = (triggerType = this.props.triggerType) => {
            let Trigger = null;
            switch (triggerType) {
                case _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Toggle:
                    Trigger = this.getToggle();
                    break;
                case _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Button:
                    Trigger = this.getApplyButtons();
                    break;
                default:
                    break;
            }
            return Trigger;
        };
        this.getSqlExpression = () => {
            return this.isDataSourceValid()
                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_3__.SqlExpressionRuntime, { widgetId: this.props.widgetId, dataSource: this.props.selectedDs, expression: this.state.sqlExprObj, onChange: this.onSqlExpressionChange })
                : null;
        };
        /* toggle(TR) or button(BR): for wrap multiple clauses */
        this.getTirggerNodeForWrapClauses = (triggerType) => {
            return triggerType === this.props.triggerType && this.isSingleFilterAndMultipleClauses() && this.props.wrap && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-row-reverse' }, this.getTriggerNodeForClauses(triggerType));
        };
        /* toggle or button (Right) for no-wrap multiple clauses */
        this.getTriggerNodeForNoWrapClause = () => {
            return this.isSingleFilterAndMultipleClauses() && !this.props.wrap && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'ml-4' }, this.getTriggerNodeForClauses());
        };
        const { collapseFilterExprs } = this.props.config;
        const sqlExprObj = this.getSqlExprObjFromItem();
        this.endUserClausesNum = (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_3__.getShownClauseNumberByExpression)(sqlExprObj);
        this.clausesNumConfigured = (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_3__.getTotalClauseNumberByExpression)(sqlExprObj);
        this.state = {
            isOpen: false,
            applied: this.getAppliedState(),
            collapsed: collapseFilterExprs,
            sqlExprObj: sqlExprObj,
            sqlChanged: false,
            outputWidgetLabel: this.getOutPutWidgetLabel(),
            popperVersion: 1
        };
    }
    componentDidUpdate(prevProps, prevState) {
        const { config, logicalOperator, omitInternalStyle, useDataSource, selectedDs } = this.props;
        const sqlExprObj = this.getSqlExprObjFromItem();
        this.endUserClausesNum = (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_3__.getShownClauseNumberByExpression)(sqlExprObj);
        this.clausesNumConfigured = (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_3__.getTotalClauseNumberByExpression)(sqlExprObj);
        if (prevProps.config !== config || prevProps.selectedDs !== selectedDs) {
            this.setState({
                applied: this.getAppliedState(),
                collapsed: prevProps.config.collapseFilterExprs !== config.collapseFilterExprs ? config.collapseFilterExprs : this.state.collapsed,
                sqlExprObj: selectedDs ? sqlExprObj : null,
                outputWidgetLabel: useDataSource.dataSourceId === prevProps.useDataSource.dataSourceId ? this.state.outputWidgetLabel : this.getOutPutWidgetLabel()
            });
        }
        else if (prevProps.logicalOperator !== logicalOperator || prevProps.omitInternalStyle !== omitInternalStyle) { // update applied btn
            this.setState({
                applied: this.getAppliedState()
            });
        }
    }
    // 1 filter, multiple clause configured, and visible clauses exists
    isSingleFilterAndMultipleClauses() {
        return this.props.filterNum === 1 && this.clausesNumConfigured > 1 && this.endUserClausesNum >= 1;
    }
    // 1 filter, 1 clause configured, and it's visible for endUser.
    isSingleFilterAndSingleShownClause() {
        return this.props.filterNum === 1 && this.clausesNumConfigured === 1 && this.endUserClausesNum === 1;
    }
    // multiple filters, current filter has only 1 sinlge clause & it's visible for endUser.
    isMultipleFiltersAndSingleShownClause() {
        return this.props.filterNum > 1 && this.clausesNumConfigured === 1 && this.endUserClausesNum === 1;
    }
    // Render block ( & popup-block), or inline.
    render() {
        const { config, arrangeType, triggerType, omitInternalStyle, wrap, theme } = this.props;
        const { name, icon } = config;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'filter-item', role: 'group', "aria-label": name },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Card, { className: 'filter-item-inline' }, arrangeType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Block
                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100' }, omitInternalStyle &&
                    (this.isSingleFilterAndSingleShownClause() || this.isMultipleFiltersAndSingleShownClause())
                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 pl-6 pr-6' }, this.getSqlExpression())
                    : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'filter-expanded-container' }, this.getFilterItem(this.endUserClausesNum >= 1)))
                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, 
                // single filter, single clause, single shown
                this.isSingleFilterAndSingleShownClause()
                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'sql-expression-inline d-flex' },
                        this.getSqlExpression(),
                        !omitInternalStyle && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'ml-4' }, this.getTriggerNodeForClauses()))
                    : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, (this.isSingleFilterAndMultipleClauses() ||
                        (this.isMultipleFiltersAndSingleShownClause() && omitInternalStyle))
                        ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('sql-expression-inline d-flex', {
                                'sql-expression-wrap': wrap,
                                'filter-item-pill': this.isMultipleFiltersAndSingleShownClause()
                            }) },
                            this.getTirggerNodeForWrapClauses(_config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Toggle),
                            this.getSqlExpression(),
                            this.getTirggerNodeForWrapClauses(_config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Button),
                            this.getTriggerNodeForNoWrapClause())
                        : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'filter-popper-container' },
                            triggerType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Toggle && this.endUserClausesNum === 0
                                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Card, { className: 'filter-item-pill filter-item-toggle-pill' },
                                    icon && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: icon.svg, size: icon.properties.size, className: 'mr-1' }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'filter-item-name toggle-name' }, name),
                                    this.getToggle())
                                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "filter-item-pill h-100 nowrap" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('', { 'frame-active': this.state.applied }), title: name, ref: ref => { this.pillButton = ref; }, type: 'default', "aria-pressed": this.state.applied, onClick: evt => { this.onPillClick(this.endUserClausesNum >= 1, this.pillButton); } },
                                        icon && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: icon.svg, size: icon.properties.size }),
                                        name)),
                            this.endUserClausesNum >= 1 && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Popper, { open: this.state.isOpen, toggle: this.onTogglePopper, modifiers: modifiers, showArrow: true, reference: this.pillButton, version: this.state.popperVersion, autoFocus: this.state.popperVersion > 1, forceLatestFocusElements: triggerType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Button },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'filter-items-container', css: (0,_style__WEBPACK_IMPORTED_MODULE_4__.getStyles)(theme) },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'filter-item filter-item-popper overflow-auto', style: { maxHeight: 'calc(100vh - 20px)' } },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Card, { className: 'filter-item-inline' }, this.getFilterItem(this.endUserClausesNum >= 1, arrangeType !== _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Popper)))))))))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/uniperFilter/src/runtime/style.ts":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/uniperFilter/src/runtime/style.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/uniperFilter/src/config.ts");


function getStyles(theme, config) {
    var _a;
    const isRTL = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext.isRTL;
    const inputMixWidth = '200px';
    const doubleInputMixWidth = '300px';
    const doubleDateInputMixWidth = '350px';
    const isHorizontalPillItems = (config === null || config === void 0 ? void 0 : config.arrangeType) === _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Inline && ((_a = config === null || config === void 0 ? void 0 : config.filterItems) === null || _a === void 0 ? void 0 : _a.length) >= 2;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .filter-items-container, &.filter-items-container {
      overflow: auto;

      .filter-item {
        /* skip case: horizontal pill items */
        padding-bottom: ${isHorizontalPillItems ? 0 : '0.5rem'};

        &.filter-item-popper{
          margin: 0.5rem;
          min-width: ${doubleInputMixWidth};
          max-width: ${doubleDateInputMixWidth};
        }

        .filter-item-inline {
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;

          .filter-item-arrow{
            transform: rotate(${isRTL ? 90 : 270}deg);
          }
          .filter-item-icon{
            margin-right: 0.5rem;

            &.no-arrow{
              margin-left: 0.5rem;
            }
          }
          .filter-item-name{
            font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
            color: ${theme.colors.black};
            word-break: break-word;
            &.no-icons{
              margin-left: 0.5rem;
            }
            &.toggle-name{
              white-space: nowrap;
              margin-right: 0.5rem;
            }
          }

          /* sql-expression-styles - start */
          .sql-expression-inline{
            align-items: center;

            &.sql-expression-wrap{
              display: block !important;

              .sql-expression-builder{
                overflow-x: hidden;
                .sql-expression-container{
                  flex-wrap: wrap;
                  align-content: flex-start;

                  .sql-expression-set{
                    flex-wrap: wrap;
                  }
                }
              }

            }

            .sql-expression-builder{
              overflow-x: auto;
              .sql-expression-container{
                display: flex;
                .sql-expression-single{
                  margin-right: 0.5rem;
                  &:last-of-type{
                    margin-right: 0;
                  }
                  /* .clause-inline{
                    min-width: ${inputMixWidth};
                  }
                  .clause-block{
                    .sql-expression-input{
                      min-width: ${inputMixWidth};
                    }
                  }
                  .sql-expression-displaylabel{
                    min-width: ${inputMixWidth};
                  } */
                }
                .sql-expression-set{
                  display: flex;
                }
              }
            }

          }
          /* sql-expression-styles - end */

        }
      }

      .filter-item:last-child{
        padding-bottom: 0 !important;
      }

      &.filter-items-inline{
        max-width: 100vw;
        display: flex;
        .sql-expression-builder .sql-expression-container .sql-expression-single .sql-expression-input .pill-btn-container{
          flex-wrap: nowrap;
          .pill-btn{
            overflow: visible;
          }
        }

        &.filter-items-wrap{
          flex-wrap: wrap;
          align-content: flex-start;

          .sql-expression-builder .sql-expression-container .sql-expression-single .sql-expression-input .pill-btn-container{
            flex-wrap: wrap;
          }
        }
        .filter-item{
          /* padding: 0; */
          &.filter-item-popper{
            min-width: 300px;
            padding-bottom: 0.5rem;
            .filter-item-inline {
              padding-bottom: 0.5rem;
              padding-top: 0.5rem;
            }
          }
          .filter-item-inline{
            padding: 0;
            /* height: 100%; */
            overflow-y: auto;
            background-color: unset !important;
            border: none !important;

            .filter-expanded-container{
              width: ${doubleInputMixWidth};
              padding-top: 0.5rem;
            }

            /* .filter-item-clause-pill{
              margin: 10px 5px;
              white-space: nowrap;
            } */

            /* .filter-popper-container{ */
              .filter-item-pill{
                margin: 10px 4px;
                white-space: nowrap;

                .sql-expression-single{
                  margin: 0;
                }

                &.filter-item-toggle-pill{
                  /* &:hover{
                    background-color: ${theme.colors.palette.light[100]};
                  } */
                  display: flex;
                  flex-direction: row;
                  height: 32px;
                  align-items: center;
                  padding: 0 0.5rem;
                }
              /* } */
              /* .pill-display-label{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              } */
            }

            /*input editor width*/
            .sql-expression-builder{
              .sql-expression-container{
                .sql-expression-single{
                  .clause-inline{
                    .sql-expression-label{
                      margin-right: 0.5rem;
                      width: auto;
                      overflow: visible;
                    }
                    .sql-expression-input{
                      width: auto;
                    }

                  }
                  /* .clause-block{ */
                    .sql-expression-input{
                      min-width: ${inputMixWidth};
                      .double-number-picker{
                        min-width: ${doubleInputMixWidth};
                      }
                      .double-datetime-picker{
                        min-width: ${doubleDateInputMixWidth};
                      }
                    }
                  /* } */
                  .sql-expression-displaylabel{
                    white-space: nowrap;
                    padding-right: 0.5rem;
                    font-size: 13px;
                  }
                }
              }
            }

          }
        }
      }

      &.filter-items-popup{
        min-width: ${doubleInputMixWidth};
        max-width: ${doubleDateInputMixWidth};
      }

      .apply-cancel-group{
        white-space: nowrap;
        overflow: visible;
      }
    }

    .filter-reset-container{
      display: flex;
      &.bottom-reset {
        margin-top: 0.5rem;
        justify-content: flex-end;
      }
      &.right-reset {
        height: fit-content;
        margin-top: 10px;
        margin-left: 0.5rem;
        margin-right: 0.25rem;
      }
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/uniperFilter/src/runtime/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/uniperFilter/src/runtime/translations/default.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Uniper Filter'
});


/***/ }),

/***/ "./your-extensions/widgets/uniperFilter/src/version-manager.ts":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/uniperFilter/src/version-manager.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   versionManager: () => (/* binding */ versionManager)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./your-extensions/widgets/uniperFilter/src/config.ts");
/* harmony import */ var jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/sql-expression-runtime */ "jimu-ui/basic/sql-expression-runtime");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getAllDs = function (filterItems) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = [];
        const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        filterItems && filterItems.forEach(item => {
            if (item.sqlExprObj) {
                promises.push(dsManager.createDataSourceByUseDataSource(Object.assign({}, item.dataSource, { mainDataSourceId: item.dataSource.dataSourceId })));
            }
        });
        return Promise.all(promises);
    });
};
class VersionManager extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.BaseVersionManager {
    constructor() {
        super(...arguments);
        this.versions = [{
                version: '1.1.0',
                description: '',
                upgrader: (oldConfig) => __awaiter(this, void 0, void 0, function* () {
                    return yield getAllDs(oldConfig.filterItems).then((dsList) => {
                        let newConfig = oldConfig;
                        newConfig = newConfig.set('arrangeType', _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Block);
                        newConfig = newConfig.set('triggerType', _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Toggle);
                        newConfig = newConfig.set('wrap', false);
                        newConfig = newConfig.set('omitInternalStyle', false);
                        const newFItems = dsList.map((ds, index) => {
                            const fItem = newConfig.filterItems[index];
                            return Object.assign({}, fItem, {
                                sqlExprObj: fItem.sqlExprObj ? (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_2__.updateSQLExpressionByVersion)(fItem.sqlExprObj, '1.1.0', ds) : null,
                                icon: fItem.icon.setIn(['properties', 'color'], null),
                                useDataSource: Object.assign({}, fItem.dataSource, { mainDataSourceId: fItem.dataSource.dataSourceId })
                            });
                        });
                        newConfig = newConfig.set('filterItems', newFItems);
                        return newConfig;
                    });
                })
            }, {
                version: '1.14.0',
                description: '',
                upgrader: (oldConfig) => {
                    const newFItems = oldConfig.filterItems.map(fItem => {
                        fItem = fItem
                            .set('isGroup', false)
                            .set('useDataSources', [fItem.useDataSource])
                            .without('useDataSource');
                        return fItem;
                    });
                    const newConfig = oldConfig.set('filterItems', newFItems);
                    return newConfig;
                }
            }];
    }
}
const versionManager = new VersionManager();


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

/***/ }),

/***/ "jimu-ui/basic/sql-expression-runtime":
/*!*******************************************************!*\
  !*** external "jimu-ui/basic/sql-expression-runtime" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__;

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
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/uniperFilter/src/runtime/widget.tsx ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/uniperFilter/src/config.ts");
/* harmony import */ var _filter_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-item */ "./your-extensions/widgets/uniperFilter/src/runtime/filter-item.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _version_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../version-manager */ "./your-extensions/widgets/uniperFilter/src/version-manager.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/uniperFilter/src/runtime/translations/default.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./your-extensions/widgets/uniperFilter/src/runtime/style.ts");
/* harmony import */ var jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-ui/basic/sql-expression-runtime */ "jimu-ui/basic/sql-expression-runtime");
/* harmony import */ var _filter_item_ds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-item-ds */ "./your-extensions/widgets/uniperFilter/src/runtime/filter-item-ds.tsx");
/* harmony import */ var jimu_icons_outlined_editor_reset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jimu-icons/outlined/editor/reset */ "./jimu-icons/outlined/editor/reset.tsx");
/* harmony import */ var _esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @esri/arcgis-rest-feature-layer */ "./node_modules/@esri/arcgis-rest-feature-layer/dist/esm/add.js");
/* harmony import */ var _esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @esri/arcgis-rest-request */ "./node_modules/@esri/arcgis-rest-request/dist/esm/request.js");
/** @jsx jsx */












const FilterIcon = __webpack_require__(/*! ../../icon.svg */ "./your-extensions/widgets/uniperFilter/icon.svg");
const modifiers = [
    (0,jimu_ui__WEBPACK_IMPORTED_MODULE_3__.getCustomFlipModifier)({ fallbackPlacements: ['top', 'left', 'right'], useClosestVerticalPlacement: true }),
    jimu_ui__WEBPACK_IMPORTED_MODULE_3__.maxSizeModifier,
    jimu_ui__WEBPACK_IMPORTED_MODULE_3__.applyMaxSizeModifier
];
class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.filterState = this.props.config.filterItems;
        this.setLoadedFilterItems = (objectAsString, sqlExprObjForGroup) => {
            let fI = this.props.config.filterItems;
            let LSFilterItems = JSON.parse(objectAsString);
            let LSSqlExprObjForGroup = JSON.parse(sqlExprObjForGroup);
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
            for (let i = 0; i < LSFilterItems.length; i++) {
                LSFilterItems[i].asMutable = fI[0].asMutable;
                LSFilterItems[i].replace = fI[0].replace;
                LSFilterItems[i].merge = fI[0].merge;
                LSFilterItems[i].getIn = fI[0].getIn;
                LSFilterItems[i].set = fI[0].set;
                LSFilterItems[i].setIn = fI[0].setIn;
                LSFilterItems[i].whitout = fI[0].without;
                LSFilterItems[i].update = fI[0].update;
                LSFilterItems[i].updateIn = fI[0].updateIn;
                if (!LSFilterItems[i].isGroup) {
                    LSFilterItems[i].sqlExprObj.asMutable = fI[0].asMutable;
                    LSFilterItems[i].sqlExprObj.replace = fI[0].replace;
                    LSFilterItems[i].sqlExprObj.merge = fI[0].merge;
                    LSFilterItems[i].sqlExprObj.getIn = fI[0].getIn;
                    LSFilterItems[i].sqlExprObj.set = fI[0].set;
                    LSFilterItems[i].sqlExprObj.setIn = fI[0].setIn;
                    LSFilterItems[i].sqlExprObj.whitout = fI[0].without;
                    LSFilterItems[i].sqlExprObj.update = fI[0].update;
                    LSFilterItems[i].sqlExprObj.updateIn = fI[0].updateIn;
                    for (let j = 0; j < LSFilterItems[i].sqlExprObj.parts.length; j++) {
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.asMutable = fI[0].asMutable;
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.replace = fI[0].replace;
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.merge = fI[0].merge;
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.getIn = fI[0].getIn;
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.set = fI[0].set;
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.setIn = fI[0].setIn;
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.whitout = fI[0].without;
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.update = fI[0].update;
                        LSFilterItems[i].sqlExprObj.parts[j].valueOptions.updateIn = fI[0].updateIn;
                        if (LSFilterItems[i].sqlExprObj.parts[j].valueOptions.value != null) {
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
                else {
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
                    LSFilterItems[0] = LSFilterItems[0].setIn(['sqlExprObjForGroupforUpdate'], LSSqlExprObjForGroup);
                }
                //Object.assign(fI[0], LSFilterItems[i] )
            }
            return LSFilterItems;
        };
        this.getStringifiedFilterItems = () => {
            this.filterState = this.state.filterItems;
            let LSFilterItems = [];
            for (let i = 0; i < this.state.filterItems.length; i++) {
                LSFilterItems.push(this.state.filterItems[i]);
            }
            return JSON.stringify(LSFilterItems);
        };
        this.getStringifiedGroupFilterSqlExp = () => {
            return JSON.stringify(this.lastSqlExpChanged);
        };
        this.lastSqlExpChanged = null;
        this.onFilterItemChange = (index, dataSource, sqlExprObj, applied) => {
            if (this.__unmount) {
                return;
            }
            // get updated fItems
            const fItems = this.state.filterItems;
            let fItem = fItems[index].set('autoApplyWhenWidgetOpen', applied);
            if (!fItem.isGroup) {
                fItem = fItem.set('sqlExprObj', sqlExprObj);
            }
            else if (fItem.sqlExprObjForGroup) {
                this.lastSqlExpChanged = sqlExprObj;
                fItem = fItem.setIn(['sqlExprObjForGroup', '0', 'clause', 'valueOptions', 'value'], sqlExprObj.parts[0].valueOptions.value);
            }
            const updatedFItems = fItems.set(index, fItem);
            this.setState({
                filterItems: updatedFItems
            });
            const needQuery = !((!applied && !fItems[index].autoApplyWhenWidgetOpen));
            if (needQuery) {
                const dss = {};
                dss[dataSource.id] = dataSource;
                if (fItem.isGroup && fItem.sqlExprObjForGroup) {
                    const itemUseDsIds = fItem.useDataSources.map(useDs => useDs.dataSourceId);
                    itemUseDsIds.forEach(dsId => {
                        dss[dsId] = this.state.dataSources[dsId];
                    });
                }
                this.setSqlToAllDs(dss, updatedFItems);
            }
        };
        this.setSqlToAllDs = (dss = this.state.dataSources, filterItems = this.props.config.filterItems) => {
            const dsIds = [];
            Object.keys(dss).forEach(dsId => {
                var _a, _b;
                const ds = dss[dsId];
                if (ds) { // exclude invalid dataSources
                    const prevSqlForDs = (_b = (_a = ds.getInfo().widgetQueries) === null || _a === void 0 ? void 0 : _a[this.props.id]) === null || _b === void 0 ? void 0 : _b.where;
                    const sqlResult = this.getQuerySqlFromDs(ds, filterItems);
                    this.setSqlToDs(ds, sqlResult);
                    if (prevSqlForDs !== sqlResult.sql) {
                        dsIds.push(ds.id);
                    }
                }
            });
            if (dsIds.length > 0) {
                this.publishFilterMessage(dsIds);
            }
        };
        this.setSqlToDs = (dataSource, sqlResult) => {
            var _a, _b;
            // Not set empty SQL for ds, because it would cause many useless requests.
            if (this._autoApplyInit && sqlResult.sql === '') {
                return;
            }
            if (dataSource) {
                const queryParams = { where: sqlResult.sql, sqlExpression: sqlResult.sqlExpression };
                (_b = (_a = dataSource).updateQueryParams) === null || _b === void 0 ? void 0 : _b.call(_a, queryParams, this.props.id);
            }
        };
        this.publishFilterMessage = (dataSourceIds) => {
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceFilterChangeMessage(this.props.id, dataSourceIds));
        };
        // get merged sqlExpression from current ds
        this.getQuerySqlFromDs = (dataSource, filterItems = this.props.config.filterItems) => {
            const sqlExprs = [];
            filterItems.forEach(item => {
                // collect sqls from autoApplid, manual apply, or expaned single clause. dataSource could be null when it's not available.
                if (item.autoApplyWhenWidgetOpen || (this.props.config.omitInternalStyle && (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_7__.getShownClauseNumberByExpression)(item.sqlExprObj) === 1)) {
                    const sqlExprObj = item.isGroup
                        ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getSQLExpressionFromGroupSQLExpression(item.sqlExprObjForGroup, dataSource)
                        : item.useDataSources[0].dataSourceId === (dataSource === null || dataSource === void 0 ? void 0 : dataSource.id) && item.sqlExprObj;
                    if (sqlExprObj) {
                        const sqlResult = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(sqlExprObj, dataSource);
                        if (sqlResult.sql) {
                            sqlExprs.push(sqlResult.sqlExpression);
                        }
                    }
                }
            });
            let sqlExpression = null;
            if (sqlExprs.length) {
                sqlExpression = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getMergedSQLExpressions(sqlExprs, dataSource, this.props.config.logicalOperator);
            }
            return {
                sql: (sqlExpression === null || sqlExpression === void 0 ? void 0 : sqlExpression.sql) || '',
                sqlExpression
            };
        };
        this.getDataSourceById = (dataSourceId) => {
            const dsList = this.props.useDataSources.asMutable({ deep: true }).filter(ds => ds.dataSourceId === dataSourceId);
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(dsList[0]);
        };
        // check if it's in props.useDataSources.
        this.isDataSourceRemoved = (dataSourceId) => {
            var _a;
            return ((_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a.filter(useDs => dataSourceId === useDs.dataSourceId).length) === 0;
        };
        this.onResetChange = () => {
            this.setState({
                filterItems: this.props.config.filterItems
            });
            this.setSqlToAllDs();
        };
        /**
         * Whether to show reset button at bottom of widget
         * By default: bottom.
         * Special case: right. Only when filter item(s) are displayed as buttons.
         */
        this.showResetAtBottom = (resetAll, arrangeType, wrap, filterItems) => {
            let atBottom = true;
            if (resetAll && arrangeType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Inline && !wrap &&
                (filterItems.length > 1 || (filterItems.length === 1 && (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_7__.getShownClauseNumberByExpression)(filterItems[0].sqlExprObj) === 0))) {
                atBottom = false;
            }
            return atBottom;
        };
        this.getItemUseDs = (item) => {
            let useDs = item.useDataSources[0];
            if (item.isGroup && item.sqlExprObjForGroup) {
                useDs = item.useDataSources.filter(ds => ds.dataSourceId === item.sqlExprObjForGroup[0].dataSourceId)[0];
            }
            return useDs;
        };
        this.getFilterItems = (config, arrangeType = _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Block, wrap = false, isPopup = false) => {
            const showResetAtBottom = this.showResetAtBottom(config.resetAll, arrangeType, wrap, config.filterItems);
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100 d-flex justify-content-between', showResetAtBottom ? 'flex-column' : 'flex-row'), css: (0,_style__WEBPACK_IMPORTED_MODULE_6__.getStyles)(this.props.theme, this.props.config) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 filter-items-container', arrangeType && config.arrangeType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Inline ? 'filter-items-inline' : '', wrap ? 'filter-items-wrap' : '', isPopup ? 'filter-items-popup' : '') }, this.state.filterItems.map((item, index) => {
                    const useDs = this.getItemUseDs(item);
                    const ds = this.isDataSourceRemoved(useDs.dataSourceId) ? null : this.state.dataSources[useDs.dataSourceId];
                    const isNotReadyFromWidget = this.state.outputDataSourceIsNotReady[useDs.dataSourceId];
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_filter_item__WEBPACK_IMPORTED_MODULE_2__["default"], { key: index, id: index, widgetId: this.props.id, intl: this.props.intl, selectedDs: ds, useDataSource: useDs, isNotReadyFromWidget: isNotReadyFromWidget, logicalOperator: config.logicalOperator, config: item, arrangeType: arrangeType, triggerType: config.triggerType, wrap: wrap, omitInternalStyle: config.omitInternalStyle, filterNum: this.state.filterItems.length, onChange: this.onFilterItemChange, itemBgColor: this.props.theme.colors.palette.light[300], theme: this.props.theme }));
                })),
                config.resetAll && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('filter-reset-container', showResetAtBottom ? 'bottom-reset' : 'right-reset') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: true, type: 'default', size: 'default', className: 'reset-button', style: { borderRadius: config.triggerType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterTriggerType.Toggle ? '16px' : null }, title: this.props.intl.formatMessage({ id: 'resetAllFilters', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages.resetAllFilters }), "aria-label": this.props.intl.formatMessage({ id: 'resetAllFilters', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages.resetAllFilters }), onClick: this.onResetChange },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_reset__WEBPACK_IMPORTED_MODULE_9__.ResetOutlined, null)))));
        };
        this.onShowPopper = () => {
            this.setState({
                isOpen: !this.state.isOpen,
                popperVersion: !this.state.isOpen ? this.state.popperVersion + 1 : this.state.popperVersion
            });
        };
        this.onTogglePopper = () => {
            this.setState({
                isOpen: false
            });
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
                this.widgetIconRef.focus();
            });
        };
        this.checkIfAnyFiltersApplied = () => {
            var _a;
            const { omitInternalStyle } = this.props.config;
            const filterItems = ((_a = this.state) === null || _a === void 0 ? void 0 : _a.filterItems) || this.props.config.filterItems;
            const isApplied = filterItems.some((item) => {
                var _a, _b, _c;
                const sqlExprObj = item.isGroup
                    ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getSQLExpressionFromGroupSQLExpression(item.sqlExprObjForGroup, this.state.dataSources[(_a = item.sqlExprObjForGroup) === null || _a === void 0 ? void 0 : _a[0].dataSourceId])
                    : item.sqlExprObj;
                if (omitInternalStyle && (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_7__.getTotalClauseNumberByExpression)(sqlExprObj) === 1 && (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_7__.getShownClauseNumberByExpression)(sqlExprObj) === 1) {
                    const useDsId = item.isGroup
                        ? (_c = this.state.dataSources[(_b = item.sqlExprObjForGroup) === null || _b === void 0 ? void 0 : _b[0].dataSourceId]) === null || _c === void 0 ? void 0 : _c.id
                        : item.useDataSources[0].dataSourceId;
                    // ds exists, or it hasn't created when widget starts
                    return (this.state.dataSources[useDsId]
                        ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(sqlExprObj, this.state.dataSources[useDsId]).sql
                        : sqlExprObj.sql) !== '';
                }
                else {
                    return item.autoApplyWhenWidgetOpen;
                }
            });
            return isApplied;
        };
        this.onIsDataSourceNotReady = (dataSourceId, dataSourceStatus) => {
            this.setState((state) => {
                var _a;
                const isOutPutDs = (_a = state.dataSources[dataSourceId]) === null || _a === void 0 ? void 0 : _a.getDataSourceJson().isOutputFromWidget;
                if (!isOutPutDs) {
                    return;
                }
                const outputDataSource = Object.assign({}, state.outputDataSourceIsNotReady);
                outputDataSource[dataSourceId] = dataSourceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady;
                return { outputDataSourceIsNotReady: outputDataSource };
            });
        };
        this.onCreateDataSourceCreatedOrFailed = (dataSourceId, dataSource) => {
            this.setState((state) => {
                const newDataSources = Object.assign({}, state.dataSources);
                newDataSources[dataSourceId] = dataSource;
                return { dataSources: newDataSources };
            });
        };
        // Only for first time & autoApply option, after all datasources are ready
        this.applyAutoFiltersAtStart = () => {
            var _a;
            if (this._autoApplyInit) {
                const dsLength = Object.keys(this.state.dataSources).map(() => true).length;
                if (dsLength === ((_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a.length)) {
                    setTimeout(() => {
                        this.setSqlToAllDs();
                        this._autoApplyInit = false;
                    }, 0);
                }
            }
        };
        this.__unmount = false;
        this.index = 0;
        this._autoApplyInit = true;
        this.state = {
            popperVersion: 1,
            isOpen: false,
            // needQuery: true,
            filterItems: this.props.config.filterItems,
            dataSources: {},
            outputDataSourceIsNotReady: {}
        };
    }
    componentDidMount() {
        (0,_esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_10__.setDefaultRequestOptions)({
            authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession()
        });
    }
    componentWillUnmount() {
        this.__unmount = true;
        // Remove SQLs for dss, and publish msg when widget is removed.
        const dsIds = [];
        Object.keys(this.state.dataSources).forEach(dsId => {
            var _a, _b;
            const ds = this.state.dataSources[dsId];
            // Only when ds and its sql exist. (skip: undefined and '')
            if (ds && ((_b = (_a = ds.getInfo().widgetQueries) === null || _a === void 0 ? void 0 : _a[this.props.id]) === null || _b === void 0 ? void 0 : _b.where)) {
                ds === null || ds === void 0 ? void 0 : ds.updateQueryParams(null, this.props.id);
                dsIds.push(ds.id);
            }
        });
        if (dsIds.length > 0) {
            this.publishFilterMessage(dsIds);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        var _a, _b, _c;
        if (this.__unmount) {
            return;
        }
        this._autoApplyInit = false;
        // refresh all sqls for different dataSources when setting's changed, including filter item is removed.
        if (prevProps.config !== this.props.config) {
            this.setState({
                filterItems: this.props.config.filterItems
            });
            this.setSqlToAllDs();
            // update auto apply by arrangement & styles
        }
        else if (this.state.dataSources !== prevState.dataSources) {
            this._autoApplyInit = true;
            this.applyAutoFiltersAtStart();
        }
        if (this.props.hasOwnProperty("stateProps") && ((_a = this.props.stateProps) === null || _a === void 0 ? void 0 : _a.resetFilter)) {
            if (this.props.stateProps.resetFilter != undefined) {
                const shouldReset = JSON.parse(this.props.stateProps.resetFilter);
                this.props.stateProps.resetFilter = undefined;
                if (shouldReset)
                    this.onResetChange();
            }
        }
        if (this.props.hasOwnProperty("stateProps") && ((_b = this.props.stateProps) === null || _b === void 0 ? void 0 : _b.setFilterValues)) {
            if (this.props.stateProps.setFilterValues != undefined) {
                const configJson = JSON.parse(this.props.stateProps.setFilterValues);
                this.props.stateProps.setFilterValues = undefined;
                const ds = Object.values(this.state.dataSources)[0];
                const configDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(configJson.configDs);
                const queryParams = {
                    where: `filterConfig_relationId LIKE '%${configJson.relationId}%' AND filterConfig_name LIKE '%${this.props.label}%'`
                };
                configDs.query(queryParams).then((res) => {
                    if (res.records.length > 0) {
                        let r = res.records[0];
                        let objectAsString = this.decode64(r.getFieldValue("filterConfig_value"));
                        let config = JSON.parse(objectAsString);
                        return this.setLoadedFilterItems(config.objectAsAString, config.sqlExprObjForGroup);
                    }
                    else
                        console.log("Keine Filterconfiguration gefunden. Relation ID -> " + configJson.relationId + " Filter -> " + this.props.label);
                })
                    .then((res) => {
                    if (res)
                        this.setState({ filterItems: res }, () => {
                            this.onResetChange();
                            if (!res[0].isGroup) {
                                this.onFilterItemChange(0, ds, this.state.filterItems[0].sqlExprObj, res[0].autoApplyWhenWidgetOpen);
                            }
                            else if (res[0].sqlExprObjForGroup) {
                                this.onFilterItemChange(0, ds, this.state.filterItems[0].sqlExprObjForGroupforUpdate, res[0].autoApplyWhenWidgetOpen);
                            }
                        });
                    //this.onFilterItemChange(0,ds,this.state.filterItems[0].sqlExprObj, res[0].autoApplyWhenWidgetOpen);
                });
            }
        }
        if (this.props.hasOwnProperty("stateProps") && ((_c = this.props.stateProps) === null || _c === void 0 ? void 0 : _c.saveConfigTrigger)) {
            if (this.props.stateProps.saveConfigTrigger != undefined) {
                const configJson = JSON.parse(this.props.stateProps.saveConfigTrigger);
                this.props.stateProps.saveConfigTrigger = undefined;
                const useDataSource = configJson.dsToSave;
                const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(useDataSource);
                console.log(this.lastSqlExpChanged);
                let stringifiedFilterItems = this.getStringifiedFilterItems();
                let stringifiedGroupFilterSqlExp = this.getStringifiedGroupFilterSqlExp();
                let bothQobjects = JSON.stringify({ objectAsAString: stringifiedFilterItems, sqlExprObjForGroup: stringifiedGroupFilterSqlExp });
                let base64BothQobjects = this.base64(bothQobjects);
                (0,_esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_11__.addFeatures)({
                    url: ds.url,
                    features: [{
                            geometry: { x: 0, y: 0 },
                            attributes: { filterConfig_name: this.props.label, filterConfig_creator: this.props.user.username,
                                filterConfig_relationId: configJson.relationId, filterConfig_value: base64BothQobjects,
                                filterConfig_startOnLoad: prevState.filterItems[0].autoApplyWhenWidgetOpen
                            }
                        }]
                })
                    .then((res) => {
                    console.log(res);
                    ds.setNeedRefresh(true);
                });
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
    render() {
        var _a;
        const { config, icon, label } = this.props;
        if (this.state.filterItems.length === 0) {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.WidgetPlaceholder, { icon: FilterIcon, widgetId: this.props.id, message: this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"]._widgetLabel }) }));
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget widget-filter overflow-auto' }, (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 :
            _a.map((useDs, key) => {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_filter_item_ds__WEBPACK_IMPORTED_MODULE_8__["default"], { key: key, useDataSource: useDs, onIsDataSourceNotReady: this.onIsDataSourceNotReady, onCreateDataSourceCreatedOrFailed: this.onCreateDataSourceCreatedOrFailed }));
            }),
            // Filters & Clauses on Popup are as the same as Block panel.
            config.arrangeType === _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Popper
                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'filter-widget-popper' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Badge, { dot: true, className: 'm-1', hideBadge: !this.checkIfAnyFiltersApplied(), color: 'primary' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: true, size: 'sm', className: 'filter-widget-pill h-100', ref: ref => { this.widgetIconRef = ref; }, title: label, type: 'tertiary', onClick: this.onShowPopper, "aria-pressed": this.checkIfAnyFiltersApplied() },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { icon: typeof icon === 'string' ? icon : icon.svg, size: 16, color: typeof icon === 'string' ? '' : icon.properties.color }))),
                    this.state.popperVersion > 1 && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Popper, { open: this.state.isOpen, version: this.state.popperVersion, keepMount: true, toggle: this.onTogglePopper, showArrow: true, modifiers: modifiers, forceLatestFocusElements: true, reference: this.widgetIconRef },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'p-2' }, this.getFilterItems(config, _config__WEBPACK_IMPORTED_MODULE_1__.FilterArrangeType.Block, false, true))))
                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `max-height: 100vh;` }, this.getFilterItems(config, config.arrangeType, config.wrap))));
    }
}
Widget.versionManager = _version_manager__WEBPACK_IMPORTED_MODULE_4__.versionManager;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy91bmlwZXJGaWx0ZXIvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2lDO0FBQ2lEO0FBQ2xGO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0NBQW9DLGNBQWM7QUFDckUscUJBQXFCO0FBQ3JCLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGNBQWMsbUVBQVE7QUFDdEI7QUFDQSxrQkFBa0IsNkVBQWtCLHdGQUF3RixRQUFRLCtDQUFRLEdBQUcsMEJBQTBCO0FBQ3pLLFdBQVcsa0VBQU87QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ25GLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0Ms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QUUzQyxJQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFDNUIsQ0FBQztvQkFDQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO29CQUN4RCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUNwRCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNoRCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNoRCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUM1QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNoRCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUNwRCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUNsRCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO29CQUV0RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNqRSxDQUFDO3dCQUNDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzt3QkFDOUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO3dCQUMxRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ3RFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDdEUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUNsRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ3RFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxD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SUFBSSwrQ0FBQywyQ0FBTSxJQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDakMsU0FBUyxRQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUMzQixTQUFTLFFBQ1QsU0FBUyxFQUFFLFNBQVMsRUFDcEIsd0JBQXdCLFFBQ3hCLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYTt3QkFFN0Isd0RBQUssU0FBUyxFQUFDLEtBQUssSUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FDOUQsQ0FDQyxDQUVQO2dCQUNOLENBQUMsQ0FBQyx3REFBSyxTQUFTLEVBQUMsYUFBYSxFQUFDLEdBQUcsRUFBRSw4Q0FBRyxxQkFBb0IsSUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQ3pELENBRU4sQ0FDUDtJQUNILENBQUM7O0FBam9CTSxxQkFBYyxHQUFHLDREQUFjO2lFQURuQixNQUFNO0FBcW9CbkIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LWZlYXR1cmUtbGF5ZXIvZGlzdC9lc20vYWRkLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtZmVhdHVyZS1sYXllci9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS9yZXF1ZXN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9BcmNHSVNSZXF1ZXN0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2FwcGVuZC1jdXN0b20tcGFyYW1zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9jbGVhbi11cmwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2VuY29kZS1mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2VuY29kZS1xdWVyeS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL3Byb2Nlc3MtcGFyYW1zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy93YXJuLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9maWxsZWQvZGlyZWN0aW9uYWwvZG93bi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9yZXNldC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3VuaXBlckZpbHRlci9pY29uLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9maWxsZWQvZGlyZWN0aW9uYWwvZG93bi50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3Jlc2V0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdW5pcGVyRmlsdGVyL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3VuaXBlckZpbHRlci9zcmMvcnVudGltZS9maWx0ZXItaXRlbS1kcy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3VuaXBlckZpbHRlci9zcmMvcnVudGltZS9maWx0ZXItaXRlbS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3VuaXBlckZpbHRlci9zcmMvcnVudGltZS9zdHlsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdW5pcGVyRmlsdGVyL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy91bmlwZXJGaWx0ZXIvc3JjL3ZlcnNpb24tbWFuYWdlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9iYXNpYy9zcWwtZXhwcmVzc2lvbi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3VuaXBlckZpbHRlci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgcmVxdWVzdCwgY2xlYW5VcmwsIGFwcGVuZEN1c3RvbVBhcmFtcyB9IGZyb20gXCJAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0XCI7XG4vKipcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBhZGRGZWF0dXJlcyB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LWZlYXR1cmUtbGF5ZXInO1xuICogLy9cbiAqIGFkZEZlYXR1cmVzKHtcbiAqICAgdXJsOiBcImh0dHBzOi8vc2FtcGxlc2VydmVyNi5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1NlcnZpY2VSZXF1ZXN0L0ZlYXR1cmVTZXJ2ZXIvMFwiLFxuICogICBmZWF0dXJlczogW3tcbiAqICAgICBnZW9tZXRyeTogeyB4OiAtMTIwLCB5OiA0NSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSxcbiAqICAgICBhdHRyaWJ1dGVzOiB7IHN0YXR1czogXCJhbGl2ZVwiIH1cbiAqICAgfV1cbiAqIH0pXG4gKiAgIC50aGVuKHJlc3BvbnNlKVxuICogYGBgXG4gKiBBZGQgZmVhdHVyZXMgcmVxdWVzdC4gU2VlIHRoZSBbUkVTVCBEb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9yZXN0L3NlcnZpY2VzLXJlZmVyZW5jZS9hZGQtZmVhdHVyZXMuaHRtKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgcmVxdWVzdC5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBhZGRGZWF0dXJlcyByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEZlYXR1cmVzKHJlcXVlc3RPcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IGNsZWFuVXJsKHJlcXVlc3RPcHRpb25zLnVybCkgKyBcIi9hZGRGZWF0dXJlc1wiO1xuICAgIC8vIGVkaXQgb3BlcmF0aW9ucyBhcmUgUE9TVCBvbmx5XG4gICAgdmFyIG9wdGlvbnMgPSBhcHBlbmRDdXN0b21QYXJhbXMocmVxdWVzdE9wdGlvbnMsIFtcImZlYXR1cmVzXCIsIFwiZ2RiVmVyc2lvblwiLCBcInJldHVybkVkaXRNb21lbnRcIiwgXCJyb2xsYmFja09uRmFpbHVyZVwiXSwgeyBwYXJhbXM6IF9fYXNzaWduKHt9LCByZXF1ZXN0T3B0aW9ucy5wYXJhbXMpIH0pO1xuICAgIHJldHVybiByZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGQuanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZW5jb2RlRm9ybURhdGEgfSBmcm9tIFwiLi91dGlscy9lbmNvZGUtZm9ybS1kYXRhXCI7XG5pbXBvcnQgeyBlbmNvZGVRdWVyeVN0cmluZyB9IGZyb20gXCIuL3V0aWxzL2VuY29kZS1xdWVyeS1zdHJpbmdcIjtcbmltcG9ydCB7IHJlcXVpcmVzRm9ybURhdGEgfSBmcm9tIFwiLi91dGlscy9wcm9jZXNzLXBhcmFtc1wiO1xuaW1wb3J0IHsgQXJjR0lTUmVxdWVzdEVycm9yIH0gZnJvbSBcIi4vdXRpbHMvQXJjR0lTUmVxdWVzdEVycm9yXCI7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSBcIi4vdXRpbHMvd2FyblwiO1xuZXhwb3J0IHZhciBOT0RFSlNfREVGQVVMVF9SRUZFUkVSX0hFQURFUiA9IFwiQGVzcmkvYXJjZ2lzLXJlc3QtanNcIjtcbnZhciBERUZBVUxUX0FSQ0dJU19SRVFVRVNUX09QVElPTlMgPSB7XG4gICAgaHR0cE1ldGhvZDogXCJQT1NUXCIsXG4gICAgcGFyYW1zOiB7XG4gICAgICAgIGY6IFwianNvblwiLFxuICAgIH0sXG59O1xuLyoqXG4gKiBTZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbiAqKmFsbCByZXF1ZXN0cyBhY3Jvc3MgYWxsIGBAZXNyaS9hcmNnaXMtcmVzdC1qc2AgbW9kdWxlcyoqLlxuICpcbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBlc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3RcIjtcbiAqIHNldERlZmF1bHRSZXF1ZXN0T3B0aW9ucyh7XG4gKiAgIGF1dGhlbnRpY2F0aW9uOiB1c2VyU2Vzc2lvbiAvLyBhbGwgcmVxdWVzdHMgd2lsbCB1c2UgdGhpcyBzZXNzaW9uIGJ5IGRlZmF1bHRcbiAqIH0pXG4gKiBgYGBcbiAqIFlvdSBzaG91bGQgKipuZXZlcioqIHNldCBhIGRlZmF1bHQgYGF1dGhlbnRpY2F0aW9uYCB3aGVuIHlvdSBhcmUgaW4gYSBzZXJ2ZXIgc2lkZSBlbnZpcm9ubWVudCB3aGVyZSB5b3UgbWF5IGJlIGhhbmRsaW5nIHJlcXVlc3RzIGZvciBtYW55IGRpZmZlcmVudCBhdXRoZW50aWNhdGVkIHVzZXJzLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBkZWZhdWx0IG9wdGlvbnMgdG8gcGFzcyB3aXRoIGV2ZXJ5IHJlcXVlc3QuIEV4aXN0aW5nIGRlZmF1bHQgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAqIEBwYXJhbSBoaWRlV2FybmluZ3MgU2lsZW5jZSB3YXJuaW5ncyBhYm91dCBzZXR0aW5nIGRlZmF1bHQgYGF1dGhlbnRpY2F0aW9uYCBpbiBzaGFyZWQgZW52aXJvbm1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zKG9wdGlvbnMsIGhpZGVXYXJuaW5ncykge1xuICAgIGlmIChvcHRpb25zLmF1dGhlbnRpY2F0aW9uICYmICFoaWRlV2FybmluZ3MpIHtcbiAgICAgICAgd2FybihcIllvdSBzaG91bGQgbm90IHNldCBgYXV0aGVudGljYXRpb25gIGFzIGEgZGVmYXVsdCBpbiBhIHNoYXJlZCBlbnZpcm9ubWVudCBzdWNoIGFzIGEgd2ViIHNlcnZlciB3aGljaCB3aWxsIHByb2Nlc3MgbXVsdGlwbGUgdXNlcnMgcmVxdWVzdHMuIFlvdSBjYW4gY2FsbCBgc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zYCB3aXRoIGB0cnVlYCBhcyBhIHNlY29uZCBhcmd1bWVudCB0byBkaXNhYmxlIHRoaXMgd2FybmluZy5cIik7XG4gICAgfVxuICAgIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUyA9IG9wdGlvbnM7XG59XG52YXIgQXJjR0lTQXV0aEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcmNHSVNBdXRoRXJyb3IsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBcmNHSVNBdXRoRXJyb3JgICBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIEFQSVxuICAgICAqIEBwYXJhbSBjb2RlIC0gVGhlIGVycm9yIGNvZGUgZnJvbSB0aGUgQVBJXG4gICAgICogQHBhcmFtIHJlc3BvbnNlIC0gVGhlIG9yaWdpbmFsIHJlc3BvbnNlIGZyb20gdGhlIEFQSSB0aGF0IGNhdXNlZCB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0gdXJsIC0gVGhlIG9yaWdpbmFsIHVybCBvZiB0aGUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9yaWdpbmFsIG9wdGlvbnMgb2YgdGhlIHJlcXVlc3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBcmNHSVNBdXRoRXJyb3IobWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucykge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBcIkFVVEhFTlRJQ0FUSU9OX0VSUk9SXCI7IH1cbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gXCJBVVRIRU5USUNBVElPTl9FUlJPUl9DT0RFXCI7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9IFwiQXJjR0lTQXV0aEVycm9yXCI7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPVxuICAgICAgICAgICAgY29kZSA9PT0gXCJBVVRIRU5USUNBVElPTl9FUlJPUl9DT0RFXCIgPyBtZXNzYWdlIDogY29kZSArIFwiOiBcIiArIG1lc3NhZ2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXJjR0lTQXV0aEVycm9yLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uIChnZXRTZXNzaW9uLCByZXRyeUxpbWl0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChyZXRyeUxpbWl0ID09PSB2b2lkIDApIHsgcmV0cnlMaW1pdCA9IDM7IH1cbiAgICAgICAgdmFyIHRyaWVzID0gMDtcbiAgICAgICAgdmFyIHJldHJ5UmVxdWVzdCA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGdldFNlc3Npb24oX3RoaXMudXJsLCBfdGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucyksIHsgYXV0aGVudGljYXRpb246IHNlc3Npb24gfSk7XG4gICAgICAgICAgICAgICAgdHJpZXMgPSB0cmllcyArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoX3RoaXMudXJsLCBuZXdPcHRpb25zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT09IFwiQXJjR0lTQXV0aEVycm9yXCIgJiYgdHJpZXMgPCByZXRyeUxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHJ5UmVxdWVzdChyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLm5hbWUgPT09IFwiQXJjR0lTQXV0aEVycm9yXCIgJiYgdHJpZXMgPj0gcmV0cnlMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoX3RoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmV0cnlSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFyY0dJU0F1dGhFcnJvcjtcbn0oQXJjR0lTUmVxdWVzdEVycm9yKSk7XG5leHBvcnQgeyBBcmNHSVNBdXRoRXJyb3IgfTtcbi8qKlxuICogQ2hlY2tzIGZvciBlcnJvcnMgaW4gYSBKU09OIHJlc3BvbnNlIGZyb20gdGhlIEFyY0dJUyBSRVNUIEFQSS4gSWYgdGhlcmUgYXJlIG5vIGVycm9ycywgaXQgd2lsbCByZXR1cm4gdGhlIGBkYXRhYCBwYXNzZWQgaW4uIElmIHRoZXJlIGlzIGFuIGVycm9yLCBpdCB3aWxsIHRocm93IGFuIGBBcmNHSVNSZXF1ZXN0RXJyb3JgIG9yIGBBcmNHSVNBdXRoRXJyb3JgLlxuICpcbiAqIEBwYXJhbSBkYXRhIFRoZSByZXNwb25zZSBKU09OIHRvIGNoZWNrIGZvciBlcnJvcnMuXG4gKiBAcGFyYW0gdXJsIFRoZSB1cmwgb2YgdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgVGhlIHBhcmFtZXRlcnMgb2YgdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIG9mIHRoZSBvcmlnaW5hbCByZXF1ZXN0XG4gKiBAcmV0dXJucyBUaGUgZGF0YSB0aGF0IHdhcyBwYXNzZWQgaW4gdGhlIGBkYXRhYCBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRm9yRXJyb3JzKHJlc3BvbnNlLCB1cmwsIHBhcmFtcywgb3B0aW9ucywgb3JpZ2luYWxBdXRoRXJyb3IpIHtcbiAgICAvLyB0aGlzIGlzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBiaWxsaW5nLmFyY2dpcy5jb20gYmFja2VuZFxuICAgIGlmIChyZXNwb25zZS5jb2RlID49IDQwMCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHJlc3BvbnNlLm1lc3NhZ2UsIGNvZGUgPSByZXNwb25zZS5jb2RlO1xuICAgICAgICB0aHJvdyBuZXcgQXJjR0lTUmVxdWVzdEVycm9yKG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBlcnJvciBmcm9tIEFyY0dJUyBPbmxpbmUgb3IgYW4gQXJjR0lTIFBvcnRhbCBvciBzZXJ2ZXIgaW5zdGFuY2UuXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgIHZhciBfYSA9IHJlc3BvbnNlLmVycm9yLCBtZXNzYWdlID0gX2EubWVzc2FnZSwgY29kZSA9IF9hLmNvZGUsIG1lc3NhZ2VDb2RlID0gX2EubWVzc2FnZUNvZGU7XG4gICAgICAgIHZhciBlcnJvckNvZGUgPSBtZXNzYWdlQ29kZSB8fCBjb2RlIHx8IFwiVU5LTk9XTl9FUlJPUl9DT0RFXCI7XG4gICAgICAgIGlmIChjb2RlID09PSA0OTggfHxcbiAgICAgICAgICAgIGNvZGUgPT09IDQ5OSB8fFxuICAgICAgICAgICAgbWVzc2FnZUNvZGUgPT09IFwiR1dNXzAwMDNcIiB8fFxuICAgICAgICAgICAgKGNvZGUgPT09IDQwMCAmJiBtZXNzYWdlID09PSBcIlVuYWJsZSB0byBnZW5lcmF0ZSB0b2tlbi5cIikpIHtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbEF1dGhFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG9yaWdpbmFsQXV0aEVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFyY0dJU0F1dGhFcnJvcihtZXNzYWdlLCBlcnJvckNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBBcmNHSVNSZXF1ZXN0RXJyb3IobWVzc2FnZSwgZXJyb3JDb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLy8gZXJyb3IgZnJvbSBhIHN0YXR1cyBjaGVja1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiZmFpbGVkXCIgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSBcImZhaWx1cmVcIikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGNvZGUgPSBcIlVOS05PV05fRVJST1JfQ09ERVwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSkubWVzc2FnZTtcbiAgICAgICAgICAgIGNvZGUgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSByZXNwb25zZS5zdGF0dXNNZXNzYWdlIHx8IHJlc3BvbnNlLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEFyY0dJU1JlcXVlc3RFcnJvcihtZXNzYWdlLCBjb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuLyoqXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QnO1xuICogLy9cbiAqIHJlcXVlc3QoJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0JylcbiAqICAgLnRoZW4ocmVzcG9uc2UpIC8vIHJlc3BvbnNlLmN1cnJlbnRWZXJzaW9uID09PSA1LjJcbiAqIC8vXG4gKiByZXF1ZXN0KCdodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdCcsIHtcbiAqICAgaHR0cE1ldGhvZDogXCJHRVRcIlxuICogfSlcbiAqIC8vXG4gKiByZXF1ZXN0KCdodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdC9zZWFyY2gnLCB7XG4gKiAgIHBhcmFtczogeyBxOiAncGFya3MnIH1cbiAqIH0pXG4gKiAgIC50aGVuKHJlc3BvbnNlKSAvLyByZXNwb25zZS50b3RhbCA9PiA3ODM3OVxuICogYGBgXG4gKiBHZW5lcmljIG1ldGhvZCBmb3IgbWFraW5nIEhUVFAgcmVxdWVzdHMgdG8gQXJjR0lTIFJFU1QgQVBJIGVuZHBvaW50cy5cbiAqXG4gKiBAcGFyYW0gdXJsIC0gVGhlIFVSTCBvZiB0aGUgQXJjR0lTIFJFU1QgQVBJIGVuZHBvaW50LlxuICogQHBhcmFtIHJlcXVlc3RPcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHJlcXVlc3QsIGluY2x1ZGluZyBwYXJhbWV0ZXJzIHJlbGV2YW50IHRvIHRoZSBlbmRwb2ludC5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgaWYgKHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDApIHsgcmVxdWVzdE9wdGlvbnMgPSB7IHBhcmFtczogeyBmOiBcImpzb25cIiB9IH07IH1cbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHsgaHR0cE1ldGhvZDogXCJQT1NUXCIgfSwgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TKSwgcmVxdWVzdE9wdGlvbnMpLCB7XG4gICAgICAgIHBhcmFtczogX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUy5wYXJhbXMpLCByZXF1ZXN0T3B0aW9ucy5wYXJhbXMpLFxuICAgICAgICBoZWFkZXJzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TLmhlYWRlcnMpLCByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKSxcbiAgICB9KTtcbiAgICB2YXIgbWlzc2luZ0dsb2JhbHMgPSBbXTtcbiAgICB2YXIgcmVjb21tZW5kZWRQYWNrYWdlcyA9IFtdO1xuICAgIC8vIGRvbid0IGNoZWNrIGZvciBhIGdsb2JhbCBmZXRjaCBpZiBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3YXMgcGFzc2VkIHRocm91Z2hcbiAgICBpZiAoIW9wdGlvbnMuZmV0Y2ggJiYgdHlwZW9mIGZldGNoICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG9wdGlvbnMuZmV0Y2ggPSBmZXRjaC5iaW5kKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtaXNzaW5nR2xvYmFscy5wdXNoKFwiYGZldGNoYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYG5vZGUtZmV0Y2hgXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIFByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbWlzc2luZ0dsb2JhbHMucHVzaChcImBQcm9taXNlYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYGVzNi1wcm9taXNlYFwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBGb3JtRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBtaXNzaW5nR2xvYmFscy5wdXNoKFwiYEZvcm1EYXRhYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYGlzb21vcnBoaWMtZm9ybS1kYXRhYFwiKTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLmZldGNoIHx8XG4gICAgICAgIHR5cGVvZiBQcm9taXNlID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgIHR5cGVvZiBGb3JtRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYXJjZ2lzLXJlc3QtcmVxdWVzdGAgcmVxdWlyZXMgYSBgZmV0Y2hgIGltcGxlbWVudGF0aW9uIGFuZCBnbG9iYWwgdmFyaWFibGVzIGZvciBgUHJvbWlzZWAgYW5kIGBGb3JtRGF0YWAgdG8gYmUgcHJlc2VudCBpbiB0aGUgZ2xvYmFsIHNjb3BlLiBZb3UgYXJlIG1pc3NpbmcgXCIgKyBtaXNzaW5nR2xvYmFscy5qb2luKFwiLCBcIikgKyBcIi4gV2UgcmVjb21tZW5kIGluc3RhbGxpbmcgdGhlIFwiICsgcmVjb21tZW5kZWRQYWNrYWdlcy5qb2luKFwiLCBcIikgKyBcIiBtb2R1bGVzIGF0IHRoZSByb290IG9mIHlvdXIgYXBwbGljYXRpb24gdG8gYWRkIHRoZXNlIHRvIHRoZSBnbG9iYWwgc2NvcGUuIFNlZSBodHRwczovL2JpdC5seS8yS053V2FKIGZvciBtb3JlIGluZm8uXCIpO1xuICAgIH1cbiAgICB2YXIgaHR0cE1ldGhvZCA9IG9wdGlvbnMuaHR0cE1ldGhvZCwgYXV0aGVudGljYXRpb24gPSBvcHRpb25zLmF1dGhlbnRpY2F0aW9uLCByYXdSZXNwb25zZSA9IG9wdGlvbnMucmF3UmVzcG9uc2U7XG4gICAgdmFyIHBhcmFtcyA9IF9fYXNzaWduKHsgZjogXCJqc29uXCIgfSwgb3B0aW9ucy5wYXJhbXMpO1xuICAgIHZhciBvcmlnaW5hbEF1dGhFcnJvciA9IG51bGw7XG4gICAgdmFyIGZldGNoT3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBodHRwTWV0aG9kLFxuICAgICAgICAvKiBlbnN1cmVzIGJlaGF2aW9yIG1pbWljcyBYTUxIdHRwUmVxdWVzdC5cbiAgICAgICAgbmVlZGVkIHRvIHN1cHBvcnQgc2VuZGluZyBJV0EgY29va2llcyAqL1xuICAgICAgICBjcmVkZW50aWFsczogb3B0aW9ucy5jcmVkZW50aWFscyB8fCBcInNhbWUtb3JpZ2luXCIsXG4gICAgfTtcbiAgICAvLyB0aGUgL29hdXRoMi9wbGF0Zm9ybVNlbGYgcm91dGUgd2lsbCBhZGQgWC1Fc3JpLUF1dGgtQ2xpZW50LUlkIGhlYWRlclxuICAgIC8vIGFuZCB0aGF0IHJlcXVlc3QgbmVlZHMgdG8gc2VuZCBjb29raWVzIGNyb3NzIGRvbWFpblxuICAgIC8vIHNvIHdlIG5lZWQgdG8gc2V0IHRoZSBjcmVkZW50aWFscyB0byBcImluY2x1ZGVcIlxuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgJiZcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiWC1Fc3JpLUF1dGgtQ2xpZW50LUlkXCJdICYmXG4gICAgICAgIHVybC5pbmRleE9mKFwiL29hdXRoMi9wbGF0Zm9ybVNlbGZcIikgPiAtMSkge1xuICAgICAgICBmZXRjaE9wdGlvbnMuY3JlZGVudGlhbHMgPSBcImluY2x1ZGVcIjtcbiAgICB9XG4gICAgcmV0dXJuIChhdXRoZW50aWNhdGlvblxuICAgICAgICA/IGF1dGhlbnRpY2F0aW9uLmdldFRva2VuKHVybCwgeyBmZXRjaDogb3B0aW9ucy5mZXRjaCB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGFwcGVuZCBvcmlnaW5hbCByZXF1ZXN0IHVybCBhbmQgcmVxdWVzdE9wdGlvbnNcbiAgICAgICAgICAgICAqIHRvIHRoZSBlcnJvciB0aHJvd24gYnkgZ2V0VG9rZW4oKVxuICAgICAgICAgICAgICogdG8gYXNzaXN0IHdpdGggcmV0cnlpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZXJyLnVybCA9IHVybDtcbiAgICAgICAgICAgIGVyci5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogaWYgYW4gYXR0ZW1wdCBpcyBtYWRlIHRvIHRhbGsgdG8gYW4gdW5mZWRlcmF0ZWQgc2VydmVyXG4gICAgICAgICAgICAgKiBmaXJzdCB0cnkgdGhlIHJlcXVlc3QgYW5vbnltb3VzbHkuIGlmIGEgJ3Rva2VuIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICogZXJyb3IgaXMgdGhyb3duLCB0aHJvdyB0aGUgVU5GRURFUkFURUQgZXJyb3IgdGhlbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3JpZ2luYWxBdXRoRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiXCIpO1xuICAgICAgICB9KVxuICAgICAgICA6IFByb21pc2UucmVzb2x2ZShcIlwiKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcmFtcy50b2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGlvbiAmJiBhdXRoZW50aWNhdGlvbi5nZXREb21haW5DcmVkZW50aWFscykge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmNyZWRlbnRpYWxzID0gYXV0aGVudGljYXRpb24uZ2V0RG9tYWluQ3JlZGVudGlhbHModXJsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDdXN0b20gaGVhZGVycyB0byBhZGQgdG8gcmVxdWVzdC4gSVJlcXVlc3RPcHRpb25zLmhlYWRlcnMgd2l0aCBtZXJnZSBvdmVyIHJlcXVlc3RIZWFkZXJzLlxuICAgICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fTtcbiAgICAgICAgaWYgKGZldGNoT3B0aW9ucy5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnRzIHRva2VuIGZyb20gYmVpbmcgcGFzc2VkIGluIHF1ZXJ5IHBhcmFtcyB3aGVuIGhpZGVUb2tlbiBvcHRpb24gaXMgdXNlZC5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIHdpbmRvdyBpcyBhbHdheXMgZGVmaW5lZCBpbiBhIGJyb3dzZXIuIFRlc3QgY2FzZSBpcyBjb3ZlcmVkIGJ5IEphc21pbmUgaW4gbm9kZSB0ZXN0ICovXG4gICAgICAgICAgICBpZiAocGFyYW1zLnRva2VuICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oaWRlVG9rZW4gJiZcbiAgICAgICAgICAgICAgICAvLyBTaGFyaW5nIEFQSSBkb2VzIG5vdCBzdXBwb3J0IHByZWZsaWdodCBjaGVjayByZXF1aXJlZCBieSBtb2Rlcm4gYnJvd3NlcnMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9HbG9zc2FyeS9QcmVmbGlnaHRfcmVxdWVzdFxuICAgICAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tcIlgtRXNyaS1BdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyBwYXJhbXMudG9rZW47XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVuY29kZSB0aGUgcGFyYW1ldGVycyBpbnRvIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IGVuY29kZVF1ZXJ5U3RyaW5nKHBhcmFtcyk7XG4gICAgICAgICAgICAvLyBkb250IGFwcGVuZCBhICc/JyB1bmxlc3MgcGFyYW1ldGVycyBhcmUgYWN0dWFsbHkgcHJlc2VudFxuICAgICAgICAgICAgdmFyIHVybFdpdGhRdWVyeVN0cmluZyA9IHF1ZXJ5UGFyYW1zID09PSBcIlwiID8gdXJsIDogdXJsICsgXCI/XCIgKyBlbmNvZGVRdWVyeVN0cmluZyhwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gVGhpcyB3b3VsZCBleGNlZWQgdGhlIG1heGltdW0gbGVuZ3RoIGZvciBVUkxzIHNwZWNpZmllZCBieSB0aGUgY29uc3VtZXIgYW5kIHJlcXVpcmVzIFBPU1RcbiAgICAgICAgICAgIChvcHRpb25zLm1heFVybExlbmd0aCAmJlxuICAgICAgICAgICAgICAgIHVybFdpdGhRdWVyeVN0cmluZy5sZW5ndGggPiBvcHRpb25zLm1heFVybExlbmd0aCkgfHxcbiAgICAgICAgICAgICAgICAvLyBPciBpZiB0aGUgY3VzdG9tZXIgcmVxdWlyZXMgdGhlIHRva2VuIHRvIGJlIGhpZGRlbiBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gaGlkZGVuIGluIHRoZSBoZWFkZXIgKGZvciBicm93c2VycylcbiAgICAgICAgICAgICAgICAocGFyYW1zLnRva2VuICYmIG9wdGlvbnMuaGlkZVRva2VuKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBjb25zdW1lciBzcGVjaWZpZWQgYSBtYXhpbXVtIGxlbmd0aCBmb3IgVVJMc1xuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGlzIHdvdWxkIGV4Y2VlZCBpdCwgc28gdXNlIHBvc3QgaW5zdGVhZFxuICAgICAgICAgICAgICAgIGZldGNoT3B0aW9ucy5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdG9rZW4gd2FzIGFscmVhZHkgYWRkZWQgYXMgYSBBdXRoIGhlYWRlciwgYWRkIHRoZSB0b2tlbiBiYWNrIHRvIGJvZHkgd2l0aCBvdGhlciBwYXJhbXMgaW5zdGVhZCBvZiBoZWFkZXJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4ubGVuZ3RoICYmIG9wdGlvbnMuaGlkZVRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgaGVhZGVyIHRoYXQgd2FzIGFkZGVkIGJlZm9yZSB1cmwgcXVlcnkgbGVuZ3RoIHdhcyBjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1tcIlgtRXNyaS1BdXRob3JpemF0aW9uXCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGp1c3QgdXNlIEdFVFxuICAgICAgICAgICAgICAgIHVybCA9IHVybFdpdGhRdWVyeVN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiB1cGRhdGVSZXNvdXJjZXMgY3VycmVudGx5IHJlcXVpcmVzIEZvcm1EYXRhIGV2ZW4gd2hlbiB0aGUgaW5wdXQgcGFyYW1ldGVycyBkb250IHdhcnJhbnQgaXQuXG4gICAgaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vcmVzdC91c2Vycy1ncm91cHMtYW5kLWl0ZW1zL3VwZGF0ZS1yZXNvdXJjZXMuaHRtXG4gICAgICAgIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9hcmNnaXMtcmVzdC1qcy9wdWxsLzUwMCBmb3IgbW9yZSBpbmZvLiAqL1xuICAgICAgICB2YXIgZm9yY2VGb3JtRGF0YSA9IG5ldyBSZWdFeHAoXCIvaXRlbXMvLisvdXBkYXRlUmVzb3VyY2VzXCIpLnRlc3QodXJsKTtcbiAgICAgICAgaWYgKGZldGNoT3B0aW9ucy5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IGVuY29kZUZvcm1EYXRhKHBhcmFtcywgZm9yY2VGb3JtRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWl4aW4gaGVhZGVycyBmcm9tIHJlcXVlc3Qgb3B0aW9uc1xuICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVycyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXF1ZXN0SGVhZGVycyksIG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0ga2FybWEgcmVwb3J0cyBjb3ZlcmFnZSBvbiBicm93c2VyIHRlc3RzIG9ubHkgKi9cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgJiYgIWZldGNoT3B0aW9ucy5oZWFkZXJzLnJlZmVyZXIpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzLnJlZmVyZXIgPSBOT0RFSlNfREVGQVVMVF9SRUZFUkVSX0hFQURFUjtcbiAgICAgICAgfVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSBibG9iIHJlc3BvbnNlcyBhcmUgZGlmZmljdWx0IHRvIG1ha2UgY3Jvc3MgcGxhdGZvcm0gd2Ugd2lsbCBqdXN0IGhhdmUgdG8gdHJ1c3QgdGhlIGlzb21vcnBoaWMgZmV0Y2ggd2lsbCBkbyBpdHMgam9iICovXG4gICAgICAgIGlmICghcmVxdWlyZXNGb3JtRGF0YShwYXJhbXMpICYmICFmb3JjZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9XG4gICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucy5mZXRjaCh1cmwsIGZldGNoT3B0aW9ucyk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIC8vIHNlcnZlciByZXNwb25kZWQgdy8gYW4gYWN0dWFsIGVycm9yICg0MDQsIDUwMCwgZXRjKVxuICAgICAgICAgICAgdmFyIHN0YXR1c18xID0gcmVzcG9uc2Uuc3RhdHVzLCBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgIHRocm93IG5ldyBBcmNHSVNSZXF1ZXN0RXJyb3Ioc3RhdHVzVGV4dCwgXCJIVFRQIFwiICsgc3RhdHVzXzEsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYXdSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAocGFyYW1zLmYpIHtcbiAgICAgICAgICAgIGNhc2UgXCJqc29uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNhc2UgXCJnZW9qc29uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IGJsb2IgcmVzcG9uc2VzIGFyZSBkaWZmaWN1bHQgdG8gbWFrZSBjcm9zcyBwbGF0Zm9ybSB3ZSB3aWxsIGp1c3QgaGF2ZSB0byB0cnVzdCB0aGF0IGlzb21vcnBoaWMgZmV0Y2ggd2lsbCBkbyBpdHMgam9iICovXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoKHBhcmFtcy5mID09PSBcImpzb25cIiB8fCBwYXJhbXMuZiA9PT0gXCJnZW9qc29uXCIpICYmICFyYXdSZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gY2hlY2tGb3JFcnJvcnMoZGF0YSwgdXJsLCBwYXJhbXMsIG9wdGlvbnMsIG9yaWdpbmFsQXV0aEVycm9yKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbEF1dGhFcnJvcikge1xuICAgICAgICAgICAgICAgIC8qIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIHRvIGFuIHVuZmVkZXJhdGVkIHNlcnZpY2UgdGhhdFxuICAgICAgICAgICAgICAgIGRpZG4ndCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uLCBhZGQgdGhlIGJhc2UgdXJsIGFuZCBhIGR1bW15IHRva2VuXG4gICAgICAgICAgICAgICAgdG8gdGhlIGxpc3Qgb2YgdHJ1c3RlZCBzZXJ2ZXJzIHRvIGF2b2lkIGFub3RoZXIgZmVkZXJhdGlvbiBjaGVja1xuICAgICAgICAgICAgICAgIGluIHRoZSBldmVudCBvZiBhIHJlcGVhdCByZXF1ZXN0ICovXG4gICAgICAgICAgICAgICAgdmFyIHRydW5jYXRlZFVybCA9IHVybFxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoL1xcL3Jlc3QoXFwvYWRtaW4pP1xcL3NlcnZpY2VzXFwvLylbMF07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hdXRoZW50aWNhdGlvbi5mZWRlcmF0ZWRTZXJ2ZXJzW3RydW5jYXRlZFVybF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byAyNCBob3Vyc1xuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQXV0aEVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vLyBUeXBlU2NyaXB0IDIuMSBubyBsb25nZXIgYWxsb3dzIHlvdSB0byBleHRlbmQgYnVpbHQgaW4gdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEyNzkwI2lzc3VlY29tbWVudC0yNjU5ODE0NDJcbi8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xuLy9cbi8vIFRoaXMgY29kZSBpcyBmcm9tIE1ETiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvciNDdXN0b21fRXJyb3JfVHlwZXMuXG52YXIgQXJjR0lTUmVxdWVzdEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQXJjR0lTUmVxdWVzdEVycm9yYCAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBBUElcbiAgICAgKiBAcGFyYW0gY29kZSAtIFRoZSBlcnJvciBjb2RlIGZyb20gdGhlIEFQSVxuICAgICAqIEBwYXJhbSByZXNwb25zZSAtIFRoZSBvcmlnaW5hbCByZXNwb25zZSBmcm9tIHRoZSBBUEkgdGhhdCBjYXVzZWQgdGhlIGVycm9yXG4gICAgICogQHBhcmFtIHVybCAtIFRoZSBvcmlnaW5hbCB1cmwgb2YgdGhlIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcmlnaW5hbCBvcHRpb25zIGFuZCBwYXJhbWV0ZXJzIG9mIHRoZSByZXF1ZXN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gQXJjR0lTUmVxdWVzdEVycm9yKG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgXCJVTktOT1dOX0VSUk9SXCI7XG4gICAgICAgIGNvZGUgPSBjb2RlIHx8IFwiVU5LTk9XTl9FUlJPUl9DT0RFXCI7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXJjR0lTUmVxdWVzdEVycm9yXCI7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9XG4gICAgICAgICAgICBjb2RlID09PSBcIlVOS05PV05fRVJST1JfQ09ERVwiID8gbWVzc2FnZSA6IGNvZGUgKyBcIjogXCIgKyBtZXNzYWdlO1xuICAgICAgICB0aGlzLm9yaWdpbmFsTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBBcmNHSVNSZXF1ZXN0RXJyb3I7XG59KCkpO1xuZXhwb3J0IHsgQXJjR0lTUmVxdWVzdEVycm9yIH07XG5BcmNHSVNSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuQXJjR0lTUmVxdWVzdEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFyY0dJU1JlcXVlc3RFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFyY0dJU1JlcXVlc3RFcnJvci5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuLyoqXG4gKiBIZWxwZXIgZm9yIG1ldGhvZHMgd2l0aCBsb3RzIG9mIGZpcnN0IG9yZGVyIHJlcXVlc3Qgb3B0aW9ucyB0byBwYXNzIHRocm91Z2ggYXMgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ3VzdG9tUGFyYW1zKGN1c3RvbU9wdGlvbnMsIGtleXMsIGJhc2VPcHRpb25zKSB7XG4gICAgdmFyIHJlcXVlc3RPcHRpb25zS2V5cyA9IFtcbiAgICAgICAgXCJwYXJhbXNcIixcbiAgICAgICAgXCJodHRwTWV0aG9kXCIsXG4gICAgICAgIFwicmF3UmVzcG9uc2VcIixcbiAgICAgICAgXCJhdXRoZW50aWNhdGlvblwiLFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICBcImZldGNoXCIsXG4gICAgICAgIFwibWF4VXJsTGVuZ3RoXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiXG4gICAgXTtcbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHsgcGFyYW1zOiB7fSB9LCBiYXNlT3B0aW9ucyksIGN1c3RvbU9wdGlvbnMpO1xuICAgIC8vIG1lcmdlIGFsbCBrZXlzIGluIGN1c3RvbU9wdGlvbnMgaW50byBvcHRpb25zLnBhcmFtc1xuICAgIG9wdGlvbnMucGFyYW1zID0ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGN1c3RvbU9wdGlvbnNba2V5XSB8fCB0eXBlb2YgY3VzdG9tT3B0aW9uc1trZXldID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IGN1c3RvbU9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwgb3B0aW9ucy5wYXJhbXMpO1xuICAgIC8vIG5vdyByZW1vdmUgYWxsIHByb3BlcnRpZXMgaW4gb3B0aW9ucyB0aGF0IGRvbid0IGV4aXN0IGluIElSZXF1ZXN0T3B0aW9uc1xuICAgIHJldHVybiByZXF1ZXN0T3B0aW9uc0tleXMucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIHt9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcGVuZC1jdXN0b20tcGFyYW1zLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxOCBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gZW5zdXJlIHRoYXQgdXNlciBzdXBwbGllZCB1cmxzIGRvbid0IGluY2x1ZGUgd2hpdGVzcGFjZSBvciBhIHRyYWlsaW5nIHNsYXNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5VcmwodXJsKSB7XG4gICAgLy8gR3VhcmQgc28gd2UgZG9uJ3QgdHJ5IHRvIHRyaW0gc29tZXRoaW5nIHRoYXQncyBub3QgYSBzdHJpbmdcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyB0cmltIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlcywgYnV0IG5vdCBzcGFjZXMgaW5zaWRlIHRoZSB1cmxcbiAgICB1cmwgPSB1cmwudHJpbSgpO1xuICAgIC8vIHJlbW92ZSB0aGUgdHJhaWxpbmcgc2xhc2ggdG8gdGhlIHVybCBpZiBvbmUgd2FzIGluY2x1ZGVkXG4gICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gPT09IFwiL1wiKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGVhbi11cmwuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IHByb2Nlc3NQYXJhbXMsIHJlcXVpcmVzRm9ybURhdGEgfSBmcm9tIFwiLi9wcm9jZXNzLXBhcmFtc1wiO1xuaW1wb3J0IHsgZW5jb2RlUXVlcnlTdHJpbmcgfSBmcm9tIFwiLi9lbmNvZGUtcXVlcnktc3RyaW5nXCI7XG4vKipcbiAqIEVuY29kZXMgcGFyYW1ldGVycyBpbiBhIFtGb3JtRGF0YV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhKSBvYmplY3QgaW4gYnJvd3NlcnMgb3IgaW4gYSBbRm9ybURhdGFdKGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhKSBpbiBOb2RlLmpzXG4gKlxuICogQHBhcmFtIHBhcmFtcyBBbiBvYmplY3QgdG8gYmUgZW5jb2RlZC5cbiAqIEByZXR1cm5zIFRoZSBjb21wbGV0ZSBbRm9ybURhdGFdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb3JtRGF0YSkgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRm9ybURhdGEocGFyYW1zLCBmb3JjZUZvcm1EYXRhKSB7XG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2FyY2dpcy1yZXN0LWpzL2lzc3Vlcy80OTkgZm9yIG1vcmUgaW5mby5cbiAgICB2YXIgdXNlRm9ybURhdGEgPSByZXF1aXJlc0Zvcm1EYXRhKHBhcmFtcykgfHwgZm9yY2VGb3JtRGF0YTtcbiAgICB2YXIgbmV3UGFyYW1zID0gcHJvY2Vzc1BhcmFtcyhwYXJhbXMpO1xuICAgIGlmICh1c2VGb3JtRGF0YSkge1xuICAgICAgICB2YXIgZm9ybURhdGFfMSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBPYmplY3Qua2V5cyhuZXdQYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmIG5ld1BhcmFtc1trZXldIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgICAgIC8qIFRvIG5hbWUgdGhlIEJsb2I6XG4gICAgICAgICAgICAgICAgIDEuIGxvb2sgdG8gYW4gYWx0ZXJuYXRlIHJlcXVlc3QgcGFyYW1ldGVyIGNhbGxlZCAnZmlsZU5hbWUnXG4gICAgICAgICAgICAgICAgIDIuIHNlZSBpZiAnbmFtZScgaGFzIGJlZW4gdGFja2VkIG9udG8gdGhlIEJsb2IgbWFudWFsbHlcbiAgICAgICAgICAgICAgICAgMy4gaWYgYWxsIGVsc2UgZmFpbHMsIHVzZSB0aGUgcmVxdWVzdCBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IG5ld1BhcmFtc1tcImZpbGVOYW1lXCJdIHx8IG5ld1BhcmFtc1trZXldLm5hbWUgfHwga2V5O1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhXzEuYXBwZW5kKGtleSwgbmV3UGFyYW1zW2tleV0sIGZpbGVuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdQYXJhbXNba2V5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgICAgIG5ld1BhcmFtc1trZXldLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdSZWFkU3RyZWFtJyAmJlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IG9ubHkgc3BlY2lmeSB0aGUga25vd25MZW5ndGggb3B0aW9uIGlmIGEgdmFsaWQgdmFsdWUgaXMgZ2l2ZW4uXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuIHZlcmlmeSBpbiBhbGwgUkVTVCBBUEkgdGhhdCB0aGUgb3B0aW9uIGlzIG5lZWQgZm9yXG4gICAgICAgICAgICAgICAgLy8gbm9kZSBSZWFkU3RyZWFtLCBpdCBjYW4gdGhyb3cgYW4gZXJyb3IgZm9yIHRoZSBtaXNzaW5nIGRhdGFTaXplIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBzdWNoIGNoYW5nZSB3aWxsIGJlIGEgYnJlYWtpbmcgY2hhbmdlLlxuICAgICAgICAgICAgICAgIE51bWJlci5pc0ludGVnZXIobmV3UGFyYW1zW1wiZGF0YVNpemVcIl0pKSB7XG4gICAgICAgICAgICAgICAgLy8gaGF2ZSB0byBjYXN0IHRoZSBmb3JtRGF0YSB0byBhbnkgc28gdGhhdCBJIGNhbiB1c2UgdGhlIHVub2ZmaWNpYWwgQVBJXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGZvcm0tZGF0YSBsaWJyYXJ5IHRvIGhhbmRsZSBOb2RlIFJlYWRTdHJlYW0uIFNlZVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhL2lzc3Vlcy81MDhcbiAgICAgICAgICAgICAgICBmb3JtRGF0YV8xLmFwcGVuZChrZXksIG5ld1BhcmFtc1trZXldLCB7XG4gICAgICAgICAgICAgICAgICAgIGtub3duTGVuZ3RoOiBuZXdQYXJhbXNbXCJkYXRhU2l6ZVwiXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGFfMS5hcHBlbmQoa2V5LCBuZXdQYXJhbXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybURhdGFfMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVRdWVyeVN0cmluZyhwYXJhbXMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuY29kZS1mb3JtLWRhdGEuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IHByb2Nlc3NQYXJhbXMgfSBmcm9tIFwiLi9wcm9jZXNzLXBhcmFtc1wiO1xuLyoqXG4gKiBFbmNvZGVzIGtleXMgYW5kIHBhcmFtZXRlcnMgZm9yIHVzZSBpbiBhIFVSTCdzIHF1ZXJ5IHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ga2V5IFBhcmFtZXRlcidzIGtleVxuICogQHBhcmFtIHZhbHVlIFBhcmFtZXRlcidzIHZhbHVlXG4gKiBAcmV0dXJucyBRdWVyeSBzdHJpbmcgd2l0aCBrZXkgYW5kIHZhbHVlIHBhaXJzIHNlcGFyYXRlZCBieSBcIiZcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUGFyYW0oa2V5LCB2YWx1ZSkge1xuICAgIC8vIEZvciBhcnJheSBvZiBhcnJheXMsIHJlcGVhdCBrZXk9dmFsdWUgZm9yIGVhY2ggZWxlbWVudCBvZiBjb250YWluaW5nIGFycmF5XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlWzBdICYmIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKGFycmF5RWxlbSkgeyByZXR1cm4gZW5jb2RlUGFyYW0oa2V5LCBhcnJheUVsZW0pOyB9KS5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xufVxuLyoqXG4gKiBFbmNvZGVzIHRoZSBwYXNzZWQgb2JqZWN0IGFzIGEgcXVlcnkgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb2JqZWN0IHRvIGJlIGVuY29kZWQuXG4gKiBAcmV0dXJucyBBbiBlbmNvZGVkIHF1ZXJ5IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVF1ZXJ5U3RyaW5nKHBhcmFtcykge1xuICAgIHZhciBuZXdQYXJhbXMgPSBwcm9jZXNzUGFyYW1zKHBhcmFtcyk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1BhcmFtcylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVQYXJhbShrZXksIG5ld1BhcmFtc1trZXldKTtcbiAgICB9KVxuICAgICAgICAuam9pbihcIiZcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbmNvZGUtcXVlcnktc3RyaW5nLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vKipcbiAqIENoZWNrcyBwYXJhbWV0ZXJzIHRvIHNlZSBpZiB3ZSBzaG91bGQgdXNlIEZvcm1EYXRhIHRvIHNlbmQgdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgVGhlIG9iamVjdCB3aG9zZSBrZXlzIHdpbGwgYmUgZW5jb2RlZC5cbiAqIEByZXR1cm4gQSBib29sZWFuIGluZGljYXRpbmcgaWYgRm9ybURhdGEgd2lsbCBiZSByZXF1aXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzRm9ybURhdGEocGFyYW1zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtc1trZXldO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnRvUGFyYW0pIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9QYXJhbSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gdmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSBcIkRhdGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiRnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiQm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJTdHJpbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiTnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBwYXJhbWV0ZXJzIHRvIHRoZSBwcm9wZXIgcmVwcmVzZW50YXRpb24gdG8gc2VuZCB0byB0aGUgQXJjR0lTIFJFU1QgQVBJLlxuICogQHBhcmFtIHBhcmFtcyBUaGUgb2JqZWN0IHdob3NlIGtleXMgd2lsbCBiZSBlbmNvZGVkLlxuICogQHJldHVybiBBIG5ldyBvYmplY3Qgd2l0aCBwcm9wZXJseSBlbmNvZGVkIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NQYXJhbXMocGFyYW1zKSB7XG4gICAgdmFyIG5ld1BhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBwYXJhbSA9IHBhcmFtc1trZXldO1xuICAgICAgICBpZiAocGFyYW0gJiYgcGFyYW0udG9QYXJhbSkge1xuICAgICAgICAgICAgcGFyYW0gPSBwYXJhbS50b1BhcmFtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbSAmJlxuICAgICAgICAgICAgcGFyYW0gIT09IDAgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbSAhPT0gXCJib29sZWFuXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gcGFyYW0uY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyBwcm9wZXJseSBlbmNvZGVzIG9iamVjdHMsIGFycmF5cyBhbmQgZGF0ZXMgZm9yIGFyY2dpcy5jb20gYW5kIG90aGVyIHNlcnZpY2VzLlxuICAgICAgICAvLyBwb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9lc3JpLWxlYWZsZXQvYmxvYi9tYXN0ZXIvc3JjL1JlcXVlc3QuanMjTDIyLUwzMFxuICAgICAgICAvLyBhbHNvIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9hcmNnaXMtcmVzdC1qcy9pc3N1ZXMvMTg6XG4gICAgICAgIC8vIG51bGwsIHVuZGVmaW5lZCwgZnVuY3Rpb24gYXJlIGV4Y2x1ZGVkLiBJZiB5b3Ugd2FudCB0byBzZW5kIGFuIGVtcHR5IGtleSB5b3UgbmVlZCB0byBzZW5kIGFuIGVtcHR5IHN0cmluZyBcIlwiLlxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgICAgICAgICAgIC8vIEJhc2VkIG9uIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBhcnJheSwgY2xhc3NpZnkgYXJyYXkgYXMgYW4gYXJyYXkgb2YgYXJyYXlzLCBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAgICAgICAgICAgICAgLy8gdG8gYmUgc3RyaW5naWZpZWQsIG9yIGFuIGFycmF5IG9mIG5vbi1vYmplY3RzIHRvIGJlIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdEVsZW1lbnRUeXBlID0gKF9iID0gKF9hID0gcGFyYW1bMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5hbWU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnRUeXBlID09PSBcIkFycmF5XCIgPyBwYXJhbSA6IC8vIHBhc3MgdGhydSBhcnJheSBvZiBhcnJheXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0RWxlbWVudFR5cGUgPT09IFwiT2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeShwYXJhbSkgOiAvLyBzdHJpbmdpZnkgYXJyYXkgb2Ygb2JqZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLmpvaW4oXCIsXCIpOyAvLyBqb2luIG90aGVyIHR5cGVzIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShwYXJhbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRGF0ZVwiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW0udmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtICsgXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDAgfHwgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1BhcmFtcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb2Nlc3MtcGFyYW1zLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbi8qKlxuICogTWV0aG9kIHVzZWQgaW50ZXJuYWxseSB0byBzdXJmYWNlIG1lc3NhZ2VzIHRvIGRldmVsb3BlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIFttZXNzYWdlXSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2Fybi5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwibTE0IDQtNiA4LTYtOHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMTQuOTM4IDhBNyA3IDAgMCAxIDEuMDEgOUgwYTguMDAxIDguMDAxIDAgMCAwIDE1LjkzOC0xQTggOCAwIDAgMCAxLjAyIDMuOThMMSAuNzAyYS41LjUgMCAxIDAtMSAuMDA2TC4wMzEgNS45bDUuMTI4LS44MjZhLjUuNSAwIDAgMC0uMTYtLjk4N0wxLjgxOSA0LjZBNyA3IDAgMCAxIDE0LjkzOCA4XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTQgMEgwdjEuMjA3bDUuNSA1LjV2NC41bDIuMTQ2IDIuMTQ3QS41LjUgMCAwIDAgOC41IDEzVjYuNzA3bDUuNS01LjV6TTYuNSA2LjI5MyAxLjIwNyAxaDExLjU4Nkw3LjUgNi4yOTN2NS41bC0xLTF6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMTUgMi43OTNWMmgxdjEuMjA3bC00LjUgNC41VjE1LjVhLjUuNSAwIDAgMS0uODU0LjM1NEwxMCAxNS4yMDd2LTEuNDE0bC41LjV2LTd6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL2ZpbGxlZC9kaXJlY3Rpb25hbC9kb3duLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBEb3duRmlsbGVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9yZXNldC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUmVzZXRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJTVNxbEV4cHJlc3Npb24sIHR5cGUgSU1Hcm91cFNxbEV4cHJlc3Npb24sXHJcbiAgdHlwZSBJTVVzZURhdGFTb3VyY2UsIHR5cGUgSU1JY29uUmVzdWx0LCB0eXBlIENsYXVzZUxvZ2ljXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGVudW0gRmlsdGVyQXJyYW5nZVR5cGUge1xyXG4gIEJsb2NrID0gJ0JMT0NLJyxcclxuICBJbmxpbmUgPSAnSU5MSU5FJyxcclxuICBQb3BwZXIgPSAnUE9QUEVSJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRmlsdGVyVHJpZ2dlclR5cGUge1xyXG4gIFRvZ2dsZSA9ICdUT0dHTEUnLFxyXG4gIEJ1dHRvbiA9ICdCVVRUT04nXHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgZmlsdGVySXRlbUNvbmZpZyB7XHJcbiAgaWNvbj86IElNSWNvblJlc3VsdFxyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGlzR3JvdXA6IGJvb2xlYW5cclxuICB1c2VEYXRhU291cmNlczogSU1Vc2VEYXRhU291cmNlW11cclxuICBzcWxFeHByT2JqPzogSU1TcWxFeHByZXNzaW9uXHJcbiAgc3FsRXhwck9iakZvckdyb3VwPzogSU1Hcm91cFNxbEV4cHJlc3Npb25cclxuICBleHBySW52ZXJ0PzogYm9vbGVhblxyXG4gIGF1dG9BcHBseVdoZW5XaWRnZXRPcGVuPzogYm9vbGVhblxyXG4gIGNvbGxhcHNlRmlsdGVyRXhwcnM/OiBib29sZWFuXHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgZmlsdGVyQ29uZmlnIHtcclxuICBpZDogc3RyaW5nXHJcbiAgYXJyYW5nZVR5cGU6IEZpbHRlckFycmFuZ2VUeXBlXHJcbiAgdHJpZ2dlclR5cGU6IEZpbHRlclRyaWdnZXJUeXBlXHJcbiAgd3JhcD86IGJvb2xlYW4gLy8gb25seSBmb3IgaW5saW5lIGFycmFuZ2VtZW50XHJcbiAgb21pdEludGVybmFsU3R5bGU6IGJvb2xlYW5cclxuICBmaWx0ZXJJdGVtcz86IEltbXV0YWJsZUFycmF5PGZpbHRlckl0ZW1Db25maWc+XHJcbiAgbG9naWNhbE9wZXJhdG9yOiBDbGF1c2VMb2dpY1xyXG4gIGdyb3VwQnlMYXllcjogYm9vbGVhblxyXG4gIGN1c3RvbTogYm9vbGVhblxyXG4gIHJlc2V0QWxsOiBib29sZWFuXHJcbiAgdHVybk9mZkFsbDogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXaWRnZXRDb25maWcgPSBJbW11dGFibGVPYmplY3Q8ZmlsdGVyQ29uZmlnPlxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCwganN4LCBEYXRhU291cmNlQ29tcG9uZW50LCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgdHlwZSBEYXRhU291cmNlLCBEYXRhU291cmNlU3RhdHVzXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuaW50ZXJmYWNlIERhdGFTb3VyY2VQcm9wcyB7XHJcbiAgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlXHJcbiAgb25Jc0RhdGFTb3VyY2VOb3RSZWFkeTogKGRhdGFTb3VyY2VJZDogc3RyaW5nLCBkYXRhU291cmNlU3RhdHVzOiBEYXRhU291cmNlU3RhdHVzKSA9PiB2b2lkXHJcbiAgb25DcmVhdGVEYXRhU291cmNlQ3JlYXRlZE9yRmFpbGVkOiAoZGF0YVNvdXJjZUlkOiBzdHJpbmcsIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVySXRlbURhdGFTb3VyY2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PERhdGFTb3VyY2VQcm9wcz4ge1xyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgIHRoaXMucHJvcHMub25DcmVhdGVEYXRhU291cmNlQ3JlYXRlZE9yRmFpbGVkKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQsIG51bGwpXHJcbiAgICB0aGlzLnByb3BzLm9uSXNEYXRhU291cmNlTm90UmVhZHkodGhpcy5wcm9wcy51c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCwgRGF0YVNvdXJjZVN0YXR1cy5Ob3RSZWFkeSlcclxuICB9XHJcblxyXG4gIG9uRGF0YVNvdXJjZUNyZWF0ZWQgPSAoZHMpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25DcmVhdGVEYXRhU291cmNlQ3JlYXRlZE9yRmFpbGVkKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQsIGRzKVxyXG4gIH1cclxuXHJcbiAgb25EYXRhU291cmNlSW5mb0NoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uSXNEYXRhU291cmNlTm90UmVhZHkodGhpcy5wcm9wcy51c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCwgaW5mbz8uc3RhdHVzKVxyXG4gIH1cclxuXHJcbiAgb25DcmVhdGVEYXRhU291cmNlRmFpbGVkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNyZWF0ZURhdGFTb3VyY2VDcmVhdGVkT3JGYWlsZWQodGhpcy5wcm9wcy51c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCwgbnVsbClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IHVzZURhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cclxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXsgdGhpcy5vbkRhdGFTb3VyY2VDcmVhdGVkIH1cclxuICAgICAgICBvbkNyZWF0ZURhdGFTb3VyY2VGYWlsZWQ9eyB0aGlzLm9uQ3JlYXRlRGF0YVNvdXJjZUZhaWxlZCB9XHJcbiAgICAgICAgb25EYXRhU291cmNlSW5mb0NoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VJbmZvQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCwganN4LCBjbGFzc05hbWVzLCB0eXBlIERhdGFTb3VyY2UsIHR5cGUgSU1TcWxFeHByZXNzaW9uLCB0eXBlIENsYXVzZUxvZ2ljLFxyXG4gIHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgdHlwZSBJbnRsU2hhcGUsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11Q29yZU1lc3NhZ2VzLFxyXG4gIGFwcENvbmZpZ1V0aWxzLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgZ2V0QXBwU3RvcmUsIGxvZGFzaCwgZGF0YVNvdXJjZVV0aWxzXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIGZpbHRlckl0ZW1Db25maWcsIEZpbHRlckFycmFuZ2VUeXBlLCBGaWx0ZXJUcmlnZ2VyVHlwZSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgU3dpdGNoLCBJY29uLCBCdXR0b24sIFBvcHBlciwgQ2FyZCwgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSU1lc3NhZ2VzLCBBbGVydCwgRk9DVVNBQkxFX0NPTlRBSU5FUl9DTEFTUyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IFNxbEV4cHJlc3Npb25SdW50aW1lLCBnZXRTaG93bkNsYXVzZU51bWJlckJ5RXhwcmVzc2lvbiwgZ2V0VG90YWxDbGF1c2VOdW1iZXJCeUV4cHJlc3Npb24gfSBmcm9tICdqaW11LXVpL2Jhc2ljL3NxbC1leHByZXNzaW9uLXJ1bnRpbWUnXHJcbmltcG9ydCB7IGdldFN0eWxlcyB9IGZyb20gJy4vc3R5bGUnXHJcbmltcG9ydCB7IERvd25GaWxsZWQgfSBmcm9tICdqaW11LWljb25zL2ZpbGxlZC9kaXJlY3Rpb25hbC9kb3duJ1xyXG5cclxuY29uc3QgYWxsRGVmYXVsdE1lc3NhZ2VzID0gT2JqZWN0LmFzc2lnbih7fSwgamltdUNvcmVNZXNzYWdlcywgamltdVVJTWVzc2FnZXMpXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlkOiBudW1iZXJcclxuICB3aWRnZXRJZDogc3RyaW5nXHJcbiAgYXJyYW5nZVR5cGU6IEZpbHRlckFycmFuZ2VUeXBlXHJcbiAgdHJpZ2dlclR5cGU6IEZpbHRlclRyaWdnZXJUeXBlXHJcbiAgd3JhcDogYm9vbGVhblxyXG4gIG9taXRJbnRlcm5hbFN0eWxlOiBib29sZWFuXHJcbiAgZmlsdGVyTnVtOiBudW1iZXJcclxuICBjb25maWc6IGZpbHRlckl0ZW1Db25maWdcclxuICB1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2VcclxuICBzZWxlY3RlZERzOiBEYXRhU291cmNlXHJcbiAgaXNOb3RSZWFkeUZyb21XaWRnZXQ/OiBib29sZWFuIC8vIE9ubHkgZm9yIG91dHB1dCBkc1xyXG4gIGxvZ2ljYWxPcGVyYXRvcjogQ2xhdXNlTG9naWNcclxuICBvbkNoYW5nZTogKGlkOiBudW1iZXIsIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UsIHNxbEV4cHJPYmo6IElNU3FsRXhwcmVzc2lvbiwgYXBwbGllZDogYm9vbGVhbikgPT4gdm9pZFxyXG4gIGl0ZW1CZ0NvbG9yOiBzdHJpbmdcclxuICB0aGVtZT86IElNVGhlbWVWYXJpYWJsZXNcclxuICBpbnRsOiBJbnRsU2hhcGVcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBpc09wZW46IGJvb2xlYW5cclxuICBhcHBsaWVkOiBib29sZWFuXHJcbiAgY29sbGFwc2VkOiBib29sZWFuXHJcbiAgc3FsRXhwck9iajogSU1TcWxFeHByZXNzaW9uXHJcbiAgc3FsQ2hhbmdlZDogYm9vbGVhbiAvLyBmb3IgYXBwbHlCdG4ncyBzdGF0ZSBpbiBidXR0b24gJiAhb21pdCxcclxuICBvdXRwdXRXaWRnZXRMYWJlbDogc3RyaW5nXHJcbiAgcG9wcGVyVmVyc2lvbjogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IG1vZGlmaWVycyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgYWx0QXhpczogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVySXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgcGlsbEJ1dHRvbjogYW55XHJcbiAgZW5kVXNlckNsYXVzZXNOdW06IG51bWJlclxyXG4gIGNsYXVzZXNOdW1Db25maWd1cmVkOiBudW1iZXJcclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIGNvbnN0IHsgY29sbGFwc2VGaWx0ZXJFeHBycyB9ID0gdGhpcy5wcm9wcy5jb25maWdcclxuICAgIGNvbnN0IHNxbEV4cHJPYmogPSB0aGlzLmdldFNxbEV4cHJPYmpGcm9tSXRlbSgpXHJcbiAgICB0aGlzLmVuZFVzZXJDbGF1c2VzTnVtID0gZ2V0U2hvd25DbGF1c2VOdW1iZXJCeUV4cHJlc3Npb24oc3FsRXhwck9iailcclxuICAgIHRoaXMuY2xhdXNlc051bUNvbmZpZ3VyZWQgPSBnZXRUb3RhbENsYXVzZU51bWJlckJ5RXhwcmVzc2lvbihzcWxFeHByT2JqKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNPcGVuOiBmYWxzZSxcclxuICAgICAgYXBwbGllZDogdGhpcy5nZXRBcHBsaWVkU3RhdGUoKSxcclxuICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZUZpbHRlckV4cHJzLFxyXG4gICAgICBzcWxFeHByT2JqOiBzcWxFeHByT2JqLFxyXG4gICAgICBzcWxDaGFuZ2VkOiBmYWxzZSxcclxuICAgICAgb3V0cHV0V2lkZ2V0TGFiZWw6IHRoaXMuZ2V0T3V0UHV0V2lkZ2V0TGFiZWwoKSxcclxuICAgICAgcG9wcGVyVmVyc2lvbjogMVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IFByb3BzLCBwcmV2U3RhdGU6IFN0YXRlKSB7XHJcbiAgICBjb25zdCB7IGNvbmZpZywgbG9naWNhbE9wZXJhdG9yLCBvbWl0SW50ZXJuYWxTdHlsZSwgdXNlRGF0YVNvdXJjZSwgc2VsZWN0ZWREcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3Qgc3FsRXhwck9iaiA9IHRoaXMuZ2V0U3FsRXhwck9iakZyb21JdGVtKClcclxuICAgIHRoaXMuZW5kVXNlckNsYXVzZXNOdW0gPSBnZXRTaG93bkNsYXVzZU51bWJlckJ5RXhwcmVzc2lvbihzcWxFeHByT2JqKVxyXG4gICAgdGhpcy5jbGF1c2VzTnVtQ29uZmlndXJlZCA9IGdldFRvdGFsQ2xhdXNlTnVtYmVyQnlFeHByZXNzaW9uKHNxbEV4cHJPYmopXHJcblxyXG4gICAgaWYgKHByZXZQcm9wcy5jb25maWcgIT09IGNvbmZpZyB8fCBwcmV2UHJvcHMuc2VsZWN0ZWREcyAhPT0gc2VsZWN0ZWREcykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBhcHBsaWVkOiB0aGlzLmdldEFwcGxpZWRTdGF0ZSgpLFxyXG4gICAgICAgIGNvbGxhcHNlZDogcHJldlByb3BzLmNvbmZpZy5jb2xsYXBzZUZpbHRlckV4cHJzICE9PSBjb25maWcuY29sbGFwc2VGaWx0ZXJFeHBycyA/IGNvbmZpZy5jb2xsYXBzZUZpbHRlckV4cHJzIDogdGhpcy5zdGF0ZS5jb2xsYXBzZWQsXHJcbiAgICAgICAgc3FsRXhwck9iajogc2VsZWN0ZWREcyA/IHNxbEV4cHJPYmogOiBudWxsLFxyXG4gICAgICAgIG91dHB1dFdpZGdldExhYmVsOiB1c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCA9PT0gcHJldlByb3BzLnVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkID8gdGhpcy5zdGF0ZS5vdXRwdXRXaWRnZXRMYWJlbCA6IHRoaXMuZ2V0T3V0UHV0V2lkZ2V0TGFiZWwoKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmIChwcmV2UHJvcHMubG9naWNhbE9wZXJhdG9yICE9PSBsb2dpY2FsT3BlcmF0b3IgfHwgcHJldlByb3BzLm9taXRJbnRlcm5hbFN0eWxlICE9PSBvbWl0SW50ZXJuYWxTdHlsZSkgeyAvLyB1cGRhdGUgYXBwbGllZCBidG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXBwbGllZDogdGhpcy5nZXRBcHBsaWVkU3RhdGUoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3FsRXhwck9iakZyb21JdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzZWxlY3RlZERzLCBjb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGxldCBzcWxFeHByID0gY29uZmlnLnNxbEV4cHJPYmpcclxuICAgIGlmIChjb25maWcuaXNHcm91cCkge1xyXG4gICAgICBzcWxFeHByID0gZGF0YVNvdXJjZVV0aWxzLmdldERpc3BsYXllZFNRTEV4cHJlc3Npb25Gcm9tR3JvdXBTUUxFeHByZXNzaW9uKGNvbmZpZy5zcWxFeHByT2JqRm9yR3JvdXAsIHNlbGVjdGVkRHMsIHRoaXMuZm9ybWF0TWVzc2FnZSlcclxuICAgIH1cclxuICAgIHJldHVybiBzcWxFeHByXHJcbiAgfVxyXG5cclxuICBmb3JtYXRNZXNzYWdlID0gKGlkLCB2YWx1ZXM/OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBpZCwgZGVmYXVsdE1lc3NhZ2U6IGFsbERlZmF1bHRNZXNzYWdlc1tpZF0gfSwgdmFsdWVzKVxyXG4gIH1cclxuXHJcbiAgZ2V0T3V0UHV0V2lkZ2V0TGFiZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3aWRnZXRzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy53aWRnZXRzXHJcbiAgICBjb25zdCB3SWQgPSBhcHBDb25maWdVdGlscy5nZXRXaWRnZXRJZEJ5T3V0cHV0RGF0YVNvdXJjZSh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2UpXHJcbiAgICByZXR1cm4gd2lkZ2V0c1t3SWRdPy5sYWJlbFxyXG4gIH1cclxuXHJcbiAgZ2V0QXBwbGllZFN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IGFwcGxpZWQgPSB0aGlzLnByb3BzLmNvbmZpZy5hdXRvQXBwbHlXaGVuV2lkZ2V0T3BlblxyXG4gICAgaWYgKHRoaXMucHJvcHMub21pdEludGVybmFsU3R5bGUgJiYgdGhpcy5lbmRVc2VyQ2xhdXNlc051bSA9PT0gMSAmJiB0aGlzLmNsYXVzZXNOdW1Db25maWd1cmVkID09PSAxKSB7XHJcbiAgICAgIGFwcGxpZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwbGllZFxyXG4gIH1cclxuXHJcbiAgb25jb2xsYXBzZWRDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWQgfSlcclxuICB9XHJcblxyXG4gIG9uQXBwbHlDaGFuZ2UgPSAoY2hlY2tlZCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNxbENoYW5nZWQ6IGZhbHNlIH0pXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaWQsIHRoaXMucHJvcHMuc2VsZWN0ZWREcywgdGhpcy5zdGF0ZS5zcWxFeHByT2JqLCBjaGVja2VkKVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVDaGFuZ2UgPSAoY2hlY2tlZCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcGxpZWQ6IGNoZWNrZWQgfSlcclxuICAgIHRoaXMub25BcHBseUNoYW5nZShjaGVja2VkKVxyXG4gIH1cclxuXHJcbiAgb25QaWxsQ2xpY2sgPSAoaGFzUG9wcGVyLCBwaWxsVGFyZ2V0KSA9PiB7XHJcbiAgICBpZiAoaGFzUG9wcGVyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBvcHBlclZlcnNpb246ICF0aGlzLnN0YXRlLmlzT3BlbiA/IHRoaXMuc3RhdGUucG9wcGVyVmVyc2lvbiArIDEgOiB0aGlzLnN0YXRlLnBvcHBlclZlcnNpb25cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5vblRvZ2dsZVBvcHBlcigpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB3aWxsQWN0aXZlID0gcGlsbFRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignYWN0aXZlJykgPCAwXHJcbiAgICAgIHRoaXMub25Ub2dnbGVDaGFuZ2UoISF3aWxsQWN0aXZlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TcWxFeHByZXNzaW9uQ2hhbmdlID0gKHNxbEV4cHJPYmo6IElNU3FsRXhwcmVzc2lvbikgPT4ge1xyXG4gICAgY29uc3QgeyBvbWl0SW50ZXJuYWxTdHlsZSwgaWQsIHNlbGVjdGVkRHMsIHRyaWdnZXJUeXBlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgaXNTcWxDaGFuZ2VkID0gdGhpcy5nZXRTcWxFeHByT2JqRnJvbUl0ZW0oKS5zcWwgIT09IHNxbEV4cHJPYmo/LnNxbFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNxbEV4cHJPYmo6IHNxbEV4cHJPYmosXHJcbiAgICAgIHNxbENoYW5nZWQ6ICEhKHRyaWdnZXJUeXBlID09PSBGaWx0ZXJUcmlnZ2VyVHlwZS5CdXR0b24gJiYgIW9taXRJbnRlcm5hbFN0eWxlICYmIGlzU3FsQ2hhbmdlZClcclxuICAgIH0pXHJcbiAgICBpZiAodHJpZ2dlclR5cGUgPT09IEZpbHRlclRyaWdnZXJUeXBlLlRvZ2dsZSB8fCBvbWl0SW50ZXJuYWxTdHlsZSkge1xyXG4gICAgICBvbkNoYW5nZShpZCwgc2VsZWN0ZWREcywgc3FsRXhwck9iaiwgdGhpcy5zdGF0ZS5hcHBsaWVkKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVQb3BwZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcclxuICAgICAgbG9kYXNoLmRlZmVyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnBpbGxCdXR0b24uZm9jdXMoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuIH0pXHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJJdGVtID0gKGhhc0VuZFVzZXJDbGF1c2VzOiBib29sZWFuLCBpc1RpdGxlSGlkZGVuID0gZmFsc2UpID0+IHtcclxuICAgIGNvbnN0IHsgaWNvbiwgbmFtZSB9ID0gdGhpcy5wcm9wcy5jb25maWdcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTEwMCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBwci0yIGFsaWduLWl0ZW1zLWNlbnRlcicsIEZPQ1VTQUJMRV9DT05UQUlORVJfQ0xBU1MsIGlzVGl0bGVIaWRkZW4gPyAnZmxleC1yb3ctcmV2ZXJzZScgOiAnJyl9PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAhaXNUaXRsZUhpZGRlbiAmJiBoYXNFbmRVc2VyQ2xhdXNlcyAmJiA8QnV0dG9uIHNpemU9J3NtJyBpY29uIHR5cGU9J3RlcnRpYXJ5JyBvbkNsaWNrPXt0aGlzLm9uY29sbGFwc2VkQ2hhbmdlfSBjbGFzc05hbWU9J2ppbXUtb3V0bGluZS1pbnNpZGUnPlxyXG4gICAgICAgICAgICAgIDxEb3duRmlsbGVkIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb2xsYXBzZWQgPyAnZmlsdGVyLWl0ZW0tYXJyb3cnIDogJyd9IHNpemU9J3MnIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAhaXNUaXRsZUhpZGRlbiAmJiBpY29uICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdmaWx0ZXItaXRlbS1pY29uJywgaGFzRW5kVXNlckNsYXVzZXMgPyAnJyA6ICduby1hcnJvdycpfT5cclxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXtpY29uLnN2Z30gc2l6ZT17aWNvbi5wcm9wZXJ0aWVzLnNpemV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAhaXNUaXRsZUhpZGRlbiAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZmlsdGVyLWl0ZW0tbmFtZSBmbGV4LWdyb3ctMScsICFoYXNFbmRVc2VyQ2xhdXNlcyAmJiAhaWNvbiA/ICduby1pY29ucycgOiAnJyl9PntuYW1lfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHJpZ2dlclR5cGUgPT09IEZpbHRlclRyaWdnZXJUeXBlLlRvZ2dsZSAmJiA8ZGl2IGNsYXNzTmFtZT0nbWwtMSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICB7dGhpcy5nZXRUb2dnbGUoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zcWxFeHByT2JqICYmIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5jb2xsYXBzZWQgPyAnbm9uZScgOiAnYmxvY2snIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndy0xMDAgcGwtNiBwci02JyxcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlZCA/ICcnIDogRk9DVVNBQkxFX0NPTlRBSU5FUl9DTEFTUyxcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmFycmFuZ2VUeXBlID09PSBGaWx0ZXJBcnJhbmdlVHlwZS5JbmxpbmUgJiYgdGhpcy5wcm9wcy5maWx0ZXJOdW0gPT09IDEgJiYgdGhpcy5wcm9wcy5vbWl0SW50ZXJuYWxTdHlsZSA/ICdzcWwtZXhwcmVzc2lvbi1pbmxpbmUnIDogJycsXHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcnJhbmdlVHlwZSA9PT0gRmlsdGVyQXJyYW5nZVR5cGUuSW5saW5lICYmIHRoaXMucHJvcHMuZmlsdGVyTnVtID09PSAxICYmIHRoaXMucHJvcHMud3JhcCA/ICdzcWwtZXhwcmVzc2lvbi13cmFwJyA6ICcnKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RoaXMuZ2V0U3FsRXhwcmVzc2lvbigpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMudHJpZ2dlclR5cGUgPT09IEZpbHRlclRyaWdnZXJUeXBlLkJ1dHRvbiAmJiA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcGwtNSBwci01IHB0LTIgcGItMic+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldEFwcGx5QnV0dG9ucygpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGlzRGF0YVNvdXJjZUVycm9yID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWREcyA9PT0gbnVsbFxyXG4gIH1cclxuXHJcbiAgaXNPdXRwdXRGcm9tV2lkZ2V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWREcz8uZ2V0RGF0YVNvdXJjZUpzb24oKS5pc091dHB1dEZyb21XaWRnZXRcclxuICB9XHJcblxyXG4gIGlzT3V0cHV0RGF0YVNvdXJjZVZhbGlkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNPdXRwdXRGcm9tV2lkZ2V0KCkgJiYgIXRoaXMucHJvcHMuaXNOb3RSZWFkeUZyb21XaWRnZXRcclxuICB9XHJcblxyXG4gIGlzT3V0cHV0RGF0YVNvdXJjZUludmFsaWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc091dHB1dEZyb21XaWRnZXQoKSAmJiB0aGlzLnByb3BzLmlzTm90UmVhZHlGcm9tV2lkZ2V0XHJcbiAgfVxyXG5cclxuICAvLyB2YWxpZDogZm9yIGRpc3BsYXkgYWxsIGNsYXVzZXMgb2YgY3VycmVudCBmaWx0ZXIuXHJcbiAgaXNEYXRhU291cmNlVmFsaWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RlZERzICYmICgodGhpcy5pc091dHB1dEZyb21XaWRnZXQoKSAmJiAhdGhpcy5wcm9wcy5pc05vdFJlYWR5RnJvbVdpZGdldCkgfHwgIXRoaXMuaXNPdXRwdXREYXRhU291cmNlSW52YWxpZCgpKVxyXG4gIH1cclxuXHJcbiAgLy8gbG9hZGluZyBvciBpbnZhbGlkOiBmb3IgdGhlIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgU3dpdGggYW5kIEJ1dHRvbi5cclxuICBpc0RhdGFTb3VyY2VMb2FkaW5nT3JJbnZhbGlkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzRGF0YVNvdXJjZVZhbGlkKClcclxuICB9XHJcblxyXG4gIGdldEVycm9ySWNvbiA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmlzRGF0YVNvdXJjZUVycm9yKCkpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QWxlcnRcclxuICAgICAgICAgIGJ1dHRvblR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgZm9ybT0ndG9vbHRpcCdcclxuICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgdHlwZT0nZXJyb3InXHJcbiAgICAgICAgICB0ZXh0PXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2RhdGFTb3VyY2VDcmVhdGVFcnJvcicpfVxyXG4gICAgICAgID5cclxuICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNPdXRwdXREYXRhU291cmNlSW52YWxpZCgpKSB7XHJcbiAgICAgIGNvbnN0IHdhcm5pbmdMYWJlbCA9IHRoaXMuZm9ybWF0TWVzc2FnZSgnb3V0cHV0RGF0YUlzTm90R2VuZXJhdGVkJywgeyBvdXRwdXREc0xhYmVsOiB0aGlzLnByb3BzLnNlbGVjdGVkRHMuZ2V0TGFiZWwoKSwgc291cmNlV2lkZ2V0TmFtZTogdGhpcy5zdGF0ZS5vdXRwdXRXaWRnZXRMYWJlbCB9KVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgYnV0dG9uVHlwZT0ndGVydGlhcnknXHJcbiAgICAgICAgICBmb3JtPSd0b29sdGlwJ1xyXG4gICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICB0eXBlPSd3YXJuaW5nJ1xyXG4gICAgICAgICAgdGV4dD17d2FybmluZ0xhYmVsfVxyXG4gICAgICAgID5cclxuICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgLy8gYmluZCBlcnJvciBpY29uIHdpdGggdG9nZ2xlXHJcbiAgICAvLyByZXR1cm4gPFN3aXRjaCBjaGVja2VkPXt0aGlzLnN0YXRlLmFwcGxpZWR9IGRpc2FibGVkPXshdGhpcy5wcm9wcy5zZWxlY3RlZERzfSBvbkNoYW5nZT17ZXZ0ID0+IHRoaXMub25Ub2dnbGVDaGFuZ2UoZXZ0LnRhcmdldC5jaGVja2VkKX0gLz5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7dGhpcy5nZXRFcnJvckljb24oKX1cclxuICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmFwcGxpZWR9XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5pc0RhdGFTb3VyY2VMb2FkaW5nT3JJbnZhbGlkKCl9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnByb3BzLmNvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiB7IHRoaXMub25Ub2dnbGVDaGFuZ2UoZXZ0LnRhcmdldC5jaGVja2VkKSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBnZXRBcHBseUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYXBwbHktY2FuY2VsLWdyb3VwJz5cclxuICAgICAgICB7dGhpcy5nZXRFcnJvckljb24oKX1cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB0eXBlPSdwcmltYXJ5JyBjbGFzc05hbWU9J2ZpbHRlci1hcHBseS1idXR0b24gd3JhcCdcclxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmlzRGF0YVNvdXJjZUxvYWRpbmdPckludmFsaWQoKSB8fCAhISh0aGlzLnN0YXRlLmFwcGxpZWQgJiYgIXRoaXMuc3RhdGUuc3FsQ2hhbmdlZCl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRoaXMub25BcHBseUNoYW5nZSh0cnVlKSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2FwcGx5Jyl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT0nZGVmYXVsdCcgY2xhc3NOYW1lPSdmaWx0ZXItY2FuY2VsLWJ1dHRvbiBtbC0yJ1xyXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuaXNEYXRhU291cmNlTG9hZGluZ09ySW52YWxpZCgpIHx8ICF0aGlzLnN0YXRlLmFwcGxpZWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRoaXMub25BcHBseUNoYW5nZShmYWxzZSkgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2NhbmNlbCcpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGdldFRyaWdnZXJOb2RlRm9yQ2xhdXNlcyA9ICh0cmlnZ2VyVHlwZSA9IHRoaXMucHJvcHMudHJpZ2dlclR5cGUpID0+IHtcclxuICAgIGxldCBUcmlnZ2VyID0gbnVsbFxyXG4gICAgc3dpdGNoICh0cmlnZ2VyVHlwZSkge1xyXG4gICAgICBjYXNlIEZpbHRlclRyaWdnZXJUeXBlLlRvZ2dsZTpcclxuICAgICAgICBUcmlnZ2VyID0gdGhpcy5nZXRUb2dnbGUoKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgRmlsdGVyVHJpZ2dlclR5cGUuQnV0dG9uOlxyXG4gICAgICAgIFRyaWdnZXIgPSB0aGlzLmdldEFwcGx5QnV0dG9ucygpXHJcbiAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIHJldHVybiBUcmlnZ2VyXHJcbiAgfVxyXG5cclxuICBnZXRTcWxFeHByZXNzaW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEYXRhU291cmNlVmFsaWQoKVxyXG4gICAgICA/IDxTcWxFeHByZXNzaW9uUnVudGltZVxyXG4gICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLndpZGdldElkfVxyXG4gICAgICAgIGRhdGFTb3VyY2U9e3RoaXMucHJvcHMuc2VsZWN0ZWREc31cclxuICAgICAgICBleHByZXNzaW9uPXt0aGlzLnN0YXRlLnNxbEV4cHJPYmp9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TcWxFeHByZXNzaW9uQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA6IG51bGxcclxuICB9XHJcblxyXG4gIC8qIHRvZ2dsZShUUikgb3IgYnV0dG9uKEJSKTogZm9yIHdyYXAgbXVsdGlwbGUgY2xhdXNlcyAqL1xyXG4gIGdldFRpcmdnZXJOb2RlRm9yV3JhcENsYXVzZXMgPSAodHJpZ2dlclR5cGUpID0+IHtcclxuICAgIHJldHVybiB0cmlnZ2VyVHlwZSA9PT0gdGhpcy5wcm9wcy50cmlnZ2VyVHlwZSAmJiB0aGlzLmlzU2luZ2xlRmlsdGVyQW5kTXVsdGlwbGVDbGF1c2VzKCkgJiYgdGhpcy5wcm9wcy53cmFwICYmIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3ctcmV2ZXJzZSc+XHJcbiAgICAgIHt0aGlzLmdldFRyaWdnZXJOb2RlRm9yQ2xhdXNlcyh0cmlnZ2VyVHlwZSl9XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcblxyXG4gIC8qIHRvZ2dsZSBvciBidXR0b24gKFJpZ2h0KSBmb3Igbm8td3JhcCBtdWx0aXBsZSBjbGF1c2VzICovXHJcbiAgZ2V0VHJpZ2dlck5vZGVGb3JOb1dyYXBDbGF1c2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NpbmdsZUZpbHRlckFuZE11bHRpcGxlQ2xhdXNlcygpICYmICF0aGlzLnByb3BzLndyYXAgJiYgPGRpdiBjbGFzc05hbWU9J21sLTQnPlxyXG4gICAgICB7dGhpcy5nZXRUcmlnZ2VyTm9kZUZvckNsYXVzZXMoKX1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbiAgLy8gMSBmaWx0ZXIsIG11bHRpcGxlIGNsYXVzZSBjb25maWd1cmVkLCBhbmQgdmlzaWJsZSBjbGF1c2VzIGV4aXN0c1xyXG4gIGlzU2luZ2xlRmlsdGVyQW5kTXVsdGlwbGVDbGF1c2VzICgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlck51bSA9PT0gMSAmJiB0aGlzLmNsYXVzZXNOdW1Db25maWd1cmVkID4gMSAmJiB0aGlzLmVuZFVzZXJDbGF1c2VzTnVtID49IDFcclxuICB9XHJcblxyXG4gIC8vIDEgZmlsdGVyLCAxIGNsYXVzZSBjb25maWd1cmVkLCBhbmQgaXQncyB2aXNpYmxlIGZvciBlbmRVc2VyLlxyXG4gIGlzU2luZ2xlRmlsdGVyQW5kU2luZ2xlU2hvd25DbGF1c2UgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZmlsdGVyTnVtID09PSAxICYmIHRoaXMuY2xhdXNlc051bUNvbmZpZ3VyZWQgPT09IDEgJiYgdGhpcy5lbmRVc2VyQ2xhdXNlc051bSA9PT0gMVxyXG4gIH1cclxuXHJcbiAgLy8gbXVsdGlwbGUgZmlsdGVycywgY3VycmVudCBmaWx0ZXIgaGFzIG9ubHkgMSBzaW5sZ2UgY2xhdXNlICYgaXQncyB2aXNpYmxlIGZvciBlbmRVc2VyLlxyXG4gIGlzTXVsdGlwbGVGaWx0ZXJzQW5kU2luZ2xlU2hvd25DbGF1c2UgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZmlsdGVyTnVtID4gMSAmJiB0aGlzLmNsYXVzZXNOdW1Db25maWd1cmVkID09PSAxICYmIHRoaXMuZW5kVXNlckNsYXVzZXNOdW0gPT09IDFcclxuICB9XHJcblxyXG4gIC8vIFJlbmRlciBibG9jayAoICYgcG9wdXAtYmxvY2spLCBvciBpbmxpbmUuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgY29uZmlnLCBhcnJhbmdlVHlwZSwgdHJpZ2dlclR5cGUsIG9taXRJbnRlcm5hbFN0eWxlLCB3cmFwLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBuYW1lLCBpY29uIH0gPSBjb25maWdcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItaXRlbScgcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e25hbWV9PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nZmlsdGVyLWl0ZW0taW5saW5lJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYXJyYW5nZVR5cGUgPT09IEZpbHRlckFycmFuZ2VUeXBlLkJsb2NrXHJcbiAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBvbWl0SW50ZXJuYWxTdHlsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAodGhpcy5pc1NpbmdsZUZpbHRlckFuZFNpbmdsZVNob3duQ2xhdXNlKCkgfHwgdGhpcy5pc011bHRpcGxlRmlsdGVyc0FuZFNpbmdsZVNob3duQ2xhdXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgcGwtNiBwci02Jz57dGhpcy5nZXRTcWxFeHByZXNzaW9uKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWV4cGFuZGVkLWNvbnRhaW5lcic+e3RoaXMuZ2V0RmlsdGVySXRlbSh0aGlzLmVuZFVzZXJDbGF1c2VzTnVtID49IDEpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDogPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvLyBzaW5nbGUgZmlsdGVyLCBzaW5nbGUgY2xhdXNlLCBzaW5nbGUgc2hvd25cclxuICAgICAgICAgICAgICAgICAgdGhpcy5pc1NpbmdsZUZpbHRlckFuZFNpbmdsZVNob3duQ2xhdXNlKClcclxuICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdzcWwtZXhwcmVzc2lvbi1pbmxpbmUgZC1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldFNxbEV4cHJlc3Npb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW9taXRJbnRlcm5hbFN0eWxlICYmIDxkaXYgY2xhc3NOYW1lPSdtbC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRUcmlnZ2VyTm9kZUZvckNsYXVzZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzU2luZ2xlRmlsdGVyQW5kTXVsdGlwbGVDbGF1c2VzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc011bHRpcGxlRmlsdGVyc0FuZFNpbmdsZVNob3duQ2xhdXNlKCkgJiYgb21pdEludGVybmFsU3R5bGUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NxbC1leHByZXNzaW9uLWlubGluZSBkLWZsZXgnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3FsLWV4cHJlc3Npb24td3JhcCc6IHdyYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmlsdGVyLWl0ZW0tcGlsbCc6IHRoaXMuaXNNdWx0aXBsZUZpbHRlcnNBbmRTaW5nbGVTaG93bkNsYXVzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0VGlyZ2dlck5vZGVGb3JXcmFwQ2xhdXNlcyhGaWx0ZXJUcmlnZ2VyVHlwZS5Ub2dnbGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0U3FsRXhwcmVzc2lvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0VGlyZ2dlck5vZGVGb3JXcmFwQ2xhdXNlcyhGaWx0ZXJUcmlnZ2VyVHlwZS5CdXR0b24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0VHJpZ2dlck5vZGVGb3JOb1dyYXBDbGF1c2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItcG9wcGVyLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlID09PSBGaWx0ZXJUcmlnZ2VyVHlwZS5Ub2dnbGUgJiYgdGhpcy5lbmRVc2VyQ2xhdXNlc051bSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPENhcmQgY2xhc3NOYW1lPSdmaWx0ZXItaXRlbS1waWxsIGZpbHRlci1pdGVtLXRvZ2dsZS1waWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb24uc3ZnfSBzaXplPXtpY29uLnByb3BlcnRpZXMuc2l6ZX0gY2xhc3NOYW1lPSdtci0xJyAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItaXRlbS1uYW1lIHRvZ2dsZS1uYW1lJz57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldFRvZ2dsZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW0tcGlsbCBoLTEwMCBub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCcnLCB7ICdmcmFtZS1hY3RpdmUnOiB0aGlzLnN0YXRlLmFwcGxpZWQgfSl9IHRpdGxlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMucGlsbEJ1dHRvbiA9IHJlZiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdkZWZhdWx0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9e3RoaXMuc3RhdGUuYXBwbGllZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZ0ID0+IHsgdGhpcy5vblBpbGxDbGljayh0aGlzLmVuZFVzZXJDbGF1c2VzTnVtID49IDEsIHRoaXMucGlsbEJ1dHRvbikgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24gJiYgPEljb24gaWNvbj17aWNvbi5zdmd9IHNpemU9e2ljb24ucHJvcGVydGllcy5zaXplfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRVc2VyQ2xhdXNlc051bSA+PSAxICYmIDxQb3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMub25Ub2dnbGVQb3BwZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlPXt0aGlzLnBpbGxCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj17dGhpcy5zdGF0ZS5wb3BwZXJWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dGhpcy5zdGF0ZS5wb3BwZXJWZXJzaW9uID4gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZUxhdGVzdEZvY3VzRWxlbWVudHM9e3RyaWdnZXJUeXBlID09PSBGaWx0ZXJUcmlnZ2VyVHlwZS5CdXR0b259IC8vIGNhbmNlbCBidXR0b24gY291bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlci1pdGVtcy1jb250YWluZXInIGNzcz17Z2V0U3R5bGVzKHRoZW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWl0ZW0gZmlsdGVyLWl0ZW0tcG9wcGVyIG92ZXJmbG93LWF1dG8nIHN0eWxlPXt7IG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSAyMHB4KScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nZmlsdGVyLWl0ZW0taW5saW5lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRGaWx0ZXJJdGVtKHRoaXMuZW5kVXNlckNsYXVzZXNOdW0gPj0gMSwgYXJyYW5nZVR5cGUgIT09IEZpbHRlckFycmFuZ2VUeXBlLlBvcHBlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcywgcG9saXNoZWQsIGdldEFwcFN0b3JlIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFdpZGdldENvbmZpZywgRmlsdGVyQXJyYW5nZVR5cGUgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVzICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcywgY29uZmlnPzogV2lkZ2V0Q29uZmlnKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgY29uc3QgaXNSVEwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29udGV4dC5pc1JUTFxyXG4gIGNvbnN0IGlucHV0TWl4V2lkdGggPSAnMjAwcHgnXHJcbiAgY29uc3QgZG91YmxlSW5wdXRNaXhXaWR0aCA9ICczMDBweCdcclxuICBjb25zdCBkb3VibGVEYXRlSW5wdXRNaXhXaWR0aCA9ICczNTBweCdcclxuICBjb25zdCBpc0hvcml6b250YWxQaWxsSXRlbXMgPSBjb25maWc/LmFycmFuZ2VUeXBlID09PSBGaWx0ZXJBcnJhbmdlVHlwZS5JbmxpbmUgJiYgY29uZmlnPy5maWx0ZXJJdGVtcz8ubGVuZ3RoID49IDJcclxuICByZXR1cm4gY3NzYFxyXG4gICAgLmZpbHRlci1pdGVtcy1jb250YWluZXIsICYuZmlsdGVyLWl0ZW1zLWNvbnRhaW5lciB7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgLmZpbHRlci1pdGVtIHtcclxuICAgICAgICAvKiBza2lwIGNhc2U6IGhvcml6b250YWwgcGlsbCBpdGVtcyAqL1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAke2lzSG9yaXpvbnRhbFBpbGxJdGVtcyA/IDAgOiAnMC41cmVtJ307XHJcblxyXG4gICAgICAgICYuZmlsdGVyLWl0ZW0tcG9wcGVye1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgICAgICBtaW4td2lkdGg6ICR7ZG91YmxlSW5wdXRNaXhXaWR0aH07XHJcbiAgICAgICAgICBtYXgtd2lkdGg6ICR7ZG91YmxlRGF0ZUlucHV0TWl4V2lkdGh9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbHRlci1pdGVtLWlubGluZSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAuZmlsdGVyLWl0ZW0tYXJyb3d7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCR7aXNSVEwgPyA5MCA6IDI3MH1kZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZpbHRlci1pdGVtLWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgJi5uby1hcnJvd3tcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmlsdGVyLWl0ZW0tbmFtZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAke3BvbGlzaGVkLnJlbSgxMyl9O1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICAmLm5vLWljb25ze1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50b2dnbGUtbmFtZXtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogc3FsLWV4cHJlc3Npb24tc3R5bGVzIC0gc3RhcnQgKi9cclxuICAgICAgICAgIC5zcWwtZXhwcmVzc2lvbi1pbmxpbmV7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmLnNxbC1leHByZXNzaW9uLXdyYXB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgLnNxbC1leHByZXNzaW9uLWJ1aWxkZXJ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAuc3FsLWV4cHJlc3Npb24tY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAuc3FsLWV4cHJlc3Npb24tc2V0e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zcWwtZXhwcmVzc2lvbi1idWlsZGVye1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgICAgLnNxbC1leHByZXNzaW9uLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAuc3FsLWV4cHJlc3Npb24tc2luZ2xle1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8qIC5jbGF1c2UtaW5saW5le1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogJHtpbnB1dE1peFdpZHRofTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuY2xhdXNlLWJsb2Nre1xyXG4gICAgICAgICAgICAgICAgICAgIC5zcWwtZXhwcmVzc2lvbi1pbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogJHtpbnB1dE1peFdpZHRofTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLnNxbC1leHByZXNzaW9uLWRpc3BsYXlsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6ICR7aW5wdXRNaXhXaWR0aH07XHJcbiAgICAgICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zcWwtZXhwcmVzc2lvbi1zZXR7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLyogc3FsLWV4cHJlc3Npb24tc3R5bGVzIC0gZW5kICovXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpbHRlci1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5maWx0ZXItaXRlbXMtaW5saW5le1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuc3FsLWV4cHJlc3Npb24tYnVpbGRlciAuc3FsLWV4cHJlc3Npb24tY29udGFpbmVyIC5zcWwtZXhwcmVzc2lvbi1zaW5nbGUgLnNxbC1leHByZXNzaW9uLWlucHV0IC5waWxsLWJ0bi1jb250YWluZXJ7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgIC5waWxsLWJ0bntcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZpbHRlci1pdGVtcy13cmFwe1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAuc3FsLWV4cHJlc3Npb24tYnVpbGRlciAuc3FsLWV4cHJlc3Npb24tY29udGFpbmVyIC5zcWwtZXhwcmVzc2lvbi1zaW5nbGUgLnNxbC1leHByZXNzaW9uLWlucHV0IC5waWxsLWJ0bi1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpbHRlci1pdGVte1xyXG4gICAgICAgICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgICAgICAgICYuZmlsdGVyLWl0ZW0tcG9wcGVye1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICAuZmlsdGVyLWl0ZW0taW5saW5lIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5maWx0ZXItaXRlbS1pbmxpbmV7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAuZmlsdGVyLWV4cGFuZGVkLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICB3aWR0aDogJHtkb3VibGVJbnB1dE1peFdpZHRofTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiAuZmlsdGVyLWl0ZW0tY2xhdXNlLXBpbGx7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB9ICovXHJcblxyXG4gICAgICAgICAgICAvKiAuZmlsdGVyLXBvcHBlci1jb250YWluZXJ7ICovXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1pdGVtLXBpbGx7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggNHB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICAuc3FsLWV4cHJlc3Npb24tc2luZ2xle1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5maWx0ZXItaXRlbS10b2dnbGUtcGlsbHtcclxuICAgICAgICAgICAgICAgICAgLyogJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzEwMF19O1xyXG4gICAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLyogfSAqL1xyXG4gICAgICAgICAgICAgIC8qIC5waWxsLWRpc3BsYXktbGFiZWx7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyppbnB1dCBlZGl0b3Igd2lkdGgqL1xyXG4gICAgICAgICAgICAuc3FsLWV4cHJlc3Npb24tYnVpbGRlcntcclxuICAgICAgICAgICAgICAuc3FsLWV4cHJlc3Npb24tY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgLnNxbC1leHByZXNzaW9uLXNpbmdsZXtcclxuICAgICAgICAgICAgICAgICAgLmNsYXVzZS1pbmxpbmV7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNxbC1leHByZXNzaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3FsLWV4cHJlc3Npb24taW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8qIC5jbGF1c2UtYmxvY2t7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLnNxbC1leHByZXNzaW9uLWlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAke2lucHV0TWl4V2lkdGh9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgLmRvdWJsZS1udW1iZXItcGlja2Vye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6ICR7ZG91YmxlSW5wdXRNaXhXaWR0aH07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuZG91YmxlLWRhdGV0aW1lLXBpY2tlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAke2RvdWJsZURhdGVJbnB1dE1peFdpZHRofTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8qIH0gKi9cclxuICAgICAgICAgICAgICAgICAgLnNxbC1leHByZXNzaW9uLWRpc3BsYXlsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmZpbHRlci1pdGVtcy1wb3B1cHtcclxuICAgICAgICBtaW4td2lkdGg6ICR7ZG91YmxlSW5wdXRNaXhXaWR0aH07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAke2RvdWJsZURhdGVJbnB1dE1peFdpZHRofTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFwcGx5LWNhbmNlbC1ncm91cHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlci1yZXNldC1jb250YWluZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICYuYm90dG9tLXJlc2V0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG4gICAgICAmLnJpZ2h0LXJlc2V0IHtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogJ1VuaXBlciBGaWx0ZXInXHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZVZlcnNpb25NYW5hZ2VyLCBEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgRmlsdGVyQXJyYW5nZVR5cGUsIEZpbHRlclRyaWdnZXJUeXBlIH0gZnJvbSAnLi9jb25maWcnXHJcbmltcG9ydCB7IHVwZGF0ZVNRTEV4cHJlc3Npb25CeVZlcnNpb24gfSBmcm9tICdqaW11LXVpL2Jhc2ljL3NxbC1leHByZXNzaW9uLXJ1bnRpbWUnXHJcblxyXG5jb25zdCBnZXRBbGxEcyA9IGFzeW5jIGZ1bmN0aW9uIChmaWx0ZXJJdGVtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgcHJvbWlzZXMgPSBbXVxyXG4gIGNvbnN0IGRzTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICBmaWx0ZXJJdGVtcyAmJiBmaWx0ZXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaWYgKGl0ZW0uc3FsRXhwck9iaikge1xyXG4gICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgIGRzTWFuYWdlci5jcmVhdGVEYXRhU291cmNlQnlVc2VEYXRhU291cmNlKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0uZGF0YVNvdXJjZSwgeyBtYWluRGF0YVNvdXJjZUlkOiBpdGVtLmRhdGFTb3VyY2UuZGF0YVNvdXJjZUlkIH0pKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXHJcbn1cclxuXHJcbmNsYXNzIFZlcnNpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVZlcnNpb25NYW5hZ2VyIHtcclxuICB2ZXJzaW9ucyA9IFt7XHJcbiAgICB2ZXJzaW9uOiAnMS4xLjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgdXBncmFkZXI6IGFzeW5jIChvbGRDb25maWcpID0+IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGdldEFsbERzKG9sZENvbmZpZy5maWx0ZXJJdGVtcykudGhlbigoZHNMaXN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0NvbmZpZyA9IG9sZENvbmZpZ1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ2FycmFuZ2VUeXBlJywgRmlsdGVyQXJyYW5nZVR5cGUuQmxvY2spXHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgndHJpZ2dlclR5cGUnLCBGaWx0ZXJUcmlnZ2VyVHlwZS5Ub2dnbGUpXHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgnd3JhcCcsIGZhbHNlKVxyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ29taXRJbnRlcm5hbFN0eWxlJywgZmFsc2UpXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0ZJdGVtcyA9IGRzTGlzdC5tYXAoKGRzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZkl0ZW0gPSBuZXdDb25maWcuZmlsdGVySXRlbXNbaW5kZXhdXHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZkl0ZW0sIHtcclxuICAgICAgICAgICAgc3FsRXhwck9iajogZkl0ZW0uc3FsRXhwck9iaiA/IHVwZGF0ZVNRTEV4cHJlc3Npb25CeVZlcnNpb24oZkl0ZW0uc3FsRXhwck9iaiwgJzEuMS4wJywgZHMpIDogbnVsbCxcclxuICAgICAgICAgICAgaWNvbjogZkl0ZW0uaWNvbi5zZXRJbihbJ3Byb3BlcnRpZXMnLCAnY29sb3InXSwgbnVsbCksXHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2U6IE9iamVjdC5hc3NpZ24oe30sIGZJdGVtLmRhdGFTb3VyY2UsIHsgbWFpbkRhdGFTb3VyY2VJZDogZkl0ZW0uZGF0YVNvdXJjZS5kYXRhU291cmNlSWQgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0KCdmaWx0ZXJJdGVtcycsIG5ld0ZJdGVtcylcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHZlcnNpb246ICcxLjE0LjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgdXBncmFkZXI6IChvbGRDb25maWcpID0+IHtcclxuICAgICAgY29uc3QgbmV3Rkl0ZW1zID0gb2xkQ29uZmlnLmZpbHRlckl0ZW1zLm1hcChmSXRlbSA9PiB7XHJcbiAgICAgICAgZkl0ZW0gPSBmSXRlbVxyXG4gICAgICAgICAgLnNldCgnaXNHcm91cCcsIGZhbHNlKVxyXG4gICAgICAgICAgLnNldCgndXNlRGF0YVNvdXJjZXMnLCBbZkl0ZW0udXNlRGF0YVNvdXJjZV0pXHJcbiAgICAgICAgICAud2l0aG91dCgndXNlRGF0YVNvdXJjZScpXHJcbiAgICAgICAgcmV0dXJuIGZJdGVtXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IG9sZENvbmZpZy5zZXQoJ2ZpbHRlckl0ZW1zJywgbmV3Rkl0ZW1zKVxyXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXHJcbiAgICB9XHJcbiAgfV1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZlcnNpb25NYW5hZ2VyID0gbmV3IFZlcnNpb25NYW5hZ2VyKClcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfc3FsX2V4cHJlc3Npb25fcnVudGltZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsIGNsYXNzTmFtZXMsIGNzcywgdHlwZSBBbGxXaWRnZXRQcm9wcywgU2Vzc2lvbk1hbmFnZXIsIERhdGFTb3VyY2VNYW5hZ2VyLCBqc3gsIHR5cGUgRGF0YVNvdXJjZSwgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLFxyXG4gIGRhdGFTb3VyY2VVdGlscywgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgSW1tdXRhYmxlLCB0eXBlIElNU3FsRXhwcmVzc2lvbixcclxuICB0eXBlIEljb25SZXN1bHQsIERhdGFTb3VyY2VTdGF0dXMsIE1lc3NhZ2VNYW5hZ2VyLCBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSwgbG9kYXNoLCB0eXBlIFNxbFF1ZXJ5UGFyYW1zLFxyXG4gIGdldEFwcFN0b3JlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFdpZGdldENvbmZpZywgdHlwZSBmaWx0ZXJJdGVtQ29uZmlnLCB0eXBlIGZpbHRlckNvbmZpZywgRmlsdGVyQXJyYW5nZVR5cGUsIEZpbHRlclRyaWdnZXJUeXBlIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgRmlsdGVySXRlbSBmcm9tICcuL2ZpbHRlci1pdGVtJ1xyXG5pbXBvcnQgeyBXaWRnZXRQbGFjZWhvbGRlciwgQnV0dG9uLCBJY29uLCBQb3BwZXIsIEJhZGdlLCBtYXhTaXplTW9kaWZpZXIsIGFwcGx5TWF4U2l6ZU1vZGlmaWVyLCBnZXRDdXN0b21GbGlwTW9kaWZpZXIsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IHZlcnNpb25NYW5hZ2VyIH0gZnJvbSAnLi4vdmVyc2lvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IGdldFN0eWxlcyB9IGZyb20gJy4vc3R5bGUnXHJcbmltcG9ydCB7IGdldFNob3duQ2xhdXNlTnVtYmVyQnlFeHByZXNzaW9uLCBnZXRUb3RhbENsYXVzZU51bWJlckJ5RXhwcmVzc2lvbiB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvc3FsLWV4cHJlc3Npb24tcnVudGltZSdcclxuaW1wb3J0IEZpbHRlckl0ZW1EYXRhU291cmNlIGZyb20gJy4vZmlsdGVyLWl0ZW0tZHMnXHJcbmltcG9ydCB7IFJlc2V0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9yZXNldCdcclxuaW1wb3J0IHsgYWRkRmVhdHVyZXMgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLWxheWVyJztcclxuaW1wb3J0IHsgc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdCdcclxuXHJcbmNvbnN0IEZpbHRlckljb24gPSByZXF1aXJlKCcuLi8uLi9pY29uLnN2ZycpXHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHBvcHBlclZlcnNpb246IG51bWJlclxyXG4gIGlzT3BlbjogYm9vbGVhblxyXG4gIC8vIG5lZWRRdWVyeTogYm9vbGVhbjtcclxuICBmaWx0ZXJJdGVtczogSW1tdXRhYmxlQXJyYXk8ZmlsdGVySXRlbUNvbmZpZz5cclxuICBkYXRhU291cmNlczogeyBbZHNJZDogc3RyaW5nXTogRGF0YVNvdXJjZSB9XHJcbiAgb3V0cHV0RGF0YVNvdXJjZUlzTm90UmVhZHk6IHsgW2RzSWQ6IHN0cmluZ106IGJvb2xlYW4gfVxyXG59XHJcblxyXG5jb25zdCBtb2RpZmllcnMgPSBbXHJcbiAgZ2V0Q3VzdG9tRmxpcE1vZGlmaWVyKHsgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0J10sIHVzZUNsb3Nlc3RWZXJ0aWNhbFBsYWNlbWVudDogdHJ1ZSB9KSxcclxuICBtYXhTaXplTW9kaWZpZXIsXHJcbiAgYXBwbHlNYXhTaXplTW9kaWZpZXJcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxXaWRnZXRDb25maWc+LCBTdGF0ZT4ge1xyXG4gIHN0YXRpYyB2ZXJzaW9uTWFuYWdlciA9IHZlcnNpb25NYW5hZ2VyXHJcblxyXG4gIGluZGV4OiBudW1iZXJcclxuICBmaWx0ZXJTdGF0ZTogYW55ID0gdGhpcy5wcm9wcy5jb25maWcuZmlsdGVySXRlbXNcclxuICAvLyBmaWx0ZXJJdGVtczogSW1tdXRhYmxlQXJyYXk8ZmlsdGVySXRlbUNvbmZpZz47XHJcbiAgd2lkZ2V0SWNvblJlZjogYW55XHJcbiAgX2F1dG9BcHBseUluaXQ6IGJvb2xlYW5cclxuICBfX3VubW91bnQ6IGJvb2xlYW4gIFxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5fX3VubW91bnQgPSBmYWxzZVxyXG4gICAgdGhpcy5pbmRleCA9IDBcclxuICAgIHRoaXMuX2F1dG9BcHBseUluaXQgPSB0cnVlXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwb3BwZXJWZXJzaW9uOiAxLFxyXG4gICAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgICAvLyBuZWVkUXVlcnk6IHRydWUsXHJcbiAgICAgIGZpbHRlckl0ZW1zOiB0aGlzLnByb3BzLmNvbmZpZy5maWx0ZXJJdGVtcyxcclxuICAgICAgZGF0YVNvdXJjZXM6IHt9LFxyXG4gICAgICBvdXRwdXREYXRhU291cmNlSXNOb3RSZWFkeToge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldExvYWRlZEZpbHRlckl0ZW1zID0gKG9iamVjdEFzU3RyaW5nLCBzcWxFeHByT2JqRm9yR3JvdXApID0+e1xyXG5cclxuICAgIGxldCBmSSA9IHRoaXMucHJvcHMuY29uZmlnLmZpbHRlckl0ZW1zO1xyXG4gICAgbGV0IExTRmlsdGVySXRlbXMgPSBKU09OLnBhcnNlKG9iamVjdEFzU3RyaW5nKVxyXG4gICAgbGV0IExTU3FsRXhwck9iakZvckdyb3VwID0gSlNPTi5wYXJzZShzcWxFeHByT2JqRm9yR3JvdXApXHJcbiAgICBcclxuICAgIC8vIGFkZCBmdW5jdGlvbnNcclxuICAgIExTRmlsdGVySXRlbXMuYXNNdXRhYmxlID0gdGhpcy5maWx0ZXJTdGF0ZS5hc011dGFibGU7XHJcbiAgICBMU0ZpbHRlckl0ZW1zLmFzT2JqZWN0ID0gdGhpcy5maWx0ZXJTdGF0ZS5hc09iamVjdDtcclxuICAgIExTRmlsdGVySXRlbXMuY29uY2F0ID0gdGhpcy5maWx0ZXJTdGF0ZS5jb25jYXQ7XHJcbiAgICBMU0ZpbHRlckl0ZW1zLmZpbHRlciA9IHRoaXMuZmlsdGVyU3RhdGUuZmlsdGVyO1xyXG4gICAgTFNGaWx0ZXJJdGVtcy5mbGF0TWFwID0gdGhpcy5maWx0ZXJTdGF0ZS5mbGF0TWFwO1xyXG4gICAgTFNGaWx0ZXJJdGVtcy5nZXRJbiA9IHRoaXMuZmlsdGVyU3RhdGUuZ2V0SW47XHJcbiAgICBMU0ZpbHRlckl0ZW1zLmtleXMgPSB0aGlzLmZpbHRlclN0YXRlLmtleXM7XHJcbiAgICBMU0ZpbHRlckl0ZW1zLm1hcCA9IHRoaXMuZmlsdGVyU3RhdGUubWFwO1xyXG4gICAgTFNGaWx0ZXJJdGVtcy5yZWR1Y2UgPSB0aGlzLmZpbHRlclN0YXRlLnJlZHVjZTtcclxuICAgIExTRmlsdGVySXRlbXMucmVkdWNlUmlnaHQgPSB0aGlzLmZpbHRlclN0YXRlLnJlZHVjZVJpZ2h0O1xyXG4gICAgTFNGaWx0ZXJJdGVtcy5zZXQgPSB0aGlzLmZpbHRlclN0YXRlLnNldDtcclxuICAgIExTRmlsdGVySXRlbXMuc2V0SW4gPSB0aGlzLmZpbHRlclN0YXRlLnNldEluO1xyXG4gICAgTFNGaWx0ZXJJdGVtcy5zbGljZSA9IHRoaXMuZmlsdGVyU3RhdGUuc2xpY2U7XHJcbiAgICBMU0ZpbHRlckl0ZW1zLnVwZGF0ZSA9IHRoaXMuZmlsdGVyU3RhdGUudXBkYXRlO1xyXG4gICAgTFNGaWx0ZXJJdGVtcy51cGRhdGVJbiA9IHRoaXMuZmlsdGVyU3RhdGUudXBkYXRlSW47XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMU0ZpbHRlckl0ZW1zLmxlbmd0aDsgaSsrKSBcclxuICAgIHtcclxuICAgICAgXHJcblxyXG4gICAgICBMU0ZpbHRlckl0ZW1zW2ldLmFzTXV0YWJsZSA9IGZJWzBdLmFzTXV0YWJsZTtcclxuICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5yZXBsYWNlID0gZklbMF0ucmVwbGFjZTtcclxuICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5tZXJnZSA9IGZJWzBdLm1lcmdlO1xyXG4gICAgICBMU0ZpbHRlckl0ZW1zW2ldLmdldEluID0gZklbMF0uZ2V0SW47XHJcbiAgICAgIExTRmlsdGVySXRlbXNbaV0uc2V0ID0gZklbMF0uc2V0O1xyXG4gICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNldEluID0gZklbMF0uc2V0SW47XHJcbiAgICAgIExTRmlsdGVySXRlbXNbaV0ud2hpdG91dCA9IGZJWzBdLndpdGhvdXQ7XHJcbiAgICAgIExTRmlsdGVySXRlbXNbaV0udXBkYXRlID0gZklbMF0udXBkYXRlO1xyXG4gICAgICBMU0ZpbHRlckl0ZW1zW2ldLnVwZGF0ZUluID0gZklbMF0udXBkYXRlSW47XHJcblxyXG4gICAgICBpZighTFNGaWx0ZXJJdGVtc1tpXS5pc0dyb3VwKVxyXG4gICAgICB7XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLmFzTXV0YWJsZSA9IGZJWzBdLmFzTXV0YWJsZTtcclxuICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucmVwbGFjZSA9IGZJWzBdLnJlcGxhY2U7XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLm1lcmdlID0gZklbMF0ubWVyZ2U7XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLmdldEluID0gZklbMF0uZ2V0SW47XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnNldCA9IGZJWzBdLnNldDtcclxuICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmouc2V0SW4gPSBmSVswXS5zZXRJbjtcclxuICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoud2hpdG91dCA9IGZJWzBdLndpdGhvdXQ7XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnVwZGF0ZSA9IGZJWzBdLnVwZGF0ZTtcclxuICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoudXBkYXRlSW4gPSBmSVswXS51cGRhdGVJbjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHMubGVuZ3RoOyBqKyspIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iai5wYXJ0c1tqXS52YWx1ZU9wdGlvbnMuYXNNdXRhYmxlID0gZklbMF0uYXNNdXRhYmxlOyBcclxuICAgICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iai5wYXJ0c1tqXS52YWx1ZU9wdGlvbnMucmVwbGFjZSA9IGZJWzBdLnJlcGxhY2U7IFxyXG4gICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnBhcnRzW2pdLnZhbHVlT3B0aW9ucy5tZXJnZSA9IGZJWzBdLm1lcmdlOyBcclxuICAgICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iai5wYXJ0c1tqXS52YWx1ZU9wdGlvbnMuZ2V0SW4gPSBmSVswXS5nZXRJbjsgXHJcbiAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHNbal0udmFsdWVPcHRpb25zLnNldCA9IGZJWzBdLnNldDsgXHJcbiAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHNbal0udmFsdWVPcHRpb25zLnNldEluID0gZklbMF0uc2V0SW47IFxyXG4gICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnBhcnRzW2pdLnZhbHVlT3B0aW9ucy53aGl0b3V0ID0gZklbMF0ud2l0aG91dDsgXHJcbiAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHNbal0udmFsdWVPcHRpb25zLnVwZGF0ZSA9IGZJWzBdLnVwZGF0ZTsgXHJcbiAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHNbal0udmFsdWVPcHRpb25zLnVwZGF0ZUluID0gZklbMF0udXBkYXRlSW47IFxyXG5cclxuICAgICAgICAgIGlmKExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iai5wYXJ0c1tqXS52YWx1ZU9wdGlvbnMudmFsdWUgIT0gbnVsbClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnBhcnRzW2pdLnZhbHVlT3B0aW9ucy52YWx1ZS5hc011dGFibGUgPSBmSVswXS5hc011dGFibGU7IFxyXG4gICAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHNbal0udmFsdWVPcHRpb25zLnZhbHVlLnJlcGxhY2UgPSBmSVswXS5yZXBsYWNlOyBcclxuICAgICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnBhcnRzW2pdLnZhbHVlT3B0aW9ucy52YWx1ZS5tZXJnZSA9IGZJWzBdLm1lcmdlOyBcclxuICAgICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnBhcnRzW2pdLnZhbHVlT3B0aW9ucy52YWx1ZS5nZXRJbiA9IGZJWzBdLmdldEluOyBcclxuICAgICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnBhcnRzW2pdLnZhbHVlT3B0aW9ucy52YWx1ZS5zZXQgPSBmSVswXS5zZXQ7IFxyXG4gICAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHNbal0udmFsdWVPcHRpb25zLnZhbHVlLnNldEluID0gZklbMF0uc2V0SW47IFxyXG4gICAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHNbal0udmFsdWVPcHRpb25zLnZhbHVlLndoaXRvdXQgPSBmSVswXS53aXRob3V0OyBcclxuICAgICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqLnBhcnRzW2pdLnZhbHVlT3B0aW9ucy52YWx1ZS51cGRhdGUgPSBmSVswXS51cGRhdGU7IFxyXG4gICAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmoucGFydHNbal0udmFsdWVPcHRpb25zLnZhbHVlLnVwZGF0ZUluID0gZklbMF0udXBkYXRlSW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIFxyXG4gICAgICB7XHJcbiAgICAgICAgLypMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmpGb3JHcm91cC5hc011dGFibGUgPSBmSVswXS5zcWxFeHByT2JqRm9yR3JvdXAuYXNNdXRhYmxlO1xyXG4gICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwLmFzT2JqZWN0ID0gZklbMF0uc3FsRXhwck9iakZvckdyb3VwLmFzT2JqZWN0O1xyXG4gICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwLmNvbmNhdCA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cC5jb25jYXQ7XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqRm9yR3JvdXAuZmlsdGVyID0gZklbMF0uc3FsRXhwck9iakZvckdyb3VwLmZpbHRlcjtcclxuICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmpGb3JHcm91cC5mbGF0TWFwID0gZklbMF0uc3FsRXhwck9iakZvckdyb3VwLmZsYXRNYXA7XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqRm9yR3JvdXAuZ2V0SW4gPSBmSVswXS5zcWxFeHByT2JqRm9yR3JvdXAuZ2V0SW47XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqRm9yR3JvdXAua2V5cyA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cC5rZXlzO1xyXG4gICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwLm1hcCA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cC5tYXA7XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqRm9yR3JvdXAucmVkdWNlID0gZklbMF0uc3FsRXhwck9iakZvckdyb3VwLnJlZHVjZTtcclxuICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmpGb3JHcm91cC5yZWR1Y2VSaWdodCA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cC5yZWR1Y2VSaWdodDtcclxuICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmpGb3JHcm91cC5zZXQgPSBmSVswXS5zcWxFeHByT2JqRm9yR3JvdXAuc2V0O1xyXG4gICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwLnNldEluID0gZklbMF0uc3FsRXhwck9iakZvckdyb3VwLnNldEluO1xyXG4gICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwLnNsaWNlID0gZklbMF0uc3FsRXhwck9iakZvckdyb3VwLnNsaWNlO1xyXG4gICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwLnVwZGF0ZSA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cC51cGRhdGU7XHJcbiAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqRm9yR3JvdXAudXBkYXRlSW4gPSBmSVswXS5zcWxFeHByT2JqRm9yR3JvdXAudXBkYXRlSW47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqRm9yR3JvdXAubGVuZ3RoOyBqKyspIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmpGb3JHcm91cFtqXS5hc011dGFibGUgPSBmSVswXS5zcWxFeHByT2JqRm9yR3JvdXBbal0uYXNNdXRhYmxlOyBcclxuICAgICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqRm9yR3JvdXBbal0ucmVwbGFjZSA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cFtqXS5yZXBsYWNlOyBcclxuICAgICAgICAgICAgTFNGaWx0ZXJJdGVtc1tpXS5zcWxFeHByT2JqRm9yR3JvdXBbal0ubWVyZ2UgPSBmSVswXS5zcWxFeHByT2JqRm9yR3JvdXBbal0ubWVyZ2U7IFxyXG4gICAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmpGb3JHcm91cFtqXS5nZXRJbiA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cFtqXS5nZXRJbjsgXHJcbiAgICAgICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwW2pdLnNldCA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cFtqXS5zZXQ7IFxyXG4gICAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmpGb3JHcm91cFtqXS5zZXRJbiA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cFtqXS5zZXRJbjsgXHJcbiAgICAgICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwW2pdLndoaXRvdXQgPSBmSVswXS5zcWxFeHByT2JqRm9yR3JvdXBbal0ud2hpdG91dDsgXHJcbiAgICAgICAgICAgIExTRmlsdGVySXRlbXNbaV0uc3FsRXhwck9iakZvckdyb3VwW2pdLnVwZGF0ZSA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cFtqXS51cGRhdGU7IFxyXG4gICAgICAgICAgICBMU0ZpbHRlckl0ZW1zW2ldLnNxbEV4cHJPYmpGb3JHcm91cFtqXS51cGRhdGVJbiA9IGZJWzBdLnNxbEV4cHJPYmpGb3JHcm91cFtqXS51cGRhdGVJbjsgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgTFNTcWxFeHByT2JqRm9yR3JvdXAubWFwID0gdGhpcy5maWx0ZXJTdGF0ZS5tYXA7XHJcbiAgICAgICAgICBMU1NxbEV4cHJPYmpGb3JHcm91cC5maWx0ZXIgPSB0aGlzLmZpbHRlclN0YXRlLmZpbHRlcjtcclxuICAgICAgICAgIC8vTFNTcWxFeHByT2JqRm9yR3JvdXAucGFydHNbMF0udmFsdWVPcHRpb25zLnZhbHVlLmZpbHRlciA9IExTRmlsdGVySXRlbXNbMF0uc3FsRXhwck9iakZvckdyb3VwWzBdLmNsYXVzZS52YWx1ZU9wdGlvbnMudmFsdWUuZmlsdGVyXHJcbiAgICAgICAgICBMU0ZpbHRlckl0ZW1zWzBdID0gTFNGaWx0ZXJJdGVtc1swXS5zZXRJbihbJ3NxbEV4cHJPYmpGb3JHcm91cGZvclVwZGF0ZSddLCAoTFNTcWxFeHByT2JqRm9yR3JvdXAgYXMgYW55KSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9PYmplY3QuYXNzaWduKGZJWzBdLCBMU0ZpbHRlckl0ZW1zW2ldIClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIExTRmlsdGVySXRlbXNcclxuICB9XHJcblxyXG4gIGdldFN0cmluZ2lmaWVkRmlsdGVySXRlbXMgPSAoKSA9PntcclxuICAgIHRoaXMuZmlsdGVyU3RhdGUgPSB0aGlzLnN0YXRlLmZpbHRlckl0ZW1zO1xyXG4gICAgbGV0IExTRmlsdGVySXRlbXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZmlsdGVySXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgTFNGaWx0ZXJJdGVtcy5wdXNoKHRoaXMuc3RhdGUuZmlsdGVySXRlbXNbaV0pOyAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShMU0ZpbHRlckl0ZW1zKTtcclxuICB9XHJcblxyXG4gIGdldFN0cmluZ2lmaWVkR3JvdXBGaWx0ZXJTcWxFeHAgPSAoKSA9PntcclxuICAgIFxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMubGFzdFNxbEV4cENoYW5nZWQpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkgXHJcbiAge1xyXG4gICAgc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zKHtcclxuICAgICAgYXV0aGVudGljYXRpb246IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gdHJ1ZVxyXG4gICAgLy8gUmVtb3ZlIFNRTHMgZm9yIGRzcywgYW5kIHB1Ymxpc2ggbXNnIHdoZW4gd2lkZ2V0IGlzIHJlbW92ZWQuXHJcbiAgICBjb25zdCBkc0lkcyA9IFtdXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmRhdGFTb3VyY2VzKS5mb3JFYWNoKGRzSWQgPT4ge1xyXG4gICAgICBjb25zdCBkcyA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNbZHNJZF1cclxuICAgICAgLy8gT25seSB3aGVuIGRzIGFuZCBpdHMgc3FsIGV4aXN0LiAoc2tpcDogdW5kZWZpbmVkIGFuZCAnJylcclxuICAgICAgaWYgKGRzICYmIChkcy5nZXRJbmZvKCkud2lkZ2V0UXVlcmllcz8uW3RoaXMucHJvcHMuaWRdIGFzIFNxbFF1ZXJ5UGFyYW1zKT8ud2hlcmUpIHtcclxuICAgICAgICAoZHMgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSk/LnVwZGF0ZVF1ZXJ5UGFyYW1zKG51bGwsIHRoaXMucHJvcHMuaWQpXHJcbiAgICAgICAgZHNJZHMucHVzaChkcy5pZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmIChkc0lkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaEZpbHRlck1lc3NhZ2UoZHNJZHMpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IEFsbFdpZGdldFByb3BzPGZpbHRlckNvbmZpZz4sIHByZXZTdGF0ZTogU3RhdGUpIHtcclxuICAgIGlmICh0aGlzLl9fdW5tb3VudCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX2F1dG9BcHBseUluaXQgPSBmYWxzZVxyXG4gICAgLy8gcmVmcmVzaCBhbGwgc3FscyBmb3IgZGlmZmVyZW50IGRhdGFTb3VyY2VzIHdoZW4gc2V0dGluZydzIGNoYW5nZWQsIGluY2x1ZGluZyBmaWx0ZXIgaXRlbSBpcyByZW1vdmVkLlxyXG4gICAgaWYgKHByZXZQcm9wcy5jb25maWcgIT09IHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZpbHRlckl0ZW1zOiB0aGlzLnByb3BzLmNvbmZpZy5maWx0ZXJJdGVtc1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldFNxbFRvQWxsRHMoKVxyXG4gICAgICAvLyB1cGRhdGUgYXV0byBhcHBseSBieSBhcnJhbmdlbWVudCAmIHN0eWxlc1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2VzICE9PSBwcmV2U3RhdGUuZGF0YVNvdXJjZXMpIHtcclxuICAgICAgdGhpcy5fYXV0b0FwcGx5SW5pdCA9IHRydWVcclxuICAgICAgdGhpcy5hcHBseUF1dG9GaWx0ZXJzQXRTdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlUHJvcHNcIikgJiYgdGhpcy5wcm9wcy5zdGF0ZVByb3BzPy5yZXNldEZpbHRlciApXHJcbiAgICB7XHJcbiAgICAgIGlmKHRoaXMucHJvcHMuc3RhdGVQcm9wcy5yZXNldEZpbHRlciAhPSB1bmRlZmluZWQpXHJcbiAgICAgIHtcclxuICAgICAgICBjb25zdCBzaG91bGRSZXNldCA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy5zdGF0ZVByb3BzLnJlc2V0RmlsdGVyKVxyXG4gICAgICAgIHRoaXMucHJvcHMuc3RhdGVQcm9wcy5yZXNldEZpbHRlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYoc2hvdWxkUmVzZXQpXHJcbiAgICAgICAgICB0aGlzLm9uUmVzZXRDaGFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVByb3BzXCIpICYmIHRoaXMucHJvcHMuc3RhdGVQcm9wcz8uc2V0RmlsdGVyVmFsdWVzKVxyXG4gICAge1xyXG4gICAgICBpZih0aGlzLnByb3BzLnN0YXRlUHJvcHMuc2V0RmlsdGVyVmFsdWVzICE9IHVuZGVmaW5lZClcclxuICAgICAge1xyXG5cclxuICAgICAgICBjb25zdCBjb25maWdKc29uID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnN0YXRlUHJvcHMuc2V0RmlsdGVyVmFsdWVzKVxyXG4gICAgICAgIHRoaXMucHJvcHMuc3RhdGVQcm9wcy5zZXRGaWx0ZXJWYWx1ZXMgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmRhdGFTb3VyY2VzKVswXSBhcyBRdWVyaWFibGVEYXRhU291cmNlIFxyXG4gICAgICAgIGNvbnN0IGNvbmZpZ0RzPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoY29uZmlnSnNvbi5jb25maWdEcykgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXM6IFNxbFF1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICAgICAgd2hlcmU6IGBmaWx0ZXJDb25maWdfcmVsYXRpb25JZCBMSUtFICclJHtjb25maWdKc29uLnJlbGF0aW9uSWR9JScgQU5EIGZpbHRlckNvbmZpZ19uYW1lIExJS0UgJyUke3RoaXMucHJvcHMubGFiZWx9JSdgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uZmlnRHMucXVlcnkocXVlcnlQYXJhbXMpLnRoZW4oIChyZXM6UXVlcnlSZXN1bHRbXSkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZihyZXMucmVjb3Jkcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgciA9IHJlcy5yZWNvcmRzWzBdO1xyXG4gICAgICAgICAgICBsZXQgb2JqZWN0QXNTdHJpbmcgPSB0aGlzLmRlY29kZTY0KHIuZ2V0RmllbGRWYWx1ZShcImZpbHRlckNvbmZpZ192YWx1ZVwiKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29uZmlnID0gSlNPTi5wYXJzZShvYmplY3RBc1N0cmluZykgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldExvYWRlZEZpbHRlckl0ZW1zKGNvbmZpZy5vYmplY3RBc0FTdHJpbmcsIGNvbmZpZy5zcWxFeHByT2JqRm9yR3JvdXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIktlaW5lIEZpbHRlcmNvbmZpZ3VyYXRpb24gZ2VmdW5kZW4uIFJlbGF0aW9uIElEIC0+IFwiKyBjb25maWdKc29uLnJlbGF0aW9uSWQgK1wiIEZpbHRlciAtPiBcIisgdGhpcy5wcm9wcy5sYWJlbClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCAocmVzKSA9PiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHJlcylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVySXRlbXM6IHJlc30sICgpID0+IFxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMub25SZXNldENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoIXJlc1swXS5pc0dyb3VwKSBcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmlsdGVySXRlbUNoYW5nZSgwLGRzLHRoaXMuc3RhdGUuZmlsdGVySXRlbXNbMF0uc3FsRXhwck9iaiwgcmVzWzBdLmF1dG9BcHBseVdoZW5XaWRnZXRPcGVuKTtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIGVsc2UgaWYgKHJlc1swXS5zcWxFeHByT2JqRm9yR3JvdXApIFxyXG4gICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmlsdGVySXRlbUNoYW5nZSgwLGRzLHRoaXMuc3RhdGUuZmlsdGVySXRlbXNbMF0uc3FsRXhwck9iakZvckdyb3VwZm9yVXBkYXRlLCByZXNbMF0uYXV0b0FwcGx5V2hlbldpZGdldE9wZW4pO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vdGhpcy5vbkZpbHRlckl0ZW1DaGFuZ2UoMCxkcyx0aGlzLnN0YXRlLmZpbHRlckl0ZW1zWzBdLnNxbEV4cHJPYmosIHJlc1swXS5hdXRvQXBwbHlXaGVuV2lkZ2V0T3Blbik7XHJcbiAgICAgICAgfSkgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGlmKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVByb3BzXCIpICYmIHRoaXMucHJvcHMuc3RhdGVQcm9wcz8uc2F2ZUNvbmZpZ1RyaWdnZXIgKVxyXG4gICAge1xyXG4gICAgICBpZih0aGlzLnByb3BzLnN0YXRlUHJvcHMuc2F2ZUNvbmZpZ1RyaWdnZXIgIT0gdW5kZWZpbmVkKVxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnSnNvbiA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy5zdGF0ZVByb3BzLnNhdmVDb25maWdUcmlnZ2VyKVxyXG4gICAgICAgIHRoaXMucHJvcHMuc3RhdGVQcm9wcy5zYXZlQ29uZmlnVHJpZ2dlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB1c2VEYXRhU291cmNlID0gY29uZmlnSnNvbi5kc1RvU2F2ZTtcclxuICAgICAgICBjb25zdCBkcz0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKHVzZURhdGFTb3VyY2UpIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXN0U3FsRXhwQ2hhbmdlZCk7XHJcblxyXG4gICAgICAgIGxldCBzdHJpbmdpZmllZEZpbHRlckl0ZW1zID0gdGhpcy5nZXRTdHJpbmdpZmllZEZpbHRlckl0ZW1zKCk7XHJcblxyXG4gICAgICAgIGxldCBzdHJpbmdpZmllZEdyb3VwRmlsdGVyU3FsRXhwID0gdGhpcy5nZXRTdHJpbmdpZmllZEdyb3VwRmlsdGVyU3FsRXhwKCk7XHJcblxyXG4gICAgICAgIGxldCBib3RoUW9iamVjdHMgPSBKU09OLnN0cmluZ2lmeSh7IG9iamVjdEFzQVN0cmluZzogc3RyaW5naWZpZWRGaWx0ZXJJdGVtcywgc3FsRXhwck9iakZvckdyb3VwOiBzdHJpbmdpZmllZEdyb3VwRmlsdGVyU3FsRXhwIH0pO1xyXG4gICAgICAgIGxldCBiYXNlNjRCb3RoUW9iamVjdHMgPSB0aGlzLmJhc2U2NChib3RoUW9iamVjdHMpO1xyXG5cclxuICAgICAgICBhZGRGZWF0dXJlcyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBkcy51cmwsXHJcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbe1xyXG4gICAgICAgICAgICAgIGdlb21ldHJ5OiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IGZpbHRlckNvbmZpZ19uYW1lOiB0aGlzLnByb3BzLmxhYmVsLCBmaWx0ZXJDb25maWdfY3JlYXRvcjogdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ29uZmlnX3JlbGF0aW9uSWQ6IGNvbmZpZ0pzb24ucmVsYXRpb25JZCwgZmlsdGVyQ29uZmlnX3ZhbHVlOiBiYXNlNjRCb3RoUW9iamVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb25maWdfc3RhcnRPbkxvYWQ6IHByZXZTdGF0ZS5maWx0ZXJJdGVtc1swXS5hdXRvQXBwbHlXaGVuV2lkZ2V0T3BlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbiggKHJlcykgPT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgZHMuc2V0TmVlZFJlZnJlc2godHJ1ZSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBiYXNlNjQoZGF0YSkge1xyXG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoZGF0YSk7XHJcbiAgICBjb25zdCBiaW5TdHJpbmcgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5ieXRlcyk7XHJcbiAgICByZXR1cm4gYnRvYShiaW5TdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgZGVjb2RlNjQoYmFzZTY0KSB7XHJcbiAgICBjb25zdCBiaW5TdHJpbmcgPSBhdG9iKGJhc2U2NCk7XHJcbiAgICBjb25zdCBieXRlcyA9IFVpbnQ4QXJyYXkuZnJvbShiaW5TdHJpbmcsIChtKSA9PiBtLmNvZGVQb2ludEF0KDApKTtcclxuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYnl0ZXMpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBsYXN0U3FsRXhwQ2hhbmdlZDpJTVNxbEV4cHJlc3Npb24gPSBudWxsO1xyXG5cclxuICBvbkZpbHRlckl0ZW1DaGFuZ2UgPSAoaW5kZXg6IG51bWJlciwgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSwgc3FsRXhwck9iajogSU1TcWxFeHByZXNzaW9uLCBhcHBsaWVkOiBib29sZWFuKSA9PiB7XHJcbiAgICBpZiAodGhpcy5fX3VubW91bnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHVwZGF0ZWQgZkl0ZW1zXHJcbiAgICBjb25zdCBmSXRlbXMgPSB0aGlzLnN0YXRlLmZpbHRlckl0ZW1zXHJcbiAgICBsZXQgZkl0ZW0gPSBmSXRlbXNbaW5kZXhdLnNldCgnYXV0b0FwcGx5V2hlbldpZGdldE9wZW4nLCBhcHBsaWVkKVxyXG4gICAgaWYgKCFmSXRlbS5pc0dyb3VwKSB7XHJcbiAgICAgIGZJdGVtID0gZkl0ZW0uc2V0KCdzcWxFeHByT2JqJywgc3FsRXhwck9iailcclxuICAgIH0gZWxzZSBpZiAoZkl0ZW0uc3FsRXhwck9iakZvckdyb3VwKSB7XHJcbiAgICAgIHRoaXMubGFzdFNxbEV4cENoYW5nZWQgPSBzcWxFeHByT2JqO1xyXG4gICAgICBmSXRlbSA9IGZJdGVtLnNldEluKFsnc3FsRXhwck9iakZvckdyb3VwJywgJzAnLCAnY2xhdXNlJywgJ3ZhbHVlT3B0aW9ucycsICd2YWx1ZSddLCAoc3FsRXhwck9iai5wYXJ0c1swXSBhcyBhbnkpLnZhbHVlT3B0aW9ucy52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZWRGSXRlbXMgPSAoZkl0ZW1zIGFzIGFueSkuc2V0KGluZGV4LCBmSXRlbSlcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlsdGVySXRlbXM6IHVwZGF0ZWRGSXRlbXNcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgbmVlZFF1ZXJ5ID0gISgoIWFwcGxpZWQgJiYgIWZJdGVtc1tpbmRleF0uYXV0b0FwcGx5V2hlbldpZGdldE9wZW4pKVxyXG4gICAgaWYgKG5lZWRRdWVyeSkge1xyXG4gICAgICBjb25zdCBkc3MgPSB7fVxyXG4gICAgICBkc3NbZGF0YVNvdXJjZS5pZF0gPSBkYXRhU291cmNlXHJcbiAgICAgIGlmIChmSXRlbS5pc0dyb3VwICYmIGZJdGVtLnNxbEV4cHJPYmpGb3JHcm91cCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Vc2VEc0lkcyA9IGZJdGVtLnVzZURhdGFTb3VyY2VzLm1hcCh1c2VEcyA9PiB1c2VEcy5kYXRhU291cmNlSWQpXHJcbiAgICAgICAgaXRlbVVzZURzSWRzLmZvckVhY2goZHNJZCA9PiB7XHJcbiAgICAgICAgICBkc3NbZHNJZF0gPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2VzW2RzSWRdXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFNxbFRvQWxsRHMoZHNzLCB1cGRhdGVkRkl0ZW1zKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U3FsVG9BbGxEcyA9IChkc3MgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2VzLCBmaWx0ZXJJdGVtcyA9IHRoaXMucHJvcHMuY29uZmlnLmZpbHRlckl0ZW1zKSA9PiB7XHJcbiAgICBjb25zdCBkc0lkcyA9IFtdXHJcbiAgICBPYmplY3Qua2V5cyhkc3MpLmZvckVhY2goZHNJZCA9PiB7XHJcbiAgICAgIGNvbnN0IGRzID0gZHNzW2RzSWRdXHJcbiAgICAgIGlmIChkcykgeyAvLyBleGNsdWRlIGludmFsaWQgZGF0YVNvdXJjZXNcclxuICAgICAgICBjb25zdCBwcmV2U3FsRm9yRHMgPSAoZHMuZ2V0SW5mbygpLndpZGdldFF1ZXJpZXM/Llt0aGlzLnByb3BzLmlkXSBhcyBTcWxRdWVyeVBhcmFtcyk/LndoZXJlXHJcbiAgICAgICAgY29uc3Qgc3FsUmVzdWx0ID0gdGhpcy5nZXRRdWVyeVNxbEZyb21EcyhkcywgZmlsdGVySXRlbXMpXHJcbiAgICAgICAgdGhpcy5zZXRTcWxUb0RzKGRzLCBzcWxSZXN1bHQpXHJcbiAgICAgICAgaWYgKHByZXZTcWxGb3JEcyAhPT0gc3FsUmVzdWx0LnNxbCkge1xyXG4gICAgICAgICAgZHNJZHMucHVzaChkcy5pZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAoZHNJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hGaWx0ZXJNZXNzYWdlKGRzSWRzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U3FsVG9EcyA9IChkYXRhU291cmNlOiBEYXRhU291cmNlLCBzcWxSZXN1bHQpID0+IHtcclxuICAgIC8vIE5vdCBzZXQgZW1wdHkgU1FMIGZvciBkcywgYmVjYXVzZSBpdCB3b3VsZCBjYXVzZSBtYW55IHVzZWxlc3MgcmVxdWVzdHMuXHJcbiAgICBpZiAodGhpcy5fYXV0b0FwcGx5SW5pdCAmJiBzcWxSZXN1bHQuc3FsID09PSAnJykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChkYXRhU291cmNlKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0geyB3aGVyZTogc3FsUmVzdWx0LnNxbCwgc3FsRXhwcmVzc2lvbjogc3FsUmVzdWx0LnNxbEV4cHJlc3Npb24gfSBhcyBhbnlcclxuICAgICAgKGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSkudXBkYXRlUXVlcnlQYXJhbXM/LihxdWVyeVBhcmFtcywgdGhpcy5wcm9wcy5pZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1Ymxpc2hGaWx0ZXJNZXNzYWdlID0gKGRhdGFTb3VyY2VJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBNZXNzYWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1Ymxpc2hNZXNzYWdlKG5ldyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSh0aGlzLnByb3BzLmlkLCBkYXRhU291cmNlSWRzKSlcclxuICB9XHJcblxyXG4gIC8vIGdldCBtZXJnZWQgc3FsRXhwcmVzc2lvbiBmcm9tIGN1cnJlbnQgZHNcclxuICBnZXRRdWVyeVNxbEZyb21EcyA9IChkYXRhU291cmNlOiBEYXRhU291cmNlLCBmaWx0ZXJJdGVtcyA9IHRoaXMucHJvcHMuY29uZmlnLmZpbHRlckl0ZW1zKSA9PiB7XHJcbiAgICBjb25zdCBzcWxFeHBycyA9IFtdXHJcbiAgICBmaWx0ZXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAvLyBjb2xsZWN0IHNxbHMgZnJvbSBhdXRvQXBwbGlkLCBtYW51YWwgYXBwbHksIG9yIGV4cGFuZWQgc2luZ2xlIGNsYXVzZS4gZGF0YVNvdXJjZSBjb3VsZCBiZSBudWxsIHdoZW4gaXQncyBub3QgYXZhaWxhYmxlLlxyXG4gICAgICBpZiAoaXRlbS5hdXRvQXBwbHlXaGVuV2lkZ2V0T3BlbiB8fCAodGhpcy5wcm9wcy5jb25maWcub21pdEludGVybmFsU3R5bGUgJiYgZ2V0U2hvd25DbGF1c2VOdW1iZXJCeUV4cHJlc3Npb24oaXRlbS5zcWxFeHByT2JqKSA9PT0gMSkpIHtcclxuICAgICAgICBjb25zdCBzcWxFeHByT2JqID0gaXRlbS5pc0dyb3VwXHJcbiAgICAgICAgICA/IGRhdGFTb3VyY2VVdGlscy5nZXRTUUxFeHByZXNzaW9uRnJvbUdyb3VwU1FMRXhwcmVzc2lvbihpdGVtLnNxbEV4cHJPYmpGb3JHcm91cCwgZGF0YVNvdXJjZSlcclxuICAgICAgICAgIDogaXRlbS51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQgPT09IGRhdGFTb3VyY2U/LmlkICYmIGl0ZW0uc3FsRXhwck9ialxyXG4gICAgICAgIGlmIChzcWxFeHByT2JqKSB7XHJcbiAgICAgICAgICBjb25zdCBzcWxSZXN1bHQgPSBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKHNxbEV4cHJPYmosIGRhdGFTb3VyY2UpXHJcbiAgICAgICAgICBpZiAoc3FsUmVzdWx0LnNxbCkge1xyXG4gICAgICAgICAgICBzcWxFeHBycy5wdXNoKHNxbFJlc3VsdC5zcWxFeHByZXNzaW9uKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGxldCBzcWxFeHByZXNzaW9uID0gbnVsbFxyXG4gICAgaWYgKHNxbEV4cHJzLmxlbmd0aCkge1xyXG4gICAgICBzcWxFeHByZXNzaW9uID0gZGF0YVNvdXJjZVV0aWxzLmdldE1lcmdlZFNRTEV4cHJlc3Npb25zKHNxbEV4cHJzLCBkYXRhU291cmNlLCB0aGlzLnByb3BzLmNvbmZpZy5sb2dpY2FsT3BlcmF0b3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcWw6IHNxbEV4cHJlc3Npb24/LnNxbCB8fCAnJyxcclxuICAgICAgc3FsRXhwcmVzc2lvblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YVNvdXJjZUJ5SWQgPSAoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4gPT4ge1xyXG4gICAgY29uc3QgZHNMaXN0ID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pLmZpbHRlcihkcyA9PiBkcy5kYXRhU291cmNlSWQgPT09IGRhdGFTb3VyY2VJZClcclxuICAgIHJldHVybiBJbW11dGFibGUoZHNMaXN0WzBdKVxyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2sgaWYgaXQncyBpbiBwcm9wcy51c2VEYXRhU291cmNlcy5cclxuICBpc0RhdGFTb3VyY2VSZW1vdmVkID0gKGRhdGFTb3VyY2VJZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcz8uZmlsdGVyKHVzZURzID0+IGRhdGFTb3VyY2VJZCA9PT0gdXNlRHMuZGF0YVNvdXJjZUlkKS5sZW5ndGggPT09IDBcclxuICB9XHJcblxyXG4gIG9uUmVzZXRDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlsdGVySXRlbXM6IHRoaXMucHJvcHMuY29uZmlnLmZpbHRlckl0ZW1zXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXRTcWxUb0FsbERzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyByZXNldCBidXR0b24gYXQgYm90dG9tIG9mIHdpZGdldFxyXG4gICAqIEJ5IGRlZmF1bHQ6IGJvdHRvbS5cclxuICAgKiBTcGVjaWFsIGNhc2U6IHJpZ2h0LiBPbmx5IHdoZW4gZmlsdGVyIGl0ZW0ocykgYXJlIGRpc3BsYXllZCBhcyBidXR0b25zLlxyXG4gICAqL1xyXG4gIHNob3dSZXNldEF0Qm90dG9tID0gKHJlc2V0QWxsLCBhcnJhbmdlVHlwZSwgd3JhcCwgZmlsdGVySXRlbXMpOiBib29sZWFuID0+IHtcclxuICAgIGxldCBhdEJvdHRvbSA9IHRydWVcclxuICAgIGlmIChcclxuICAgICAgcmVzZXRBbGwgJiYgYXJyYW5nZVR5cGUgPT09IEZpbHRlckFycmFuZ2VUeXBlLklubGluZSAmJiAhd3JhcCAmJlxyXG4gICAgICAoZmlsdGVySXRlbXMubGVuZ3RoID4gMSB8fCAoZmlsdGVySXRlbXMubGVuZ3RoID09PSAxICYmIGdldFNob3duQ2xhdXNlTnVtYmVyQnlFeHByZXNzaW9uKGZpbHRlckl0ZW1zWzBdLnNxbEV4cHJPYmopID09PSAwKSlcclxuICAgICkge1xyXG4gICAgICBhdEJvdHRvbSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXRCb3R0b21cclxuICB9XHJcblxyXG4gIGdldEl0ZW1Vc2VEcyA9IChpdGVtOiBmaWx0ZXJJdGVtQ29uZmlnKSA9PiB7XHJcbiAgICBsZXQgdXNlRHMgPSBpdGVtLnVzZURhdGFTb3VyY2VzWzBdXHJcbiAgICBpZiAoaXRlbS5pc0dyb3VwICYmIGl0ZW0uc3FsRXhwck9iakZvckdyb3VwKSB7XHJcbiAgICAgIHVzZURzID0gaXRlbS51c2VEYXRhU291cmNlcy5maWx0ZXIoZHMgPT4gZHMuZGF0YVNvdXJjZUlkID09PSBpdGVtLnNxbEV4cHJPYmpGb3JHcm91cFswXS5kYXRhU291cmNlSWQpWzBdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlRHNcclxuICB9XHJcblxyXG4gIGdldEZpbHRlckl0ZW1zID0gKGNvbmZpZywgYXJyYW5nZVR5cGUgPSBGaWx0ZXJBcnJhbmdlVHlwZS5CbG9jaywgd3JhcCA9IGZhbHNlLCBpc1BvcHVwID0gZmFsc2UpID0+IHtcclxuICAgIGNvbnN0IHNob3dSZXNldEF0Qm90dG9tID0gdGhpcy5zaG93UmVzZXRBdEJvdHRvbShjb25maWcucmVzZXRBbGwsIGFycmFuZ2VUeXBlLCB3cmFwLCBjb25maWcuZmlsdGVySXRlbXMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndy0xMDAgaC0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJyxcclxuICAgICAgICBzaG93UmVzZXRBdEJvdHRvbSA/ICdmbGV4LWNvbHVtbicgOiAnZmxleC1yb3cnKX1cclxuICAgICAgICBjc3M9e2dldFN0eWxlcyh0aGlzLnByb3BzLnRoZW1lLCB0aGlzLnByb3BzLmNvbmZpZyl9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndy0xMDAgZmlsdGVyLWl0ZW1zLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIGFycmFuZ2VUeXBlICYmIGNvbmZpZy5hcnJhbmdlVHlwZSA9PT0gRmlsdGVyQXJyYW5nZVR5cGUuSW5saW5lID8gJ2ZpbHRlci1pdGVtcy1pbmxpbmUnIDogJycsXHJcbiAgICAgICAgICAgIHdyYXAgPyAnZmlsdGVyLWl0ZW1zLXdyYXAnIDogJycsIGlzUG9wdXAgPyAnZmlsdGVyLWl0ZW1zLXBvcHVwJyA6ICcnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHRoaXMuc3RhdGUuZmlsdGVySXRlbXMgYXMgdW5rbm93biBhcyBmaWx0ZXJJdGVtQ29uZmlnW10pLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlRHMgPSB0aGlzLmdldEl0ZW1Vc2VEcyhpdGVtKVxyXG4gICAgICAgICAgICBjb25zdCBkcyA9IHRoaXMuaXNEYXRhU291cmNlUmVtb3ZlZCh1c2VEcy5kYXRhU291cmNlSWQpID8gbnVsbCA6IHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNbdXNlRHMuZGF0YVNvdXJjZUlkXVxyXG4gICAgICAgICAgICBjb25zdCBpc05vdFJlYWR5RnJvbVdpZGdldCA9IHRoaXMuc3RhdGUub3V0cHV0RGF0YVNvdXJjZUlzTm90UmVhZHlbdXNlRHMuZGF0YVNvdXJjZUlkXVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxGaWx0ZXJJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBpZD17aW5kZXh9IHdpZGdldElkPXt0aGlzLnByb3BzLmlkfSBpbnRsPXt0aGlzLnByb3BzLmludGx9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERzPXtkc30gdXNlRGF0YVNvdXJjZT17dXNlRHN9XHJcbiAgICAgICAgICAgICAgICBpc05vdFJlYWR5RnJvbVdpZGdldD17aXNOb3RSZWFkeUZyb21XaWRnZXR9IGxvZ2ljYWxPcGVyYXRvcj17Y29uZmlnLmxvZ2ljYWxPcGVyYXRvcn0gY29uZmlnPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgYXJyYW5nZVR5cGU9e2FycmFuZ2VUeXBlfSB0cmlnZ2VyVHlwZT17Y29uZmlnLnRyaWdnZXJUeXBlfSB3cmFwPXt3cmFwfSBvbWl0SW50ZXJuYWxTdHlsZT17Y29uZmlnLm9taXRJbnRlcm5hbFN0eWxlfSBmaWx0ZXJOdW09e3RoaXMuc3RhdGUuZmlsdGVySXRlbXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJJdGVtQ2hhbmdlfSBpdGVtQmdDb2xvcj17dGhpcy5wcm9wcy50aGVtZS5jb2xvcnMucGFsZXR0ZS5saWdodFszMDBdfSB0aGVtZT17dGhpcy5wcm9wcy50aGVtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25maWcucmVzZXRBbGwgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2ZpbHRlci1yZXNldC1jb250YWluZXInLCBzaG93UmVzZXRBdEJvdHRvbSA/ICdib3R0b20tcmVzZXQnIDogJ3JpZ2h0LXJlc2V0Jyl9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGljb24gdHlwZT0nZGVmYXVsdCcgc2l6ZT0nZGVmYXVsdCcgY2xhc3NOYW1lPSdyZXNldC1idXR0b24nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBjb25maWcudHJpZ2dlclR5cGUgPT09IEZpbHRlclRyaWdnZXJUeXBlLlRvZ2dsZSA/ICcxNnB4JyA6IG51bGwgfX1cclxuICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3Jlc2V0QWxsRmlsdGVycycsIGRlZmF1bHRNZXNzYWdlOiBqaW11VUlNZXNzYWdlcy5yZXNldEFsbEZpbHRlcnMgfSl9XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3Jlc2V0QWxsRmlsdGVycycsIGRlZmF1bHRNZXNzYWdlOiBqaW11VUlNZXNzYWdlcy5yZXNldEFsbEZpbHRlcnMgfSl9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlc2V0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJlc2V0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgb25TaG93UG9wcGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxyXG4gICAgICBwb3BwZXJWZXJzaW9uOiAhdGhpcy5zdGF0ZS5pc09wZW4gPyB0aGlzLnN0YXRlLnBvcHBlclZlcnNpb24gKyAxIDogdGhpcy5zdGF0ZS5wb3BwZXJWZXJzaW9uXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVQb3BwZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNPcGVuOiBmYWxzZVxyXG4gICAgfSlcclxuICAgIGxvZGFzaC5kZWZlcigoKSA9PiB7XHJcbiAgICAgIHRoaXMud2lkZ2V0SWNvblJlZi5mb2N1cygpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY2hlY2tJZkFueUZpbHRlcnNBcHBsaWVkID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgY29uc3QgeyBvbWl0SW50ZXJuYWxTdHlsZSB9ID0gdGhpcy5wcm9wcy5jb25maWdcclxuICAgIGNvbnN0IGZpbHRlckl0ZW1zID0gdGhpcy5zdGF0ZT8uZmlsdGVySXRlbXMgfHwgdGhpcy5wcm9wcy5jb25maWcuZmlsdGVySXRlbXNcclxuICAgIGNvbnN0IGlzQXBwbGllZCA9IChmaWx0ZXJJdGVtcyBhcyB1bmtub3duIGFzIGZpbHRlckl0ZW1Db25maWdbXSkuc29tZSgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBzcWxFeHByT2JqID0gaXRlbS5pc0dyb3VwXHJcbiAgICAgICAgPyBkYXRhU291cmNlVXRpbHMuZ2V0U1FMRXhwcmVzc2lvbkZyb21Hcm91cFNRTEV4cHJlc3Npb24oaXRlbS5zcWxFeHByT2JqRm9yR3JvdXAsIHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNbaXRlbS5zcWxFeHByT2JqRm9yR3JvdXA/LlswXS5kYXRhU291cmNlSWRdKVxyXG4gICAgICAgIDogaXRlbS5zcWxFeHByT2JqXHJcblxyXG4gICAgICBpZiAob21pdEludGVybmFsU3R5bGUgJiYgZ2V0VG90YWxDbGF1c2VOdW1iZXJCeUV4cHJlc3Npb24oc3FsRXhwck9iaikgPT09IDEgJiYgZ2V0U2hvd25DbGF1c2VOdW1iZXJCeUV4cHJlc3Npb24oc3FsRXhwck9iaikgPT09IDEpIHtcclxuICAgICAgICBjb25zdCB1c2VEc0lkID0gaXRlbS5pc0dyb3VwXHJcbiAgICAgICAgICA/IHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNbaXRlbS5zcWxFeHByT2JqRm9yR3JvdXA/LlswXS5kYXRhU291cmNlSWRdPy5pZFxyXG4gICAgICAgICAgOiBpdGVtLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIC8vIGRzIGV4aXN0cywgb3IgaXQgaGFzbid0IGNyZWF0ZWQgd2hlbiB3aWRnZXQgc3RhcnRzXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlLmRhdGFTb3VyY2VzW3VzZURzSWRdXHJcbiAgICAgICAgICA/IGRhdGFTb3VyY2VVdGlscy5nZXRBcmNHSVNTUUwoc3FsRXhwck9iaiwgdGhpcy5zdGF0ZS5kYXRhU291cmNlc1t1c2VEc0lkXSkuc3FsXHJcbiAgICAgICAgICA6IHNxbEV4cHJPYmouc3FsKSAhPT0gJydcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5hdXRvQXBwbHlXaGVuV2lkZ2V0T3BlblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGlzQXBwbGllZFxyXG4gIH1cclxuXHJcbiAgb25Jc0RhdGFTb3VyY2VOb3RSZWFkeSA9IChkYXRhU291cmNlSWQ6IHN0cmluZywgZGF0YVNvdXJjZVN0YXR1cykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGU6IFN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzT3V0UHV0RHMgPSBzdGF0ZS5kYXRhU291cmNlc1tkYXRhU291cmNlSWRdPy5nZXREYXRhU291cmNlSnNvbigpLmlzT3V0cHV0RnJvbVdpZGdldFxyXG4gICAgICBpZiAoIWlzT3V0UHV0RHMpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBvdXRwdXREYXRhU291cmNlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUub3V0cHV0RGF0YVNvdXJjZUlzTm90UmVhZHkpXHJcbiAgICAgIG91dHB1dERhdGFTb3VyY2VbZGF0YVNvdXJjZUlkXSA9IGRhdGFTb3VyY2VTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHlcclxuICAgICAgcmV0dXJuIHsgb3V0cHV0RGF0YVNvdXJjZUlzTm90UmVhZHk6IG91dHB1dERhdGFTb3VyY2UgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlRGF0YVNvdXJjZUNyZWF0ZWRPckZhaWxlZCA9IChkYXRhU291cmNlSWQ6IHN0cmluZywgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGU6IFN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0RhdGFTb3VyY2VzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuZGF0YVNvdXJjZXMpXHJcbiAgICAgIG5ld0RhdGFTb3VyY2VzW2RhdGFTb3VyY2VJZF0gPSBkYXRhU291cmNlXHJcbiAgICAgIHJldHVybiB7IGRhdGFTb3VyY2VzOiBuZXdEYXRhU291cmNlcyB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gT25seSBmb3IgZmlyc3QgdGltZSAmIGF1dG9BcHBseSBvcHRpb24sIGFmdGVyIGFsbCBkYXRhc291cmNlcyBhcmUgcmVhZHlcclxuICBhcHBseUF1dG9GaWx0ZXJzQXRTdGFydCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLl9hdXRvQXBwbHlJbml0KSB7XHJcbiAgICAgIGNvbnN0IGRzTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5kYXRhU291cmNlcykubWFwKCgpID0+IHRydWUpLmxlbmd0aFxyXG4gICAgICBpZiAoZHNMZW5ndGggPT09IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXM/Lmxlbmd0aCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTcWxUb0FsbERzKClcclxuICAgICAgICAgIHRoaXMuX2F1dG9BcHBseUluaXQgPSBmYWxzZVxyXG4gICAgICAgIH0sIDApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGNvbmZpZywgaWNvbiwgbGFiZWwgfSA9IHRoaXMucHJvcHNcclxuICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlckl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXRQbGFjZWhvbGRlclxyXG4gICAgICAgICAgaWNvbj17RmlsdGVySWNvbn0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICBtZXNzYWdlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnX3dpZGdldExhYmVsJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5fd2lkZ2V0TGFiZWwgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0IHdpZGdldC1maWx0ZXIgb3ZlcmZsb3ctYXV0byc+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcz8ubWFwKCh1c2VEcywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEZpbHRlckl0ZW1EYXRhU291cmNlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURzfVxyXG4gICAgICAgICAgICAgICAgb25Jc0RhdGFTb3VyY2VOb3RSZWFkeT17dGhpcy5vbklzRGF0YVNvdXJjZU5vdFJlYWR5fVxyXG4gICAgICAgICAgICAgICAgb25DcmVhdGVEYXRhU291cmNlQ3JlYXRlZE9yRmFpbGVkPXt0aGlzLm9uQ3JlYXRlRGF0YVNvdXJjZUNyZWF0ZWRPckZhaWxlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBGaWx0ZXJzICYgQ2xhdXNlcyBvbiBQb3B1cCBhcmUgYXMgdGhlIHNhbWUgYXMgQmxvY2sgcGFuZWwuXHJcbiAgICAgICAgICBjb25maWcuYXJyYW5nZVR5cGUgPT09IEZpbHRlckFycmFuZ2VUeXBlLlBvcHBlclxyXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItd2lkZ2V0LXBvcHBlcic+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGRvdCBjbGFzc05hbWU9J20tMScgaGlkZUJhZGdlPXshdGhpcy5jaGVja0lmQW55RmlsdGVyc0FwcGxpZWQoKX0gY29sb3I9J3ByaW1hcnknPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBpY29uIHNpemU9J3NtJyBjbGFzc05hbWU9J2ZpbHRlci13aWRnZXQtcGlsbCBoLTEwMCdcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLndpZGdldEljb25SZWYgPSByZWYgfX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNob3dQb3BwZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17dGhpcy5jaGVja0lmQW55RmlsdGVyc0FwcGxpZWQoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXt0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycgPyBpY29uIDogKGljb24gYXMgSWNvblJlc3VsdCkuc3ZnfSBzaXplPXsxNn1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17dHlwZW9mIGljb24gPT09ICdzdHJpbmcnID8gJycgOiAoaWNvbiBhcyBJY29uUmVzdWx0KS5wcm9wZXJ0aWVzLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBvcHBlclZlcnNpb24gPiAxICYmIDxQb3BwZXJcclxuICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XHJcbiAgICAgICAgICAgICAgICAgIHZlcnNpb249e3RoaXMuc3RhdGUucG9wcGVyVmVyc2lvbn1cclxuICAgICAgICAgICAgICAgICAga2VlcE1vdW50XHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5vblRvZ2dsZVBvcHBlcn1cclxuICAgICAgICAgICAgICAgICAgc2hvd0Fycm93XHJcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxyXG4gICAgICAgICAgICAgICAgICBmb3JjZUxhdGVzdEZvY3VzRWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlPXt0aGlzLndpZGdldEljb25SZWZ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTInPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldEZpbHRlckl0ZW1zKGNvbmZpZywgRmlsdGVyQXJyYW5nZVR5cGUuQmxvY2ssIGZhbHNlLCB0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1BvcHBlcj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBoLTEwMCcgY3NzPXtjc3NgbWF4LWhlaWdodDogMTAwdmg7YH0+XHJcbiAgICAgICAgICAgICAge3RoaXMuZ2V0RmlsdGVySXRlbXMoY29uZmlnLCBjb25maWcuYXJyYW5nZVR5cGUsIGNvbmZpZy53cmFwKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==