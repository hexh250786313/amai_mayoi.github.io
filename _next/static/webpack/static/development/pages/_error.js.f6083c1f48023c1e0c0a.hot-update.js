webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/set.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-from-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-strong.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-to-json.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.set.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.to-json.js":
false,

/***/ "./node_modules/antd/lib/_util/raf.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/_util/raf.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapperRaf;

var _raf = _interopRequireDefault(__webpack_require__(/*! raf */ "./node_modules/raf/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf["default"])(internalCallback);
    }
  }

  ids[myId] = (0, _raf["default"])(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;

  _raf["default"].cancel(ids[pid]);

  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage
//# sourceMappingURL=raf.js.map


/***/ }),

/***/ "./node_modules/antd/lib/_util/type.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/type.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tupleNum = exports.tuple = void 0;

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

exports.tuple = tuple;

var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

exports.tupleNum = tupleNum;
//# sourceMappingURL=type.js.map


/***/ }),

/***/ "./node_modules/antd/lib/_util/warning.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/_util/warning.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resetWarned", {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned;
  }
});
exports["default"] = void 0;

var _warning = _interopRequireWildcard(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(valid, component, message) {
  (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
};

exports["default"] = _default;
//# sourceMappingURL=warning.js.map


/***/ }),

/***/ "./node_modules/antd/lib/_util/wave.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/wave.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _Event = _interopRequireDefault(__webpack_require__(/*! css-animation/lib/Event */ "./node_modules/css-animation/lib/Event.js"));

var _raf = _interopRequireDefault(__webpack_require__(/*! ./raf */ "./node_modules/antd/lib/_util/raf.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleForPesudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (false) {}

  return !element || element.offsetParent === null;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var Wave = /*#__PURE__*/function (_React$Component) {
  _inherits(Wave, _React$Component);

  function Wave() {
    var _this;

    _classCallCheck(this, Wave);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wave).apply(this, arguments));
    _this.animationStart = false;
    _this.destroy = false;

    _this.onClick = function (node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = _assertThisInitialized(_this),
          extraNode = _assertThisInitialize.extraNode;

      extraNode.className = 'ant-click-animating-node';

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparnt or grey

      styleForPesudo = styleForPesudo || document.createElement('style');

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (_this.csp && _this.csp.nonce) {
          styleForPesudo.nonce = _this.csp.nonce;
        }

        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(waveColor, ";\n      }");

        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      _Event["default"].addStartEventListener(node, _this.onTransitionStart);

      _Event["default"].addEndEventListener(node, _this.onTransitionEnd);
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroy) return;
      var node = (0, _reactDom.findDOMNode)(_assertThisInitialized(_this));

      if (!e || e.target !== node) {
        return;
      }

      if (!_this.animationStart) {
        _this.resetEffect(node);
      }
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);

        _raf["default"].cancel(_this.animationStartId);

        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      return children;
    };

    return _this;
  }

  _createClass(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = (0, _reactDom.findDOMNode)(this);

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroy = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      _Event["default"].removeStartEventListener(node, this.onTransitionStart);

      _Event["default"].removeEndEventListener(node, this.onTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);

  return Wave;
}(React.Component);

exports["default"] = Wave;
//# sourceMappingURL=wave.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/button-group.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/button-group.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = function ButtonGroup(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      default:
        break;
    }

    var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return React.createElement("div", _extends({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;
//# sourceMappingURL=button-group.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/button.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/button/button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */


var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return React.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = _typeof(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
var ButtonShapes = (0, _type.tuple)('circle', 'circle-outline', 'round');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _this.saveButtonRef = function (node) {
      _this.buttonNode = node;
    };

    _this.handleClick = function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (loading) {
        return;
      }

      if (onClick) {
        onClick(e);
      }
    };

    _this.state = {
      loading: props.loading,
      hasTwoCNChar: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fixTwoCNChar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      this.fixTwoCNChar();

      if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }

      var loading = this.props.loading;

      if (loading && typeof loading !== 'boolean' && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          _this2.setState({
            loading: loading
          });
        }, loading.delay);
      } else if (prevProps.loading !== loading) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          loading: loading
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: "fixTwoCNChar",
    value: function fixTwoCNChar() {
      var autoInsertSpaceInButton = this.context.autoInsertSpaceInButton; // Fix for HOC usage like <FormatMessage />

      if (!this.buttonNode || autoInsertSpaceInButton === false) {
        return;
      }

      var buttonText = this.buttonNode.textContent;

      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.state.hasTwoCNChar) {
          this.setState({
            hasTwoCNChar: true
          });
        }
      } else if (this.state.hasTwoCNChar) {
        this.setState({
          hasTwoCNChar: false
        });
      }
    }
  }, {
    key: "isNeedInserted",
    value: function isNeedInserted() {
      var _this$props = this.props,
          icon = _this$props.icon,
          children = _this$props.children,
          type = _this$props.type;
      return React.Children.count(children) === 1 && !icon && type !== 'link';
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$context = this.context,
          getPrefixCls = _this$context.getPrefixCls,
          autoInsertSpaceInButton = _this$context.autoInsertSpaceInButton,
          direction = _this$context.direction;
      return React.createElement(_SizeContext["default"].Consumer, null, function (size) {
        var _classNames;

        var _a = _this3.props,
            customizePrefixCls = _a.prefixCls,
            type = _a.type,
            danger = _a.danger,
            shape = _a.shape,
            customizeSize = _a.size,
            className = _a.className,
            children = _a.children,
            icon = _a.icon,
            ghost = _a.ghost,
            block = _a.block,
            rest = __rest(_a, ["prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block"]);

        var _this3$state = _this3.state,
            loading = _this3$state.loading,
            hasTwoCNChar = _this3$state.hasTwoCNChar;
        (0, _warning["default"])(!(typeof icon === 'string' && icon.length > 2), 'Button', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
        var prefixCls = getPrefixCls('btn', customizePrefixCls);
        var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
        // small => sm

        var sizeCls = '';

        switch (customizeSize || size) {
          case 'large':
            sizeCls = 'lg';
            break;

          case 'small':
            sizeCls = 'sm';
            break;

          default:
            break;
        }

        var iconType = loading ? 'loading' : icon;
        var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && iconType), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), !!loading), _defineProperty(_classNames, "".concat(prefixCls, "-background-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _defineProperty(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
        var iconNode = loading ? React.createElement(_icons.LoadingOutlined, null) : icon || null;
        var kids = children || children === 0 ? spaceChildren(children, _this3.isNeedInserted() && autoInsertSpace) : null;
        var linkButtonRestProps = (0, _omit["default"])(rest, ['htmlType', 'loading']);

        if (linkButtonRestProps.href !== undefined) {
          return React.createElement("a", _extends({}, linkButtonRestProps, {
            className: classes,
            onClick: _this3.handleClick,
            ref: _this3.saveButtonRef
          }), iconNode, kids);
        } // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.


        var _b = rest,
            htmlType = _b.htmlType,
            otherProps = __rest(_b, ["htmlType"]);

        var buttonNode = React.createElement("button", _extends({}, (0, _omit["default"])(otherProps, ['loading']), {
          type: htmlType,
          className: classes,
          onClick: _this3.handleClick,
          ref: _this3.saveButtonRef
        }), iconNode, kids);

        if (type === 'link') {
          return buttonNode;
        }

        return React.createElement(_wave["default"], null, buttonNode);
      });
    }
  }]);

  return Button;
}(React.Component);

Button.__ANT_BUTTON = true;
Button.contextType = _configProvider.ConfigContext;
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  htmlType: 'button'
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=button.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/button/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "./node_modules/antd/lib/button/button.js"));

var _buttonGroup = _interopRequireDefault(__webpack_require__(/*! ./button-group */ "./node_modules/antd/lib/button/button-group.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_button["default"].Group = _buttonGroup["default"];
var _default = _button["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/button/style/index.less");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _en_US["default"];
exports["default"] = _default;
//# sourceMappingURL=en_US.js.map


/***/ }),

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/SizeContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizeContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SizeContext = React.createContext(undefined);

var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return React.createElement(SizeContext.Consumer, null, function (originSize) {
    return React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};

exports.SizeContextProvider = SizeContextProvider;
var _default = SizeContext;
exports["default"] = _default;
//# sourceMappingURL=SizeContext.js.map


/***/ }),

/***/ "./node_modules/antd/lib/config-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports.ConfigConsumer = exports.ConfigContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _renderEmpty = _interopRequireDefault(__webpack_require__(/*! ./renderEmpty */ "./node_modules/antd/lib/config-provider/renderEmpty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ConfigContext = React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return "ant-".concat(suffixCls);
  },
  renderEmpty: _renderEmpty["default"]
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
exports.ConfigConsumer = ConfigConsumer;

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return React.createElement(Component, _extends({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}
//# sourceMappingURL=context.js.map


/***/ }),

/***/ "./node_modules/antd/lib/config-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function get() {
    return _context.ConfigConsumer;
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _context.ConfigContext;
  }
});
exports["default"] = exports.configConsumerProps = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _localeProvider = _interopRequireWildcard(__webpack_require__(/*! ../locale-provider */ "./node_modules/antd/lib/locale-provider/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/config-provider/context.js");

var _SizeContext = __webpack_require__(/*! ./SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var configConsumerProps = ['getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
exports.configConsumerProps = configConsumerProps;

var ConfigProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    var _this;

    _classCallCheck(this, ConfigProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfigProvider).apply(this, arguments));

    _this.getPrefixCls = function (suffixCls, customizePrefixCls) {
      var _this$props$prefixCls = _this.props.prefixCls,
          prefixCls = _this$props$prefixCls === void 0 ? 'ant' : _this$props$prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };

    _this.renderProvider = function (context, legacyLocale) {
      var _this$props = _this.props,
          children = _this$props.children,
          getPopupContainer = _this$props.getPopupContainer,
          renderEmpty = _this$props.renderEmpty,
          csp = _this$props.csp,
          autoInsertSpaceInButton = _this$props.autoInsertSpaceInButton,
          form = _this$props.form,
          locale = _this$props.locale,
          pageHeader = _this$props.pageHeader,
          componentSize = _this$props.componentSize,
          direction = _this$props.direction;

      var config = _extends(_extends({}, context), {
        getPrefixCls: _this.getPrefixCls,
        csp: csp,
        autoInsertSpaceInButton: autoInsertSpaceInButton,
        locale: locale || legacyLocale,
        direction: direction
      });

      if (getPopupContainer) {
        config.getPopupContainer = getPopupContainer;
      }

      if (renderEmpty) {
        config.renderEmpty = renderEmpty;
      }

      if (pageHeader) {
        config.pageHeader = pageHeader;
      }

      var childNode = children; // Additional Form provider

      if (form && form.validateMessages) {
        childNode = React.createElement(_rcFieldForm.FormProvider, {
          validateMessages: form.validateMessages
        }, children);
      }

      return React.createElement(_SizeContext.SizeContextProvider, {
        size: componentSize
      }, React.createElement(_context.ConfigContext.Provider, {
        value: config
      }, React.createElement(_localeProvider["default"], {
        locale: locale || legacyLocale,
        _ANT_MARK__: _localeProvider.ANT_MARK
      }, childNode)));
    };

    return _this;
  }

  _createClass(ConfigProvider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
        return React.createElement(_context.ConfigConsumer, null, function (context) {
          return _this2.renderProvider(context, legacyLocale);
        });
      });
    }
  }]);

  return ConfigProvider;
}(React.Component);

var _default = ConfigProvider;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/renderEmpty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./node_modules/antd/lib/empty/index.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var renderEmpty = function renderEmpty(componentName) {
  return React.createElement(_.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;
//# sourceMappingURL=renderEmpty.js.map


/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-picker/lib/locale/en_US */ "./node_modules/rc-picker/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, _en_US["default"]),
  timePickerLocale: _extends({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;
//# sourceMappingURL=en_US.js.map


/***/ }),

/***/ "./node_modules/antd/lib/empty/empty.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/empty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(24 31.67)"
  }, React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var _default = Empty;
exports["default"] = _default;
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/antd/lib/empty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/antd/lib/empty/empty.js"));

var _simple = _interopRequireDefault(__webpack_require__(/*! ./simple */ "./node_modules/antd/lib/empty/simple.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultEmptyImg = React.createElement(_empty["default"], null);
var simpleEmptyImg = React.createElement(_simple["default"], null);

var Empty = function Empty(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var className = props.className,
        customizePrefixCls = props.prefixCls,
        _props$image = props.image,
        image = _props$image === void 0 ? defaultEmptyImg : _props$image,
        description = props.description,
        children = props.children,
        imageStyle = props.imageStyle,
        restProps = __rest(props, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

    return React.createElement(_LocaleReceiver["default"], {
      componentName: "Empty"
    }, function (locale) {
      var _classNames;

      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = React.createElement("img", {
          alt: alt,
          src: image
        });
      } else {
        imageNode = image;
      }

      return React.createElement("div", _extends({
        className: (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
      }, restProps), React.createElement("div", {
        className: "".concat(prefixCls, "-image"),
        style: imageStyle
      }, imageNode), des && React.createElement("p", {
        className: "".concat(prefixCls, "-description")
      }, des), children && React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, children));
    });
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/empty/simple.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/empty/simple.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var _default = Simple;
exports["default"] = _default;
//# sourceMappingURL=simple.js.map


/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ./default */ "./node_modules/antd/lib/locale-provider/default.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  _inherits(LocaleReceiver, _React$Component);

  function LocaleReceiver() {
    _classCallCheck(this, LocaleReceiver);

    return _possibleConstructorReturn(this, _getPrototypeOf(LocaleReceiver).apply(this, arguments));
  }

  _createClass(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context.antLocale;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context.antLocale);
    }
  }]);

  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextTypes = {
  antLocale: PropTypes.object
};
//# sourceMappingURL=LocaleReceiver.js.map


/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _default2["default"];
exports["default"] = _default;
//# sourceMappingURL=default.js.map


/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ANT_MARK = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _locale = __webpack_require__(/*! ../modal/locale */ "./node_modules/antd/lib/modal/locale.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(LocaleProvider, _React$Component);

  function LocaleProvider(props) {
    var _this;

    _classCallCheck(this, LocaleProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LocaleProvider).call(this, props));
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    (0, _warning["default"])(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  _createClass(LocaleProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        antLocale: _extends(_extends({}, this.props.locale), {
          exist: true
        })
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        (0, _locale.changeConfirmLocale)(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return LocaleProvider;
}(React.Component);

exports["default"] = LocaleProvider;
LocaleProvider.defaultProps = {
  locale: {}
};
LocaleProvider.childContextTypes = {
  antLocale: PropTypes.object
};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/locale/default.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/locale/default.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _en_US3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

var _en_US4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/en_US */ "./node_modules/antd/lib/calendar/locale/en_US.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  }
};
exports["default"] = _default;
//# sourceMappingURL=default.js.map


/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var runtimeLocale = _extends({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends(_extends({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = _extends({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}
//# sourceMappingURL=locale.js.map


/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var _default = locale;
exports["default"] = _default;
//# sourceMappingURL=en_US.js.map


/***/ }),

/***/ "./node_modules/async-validator/dist-web/index.js":
/*!********************************************************!*\
  !*** ./node_modules/async-validator/dist-web/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && process.env && "development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });

    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }

    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors)
        }) : resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve();
      }
    };

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      var dateObject;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;

/* harmony default export */ __webpack_exports__["default"] = (Schema);
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/css-animation/lib/Event.js":
/*!*************************************************!*\
  !*** ./node_modules/css-animation/lib/Event.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fhoward%2Fmy%2Fmy-git%2Fhxh.xyz%2Fsrc%2Fpages%2F_error.js!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fhoward%2Fmy%2Fmy-git%2Fhxh.xyz%2Fsrc%2Fpages%2F_error.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./src/pages/_error.js */ "./src/pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./src/pages/_error.js */ "./src/pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/_error.js */ "./src/pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/omit.js/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/omit.js/es/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function omit(obj, fields) {
  var shallowCopy = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/rc-field-form/es/Field.js":
/*!************************************************!*\
  !*** ./node_modules/rc-field-form/es/Field.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FieldContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FieldContext */ "./node_modules/rc-field-form/es/FieldContext.js");
/* harmony import */ var _utils_typeUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/typeUtil */ "./node_modules/rc-field-form/es/utils/typeUtil.js");
/* harmony import */ var _utils_validateUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/validateUtil */ "./node_modules/rc-field-form/es/utils/validateUtil.js");
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-field-form/es/utils/valueUtil.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }

  return prevValue !== nextValue;
} // We use Class instead of Hooks here since it will cost much code by using Hooks.


var Field = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Field, _React$Component);

  function Field() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Field);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Field).apply(this, arguments));
    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.destroy = false;
    /**
     * Follow state should not management in State since it will async update by React.
     * This makes first render of form can not get correct state value.
     */

    _this.touched = false;
    _this.validatePromise = null;
    _this.errors = [];

    _this.cancelRegister = function () {
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc();
      }

      _this.cancelRegisterFunc = null;
    }; // ================================== Utils ==================================


    _this.getNamePath = function () {
      var name = _this.props.name;
      var _this$context$prefixN = _this.context.prefixName,
          prefixName = _this$context$prefixN === void 0 ? [] : _this$context$prefixN;
      var namePath = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__["getNamePath"])(name);
      return 'name' in _this.props ? [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prefixName), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(namePath)) : [];
    };

    _this.getRules = function () {
      var _this$props$rules = _this.props.rules,
          rules = _this$props$rules === void 0 ? [] : _this$props$rules;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(_this.context);
        }

        return rule;
      });
    };

    _this.refresh = function () {
      if (_this.destroy) return;
      /**
       * Clean up current node.
       */

      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    }; // ========================= Field Entity Interfaces =========================
    // Trigger by store update. Check if need update the component


    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props = _this.props,
          shouldUpdate = _this$props.shouldUpdate,
          _this$props$dependenc = _this$props.dependencies,
          dependencies = _this$props$dependenc === void 0 ? [] : _this$props$dependenc,
          onReset = _this$props.onReset;
      var getFieldsValue = _this.context.getFieldsValue;
      var values = getFieldsValue(true);

      var namePath = _this.getNamePath();

      var prevValue = _this.getValue(prevStore);

      var curValue = _this.getValue();

      var namePathMatch = namePathList && Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__["containsNamePath"])(namePathList, namePath); // `setFieldsValue` is a quick access to update related status

      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.validatePromise = null;
        _this.errors = [];
      }

      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.validatePromise = null;
            _this.errors = [];

            if (onReset) {
              onReset();
            }

            _this.refresh();

            return;
          }

          break;

        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;

              if ('touched' in data) {
                _this.touched = data.touched;
              }

              if ('validating' in data) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }

              if ('errors' in data) {
                _this.errors = data.errors || [];
              }

              _this.reRender();

              return;
            } // Handle update by `setField` with `shouldUpdate`


            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, values, prevValue, curValue, info)) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__["getNamePath"]);

            if (namePathMatch || dependencyList.some(function (dependency) {
              return Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__["containsNamePath"])(info.relatedFields, dependency);
            })) {
              _this.reRender();

              return;
            }

            break;
          }

        default:
          /**
           * - If `namePath` exists in `namePathList`, means it's related value and should update.
           * - If `dependencies` exists in `namePathList`, means upstream trigger update.
           * - If `shouldUpdate` provided, use customize logic to update the field
           *   - else to check if value changed
           */
          if (namePathMatch || dependencies.some(function (dependency) {
            return Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__["containsNamePath"])(namePathList, Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__["getNamePath"])(dependency));
          }) || requireUpdate(shouldUpdate, prevStore, values, prevValue, curValue, info)) {
            _this.reRender();

            return;
          }

          break;
      }

      if (shouldUpdate === true) {
        _this.reRender();
      }
    };

    _this.validateRules = function (options) {
      var validateFirst = _this.props.validateFirst;

      var _ref2 = options || {},
          triggerName = _ref2.triggerName;

      var namePath = _this.getNamePath();

      var filteredRules = _this.getRules();

      if (triggerName) {
        filteredRules = filteredRules.filter(function (rule) {
          var validateTrigger = rule.validateTrigger;

          if (!validateTrigger) {
            return true;
          }

          var triggerList = Object(_utils_typeUtil__WEBPACK_IMPORTED_MODULE_11__["toArray"])(validateTrigger);
          return triggerList.includes(triggerName);
        });
      }

      var promise = Object(_utils_validateUtil__WEBPACK_IMPORTED_MODULE_12__["validateRules"])(namePath, _this.getValue(), filteredRules, options, validateFirst);
      _this.validatePromise = promise;
      _this.errors = [];
      promise.catch(function (e) {
        return e;
      }).then(function () {
        var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (_this.validatePromise === promise) {
          _this.validatePromise = null;
          _this.errors = errors;

          _this.reRender();
        }
      });
      return promise;
    };

    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };

    _this.isFieldTouched = function () {
      return _this.touched;
    };

    _this.getErrors = function () {
      return _this.errors;
    }; // ============================= Child Component =============================


    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        name: _this.getNamePath()
      };
      return meta;
    }; // Only return validate child node. If invalidate, will do nothing about field.


    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();

        return _objectSpread({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.context)), {
          isFunction: true
        });
      } // Filed element only


      var childList = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_7__["default"])(children);

      if (childList.length !== 1 || !react__WEBPACK_IMPORTED_MODULE_9__["isValidElement"](childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }

      return {
        child: childList[0],
        isFunction: false
      };
    }; // ============================== Field Control ==============================


    _this.getValue = function (store) {
      var getFieldsValue = _this.context.getFieldsValue;

      var namePath = _this.getNamePath();

      return Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__["getValue"])(store || getFieldsValue(true), namePath);
    };

    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props2 = _this.props,
          trigger = _this$props2.trigger,
          validateTrigger = _this$props2.validateTrigger,
          getValueFromEvent = _this$props2.getValueFromEvent,
          normalize = _this$props2.normalize,
          valuePropName = _this$props2.valuePropName;

      var namePath = _this.getNamePath();

      var _this$context = _this.context,
          getInternalHooks = _this$context.getInternalHooks,
          getFieldsValue = _this$context.getFieldsValue;

      var _getInternalHooks = getInternalHooks(_FieldContext__WEBPACK_IMPORTED_MODULE_10__["HOOK_MARK"]),
          dispatch = _getInternalHooks.dispatch;

      var value = _this.getValue(); // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var originTriggerFunc = childProps[trigger];

      var control = _objectSpread({}, childProps, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, valuePropName, value)); // Add trigger


      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        var newValue;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = _utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__["defaultGetValueFromEvent"].apply(void 0, [valuePropName].concat(args));
        }

        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }

        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });

        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      }; // Add validateTrigger


      var validateTriggerList = Object(_utils_typeUtil__WEBPACK_IMPORTED_MODULE_11__["toArray"])(validateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];

        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          } // Always use latest rules


          var rules = _this.props.rules;

          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    };

    return _this;
  } // ============================== Subscriptions ==============================


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var getInternalHooks = this.context.getInternalHooks;

      var _getInternalHooks2 = getInternalHooks(_FieldContext__WEBPACK_IMPORTED_MODULE_10__["HOOK_MARK"]),
          registerField = _getInternalHooks2.registerField;

      this.cancelRegisterFunc = registerField(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.destroy = true;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (this.destroy) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;

      var _this$getOnlyChild = this.getOnlyChild(children),
          child = _this$getOnlyChild.child,
          isFunction = _this$getOnlyChild.isFunction; // Not need to `cloneElement` since user can handle this in render function self


      var returnChildNode;

      if (isFunction) {
        returnChildNode = child;
      } else if (react__WEBPACK_IMPORTED_MODULE_9__["isValidElement"](child)) {
        returnChildNode = react__WEBPACK_IMPORTED_MODULE_9__["cloneElement"](child, this.getControlled(child.props));
      } else {
        Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }

      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        key: resetCount
      }, returnChildNode);
    }
  }]);

  return Field;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Field.contextType = _FieldContext__WEBPACK_IMPORTED_MODULE_10__["default"];
Field.defaultProps = {
  trigger: 'onChange',
  validateTrigger: 'onChange',
  valuePropName: 'value'
};
/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./node_modules/rc-field-form/es/FieldContext.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-field-form/es/FieldContext.js ***!
  \*******************************************************/
/*! exports provided: HOOK_MARK, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOK_MARK", function() { return HOOK_MARK; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);


var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

var warningFunc = function warningFunc() {
  warning__WEBPACK_IMPORTED_MODULE_1___default()(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};

var Context = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      setCallbacks: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Context);

/***/ }),

/***/ "./node_modules/rc-field-form/es/Form.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-field-form/es/Form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useForm */ "./node_modules/rc-field-form/es/useForm.js");
/* harmony import */ var _FieldContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldContext */ "./node_modules/rc-field-form/es/FieldContext.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormContext */ "./node_modules/rc-field-form/es/FormContext.js");
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-field-form/es/utils/valueUtil.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Form = function Form(_ref, ref) {
  var name = _ref.name,
      initialValues = _ref.initialValues,
      fields = _ref.fields,
      form = _ref.form,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'form' : _ref$component,
      validateMessages = _ref.validateMessages,
      onValuesChange = _ref.onValuesChange,
      _onFieldsChange = _ref.onFieldsChange,
      _onFinish = _ref.onFinish,
      onFinishFailed = _ref.onFinishFailed,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["name", "initialValues", "fields", "form", "children", "component", "validateMessages", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"]);

  var formContext = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](_FormContext__WEBPACK_IMPORTED_MODULE_6__["default"]); // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider

  var _useForm = Object(_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])(form),
      _useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useForm, 1),
      formInstance = _useForm2[0];

  var _formInstance$getInte = formInstance.getInternalHooks(_FieldContext__WEBPACK_IMPORTED_MODULE_5__["HOOK_MARK"]),
      useSubscribe = _formInstance$getInte.useSubscribe,
      setInitialValues = _formInstance$getInte.setInitialValues,
      setCallbacks = _formInstance$getInte.setCallbacks,
      setValidateMessages = _formInstance$getInte.setValidateMessages; // Pass ref with form instance


  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return formInstance;
  }); // Register form into Context

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]); // Pass props to store

  setValidateMessages(_objectSpread({}, formContext.validateMessages, {}, validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);

      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);

      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  }); // Set initial value, init store value when first mount

  var mountRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  setInitialValues(initialValues, !mountRef.current);

  if (!mountRef.current) {
    mountRef.current = true;
  } // Prepare children by `children` type


  var childrenNode = children;
  var childrenRenderProps = typeof children === 'function';

  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } // Not use subscribe when using render props


  useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render

  var prevFieldsRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (!Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_7__["isSimilar"])(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }

    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var wrapperNode = react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_FieldContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: formInstance
  }, childrenNode);

  if (Component === false) {
    return wrapperNode;
  }

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Component, Object.assign({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    }
  }), wrapperNode);
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/rc-field-form/es/FormContext.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-field-form/es/FormContext.js ***!
  \******************************************************/
/*! exports provided: FormProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return FormProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var FormContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"]({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});

var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
      onFormChange = _ref.onFormChange,
      onFormFinish = _ref.onFormFinish,
      children = _ref.children;
  var formContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](FormContext);
  var formsRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]({});
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FormContext.Provider, {
    value: _objectSpread({}, formContext, {
      validateMessages: _objectSpread({}, formContext.validateMessages, {}, validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }

        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }

        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = _objectSpread({}, formsRef.current, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, form));
        }

        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = _objectSpread({}, formsRef.current);

        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};


/* harmony default export */ __webpack_exports__["default"] = (FormContext);

/***/ }),

/***/ "./node_modules/rc-field-form/es/List.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-field-form/es/List.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FieldContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FieldContext */ "./node_modules/rc-field-form/es/FieldContext.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Field */ "./node_modules/rc-field-form/es/Field.js");
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-field-form/es/utils/valueUtil.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var List = function List(_ref) {
  var name = _ref.name,
      children = _ref.children;
  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_FieldContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var keyRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current; // User should not pass `children` as other type.

  if (typeof children !== 'function') {
    warning__WEBPACK_IMPORTED_MODULE_3___default()(false, 'Form.List only accepts function as children.');
    return null;
  }

  var parentPrefixName = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__["getNamePath"])(context.prefixName) || [];
  var prefixName = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(parentPrefixName), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__["getNamePath"])(name)));

  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;

    if (source === 'internal') {
      return false;
    }

    return prevValue !== nextValue;
  };

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FieldContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: _objectSpread({}, context, {
      prefixName: prefixName
    })
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Field__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: [],
    shouldUpdate: shouldUpdate
  }, function (_ref3) {
    var _ref3$value = _ref3.value,
        value = _ref3$value === void 0 ? [] : _ref3$value,
        onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;

    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */


    var operations = {
      add: function add(defaultValue) {
        // Mapping keys
        keyManager.keys = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(keyManager.keys), [keyManager.id]);
        keyManager.id += 1;
        var newValue = getNewValue();
        onChange([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(newValue), [defaultValue]));
      },
      remove: function remove(index) {
        var newValue = getNewValue(); // Do not handle out of range

        if (index < 0 || index >= newValue.length) {
          return;
        } // Update key mapping


        var newKeys = keyManager.keys.map(function (key, id) {
          if (id < index) {
            return key;
          }

          return keyManager.keys[id + 1];
        });
        keyManager.keys = newKeys.slice(0, -1); // Trigger store change

        onChange(newValue.filter(function (_, id) {
          return id !== index;
        }));
      },
      move: function move(from, to) {
        if (from === to) {
          return;
        }

        var newValue = getNewValue(); // Do not handle out of range

        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }

        keyManager.keys = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__["move"])(keyManager.keys, from, to); // Trigger store change

        onChange(Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_6__["move"])(newValue, from, to));
      }
    };
    return children(value.map(function (__, index) {
      var key = keyManager.keys[index];

      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }

      return {
        name: index,
        key: key
      };
    }), operations);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./node_modules/rc-field-form/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/rc-field-form/es/index.js ***!
  \************************************************/
/*! exports provided: Field, List, useForm, FormProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./node_modules/rc-field-form/es/Field.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _Field__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ "./node_modules/rc-field-form/es/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useForm */ "./node_modules/rc-field-form/es/useForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return _useForm__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ "./node_modules/rc-field-form/es/Form.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormContext */ "./node_modules/rc-field-form/es/FormContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return _FormContext__WEBPACK_IMPORTED_MODULE_5__["FormProvider"]; });







var InternalForm = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](_Form__WEBPACK_IMPORTED_MODULE_4__["default"]);
var RefForm = InternalForm;
RefForm.FormProvider = _FormContext__WEBPACK_IMPORTED_MODULE_5__["FormProvider"];
RefForm.Field = _Field__WEBPACK_IMPORTED_MODULE_1__["default"];
RefForm.List = _List__WEBPACK_IMPORTED_MODULE_2__["default"];
RefForm.useForm = _useForm__WEBPACK_IMPORTED_MODULE_3__["default"];

/* harmony default export */ __webpack_exports__["default"] = (RefForm);

/***/ }),

/***/ "./node_modules/rc-field-form/es/useForm.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-field-form/es/useForm.js ***!
  \**************************************************/
/*! exports provided: FormStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStore", function() { return FormStore; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FieldContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FieldContext */ "./node_modules/rc-field-form/es/FieldContext.js");
/* harmony import */ var _utils_asyncUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/asyncUtil */ "./node_modules/rc-field-form/es/utils/asyncUtil.js");
/* harmony import */ var _utils_NameMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/NameMap */ "./node_modules/rc-field-form/es/utils/NameMap.js");
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/messages */ "./node_modules/rc-field-form/es/utils/messages.js");
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-field-form/es/utils/valueUtil.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var FormStore = function FormStore(forceRootUpdate) {
  var _this = this;

  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, FormStore);

  this.formHooked = false;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.lastValidatePromise = null;

  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      getInternalHooks: _this.getInternalHooks
    };
  }; // ======================== Internal Hooks ========================


  this.getInternalHooks = function (key) {
    if (key === _FieldContext__WEBPACK_IMPORTED_MODULE_7__["HOOK_MARK"]) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields
      };
    }

    warning__WEBPACK_IMPORTED_MODULE_6___default()(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };

  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };
  /**
   * First time `setInitialValues` should update store with initial value
   */


  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};

    if (init) {
      _this.store = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["setValues"])({}, initialValues, _this.store);
    }
  };

  this.getInitialValue = function (namePath) {
    return Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getValue"])(_this.initialValues, namePath);
  };

  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };

  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };

  this.warningUnhooked = function () {
    if ( true && !_this.formHooked) {
      warning__WEBPACK_IMPORTED_MODULE_6___default()(false, 'Instance created by `useForm` is not connect to any Form element. Forget to pass `form` prop?');
    }
  }; // ============================ Fields ============================

  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */


  this.getFieldEntities = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!pure) {
      return _this.fieldEntities;
    }

    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };

  this.getFieldsMap = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new _utils_NameMap__WEBPACK_IMPORTED_MODULE_9__["default"]();

    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });

    return cache;
  };

  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }

    var cache = _this.getFieldsMap(true);

    return nameList.map(function (name) {
      var namePath = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"])(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"])(name)
      };
    });
  };

  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();

    if (nameList === true && !filterFunc) {
      return _this.store;
    }

    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);

    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();

      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;

        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["cloneByNamePathList"])(_this.store, filteredNameList.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"]));
  };

  this.getFieldValue = function (name) {
    _this.warningUnhooked();

    var namePath = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"])(name);
    return Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getValue"])(_this.store, namePath);
  };

  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);

    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors()
        };
      }

      return {
        name: Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"])(nameList[index]),
        errors: []
      };
    });
  };

  this.getFieldError = function (name) {
    _this.warningUnhooked();

    var namePath = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"])(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.errors;
  };

  this.isFieldsTouched = function () {
    _this.warningUnhooked();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var arg0 = args[0],
        arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;

    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"]);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"]);
      isAllFieldsTouched = arg1;
    }

    var testTouched = function testTouched(field) {
      // Not provide `nameList` will check all the fields
      if (!namePathList) {
        return field.isFieldTouched();
      }

      var fieldNamePath = field.getNamePath();

      if (Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["containsNamePath"])(namePathList, fieldNamePath)) {
        return field.isFieldTouched();
      }

      return isAllFieldsTouched;
    };

    return isAllFieldsTouched ? _this.getFieldEntities(true).every(testTouched) : _this.getFieldEntities(true).some(testTouched);
  };

  this.isFieldTouched = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsTouched([name]);
  };

  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntities();

    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }

    var namePathList = nameList.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"]);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["containsNamePath"])(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };

  this.isFieldValidating = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsValidating([name]);
  };

  this.resetFields = function (nameList) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (!nameList) {
      _this.store = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["setValues"])({}, _this.initialValues);

      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });

      return;
    } // Reset by `nameList`


    var namePathList = nameList.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"]);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);

      _this.store = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["setValue"])(_this.store, namePath, initialValue);
    });

    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
  };

  this.setFields = function (fields) {
    _this.warningUnhooked();

    var prevStore = _this.store;
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
          errors = fieldData.errors,
          data = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldData, ["name", "errors"]);

      var namePath = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"])(name); // Value

      if ('value' in data) {
        _this.store = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["setValue"])(_this.store, namePath, data.value);
      }

      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
  };

  this.getFields = function () {
    return _this.getFieldEntities(true).map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      return _objectSpread({}, meta, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });
    });
  }; // =========================== Observer ===========================


  this.registerField = function (entity) {
    _this.fieldEntities.push(entity);

    return function () {
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      });
    };
  };

  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
              value = action.value;

          _this.updateValue(namePath, value);

          break;
        }

      case 'validateField':
        {
          var _namePath = action.namePath,
              triggerName = action.triggerName;

          _this.validateFields([_namePath], {
            triggerName: triggerName
          });

          break;
        }

      default: // Currently we don't have other action. Do nothing.

    }
  };

  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      _this.getFieldEntities().forEach(function (_ref) {
        var onStoreChange = _ref.onStoreChange;
        onStoreChange(prevStore, namePathList, info);
      });
    } else {
      _this.forceRootUpdate();
    }
  };

  this.updateValue = function (name, value) {
    var namePath = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"])(name);
    var prevStore = _this.store;
    _this.store = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["setValue"])(_this.store, namePath, value);

    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    }); // Notify dependencies children with parent update


    var childrenFields = _this.getDependencyChildrenFields(namePath);

    _this.validateFields(childrenFields);

    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(childrenFields))
    }); // trigger callback function


    var onValuesChange = _this.callbacks.onValuesChange;

    if (onValuesChange) {
      var changedValues = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["cloneByNamePathList"])(_this.store, [namePath]);
      onValuesChange(changedValues, _this.store);
    }

    _this.triggerOnFieldsChange([namePath].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(childrenFields)));
  }; // Let all child Field get update.


  this.setFieldsValue = function (store) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (store) {
      _this.store = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["setValues"])(_this.store, store);
    }

    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
  };

  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new _utils_NameMap__WEBPACK_IMPORTED_MODULE_9__["default"]();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */

    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"])(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });

    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();

          if (field.isFieldTouched() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };

    fillChildren(rootNamePath);
    return childrenFields;
  };

  this.triggerOnFieldsChange = function (namePathList) {
    var onFieldsChange = _this.callbacks.onFieldsChange;

    if (onFieldsChange) {
      var fields = _this.getFields();

      var changedFields = fields.filter(function (_ref2) {
        var fieldName = _ref2.name;
        return Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["containsNamePath"])(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  }; // =========================== Validate ===========================


  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();

    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["getNamePath"]) : []; // Collect result in promise list

    var promiseList = [];

    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      } // Skip if without rule


      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list

      if (!provideNameList || Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_11__["containsNamePath"])(namePathList, fieldNamePath)) {
        var promise = field.validateRules(_objectSpread({
          validateMessages: _objectSpread({}, _utils_messages__WEBPACK_IMPORTED_MODULE_10__["defaultValidateMessages"], {}, _this.validateMessages)
        }, options)); // Wrap promise with field

        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: []
          };
        }).catch(function (errors) {
          return Promise.reject({
            name: fieldNamePath,
            errors: errors
          });
        }));
      }
    });

    var summaryPromise = Object(_utils_asyncUtil__WEBPACK_IMPORTED_MODULE_8__["allPromiseFinish"])(promiseList);
    _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update

    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref3) {
        var name = _ref3.name;
        return name;
      });

      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });

      _this.triggerOnFieldsChange(resultNamePathList);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }

      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    }); // Do not throw in console

    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  }; // ============================ Submit ============================


  this.submit = function () {
    _this.warningUnhooked();

    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;

      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;

      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };

  this.forceRootUpdate = forceRootUpdate;
};

