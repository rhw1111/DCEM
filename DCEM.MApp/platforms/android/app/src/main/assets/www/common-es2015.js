(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/chunk-00265c49.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-00265c49.js ***!
  \*************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-353a032e.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-353a032e.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js ***!
  \*************************************************************/
/*! exports provided: d, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-d0403a2f.js */ "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
/* harmony import */ var _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-94c4865f.js */ "./node_modules/@ionic/core/dist/esm/chunk-94c4865f.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-3107e07c-js */ "ios-transition-3107e07c-js").then(__webpack_require__.bind(null, /*! ./ios.transition-3107e07c.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-3107e07c.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-90b00ffe-js */ "md-transition-90b00ffe-js").then(__webpack_require__.bind(null, /*! ./md.transition-90b00ffe.js */ "./node_modules/@ionic/core/dist/esm/md.transition-90b00ffe.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const builder = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return builder;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    const trans = await __webpack_require__.e(/*! import() | index-d9adb105-js */ "index-d9adb105-js").then(__webpack_require__.bind(null, /*! ./index-d9adb105.js */ "./node_modules/@ionic/core/dist/esm/index-d9adb105.js")).then(mod => mod.create(animationBuilder, opts.baseEl, opts));
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (trans.hasCompleted) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: trans.hasCompleted,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => trans.onFinish(resolve));
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart();
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js ***!
  \*************************************************************/
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
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js ***!
  \*************************************************************/
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
const rIC = (callback) => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
const hasShadowDom = (el) => {
    return !!el.shadowRoot && !!el.attachShadow;
};
const findItemLabel = (componentEl) => {
    const itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
const renderHiddenInput = (always, container, name, value, disabled) => {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
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
const clamp = (min, n, max) => {
    return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
const now = (ev) => {
    return ev.timeStamp || Date.now();
};
const pointerCoord = (ev) => {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
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
const isEndSide = (side) => {
    const isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
    }
};
const debounceEvent = (event, wait) => {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
const debounce = (func, wait = 0) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const documentFragmentChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
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
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes[i];
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (element) => {
    return (element.children != null) ? element.children : element.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./src/app/base/base.ser/http-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/base/base.ser/http-service.service.ts ***!
  \*******************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let HttpService = class HttpService {
    constructor(http, loadingCtrl, toastCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoadingOpen = false;
        this.InterfacePreURL = "";
    }
    postForToaken(url, params, successCallback, errorCallback) {
        // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
        return this.http
            .post(this.getEnvironmentUrl() + url, null, {
            params: this.encodeHttpParams(params),
            headers: this.getHeaders()
        })
            .subscribe((res) => {
            console.log(res);
            this.responseSuccess(res, function (msg) {
                if (successCallback) {
                    successCallback(res, msg);
                }
            });
        }, err => {
            if (errorCallback) {
                errorCallback(err);
            }
        });
    }
    //get数据
    getForToaken(url, params) {
        return this.http.get(this.getEnvironmentUrl() + url, {
            params: this.encodeComplexHttpParams(params),
            headers: this.getHeaders()
        });
    }
    GET(url, params, callback) {
        this.http
            .get(this.getEnvironmentUrl() + url, { params: this.encodeComplexHttpParams(params) })
            .subscribe(res => {
            console.log('get res=' + res);
            callback && callback(res, null);
        }, error => {
            callback && callback(null, error);
        });
    }
    POST(url, params, callback) {
        console.log('POST...');
        this.http.post(this.getEnvironmentUrl() + url, this.encodeComplexHttpParams(params)).subscribe((res) => {
            console.log('POST res=' + res);
            console.log(res);
            callback && callback(res, null);
        }, err => {
            console.log('POST err=');
            console.log(err);
            this.requestFailed(err);
            callback && callback(null, err);
        });
    }
    //对象参数请求
    encodeHttpParams(params) {
        if (!params)
            return null;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params });
    }
    //字符串参数封装
    encodeComplexHttpParams(params) {
        if (!params)
            return null;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: params });
    }
    /**
     * 处理响应的事件
     * @param res
     * @param {Function} error
     */
    responseSuccess(res, callback) {
        if (res.code !== '0') {
            // 失败
            if (res.msg) {
                callback({ code: res.code, msg: res.msg });
            }
            else {
                const data = res.datas;
                let errorMsg = res.message;
                if (data != null) {
                    data.map(i => {
                        errorMsg = i.errorMsg + '\n';
                    });
                }
                callback({ code: res.code, msg: errorMsg });
            }
        }
        else {
            callback(res);
        }
    }
    /**
     * 处理请求失败事件
     * @param url
     * @param err
     */
    requestFailed(err) {
        let msg = '请求发生异常';
        const status = err.status;
        console.log('status=' + status);
        if (status === 0) {
            msg = '请求失败，请求响应出错';
        }
        else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        }
        else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        }
        else {
            msg = '未知错误，请检查网络';
        }
        return msg;
    }
    /**
     * 头部信息获取，主要用于处理token
    **/
    getHeaders() {
        const token = this.getToken();
        console.log(token);
        return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            token: token,
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json'
        }) : null;
    }
    /*
     * 使用本地缓存的方式来获取token信息
     */
    getToken() {
        return window.localStorage.getItem('auth-token');
    }
    /**
     * 将token信息保存到本地缓存中 用缓存的形式实现token验证
     * @param token
     */
    setToken(token) {
        // 目前只解析token字段，缓存先只存该字段
        // JSON.stringify(token)
        window.localStorage.setItem('auth-token', token);
    }
    //获取接口请求地址
    getEnvironmentUrl() {
        return window.localStorage.getItem('environmenturl');
    }
    //跟进环境设置请求地址
    setEnvironmentUrl(environment) {
        let url = "";
        console.log("environment:" + environment);
        switch (environment) {
            case 'Dev':
                url = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Sit':
                url = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Uat':
                url = "https://subcrmuatapi.sokon.com/dcem";
                break;
            case 'Pro':
                url = "https://mscrm.sokon.com/dcem";
                break;
            default:
                url = "http://localhost:52151";
                break;
        }
        window.localStorage.setItem('environmenturl', url);
    }
    /**
     * 清理token
     */
    clearToken() {
        window.localStorage.setItem('auth-token', null);
    }
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.isLoadingOpen) {
                const loading = yield this.loadingCtrl.create({
                    message: content,
                    duration: 300,
                    translucent: false
                });
                console.log('showLoading....');
                return yield loading.present();
            }
        });
    }
    /**
     * 关闭loading
    */
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('hideLoading....');
            if (this.isLoadingOpen) {
                yield this.loadingCtrl.dismiss();
                this.isLoadingOpen = false;
            }
        });
    }
    /**
     * Toast 提示
     * @param message
     */
    presentToastError(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                color: "danger",
                position: "top"
            });
            toast.present();
        });
    }
    presentToastSucess(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 1500,
                color: "success",
                position: "middle"
            });
            toast.present();
        });
    }
    /*------------------------------------------------------- */
    /*
    api/focus
    */
    ajaxGet(url) {
        var api = this.getEnvironmentUrl() + url;
        return new Promise((resove, reject) => {
            this.http.get(api).subscribe((response) => {
                resove(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    /*
   api/focus
   */
    ajaxPost(url, json) {
        var api = this.getEnvironmentUrl() + url;
        return new Promise((resove, reject) => {
            this.http.post(api, json).subscribe((response) => {
                resove(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    /*本地缓存处理*/
    /*
     * 使用本地缓存的方式来获取数据
     */
    GetDataCache(name) {
        return window.localStorage.getItem('datacache-' + name);
    }
    /**
     *  将数据存储到本地缓存中
     * @param name
     * @param data
     */
    SetDataCache(name, data) {
        window.localStorage.setItem('datacache-' + name, data);
    }
    /*
     * 清楚本地缓存数据
     */
    ClearDataCache(name) {
        return window.localStorage.setItem('datacache-' + name, "");
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], HttpService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map