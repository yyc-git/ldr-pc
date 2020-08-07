/*!
 * vConsole v3.3.4 (https://github.com/Tencent/vConsole)
 * 
 * Tencent is pleased to support the open source community by making vConsole available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VConsole", [], factory);
	else if(typeof exports === 'object')
		exports["VConsole"] = factory();
	else
		root["VConsole"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getDate = getDate;
  _exports.isNumber = isNumber;
  _exports.isString = isString;
  _exports.isArray = isArray;
  _exports.isBoolean = isBoolean;
  _exports.isUndefined = isUndefined;
  _exports.isNull = isNull;
  _exports.isSymbol = isSymbol;
  _exports.isObject = isObject;
  _exports.isFunction = isFunction;
  _exports.isElement = isElement;
  _exports.isWindow = isWindow;
  _exports.isPlainObject = isPlainObject;
  _exports.htmlEncode = htmlEncode;
  _exports.JSONStringify = JSONStringify;
  _exports.getObjAllKeys = getObjAllKeys;
  _exports.getObjName = getObjName;
  _exports.setStorage = setStorage;
  _exports.getStorage = getStorage;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  /*
  Tencent is pleased to support the open source community by making vConsole available.
  
  Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
  
  Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
  http://opensource.org/licenses/MIT
  
  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
  */

  /**
   * Utility Functions
   */

  /**
   * get formatted date by timestamp
   * @param  int    time
   * @return  object
   */
  function getDate(time) {
    var d = time > 0 ? new Date(time) : new Date();
    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
        month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1,
        year = d.getFullYear(),
        hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
        minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
        second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(),
        millisecond = d.getMilliseconds() < 10 ? '0' + d.getMilliseconds() : d.getMilliseconds();

    if (millisecond < 100) {
      millisecond = '0' + millisecond;
    }

    return {
      time: +d,
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond
    };
  }
  /**
   * determines whether the passed value is a specific type
   * @param mixed value
   * @return boolean
   */


  function isNumber(value) {
    return Object.prototype.toString.call(value) == '[object Number]';
  }

  function isString(value) {
    return Object.prototype.toString.call(value) == '[object String]';
  }

  function isArray(value) {
    return Object.prototype.toString.call(value) == '[object Array]';
  }

  function isBoolean(value) {
    return Object.prototype.toString.call(value) == '[object Boolean]';
  }

  function isUndefined(value) {
    return value === undefined;
  }

  function isNull(value) {
    return value === null;
  }

  function isSymbol(value) {
    return Object.prototype.toString.call(value) == '[object Symbol]';
  }

  function isObject(value) {
    return Object.prototype.toString.call(value) == '[object Object]' || // if it isn't a primitive value, then it is a common object
    !isNumber(value) && !isString(value) && !isBoolean(value) && !isArray(value) && !isNull(value) && !isFunction(value) && !isUndefined(value) && !isSymbol(value);
  }

  function isFunction(value) {
    return Object.prototype.toString.call(value) == '[object Function]';
  }

  function isElement(value) {
    return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? value instanceof HTMLElement : //DOM2
    value && _typeof(value) === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
  }

  function isWindow(value) {
    var toString = Object.prototype.toString.call(value);
    return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
  }
  /**
   * check whether an object is plain (using {})
   * @param object obj
   * @return boolean
   */


  function isPlainObject(obj) {
    var hasOwn = Object.prototype.hasOwnProperty; // Must be an Object.

    if (!obj || _typeof(obj) !== 'object' || obj.nodeType || isWindow(obj)) {
      return false;
    }

    try {
      if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
        return false;
      }
    } catch (e) {
      return false;
    }

    var key;

    for (key in obj) {}

    return key === undefined || hasOwn.call(obj, key);
  }
  /**
   * HTML encode a string
   * @param string text
   * @return string
   */


  function htmlEncode(text) {
    return document.createElement('a').appendChild(document.createTextNode(text)).parentNode.innerHTML;
  }
  /**
   * Simple JSON stringify, stringify top level key-value
   */


  function JSONStringify(stringObject) {
    if (!isObject(stringObject) && !isArray(stringObject)) {
      return JSON.stringify(stringObject);
    }

    var prefix = '{',
        suffix = '}';

    if (isArray(stringObject)) {
      prefix = '[';
      suffix = ']';
    }

    var str = prefix;
    var keys = getObjAllKeys(stringObject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = stringObject[key];

      try {
        // key
        if (!isArray(stringObject)) {
          if (isObject(key) || isArray(key) || isSymbol(key)) {
            str += Object.prototype.toString.call(key);
          } else {
            str += key;
          }

          str += ': ';
        } // value


        if (isArray(value)) {
          str += 'Array[' + value.length + ']';
        } else if (isObject(value) || isSymbol(value) || isFunction(value)) {
          str += Object.prototype.toString.call(value);
        } else {
          str += JSON.stringify(value);
        }

        if (i < keys.length - 1) {
          str += ', ';
        }
      } catch (e) {
        continue;
      }
    }

    str += suffix;
    return str;
  }
  /**
   * get an object's all keys ignore whether they are not enumerable
   */


  function getObjAllKeys(obj) {
    if (!isObject(obj) && !isArray(obj)) {
      return [];
    }

    if (isArray(obj)) {
      var m = [];
      obj.forEach(function (_, index) {
        m.push(index);
      });
      return m;
    }

    return Object.getOwnPropertyNames(obj).sort();
  }
  /**
   * get an object's prototype name
   */


  function getObjName(obj) {
    return Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '');
  }
  /**
   * localStorage methods
   */


  function setStorage(key, value) {
    if (!window.localStorage) {
      return;
    }

    key = 'vConsole_' + key;
    localStorage.setItem(key, value);
  }

  function getStorage(key) {
    if (!window.localStorage) {
      return;
    }

    key = 'vConsole_' + key;
    return localStorage.getItem(key);
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tool, _mito) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _mito = _interopRequireDefault(_mito);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /*
  Tencent is pleased to support the open source community by making vConsole available.
  
  Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
  
  Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
  http://opensource.org/licenses/MIT
  
  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
  */

  /**
   * DOM related Functions
   */
  var $ = {};

  if (!Array.from) {
    Array.from = function (collection) {
      var arr = [];

      for (var i = 0; i < collection.length; i++) {
        arr.push(collection[i]);
      }

      return arr;
    };
  }
  /**
   * get single element
   * @public
   */


  $.one = function (selector, contextElement) {
    try {
      return (contextElement || document).querySelector(selector) || undefined;
    } catch (e) {
      return undefined;
    }
  };
  /**
   * get multiple elements
   * @public
   */


  $.all = function (selector, contextElement) {
    try {
      var nodeList = (contextElement || document).querySelectorAll(selector);
      return Array.from(nodeList);
    } catch (e) {
      return [];
    }
  };
  /**
   * add className(s) to an or multiple element(s)
   * @public
   */


  $.addClass = function ($el, className) {
    if (!$el) {
      return;
    }

    if (!(0, _tool.isArray)($el)) {
      $el = [$el];
    }

    for (var i = 0; i < $el.length; i++) {
      var name = $el[i].className || '',
          arr = name.split(' ');

      if (arr.indexOf(className) > -1) {
        continue;
      }

      arr.push(className);
      $el[i].className = arr.join(' ');
    }
  };
  /**
   * remove className(s) from an or multiple element(s)
   * @public
   */


  $.removeClass = function ($el, className) {
    if (!$el) {
      return;
    }

    if (!(0, _tool.isArray)($el)) {
      $el = [$el];
    }

    for (var i = 0; i < $el.length; i++) {
      var arr = $el[i].className.split(' ');

      for (var j = 0; j < arr.length; j++) {
        if (arr[j] == className) {
          arr[j] = '';
        }
      }

      $el[i].className = arr.join(' ').trim();
    }
  };
  /**
   * see whether an element contains a className
   * @public
   */


  $.hasClass = function ($el, className) {
    if (!$el || !$el.classList) {
      return false;
    }

    return $el.classList.contains(className);
  };
  /**
   * bind an event to element(s)
   * @public
   * @param  array    $el      element object or array
   * @param  string    eventType  name of the event
   * @param  function  fn
   * @param  boolean    useCapture
   */


  $.bind = function ($el, eventType, fn, useCapture) {
    if (!$el) {
      return;
    }

    if (!(0, _tool.isArray)($el)) {
      $el = [$el];
    }

    $el.forEach(function (el) {
      el.addEventListener(eventType, fn, !!useCapture);
    });
  };
  /**
   * delegate an event to a parent element
   * @public
   * @param  array     $el        parent element
   * @param  string    eventType  name of the event
   * @param  string    selector   target's selector
   * @param  function  fn
   */


  $.delegate = function ($el, eventType, selector, fn) {
    if (!$el) {
      return;
    }

    $el.addEventListener(eventType, function (e) {
      var targets = $.all(selector, $el);

      if (!targets) {
        return;
      }

      findTarget: for (var i = 0; i < targets.length; i++) {
        var $node = e.target;

        while ($node) {
          if ($node == targets[i]) {
            fn.call($node, e);
            break findTarget;
          }

          $node = $node.parentNode;

          if ($node == $el) {
            break;
          }
        }
      }
    }, false);
  };
  /**
   * simply render a HTML template
   * @param string tpl
   * @param object key-value data
   * @param boolean whether to conver to HTML string
   * @return object|string
   */


  $.render = _mito.default;
  /**
   * export
   */

  var _default = $;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /*
  Tencent is pleased to support the open source community by making vConsole available.
  
  Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
  
  Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
  http://opensource.org/licenses/MIT
  
  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
  */

  /**
   * vConsole Plugin Class
   */
  var VConsolePlugin = /*#__PURE__*/function () {
    function VConsolePlugin(id) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'newPlugin';

      _classCallCheck(this, VConsolePlugin);

      this.id = id;
      this.name = name;
      this.isReady = false;
      this.eventList = {};
    }

    _createClass(VConsolePlugin, [{
      key: "on",

      /**
       * register an event
       * @public
       * @param string
       * @param function
       */
      value: function on(eventName, callback) {
        this.eventList[eventName] = callback;
        return this;
      }
      /**
       * trigger an event
       * @public
       * @param string
       * @param mixed
       */

    }, {
      key: "trigger",
      value: function trigger(eventName, data) {
        if (typeof this.eventList[eventName] === 'function') {
          // registered by `.on()` method
          this.eventList[eventName].call(this, data);
        } else {
          // registered by `.onXxx()` method
          var method = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

          if (typeof this[method] === 'function') {
            this[method].call(this, data);
          }
        }

        return this;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      },
      set: function set(value) {
        if (!value) {
          throw 'Plugin ID cannot be empty';
        }

        this._id = value.toLowerCase();
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      },
      set: function set(value) {
        if (!value) {
          throw 'Plugin name cannot be empty';
        }

        this._name = value;
      }
    }, {
      key: "vConsole",
      get: function get() {
        return this._vConsole || undefined;
      },
      set: function set(value) {
        if (!value) {
          throw 'vConsole cannot be empty';
        }

        this._vConsole = value;
      }
    }]);

    return VConsolePlugin;
  }(); // END class


  var _default = VConsolePlugin;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(1), __webpack_require__(2), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, tool, _query, _plugin, _item, _item_fold, _item_fold_code) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  tool = _interopRequireWildcard(tool);
  _query = _interopRequireDefault(_query);
  _plugin = _interopRequireDefault(_plugin);
  _item = _interopRequireDefault(_item);
  _item_fold = _interopRequireDefault(_item_fold);
  _item_fold_code = _interopRequireDefault(_item_fold_code);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var DEFAULT_MAX_LOG_NUMBER = 1000;
  var ADDED_LOG_TAB_ID = [];
  var preLog = {// _id: string
    // logType: string
    // logText: string
  };

  var VConsoleLogTab = /*#__PURE__*/function (_VConsolePlugin) {
    _inherits(VConsoleLogTab, _VConsolePlugin);

    var _super = _createSuper(VConsoleLogTab);

    function VConsoleLogTab() {
      var _this;

      _classCallCheck(this, VConsoleLogTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      ADDED_LOG_TAB_ID.push(_this.id);
      _this.tplTabbox = ''; // MUST be overwrite in child class

      _this.allowUnformattedLog = true; // `[xxx]` format log

      _this.isReady = false;
      _this.isShow = false;
      _this.$tabbox = null;
      _this.console = {};
      _this.logList = []; // save logs before ready

      _this.isInBottom = true; // whether the panel is in the bottom

      _this.maxLogNumber = DEFAULT_MAX_LOG_NUMBER;
      _this.logNumber = 0;

      _this.mockConsole();

      return _this;
    }
    /**
     * when vConsole is ready,
     * this event will be triggered (after 'add' event)
     * @public
     */


    _createClass(VConsoleLogTab, [{
      key: "onInit",
      value: function onInit() {
        this.$tabbox = _query.default.render(this.tplTabbox, {});
        this.updateMaxLogNumber();
      }
      /**
       * this event will make this plugin be registered as a tab
       * @public
       */

    }, {
      key: "onRenderTab",
      value: function onRenderTab(callback) {
        callback(this.$tabbox);
      }
    }, {
      key: "onAddTopBar",
      value: function onAddTopBar(callback) {
        var that = this;
        var types = ['All', 'Log', 'Info', 'Warn', 'Error'];
        var btnList = [];

        for (var i = 0; i < types.length; i++) {
          btnList.push({
            name: types[i],
            data: {
              type: types[i].toLowerCase()
            },
            className: '',
            onClick: function onClick() {
              if (!_query.default.hasClass(this, 'vc-actived')) {
                that.showLogType(this.dataset.type || 'all');
              } else {
                return false;
              }
            }
          });
        }

        btnList[0].className = 'vc-actived';
        callback(btnList);
      }
    }, {
      key: "onAddTool",
      value: function onAddTool(callback) {
        var that = this;
        var toolList = [{
          name: 'Clear',
          global: false,
          onClick: function onClick() {
            that.clearLog();
            that.vConsole.triggerEvent('clearLog');
          }
        }];
        callback(toolList);
      }
      /**
       * after init
       * @public
       */

    }, {
      key: "onReady",
      value: function onReady() {
        var that = this;
        that.isReady = true; // log type filter

        var $subTabs = _query.default.all('.vc-subtab', that.$tabbox);

        _query.default.bind($subTabs, 'click', function (e) {
          e.preventDefault();

          if (_query.default.hasClass(this, 'vc-actived')) {
            return false;
          }

          _query.default.removeClass($subTabs, 'vc-actived');

          _query.default.addClass(this, 'vc-actived');

          var logType = this.dataset.type,
              $log = _query.default.one('.vc-log', that.$tabbox);

          _query.default.removeClass($log, 'vc-log-partly-log');

          _query.default.removeClass($log, 'vc-log-partly-info');

          _query.default.removeClass($log, 'vc-log-partly-warn');

          _query.default.removeClass($log, 'vc-log-partly-error');

          if (logType == 'all') {
            _query.default.removeClass($log, 'vc-log-partly');
          } else {
            _query.default.addClass($log, 'vc-log-partly');

            _query.default.addClass($log, 'vc-log-partly-' + logType);
          }
        });

        var $content = _query.default.one('.vc-content');

        _query.default.bind($content, 'scroll', function (e) {
          if (!that.isShow) {
            return;
          }

          if ($content.scrollTop + $content.offsetHeight >= $content.scrollHeight) {
            that.isInBottom = true;
          } else {
            that.isInBottom = false;
          }
        });

        for (var i = 0; i < that.logList.length; i++) {
          that.printLog(that.logList[i]);
        }

        that.logList = [];
      }
      /**
       * before remove
       * @public
       */

    }, {
      key: "onRemove",
      value: function onRemove() {
        window.console.log = this.console.log;
        window.console.info = this.console.info;
        window.console.warn = this.console.warn;
        window.console.debug = this.console.debug;
        window.console.error = this.console.error;
        window.console.time = this.console.time;
        window.console.timeEnd = this.console.timeEnd;
        window.console.clear = this.console.clear;
        this.console = {};
        var idx = ADDED_LOG_TAB_ID.indexOf(this.id);

        if (idx > -1) {
          ADDED_LOG_TAB_ID.splice(idx, 1);
        }
      }
    }, {
      key: "onShow",
      value: function onShow() {
        this.isShow = true;

        if (this.isInBottom == true) {
          this.autoScrollToBottom();
        }
      }
    }, {
      key: "onHide",
      value: function onHide() {
        this.isShow = false;
      }
    }, {
      key: "onShowConsole",
      value: function onShowConsole() {
        if (this.isInBottom == true) {
          this.autoScrollToBottom();
        }
      }
    }, {
      key: "onUpdateOption",
      value: function onUpdateOption() {
        if (this.vConsole.option.maxLogNumber != this.maxLogNumber) {
          this.updateMaxLogNumber();
          this.limitMaxLogs();
        }
      }
    }, {
      key: "updateMaxLogNumber",
      value: function updateMaxLogNumber() {
        this.maxLogNumber = this.vConsole.option.maxLogNumber || DEFAULT_MAX_LOG_NUMBER;
        this.maxLogNumber = Math.max(1, this.maxLogNumber);
      }
    }, {
      key: "limitMaxLogs",
      value: function limitMaxLogs() {
        if (!this.isReady) {
          return;
        }

        while (this.logNumber > this.maxLogNumber) {
          var $firstItem = _query.default.one('.vc-item', this.$tabbox);

          if (!$firstItem) {
            break;
          }

          $firstItem.parentNode.removeChild($firstItem);
          this.logNumber--;
        }
      }
    }, {
      key: "showLogType",
      value: function showLogType(logType) {
        var $log = _query.default.one('.vc-log', this.$tabbox);

        _query.default.removeClass($log, 'vc-log-partly-log');

        _query.default.removeClass($log, 'vc-log-partly-info');

        _query.default.removeClass($log, 'vc-log-partly-warn');

        _query.default.removeClass($log, 'vc-log-partly-error');

        if (logType == 'all') {
          _query.default.removeClass($log, 'vc-log-partly');
        } else {
          _query.default.addClass($log, 'vc-log-partly');

          _query.default.addClass($log, 'vc-log-partly-' + logType);
        }
      }
    }, {
      key: "autoScrollToBottom",
      value: function autoScrollToBottom() {
        if (!this.vConsole.option.disableLogScrolling) {
          this.scrollToBottom();
        }
      }
    }, {
      key: "scrollToBottom",
      value: function scrollToBottom() {
        var $content = _query.default.one('.vc-content');

        if ($content) {
          $content.scrollTop = $content.scrollHeight - $content.offsetHeight;
        }
      }
      /**
       * replace window.console with vConsole method
       * @private
       */

    }, {
      key: "mockConsole",
      value: function mockConsole() {
        var _this2 = this;

        var that = this;
        var methodList = ['log', 'info', 'warn', 'debug', 'error'];

        if (!window.console) {
          window.console = {};
        } else {
          methodList.map(function (method) {
            that.console[method] = window.console[method];
          });
          that.console.time = window.console.time;
          that.console.timeEnd = window.console.timeEnd;
          that.console.clear = window.console.clear;
        }

        methodList.map(function (method) {
          window.console[method] = function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this2.printLog({
              logType: method,
              logs: args
            });
          };
        });
        var timeLog = {};

        window.console.time = function (label) {
          timeLog[label] = Date.now();
        };

        window.console.timeEnd = function (label) {
          var pre = timeLog[label];

          if (pre) {
            console.log(label + ':', Date.now() - pre + 'ms');
            delete timeLog[label];
          } else {
            console.log(label + ': 0ms');
          }
        };

        window.console.clear = function () {
          that.clearLog();

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          that.console.clear.apply(window.console, args);
        };
      }
    }, {
      key: "clearLog",
      value: function clearLog() {
        _query.default.one('.vc-log', this.$tabbox).innerHTML = '';
        this.logNumber = 0;
        preLog = {};
      }
      /**
       * print log to origin console
       * @protected
       */

    }, {
      key: "printOriginLog",
      value: function printOriginLog(item) {
        if (typeof this.console[item.logType] === 'function') {
          this.console[item.logType].apply(window.console, item.logs);
        }
      }
      /**
       * print a log to log box
       * @protected
       * @param  string  _id        random unique id
       * @param  string  tabName    default|system
       * @param  string  logType    log|info|debug|error|warn
       * @param  array   logs       `logs` or `content` can't be empty
       * @param  object  content    `logs` or `content` can't be empty
       * @param  boolean noOrigin
       * @param  int     date
       * @param  string  style
       */

    }, {
      key: "printLog",
      value: function printLog(item) {
        var logs = item.logs || [];

        if (!logs.length && !item.content) {
          return;
        } // copy logs as a new array


        logs = [].slice.call(logs || []); // check `[default]` format

        var shouldBeHere = true;
        var pattern = /^\[(\w+)\]$/i;
        var targetTabID = '';
        var isInAddedTab = false;

        if (tool.isString(logs[0])) {
          var match = logs[0].match(pattern);

          if (match !== null && match.length > 0) {
            targetTabID = match[1].toLowerCase();
            isInAddedTab = ADDED_LOG_TAB_ID.indexOf(targetTabID) > -1;
          }
        }

        if (targetTabID === this.id) {
          // target tab is current tab
          shouldBeHere = true;
        } else if (isInAddedTab === true) {
          // target tab is not current tab, but in added tab list
          // so throw this log to other tab
          shouldBeHere = false;
        } else {
          // target tab is not in added tab list
          if (this.id === 'default') {
            // show this log in default tab
            shouldBeHere = true;
          } else {
            shouldBeHere = false;
          }
        }

        if (!shouldBeHere) {
          // ignore this log and throw it to origin console
          if (!item.noOrigin) {
            this.printOriginLog(item);
          }

          return;
        } // add id


        if (!item._id) {
          item._id = '__vc_' + Math.random().toString(36).substring(2, 8);
        } // save log date


        if (!item.date) {
          item.date = +new Date();
        } // if vConsole is not ready, save current log to logList


        if (!this.isReady) {
          this.logList.push(item);
          return;
        } // remove `[xxx]` format


        if (tool.isString(logs[0]) && isInAddedTab) {
          logs[0] = logs[0].replace(pattern, '');

          if (logs[0] === '') {
            logs.shift();
          }
        } // make for previous log


        var curLog = {
          _id: item._id,
          logType: item.logType,
          logText: [],
          hasContent: !!item.content,
          count: 1
        };

        for (var i = 0; i < logs.length; i++) {
          if (tool.isFunction(logs[i])) {
            curLog.logText.push(logs[i].toString());
          } else if (tool.isObject(logs[i]) || tool.isArray(logs[i])) {
            curLog.logText.push(tool.JSONStringify(logs[i]));
          } else {
            curLog.logText.push(logs[i]);
          }
        }

        curLog.logText = curLog.logText.join(' '); // check repeat

        if (!curLog.hasContent && preLog.logType === curLog.logType && preLog.logText === curLog.logText) {
          this.printRepeatLog();
        } else {
          this.printNewLog(item, logs); // save previous log

          preLog = curLog;
        } // scroll to bottom if it is in the bottom before


        if (this.isInBottom && this.isShow) {
          this.autoScrollToBottom();
        } // print log to origin console


        if (!item.noOrigin) {
          this.printOriginLog(item);
        }
      }
      /**
       *
       * @protected
       */

    }, {
      key: "printRepeatLog",
      value: function printRepeatLog() {
        var $item = _query.default.one('#' + preLog._id);

        var $repeat = _query.default.one('.vc-item-repeat', $item);

        if (!$repeat) {
          $repeat = document.createElement('i');
          $repeat.className = 'vc-item-repeat';
          $item.insertBefore($repeat, $item.lastChild);
        }

        if (!preLog.count) {// preLog.count = 1;
        }

        preLog.count++;
        $repeat.innerHTML = preLog.count;
        return;
      }
      /**
       *
       * @protected
       */

    }, {
      key: "printNewLog",
      value: function printNewLog(item, logs) {
        // create line
        var $line = _query.default.render(_item.default, {
          _id: item._id,
          logType: item.logType,
          style: item.style || ''
        }); // find %c keyword in first log only


        var patternC = /(\%c )|( \%c)/g;
        var logStyle = [];

        if (tool.isString(logs[0]) && patternC.test(logs[0])) {
          // '%c aaa %c bbb'  =>  ['aaa', 'bbb']
          var _logs = logs[0].split(patternC).filter(function (val) {
            return val !== undefined && val !== '' && !/ ?\%c ?/.test(val);
          });

          var matchC = logs[0].match(patternC); // use the following string logs as style

          for (var i = 0; i < matchC.length; i++) {
            if (tool.isString(logs[i + 1])) {
              logStyle.push(logs[i + 1]);
            }
          } // add remain logs


          for (var _i = matchC.length + 1; _i < logs.length; _i++) {
            _logs.push(logs[_i]);
          }

          logs = _logs;
        }

        var $content = _query.default.one('.vc-item-content', $line); // generate content from item.logs


        for (var _i2 = 0; _i2 < logs.length; _i2++) {
          var log = void 0;

          try {
            if (logs[_i2] === '') {
              // ignore empty string
              continue;
            } else if (tool.isFunction(logs[_i2])) {
              // convert function to string
              log = '<span> ' + logs[_i2].toString() + '</span>';
            } else if (tool.isObject(logs[_i2]) || tool.isArray(logs[_i2])) {
              // object or array
              log = this.getFoldedLine(logs[_i2]);
            } else {
              // default
              log = (logStyle[_i2] ? "<span style=\"".concat(logStyle[_i2], "\"> ") : '<span> ') + tool.htmlEncode(logs[_i2]).replace(/\n/g, '<br/>') + '</span>';
            }
          } catch (e) {
            log = '<span> [' + _typeof(logs[_i2]) + ']</span>';
          }

          if (log) {
            if (typeof log === 'string') $content.insertAdjacentHTML('beforeend', log);else $content.insertAdjacentElement('beforeend', log);
          }
        } // generate content from item.content


        if (tool.isObject(item.content)) {
          $content.insertAdjacentElement('beforeend', item.content);
        } // render to panel


        if (this.formatLine) $line = this.formatLine($line);

        _query.default.one('.vc-log', this.$tabbox).insertAdjacentElement('beforeend', $line); // remove overflow logs


        this.logNumber++;
        this.limitMaxLogs();
      }
      /**
       * generate the HTML element of a folded line
       * @protected
       */

    }, {
      key: "getFoldedLine",
      value: function getFoldedLine(obj, outer) {
        var that = this;

        if (!outer) {
          var json = tool.JSONStringify(obj);
          var preview = json.substr(0, 36);
          outer = tool.getObjName(obj);

          if (json.length > 36) {
            preview += '...';
          }

          outer += ' ' + preview;
        }

        var $line = _query.default.render(_item_fold.default, {
          outer: outer,
          lineType: 'obj'
        });

        _query.default.bind(_query.default.one('.vc-fold-outer', $line), 'click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (_query.default.hasClass($line, 'vc-toggle')) {
            _query.default.removeClass($line, 'vc-toggle');

            _query.default.removeClass(_query.default.one('.vc-fold-inner', $line), 'vc-toggle');

            _query.default.removeClass(_query.default.one('.vc-fold-outer', $line), 'vc-toggle');
          } else {
            _query.default.addClass($line, 'vc-toggle');

            _query.default.addClass(_query.default.one('.vc-fold-inner', $line), 'vc-toggle');

            _query.default.addClass(_query.default.one('.vc-fold-outer', $line), 'vc-toggle');
          }

          var $content = _query.default.one('.vc-fold-inner', $line);

          setTimeout(function () {
            if ($content.children.length == 0 && !!obj) {
              // render object's keys
              var keys = tool.getObjAllKeys(obj);

              for (var i = 0; i < keys.length; i++) {
                var val = void 0,
                    valueType = 'undefined',
                    keyType = '';

                try {
                  val = obj[keys[i]];
                } catch (e) {
                  continue;
                } // handle value


                if (tool.isString(val)) {
                  valueType = 'string';
                  val = '"' + val + '"';
                } else if (tool.isNumber(val)) {
                  valueType = 'number';
                } else if (tool.isBoolean(val)) {
                  valueType = 'boolean';
                } else if (tool.isNull(val)) {
                  valueType = 'null';
                  val = 'null';
                } else if (tool.isUndefined(val)) {
                  valueType = 'undefined';
                  val = 'undefined';
                } else if (tool.isFunction(val)) {
                  valueType = 'function';
                  val = 'function()';
                } else if (tool.isSymbol(val)) {
                  valueType = 'symbol';
                } // render


                var $sub = void 0;

                if (tool.isArray(val)) {
                  var name = tool.getObjName(val) + '[' + val.length + ']';
                  $sub = that.getFoldedLine(val, _query.default.render(_item_fold_code.default, {
                    key: keys[i],
                    keyType: keyType,
                    value: name,
                    valueType: 'array'
                  }, true));
                } else if (tool.isObject(val)) {
                  var _name = tool.getObjName(val);

                  $sub = that.getFoldedLine(val, _query.default.render(_item_fold_code.default, {
                    key: tool.htmlEncode(keys[i]),
                    keyType: keyType,
                    value: _name,
                    valueType: 'object'
                  }, true));
                } else {
                  if (obj.hasOwnProperty && !obj.hasOwnProperty(keys[i])) {
                    keyType = 'private';
                  }

                  var renderData = {
                    lineType: 'kv',
                    key: tool.htmlEncode(keys[i]),
                    keyType: keyType,
                    value: tool.htmlEncode(val),
                    valueType: valueType
                  };
                  $sub = _query.default.render(_item_fold.default, renderData);
                }

                $content.insertAdjacentElement('beforeend', $sub);
              } // render object's prototype


              if (tool.isObject(obj)) {
                var proto = obj.__proto__,
                    $proto;

                if (tool.isObject(proto)) {
                  $proto = that.getFoldedLine(proto, _query.default.render(_item_fold_code.default, {
                    key: '__proto__',
                    keyType: 'private',
                    value: tool.getObjName(proto),
                    valueType: 'object'
                  }, true));
                } else {
                  // if proto is not an object, it should be `null`
                  $proto = _query.default.render(_item_fold_code.default, {
                    key: '__proto__',
                    keyType: 'private',
                    value: 'null',
                    valueType: 'null'
                  });
                }

                $content.insertAdjacentElement('beforeend', $proto);
              }
            }
          });
          return false;
        });

        return $line;
      }
    }]);

    return VConsoleLogTab;
  }(_plugin.default); // END class


  VConsoleLogTab.AddedLogID = [];
  var _default = VConsoleLogTab;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _symbol, _core) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _core = _interopRequireDefault(_core);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /*
  Tencent is pleased to support the open source community by making vConsole available.
  
  Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
  
  Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
  http://opensource.org/licenses/MIT
  
  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
  */

  /**
   * A Front-End Console Panel for Mobile Webpage
   */
  // global
  // classes
  // export
  var _default = _core.default;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  if (typeof Symbol === 'undefined') {
    window.Symbol = function _Symbol() {};

    var key = '__symbol_iterator_key';
    window.Symbol.iterator = key;

    Array.prototype[key] = function symbolIterator() {
      var that = this;
      var i = 0;
      return {
        next: function next() {
          return {
            done: that.length === i,
            value: that.length === i ? undefined : that[i++]
          };
        }
      };
    };
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9), __webpack_require__(10), __webpack_require__(0), __webpack_require__(1), __webpack_require__(12), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(2), __webpack_require__(3), __webpack_require__(22), __webpack_require__(25), __webpack_require__(27), __webpack_require__(31), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _transitionEnd, _package, tool, _query, _core, _core2, _tabbar, _tabbox, _topbar_item, _tool_item, _plugin, _log, _default2, _system, _network, _element, _storage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _package = _interopRequireDefault(_package);
  tool = _interopRequireWildcard(tool);
  _query = _interopRequireDefault(_query);
  _core2 = _interopRequireDefault(_core2);
  _tabbar = _interopRequireDefault(_tabbar);
  _tabbox = _interopRequireDefault(_tabbox);
  _topbar_item = _interopRequireDefault(_topbar_item);
  _tool_item = _interopRequireDefault(_tool_item);
  _plugin = _interopRequireDefault(_plugin);
  _log = _interopRequireDefault(_log);
  _default2 = _interopRequireDefault(_default2);
  _system = _interopRequireDefault(_system);
  _network = _interopRequireDefault(_network);
  _element = _interopRequireDefault(_element);
  _storage = _interopRequireDefault(_storage);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var VCONSOLE_ID = '#__vconsole';

  var VConsole = /*#__PURE__*/function () {
    function VConsole(opt) {
      _classCallCheck(this, VConsole);

      if (!!_query.default.one(VCONSOLE_ID)) {
        console.debug('vConsole is already exists.');
        return;
      }

      var that = this;
      this.version = _package.default.version;
      this.$dom = null;
      this.isInited = false;
      this.option = {
        defaultPlugins: ['system', 'network', 'element', 'storage']
      };
      this.activedTab = '';
      this.tabList = [];
      this.pluginList = {};
      this.switchPos = {
        x: 10,
        // right
        y: 10,
        // bottom
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      }; // export helper functions to public

      this.tool = tool;
      this.$ = _query.default; // merge options

      if (tool.isObject(opt)) {
        for (var key in opt) {
          this.option[key] = opt[key];
        }
      } // add built-in plugins


      this._addBuiltInPlugins(); // try to init


      var _onload = function _onload() {
        if (that.isInited) {
          return;
        }

        that._render();

        that._mockTap();

        that._bindEvent();

        that._autoRun();
      };

      if (document !== undefined) {
        if (document.readyState === 'loading') {
          _query.default.bind(window, 'DOMContentLoaded', _onload);
        } else {
          _onload();
        }
      } else {
        // if document does not exist, wait for it
        var _timer;

        var _pollingDocument = function _pollingDocument() {
          if (!!document && document.readyState == 'complete') {
            _timer && clearTimeout(_timer);

            _onload();
          } else {
            _timer = setTimeout(_pollingDocument, 1);
          }
        };

        _timer = setTimeout(_pollingDocument, 1);
      }
    }
    /**
     * add built-in plugins
     */


    _createClass(VConsole, [{
      key: "_addBuiltInPlugins",
      value: function _addBuiltInPlugins() {
        // add default log plugin
        this.addPlugin(new _default2.default('default', 'Log')); // add other built-in plugins according to user's config

        var list = this.option.defaultPlugins;
        var plugins = {
          'system': {
            proto: _system.default,
            name: 'System'
          },
          'network': {
            proto: _network.default,
            name: 'Network'
          },
          'element': {
            proto: _element.default,
            name: 'Element'
          },
          'storage': {
            proto: _storage.default,
            name: 'Storage'
          }
        };

        if (!!list && tool.isArray(list)) {
          for (var i = 0; i < list.length; i++) {
            var tab = plugins[list[i]];

            if (!!tab) {
              this.addPlugin(new tab.proto(list[i], tab.name));
            } else {
              console.debug('Unrecognized default plugin ID:', list[i]);
            }
          }
        }
      }
      /**
       * render panel DOM
       * @private
       */

    }, {
      key: "_render",
      value: function _render() {
        if (!_query.default.one(VCONSOLE_ID)) {
          var e = document.createElement('div');
          e.innerHTML = _core2.default;
          document.documentElement.insertAdjacentElement('beforeend', e.children[0]);
        }

        this.$dom = _query.default.one(VCONSOLE_ID); // reposition switch button

        var $switch = _query.default.one('.vc-switch', this.$dom);

        var switchX = tool.getStorage('switch_x') * 1,
            switchY = tool.getStorage('switch_y') * 1;

        if (switchX || switchY) {
          // check edge
          if (switchX + $switch.offsetWidth > document.documentElement.offsetWidth) {
            switchX = document.documentElement.offsetWidth - $switch.offsetWidth;
          }

          if (switchY + $switch.offsetHeight > document.documentElement.offsetHeight) {
            switchY = document.documentElement.offsetHeight - $switch.offsetHeight;
          }

          if (switchX < 0) {
            switchX = 0;
          }

          if (switchY < 0) {
            switchY = 0;
          }

          this.switchPos.x = switchX;
          this.switchPos.y = switchY;
          _query.default.one('.vc-switch').style.right = switchX + 'px';
          _query.default.one('.vc-switch').style.bottom = switchY + 'px';
        } // modify font-size


        var dpr = window.devicePixelRatio || 1;
        var viewportEl = document.querySelector('[name="viewport"]');

        if (viewportEl && viewportEl.content) {
          var initialScale = viewportEl.content.match(/initial\-scale\=\d+(\.\d+)?/);
          var scale = initialScale ? parseFloat(initialScale[0].split('=')[1]) : 1;

          if (scale < 1) {
            this.$dom.style.fontSize = 13 * dpr + 'px';
          }
        } // remove from less to present transition effect


        _query.default.one('.vc-mask', this.$dom).style.display = 'none'; // set theme

        if (this.option.theme) {
          this.$dom.setAttribute('data-theme', this.option.theme);
        }
      }
    }, {
      key: "_mockTap",

      /**
       * simulate tap event by touchstart & touchend
       * @private
       */
      value: function _mockTap() {
        var tapTime = 700,
            // maximun tap interval
        tapBoundary = 10; // max tap move distance

        var lastTouchStartTime,
            touchstartX,
            touchstartY,
            touchHasMoved = false,
            targetElem = null;
        this.$dom.addEventListener('touchstart', function (e) {
          // todo: if double click
          if (lastTouchStartTime === undefined) {
            var touch = e.targetTouches[0];
            touchstartX = touch.pageX;
            touchstartY = touch.pageY;
            lastTouchStartTime = e.timeStamp;
            targetElem = e.target.nodeType === Node.TEXT_NODE ? e.target.parentNode : e.target;
          }
        }, false);
        this.$dom.addEventListener('touchmove', function (e) {
          var touch = e.changedTouches[0];

          if (Math.abs(touch.pageX - touchstartX) > tapBoundary || Math.abs(touch.pageY - touchstartY) > tapBoundary) {
            touchHasMoved = true;
          }
        });
        this.$dom.addEventListener('touchend', function (e) {
          // move and time within limits, manually trigger `click` event
          if (touchHasMoved === false && e.timeStamp - lastTouchStartTime < tapTime && targetElem != null) {
            var tagName = targetElem.tagName.toLowerCase(),
                needFocus = false;

            switch (tagName) {
              case 'textarea':
                // focus
                needFocus = true;
                break;

              case 'input':
                switch (targetElem.type) {
                  case 'button':
                  case 'checkbox':
                  case 'file':
                  case 'image':
                  case 'radio':
                  case 'submit':
                    needFocus = false;
                    break;

                  default:
                    needFocus = !targetElem.disabled && !targetElem.readOnly;
                }

              default:
                break;
            }

            if (needFocus) {
              targetElem.focus();
            } else if (typeof window.getSelection !== 'function' || !getSelection().rangeCount) {
              e.preventDefault(); // prevent click 300ms later
            }

            var touch = e.changedTouches[0];
            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
            event.forwardedTouchEvent = true;
            event.initEvent('click', true, true);
            targetElem.dispatchEvent(event);
          } // reset values


          lastTouchStartTime = undefined;
          touchHasMoved = false;
          targetElem = null;
        }, false);
      }
      /**
       * bind DOM events
       * @private
       */

    }, {
      key: "_bindEvent",
      value: function _bindEvent() {
        var that = this; // drag & drop switch button

        var $switch = _query.default.one('.vc-switch', that.$dom);

        _query.default.bind($switch, 'touchstart', function (e) {
          that.switchPos.startX = e.touches[0].pageX;
          that.switchPos.startY = e.touches[0].pageY;
        });

        _query.default.bind($switch, 'touchend', function (e) {
          that.switchPos.x = that.switchPos.endX;
          that.switchPos.y = that.switchPos.endY;
          that.switchPos.startX = 0;
          that.switchPos.startY = 0;
          tool.setStorage('switch_x', that.switchPos.x);
          tool.setStorage('switch_y', that.switchPos.y);
        });

        _query.default.bind($switch, 'touchmove', function (e) {
          if (e.touches.length > 0) {
            var offsetX = e.touches[0].pageX - that.switchPos.startX,
                offsetY = e.touches[0].pageY - that.switchPos.startY;
            var x = that.switchPos.x - offsetX,
                y = that.switchPos.y - offsetY; // check edge

            if (x + $switch.offsetWidth > document.documentElement.offsetWidth) {
              x = document.documentElement.offsetWidth - $switch.offsetWidth;
            }

            if (y + $switch.offsetHeight > document.documentElement.offsetHeight) {
              y = document.documentElement.offsetHeight - $switch.offsetHeight;
            }

            if (x < 0) {
              x = 0;
            }

            if (y < 0) {
              y = 0;
            }

            $switch.style.right = x + 'px';
            $switch.style.bottom = y + 'px';
            that.switchPos.endX = x;
            that.switchPos.endY = y;
            e.preventDefault();
          }
        }); // show console panel


        _query.default.bind(_query.default.one('.vc-switch', that.$dom), 'click', function () {
          that.show();
        }); // hide console panel


        _query.default.bind(_query.default.one('.vc-hide', that.$dom), 'click', function () {
          that.hide();
        }); // hide console panel when tap background mask


        var $mask = _query.default.one('.vc-mask', this.$dom);

        var $panel = _query.default.one('.vc-panel', this.$dom);

        var transitionEnd = window.transitionEnd($mask).whichTransitionEnd();

        var onMaskTransitionEnd = function onMaskTransitionEnd() {
          $mask.style.display = 'none';
          $panel.style.display = 'none';
        };

        if (transitionEnd) {
          _query.default.bind($mask, transitionEnd, onMaskTransitionEnd);
        } else {
          onMaskTransitionEnd();
        }

        _query.default.bind($mask, 'click', function (e) {
          if (e.target != _query.default.one('.vc-mask')) {
            return false;
          }

          that.hide();
        }); // show tab box


        _query.default.delegate(_query.default.one('.vc-tabbar', that.$dom), 'click', '.vc-tab', function (e) {
          var tabName = this.dataset.tab;

          if (tabName == that.activedTab) {
            return;
          }

          that.showTab(tabName);
        }); // after console panel, trigger a transitionend event to make panel's property 'display' change from 'block' to 'none'


        var onPanelTransitionEnd = function onPanelTransitionEnd(target) {
          if (!_query.default.hasClass(that.$dom, 'vc-toggle')) {
            target.style.display = 'none';
          }
        };

        if (transitionEnd) {
          _query.default.bind($panel, transitionEnd, function (e) {
            if (e.target != $panel) {
              return false;
            }

            onPanelTransitionEnd(e.target);
          });
        } else {
          onPanelTransitionEnd($panel);
        } // disable background scrolling


        var $content = _query.default.one('.vc-content', that.$dom);

        var preventMove = false;

        _query.default.bind($content, 'touchstart', function (e) {
          var top = $content.scrollTop,
              totalScroll = $content.scrollHeight,
              currentScroll = top + $content.offsetHeight;

          if (top === 0) {
            // when content is on the top,
            // reset scrollTop to lower position to prevent iOS apply scroll action to background
            $content.scrollTop = 1; // however, when content's height is less than its container's height,
            // scrollTop always equals to 0 (it is always on the top),
            // so we need to prevent scroll event manually

            if ($content.scrollTop === 0) {
              if (!_query.default.hasClass(e.target, 'vc-cmd-input')) {
                // skip input
                preventMove = true;
              }
            }
          } else if (currentScroll === totalScroll) {
            // when content is on the bottom,
            // do similar processing
            $content.scrollTop = top - 1;

            if ($content.scrollTop === top) {
              if (!_query.default.hasClass(e.target, 'vc-cmd-input')) {
                preventMove = true;
              }
            }
          }
        });

        _query.default.bind($content, 'touchmove', function (e) {
          if (preventMove) {
            e.preventDefault();
          }
        });

        _query.default.bind($content, 'touchend', function (e) {
          preventMove = false;
        });
      }
    }, {
      key: "_autoRun",

      /**
       * auto run after initialization
       * @private
       */
      value: function _autoRun() {
        this.isInited = true; // init plugins

        for (var id in this.pluginList) {
          this._initPlugin(this.pluginList[id]);
        } // show first tab


        if (this.tabList.length > 0) {
          this.showTab(this.tabList[0]);
        }

        this.triggerEvent('ready');
      }
      /**
       * trigger a vConsole.option event
       * @protect
       */

    }, {
      key: "triggerEvent",
      value: function triggerEvent(eventName, param) {
        eventName = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

        if (tool.isFunction(this.option[eventName])) {
          this.option[eventName].apply(this, param);
        }
      }
      /**
       * init a plugin
       * @private
       */

    }, {
      key: "_initPlugin",
      value: function _initPlugin(plugin) {
        var that = this;
        plugin.vConsole = this; // start init

        plugin.trigger('init'); // render tab (if it is a tab plugin then it should has tab-related events)

        plugin.trigger('renderTab', function (tabboxHTML) {
          // add to tabList
          that.tabList.push(plugin.id); // render tabbar

          var $tabbar = _query.default.render(_tabbar.default, {
            id: plugin.id,
            name: plugin.name
          });

          _query.default.one('.vc-tabbar', that.$dom).insertAdjacentElement('beforeend', $tabbar); // render tabbox


          var $tabbox = _query.default.render(_tabbox.default, {
            id: plugin.id
          });

          if (!!tabboxHTML) {
            if (tool.isString(tabboxHTML)) {
              $tabbox.innerHTML += tabboxHTML;
            } else if (tool.isFunction(tabboxHTML.appendTo)) {
              tabboxHTML.appendTo($tabbox);
            } else if (tool.isElement(tabboxHTML)) {
              $tabbox.insertAdjacentElement('beforeend', tabboxHTML);
            }
          }

          _query.default.one('.vc-content', that.$dom).insertAdjacentElement('beforeend', $tabbox);
        }); // render top bar

        plugin.trigger('addTopBar', function (btnList) {
          if (!btnList) {
            return;
          }

          var $topbar = _query.default.one('.vc-topbar', that.$dom);

          var _loop = function _loop(i) {
            var item = btnList[i];

            var $item = _query.default.render(_topbar_item.default, {
              name: item.name || 'Undefined',
              className: item.className || '',
              pluginID: plugin.id
            });

            if (item.data) {
              for (var k in item.data) {
                $item.dataset[k] = item.data[k];
              }
            }

            if (tool.isFunction(item.onClick)) {
              _query.default.bind($item, 'click', function (e) {
                var enable = item.onClick.call($item);

                if (enable === false) {// do nothing
                } else {
                  _query.default.removeClass(_query.default.all('.vc-topbar-' + plugin.id), 'vc-actived');

                  _query.default.addClass($item, 'vc-actived');
                }
              });
            }

            $topbar.insertAdjacentElement('beforeend', $item);
          };

          for (var i = 0; i < btnList.length; i++) {
            _loop(i);
          }
        }); // render tool bar

        plugin.trigger('addTool', function (toolList) {
          if (!toolList) {
            return;
          }

          var $defaultBtn = _query.default.one('.vc-tool-last', that.$dom);

          var _loop2 = function _loop2(i) {
            var item = toolList[i];

            var $item = _query.default.render(_tool_item.default, {
              name: item.name || 'Undefined',
              pluginID: plugin.id
            });

            if (item.global == true) {
              _query.default.addClass($item, 'vc-global-tool');
            }

            if (tool.isFunction(item.onClick)) {
              _query.default.bind($item, 'click', function (e) {
                item.onClick.call($item);
              });
            }

            $defaultBtn.parentNode.insertBefore($item, $defaultBtn);
          };

          for (var i = 0; i < toolList.length; i++) {
            _loop2(i);
          }
        }); // end init

        plugin.isReady = true;
        plugin.trigger('ready');
      }
      /**
       * trigger an event for each plugin
       * @private
       */

    }, {
      key: "_triggerPluginsEvent",
      value: function _triggerPluginsEvent(eventName) {
        for (var id in this.pluginList) {
          if (this.pluginList[id].isReady) {
            this.pluginList[id].trigger(eventName);
          }
        }
      }
      /**
       * trigger an event by plugin's name
       * @private
       */

    }, {
      key: "_triggerPluginEvent",
      value: function _triggerPluginEvent(pluginName, eventName) {
        var plugin = this.pluginList[pluginName];

        if (!!plugin && plugin.isReady) {
          plugin.trigger(eventName);
        }
      }
      /**
       * add a new plugin
       * @public
       * @param object VConsolePlugin object
       * @return boolean
       */

    }, {
      key: "addPlugin",
      value: function addPlugin(plugin) {
        // ignore this plugin if it has already been installed
        if (this.pluginList[plugin.id] !== undefined) {
          console.debug('Plugin ' + plugin.id + ' has already been added.');
          return false;
        }

        this.pluginList[plugin.id] = plugin; // init plugin only if vConsole is ready

        if (this.isInited) {
          this._initPlugin(plugin); // if it's the first plugin, show it by default


          if (this.tabList.length == 1) {
            this.showTab(this.tabList[0]);
          }
        }

        return true;
      }
      /**
       * remove a plugin
       * @public
       * @param string pluginID
       * @return boolean
       */

    }, {
      key: "removePlugin",
      value: function removePlugin(pluginID) {
        pluginID = (pluginID + '').toLowerCase();
        var plugin = this.pluginList[pluginID]; // skip if is has not been installed

        if (plugin === undefined) {
          console.debug('Plugin ' + pluginID + ' does not exist.');
          return false;
        } // trigger `remove` event before uninstall


        plugin.trigger('remove'); // the plugin will not be initialized before vConsole is ready,
        // so the plugin does not need to handle DOM-related actions in this case

        if (this.isInited) {
          var $tabbar = _query.default.one('#__vc_tab_' + pluginID);

          $tabbar && $tabbar.parentNode.removeChild($tabbar); // remove topbar

          var $topbar = _query.default.all('.vc-topbar-' + pluginID, this.$dom);

          for (var i = 0; i < $topbar.length; i++) {
            $topbar[i].parentNode.removeChild($topbar[i]);
          } // remove content


          var $content = _query.default.one('#__vc_log_' + pluginID);

          $content && $content.parentNode.removeChild($content); // remove tool bar

          var $toolbar = _query.default.all('.vc-tool-' + pluginID, this.$dom);

          for (var _i = 0; _i < $toolbar.length; _i++) {
            $toolbar[_i].parentNode.removeChild($toolbar[_i]);
          }
        } // remove plugin from list


        var index = this.tabList.indexOf(pluginID);

        if (index > -1) {
          this.tabList.splice(index, 1);
        }

        try {
          delete this.pluginList[pluginID];
        } catch (e) {
          this.pluginList[pluginID] = undefined;
        } // show the first plugin by default


        if (this.activedTab == pluginID) {
          if (this.tabList.length > 0) {
            this.showTab(this.tabList[0]);
          }
        }

        return true;
      }
      /**
       * show console panel
       * @public
       */

    }, {
      key: "show",
      value: function show() {
        if (!this.isInited) {
          return;
        }

        var that = this; // before show console panel,
        // trigger a transitionstart event to make panel's property 'display' change from 'none' to 'block'

        var $panel = _query.default.one('.vc-panel', this.$dom);

        $panel.style.display = 'block'; // set 10ms delay to fix confict between display and transition

        setTimeout(function () {
          _query.default.addClass(that.$dom, 'vc-toggle');

          that._triggerPluginsEvent('showConsole');

          var $mask = _query.default.one('.vc-mask', that.$dom);

          $mask.style.display = 'block';
        }, 10);
      }
      /**
       * hide console panel
       * @public
       */

    }, {
      key: "hide",
      value: function hide() {
        if (!this.isInited) {
          return;
        }

        _query.default.removeClass(this.$dom, 'vc-toggle');

        this._triggerPluginsEvent('hideConsole');
      }
      /**
       * show switch button
       * @public
       */

    }, {
      key: "showSwitch",
      value: function showSwitch() {
        if (!this.isInited) {
          return;
        }

        var $switch = _query.default.one('.vc-switch', this.$dom);

        $switch.style.display = 'block';
      }
      /**
       * hide switch button
       */

    }, {
      key: "hideSwitch",
      value: function hideSwitch() {
        if (!this.isInited) {
          return;
        }

        var $switch = _query.default.one('.vc-switch', this.$dom);

        $switch.style.display = 'none';
      }
      /**
       * show a tab
       * @public
       */

    }, {
      key: "showTab",
      value: function showTab(tabID) {
        if (!this.isInited) {
          return;
        }

        var $logbox = _query.default.one('#__vc_log_' + tabID); // set actived status


        _query.default.removeClass(_query.default.all('.vc-tab', this.$dom), 'vc-actived');

        _query.default.addClass(_query.default.one('#__vc_tab_' + tabID), 'vc-actived');

        _query.default.removeClass(_query.default.all('.vc-logbox', this.$dom), 'vc-actived');

        _query.default.addClass($logbox, 'vc-actived'); // show topbar


        var $curTopbar = _query.default.all('.vc-topbar-' + tabID, this.$dom);

        _query.default.removeClass(_query.default.all('.vc-toptab', this.$dom), 'vc-toggle');

        _query.default.addClass($curTopbar, 'vc-toggle');

        if ($curTopbar.length > 0) {
          _query.default.addClass(_query.default.one('.vc-content', this.$dom), 'vc-has-topbar');
        } else {
          _query.default.removeClass(_query.default.one('.vc-content', this.$dom), 'vc-has-topbar');
        } // show toolbar


        _query.default.removeClass(_query.default.all('.vc-tool', this.$dom), 'vc-toggle');

        _query.default.addClass(_query.default.all('.vc-tool-' + tabID, this.$dom), 'vc-toggle'); // trigger plugin event


        this.activedTab && this._triggerPluginEvent(this.activedTab, 'hide');
        this.activedTab = tabID;

        this._triggerPluginEvent(this.activedTab, 'show');
      }
      /**
       * update option(s)
       * @public
       */

    }, {
      key: "setOption",
      value: function setOption(keyOrObj, value) {
        if (tool.isString(keyOrObj)) {
          this.option[keyOrObj] = value;

          this._triggerPluginsEvent('updateOption');
        } else if (tool.isObject(keyOrObj)) {
          for (var k in keyOrObj) {
            this.option[k] = keyOrObj[k];
          }

          this._triggerPluginsEvent('updateOption');
        } else {
          console.debug('The first parameter of vConsole.setOption() must be a string or an object.');
        }
      }
      /**
       * uninstall vConsole
       * @public
       */

    }, {
      key: "destroy",
      value: function destroy() {
        if (!this.isInited) {
          return;
        } // remove plugins


        var IDs = Object.keys(this.pluginList);

        for (var i = IDs.length - 1; i >= 0; i--) {
          this.removePlugin(IDs[i]);
        } // remove DOM


        this.$dom.parentNode.removeChild(this.$dom); // reverse isInited when destroyed

        this.isInited = false;
      }
    }]);

    return VConsole;
  }(); // END class
  // export static class


  VConsole.VConsolePlugin = _plugin.default;
  VConsole.VConsoleLogPlugin = _log.default;
  VConsole.VConsoleDefaultPlugin = _default2.default;
  VConsole.VConsoleSystemPlugin = _system.default;
  VConsole.VConsoleNetworkPlugin = _network.default;
  VConsole.VConsoleElementPlugin = _element.default;
  VConsole.VConsoleStoragePlugin = _storage.default;
  var _default = VConsole;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
  * TransitionEnd
  * author: Evandro Leopoldino Gonçalves <evandrolgoncalves@gmail.com>
  * https://github.com/evandrolg
  * License: MIT