function useForm(form) {
  var formRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"]();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };

      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ "./node_modules/rc-field-form/es/utils/NameMap.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-field-form/es/utils/NameMap.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valueUtil */ "./node_modules/rc-field-form/es/utils/valueUtil.js");



/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */

var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NameMap);

    this.list = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NameMap, [{
    key: "set",
    value: function set(key, value) {
      var index = this.list.findIndex(function (item) {
        return Object(_valueUtil__WEBPACK_IMPORTED_MODULE_2__["matchNamePath"])(item.key, key);
      });

      if (index !== -1) {
        this.list[index].value = value;
      } else {
        this.list.push({
          key: key,
          value: value
        });
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      var result = this.list.find(function (item) {
        return Object(_valueUtil__WEBPACK_IMPORTED_MODULE_2__["matchNamePath"])(item.key, key);
      });
      return result && result.value;
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);

      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.list = this.list.filter(function (item) {
        return !Object(_valueUtil__WEBPACK_IMPORTED_MODULE_2__["matchNamePath"])(item.key, key);
      });
    }
  }, {
    key: "map",
    value: function map(callback) {
      return this.list.map(callback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref) {
        var key = _ref.key,
            value = _ref.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);

  return NameMap;
}();

/* harmony default export */ __webpack_exports__["default"] = (NameMap);

/***/ }),

/***/ "./node_modules/rc-field-form/es/utils/asyncUtil.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-field-form/es/utils/asyncUtil.js ***!
  \**********************************************************/
/*! exports provided: allPromiseFinish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPromiseFinish", function() { return allPromiseFinish; });
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;

        if (count > 0) {
          return;
        }

        if (hasError) {
          reject(results);
        }

        resolve(results);
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/rc-field-form/es/utils/messages.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-field-form/es/utils/messages.js ***!
  \*********************************************************/
/*! exports provided: defaultValidateMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultValidateMessages", function() { return defaultValidateMessages; });
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

/***/ }),

/***/ "./node_modules/rc-field-form/es/utils/typeUtil.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-field-form/es/utils/typeUtil.js ***!
  \*********************************************************/
/*! exports provided: toArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
function toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

/***/ }),

/***/ "./node_modules/rc-field-form/es/utils/validateUtil.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-field-form/es/utils/validateUtil.js ***!
  \*************************************************************/
/*! exports provided: validateRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRules", function() { return validateRules; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/rc-field-form/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var async_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! async-validator */ "./node_modules/async-validator/dist-web/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./valueUtil */ "./node_modules/rc-field-form/es/utils/valueUtil.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./node_modules/rc-field-form/es/utils/messages.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // Remove incorrect original ts define

var AsyncValidator = async_validator__WEBPACK_IMPORTED_MODULE_5__["default"];
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */

function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
/**
 * We use `async-validator` to validate rules. So have to hot replace the message with validator.
 * { required: '${name} is required' } => { required: () => 'field is required' }
 */


function convertMessages(messages, name, rule) {
  var kv = _objectSpread({}, rule, {
    name: name,
    enum: (rule.enum || []).join(', ')
  });

  var replaceFunc = function replaceFunc(template, additionalKV) {
    return function () {
      return replaceMessage(template, _objectSpread({}, kv, {}, additionalKV));
    };
  };
  /* eslint-disable no-param-reassign */


  function fillTemplate(source) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(source).forEach(function (ruleName) {
      var value = source[ruleName];

      if (typeof value === 'string') {
        target[ruleName] = replaceFunc(value);
      } else if (value && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(value) === 'object') {
        target[ruleName] = {};
        fillTemplate(value, target[ruleName]);
      } else {
        target[ruleName] = value;
      }
    });
    return target;
  }
  /* eslint-enable */


  return fillTemplate(Object(_valueUtil__WEBPACK_IMPORTED_MODULE_8__["setValues"])({}, _messages__WEBPACK_IMPORTED_MODULE_9__["defaultValidateMessages"], messages));
}

function validateRule(_x, _x2, _x3, _x4) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */


function _validateRule() {
  _validateRule = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name, value, rule, options) {
    var cloneRule, subRuleField, validator, messages, result, subResults;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cloneRule = _objectSpread({}, rule); // We should special handle array validate

            subRuleField = null;

            if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }

            validator = new AsyncValidator(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, [cloneRule]));
            messages = convertMessages(options.validateMessages, name, cloneRule);
            validator.messages(messages);
            result = [];
            _context.prev = 7;
            _context.next = 10;
            return Promise.resolve(validator.validate(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value), _objectSpread({}, options)));

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](7);

            if (_context.t0.errors) {
              result = _context.t0.errors.map(function (_ref2, index) {
                var message = _ref2.message;
                return (// Wrap ReactNode with `key`
                  react__WEBPACK_IMPORTED_MODULE_6__["isValidElement"](message) ? react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](message, {
                    key: "error_".concat(index)
                  }) : message
                );
              });
            } else {
              console.error(_context.t0);
              result = [messages.default()];
            }

          case 15:
            if (!(!result.length && subRuleField)) {
              _context.next = 20;
              break;
            }

            _context.next = 18;
            return Promise.all(value.map(function (subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options);
            }));

          case 18:
            subResults = _context.sent;
            return _context.abrupt("return", subResults.reduce(function (prev, errors) {
              return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(errors));
            }, []));

          case 20:
            return _context.abrupt("return", result);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 12]]);
  }));
  return _validateRule.apply(this, arguments);
}

function validateRules(namePath, value, rules, options, validateFirst) {
  var name = namePath.join('.'); // Fill rule with context

  var filledRules = rules.map(function (currentRule) {
    var originValidatorFunc = currentRule.validator;

    if (!originValidatorFunc) {
      return currentRule;
    }

    return _objectSpread({}, currentRule, {
      validator: function validator(rule, val, callback) {
        var hasPromise = false; // Wrap callback only accept when promise not provided

        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            warning__WEBPACK_IMPORTED_MODULE_7___default()(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');

            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        }; // Get promise


        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */

        warning__WEBPACK_IMPORTED_MODULE_7___default()(hasPromise, '`callback` is deprecated. Please return a promise instead.');

        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err);
          });
        }
      }
    });
  });
  var rulePromises = filledRules.map(function (rule) {
    return validateRule(name, value, rule, options);
  });
  var summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
    if (!errors.length) {
      return [];
    }

    return Promise.reject(errors);
  }); // Internal catch error to avoid console error log.

  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}

function finishOnAllFailed(_x5) {
  return _finishOnAllFailed.apply(this, arguments);
}

function _finishOnAllFailed() {
  _finishOnAllFailed = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(rulePromises) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
              var _ref3;

              var errors = (_ref3 = []).concat.apply(_ref3, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(errorsList));

              return errors;
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}

function finishOnFirstFailed(_x6) {
  return _finishOnFirstFailed.apply(this, arguments);
}

function _finishOnFirstFailed() {
  _finishOnFirstFailed = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(rulePromises) {
    var count;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            count = 0;
            return _context3.abrupt("return", new Promise(function (resolve) {
              rulePromises.forEach(function (promise) {
                promise.then(function (errors) {
                  if (errors.length) {
                    resolve(errors);
                  }

                  count += 1;

                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/rc-field-form/es/utils/valueUtil.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-field-form/es/utils/valueUtil.js ***!
  \**********************************************************/
/*! exports provided: getNamePath, getValue, setValue, cloneByNamePathList, containsNamePath, setValues, matchNamePath, isSimilar, defaultGetValueFromEvent, move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamePath", function() { return getNamePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneByNamePathList", function() { return cloneByNamePathList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsNamePath", function() { return containsNamePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValues", function() { return setValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchNamePath", function() { return matchNamePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSimilar", function() { return isSimilar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGetValueFromEvent", function() { return defaultGetValueFromEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var rc_util_es_utils_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/utils/get */ "./node_modules/rc-util/es/utils/get.js");
/* harmony import */ var rc_util_es_utils_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/utils/set */ "./node_modules/rc-util/es/utils/set.js");
/* harmony import */ var _typeUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeUtil */ "./node_modules/rc-field-form/es/utils/typeUtil.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */

function getNamePath(path) {
  return Object(_typeUtil__WEBPACK_IMPORTED_MODULE_5__["toArray"])(path);
}
function getValue(store, namePath) {
  var value = Object(rc_util_es_utils_get__WEBPACK_IMPORTED_MODULE_3__["default"])(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var newStore = Object(rc_util_es_utils_set__WEBPACK_IMPORTED_MODULE_4__["default"])(store, namePath, value);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(path, namePath);
  });
}

function isObject(obj) {
  return Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */


function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(store) : _objectSpread({}, store);

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value

    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : value;
  });
  return newStore;
}

function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }

  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }

  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }

  if (!source && target || source && !target) {
    return false;
  }

  if (!source || !target || Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(source) !== 'object' || Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(target) !== 'object') {
    return false;
  }

  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceKeys), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(targetKeys)));
  return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];

    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }

    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */

function move(array, moveIndex, toIndex) {
  var length = array.length;

  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }

  var item = array[moveIndex];
  var diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(array.slice(0, toIndex)), [item], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(array.slice(toIndex, moveIndex)), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(array.slice(moveIndex + 1, length)));
  }

  if (diff < 0) {
    // move right
    return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(array.slice(0, moveIndex)), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(array.slice(moveIndex + 1, toIndex + 1)), [item], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(array.slice(toIndex + 1, length)));
  }

  return array;
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/rc-field-form/node_modules/@babel/runtime/regenerator/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/rc-field-form/node_modules/@babel/runtime/regenerator/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/lib/locale/en_US.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
exports.default = locale;

/***/ }),

/***/ "./node_modules/rc-util/es/Children/toArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/Children/toArray.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/rc-util/node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);


function toArray(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (child) {
    if (Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isFragment"])(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/***/ }),

/***/ "./node_modules/rc-util/es/utils/get.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-util/es/utils/get.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get; });
function get(entity, path) {
  var current = entity;

  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[path[i]];
  }

  return current;
}

/***/ }),

/***/ "./node_modules/rc-util/es/utils/set.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-util/es/utils/set.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return set; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function set(entity, paths, value) {
  if (!paths.length) {
    return value;
  }

  var _paths = _toArray(paths),
      path = _paths[0],
      restPath = _paths.slice(1);

  var clone;

  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread({}, entity);
  }

  clone[path] = set(clone[path], restPath, value);
  return clone;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/warning.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/lib/warning.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.note = note;
exports.resetWarned = resetWarned;
exports.call = call;
exports.warningOnce = warningOnce;
exports.noteOnce = noteOnce;
exports.default = void 0;

/* eslint-disable no-console */
var warned = {};

function warning(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}

function note(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}

function resetWarned() {
  warned = {};
}

function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

function warningOnce(valid, message) {
  call(warning, valid, message);
}

function noteOnce(valid, message) {
  call(note, valid, message);
}

var _default = warningOnce;
/* eslint-enable */

exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js":
/*!********************************************************************************!*\
  !*** ./node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/rc-util/node_modules/react-is/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-util/node_modules/react-is/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./src/components/ErrorPage.js":
/*!*************************************!*\
  !*** ./src/components/ErrorPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




var ErrorPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ErrorPage, _Component);

  function ErrorPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ErrorPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ErrorPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorPage, [{
    key: "render",
    value: function render() {
      var RenderComp;

      switch (this.props.statusCode) {
        case 200:
        case 404:
          {
            RenderComp = function RenderComp() {
              return __jsx("div", {
                className: "jsx-1795853223" + " " + 'container'
              }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
                id: "1795853223"
              }, ".container.jsx-1795853223{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error-image.jsx-1795853223{width:200px;height:200px;margin:10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hvd2FyZC9teS9teS1naXQvaHhoLnh5ei9zcmMvY29tcG9uZW50cy9FcnJvclBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ3QixBQUc4QixBQVFELFlBQ0MsYUFDQyxjQUNoQixtQ0FWYSxXQUNDLFlBQ1UsOEVBQ0gsNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6Ii9ob21lL2hvd2FyZC9teS9teS1naXQvaHhoLnh5ei9zcmMvY29tcG9uZW50cy9FcnJvclBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdGF0dXNDb2RlOiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdGF0dXNDb2RlOiAyMDBcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IFJlbmRlckNvbXA7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnN0YXR1c0NvZGUpIHtcbiAgICAgIGNhc2UgMjAwOlxuICAgICAgY2FzZSA0MDQ6IHtcbiAgICAgICAgUmVuZGVyQ29tcCA9ICgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lcnJvci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdlcnJvci1pbWFnZScgYWx0PSdlcnJvci1pbWcnIHNyYz0nL3N0YXRpYy9lbXB0eS5wbmcnIC8+XG4gICAgICAgICAgICA8aDM+VGhlIHBhZ2UgaXMgbm90IGZvdW5kIHwgNDA0772ePC9oMz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9lcnJvcicsICcvJyl9IHR5cGU9J3ByaW1hcnknIGdob3N0PkJhY2sgSG9tZTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNTAwOiB7XG4gICAgICAgIFJlbmRlckNvbXAgPSAoKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lcnJvci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdlcnJvci1pbWFnZScgYWx0PSdlcnJvci1pbWcnIHNyYz0nL3N0YXRpYy91bmtub3duX2Vycm9yLnBuZycgLz5cbiAgICAgICAgICAgIDxoMz5UaGUgcGFnZSBpcyBlcnJvciB8IDUwMO+9njwvaDM+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9IHR5cGU9J3ByaW1hcnknIGdob3N0PkJhY2sgSG9tZTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IFxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZW5kZXJDb21wIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG4iXX0= */\n/*@ sourceURL=/home/howard/my/my-git/hxh.xyz/src/components/ErrorPage.js */"), __jsx("img", {
                alt: "error-img",
                src: "/static/empty.png",
                className: "jsx-1795853223" + " " + 'error-image'
              }), __jsx("h3", {
                className: "jsx-1795853223"
              }, "The page is not found | 404\uFF5E"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
                onClick: function onClick() {
                  return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/error', '/');
                },
                type: "primary",
                ghost: true
              }, "Back Home"));
            };

            break;
          }

        case 500:
          {
            RenderComp = function RenderComp() {
              return __jsx("div", {
                className: "jsx-1023012036" + " " + 'container'
              }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
                id: "1023012036"
              }, ".container.jsx-1023012036{position:absolute;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error-image.jsx-1023012036{width:200px;height:200px;margin:10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hvd2FyZC9teS9teS1naXQvaHhoLnh5ei9zcmMvY29tcG9uZW50cy9FcnJvclBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN3QixBQUdtQyxBQVVOLFlBQ0MsTUFWUCxNQUNPLENBVUMsY0FDaEIsMkRBVmEsV0FDQyxZQUNVLDhFQUNILDZGQUNJLG1HQUN6QiIsImZpbGUiOiIvaG9tZS9ob3dhcmQvbXkvbXktZ2l0L2h4aC54eXovc3JjL2NvbXBvbmVudHMvRXJyb3JQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3RhdHVzQ29kZTogUHJvcFR5cGVzLm51bWJlclxuICB9XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RhdHVzQ29kZTogMjAwXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBSZW5kZXJDb21wO1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5zdGF0dXNDb2RlKSB7XG4gICAgICBjYXNlIDIwMDpcbiAgICAgIGNhc2UgNDA0OiB7XG4gICAgICAgIFJlbmRlckNvbXAgPSAoKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXJyb3ItaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZXJyb3ItaW1hZ2UnIGFsdD0nZXJyb3ItaW1nJyBzcmM9Jy9zdGF0aWMvZW1wdHkucG5nJyAvPlxuICAgICAgICAgICAgPGgzPlRoZSBwYWdlIGlzIG5vdCBmb3VuZCB8IDQwNO+9njwvaDM+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvZXJyb3InLCAnLycpfSB0eXBlPSdwcmltYXJ5JyBnaG9zdD5CYWNrIEhvbWU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDUwMDoge1xuICAgICAgICBSZW5kZXJDb21wID0gKCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXJyb3ItaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZXJyb3ItaW1hZ2UnIGFsdD0nZXJyb3ItaW1nJyBzcmM9Jy9zdGF0aWMvdW5rbm93bl9lcnJvci5wbmcnIC8+XG4gICAgICAgICAgICA8aDM+VGhlIHBhZ2UgaXMgZXJyb3IgfCA1MDDvvZ48L2gzPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfSB0eXBlPSdwcmltYXJ5JyBnaG9zdD5CYWNrIEhvbWU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UmVuZGVyQ29tcCAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuIl19 */\n/*@ sourceURL=/home/howard/my/my-git/hxh.xyz/src/components/ErrorPage.js */"), __jsx("img", {
                alt: "error-img",
                src: "/static/unknown_error.png",
                className: "jsx-1023012036" + " " + 'error-image'
              }), __jsx("h3", {
                className: "jsx-1023012036"
              }, "The page is error | 500\uFF5E"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
                onClick: function onClick() {
                  return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/');
                },
                type: "primary",
                ghost: true
              }, "Back Home"));
            };

            break;
          }

        default:
          break;
      }

      return __jsx(RenderComp, null);
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ErrorPage, "propTypes", {
  statusCode: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ErrorPage, "defaultProps", {
  statusCode: 200
});

/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

/***/ }),

