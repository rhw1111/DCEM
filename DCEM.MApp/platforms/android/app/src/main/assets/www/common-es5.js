(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/silly-datetime/dest/index.js":
/*!***************************************************!*\
  !*** ./node_modules/silly-datetime/dest/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 将输入的任意对象转换成 Date，如果装换失败将返回当前时间
 * @param  {any} datetime 需要被格式化的时间
 * @return {Date}         转换好的 Date
 */
function getDateObject(datetime) {
  var t = datetime instanceof Date ? datetime : new Date(datetime);
  if (!t.getDate()) {
    t = new Date();
  }
  return t;
}

/**
 * 格式化时间
 * @param  {Date}   datetime  需要被格式化的时间
 * @param  {string} formatStr 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
 * @return {string}           格式化后的时间字符串
 */
function format(datetime, formatStr) {
  var t = getDateObject(datetime);
  var hours = undefined,
      o = undefined,
      i = 0;
  formatStr = formatStr || 'YYYY-MM-DD HH:mm:ss';
  hours = t.getHours();
  o = [['M+', t.getMonth() + 1], ['D+', t.getDate()],
  // H 24小时制
  ['H+', hours],
  // h 12小时制
  ['h+', hours > 12 ? hours - 12 : hours], ['m+', t.getMinutes()], ['s+', t.getSeconds()]];
  // 替换 Y
  if (/(Y+)/.test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  // 替换 M, D, H, h, m, s
  for (; i < o.length; i++) {
    if (new RegExp('(' + o[i][0] + ')').test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length === 1 ? o[i][1] : ('00' + o[i][1]).substr(('' + o[i][1]).length));
    }
  }
  // 替换 a/A 为 am, pm
  return formatStr.replace(/a/ig, hours > 11 ? 'pm' : 'am');
}

/**
 * CONST and VAR for .fromNow
 */
// 预设语言：英语
var LOCALE_EN = {
  future: 'in %s',
  past: '%s ago',
  s: 'a few seconds',
  mm: '%s minutes',
  hh: '%s hours',
  dd: '%s days',
  MM: '%s months',
  yy: '%s years'
};
// 预设语言：简体中文
var LOCALE_ZH_CN = {
  future: '%s内',
  past: '%s前',
  s: '几秒',
  mm: '%s分钟',
  hh: '%s小时',
  dd: '%s天',
  MM: '%s月',
  yy: '%s年'
};
// 当前本地化语言对象
var _curentLocale = undefined;

/**
 * 修改本地化语言
 * @param  {string|Object}   string: 预设语言 `zh-cn` 或 `en`；Object: 自定义 locate 对象
 */
function locate(arg) {
  var newLocale = undefined,
      prop = undefined;
  if (typeof arg === 'string') {
    newLocale = arg === 'zh-cn' ? LOCALE_ZH_CN : LOCALE_EN;
  } else {
    newLocale = arg;
  }
  if (!_curentLocale) {
    _curentLocale = {};
  }
  for (prop in newLocale) {
    if (newLocale.hasOwnProperty(prop) && typeof newLocale[prop] === 'string') {
      _curentLocale[prop] = newLocale[prop];
    }
  }
}

/**
 * CONST for .fromNow
 */
// 各计算区间
var DET_STD = [['yy', 31536e6], // 1000 * 60 * 60 * 24 * 365 一年月按 365 天算
['MM', 2592e6], // 1000 * 60 * 60 * 24 * 30 一个月按 30 天算
['dd', 864e5], // 1000 * 60 * 60 * 24
['hh', 36e5], // 1000 * 60 * 60
['mm', 6e4], // 1000 * 60
['s', 0]];

/**
 * 计算给出时间和当前时间的时间距离
 * @param  {Date}   datetime 需要计算的时间
 * @return {string}          时间距离
 */
// 只要大于等于 0 都是秒
function fromNow(datetime) {
  if (!_curentLocale) {
    // 初始化本地化语言为 en
    locate('');
  }
  var det = +new Date() - +getDateObject(datetime);
  var format = undefined,
      str = undefined,
      i = 0,
      detDef = undefined,
      detDefVal = undefined;
  if (det < 0) {
    format = _curentLocale.future;
    det = -det;
  } else {
    format = _curentLocale.past;
  }
  for (; i < DET_STD.length; i++) {
    detDef = DET_STD[i];
    detDefVal = detDef[1];
    if (det >= detDefVal) {
      str = _curentLocale[detDef[0]].replace('%s', parseInt(det / detDefVal, 0) || 1);
      break;
    }
  }
  return format.replace('%s', str);
}

exports.format = format;
exports.locate = locate;
exports.fromNow = fromNow;

/***/ }),