*/
(function (window) {
  'use strict';

  var Event = function (element, type) {
    this.element = element;
    this.type = type;
  };

  Event.prototype = {
    add: function (callback) {
      this.callback = callback;
      this.element.addEventListener(this.type, this.callback, false);
    },
    remove: function () {
      this.element.removeEventListener(this.type, this.callback, false);
    }
  };

  var TransitionEnd = function (element) {
    this.element = element;
    this.transitionEnd = this.whichTransitionEnd();
    this.event = new Event(this.element, this.transitionEnd);
  };

  TransitionEnd.prototype = {
    whichTransitionEnd: function () {
      var transitions = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd otransitionend',
        'transition': 'transitionend'
      };

      for (var t in transitions) {
        if (this.element.style[t] !== undefined) {
          return transitions[t];
        }
      }
    },
    bind: function (callback) {
      this.event.add(callback);
    },
    unbind: function () {
      this.event.remove();
    }
  };
  var Cache = {
    list: [],
    getPosition: function (element) {
      if (Array.prototype.indexOf) {
        return this.list.indexOf(element);
      }

      for (var i = 0, size = this.list.length; i < size; i++) {
        if (this.list[i] === element) {
          return i;
        }
      }

      return -1;
    },
    insert: function (element) {
      var positonElement = this.getPosition(element);
      var isCached = positonElement !== -1;

      if (!isCached) {
        this.list.push(element);
        this.list.push(new TransitionEnd(element));
        positonElement = this.getPosition(element);
      }

      return this.list[positonElement + 1];
    }
  };

  window.transitionEnd = function (el) {
    if (!el) {
      throw 'You need to pass an element as parameter!';
    }

    var element = el[0] || el;
    var instance = Cache.insert(element);
    return instance;
  };
})(window);

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vconsole\",\"version\":\"3.3.4\",\"description\":\"A lightweight, extendable front-end developer tool for mobile web page.\",\"homepage\":\"https://github.com/Tencent/vConsole\",\"main\":\"dist/vconsole.min.js\",\"typings\":\"dist/vconsole.min.d.ts\",\"scripts\":{\"test\":\"mocha\",\"build\":\"webpack\",\"dev\":\"webpack-dev-server --config webpack.dev.config\"},\"keywords\":[\"console\",\"debug\",\"mobile\"],\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Tencent/vConsole.git\"},\"dependencies\":{\"mutation-observer\":\"^1.0.3\",\"transitionEnd\":\"^1.0.2\"},\"devDependencies\":{\"@babel/core\":\"^7.6.2\",\"@babel/plugin-proposal-class-properties\":\"^7.5.5\",\"@babel/plugin-proposal-export-namespace-from\":\"^7.5.2\",\"@babel/plugin-proposal-object-rest-spread\":\"^7.6.2\",\"@babel/preset-env\":\"^7.6.2\",\"babel-loader\":\"^8.0.6\",\"babel-plugin-add-module-exports\":\"^1.0.2\",\"chai\":\"^4.2.0\",\"copy-webpack-plugin\":\"^5.1.1\",\"css-loader\":\"^3.2.0\",\"html-loader\":\"^0.5.5\",\"jsdom\":\"^15.1.1\",\"json-loader\":\"^0.5.7\",\"less\":\"^3.10.3\",\"less-loader\":\"^5.0.0\",\"mocha\":\"^5.2.0\",\"style-loader\":\"^1.0.0\",\"webpack\":\"^4.41.0\",\"webpack-cli\":\"^3.3.9\",\"webpack-dev-server\":\"^3.10.1\",\"webpack-merge\":\"^4.2.2\"},\"author\":\"Tencent\",\"license\":\"MIT\"}");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = render;

  /**
   * Mito.js
   * A simple template engine
   *
   * @author Maiz
   */
  function render(tpl, data, toString) {
    var pattern = /\{\{([^\}]+)\}\}/g,
        code = '',
        codeWrap = '',
        pointer = 0,
        match = [];

    var addCode = function addCode(line, isJS) {
      if (line === '') {
        return;
      } // console.log(line)


      if (isJS) {
        if (line.match(/^ ?else/g)) {
          // else  --> } else {
          code += '} ' + line + ' {\n';
        } else if (line.match(/\/(if|for|switch)/g)) {
          // /if  -->  }
          code += '}\n';
        } else if (line.match(/^ ?if|for|switch/g)) {
          // if (age)  -->  if (this.age) {
          code += line + ' {\n';
        } else if (line.match(/^ ?(break|continue) ?$/g)) {
          // break --> break;
          code += line + ';\n';
        } else if (line.match(/^ ?(case|default)/g)) {
          // case (1) --> case (1):
          code += line + ':\n';
        } else {
          // name  -->  name
          code += 'arr.push(' + line + ');\n';
        }
      } else {
        // plain text
        code += 'arr.push("' + line.replace(/"/g, '\\"') + '");\n';
      }
    }; // init global param


    window.__mito_data = data;
    window.__mito_code = "";
    window.__mito_result = ""; // remove spaces after switch

    tpl = tpl.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g, '$1{{'); // line breaks

    tpl = tpl.replace(/^[\r\n]/, '').replace(/\n/g, '\\\n').replace(/\r/g, '\\\r'); // init code

    codeWrap = '(function(){\n';
    code = 'var arr = [];\n';

    while (match = pattern.exec(tpl)) {
      addCode(tpl.slice(pointer, match.index), false);
      addCode(match[1], true);
      pointer = match.index + match[0].length;
    }

    addCode(tpl.substr(pointer, tpl.length - pointer), false);
    code += '__mito_result = arr.join("");';
    code = 'with (__mito_data) {\n' + code + '\n}';
    codeWrap += code;
    codeWrap += '})();'; // console.log("code:\n"+codeWrap);
    // run code, do NOT use `eval` or `new Function` to avoid `unsafe-eval` CSP rule

    var scriptList = document.getElementsByTagName('script');
    var nonce = '';

    if (scriptList.length > 0) {
      nonce = scriptList[0].nonce || ''; // get nonce to avoid `unsafe-inline`
    }

    var script = document.createElement('SCRIPT');
    script.innerHTML = codeWrap;
    script.setAttribute('nonce', nonce);
    document.documentElement.appendChild(script);
    var dom = __mito_result;
    document.documentElement.removeChild(script);

    if (!toString) {
      var e = document.createElement('DIV');
      e.innerHTML = dom;
      dom = e.children[0];
    }

    return dom;
  }

  module.exports = exports.default;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(4);
            var content = __webpack_require__(13);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#__vconsole {\n  --VC-BG-0: #ededed;\n  --VC-BG-1: #f7f7f7;\n  --VC-BG-2: #fff;\n  --VC-BG-3: #f7f7f7;\n  --VC-BG-4: #4c4c4c;\n  --VC-BG-5: #fff;\n  --VC-FG-0: rgba(0, 0, 0, 0.9);\n  --VC-FG-HALF: rgba(0, 0, 0, 0.9);\n  --VC-FG-1: rgba(0, 0, 0, 0.5);\n  --VC-FG-2: rgba(0, 0, 0, 0.3);\n  --VC-FG-3: rgba(0, 0, 0, 0.1);\n  --VC-RED: #fa5151;\n  --VC-ORANGE: #fa9d3b;\n  --VC-YELLOW: #ffc300;\n  --VC-GREEN: #91d300;\n  --VC-LIGHTGREEN: #95ec69;\n  --VC-BRAND: #07c160;\n  --VC-BLUE: #10aeff;\n  --VC-INDIGO: #1485ee;\n  --VC-PURPLE: #6467f0;\n  --VC-LINK: #576b95;\n  --VC-TEXTGREEN: #06ae56;\n  --VC-FG: black;\n  --VC-BG: white;\n  --VC-BG-COLOR-ACTIVE: #ececec;\n  --VC-WARN-BG: #fff3cc;\n  --VC-WARN-BORDER: #ffe799;\n  --VC-ERROR-BG: #fedcdc;\n  --VC-ERROR-BORDER: #fdb9b9;\n  --VC-DOM-TAG-NAME-COLOR: #881280;\n  --VC-DOM-ATTRIBUTE-NAME-COLOR: #994500;\n  --VC-DOM-ATTRIBUTE-VALUE-COLOR: #1a1aa6;\n  --VC-CODE-KEY-FG: #881391;\n  --VC-CODE-PRIVATE-KEY-FG: #cfa1d3;\n  --VC-CODE-FUNC-FG: #0d22aa;\n  --VC-CODE-NUMBER-FG: #1c00cf;\n  --VC-CODE-STR-FG: #c41a16;\n  --VC-CODE-NULL-FG: #808080;\n  color: var(--VC-FG-0);\n  font-size: 13px;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  -webkit-user-select: auto;\n  /* global */\n  /* compoment */\n}\n#__vconsole .vc-max-height {\n  max-height: 19.23076923em;\n}\n#__vconsole .vc-max-height-line {\n  max-height: 3.38461538em;\n}\n#__vconsole .vc-min-height {\n  min-height: 3.07692308em;\n}\n#__vconsole dd,\n#__vconsole dl,\n#__vconsole pre {\n  margin: 0;\n}\n#__vconsole .vc-switch {\n  display: block;\n  position: fixed;\n  right: 0.76923077em;\n  bottom: 0.76923077em;\n  color: #FFF;\n  background-color: var(--VC-BRAND);\n  line-height: 1;\n  font-size: 1.07692308em;\n  padding: 0.61538462em 1.23076923em;\n  z-index: 10000;\n  border-radius: 0.30769231em;\n  box-shadow: 0 0 0.61538462em rgba(0, 0, 0, 0.4);\n}\n#__vconsole .vc-mask {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0);\n  z-index: 10001;\n  -webkit-transition: background 0.3s;\n  transition: background 0.3s;\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n}\n#__vconsole .vc-panel {\n  display: none;\n  position: fixed;\n  min-height: 85%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10002;\n  background-color: var(--VC-BG-0);\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n}\n#__vconsole .vc-tabbar {\n  border-bottom: 1px solid var(--VC-FG-3);\n  overflow-x: auto;\n  height: 3em;\n  width: auto;\n  white-space: nowrap;\n}\n#__vconsole .vc-tabbar .vc-tab {\n  display: inline-block;\n  line-height: 3em;\n  padding: 0 1.15384615em;\n  border-right: 1px solid var(--VC-FG-3);\n  text-decoration: none;\n  color: var(--VC-FG-0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-tabbar .vc-tab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-tabbar .vc-tab.vc-actived {\n  background-color: var(--VC-BG-1);\n}\n#__vconsole .vc-content {\n  background-color: var(--VC-BG-2);\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 3.07692308em;\n  left: 0;\n  right: 0;\n  bottom: 3.07692308em;\n  -webkit-overflow-scrolling: touch;\n  margin-bottom: constant(safe-area-inset-bottom);\n  margin-bottom: env(safe-area-inset-bottom);\n}\n#__vconsole .vc-content.vc-has-topbar {\n  top: 5.46153846em;\n}\n#__vconsole .vc-topbar {\n  background-color: var(--VC-BG-1);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  width: 100%;\n}\n#__vconsole .vc-topbar .vc-toptab {\n  display: none;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  line-height: 2.30769231em;\n  padding: 0 1.15384615em;\n  border-bottom: 1px solid var(--VC-FG-3);\n  text-decoration: none;\n  text-align: center;\n  color: var(--VC-FG-0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-topbar .vc-toptab.vc-toggle {\n  display: block;\n}\n#__vconsole .vc-topbar .vc-toptab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-topbar .vc-toptab.vc-actived {\n  border-bottom: 1px solid var(--VC-INDIGO);\n}\n#__vconsole .vc-logbox {\n  display: none;\n  position: relative;\n  min-height: 100%;\n}\n#__vconsole .vc-logbox i {\n  font-style: normal;\n}\n#__vconsole .vc-logbox .vc-log {\n  padding-bottom: 6em;\n  -webkit-tap-highlight-color: transparent;\n}\n#__vconsole .vc-logbox .vc-log:empty:before {\n  content: \"Empty\";\n  color: var(--VC-FG-1);\n  position: absolute;\n  top: 45%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 1.15384615em;\n  text-align: center;\n}\n#__vconsole .vc-logbox .vc-item {\n  margin: 0;\n  padding: 0.46153846em 0.61538462em;\n  overflow: hidden;\n  line-height: 1.3;\n  border-bottom: 1px solid var(--VC-FG-3);\n  word-break: break-word;\n}\n#__vconsole .vc-logbox .vc-item-info {\n  color: var(--VC-PURPLE);\n}\n#__vconsole .vc-logbox .vc-item-debug {\n  color: var(--VC-YELLOW);\n}\n#__vconsole .vc-logbox .vc-item-warn {\n  color: var(--VC-ORANGE);\n  border-color: var(--VC-WARN-BORDER);\n  background-color: var(--VC-WARN-BG);\n}\n#__vconsole .vc-logbox .vc-item-error {\n  color: var(--VC-RED);\n  border-color: var(--VC-ERROR-BORDER);\n  background-color: var(--VC-ERROR-BG);\n}\n#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item {\n  display: none;\n}\n#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error {\n  display: block;\n}\n#__vconsole .vc-logbox .vc-item.hide {\n  display: none;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-content {\n  margin-right: 4.61538462em;\n  display: inline-block;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-repeat {\n  display: inline-block;\n  margin-right: 0.30769231em;\n  padding: 0 6.5px;\n  color: #D7E0EF;\n  background-color: #42597F;\n  border-radius: 8.66666667px;\n}\n#__vconsole .vc-logbox .vc-item.vc-item-error .vc-item-repeat {\n  color: #901818;\n  background-color: var(--VC-RED);\n}\n#__vconsole .vc-logbox .vc-item.vc-item-warn .vc-item-repeat {\n  color: #987D20;\n  background-color: #F4BD02;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code {\n  display: block;\n  white-space: pre-wrap;\n  overflow: auto;\n  position: relative;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output {\n  padding-left: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before {\n  content: \"›\";\n  position: absolute;\n  top: -0.23076923em;\n  left: 0;\n  font-size: 1.23076923em;\n  color: #6A5ACD;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before {\n  content: \"‹\";\n}\n#__vconsole .vc-logbox .vc-item .vc-fold {\n  display: block;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer {\n  display: block;\n  font-style: italic;\n  padding-left: 0.76923077em;\n  position: relative;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active {\n  background-color: var(--VC-BG-COLOR-ACTIVE);\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before {\n  content: \"\";\n  position: absolute;\n  top: 0.30769231em;\n  left: 0.15384615em;\n  width: 0;\n  height: 0;\n  border: transparent solid 0.30769231em;\n  border-left-color: var(--VC-FG-1);\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before {\n  top: 0.46153846em;\n  left: 0;\n  border-top-color: var(--VC-FG-1);\n  border-left-color: transparent;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner {\n  display: none;\n  margin-left: 0.76923077em;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle {\n  display: block;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key {\n  margin-left: 0.76923077em;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key {\n  margin-left: 0;\n}\n#__vconsole .vc-logbox .vc-code-key {\n  color: var(--VC-CODE-KEY-FG);\n}\n#__vconsole .vc-logbox .vc-code-private-key {\n  color: var(--VC-CODE-PRIVATE-KEY-FG);\n}\n#__vconsole .vc-logbox .vc-code-function {\n  color: var(--VC-CODE-FUNC-FG);\n  font-style: italic;\n}\n#__vconsole .vc-logbox .vc-code-number,\n#__vconsole .vc-logbox .vc-code-boolean {\n  color: var(--VC-CODE-NUMBER-FG);\n}\n#__vconsole .vc-logbox .vc-code-string {\n  color: var(--VC-CODE-STR-FG);\n}\n#__vconsole .vc-logbox .vc-code-null,\n#__vconsole .vc-logbox .vc-code-undefined {\n  color: var(--VC-CODE-NULL-FG);\n}\n#__vconsole .vc-logbox .vc-cmd {\n  position: absolute;\n  height: 3.07692308em;\n  left: 0;\n  right: 0;\n  bottom: 41px;\n  border-top: 1px solid var(--VC-FG-3);\n  display: block!important;\n}\n#__vconsole .vc-logbox .vc-cmd.vc-filter {\n  bottom: 0;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap {\n  display: block;\n  height: 2.15384615em;\n  margin-right: 3.07692308em;\n  padding: 0.46153846em 0.61538462em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input {\n  width: 100%;\n  border: none;\n  resize: none;\n  outline: none;\n  padding: 0;\n  font-size: 0.92307692em;\n  background-color: transparent;\n  color: var(--VC-FG-0);\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder {\n  line-height: 2.15384615em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 3.07692308em;\n  border: none;\n  background-color: var(--VC-BG-0);\n  color: var(--VC-FG-0);\n  outline: none;\n  -webkit-touch-callout: none;\n  font-size: 1em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-prompted {\n  position: fixed;\n  width: 100%;\n  background-color: var(--VC-BG-3);\n  border: 1px solid var(--VC-FG-3);\n  overflow-x: scroll;\n  display: none;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-prompted li {\n  list-style: none;\n  line-height: 30px;\n  padding: 0 0.46153846em;\n  border-bottom: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-logbox .vc-group .vc-group-preview {\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-logbox .vc-group .vc-group-preview:active {\n  background-color: var(--VC-BG-COLOR-ACTIVE);\n}\n#__vconsole .vc-logbox .vc-group .vc-group-detail {\n  display: none;\n  padding: 0 0 0.76923077em 1.53846154em;\n  border-bottom: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail {\n  display: block;\n  background-color: var(--VC-BG-1);\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-table-row {\n  background-color: var(--VC-BG-2);\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-preview {\n  background-color: var(--VC-BG-1);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  overflow: hidden;\n  border-bottom: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border {\n  border-left: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  padding: 0.23076923em 0.30769231em;\n  border-left: 1px solid var(--VC-FG-3);\n  overflow: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n  /*white-space: nowrap;\n        text-overflow: ellipsis;*/\n  -webkit-overflow-scrolling: touch;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col:first-child {\n  border: none;\n}\n#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col {\n  padding: 0 0.30769231em;\n  font-size: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-2 {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n  -moz-box-flex: 2;\n  -ms-flex: 2;\n  flex: 2;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-3 {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n  -moz-box-flex: 3;\n  -ms-flex: 3;\n  flex: 3;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-4 {\n  -webkit-box-flex: 4;\n  -webkit-flex: 4;\n  -moz-box-flex: 4;\n  -ms-flex: 4;\n  flex: 4;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-5 {\n  -webkit-box-flex: 5;\n  -webkit-flex: 5;\n  -moz-box-flex: 5;\n  -ms-flex: 5;\n  flex: 5;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-6 {\n  -webkit-box-flex: 6;\n  -webkit-flex: 6;\n  -moz-box-flex: 6;\n  -ms-flex: 6;\n  flex: 6;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row-error {\n  border-color: var(--VC-ERROR-BORDER);\n  background-color: var(--VC-ERROR-BG);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col {\n  color: var(--VC-RED);\n  border-color: var(--VC-ERROR-BORDER);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-title {\n  font-weight: bold;\n}\n#__vconsole .vc-logbox.vc-actived {\n  display: block;\n}\n#__vconsole .vc-toolbar {\n  border-top: 1px solid var(--VC-FG-3);\n  line-height: 3em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n#__vconsole .vc-toolbar .vc-tool {\n  display: none;\n  text-decoration: none;\n  color: var(--VC-FG-0);\n  width: 50%;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  position: relative;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-toolbar .vc-tool.vc-toggle,\n#__vconsole .vc-toolbar .vc-tool.vc-global-tool {\n  display: block;\n}\n#__vconsole .vc-toolbar .vc-tool:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-toolbar .vc-tool:after {\n  content: \" \";\n  position: absolute;\n  top: 0.53846154em;\n  bottom: 0.53846154em;\n  right: 0;\n  border-left: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-toolbar .vc-tool-last:after {\n  border: none;\n}\n@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {\n  #__vconsole .vc-toolbar,\n  #__vconsole .vc-switch {\n    bottom: constant(safe-area-inset-bottom);\n    bottom: env(safe-area-inset-bottom);\n  }\n}\n#__vconsole.vc-toggle .vc-switch {\n  display: none;\n}\n#__vconsole.vc-toggle .vc-mask {\n  background: rgba(0, 0, 0, 0.6);\n  display: block;\n}\n#__vconsole.vc-toggle .vc-panel {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n@media (prefers-color-scheme: dark) {\n  #__vconsole:not([data-theme=\"light\"]) {\n    --VC-BG-0: #191919;\n    --VC-BG-1: #1f1f1f;\n    --VC-BG-2: #232323;\n    --VC-BG-3: #2f2f2f;\n    --VC-BG-4: #606060;\n    --VC-BG-5: #2c2c2c;\n    --VC-FG-0: rgba(255, 255, 255, 0.8);\n    --VC-FG-HALF: rgba(255, 255, 255, 0.6);\n    --VC-FG-1: rgba(255, 255, 255, 0.5);\n    --VC-FG-2: rgba(255, 255, 255, 0.3);\n    --VC-FG-3: rgba(255, 255, 255, 0.05);\n    --VC-RED: #fa5151;\n    --VC-ORANGE: #c87d2f;\n    --VC-YELLOW: #cc9c00;\n    --VC-GREEN: #74a800;\n    --VC-LIGHTGREEN: #28b561;\n    --VC-BRAND: #07c160;\n    --VC-BLUE: #10aeff;\n    --VC-INDIGO: #1196ff;\n    --VC-PURPLE: #8183ff;\n    --VC-LINK: #7d90a9;\n    --VC-TEXTGREEN: #259c5c;\n    --VC-FG: white;\n    --VC-BG: black;\n    --VC-BG-COLOR-ACTIVE: #282828;\n    --VC-WARN-BG: #332700;\n    --VC-WARN-BORDER: #664e00;\n    --VC-ERROR-BG: #321010;\n    --VC-ERROR-BORDER: #642020;\n    --VC-DOM-TAG-NAME-COLOR: #5DB0D7;\n    --VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;\n    --VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;\n    --VC-CODE-KEY-FG: #e36eec;\n    --VC-CODE-PRIVATE-KEY-FG: #f4c5f7;\n    --VC-CODE-FUNC-FG: #556af2;\n    --VC-CODE-NUMBER-FG: #9980ff;\n    --VC-CODE-STR-FG: #e93f3b;\n    --VC-CODE-NULL-FG: #808080;\n  }\n}\n#__vconsole[data-theme=\"dark\"] {\n  --VC-BG-0: #191919;\n  --VC-BG-1: #1f1f1f;\n  --VC-BG-2: #232323;\n  --VC-BG-3: #2f2f2f;\n  --VC-BG-4: #606060;\n  --VC-BG-5: #2c2c2c;\n  --VC-FG-0: rgba(255, 255, 255, 0.8);\n  --VC-FG-HALF: rgba(255, 255, 255, 0.6);\n  --VC-FG-1: rgba(255, 255, 255, 0.5);\n  --VC-FG-2: rgba(255, 255, 255, 0.3);\n  --VC-FG-3: rgba(255, 255, 255, 0.05);\n  --VC-RED: #fa5151;\n  --VC-ORANGE: #c87d2f;\n  --VC-YELLOW: #cc9c00;\n  --VC-GREEN: #74a800;\n  --VC-LIGHTGREEN: #28b561;\n  --VC-BRAND: #07c160;\n  --VC-BLUE: #10aeff;\n  --VC-INDIGO: #1196ff;\n  --VC-PURPLE: #8183ff;\n  --VC-LINK: #7d90a9;\n  --VC-TEXTGREEN: #259c5c;\n  --VC-FG: white;\n  --VC-BG: black;\n  --VC-BG-COLOR-ACTIVE: #282828;\n  --VC-WARN-BG: #332700;\n  --VC-WARN-BORDER: #664e00;\n  --VC-ERROR-BG: #321010;\n  --VC-ERROR-BORDER: #642020;\n  --VC-DOM-TAG-NAME-COLOR: #5DB0D7;\n  --VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;\n  --VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;\n  --VC-CODE-KEY-FG: #e36eec;\n  --VC-CODE-PRIVATE-KEY-FG: #f4c5f7;\n  --VC-CODE-FUNC-FG: #556af2;\n  --VC-CODE-NUMBER-FG: #9980ff;\n  --VC-CODE-STR-FG: #e93f3b;\n  --VC-CODE-NULL-FG: #808080;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div id=\"__vconsole\" class=\"\">\r\n  <div class=\"vc-switch\">vConsole</div>\r\n  <div class=\"vc-mask\">\r\n  </div>\r\n  <div class=\"vc-panel\">\r\n    <div class=\"vc-tabbar\">\r\n    </div>\r\n    <div class=\"vc-topbar\">\r\n    </div>\r\n    <div class=\"vc-content\">\r\n    </div>\r\n    <div class=\"vc-toolbar\">\r\n      <a class=\"vc-tool vc-global-tool vc-tool-last vc-hide\">Hide</a>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<a class=\"vc-tab\" data-tab=\"{{id}}\" id=\"__vc_tab_{{id}}\">{{name}}</a>";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=\"vc-logbox\" id=\"__vc_log_{{id}}\">\r\n  \r\n</div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<a class=\"vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}\">{{name}}</a>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<a class=\"vc-tool vc-tool-{{pluginID}}\">{{name}}</a>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div id=\"{{_id}}\" class=\"vc-item vc-item-{{logType}} {{style}}\">\r\n\t<div class=\"vc-item-content\"></div>\r\n</div>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"vc-fold\">\r\n  {{if (lineType == 'obj')}}\r\n    <i class=\"vc-fold-outer\">{{outer}}</i>\r\n    <div class=\"vc-fold-inner\"></div>\r\n  {{else if (lineType == 'value')}}\r\n    <i class=\"vc-code-{{valueType}}\">{{value}}</i>\r\n  {{else if (lineType == 'kv')}}\r\n    <i class=\"vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}\">{{key}}</i>: <i class=\"vc-code-{{valueType}}\">{{value}}</i>\r\n  {{/if}}\r\n</div>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<span>\r\n  <i class=\"vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}\">{{key}}</i>: <i class=\"vc-code-{{valueType}}\">{{value}}</i>\r\n</span>";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(0), __webpack_require__(3), __webpack_require__(23), __webpack_require__(24)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _query, tool, _log, _tabbox_default, _item_code) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _query = _interopRequireDefault(_query);
  tool = _interopRequireWildcard(tool);
  _log = _interopRequireDefault(_log);
  _tabbox_default = _interopRequireDefault(_tabbox_default);
  _item_code = _interopRequireDefault(_item_code);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var filterText = "";

  var checkFilterInLine = function checkFilterInLine(dom) {
    return dom.innerHTML.toUpperCase().indexOf(filterText.toUpperCase()) === -1;
  };

  var VConsoleDefaultTab = /*#__PURE__*/function (_VConsoleLogTab) {
    _inherits(VConsoleDefaultTab, _VConsoleLogTab);

    var _super = _createSuper(VConsoleDefaultTab);

    function VConsoleDefaultTab() {
      var _this;

      _classCallCheck(this, VConsoleDefaultTab);

      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.tplTabbox = _tabbox_default.default;
      return _this;
    }

    _createClass(VConsoleDefaultTab, [{
      key: "formatLine",
      value: function formatLine($line) {
        checkFilterInLine($line) ? _query.default.addClass($line, 'hide') : _query.default.removeClass($line, 'hide');
        return $line;
      }
    }, {
      key: "onReady",
      value: function onReady() {
        var that = this;

        _get(_getPrototypeOf(VConsoleDefaultTab.prototype), "onReady", this).call(this);

        window.winKeys = Object.getOwnPropertyNames(window).sort();
        window.keyTypes = {};

        for (var i = 0; i < winKeys.length; i++) {
          keyTypes[winKeys[i]] = _typeof(window[winKeys[i]]);
        }

        var cacheObj = {};
        var ID_REGEX = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;

        var retrievePrecedingIdentifier = function retrievePrecedingIdentifier(text, pos, regex) {
          regex = regex || ID_REGEX;
          var buf = [];

          for (var _i = pos - 1; _i >= 0; _i--) {
            if (regex.test(text[_i])) {
              buf.push(text[_i]);
            } else {
              break;
            }
          }

          if (buf.length == 0) {
            regex = /\./;

            for (var _i2 = pos - 1; _i2 >= 0; _i2--) {
              if (regex.test(text[_i2])) {
                buf.push(text[_i2]);
              } else {
                break;
              }
            }
          }

          if (buf.length === 0) {
            var arr = text.match(/[\(\)\[\]\{\}]/gi) || [];
            return arr[arr.length - 1];
          }

          return buf.reverse().join('');
        };

        _query.default.bind(_query.default.one('.vc-cmd-input'), 'keyup', function (e) {
          var isDeleteKeyCode = e.keyCode === 8 || e.keyCode === 46;

          var $prompted = _query.default.one('.vc-cmd-prompted');

          $prompted.style.display = 'none';
          $prompted.innerHTML = '';
          var tempValue = this.value;
          var value = retrievePrecedingIdentifier(this.value, this.value.length);

          if (value && value.length > 0) {
            if (/\(/.test(value) && !isDeleteKeyCode) {
              _query.default.one('.vc-cmd-input').value += ')';
              return;
            }

            if (/\[/.test(value) && !isDeleteKeyCode) {
              _query.default.one('.vc-cmd-input').value += ']';
              return;
            }

            if (/\{/.test(value) && !isDeleteKeyCode) {
              _query.default.one('.vc-cmd-input').value += '}';
              return;
            }

            if ('.' === value) {
              var key = retrievePrecedingIdentifier(tempValue, tempValue.length - 1);

              if (!cacheObj[key]) {
                try {
                  cacheObj[key] = Object.getOwnPropertyNames(eval('(' + key + ')')).sort();
                } catch (e) {
                  ;
                }
              }

              try {
                for (var _i3 = 0; _i3 < cacheObj[key].length; _i3++) {
                  var $li = document.createElement('li');
                  var _key = cacheObj[key][_i3];
                  $li.innerHTML = _key;

                  $li.onclick = function () {
                    _query.default.one('.vc-cmd-input').value = '';
                    _query.default.one('.vc-cmd-input').value = tempValue + this.innerHTML;
                    $prompted.style.display = 'none';
                  };

                  $prompted.appendChild($li);
                }
              } catch (e) {
                ;
              }
            } else if ('.' !== value.substring(value.length - 1) && value.indexOf('.') < 0) {
              for (var _i4 = 0; _i4 < winKeys.length; _i4++) {
                if (winKeys[_i4].toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                  var _$li = document.createElement('li');

                  _$li.innerHTML = winKeys[_i4];

                  _$li.onclick = function () {
                    _query.default.one('.vc-cmd-input').value = '';
                    _query.default.one('.vc-cmd-input').value = this.innerHTML;

                    if (keyTypes[this.innerHTML] == 'function') {
                      _query.default.one('.vc-cmd-input').value += '()';
                    }

                    $prompted.style.display = 'none';
                  };

                  $prompted.appendChild(_$li);
                }
              }
            } else {
              var arr = value.split('.');

              if (cacheObj[arr[0]]) {
                cacheObj[arr[0]].sort();

                for (var _i5 = 0; _i5 < cacheObj[arr[0]].length; _i5++) {
                  var _$li2 = document.createElement('li');

                  var _key3 = cacheObj[arr[0]][_i5];

                  if (_key3.indexOf(arr[1]) >= 0) {
                    _$li2.innerHTML = _key3;

                    _$li2.onclick = function () {
                      _query.default.one('.vc-cmd-input').value = '';
                      _query.default.one('.vc-cmd-input').value = tempValue + this.innerHTML;
                      $prompted.style.display = 'none';
                    };

                    $prompted.appendChild(_$li2);
                  }
                }
              }
            }

            if ($prompted.children.length > 0) {
              var m = Math.min(200, $prompted.children.length * 31);
              $prompted.style.display = 'block';
              $prompted.style.height = m + 'px';
              $prompted.style.marginTop = -m + 'px';
            }
          } else {
            $prompted.style.display = 'none';
          }
        });

        _query.default.bind(_query.default.one('.vc-cmd', this.$tabbox), 'submit', function (e) {
          e.preventDefault();

          var $input = _query.default.one('.vc-cmd-input', e.target),
              cmd = $input.value;

          $input.value = '';

          if (cmd !== '') {
            that.evalCommand(cmd);
          }

          var $prompted = _query.default.one('.vc-cmd-prompted');

          if ($prompted) {
            $prompted.style.display = 'none';
          }
        });

        _query.default.bind(_query.default.one('.vc-cmd.vc-filter', this.$tabbox), 'submit', function (e) {
          e.preventDefault();

          var $input = _query.default.one('.vc-cmd.vc-filter .vc-cmd-input', e.target);

          filterText = $input.value;

          _query.default.all(".vc-log>.vc-item").forEach(function (el) {
            if (checkFilterInLine(el)) {
              _query.default.addClass(el, 'hide');
            } else {
              _query.default.removeClass(el, 'hide');
            }
          });
        }); // create a global letiable to save custom command's result


        var code = '';
        code += 'if (!!window) {';
        code += 'window.__vConsole_cmd_result = undefined;';
        code += 'window.__vConsole_cmd_error = false;';
        code += '}';
        var scriptList = document.getElementsByTagName('script');
        var nonce = '';

        if (scriptList.length > 0) {
          nonce = scriptList[0].nonce || ''; // get nonce to avoid `unsafe-inline`
        }

        var script = document.createElement('SCRIPT');
        script.innerHTML = code;
        script.setAttribute('nonce', nonce);
        document.documentElement.appendChild(script);
        document.documentElement.removeChild(script);
      }
      /**
       * replace window.console & window.onerror with vConsole method
       * @private
       */

    }, {
      key: "mockConsole",
      value: function mockConsole() {
        _get(_getPrototypeOf(VConsoleDefaultTab.prototype), "mockConsole", this).call(this);

        var that = this;

        if (tool.isFunction(window.onerror)) {
          this.windowOnError = window.onerror;
        }

        window.onerror = function (message, source, lineNo, colNo, error) {
          var msg = message;

          if (source) {
            msg += "\n" + source.replace(location.origin, '');
          }

          if (lineNo || colNo) {
            msg += ':' + lineNo + ':' + colNo;
          } //print error stack info


          var stack = !!error && !!error.stack;
          var statckInfo = stack && error.stack.toString() || '';
          that.printLog({
            logType: 'error',
            logs: [msg, statckInfo],
            noOrigin: true
          });

          if (tool.isFunction(that.windowOnError)) {
            that.windowOnError.call(window, message, source, lineNo, colNo, error);
          }
        };
      }
      /**
       *
       * @private
       */

    }, {
      key: "evalCommand",
      value: function evalCommand(cmd) {
        // print command to console
        this.printLog({
          logType: 'log',
          content: _query.default.render(_item_code.default, {
            content: cmd,
            type: 'input'
          }),
          style: ''
        }); // do not use `eval` or `new Function` to avoid `unsafe-eval` CSP rule

        /*  let code = '';
          code += 'try {\n';
          code +=   'window.__vConsole_cmd_result = (function() {\n';
          code +=     'return ' + cmd + ';\n';
          code +=   '})();\n';
          code +=   'window.__vConsole_cmd_error = false;\n';
          code += '} catch (e) {\n';
          code +=   'window.__vConsole_cmd_result = e.message;\n';
          code +=   'window.__vConsole_cmd_error = true;\n';
          code += '}';
          let scriptList = document.getElementsByTagName('script');
          let nonce = '';
          if (scriptList.length > 0) {
            nonce = scriptList[0].getAttribute('nonce') || ''; // get nonce to avoid `unsafe-inline`
          }
          let script = document.createElement('SCRIPT');
          script.innerHTML = code;
          script.setAttribute('nonce', nonce);
          document.documentElement.appendChild(script);
          let result = window.__vConsole_cmd_result,
              error = window.__vConsole_cmd_error;
          document.documentElement.removeChild(script);*/

        /*    let code = '  try {';
            code += cmd;
            code += '  } catch (e) {';
            code += 'window.__vConsole_cmd_error = true;window.__vConsole_cmd_result = e.message;}';
            eval(code.replace(new RegExp('\n', 'gi'), ''));*/

        var result = void 0;

        try {
          result = eval.call(window, '(' + cmd + ')');
        } catch (e) {
          try {
            result = eval.call(window, cmd);
          } catch (e) {
            ;
          }
        }
        /*    debugger
            let result = window.__vConsole_cmd_result,
              error = window.__vConsole_cmd_error;*/
        // print result to console


        var $content;

        if (tool.isArray(result) || tool.isObject(result)) {
          $content = this.getFoldedLine(result);
        } else {
          if (tool.isNull(result)) {
            result = 'null';
          } else if (tool.isUndefined(result)) {
            result = 'undefined';
          } else if (tool.isFunction(result)) {
            result = 'function()';
          } else if (tool.isString(result)) {
            result = '"' + result + '"';
          }

          $content = _query.default.render(_item_code.default, {
            content: result,
            type: 'output'
          });
        }

        this.printLog({
          logType: 'log',
          content: $content,
          style: ''
        });
        window.winKeys = Object.getOwnPropertyNames(window).sort();
      }
    }]);

    return VConsoleDefaultTab;
  }(_log.default); // END class


  var _default = VConsoleDefaultTab;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"vc-log\"></div>\r\n  <form class=\"vc-cmd\">\r\n    <button class=\"vc-cmd-btn\" type=\"submit\">OK</button>\r\n    <ul class='vc-cmd-prompted'></ul>\r\n    <div class=\"vc-cmd-input-wrap\">\r\n      <textarea class=\"vc-cmd-input\" placeholder=\"command...\"></textarea>\r\n    </div>\r\n  </form>\r\n  <form class=\"vc-cmd vc-filter\">\r\n    <button class=\"vc-cmd-btn\" type=\"submit\">filter</button>\r\n    <ul class='vc-cmd-prompted'></ul>\r\n    <div class=\"vc-cmd-input-wrap\">\r\n      <textarea class=\"vc-cmd-input\" placeholder=\"filter...\"></textarea>\r\n    </div>\r\n  </form>\r\n</div>\r\n";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<pre class=\"vc-item-code vc-item-code-{{type}}\">{{content}}</pre>";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _log, _tabbox_system) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _log = _interopRequireDefault(_log);
  _tabbox_system = _interopRequireDefault(_tabbox_system);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var VConsoleSystemTab = /*#__PURE__*/function (_VConsoleLogTab) {
    _inherits(VConsoleSystemTab, _VConsoleLogTab);

    var _super = _createSuper(VConsoleSystemTab);

    function VConsoleSystemTab() {
      var _this;

      _classCallCheck(this, VConsoleSystemTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.tplTabbox = _tabbox_system.default;
      _this.allowUnformattedLog = false; // only logs begin with `[system]` can be displayed

      return _this;
    }

    _createClass(VConsoleSystemTab, [{
      key: "onInit",
      value: function onInit() {
        _get(_getPrototypeOf(VConsoleSystemTab.prototype), "onInit", this).call(this);

        this.printSystemInfo();
      }
    }, {
      key: "printSystemInfo",
      value: function printSystemInfo() {
        // print system info
        var ua = navigator.userAgent,
            logMsg = ''; // device & system

        var ipod = ua.match(/(ipod).*\s([\d_]+)/i),
            ipad = ua.match(/(ipad).*\s([\d_]+)/i),
            iphone = ua.match(/(iphone)\sos\s([\d_]+)/i),
            android = ua.match(/(android)\s([\d\.]+)/i);
        logMsg = 'Unknown';

        if (android) {
          logMsg = 'Android ' + android[2];
        } else if (iphone) {
          logMsg = 'iPhone, iOS ' + iphone[2].replace(/_/g, '.');
        } else if (ipad) {
          logMsg = 'iPad, iOS ' + ipad[2].replace(/_/g, '.');
        } else if (ipod) {
          logMsg = 'iPod, iOS ' + ipod[2].replace(/_/g, '.');
        }

        var templogMsg = logMsg; // wechat client version

        var version = ua.match(/MicroMessenger\/([\d\.]+)/i);
        logMsg = 'Unknown';

        if (version && version[1]) {
          logMsg = version[1];
          templogMsg += ', WeChat ' + logMsg;
          console.info('[system]', 'System:', templogMsg);
        } else {
          console.info('[system]', 'System:', templogMsg);
        } // HTTP protocol


        logMsg = 'Unknown';

        if (location.protocol == 'https:') {
          logMsg = 'HTTPS';
        } else if (location.protocol == 'http:') {
          logMsg = 'HTTP';
        } else {
          logMsg = location.protocol.replace(':', '');
        }

        templogMsg = logMsg; // network type

        var network = ua.toLowerCase().match(/ nettype\/([^ ]+)/g);
        logMsg = 'Unknown';

        if (network && network[0]) {
          network = network[0].split('/');
          logMsg = network[1];
          templogMsg += ', ' + logMsg;
          console.info('[system]', 'Network:', templogMsg);
        } else {
          console.info('[system]', 'Protocol:', templogMsg);
        } // User Agent


        console.info('[system]', 'UA:', ua); // performance related
        // use `setTimeout` to make sure all timing points are available

        setTimeout(function () {
          var performance = window.performance || window.msPerformance || window.webkitPerformance; // timing

          if (performance && performance.timing) {
            var t = performance.timing;

            if (t.navigationStart) {
              console.info('[system]', 'navigationStart:', t.navigationStart);
            }

            if (t.navigationStart && t.domainLookupStart) {
              console.info('[system]', 'navigation:', t.domainLookupStart - t.navigationStart + 'ms');
            }

            if (t.domainLookupEnd && t.domainLookupStart) {
              console.info('[system]', 'dns:', t.domainLookupEnd - t.domainLookupStart + 'ms');
            }

            if (t.connectEnd && t.connectStart) {
              if (t.connectEnd && t.secureConnectionStart) {
                console.info('[system]', 'tcp (ssl):', t.connectEnd - t.connectStart + 'ms (' + (t.connectEnd - t.secureConnectionStart) + 'ms)');
              } else {
                console.info('[system]', 'tcp:', t.connectEnd - t.connectStart + 'ms');
              }
            }

            if (t.responseStart && t.requestStart) {
              console.info('[system]', 'request:', t.responseStart - t.requestStart + 'ms');
            }

            if (t.responseEnd && t.responseStart) {
              console.info('[system]', 'response:', t.responseEnd - t.responseStart + 'ms');
            }

            if (t.domComplete && t.domLoading) {
              if (t.domContentLoadedEventStart && t.domLoading) {
                console.info('[system]', 'domComplete (domLoaded):', t.domComplete - t.domLoading + 'ms (' + (t.domContentLoadedEventStart - t.domLoading) + 'ms)');
              } else {
                console.info('[system]', 'domComplete:', t.domComplete - t.domLoading + 'ms');
              }
            }

            if (t.loadEventEnd && t.loadEventStart) {
              console.info('[system]', 'loadEvent:', t.loadEventEnd - t.loadEventStart + 'ms');
            }

            if (t.navigationStart && t.loadEventEnd) {
              console.info('[system]', 'total (DOM):', t.loadEventEnd - t.navigationStart + 'ms (' + (t.domComplete - t.navigationStart) + 'ms)');
            }
          }
        }, 0);
      }
    }]);

    return VConsoleSystemTab;
  }(_log.default); // END class


  var _default = VConsoleSystemTab;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"vc-log\"></div>\r\n</div>";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(0), __webpack_require__(2), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _query, tool, _plugin, _tabbox, _header, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _query = _interopRequireDefault(_query);
  tool = _interopRequireWildcard(tool);
  _plugin = _interopRequireDefault(_plugin);
  _tabbox = _interopRequireDefault(_tabbox);
  _header = _interopRequireDefault(_header);
  _item = _interopRequireDefault(_item);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var VConsoleNetworkTab = /*#__PURE__*/function (_VConsolePlugin) {
    _inherits(VConsoleNetworkTab, _VConsolePlugin);

    var _super = _createSuper(VConsoleNetworkTab);

    function VConsoleNetworkTab() {
      var _this;

      _classCallCheck(this, VConsoleNetworkTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.$tabbox = _query.default.render(_tabbox.default, {});
      _this.$header = null;
      _this.reqList = {}; // URL as key, request item as value

      _this.domList = {}; // URL as key, dom item as value

      _this.isReady = false;
      _this.isShow = false;
      _this.isInBottom = true; // whether the panel is in the bottom

      _this._open = undefined; // the origin function

      _this._send = undefined;

      _this.mockAjax();

      _this.mockFetch();

      return _this;
    }

    _createClass(VConsoleNetworkTab, [{
      key: "onRenderTab",
      value: function onRenderTab(callback) {
        callback(this.$tabbox);
      }
    }, {
      key: "onAddTool",
      value: function onAddTool(callback) {
        var that = this;
        var toolList = [{
          name: 'Clear',
          global: false,
          onClick: function onClick(e) {
            that.clearLog();
          }
        }];
        callback(toolList);
      }
    }, {
      key: "onReady",
      value: function onReady() {
        var that = this;
        that.isReady = true; // header

        this.renderHeader(); // expend group item

        _query.default.delegate(_query.default.one('.vc-log', this.$tabbox), 'click', '.vc-group-preview', function (e) {
          var reqID = this.dataset.reqid;
          var $group = this.parentNode;

          if (_query.default.hasClass($group, 'vc-actived')) {
            _query.default.removeClass($group, 'vc-actived');

            that.updateRequest(reqID, {
              actived: false
            });
          } else {
            _query.default.addClass($group, 'vc-actived');

            that.updateRequest(reqID, {
              actived: true
            });
          }

          e.preventDefault();
        });

        var $content = _query.default.one('.vc-content');

        _query.default.bind($content, 'scroll', function (e) {
          if (!that.isShow) {
            return;
          }

          if ($content.scrollTop + $content.offsetHeight >= $content.scrollHeight) {
            that.isInBottom = true;
          } else {
            that.isInBottom = false;
          }
        });

        for (var k in that.reqList) {
          that.updateRequest(k, {});
        }
      }
    }, {
      key: "onRemove",
      value: function onRemove() {
        // recover original functions
        if (window.XMLHttpRequest) {
          window.XMLHttpRequest.prototype.open = this._open;
          window.XMLHttpRequest.prototype.send = this._send;
          this._open = undefined;
          this._send = undefined;
        }
      }
    }, {
      key: "onShow",
      value: function onShow() {
        this.isShow = true;

        if (this.isInBottom == true) {
          this.scrollToBottom();
        }
      }
    }, {
      key: "onHide",
      value: function onHide() {
        this.isShow = false;
      }
    }, {
      key: "onShowConsole",
      value: function onShowConsole() {
        if (this.isInBottom == true) {
          this.scrollToBottom();
        }
      }
    }, {
      key: "scrollToBottom",
      value: function scrollToBottom() {
        var $box = _query.default.one('.vc-content');

        $box.scrollTop = $box.scrollHeight - $box.offsetHeight;
      }
    }, {
      key: "clearLog",
      value: function clearLog() {
        // remove list
        this.reqList = {}; // remove dom

        for (var id in this.domList) {
          this.domList[id].parentNode.removeChild(this.domList[id]);
          this.domList[id] = undefined;
        }

        this.domList = {}; // update header

        this.renderHeader();
      }
    }, {
      key: "renderHeader",
      value: function renderHeader() {
        var count = Object.keys(this.reqList).length,
            $header = _query.default.render(_header.default, {
          count: count
        }),
            $logbox = _query.default.one('.vc-log', this.$tabbox);

        if (this.$header) {
          // update
          this.$header.parentNode.replaceChild($header, this.$header);
        } else {
          // add
          $logbox.parentNode.insertBefore($header, $logbox);
        }

        this.$header = $header;
      }
      /**
       * add or update a request item by request ID
       * @private
       * @param string id
       * @param object data
       */

    }, {
      key: "updateRequest",
      value: function updateRequest(id, data) {
        // see whether add new item into list
        var preCount = Object.keys(this.reqList).length; // update item

        var item = this.reqList[id] || {};

        for (var key in data) {
          item[key] = data[key];
        }

        this.reqList[id] = item; // console.log(item);

        if (!this.isReady) {
          return;
        } // update dom


        var domData = {
          id: id,
          url: item.url,
          status: item.status,
          method: item.method || '-',
          costTime: item.costTime > 0 ? item.costTime + 'ms' : '-',
          header: item.header || null,
          getData: item.getData || null,
          postData: item.postData || null,
          response: null,
          actived: !!item.actived
        };

        switch (item.responseType) {
          case '':
          case 'text':
            // try to parse JSON
            if (tool.isString(item.response)) {
              try {
                domData.response = JSON.parse(item.response);
                domData.response = JSON.stringify(domData.response, null, 1);
                domData.response = tool.htmlEncode(domData.response);
              } catch (e) {
                // not a JSON string
                domData.response = tool.htmlEncode(item.response);
              }
            } else if (typeof item.response != 'undefined') {
              domData.response = Object.prototype.toString.call(item.response);
            }

            break;

          case 'json':
            if (typeof item.response != 'undefined') {
              domData.response = JSON.stringify(item.response, null, 1);
              domData.response = tool.htmlEncode(domData.response);
            }

            break;

          case 'blob':
          case 'document':
          case 'arraybuffer':
          default:
            if (typeof item.response != 'undefined') {
              domData.response = Object.prototype.toString.call(item.response);
            }

            break;
        }

        if (item.readyState == 0 || item.readyState == 1) {
          domData.status = 'Pending';
        } else if (item.readyState == 2 || item.readyState == 3) {
          domData.status = 'Loading';
        } else if (item.readyState == 4) {// do nothing
        } else {
          domData.status = 'Unknown';
        }

        var $new = _query.default.render(_item.default, domData),
            $old = this.domList[id];

        if (item.status >= 400) {
          _query.default.addClass(_query.default.one('.vc-group-preview', $new), 'vc-table-row-error');
        }

        if ($old) {
          $old.parentNode.replaceChild($new, $old);
        } else {
          _query.default.one('.vc-log', this.$tabbox).insertAdjacentElement('beforeend', $new);
        }

        this.domList[id] = $new; // update header

        var curCount = Object.keys(this.reqList).length;

        if (curCount != preCount) {
          this.renderHeader();
        } // scroll to bottom


        if (this.isInBottom) {
          this.scrollToBottom();
        }
      }
      /**
       * mock ajax request
       * @private
       */

    }, {
      key: "mockAjax",
      value: function mockAjax() {
        var _XMLHttpRequest = window.XMLHttpRequest;

        if (!_XMLHttpRequest) {
          return;
        }

        var that = this;
        var _open = window.XMLHttpRequest.prototype.open,
            _send = window.XMLHttpRequest.prototype.send;
        that._open = _open;
        that._send = _send; // mock open()

        window.XMLHttpRequest.prototype.open = function () {
          var XMLReq = this;
          var args = [].slice.call(arguments),
              method = args[0],
              url = args[1],
              id = that.getUniqueID();
          var timer = null; // may be used by other functions

          XMLReq._requestID = id;
          XMLReq._method = method;
          XMLReq._url = url; // mock onreadystatechange

          var _onreadystatechange = XMLReq.onreadystatechange || function () {};

          var onreadystatechange = function onreadystatechange() {
            var item = that.reqList[id] || {}; // update status

            item.readyState = XMLReq.readyState;
            item.status = 0;

            if (XMLReq.readyState > 1) {
              item.status = XMLReq.status;
            }

            item.responseType = XMLReq.responseType;

            if (XMLReq.readyState == 0) {
              // UNSENT
              if (!item.startTime) {
                item.startTime = +new Date();
              }
            } else if (XMLReq.readyState == 1) {
              // OPENED
              if (!item.startTime) {
                item.startTime = +new Date();
              }
            } else if (XMLReq.readyState == 2) {
              // HEADERS_RECEIVED
              item.header = {};
              var header = XMLReq.getAllResponseHeaders() || '',
                  headerArr = header.split("\n"); // extract plain text to key-value format

              for (var i = 0; i < headerArr.length; i++) {
                var line = headerArr[i];

                if (!line) {
                  continue;
                }

                var arr = line.split(': ');
                var key = arr[0],
                    value = arr.slice(1).join(': ');
                item.header[key] = value;
              }
            } else if (XMLReq.readyState == 3) {// LOADING
            } else if (XMLReq.readyState == 4) {
              // DONE
              clearInterval(timer);
              item.endTime = +new Date(), item.costTime = item.endTime - (item.startTime || item.endTime);
              item.response = XMLReq.response;
            } else {
              clearInterval(timer);
            }

            if (!XMLReq._noVConsole) {
              that.updateRequest(id, item);
            }

            return _onreadystatechange.apply(XMLReq, arguments);
          };

          XMLReq.onreadystatechange = onreadystatechange; // some 3rd libraries will change XHR's default function
          // so we use a timer to avoid lost tracking of readyState

          var preState = -1;
          timer = setInterval(function () {
            if (preState != XMLReq.readyState) {
              preState = XMLReq.readyState;
              onreadystatechange.call(XMLReq);
            }
          }, 10);
          return _open.apply(XMLReq, args);
        }; // mock send()


        window.XMLHttpRequest.prototype.send = function () {
          var XMLReq = this;
          var args = [].slice.call(arguments),
              data = args[0];
          var item = that.reqList[XMLReq._requestID] || {};
          item.method = XMLReq._method.toUpperCase();

          var query = XMLReq._url.split('?'); // a.php?b=c&d=?e => ['a.php', 'b=c&d=', '?e']


          item.url = query.shift(); // => ['b=c&d=', '?e']

          if (query.length > 0) {
            item.getData = {};
            query = query.join('?'); // => 'b=c&d=?e'

            query = query.split('&'); // => ['b=c', 'd=?e']

            var _iterator = _createForOfIteratorHelper(query),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var q = _step.value;
                q = q.split('=');
                item.getData[q[0]] = decodeURIComponent(q[1]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          if (item.method == 'POST') {
            // save POST data
            if (tool.isString(data)) {
              var arr = data.split('&');
              item.postData = {};

              var _iterator2 = _createForOfIteratorHelper(arr),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _q = _step2.value;
                  _q = _q.split('=');
                  item.postData[_q[0]] = _q[1];
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } else if (tool.isPlainObject(data)) {
              item.postData = data;
            }
          }

          if (!XMLReq._noVConsole) {
            that.updateRequest(XMLReq._requestID, item);
          }

          return _send.apply(XMLReq, args);
        };
      }
    }, {
      key: "mockFetch",

      /**
       * mock fetch request
       * @private
       */
      value: function mockFetch() {
        var _fetch = window.fetch;

        if (!_fetch) {
          return;
        }

        var that = this;

        var prevFetch = function prevFetch(url, init) {
          var id = that.getUniqueID();
          that.reqList[id] = {};
          var item = that.reqList[id] || {};
          var query = url.split('?');
          item.id = id;
          item.method = init.method || 'GET';
          item.url = query.shift();

          if (query.length > 0) {
            item.getData = {};
            query = query.join('?'); // => 'b=c&d=?e'

            query = query.split('&'); // => ['b=c', 'd=?e']

            var _iterator3 = _createForOfIteratorHelper(query),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var q = _step3.value;
                q = q.split('=');
                item.getData[q[0]] = q[1];
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          if (item.method == 'POST') {
            // save POST data
            if (tool.isString(data)) {
              var arr = data.split('&');
              item.postData = {};

              var _iterator4 = _createForOfIteratorHelper(arr),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _q2 = _step4.value;
                  _q2 = _q2.split('=');
                  item.postData[_q2[0]] = _q2[1];
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            } else if (tool.isPlainObject(data)) {
              item.postData = data;
            }
          } // UNSENT


          if (!item.startTime) {
            item.startTime = +new Date();
          }

          return _fetch(url, init).then(function (response) {
            response.clone().json().then(function (json) {
              item.endTime = +new Date(), item.costTime = item.endTime - (item.startTime || item.endTime);
              item.status = response.status;
              item.header = {};

              var _iterator5 = _createForOfIteratorHelper(response.headers.entries()),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var pair = _step5.value;
                  item.header[pair[0]] = pair[1];
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              item.response = json;
              item.readyState = 4;
              var contentType = response.headers.get('content-type');
              item.responseType = contentType.includes('application/json') ? 'json' : contentType.includes('text/html') ? 'text' : '';
              return json;
            });
            that.updateRequest(id, item);
            return response;
          });
        };

        window.fetch = prevFetch;
      }
      /**
       * generate an unique id string (32)
       * @private
       * @return string
       */

    }, {
      key: "getUniqueID",
      value: function getUniqueID() {
        var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
              v = c == 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
        return id;
      }
    }]);

    return VConsoleNetworkTab;
  }(_plugin.default); // END class


  var _default = VConsoleNetworkTab;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<div class=\"vc-table\">\r\n  <div class=\"vc-log\"></div>\r\n</div>";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<dl class=\"vc-table-row\">\r\n  <dd class=\"vc-table-col vc-table-col-4\">Name {{if (count > 0)}}({{count}}){{/if}}</dd>\r\n  <dd class=\"vc-table-col\">Method</dd>\r\n  <dd class=\"vc-table-col\">Status</dd>\r\n  <dd class=\"vc-table-col\">Time</dd>\r\n</dl>";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<div class=\"vc-group {{actived ? 'vc-actived' : ''}}\">\r\n  <dl class=\"vc-table-row vc-group-preview\" data-reqid=\"{{id}}\">\r\n    <dd class=\"vc-table-col vc-table-col-4\">{{url}}</dd>\r\n    <dd class=\"vc-table-col\">{{method}}</dd>\r\n    <dd class=\"vc-table-col\">{{status}}</dd>\r\n    <dd class=\"vc-table-col\">{{costTime}}</dd>\r\n  </dl>\r\n  <div class=\"vc-group-detail\">\r\n    {{if (header !== null)}}\r\n    <div>\r\n      <dl class=\"vc-table-row vc-left-border\">\r\n        <dt class=\"vc-table-col vc-table-col-title\">Headers</dt>\r\n      </dl>\r\n      {{for (var key in header)}}\r\n      <div class=\"vc-table-row vc-left-border vc-small\">\r\n        <div class=\"vc-table-col vc-table-col-2\">{{key}}</div>\r\n        <div class=\"vc-table-col vc-table-col-4 vc-max-height-line\">{{header[key]}}</div>\r\n      </div>\r\n      {{/for}}\r\n    </div>\r\n    {{/if}}\r\n    {{if (getData !== null)}}\r\n    <div>\r\n      <dl class=\"vc-table-row vc-left-border\">\r\n        <dt class=\"vc-table-col vc-table-col-title\">Query String Parameters</dt>\r\n      </dl>\r\n      {{for (var key in getData)}}\r\n      <div class=\"vc-table-row vc-left-border vc-small\">\r\n        <div class=\"vc-table-col vc-table-col-2\">{{key}}</div>\r\n        <div class=\"vc-table-col vc-table-col-4 vc-max-height-line\">{{getData[key]}}</div>\r\n      </div>\r\n      {{/for}}\r\n    </div>\r\n    {{/if}}\r\n    {{if (postData !== null)}}\r\n    <div>\r\n      <dl class=\"vc-table-row vc-left-border\">\r\n        <dt class=\"vc-table-col vc-table-col-title\">Form Data</dt>\r\n      </dl>\r\n      {{for (var key in postData)}}\r\n      <div class=\"vc-table-row vc-left-border vc-small\">\r\n        <div class=\"vc-table-col vc-table-col-2\">{{key}}</div>\r\n        <div class=\"vc-table-col vc-table-col-4 vc-max-height-line\">{{postData[key]}}</div>\r\n      </div>\r\n      {{/for}}\r\n    </div>\r\n    {{/if}}\r\n    <div>\r\n      <dl class=\"vc-table-row vc-left-border\">\r\n        <dt class=\"vc-table-col vc-table-col-title\">Response</dt>\r\n      </dl>\r\n      <div class=\"vc-table-row vc-left-border vc-small\">\r\n        <pre class=\"vc-table-col vc-max-height vc-min-height\">{{response || ''}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(32), __webpack_require__(33), __webpack_require__(2), __webpack_require__(35), __webpack_require__(36), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _mutationObserver, _style, _plugin, _tabbox, _node_view, tool, _query) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _mutationObserver = _interopRequireDefault(_mutationObserver);
  _plugin = _interopRequireDefault(_plugin);
  _tabbox = _interopRequireDefault(_tabbox);
  _node_view = _interopRequireDefault(_node_view);
  tool = _interopRequireWildcard(tool);
  _query = _interopRequireDefault(_query);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var VConsoleElementsTab = /*#__PURE__*/function (_VConsolePlugin) {
    _inherits(VConsoleElementsTab, _VConsolePlugin);

    var _super = _createSuper(VConsoleElementsTab);

    function VConsoleElementsTab() {
      var _this;

      _classCallCheck(this, VConsoleElementsTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      var that = _assertThisInitialized(_this);

      that.isInited = false;
      that.node = {};
      that.$tabbox = _query.default.render(_tabbox.default, {});
      that.nodes = [];
      that.activedElem = {}; // actived by user

      that.observer = new _mutationObserver.default(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];

          if (that._isInVConsole(mutation.target)) {
            continue;
          }

          that.onMutation(mutation);
        }
      });
      return _this;
    }

    _createClass(VConsoleElementsTab, [{
      key: "onRenderTab",
      value: function onRenderTab(callback) {
        callback(this.$tabbox);
      }
    }, {
      key: "onAddTool",
      value: function onAddTool(callback) {
        var that = this;
        var toolList = [{
          name: 'Expand',
          global: false,
          onClick: function onClick(e) {
            if (that.activedElem) {
              if (!_query.default.hasClass(that.activedElem, 'vc-toggle')) {
                // $.addClass(that.activedElem, 'vc-toggle');
                _query.default.one('.vcelm-node', that.activedElem).click();
              } else {
                for (var i = 0; i < that.activedElem.childNodes.length; i++) {
                  var $child = that.activedElem.childNodes[i];

                  if (_query.default.hasClass($child, 'vcelm-l') && !_query.default.hasClass($child, 'vcelm-noc') && !_query.default.hasClass($child, 'vc-toggle')) {
                    _query.default.one('.vcelm-node', $child).click();

                    break;
                  }
                }
              }
            }
          }
        }, {
          name: 'Collapse',
          global: false,
          onClick: function onClick(e) {
            if (that.activedElem) {
              if (_query.default.hasClass(that.activedElem, 'vc-toggle')) {
                _query.default.one('.vcelm-node', that.activedElem).click();
              } else {
                if (that.activedElem.parentNode && _query.default.hasClass(that.activedElem.parentNode, 'vcelm-l')) {
                  _query.default.one('.vcelm-node', that.activedElem.parentNode).click();
                }
              }
            }
          }
        }];
        callback(toolList);
      }
    }, {
      key: "onShow",
      value: function onShow() {
        if (this.isInited) {
          return;
        }

        this.isInited = true;
        this.node = this.getNode(document.documentElement); // console.log(this.node);
        // render root view

        var $rootView = this.renderView(this.node, _query.default.one('.vc-log', this.$tabbox)); // auto open first level

        var $node = _query.default.one('.vcelm-node', $rootView); // Before Android WebView 4.4, click is only defined on buttons and inputs


        $node && $node.click && $node.click(); // start observing

        var config = {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        };
        this.observer.observe(document.documentElement, config);
      }
    }, {
      key: "onRemove",
      value: function onRemove() {
        this.observer.disconnect();
      } // handle mutation

    }, {
      key: "onMutation",
      value: function onMutation(mutation) {
        // console.log(mutation.type, mutation);
        switch (mutation.type) {
          case 'childList':
            if (mutation.removedNodes.length > 0) {
              this.onChildRemove(mutation);
            }

            if (mutation.addedNodes.length > 0) {
              this.onChildAdd(mutation);
            }

            break;

          case 'attributes':
            this.onAttributesChange(mutation);
            break;

          case 'characterData':
            this.onCharacterDataChange(mutation);
            break;

          default:
            break;
        }
      }
    }, {
      key: "onChildRemove",
      value: function onChildRemove(mutation) {
        var $parent = mutation.target,
            parentNode = $parent.__vconsole_node;

        if (!parentNode) {
          return;
        }

        for (var i = 0; i < mutation.removedNodes.length; i++) {
          var $target = mutation.removedNodes[i],
              node = $target.__vconsole_node;

          if (!node) {
            continue;
          } // remove view


          if (node.view) {
            node.view.parentNode.removeChild(node.view);
          }
        } // update parent node


        this.getNode($parent);
      }
    }, {
      key: "onChildAdd",
      value: function onChildAdd(mutation) {
        var $parent = mutation.target,
            parentNode = $parent.__vconsole_node; // console.log('parentNode', parentNode)

        if (!parentNode) {
          return;
        } // update parent node


        this.getNode($parent); // update parent view

        if (parentNode.view) {
          _query.default.removeClass(parentNode.view, 'vcelm-noc');
        }

        for (var i = 0; i < mutation.addedNodes.length; i++) {
          var $target = mutation.addedNodes[i],
              node = $target.__vconsole_node; // added right now
          // console.log('node:', node)

          if (!node) {
            continue;
          } // create view


          if (mutation.nextSibling !== null) {
            // insert before it's sibling
            var siblingNode = mutation.nextSibling.__vconsole_node;

            if (siblingNode.view) {
              this.renderView(node, siblingNode.view, 'insertBefore');
            }
          } else {
            // append to parent view
            if (parentNode.view) {
              if (parentNode.view.lastChild) {
                // insert before last child, eg: </tag>
                this.renderView(node, parentNode.view.lastChild, 'insertBefore');
              } else {
                this.renderView(node, parentNode.view);
              }
            }
          }
        }
      }
    }, {
      key: "onAttributesChange",
      value: function onAttributesChange(mutation) {
        var node = mutation.target.__vconsole_node;

        if (!node) {
          return;
        } // update node


        node = this.getNode(mutation.target); // update view

        if (node.view) {
          this.renderView(node, node.view, true);
        }
      }
    }, {
      key: "onCharacterDataChange",
      value: function onCharacterDataChange(mutation) {
        var node = mutation.target.__vconsole_node;

        if (!node) {
          return;
        } // update node


        node = this.getNode(mutation.target); // update view

        if (node.view) {
          this.renderView(node, node.view, true);
        }
      }
    }, {
      key: "renderView",
      value: function renderView(node, $related, renderMethod) {
        var that = this;
        var $view = new _node_view.default(node).get(); // connect to node

        node.view = $view; // expand

        _query.default.delegate($view, 'click', '.vcelm-node', function (event) {
          event.stopPropagation();
          var $parent = this.parentNode;

          if (_query.default.hasClass($parent, 'vcelm-noc')) {
            return;
          }

          that.activedElem = $parent;

          if (_query.default.hasClass($parent, 'vc-toggle')) {
            _query.default.removeClass($parent, 'vc-toggle');
          } else {
            _query.default.addClass($parent, 'vc-toggle');
          } // render child views


          var childIdx = -1;

          for (var i = 0; i < $parent.children.length; i++) {
            var $child = $parent.children[i];

            if (!_query.default.hasClass($child, 'vcelm-l')) {
              // not a child view, skip
              continue;
            }

            childIdx++;

            if ($child.children.length > 0) {
              // already been rendered, skip
              continue;
            }

            if (!node.childNodes[childIdx]) {
              // cannot find related node, hide it
              $child.style.display = 'none';
              continue;
            }

            that.renderView(node.childNodes[childIdx], $child, 'replace');
          }
        }); // output to page


        switch (renderMethod) {
          case 'replace':
            $related.parentNode.replaceChild($view, $related);
            break;

          case 'insertBefore':
            $related.parentNode.insertBefore($view, $related);
            break;

          default:
            $related.appendChild($view);
            break;
        }

        return $view;
      } // convert an element to a simple object

    }, {
      key: "getNode",
      value: function getNode(elem) {
        if (this._isIgnoredElement(elem)) {
          return undefined;
        }

        var node = elem.__vconsole_node || {}; // basic node info

        node.nodeType = elem.nodeType;
        node.nodeName = elem.nodeName;
        node.tagName = elem.tagName || '';
        node.textContent = '';

        if (node.nodeType == elem.TEXT_NODE || node.nodeType == elem.DOCUMENT_TYPE_NODE) {
          node.textContent = elem.textContent;
        } // attrs


        node.id = elem.id || '';
        node.className = elem.className || '';
        node.attributes = [];

        if (elem.hasAttributes && elem.hasAttributes()) {
          for (var i = 0; i < elem.attributes.length; i++) {
            node.attributes.push({
              name: elem.attributes[i].name,
              value: elem.attributes[i].value || ''
            });
          }
        } // child nodes


        node.childNodes = [];

        if (elem.childNodes.length > 0) {
          for (var _i = 0; _i < elem.childNodes.length; _i++) {
            var child = this.getNode(elem.childNodes[_i]);

            if (!child) {
              continue;
            }

            node.childNodes.push(child);
          }
        } // save node to element for further actions


        elem.__vconsole_node = node;
        return node;
      }
    }, {
      key: "_isIgnoredElement",
      value: function _isIgnoredElement(elem) {
        // empty or line-break text
        if (elem.nodeType == elem.TEXT_NODE) {
          if (elem.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g, '') == '') {
            // trim
            return true;
          }
        }

        return false;
      }
    }, {
      key: "_isInVConsole",
      value: function _isInVConsole(elem) {
        var target = elem;

        while (target != undefined) {
          if (target.id == '__vconsole') {
            return true;
          }

          target = target.parentNode || undefined;
        }

        return false;
      }
    }]);

    return VConsoleElementsTab;
  }(_plugin.default); // END class


  var _default = VConsoleElementsTab;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
/*
 * Copyright 2012 The Polymer Authors. All rights reserved.
 * Use of this source code is goverened by a BSD-style
 * license that can be found in the LICENSE file.
 */

var WeakMap = window.WeakMap;

if (typeof WeakMap === 'undefined') {
  var defineProperty = Object.defineProperty;
  var counter = Date.now() % 1e9;

  WeakMap = function () {
    this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__');
  };

  WeakMap.prototype = {
    set: function (key, value) {
      var entry = key[this.name];
      if (entry && entry[0] === key) entry[1] = value;else defineProperty(key, this.name, {
        value: [key, value],
        writable: true
      });
      return this;
    },
    get: function (key) {
      var entry;
      return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
    },
    'delete': function (key) {
      var entry = key[this.name];
      if (!entry) return false;
      var hasValue = entry[0] === key;
      entry[0] = entry[1] = undefined;
      return hasValue;
    },
    has: function (key) {
      var entry = key[this.name];
      if (!entry) return false;
      return entry[0] === key;
    }
  };
}

var registrationsTable = new WeakMap(); // We use setImmediate or postMessage for our future callback.

var setImmediate = window.msSetImmediate; // Use post message to emulate setImmediate.

if (!setImmediate) {
  var setImmediateQueue = [];
  var sentinel = String(Math.random());
  window.addEventListener('message', function (e) {
    if (e.data === sentinel) {
      var queue = setImmediateQueue;
      setImmediateQueue = [];
      queue.forEach(function (func) {
        func();
      });
    }
  });

  setImmediate = function (func) {
    setImmediateQueue.push(func);
    window.postMessage(sentinel, '*');
  };
} // This is used to ensure that we never schedule 2 callas to setImmediate


var isScheduled = false; // Keep track of observers that needs to be notified next time.

var scheduledObservers = [];
/**
 * Schedules |dispatchCallback| to be called in the future.
 * @param {MutationObserver} observer
 */

function scheduleCallback(observer) {
  scheduledObservers.push(observer);

  if (!isScheduled) {
    isScheduled = true;
    setImmediate(dispatchCallbacks);
  }
}

function wrapIfNeeded(node) {
  return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
}

function dispatchCallbacks() {
  // http://dom.spec.whatwg.org/#mutation-observers
  isScheduled = false; // Used to allow a new setImmediate call above.

  var observers = scheduledObservers;
  scheduledObservers = []; // Sort observers based on their creation UID (incremental).

  observers.sort(function (o1, o2) {
    return o1.uid_ - o2.uid_;
  });
  var anyNonEmpty = false;
  observers.forEach(function (observer) {
    // 2.1, 2.2
    var queue = observer.takeRecords(); // 2.3. Remove all transient registered observers whose observer is mo.

    removeTransientObserversFor(observer); // 2.4

    if (queue.length) {
      observer.callback_(queue, observer);
      anyNonEmpty = true;
    }
  }); // 3.

  if (anyNonEmpty) dispatchCallbacks();
}

function removeTransientObserversFor(observer) {
  observer.nodes_.forEach(function (node) {
    var registrations = registrationsTable.get(node);
    if (!registrations) return;
    registrations.forEach(function (registration) {
      if (registration.observer === observer) registration.removeTransientObservers();
    });
  });
}
/**
 * This function is used for the "For each registered observer observer (with
 * observer's options as options) in target's list of registered observers,
 * run these substeps:" and the "For each ancestor ancestor of target, and for
 * each registered observer observer (with options options) in ancestor's list
 * of registered observers, run these substeps:" part of the algorithms. The
 * |options.subtree| is checked to ensure that the callback is called
 * correctly.
 *
 * @param {Node} target
 * @param {function(MutationObserverInit):MutationRecord} callback
 */


function forEachAncestorAndObserverEnqueueRecord(target, callback) {
  for (var node = target; node; node = node.parentNode) {
    var registrations = registrationsTable.get(node);

    if (registrations) {
      for (var j = 0; j < registrations.length; j++) {
        var registration = registrations[j];
        var options = registration.options; // Only target ignores subtree.

        if (node !== target && !options.subtree) continue;
        var record = callback(options);
        if (record) registration.enqueue(record);
      }
    }
  }
}

var uidCounter = 0;
/**
 * The class that maps to the DOM MutationObserver interface.
 * @param {Function} callback.
 * @constructor
 */

function JsMutationObserver(callback) {
  this.callback_ = callback;
  this.nodes_ = [];
  this.records_ = [];
  this.uid_ = ++uidCounter;
}

JsMutationObserver.prototype = {
  observe: function (target, options) {
    target = wrapIfNeeded(target); // 1.1

    if (!options.childList && !options.attributes && !options.characterData || // 1.2
    options.attributeOldValue && !options.attributes || // 1.3
    options.attributeFilter && options.attributeFilter.length && !options.attributes || // 1.4
    options.characterDataOldValue && !options.characterData) {
      throw new SyntaxError();
    }

    var registrations = registrationsTable.get(target);
    if (!registrations) registrationsTable.set(target, registrations = []); // 2
    // If target's list of registered observers already includes a registered
    // observer associated with the context object, replace that registered
    // observer's options with options.

    var registration;

    for (var i = 0; i < registrations.length; i++) {
      if (registrations[i].observer === this) {
        registration = registrations[i];
        registration.removeListeners();
        registration.options = options;
        break;
      }
    } // 3.
    // Otherwise, add a new registered observer to target's list of registered
    // observers with the context object as the observer and options as the
    // options, and add target to context object's list of nodes on which it
    // is registered.


    if (!registration) {
      registration = new Registration(this, target, options);
      registrations.push(registration);
      this.nodes_.push(target);
    }

    registration.addListeners();
  },
  disconnect: function () {
    this.nodes_.forEach(function (node) {
      var registrations = registrationsTable.get(node);

      for (var i = 0; i < registrations.length; i++) {
        var registration = registrations[i];

        if (registration.observer === this) {
          registration.removeListeners();
          registrations.splice(i, 1); // Each node can only have one registered observer associated with
          // this observer.

          break;
        }
      }
    }, this);
    this.records_ = [];
  },
  takeRecords: function () {
    var copyOfRecords = this.records_;
    this.records_ = [];
    return copyOfRecords;
  }
};
/**
 * @param {string} type
 * @param {Node} target
 * @constructor
 */

function MutationRecord(type, target) {
  this.type = type;
  this.target = target;
  this.addedNodes = [];
  this.removedNodes = [];
  this.previousSibling = null;
  this.nextSibling = null;
  this.attributeName = null;
  this.attributeNamespace = null;
  this.oldValue = null;
}

function copyMutationRecord(original) {
  var record = new MutationRecord(original.type, original.target);
  record.addedNodes = original.addedNodes.slice();
  record.removedNodes = original.removedNodes.slice();
  record.previousSibling = original.previousSibling;
  record.nextSibling = original.nextSibling;
  record.attributeName = original.attributeName;
  record.attributeNamespace = original.attributeNamespace;
  record.oldValue = original.oldValue;
  return record;
}

; // We keep track of the two (possibly one) records used in a single mutation.

var currentRecord, recordWithOldValue;
/**
 * Creates a record without |oldValue| and caches it as |currentRecord| for
 * later use.
 * @param {string} oldValue
 * @return {MutationRecord}
 */

function getRecord(type, target) {
  return currentRecord = new MutationRecord(type, target);
}
/**
 * Gets or creates a record with |oldValue| based in the |currentRecord|
 * @param {string} oldValue
 * @return {MutationRecord}
 */


function getRecordWithOldValue(oldValue) {
  if (recordWithOldValue) return recordWithOldValue;
  recordWithOldValue = copyMutationRecord(currentRecord);
  recordWithOldValue.oldValue = oldValue;
  return recordWithOldValue;
}

function clearRecords() {
  currentRecord = recordWithOldValue = undefined;
}
/**
 * @param {MutationRecord} record
 * @return {boolean} Whether the record represents a record from the current
 * mutation event.
 */


function recordRepresentsCurrentMutation(record) {
  return record === recordWithOldValue || record === currentRecord;
}
/**
 * Selects which record, if any, to replace the last record in the queue.
 * This returns |null| if no record should be replaced.
 *
 * @param {MutationRecord} lastRecord
 * @param {MutationRecord} newRecord
 * @param {MutationRecord}
 */


function selectRecord(lastRecord, newRecord) {
  if (lastRecord === newRecord) return lastRecord; // Check if the the record we are adding represents the same record. If
  // so, we keep the one with the oldValue in it.

  if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
  return null;
}
/**
 * Class used to represent a registered observer.
 * @param {MutationObserver} observer
 * @param {Node} target
 * @param {MutationObserverInit} options
 * @constructor
 */


function Registration(observer, target, options) {
  this.observer = observer;
  this.target = target;
  this.options = options;
  this.transientObservedNodes = [];
}

Registration.prototype = {
  enqueue: function (record) {
    var records = this.observer.records_;
    var length = records.length; // There are cases where we replace the last record with the new record.
    // For example if the record represents the same mutation we need to use
    // the one with the oldValue. If we get same record (this can happen as we
    // walk up the tree) we ignore the new record.

    if (records.length > 0) {
      var lastRecord = records[length - 1];
      var recordToReplaceLast = selectRecord(lastRecord, record);

      if (recordToReplaceLast) {
        records[length - 1] = recordToReplaceLast;
        return;
      }
    } else {
      scheduleCallback(this.observer);
    }

    records[length] = record;
  },
  addListeners: function () {
    this.addListeners_(this.target);
  },
  addListeners_: function (node) {
    var options = this.options;
    if (options.attributes) node.addEventListener('DOMAttrModified', this, true);
    if (options.characterData) node.addEventListener('DOMCharacterDataModified', this, true);
    if (options.childList) node.addEventListener('DOMNodeInserted', this, true);
    if (options.childList || options.subtree) node.addEventListener('DOMNodeRemoved', this, true);
  },
  removeListeners: function () {
    this.removeListeners_(this.target);
  },
  removeListeners_: function (node) {
    var options = this.options;
    if (options.attributes) node.removeEventListener('DOMAttrModified', this, true);
    if (options.characterData) node.removeEventListener('DOMCharacterDataModified', this, true);
    if (options.childList) node.removeEventListener('DOMNodeInserted', this, true);
    if (options.childList || options.subtree) node.removeEventListener('DOMNodeRemoved', this, true);
  },

  /**
   * Adds a transient observer on node. The transient observer gets removed
   * next time we deliver the change records.
   * @param {Node} node
   */
  addTransientObserver: function (node) {
    // Don't add transient observers on the target itself. We already have all
    // the required listeners set up on the target.
    if (node === this.target) return;
    this.addListeners_(node);
    this.transientObservedNodes.push(node);
    var registrations = registrationsTable.get(node);
    if (!registrations) registrationsTable.set(node, registrations = []); // We know that registrations does not contain this because we already
    // checked if node === this.target.

    registrations.push(this);
  },
  removeTransientObservers: function () {
    var transientObservedNodes = this.transientObservedNodes;
    this.transientObservedNodes = [];
    transientObservedNodes.forEach(function (node) {
      // Transient observers are never added to the target.
      this.removeListeners_(node);
      var registrations = registrationsTable.get(node);

      for (var i = 0; i < registrations.length; i++) {
        if (registrations[i] === this) {
          registrations.splice(i, 1); // Each node can only have one registered observer associated with
          // this observer.

          break;
        }
      }
    }, this);
  },
  handleEvent: function (e) {
    // Stop propagation since we are managing the propagation manually.
    // This means that other mutation events on the page will not work
    // correctly but that is by design.
    e.stopImmediatePropagation();

    switch (e.type) {
      case 'DOMAttrModified':
        // http://dom.spec.whatwg.org/#concept-mo-queue-attributes
        var name = e.attrName;
        var namespace = e.relatedNode.namespaceURI;
        var target = e.target; // 1.

        var record = new getRecord('attributes', target);
        record.attributeName = name;
        record.attributeNamespace = namespace; // 2.

        var oldValue = null;
        if (!(typeof MutationEvent !== 'undefined' && e.attrChange === MutationEvent.ADDITION)) oldValue = e.prevValue;
        forEachAncestorAndObserverEnqueueRecord(target, function (options) {
          // 3.1, 4.2
          if (!options.attributes) return; // 3.2, 4.3

          if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
            return;
          } // 3.3, 4.4


          if (options.attributeOldValue) return getRecordWithOldValue(oldValue); // 3.4, 4.5

          return record;
        });
        break;

      case 'DOMCharacterDataModified':
        // http://dom.spec.whatwg.org/#concept-mo-queue-characterdata
        var target = e.target; // 1.

        var record = getRecord('characterData', target); // 2.

        var oldValue = e.prevValue;
        forEachAncestorAndObserverEnqueueRecord(target, function (options) {
          // 3.1, 4.2
          if (!options.characterData) return; // 3.2, 4.3

          if (options.characterDataOldValue) return getRecordWithOldValue(oldValue); // 3.3, 4.4

          return record;
        });
        break;

      case 'DOMNodeRemoved':
        this.addTransientObserver(e.target);
      // Fall through.

      case 'DOMNodeInserted':
        // http://dom.spec.whatwg.org/#concept-mo-queue-childlist
        var target = e.relatedNode;
        var changedNode = e.target;
        var addedNodes, removedNodes;

        if (e.type === 'DOMNodeInserted') {
          addedNodes = [changedNode];
          removedNodes = [];
        } else {
          addedNodes = [];
          removedNodes = [changedNode];
        }

        var previousSibling = changedNode.previousSibling;
        var nextSibling = changedNode.nextSibling; // 1.

        var record = getRecord('childList', target);
        record.addedNodes = addedNodes;
        record.removedNodes = removedNodes;
        record.previousSibling = previousSibling;
        record.nextSibling = nextSibling;
        forEachAncestorAndObserverEnqueueRecord(target, function (options) {
          // 2.1, 3.2
          if (!options.childList) return; // 2.2, 3.3

          return record;
        });
    }

    clearRecords();
  }
};

if (!MutationObserver) {
  MutationObserver = JsMutationObserver;
}

module.exports = MutationObserver;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(4);
            var content = __webpack_require__(34);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* color */\n.vcelm-node {\n  color: var(--VC-DOM-TAG-NAME-COLOR);\n}\n.vcelm-k {\n  color: var(--VC-DOM-ATTRIBUTE-NAME-COLOR);\n}\n.vcelm-v {\n  color: var(--VC-DOM-ATTRIBUTE-VALUE-COLOR);\n}\n/* layout */\n.vcelm-l {\n  padding-left: 8px;\n  position: relative;\n  word-wrap: break-word;\n  line-height: 1;\n}\n/*.vcelm-l.vcelm-noc {\n  padding-left: 0;\n}*/\n.vcelm-l.vc-toggle > .vcelm-node {\n  display: block;\n}\n.vcelm-l .vcelm-node:active {\n  background-color: var(--VC-BG-COLOR-ACTIVE);\n}\n.vcelm-l.vcelm-noc .vcelm-node:active {\n  background-color: transparent;\n}\n.vcelm-t {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/* level */\n.vcelm-l .vcelm-l {\n  display: none;\n}\n.vcelm-l.vc-toggle > .vcelm-l {\n  margin-left: 4px;\n  display: block;\n}\n/* arrow */\n.vcelm-l:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 6px;\n  left: 3px;\n  width: 0;\n  height: 0;\n  border: transparent solid 3px;\n  border-left-color: var(--VC-FG-1);\n}\n.vcelm-l.vc-toggle:before {\n  display: block;\n  top: 6px;\n  left: 0;\n  border-top-color: var(--VC-FG-1);\n  border-left-color: transparent;\n}\n.vcelm-l.vcelm-noc:before {\n  display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"vc-log\"></div>\r\n</div>";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(37), __webpack_require__(38), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tpl_node_head, _tpl_node_foot, tool, _query) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _tpl_node_head = _interopRequireDefault(_tpl_node_head);
  _tpl_node_foot = _interopRequireDefault(_tpl_node_foot);
  tool = _interopRequireWildcard(tool);
  _query = _interopRequireDefault(_query);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var NodeView = /*#__PURE__*/function () {
    function NodeView(node) {
      _classCallCheck(this, NodeView);

      this.node = node;
      this.view = this._create(this.node);
    }

    _createClass(NodeView, [{
      key: "get",
      value: function get() {
        return this.view;
      }
    }, {
      key: "_create",
      value: function _create(node, isRoot) {
        var view = document.createElement('DIV');

        _query.default.addClass(view, 'vcelm-l');

        switch (node.nodeType) {
          case view.ELEMENT_NODE:
            this._createElementNode(node, view);

            break;

          case view.TEXT_NODE:
            this._createTextNode(node, view);

            break;

          case view.COMMENT_NODE:
          case view.DOCUMENT_NODE:
          case view.DOCUMENT_TYPE_NODE:
          case view.DOCUMENT_FRAGMENT_NODE:
            break;
        }

        return view;
      }
    }, {
      key: "_createTextNode",
      value: function _createTextNode(node, view) {
        _query.default.addClass(view, 'vcelm-t vcelm-noc');

        if (!node.textContent) {
          return;
        }

        view.appendChild(_text(_trim(node.textContent)));
      }
    }, {
      key: "_createElementNode",
      value: function _createElementNode(node, view) {
        var isNullEnd = isNullEndTag(node.tagName),
            isSingleLine = isNullEnd;

        if (node.childNodes.length == 0) {
          isSingleLine = true;
        }

        var nodeHead = _query.default.render(_tpl_node_head.default, {
          node: node
        });

        var nodeFoot = _query.default.render(_tpl_node_foot.default, {
          node: node
        });

        if (isSingleLine) {
          _query.default.addClass(view, 'vcelm-noc');

          view.appendChild(nodeHead);

          if (!isNullEnd) {
            view.appendChild(nodeFoot);
          }
        } else {
          view.appendChild(nodeHead); // create child nodes

          for (var i = 0; i < node.childNodes.length; i++) {
            // create a placeholder for child view,
            // rather than `childView = this._create(node.childNodes[i])`
            var childView = document.createElement('DIV');

            _query.default.addClass(childView, 'vcelm-l');

            view.appendChild(childView);
          }

          if (!isNullEnd) {
            view.appendChild(nodeFoot);
          }
        } // no return

      }
    }]);

    return NodeView;
  }(); // END class

  /********************************************************************
   Helper Functions
   *******************************************************************/

  /**
   * Is <link/> or <link></link> ?
   * @return boolean
   */


  function isNullEndTag(tagName) {
    var names = ['br', 'hr', 'img', 'input', 'link', 'meta'];
    tagName = tagName ? tagName.toLowerCase() : '';
    return names.indexOf(tagName) > -1 ? true : false;
  }
  /**
   * Create text node
   * @return object
   */


  function _text(str) {
    return document.createTextNode(str);
  }

  function _trim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }

  var _default = NodeView;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<span class=\"vcelm-node\">&lt;{{node.tagName.toLowerCase()}}{{if (node.className || node.attributes.length)}}\r\n  <i class=\"vcelm-k\">\r\n    {{for (var i = 0; i < node.attributes.length; i++)}}\r\n      {{if (node.attributes[i].value !== '')}}\r\n        {{node.attributes[i].name}}=\"<i class=\"vcelm-v\">{{node.attributes[i].value}}</i>\"{{else}}\r\n        {{node.attributes[i].name}}{{/if}}{{/for}}</i>{{/if}}&gt;</span>";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<span class=\"vcelm-node\">&lt;/{{node.tagName.toLowerCase()}}&gt;</span>";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(40), __webpack_require__(41), __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _plugin, _tabbox, _list, tool, _query) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _plugin = _interopRequireDefault(_plugin);
  _tabbox = _interopRequireDefault(_tabbox);
  _list = _interopRequireDefault(_list);
  tool = _interopRequireWildcard(tool);
  _query = _interopRequireDefault(_query);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var VConsoleStorageTab = /*#__PURE__*/function (_VConsolePlugin) {
    _inherits(VConsoleStorageTab, _VConsolePlugin);

    var _super = _createSuper(VConsoleStorageTab);

    function VConsoleStorageTab() {
      var _this;

      _classCallCheck(this, VConsoleStorageTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.$tabbox = _query.default.render(_tabbox.default, {});
      _this.currentType = ''; // cookies, localstorage, ...

      _this.typeNameMap = {
        'cookies': 'Cookies',
        'localstorage': 'LocalStorage',
        'sessionstorage': 'SessionStorage'
      };
      return _this;
    }

    _createClass(VConsoleStorageTab, [{
      key: "onRenderTab",
      value: function onRenderTab(callback) {
        callback(this.$tabbox);
      }
    }, {
      key: "onAddTopBar",
      value: function onAddTopBar(callback) {
        var that = this;
        var types = ['Cookies', 'LocalStorage', 'SessionStorage'];
        var btnList = [];

        for (var i = 0; i < types.length; i++) {
          btnList.push({
            name: types[i],
            data: {
              type: types[i].toLowerCase()
            },
            className: '',
            onClick: function onClick() {
              if (!_query.default.hasClass(this, 'vc-actived')) {
                that.currentType = this.dataset.type;
                that.renderStorage();
              } else {
                return false;
              }
            }
          });
        }

        btnList[0].className = 'vc-actived';
        callback(btnList);
      }
    }, {
      key: "onAddTool",
      value: function onAddTool(callback) {
        var that = this;
        var toolList = [{
          name: 'Refresh',
          global: false,
          onClick: function onClick(e) {
            that.renderStorage();
          }
        }, {
          name: 'Clear',
          global: false,
          onClick: function onClick(e) {
            that.clearLog();
          }
        }];
        callback(toolList);
      }
    }, {
      key: "onReady",
      value: function onReady() {// do nothing
      }
    }, {
      key: "onShow",
      value: function onShow() {
        // show default panel
        if (this.currentType == '') {
          this.currentType = 'cookies';
          this.renderStorage();
        }
      }
    }, {
      key: "clearLog",
      value: function clearLog() {
        if (this.currentType && window.confirm) {
          var result = window.confirm('Remove all ' + this.typeNameMap[this.currentType] + '?');

          if (!result) {
            return false;
          }
        }

        switch (this.currentType) {
          case 'cookies':
            this.clearCookieList();
            break;

          case 'localstorage':
            this.clearLocalStorageList();
            break;

          case 'sessionstorage':
            this.clearSessionStorageList();
            break;

          default:
            return false;
        }

        this.renderStorage();
      }
    }, {
      key: "renderStorage",
      value: function renderStorage() {
        var list = [];

        switch (this.currentType) {
          case 'cookies':
            list = this.getCookieList();
            break;

          case 'localstorage':
            list = this.getLocalStorageList();
            break;

          case 'sessionstorage':
            list = this.getSessionStorageList();
            break;

          default:
            return false;
        }

        var $log = _query.default.one('.vc-log', this.$tabbox);

        if (list.length == 0) {
          $log.innerHTML = '';
        } else {
          // html encode for rendering
          for (var i = 0; i < list.length; i++) {
            list[i].name = tool.htmlEncode(list[i].name);
            list[i].value = tool.htmlEncode(list[i].value);
          }

          $log.innerHTML = _query.default.render(_list.default, {
            list: list
          }, true);
        }
      }
    }, {
      key: "getCookieList",
      value: function getCookieList() {
        if (!document.cookie || !navigator.cookieEnabled) {
          return [];
        }

        var list = [];
        var items = document.cookie.split(';');

        for (var i = 0; i < items.length; i++) {
          var item = items[i].split('=');
          var name = item.shift().replace(/^ /, ''),
              value = item.join('=');

          try {
            name = decodeURIComponent(name);
            value = decodeURIComponent(value);
          } catch (e) {
            console.log(e, name, value);
          }

          list.push({
            name: name,
            value: value
          });
        }

        return list;
      }
    }, {
      key: "getLocalStorageList",
      value: function getLocalStorageList() {
        if (!window.localStorage) {
          return [];
        }

        try {
          var list = [];

          for (var i = 0; i < localStorage.length; i++) {
            var name = localStorage.key(i),
                value = localStorage.getItem(name);
            list.push({
              name: name,
              value: value
            });
          }

          return list;
        } catch (e) {
          return [];
        }
      }
    }, {
      key: "getSessionStorageList",
      value: function getSessionStorageList() {
        if (!window.sessionStorage) {
          return [];
        }

        try {
          var list = [];

          for (var i = 0; i < sessionStorage.length; i++) {
            var name = sessionStorage.key(i),
                value = sessionStorage.getItem(name);
            list.push({
              name: name,
              value: value
            });
          }

          return list;
        } catch (e) {
          return [];
        }
      }
    }, {
      key: "clearCookieList",
      value: function clearCookieList() {
        if (!document.cookie || !navigator.cookieEnabled) {
          return;
        }

        var hostname = window.location.hostname;
        var list = this.getCookieList();

        for (var i = 0; i < list.length; i++) {
          var name = list[i].name;
          document.cookie = "".concat(name, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT");
          document.cookie = "".concat(name, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/");
          document.cookie = "".concat(name, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.").concat(hostname.split('.').slice(-2).join('.'));
        }

        this.renderStorage();
      }
    }, {
      key: "clearLocalStorageList",
      value: function clearLocalStorageList() {
        if (!!window.localStorage) {
          try {
            localStorage.clear();
            this.renderStorage();
          } catch (e) {
            alert('localStorage.clear() fail.');
          }
        }
      }
    }, {
      key: "clearSessionStorageList",
      value: function clearSessionStorageList() {
        if (!!window.sessionStorage) {
          try {
            sessionStorage.clear();
            this.renderStorage();
          } catch (e) {
            alert('sessionStorage.clear() fail.');
          }
        }
      }
    }]);

    return VConsoleStorageTab;
  }(_plugin.default); // END Class


  var _default = VConsoleStorageTab;
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"vc-table\">\r\n  <div class=\"vc-log\"></div>\r\n</div>";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <dl class=\"vc-table-row\">\r\n    <dd class=\"vc-table-col\">Name</dd>\r\n    <dd class=\"vc-table-col vc-table-col-2\">Value</dd>\r\n  </dl>\r\n  {{for (var i = 0; i < list.length; i++)}}\r\n  <dl class=\"vc-table-row\">\r\n    <dd class=\"vc-table-col\">{{list[i].name}}</dd>\r\n    <dd class=\"vc-table-col vc-table-col-2\">{{list[i].value}}</dd>\r\n  </dl>\r\n  {{/for}}\r\n</div>";

/***/ })
/******/ ]);
});