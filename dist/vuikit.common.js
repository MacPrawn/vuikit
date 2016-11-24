/*!
 * Vuikit v0.6.2 (https://github.com/vuikit/vuikit)
 * (c) 2016 ZOOlanders
 * Released under the MIT License.
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(36);

	var _keys2 = _interopRequireDefault(_keys);

	var _Breadcrumb = __webpack_require__(52);

	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

	var _BreadcrumbItem = __webpack_require__(53);

	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

	var _Button = __webpack_require__(54);

	var _Button2 = _interopRequireDefault(_Button);

	var _ButtonCheckbox = __webpack_require__(55);

	var _ButtonCheckbox2 = _interopRequireDefault(_ButtonCheckbox);

	var _ButtonRadio = __webpack_require__(56);

	var _ButtonRadio2 = _interopRequireDefault(_ButtonRadio);

	var _Calendar = __webpack_require__(59);

	var _Calendar2 = _interopRequireDefault(_Calendar);

	var _Datepicker = __webpack_require__(61);

	var _Datepicker2 = _interopRequireDefault(_Datepicker);

	var _Notify = __webpack_require__(67);

	var _Notify2 = _interopRequireDefault(_Notify);

	var _NotifyMessage = __webpack_require__(68);

	var _NotifyMessage2 = _interopRequireDefault(_NotifyMessage);

	var _Dropdown = __webpack_require__(63);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _Modal = __webpack_require__(65);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Offcanvas = __webpack_require__(70);

	var _Offcanvas2 = _interopRequireDefault(_Offcanvas);

	var _Pagination = __webpack_require__(74);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	var _Picker = __webpack_require__(76);

	var _Picker2 = _interopRequireDefault(_Picker);

	var _Subnav = __webpack_require__(77);

	var _Subnav2 = _interopRequireDefault(_Subnav);

	var _SubnavItem = __webpack_require__(78);

	var _SubnavItem2 = _interopRequireDefault(_SubnavItem);

	var _Switcher = __webpack_require__(79);

	var _Switcher2 = _interopRequireDefault(_Switcher);

	var _SwitcherItem = __webpack_require__(80);

	var _SwitcherItem2 = _interopRequireDefault(_SwitcherItem);

	var _Table = __webpack_require__(85);

	var _Table2 = _interopRequireDefault(_Table);

	var _Tabs = __webpack_require__(88);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	var _TabsItem = __webpack_require__(89);

	var _TabsItem2 = _interopRequireDefault(_TabsItem);

	var _TabsVertical = __webpack_require__(90);

	var _TabsVertical2 = _interopRequireDefault(_TabsVertical);

	var _Tooltip = __webpack_require__(91);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Upload = __webpack_require__(92);

	var _Upload2 = _interopRequireDefault(_Upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Vuikit = {
	  Breadcrumb: _Breadcrumb2.default,
	  BreadcrumbItem: _BreadcrumbItem2.default,
	  Button: _Button2.default,
	  ButtonCheckbox: _ButtonCheckbox2.default,
	  ButtonRadio: _ButtonRadio2.default,
	  Calendar: _Calendar2.default,
	  Datepicker: _Datepicker2.default,
	  Notify: _Notify2.default,
	  NotifyMessage: _NotifyMessage2.default,
	  Dropdown: _Dropdown2.default,
	  Modal: _Modal2.default,
	  Offcanvas: _Offcanvas2.default,
	  Pagination: _Pagination2.default,
	  Picker: _Picker2.default,
	  Subnav: _Subnav2.default,
	  SubnavItem: _SubnavItem2.default,
	  Switcher: _Switcher2.default,
	  SwitcherItem: _SwitcherItem2.default,
	  Table: _Table2.default,
	  Tabs: _Tabs2.default,
	  TabsItem: _TabsItem2.default,
	  TabsVertical: _TabsVertical2.default,
	  Tooltip: _Tooltip2.default,
	  Upload: _Upload2.default,
	  install: function install(Vue) {
	    var keys = (0, _keys2.default)(this);
	    keys.pop();
	    var i = keys.length;
	    while (i--) {
	      Vue.component('Vk' + keys[i], this[keys[i]]);
	    }
	  }
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(Vuikit);
	}

	module.exports = Vuikit;

/***/ },
/* 1 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.warn = exports.isArray = undefined;

	var _getPrototypeOf = __webpack_require__(96);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _typeof2 = __webpack_require__(99);

	var _typeof3 = _interopRequireDefault(_typeof2);

	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	exports.isString = isString;
	exports.isFunction = isFunction;
	exports.inArray = inArray;
	exports.each = each;
	exports.merge = merge;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
	}

	function isPlainObject(obj) {
	  return isObject(obj) && (0, _getPrototypeOf2.default)(obj) === Object.prototype;
	}

	function isString(val) {
	  return typeof val === 'string';
	}

	function isFunction(val) {
	  return typeof val === 'function';
	}

	var isArray = exports.isArray = Array.isArray;

	function inArray(array, value) {
	  return (array || []).indexOf(value) !== -1;
	}

	function each(obj, iterator) {
	  var i, key;
	  if (typeof obj.length === 'number') {
	    for (i = 0; i < obj.length; i++) {
	      iterator.call(obj[i], obj[i], i);
	    }
	  } else if (isObject(obj)) {
	    for (key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        iterator.call(obj[key], obj[key], key);
	      }
	    }
	  }
	  return obj;
	}

	function merge(target) {
	  var args = Array.prototype.slice.call(arguments, 1);
	  args.forEach(function (source) {
	    _merge(target, source, true);
	  });
	  return target;
	}

	function _merge(target, source, deep) {
	  for (var key in source) {
	    if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	      if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	        target[key] = {};
	      }
	      if (isArray(source[key]) && !isArray(target[key])) {
	        target[key] = [];
	      }
	      _merge(target[key], source[key], deep);
	    } else if (source[key] !== undefined) {
	      target[key] = source[key];
	    }
	  }
	}

	var warn = void 0;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    exports.warn = warn = function warn(msg, vm) {
	      if (hasConsole) {
	        console.error('[Vuikit warn]: ' + msg);
	      }
	    };
	  })();
	}

	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(18)
	  , IE8_DOM_DEFINE = __webpack_require__(40)
	  , toPrimitive    = __webpack_require__(32)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41)
	  , defined = __webpack_require__(23);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

	module.exports = function mergeJSXProps (objs) {
	  return objs.reduce(function (a, b) {
	    var aa, bb, key, nestedKey, temp
	    for (key in b) {
	      aa = a[key]
	      bb = b[key]
	      if (aa && nestRE.test(key)) {
	        // normalize class
	        if (key === 'class') {
	          if (typeof aa === 'string') {
	            temp = aa
	            a[key] = aa = {}
	            aa[temp] = true
	          }
	          if (typeof bb === 'string') {
	            temp = bb
	            b[key] = bb = {}
	            bb[temp] = true
	          }
	        }
	        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
	          // merge functions
	          for (nestedKey in bb) {
	            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
	          }
	        } else if (Array.isArray(aa)) {
	          a[key] = aa.concat(bb)
	        } else if (Array.isArray(bb)) {
	          a[key] = [aa].concat(bb)
	        } else {
	          for (nestedKey in bb) {
	            aa[nestedKey] = bb[nestedKey]
	          }
	        }
	      } else {
	        a[key] = b[key]
	      }
	    }
	    return a
	  }, {})
	}

	function mergeFn (a, b) {
	  return function () {
	    a.apply(this, arguments)
	    b.apply(this, arguments)
	  }
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.on = on;
	exports.offAll = offAll;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.css = css;
	var boundEvents = [];

	function on(el, event, handler) {
	  var namespace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'def';

	  boundEvents[namespace] = boundEvents[namespace] || [];
	  boundEvents[namespace].push({ el: el, event: event, handler: handler });
	  el.addEventListener(event, handler);
	}

	function offAll() {
	  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'def';

	  if (boundEvents[namespace] !== undefined) {
	    for (var i = 0; i < boundEvents[namespace].length; ++i) {
	      var _boundEvents$namespac = boundEvents[namespace][i],
	          el = _boundEvents$namespac.el,
	          event = _boundEvents$namespac.event,
	          handler = _boundEvents$namespac.handler;

	      el.removeEventListener(event, handler);
	    }
	  }
	}

	function addClass(el, className) {
	  if (el.classList) {
	    el.classList.add(className);
	  } else {
	    el.className += ' ' + className;
	  }
	}

	function removeClass(el, className) {
	  if (el.classList) {
	    el.classList.remove(className);
	  } else {
	    el.className = el.className.replace(new RegExp('^' + className + '$'), '');
	  }
	}

	function css(el, style) {
	  return window.getComputedStyle(el)[style];
	}

	var UA = window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;

	var transitionProp = exports.transitionProp = 'transition';
	var transitionEndEvent = exports.transitionEndEvent = 'transitionend';
	var animationProp = exports.animationProp = 'animation';
	var animationEndEvent = exports.animationEndEvent = 'animationend';

	if (!isIE9) {
	  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
	    exports.transitionProp = transitionProp = 'WebkitTransition';
	    exports.transitionEndEvent = transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
	    exports.animationProp = animationProp = 'WebkitAnimation';
	    exports.animationEndEvent = animationEndEvent = 'webkitAnimationEnd';
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(3)
	  , core      = __webpack_require__(1)
	  , ctx       = __webpack_require__(110)
	  , hide      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(6)
	  , createDesc = __webpack_require__(20);
	module.exports = __webpack_require__(4) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(46)
	  , enumBugKeys = __webpack_require__(24);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(30)('wks')
	  , uid        = __webpack_require__(22)
	  , Symbol     = __webpack_require__(3).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(95);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(23);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 27 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(6).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(14)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(30)('keys')
	  , uid    = __webpack_require__(22);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(3)
	  , core           = __webpack_require__(1)
	  , LIBRARY        = __webpack_require__(26)
	  , wksExt         = __webpack_require__(34)
	  , defineProperty = __webpack_require__(6).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(14);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(94);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(3).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(4) && !__webpack_require__(11)(function(){
	  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(26)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(48)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(25)
	  , $iterCreate    = __webpack_require__(115)
	  , setToStringTag = __webpack_require__(28)
	  , getPrototypeOf = __webpack_require__(45)
	  , ITERATOR       = __webpack_require__(14)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(18)
	  , dPs         = __webpack_require__(120)
	  , enumBugKeys = __webpack_require__(24)
	  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(39)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(112).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(46)
	  , hiddenKeys = __webpack_require__(24).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(21)
	  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(7)
	  , arrayIndexOf = __webpack_require__(109)(false)
	  , IE_PROTO     = __webpack_require__(29)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(10)
	  , core    = __webpack_require__(1)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var createRange = __webpack_require__(147);

	/**
	 * Creates an array of numbers (positive and/or negative) progressing from
	 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	 * `start` is specified without an `end` or `step`. If `end` is not specified,
	 * it's set to `start` with `start` then set to `0`.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} [step=1] The value to increment or decrement by.
	 * @returns {Array} Returns the range of numbers.
	 * @see _.inRange, _.rangeRight
	 * @example
	 *
	 * _.range(4);
	 * // => [0, 1, 2, 3]
	 *
	 * _.range(-4);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 5);
	 * // => [1, 2, 3, 4]
	 *
	 * _.range(0, 20, 5);
	 * // => [0, 5, 10, 15]
	 *
	 * _.range(0, -4, -1);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 4, 0);
	 * // => [1, 1, 1]
	 *
	 * _.range(0);
	 * // => []
	 */
	var range = createRange();

	module.exports = range;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	* @fileOverview Kickass library to create and place poppers near their reference elements.
	* @version 1.0.0-alpha.3
	* @license
	* Copyright (c) 2016 Federico Zivolo and contributors
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*/
	                    
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Popper = factory());
	}(this, function () { 'use strict';

	  /**
	   * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
	   * objects to a target object. It will return the target object.
	   * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
	   * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	   * @function
	   * @ignore
	   */
	  if (!Object.assign) {
	      Object.defineProperty(Object, 'assign', {
	          enumerable: false,
	          configurable: true,
	          writable: true,
	          value: function value(target) {
	              if (target === undefined || target === null) {
	                  throw new TypeError('Cannot convert first argument to object');
	              }

	              var to = Object(target);
	              for (var i = 1; i < arguments.length; i++) {
	                  var nextSource = arguments[i];
	                  if (nextSource === undefined || nextSource === null) {
	                      continue;
	                  }
	                  nextSource = Object(nextSource);

	                  var keysArray = Object.keys(nextSource);
	                  for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                      var nextKey = keysArray[nextIndex];
	                      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	                      if (desc !== undefined && desc.enumerable) {
	                          to[nextKey] = nextSource[nextKey];
	                      }
	                  }
	              }
	              return to;
	          }
	      });
	  }

	  /**
	   * Polyfill for requestAnimationFrame
	   * @function
	   * @ignore
	   */
	  if (!window.requestAnimationFrame) {
	      var lastTime = 0;
	      var vendors = ['ms', 'moz', 'webkit', 'o'];
	      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	          window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	          window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	      }

	      if (!window.requestAnimationFrame) {
	          window.requestAnimationFrame = function (callback) {
	              var currTime = new Date().getTime();
	              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	              var id = window.setTimeout(function () {
	                  callback(currTime + timeToCall);
	              }, timeToCall);
	              lastTime = currTime + timeToCall;
	              return id;
	          };
	      }

	      if (!window.cancelAnimationFrame) {
	          window.cancelAnimationFrame = function (id) {
	              clearTimeout(id);
	          };
	      }
	  }

	  /**
	   * Return the index of the matching object
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Array} arr
	   * @argument prop
	   * @argument value
	   * @returns index or -1
	   */
	  function findIndex(arr, prop, value) {
	    // use filter instead of find because find has less cross-browser support
	    var match = arr.filter(function (obj) {
	      return obj[prop] === value;
	    })[0];
	    return arr.indexOf(match);
	  }

	  /**
	   * Returns the offset parent of the given element
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Element} element
	   * @returns {Element} offset parent
	   */
	  function getOffsetParent(element) {
	    // NOTE: 1 DOM access here
	    var offsetParent = element.offsetParent;
	    return !offsetParent || offsetParent.nodeName === 'BODY' ? window.document.documentElement : offsetParent;
	  }

	  /**
	   * Get CSS computed property of the given element
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Eement} element
	   * @argument {String} property
	   */
	  function getStyleComputedProperty(element, property) {
	      if (element.nodeType !== 1) {
	          return [];
	      }
	      // NOTE: 1 DOM access here
	      var css = window.getComputedStyle(element, null);
	      return css[property];
	  }

	  /**
	   * Returns the parentNode or the host of the element
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Element} element
	   * @returns {Element} parent
	   */
	  function getParentNode(element) {
	    return element.parentNode || element.host;
	  }

	  /**
	   * Returns the scrolling parent of the given element
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Element} element
	   * @returns {Element} offset parent
	   */
	  function getScrollParent(element) {
	      if (element === window.document) {
	          // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
	          // greater than 0 and return the proper element
	          if (window.document.body.scrollTop) {
	              return window.document.body;
	          } else {
	              return window.document.documentElement;
	          }
	      }

	      // Firefox want us to check `-x` and `-y` variations as well
	      if (['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-y')) !== -1) {
	          // If the detected scrollParent is body, we perform an additional check on its parentNode
	          // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
	          // fixes issue #65
	          return element === window.document.body ? getScrollParent(getParentNode(element)) : element;
	      }
	      return getParentNode(element) ? getScrollParent(getParentNode(element)) : element;
	  }

	  /**
	   * Get the position of the given element, relative to its offset parent
	   * @method
	   * @memberof Popper.Utils
	   * @param {Element} element
	   * @return {Object} position - Coordinates of the element and its `scrollTop`
	   */
	  function getOffsetRect(element) {
	      var elementRect = {
	          width: element.offsetWidth,
	          height: element.offsetHeight,
	          left: element.offsetLeft,
	          top: element.offsetTop
	      };

	      elementRect.right = elementRect.left + elementRect.width;
	      elementRect.bottom = elementRect.top + elementRect.height;

	      // position
	      return elementRect;
	  }

	  /**
	   * Computed the boundaries limits and return them
	   * @method
	   * @memberof Popper.Utils
	   * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
	   * @param {Number} padding - Boundaries padding
	   * @param {Element} boundariesElement - Element used to define the boundaries
	   * @returns {Object} Coordinates of the boundaries
	   */
	  function getBoundaries(popper, data, padding, boundariesElement) {
	      // NOTE: 1 DOM access here
	      var boundaries = {};
	      if (boundariesElement === 'window') {
	          var body = window.document.body;
	          var html = window.document.documentElement;
	          var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	          var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

	          boundaries = {
	              top: 0,
	              right: width,
	              bottom: height,
	              left: 0
	          };
	      } else if (boundariesElement === 'viewport') {
	          var offsetParent = getOffsetParent(popper);
	          var scrollParent = getScrollParent(popper);
	          var offsetParentRect = getOffsetRect(offsetParent);

	          // if the popper is fixed we don't have to substract scrolling from the boundaries
	          var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
	          var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;

	          boundaries = {
	              top: 0 - (offsetParentRect.top - scrollTop),
	              right: window.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
	              bottom: window.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
	              left: 0 - (offsetParentRect.left - scrollLeft)
	          };
	      } else {
	          if (getOffsetParent(popper) === boundariesElement) {
	              boundaries = {
	                  top: 0,
	                  left: 0,
	                  right: boundariesElement.clientWidth,
	                  bottom: boundariesElement.clientHeight
	              };
	          } else {
	              boundaries = getOffsetRect(boundariesElement);
	          }
	      }
	      boundaries.left += padding;
	      boundaries.right -= padding;
	      boundaries.top = boundaries.top + padding;
	      boundaries.bottom = boundaries.bottom - padding;
	      return boundaries;
	  }

	  /**
	   * Get bounding client rect of given element
	   * @method
	   * @memberof Popper.Utils
	   * @param {HTMLElement} element
	   * @return {Object} client rect
	   */
	  function getBoundingClientRect(element) {
	      var rect = element.getBoundingClientRect();
	      return {
	          left: rect.left,
	          top: rect.top,
	          right: rect.right,
	          bottom: rect.bottom,
	          width: rect.right - rect.left,
	          height: rect.bottom - rect.top
	      };
	  }

	  /**
	   * Given an element and one of its parents, return the offset
	   * @method
	   * @memberof Popper.Utils
	   * @param {HTMLElement} element
	   * @param {HTMLElement} parent
	   * @return {Object} rect
	   */
	  function getOffsetRectRelativeToCustomParent(element, parent, fixed, transformed) {
	      var elementRect = getBoundingClientRect(element);
	      var parentRect = getBoundingClientRect(parent);

	      if (fixed && !transformed) {
	          var scrollParent = getScrollParent(parent);
	          parentRect.top += scrollParent.scrollTop;
	          parentRect.bottom += scrollParent.scrollTop;
	          parentRect.left += scrollParent.scrollLeft;
	          parentRect.right += scrollParent.scrollLeft;
	      }

	      var rect = {
	          top: elementRect.top - parentRect.top,
	          left: elementRect.left - parentRect.left,
	          bottom: elementRect.top - parentRect.top + elementRect.height,
	          right: elementRect.left - parentRect.left + elementRect.width,
	          width: elementRect.width,
	          height: elementRect.height
	      };
	      return rect;
	  }

	  /**
	   * Get the outer sizes of the given element (offset size + margins)
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Element} element
	   * @returns {Object} object containing width and height properties
	   */
	  function getOuterSizes(element) {
	      // NOTE: 1 DOM access here
	      var display = element.style.display;
	      var visibility = element.style.visibility;

	      element.style.display = 'block';
	      element.style.visibility = 'hidden';

	      // original method
	      var styles = window.getComputedStyle(element);
	      var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	      var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	      var result = {
	          width: element.offsetWidth + y,
	          height: element.offsetHeight + x
	      };

	      // reset element styles
	      element.style.display = display;
	      element.style.visibility = visibility;

	      return result;
	  }

	  /**
	   * Given the popper offsets, generate an output similar to getBoundingClientRect
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Object} popperOffsets
	   * @returns {Object} ClientRect like output
	   */
	  function getPopperClientRect(popperOffsets) {
	      return Object.assign({}, popperOffsets, {
	          right: popperOffsets.left + popperOffsets.width,
	          bottom: popperOffsets.top + popperOffsets.height
	      });
	  }

	  /**
	   * Check if the given element is fixed or is inside a fixed parent
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Element} element
	   * @argument {Element} customContainer
	   * @returns {Boolean} answer to "isFixed?"
	   */
	  function isFixed(element) {
	      if (element === window.document.body) {
	          return false;
	      }
	      if (getStyleComputedProperty(element, 'position') === 'fixed') {
	          return true;
	      }
	      return getParentNode(element) ? isFixed(getParentNode(element)) : element;
	  }

	  /**
	   * Helper used to get the position which will be applied to the popper
	   * @method
	   * @memberof Popper.Utils
	   * @param config {HTMLElement} popper element
	   * @returns {HTMLElement} reference element
	   */
	  function getPosition(popper, reference) {
	    var container = getOffsetParent(reference);

	    // Decide if the popper will be fixed
	    // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
	    var isParentFixed = isFixed(container);
	    return isParentFixed ? 'fixed' : 'absolute';
	  }

	  /**
	   * Get the prefixed supported property name
	   * @method
	   * @memberof Popper.Utils
	   * @argument {String} property (camelCase)
	   * @returns {String} prefixed property (camelCase)
	   */
	  function getSupportedPropertyName(property) {
	      var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

	      for (var i = 0; i < prefixes.length; i++) {
	          var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
	          if (typeof window.document.body.style[toCheck] !== 'undefined') {
	              return toCheck;
	          }
	      }
	      return null;
	  }

	  /**
	   * Check if the given variable is a function
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Element} element - Element to check
	   * @returns {Boolean} answer to: is a function?
	   */
	  function isFunction(functionToCheck) {
	    var getType = {};
	    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	  }

	  /**
	   * Helper used to know if the given modifier depends from another one.
	   * @method
	   * @memberof Popper.Utils
	   * @returns {Boolean}
	   */
	  function isModifierRequired(modifiers, requesting, requested) {
	      return !!modifiers.filter(function (modifier) {
	          if (modifier.name === requested) {
	              return true;
	          } else if (modifier.name === requesting) {
	              return false;
	          }
	          return false;
	      }).length;
	  }

	  /**
	   * Tells if a given input is a number
	   * @method
	   * @memberof Popper.Utils
	   * @param {*} input to check
	   * @return {Boolean}
	   */
	  function isNumeric(n) {
	    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	  }

	  /**
	   * Check if the given element has transforms applied to itself or a parent
	   * @method
	   * @memberof Popper.Utils
	   * @param  {Element} element
	   * @return {Boolean} answer to "isTransformed?"
	   */
	  function isTransformed(element) {
	      if (element === window.document.body) {
	          return false;
	      }
	      if (getStyleComputedProperty(element, 'transform') !== 'none') {
	          return true;
	      }
	      return getParentNode(element) ? isTransformed(getParentNode(element)) : element;
	  }

	  /**
	   * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
	   * @method
	   * @memberof Popper.Utils
	   * @param {Object} data
	   * @param {Array} modifiers
	   * @param {Function} ends
	   */
	  function runModifiers(modifiers, options, data, ends) {
	      var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

	      modifiersToRun.forEach(function (modifier) {
	          if (modifier.enabled && isFunction(modifier.function)) {
	              data = modifier.function(data, modifier);
	          }
	      });

	      return data;
	  }

	  /**
	   * Set the style to the given popper
	   * @method
	   * @memberof Popper.Utils
	   * @argument {Element} element - Element to apply the style to
	   * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
	   */
	  function setStyle(element, styles) {
	      Object.keys(styles).forEach(function (prop) {
	          var unit = '';
	          // add unit if the value is numeric and is one of the following
	          if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	              unit = 'px';
	          }
	          element.style[prop] = styles[prop] + unit;
	      });
	  }

	  /** @namespace Popper.Utils */
	  var Utils = {
	      findIndex: findIndex,
	      getBoundaries: getBoundaries,
	      getBoundingClientRect: getBoundingClientRect,
	      getOffsetParent: getOffsetParent,
	      getOffsetRectRelativeToCustomParent: getOffsetRectRelativeToCustomParent,
	      getOuterSizes: getOuterSizes,
	      getPopperClientRect: getPopperClientRect,
	      getPosition: getPosition,
	      getScrollParent: getScrollParent,
	      getStyleComputedProperty: getStyleComputedProperty,
	      getSupportedPropertyName: getSupportedPropertyName,
	      isFixed: isFixed,
	      isFunction: isFunction,
	      isModifierRequired: isModifierRequired,
	      isNumeric: isNumeric,
	      isTransformed: isTransformed,
	      runModifiers: runModifiers,
	      setStyle: setStyle
	  };

	  /**
	   * Get offsets to the popper
	   * @method
	   * @memberof Popper.Utils
	   * @param {Element} popper - the popper element
	   * @param {Element} reference - the reference element (the popper will be relative to this)
	   * @returns {Object} An object containing the offsets which will be applied to the popper
	   */
	  function getOffsets(state, popper, reference, placement) {
	      placement = placement.split('-')[0];

	      var popperOffsets = {};
	      popperOffsets.position = state.position;

	      var isParentFixed = popperOffsets.position === 'fixed';
	      var isParentTransformed = state.isParentTransformed;

	      //
	      // Get reference element position
	      //
	      var offsetParent = getOffsetParent(isParentFixed && isParentTransformed ? reference : popper);
	      var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, offsetParent, isParentFixed, isParentTransformed);

	      //
	      // Get popper sizes
	      //
	      var popperRect = getOuterSizes(popper);

	      //
	      // Compute offsets of popper
	      //

	      // depending by the popper placement we have to compute its offsets slightly differently
	      if (['right', 'left'].indexOf(placement) !== -1) {
	          popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
	          if (placement === 'left') {
	              popperOffsets.left = referenceOffsets.left - popperRect.width;
	          } else {
	              popperOffsets.left = referenceOffsets.right;
	          }
	      } else {
	          popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
	          if (placement === 'top') {
	              popperOffsets.top = referenceOffsets.top - popperRect.height;
	          } else {
	              popperOffsets.top = referenceOffsets.bottom;
	          }
	      }

	      // Add width and height to our offsets object
	      popperOffsets.width = popperRect.width;
	      popperOffsets.height = popperRect.height;

	      return {
	          popper: popperOffsets,
	          reference: referenceOffsets
	      };
	  }

	  /**
	   * Setup needed event listeners used to update the popper position
	   * @method
	   * @memberof Popper.Utils
	   * @private
	   */
	  function setupEventListeners(reference, options, state, updateBound) {
	      // NOTE: 1 DOM access here
	      state.updateBound = updateBound;
	      window.addEventListener('resize', state.updateBound, { passive: true });
	      // if the boundariesElement is window we don't need to listen for the scroll event
	      if (options.boundariesElement !== 'window') {
	          var target = getScrollParent(reference);
	          // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	          if (target === window.document.body || target === window.document.documentElement) {
	              target = window;
	          }
	          target.addEventListener('scroll', state.updateBound, { passive: true });
	      }
	  }

	  /**
	   * Remove event listeners used to update the popper position
	   * @method
	   * @memberof Popper.Utils
	   * @private
	   */
	  function removeEventListeners(reference, state, options) {
	      // NOTE: 1 DOM access here
	      window.removeEventListener('resize', state.updateBound);
	      if (options.boundariesElement !== 'window') {
	          var target = getScrollParent(reference);
	          // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	          if (target === window.document.body || target === window.document.documentElement) {
	              target = window;
	          }
	          target.removeEventListener('scroll', state.updateBound);
	      }
	      state.updateBound = null;
	      return state;
	  }

	  /**
	   * Sorts the modifiers based on their `order` property
	   * @method
	   * @memberof Popper.Utils
	   */
	  function sortModifiers(a, b) {
	      if (a.order < b.order) {
	          return -1;
	      } else if (a.order > b.order) {
	          return 1;
	      }
	      return 0;
	  }

	  /**
	   * Apply the computed styles to the popper element
	   * @method
	   * @memberof Modifiers
	   * @argument {Object} data - The data object generated by `update` method
	   * @argument {Object} options - Modifiers configuration and options
	   * @returns {Object} The same data object
	   */
	  function applyStyle(data) {
	      // apply the final offsets to the popper
	      // NOTE: 1 DOM access here
	      var styles = {
	          position: data.offsets.popper.position
	      };

	      // round top and left to avoid blurry text
	      var left = Math.round(data.offsets.popper.left);
	      var top = Math.round(data.offsets.popper.top);

	      // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
	      // we automatically use the supported prefixed version if needed
	      var prefixedProperty = getSupportedPropertyName('transform');
	      if (data.instance.options.gpuAcceleration && prefixedProperty) {
	          styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	          styles.top = 0;
	          styles.left = 0;
	      }
	      // othwerise, we use the standard `left` and `top` properties
	      else {
	              styles.left = left;
	              styles.top = top;
	          }

	      // any property present in `data.styles` will be applied to the popper,
	      // in this way we can make the 3rd party modifiers add custom styles to it
	      // Be aware, modifiers could override the properties defined in the previous
	      // lines of this modifier!
	      Object.assign(styles, data.styles);

	      setStyle(data.instance.popper, styles);

	      // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
	      // NOTE: 1 DOM access here
	      data.instance.popper.setAttribute('x-placement', data.placement);

	      // if the arrow style has been computed, apply the arrow style
	      if (data.offsets.arrow) {
	          setStyle(data.arrowElement, data.offsets.arrow);
	      }

	      return data;
	  }

	  /**
	   * Set the x-placement attribute before everything else because it could be used to add margins to the popper
	   * margins needs to be calculated to get the correct popper offsets
	   * @method
	   * @memberof Popper.modifiers
	   * @param {HTMLElement} reference - The reference element used to position the popper
	   * @param {HTMLElement} popper - The HTML element used as popper.
	   * @param {Object} options - Popper.js options
	   */
	  function applyStyleOnLoad(reference, popper, options) {
	      popper.setAttribute('x-placement', options.placement);
	  }

	  /**
	   * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
	   * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
	   * @method
	   * @memberof Modifiers
	   * @argument {Object} data - The data object generated by update method
	   * @argument {Object} options - Modifiers configuration and options
	   * @returns {Object} The data object, properly modified
	   */
	  function arrow(data, options) {
	      var arrow = options.element;

	      // if the arrowElement is a string, suppose it's a CSS selector
	      if (typeof arrow === 'string') {
	          arrow = data.instance.popper.querySelector(arrow);
	      }

	      // if arrow element is not found, don't run the modifier
	      if (!arrow) {
	          return data;
	      }

	      // the arrow element must be child of its popper
	      if (!data.instance.popper.contains(arrow)) {
	          console.warn('WARNING: `arrowElement` must be child of its popper element!');
	          return data;
	      }

	      // arrow depends on keepTogether in order to work
	      if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	          console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
	          return data;
	      }

	      var arrowStyle = {};
	      var placement = data.placement.split('-')[0];
	      var popper = getPopperClientRect(data.offsets.popper);
	      var reference = data.offsets.reference;
	      var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	      var len = isVertical ? 'height' : 'width';
	      var side = isVertical ? 'top' : 'left';
	      var altSide = isVertical ? 'left' : 'top';
	      var opSide = isVertical ? 'bottom' : 'right';
	      var arrowSize = getOuterSizes(arrow)[len];

	      //
	      // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
	      //

	      // top/left side
	      if (reference[opSide] - arrowSize < popper[side]) {
	          data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
	      }
	      // bottom/right side
	      if (reference[side] + arrowSize > popper[opSide]) {
	          data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
	      }

	      // compute center of the popper
	      var center = reference[side] + reference[len] / 2 - arrowSize / 2;

	      // Compute the sideValue using the updated popper offsets
	      var sideValue = center - getPopperClientRect(data.offsets.popper)[side];

	      // prevent arrow from being placed not contiguously to its popper
	      sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
	      arrowStyle[side] = sideValue;
	      arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

	      data.offsets.arrow = arrowStyle;
	      data.arrowElement = arrow;

	      return data;
	  }

	  /**
	   * Get the opposite placement of the given one/
	   * @method
	   * @memberof Popper.Utils
	   * @argument {String} placement
	   * @returns {String} flipped placement
	   */
	  function getOppositePlacement(placement) {
	    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	    return placement.replace(/left|right|bottom|top/g, function (matched) {
	      return hash[matched];
	    });
	  }

	  /**
	   * Get the opposite placement variation of the given one/
	   * @method
	   * @memberof Popper.Utils
	   * @argument {String} placement variation
	   * @returns {String} flipped placement variation
	   */
	  function getOppositeVariation(variation) {
	      if (variation === 'end') {
	          return 'start';
	      } else if (variation === 'start') {
	          return 'end';
	      }
	      return variation;
	  }

	  /**
	   * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * **NOTE:** data.instance modifier will run all its previous modifiers everytime it tries to flip the popper!
	   * @method
	   * @memberof Modifiers
	   * @argument {Object} data - The data object generated by update method
	   * @argument {Object} options - Modifiers configuration and options
	   * @returns {Object} The data object, properly modified
	   */
	  function flip(data, options) {
	      // check if preventOverflow is in the list of modifiers before the flip modifier.
	      // otherwise flip would not work as expected.
	      if (!isModifierRequired(data.instance.modifiers, 'flip', 'preventOverflow')) {
	          console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
	          return data;
	      }

	      if (data.flipped && data.placement === data.originalPlacement) {
	          // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	          return data;
	      }

	      var placement = data.placement.split('-')[0];
	      var placementOpposite = getOppositePlacement(placement);
	      var variation = data.placement.split('-')[1] || '';

	      var flipOrder = [];

	      if (options.behavior === 'flip') {
	          flipOrder = [placement, placementOpposite];
	      } else {
	          flipOrder = options.behavior;
	      }

	      flipOrder.forEach(function (step, index) {
	          if (placement !== step || flipOrder.length === index + 1) {
	              return data;
	          }

	          placement = data.placement.split('-')[0];
	          placementOpposite = getOppositePlacement(placement);

	          var popperOffsets = getPopperClientRect(data.offsets.popper);

	          // this boolean is used to distinguish right and bottom from top and left
	          // they need different computations to get flipped
	          var a = ['right', 'bottom'].indexOf(placement) !== -1;
	          var b = ['top', 'bottom'].indexOf(placement) !== -1;

	          // using Math.floor because the reference offsets may contain decimals we are not going to consider here
	          var flippedPosition = a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite]);

	          var flippedVariation = options.flipVariations && (b && variation === 'start' && Math.floor(popperOffsets.left) < Math.floor(data.boundaries.left) || b && variation === 'end' && Math.floor(popperOffsets.right) > Math.floor(data.boundaries.right) || !b && variation === 'start' && Math.floor(popperOffsets.top) < Math.floor(data.boundaries.top) || !b && variation === 'end' && Math.floor(popperOffsets.bottom) > Math.floor(data.boundaries.bottom));

	          if (flippedPosition || flippedVariation) {
	              // this boolean to detect any flip loop
	              data.flipped = true;

	              if (flippedPosition) {
	                  placement = flipOrder[index + 1];
	              }
	              if (flippedVariation) {
	                  variation = getOppositeVariation(variation);
	              }

	              data.placement = placement + (variation ? '-' + variation : '');
	              data.offsets.popper = getOffsets(data.instance.state, data.instance.popper, data.instance.reference, data.placement).popper;

	              data = runModifiers(data.instance.modifiers, data.instance.options, data, 'flip');
	          }
	      });
	      return data;
	  }

	  /**
	   * Modifier used to make sure the popper is always near its reference element
	   * It cares only about the first axis, you can still have poppers with margin
	   * between the popper and its reference element.
	   * @method
	   * @memberof Modifiers
	   * @argument {Object} data - The data object generated by update method
	   * @argument {Object} options - Modifiers configuration and options
	   * @returns {Object} The data object, properly modified
	   */
	  function keepTogether(data) {
	      var popper = getPopperClientRect(data.offsets.popper);
	      var reference = data.offsets.reference;
	      var f = Math.floor;
	      var placement = data.placement.split('-')[0];

	      if (['top', 'bottom'].indexOf(placement) !== -1) {
	          if (popper.right < f(reference.left)) {
	              data.offsets.popper.left = f(reference.left) - popper.width;
	          }
	          if (popper.left > f(reference.right)) {
	              data.offsets.popper.left = f(reference.right);
	          }
	      } else {
	          if (popper.bottom < f(reference.top)) {
	              data.offsets.popper.top = f(reference.top) - popper.height;
	          }
	          if (popper.top > f(reference.bottom)) {
	              data.offsets.popper.top = f(reference.bottom);
	          }
	      }

	      return data;
	  }

	  /**
	   * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
	   * The offsets will shift the popper on the side of its reference element.
	   * @method
	   * @memberof Modifiers
	   * @argument {Object} data - The data object generated by update method
	   * @argument {Object} options - Modifiers configuration and options
	   * @argument {Number|String} options.offset=0
	   *      Basic usage allows a number used to nudge the popper by the given amount of pixels.
	   *      You can pass a percentage value as string (eg. `20%`) to nudge by the given percentage (relative to reference element size)
	   *      Other supported units are `vh` and `vw` (relative to viewport)
	   *      Additionally, you can pass a pair of values (eg. `10 20` or `2vh 20%`) to nudge the popper
	   *      on both axis.
	   *      A note about percentage values, if you want to refer a percentage to the popper size instead of the reference element size,
	   *      use `%p` instead of `%` (eg: `20%p`). To make it clearer, you can replace `%` with `%r` and use eg.`10%p 25%r`.
	   *      > **Heads up!** The order of the axis is relative to the popper placement: `bottom` or `top` are `X,Y`, the other are `Y,X`
	   * @returns {Object} The data object, properly modified
	   */
	  function offset(data, options) {
	      var placement = data.placement;
	      var popper = data.offsets.popper;

	      var offsets = void 0;
	      if (isNumeric(options.offset)) {
	          offsets = [options.offset, 0];
	      } else {
	          // split the offset in case we are providing a pair of offsets separated
	          // by a blank space
	          offsets = options.offset.split(' ');

	          // itherate through each offset to compute them in case they are percentages
	          offsets = offsets.map(function (offset, index) {
	              // separate value from unit
	              var split = offset.match(/(\d*\.?\d*)(.*)/);
	              var value = +split[1];
	              var unit = split[2];

	              // use height if placement is left or right and index is 0
	              // otherwise use height
	              // in this way the first offset will use an axis and the second one
	              // will use the other one
	              var useHeight = placement.indexOf('right') !== -1 || placement.indexOf('left') !== -1;

	              if (index === 1) {
	                  useHeight = !useHeight;
	              }

	              // if is a percentage, we calculate the value of it using as base the
	              // sizes of the reference element
	              if (unit === '%' || unit === '%r') {
	                  var referenceRect = getPopperClientRect(data.offsets.reference);
	                  var len = void 0;
	                  if (useHeight) {
	                      len = referenceRect.height;
	                  } else {
	                      len = referenceRect.width;
	                  }
	                  return len / 100 * value;
	              }
	              // if is a percentage relative to the popper, we calculate the value of it using
	              // as base the sizes of the popper
	              else if (unit === '%p') {
	                      var popperRect = getPopperClientRect(data.offsets.popper);
	                      var _len = void 0;
	                      if (useHeight) {
	                          _len = popperRect.height;
	                      } else {
	                          _len = popperRect.width;
	                      }
	                      return _len / 100 * value;
	                  }
	                  // if is a vh or vw, we calculate the size based on the viewport
	                  else if (unit === 'vh' || unit === 'vw') {
	                          var size = void 0;
	                          if (unit === 'vh') {
	                              size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	                          } else {
	                              size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	                          }
	                          return size / 100 * value;
	                      }
	                      // if is an explicit pixel unit, we get rid of the unit and keep the value
	                      else if (unit === 'px') {
	                              return +value;
	                          }
	                          // if is an implicit unit, it's px, and we return just the value
	                          else {
	                                  return +offset;
	                              }
	          });
	      }

	      if (data.placement.indexOf('left') !== -1) {
	          popper.top += offsets[0];
	          popper.left -= offsets[1] || 0;
	      } else if (data.placement.indexOf('right') !== -1) {
	          popper.top += offsets[0];
	          popper.left += offsets[1] || 0;
	      } else if (data.placement.indexOf('top') !== -1) {
	          popper.left += offsets[0];
	          popper.top -= offsets[1] || 0;
	      } else if (data.placement.indexOf('bottom') !== -1) {
	          popper.left += offsets[0];
	          popper.top += offsets[1] || 0;
	      }
	      return data;
	  }

	  /**
	   * Modifier used to make sure the popper does not overflows from it's boundaries
	   * @method
	   * @memberof Modifiers
	   * @argument {Object} data - The data object generated by `update` method
	   * @argument {Object} options - Modifiers configuration and options
	   * @returns {Object} The data object, properly modified
	   */
	  function preventOverflow(data, options) {
	      function shouldMoveWithTarget(direction) {
	          if (!options.moveWithTarget) {
	              return false;
	          }
	          var placement = data.originalPlacement.split('-')[0];

	          if (data.flipped && placement === direction || placement === getOppositePlacement(direction)) {
	              return true;
	          }
	          if (placement !== direction && placement !== getOppositePlacement(direction)) {
	              return true;
	          }

	          return false;
	      }
	      var order = options.priority;
	      var popper = getPopperClientRect(data.offsets.popper);

	      var check = {
	          left: function left() {
	              var left = popper.left;
	              if (popper.left < data.boundaries.left && !shouldMoveWithTarget('left')) {
	                  left = Math.max(popper.left, data.boundaries.left);
	              }
	              return { left: left };
	          },
	          right: function right() {
	              var left = popper.left;
	              if (popper.right > data.boundaries.right && !shouldMoveWithTarget('right')) {
	                  left = Math.min(popper.left, data.boundaries.right - popper.width);
	              }
	              return { left: left };
	          },
	          top: function top() {
	              var top = popper.top;
	              if (popper.top < data.boundaries.top && !shouldMoveWithTarget('top')) {
	                  top = Math.max(popper.top, data.boundaries.top);
	              }
	              return { top: top };
	          },
	          bottom: function bottom() {
	              var top = popper.top;
	              if (popper.bottom > data.boundaries.bottom && !shouldMoveWithTarget('bottom')) {
	                  top = Math.min(popper.top, data.boundaries.bottom - popper.height);
	              }
	              return { top: top };
	          }
	      };

	      order.forEach(function (direction) {
	          data.offsets.popper = Object.assign(popper, check[direction]());
	      });

	      return data;
	  }

	  /**
	   * Modifier used to shift the popper on the start or end of its reference element side
	   * @method
	   * @memberof Modifiers
	   * @argument {Object} data - The data object generated by `update` method
	   * @argument {Object} options - Modifiers configuration and options
	   * @returns {Object} The data object, properly modified
	   */
	  function shift(data) {
	      var placement = data.placement;
	      var basePlacement = placement.split('-')[0];
	      var shiftvariation = placement.split('-')[1];

	      // if shift shiftvariation is specified, run the modifier
	      if (shiftvariation) {
	          var reference = data.offsets.reference;
	          var popper = getPopperClientRect(data.offsets.popper);

	          var shiftOffsets = {
	              y: {
	                  start: { top: reference.top },
	                  end: { top: reference.top + reference.height - popper.height }
	              },
	              x: {
	                  start: { left: reference.left },
	                  end: { left: reference.left + reference.width - popper.width }
	              }
	          };

	          var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

	          data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftvariation]);
	      }

	      return data;
	  }

	  /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set an x-hidden attribute which can be used to hide
	   * the popper when its reference is out of boundaries.
	   * @method
	   * @memberof Modifiers
	   * @argument {Object} data - The data object generated by update method
	   * @argument {Object} options - Modifiers configuration and options
	   * @returns {Object} The data object, properly modified
	   */
	  function hide(data) {
	      var refRect = data.offsets.reference;
	      var bound = data.boundaries;

	      if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	          data.hide = true;
	          data.instance.popper.setAttribute('x-out-of-boundaries', '');
	      } else {
	          data.hide = false;
	          data.instance.popper.removeAttribute('x-out-of-boundaries');
	      }

	      return data;
	  }

	  /**
	   * Modifiers are plugins used to alter the behavior of your poppers.
	   * Popper.js uses a set of 7 modifiers to provide all the basic functionalities
	   * needed by the library.
	   *
	   * Each modifier is an object containing several properties listed below.
	   * @namespace Modifiers
	   * @param {Object} modifier - Modifier descriptor
	   * @param {Integer} modifier.order
	   *      The `order` property defines the execution order of the modifiers.
	   *      The built-in modifiers have orders with a gap of 100 units in between,
	   *      this allows you to inject additional modifiers between the existing ones
	   *      without having to redefine the order of all of them.
	   *      The modifiers are executed starting from the one with the lowest order.
	   * @param {Boolean} modifier.enabled - When `true`, the modifier will be used.
	   * @param {Modifiers~modifier} modifier.function - Modifier function.
	   * @param {Modifiers~onLoad} modifier.onLoad - Function executed on popper initalization
	   * @return {Object} data - Each modifier must return the modified `data` object.
	   */

	  var modifiersFunctions = {
	    applyStyle: applyStyle,
	    arrow: arrow,
	    flip: flip,
	    keepTogether: keepTogether,
	    offset: offset,
	    preventOverflow: preventOverflow,
	    shift: shift,
	    hide: hide
	  };

	  var modifiersOnLoad = {
	    applyStyleOnLoad: applyStyleOnLoad
	  };

	  /**
	   * Modifiers can edit the `data` object to change the beheavior of the popper.
	   * This object contains all the informations used by Popper.js to compute the
	   * popper position.
	   * The modifier can edit the data as needed, and then `return` it as result.
	   *
	   * @callback Modifiers~modifier
	   * @param {dataObject} data
	   * @return {dataObject} modified data
	   */

	  /**
	   * The `dataObject` is an object containing all the informations used by Popper.js
	   * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	   * @name dataObject
	   * @property {Object} data.instance The Popper.js instance
	   * @property {String} data.placement Placement applied to popper
	   * @property {String} data.originalPlacement Placement originally defined on init
	   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
	   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	   * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
	   * @property {Object} data.boundaries Offsets of the popper boundaries
	   * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
	   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	   * @property {Object} data.offsets.arro] `top` and `left` offsets, only one of them will be different from 0
	   */

	  var classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };

	  var createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  // default options
	  var DEFAULTS = {
	      // placement of the popper
	      placement: 'bottom',

	      // if true, it uses the CSS 3d transformation to position the popper
	      gpuAcceleration: true,

	      // the element which will act as boundary of the popper
	      boundariesElement: 'viewport',

	      // amount of pixel used to define a minimum distance between the boundaries and the popper
	      boundariesPadding: 5,

	      // list of functions used to modify the offsets before they are applied to the popper
	      modifiers: {
	          shift: {
	              order: 100,
	              enabled: true,
	              function: modifiersFunctions.shift
	          },
	          offset: {
	              order: 200,
	              enabled: true,
	              function: modifiersFunctions.offset,
	              // nudges popper from its origin by the given amount of pixels (can be negative)
	              offset: 0
	          },
	          preventOverflow: {
	              order: 300,
	              enabled: true,
	              function: modifiersFunctions.preventOverflow,
	              // popper will try to prevent overflow following these priorities
	              //  by default, then, it could overflow on the left and on top of the boundariesElement
	              priority: ['left', 'right', 'top', 'bottom']
	          },
	          keepTogether: {
	              order: 400,
	              enabled: true,
	              function: modifiersFunctions.keepTogether
	          },
	          arrow: {
	              order: 500,
	              enabled: true,
	              function: modifiersFunctions.arrow,
	              // selector or node used as arrow
	              element: '[x-arrow]'
	          },
	          flip: {
	              order: 600,
	              enabled: true,
	              function: modifiersFunctions.flip,
	              // the behavior used to change the popper's placement
	              behavior: 'flip'
	          },
	          hide: {
	              order: 700,
	              enabled: true,
	              function: modifiersFunctions.hide
	          },
	          applyStyle: {
	              order: 800,
	              enabled: true,
	              function: modifiersFunctions.applyStyle,
	              onLoad: modifiersOnLoad.applyStyleOnLoad
	          }
	      }
	  };

	  /**
	   * Create a new Popper.js instance
	   * @class Popper
	   * @param {HTMLElement} reference - The reference element used to position the popper
	   * @param {HTMLElement} popper - The HTML element used as popper.
	   * @param {Object} options
	   * @param {String} options.placement=bottom
	   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
	   *      left(-start, -end)`
	   *
	   * @param {Boolean} options.gpuAcceleration=true
	   *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
	   *      browser to use the GPU to accelerate the rendering.
	   *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
	   *
	   * @param {String|Element} options.boundariesElement='viewport'
	   *      The element which will define the boundaries of the popper position, the popper will never be placed outside
	   *      of the defined boundaries (except if `keepTogether` is enabled)
	   *
	   * @param {Number} options.boundariesPadding=5
	   *      Additional padding for the boundaries
	   *
	   * @param {Boolean} options.removeOnDestroy=false
	   *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
	   *
	   * @param {Object} options.modifiers
	   *      List of functions used to modify the data before they are applied to the popper (see source code for default values)
	   *
	   * @param {Object} options.modifiers.arrow - Arrow modifier configuration
	   * @param {HTMLElement|String} options.modifiers.arrow.element='[x-arrow]'
	   *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
	   *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
	   *      reference element.
	   *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
	   *
	   * @param {Object} options.modifiers.offset - Offset modifier configuration
	   * @param {Number} options.modifiers.offset.offset=0
	   *      Amount of pixels the popper will be shifted (can be negative).
	   *
	   * @param {Object} options.modifiers.preventOverflow - PreventOverflow modifier configuration
	   * @param {Array} [options.modifiers.preventOverflow.priority=['left', 'right', 'top', 'bottom']]
	   *      Priority used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
	   *      this means that the last one will never overflow
	   *
	   * @param {Object} options.modifiers.flip - Flip modifier configuration
	   * @param {String|Array} options.modifiers.flip.behavior='flip'
	   *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
	   *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
	   *      its axis (`right - left`, `top - bottom`).
	   *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
	   *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
	   *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
	   *
	   * @return {Object} instance - The generated Popper.js instance
	   */

	  var Popper = function () {
	      function Popper(reference, popper) {
	          var _this = this;

	          var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	          classCallCheck(this, Popper);
	          this.Defaults = DEFAULTS;

	          // init state
	          this.state = {
	              isDestroyed: false
	          };

	          // get reference and popper elements (allow jQuery wrappers)
	          this.reference = reference.jquery ? reference[0] : reference;
	          this.popper = popper.jquery ? popper[0] : popper;

	          // with {} we create a new object with the options inside it
	          this.options = Object.assign({}, DEFAULTS, options);

	          // refactoring modifiers' list (Object => Array)
	          this.modifiers = Object.keys(DEFAULTS.modifiers).map(function (name) {
	              return Object.assign({ name: name }, DEFAULTS.modifiers[name]);
	          });

	          // assign default values to modifiers, making sure to override them with
	          // the ones defined by user
	          this.modifiers = this.modifiers.map(function (defaultConfig) {
	              var userConfig = options.modifiers && options.modifiers[defaultConfig.name] || {};
	              var finalConfig = Object.assign({}, defaultConfig, userConfig);
	              return finalConfig;
	          });

	          // add custom modifiers to the modifiers list
	          if (options.modifiers) {
	              Object.keys(options.modifiers).forEach(function (name) {
	                  // take in account only custom modifiers
	                  if (DEFAULTS.modifiers[name] === undefined) {
	                      var modifier = options.modifiers[name];
	                      modifier.name = name;
	                      _this.modifiers.push(modifier);
	                  }
	              });
	          }

	          // sort the modifiers by order
	          this.modifiers = this.modifiers.sort(sortModifiers);

	          // modifiers have the ability to execute arbitrary code when Popper.js get inited
	          // such code is executed in the same order of its modifier
	          this.modifiers.forEach(function (modifier) {
	              if (modifier.enabled && isFunction(modifier.onLoad)) {
	                  modifier.onLoad(_this.reference, _this.popper, _this.options);
	              }
	          });

	          // get the popper position type
	          this.state.position = getPosition(this.popper, this.reference);

	          // determine how we should set the origin of offsets
	          this.state.isParentTransformed = isTransformed(this.popper.parentNode);

	          // fire the first update to position the popper in the right place
	          this.update(true);

	          // setup event listeners, they will take care of update the position in specific situations
	          setupEventListeners(this.reference, this.options, this.state, function () {
	              return _this.update();
	          });

	          // make it chainable
	          return this;
	      }

	      //
	      // Methods
	      //

	      /**
	       * Updates the position of the popper, computing the new offsets and applying the new style
	       * @method
	       * @param {Boolean} isFirstCall
	       *      When true, the onCreate callback is called, otherwise it calls the onUpdate callback
	       * @memberof Popper
	       */


	      createClass(Popper, [{
	          key: 'update',
	          value: function update(isFirstCall) {
	              var _this2 = this;

	              var data = { instance: this, styles: {} };

	              // make sure to apply the popper position before any computation
	              this.state.position = getPosition(this.popper, this.reference);
	              setStyle(this.popper, { position: this.state.position });

	              // to avoid useless computations we throttle the popper position refresh to 60fps
	              window.requestAnimationFrame(function () {
	                  // if popper is destroyed, don't perform any further update
	                  if (_this2.state.isDestroyed) {
	                      return;
	                  }

	                  var now = window.performance.now();
	                  if (now - _this2.state.lastFrame <= 16) {
	                      // this update fired to early! drop it
	                      // but schedule a new one that will be ran at the end of the updates
	                      // chain to make sure everything is proper updated
	                      return _this2.update();
	                  }
	                  _this2.state.lastFrame = now;

	                  // store placement inside the data object, modifiers will be able to edit `placement` if needed
	                  // and refer to originalPlacement to know the original value
	                  data.placement = _this2.options.placement;
	                  data.originalPlacement = _this2.options.placement;

	                  // compute the popper and reference offsets and put them inside data.offsets
	                  data.offsets = getOffsets(_this2.state, _this2.popper, _this2.reference, data.placement);

	                  // get boundaries
	                  data.boundaries = getBoundaries(_this2.popper, data, _this2.options.boundariesPadding, _this2.options.boundariesElement);

	                  // run the modifiers
	                  data = runModifiers(_this2.modifiers, _this2.options, data);

	                  // the first `update` will call `onCreate` callback
	                  // the other ones will call `onUpdate` callback
	                  if (isFirstCall && isFunction(_this2.state.createCalback)) {
	                      _this2.state.createCalback(data);
	                  } else if (!isFirstCall && isFunction(_this2.state.updateCallback)) {
	                      _this2.state.updateCallback(data);
	                  }
	              });
	          }

	          /**
	           * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
	           * @method
	           * @memberof Popper
	           * @param {createCallback} callback
	           */

	      }, {
	          key: 'onCreate',
	          value: function onCreate(callback) {
	              // the createCallbacks return as first argument the popper instance
	              this.state.createCalback = callback;
	              return this;
	          }

	          /**
	           * Callback called when the popper is created.
	           * Access Popper.js instance with `data.instance`.
	           * @callback createCallback
	           * @static
	           * @param {dataObject} data
	           */

	          /**
	           * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
	           * used to style popper and its arrow.
	           * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
	           * @method
	           * @memberof Popper
	           * @param {updateCallback} callback
	           */

	      }, {
	          key: 'onUpdate',
	          value: function onUpdate(callback) {
	              this.state.updateCallback = callback;
	              return this;
	          }

	          /**
	           * Callback called when the popper is updated, this callback is not called
	           * on the initialization/creation of the popper, but only on subsequent
	           * updates.
	           * Access Popper.js instance with `data.instance`.
	           * @callback updateCallback
	           * @static
	           * @param {dataObject} data
	           */

	          /**
	           * Destroy the popper
	           * @method
	           * @memberof Popper
	           */

	      }, {
	          key: 'destroy',
	          value: function destroy() {
	              this.state.isDestroyed = true;
	              this.popper.removeAttribute('x-placement');
	              this.popper.style.left = '';
	              this.popper.style.position = '';
	              this.popper.style.top = '';
	              this.popper.style[getSupportedPropertyName('transform')] = '';
	              this.state = removeEventListeners(this.reference, this.state, this.options);

	              // remove the popper if user explicity asked for the deletion on destroy
	              // do not use `remove` because IE11 doesn't support it
	              if (this.options.removeOnDestroy) {
	                  this.popper.parentNode.removeChild(this.popper);
	              }
	              return this;
	          }

	          /**
	           * Collection of utilities useful when writing custom modifiers
	           * @memberof Popper
	           */


	          /**
	           * Default Popper.js options
	           * @memberof Popper
	           */

	      }]);
	      return Popper;
	  }();

	  Popper.Utils = Utils;

	  return Popper;

	}));

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validDate = validDate;
	exports.isToday = isToday;
	exports.getCalendarMatrix = getCalendarMatrix;

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validDate(date) {
	  return date && (0, _moment2.default)(date).isValid();
	}

	function isToday(date) {
	  return date.isSame((0, _moment2.default)(), 'day');
	}

	function getCalendarMatrix(date) {
	  var year = date.year();
	  var month = date.month();
	  var hour = date.hour();
	  var minute = date.minute();
	  var second = date.second();
	  var daysInMonth = date.daysInMonth();
	  var firstDay = (0, _moment2.default)([year, month, 1]);
	  var lastDay = (0, _moment2.default)([year, month, daysInMonth]);
	  var lastMonth = (0, _moment2.default)(firstDay).subtract(1, 'month').month();
	  var lastYear = (0, _moment2.default)(firstDay).subtract(1, 'month').year();
	  var daysInLastMonth = (0, _moment2.default)([lastYear, lastMonth]).daysInMonth();
	  var dayOfWeek = firstDay.day();
	  var firstDayOfWeek = _moment2.default.localeData().firstDayOfWeek();
	  var matrix = [];
	  var i = void 0;
	  var col = void 0;
	  var row = void 0;
	  matrix.firstDay = firstDay;
	  matrix.lastDay = lastDay;
	  for (i = 0; i < 6; i++) {
	    matrix[i] = [];
	  }

	  var startDay = daysInLastMonth - dayOfWeek + firstDayOfWeek + 1;
	  if (startDay > daysInLastMonth) {
	    startDay -= 7;
	  }
	  if (dayOfWeek === firstDayOfWeek) {
	    startDay = daysInLastMonth - 6;
	  }
	  var curDate = (0, _moment2.default)([lastYear, lastMonth, startDay, 12, minute, second]);
	  for (i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = curDate.clone().add(24, 'hour')) {
	    if (i > 0 && col % 7 === 0) {
	      col = 0;
	      row++;
	    }
	    matrix[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
	    curDate.hour(12);
	  }
	  return matrix;
	}

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkBreadcrumb',
	  props: {
	    location: {
	      type: String,
	      default: '/'
	    }
	  },
	  render: function render(h) {
	    var crumbs = this.$slots.default.filter(function (node) {
	      return node.componentOptions && node.componentOptions.tag === 'vk-breadcrumb-item';
	    });
	    return h(
	      'ul',
	      { 'class': 'uk-breadcrumb' },
	      [crumbs]
	    );
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkBreadcrumbItem',
	  props: {
	    path: {
	      type: String,
	      default: '/'
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.path === this.$parent.location;
	    }
	  },
	  render: function render(h) {
	    var _this = this;

	    var name = this.$slots.default;
	    var content = void 0;
	    if (!this.disabled && !this.active) {
	      content = h(
	        'a',
	        {
	          on: {
	            'click': function click(event) {
	              event.preventDefault();
	              _this.$parent.$emit('change', _this.path);
	            }
	          }
	        },
	        [name]
	      );
	    } else {
	      content = h(
	        'span',
	        null,
	        [name]
	      );
	    }
	    return h(
	      'li',
	      { 'class': {
	          'uk-active': this.active
	        } },
	      [content]
	    );
	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _babelHelperVueJsxMergeProps = __webpack_require__(8);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	var _defineProperty2 = __webpack_require__(15);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkButton',
	  props: {
	    value: {},
	    type: {
	      type: String,
	      default: 'button'
	    },
	    ariaType: {
	      type: String,
	      default: 'pressed'
	    },
	    active: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },

	    color: {
	      type: String,
	      default: ''
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    width: {
	      type: String,
	      default: ''
	    }
	  },
	  render: function render(h) {
	    var _class;

	    var data = {
	      attrs: (0, _defineProperty3.default)({}, 'aria-' + this.ariaType, '' + this.active),
	      class: (_class = {
	        'uk-button': true,
	        'uk-active': this.active
	      }, (0, _defineProperty3.default)(_class, 'uk-width-' + this.width, this.width), (0, _defineProperty3.default)(_class, 'uk-button-primary', this.color === 'primary'), (0, _defineProperty3.default)(_class, 'uk-button-success', this.color === 'success'), (0, _defineProperty3.default)(_class, 'uk-button-danger', this.color === 'danger'), (0, _defineProperty3.default)(_class, 'uk-button-link', this.color === 'link'), (0, _defineProperty3.default)(_class, 'uk-button-mini', this.size === 'mini'), (0, _defineProperty3.default)(_class, 'uk-button-small', this.size === 'small'), (0, _defineProperty3.default)(_class, 'uk-button-large', this.size === 'large'), _class)
	    };
	    return h(
	      'button',
	      (0, _babelHelperVueJsxMergeProps2.default)([{
	        attrs: { type: this.type, disabled: this.disabled }
	      }, data]),
	      [this.$slots.default]
	    );
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(2);

	exports.default = {
	  name: 'VkButtonCheckbox',
	  props: {
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    group: {
	      type: Boolean,
	      default: true
	    }
	  },
	  render: function render(h) {
	    var _this = this;

	    (0, _util.each)(this.$slots.default, function (node) {
	      if (node.componentOptions) {
	        var button = node.componentOptions.propsData;
	        button.ariaType = 'checked';
	        button.active = (0, _util.inArray)(_this.value, button.value);
	      }
	    });
	    return h(
	      'div',
	      { 'class': {
	          'uk-button-group': this.group
	        } },
	      [this.$slots.default]
	    );
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    (0, _util.each)(this.$children, function (button) {
	      button.$el.addEventListener('click', function () {
	        return _this2.toggle(button);
	      });
	    });
	  },

	  methods: {
	    toggle: function toggle(selected) {
	      var value = this.$children.filter(function (button) {
	        return button === selected ? !button.active : button.active;
	      }).map(function (button) {
	        return button.value;
	      });
	      this.$emit('change', value);
	    }
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(2);

	exports.default = {
	  name: 'VkButtonRadio',
	  props: {
	    value: {},
	    group: {
	      type: Boolean,
	      default: true
	    }
	  },
	  render: function render(h) {
	    var _this = this;

	    (0, _util.each)(this.$slots.default, function (node) {
	      if (node.componentOptions) {
	        var button = node.componentOptions.propsData;
	        button.ariaType = 'checked';
	        button.active = button.value === _this.value;
	      }
	    });
	    return h(
	      'div',
	      { 'class': {
	          'uk-button-group': this.group
	        } },
	      [this.$slots.default]
	    );
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    (0, _util.each)(this.$children, function (button) {
	      button.$el.addEventListener('click', function () {
	        return _this2.$emit('change', button.value);
	      });
	    });
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  functional: true,
	  props: ['date'],
	  render: function render(h, _ref) {
	    var parent = _ref.parent,
	        props = _ref.props,
	        data = _ref.data;

	    if (parent.dateRender) {
	      return h({
	        functional: true,
	        props: ['date'],
	        render: parent.dateRender
	      }, {
	        props: {
	          date: props.date
	        }
	      });
	    } else {
	      return h(
	        'a',
	        { 'class': {
	            'uk-datepicker-table-muted': props.date.month() !== parent.month
	          } },
	        [props.date.format('D')]
	      );
	    }
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  functional: true,
	  render: function render(h, _ref) {
	    var parent = _ref.parent;

	    return h(
	      "div",
	      { "class": "uk-datepicker-nav" },
	      [parent.isDisplayable(parent.prevMonth) && h(
	        "a",
	        { "class": "uk-datepicker-previous",
	          on: {
	            "click": function click(e) {
	              e.preventDefault();
	              parent.$emit('change', parent.prevMonth);
	            }
	          }
	        },
	        []
	      ), parent.isDisplayable(parent.nextMonth) && h(
	        "a",
	        { "class": "uk-datepicker-next",
	          on: {
	            "click": function click(e) {
	              e.preventDefault();
	              parent.$emit('change', parent.nextMonth);
	            }
	          }
	        },
	        []
	      ), h(
	        "div",
	        { "class": "uk-datepicker-heading" },
	        [h(Select, {
	          props: {
	            value: parent.selectedMonth,
	            display: parent.date.format('MMMM'),
	            options: parent.listMonths,
	            onChange: function onChange(e) {
	              parent.selectedMonth = e.target.selectedOptions[0].value;
	            }
	          }
	        }), "\xA0", h(Select, {
	          props: {
	            value: parent.selectedYear,
	            display: parent.date.format('YYYY'),
	            options: parent.listYears,
	            onChange: function onChange(e) {
	              parent.selectedYear = e.target.selectedOptions[0].value;
	            }
	          }
	        })]
	      )]
	    );
	  }
	};


	var Select = {
	  functional: true,
	  props: ['value', 'display', 'options', 'onChange'],
	  render: function render(h, _ref2) {
	    var parent = _ref2.parent,
	        props = _ref2.props;

	    return h('span', {
	      class: 'uk-form-select'
	    }, [h('a', {
	      on: {
	        click: function click(e) {
	          return e.preventDefault();
	        }
	      }
	    }, [props.display]), h('select', {
	      domProps: {
	        value: props.value
	      },
	      on: {
	        change: props.onChange
	      }
	    }, [props.options.map(function (option) {
	      return h('option', { domProps: {
	          value: option.value
	        } }, [option.text]);
	    })])]);
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isInteger = __webpack_require__(35);

	var _isInteger2 = _interopRequireDefault(_isInteger);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _render = __webpack_require__(60);

	var _render2 = _interopRequireDefault(_render);

	var _moment3 = __webpack_require__(93);

	var _moment4 = _interopRequireDefault(_moment3);

	var _date = __webpack_require__(51);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkCalendar',
	  mixins: [_moment4.default],
	  render: _render2.default,
	  props: {
	    year: {
	      type: Number,
	      default: function _default() {
	        return new Date().getFullYear();
	      }
	    },

	    month: {
	      type: Number, default: function _default() {
	        return new Date().getMonth();
	      }
	    },

	    min: {
	      type: [String, Number, Object, Array],
	      default: '1980-01-01',
	      validator: _date.validDate
	    },

	    max: {
	      type: [String, Number, Object, Array],
	      default: '2050-12-31',
	      validator: _date.validDate
	    },
	    locale: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    dateRender: {
	      type: [Function, Boolean],
	      default: false
	    }
	  },
	  computed: {
	    selectedYear: {
	      get: function get() {
	        return this.year;
	      },
	      set: function set(year) {
	        var date = this.$moment().set({ year: year, month: this.month });
	        this.$emit('change', date);
	      }
	    },
	    selectedMonth: {
	      get: function get() {
	        return this.month;
	      },
	      set: function set(month) {
	        var date = this.$moment().set({ year: this.year, month: month });
	        this.$emit('change', date);
	      }
	    },
	    date: function date() {
	      return this.$moment().set({ year: this.year, month: this.month });
	    },
	    weeks: function weeks() {
	      return (0, _date.getCalendarMatrix)(this.date);
	    },
	    prevMonth: function prevMonth() {
	      return this.date.clone().subtract(1, 'month');
	    },
	    nextMonth: function nextMonth() {
	      return this.date.clone().add(1, 'month');
	    },
	    minMoment: function minMoment() {
	      return (0, _isInteger2.default)(this.min) ? this.$moment().add(-this.min - 1, 'days') : this.$moment(this.min || this.$options.props.min.default);
	    },
	    maxMoment: function maxMoment() {
	      return (0, _isInteger2.default)(this.max) ? this.$moment().add(this.max, 'days') : this.$moment(this.max || this.$options.props.max.default);
	    },
	    listYears: function listYears() {
	      var dates = [];
	      var currentDate = (0, _moment2.default)(this.minMoment);
	      while (currentDate <= this.maxMoment) {
	        dates.push({
	          text: currentDate.year(),
	          value: currentDate.year()
	        });
	        currentDate = (0, _moment2.default)(currentDate).add(1, 'year');
	      }
	      return dates;
	    },
	    listMonths: function listMonths() {
	      var currentYear = this.year;
	      var min = this.minMoment;
	      var max = this.maxMoment;
	      var inMinYear = currentYear === min.year();
	      var inMaxYear = currentYear === max.year();
	      var months = [];
	      _moment2.default.months().forEach(function (name, m) {
	        if ((!inMinYear || m >= min.month()) && (!inMaxYear || m <= max.month())) {
	          months.push({ text: name, value: m });
	        }
	      });
	      return months;
	    }
	  },
	  methods: {
	    isToday: _date.isToday,
	    isDisplayable: function isDisplayable(moment) {
	      return moment.isBetween(this.minMoment, this.maxMoment);
	    }
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _range2 = __webpack_require__(49);

	var _range3 = _interopRequireDefault(_range2);

	exports.default = function (h) {
	  return h(
	    'div',
	    null,
	    [h(_Header2.default), h(
	      'table',
	      { 'class': 'uk-datepicker-table' },
	      [h(
	        'thead',
	        null,
	        [h(
	          'tr',
	          null,
	          [weekDays.map(function (day) {
	            return h('th', [day]);
	          })]
	        )]
	      ), h(
	        'tbody',
	        null,
	        [this.weeks.map(function (week) {
	          return h('tr', [week.map(function (date, index) {
	            return h('td', { key: index }, [h(_Field2.default, { props: { date: date } })]);
	          })]);
	        })]
	      )]
	    )]
	  );
	};

	var _Header = __webpack_require__(58);

	var _Header2 = _interopRequireDefault(_Header);

	var _Field = __webpack_require__(57);

	var _Field2 = _interopRequireDefault(_Field);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var weekDays = (0, _range3.default)(0, 7).map(function (val, index) {
	  return (0, _moment2.default)().weekday(index).format('ddd');
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isInteger = __webpack_require__(35);

	var _isInteger2 = _interopRequireDefault(_isInteger);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _render = __webpack_require__(62);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkDatepicker',
	  render: _render2.default,
	  props: {
	    year: {},
	    month: {},
	    dates: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    disabledDates: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },

	    min: {
	      type: [String, Number],
	      default: '1980-01-01'
	    },

	    max: {
	      type: [String, Number],
	      default: '2050-12-31'
	    }
	  },
	  computed: {
	    datesMoments: function datesMoments() {
	      return this.dates.map(function (d) {
	        return (0, _moment2.default)(d);
	      });
	    },
	    disabledDatesMoments: function disabledDatesMoments() {
	      return this.disabledDates.map(function (d) {
	        return (0, _moment2.default)(d);
	      });
	    },
	    minMoment: function minMoment() {
	      return (0, _isInteger2.default)(this.min) ? (0, _moment2.default)().add(-this.min - 1, 'days') : (0, _moment2.default)(this.min || this.$options.props.min.default);
	    },
	    maxMoment: function maxMoment() {
	      return (0, _isInteger2.default)(this.max) ? (0, _moment2.default)().add(this.max, 'days') : (0, _moment2.default)(this.max || this.$options.props.max.default);
	    }
	  },
	  methods: {
	    isPicked: function isPicked(date) {
	      return this.datesMoments.some(function (d) {
	        return d.format('YYYY-MM-DD') === date.format('YYYY-MM-DD');
	      });
	    },
	    isDisabled: function isDisabled(date) {
	      var _this = this;

	      return this.disabledDatesMoments.some(function (d) {
	        return d.format('YYYY-MM-DD') === date.format('YYYY-MM-DD') || !date.isBetween(_this.minMoment, _this.maxMoment);
	      });
	    },
	    toggle: function toggle(date) {
	      this.isPicked(date) ? this.$emit('unpick', date) : this.$emit('pick', date);
	    }
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (h) {
	  var _this = this;

	  return h(
	    'vk-calendar',
	    {
	      attrs: {
	        year: this.year,
	        month: this.month,
	        'date-render': dateRender
	      },
	      on: {
	        'change': function change(date) {
	          return _this.$emit('change', date);
	        }
	      }
	    },
	    []
	  );
	};

	var dateRender = function dateRender(h, _ref) {
	  var props = _ref.props,
	      parent = _ref.parent;

	  var $calendar = parent;
	  var $datepicker = parent.$parent;
	  return h(
	    'a',
	    { 'class': {
	        'uk-active': $datepicker.isPicked(props.date),
	        'uk-datepicker-table-disabled': $datepicker.isDisabled(props.date),
	        'uk-datepicker-table-muted': props.date.month() !== $calendar.month || $datepicker.isDisabled(props.date)
	      }, on: {
	        'click': function click() {
	          if (!$datepicker.isDisabled(props.date)) {
	            $datepicker.toggle(props.date);
	          }
	        }
	      }
	    },
	    [props.date.format('D')]
	  );
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _babelHelperVueJsxMergeProps = __webpack_require__(8);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	var _popper = __webpack_require__(50);

	var _popper2 = _interopRequireDefault(_popper);

	var _dom = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var onClick = void 0;
	var onTargetClick = void 0;
	var onMouseEnter = void 0;
	var onMouseLeave = void 0;

	exports.default = {
	  name: 'VkDropdown',
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    target: {
	      type: String,
	      default: ''
	    },
	    placement: {
	      type: String,
	      default: 'bottom-start'
	    },
	    blank: {
	      type: Boolean,
	      default: false
	    },
	    fixWidth: {
	      type: Boolean,
	      default: false
	    },
	    transition: {
	      type: String,
	      default: ''
	    },
	    scrollable: {
	      type: Boolean,
	      default: false
	    },
	    offset: {
	      type: String,
	      default: '0 5'
	    }
	  },
	  data: function data() {
	    return {
	      flipped: false
	    };
	  },
	  computed: {
	    popperOptions: function popperOptions() {
	      return {
	        placement: this.placement,
	        modifiers: {
	          offset: {
	            offset: this.offset
	          }
	        }
	      };
	    }
	  },
	  render: function render(h) {
	    var directives = [{
	      name: 'show', value: this.show
	    }];
	    return h(
	      'transition',
	      {
	        attrs: { name: this.transition }
	      },
	      [h(
	        'div',
	        (0, _babelHelperVueJsxMergeProps2.default)([{ directives: directives }, { 'class': {
	            'uk-dropdown': !this.blank,
	            'uk-dropdown-blank': this.blank,
	            'uk-dropdown-small': !this.fixWidth,
	            'uk-dropdown-scrollable': this.scrollable
	          },
	          attrs: { 'aria-hidden': this.show ? 'false' : 'true' }
	        }]),
	        [this.$slots.default]
	      )]
	    );
	  },

	  watch: {
	    show: function show() {
	      var _this = this;

	      new _popper2.default(this.$targetElement, this.$el, this.popperOptions).onCreate(function (data) {
	        _this.flipped = data.flipped;
	      }).onUpdate(function (data) {
	        _this.flipped = data.flipped;
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    this.$targetElement = this.target ? this.$vnode.context.$refs[this.target] || document.querySelector(this.target) : this.$el.parentNode;

	    document.body.appendChild(this.$el);

	    onTargetClick = function onTargetClick(event) {
	      _this2.$emit('targetClick', event);
	    };

	    onMouseEnter = function onMouseEnter(event) {
	      if (_this2.$targetElement.contains(event.fromElement)) {
	        return;
	      }
	      _this2.$emit('targetHoverIn', event);
	    };

	    onMouseLeave = function onMouseLeave(event) {
	      if (event.relatedTarget === _this2.$targetElement || _this2.$targetElement.contains(event.relatedTarget)) {
	        return;
	      }
	      _this2.$emit('targetHoverOut', event);
	    };

	    onClick = function onClick(event) {
	      if (_this2.show) {
	        if (event.target === _this2.$targetElement || _this2.$targetElement.contains(event.target)) {
	          return;
	        }

	        if (event.target === _this2.$el || _this2.$el.contains(event.target)) {
	          _this2.$emit('clickIn', event);
	        } else {
	          _this2.$emit('clickOut', event);
	        }
	      }
	    };

	    (0, _dom.on)(this.$targetElement, 'mouseenter', onMouseEnter, this._uid);
	    (0, _dom.on)(this.$targetElement, 'mouseleave', onMouseLeave, this._uid);
	    (0, _dom.on)(this.$targetElement, 'click', onTargetClick, this._uid);
	    (0, _dom.on)(document, 'click', onClick, this._uid);
	    if ('ontouchstart' in document.documentElement) {
	      (0, _dom.on)(document, 'touchstart', onClick, this._uid);
	    }
	  },

	  methods: {
	    remove: function remove() {
	      if (this.$el.parentNode) {
	        this.$el.parentNode.removeChild(this.$el);
	      }
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _dom.offAll)(this._uid);
	    this.remove();
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debounce2 = __webpack_require__(151);

	var _debounce3 = _interopRequireDefault(_debounce2);

	var _dom = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var html = document.documentElement;
	var body = document.body;

	var active = void 0;
	var activeCount = void 0;

	var events = ['resize', 'orientationchange'];
	for (var i = 0; i < events.length; ++i) {
	  (0, _dom.on)(window, events[i], (0, _debounce3.default)(function (e) {
	    return active && resize(active.$el, active.center);
	  }, 150));
	}

	(0, _dom.on)(document, 'keyup', function (e) {
	  if (active && e.keyCode === 27) {
	    e.preventDefault();
	    active.$emit('keyEsc');
	  }
	});

	exports.default = {
	  functional: true,
	  render: function render(h, _ref) {
	    var props = _ref.props,
	        parent = _ref.parent,
	        children = _ref.children;

	    return h('transition', {
	      props: {
	        name: parent.transition
	      },
	      on: {
	        beforeEnter: function beforeEnter() {
	          parent.$nextTick(function () {
	            (0, _dom.addClass)(html, 'uk-modal-page');
	            resize(parent.$el, parent.center);
	          });
	        },
	        afterEnter: function afterEnter() {
	          if (active) {
	            active.$emit('inactive');
	          }
	          active = parent;
	        },
	        afterLeave: function afterLeave() {
	          activeCount > 0 ? activeCount-- : activeCount = 0;
	          if (!activeCount) {
	            (0, _dom.removeClass)(html, 'uk-modal-page');
	            body.style[parent.paddingDir] = '';
	          }
	          if (active === parent) {
	            active = false;
	          }
	        }
	      }
	    }, [children]);
	  }
	};


	function resize(modal, center) {
	  var dialog = modal.childNodes[0];
	  var bodyWidth = body.offsetWidth;
	  var scrollbarWidth = window.innerWidth - bodyWidth;
	  var lngDir = html.getAttribute('dir') === 'rtl' ? 'right' : 'left';
	  var paddingDir = 'padding-' + (lngDir === 'left' ? 'right' : 'left');
	  body.style[paddingDir] = scrollbarWidth;
	  modal.style['overflow-y'] = scrollbarWidth ? 'scroll' : 'auto';
	  if (center) {
	    var dh = dialog.offsetHeight;
	    var marginTop = (0, _dom.css)(dialog, 'margin-top');
	    var marginBottom = (0, _dom.css)(dialog, 'margin-bottom');
	    var pad = parseInt(marginTop, 10) + parseInt(marginBottom, 10);
	    if (dh + pad < window.innerHeight) {
	      var top = window.innerHeight / 2 - dh / 2 - pad;
	      dialog.style.top = top + 'px';
	    } else {
	      dialog.style.top = '';
	    }
	  } else {
	    dialog.style.top = '';
	  }
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(9);

	var _render = __webpack_require__(66);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkModal',
	  render: _render2.default,
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    center: {
	      type: Boolean,
	      default: false
	    },
	    large: {
	      type: Boolean,
	      default: false
	    },
	    lightbox: {
	      type: Boolean,
	      default: false
	    },
	    blank: {
	      type: Boolean,
	      default: false
	    },
	    transition: {
	      type: String,
	      default: 'vk-modal-transition'
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    var dialog = this.$el.childNodes[0];
	    var clickEvents = ['click'];
	    if ('ontouchstart' in document.documentElement) {
	      clickEvents.push('touchstart');
	    }
	    var clickHandler = function clickHandler(event) {
	      if (event.target === dialog || dialog.contains(event.target)) {
	        _this.$emit('clickIn', event);
	      } else {
	        _this.$emit('clickOut', event);
	      }
	    };
	    for (var i = 0; i < clickEvents.length; ++i) {
	      (0, _dom.on)(this.$el, clickEvents[i], clickHandler, this._uid);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _dom.offAll)(this._uid);
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _babelHelperVueJsxMergeProps = __webpack_require__(8);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	exports.default = function (h) {
	  var directives = [{
	    name: 'show', value: this.show
	  }];
	  var modal = h(
	    'div',
	    (0, _babelHelperVueJsxMergeProps2.default)([{ directives: directives }, { 'class': 'uk-modal',
	      attrs: { 'aria-hidden': this.show ? 'false' : 'true' }
	    }]),
	    [h(
	      'div',
	      { staticClass: 'uk-modal-dialog', 'class': {
	          'uk-modal-dialog-large': this.large,
	          'uk-modal-dialog-lightbox': this.lightbox,
	          'uk-modal-dialog-blank': this.blank
	        } },
	      [this.$slots.default]
	    )]
	  );
	  return h(_Transition2.default, [modal]);
	};

	var _Transition = __webpack_require__(64);

	var _Transition2 = _interopRequireDefault(_Transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkNotify',
	  props: {
	    placement: {
	      type: String,
	      default: 'top-center' }
	  },
	  render: function render(h) {
	    return h(
	      'div',
	      { 'class': 'uk-notify uk-notify-' + this.placement },
	      [this.$slots.default]
	    );
	  },
	  mounted: function mounted() {
	    document.body.appendChild(this.$el);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.$el.parentNode) {
	      document.body.removeChild(this.$el);
	    }
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(15);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkNotifyMessage',
	  props: {
	    id: {
	      type: [Number, String, Object],
	      default: 0
	    },
	    status: {
	      type: String,
	      default: '' },
	    timeout: {
	      type: Number,
	      default: 5000
	    },
	    transition: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    statusClass: function statusClass() {
	      return 'uk-notify-message-' + this.status.replace('info', 'primary');
	    }
	  },
	  render: function render(h) {
	    var _ref,
	        _this = this;

	    return h(
	      'transition',
	      {
	        attrs: { name: this.transition }
	      },
	      [h(
	        'div',
	        { staticClass: 'uk-notify-message', 'class': (_ref = {}, (0, _defineProperty3.default)(_ref, this.statusClass, this.status), (0, _defineProperty3.default)(_ref, 'vk-notify-message-sticky', this.timeout === 0), _ref), on: {
	            'click': function click() {
	              return _this.$parent.$emit('click', _this.id);
	            }
	          }
	        },
	        [this.$slots.default]
	      )]
	    );
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    if (this.timeout > 0) {
	      setTimeout(function () {
	        _this2.$parent.$emit('timeout', _this2.id);
	      }, this.timeout);
	    }
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(9);

	var html = document.documentElement;
	var body = document.body;
	var scrollPos = {};

	exports.default = {
	  functional: true,
	  render: function render(h, _ref) {
	    var parent = _ref.parent,
	        children = _ref.children;

	    return h('transition', {
	      props: {
	        name: parent.transition
	      },
	      on: {
	        beforeEnter: function beforeEnter() {
	          scrollPos = { x: window.pageXOffset, y: window.pageYOffset };

	          parent.$nextTick(function () {
	            var scrollbarWidth = window.innerWidth - body.offsetWidth;
	            (0, _dom.addClass)(body, 'uk-offcanvas-page');
	            (0, _dom.addClass)(body, 'uk-offcanvas-page-open');
	            setBodyMargin(parent.flip, parent.$refs.bar.offsetWidth);
	            body.style.width = window.innerWidth - scrollbarWidth + 'px';
	            body.style.height = window.innerHeight + 'px';
	            body.offsetHeight;
	            html.style['margin-top'] = scrollPos.y * -1 + 'px';
	          });
	        },
	        beforeLeave: function beforeLeave() {
	          (0, _dom.removeClass)(body, 'uk-offcanvas-page-open');
	          body.style['margin-left'] = '';
	          body.style['margin-right'] = '';
	        },
	        afterLeave: function afterLeave() {
	          (0, _dom.removeClass)(body, 'uk-offcanvas-page');
	          body.style.width = '';
	          body.style.height = '';
	          html.style['margin-top'] = '';
	          window.scrollTo(scrollPos.x, scrollPos.y);
	        }
	      }
	    }, children);
	  }
	};


	function setBodyMargin(flip, barWidth) {
	  var lngDir = html.getAttribute('dir') === 'rtl' ? 'right' : 'left';
	  var rtl = lngDir === 'right';
	  var dir = (flip ? -1 : 1) * (rtl ? -1 : 1);
	  var margin = (rtl ? -1 : 1) * (barWidth * dir);
	  body.style[rtl ? 'margin-right' : 'margin-left'] = margin + 'px';
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(9);

	var _render = __webpack_require__(71);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkOffcanvas',
	  render: _render2.default,
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    flip: {
	      type: Boolean,
	      default: false
	    },
	    transition: {
	      type: String,
	      default: 'vk-offcanvas-transition'
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    (0, _dom.on)(document, 'keyup', function (e) {
	      if (_this.show && e.keyCode === 27) {
	        e.preventDefault();
	        _this.$emit('keyEsc', e);
	      }
	    }, this._uid);
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _dom.offAll)(this._uid);
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _babelHelperVueJsxMergeProps = __webpack_require__(8);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	exports.default = function (h) {
	  var _this = this;

	  var directives = [{
	    name: 'show', value: this.show
	  }];
	  var offcanvas = h(
	    'div',
	    (0, _babelHelperVueJsxMergeProps2.default)([{ directives: directives }, { staticClass: 'uk-offcanvas',
	      attrs: { 'aria-hidden': this.show ? 'false' : 'true'
	      },
	      on: {
	        'click': function click(e) {
	          if (e.target !== _this.$el && _this.$el.contains(e.target)) {
	            _this.$emit('clickIn', e);
	          } else {
	            _this.$emit('clickOut', e);
	          }
	        }
	      }
	    }]),
	    [h(
	      'div',
	      { ref: 'bar', staticClass: 'uk-offcanvas-bar', 'class': {
	          'uk-offcanvas-bar-flip': this.flip
	        } },
	      [this.$slots.default]
	    )]
	  );
	  return h(_Transition2.default, [offcanvas]);
	};

	var _Transition = __webpack_require__(69);

	var _Transition2 = _interopRequireDefault(_Transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  functional: true,
	  props: ['icon', 'page'],
	  render: function render(h, _ref) {
	    var props = _ref.props,
	        parent = _ref.parent;

	    var icon = h('i', { class: 'uk-icon-' + props.icon });
	    return props.page ? h('a', { on: { click: function click(e) {
	          e.preventDefault();
	          parent.change({ page: props.page });
	        } } }, [icon]) : h('span', [icon]);
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  functional: true,
	  props: ['page'],
	  render: function render(h, _ref) {
	    var props = _ref.props,
	        parent = _ref.parent;

	    var isCurrent = props.page === parent.page;
	    return h(
	      'li',
	      { 'class': { 'uk-active': isCurrent } },
	      [isCurrent ? h('span', [props.page]) : h('a', { on: {
	          click: function click(e) {
	            e.preventDefault();
	            parent.change({ page: props.page });
	          }
	        } }, [props.page])]
	    );
	  }
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _range2 = __webpack_require__(49);

	var _range3 = _interopRequireDefault(_range2);

	var _util = __webpack_require__(2);

	var _render = __webpack_require__(75);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkPagination',
	  render: _render2.default,
	  props: {
	    page: {
	      type: Number,
	      default: 1
	    },

	    total: {
	      type: Number,
	      required: true
	    },

	    limit: {
	      type: Number,
	      default: 10
	    },

	    pageRange: {
	      type: Number,
	      default: 2
	    },

	    align: {
	      type: String,
	      default: ''
	    },

	    compact: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    prevPage: function prevPage() {
	      return this.page - 1 !== 0 ? this.page - 1 : null;
	    },
	    nextPage: function nextPage() {
	      return this.page + 1 <= this.totalPages ? this.page + 1 : null;
	    },
	    totalPages: function totalPages() {
	      return Math.ceil(this.total / this.limit);
	    },
	    mainPages: function mainPages() {
	      var start = this.page - this.pageRange;
	      var end = this.page + this.pageRange;
	      if (end > this.totalPages) {
	        end = this.totalPages;
	        start = this.totalPages - this.pageRange * 2;
	        start = start < 1 ? 1 : start;
	      }
	      if (start <= 1) {
	        start = 1;
	        end = Math.min(this.pageRange * 2 + 1, this.totalPages);
	      }
	      return (0, _range3.default)(start, end + 1);
	    },
	    prePages: function prePages() {
	      return (0, _range3.default)(1, this.mainPages[0] <= 3 ? this.mainPages[0] : 2);
	    },
	    postPages: function postPages() {
	      var mainLast = this.mainPages[this.mainPages.length - 1];
	      return (0, _range3.default)(mainLast >= this.totalPages - 2 ? mainLast + 1 : this.totalPages, this.totalPages + 1);
	    }
	  },
	  methods: {
	    change: function change(changes) {
	      var state = (0, _util.merge)({
	        page: this.page,
	        total: this.total,
	        limit: this.limit
	      }, changes);

	      state.offset = (state.page - 1) * state.limit + 1;
	      state.to = Math.min(state.total, state.page * state.limit);

	      this.$emit('change', state);
	    }
	  }
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (h) {
	  return h(
	    'ul',
	    { 'class': {
	        'uk-pagination': true,
	        'uk-pagination-left': this.align === 'left',
	        'uk-pagination-right': this.align === 'right'
	      } },
	    [h(
	      'li',
	      { 'class': {
	          'uk-disabled': !this.prevPage,
	          'uk-pagination-previous': !this.compact
	        } },
	      [this.prevPage ? h(_Button2.default, { props: { icon: 'angle-double-left', page: 1 } }) : h(_Button2.default, { props: { icon: 'angle-double-left' } }), this.prevPage ? h(_Button2.default, { props: { icon: 'angle-left', page: this.prevPage } }) : h(_Button2.default, { props: { icon: 'angle-left' } })]
	    ), this.prePages.map(function (page) {
	      return h(_Page2.default, { props: { page: page } });
	    }), this.mainPages[0] > this.prePages.length + 1 && h(
	      'li',
	      null,
	      [h(
	        'span',
	        null,
	        ['...']
	      )]
	    ), this.mainPages.map(function (page) {
	      return h(_Page2.default, { props: { page: page } });
	    }), this.mainPages[this.mainPages.length - 1] + 1 < this.postPages[0] && h(
	      'li',
	      null,
	      [h(
	        'span',
	        null,
	        ['...']
	      )]
	    ), this.postPages.map(function (page) {
	      return h(_Page2.default, { props: { page: page } });
	    }), h(
	      'li',
	      { 'class': {
	          'uk-disabled': !this.nextPage,
	          'uk-pagination-next': !this.compact
	        } },
	      [this.nextPage ? h(_Button2.default, { props: { icon: 'angle-right', page: this.nextPage } }) : h(_Button2.default, { props: { icon: 'angle-right' } }), this.nextPage ? h(_Button2.default, { props: { icon: 'angle-double-right', page: this.totalPages } }) : h(_Button2.default, { props: { icon: 'angle-double-right' } })]
	    )]
	  );
	};

	var _Page = __webpack_require__(73);

	var _Page2 = _interopRequireDefault(_Page);

	var _Button = __webpack_require__(72);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(2);

	exports.default = {
	  name: 'VkPicker',
	  render: function render(h) {
	    return h(
	      'vk-table',
	      {
	        attrs: {
	          'track-by': 'id',
	          fields: this.tableFields,
	          rows: this.rows }
	      },
	      []
	    );
	  },
	  props: {
	    fields: {
	      type: Array,
	      required: true
	    },
	    rows: {
	      type: Array,
	      required: true
	    }
	  },
	  computed: {
	    tableFields: function tableFields() {
	      return this.fields.map(function (field) {
	        if (field.pickable) {
	          field.cell = pickableRender;
	        }
	        return field;
	      });
	    },
	    pickables: function pickables() {
	      var pickables = {};
	      (0, _util.each)(this.fields, function (field) {
	        if (field.pickable && (0, _util.isString)(field.pickable)) {
	          pickables[field.name] = field.pickable;
	        } else if (field.pickable) {
	          pickables[field.name] = field.name;
	        }
	      });
	      return pickables;
	    }
	  }
	};


	var pickableRender = function pickableRender(h, _ref) {
	  var props = _ref.props,
	      parent = _ref.parent;

	  var vm = parent.$parent;
	  return h(
	    'a',
	    {
	      on: {
	        'click': function click(e) {
	          var field = props.field.name;
	          var data = props.row[vm.pickables[field]];
	          e.preventDefault();
	          vm.$emit('pick', data, field);
	        }
	      }
	    },
	    [props.row[props.field.name]]
	  );
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkSubnav',
	  props: {
	    index: {
	      type: Number,
	      default: ''
	    },
	    line: {
	      type: Boolean,
	      default: false
	    },
	    pill: {
	      type: Boolean,
	      default: false
	    }
	  },
	  render: function render(h) {
	    var items = this.$slots.default.filter(function (node) {
	      return node.componentOptions && node.componentOptions.tag === 'vk-subnav-item';
	    }).map(function (node, index) {
	      var data = node.componentOptions.propsData;
	      data.index = index;
	      return node;
	    });
	    return h(
	      'ul',
	      { 'class': {
	          'uk-subnav': true,
	          'uk-subnav-line': this.line,
	          'uk-subnav-pill': this.pill
	        } },
	      [items]
	    );
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkSubnavItem',
	  props: {
	    index: {
	      type: Number,
	      default: 0
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.index === this.$parent.index;
	    }
	  },
	  render: function render(h) {
	    var _this = this;

	    return h(
	      'li',
	      { 'class': {
	          'uk-active': this.active,
	          'uk-disabled': this.disabled
	        } },
	      [h(
	        'a',
	        {
	          on: {
	            'click': function click(event) {
	              event.preventDefault();
	              if (!_this.disabled && !_this.active) {
	                _this.$parent.$emit('change', _this.index);
	              }
	            }
	          }
	        },
	        [this.$slots.default]
	      )]
	    );
	  }
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkSwitcher',
	  props: {
	    index: {
	      type: Number,
	      default: 0
	    },
	    transition: {
	      type: String,
	      default: ''
	    },
	    transitionMode: {
	      type: String,
	      default: 'out-in'
	    }
	  },
	  render: function render(h) {
	    var switchers = this.$slots.default.filter(function (node) {
	      return node.componentOptions && node.componentOptions.tag === 'vk-switcher-item';
	    }).map(function (node, index) {
	      node.key = 'tab-' + index;
	      return node;
	    });
	    return h(
	      'ul',
	      { 'class': 'uk-list' },
	      [h(
	        'transition',
	        {
	          attrs: { name: this.transition, mode: this.transitionMode }
	        },
	        [h(
	          'keep-alive',
	          null,
	          [[switchers[this.index]]]
	        )]
	      )]
	    );
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkSwitcherItem',
	  render: function render(h) {
	    return h(
	      'li',
	      null,
	      [this.$slots.default]
	    );
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(37);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  functional: true,
	  props: ['checked'],
	  render: function render(h, _ref) {
	    var _this = this;

	    var data = _ref.data,
	        props = _ref.props;

	    return h('input', (0, _extends3.default)({}, data, {
	      attrs: {
	        type: 'checkbox'
	      },
	      domProps: {
	        checked: props.checked
	      },
	      on: {
	        click: function click(e) {
	          e.target.checked = props.checked;

	          if (data.on && data.on.click) {
	            data.on.click.call(_this, e);
	          }
	        }
	      }
	    }));
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(15);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cell = {
	  functional: true,
	  props: ['field'],
	  render: function render(h, _ref) {
	    var vm = _ref.parent,
	        props = _ref.props;
	    var field = props.field;
	    var sortBy = field.sortBy,
	        headerClass = field.headerClass;

	    var orderedBy = vm.sortOrder[field.name];

	    var Header = typeof field.header === 'function' ? h({
	      functional: true,
	      props: ['field'],
	      render: field.header
	    }, { props: { field: field } }) : field.header;
	    return h('th', {
	      class: (0, _defineProperty3.default)({
	        'uk-visible-hover-inline': sortBy,
	        'vk-table-order': sortBy,
	        'uk-active': orderedBy
	      }, headerClass, headerClass),
	      on: {
	        click: function click(e) {
	          return sortBy && vm.sortOn(props.field);
	        }
	      }
	    }, [sortBy ? h('span', {
	      class: 'uk-position-relative'
	    }, [Header, h(Icon, { props: { orderedBy: orderedBy } })]) : Header]);
	  }
	};

	var Icon = {
	  functional: true,
	  props: ['orderedBy'],
	  render: function render(h, _ref2) {
	    var props = _ref2.props;
	    var orderedBy = props.orderedBy;

	    return h('i', {
	      staticClass: 'uk-icon-justify uk-margin-small-left',
	      class: {
	        'uk-invisible': !orderedBy,
	        'uk-icon-arrow-down': orderedBy === 'asc' || orderedBy === undefined,
	        'uk-icon-arrow-up': orderedBy === 'desc'
	      }
	    });
	  }
	};

	exports.default = Cell;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(2);

	var Row = {
	  functional: true,
	  props: ['row'],
	  render: function render(h, _ref) {
	    var vm = _ref.parent,
	        props = _ref.props;
	    var fieldsDef = vm.fieldsDef;
	    var row = props.row;

	    return h('tr', {
	      class: {
	        'uk-active': vm.isSelected(row)
	      },
	      on: {
	        click: function click(e) {
	          if (e.target.tagName === 'TD') {
	            vm.$emit('clickRow', vm.getRowId(row), row);
	          }
	        }
	      }
	    }, fieldsDef.map(function (field) {
	      return h(Cell, { props: { field: field, row: row } });
	    }));
	  }
	};

	var Cell = {
	  functional: true,
	  props: ['row', 'field'],
	  render: function render(h, _ref2) {
	    var props = _ref2.props;
	    var row = props.row,
	        field = props.field;

	    return h('td', { class: field.cellClass }, [(0, _util.isFunction)(field.cell) ? h({
	      functional: true,
	      props: ['row', 'field'],
	      render: field.cell
	    }, { props: { row: row, field: field } }) : field.cell || row[field.name]]);
	  }
	};

	exports.default = Row;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(37);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.processSortOrder = processSortOrder;
	exports.processFields = processFields;

	var _util = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function processSortOrder(field, currentOrder) {
	  var newOrder = {};
	  var sortBy = field.sortBy === true ? field.name : field.sortBy;

	  if (currentOrder[sortBy]) {
	    newOrder[sortBy] = currentOrder[sortBy] === 'asc' ? 'desc' : 'asc';
	  } else {
	    newOrder[sortBy] = 'asc';
	  }
	  return newOrder;
	}

	function processFields(fields) {
	  return fields.map(function (f) {
	    var field = {
	      name: '',
	      header: '',
	      headerClass: '',
	      cellClass: '',
	      sortBy: ''
	    };

	    if ((0, _util.isString)(f)) {
	      field.name = f;
	    } else {
	      field = (0, _extends3.default)({}, field, f);
	    }

	    if (field.header === '') {
	      field.header = titleCase(field.name);
	    }
	    return field;
	  });
	}

	function titleCase(str) {
	  return str.replace(/\w+/g, function (txt) {
	    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  });
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(36);

	var _keys2 = _interopRequireDefault(_keys);

	var _orderBy2 = __webpack_require__(157);

	var _orderBy3 = _interopRequireDefault(_orderBy2);

	var _searchField = __webpack_require__(86);

	var _searchField2 = _interopRequireDefault(_searchField);

	var _selectField = __webpack_require__(87);

	var _selectField2 = _interopRequireDefault(_selectField);

	var _Header = __webpack_require__(82);

	var _Header2 = _interopRequireDefault(_Header);

	var _Row = __webpack_require__(83);

	var _Row2 = _interopRequireDefault(_Row);

	var _util = __webpack_require__(2);

	var _helper = __webpack_require__(84);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkTable',
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    fields: {
	      type: Array,
	      required: true
	    },
	    rows: {
	      type: Array,
	      required: true
	    },
	    trackBy: {
	      type: String,
	      default: 'id'
	    },
	    searchable: {
	      type: Boolean,
	      default: false
	    },
	    selectable: {
	      type: Boolean,
	      default: false
	    },
	    selection: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    condensed: {
	      type: Boolean,
	      default: false
	    },
	    striped: {
	      type: Boolean,
	      default: false
	    },
	    hover: {
	      type: Boolean,
	      default: false
	    },
	    perPage: {
	      type: Number,
	      default: 10
	    }
	  },
	  data: function data() {
	    return {
	      filterKey: '',
	      sortOrder: {},
	      page: 1
	    };
	  },
	  render: function render(h) {
	    var _this = this;

	    return h(
	      'div',
	      { staticClass: 'nibnut-datagrid' },
	      [h(
	        'form',
	        { staticClass: 'uk-form uk-form-horizontal' },
	        [h(
	          'div',
	          { 'class': 'uk-grid' },
	          [h(
	            'div',
	            { 'class': 'uk-width-1-2' },
	            [h(
	              'div',
	              { 'class': 'uk-form-label' },
	              [h(
	                'h2',
	                { 'class': 'uk-margin-remove' },
	                [this.title]
	              )]
	            )]
	          ), h(
	            'div',
	            { 'class': 'uk-width-1-2' },
	            [this.searchable && h(_searchField2.default, { props: {} })]
	          )]
	        )]
	      ), h(
	        'table',
	        { staticClass: 'uk-table', 'class': {
	            'uk-table-striped': this.striped,
	            'uk-table-condensed': this.condensed,
	            'uk-table-hover': this.hover
	          } },
	        [h(
	          'thead',
	          null,
	          [h(
	            'tr',
	            null,
	            [this.fieldsDef.map(function (field) {
	              return h(_Header2.default, { props: { field: field } });
	            })]
	          )]
	        ), h(
	          'tbody',
	          null,
	          [this.filteredRows.map(function (row) {
	            return h(_Row2.default, { props: { row: row } });
	          })]
	        )]
	      ), h(
	        'vk-pagination',
	        { ref: 'pagination', directives: [{
	            name: 'show',
	            value: this.rows.length > this.perPage
	          }],
	          attrs: { total: this.rows.length,
	            page: this.page,
	            limit: this.perPage,
	            compact: true
	          },
	          on: {
	            'change': function change(o) {
	              _this.page = o.page;
	            }
	          }
	        },
	        []
	      )]
	    );
	  },
	  created: function created() {
	    var _this2 = this;

	    if (_util.warn && this.selectable) {
	      this.rows.forEach(function (row) {
	        if (row[_this2.trackBy] === undefined) {
	          (0, _util.warn)("Some of the Table rows have no 'id' set.");
	        }
	      });
	    }
	    this.sortOrder[this.fields[0].name] = 'asc';
	    this.$on('clickRow', function (rowID, row) {
	      console.log('clickRow event received', rowID, row, _this2);
	    });
	  },

	  computed: {
	    isAllSelected: function isAllSelected() {
	      var _this3 = this;

	      return this.rows.length && this.rows.every(function (row) {
	        return _this3.isSelected(row);
	      });
	    },
	    fieldsDef: function fieldsDef() {
	      var fields = (0, _helper.processFields)(this.fields);

	      if (this.selectable) {
	        fields.unshift(_selectField2.default);
	      }
	      return fields;
	    },
	    filteredRows: function filteredRows() {
	      var _this4 = this;

	      var by = (0, _keys2.default)(this.sortOrder)[0];
	      var dir = this.sortOrder[by];
	      var sortedRows = (0, _orderBy3.default)(this.rows, [function (item) {
	        return item[by];
	      }], dir);

	      this.filterKey = this.filterKey.toLowerCase();
	      var visibleRows = sortedRows.filter(function (row) {
	        return (0, _keys2.default)(row).some(function (key) {
	          return String(row[key]).toLowerCase().indexOf(_this4.filterKey) > -1;
	        });
	      });

	      var startAt = this.perPage * (this.page - 1);
	      visibleRows = visibleRows.slice(startAt, startAt + this.perPage);

	      return visibleRows;
	    }
	  },
	  methods: {
	    search: function search(query) {
	      this.filterKey = query;
	    },
	    isSelected: function isSelected(row) {
	      return this.selection[this.getRowId(row)];
	    },
	    getRowId: function getRowId(row) {
	      return row[this.trackBy];
	    },
	    sortOn: function sortOn(field) {
	      this.sortOrder = (0, _helper.processSortOrder)(field, this.sortOrder);
	    }
	  }
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var searchField = {
	  functional: true,
	  props: [],
	  render: function render(h, _ref) {
	    var vm = _ref.parent,
	        props = _ref.props;

	    return h(
	      "div",
	      { "class": "uk-form-controls uk-text-right" },
	      [h(
	        "div",
	        { "class": "uk-form-icon" },
	        [h(
	          "i",
	          { "class": "uk-icon-search" },
	          []
	        ), h(
	          "input",
	          {
	            attrs: { type: "text" },
	            on: {
	              "keyup": function keyup(e) {
	                vm.search(e.target.value);
	              }
	            }
	          },
	          []
	        )]
	      )]
	    );
	  }
	};
	exports.default = searchField;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Checkbox = __webpack_require__(81);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  headerClass: 'uk-form vk-table-width-minimum',
	  header: function header(h, _ref) {
	    var vm = _ref.parent,
	        props = _ref.props;

	    return h(_Checkbox2.default, {
	      props: {
	        checked: vm.isAllSelected
	      },
	      on: {
	        click: function click(e) {
	          return vm.$emit('selectAll', vm.rows.map(function (row) {
	            return vm.getRowId(row);
	          }), vm.rows);
	        }
	      }
	    });
	  },

	  cellClass: 'uk-form vk-table-width-minimum',
	  cell: function cell(h, _ref2) {
	    var vm = _ref2.parent,
	        props = _ref2.props;
	    var row = props.row;

	    return h(_Checkbox2.default, {
	      props: {
	        checked: vm.isSelected(row)
	      },
	      on: {
	        click: function click(e) {
	          return vm.$emit('select', vm.getRowId(row), row);
	        }
	      }
	    });
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkTabs',
	  props: {
	    index: {
	      type: Number,
	      default: 0
	    },

	    flip: {
	      type: Boolean,
	      default: false
	    },

	    center: {
	      type: Boolean,
	      default: false
	    },

	    bottom: {
	      type: Boolean,
	      default: false
	    },

	    width: {
	      type: String,
	      default: ''
	    }
	  },
	  render: function render(h) {
	    var _this = this;

	    var Tabs = this.$slots.default.filter(function (node) {
	      return node.componentOptions && node.componentOptions.tag === 'vk-tabs-item';
	    }).map(function (node, index) {
	      var data = node.componentOptions.propsData;
	      data.index = index;
	      data.width = _this.width;
	      return node;
	    });
	    return h(
	      'div',
	      { 'class': {
	          'uk-flex uk-flex-column-reverse': this.bottom
	        } },
	      [h(
	        'div',
	        { 'class': {
	            'uk-tab-center': this.center,
	            'uk-tab-center-bottom': this.center && this.bottom
	          } },
	        [h(
	          'ul',
	          { 'class': {
	              'uk-tab': true,
	              'uk-tab-grid': this.width,
	              'uk-tab-flip': this.flip,
	              'uk-tab-bottom': this.bottom
	            } },
	          [Tabs]
	        )]
	      ), h(
	        'vk-switcher',
	        {
	          attrs: { index: this.index }
	        },
	        [Tabs.map(function (tab) {
	          return h(
	            'vk-switcher-item',
	            null,
	            [tab.componentOptions.children]
	          );
	        })]
	      )]
	    );
	  }
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(15);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkTabsItem',
	  props: {
	    index: {
	      type: Number,
	      default: 0
	    },
	    name: {
	      type: String,
	      required: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.index === this.$parent.index;
	    }
	  },
	  render: function render(h) {
	    var _ref,
	        _this = this;

	    return h(
	      'li',
	      { 'class': (_ref = {}, (0, _defineProperty3.default)(_ref, 'uk-width-' + this.width, this.width), (0, _defineProperty3.default)(_ref, 'uk-active', this.active), (0, _defineProperty3.default)(_ref, 'uk-disabled', this.disabled), _ref) },
	      [h(
	        'a',
	        {
	          on: {
	            'click': function click(event) {
	              event.preventDefault();
	              if (!_this.disabled) {
	                _this.$parent.$emit('change', _this.index);
	              }
	            }
	          }
	        },
	        [this.name]
	      )]
	    );
	  }
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'VkTabsVertical',
	  props: {
	    index: {
	      type: Number,
	      default: 0
	    },
	    flip: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: String,
	      default: '1-3'
	    },
	    contentWidth: {
	      type: String,
	      default: '2-3'
	    }
	  },
	  render: function render(h) {
	    var Tabs = this.$slots.default.filter(function (node) {
	      return node.componentOptions && node.componentOptions.tag === 'vk-tabs-item';
	    }).map(function (node, index) {
	      node.componentOptions.propsData.index = index;
	      return node;
	    });
	    return h(
	      'div',
	      { 'class': {
	          'uk-grid': true,
	          'uk-flex uk-flex-row-reverse': this.flip
	        } },
	      [h(
	        'div',
	        { 'class': 'uk-width-medium-' + this.width },
	        [h(
	          'ul',
	          { 'class': {
	              'uk-tab': true,
	              'uk-tab-left': !this.flip,
	              'uk-tab-right': this.flip
	            } },
	          [Tabs]
	        )]
	      ), h(
	        'div',
	        { 'class': 'uk-width-medium-' + this.contentWidth },
	        [h(
	          'vk-switcher',
	          {
	            attrs: { index: this.index }
	          },
	          [Tabs.map(function (tab) {
	            return h(
	              'vk-switcher-item',
	              null,
	              [tab.componentOptions.children]
	            );
	          })]
	        )]
	      )]
	    );
	  }
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _babelHelperVueJsxMergeProps = __webpack_require__(8);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	var _defineProperty2 = __webpack_require__(15);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _popper = __webpack_require__(50);

	var _popper2 = _interopRequireDefault(_popper);

	var _dom = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var onMouseEnter = void 0;
	var onMouseLeave = void 0;

	var POSITION_MIRROR = {
	  top: 'bottom',
	  right: 'left',
	  left: 'right',
	  bottom: 'top'
	};

	exports.default = {
	  name: 'VkTooltip',
	  props: {
	    target: {
	      type: String,
	      default: ''
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    },
	    offset: {
	      type: String,
	      default: '0 5'
	    },
	    transition: {
	      type: String,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      active: false,
	      flipped: false
	    };
	  },
	  computed: {
	    popperOptions: function popperOptions() {
	      return {
	        placement: this.placement,
	        modifiers: {
	          offset: {
	            offset: this.offset
	          }
	        }
	      };
	    },
	    classes: function classes() {
	      var placement = this.placement.split('-');
	      var position = placement[0];
	      if (this.flipped) {
	        position = POSITION_MIRROR[placement[0]];
	      }
	      if (placement[1]) {
	        position += '-' + placement[1].replace('start', 'left').replace('end', 'right');
	      }
	      return (0, _defineProperty3.default)({
	        'uk-active': this.active
	      }, 'uk-tooltip-' + position, true);
	    }
	  },
	  render: function render(h) {
	    var directives = [{
	      name: 'show', value: this.active
	    }];
	    return h(
	      'transition',
	      {
	        attrs: { name: this.transition }
	      },
	      [h(
	        'div',
	        (0, _babelHelperVueJsxMergeProps2.default)([{ directives: directives }, { staticClass: 'uk-tooltip', 'class': this.classes }]),
	        [h(
	          'div',
	          { 'class': 'uk-tooltip-inner' },
	          [this.$slots.default]
	        )]
	      )]
	    );
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.$targetElement = this.target ? this.$vnode.context.$refs[this.target] || document.querySelector(this.target) : this.$el.parentNode;

	    onMouseEnter = function onMouseEnter() {
	      document.body.appendChild(_this.$el);
	      _this.active = true;
	      _this.$emit('show');
	      new _popper2.default(_this.$targetElement, _this.$el, _this.popperOptions).onCreate(function (data) {
	        _this.flipped = data.flipped;
	      }).onUpdate(function (data) {
	        _this.flipped = data.flipped;
	      });
	    };

	    onMouseLeave = function onMouseLeave() {
	      _this.active = false;
	      (0, _dom.offAll)(_this.$el, _this._uid);
	      _this.remove();
	      _this.$emit('hide');
	    };

	    (0, _dom.on)(this.$targetElement, 'mouseenter', onMouseEnter, this._uid);
	    (0, _dom.on)(this.$targetElement, 'focus', onMouseEnter, this._uid);
	    (0, _dom.on)(this.$targetElement, 'mouseleave', onMouseLeave, this._uid);
	    (0, _dom.on)(this.$targetElement, 'blur', onMouseLeave, this._uid);

	    this.remove();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.$targetElement) {
	      (0, _dom.offAll)(this.$targetElement, this._uid);
	    }
	    this.active = false;
	    this.remove();
	  },

	  methods: {
	    remove: function remove() {
	      if (this.$el.parentNode) {
	        this.$el.parentNode.removeChild(this.$el);
	      }
	    }
	  }
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _babelHelperVueJsxMergeProps = __webpack_require__(8);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VkUpload',
	  data: function data() {
	    return {
	      dragged: false
	    };
	  },
	  render: function render(h) {
	    var _this = this;

	    var data = {
	      on: {
	        drop: function drop(e) {
	          if (e.dataTransfer && e.dataTransfer.files) {
	            e.stopPropagation();
	            e.preventDefault();
	            _this.dragged = false;
	            _this.$emit('dropped', e.dataTransfer.files);
	          }
	        },
	        dragenter: function dragenter(e) {
	          e.stopPropagation();
	          e.preventDefault();
	        },
	        dragover: function dragover(e) {
	          e.stopPropagation();
	          e.preventDefault();
	          _this.dragged = true;
	        },
	        dragleave: function dragleave(e) {
	          e.stopPropagation();
	          e.preventDefault();
	          _this.dragged = false;
	        }
	      }
	    };
	    return h(
	      'div',
	      (0, _babelHelperVueJsxMergeProps2.default)([data, { 'class': {
	          'uk-placeholder uk-text-center': true,
	          'uk-dragover': this.dragged
	        } }]),
	      [this.$slots.default]
	    );
	  }
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _util = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultLocale = {
	  name: 'en',
	  week: {
	    dow: 1
	  }
	};

	exports.default = {
	  beforeCreate: function beforeCreate() {
	    if (_moment2.default === undefined) {
	      (0, _util.warn)(this.$options.name + ' stopped executing due to missing Moment.js dependency.');
	      this.$destroy();
	    } else {
	      this.$moment = function (date) {
	        var moment = !date || (0, _util.isArray)(date) || (0, _util.isObject)(date) ? (0, _moment2.default)(date || undefined) : (0, _moment2.default)(date, this.format);
	        if (!moment.isValid()) {
	          (0, _util.warn)('Moment object creation failed with date input \'' + date + '\'');
	        }
	        return moment;
	      };
	    }
	  },
	  created: function created() {
	    var locale = (0, _util.merge)({}, defaultLocale, this.locale);
	    _moment2.default.updateLocale(locale.name, locale);
	  },

	  filters: {
	    format: function format(moment, _format) {
	      return moment.format(_format);
	    }
	  }
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(98);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(97);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(127);
	module.exports = __webpack_require__(1).Number.isInteger;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(128);
	module.exports = __webpack_require__(1).Object.assign;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(129);
	var $Object = __webpack_require__(1).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(130);
	module.exports = __webpack_require__(1).Object.getPrototypeOf;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(131);
	module.exports = __webpack_require__(1).Object.keys;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(134);
	__webpack_require__(132);
	__webpack_require__(135);
	__webpack_require__(136);
	module.exports = __webpack_require__(1).Symbol;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(133);
	__webpack_require__(137);
	module.exports = __webpack_require__(34).f('iterator');

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(7)
	  , toLength  = __webpack_require__(125)
	  , toIndex   = __webpack_require__(124);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(107);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(13)
	  , gOPS    = __webpack_require__(27)
	  , pIE     = __webpack_require__(19);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3).document && document.documentElement;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(16)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(43)
	  , descriptor     = __webpack_require__(20)
	  , setToStringTag = __webpack_require__(28)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(14)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(13)
	  , toIObject = __webpack_require__(7);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(22)('meta')
	  , isObject = __webpack_require__(16)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(6).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(11)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(13)
	  , gOPS     = __webpack_require__(27)
	  , pIE      = __webpack_require__(19)
	  , toObject = __webpack_require__(21)
	  , IObject  = __webpack_require__(41)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(11)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(6)
	  , anObject = __webpack_require__(18)
	  , getKeys  = __webpack_require__(13);

	module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(19)
	  , createDesc     = __webpack_require__(20)
	  , toIObject      = __webpack_require__(7)
	  , toPrimitive    = __webpack_require__(32)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(40)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(7)
	  , gOPN      = __webpack_require__(44).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , defined   = __webpack_require__(23);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(31)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(108)
	  , step             = __webpack_require__(116)
	  , Iterators        = __webpack_require__(25)
	  , toIObject        = __webpack_require__(7);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(42)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {isInteger: __webpack_require__(114)});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(119)});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(4), 'Object', {defineProperty: __webpack_require__(6).f});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(21)
	  , $getPrototypeOf = __webpack_require__(45);

	__webpack_require__(47)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(21)
	  , $keys    = __webpack_require__(13);

	__webpack_require__(47)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 132 */
/***/ function(module, exports) {

	

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(123)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(42)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(3)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(4)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(48)
	  , META           = __webpack_require__(118).KEY
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(28)
	  , uid            = __webpack_require__(22)
	  , wks            = __webpack_require__(14)
	  , wksExt         = __webpack_require__(34)
	  , wksDefine      = __webpack_require__(33)
	  , keyOf          = __webpack_require__(117)
	  , enumKeys       = __webpack_require__(111)
	  , isArray        = __webpack_require__(113)
	  , anObject       = __webpack_require__(18)
	  , toIObject      = __webpack_require__(7)
	  , toPrimitive    = __webpack_require__(32)
	  , createDesc     = __webpack_require__(20)
	  , _create        = __webpack_require__(43)
	  , gOPNExt        = __webpack_require__(122)
	  , $GOPD          = __webpack_require__(121)
	  , $DP            = __webpack_require__(6)
	  , $keys          = __webpack_require__(13)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(44).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(19).f  = $propertyIsEnumerable;
	  __webpack_require__(27).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(26)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33)('asyncIterator');

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33)('observable');

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(126);
	var global        = __webpack_require__(3)
	  , hide          = __webpack_require__(12)
	  , Iterators     = __webpack_require__(25)
	  , TO_STRING_TAG = __webpack_require__(14)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 138 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 139 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(138),
	    baseIteratee = __webpack_require__(139),
	    baseMap = __webpack_require__(140),
	    baseSortBy = __webpack_require__(143),
	    baseUnary = __webpack_require__(144),
	    compareMultiple = __webpack_require__(146),
	    identity = __webpack_require__(152);

	/**
	 * The base implementation of `_.orderBy` without param guards.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	 * @param {string[]} orders The sort orders of `iteratees`.
	 * @returns {Array} Returns the new sorted array.
	 */
	function baseOrderBy(collection, iteratees, orders) {
	  var index = -1;
	  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

	  var result = baseMap(collection, function(value, key, collection) {
	    var criteria = arrayMap(iteratees, function(iteratee) {
	      return iteratee(value);
	    });
	    return { 'criteria': criteria, 'index': ++index, 'value': value };
	  });

	  return baseSortBy(result, function(object, other) {
	    return compareMultiple(object, other, orders);
	  });
	}

	module.exports = baseOrderBy;


/***/ },
/* 142 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;

	/**
	 * The base implementation of `_.range` and `_.rangeRight` which doesn't
	 * coerce arguments.
	 *
	 * @private
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} step The value to increment or decrement by.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Array} Returns the range of numbers.
	 */
	function baseRange(start, end, step, fromRight) {
	  var index = -1,
	      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	      result = Array(length);

	  while (length--) {
	    result[fromRight ? length : ++index] = start;
	    start += step;
	  }
	  return result;
	}

	module.exports = baseRange;


/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.sortBy` which uses `comparer` to define the
	 * sort order of `array` and replaces criteria objects with their corresponding
	 * values.
	 *
	 * @private
	 * @param {Array} array The array to sort.
	 * @param {Function} comparer The function to define sort order.
	 * @returns {Array} Returns `array`.
	 */
	function baseSortBy(array, comparer) {
	  var length = array.length;

	  array.sort(comparer);
	  while (length--) {
	    array[length] = array[length].value;
	  }
	  return array;
	}

	module.exports = baseSortBy;


/***/ },
/* 144 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(155);

	/**
	 * Compares values to sort them in ascending order.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {number} Returns the sort order indicator for `value`.
	 */
	function compareAscending(value, other) {
	  if (value !== other) {
	    var valIsDefined = value !== undefined,
	        valIsNull = value === null,
	        valIsReflexive = value === value,
	        valIsSymbol = isSymbol(value);

	    var othIsDefined = other !== undefined,
	        othIsNull = other === null,
	        othIsReflexive = other === other,
	        othIsSymbol = isSymbol(other);

	    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	        (valIsNull && othIsDefined && othIsReflexive) ||
	        (!valIsDefined && othIsReflexive) ||
	        !valIsReflexive) {
	      return 1;
	    }
	    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	        (othIsNull && valIsDefined && valIsReflexive) ||
	        (!othIsDefined && valIsReflexive) ||
	        !othIsReflexive) {
	      return -1;
	    }
	  }
	  return 0;
	}

	module.exports = compareAscending;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var compareAscending = __webpack_require__(145);

	/**
	 * Used by `_.orderBy` to compare multiple properties of a value to another
	 * and stable sort them.
	 *
	 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	 * specify an order of "desc" for descending or "asc" for ascending sort order
	 * of corresponding values.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {boolean[]|string[]} orders The order to sort by for each property.
	 * @returns {number} Returns the sort order indicator for `object`.
	 */
	function compareMultiple(object, other, orders) {
	  var index = -1,
	      objCriteria = object.criteria,
	      othCriteria = other.criteria,
	      length = objCriteria.length,
	      ordersLength = orders.length;

	  while (++index < length) {
	    var result = compareAscending(objCriteria[index], othCriteria[index]);
	    if (result) {
	      if (index >= ordersLength) {
	        return result;
	      }
	      var order = orders[index];
	      return result * (order == 'desc' ? -1 : 1);
	    }
	  }
	  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	  // that causes it, under certain circumstances, to provide the same value for
	  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	  // for more details.
	  //
	  // This also ensures a stable sort in V8 and other engines.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	  return object.index - other.index;
	}

	module.exports = compareMultiple;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var baseRange = __webpack_require__(142),
	    isIterateeCall = __webpack_require__(149),
	    toFinite = __webpack_require__(158);

	/**
	 * Creates a `_.range` or `_.rangeRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new range function.
	 */
	function createRange(fromRight) {
	  return function(start, end, step) {
	    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	      end = step = undefined;
	    }
	    // Ensure the sign of `-0` is preserved.
	    start = toFinite(start);
	    if (end === undefined) {
	      end = start;
	      start = 0;
	    } else {
	      end = toFinite(end);
	    }
	    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
	    return baseRange(start, end, step, fromRight);
	  };
	}

	module.exports = createRange;


/***/ },
/* 148 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 149 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(148);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(154),
	    now = __webpack_require__(156),
	    toNumber = __webpack_require__(159);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 152 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 153 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 154 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 155 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(150);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var baseOrderBy = __webpack_require__(141),
	    isArray = __webpack_require__(153);

	/**
	 * This method is like `_.sortBy` except that it allows specifying the sort
	 * orders of the iteratees to sort by. If `orders` is unspecified, all values
	 * are sorted in ascending order. Otherwise, specify an order of "desc" for
	 * descending or "asc" for ascending sort order of corresponding values.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	 *  The iteratees to sort by.
	 * @param {string[]} [orders] The sort orders of `iteratees`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {Array} Returns the new sorted array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'fred',   'age': 48 },
	 *   { 'user': 'barney', 'age': 34 },
	 *   { 'user': 'fred',   'age': 40 },
	 *   { 'user': 'barney', 'age': 36 }
	 * ];
	 *
	 * // Sort by `user` in ascending order and by `age` in descending order.
	 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	 */
	function orderBy(collection, iteratees, orders, guard) {
	  if (collection == null) {
	    return [];
	  }
	  if (!isArray(iteratees)) {
	    iteratees = iteratees == null ? [] : [iteratees];
	  }
	  orders = guard ? undefined : orders;
	  if (!isArray(orders)) {
	    orders = orders == null ? [] : [orders];
	  }
	  return baseOrderBy(collection, iteratees, orders);
	}

	module.exports = orderBy;


/***/ },
/* 158 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 160 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);