/***/ "./src/app/saleing/saleing.ser/optionset.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/saleing/saleing.ser/optionset.service.ts ***!
  \**********************************************************/
/*! exports provided: OptionSetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionSetService", function() { return OptionSetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionSetService = /** @class */ (function () {
    /**
     * 选项集定义，后续优化通过接口获取
     */
    function OptionSetService() {
    }
    /**
     * 通过选项名称,及value值获取option显示名称
     * @param optionname 选项集名称
     * @param value 选项集值
     */
    OptionSetService.prototype.GetOptionSetNameByValue = function (optionname, value) {
        var result = "--";
        var obj = this.Get(optionname);
        if (obj != null && obj.length > 0) {
            for (var i = 0; i < obj.length; i++) {
                if (value == obj[i]["value"]) {
                    return obj[i]["name"];
                }
            }
        }
        return result;
    };
    /**
     * 通过选项名称获取option值
     * @param optionname 选项集名称
     * @param name 选项名称
     */
    OptionSetService.prototype.GetOptionSetValueByName = function (optionname, name) {
        var result = "";
        var obj = this.Get(optionname);
        if (obj != null && obj.length > 0) {
            for (var i = 0; i < obj.length; i++) {
                if (name == obj[i]["name"]) {
                    return obj[i]["value"];
                }
            }
        }
        return result;
    };
    /**
     * 静态数据通用
     * @param name
     */
    OptionSetService.prototype.Get = function (name) {
        var optionlist = [];
        switch (name) {
            case "towoption": //是否选项集
                optionlist = [
                    { "name": "否", "value": 0 },
                    { "name": "是", "value": 1 }
                ];
                break;
            case "mcs_gender": //称呼
                optionlist = [
                    { "name": "先生", "value": 1 },
                    { "name": "女士", "value": 2 },
                    { "name": "未知", "value": 3 }
                ];
                break;
            case "mcs_level": //意向等级
                optionlist = [
                    { "name": "预计90天内成交", "value": 0 },
                    { "name": "预计3~6个月内成交", "value": 1 },
                    { "name": "预计6~12个月内成交", "value": 2 },
                    { "name": "预计12个月以上成交", "value": 3 },
                    { "name": "战败", "value": 5 },
                    { "name": "订单 ", "value": 6 }
                ];
                break;
            case "mcs_purchasepurpose": //车辆用途
                optionlist = [
                    { "name": "家用", "value": 0 },
                    { "name": "运营", "value": 1 },
                    { "name": "其他", "value": 2 }
                ];
                break;
            case "mcs_purchaseway": //购买方式
                optionlist = [
                    { "name": "全款", "value": 0 },
                    { "name": "贷款", "value": 1 }
                ];
                break;
            case "mcs_generation": //年龄段
                optionlist = [
                    { "name": "18岁以下", "value": 0 },
                    { "name": "18~25岁", "value": 1 },
                    { "name": "26~35岁", "value": 2 },
                    { "name": "36~45岁", "value": 3 },
                    { "name": "46~55岁", "value": 4 },
                    { "name": "56岁以上", "value": 5 }
                ];
                break;
            case "mcs_carereason": //购买原因
                optionlist = [
                    { "name": "环保", "value": 9 },
                    { "name": "科技", "value": 10 },
                    { "name": "安全", "value": 6 },
                    { "name": "性能", "value": 11 },
                    { "name": "售后成本", "value": 12 },
                    { "name": "品牌", "value": 2 },
                    { "name": "价格", "value": 3 },
                    { "name": "配置", "value": 4 },
                    { "name": "服务", "value": 5 },
                    { "name": "舒适性", "value": 7 },
                    { "name": "残值", "value": 8 }
                ];
                break;
            case "mcs_vehicleusers": //车辆使用人
                optionlist = [
                    { "name": "自己", "value": 1 },
                    { "name": "妻子", "value": 2 },
                    { "name": "子女", "value": 3 }
                ];
                break;
            case "mcs_leadorigin": //线索来源
                optionlist = [
                    { "name": "WEB官网", "value": 1 },
                    { "name": "Event-Online", "value": 2 },
                    { "name": "Event-OffLine", "value": 3 },
                    { "name": "Store展厅", "value": 4 },
                    { "name": "400电话", "value": 5 },
                    { "name": "APP", "value": 6 },
                    { "name": "小程序", "value": 7 },
                    { "name": "车机", "value": 8 },
                    { "name": "H5落地页", "value": 9 },
                    { "name": "3D展厅", "value": 10 }
                ];
                break;
            case "mcs_importantlevel": //培育任务-重要级别
                optionlist = [
                    { "name": "高", "value": 0 },
                    { "name": "中", "value": 1 },
                    { "name": "低", "value": 2 }
                ];
                break;
            case "mcs_activitystatus": //培育任务-任务状态
                optionlist = [
                    { "name": "open", "value": 0 },
                    { "name": "closed", "value": 1 }
                ];
                break;
            default:
                optionlist = [];
                break;
            case "lead_mcs_accountpoints": //原始线索评分
                optionlist = [
                    { "name": "1分", "value": 1 },
                    { "name": "2分", "value": 2 },
                    { "name": "3分", "value": 3 }
                ];
                break;
            case "lead_mcs_leadorigin": //原始线索来源
                optionlist = [
                    { "name": "WEB官网", "value": 1 },
                    { "name": "Event-Online", "value": 2 },
                    { "name": "Event-OffLine", "value": 3 },
                    { "name": "Store展厅", "value": 4 },
                    { "name": "400电话", "value": 5 },
                    { "name": "APP", "value": 6 },
                    { "name": "小程序", "value": 7 },
                    { "name": "车机", "value": 8 },
                    { "name": "H5落地页", "value": 9 },
                    { "name": "3D展厅", "value": 10 }
                ];
                break;
            case "lead_mcs_gender": //原始线索称呼
                optionlist = [
                    { "name": "先生", "value": 1 },
                    { "name": "女士", "value": 2 },
                    { "name": "未知", "value": 3 }
                ];
                break;
            case "mcs_customerstatus": //销售机会状态
                optionlist = [
                    { "name": "待指派", "value": 1 },
                    { "name": "已指派", "value": 2 },
                    { "name": "申请战败", "value": 3 },
                    { "name": "已成交", "value": 4 },
                    { "name": "已战败", "value": 5 },
                    { "name": "已关闭", "value": 6 }
                ];
                break;
            case "mcs_deliverystatus": //整车销售-交车单-交车单状态
                optionlist = [
                    { "name": "全部", "value": -1 },
                    { "name": "待预约", "value": 1 },
                    { "name": "待检测", "value": 2 },
                    { "name": "已检测", "value": 3 },
                    { "name": "已预约", "value": 4 },
                    { "name": "已收尾款", "value": 5 },
                    { "name": "车联网已开通", "value": 6 },
                    { "name": "交车完成", "value": 7 },
                    { "name": "作废", "value": 99 }
                ];
                break;
            case "mcs_rostatus": //整车销售-整车订单状态
                optionlist = [
                    { "name": "订金待支付", "value": 1 },
                    { "name": "订金已支付", "value": 2 },
                    { "name": "订单确认", "value": 3 },
                    { "name": "等待排产", "value": 4 },
                    { "name": "生产中", "value": 5 },
                    { "name": "车辆在途", "value": 6 },
                    { "name": "等待交车", "value": 7 },
                    { "name": "车联网已开通", "value": 8 },
                    { "name": "交车完成", "value": 9 },
                    { "name": "作废", "value": 99 }
                ];
                break;
            case "mcs_approvalstatus": //整车销售-整车订单审批状态
                optionlist = [
                    { "name": "待审核", "value": 0 },
                    { "name": "审核通过", "value": 1 },
                    { "name": "审核不通过", "value": 2 }
                ];
                break;
            case "mcs_paycategory": //整车销售-收款记录-收款类型 
                optionlist = [
                    { "name": "贷款", "value": 0 },
                    { "name": "定金", "value": 1 },
                    { "name": "尾款", "value": 2 },
                    { "name": "抵扣", "value": 3 }
                ];
                break;
        }
        return optionlist;
    };
    OptionSetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * 选项集定义，后续优化通过接口获取
         */
    ], OptionSetService);
    return OptionSetService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map