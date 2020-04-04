webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/redux/sagas/user/list.js":
/*!**************************************!*\
  !*** ./src/redux/sagas/user/list.js ***!
  \**************************************/
/*! exports provided: fetchUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/ActionTypes */ "./src/constants/ActionTypes.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/user */ "./src/redux/actions/user.js");
/* harmony import */ var _constants_ApiUrlForBE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/ApiUrlForBE */ "./src/constants/ApiUrlForBE.js");



var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchUser);






/**
 * userList saga
 */

function fetchUser() {
  var _ref, list, res, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["take"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_4__["FETCH_USER_LIST"]);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) {
            return state.user.list;
          });

        case 5:
          _ref = _context.sent;
          list = _ref.list;

          if (!(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(list) && list.length !== 0)) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_user__WEBPACK_IMPORTED_MODULE_5__["fetchUserList"])());

        case 10:
          _context.next = 27;
          break;

        case 12:
          _context.prev = 12;
          _context.next = 15;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(_constants_ApiUrlForBE__WEBPACK_IMPORTED_MODULE_6__["default"].getUserList);

        case 15:
          res = _context.sent;
          _context.next = 18;
          return res.json();

        case 18:
          data = _context.sent;
          _context.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_user__WEBPACK_IMPORTED_MODULE_5__["fetchUserListSuccess"])(data));

        case 21:
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](12);
          _context.next = 27;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_user__WEBPACK_IMPORTED_MODULE_5__["fetchUserListFail"])());

        case 27:
          _context.next = 0;
          break;

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[12, 23]]);
}
/* harmony default export */ __webpack_exports__["default"] = ([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(fetchUser)]);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMuZTYzMWUxMDEwNjc5YzFmMDI2YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhcy91c2VyL2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyB0YWtlLCBwdXQsIGZvcmssIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBGRVRDSF9VU0VSX0xJU1QgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgZmV0Y2hVc2VyTGlzdCwgZmV0Y2hVc2VyTGlzdEZhaWwsIGZldGNoVXNlckxpc3RTdWNjZXNzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91c2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL0FwaVVybEZvckJFJztcbi8qKlxuICogdXNlckxpc3Qgc2FnYVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoVXNlcigpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCB0YWtlKEZFVENIX1VTRVJfTElTVCk7IC8vIOi/meihjOaYr+mcgOimgeeahO+8jOWQpuWImeS4jeiDveaNleiOtyBsaXN0IOS6i+S7tu+8jOW9k+aNleiOt+WIsOi/meS4quS6i+S7tueahOaXtuWAme+8jOaJjeS8muaJp+ihjOS4i+mdoueahOivreWPpe+8jOS5n+WwseaYr+ebtOaOpeaNleiOt+S7u+S9leWcsOaWueeahCBkaXNwYXRjaChmZXRjaF91c2VyX2xpc3QpXG4gICAgY29uc3QgeyBsaXN0IH0gPSB5aWVsZCBzZWxlY3Qoc3RhdGUgPT4gc3RhdGUudXNlci5saXN0KTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSAmJiBsaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgeWllbGQgcHV0KGZldGNoVXNlckxpc3QoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKGFwaS5nZXRVc2VyTGlzdCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXMuanNvbigpO1xuICAgICAgICB5aWVsZCBwdXQoZmV0Y2hVc2VyTGlzdFN1Y2Nlc3MoZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB5aWVsZCBwdXQoZmV0Y2hVc2VyTGlzdEZhaWwoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtmb3JrKGZldGNoVXNlcildO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFBQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBVEE7QUFRQTtBQVJBO0FBU0E7QUFDQTtBQVZBO0FBU0E7QUFUQTtBQVVBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==