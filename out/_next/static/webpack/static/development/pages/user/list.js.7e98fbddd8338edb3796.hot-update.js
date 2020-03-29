webpackHotUpdate("static/development/pages/user/list.js",{

/***/ "./src/components/User/UserList.js":
/*!*****************************************!*\
  !*** ./src/components/User/UserList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ "./node_modules/antd/lib/table/style/index.js");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var columns = [{
  title: 'Username',
  dataIndex: 'username',
  key: 'username',
  render: function render(text) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/user/[username]",
      as: "/user/".concat(text)
    }, __jsx("a", null, text));
  }
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email'
}];

var UserList = function UserList(_ref) {
  var list = _ref.list;
  console.log('sdfsdfsdfsdfsf', list[0]);
  return __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    rowKey: function rowKey(record) {
      return record.id;
    },
    style: {
      minWidth: '600px'
    },
    dataSource: list,
    columns: columns,
    bordered: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UserList);
UserList.propTypes = {
  list: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL3VzZXIvbGlzdC5qcy43ZTk4ZmJkZGQ4MzM4ZWRiMzc5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlci9Vc2VyTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdhbnRkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1VzZXJuYW1lJyxcbiAgICBkYXRhSW5kZXg6ICd1c2VybmFtZScsXG4gICAga2V5OiAndXNlcm5hbWUnLFxuICAgIHJlbmRlcjogdGV4dCA9PiAoXG4gICAgICA8TGluayBocmVmPXtgL3VzZXIvW3VzZXJuYW1lXWB9IGFzPXtgL3VzZXIvJHt0ZXh0fWB9PlxuICAgICAgICA8YT57dGV4dH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRW1haWwnLFxuICAgIGRhdGFJbmRleDogJ2VtYWlsJyxcbiAgICBrZXk6ICdlbWFpbCcsXG4gIH0sXG5dO1xuXG5jb25zdCBVc2VyTGlzdCA9ICh7IGxpc3QgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnc2Rmc2Rmc2Rmc2Rmc2YnLCBsaXN0WzBdKTtcbiAgcmV0dXJuIChcbiAgICA8VGFibGVcbiAgICAgIHJvd0tleT17cmVjb3JkID0+IHJlY29yZC5pZH1cbiAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAnNjAwcHgnIH19XG4gICAgICBkYXRhU291cmNlPXtsaXN0fVxuICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgIGJvcmRlcmVkXG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMaXN0O1xuXG5Vc2VyTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUpBO0FBV0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==