/***/ "./src/pages/_error.js":
/*!*****************************!*\
  !*** ./src/pages/_error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ErrorPage */ "./src/components/ErrorPage.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Error =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Error, _React$Component);

  function Error() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Error);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Error).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Error, [{
    key: "render",
    value: function render() {
      return __jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        statusCode: this.props.statusCode || 200
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Error, "propTypes", {
  statusCode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Error, "defaultProps", {
  statusCode: 200
});



/***/ }),

/***/ 3:
/*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Fhoward%2Fmy%2Fmy-git%2Fhxh.xyz%2Fsrc%2Fpages%2F_error.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Fhoward%2Fmy%2Fmy-git%2Fhxh.xyz%2Fsrc%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fhoward%2Fmy%2Fmy-git%2Fhxh.xyz%2Fsrc%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19lcnJvci5qcy5mNjA4M2MxZjQ4MDIzYzFlMGMwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JhZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2J1dHRvbi1ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NhbGVuZGFyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvcmVuZGVyRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21vZGFsL2xvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1hbmltYXRpb24vbGliL0V2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb21pdC5qcy9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9lcy9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9lcy9GaWVsZENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9lcy9Gb3JtQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9lcy9MaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL2VzL3VzZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvdXRpbHMvTmFtZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9lcy91dGlscy9hc3luY1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvdXRpbHMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvdXRpbHMvdHlwZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvdXRpbHMvdmFsaWRhdGVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL2VzL3V0aWxzL3ZhbHVlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvbGliL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9DaGlsZHJlbi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL3V0aWxzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy91dGlscy9zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcnJvclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gd3JhcHBlclJhZjtcblxudmFyIF9yYWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYWZcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIGlkID0gMDtcbnZhciBpZHMgPSB7fTsgLy8gU3VwcG9ydCBjYWxsIHJhZiB3aXRoIGRlbGF5IHNwZWNpZmllZCBmcmFtZVxuXG5mdW5jdGlvbiB3cmFwcGVyUmFmKGNhbGxiYWNrKSB7XG4gIHZhciBkZWxheUZyYW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgdmFyIG15SWQgPSBpZCsrO1xuICB2YXIgcmVzdEZyYW1lcyA9IGRlbGF5RnJhbWVzO1xuXG4gIGZ1bmN0aW9uIGludGVybmFsQ2FsbGJhY2soKSB7XG4gICAgcmVzdEZyYW1lcyAtPSAxO1xuXG4gICAgaWYgKHJlc3RGcmFtZXMgPD0gMCkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIGRlbGV0ZSBpZHNbbXlJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkc1tteUlkXSA9ICgwLCBfcmFmW1wiZGVmYXVsdFwiXSkoaW50ZXJuYWxDYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgaWRzW215SWRdID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShpbnRlcm5hbENhbGxiYWNrKTtcbiAgcmV0dXJuIG15SWQ7XG59XG5cbndyYXBwZXJSYWYuY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKHBpZCkge1xuICBpZiAocGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwoaWRzW3BpZF0pO1xuXG4gIGRlbGV0ZSBpZHNbcGlkXTtcbn07XG5cbndyYXBwZXJSYWYuaWRzID0gaWRzOyAvLyBleHBvcnQgdGhpcyBmb3IgdGVzdCB1c2FnZVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFmLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnR1cGxlTnVtID0gZXhwb3J0cy50dXBsZSA9IHZvaWQgMDtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDYxNzYxNjUvd2F5cy10by1nZXQtc3RyaW5nLWxpdGVyYWwtdHlwZS1vZi1hcnJheS12YWx1ZXMtd2l0aG91dC1lbnVtLW92ZXJoZWFkXG52YXIgdHVwbGUgPSBmdW5jdGlvbiB0dXBsZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBhcmdzO1xufTtcblxuZXhwb3J0cy50dXBsZSA9IHR1cGxlO1xuXG52YXIgdHVwbGVOdW0gPSBmdW5jdGlvbiB0dXBsZU51bSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3M7XG59O1xuXG5leHBvcnRzLnR1cGxlTnVtID0gdHVwbGVOdW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlc2V0V2FybmVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93YXJuaW5nLnJlc2V0V2FybmVkO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmMtdXRpbC9saWIvd2FybmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHZhbGlkLCBjb21wb25lbnQsIG1lc3NhZ2UpIHtcbiAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkodmFsaWQsIFwiW2FudGQ6IFwiLmNvbmNhdChjb21wb25lbnQsIFwiXSBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YXJuaW5nLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjc3MtYW5pbWF0aW9uL2xpYi9FdmVudFwiKSk7XG5cbnZhciBfcmFmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yYWZcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBzdHlsZUZvclBlc3VkbzsgLy8gV2hlcmUgZWwgaXMgdGhlIERPTSBlbGVtZW50IHlvdSdkIGxpa2UgdG8gdGVzdCBmb3IgdmlzaWJpbGl0eVxuXG5mdW5jdGlvbiBpc0hpZGRlbihlbGVtZW50KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICFlbGVtZW50IHx8IGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc05vdEdyZXkoY29sb3IpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHZhciBtYXRjaCA9IChjb2xvciB8fCAnJykubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXC5cXGRdKik/XFwpLyk7XG5cbiAgaWYgKG1hdGNoICYmIG1hdGNoWzFdICYmIG1hdGNoWzJdICYmIG1hdGNoWzNdKSB7XG4gICAgcmV0dXJuICEobWF0Y2hbMV0gPT09IG1hdGNoWzJdICYmIG1hdGNoWzJdID09PSBtYXRjaFszXSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIFdhdmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFdhdmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFdhdmUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdhdmUpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoV2F2ZSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSBmYWxzZTtcbiAgICBfdGhpcy5kZXN0cm95ID0gZmFsc2U7XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKG5vZGUsIHdhdmVDb2xvcikge1xuICAgICAgaWYgKCFub2RlIHx8IGlzSGlkZGVuKG5vZGUpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJy1sZWF2ZScpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gX3RoaXMucHJvcHMuaW5zZXJ0RXh0cmFOb2RlO1xuICAgICAgX3RoaXMuZXh0cmFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICBleHRyYU5vZGUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUuZXh0cmFOb2RlO1xuXG4gICAgICBleHRyYU5vZGUuY2xhc3NOYW1lID0gJ2FudC1jbGljay1hbmltYXRpbmctbm9kZSc7XG5cbiAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gX3RoaXMuZ2V0QXR0cmlidXRlTmFtZSgpO1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCAndHJ1ZScpOyAvLyBOb3Qgd2hpdGUgb3IgdHJhbnNwYXJudCBvciBncmV5XG5cbiAgICAgIHN0eWxlRm9yUGVzdWRvID0gc3R5bGVGb3JQZXN1ZG8gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgaWYgKHdhdmVDb2xvciAmJiB3YXZlQ29sb3IgIT09ICcjZmZmZmZmJyAmJiB3YXZlQ29sb3IgIT09ICdyZ2IoMjU1LCAyNTUsIDI1NSknICYmIGlzTm90R3JleSh3YXZlQ29sb3IpICYmICEvcmdiYVxcKFxcZCosIFxcZCosIFxcZCosIDBcXCkvLnRlc3Qod2F2ZUNvbG9yKSAmJiAvLyBhbnkgdHJhbnNwYXJlbnQgcmdiYSBjb2xvclxuICAgICAgd2F2ZUNvbG9yICE9PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgIC8vIEFkZCBub25jZSBpZiBDU1AgZXhpc3RcbiAgICAgICAgaWYgKF90aGlzLmNzcCAmJiBfdGhpcy5jc3Aubm9uY2UpIHtcbiAgICAgICAgICBzdHlsZUZvclBlc3Vkby5ub25jZSA9IF90aGlzLmNzcC5ub25jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4dHJhTm9kZS5zdHlsZS5ib3JkZXJDb2xvciA9IHdhdmVDb2xvcjtcbiAgICAgICAgc3R5bGVGb3JQZXN1ZG8uaW5uZXJIVE1MID0gXCJcXG4gICAgICBbYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGU9J3RydWUnXTo6YWZ0ZXIsIC5hbnQtY2xpY2stYW5pbWF0aW5nLW5vZGUge1xcbiAgICAgICAgLS1hbnRkLXdhdmUtc2hhZG93LWNvbG9yOiBcIi5jb25jYXQod2F2ZUNvbG9yLCBcIjtcXG4gICAgICB9XCIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdHlsZUZvclBlc3VkbykpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlRm9yUGVzdWRvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5zZXJ0RXh0cmFOb2RlKSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZXh0cmFOb2RlKTtcbiAgICAgIH1cblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5hZGRTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgX3RoaXMub25UcmFuc2l0aW9uU3RhcnQpO1xuXG4gICAgICBfRXZlbnRbXCJkZWZhdWx0XCJdLmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgX3RoaXMub25UcmFuc2l0aW9uRW5kKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25UcmFuc2l0aW9uU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLmRlc3Ryb3kpIHJldHVybjtcbiAgICAgIHZhciBub2RlID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgICBpZiAoIWUgfHwgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIV90aGlzLmFuaW1hdGlvblN0YXJ0KSB7XG4gICAgICAgIF90aGlzLnJlc2V0RWZmZWN0KG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFlIHx8IGUuYW5pbWF0aW9uTmFtZSAhPT0gJ2ZhZGVFZmZlY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucmVzZXRFZmZlY3QoZS50YXJnZXQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5iaW5kQW5pbWF0aW9uRXZlbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmdldEF0dHJpYnV0ZSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBub2RlLmNsYXNzTmFtZS5pbmRleE9mKCdkaXNhYmxlZCcpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAvLyBGaXggcmFkaW8gYnV0dG9uIGNsaWNrIHR3aWNlXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnIHx8IGlzSGlkZGVuKGUudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnJlc2V0RWZmZWN0KG5vZGUpOyAvLyBHZXQgd2F2ZSBjb2xvciBmcm9tIHRhcmdldFxuXG5cbiAgICAgICAgdmFyIHdhdmVDb2xvciA9IGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXRvcC1jb2xvcicpIHx8IC8vIEZpcmVmb3ggQ29tcGF0aWJsZVxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1jb2xvcicpIHx8IGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgICAgICBfdGhpcy5jbGlja1dhdmVUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm9uQ2xpY2sobm9kZSwgd2F2ZUNvbG9yKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgX3JhZltcImRlZmF1bHRcIl0uY2FuY2VsKF90aGlzLmFuaW1hdGlvblN0YXJ0SWQpO1xuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvblN0YXJ0ID0gdHJ1ZTsgLy8gUmVuZGVyIHRvIHRyaWdnZXIgdHJhbnNpdGlvbiBldmVudCBjb3N0IDMgZnJhbWVzLiBMZXQncyBkZWxheSAxMCBmcmFtZXMgdG8gcmVzZXQgdGhpcy5cblxuICAgICAgICBfdGhpcy5hbmltYXRpb25TdGFydElkID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfTtcblxuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2ssIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2ssIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJXYXZlID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBjc3AgPSBfcmVmLmNzcDtcbiAgICAgIHZhciBjaGlsZHJlbiA9IF90aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgX3RoaXMuY3NwID0gY3NwO1xuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2F2ZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpO1xuXG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmJpbmRBbmltYXRpb25FdmVudChub2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmNhbmNlbCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jbGlja1dhdmVUaW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tXYXZlVGltZW91dElkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZXN0cm95ID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXR0cmlidXRlTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVOYW1lKCkge1xuICAgICAgdmFyIGluc2VydEV4dHJhTm9kZSA9IHRoaXMucHJvcHMuaW5zZXJ0RXh0cmFOb2RlO1xuICAgICAgcmV0dXJuIGluc2VydEV4dHJhTm9kZSA/ICdhbnQtY2xpY2stYW5pbWF0aW5nJyA6ICdhbnQtY2xpY2stYW5pbWF0aW5nLXdpdGhvdXQtZXh0cmEtbm9kZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0RWZmZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0RWZmZWN0KG5vZGUpIHtcbiAgICAgIGlmICghbm9kZSB8fCBub2RlID09PSB0aGlzLmV4dHJhTm9kZSB8fCAhKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnNlcnRFeHRyYU5vZGUgPSB0aGlzLnByb3BzLmluc2VydEV4dHJhTm9kZTtcbiAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGVOYW1lKCk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCAnZmFsc2UnKTsgLy8gZWRnZSBoYXMgYnVnIG9uIGByZW1vdmVBdHRyaWJ1dGVgICMxNDQ2NlxuXG4gICAgICBpZiAoc3R5bGVGb3JQZXN1ZG8pIHtcbiAgICAgICAgc3R5bGVGb3JQZXN1ZG8uaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnNlcnRFeHRyYU5vZGUgJiYgdGhpcy5leHRyYU5vZGUgJiYgbm9kZS5jb250YWlucyh0aGlzLmV4dHJhTm9kZSkpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZCh0aGlzLmV4dHJhTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIF9FdmVudFtcImRlZmF1bHRcIl0ucmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIHRoaXMub25UcmFuc2l0aW9uU3RhcnQpO1xuXG4gICAgICBfRXZlbnRbXCJkZWZhdWx0XCJdLnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlcldhdmUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXYXZlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFdhdmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YXZlLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIEJ1dHRvbkdyb3VwID0gZnVuY3Rpb24gQnV0dG9uR3JvdXAocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb247XG5cbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnYnRuLWdyb3VwJywgY3VzdG9taXplUHJlZml4Q2xzKTsgLy8gbGFyZ2UgPT4gbGdcbiAgICAvLyBzbWFsbCA9PiBzbVxuXG4gICAgdmFyIHNpemVDbHMgPSAnJztcblxuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgc2l6ZUNscyA9ICdzbSc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gQnV0dG9uR3JvdXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnV0dG9uLWdyb3VwLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfaWNvbnMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF93YXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvd2F2ZVwiKSk7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC93YXJuaW5nXCIpKTtcblxudmFyIF9TaXplQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2J1dHRvbi1oYXMtdHlwZSAqL1xuXG5cbnZhciByeFR3b0NOQ2hhciA9IC9eW1xcdTRlMDAtXFx1OWZhNV17Mn0kLztcbnZhciBpc1R3b0NOQ2hhciA9IHJ4VHdvQ05DaGFyLnRlc3QuYmluZChyeFR3b0NOQ2hhcik7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59IC8vIEluc2VydCBvbmUgc3BhY2UgYmV0d2VlbiB0d28gY2hpbmVzZSBjaGFyYWN0ZXJzIGF1dG9tYXRpY2FsbHkuXG5cblxuZnVuY3Rpb24gaW5zZXJ0U3BhY2UoY2hpbGQsIG5lZWRJbnNlcnRlZCkge1xuICAvLyBDaGVjayB0aGUgY2hpbGQgaWYgaXMgdW5kZWZpbmVkIG9yIG51bGwuXG4gIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIFNQQUNFID0gbmVlZEluc2VydGVkID8gJyAnIDogJyc7IC8vIHN0cmljdE51bGxDaGVja3Mgb29wcy5cblxuICBpZiAodHlwZW9mIGNoaWxkICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgY2hpbGQgIT09ICdudW1iZXInICYmIGlzU3RyaW5nKGNoaWxkLnR5cGUpICYmIGlzVHdvQ05DaGFyKGNoaWxkLnByb3BzLmNoaWxkcmVuKSkge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHt9LCBjaGlsZC5wcm9wcy5jaGlsZHJlbi5zcGxpdCgnJykuam9pbihTUEFDRSkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNUd29DTkNoYXIoY2hpbGQpKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkLnNwbGl0KCcnKS5qb2luKFNQQUNFKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGQpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG5mdW5jdGlvbiBzcGFjZUNoaWxkcmVuKGNoaWxkcmVuLCBuZWVkSW5zZXJ0ZWQpIHtcbiAgdmFyIGlzUHJldkNoaWxkUHVyZSA9IGZhbHNlO1xuICB2YXIgY2hpbGRMaXN0ID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciB0eXBlID0gX3R5cGVvZihjaGlsZCk7XG5cbiAgICB2YXIgaXNDdXJyZW50Q2hpbGRQdXJlID0gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG5cbiAgICBpZiAoaXNQcmV2Q2hpbGRQdXJlICYmIGlzQ3VycmVudENoaWxkUHVyZSkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IGNoaWxkTGlzdC5sZW5ndGggLSAxO1xuICAgICAgdmFyIGxhc3RDaGlsZCA9IGNoaWxkTGlzdFtsYXN0SW5kZXhdO1xuICAgICAgY2hpbGRMaXN0W2xhc3RJbmRleF0gPSBcIlwiLmNvbmNhdChsYXN0Q2hpbGQpLmNvbmNhdChjaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTGlzdC5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBpc1ByZXZDaGlsZFB1cmUgPSBpc0N1cnJlbnRDaGlsZFB1cmU7XG4gIH0pOyAvLyBQYXNzIHRvIFJlYWN0LkNoaWxkcmVuLm1hcCB0byBhdXRvIGZpbGwga2V5XG5cbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZExpc3QsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBpbnNlcnRTcGFjZShjaGlsZCwgbmVlZEluc2VydGVkKTtcbiAgfSk7XG59XG5cbnZhciBCdXR0b25UeXBlcyA9ICgwLCBfdHlwZS50dXBsZSkoJ2RlZmF1bHQnLCAncHJpbWFyeScsICdnaG9zdCcsICdkYXNoZWQnLCAnZGFuZ2VyJywgJ2xpbmsnKTtcbnZhciBCdXR0b25TaGFwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdjaXJjbGUnLCAnY2lyY2xlLW91dGxpbmUnLCAncm91bmQnKTtcbnZhciBCdXR0b25IVE1MVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0Jyk7XG5cbnZhciBCdXR0b24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJ1dHRvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihCdXR0b24pLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnNhdmVCdXR0b25SZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuYnV0dG9uTm9kZSA9IG5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBsb2FkaW5nID0gX3RoaXMuc3RhdGUubG9hZGluZztcbiAgICAgIHZhciBvbkNsaWNrID0gX3RoaXMucHJvcHMub25DbGljaztcblxuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IHByb3BzLmxvYWRpbmcsXG4gICAgICBoYXNUd29DTkNoYXI6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQnV0dG9uLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuZml4VHdvQ05DaGFyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5maXhUd29DTkNoYXIoKTtcblxuICAgICAgaWYgKHByZXZQcm9wcy5sb2FkaW5nICYmIHR5cGVvZiBwcmV2UHJvcHMubG9hZGluZyAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsb2FkaW5nID0gdGhpcy5wcm9wcy5sb2FkaW5nO1xuXG4gICAgICBpZiAobG9hZGluZyAmJiB0eXBlb2YgbG9hZGluZyAhPT0gJ2Jvb2xlYW4nICYmIGxvYWRpbmcuZGVsYXkpIHtcbiAgICAgICAgdGhpcy5kZWxheVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZGluZy5kZWxheSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy5sb2FkaW5nICE9PSBsb2FkaW5nKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmRlbGF5VGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaXhUd29DTkNoYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZml4VHdvQ05DaGFyKCkge1xuICAgICAgdmFyIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uID0gdGhpcy5jb250ZXh0LmF1dG9JbnNlcnRTcGFjZUluQnV0dG9uOyAvLyBGaXggZm9yIEhPQyB1c2FnZSBsaWtlIDxGb3JtYXRNZXNzYWdlIC8+XG5cbiAgICAgIGlmICghdGhpcy5idXR0b25Ob2RlIHx8IGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBidXR0b25UZXh0ID0gdGhpcy5idXR0b25Ob2RlLnRleHRDb250ZW50O1xuXG4gICAgICBpZiAodGhpcy5pc05lZWRJbnNlcnRlZCgpICYmIGlzVHdvQ05DaGFyKGJ1dHRvblRleHQpKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5oYXNUd29DTkNoYXIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGhhc1R3b0NOQ2hhcjogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaGFzVHdvQ05DaGFyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1R3b0NOQ2hhcjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzTmVlZEluc2VydGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTmVlZEluc2VydGVkKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpY29uID0gX3RoaXMkcHJvcHMuaWNvbixcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wcy50eXBlO1xuICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMSAmJiAhaWNvbiAmJiB0eXBlICE9PSAnbGluayc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJGNvbnRleHQgPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3RoaXMkY29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPSBfdGhpcyRjb250ZXh0LmF1dG9JbnNlcnRTcGFjZUluQnV0dG9uLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJGNvbnRleHQuZGlyZWN0aW9uO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXS5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciBfYSA9IF90aGlzMy5wcm9wcyxcbiAgICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgIHR5cGUgPSBfYS50eXBlLFxuICAgICAgICAgICAgZGFuZ2VyID0gX2EuZGFuZ2VyLFxuICAgICAgICAgICAgc2hhcGUgPSBfYS5zaGFwZSxcbiAgICAgICAgICAgIGN1c3RvbWl6ZVNpemUgPSBfYS5zaXplLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICAgIGljb24gPSBfYS5pY29uLFxuICAgICAgICAgICAgZ2hvc3QgPSBfYS5naG9zdCxcbiAgICAgICAgICAgIGJsb2NrID0gX2EuYmxvY2ssXG4gICAgICAgICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJ0eXBlXCIsIFwiZGFuZ2VyXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJpY29uXCIsIFwiZ2hvc3RcIiwgXCJibG9ja1wiXSk7XG5cbiAgICAgICAgdmFyIF90aGlzMyRzdGF0ZSA9IF90aGlzMy5zdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmcgPSBfdGhpczMkc3RhdGUubG9hZGluZyxcbiAgICAgICAgICAgIGhhc1R3b0NOQ2hhciA9IF90aGlzMyRzdGF0ZS5oYXNUd29DTkNoYXI7XG4gICAgICAgICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKCEodHlwZW9mIGljb24gPT09ICdzdHJpbmcnICYmIGljb24ubGVuZ3RoID4gMiksICdCdXR0b24nLCBcImBpY29uYCBpcyB1c2luZyBSZWFjdE5vZGUgaW5zdGVhZCBvZiBzdHJpbmcgbmFtaW5nIGluIHY0LiBQbGVhc2UgY2hlY2sgYFwiLmNvbmNhdChpY29uLCBcImAgYXQgaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvblwiKSk7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2J0bicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICAgIHZhciBhdXRvSW5zZXJ0U3BhY2UgPSBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiAhPT0gZmFsc2U7IC8vIGxhcmdlID0+IGxnXG4gICAgICAgIC8vIHNtYWxsID0+IHNtXG5cbiAgICAgICAgdmFyIHNpemVDbHMgPSAnJztcblxuICAgICAgICBzd2l0Y2ggKGN1c3RvbWl6ZVNpemUgfHwgc2l6ZSkge1xuICAgICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICAgIHNpemVDbHMgPSAnbGcnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGljb25UeXBlID0gbG9hZGluZyA/ICdsb2FkaW5nJyA6IGljb247XG4gICAgICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0eXBlKSwgdHlwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNoYXBlKSwgc2hhcGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplQ2xzKSwgc2l6ZUNscyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uLW9ubHlcIiksICFjaGlsZHJlbiAmJiBjaGlsZHJlbiAhPT0gMCAmJiBpY29uVHlwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nXCIpLCAhIWxvYWRpbmcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmFja2dyb3VuZC1naG9zdFwiKSwgZ2hvc3QpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHdvLWNoaW5lc2UtY2hhcnNcIiksIGhhc1R3b0NOQ2hhciAmJiBhdXRvSW5zZXJ0U3BhY2UpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmxvY2tcIiksIGJsb2NrKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRhbmdlcm91c1wiKSwgISFkYW5nZXIpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgdmFyIGljb25Ob2RlID0gbG9hZGluZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25zLkxvYWRpbmdPdXRsaW5lZCwgbnVsbCkgOiBpY29uIHx8IG51bGw7XG4gICAgICAgIHZhciBraWRzID0gY2hpbGRyZW4gfHwgY2hpbGRyZW4gPT09IDAgPyBzcGFjZUNoaWxkcmVuKGNoaWxkcmVuLCBfdGhpczMuaXNOZWVkSW5zZXJ0ZWQoKSAmJiBhdXRvSW5zZXJ0U3BhY2UpIDogbnVsbDtcbiAgICAgICAgdmFyIGxpbmtCdXR0b25SZXN0UHJvcHMgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShyZXN0LCBbJ2h0bWxUeXBlJywgJ2xvYWRpbmcnXSk7XG5cbiAgICAgICAgaWYgKGxpbmtCdXR0b25SZXN0UHJvcHMuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCBsaW5rQnV0dG9uUmVzdFByb3BzLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgICAgICBvbkNsaWNrOiBfdGhpczMuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgICByZWY6IF90aGlzMy5zYXZlQnV0dG9uUmVmXG4gICAgICAgICAgfSksIGljb25Ob2RlLCBraWRzKTtcbiAgICAgICAgfSAvLyBSZWFjdCBkb2VzIG5vdCByZWNvZ25pemUgdGhlIGBodG1sVHlwZWAgcHJvcCBvbiBhIERPTSBlbGVtZW50LiBIZXJlIHdlIHBpY2sgaXQgb3V0IG9mIGByZXN0YC5cblxuXG4gICAgICAgIHZhciBfYiA9IHJlc3QsXG4gICAgICAgICAgICBodG1sVHlwZSA9IF9iLmh0bWxUeXBlLFxuICAgICAgICAgICAgb3RoZXJQcm9wcyA9IF9fcmVzdChfYiwgW1wiaHRtbFR5cGVcIl0pO1xuXG4gICAgICAgIHZhciBidXR0b25Ob2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBfZXh0ZW5kcyh7fSwgKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkob3RoZXJQcm9wcywgWydsb2FkaW5nJ10pLCB7XG4gICAgICAgICAgdHlwZTogaHRtbFR5cGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICAgIG9uQ2xpY2s6IF90aGlzMy5oYW5kbGVDbGljayxcbiAgICAgICAgICByZWY6IF90aGlzMy5zYXZlQnV0dG9uUmVmXG4gICAgICAgIH0pLCBpY29uTm9kZSwga2lkcyk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJykge1xuICAgICAgICAgIHJldHVybiBidXR0b25Ob2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3dhdmVbXCJkZWZhdWx0XCJdLCBudWxsLCBidXR0b25Ob2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCdXR0b247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkJ1dHRvbi5fX0FOVF9CVVRUT04gPSB0cnVlO1xuQnV0dG9uLmNvbnRleHRUeXBlID0gX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQ7XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgZ2hvc3Q6IGZhbHNlLFxuICBibG9jazogZmFsc2UsXG4gIGh0bWxUeXBlOiAnYnV0dG9uJ1xufTtcbnZhciBfZGVmYXVsdCA9IEJ1dHRvbjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idXR0b24uanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2J1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYnV0dG9uXCIpKTtcblxudmFyIF9idXR0b25Hcm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYnV0dG9uLWdyb3VwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbl9idXR0b25bXCJkZWZhdWx0XCJdLkdyb3VwID0gX2J1dHRvbkdyb3VwW1wiZGVmYXVsdFwiXTtcbnZhciBfZGVmYXVsdCA9IF9idXR0b25bXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IF9lbl9VU1tcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5fVVMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLlNpemVDb250ZXh0UHJvdmlkZXIgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbnZhciBTaXplQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcblxudmFyIFNpemVDb250ZXh0UHJvdmlkZXIgPSBmdW5jdGlvbiBTaXplQ29udGV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHNpemUgPSBfcmVmLnNpemU7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAob3JpZ2luU2l6ZSkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogc2l6ZSB8fCBvcmlnaW5TaXplXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuU2l6ZUNvbnRleHRQcm92aWRlciA9IFNpemVDb250ZXh0UHJvdmlkZXI7XG52YXIgX2RlZmF1bHQgPSBTaXplQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TaXplQ29udGV4dC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhDb25maWdDb25zdW1lciA9IHdpdGhDb25maWdDb25zdW1lcjtcbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBleHBvcnRzLkNvbmZpZ0NvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVuZGVyRW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlckVtcHR5XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBDb25maWdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIC8vIFdlIHByb3ZpZGUgYSBkZWZhdWx0IGZ1bmN0aW9uIGZvciBDb250ZXh0IHdpdGhvdXQgcHJvdmlkZXJcbiAgZ2V0UHJlZml4Q2xzOiBmdW5jdGlvbiBnZXRQcmVmaXhDbHMoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpIHtcbiAgICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICAgIHJldHVybiBcImFudC1cIi5jb25jYXQoc3VmZml4Q2xzKTtcbiAgfSxcbiAgcmVuZGVyRW1wdHk6IF9yZW5kZXJFbXB0eVtcImRlZmF1bHRcIl1cbn0pO1xuZXhwb3J0cy5Db25maWdDb250ZXh0ID0gQ29uZmlnQ29udGV4dDtcbnZhciBDb25maWdDb25zdW1lciA9IENvbmZpZ0NvbnRleHQuQ29uc3VtZXI7XG5leHBvcnRzLkNvbmZpZ0NvbnN1bWVyID0gQ29uZmlnQ29uc3VtZXI7XG5cbmZ1bmN0aW9uIHdpdGhDb25maWdDb25zdW1lcihjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdpdGhDb25maWdDb25zdW1lckZ1bmMoQ29tcG9uZW50KSB7XG4gICAgLy8gV3JhcCB3aXRoIENvbmZpZ0NvbnN1bWVyLiBTaW5jZSB3ZSBuZWVkIGNvbXBhdGlibGUgd2l0aCByZWFjdCAxNSwgYmUgY2FyZSB3aGVuIHVzaW5nIHJlZiBtZXRob2RzXG4gICAgdmFyIFNGQyA9IGZ1bmN0aW9uIFNGQyhwcm9wcykge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25maWdQcm9wcykge1xuICAgICAgICB2YXIgYmFzaWNQcmVmaXhDbHMgPSBjb25maWcucHJlZml4Q2xzO1xuICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gY29uZmlnUHJvcHMuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKGJhc2ljUHJlZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBjb25maWdQcm9wcywgcHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnMgPSBDb21wb25lbnQuY29uc3RydWN0b3I7XG4gICAgdmFyIG5hbWUgPSBjb25zICYmIGNvbnMuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgU0ZDLmRpc3BsYXlOYW1lID0gXCJ3aXRoQ29uZmlnQ29uc3VtZXIoXCIuY29uY2F0KG5hbWUsIFwiKVwiKTtcbiAgICByZXR1cm4gU0ZDO1xuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29uc3VtZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuQ29uZmlnQ29uc3VtZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29udGV4dFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5Db25maWdDb250ZXh0O1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjRmllbGRGb3JtID0gcmVxdWlyZShcInJjLWZpZWxkLWZvcm1cIik7XG5cbnZhciBfbG9jYWxlUHJvdmlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyXCIpKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSByZXF1aXJlKFwiLi9TaXplQ29udGV4dFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBjb25maWdDb25zdW1lclByb3BzID0gWydnZXRQb3B1cENvbnRhaW5lcicsICdyb290UHJlZml4Q2xzJywgJ2dldFByZWZpeENscycsICdyZW5kZXJFbXB0eScsICdjc3AnLCAnYXV0b0luc2VydFNwYWNlSW5CdXR0b24nLCAnbG9jYWxlJywgJ3BhZ2VIZWFkZXInXTtcbmV4cG9ydHMuY29uZmlnQ29uc3VtZXJQcm9wcyA9IGNvbmZpZ0NvbnN1bWVyUHJvcHM7XG5cbnZhciBDb25maWdQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29uZmlnUHJvdmlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbmZpZ1Byb3ZpZGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25maWdQcm92aWRlcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihDb25maWdQcm92aWRlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5nZXRQcmVmaXhDbHMgPSBmdW5jdGlvbiAoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyRwcmVmaXhDbHMgPSBfdGhpcy5wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAnYW50JyA6IF90aGlzJHByb3BzJHByZWZpeENscztcbiAgICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgICByZXR1cm4gc3VmZml4Q2xzID8gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHN1ZmZpeENscykgOiBwcmVmaXhDbHM7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclByb3ZpZGVyID0gZnVuY3Rpb24gKGNvbnRleHQsIGxlZ2FjeUxvY2FsZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF90aGlzJHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgIHJlbmRlckVtcHR5ID0gX3RoaXMkcHJvcHMucmVuZGVyRW1wdHksXG4gICAgICAgICAgY3NwID0gX3RoaXMkcHJvcHMuY3NwLFxuICAgICAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uID0gX3RoaXMkcHJvcHMuYXV0b0luc2VydFNwYWNlSW5CdXR0b24sXG4gICAgICAgICAgZm9ybSA9IF90aGlzJHByb3BzLmZvcm0sXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHMubG9jYWxlLFxuICAgICAgICAgIHBhZ2VIZWFkZXIgPSBfdGhpcyRwcm9wcy5wYWdlSGVhZGVyLFxuICAgICAgICAgIGNvbXBvbmVudFNpemUgPSBfdGhpcyRwcm9wcy5jb21wb25lbnRTaXplLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzLmRpcmVjdGlvbjtcblxuICAgICAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKF9leHRlbmRzKHt9LCBjb250ZXh0KSwge1xuICAgICAgICBnZXRQcmVmaXhDbHM6IF90aGlzLmdldFByZWZpeENscyxcbiAgICAgICAgY3NwOiBjc3AsXG4gICAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uOiBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbGVnYWN5TG9jYWxlLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChnZXRQb3B1cENvbnRhaW5lcikge1xuICAgICAgICBjb25maWcuZ2V0UG9wdXBDb250YWluZXIgPSBnZXRQb3B1cENvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbmRlckVtcHR5KSB7XG4gICAgICAgIGNvbmZpZy5yZW5kZXJFbXB0eSA9IHJlbmRlckVtcHR5O1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnZUhlYWRlcikge1xuICAgICAgICBjb25maWcucGFnZUhlYWRlciA9IHBhZ2VIZWFkZXI7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZE5vZGUgPSBjaGlsZHJlbjsgLy8gQWRkaXRpb25hbCBGb3JtIHByb3ZpZGVyXG5cbiAgICAgIGlmIChmb3JtICYmIGZvcm0udmFsaWRhdGVNZXNzYWdlcykge1xuICAgICAgICBjaGlsZE5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9yY0ZpZWxkRm9ybS5Gb3JtUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VzOiBmb3JtLnZhbGlkYXRlTWVzc2FnZXNcbiAgICAgICAgfSwgY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfU2l6ZUNvbnRleHQuU2l6ZUNvbnRleHRQcm92aWRlciwge1xuICAgICAgICBzaXplOiBjb21wb25lbnRTaXplXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkNvbmZpZ0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IGNvbmZpZ1xuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChfbG9jYWxlUHJvdmlkZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxlZ2FjeUxvY2FsZSxcbiAgICAgICAgX0FOVF9NQVJLX186IF9sb2NhbGVQcm92aWRlci5BTlRfTUFSS1xuICAgICAgfSwgY2hpbGROb2RlKSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29uZmlnUHJvdmlkZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwgbnVsbCwgZnVuY3Rpb24gKF8sIF9fLCBsZWdhY3lMb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHQuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5yZW5kZXJQcm92aWRlcihjb250ZXh0LCBsZWdhY3lMb2NhbGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25maWdQcm92aWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIF9kZWZhdWx0ID0gQ29uZmlnUHJvdmlkZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9lbXB0eVwiKSk7XG5cbnZhciBfID0gcmVxdWlyZShcIi5cIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG52YXIgcmVuZGVyRW1wdHkgPSBmdW5jdGlvbiByZW5kZXJFbXB0eShjb21wb25lbnROYW1lKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF8uQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuICAgIHZhciBwcmVmaXggPSBnZXRQcmVmaXhDbHMoJ2VtcHR5Jyk7XG5cbiAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ1RhYmxlJzpcbiAgICAgIGNhc2UgJ0xpc3QnOlxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgaW1hZ2U6IF9lbXB0eVtcImRlZmF1bHRcIl0uUFJFU0VOVEVEX0lNQUdFX1NJTVBMRVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnU2VsZWN0JzpcbiAgICAgIGNhc2UgJ1RyZWVTZWxlY3QnOlxuICAgICAgY2FzZSAnQ2FzY2FkZXInOlxuICAgICAgY2FzZSAnVHJhbnNmZXInOlxuICAgICAgY2FzZSAnTWVudGlvbnMnOlxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgaW1hZ2U6IF9lbXB0eVtcImRlZmF1bHRcIl0uUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItc21hbGxcIilcbiAgICAgICAgfSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZW5kZXJFbXB0eTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXJFbXB0eS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1waWNrZXIvbGliL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8vIE1lcmdlIGludG8gYSBsb2NhbGUgb2JqZWN0XG52YXIgbG9jYWxlID0ge1xuICBsYW5nOiBfZXh0ZW5kcyh7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgZGF0ZScsXG4gICAgeWVhclBsYWNlaG9sZGVyOiAnU2VsZWN0IHllYXInLFxuICAgIG1vbnRoUGxhY2Vob2xkZXI6ICdTZWxlY3QgbW9udGgnLFxuICAgIHdlZWtQbGFjZWhvbGRlcjogJ1NlbGVjdCB3ZWVrJyxcbiAgICByYW5nZVBsYWNlaG9sZGVyOiBbJ1N0YXJ0IGRhdGUnLCAnRW5kIGRhdGUnXSxcbiAgICByYW5nZVllYXJQbGFjZWhvbGRlcjogWydTdGFydCB5ZWFyJywgJ0VuZCB5ZWFyJ10sXG4gICAgcmFuZ2VNb250aFBsYWNlaG9sZGVyOiBbJ1N0YXJ0IG1vbnRoJywgJ0VuZCBtb250aCddLFxuICAgIHJhbmdlV2Vla1BsYWNlaG9sZGVyOiBbJ1N0YXJ0IHdlZWsnLCAnRW5kIHdlZWsnXVxuICB9LCBfZW5fVVNbXCJkZWZhdWx0XCJdKSxcbiAgdGltZVBpY2tlckxvY2FsZTogX2V4dGVuZHMoe30sIF9lbl9VUzJbXCJkZWZhdWx0XCJdKVxufTsgLy8gQWxsIHNldHRpbmdzIGF0OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9ibG9iL21hc3Rlci9jb21wb25lbnRzL2RhdGUtcGlja2VyL2xvY2FsZS9leGFtcGxlLmpzb25cblxudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuX1VTLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7XG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5LWltZy1kZWZhdWx0Jyk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBjbGFzc05hbWU6IHByZWZpeENscyxcbiAgICB3aWR0aDogXCIxODRcIixcbiAgICBoZWlnaHQ6IFwiMTUyXCIsXG4gICAgdmlld0JveDogXCIwIDAgMTg0IDE1MlwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyNCAzMS42NylcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiNjcuNzk3XCIsXG4gICAgY3k6IFwiMTA2Ljg5XCIsXG4gICAgcng6IFwiNjcuNzk3XCIsXG4gICAgcnk6IFwiMTIuNjY4XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0xXCIpLFxuICAgIGQ6IFwiTTEyMi4wMzQgNjkuNjc0TDk4LjEwOSA0MC4yMjljLTEuMTQ4LTEuMzg2LTIuODI2LTIuMjI1LTQuNTkzLTIuMjI1aC01MS40NGMtMS43NjYgMC0zLjQ0NC44MzktNC41OTIgMi4yMjVMMTMuNTYgNjkuNjc0djE1LjM4M2gxMDguNDc1VjY5LjY3NHpcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTJcIiksXG4gICAgZDogXCJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxMy41NilcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTNcIiksXG4gICAgZDogXCJNMzMuODMgMGg2Ny45MzNhNCA0IDAgMCAxIDQgNHY5My4zNDRhNCA0IDAgMCAxLTQgNEgzMy44M2E0IDQgMCAwIDEtNC00VjRhNCA0IDAgMCAxIDQtNHpcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTRcIiksXG4gICAgZDogXCJNNDIuNjc4IDkuOTUzaDUwLjIzN2EyIDIgMCAwIDEgMiAyVjM2LjkxYTIgMiAwIDAgMS0yIDJINDIuNjc4YTIgMiAwIDAgMS0yLTJWMTEuOTUzYTIgMiAwIDAgMSAyLTJ6TTQyLjk0IDQ5Ljc2N2g0OS43MTNhMi4yNjIgMi4yNjIgMCAxIDEgMCA0LjUyNEg0Mi45NGEyLjI2MiAyLjI2MiAwIDAgMSAwLTQuNTI0ek00Mi45NCA2MS41M2g0OS43MTNhMi4yNjIgMi4yNjIgMCAxIDEgMCA0LjUyNUg0Mi45NGEyLjI2MiAyLjI2MiAwIDAgMSAwLTQuNTI1ek0xMjEuODEzIDEwNS4wMzJjLS43NzUgMy4wNzEtMy40OTcgNS4zNi02LjczNSA1LjM2SDIwLjUxNWMtMy4yMzggMC01Ljk2LTIuMjktNi43MzQtNS4zNmE3LjMwOSA3LjMwOSAwIDAgMS0uMjIyLTEuNzlWNjkuNjc1aDI2LjMxOGMyLjkwNyAwIDUuMjUgMi40NDggNS4yNSA1LjQydi4wNGMwIDIuOTcxIDIuMzcgNS4zNyA1LjI3NyA1LjM3aDM0Ljc4NWMyLjkwNyAwIDUuMjc3LTIuNDIxIDUuMjc3LTUuMzkzVjc1LjFjMC0yLjk3MiAyLjM0My01LjQyNiA1LjI1LTUuNDI2aDI2LjMxOHYzMy41NjljMCAuNjE3LS4wNzcgMS4yMTYtLjIyMSAxLjc4OXpcIlxuICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC01XCIpLFxuICAgIGQ6IFwiTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnpcIlxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMTQ5LjY1IDE1LjM4MylcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY3g6IFwiMjAuNjU0XCIsXG4gICAgY3k6IFwiMy4xNjdcIixcbiAgICByeDogXCIyLjg0OVwiLFxuICAgIHJ5OiBcIjIuODE1XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjY5OCA1LjYzSDBMMi44OTguNzA0ek05LjI1OS43MDRoNC45ODVWNS42M0g5LjI1OXpcIlxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtcHR5LmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX2VtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9lbXB0eVwiKSk7XG5cbnZhciBfc2ltcGxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaW1wbGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBkZWZhdWx0RW1wdHlJbWcgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIG51bGwpO1xudmFyIHNpbXBsZUVtcHR5SW1nID0gUmVhY3QuY3JlYXRlRWxlbWVudChfc2ltcGxlW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG5cbnZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgIGRpcmVjdGlvbiA9IF9yZWYuZGlyZWN0aW9uO1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBfcHJvcHMkaW1hZ2UgPSBwcm9wcy5pbWFnZSxcbiAgICAgICAgaW1hZ2UgPSBfcHJvcHMkaW1hZ2UgPT09IHZvaWQgMCA/IGRlZmF1bHRFbXB0eUltZyA6IF9wcm9wcyRpbWFnZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW1hZ2VTdHlsZSA9IHByb3BzLmltYWdlU3R5bGUsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwicHJlZml4Q2xzXCIsIFwiaW1hZ2VcIiwgXCJkZXNjcmlwdGlvblwiLCBcImNoaWxkcmVuXCIsIFwiaW1hZ2VTdHlsZVwiXSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBjb21wb25lbnROYW1lOiBcIkVtcHR5XCJcbiAgICB9LCBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBkZXMgPSB0eXBlb2YgZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnID8gZGVzY3JpcHRpb24gOiBsb2NhbGUuZGVzY3JpcHRpb247XG4gICAgICB2YXIgYWx0ID0gdHlwZW9mIGRlcyA9PT0gJ3N0cmluZycgPyBkZXMgOiAnZW1wdHknO1xuICAgICAgdmFyIGltYWdlTm9kZSA9IG51bGw7XG5cbiAgICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGltYWdlTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICAgIGFsdDogYWx0LFxuICAgICAgICAgIHNyYzogaW1hZ2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZU5vZGUgPSBpbWFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3JtYWxcIiksIGltYWdlID09PSBzaW1wbGVFbXB0eUltZyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSlcbiAgICAgIH0sIHJlc3RQcm9wcyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW1hZ2VcIiksXG4gICAgICAgIHN0eWxlOiBpbWFnZVN0eWxlXG4gICAgICB9LCBpbWFnZU5vZGUpLCBkZXMgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICAgIH0sIGRlcyksIGNoaWxkcmVuICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpXG4gICAgICB9LCBjaGlsZHJlbikpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9ERUZBVUxUID0gZGVmYXVsdEVtcHR5SW1nO1xuRW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSA9IHNpbXBsZUVtcHR5SW1nO1xudmFyIF9kZWZhdWx0ID0gRW1wdHk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG52YXIgU2ltcGxlID0gZnVuY3Rpb24gU2ltcGxlKCkge1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscztcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdlbXB0eS1pbWctc2ltcGxlJyk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBjbGFzc05hbWU6IHByZWZpeENscyxcbiAgICB3aWR0aDogXCI2NFwiLFxuICAgIGhlaWdodDogXCI0MVwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDY0IDQxXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwIDEpXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZWxsaXBzZVwiKSxcbiAgICBjeDogXCIzMlwiLFxuICAgIGN5OiBcIjMzXCIsXG4gICAgcng6IFwiMzJcIixcbiAgICByeTogXCI3XCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ1wiKSxcbiAgICBmaWxsUnVsZTogXCJub256ZXJvXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0elwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDEuNjEzIDE1LjkzMWMwLTEuNjA1Ljk5NC0yLjkzIDIuMjI3LTIuOTMxSDU1djE4LjEzN0M1NSAzMy4yNiA1My42OCAzNSA1Mi4wNSAzNWgtNDAuMUMxMC4zMiAzNSA5IDMzLjI1OSA5IDMxLjEzN1YxM2gxMS4xNmMxLjIzMyAwIDIuMjI3IDEuMzIzIDIuMjI3IDIuOTI4di4wMjJjMCAxLjYwNSAxLjAwNSAyLjkwMSAyLjIzNyAyLjkwMWgxNC43NTJjMS4yMzIgMCAyLjIzNy0xLjMwOCAyLjIzNy0yLjkxM3YtLjAwN3pcIixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aFwiKVxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IFNpbXBsZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZmF1bHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIExvY2FsZVJlY2VpdmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMb2NhbGVSZWNlaXZlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTG9jYWxlUmVjZWl2ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2FsZVJlY2VpdmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTG9jYWxlUmVjZWl2ZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsZVJlY2VpdmVyLCBbe1xuICAgIGtleTogXCJnZXRMb2NhbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb21wb25lbnROYW1lID0gX3RoaXMkcHJvcHMuY29tcG9uZW50TmFtZSxcbiAgICAgICAgICBkZWZhdWx0TG9jYWxlID0gX3RoaXMkcHJvcHMuZGVmYXVsdExvY2FsZTtcbiAgICAgIHZhciBsb2NhbGUgPSBkZWZhdWx0TG9jYWxlIHx8IF9kZWZhdWx0W1wiZGVmYXVsdFwiXVtjb21wb25lbnROYW1lIHx8ICdnbG9iYWwnXTtcbiAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQuYW50TG9jYWxlO1xuICAgICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gY29tcG9uZW50TmFtZSAmJiBhbnRMb2NhbGUgPyBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0gOiB7fTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlKSwgbG9jYWxlRnJvbUNvbnRleHQgfHwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb2NhbGVDb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZUNvZGUoKSB7XG4gICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0LmFudExvY2FsZTtcbiAgICAgIHZhciBsb2NhbGVDb2RlID0gYW50TG9jYWxlICYmIGFudExvY2FsZS5sb2NhbGU7IC8vIEhhZCB1c2UgTG9jYWxlUHJvdmlkZSBidXQgZGlkbid0IHNldCBsb2NhbGVcblxuICAgICAgaWYgKGFudExvY2FsZSAmJiBhbnRMb2NhbGUuZXhpc3QgJiYgIWxvY2FsZUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5sb2NhbGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhbGVDb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5nZXRMb2NhbGUoKSwgdGhpcy5nZXRMb2NhbGVDb2RlKCksIHRoaXMuY29udGV4dC5hbnRMb2NhbGUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbGVSZWNlaXZlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2NhbGVSZWNlaXZlcjtcbkxvY2FsZVJlY2VpdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50TmFtZTogJ2dsb2JhbCdcbn07XG5Mb2NhbGVSZWNlaXZlci5jb250ZXh0VHlwZXMgPSB7XG4gIGFudExvY2FsZTogUHJvcFR5cGVzLm9iamVjdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvY2FsZVJlY2VpdmVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZhdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9kZWZhdWx0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IF9kZWZhdWx0MltcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkFOVF9NQVJLID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoXCIuLi9tb2RhbC9sb2NhbGVcIik7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIEFOVF9NQVJLID0gJ2ludGVybmFsTWFyayc7XG5leHBvcnRzLkFOVF9NQVJLID0gQU5UX01BUks7XG5cbnZhciBMb2NhbGVQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTG9jYWxlUHJvdmlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExvY2FsZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2FsZVByb3ZpZGVyKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKExvY2FsZVByb3ZpZGVyKS5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkocHJvcHMubG9jYWxlICYmIHByb3BzLmxvY2FsZS5Nb2RhbCk7XG4gICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkocHJvcHMuX0FOVF9NQVJLX18gPT09IEFOVF9NQVJLLCAnTG9jYWxlUHJvdmlkZXInLCAnYExvY2FsZVByb3ZpZGVyYCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBsb2NhbGVgIHdpdGggYENvbmZpZ1Byb3ZpZGVyYCBpbnN0ZWFkOiBodHRwOi8vdS5hbnQuZGVzaWduL2xvY2FsZScpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2NhbGVQcm92aWRlciwgW3tcbiAgICBrZXk6IFwiZ2V0Q2hpbGRDb250ZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFudExvY2FsZTogX2V4dGVuZHMoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMubG9jYWxlKSwge1xuICAgICAgICAgIGV4aXN0OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIGxvY2FsZSA9IHRoaXMucHJvcHMubG9jYWxlO1xuXG4gICAgICBpZiAocHJldlByb3BzLmxvY2FsZSAhPT0gbG9jYWxlKSB7XG4gICAgICAgICgwLCBfbG9jYWxlLmNoYW5nZUNvbmZpcm1Mb2NhbGUpKGxvY2FsZSAmJiBsb2NhbGUuTW9kYWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICgwLCBfbG9jYWxlLmNoYW5nZUNvbmZpcm1Mb2NhbGUpKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9jYWxlUHJvdmlkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9jYWxlUHJvdmlkZXI7XG5Mb2NhbGVQcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvY2FsZToge31cbn07XG5Mb2NhbGVQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgYW50TG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2FsZW5kYXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgbG9jYWxlOiAnZW4nLFxuICBQYWdpbmF0aW9uOiBfZW5fVVNbXCJkZWZhdWx0XCJdLFxuICBEYXRlUGlja2VyOiBfZW5fVVMyW1wiZGVmYXVsdFwiXSxcbiAgVGltZVBpY2tlcjogX2VuX1VTM1tcImRlZmF1bHRcIl0sXG4gIENhbGVuZGFyOiBfZW5fVVM0W1wiZGVmYXVsdFwiXSxcbiAgZ2xvYmFsOiB7XG4gICAgcGxhY2Vob2xkZXI6ICdQbGVhc2Ugc2VsZWN0J1xuICB9LFxuICBUYWJsZToge1xuICAgIGZpbHRlclRpdGxlOiAnRmlsdGVyIG1lbnUnLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSZXNldCcsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0aW9uQWxsOiAnU2VsZWN0IGFsbCBkYXRhJyxcbiAgICBzb3J0VGl0bGU6ICdTb3J0JyxcbiAgICBleHBhbmQ6ICdFeHBhbmQgcm93JyxcbiAgICBjb2xsYXBzZTogJ0NvbGxhcHNlIHJvdydcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAganVzdE9rVGV4dDogJ09LJ1xuICB9LFxuICBQb3Bjb25maXJtOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgdGl0bGVzOiBbJycsICcnXSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJ1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdSZW1vdmUgZmlsZScsXG4gICAgdXBsb2FkRXJyb3I6ICdVcGxvYWQgZXJyb3InLFxuICAgIHByZXZpZXdGaWxlOiAnUHJldmlldyBmaWxlJyxcbiAgICBkb3dubG9hZEZpbGU6ICdEb3dubG9hZCBmaWxlJ1xuICB9LFxuICBFbXB0eToge1xuICAgIGRlc2NyaXB0aW9uOiAnTm8gRGF0YSdcbiAgfSxcbiAgSWNvbjoge1xuICAgIGljb246ICdpY29uJ1xuICB9LFxuICBUZXh0OiB7XG4gICAgZWRpdDogJ0VkaXQnLFxuICAgIGNvcHk6ICdDb3B5JyxcbiAgICBjb3BpZWQ6ICdDb3BpZWQnLFxuICAgIGV4cGFuZDogJ0V4cGFuZCdcbiAgfSxcbiAgUGFnZUhlYWRlcjoge1xuICAgIGJhY2s6ICdCYWNrJ1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hhbmdlQ29uZmlybUxvY2FsZSA9IGNoYW5nZUNvbmZpcm1Mb2NhbGU7XG5leHBvcnRzLmdldENvbmZpcm1Mb2NhbGUgPSBnZXRDb25maXJtTG9jYWxlO1xuXG52YXIgX2RlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUvZGVmYXVsdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgcnVudGltZUxvY2FsZSA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdFtcImRlZmF1bHRcIl0uTW9kYWwpO1xuXG5mdW5jdGlvbiBjaGFuZ2VDb25maXJtTG9jYWxlKG5ld0xvY2FsZSkge1xuICBpZiAobmV3TG9jYWxlKSB7XG4gICAgcnVudGltZUxvY2FsZSA9IF9leHRlbmRzKF9leHRlbmRzKHt9LCBydW50aW1lTG9jYWxlKSwgbmV3TG9jYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlybUxvY2FsZSgpIHtcbiAgcmV0dXJuIHJ1bnRpbWVMb2NhbGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgdGltZScsXG4gIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgdGltZScsICdFbmQgdGltZSddXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuX1VTLmpzLm1hcFxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuLyogZXNsaW50IG5vLWNvbnNvbGU6MCAqL1xudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG52YXIgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoKSB7fTsgLy8gZG9uJ3QgcHJpbnQgd2FybmluZyBtZXNzYWdlIHdoZW4gaW4gcHJvZHVjdGlvbiBlbnYgb3Igbm9kZSBydW50aW1lXG5cbmlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKHR5cGUsIGVycm9ycykge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBpZiAoZXJyb3JzLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZSA9PT0gJ3N0cmluZyc7XG4gICAgICB9KSkge1xuICAgICAgICBjb25zb2xlLndhcm4odHlwZSwgZXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGaWVsZHNFcnJvcihlcnJvcnMpIHtcbiAgaWYgKCFlcnJvcnMgfHwgIWVycm9ycy5sZW5ndGgpIHJldHVybiBudWxsO1xuICB2YXIgZmllbGRzID0ge307XG4gIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHZhciBmaWVsZCA9IGVycm9yLmZpZWxkO1xuICAgIGZpZWxkc1tmaWVsZF0gPSBmaWVsZHNbZmllbGRdIHx8IFtdO1xuICAgIGZpZWxkc1tmaWVsZF0ucHVzaChlcnJvcik7XG4gIH0pO1xuICByZXR1cm4gZmllbGRzO1xufVxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgZiA9IGFyZ3NbMF07XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcblxuICBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZi5hcHBseShudWxsLCBhcmdzLnNsaWNlKDEpKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZiA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKHggPT09ICclJScpIHtcbiAgICAgICAgcmV0dXJuICclJztcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPj0gbGVuKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHgpIHtcbiAgICAgICAgY2FzZSAnJXMnOlxuICAgICAgICAgIHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcblxuICAgICAgICBjYXNlICclZCc6XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuXG4gICAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgYXJnID0gYXJnc1tpXTsgaSA8IGxlbjsgYXJnID0gYXJnc1srK2ldKSB7XG4gICAgICBzdHIgKz0gXCIgXCIgKyBhcmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHJldHVybiBmO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZVN0cmluZ1R5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ3VybCcgfHwgdHlwZSA9PT0gJ2hleCcgfHwgdHlwZSA9PT0gJ2VtYWlsJyB8fCB0eXBlID09PSAncGF0dGVybic7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlWYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdhcnJheScgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzTmF0aXZlU3RyaW5nVHlwZSh0eXBlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhc3luY1BhcmFsbGVsQXJyYXkoYXJyLCBmdW5jLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuICB2YXIgdG90YWwgPSAwO1xuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBjb3VudChlcnJvcnMpIHtcbiAgICByZXN1bHRzLnB1c2guYXBwbHkocmVzdWx0cywgZXJyb3JzKTtcbiAgICB0b3RhbCsrO1xuXG4gICAgaWYgKHRvdGFsID09PSBhcnJMZW5ndGgpIHtcbiAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgIH1cbiAgfVxuXG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgZnVuYyhhLCBjb3VudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY1NlcmlhbEFycmF5KGFyciwgZnVuYywgY2FsbGJhY2spIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gbmV4dChlcnJvcnMpIHtcbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9yaWdpbmFsID0gaW5kZXg7XG4gICAgaW5kZXggPSBpbmRleCArIDE7XG5cbiAgICBpZiAob3JpZ2luYWwgPCBhcnJMZW5ndGgpIHtcbiAgICAgIGZ1bmMoYXJyW29yaWdpbmFsXSwgbmV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKFtdKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KFtdKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbk9iakFycihvYmpBcnIpIHtcbiAgdmFyIHJldCA9IFtdO1xuICBPYmplY3Qua2V5cyhvYmpBcnIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICByZXQucHVzaC5hcHBseShyZXQsIG9iakFycltrXSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhc3luY01hcChvYmpBcnIsIG9wdGlvbiwgZnVuYywgY2FsbGJhY2spIHtcbiAgaWYgKG9wdGlvbi5maXJzdCkge1xuICAgIHZhciBfcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChlcnJvcnMpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3JzKTtcbiAgICAgICAgcmV0dXJuIGVycm9ycy5sZW5ndGggPyByZWplY3Qoe1xuICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgIGZpZWxkczogY29udmVydEZpZWxkc0Vycm9yKGVycm9ycylcbiAgICAgICAgfSkgOiByZXNvbHZlKCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZmxhdHRlbkFyciA9IGZsYXR0ZW5PYmpBcnIob2JqQXJyKTtcbiAgICAgIGFzeW5jU2VyaWFsQXJyYXkoZmxhdHRlbkFyciwgZnVuYywgbmV4dCk7XG4gICAgfSk7XG5cbiAgICBfcGVuZGluZ1tcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfcGVuZGluZztcbiAgfVxuXG4gIHZhciBmaXJzdEZpZWxkcyA9IG9wdGlvbi5maXJzdEZpZWxkcyB8fCBbXTtcblxuICBpZiAoZmlyc3RGaWVsZHMgPT09IHRydWUpIHtcbiAgICBmaXJzdEZpZWxkcyA9IE9iamVjdC5rZXlzKG9iakFycik7XG4gIH1cblxuICB2YXIgb2JqQXJyS2V5cyA9IE9iamVjdC5rZXlzKG9iakFycik7XG4gIHZhciBvYmpBcnJMZW5ndGggPSBvYmpBcnJLZXlzLmxlbmd0aDtcbiAgdmFyIHRvdGFsID0gMDtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgdmFyIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KGVycm9ycykge1xuICAgICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIGVycm9ycyk7XG4gICAgICB0b3RhbCsrO1xuXG4gICAgICBpZiAodG90YWwgPT09IG9iakFyckxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhyZXN1bHRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID8gcmVqZWN0KHtcbiAgICAgICAgICBlcnJvcnM6IHJlc3VsdHMsXG4gICAgICAgICAgZmllbGRzOiBjb252ZXJ0RmllbGRzRXJyb3IocmVzdWx0cylcbiAgICAgICAgfSkgOiByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9iakFycktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgYXJyID0gb2JqQXJyW2tleV07XG5cbiAgICAgIGlmIChmaXJzdEZpZWxkcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgIGFzeW5jU2VyaWFsQXJyYXkoYXJyLCBmdW5jLCBuZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzeW5jUGFyYWxsZWxBcnJheShhcnIsIGZ1bmMsIG5leHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcGVuZGluZ1tcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xuICByZXR1cm4gcGVuZGluZztcbn1cbmZ1bmN0aW9uIGNvbXBsZW1lbnRFcnJvcihydWxlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAob2UpIHtcbiAgICBpZiAob2UgJiYgb2UubWVzc2FnZSkge1xuICAgICAgb2UuZmllbGQgPSBvZS5maWVsZCB8fCBydWxlLmZ1bGxGaWVsZDtcbiAgICAgIHJldHVybiBvZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdHlwZW9mIG9lID09PSAnZnVuY3Rpb24nID8gb2UoKSA6IG9lLFxuICAgICAgZmllbGQ6IG9lLmZpZWxkIHx8IHJ1bGUuZnVsbEZpZWxkXG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICBpZiAoc291cmNlKSB7XG4gICAgZm9yICh2YXIgcyBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW3NdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXRbc10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGFyZ2V0W3NdID0gX2V4dGVuZHMoe30sIHRhcmdldFtzXSwge30sIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRbc10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogIFJ1bGUgZm9yIHZhbGlkYXRpbmcgcmVxdWlyZWQgZmllbGRzLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBlcnJvcnMgQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgdGhpcyBydWxlIG1heSBhZGRcbiAqICB2YWxpZGF0aW9uIGVycm9ycyB0by5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIHJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgdHlwZSkge1xuICBpZiAocnVsZS5yZXF1aXJlZCAmJiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKSB8fCBpc0VtcHR5VmFsdWUodmFsdWUsIHR5cGUgfHwgcnVsZS50eXBlKSkpIHtcbiAgICBlcnJvcnMucHVzaChmb3JtYXQob3B0aW9ucy5tZXNzYWdlcy5yZXF1aXJlZCwgcnVsZS5mdWxsRmllbGQpKTtcbiAgfVxufVxuXG4vKipcbiAqICBSdWxlIGZvciB2YWxpZGF0aW5nIHdoaXRlc3BhY2UuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIGVycm9ycyBBbiBhcnJheSBvZiBlcnJvcnMgdGhhdCB0aGlzIHJ1bGUgbWF5IGFkZFxuICogIHZhbGlkYXRpb24gZXJyb3JzIHRvLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cblxuZnVuY3Rpb24gd2hpdGVzcGFjZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpIHtcbiAgaWYgKC9eXFxzKyQvLnRlc3QodmFsdWUpIHx8IHZhbHVlID09PSAnJykge1xuICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzLndoaXRlc3BhY2UsIHJ1bGUuZnVsbEZpZWxkKSk7XG4gIH1cbn1cblxuLyogZXNsaW50IG1heC1sZW46MCAqL1xuXG52YXIgcGF0dGVybiA9IHtcbiAgLy8gaHR0cDovL2VtYWlscmVnZXguY29tL1xuICBlbWFpbDogL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8sXG4gIHVybDogbmV3IFJlZ0V4cChcIl4oPyFtYWlsdG86KSg/Oig/Omh0dHB8aHR0cHN8ZnRwKTovL3wvLykoPzpcXFxcUysoPzo6XFxcXFMqKT9AKT8oPzooPzooPzpbMS05XVxcXFxkP3wxXFxcXGRcXFxcZHwyWzAxXVxcXFxkfDIyWzAtM10pKD86XFxcXC4oPzoxP1xcXFxkezEsMn18MlswLTRdXFxcXGR8MjVbMC01XSkpezJ9KD86XFxcXC4oPzpbMC05XVxcXFxkP3wxXFxcXGRcXFxcZHwyWzAtNF1cXFxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKy0qKSpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rKSg/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKy0qKSpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rKSooPzpcXFxcLig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmXXsyLH0pKSl8bG9jYWxob3N0KSg/OjpcXFxcZHsyLDV9KT8oPzooL3xcXFxcP3wjKVteXFxcXHNdKik/JFwiLCAnaScpLFxuICBoZXg6IC9eIz8oW2EtZjAtOV17Nn18W2EtZjAtOV17M30pJC9pXG59O1xudmFyIHR5cGVzID0ge1xuICBpbnRlZ2VyOiBmdW5jdGlvbiBpbnRlZ2VyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVzLm51bWJlcih2YWx1ZSkgJiYgcGFyc2VJbnQodmFsdWUsIDEwKSA9PT0gdmFsdWU7XG4gIH0sXG4gIFwiZmxvYXRcIjogZnVuY3Rpb24gZmxvYXQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZXMubnVtYmVyKHZhbHVlKSAmJiAhdHlwZXMuaW50ZWdlcih2YWx1ZSk7XG4gIH0sXG4gIGFycmF5OiBmdW5jdGlvbiBhcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfSxcbiAgcmVnZXhwOiBmdW5jdGlvbiByZWdleHAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gISFuZXcgUmVnRXhwKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuICBkYXRlOiBmdW5jdGlvbiBkYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZS5nZXRUaW1lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5nZXRNb250aCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuZ2V0WWVhciA9PT0gJ2Z1bmN0aW9uJztcbiAgfSxcbiAgbnVtYmVyOiBmdW5jdGlvbiBudW1iZXIodmFsdWUpIHtcbiAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH0sXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIXR5cGVzLmFycmF5KHZhbHVlKTtcbiAgfSxcbiAgbWV0aG9kOiBmdW5jdGlvbiBtZXRob2QodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9LFxuICBlbWFpbDogZnVuY3Rpb24gZW1haWwodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhIXZhbHVlLm1hdGNoKHBhdHRlcm4uZW1haWwpICYmIHZhbHVlLmxlbmd0aCA8IDI1NTtcbiAgfSxcbiAgdXJsOiBmdW5jdGlvbiB1cmwodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhIXZhbHVlLm1hdGNoKHBhdHRlcm4udXJsKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhIXZhbHVlLm1hdGNoKHBhdHRlcm4uaGV4KTtcbiAgfVxufTtcbi8qKlxuICogIFJ1bGUgZm9yIHZhbGlkYXRpbmcgdGhlIHR5cGUgb2YgYSB2YWx1ZS5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gZXJyb3JzIEFuIGFycmF5IG9mIGVycm9ycyB0aGF0IHRoaXMgcnVsZSBtYXkgYWRkXG4gKiAgdmFsaWRhdGlvbiBlcnJvcnMgdG8uXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuXG5mdW5jdGlvbiB0eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucykge1xuICBpZiAocnVsZS5yZXF1aXJlZCAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY3VzdG9tID0gWydpbnRlZ2VyJywgJ2Zsb2F0JywgJ2FycmF5JywgJ3JlZ2V4cCcsICdvYmplY3QnLCAnbWV0aG9kJywgJ2VtYWlsJywgJ251bWJlcicsICdkYXRlJywgJ3VybCcsICdoZXgnXTtcbiAgdmFyIHJ1bGVUeXBlID0gcnVsZS50eXBlO1xuXG4gIGlmIChjdXN0b20uaW5kZXhPZihydWxlVHlwZSkgPiAtMSkge1xuICAgIGlmICghdHlwZXNbcnVsZVR5cGVdKHZhbHVlKSkge1xuICAgICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMudHlwZXNbcnVsZVR5cGVdLCBydWxlLmZ1bGxGaWVsZCwgcnVsZS50eXBlKSk7XG4gICAgfSAvLyBzdHJhaWdodCB0eXBlb2YgY2hlY2tcblxuICB9IGVsc2UgaWYgKHJ1bGVUeXBlICYmIHR5cGVvZiB2YWx1ZSAhPT0gcnVsZS50eXBlKSB7XG4gICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMudHlwZXNbcnVsZVR5cGVdLCBydWxlLmZ1bGxGaWVsZCwgcnVsZS50eXBlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiAgUnVsZSBmb3IgdmFsaWRhdGluZyBtaW5pbXVtIGFuZCBtYXhpbXVtIGFsbG93ZWQgdmFsdWVzLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBlcnJvcnMgQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgdGhpcyBydWxlIG1heSBhZGRcbiAqICB2YWxpZGF0aW9uIGVycm9ycyB0by5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIHJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucykge1xuICB2YXIgbGVuID0gdHlwZW9mIHJ1bGUubGVuID09PSAnbnVtYmVyJztcbiAgdmFyIG1pbiA9IHR5cGVvZiBydWxlLm1pbiA9PT0gJ251bWJlcic7XG4gIHZhciBtYXggPSB0eXBlb2YgcnVsZS5tYXggPT09ICdudW1iZXInOyAvLyDmraPliJnljLnphY3noIHngrnojIPlm7Tku45VKzAxMDAwMOS4gOebtOWIsFUrMTBGRkZG55qE5paH5a2X77yI6KGl5YWF5bmz6Z2iU3VwcGxlbWVudGFyeSBQbGFuZe+8iVxuXG4gIHZhciBzcFJlZ2V4cCA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2c7XG4gIHZhciB2YWwgPSB2YWx1ZTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciBudW0gPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB2YXIgc3RyID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgdmFyIGFyciA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuXG4gIGlmIChudW0pIHtcbiAgICBrZXkgPSAnbnVtYmVyJztcbiAgfSBlbHNlIGlmIChzdHIpIHtcbiAgICBrZXkgPSAnc3RyaW5nJztcbiAgfSBlbHNlIGlmIChhcnIpIHtcbiAgICBrZXkgPSAnYXJyYXknO1xuICB9IC8vIGlmIHRoZSB2YWx1ZSBpcyBub3Qgb2YgYSBzdXBwb3J0ZWQgdHlwZSBmb3IgcmFuZ2UgdmFsaWRhdGlvblxuICAvLyB0aGUgdmFsaWRhdGlvbiBydWxlIHJ1bGUgc2hvdWxkIHVzZSB0aGVcbiAgLy8gdHlwZSBwcm9wZXJ0eSB0byBhbHNvIHRlc3QgZm9yIGEgcGFydGljdWxhciB0eXBlXG5cblxuICBpZiAoIWtleSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhcnIpIHtcbiAgICB2YWwgPSB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICBpZiAoc3RyKSB7XG4gICAgLy8g5aSE55CG56CB54K55aSn5LqOVSswMTAwMDDnmoTmloflrZdsZW5ndGjlsZ7mgKfkuI3lh4bnoa7nmoRidWfvvIzlpoJcIvCgrrfwoK638KCut1wiLmxlbmdodCAhPT0gM1xuICAgIHZhbCA9IHZhbHVlLnJlcGxhY2Uoc3BSZWdleHAsICdfJykubGVuZ3RoO1xuICB9XG5cbiAgaWYgKGxlbikge1xuICAgIGlmICh2YWwgIT09IHJ1bGUubGVuKSB7XG4gICAgICBlcnJvcnMucHVzaChmb3JtYXQob3B0aW9ucy5tZXNzYWdlc1trZXldLmxlbiwgcnVsZS5mdWxsRmllbGQsIHJ1bGUubGVuKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1pbiAmJiAhbWF4ICYmIHZhbCA8IHJ1bGUubWluKSB7XG4gICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXNba2V5XS5taW4sIHJ1bGUuZnVsbEZpZWxkLCBydWxlLm1pbikpO1xuICB9IGVsc2UgaWYgKG1heCAmJiAhbWluICYmIHZhbCA+IHJ1bGUubWF4KSB7XG4gICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXNba2V5XS5tYXgsIHJ1bGUuZnVsbEZpZWxkLCBydWxlLm1heCkpO1xuICB9IGVsc2UgaWYgKG1pbiAmJiBtYXggJiYgKHZhbCA8IHJ1bGUubWluIHx8IHZhbCA+IHJ1bGUubWF4KSkge1xuICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW2tleV0ucmFuZ2UsIHJ1bGUuZnVsbEZpZWxkLCBydWxlLm1pbiwgcnVsZS5tYXgpKTtcbiAgfVxufVxuXG52YXIgRU5VTSA9ICdlbnVtJztcbi8qKlxuICogIFJ1bGUgZm9yIHZhbGlkYXRpbmcgYSB2YWx1ZSBleGlzdHMgaW4gYW4gZW51bWVyYWJsZSBsaXN0LlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBlcnJvcnMgQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgdGhpcyBydWxlIG1heSBhZGRcbiAqICB2YWxpZGF0aW9uIGVycm9ycyB0by5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIGVudW1lcmFibGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKSB7XG4gIHJ1bGVbRU5VTV0gPSBBcnJheS5pc0FycmF5KHJ1bGVbRU5VTV0pID8gcnVsZVtFTlVNXSA6IFtdO1xuXG4gIGlmIChydWxlW0VOVU1dLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW0VOVU1dLCBydWxlLmZ1bGxGaWVsZCwgcnVsZVtFTlVNXS5qb2luKCcsICcpKSk7XG4gIH1cbn1cblxuLyoqXG4gKiAgUnVsZSBmb3IgdmFsaWRhdGluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBlcnJvcnMgQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgdGhpcyBydWxlIG1heSBhZGRcbiAqICB2YWxpZGF0aW9uIGVycm9ycyB0by5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIHBhdHRlcm4kMShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpIHtcbiAgaWYgKHJ1bGUucGF0dGVybikge1xuICAgIGlmIChydWxlLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIGlmIGEgUmVnRXhwIGluc3RhbmNlIGlzIHBhc3NlZCwgcmVzZXQgYGxhc3RJbmRleGAgaW4gY2FzZSBpdHMgYGdsb2JhbGBcbiAgICAgIC8vIGZsYWcgaXMgYWNjaWRlbnRhbGx5IHNldCB0byBgdHJ1ZWAsIHdoaWNoIGluIGEgdmFsaWRhdGlvbiBzY2VuYXJpb1xuICAgICAgLy8gaXMgbm90IG5lY2Vzc2FyeSBhbmQgdGhlIHJlc3VsdCBtaWdodCBiZSBtaXNsZWFkaW5nXG4gICAgICBydWxlLnBhdHRlcm4ubGFzdEluZGV4ID0gMDtcblxuICAgICAgaWYgKCFydWxlLnBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMucGF0dGVybi5taXNtYXRjaCwgcnVsZS5mdWxsRmllbGQsIHZhbHVlLCBydWxlLnBhdHRlcm4pKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBydWxlLnBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgX3BhdHRlcm4gPSBuZXcgUmVnRXhwKHJ1bGUucGF0dGVybik7XG5cbiAgICAgIGlmICghX3BhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMucGF0dGVybi5taXNtYXRjaCwgcnVsZS5mdWxsRmllbGQsIHZhbHVlLCBydWxlLnBhdHRlcm4pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIHJ1bGVzID0ge1xuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHdoaXRlc3BhY2U6IHdoaXRlc3BhY2UsXG4gIHR5cGU6IHR5cGUsXG4gIHJhbmdlOiByYW5nZSxcbiAgXCJlbnVtXCI6IGVudW1lcmFibGUsXG4gIHBhdHRlcm46IHBhdHRlcm4kMVxufTtcblxuLyoqXG4gKiAgUGVyZm9ybXMgdmFsaWRhdGlvbiBmb3Igc3RyaW5nIHR5cGVzLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmcocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlLCAnc3RyaW5nJykgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgJ3N0cmluZycpO1xuXG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUsICdzdHJpbmcnKSkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgcnVsZXMucmFuZ2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnBhdHRlcm4ocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcblxuICAgICAgaWYgKHJ1bGUud2hpdGVzcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBydWxlcy53aGl0ZXNwYWNlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgZnVuY3Rpb24uXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIG1ldGhvZChydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG4vKipcbiAqICBWYWxpZGF0ZXMgYSBudW1iZXIuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIG51bWJlcihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgYm9vbGVhbi5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cblxuZnVuY3Rpb24gX2Jvb2xlYW4ocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuLyoqXG4gKiAgVmFsaWRhdGVzIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gdHlwZS5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cblxuZnVuY3Rpb24gcmVnZXhwKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG5cbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG5cbiAgICBpZiAoIWlzRW1wdHlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG4vKipcbiAqICBWYWxpZGF0ZXMgYSBudW1iZXIgaXMgYW4gaW50ZWdlci5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cblxuZnVuY3Rpb24gaW50ZWdlcihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgbnVtYmVyIGlzIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuXG5mdW5jdGlvbiBmbG9hdEZuKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG5cbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG5cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgcnVsZXMucmFuZ2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG4vKipcbiAqICBWYWxpZGF0ZXMgYW4gYXJyYXkuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIGFycmF5KHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG5cbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSwgJ2FycmF5JykgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgJ2FycmF5Jyk7XG5cbiAgICBpZiAoIWlzRW1wdHlWYWx1ZSh2YWx1ZSwgJ2FycmF5JykpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuLyoqXG4gKiAgVmFsaWRhdGVzIGFuIG9iamVjdC5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cblxuZnVuY3Rpb24gb2JqZWN0KHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG5cbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG5cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbnZhciBFTlVNJDEgPSAnZW51bSc7XG4vKipcbiAqICBWYWxpZGF0ZXMgYW4gZW51bWVyYWJsZSBsaXN0LlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuXG5mdW5jdGlvbiBlbnVtZXJhYmxlJDEocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlc1tFTlVNJDFdKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4uXG4gKlxuICogIFBlcmZvcm1zIHZhbGlkYXRpb24gd2hlbiBhIHJ1bGUgb25seSBjb250YWluc1xuICogIGEgcGF0dGVybiBwcm9wZXJ0eSBidXQgaXMgbm90IGRlY2xhcmVkIGFzIGEgc3RyaW5nIHR5cGUuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIHBhdHRlcm4kMihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUsICdzdHJpbmcnKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcblxuICAgIGlmICghaXNFbXB0eVZhbHVlKHZhbHVlLCAnc3RyaW5nJykpIHtcbiAgICAgIHJ1bGVzLnBhdHRlcm4ocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5mdW5jdGlvbiBkYXRlKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIC8vIGNvbnNvbGUubG9nKCdpbnRlZ2VyIHJ1bGUgY2FsbGVkICVqJywgcnVsZSk7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7IC8vIGNvbnNvbGUubG9nKCd2YWxpZGF0ZSBvbiAlcyB2YWx1ZScsIHZhbHVlKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcblxuICAgIGlmICghaXNFbXB0eVZhbHVlKHZhbHVlKSkge1xuICAgICAgdmFyIGRhdGVPYmplY3Q7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRhdGVPYmplY3QgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlT2JqZWN0ID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgZGF0ZU9iamVjdCwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoZGF0ZU9iamVjdCkge1xuICAgICAgICBydWxlcy5yYW5nZShydWxlLCBkYXRlT2JqZWN0LmdldFRpbWUoKSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkJDEocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdHlwZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gJ2FycmF5JyA6IHR5cGVvZiB2YWx1ZTtcbiAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zLCB0eXBlKTtcbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZnVuY3Rpb24gdHlwZSQxKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBydWxlVHlwZSA9IHJ1bGUudHlwZTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlLCBydWxlVHlwZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgcnVsZVR5cGUpO1xuXG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUsIHJ1bGVUeXBlKSkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbi8qKlxuICogIFBlcmZvcm1zIHZhbGlkYXRpb24gZm9yIGFueSB0eXBlLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuXG5mdW5jdGlvbiBhbnkocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbnZhciB2YWxpZGF0b3JzID0ge1xuICBzdHJpbmc6IHN0cmluZyxcbiAgbWV0aG9kOiBtZXRob2QsXG4gIG51bWJlcjogbnVtYmVyLFxuICBcImJvb2xlYW5cIjogX2Jvb2xlYW4sXG4gIHJlZ2V4cDogcmVnZXhwLFxuICBpbnRlZ2VyOiBpbnRlZ2VyLFxuICBcImZsb2F0XCI6IGZsb2F0Rm4sXG4gIGFycmF5OiBhcnJheSxcbiAgb2JqZWN0OiBvYmplY3QsXG4gIFwiZW51bVwiOiBlbnVtZXJhYmxlJDEsXG4gIHBhdHRlcm46IHBhdHRlcm4kMixcbiAgZGF0ZTogZGF0ZSxcbiAgdXJsOiB0eXBlJDEsXG4gIGhleDogdHlwZSQxLFxuICBlbWFpbDogdHlwZSQxLFxuICByZXF1aXJlZDogcmVxdWlyZWQkMSxcbiAgYW55OiBhbnlcbn07XG5cbmZ1bmN0aW9uIG5ld01lc3NhZ2VzKCkge1xuICByZXR1cm4ge1xuICAgIFwiZGVmYXVsdFwiOiAnVmFsaWRhdGlvbiBlcnJvciBvbiBmaWVsZCAlcycsXG4gICAgcmVxdWlyZWQ6ICclcyBpcyByZXF1aXJlZCcsXG4gICAgXCJlbnVtXCI6ICclcyBtdXN0IGJlIG9uZSBvZiAlcycsXG4gICAgd2hpdGVzcGFjZTogJyVzIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgZGF0ZToge1xuICAgICAgZm9ybWF0OiAnJXMgZGF0ZSAlcyBpcyBpbnZhbGlkIGZvciBmb3JtYXQgJXMnLFxuICAgICAgcGFyc2U6ICclcyBkYXRlIGNvdWxkIG5vdCBiZSBwYXJzZWQsICVzIGlzIGludmFsaWQgJyxcbiAgICAgIGludmFsaWQ6ICclcyBkYXRlICVzIGlzIGludmFsaWQnXG4gICAgfSxcbiAgICB0eXBlczoge1xuICAgICAgc3RyaW5nOiAnJXMgaXMgbm90IGEgJXMnLFxuICAgICAgbWV0aG9kOiAnJXMgaXMgbm90IGEgJXMgKGZ1bmN0aW9uKScsXG4gICAgICBhcnJheTogJyVzIGlzIG5vdCBhbiAlcycsXG4gICAgICBvYmplY3Q6ICclcyBpcyBub3QgYW4gJXMnLFxuICAgICAgbnVtYmVyOiAnJXMgaXMgbm90IGEgJXMnLFxuICAgICAgZGF0ZTogJyVzIGlzIG5vdCBhICVzJyxcbiAgICAgIFwiYm9vbGVhblwiOiAnJXMgaXMgbm90IGEgJXMnLFxuICAgICAgaW50ZWdlcjogJyVzIGlzIG5vdCBhbiAlcycsXG4gICAgICBcImZsb2F0XCI6ICclcyBpcyBub3QgYSAlcycsXG4gICAgICByZWdleHA6ICclcyBpcyBub3QgYSB2YWxpZCAlcycsXG4gICAgICBlbWFpbDogJyVzIGlzIG5vdCBhIHZhbGlkICVzJyxcbiAgICAgIHVybDogJyVzIGlzIG5vdCBhIHZhbGlkICVzJyxcbiAgICAgIGhleDogJyVzIGlzIG5vdCBhIHZhbGlkICVzJ1xuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBsZW46ICclcyBtdXN0IGJlIGV4YWN0bHkgJXMgY2hhcmFjdGVycycsXG4gICAgICBtaW46ICclcyBtdXN0IGJlIGF0IGxlYXN0ICVzIGNoYXJhY3RlcnMnLFxuICAgICAgbWF4OiAnJXMgY2Fubm90IGJlIGxvbmdlciB0aGFuICVzIGNoYXJhY3RlcnMnLFxuICAgICAgcmFuZ2U6ICclcyBtdXN0IGJlIGJldHdlZW4gJXMgYW5kICVzIGNoYXJhY3RlcnMnXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIGxlbjogJyVzIG11c3QgZXF1YWwgJXMnLFxuICAgICAgbWluOiAnJXMgY2Fubm90IGJlIGxlc3MgdGhhbiAlcycsXG4gICAgICBtYXg6ICclcyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuICVzJyxcbiAgICAgIHJhbmdlOiAnJXMgbXVzdCBiZSBiZXR3ZWVuICVzIGFuZCAlcydcbiAgICB9LFxuICAgIGFycmF5OiB7XG4gICAgICBsZW46ICclcyBtdXN0IGJlIGV4YWN0bHkgJXMgaW4gbGVuZ3RoJyxcbiAgICAgIG1pbjogJyVzIGNhbm5vdCBiZSBsZXNzIHRoYW4gJXMgaW4gbGVuZ3RoJyxcbiAgICAgIG1heDogJyVzIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gJXMgaW4gbGVuZ3RoJyxcbiAgICAgIHJhbmdlOiAnJXMgbXVzdCBiZSBiZXR3ZWVuICVzIGFuZCAlcyBpbiBsZW5ndGgnXG4gICAgfSxcbiAgICBwYXR0ZXJuOiB7XG4gICAgICBtaXNtYXRjaDogJyVzIHZhbHVlICVzIGRvZXMgbm90IG1hdGNoIHBhdHRlcm4gJXMnXG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICB2YXIgY2xvbmVkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICBjbG9uZWQuY2xvbmUgPSB0aGlzLmNsb25lO1xuICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9XG4gIH07XG59XG52YXIgbWVzc2FnZXMgPSBuZXdNZXNzYWdlcygpO1xuXG4vKipcbiAqICBFbmNhcHN1bGF0ZXMgYSB2YWxpZGF0aW9uIHNjaGVtYS5cbiAqXG4gKiAgQHBhcmFtIGRlc2NyaXB0b3IgQW4gb2JqZWN0IGRlY2xhcmluZyB2YWxpZGF0aW9uIHJ1bGVzXG4gKiAgZm9yIHRoaXMgc2NoZW1hLlxuICovXG5cbmZ1bmN0aW9uIFNjaGVtYShkZXNjcmlwdG9yKSB7XG4gIHRoaXMucnVsZXMgPSBudWxsO1xuICB0aGlzLl9tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICB0aGlzLmRlZmluZShkZXNjcmlwdG9yKTtcbn1cblxuU2NoZW1hLnByb3RvdHlwZSA9IHtcbiAgbWVzc2FnZXM6IGZ1bmN0aW9uIG1lc3NhZ2VzKF9tZXNzYWdlcykge1xuICAgIGlmIChfbWVzc2FnZXMpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VzID0gZGVlcE1lcmdlKG5ld01lc3NhZ2VzKCksIF9tZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VzO1xuICB9LFxuICBkZWZpbmU6IGZ1bmN0aW9uIGRlZmluZShydWxlcykge1xuICAgIGlmICghcnVsZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbmZpZ3VyZSBhIHNjaGVtYSB3aXRoIG5vIHJ1bGVzJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBydWxlcyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShydWxlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUnVsZXMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzID0ge307XG4gICAgdmFyIHo7XG4gICAgdmFyIGl0ZW07XG5cbiAgICBmb3IgKHogaW4gcnVsZXMpIHtcbiAgICAgIGlmIChydWxlcy5oYXNPd25Qcm9wZXJ0eSh6KSkge1xuICAgICAgICBpdGVtID0gcnVsZXNbel07XG4gICAgICAgIHRoaXMucnVsZXNbel0gPSBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbSA6IFtpdGVtXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHZhbGlkYXRlOiBmdW5jdGlvbiB2YWxpZGF0ZShzb3VyY2VfLCBvLCBvYykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAobyA9PT0gdm9pZCAwKSB7XG4gICAgICBvID0ge307XG4gICAgfVxuXG4gICAgaWYgKG9jID09PSB2b2lkIDApIHtcbiAgICAgIG9jID0gZnVuY3Rpb24gb2MoKSB7fTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlID0gc291cmNlXztcbiAgICB2YXIgb3B0aW9ucyA9IG87XG4gICAgdmFyIGNhbGxiYWNrID0gb2M7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucnVsZXMgfHwgT2JqZWN0LmtleXModGhpcy5ydWxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKHJlc3VsdHMpIHtcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgdmFyIGZpZWxkcyA9IHt9O1xuXG4gICAgICBmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgICAgIHZhciBfZXJyb3JzO1xuXG4gICAgICAgICAgZXJyb3JzID0gKF9lcnJvcnMgPSBlcnJvcnMpLmNvbmNhdC5hcHBseShfZXJyb3JzLCBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhZGQocmVzdWx0c1tpXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBlcnJvcnMgPSBudWxsO1xuICAgICAgICBmaWVsZHMgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRzID0gY29udmVydEZpZWxkc0Vycm9yKGVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9ycywgZmllbGRzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tZXNzYWdlcykge1xuICAgICAgdmFyIG1lc3NhZ2VzJDEgPSB0aGlzLm1lc3NhZ2VzKCk7XG5cbiAgICAgIGlmIChtZXNzYWdlcyQxID09PSBtZXNzYWdlcykge1xuICAgICAgICBtZXNzYWdlcyQxID0gbmV3TWVzc2FnZXMoKTtcbiAgICAgIH1cblxuICAgICAgZGVlcE1lcmdlKG1lc3NhZ2VzJDEsIG9wdGlvbnMubWVzc2FnZXMpO1xuICAgICAgb3B0aW9ucy5tZXNzYWdlcyA9IG1lc3NhZ2VzJDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzKCk7XG4gICAgfVxuXG4gICAgdmFyIGFycjtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIHNlcmllcyA9IHt9O1xuICAgIHZhciBrZXlzID0gb3B0aW9ucy5rZXlzIHx8IE9iamVjdC5rZXlzKHRoaXMucnVsZXMpO1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoeikge1xuICAgICAgYXJyID0gX3RoaXMucnVsZXNbel07XG4gICAgICB2YWx1ZSA9IHNvdXJjZVt6XTtcbiAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHZhciBydWxlID0gcjtcblxuICAgICAgICBpZiAodHlwZW9mIHJ1bGUudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHNvdXJjZSA9PT0gc291cmNlXykge1xuICAgICAgICAgICAgc291cmNlID0gX2V4dGVuZHMoe30sIHNvdXJjZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFsdWUgPSBzb3VyY2Vbel0gPSBydWxlLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBydWxlID0ge1xuICAgICAgICAgICAgdmFsaWRhdG9yOiBydWxlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydWxlID0gX2V4dGVuZHMoe30sIHJ1bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcnVsZS52YWxpZGF0b3IgPSBfdGhpcy5nZXRWYWxpZGF0aW9uTWV0aG9kKHJ1bGUpO1xuICAgICAgICBydWxlLmZpZWxkID0gejtcbiAgICAgICAgcnVsZS5mdWxsRmllbGQgPSBydWxlLmZ1bGxGaWVsZCB8fCB6O1xuICAgICAgICBydWxlLnR5cGUgPSBfdGhpcy5nZXRUeXBlKHJ1bGUpO1xuXG4gICAgICAgIGlmICghcnVsZS52YWxpZGF0b3IpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXJpZXNbel0gPSBzZXJpZXNbel0gfHwgW107XG4gICAgICAgIHNlcmllc1t6XS5wdXNoKHtcbiAgICAgICAgICBydWxlOiBydWxlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBmaWVsZDogelxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBlcnJvckZpZWxkcyA9IHt9O1xuICAgIHJldHVybiBhc3luY01hcChzZXJpZXMsIG9wdGlvbnMsIGZ1bmN0aW9uIChkYXRhLCBkb0l0KSB7XG4gICAgICB2YXIgcnVsZSA9IGRhdGEucnVsZTtcbiAgICAgIHZhciBkZWVwID0gKHJ1bGUudHlwZSA9PT0gJ29iamVjdCcgfHwgcnVsZS50eXBlID09PSAnYXJyYXknKSAmJiAodHlwZW9mIHJ1bGUuZmllbGRzID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcnVsZS5kZWZhdWx0RmllbGQgPT09ICdvYmplY3QnKTtcbiAgICAgIGRlZXAgPSBkZWVwICYmIChydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIGRhdGEudmFsdWUpO1xuICAgICAgcnVsZS5maWVsZCA9IGRhdGEuZmllbGQ7XG5cbiAgICAgIGZ1bmN0aW9uIGFkZEZ1bGxmaWVsZChrZXksIHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNjaGVtYSwge1xuICAgICAgICAgIGZ1bGxGaWVsZDogcnVsZS5mdWxsRmllbGQgKyBcIi5cIiArIGtleVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2IoZSkge1xuICAgICAgICBpZiAoZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVycm9ycyA9IGU7XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVycm9ycykpIHtcbiAgICAgICAgICBlcnJvcnMgPSBbZXJyb3JzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy5zdXBwcmVzc1dhcm5pbmcgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIFNjaGVtYS53YXJuaW5nKCdhc3luYy12YWxpZGF0b3I6JywgZXJyb3JzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoICYmIHJ1bGUubWVzc2FnZSkge1xuICAgICAgICAgIGVycm9ycyA9IFtdLmNvbmNhdChydWxlLm1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLm1hcChjb21wbGVtZW50RXJyb3IocnVsZSkpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmZpcnN0ICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBlcnJvckZpZWxkc1tydWxlLmZpZWxkXSA9IDE7XG4gICAgICAgICAgcmV0dXJuIGRvSXQoZXJyb3JzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVlcCkge1xuICAgICAgICAgIGRvSXQoZXJyb3JzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBydWxlIGlzIHJlcXVpcmVkIGJ1dCB0aGUgdGFyZ2V0IG9iamVjdFxuICAgICAgICAgIC8vIGRvZXMgbm90IGV4aXN0IGZhaWwgYXQgdGhlIHJ1bGUgbGV2ZWwgYW5kIGRvbid0XG4gICAgICAgICAgLy8gZ28gZGVlcGVyXG4gICAgICAgICAgaWYgKHJ1bGUucmVxdWlyZWQgJiYgIWRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChydWxlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgZXJyb3JzID0gW10uY29uY2F0KHJ1bGUubWVzc2FnZSkubWFwKGNvbXBsZW1lbnRFcnJvcihydWxlKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3JzID0gW29wdGlvbnMuZXJyb3IocnVsZSwgZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMucmVxdWlyZWQsIHJ1bGUuZmllbGQpKV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRvSXQoZXJyb3JzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZmllbGRzU2NoZW1hID0ge307XG5cbiAgICAgICAgICBpZiAocnVsZS5kZWZhdWx0RmllbGQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS52YWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGZpZWxkc1NjaGVtYVtrXSA9IHJ1bGUuZGVmYXVsdEZpZWxkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGRzU2NoZW1hID0gX2V4dGVuZHMoe30sIGZpZWxkc1NjaGVtYSwge30sIGRhdGEucnVsZS5maWVsZHMpO1xuXG4gICAgICAgICAgZm9yICh2YXIgZiBpbiBmaWVsZHNTY2hlbWEpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZHNTY2hlbWEuaGFzT3duUHJvcGVydHkoZikpIHtcbiAgICAgICAgICAgICAgdmFyIGZpZWxkU2NoZW1hID0gQXJyYXkuaXNBcnJheShmaWVsZHNTY2hlbWFbZl0pID8gZmllbGRzU2NoZW1hW2ZdIDogW2ZpZWxkc1NjaGVtYVtmXV07XG4gICAgICAgICAgICAgIGZpZWxkc1NjaGVtYVtmXSA9IGZpZWxkU2NoZW1hLm1hcChhZGRGdWxsZmllbGQuYmluZChudWxsLCBmKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNjaGVtYSA9IG5ldyBTY2hlbWEoZmllbGRzU2NoZW1hKTtcbiAgICAgICAgICBzY2hlbWEubWVzc2FnZXMob3B0aW9ucy5tZXNzYWdlcyk7XG5cbiAgICAgICAgICBpZiAoZGF0YS5ydWxlLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRhdGEucnVsZS5vcHRpb25zLm1lc3NhZ2VzID0gb3B0aW9ucy5tZXNzYWdlcztcbiAgICAgICAgICAgIGRhdGEucnVsZS5vcHRpb25zLmVycm9yID0gb3B0aW9ucy5lcnJvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzY2hlbWEudmFsaWRhdGUoZGF0YS52YWx1ZSwgZGF0YS5ydWxlLm9wdGlvbnMgfHwgb3B0aW9ucywgZnVuY3Rpb24gKGVycnMpIHtcbiAgICAgICAgICAgIHZhciBmaW5hbEVycm9ycyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZmluYWxFcnJvcnMucHVzaC5hcHBseShmaW5hbEVycm9ycywgZXJyb3JzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycnMgJiYgZXJycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZmluYWxFcnJvcnMucHVzaC5hcHBseShmaW5hbEVycm9ycywgZXJycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvSXQoZmluYWxFcnJvcnMubGVuZ3RoID8gZmluYWxFcnJvcnMgOiBudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVzO1xuXG4gICAgICBpZiAocnVsZS5hc3luY1ZhbGlkYXRvcikge1xuICAgICAgICByZXMgPSBydWxlLmFzeW5jVmFsaWRhdG9yKHJ1bGUsIGRhdGEudmFsdWUsIGNiLCBkYXRhLnNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHJ1bGUudmFsaWRhdG9yKSB7XG4gICAgICAgIHJlcyA9IHJ1bGUudmFsaWRhdG9yKHJ1bGUsIGRhdGEudmFsdWUsIGNiLCBkYXRhLnNvdXJjZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHJlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzID09PSBmYWxzZSkge1xuICAgICAgICAgIGNiKHJ1bGUubWVzc2FnZSB8fCBydWxlLmZpZWxkICsgXCIgZmFpbHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBjYihyZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgY2IocmVzLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXMgJiYgcmVzLnRoZW4pIHtcbiAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjYigpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBjYihlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIGNvbXBsZXRlKHJlc3VsdHMpO1xuICAgIH0pO1xuICB9LFxuICBnZXRUeXBlOiBmdW5jdGlvbiBnZXRUeXBlKHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlID09PSB1bmRlZmluZWQgJiYgcnVsZS5wYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICBydWxlLnR5cGUgPSAncGF0dGVybic7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBydWxlLnZhbGlkYXRvciAhPT0gJ2Z1bmN0aW9uJyAmJiBydWxlLnR5cGUgJiYgIXZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkocnVsZS50eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdCgnVW5rbm93biBydWxlIHR5cGUgJXMnLCBydWxlLnR5cGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZS50eXBlIHx8ICdzdHJpbmcnO1xuICB9LFxuICBnZXRWYWxpZGF0aW9uTWV0aG9kOiBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWV0aG9kKHJ1bGUpIHtcbiAgICBpZiAodHlwZW9mIHJ1bGUudmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcnVsZS52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhydWxlKTtcbiAgICB2YXIgbWVzc2FnZUluZGV4ID0ga2V5cy5pbmRleE9mKCdtZXNzYWdlJyk7XG5cbiAgICBpZiAobWVzc2FnZUluZGV4ICE9PSAtMSkge1xuICAgICAga2V5cy5zcGxpY2UobWVzc2FnZUluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgcmV0dXJuIHZhbGlkYXRvcnMucmVxdWlyZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnNbdGhpcy5nZXRUeXBlKHJ1bGUpXSB8fCBmYWxzZTtcbiAgfVxufTtcblxuU2NoZW1hLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIodHlwZSwgdmFsaWRhdG9yKSB7XG4gIGlmICh0eXBlb2YgdmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVnaXN0ZXIgYSB2YWxpZGF0b3IgYnkgdHlwZSwgdmFsaWRhdG9yIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YWxpZGF0b3JzW3R5cGVdID0gdmFsaWRhdG9yO1xufTtcblxuU2NoZW1hLndhcm5pbmcgPSB3YXJuaW5nO1xuU2NoZW1hLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFNUQVJUX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uc3RhcnQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uU3RhcnQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvblN0YXJ0J1xuICB9LFxuXG4gIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25TdGFydCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25TdGFydCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvblN0YXJ0J1xuICB9XG59O1xuXG52YXIgRU5EX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgc3RhcnRFdmVudHMgPSBbXTtcbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbnN0YXJ0LnRyYW5zaXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKEVWRU5UX05BTUVfTUFQLCBldmVudHMpIHtcbiAgICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgICBldmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhTVEFSVF9FVkVOVF9OQU1FX01BUCwgc3RhcnRFdmVudHMpO1xuICBwcm9jZXNzKEVORF9FVkVOVF9OQU1FX01BUCwgZW5kRXZlbnRzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgVHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgLy8gU3RhcnQgZXZlbnRzXG4gIHN0YXJ0RXZlbnRzOiBzdGFydEV2ZW50cyxcblxuICBhZGRTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICAvLyBFbmQgZXZlbnRzXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVHJhbnNpdGlvbkV2ZW50cztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlxuICAgICh3aW5kb3cuX19ORVhUX1A9d2luZG93Ll9fTkVYVF9QfHxbXSkucHVzaChbXCIvX2Vycm9yXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1vZCA9IHJlcXVpcmUoXCIvaG9tZS9ob3dhcmQvbXkvbXktZ2l0L2h4aC54eXovc3JjL3BhZ2VzL19lcnJvci5qc1wiKVxuICAgICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChcIi9ob21lL2hvd2FyZC9teS9teS1naXQvaHhoLnh5ei9zcmMvcGFnZXMvX2Vycm9yLmpzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFuZXh0LnJvdXRlci5jb21wb25lbnRzW1wiL19lcnJvclwiXSkgcmV0dXJuXG4gICAgICAgICAgdmFyIHVwZGF0ZWRQYWdlID0gcmVxdWlyZShcIi9ob21lL2hvd2FyZC9teS9teS1naXQvaHhoLnh5ei9zcmMvcGFnZXMvX2Vycm9yLmpzXCIpXG4gICAgICAgICAgbmV4dC5yb3V0ZXIudXBkYXRlKFwiL19lcnJvclwiLCB1cGRhdGVkUGFnZSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2RcbiAgICB9XSk7XG4gICIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmZ1bmN0aW9uIG9taXQob2JqLCBmaWVsZHMpIHtcbiAgdmFyIHNoYWxsb3dDb3B5ID0gX2V4dGVuZHMoe30sIG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGZpZWxkc1tpXTtcbiAgICBkZWxldGUgc2hhbGxvd0NvcHlba2V5XTtcbiAgfVxuICByZXR1cm4gc2hhbGxvd0NvcHk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9taXQ7IiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lLCBtb2R1bGVMb2FkVGltZSwgbm9kZUxvYWRUaW1lLCB1cFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbm9kZUxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBtb2R1bGVMb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gICAgdXBUaW1lID0gcHJvY2Vzcy51cHRpbWUoKSAqIDFlOTtcbiAgICBub2RlTG9hZFRpbWUgPSBtb2R1bGVMb2FkVGltZSAtIHVwVGltZTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGVyZm9ybWFuY2Utbm93LmpzLm1hcFxuIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAoIW9iamVjdCkge1xuICAgIG9iamVjdCA9IHJvb3Q7XG4gIH1cbiAgb2JqZWN0LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICBvYmplY3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IHRvQ2hpbGRyZW5BcnJheSBmcm9tIFwicmMtdXRpbC9lcy9DaGlsZHJlbi90b0FycmF5XCI7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmllbGRDb250ZXh0LCB7IEhPT0tfTUFSSyB9IGZyb20gJy4vRmllbGRDb250ZXh0JztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL3V0aWxzL3R5cGVVdGlsJztcbmltcG9ydCB7IHZhbGlkYXRlUnVsZXMgfSBmcm9tICcuL3V0aWxzL3ZhbGlkYXRlVXRpbCc7XG5pbXBvcnQgeyBjb250YWluc05hbWVQYXRoLCBkZWZhdWx0R2V0VmFsdWVGcm9tRXZlbnQsIGdldE5hbWVQYXRoLCBnZXRWYWx1ZSB9IGZyb20gJy4vdXRpbHMvdmFsdWVVdGlsJztcblxuZnVuY3Rpb24gcmVxdWlyZVVwZGF0ZShzaG91bGRVcGRhdGUsIHByZXYsIG5leHQsIHByZXZWYWx1ZSwgbmV4dFZhbHVlLCBpbmZvKSB7XG4gIGlmICh0eXBlb2Ygc2hvdWxkVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZShwcmV2LCBuZXh0LCAnc291cmNlJyBpbiBpbmZvID8ge1xuICAgICAgc291cmNlOiBpbmZvLnNvdXJjZVxuICAgIH0gOiB7fSk7XG4gIH1cblxuICByZXR1cm4gcHJldlZhbHVlICE9PSBuZXh0VmFsdWU7XG59IC8vIFdlIHVzZSBDbGFzcyBpbnN0ZWFkIG9mIEhvb2tzIGhlcmUgc2luY2UgaXQgd2lsbCBjb3N0IG11Y2ggY29kZSBieSB1c2luZyBIb29rcy5cblxuXG52YXIgRmllbGQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEZpZWxkLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGaWVsZCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGQpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRmllbGQpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgcmVzZXRDb3VudDogMFxuICAgIH07XG4gICAgX3RoaXMuY2FuY2VsUmVnaXN0ZXJGdW5jID0gbnVsbDtcbiAgICBfdGhpcy5kZXN0cm95ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogRm9sbG93IHN0YXRlIHNob3VsZCBub3QgbWFuYWdlbWVudCBpbiBTdGF0ZSBzaW5jZSBpdCB3aWxsIGFzeW5jIHVwZGF0ZSBieSBSZWFjdC5cbiAgICAgKiBUaGlzIG1ha2VzIGZpcnN0IHJlbmRlciBvZiBmb3JtIGNhbiBub3QgZ2V0IGNvcnJlY3Qgc3RhdGUgdmFsdWUuXG4gICAgICovXG5cbiAgICBfdGhpcy50b3VjaGVkID0gZmFsc2U7XG4gICAgX3RoaXMudmFsaWRhdGVQcm9taXNlID0gbnVsbDtcbiAgICBfdGhpcy5lcnJvcnMgPSBbXTtcblxuICAgIF90aGlzLmNhbmNlbFJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNhbmNlbFJlZ2lzdGVyRnVuYykge1xuICAgICAgICBfdGhpcy5jYW5jZWxSZWdpc3RlckZ1bmMoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2FuY2VsUmVnaXN0ZXJGdW5jID0gbnVsbDtcbiAgICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFV0aWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgX3RoaXMuZ2V0TmFtZVBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmFtZSA9IF90aGlzLnByb3BzLm5hbWU7XG4gICAgICB2YXIgX3RoaXMkY29udGV4dCRwcmVmaXhOID0gX3RoaXMuY29udGV4dC5wcmVmaXhOYW1lLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSBfdGhpcyRjb250ZXh0JHByZWZpeE4gPT09IHZvaWQgMCA/IFtdIDogX3RoaXMkY29udGV4dCRwcmVmaXhOO1xuICAgICAgdmFyIG5hbWVQYXRoID0gZ2V0TmFtZVBhdGgobmFtZSk7XG4gICAgICByZXR1cm4gJ25hbWUnIGluIF90aGlzLnByb3BzID8gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwcmVmaXhOYW1lKSwgX3RvQ29uc3VtYWJsZUFycmF5KG5hbWVQYXRoKSkgOiBbXTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UnVsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMkcnVsZXMgPSBfdGhpcy5wcm9wcy5ydWxlcyxcbiAgICAgICAgICBydWxlcyA9IF90aGlzJHByb3BzJHJ1bGVzID09PSB2b2lkIDAgPyBbXSA6IF90aGlzJHByb3BzJHJ1bGVzO1xuICAgICAgcmV0dXJuIHJ1bGVzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gcnVsZShfdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBydWxlO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVzdHJveSkgcmV0dXJuO1xuICAgICAgLyoqXG4gICAgICAgKiBDbGVhbiB1cCBjdXJyZW50IG5vZGUuXG4gICAgICAgKi9cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHJlc2V0Q291bnQgPSBfcmVmLnJlc2V0Q291bnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzZXRDb3VudDogcmVzZXRDb3VudCArIDFcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gRmllbGQgRW50aXR5IEludGVyZmFjZXMgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFRyaWdnZXIgYnkgc3RvcmUgdXBkYXRlLiBDaGVjayBpZiBuZWVkIHVwZGF0ZSB0aGUgY29tcG9uZW50XG5cblxuICAgIF90aGlzLm9uU3RvcmVDaGFuZ2UgPSBmdW5jdGlvbiAocHJldlN0b3JlLCBuYW1lUGF0aExpc3QsIGluZm8pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IF90aGlzJHByb3BzLnNob3VsZFVwZGF0ZSxcbiAgICAgICAgICBfdGhpcyRwcm9wcyRkZXBlbmRlbmMgPSBfdGhpcyRwcm9wcy5kZXBlbmRlbmNpZXMsXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gX3RoaXMkcHJvcHMkZGVwZW5kZW5jID09PSB2b2lkIDAgPyBbXSA6IF90aGlzJHByb3BzJGRlcGVuZGVuYyxcbiAgICAgICAgICBvblJlc2V0ID0gX3RoaXMkcHJvcHMub25SZXNldDtcbiAgICAgIHZhciBnZXRGaWVsZHNWYWx1ZSA9IF90aGlzLmNvbnRleHQuZ2V0RmllbGRzVmFsdWU7XG4gICAgICB2YXIgdmFsdWVzID0gZ2V0RmllbGRzVmFsdWUodHJ1ZSk7XG5cbiAgICAgIHZhciBuYW1lUGF0aCA9IF90aGlzLmdldE5hbWVQYXRoKCk7XG5cbiAgICAgIHZhciBwcmV2VmFsdWUgPSBfdGhpcy5nZXRWYWx1ZShwcmV2U3RvcmUpO1xuXG4gICAgICB2YXIgY3VyVmFsdWUgPSBfdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICB2YXIgbmFtZVBhdGhNYXRjaCA9IG5hbWVQYXRoTGlzdCAmJiBjb250YWluc05hbWVQYXRoKG5hbWVQYXRoTGlzdCwgbmFtZVBhdGgpOyAvLyBgc2V0RmllbGRzVmFsdWVgIGlzIGEgcXVpY2sgYWNjZXNzIHRvIHVwZGF0ZSByZWxhdGVkIHN0YXR1c1xuXG4gICAgICBpZiAoaW5mby50eXBlID09PSAndmFsdWVVcGRhdGUnICYmIGluZm8uc291cmNlID09PSAnZXh0ZXJuYWwnICYmIHByZXZWYWx1ZSAhPT0gY3VyVmFsdWUpIHtcbiAgICAgICAgX3RoaXMudG91Y2hlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLnZhbGlkYXRlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIF90aGlzLmVycm9ycyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGluZm8udHlwZSkge1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgaWYgKCFuYW1lUGF0aExpc3QgfHwgbmFtZVBhdGhNYXRjaCkge1xuICAgICAgICAgICAgLy8gQ2xlYW4gdXAgc3RhdGVcbiAgICAgICAgICAgIF90aGlzLnRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLnZhbGlkYXRlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5lcnJvcnMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKG9uUmVzZXQpIHtcbiAgICAgICAgICAgICAgb25SZXNldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoKCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzZXRGaWVsZCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKG5hbWVQYXRoTWF0Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIGRhdGEgPSBpbmZvLmRhdGE7XG5cbiAgICAgICAgICAgICAgaWYgKCd0b3VjaGVkJyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudG91Y2hlZCA9IGRhdGEudG91Y2hlZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgndmFsaWRhdGluZycgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnZhbGlkYXRlUHJvbWlzZSA9IGRhdGEudmFsaWRhdGluZyA/IFByb21pc2UucmVzb2x2ZShbXSkgOiBudWxsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCdlcnJvcnMnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lcnJvcnMgPSBkYXRhLmVycm9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF90aGlzLnJlUmVuZGVyKCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSAvLyBIYW5kbGUgdXBkYXRlIGJ5IGBzZXRGaWVsZGAgd2l0aCBgc2hvdWxkVXBkYXRlYFxuXG5cbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUgJiYgIW5hbWVQYXRoLmxlbmd0aCAmJiByZXF1aXJlVXBkYXRlKHNob3VsZFVwZGF0ZSwgcHJldlN0b3JlLCB2YWx1ZXMsIHByZXZWYWx1ZSwgY3VyVmFsdWUsIGluZm8pKSB7XG4gICAgICAgICAgICAgIF90aGlzLnJlUmVuZGVyKCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZGVwZW5kZW5jaWVzVXBkYXRlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaWdnZXIgd2hlbiBtYXJrZWQgYGRlcGVuZGVuY2llc2AgdXBkYXRlZC4gUmVsYXRlZCBmaWVsZHMgd2lsbCBhbGwgdXBkYXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBkZXBlbmRlbmN5TGlzdCA9IGRlcGVuZGVuY2llcy5tYXAoZ2V0TmFtZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAobmFtZVBhdGhNYXRjaCB8fCBkZXBlbmRlbmN5TGlzdC5zb21lKGZ1bmN0aW9uIChkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb250YWluc05hbWVQYXRoKGluZm8ucmVsYXRlZEZpZWxkcywgZGVwZW5kZW5jeSk7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICBfdGhpcy5yZVJlbmRlcigpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogLSBJZiBgbmFtZVBhdGhgIGV4aXN0cyBpbiBgbmFtZVBhdGhMaXN0YCwgbWVhbnMgaXQncyByZWxhdGVkIHZhbHVlIGFuZCBzaG91bGQgdXBkYXRlLlxuICAgICAgICAgICAqIC0gSWYgYGRlcGVuZGVuY2llc2AgZXhpc3RzIGluIGBuYW1lUGF0aExpc3RgLCBtZWFucyB1cHN0cmVhbSB0cmlnZ2VyIHVwZGF0ZS5cbiAgICAgICAgICAgKiAtIElmIGBzaG91bGRVcGRhdGVgIHByb3ZpZGVkLCB1c2UgY3VzdG9taXplIGxvZ2ljIHRvIHVwZGF0ZSB0aGUgZmllbGRcbiAgICAgICAgICAgKiAgIC0gZWxzZSB0byBjaGVjayBpZiB2YWx1ZSBjaGFuZ2VkXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKG5hbWVQYXRoTWF0Y2ggfHwgZGVwZW5kZW5jaWVzLnNvbWUoZnVuY3Rpb24gKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluc05hbWVQYXRoKG5hbWVQYXRoTGlzdCwgZ2V0TmFtZVBhdGgoZGVwZW5kZW5jeSkpO1xuICAgICAgICAgIH0pIHx8IHJlcXVpcmVVcGRhdGUoc2hvdWxkVXBkYXRlLCBwcmV2U3RvcmUsIHZhbHVlcywgcHJldlZhbHVlLCBjdXJWYWx1ZSwgaW5mbykpIHtcbiAgICAgICAgICAgIF90aGlzLnJlUmVuZGVyKCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBfdGhpcy5yZVJlbmRlcigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy52YWxpZGF0ZVJ1bGVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciB2YWxpZGF0ZUZpcnN0ID0gX3RoaXMucHJvcHMudmFsaWRhdGVGaXJzdDtcblxuICAgICAgdmFyIF9yZWYyID0gb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgICB0cmlnZ2VyTmFtZSA9IF9yZWYyLnRyaWdnZXJOYW1lO1xuXG4gICAgICB2YXIgbmFtZVBhdGggPSBfdGhpcy5nZXROYW1lUGF0aCgpO1xuXG4gICAgICB2YXIgZmlsdGVyZWRSdWxlcyA9IF90aGlzLmdldFJ1bGVzKCk7XG5cbiAgICAgIGlmICh0cmlnZ2VyTmFtZSkge1xuICAgICAgICBmaWx0ZXJlZFJ1bGVzID0gZmlsdGVyZWRSdWxlcy5maWx0ZXIoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICB2YXIgdmFsaWRhdGVUcmlnZ2VyID0gcnVsZS52YWxpZGF0ZVRyaWdnZXI7XG5cbiAgICAgICAgICBpZiAoIXZhbGlkYXRlVHJpZ2dlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRyaWdnZXJMaXN0ID0gdG9BcnJheSh2YWxpZGF0ZVRyaWdnZXIpO1xuICAgICAgICAgIHJldHVybiB0cmlnZ2VyTGlzdC5pbmNsdWRlcyh0cmlnZ2VyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IHZhbGlkYXRlUnVsZXMobmFtZVBhdGgsIF90aGlzLmdldFZhbHVlKCksIGZpbHRlcmVkUnVsZXMsIG9wdGlvbnMsIHZhbGlkYXRlRmlyc3QpO1xuICAgICAgX3RoaXMudmFsaWRhdGVQcm9taXNlID0gcHJvbWlzZTtcbiAgICAgIF90aGlzLmVycm9ycyA9IFtdO1xuICAgICAgcHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3JzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcblxuICAgICAgICBpZiAoX3RoaXMudmFsaWRhdGVQcm9taXNlID09PSBwcm9taXNlKSB7XG4gICAgICAgICAgX3RoaXMudmFsaWRhdGVQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICBfdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG5cbiAgICAgICAgICBfdGhpcy5yZVJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5pc0ZpZWxkVmFsaWRhdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIV90aGlzLnZhbGlkYXRlUHJvbWlzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaXNGaWVsZFRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMudG91Y2hlZDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0RXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmVycm9ycztcbiAgICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDaGlsZCBDb21wb25lbnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgX3RoaXMuZ2V0TWV0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE1ha2UgZXJyb3IgJiB2YWxpZGF0aW5nIGluIGNhY2hlIHRvIHNhdmUgcGVyZlxuICAgICAgX3RoaXMucHJldlZhbGlkYXRpbmcgPSBfdGhpcy5pc0ZpZWxkVmFsaWRhdGluZygpO1xuICAgICAgdmFyIG1ldGEgPSB7XG4gICAgICAgIHRvdWNoZWQ6IF90aGlzLmlzRmllbGRUb3VjaGVkKCksXG4gICAgICAgIHZhbGlkYXRpbmc6IF90aGlzLnByZXZWYWxpZGF0aW5nLFxuICAgICAgICBlcnJvcnM6IF90aGlzLmVycm9ycyxcbiAgICAgICAgbmFtZTogX3RoaXMuZ2V0TmFtZVBhdGgoKVxuICAgICAgfTtcbiAgICAgIHJldHVybiBtZXRhO1xuICAgIH07IC8vIE9ubHkgcmV0dXJuIHZhbGlkYXRlIGNoaWxkIG5vZGUuIElmIGludmFsaWRhdGUsIHdpbGwgZG8gbm90aGluZyBhYm91dCBmaWVsZC5cblxuXG4gICAgX3RoaXMuZ2V0T25seUNoaWxkID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAvLyBTdXBwb3J0IHJlbmRlciBwcm9wc1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgbWV0YSA9IF90aGlzLmdldE1ldGEoKTtcblxuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgX3RoaXMuZ2V0T25seUNoaWxkKGNoaWxkcmVuKF90aGlzLmdldENvbnRyb2xsZWQoKSwgbWV0YSwgX3RoaXMuY29udGV4dCkpLCB7XG4gICAgICAgICAgaXNGdW5jdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRmlsZWQgZWxlbWVudCBvbmx5XG5cblxuICAgICAgdmFyIGNoaWxkTGlzdCA9IHRvQ2hpbGRyZW5BcnJheShjaGlsZHJlbik7XG5cbiAgICAgIGlmIChjaGlsZExpc3QubGVuZ3RoICE9PSAxIHx8ICFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZExpc3RbMF0pKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hpbGQ6IGNoaWxkTGlzdCxcbiAgICAgICAgICBpc0Z1bmN0aW9uOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZDogY2hpbGRMaXN0WzBdLFxuICAgICAgICBpc0Z1bmN0aW9uOiBmYWxzZVxuICAgICAgfTtcbiAgICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRmllbGQgQ29udHJvbCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgX3RoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgIHZhciBnZXRGaWVsZHNWYWx1ZSA9IF90aGlzLmNvbnRleHQuZ2V0RmllbGRzVmFsdWU7XG5cbiAgICAgIHZhciBuYW1lUGF0aCA9IF90aGlzLmdldE5hbWVQYXRoKCk7XG5cbiAgICAgIHJldHVybiBnZXRWYWx1ZShzdG9yZSB8fCBnZXRGaWVsZHNWYWx1ZSh0cnVlKSwgbmFtZVBhdGgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDb250cm9sbGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNoaWxkUHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRyaWdnZXIgPSBfdGhpcyRwcm9wczIudHJpZ2dlcixcbiAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXIgPSBfdGhpcyRwcm9wczIudmFsaWRhdGVUcmlnZ2VyLFxuICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50ID0gX3RoaXMkcHJvcHMyLmdldFZhbHVlRnJvbUV2ZW50LFxuICAgICAgICAgIG5vcm1hbGl6ZSA9IF90aGlzJHByb3BzMi5ub3JtYWxpemUsXG4gICAgICAgICAgdmFsdWVQcm9wTmFtZSA9IF90aGlzJHByb3BzMi52YWx1ZVByb3BOYW1lO1xuXG4gICAgICB2YXIgbmFtZVBhdGggPSBfdGhpcy5nZXROYW1lUGF0aCgpO1xuXG4gICAgICB2YXIgX3RoaXMkY29udGV4dCA9IF90aGlzLmNvbnRleHQsXG4gICAgICAgICAgZ2V0SW50ZXJuYWxIb29rcyA9IF90aGlzJGNvbnRleHQuZ2V0SW50ZXJuYWxIb29rcyxcbiAgICAgICAgICBnZXRGaWVsZHNWYWx1ZSA9IF90aGlzJGNvbnRleHQuZ2V0RmllbGRzVmFsdWU7XG5cbiAgICAgIHZhciBfZ2V0SW50ZXJuYWxIb29rcyA9IGdldEludGVybmFsSG9va3MoSE9PS19NQVJLKSxcbiAgICAgICAgICBkaXNwYXRjaCA9IF9nZXRJbnRlcm5hbEhvb2tzLmRpc3BhdGNoO1xuXG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXG5cbiAgICAgIHZhciBvcmlnaW5UcmlnZ2VyRnVuYyA9IGNoaWxkUHJvcHNbdHJpZ2dlcl07XG5cbiAgICAgIHZhciBjb250cm9sID0gX29iamVjdFNwcmVhZCh7fSwgY2hpbGRQcm9wcywgX2RlZmluZVByb3BlcnR5KHt9LCB2YWx1ZVByb3BOYW1lLCB2YWx1ZSkpOyAvLyBBZGQgdHJpZ2dlclxuXG5cbiAgICAgIGNvbnRyb2xbdHJpZ2dlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1hcmsgYXMgdG91Y2hlZFxuICAgICAgICBfdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0VmFsdWVGcm9tRXZlbnQpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGdldFZhbHVlRnJvbUV2ZW50LmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBkZWZhdWx0R2V0VmFsdWVGcm9tRXZlbnQuYXBwbHkodm9pZCAwLCBbdmFsdWVQcm9wTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3JtYWxpemUpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IG5vcm1hbGl6ZShuZXdWYWx1ZSwgdmFsdWUsIGdldEZpZWxkc1ZhbHVlKHRydWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICAgIG5hbWVQYXRoOiBuYW1lUGF0aCxcbiAgICAgICAgICB2YWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9yaWdpblRyaWdnZXJGdW5jKSB7XG4gICAgICAgICAgb3JpZ2luVHJpZ2dlckZ1bmMuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTsgLy8gQWRkIHZhbGlkYXRlVHJpZ2dlclxuXG5cbiAgICAgIHZhciB2YWxpZGF0ZVRyaWdnZXJMaXN0ID0gdG9BcnJheSh2YWxpZGF0ZVRyaWdnZXIgfHwgW10pO1xuICAgICAgdmFsaWRhdGVUcmlnZ2VyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyTmFtZSkge1xuICAgICAgICAvLyBXcmFwIGFkZGl0aW9uYWwgZnVuY3Rpb24gb2YgY29tcG9uZW50LCBzbyB0aGF0IHdlIGNhbiBnZXQgbGF0ZXN0IHZhbHVlIGZyb20gc3RvcmVcbiAgICAgICAgdmFyIG9yaWdpblRyaWdnZXIgPSBjb250cm9sW3RyaWdnZXJOYW1lXTtcblxuICAgICAgICBjb250cm9sW3RyaWdnZXJOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAob3JpZ2luVHJpZ2dlcikge1xuICAgICAgICAgICAgb3JpZ2luVHJpZ2dlci5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSAvLyBBbHdheXMgdXNlIGxhdGVzdCBydWxlc1xuXG5cbiAgICAgICAgICB2YXIgcnVsZXMgPSBfdGhpcy5wcm9wcy5ydWxlcztcblxuICAgICAgICAgIGlmIChydWxlcyAmJiBydWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFdlIGRpc3BhdGNoIHZhbGlkYXRlIHRvIHJvb3QsXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCB3aWxsIHVwZGF0ZSByZWxhdGVkIGRhdGEgd2l0aCBvdGhlciBmaWVsZCB3aXRoIHNhbWUgbmFtZVxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiAndmFsaWRhdGVGaWVsZCcsXG4gICAgICAgICAgICAgIG5hbWVQYXRoOiBuYW1lUGF0aCxcbiAgICAgICAgICAgICAgdHJpZ2dlck5hbWU6IHRyaWdnZXJOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb250cm9sO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFN1YnNjcmlwdGlvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBfY3JlYXRlQ2xhc3MoRmllbGQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIGdldEludGVybmFsSG9va3MgPSB0aGlzLmNvbnRleHQuZ2V0SW50ZXJuYWxIb29rcztcblxuICAgICAgdmFyIF9nZXRJbnRlcm5hbEhvb2tzMiA9IGdldEludGVybmFsSG9va3MoSE9PS19NQVJLKSxcbiAgICAgICAgICByZWdpc3RlckZpZWxkID0gX2dldEludGVybmFsSG9va3MyLnJlZ2lzdGVyRmllbGQ7XG5cbiAgICAgIHRoaXMuY2FuY2VsUmVnaXN0ZXJGdW5jID0gcmVnaXN0ZXJGaWVsZCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNhbmNlbFJlZ2lzdGVyKCk7XG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZVJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZVJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3kpIHJldHVybjtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciByZXNldENvdW50ID0gdGhpcy5zdGF0ZS5yZXNldENvdW50O1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgdmFyIF90aGlzJGdldE9ubHlDaGlsZCA9IHRoaXMuZ2V0T25seUNoaWxkKGNoaWxkcmVuKSxcbiAgICAgICAgICBjaGlsZCA9IF90aGlzJGdldE9ubHlDaGlsZC5jaGlsZCxcbiAgICAgICAgICBpc0Z1bmN0aW9uID0gX3RoaXMkZ2V0T25seUNoaWxkLmlzRnVuY3Rpb247IC8vIE5vdCBuZWVkIHRvIGBjbG9uZUVsZW1lbnRgIHNpbmNlIHVzZXIgY2FuIGhhbmRsZSB0aGlzIGluIHJlbmRlciBmdW5jdGlvbiBzZWxmXG5cblxuICAgICAgdmFyIHJldHVybkNoaWxkTm9kZTtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuQ2hpbGROb2RlID0gY2hpbGQ7XG4gICAgICB9IGVsc2UgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm5DaGlsZE5vZGUgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHRoaXMuZ2V0Q29udHJvbGxlZChjaGlsZC5wcm9wcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybmluZyghY2hpbGQsICdgY2hpbGRyZW5gIG9mIEZpZWxkIGlzIG5vdCB2YWxpZGF0ZSBSZWFjdEVsZW1lbnQuJyk7XG4gICAgICAgIHJldHVybkNoaWxkTm9kZSA9IGNoaWxkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge1xuICAgICAgICBrZXk6IHJlc2V0Q291bnRcbiAgICAgIH0sIHJldHVybkNoaWxkTm9kZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpZWxkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5GaWVsZC5jb250ZXh0VHlwZSA9IEZpZWxkQ29udGV4dDtcbkZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJpZ2dlcjogJ29uQ2hhbmdlJyxcbiAgdmFsaWRhdGVUcmlnZ2VyOiAnb25DaGFuZ2UnLFxuICB2YWx1ZVByb3BOYW1lOiAndmFsdWUnXG59O1xuZXhwb3J0IGRlZmF1bHQgRmllbGQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5leHBvcnQgdmFyIEhPT0tfTUFSSyA9ICdSQ19GT1JNX0lOVEVSTkFMX0hPT0tTJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblxudmFyIHdhcm5pbmdGdW5jID0gZnVuY3Rpb24gd2FybmluZ0Z1bmMoKSB7XG4gIHdhcm5pbmcoZmFsc2UsICdDYW4gbm90IGZpbmQgRm9ybUNvbnRleHQuIFBsZWFzZSBtYWtlIHN1cmUgeW91IHdyYXAgRmllbGQgdW5kZXIgRm9ybS4nKTtcbn07XG5cbnZhciBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGdldEZpZWxkVmFsdWU6IHdhcm5pbmdGdW5jLFxuICBnZXRGaWVsZHNWYWx1ZTogd2FybmluZ0Z1bmMsXG4gIGdldEZpZWxkRXJyb3I6IHdhcm5pbmdGdW5jLFxuICBnZXRGaWVsZHNFcnJvcjogd2FybmluZ0Z1bmMsXG4gIGlzRmllbGRzVG91Y2hlZDogd2FybmluZ0Z1bmMsXG4gIGlzRmllbGRUb3VjaGVkOiB3YXJuaW5nRnVuYyxcbiAgaXNGaWVsZFZhbGlkYXRpbmc6IHdhcm5pbmdGdW5jLFxuICBpc0ZpZWxkc1ZhbGlkYXRpbmc6IHdhcm5pbmdGdW5jLFxuICByZXNldEZpZWxkczogd2FybmluZ0Z1bmMsXG4gIHNldEZpZWxkczogd2FybmluZ0Z1bmMsXG4gIHNldEZpZWxkc1ZhbHVlOiB3YXJuaW5nRnVuYyxcbiAgdmFsaWRhdGVGaWVsZHM6IHdhcm5pbmdGdW5jLFxuICBzdWJtaXQ6IHdhcm5pbmdGdW5jLFxuICBnZXRJbnRlcm5hbEhvb2tzOiBmdW5jdGlvbiBnZXRJbnRlcm5hbEhvb2tzKCkge1xuICAgIHdhcm5pbmdGdW5jKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BhdGNoOiB3YXJuaW5nRnVuYyxcbiAgICAgIHJlZ2lzdGVyRmllbGQ6IHdhcm5pbmdGdW5jLFxuICAgICAgdXNlU3Vic2NyaWJlOiB3YXJuaW5nRnVuYyxcbiAgICAgIHNldEluaXRpYWxWYWx1ZXM6IHdhcm5pbmdGdW5jLFxuICAgICAgc2V0Q2FsbGJhY2tzOiB3YXJuaW5nRnVuYyxcbiAgICAgIGdldEZpZWxkczogd2FybmluZ0Z1bmMsXG4gICAgICBzZXRWYWxpZGF0ZU1lc3NhZ2VzOiB3YXJuaW5nRnVuY1xuICAgIH07XG4gIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgQ29udGV4dDsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi91c2VGb3JtJztcbmltcG9ydCBGaWVsZENvbnRleHQsIHsgSE9PS19NQVJLIH0gZnJvbSAnLi9GaWVsZENvbnRleHQnO1xuaW1wb3J0IEZvcm1Db250ZXh0IGZyb20gJy4vRm9ybUNvbnRleHQnO1xuaW1wb3J0IHsgaXNTaW1pbGFyIH0gZnJvbSAnLi91dGlscy92YWx1ZVV0aWwnO1xuXG52YXIgRm9ybSA9IGZ1bmN0aW9uIEZvcm0oX3JlZiwgcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgaW5pdGlhbFZhbHVlcyA9IF9yZWYuaW5pdGlhbFZhbHVlcyxcbiAgICAgIGZpZWxkcyA9IF9yZWYuZmllbGRzLFxuICAgICAgZm9ybSA9IF9yZWYuZm9ybSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIF9yZWYkY29tcG9uZW50ID0gX3JlZi5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2Zvcm0nIDogX3JlZiRjb21wb25lbnQsXG4gICAgICB2YWxpZGF0ZU1lc3NhZ2VzID0gX3JlZi52YWxpZGF0ZU1lc3NhZ2VzLFxuICAgICAgb25WYWx1ZXNDaGFuZ2UgPSBfcmVmLm9uVmFsdWVzQ2hhbmdlLFxuICAgICAgX29uRmllbGRzQ2hhbmdlID0gX3JlZi5vbkZpZWxkc0NoYW5nZSxcbiAgICAgIF9vbkZpbmlzaCA9IF9yZWYub25GaW5pc2gsXG4gICAgICBvbkZpbmlzaEZhaWxlZCA9IF9yZWYub25GaW5pc2hGYWlsZWQsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wibmFtZVwiLCBcImluaXRpYWxWYWx1ZXNcIiwgXCJmaWVsZHNcIiwgXCJmb3JtXCIsIFwiY2hpbGRyZW5cIiwgXCJjb21wb25lbnRcIiwgXCJ2YWxpZGF0ZU1lc3NhZ2VzXCIsIFwib25WYWx1ZXNDaGFuZ2VcIiwgXCJvbkZpZWxkc0NoYW5nZVwiLCBcIm9uRmluaXNoXCIsIFwib25GaW5pc2hGYWlsZWRcIl0pO1xuXG4gIHZhciBmb3JtQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRm9ybUNvbnRleHQpOyAvLyBXZSBjdXN0b21pemUgaGFuZGxlIGV2ZW50IHNpbmNlIENvbnRleHQgd2lsbCBtYWtlcyBhbGwgdGhlIGNvbnN1bWVyIHJlLXJlbmRlcjpcbiAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2NvbnRleHQuaHRtbCNjb250ZXh0cHJvdmlkZXJcblxuICB2YXIgX3VzZUZvcm0gPSB1c2VGb3JtKGZvcm0pLFxuICAgICAgX3VzZUZvcm0yID0gX3NsaWNlZFRvQXJyYXkoX3VzZUZvcm0sIDEpLFxuICAgICAgZm9ybUluc3RhbmNlID0gX3VzZUZvcm0yWzBdO1xuXG4gIHZhciBfZm9ybUluc3RhbmNlJGdldEludGUgPSBmb3JtSW5zdGFuY2UuZ2V0SW50ZXJuYWxIb29rcyhIT09LX01BUkspLFxuICAgICAgdXNlU3Vic2NyaWJlID0gX2Zvcm1JbnN0YW5jZSRnZXRJbnRlLnVzZVN1YnNjcmliZSxcbiAgICAgIHNldEluaXRpYWxWYWx1ZXMgPSBfZm9ybUluc3RhbmNlJGdldEludGUuc2V0SW5pdGlhbFZhbHVlcyxcbiAgICAgIHNldENhbGxiYWNrcyA9IF9mb3JtSW5zdGFuY2UkZ2V0SW50ZS5zZXRDYWxsYmFja3MsXG4gICAgICBzZXRWYWxpZGF0ZU1lc3NhZ2VzID0gX2Zvcm1JbnN0YW5jZSRnZXRJbnRlLnNldFZhbGlkYXRlTWVzc2FnZXM7IC8vIFBhc3MgcmVmIHdpdGggZm9ybSBpbnN0YW5jZVxuXG5cbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm9ybUluc3RhbmNlO1xuICB9KTsgLy8gUmVnaXN0ZXIgZm9ybSBpbnRvIENvbnRleHRcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZvcm1Db250ZXh0LnJlZ2lzdGVyRm9ybShuYW1lLCBmb3JtSW5zdGFuY2UpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JtQ29udGV4dC51bnJlZ2lzdGVyRm9ybShuYW1lKTtcbiAgICB9O1xuICB9LCBbZm9ybUNvbnRleHQsIGZvcm1JbnN0YW5jZSwgbmFtZV0pOyAvLyBQYXNzIHByb3BzIHRvIHN0b3JlXG5cbiAgc2V0VmFsaWRhdGVNZXNzYWdlcyhfb2JqZWN0U3ByZWFkKHt9LCBmb3JtQ29udGV4dC52YWxpZGF0ZU1lc3NhZ2VzLCB7fSwgdmFsaWRhdGVNZXNzYWdlcykpO1xuICBzZXRDYWxsYmFja3Moe1xuICAgIG9uVmFsdWVzQ2hhbmdlOiBvblZhbHVlc0NoYW5nZSxcbiAgICBvbkZpZWxkc0NoYW5nZTogZnVuY3Rpb24gb25GaWVsZHNDaGFuZ2UoY2hhbmdlZEZpZWxkcykge1xuICAgICAgZm9ybUNvbnRleHQudHJpZ2dlckZvcm1DaGFuZ2UobmFtZSwgY2hhbmdlZEZpZWxkcyk7XG5cbiAgICAgIGlmIChfb25GaWVsZHNDaGFuZ2UpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHJlc3RbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgX29uRmllbGRzQ2hhbmdlLmFwcGx5KHZvaWQgMCwgW2NoYW5nZWRGaWVsZHNdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkZpbmlzaDogZnVuY3Rpb24gb25GaW5pc2godmFsdWVzKSB7XG4gICAgICBmb3JtQ29udGV4dC50cmlnZ2VyRm9ybUZpbmlzaChuYW1lLCB2YWx1ZXMpO1xuXG4gICAgICBpZiAoX29uRmluaXNoKSB7XG4gICAgICAgIF9vbkZpbmlzaCh2YWx1ZXMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25GaW5pc2hGYWlsZWQ6IG9uRmluaXNoRmFpbGVkXG4gIH0pOyAvLyBTZXQgaW5pdGlhbCB2YWx1ZSwgaW5pdCBzdG9yZSB2YWx1ZSB3aGVuIGZpcnN0IG1vdW50XG5cbiAgdmFyIG1vdW50UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBzZXRJbml0aWFsVmFsdWVzKGluaXRpYWxWYWx1ZXMsICFtb3VudFJlZi5jdXJyZW50KTtcblxuICBpZiAoIW1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICBtb3VudFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSAvLyBQcmVwYXJlIGNoaWxkcmVuIGJ5IGBjaGlsZHJlbmAgdHlwZVxuXG5cbiAgdmFyIGNoaWxkcmVuTm9kZSA9IGNoaWxkcmVuO1xuICB2YXIgY2hpbGRyZW5SZW5kZXJQcm9wcyA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJztcblxuICBpZiAoY2hpbGRyZW5SZW5kZXJQcm9wcykge1xuICAgIHZhciB2YWx1ZXMgPSBmb3JtSW5zdGFuY2UuZ2V0RmllbGRzVmFsdWUodHJ1ZSk7XG4gICAgY2hpbGRyZW5Ob2RlID0gY2hpbGRyZW4odmFsdWVzLCBmb3JtSW5zdGFuY2UpO1xuICB9IC8vIE5vdCB1c2Ugc3Vic2NyaWJlIHdoZW4gdXNpbmcgcmVuZGVyIHByb3BzXG5cblxuICB1c2VTdWJzY3JpYmUoIWNoaWxkcmVuUmVuZGVyUHJvcHMpOyAvLyBMaXN0ZW4gaWYgZmllbGRzIHByb3ZpZGVkLiBXZSB1c2UgcmVmIHRvIHNhdmUgcHJldiBkYXRhIGhlcmUgdG8gYXZvaWQgYWRkaXRpb25hbCByZW5kZXJcblxuICB2YXIgcHJldkZpZWxkc1JlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNTaW1pbGFyKHByZXZGaWVsZHNSZWYuY3VycmVudCB8fCBbXSwgZmllbGRzIHx8IFtdKSkge1xuICAgICAgZm9ybUluc3RhbmNlLnNldEZpZWxkcyhmaWVsZHMgfHwgW10pO1xuICAgIH1cblxuICAgIHByZXZGaWVsZHNSZWYuY3VycmVudCA9IGZpZWxkcztcbiAgfSwgW2ZpZWxkcywgZm9ybUluc3RhbmNlXSk7XG4gIHZhciB3cmFwcGVyTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGZvcm1JbnN0YW5jZVxuICB9LCBjaGlsZHJlbk5vZGUpO1xuXG4gIGlmIChDb21wb25lbnQgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHdyYXBwZXJOb2RlO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCByZXN0UHJvcHMsIHtcbiAgICBvblN1Ym1pdDogZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGZvcm1JbnN0YW5jZS5zdWJtaXQoKTtcbiAgICB9XG4gIH0pLCB3cmFwcGVyTm9kZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgRm9ybUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgdHJpZ2dlckZvcm1DaGFuZ2U6IGZ1bmN0aW9uIHRyaWdnZXJGb3JtQ2hhbmdlKCkge30sXG4gIHRyaWdnZXJGb3JtRmluaXNoOiBmdW5jdGlvbiB0cmlnZ2VyRm9ybUZpbmlzaCgpIHt9LFxuICByZWdpc3RlckZvcm06IGZ1bmN0aW9uIHJlZ2lzdGVyRm9ybSgpIHt9LFxuICB1bnJlZ2lzdGVyRm9ybTogZnVuY3Rpb24gdW5yZWdpc3RlckZvcm0oKSB7fVxufSk7XG5cbnZhciBGb3JtUHJvdmlkZXIgPSBmdW5jdGlvbiBGb3JtUHJvdmlkZXIoX3JlZikge1xuICB2YXIgdmFsaWRhdGVNZXNzYWdlcyA9IF9yZWYudmFsaWRhdGVNZXNzYWdlcyxcbiAgICAgIG9uRm9ybUNoYW5nZSA9IF9yZWYub25Gb3JtQ2hhbmdlLFxuICAgICAgb25Gb3JtRmluaXNoID0gX3JlZi5vbkZvcm1GaW5pc2gsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBmb3JtQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xuICB2YXIgZm9ybXNSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBfb2JqZWN0U3ByZWFkKHt9LCBmb3JtQ29udGV4dCwge1xuICAgICAgdmFsaWRhdGVNZXNzYWdlczogX29iamVjdFNwcmVhZCh7fSwgZm9ybUNvbnRleHQudmFsaWRhdGVNZXNzYWdlcywge30sIHZhbGlkYXRlTWVzc2FnZXMpLFxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAvLyA9ICAgICAgICAgICAgICAgICAgR2xvYmFsIEZvcm0gQ29udHJvbCAgICAgICAgICAgICAgICAgID1cbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgdHJpZ2dlckZvcm1DaGFuZ2U6IGZ1bmN0aW9uIHRyaWdnZXJGb3JtQ2hhbmdlKG5hbWUsIGNoYW5nZWRGaWVsZHMpIHtcbiAgICAgICAgaWYgKG9uRm9ybUNoYW5nZSkge1xuICAgICAgICAgIG9uRm9ybUNoYW5nZShuYW1lLCB7XG4gICAgICAgICAgICBjaGFuZ2VkRmllbGRzOiBjaGFuZ2VkRmllbGRzLFxuICAgICAgICAgICAgZm9ybXM6IGZvcm1zUmVmLmN1cnJlbnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1Db250ZXh0LnRyaWdnZXJGb3JtQ2hhbmdlKG5hbWUsIGNoYW5nZWRGaWVsZHMpO1xuICAgICAgfSxcbiAgICAgIHRyaWdnZXJGb3JtRmluaXNoOiBmdW5jdGlvbiB0cmlnZ2VyRm9ybUZpbmlzaChuYW1lLCB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKG9uRm9ybUZpbmlzaCkge1xuICAgICAgICAgIG9uRm9ybUZpbmlzaChuYW1lLCB7XG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgIGZvcm1zOiBmb3Jtc1JlZi5jdXJyZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtQ29udGV4dC50cmlnZ2VyRm9ybUZpbmlzaChuYW1lLCB2YWx1ZXMpO1xuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyRm9ybTogZnVuY3Rpb24gcmVnaXN0ZXJGb3JtKG5hbWUsIGZvcm0pIHtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICBmb3Jtc1JlZi5jdXJyZW50ID0gX29iamVjdFNwcmVhZCh7fSwgZm9ybXNSZWYuY3VycmVudCwgX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBmb3JtKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtQ29udGV4dC5yZWdpc3RlckZvcm0obmFtZSwgZm9ybSk7XG4gICAgICB9LFxuICAgICAgdW5yZWdpc3RlckZvcm06IGZ1bmN0aW9uIHVucmVnaXN0ZXJGb3JtKG5hbWUpIHtcbiAgICAgICAgdmFyIG5ld0Zvcm1zID0gX29iamVjdFNwcmVhZCh7fSwgZm9ybXNSZWYuY3VycmVudCk7XG5cbiAgICAgICAgZGVsZXRlIG5ld0Zvcm1zW25hbWVdO1xuICAgICAgICBmb3Jtc1JlZi5jdXJyZW50ID0gbmV3Rm9ybXM7XG4gICAgICAgIGZvcm1Db250ZXh0LnVucmVnaXN0ZXJGb3JtKG5hbWUpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sIGNoaWxkcmVuKTtcbn07XG5cbmV4cG9ydCB7IEZvcm1Qcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRleHQ7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBGaWVsZENvbnRleHQgZnJvbSAnLi9GaWVsZENvbnRleHQnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnO1xuaW1wb3J0IHsgbW92ZSBhcyBfbW92ZSwgZ2V0TmFtZVBhdGggfSBmcm9tICcuL3V0aWxzL3ZhbHVlVXRpbCc7XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gTGlzdChfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRmllbGRDb250ZXh0KTtcbiAgdmFyIGtleVJlZiA9IFJlYWN0LnVzZVJlZih7XG4gICAga2V5czogW10sXG4gICAgaWQ6IDBcbiAgfSk7XG4gIHZhciBrZXlNYW5hZ2VyID0ga2V5UmVmLmN1cnJlbnQ7IC8vIFVzZXIgc2hvdWxkIG5vdCBwYXNzIGBjaGlsZHJlbmAgYXMgb3RoZXIgdHlwZS5cblxuICBpZiAodHlwZW9mIGNoaWxkcmVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgd2FybmluZyhmYWxzZSwgJ0Zvcm0uTGlzdCBvbmx5IGFjY2VwdHMgZnVuY3Rpb24gYXMgY2hpbGRyZW4uJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcGFyZW50UHJlZml4TmFtZSA9IGdldE5hbWVQYXRoKGNvbnRleHQucHJlZml4TmFtZSkgfHwgW107XG4gIHZhciBwcmVmaXhOYW1lID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXJlbnRQcmVmaXhOYW1lKSwgX3RvQ29uc3VtYWJsZUFycmF5KGdldE5hbWVQYXRoKG5hbWUpKSk7XG5cbiAgdmFyIHNob3VsZFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZFVwZGF0ZShwcmV2VmFsdWUsIG5leHRWYWx1ZSwgX3JlZjIpIHtcbiAgICB2YXIgc291cmNlID0gX3JlZjIuc291cmNlO1xuXG4gICAgaWYgKHNvdXJjZSA9PT0gJ2ludGVybmFsJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2VmFsdWUgIT09IG5leHRWYWx1ZTtcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogX29iamVjdFNwcmVhZCh7fSwgY29udGV4dCwge1xuICAgICAgcHJlZml4TmFtZTogcHJlZml4TmFtZVxuICAgIH0pXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGQsIHtcbiAgICBuYW1lOiBbXSxcbiAgICBzaG91bGRVcGRhdGU6IHNob3VsZFVwZGF0ZVxuICB9LCBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgX3JlZjMkdmFsdWUgPSBfcmVmMy52YWx1ZSxcbiAgICAgICAgdmFsdWUgPSBfcmVmMyR2YWx1ZSA9PT0gdm9pZCAwID8gW10gOiBfcmVmMyR2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2UgPSBfcmVmMy5vbkNoYW5nZTtcbiAgICB2YXIgZ2V0RmllbGRWYWx1ZSA9IGNvbnRleHQuZ2V0RmllbGRWYWx1ZTtcblxuICAgIHZhciBnZXROZXdWYWx1ZSA9IGZ1bmN0aW9uIGdldE5ld1ZhbHVlKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IGdldEZpZWxkVmFsdWUocHJlZml4TmFtZSB8fCBbXSk7XG4gICAgICByZXR1cm4gdmFsdWVzIHx8IFtdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWx3YXlzIGdldCBsYXRlc3QgdmFsdWUgaW4gY2FzZSB1c2VyIHVwZGF0ZSBmaWVsZHMgYnkgYGZvcm1gIGFwaS5cbiAgICAgKi9cblxuXG4gICAgdmFyIG9wZXJhdGlvbnMgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgLy8gTWFwcGluZyBrZXlzXG4gICAgICAgIGtleU1hbmFnZXIua2V5cyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoa2V5TWFuYWdlci5rZXlzKSwgW2tleU1hbmFnZXIuaWRdKTtcbiAgICAgICAga2V5TWFuYWdlci5pZCArPSAxO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBnZXROZXdWYWx1ZSgpO1xuICAgICAgICBvbkNoYW5nZShbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5ld1ZhbHVlKSwgW2RlZmF1bHRWYWx1ZV0pKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBnZXROZXdWYWx1ZSgpOyAvLyBEbyBub3QgaGFuZGxlIG91dCBvZiByYW5nZVxuXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gbmV3VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFVwZGF0ZSBrZXkgbWFwcGluZ1xuXG5cbiAgICAgICAgdmFyIG5ld0tleXMgPSBrZXlNYW5hZ2VyLmtleXMubWFwKGZ1bmN0aW9uIChrZXksIGlkKSB7XG4gICAgICAgICAgaWYgKGlkIDwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGtleU1hbmFnZXIua2V5c1tpZCArIDFdO1xuICAgICAgICB9KTtcbiAgICAgICAga2V5TWFuYWdlci5rZXlzID0gbmV3S2V5cy5zbGljZSgwLCAtMSk7IC8vIFRyaWdnZXIgc3RvcmUgY2hhbmdlXG5cbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChfLCBpZCkge1xuICAgICAgICAgIHJldHVybiBpZCAhPT0gaW5kZXg7XG4gICAgICAgIH0pKTtcbiAgICAgIH0sXG4gICAgICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKGZyb20sIHRvKSB7XG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGdldE5ld1ZhbHVlKCk7IC8vIERvIG5vdCBoYW5kbGUgb3V0IG9mIHJhbmdlXG5cbiAgICAgICAgaWYgKGZyb20gPCAwIHx8IGZyb20gPj0gbmV3VmFsdWUubGVuZ3RoIHx8IHRvIDwgMCB8fCB0byA+PSBuZXdWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBrZXlNYW5hZ2VyLmtleXMgPSBfbW92ZShrZXlNYW5hZ2VyLmtleXMsIGZyb20sIHRvKTsgLy8gVHJpZ2dlciBzdG9yZSBjaGFuZ2VcblxuICAgICAgICBvbkNoYW5nZShfbW92ZShuZXdWYWx1ZSwgZnJvbSwgdG8pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBjaGlsZHJlbih2YWx1ZS5tYXAoZnVuY3Rpb24gKF9fLCBpbmRleCkge1xuICAgICAgdmFyIGtleSA9IGtleU1hbmFnZXIua2V5c1tpbmRleF07XG5cbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlNYW5hZ2VyLmtleXNbaW5kZXhdID0ga2V5TWFuYWdlci5pZDtcbiAgICAgICAga2V5ID0ga2V5TWFuYWdlci5rZXlzW2luZGV4XTtcbiAgICAgICAga2V5TWFuYWdlci5pZCArPSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBpbmRleCxcbiAgICAgICAga2V5OiBrZXlcbiAgICAgIH07XG4gICAgfSksIG9wZXJhdGlvbnMpO1xuICB9KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWVsZCBmcm9tICcuL0ZpZWxkJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuL3VzZUZvcm0nO1xuaW1wb3J0IEZpZWxkRm9ybSBmcm9tICcuL0Zvcm0nO1xuaW1wb3J0IHsgRm9ybVByb3ZpZGVyIH0gZnJvbSAnLi9Gb3JtQ29udGV4dCc7XG52YXIgSW50ZXJuYWxGb3JtID0gUmVhY3QuZm9yd2FyZFJlZihGaWVsZEZvcm0pO1xudmFyIFJlZkZvcm0gPSBJbnRlcm5hbEZvcm07XG5SZWZGb3JtLkZvcm1Qcm92aWRlciA9IEZvcm1Qcm92aWRlcjtcblJlZkZvcm0uRmllbGQgPSBGaWVsZDtcblJlZkZvcm0uTGlzdCA9IExpc3Q7XG5SZWZGb3JtLnVzZUZvcm0gPSB1c2VGb3JtO1xuZXhwb3J0IHsgRmllbGQsIExpc3QsIHVzZUZvcm0sIEZvcm1Qcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgUmVmRm9ybTsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCB7IEhPT0tfTUFSSyB9IGZyb20gJy4vRmllbGRDb250ZXh0JztcbmltcG9ydCB7IGFsbFByb21pc2VGaW5pc2ggfSBmcm9tICcuL3V0aWxzL2FzeW5jVXRpbCc7XG5pbXBvcnQgTmFtZU1hcCBmcm9tICcuL3V0aWxzL05hbWVNYXAnO1xuaW1wb3J0IHsgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzJztcbmltcG9ydCB7IGNsb25lQnlOYW1lUGF0aExpc3QsIGNvbnRhaW5zTmFtZVBhdGgsIGdldE5hbWVQYXRoLCBnZXRWYWx1ZSwgc2V0VmFsdWUsIHNldFZhbHVlcyB9IGZyb20gJy4vdXRpbHMvdmFsdWVVdGlsJztcbmV4cG9ydCB2YXIgRm9ybVN0b3JlID0gZnVuY3Rpb24gRm9ybVN0b3JlKGZvcmNlUm9vdFVwZGF0ZSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtU3RvcmUpO1xuXG4gIHRoaXMuZm9ybUhvb2tlZCA9IGZhbHNlO1xuICB0aGlzLnN1YnNjcmliYWJsZSA9IHRydWU7XG4gIHRoaXMuc3RvcmUgPSB7fTtcbiAgdGhpcy5maWVsZEVudGl0aWVzID0gW107XG4gIHRoaXMuaW5pdGlhbFZhbHVlcyA9IHt9O1xuICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICB0aGlzLnZhbGlkYXRlTWVzc2FnZXMgPSBudWxsO1xuICB0aGlzLmxhc3RWYWxpZGF0ZVByb21pc2UgPSBudWxsO1xuXG4gIHRoaXMuZ2V0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0RmllbGRWYWx1ZTogX3RoaXMuZ2V0RmllbGRWYWx1ZSxcbiAgICAgIGdldEZpZWxkc1ZhbHVlOiBfdGhpcy5nZXRGaWVsZHNWYWx1ZSxcbiAgICAgIGdldEZpZWxkRXJyb3I6IF90aGlzLmdldEZpZWxkRXJyb3IsXG4gICAgICBnZXRGaWVsZHNFcnJvcjogX3RoaXMuZ2V0RmllbGRzRXJyb3IsXG4gICAgICBpc0ZpZWxkc1RvdWNoZWQ6IF90aGlzLmlzRmllbGRzVG91Y2hlZCxcbiAgICAgIGlzRmllbGRUb3VjaGVkOiBfdGhpcy5pc0ZpZWxkVG91Y2hlZCxcbiAgICAgIGlzRmllbGRWYWxpZGF0aW5nOiBfdGhpcy5pc0ZpZWxkVmFsaWRhdGluZyxcbiAgICAgIGlzRmllbGRzVmFsaWRhdGluZzogX3RoaXMuaXNGaWVsZHNWYWxpZGF0aW5nLFxuICAgICAgcmVzZXRGaWVsZHM6IF90aGlzLnJlc2V0RmllbGRzLFxuICAgICAgc2V0RmllbGRzOiBfdGhpcy5zZXRGaWVsZHMsXG4gICAgICBzZXRGaWVsZHNWYWx1ZTogX3RoaXMuc2V0RmllbGRzVmFsdWUsXG4gICAgICB2YWxpZGF0ZUZpZWxkczogX3RoaXMudmFsaWRhdGVGaWVsZHMsXG4gICAgICBzdWJtaXQ6IF90aGlzLnN1Ym1pdCxcbiAgICAgIGdldEludGVybmFsSG9va3M6IF90aGlzLmdldEludGVybmFsSG9va3NcbiAgICB9O1xuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gSW50ZXJuYWwgSG9va3MgPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB0aGlzLmdldEludGVybmFsSG9va3MgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gSE9PS19NQVJLKSB7XG4gICAgICBfdGhpcy5mb3JtSG9va2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BhdGNoOiBfdGhpcy5kaXNwYXRjaCxcbiAgICAgICAgcmVnaXN0ZXJGaWVsZDogX3RoaXMucmVnaXN0ZXJGaWVsZCxcbiAgICAgICAgdXNlU3Vic2NyaWJlOiBfdGhpcy51c2VTdWJzY3JpYmUsXG4gICAgICAgIHNldEluaXRpYWxWYWx1ZXM6IF90aGlzLnNldEluaXRpYWxWYWx1ZXMsXG4gICAgICAgIHNldENhbGxiYWNrczogX3RoaXMuc2V0Q2FsbGJhY2tzLFxuICAgICAgICBzZXRWYWxpZGF0ZU1lc3NhZ2VzOiBfdGhpcy5zZXRWYWxpZGF0ZU1lc3NhZ2VzLFxuICAgICAgICBnZXRGaWVsZHM6IF90aGlzLmdldEZpZWxkc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB3YXJuaW5nKGZhbHNlLCAnYGdldEludGVybmFsSG9va3NgIGlzIGludGVybmFsIHVzYWdlLiBTaG91bGQgbm90IGNhbGwgZGlyZWN0bHkuJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy51c2VTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJhYmxlKSB7XG4gICAgX3RoaXMuc3Vic2NyaWJhYmxlID0gc3Vic2NyaWJhYmxlO1xuICB9O1xuICAvKipcbiAgICogRmlyc3QgdGltZSBgc2V0SW5pdGlhbFZhbHVlc2Agc2hvdWxkIHVwZGF0ZSBzdG9yZSB3aXRoIGluaXRpYWwgdmFsdWVcbiAgICovXG5cblxuICB0aGlzLnNldEluaXRpYWxWYWx1ZXMgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgaW5pdCkge1xuICAgIF90aGlzLmluaXRpYWxWYWx1ZXMgPSBpbml0aWFsVmFsdWVzIHx8IHt9O1xuXG4gICAgaWYgKGluaXQpIHtcbiAgICAgIF90aGlzLnN0b3JlID0gc2V0VmFsdWVzKHt9LCBpbml0aWFsVmFsdWVzLCBfdGhpcy5zdG9yZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZ2V0SW5pdGlhbFZhbHVlID0gZnVuY3Rpb24gKG5hbWVQYXRoKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlKF90aGlzLmluaXRpYWxWYWx1ZXMsIG5hbWVQYXRoKTtcbiAgfTtcblxuICB0aGlzLnNldENhbGxiYWNrcyA9IGZ1bmN0aW9uIChjYWxsYmFja3MpIHtcbiAgICBfdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gIH07XG5cbiAgdGhpcy5zZXRWYWxpZGF0ZU1lc3NhZ2VzID0gZnVuY3Rpb24gKHZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICBfdGhpcy52YWxpZGF0ZU1lc3NhZ2VzID0gdmFsaWRhdGVNZXNzYWdlcztcbiAgfTtcblxuICB0aGlzLndhcm5pbmdVbmhvb2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhX3RoaXMuZm9ybUhvb2tlZCkge1xuICAgICAgd2FybmluZyhmYWxzZSwgJ0luc3RhbmNlIGNyZWF0ZWQgYnkgYHVzZUZvcm1gIGlzIG5vdCBjb25uZWN0IHRvIGFueSBGb3JtIGVsZW1lbnQuIEZvcmdldCB0byBwYXNzIGBmb3JtYCBwcm9wPycpO1xuICAgIH1cbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGaWVsZHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBHZXQgcmVnaXN0ZXJlZCBmaWVsZCBlbnRpdGllcy5cbiAgICogQHBhcmFtIHB1cmUgT25seSByZXR1cm4gZmllbGQgd2hpY2ggaGFzIGEgYG5hbWVgLiBEZWZhdWx0OiBmYWxzZVxuICAgKi9cblxuXG4gIHRoaXMuZ2V0RmllbGRFbnRpdGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICBpZiAoIXB1cmUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5maWVsZEVudGl0aWVzO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcy5maWVsZEVudGl0aWVzLmZpbHRlcihmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIHJldHVybiBmaWVsZC5nZXROYW1lUGF0aCgpLmxlbmd0aDtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkc01hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgdmFyIGNhY2hlID0gbmV3IE5hbWVNYXAoKTtcblxuICAgIF90aGlzLmdldEZpZWxkRW50aXRpZXMocHVyZSkuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIHZhciBuYW1lUGF0aCA9IGZpZWxkLmdldE5hbWVQYXRoKCk7XG4gICAgICBjYWNoZS5zZXQobmFtZVBhdGgsIGZpZWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkRW50aXRpZXNGb3JOYW1lUGF0aExpc3QgPSBmdW5jdGlvbiAobmFtZUxpc3QpIHtcbiAgICBpZiAoIW5hbWVMaXN0KSB7XG4gICAgICByZXR1cm4gX3RoaXMuZ2V0RmllbGRFbnRpdGllcyh0cnVlKTtcbiAgICB9XG5cbiAgICB2YXIgY2FjaGUgPSBfdGhpcy5nZXRGaWVsZHNNYXAodHJ1ZSk7XG5cbiAgICByZXR1cm4gbmFtZUxpc3QubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgbmFtZVBhdGggPSBnZXROYW1lUGF0aChuYW1lKTtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQobmFtZVBhdGgpIHx8IHtcbiAgICAgICAgSU5WQUxJREFURV9OQU1FX1BBVEg6IGdldE5hbWVQYXRoKG5hbWUpXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuZ2V0RmllbGRzVmFsdWUgPSBmdW5jdGlvbiAobmFtZUxpc3QsIGZpbHRlckZ1bmMpIHtcbiAgICBfdGhpcy53YXJuaW5nVW5ob29rZWQoKTtcblxuICAgIGlmIChuYW1lTGlzdCA9PT0gdHJ1ZSAmJiAhZmlsdGVyRnVuYykge1xuICAgICAgcmV0dXJuIF90aGlzLnN0b3JlO1xuICAgIH1cblxuICAgIHZhciBmaWVsZEVudGl0aWVzID0gX3RoaXMuZ2V0RmllbGRFbnRpdGllc0Zvck5hbWVQYXRoTGlzdChBcnJheS5pc0FycmF5KG5hbWVMaXN0KSA/IG5hbWVMaXN0IDogbnVsbCk7XG5cbiAgICB2YXIgZmlsdGVyZWROYW1lTGlzdCA9IFtdO1xuICAgIGZpZWxkRW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgICB2YXIgbmFtZVBhdGggPSAnSU5WQUxJREFURV9OQU1FX1BBVEgnIGluIGVudGl0eSA/IGVudGl0eS5JTlZBTElEQVRFX05BTUVfUEFUSCA6IGVudGl0eS5nZXROYW1lUGF0aCgpO1xuXG4gICAgICBpZiAoIWZpbHRlckZ1bmMpIHtcbiAgICAgICAgZmlsdGVyZWROYW1lTGlzdC5wdXNoKG5hbWVQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtZXRhID0gJ2dldE1ldGEnIGluIGVudGl0eSA/IGVudGl0eS5nZXRNZXRhKCkgOiBudWxsO1xuXG4gICAgICAgIGlmIChmaWx0ZXJGdW5jKG1ldGEpKSB7XG4gICAgICAgICAgZmlsdGVyZWROYW1lTGlzdC5wdXNoKG5hbWVQYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjbG9uZUJ5TmFtZVBhdGhMaXN0KF90aGlzLnN0b3JlLCBmaWx0ZXJlZE5hbWVMaXN0Lm1hcChnZXROYW1lUGF0aCkpO1xuICB9O1xuXG4gIHRoaXMuZ2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICB2YXIgbmFtZVBhdGggPSBnZXROYW1lUGF0aChuYW1lKTtcbiAgICByZXR1cm4gZ2V0VmFsdWUoX3RoaXMuc3RvcmUsIG5hbWVQYXRoKTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkc0Vycm9yID0gZnVuY3Rpb24gKG5hbWVMaXN0KSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICB2YXIgZmllbGRFbnRpdGllcyA9IF90aGlzLmdldEZpZWxkRW50aXRpZXNGb3JOYW1lUGF0aExpc3QobmFtZUxpc3QpO1xuXG4gICAgcmV0dXJuIGZpZWxkRW50aXRpZXMubWFwKGZ1bmN0aW9uIChlbnRpdHksIGluZGV4KSB7XG4gICAgICBpZiAoZW50aXR5ICYmICEoJ0lOVkFMSURBVEVfTkFNRV9QQVRIJyBpbiBlbnRpdHkpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogZW50aXR5LmdldE5hbWVQYXRoKCksXG4gICAgICAgICAgZXJyb3JzOiBlbnRpdHkuZ2V0RXJyb3JzKClcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZ2V0TmFtZVBhdGgobmFtZUxpc3RbaW5kZXhdKSxcbiAgICAgICAgZXJyb3JzOiBbXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkRXJyb3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgdmFyIG5hbWVQYXRoID0gZ2V0TmFtZVBhdGgobmFtZSk7XG5cbiAgICB2YXIgZmllbGRFcnJvciA9IF90aGlzLmdldEZpZWxkc0Vycm9yKFtuYW1lUGF0aF0pWzBdO1xuXG4gICAgcmV0dXJuIGZpZWxkRXJyb3IuZXJyb3JzO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZHNUb3VjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmcwID0gYXJnc1swXSxcbiAgICAgICAgYXJnMSA9IGFyZ3NbMV07XG4gICAgdmFyIG5hbWVQYXRoTGlzdDtcbiAgICB2YXIgaXNBbGxGaWVsZHNUb3VjaGVkID0gZmFsc2U7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVQYXRoTGlzdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnMCkpIHtcbiAgICAgICAgbmFtZVBhdGhMaXN0ID0gYXJnMC5tYXAoZ2V0TmFtZVBhdGgpO1xuICAgICAgICBpc0FsbEZpZWxkc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWVQYXRoTGlzdCA9IG51bGw7XG4gICAgICAgIGlzQWxsRmllbGRzVG91Y2hlZCA9IGFyZzA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWVQYXRoTGlzdCA9IGFyZzAubWFwKGdldE5hbWVQYXRoKTtcbiAgICAgIGlzQWxsRmllbGRzVG91Y2hlZCA9IGFyZzE7XG4gICAgfVxuXG4gICAgdmFyIHRlc3RUb3VjaGVkID0gZnVuY3Rpb24gdGVzdFRvdWNoZWQoZmllbGQpIHtcbiAgICAgIC8vIE5vdCBwcm92aWRlIGBuYW1lTGlzdGAgd2lsbCBjaGVjayBhbGwgdGhlIGZpZWxkc1xuICAgICAgaWYgKCFuYW1lUGF0aExpc3QpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmlzRmllbGRUb3VjaGVkKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWVsZE5hbWVQYXRoID0gZmllbGQuZ2V0TmFtZVBhdGgoKTtcblxuICAgICAgaWYgKGNvbnRhaW5zTmFtZVBhdGgobmFtZVBhdGhMaXN0LCBmaWVsZE5hbWVQYXRoKSkge1xuICAgICAgICByZXR1cm4gZmllbGQuaXNGaWVsZFRvdWNoZWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzQWxsRmllbGRzVG91Y2hlZDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGlzQWxsRmllbGRzVG91Y2hlZCA/IF90aGlzLmdldEZpZWxkRW50aXRpZXModHJ1ZSkuZXZlcnkodGVzdFRvdWNoZWQpIDogX3RoaXMuZ2V0RmllbGRFbnRpdGllcyh0cnVlKS5zb21lKHRlc3RUb3VjaGVkKTtcbiAgfTtcblxuICB0aGlzLmlzRmllbGRUb3VjaGVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfdGhpcy53YXJuaW5nVW5ob29rZWQoKTtcblxuICAgIHJldHVybiBfdGhpcy5pc0ZpZWxkc1RvdWNoZWQoW25hbWVdKTtcbiAgfTtcblxuICB0aGlzLmlzRmllbGRzVmFsaWRhdGluZyA9IGZ1bmN0aW9uIChuYW1lTGlzdCkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgdmFyIGZpZWxkRW50aXRpZXMgPSBfdGhpcy5nZXRGaWVsZEVudGl0aWVzKCk7XG5cbiAgICBpZiAoIW5hbWVMaXN0KSB7XG4gICAgICByZXR1cm4gZmllbGRFbnRpdGllcy5zb21lKGZ1bmN0aW9uICh0ZXN0RmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRlc3RGaWVsZC5pc0ZpZWxkVmFsaWRhdGluZygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG5hbWVQYXRoTGlzdCA9IG5hbWVMaXN0Lm1hcChnZXROYW1lUGF0aCk7XG4gICAgcmV0dXJuIGZpZWxkRW50aXRpZXMuc29tZShmdW5jdGlvbiAodGVzdEZpZWxkKSB7XG4gICAgICB2YXIgZmllbGROYW1lUGF0aCA9IHRlc3RGaWVsZC5nZXROYW1lUGF0aCgpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5zTmFtZVBhdGgobmFtZVBhdGhMaXN0LCBmaWVsZE5hbWVQYXRoKSAmJiB0ZXN0RmllbGQuaXNGaWVsZFZhbGlkYXRpbmcoKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmlzRmllbGRWYWxpZGF0aW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfdGhpcy53YXJuaW5nVW5ob29rZWQoKTtcblxuICAgIHJldHVybiBfdGhpcy5pc0ZpZWxkc1ZhbGlkYXRpbmcoW25hbWVdKTtcbiAgfTtcblxuICB0aGlzLnJlc2V0RmllbGRzID0gZnVuY3Rpb24gKG5hbWVMaXN0KSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICB2YXIgcHJldlN0b3JlID0gX3RoaXMuc3RvcmU7XG5cbiAgICBpZiAoIW5hbWVMaXN0KSB7XG4gICAgICBfdGhpcy5zdG9yZSA9IHNldFZhbHVlcyh7fSwgX3RoaXMuaW5pdGlhbFZhbHVlcyk7XG5cbiAgICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhwcmV2U3RvcmUsIG51bGwsIHtcbiAgICAgICAgdHlwZTogJ3Jlc2V0J1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlc2V0IGJ5IGBuYW1lTGlzdGBcblxuXG4gICAgdmFyIG5hbWVQYXRoTGlzdCA9IG5hbWVMaXN0Lm1hcChnZXROYW1lUGF0aCk7XG4gICAgbmFtZVBhdGhMaXN0LmZvckVhY2goZnVuY3Rpb24gKG5hbWVQYXRoKSB7XG4gICAgICB2YXIgaW5pdGlhbFZhbHVlID0gX3RoaXMuZ2V0SW5pdGlhbFZhbHVlKG5hbWVQYXRoKTtcblxuICAgICAgX3RoaXMuc3RvcmUgPSBzZXRWYWx1ZShfdGhpcy5zdG9yZSwgbmFtZVBhdGgsIGluaXRpYWxWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5ub3RpZnlPYnNlcnZlcnMocHJldlN0b3JlLCBuYW1lUGF0aExpc3QsIHtcbiAgICAgIHR5cGU6ICdyZXNldCdcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnNldEZpZWxkcyA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgICBfdGhpcy53YXJuaW5nVW5ob29rZWQoKTtcblxuICAgIHZhciBwcmV2U3RvcmUgPSBfdGhpcy5zdG9yZTtcbiAgICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGREYXRhKSB7XG4gICAgICB2YXIgbmFtZSA9IGZpZWxkRGF0YS5uYW1lLFxuICAgICAgICAgIGVycm9ycyA9IGZpZWxkRGF0YS5lcnJvcnMsXG4gICAgICAgICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhmaWVsZERhdGEsIFtcIm5hbWVcIiwgXCJlcnJvcnNcIl0pO1xuXG4gICAgICB2YXIgbmFtZVBhdGggPSBnZXROYW1lUGF0aChuYW1lKTsgLy8gVmFsdWVcblxuICAgICAgaWYgKCd2YWx1ZScgaW4gZGF0YSkge1xuICAgICAgICBfdGhpcy5zdG9yZSA9IHNldFZhbHVlKF90aGlzLnN0b3JlLCBuYW1lUGF0aCwgZGF0YS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhwcmV2U3RvcmUsIFtuYW1lUGF0aF0sIHtcbiAgICAgICAgdHlwZTogJ3NldEZpZWxkJyxcbiAgICAgICAgZGF0YTogZmllbGREYXRhXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMuZ2V0RmllbGRFbnRpdGllcyh0cnVlKS5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICB2YXIgbmFtZVBhdGggPSBmaWVsZC5nZXROYW1lUGF0aCgpO1xuICAgICAgdmFyIG1ldGEgPSBmaWVsZC5nZXRNZXRhKCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgbWV0YSwge1xuICAgICAgICBuYW1lOiBuYW1lUGF0aCxcbiAgICAgICAgdmFsdWU6IF90aGlzLmdldEZpZWxkVmFsdWUobmFtZVBhdGgpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IE9ic2VydmVyID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdGhpcy5yZWdpc3RlckZpZWxkID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICAgIF90aGlzLmZpZWxkRW50aXRpZXMucHVzaChlbnRpdHkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmZpZWxkRW50aXRpZXMgPSBfdGhpcy5maWVsZEVudGl0aWVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gZW50aXR5O1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3VwZGF0ZVZhbHVlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBuYW1lUGF0aCA9IGFjdGlvbi5uYW1lUGF0aCxcbiAgICAgICAgICAgICAgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cbiAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShuYW1lUGF0aCwgdmFsdWUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAndmFsaWRhdGVGaWVsZCc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgX25hbWVQYXRoID0gYWN0aW9uLm5hbWVQYXRoLFxuICAgICAgICAgICAgICB0cmlnZ2VyTmFtZSA9IGFjdGlvbi50cmlnZ2VyTmFtZTtcblxuICAgICAgICAgIF90aGlzLnZhbGlkYXRlRmllbGRzKFtfbmFtZVBhdGhdLCB7XG4gICAgICAgICAgICB0cmlnZ2VyTmFtZTogdHJpZ2dlck5hbWVcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IC8vIEN1cnJlbnRseSB3ZSBkb24ndCBoYXZlIG90aGVyIGFjdGlvbi4gRG8gbm90aGluZy5cblxuICAgIH1cbiAgfTtcblxuICB0aGlzLm5vdGlmeU9ic2VydmVycyA9IGZ1bmN0aW9uIChwcmV2U3RvcmUsIG5hbWVQYXRoTGlzdCwgaW5mbykge1xuICAgIGlmIChfdGhpcy5zdWJzY3JpYmFibGUpIHtcbiAgICAgIF90aGlzLmdldEZpZWxkRW50aXRpZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBvblN0b3JlQ2hhbmdlID0gX3JlZi5vblN0b3JlQ2hhbmdlO1xuICAgICAgICBvblN0b3JlQ2hhbmdlKHByZXZTdG9yZSwgbmFtZVBhdGhMaXN0LCBpbmZvKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5mb3JjZVJvb3RVcGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy51cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBuYW1lUGF0aCA9IGdldE5hbWVQYXRoKG5hbWUpO1xuICAgIHZhciBwcmV2U3RvcmUgPSBfdGhpcy5zdG9yZTtcbiAgICBfdGhpcy5zdG9yZSA9IHNldFZhbHVlKF90aGlzLnN0b3JlLCBuYW1lUGF0aCwgdmFsdWUpO1xuXG4gICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKHByZXZTdG9yZSwgW25hbWVQYXRoXSwge1xuICAgICAgdHlwZTogJ3ZhbHVlVXBkYXRlJyxcbiAgICAgIHNvdXJjZTogJ2ludGVybmFsJ1xuICAgIH0pOyAvLyBOb3RpZnkgZGVwZW5kZW5jaWVzIGNoaWxkcmVuIHdpdGggcGFyZW50IHVwZGF0ZVxuXG5cbiAgICB2YXIgY2hpbGRyZW5GaWVsZHMgPSBfdGhpcy5nZXREZXBlbmRlbmN5Q2hpbGRyZW5GaWVsZHMobmFtZVBhdGgpO1xuXG4gICAgX3RoaXMudmFsaWRhdGVGaWVsZHMoY2hpbGRyZW5GaWVsZHMpO1xuXG4gICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKHByZXZTdG9yZSwgY2hpbGRyZW5GaWVsZHMsIHtcbiAgICAgIHR5cGU6ICdkZXBlbmRlbmNpZXNVcGRhdGUnLFxuICAgICAgcmVsYXRlZEZpZWxkczogW25hbWVQYXRoXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNoaWxkcmVuRmllbGRzKSlcbiAgICB9KTsgLy8gdHJpZ2dlciBjYWxsYmFjayBmdW5jdGlvblxuXG5cbiAgICB2YXIgb25WYWx1ZXNDaGFuZ2UgPSBfdGhpcy5jYWxsYmFja3Mub25WYWx1ZXNDaGFuZ2U7XG5cbiAgICBpZiAob25WYWx1ZXNDaGFuZ2UpIHtcbiAgICAgIHZhciBjaGFuZ2VkVmFsdWVzID0gY2xvbmVCeU5hbWVQYXRoTGlzdChfdGhpcy5zdG9yZSwgW25hbWVQYXRoXSk7XG4gICAgICBvblZhbHVlc0NoYW5nZShjaGFuZ2VkVmFsdWVzLCBfdGhpcy5zdG9yZSk7XG4gICAgfVxuXG4gICAgX3RoaXMudHJpZ2dlck9uRmllbGRzQ2hhbmdlKFtuYW1lUGF0aF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjaGlsZHJlbkZpZWxkcykpKTtcbiAgfTsgLy8gTGV0IGFsbCBjaGlsZCBGaWVsZCBnZXQgdXBkYXRlLlxuXG5cbiAgdGhpcy5zZXRGaWVsZHNWYWx1ZSA9IGZ1bmN0aW9uIChzdG9yZSkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgdmFyIHByZXZTdG9yZSA9IF90aGlzLnN0b3JlO1xuXG4gICAgaWYgKHN0b3JlKSB7XG4gICAgICBfdGhpcy5zdG9yZSA9IHNldFZhbHVlcyhfdGhpcy5zdG9yZSwgc3RvcmUpO1xuICAgIH1cblxuICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhwcmV2U3RvcmUsIG51bGwsIHtcbiAgICAgIHR5cGU6ICd2YWx1ZVVwZGF0ZScsXG4gICAgICBzb3VyY2U6ICdleHRlcm5hbCdcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldERlcGVuZGVuY3lDaGlsZHJlbkZpZWxkcyA9IGZ1bmN0aW9uIChyb290TmFtZVBhdGgpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBuZXcgU2V0KCk7XG4gICAgdmFyIGNoaWxkcmVuRmllbGRzID0gW107XG4gICAgdmFyIGRlcGVuZGVuY2llczJmaWVsZHMgPSBuZXcgTmFtZU1hcCgpO1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIG1hcHNcbiAgICAgKiBDYW4gdXNlIGNhY2hlIHRvIHNhdmUgcGVyZiBpZiB1c2VyIHJlcG9ydCBwZXJmb3JtYW5jZSBpc3N1ZSB3aXRoIHRoaXNcbiAgICAgKi9cblxuICAgIF90aGlzLmdldEZpZWxkRW50aXRpZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IGZpZWxkLnByb3BzLmRlcGVuZGVuY2llcztcbiAgICAgIChkZXBlbmRlbmNpZXMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgdmFyIGRlcGVuZGVuY3lOYW1lUGF0aCA9IGdldE5hbWVQYXRoKGRlcGVuZGVuY3kpO1xuICAgICAgICBkZXBlbmRlbmNpZXMyZmllbGRzLnVwZGF0ZShkZXBlbmRlbmN5TmFtZVBhdGgsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZmllbGRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBuZXcgU2V0KCk7XG4gICAgICAgICAgZmllbGRzLmFkZChmaWVsZCk7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBmaWxsQ2hpbGRyZW4gPSBmdW5jdGlvbiBmaWxsQ2hpbGRyZW4obmFtZVBhdGgpIHtcbiAgICAgIHZhciBmaWVsZHMgPSBkZXBlbmRlbmNpZXMyZmllbGRzLmdldChuYW1lUGF0aCkgfHwgbmV3IFNldCgpO1xuICAgICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIGlmICghY2hpbGRyZW4uaGFzKGZpZWxkKSkge1xuICAgICAgICAgIGNoaWxkcmVuLmFkZChmaWVsZCk7XG4gICAgICAgICAgdmFyIGZpZWxkTmFtZVBhdGggPSBmaWVsZC5nZXROYW1lUGF0aCgpO1xuXG4gICAgICAgICAgaWYgKGZpZWxkLmlzRmllbGRUb3VjaGVkKCkgJiYgZmllbGROYW1lUGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuRmllbGRzLnB1c2goZmllbGROYW1lUGF0aCk7XG4gICAgICAgICAgICBmaWxsQ2hpbGRyZW4oZmllbGROYW1lUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZmlsbENoaWxkcmVuKHJvb3ROYW1lUGF0aCk7XG4gICAgcmV0dXJuIGNoaWxkcmVuRmllbGRzO1xuICB9O1xuXG4gIHRoaXMudHJpZ2dlck9uRmllbGRzQ2hhbmdlID0gZnVuY3Rpb24gKG5hbWVQYXRoTGlzdCkge1xuICAgIHZhciBvbkZpZWxkc0NoYW5nZSA9IF90aGlzLmNhbGxiYWNrcy5vbkZpZWxkc0NoYW5nZTtcblxuICAgIGlmIChvbkZpZWxkc0NoYW5nZSkge1xuICAgICAgdmFyIGZpZWxkcyA9IF90aGlzLmdldEZpZWxkcygpO1xuXG4gICAgICB2YXIgY2hhbmdlZEZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBmaWVsZE5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICByZXR1cm4gY29udGFpbnNOYW1lUGF0aChuYW1lUGF0aExpc3QsIGZpZWxkTmFtZSk7XG4gICAgICB9KTtcbiAgICAgIG9uRmllbGRzQ2hhbmdlKGNoYW5nZWRGaWVsZHMsIGZpZWxkcyk7XG4gICAgfVxuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gVmFsaWRhdGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB0aGlzLnZhbGlkYXRlRmllbGRzID0gZnVuY3Rpb24gKG5hbWVMaXN0LCBvcHRpb25zKSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICB2YXIgcHJvdmlkZU5hbWVMaXN0ID0gISFuYW1lTGlzdDtcbiAgICB2YXIgbmFtZVBhdGhMaXN0ID0gcHJvdmlkZU5hbWVMaXN0ID8gbmFtZUxpc3QubWFwKGdldE5hbWVQYXRoKSA6IFtdOyAvLyBDb2xsZWN0IHJlc3VsdCBpbiBwcm9taXNlIGxpc3RcblxuICAgIHZhciBwcm9taXNlTGlzdCA9IFtdO1xuXG4gICAgX3RoaXMuZ2V0RmllbGRFbnRpdGllcyh0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgLy8gQWRkIGZpZWxkIGlmIG5vdCBwcm92aWRlIGBuYW1lTGlzdGBcbiAgICAgIGlmICghcHJvdmlkZU5hbWVMaXN0KSB7XG4gICAgICAgIG5hbWVQYXRoTGlzdC5wdXNoKGZpZWxkLmdldE5hbWVQYXRoKCkpO1xuICAgICAgfSAvLyBTa2lwIGlmIHdpdGhvdXQgcnVsZVxuXG5cbiAgICAgIGlmICghZmllbGQucHJvcHMucnVsZXMgfHwgIWZpZWxkLnByb3BzLnJ1bGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWVsZE5hbWVQYXRoID0gZmllbGQuZ2V0TmFtZVBhdGgoKTsgLy8gQWRkIGZpZWxkIHZhbGlkYXRlIHJ1bGUgaW4gdG8gcHJvbWlzZSBsaXN0XG5cbiAgICAgIGlmICghcHJvdmlkZU5hbWVMaXN0IHx8IGNvbnRhaW5zTmFtZVBhdGgobmFtZVBhdGhMaXN0LCBmaWVsZE5hbWVQYXRoKSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGZpZWxkLnZhbGlkYXRlUnVsZXMoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgdmFsaWRhdGVNZXNzYWdlczogX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMsIHt9LCBfdGhpcy52YWxpZGF0ZU1lc3NhZ2VzKVxuICAgICAgICB9LCBvcHRpb25zKSk7IC8vIFdyYXAgcHJvbWlzZSB3aXRoIGZpZWxkXG5cbiAgICAgICAgcHJvbWlzZUxpc3QucHVzaChwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBmaWVsZE5hbWVQYXRoLFxuICAgICAgICAgICAgZXJyb3JzOiBbXVxuICAgICAgICAgIH07XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgbmFtZTogZmllbGROYW1lUGF0aCxcbiAgICAgICAgICAgIGVycm9yczogZXJyb3JzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBzdW1tYXJ5UHJvbWlzZSA9IGFsbFByb21pc2VGaW5pc2gocHJvbWlzZUxpc3QpO1xuICAgIF90aGlzLmxhc3RWYWxpZGF0ZVByb21pc2UgPSBzdW1tYXJ5UHJvbWlzZTsgLy8gTm90aWZ5IGZpZWxkcyB3aXRoIHJ1bGUgdGhhdCB2YWxpZGF0ZSBoYXMgZmluaXNoZWQgYW5kIG5lZWQgdXBkYXRlXG5cbiAgICBzdW1tYXJ5UHJvbWlzZS5jYXRjaChmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgdmFyIHJlc3VsdE5hbWVQYXRoTGlzdCA9IHJlc3VsdHMubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWU7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhfdGhpcy5zdG9yZSwgcmVzdWx0TmFtZVBhdGhMaXN0LCB7XG4gICAgICAgIHR5cGU6ICd2YWxpZGF0ZUZpbmlzaCdcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy50cmlnZ2VyT25GaWVsZHNDaGFuZ2UocmVzdWx0TmFtZVBhdGhMaXN0KTtcbiAgICB9KTtcbiAgICB2YXIgcmV0dXJuUHJvbWlzZSA9IHN1bW1hcnlQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmxhc3RWYWxpZGF0ZVByb21pc2UgPT09IHN1bW1hcnlQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX3RoaXMuZ2V0RmllbGRzVmFsdWUobmFtZVBhdGhMaXN0KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChbXSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIHZhciBlcnJvckxpc3QgPSByZXN1bHRzLmZpbHRlcihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LmVycm9ycy5sZW5ndGg7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIHZhbHVlczogX3RoaXMuZ2V0RmllbGRzVmFsdWUobmFtZVBhdGhMaXN0KSxcbiAgICAgICAgZXJyb3JGaWVsZHM6IGVycm9yTGlzdCxcbiAgICAgICAgb3V0T2ZEYXRlOiBfdGhpcy5sYXN0VmFsaWRhdGVQcm9taXNlICE9PSBzdW1tYXJ5UHJvbWlzZVxuICAgICAgfSk7XG4gICAgfSk7IC8vIERvIG5vdCB0aHJvdyBpbiBjb25zb2xlXG5cbiAgICByZXR1cm5Qcm9taXNlLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuUHJvbWlzZTtcbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTdWJtaXQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdGhpcy5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICBfdGhpcy52YWxpZGF0ZUZpZWxkcygpLnRoZW4oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgdmFyIG9uRmluaXNoID0gX3RoaXMuY2FsbGJhY2tzLm9uRmluaXNoO1xuXG4gICAgICBpZiAob25GaW5pc2gpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvbkZpbmlzaCh2YWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBTaG91bGQgcHJpbnQgZXJyb3IgaWYgdXNlciBgb25GaW5pc2hgIGNhbGxiYWNrIGZhaWxlZFxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25GaW5pc2hGYWlsZWQgPSBfdGhpcy5jYWxsYmFja3Mub25GaW5pc2hGYWlsZWQ7XG5cbiAgICAgIGlmIChvbkZpbmlzaEZhaWxlZCkge1xuICAgICAgICBvbkZpbmlzaEZhaWxlZChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmZvcmNlUm9vdFVwZGF0ZSA9IGZvcmNlUm9vdFVwZGF0ZTtcbn07XG5cbmZ1bmN0aW9uIHVzZUZvcm0oZm9ybSkge1xuICB2YXIgZm9ybVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgaWYgKCFmb3JtUmVmLmN1cnJlbnQpIHtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgZm9ybVJlZi5jdXJyZW50ID0gZm9ybTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IEZvcm1TdG9yZSBpZiBub3QgcHJvdmlkZWRcbiAgICAgIHZhciBmb3JjZVJlUmVuZGVyID0gZnVuY3Rpb24gZm9yY2VSZVJlbmRlcigpIHtcbiAgICAgICAgZm9yY2VVcGRhdGUoe30pO1xuICAgICAgfTtcblxuICAgICAgdmFyIGZvcm1TdG9yZSA9IG5ldyBGb3JtU3RvcmUoZm9yY2VSZVJlbmRlcik7XG4gICAgICBmb3JtUmVmLmN1cnJlbnQgPSBmb3JtU3RvcmUuZ2V0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbZm9ybVJlZi5jdXJyZW50XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybTsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCB7IG1hdGNoTmFtZVBhdGggfSBmcm9tICcuL3ZhbHVlVXRpbCc7XG4vKipcbiAqIE5hbWVNYXAgbGlrZSBhIGBNYXBgIGJ1dCBhY2NlcHRzIGBzdHJpbmdbXWAgYXMga2V5LlxuICovXG5cbnZhciBOYW1lTWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTmFtZU1hcCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmFtZU1hcCk7XG5cbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOYW1lTWFwLCBbe1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMubGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoTmFtZVBhdGgoaXRlbS5rZXksIGtleSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxpc3QucHVzaCh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBtYXRjaE5hbWVQYXRoKGl0ZW0ua2V5LCBrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShrZXksIHVwZGF0ZXIpIHtcbiAgICAgIHZhciBvcmlnaW4gPSB0aGlzLmdldChrZXkpO1xuICAgICAgdmFyIG5leHQgPSB1cGRhdGVyKG9yaWdpbik7XG5cbiAgICAgIGlmICghbmV4dCkge1xuICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBuZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVsZXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWxldGUoa2V5KSB7XG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAhbWF0Y2hOYW1lUGF0aChpdGVtLmtleSwga2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFwKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0Lm1hcChjYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvSlNPTlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICB2YXIganNvbiA9IHt9O1xuICAgICAgdGhpcy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxuICAgICAgICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICAgICAgICBqc29uW2tleS5qb2luKCcuJyldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTmFtZU1hcDtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgTmFtZU1hcDsiLCJleHBvcnQgZnVuY3Rpb24gYWxsUHJvbWlzZUZpbmlzaChwcm9taXNlTGlzdCkge1xuICB2YXIgaGFzRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNvdW50ID0gcHJvbWlzZUxpc3QubGVuZ3RoO1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gIGlmICghcHJvbWlzZUxpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHByb21pc2VMaXN0LmZvckVhY2goZnVuY3Rpb24gKHByb21pc2UsIGluZGV4KSB7XG4gICAgICBwcm9taXNlLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgY291bnQgLT0gMTtcbiAgICAgICAgcmVzdWx0c1tpbmRleF0gPSByZXN1bHQ7XG5cbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICAgIHJlamVjdChyZXN1bHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59IiwidmFyIHR5cGVUZW1wbGF0ZSA9IFwiJyR7bmFtZX0nIGlzIG5vdCBhIHZhbGlkICR7dHlwZX1cIjtcbmV4cG9ydCB2YXIgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMgPSB7XG4gIGRlZmF1bHQ6IFwiVmFsaWRhdGlvbiBlcnJvciBvbiBmaWVsZCAnJHtuYW1lfSdcIixcbiAgcmVxdWlyZWQ6IFwiJyR7bmFtZX0nIGlzIHJlcXVpcmVkXCIsXG4gIGVudW06IFwiJyR7bmFtZX0nIG11c3QgYmUgb25lIG9mIFske2VudW19XVwiLFxuICB3aGl0ZXNwYWNlOiBcIicke25hbWV9JyBjYW5ub3QgYmUgZW1wdHlcIixcbiAgZGF0ZToge1xuICAgIGZvcm1hdDogXCInJHtuYW1lfScgaXMgaW52YWxpZCBmb3IgZm9ybWF0IGRhdGVcIixcbiAgICBwYXJzZTogXCInJHtuYW1lfScgY291bGQgbm90IGJlIHBhcnNlZCBhcyBkYXRlXCIsXG4gICAgaW52YWxpZDogXCInJHtuYW1lfScgaXMgaW52YWxpZCBkYXRlXCJcbiAgfSxcbiAgdHlwZXM6IHtcbiAgICBzdHJpbmc6IHR5cGVUZW1wbGF0ZSxcbiAgICBtZXRob2Q6IHR5cGVUZW1wbGF0ZSxcbiAgICBhcnJheTogdHlwZVRlbXBsYXRlLFxuICAgIG9iamVjdDogdHlwZVRlbXBsYXRlLFxuICAgIG51bWJlcjogdHlwZVRlbXBsYXRlLFxuICAgIGRhdGU6IHR5cGVUZW1wbGF0ZSxcbiAgICBib29sZWFuOiB0eXBlVGVtcGxhdGUsXG4gICAgaW50ZWdlcjogdHlwZVRlbXBsYXRlLFxuICAgIGZsb2F0OiB0eXBlVGVtcGxhdGUsXG4gICAgcmVnZXhwOiB0eXBlVGVtcGxhdGUsXG4gICAgZW1haWw6IHR5cGVUZW1wbGF0ZSxcbiAgICB1cmw6IHR5cGVUZW1wbGF0ZSxcbiAgICBoZXg6IHR5cGVUZW1wbGF0ZVxuICB9LFxuICBzdHJpbmc6IHtcbiAgICBsZW46IFwiJyR7bmFtZX0nIG11c3QgYmUgZXhhY3RseSAke2xlbn0gY2hhcmFjdGVyc1wiLFxuICAgIG1pbjogXCInJHtuYW1lfScgbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVyc1wiLFxuICAgIG1heDogXCInJHtuYW1lfScgY2Fubm90IGJlIGxvbmdlciB0aGFuICR7bWF4fSBjaGFyYWN0ZXJzXCIsXG4gICAgcmFuZ2U6IFwiJyR7bmFtZX0nIG11c3QgYmUgYmV0d2VlbiAke21pbn0gYW5kICR7bWF4fSBjaGFyYWN0ZXJzXCJcbiAgfSxcbiAgbnVtYmVyOiB7XG4gICAgbGVuOiBcIicke25hbWV9JyBtdXN0IGVxdWFsICR7bGVufVwiLFxuICAgIG1pbjogXCInJHtuYW1lfScgY2Fubm90IGJlIGxlc3MgdGhhbiAke21pbn1cIixcbiAgICBtYXg6IFwiJyR7bmFtZX0nIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gJHttYXh9XCIsXG4gICAgcmFuZ2U6IFwiJyR7bmFtZX0nIG11c3QgYmUgYmV0d2VlbiAke21pbn0gYW5kICR7bWF4fVwiXG4gIH0sXG4gIGFycmF5OiB7XG4gICAgbGVuOiBcIicke25hbWV9JyBtdXN0IGJlIGV4YWN0bHkgJHtsZW59IGluIGxlbmd0aFwiLFxuICAgIG1pbjogXCInJHtuYW1lfScgY2Fubm90IGJlIGxlc3MgdGhhbiAke21pbn0gaW4gbGVuZ3RoXCIsXG4gICAgbWF4OiBcIicke25hbWV9JyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuICR7bWF4fSBpbiBsZW5ndGhcIixcbiAgICByYW5nZTogXCInJHtuYW1lfScgbXVzdCBiZSBiZXR3ZWVuICR7bWlufSBhbmQgJHttYXh9IGluIGxlbmd0aFwiXG4gIH0sXG4gIHBhdHRlcm46IHtcbiAgICBtaXNtYXRjaDogXCInJHtuYW1lfScgZG9lcyBub3QgbWF0Y2ggcGF0dGVybiAke3BhdHRlcm59XCJcbiAgfVxufTsiLCJleHBvcnQgZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn0iLCJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3JcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmF3QXN5bmNWYWxpZGF0b3IgZnJvbSAnYXN5bmMtdmFsaWRhdG9yJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuaW1wb3J0IHsgc2V0VmFsdWVzIH0gZnJvbSAnLi92YWx1ZVV0aWwnO1xuaW1wb3J0IHsgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMgfSBmcm9tICcuL21lc3NhZ2VzJzsgLy8gUmVtb3ZlIGluY29ycmVjdCBvcmlnaW5hbCB0cyBkZWZpbmVcblxudmFyIEFzeW5jVmFsaWRhdG9yID0gUmF3QXN5bmNWYWxpZGF0b3I7XG4vKipcbiAqIFJlcGxhY2Ugd2l0aCB0ZW1wbGF0ZS5cbiAqICAgYEknbSAke25hbWV9YCArIHsgbmFtZTogJ2JhbWJvbycgfSA9IEknbSBiYW1ib29cbiAqL1xuXG5mdW5jdGlvbiByZXBsYWNlTWVzc2FnZSh0ZW1wbGF0ZSwga3YpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xcJFxce1xcdytcXH0vZywgZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBrZXkgPSBzdHIuc2xpY2UoMiwgLTEpO1xuICAgIHJldHVybiBrdltrZXldO1xuICB9KTtcbn1cbi8qKlxuICogV2UgdXNlIGBhc3luYy12YWxpZGF0b3JgIHRvIHZhbGlkYXRlIHJ1bGVzLiBTbyBoYXZlIHRvIGhvdCByZXBsYWNlIHRoZSBtZXNzYWdlIHdpdGggdmFsaWRhdG9yLlxuICogeyByZXF1aXJlZDogJyR7bmFtZX0gaXMgcmVxdWlyZWQnIH0gPT4geyByZXF1aXJlZDogKCkgPT4gJ2ZpZWxkIGlzIHJlcXVpcmVkJyB9XG4gKi9cblxuXG5mdW5jdGlvbiBjb252ZXJ0TWVzc2FnZXMobWVzc2FnZXMsIG5hbWUsIHJ1bGUpIHtcbiAgdmFyIGt2ID0gX29iamVjdFNwcmVhZCh7fSwgcnVsZSwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgZW51bTogKHJ1bGUuZW51bSB8fCBbXSkuam9pbignLCAnKVxuICB9KTtcblxuICB2YXIgcmVwbGFjZUZ1bmMgPSBmdW5jdGlvbiByZXBsYWNlRnVuYyh0ZW1wbGF0ZSwgYWRkaXRpb25hbEtWKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXBsYWNlTWVzc2FnZSh0ZW1wbGF0ZSwgX29iamVjdFNwcmVhZCh7fSwga3YsIHt9LCBhZGRpdGlvbmFsS1YpKTtcbiAgICB9O1xuICB9O1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG5cbiAgZnVuY3Rpb24gZmlsbFRlbXBsYXRlKHNvdXJjZSkge1xuICAgIHZhciB0YXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAocnVsZU5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtydWxlTmFtZV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRhcmdldFtydWxlTmFtZV0gPSByZXBsYWNlRnVuYyh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0YXJnZXRbcnVsZU5hbWVdID0ge307XG4gICAgICAgIGZpbGxUZW1wbGF0ZSh2YWx1ZSwgdGFyZ2V0W3J1bGVOYW1lXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRbcnVsZU5hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cblxuICByZXR1cm4gZmlsbFRlbXBsYXRlKHNldFZhbHVlcyh7fSwgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMsIG1lc3NhZ2VzKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUnVsZShfeCwgX3gyLCBfeDMsIF94NCkge1xuICByZXR1cm4gX3ZhbGlkYXRlUnVsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuLyoqXG4gKiBXZSB1c2UgYGFzeW5jLXZhbGlkYXRvcmAgdG8gdmFsaWRhdGUgdGhlIHZhbHVlLlxuICogQnV0IG9ubHkgY2hlY2sgb25lIHZhbHVlIGluIGEgdGltZSB0byBhdm9pZCBuYW1lUGF0aCB2YWxpZGF0ZSBpc3N1ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIF92YWxpZGF0ZVJ1bGUoKSB7XG4gIF92YWxpZGF0ZVJ1bGUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKG5hbWUsIHZhbHVlLCBydWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIGNsb25lUnVsZSwgc3ViUnVsZUZpZWxkLCB2YWxpZGF0b3IsIG1lc3NhZ2VzLCByZXN1bHQsIHN1YlJlc3VsdHM7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNsb25lUnVsZSA9IF9vYmplY3RTcHJlYWQoe30sIHJ1bGUpOyAvLyBXZSBzaG91bGQgc3BlY2lhbCBoYW5kbGUgYXJyYXkgdmFsaWRhdGVcblxuICAgICAgICAgICAgc3ViUnVsZUZpZWxkID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGNsb25lUnVsZSAmJiBjbG9uZVJ1bGUudHlwZSA9PT0gJ2FycmF5JyAmJiBjbG9uZVJ1bGUuZGVmYXVsdEZpZWxkKSB7XG4gICAgICAgICAgICAgIHN1YlJ1bGVGaWVsZCA9IGNsb25lUnVsZS5kZWZhdWx0RmllbGQ7XG4gICAgICAgICAgICAgIGRlbGV0ZSBjbG9uZVJ1bGUuZGVmYXVsdEZpZWxkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZGF0b3IgPSBuZXcgQXN5bmNWYWxpZGF0b3IoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBbY2xvbmVSdWxlXSkpO1xuICAgICAgICAgICAgbWVzc2FnZXMgPSBjb252ZXJ0TWVzc2FnZXMob3B0aW9ucy52YWxpZGF0ZU1lc3NhZ2VzLCBuYW1lLCBjbG9uZVJ1bGUpO1xuICAgICAgICAgICAgdmFsaWRhdG9yLm1lc3NhZ2VzKG1lc3NhZ2VzKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDc7XG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTA7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRvci52YWxpZGF0ZShfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIHZhbHVlKSwgX29iamVjdFNwcmVhZCh7fSwgb3B0aW9ucykpKTtcblxuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTI7XG4gICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oNyk7XG5cbiAgICAgICAgICAgIGlmIChfY29udGV4dC50MC5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbnRleHQudDAuZXJyb3JzLm1hcChmdW5jdGlvbiAoX3JlZjIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBfcmVmMi5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoLy8gV3JhcCBSZWFjdE5vZGUgd2l0aCBga2V5YFxuICAgICAgICAgICAgICAgICAgUmVhY3QuaXNWYWxpZEVsZW1lbnQobWVzc2FnZSkgPyBSZWFjdC5jbG9uZUVsZW1lbnQobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZXJyb3JfXCIuY29uY2F0KGluZGV4KVxuICAgICAgICAgICAgICAgICAgfSkgOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gW21lc3NhZ2VzLmRlZmF1bHQoKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgaWYgKCEoIXJlc3VsdC5sZW5ndGggJiYgc3ViUnVsZUZpZWxkKSkge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodmFsdWUubWFwKGZ1bmN0aW9uIChzdWJWYWx1ZSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVSdWxlKFwiXCIuY29uY2F0KG5hbWUsIFwiLlwiKS5jb25jYXQoaSksIHN1YlZhbHVlLCBzdWJSdWxlRmllbGQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHN1YlJlc3VsdHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBzdWJSZXN1bHRzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgZXJyb3JzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHByZXYpLCBfdG9Db25zdW1hYmxlQXJyYXkoZXJyb3JzKSk7XG4gICAgICAgICAgICB9LCBbXSkpO1xuXG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzdWx0KTtcblxuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbNywgMTJdXSk7XG4gIH0pKTtcbiAgcmV0dXJuIF92YWxpZGF0ZVJ1bGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUnVsZXMobmFtZVBhdGgsIHZhbHVlLCBydWxlcywgb3B0aW9ucywgdmFsaWRhdGVGaXJzdCkge1xuICB2YXIgbmFtZSA9IG5hbWVQYXRoLmpvaW4oJy4nKTsgLy8gRmlsbCBydWxlIHdpdGggY29udGV4dFxuXG4gIHZhciBmaWxsZWRSdWxlcyA9IHJ1bGVzLm1hcChmdW5jdGlvbiAoY3VycmVudFJ1bGUpIHtcbiAgICB2YXIgb3JpZ2luVmFsaWRhdG9yRnVuYyA9IGN1cnJlbnRSdWxlLnZhbGlkYXRvcjtcblxuICAgIGlmICghb3JpZ2luVmFsaWRhdG9yRnVuYykge1xuICAgICAgcmV0dXJuIGN1cnJlbnRSdWxlO1xuICAgIH1cblxuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBjdXJyZW50UnVsZSwge1xuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IocnVsZSwgdmFsLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaGFzUHJvbWlzZSA9IGZhbHNlOyAvLyBXcmFwIGNhbGxiYWNrIG9ubHkgYWNjZXB0IHdoZW4gcHJvbWlzZSBub3QgcHJvdmlkZWRcblxuICAgICAgICB2YXIgd3JhcHBlZENhbGxiYWNrID0gZnVuY3Rpb24gd3JhcHBlZENhbGxiYWNrKCkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXYWl0IGEgdGljayB0byBtYWtlIHN1cmUgcmV0dXJuIHR5cGUgaXMgYSBwcm9taXNlXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YXJuaW5nKCFoYXNQcm9taXNlLCAnWW91ciB2YWxpZGF0b3IgZnVuY3Rpb24gaGFzIGFscmVhZHkgcmV0dXJuIGEgcHJvbWlzZS4gYGNhbGxiYWNrYCB3aWxsIGJlIGlnbm9yZWQuJyk7XG5cbiAgICAgICAgICAgIGlmICghaGFzUHJvbWlzZSkge1xuICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9OyAvLyBHZXQgcHJvbWlzZVxuXG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBvcmlnaW5WYWxpZGF0b3JGdW5jKHJ1bGUsIHZhbCwgd3JhcHBlZENhbGxiYWNrKTtcbiAgICAgICAgaGFzUHJvbWlzZSA9IHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcHJvbWlzZS5jYXRjaCA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDEuIFVzZSBwcm9taXNlIGFzIHRoZSBmaXJzdCBwcmlvcml0eS5cbiAgICAgICAgICogMi4gSWYgcHJvbWlzZSBub3QgZXhpc3QsIHVzZSBjYWxsYmFjayB3aXRoIHdhcm5pbmcgaW5zdGVhZFxuICAgICAgICAgKi9cblxuICAgICAgICB3YXJuaW5nKGhhc1Byb21pc2UsICdgY2FsbGJhY2tgIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSByZXR1cm4gYSBwcm9taXNlIGluc3RlYWQuJyk7XG5cbiAgICAgICAgaWYgKGhhc1Byb21pc2UpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgcnVsZVByb21pc2VzID0gZmlsbGVkUnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlUnVsZShuYW1lLCB2YWx1ZSwgcnVsZSwgb3B0aW9ucyk7XG4gIH0pO1xuICB2YXIgc3VtbWFyeVByb21pc2UgPSAodmFsaWRhdGVGaXJzdCA/IGZpbmlzaE9uRmlyc3RGYWlsZWQocnVsZVByb21pc2VzKSA6IGZpbmlzaE9uQWxsRmFpbGVkKHJ1bGVQcm9taXNlcykpLnRoZW4oZnVuY3Rpb24gKGVycm9ycykge1xuICAgIGlmICghZXJyb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcnMpO1xuICB9KTsgLy8gSW50ZXJuYWwgY2F0Y2ggZXJyb3IgdG8gYXZvaWQgY29uc29sZSBlcnJvciBsb2cuXG5cbiAgc3VtbWFyeVByb21pc2UuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfSk7XG4gIHJldHVybiBzdW1tYXJ5UHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZmluaXNoT25BbGxGYWlsZWQoX3g1KSB7XG4gIHJldHVybiBfZmluaXNoT25BbGxGYWlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2ZpbmlzaE9uQWxsRmFpbGVkKCkge1xuICBfZmluaXNoT25BbGxGYWlsZWQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMihydWxlUHJvbWlzZXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIFByb21pc2UuYWxsKHJ1bGVQcm9taXNlcykudGhlbihmdW5jdGlvbiAoZXJyb3JzTGlzdCkge1xuICAgICAgICAgICAgICB2YXIgX3JlZjM7XG5cbiAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IChfcmVmMyA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZjMsIF90b0NvbnN1bWFibGVBcnJheShlcnJvcnNMaXN0KSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyKTtcbiAgfSkpO1xuICByZXR1cm4gX2ZpbmlzaE9uQWxsRmFpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGZpbmlzaE9uRmlyc3RGYWlsZWQoX3g2KSB7XG4gIHJldHVybiBfZmluaXNoT25GaXJzdEZhaWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZmluaXNoT25GaXJzdEZhaWxlZCgpIHtcbiAgX2ZpbmlzaE9uRmlyc3RGYWlsZWQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMyhydWxlUHJvbWlzZXMpIHtcbiAgICB2YXIgY291bnQ7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICBydWxlUHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGVycm9ycyk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gcnVsZVByb21pc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMyk7XG4gIH0pKTtcbiAgcmV0dXJuIF9maW5pc2hPbkZpcnN0RmFpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgZ2V0IGZyb20gXCJyYy11dGlsL2VzL3V0aWxzL2dldFwiO1xuaW1wb3J0IHNldCBmcm9tIFwicmMtdXRpbC9lcy91dGlscy9zZXRcIjtcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL3R5cGVVdGlsJztcbi8qKlxuICogQ29udmVydCBuYW1lIHRvIGludGVybmFsIHN1cHBvcnRlZCBmb3JtYXQuXG4gKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBrZWVwIHNpbmNlIHdlIHN0aWxsIHRoaW5raW5nIGlmIG5lZWQgc3VwcG9ydCBsaWtlIGBhLmIuY2AgZm9ybWF0LlxuICogJ2EnID0+IFsnYSddXG4gKiAxMjMgPT4gWzEyM11cbiAqIFsnYScsIDEyM10gPT4gWydhJywgMTIzXVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lUGF0aChwYXRoKSB7XG4gIHJldHVybiB0b0FycmF5KHBhdGgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKHN0b3JlLCBuYW1lUGF0aCkge1xuICB2YXIgdmFsdWUgPSBnZXQoc3RvcmUsIG5hbWVQYXRoKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlKHN0b3JlLCBuYW1lUGF0aCwgdmFsdWUpIHtcbiAgdmFyIG5ld1N0b3JlID0gc2V0KHN0b3JlLCBuYW1lUGF0aCwgdmFsdWUpO1xuICByZXR1cm4gbmV3U3RvcmU7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xvbmVCeU5hbWVQYXRoTGlzdChzdG9yZSwgbmFtZVBhdGhMaXN0KSB7XG4gIHZhciBuZXdTdG9yZSA9IHt9O1xuICBuYW1lUGF0aExpc3QuZm9yRWFjaChmdW5jdGlvbiAobmFtZVBhdGgpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShzdG9yZSwgbmFtZVBhdGgpO1xuICAgIG5ld1N0b3JlID0gc2V0VmFsdWUobmV3U3RvcmUsIG5hbWVQYXRoLCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gbmV3U3RvcmU7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnNOYW1lUGF0aChuYW1lUGF0aExpc3QsIG5hbWVQYXRoKSB7XG4gIHJldHVybiBuYW1lUGF0aExpc3QgJiYgbmFtZVBhdGhMaXN0LnNvbWUoZnVuY3Rpb24gKHBhdGgpIHtcbiAgICByZXR1cm4gbWF0Y2hOYW1lUGF0aChwYXRoLCBuYW1lUGF0aCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIF90eXBlb2Yob2JqKSA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuLyoqXG4gKiBDb3B5IHZhbHVlcyBpbnRvIHN0b3JlIGFuZCByZXR1cm4gYSBuZXcgdmFsdWVzIG9iamVjdFxuICogKHsgYTogMSwgYjogeyBjOiAyIH0gfSwgeyBhOiA0LCBiOiB7IGQ6IDUgfSB9KSA9PiB7IGE6IDQsIGI6IHsgYzogMiwgZDogNSB9IH1cbiAqL1xuXG5cbmZ1bmN0aW9uIGludGVybmFsU2V0VmFsdWVzKHN0b3JlLCB2YWx1ZXMpIHtcbiAgdmFyIG5ld1N0b3JlID0gQXJyYXkuaXNBcnJheShzdG9yZSkgPyBfdG9Db25zdW1hYmxlQXJyYXkoc3RvcmUpIDogX29iamVjdFNwcmVhZCh7fSwgc3RvcmUpO1xuXG4gIGlmICghdmFsdWVzKSB7XG4gICAgcmV0dXJuIG5ld1N0b3JlO1xuICB9XG5cbiAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcHJldlZhbHVlID0gbmV3U3RvcmVba2V5XTtcbiAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTsgLy8gSWYgYm90aCBhcmUgb2JqZWN0IChidXQgdGFyZ2V0IGlzIG5vdCBhcnJheSksIHdlIHVzZSByZWN1cnNpb24gdG8gc2V0IGRlZXAgdmFsdWVcblxuICAgIHZhciByZWN1cnNpdmUgPSBpc09iamVjdChwcmV2VmFsdWUpICYmIGlzT2JqZWN0KHZhbHVlKTtcbiAgICBuZXdTdG9yZVtrZXldID0gcmVjdXJzaXZlID8gaW50ZXJuYWxTZXRWYWx1ZXMocHJldlZhbHVlLCB2YWx1ZSB8fCB7fSkgOiB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBuZXdTdG9yZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlcyhzdG9yZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdFZhbHVlcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVzdFZhbHVlc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gcmVzdFZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGN1cnJlbnQsIG5ld1N0b3JlKSB7XG4gICAgcmV0dXJuIGludGVybmFsU2V0VmFsdWVzKGN1cnJlbnQsIG5ld1N0b3JlKTtcbiAgfSwgc3RvcmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTmFtZVBhdGgobmFtZVBhdGgsIGNoYW5nZWROYW1lUGF0aCkge1xuICBpZiAoIW5hbWVQYXRoIHx8ICFjaGFuZ2VkTmFtZVBhdGggfHwgbmFtZVBhdGgubGVuZ3RoICE9PSBjaGFuZ2VkTmFtZVBhdGgubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVQYXRoLmV2ZXJ5KGZ1bmN0aW9uIChuYW1lVW5pdCwgaSkge1xuICAgIHJldHVybiBjaGFuZ2VkTmFtZVBhdGhbaV0gPT09IG5hbWVVbml0O1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1NpbWlsYXIoc291cmNlLCB0YXJnZXQpIHtcbiAgaWYgKHNvdXJjZSA9PT0gdGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIXNvdXJjZSAmJiB0YXJnZXQgfHwgc291cmNlICYmICF0YXJnZXQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIXNvdXJjZSB8fCAhdGFyZ2V0IHx8IF90eXBlb2Yoc291cmNlKSAhPT0gJ29iamVjdCcgfHwgX3R5cGVvZih0YXJnZXQpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIHRhcmdldEtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuICB2YXIga2V5cyA9IG5ldyBTZXQoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzb3VyY2VLZXlzKSwgX3RvQ29uc3VtYWJsZUFycmF5KHRhcmdldEtleXMpKSk7XG4gIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkoa2V5cykuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIHZhciB0YXJnZXRWYWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdGFyZ2V0VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2VWYWx1ZSA9PT0gdGFyZ2V0VmFsdWU7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRHZXRWYWx1ZUZyb21FdmVudCh2YWx1ZVByb3BOYW1lKSB7XG4gIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcblxuICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIHZhbHVlUHJvcE5hbWUgaW4gZXZlbnQudGFyZ2V0KSB7XG4gICAgcmV0dXJuIGV2ZW50LnRhcmdldFt2YWx1ZVByb3BOYW1lXTtcbiAgfVxuXG4gIHJldHVybiBldmVudDtcbn1cbi8qKlxuICogTW92ZXMgYW4gYXJyYXkgaXRlbSBmcm9tIG9uZSBwb3NpdGlvbiBpbiBhbiBhcnJheSB0byBhbm90aGVyLlxuICpcbiAqIE5vdGU6IFRoaXMgaXMgYSBwdXJlIGZ1bmN0aW9uIHNvIGEgbmV3IGFycmF5IHdpbGwgYmUgcmV0dXJuZWQsIGluc3RlYWRcbiAqIG9mIGFsdGVyaW5nIHRoZSBhcnJheSBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gYXJyYXkgICAgICAgICBBcnJheSBpbiB3aGljaCB0byBtb3ZlIGFuIGl0ZW0uICAgICAgICAgKHJlcXVpcmVkKVxuICogQHBhcmFtIG1vdmVJbmRleCAgICAgVGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIG1vdmUuICAgICAgICAgIChyZXF1aXJlZClcbiAqIEBwYXJhbSB0b0luZGV4ICAgICAgIFRoZSBpbmRleCB0byBtb3ZlIGl0ZW0gYXQgbW92ZUluZGV4IHRvLiAocmVxdWlyZWQpXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmUoYXJyYXksIG1vdmVJbmRleCwgdG9JbmRleCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChtb3ZlSW5kZXggPCAwIHx8IG1vdmVJbmRleCA+PSBsZW5ndGggfHwgdG9JbmRleCA8IDAgfHwgdG9JbmRleCA+PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICB2YXIgaXRlbSA9IGFycmF5W21vdmVJbmRleF07XG4gIHZhciBkaWZmID0gbW92ZUluZGV4IC0gdG9JbmRleDtcblxuICBpZiAoZGlmZiA+IDApIHtcbiAgICAvLyBtb3ZlIGxlZnRcbiAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcnJheS5zbGljZSgwLCB0b0luZGV4KSksIFtpdGVtXSwgX3RvQ29uc3VtYWJsZUFycmF5KGFycmF5LnNsaWNlKHRvSW5kZXgsIG1vdmVJbmRleCkpLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkuc2xpY2UobW92ZUluZGV4ICsgMSwgbGVuZ3RoKSkpO1xuICB9XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgLy8gbW92ZSByaWdodFxuICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFycmF5LnNsaWNlKDAsIG1vdmVJbmRleCkpLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkuc2xpY2UobW92ZUluZGV4ICsgMSwgdG9JbmRleCArIDEpKSwgW2l0ZW1dLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkuc2xpY2UodG9JbmRleCArIDEsIGxlbmd0aCkpKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2ZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICghKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgLy8gT3B0aW9ucy5qc3hcbiAgaXRlbXNfcGVyX3BhZ2U6ICcvIHBhZ2UnLFxuICBqdW1wX3RvOiAnR28gdG8nLFxuICBqdW1wX3RvX2NvbmZpcm06ICdjb25maXJtJyxcbiAgcGFnZTogJycsXG4gIC8vIFBhZ2luYXRpb24uanN4XG4gIHByZXZfcGFnZTogJ1ByZXZpb3VzIFBhZ2UnLFxuICBuZXh0X3BhZ2U6ICdOZXh0IFBhZ2UnLFxuICBwcmV2XzU6ICdQcmV2aW91cyA1IFBhZ2VzJyxcbiAgbmV4dF81OiAnTmV4dCA1IFBhZ2VzJyxcbiAgcHJldl8zOiAnUHJldmlvdXMgMyBQYWdlcycsXG4gIG5leHRfMzogJ05leHQgMyBQYWdlcydcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBsb2NhbGUgPSB7XG4gIGxvY2FsZTogJ2VuX1VTJyxcbiAgdG9kYXk6ICdUb2RheScsXG4gIG5vdzogJ05vdycsXG4gIGJhY2tUb1RvZGF5OiAnQmFjayB0byB0b2RheScsXG4gIG9rOiAnT2snLFxuICBjbGVhcjogJ0NsZWFyJyxcbiAgbW9udGg6ICdNb250aCcsXG4gIHllYXI6ICdZZWFyJyxcbiAgdGltZVNlbGVjdDogJ3NlbGVjdCB0aW1lJyxcbiAgZGF0ZVNlbGVjdDogJ3NlbGVjdCBkYXRlJyxcbiAgd2Vla1NlbGVjdDogJ0Nob29zZSBhIHdlZWsnLFxuICBtb250aFNlbGVjdDogJ0Nob29zZSBhIG1vbnRoJyxcbiAgeWVhclNlbGVjdDogJ0Nob29zZSBhIHllYXInLFxuICBkZWNhZGVTZWxlY3Q6ICdDaG9vc2UgYSBkZWNhZGUnLFxuICB5ZWFyRm9ybWF0OiAnWVlZWScsXG4gIGRhdGVGb3JtYXQ6ICdNL0QvWVlZWScsXG4gIGRheUZvcm1hdDogJ0QnLFxuICBkYXRlVGltZUZvcm1hdDogJ00vRC9ZWVlZIEhIOm1tOnNzJyxcbiAgbW9udGhCZWZvcmVZZWFyOiB0cnVlLFxuICBwcmV2aW91c01vbnRoOiAnUHJldmlvdXMgbW9udGggKFBhZ2VVcCknLFxuICBuZXh0TW9udGg6ICdOZXh0IG1vbnRoIChQYWdlRG93biknLFxuICBwcmV2aW91c1llYXI6ICdMYXN0IHllYXIgKENvbnRyb2wgKyBsZWZ0KScsXG4gIG5leHRZZWFyOiAnTmV4dCB5ZWFyIChDb250cm9sICsgcmlnaHQpJyxcbiAgcHJldmlvdXNEZWNhZGU6ICdMYXN0IGRlY2FkZScsXG4gIG5leHREZWNhZGU6ICdOZXh0IGRlY2FkZScsXG4gIHByZXZpb3VzQ2VudHVyeTogJ0xhc3QgY2VudHVyeScsXG4gIG5leHRDZW50dXJ5OiAnTmV4dCBjZW50dXJ5J1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvY2FsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMpIHtcbiAgICAgIHJldCA9IHJldC5jb25jYXQodG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXQoZW50aXR5LCBwYXRoKSB7XG4gIHZhciBjdXJyZW50ID0gZW50aXR5O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoW2ldXTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50O1xufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gfVxuXG5mdW5jdGlvbiBfdG9BcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldChlbnRpdHksIHBhdGhzLCB2YWx1ZSkge1xuICBpZiAoIXBhdGhzLmxlbmd0aCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHZhciBfcGF0aHMgPSBfdG9BcnJheShwYXRocyksXG4gICAgICBwYXRoID0gX3BhdGhzWzBdLFxuICAgICAgcmVzdFBhdGggPSBfcGF0aHMuc2xpY2UoMSk7XG5cbiAgdmFyIGNsb25lO1xuXG4gIGlmICghZW50aXR5ICYmIHR5cGVvZiBwYXRoID09PSAnbnVtYmVyJykge1xuICAgIGNsb25lID0gW107XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbnRpdHkpKSB7XG4gICAgY2xvbmUgPSBfdG9Db25zdW1hYmxlQXJyYXkoZW50aXR5KTtcbiAgfSBlbHNlIHtcbiAgICBjbG9uZSA9IF9vYmplY3RTcHJlYWQoe30sIGVudGl0eSk7XG4gIH1cblxuICBjbG9uZVtwYXRoXSA9IHNldChjbG9uZVtwYXRoXSwgcmVzdFBhdGgsIHZhbHVlKTtcbiAgcmV0dXJuIGNsb25lO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53YXJuaW5nID0gd2FybmluZztcbmV4cG9ydHMubm90ZSA9IG5vdGU7XG5leHBvcnRzLnJlc2V0V2FybmVkID0gcmVzZXRXYXJuZWQ7XG5leHBvcnRzLmNhbGwgPSBjYWxsO1xuZXhwb3J0cy53YXJuaW5nT25jZSA9IHdhcm5pbmdPbmNlO1xuZXhwb3J0cy5ub3RlT25jZSA9IG5vdGVPbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG52YXIgd2FybmVkID0ge307XG5cbmZ1bmN0aW9uIHdhcm5pbmcodmFsaWQsIG1lc3NhZ2UpIHtcbiAgLy8gU3VwcG9ydCB1Z2xpZnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXZhbGlkICYmIGNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiBcIi5jb25jYXQobWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vdGUodmFsaWQsIG1lc3NhZ2UpIHtcbiAgLy8gU3VwcG9ydCB1Z2xpZnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXZhbGlkICYmIGNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcIk5vdGU6IFwiLmNvbmNhdChtZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRXYXJuZWQoKSB7XG4gIHdhcm5lZCA9IHt9O1xufVxuXG5mdW5jdGlvbiBjYWxsKG1ldGhvZCwgdmFsaWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWxpZCAmJiAhd2FybmVkW21lc3NhZ2VdKSB7XG4gICAgbWV0aG9kKGZhbHNlLCBtZXNzYWdlKTtcbiAgICB3YXJuZWRbbWVzc2FnZV0gPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm5pbmdPbmNlKHZhbGlkLCBtZXNzYWdlKSB7XG4gIGNhbGwod2FybmluZywgdmFsaWQsIG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBub3RlT25jZSh2YWxpZCwgbWVzc2FnZSkge1xuICBjYWxsKG5vdGUsIHZhbGlkLCBtZXNzYWdlKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gd2FybmluZ09uY2U7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMFxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3RhdHVzQ29kZTogUHJvcFR5cGVzLm51bWJlclxuICB9XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RhdHVzQ29kZTogMjAwXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBSZW5kZXJDb21wO1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5zdGF0dXNDb2RlKSB7XG4gICAgICBjYXNlIDIwMDpcbiAgICAgIGNhc2UgNDA0OiB7XG4gICAgICAgIFJlbmRlckNvbXAgPSAoKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXJyb3ItaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZXJyb3ItaW1hZ2UnIGFsdD0nZXJyb3ItaW1nJyBzcmM9Jy9zdGF0aWMvZW1wdHkucG5nJyAvPlxuICAgICAgICAgICAgPGgzPlRoZSBwYWdlIGlzIG5vdCBmb3VuZCB8IDQwNO+9njwvaDM+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvZXJyb3InLCAnLycpfSB0eXBlPSdwcmltYXJ5JyBnaG9zdD5CYWNrIEhvbWU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDUwMDoge1xuICAgICAgICBSZW5kZXJDb21wID0gKCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXJyb3ItaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZXJyb3ItaW1hZ2UnIGFsdD0nZXJyb3ItaW1nJyBzcmM9Jy9zdGF0aWMvdW5rbm93bl9lcnJvci5wbmcnIC8+XG4gICAgICAgICAgICA8aDM+VGhlIHBhZ2UgaXMgZXJyb3IgfCA1MDDvvZ48L2gzPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfSB0eXBlPSdwcmltYXJ5JyBnaG9zdD5CYWNrIEhvbWU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UmVuZGVyQ29tcCAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JQYWdlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdGF0dXNDb2RlOiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdGF0dXNDb2RlOiAyMDBcbiAgfVxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVzLCBlcnIgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogbnVsbDtcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17dGhpcy5wcm9wcy5zdGF0dXNDb2RlIHx8IDIwMH0gLz5cbiAgICApO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDelBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5ekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2bkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3UkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1SkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcExBO0FBQ0E7QUFDQSxhQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBckJBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZEQTtBQUNBO0FBd0RBO0FBR0E7Ozs7QUFyRUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBRkE7QUFLQTtBQURBO0FBQ0E7QUFtRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7QUFUQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7O0FBVkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBRkE7QUFLQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=