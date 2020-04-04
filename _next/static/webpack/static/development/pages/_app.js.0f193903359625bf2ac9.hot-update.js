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
  var list, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["take"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_4__["FETCH_USER_LIST"]);

        case 3:
          // 这行是需要的，否则不能捕获 list 事件，当捕获到这个事件的时候，才会执行下面的语句，也就是直接捕获任何地方的 dispatch(fetch_user_list)
          list = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["select"])();
          console.log("==================================", list);

          if (!(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(list) && list.length !== 0)) {
            _context.next = 10;
            break;
          }

          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_user__WEBPACK_IMPORTED_MODULE_5__["fetchUserList"])());

        case 8:
          _context.next = 25;
          break;

        case 10:
          _context.prev = 10;
          _context.next = 13;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(_constants_ApiUrlForBE__WEBPACK_IMPORTED_MODULE_6__["default"].getUserList);

        case 13:
          res = _context.sent;
          _context.next = 16;
          return res.json();

        case 16:
          data = _context.sent;
          _context.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_user__WEBPACK_IMPORTED_MODULE_5__["fetchUserListSuccess"])(data));

        case 19:
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](10);
          _context.next = 25;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions_user__WEBPACK_IMPORTED_MODULE_5__["fetchUserListFail"])());

        case 25:
          _context.next = 0;
          break;

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[10, 21]]);
}
/* harmony default export */ __webpack_exports__["default"] = ([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(fetchUser)]);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMuMGYxOTM5MDMzNTk2MjViZjJhYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhcy91c2VyL2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyB0YWtlLCBwdXQsIGZvcmssIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBGRVRDSF9VU0VSX0xJU1QgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgZmV0Y2hVc2VyTGlzdCwgZmV0Y2hVc2VyTGlzdEZhaWwsIGZldGNoVXNlckxpc3RTdWNjZXNzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91c2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL0FwaVVybEZvckJFJztcbi8qKlxuICogdXNlckxpc3Qgc2FnYVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoVXNlcigpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCB0YWtlKEZFVENIX1VTRVJfTElTVCk7IC8vIOi/meihjOaYr+mcgOimgeeahO+8jOWQpuWImeS4jeiDveaNleiOtyBsaXN0IOS6i+S7tu+8jOW9k+aNleiOt+WIsOi/meS4quS6i+S7tueahOaXtuWAme+8jOaJjeS8muaJp+ihjOS4i+mdoueahOivreWPpe+8jOS5n+WwseaYr+ebtOaOpeaNleiOt+S7u+S9leWcsOaWueeahCBkaXNwYXRjaChmZXRjaF91c2VyX2xpc3QpXG4gICAgY29uc3QgbGlzdCA9IHNlbGVjdCgpO1xuICAgIGNvbnNvbGUubG9nKGA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09YCwgbGlzdCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkgJiYgbGlzdC5sZW5ndGggIT09IDApIHtcbiAgICAgIHlpZWxkIHB1dChmZXRjaFVzZXJMaXN0KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaChhcGkuZ2V0VXNlckxpc3QpO1xuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzLmpzb24oKTtcbiAgICAgICAgeWllbGQgcHV0KGZldGNoVXNlckxpc3RTdWNjZXNzKGRhdGEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgeWllbGQgcHV0KGZldGNoVXNlckxpc3RGYWlsKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBbZm9yayhmZXRjaFVzZXIpXTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQVZBO0FBU0E7QUFUQTtBQVVBO0FBQ0E7QUFYQTtBQVVBO0FBVkE7QUFXQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=