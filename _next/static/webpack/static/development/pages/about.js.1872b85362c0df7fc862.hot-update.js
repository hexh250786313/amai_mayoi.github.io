webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/components/HomeHeader.js":
/*!**************************************!*\
  !*** ./src/components/HomeHeader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FloatBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatBar */ "./src/components/FloatBar.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_CustomTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/CustomTheme */ "./src/constants/CustomTheme.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_4___default()(),
    _getConfig$publicRunt = _getConfig.publicRuntimeConfig,
    staticFolder = _getConfig$publicRunt.staticFolder,
    linkPrefix = _getConfig$publicRunt.linkPrefix;

var HomeHeader = function HomeHeader(_ref) {
  var sidebar = _ref.sidebar;
  var titleColor = {
    color: _constants_CustomTheme__WEBPACK_IMPORTED_MODULE_6__["color_white"]
  };

  if (sidebar === null) {
    titleColor = {
      color: _constants_CustomTheme__WEBPACK_IMPORTED_MODULE_6__["theme_purple"]
    };
  }

  return __jsx("div", {
    className: "jsx-3698443240"
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3698443240"
  }, ".header.jsx-3698443240{width:100%;height:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;position:relative;margin-bottom:2em;}.title.jsx-3698443240{padding:20px 10px 20px 0;}.title-main.jsx-3698443240{font-size:55px;text-shadow:5px 5px 1px #999;line-height:1;-webkit-letter-spacing:10px;-moz-letter-spacing:10px;-ms-letter-spacing:10px;letter-spacing:10px;color:#fff;}.title-sub.jsx-3698443240{font-size:27px;text-shadow:5px 5px 17px #000;line-height:1;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;color:#fff;text-align:right;padding-top:10px;}.navigation.jsx-3698443240{list-style-type:none;padding:0;margin:0;}.navigation-li.jsx-3698443240{display:inline;margin:0;}.navigation-a.jsx-3698443240{height:38px;line-height:13px;font-size:13px;text-align:left;-webkit-text-decoration:none;text-decoration:none;width:250px;display:block;padding:10px;border:1px outset #fff;background:url(".concat(staticFolder, "/new.gif) no-repeat 95% 50%;background-color:#eee;color:#060;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.navigation-a.jsx-3698443240:hover{border:1px inset #fff;background-color:#ccc;color:#f00;}.sidebar.jsx-3698443240{position:absolute;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hvd2FyZC9teS9teS1naXQvaHhoLnh5ei9zcmMvY29tcG9uZW50cy9Ib21lSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHc0IsQUFVYyxBQU9WLEFBUUEsQUFVTSxBQU1OLEFBS0gsQUFnQlUsQUFNSixXQW5FTCxDQThDSSxHQTdCWSxBQVFDLEFBZ0JyQixHQTJCRCxHQWpDRSxDQTJCWSxFQTdEVCxBQXlDZixDQWhDQSxDQTJEVyxHQXRCTSxFQVhOLElBa0NYLEtBakNBLElBbkJnQixBQThCRSxBQWVMLENBckNHLFVBc0NoQixHQTdDc0IsQ0FRRCxDQXNCRSxzQ0EvQ0MsWUFnRFYsWUFDRSxjQUNELGFBQ1UsR0F6QlosR0FSQSxRQVNNLEdBUm5CLE1BaUN5RSxJQW5EbEQsSUEyQkosaUJBQ25CLDhDQXdCd0Isc0JBQ1gsV0FDUSxDQXJERCxrQkFDQSxrQkFDcEIsd0RBb0RBIiwiZmlsZSI6Ii9ob21lL2hvd2FyZC9teS9teS1naXQvaHhoLnh5ei9zcmMvY29tcG9uZW50cy9Ib21lSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsb2F0QmFyIGZyb20gJy4vRmxvYXRCYXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHRoZW1lX3B1cnBsZSwgY29sb3Jfd2hpdGUgfSBmcm9tICcuLi9jb25zdGFudHMvQ3VzdG9tVGhlbWUnO1xuXG5jb25zdCB7XG4gIHB1YmxpY1J1bnRpbWVDb25maWc6IHsgc3RhdGljRm9sZGVyLCBsaW5rUHJlZml4IH0sXG59ID0gZ2V0Q29uZmlnKCk7XG5cbmNvbnN0IEhvbWVIZWFkZXIgPSAoeyBzaWRlYmFyIH0pID0+IHtcbiAgbGV0IHRpdGxlQ29sb3IgPSB7IGNvbG9yOiBjb2xvcl93aGl0ZSB9O1xuICBpZiAoc2lkZWJhciA9PT0gbnVsbCkge1xuICAgIHRpdGxlQ29sb3IgPSB7IGNvbG9yOiB0aGVtZV9wdXJwbGUgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUtYm94IHtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZS1tYWluIHtcbiAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMXB4ICM5OTk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUtc3ViIHtcbiAgICAgICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTdweCAjMDAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24tbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbi1hIHtcbiAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IG91dHNldCAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3N0YXRpY0ZvbGRlcn0vbmV3LmdpZikgbm8tcmVwZWF0IDk1JSA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICBjb2xvcjogIzA2MDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24tYTpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggaW5zZXQgI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAgIGNvbG9yOiAjZjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLWJveCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUtbWFpbicgc3R5bGU9e3RpdGxlQ29sb3J9PlxuICAgICAgICAgICAgICBBTUFJLU1BWU9JXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZS1zdWInIHN0eWxlPXt0aXRsZUNvbG9yfT5cbiAgICAgICAgICAgICAg5oiR55qE5Liq5Lq65Li76aG1XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXInPlxuICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPEZsb2F0QmFyXG4gICAgICAgICAgICAgIHRpdGxlQ29sb3I9e2ByZ2JhKDI1NSwgMTg3LCAyNTUsIDAuNSlgfVxuICAgICAgICAgICAgICBoZWlnaHQ9e251bGx9XG4gICAgICAgICAgICAgIHRpdGxlPXtgQ09OVEVOVFNgfVxuICAgICAgICAgICAgICBzdWJ0aXRsZT17YGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdmlnYXRpb24nPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmIGFzPXtgJHtsaW5rUHJlZml4fS9gfT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdmlnYXRpb24tbGknPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdmlnYXRpb24tYSc+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+6aaW6aG1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbG9nJyBwYXNzSHJlZiBhcz17YCR7bGlua1ByZWZpeH0vYH0+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWxpJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWEnPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuaIkeeahCBMb2cg5pu05pawPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYXJjaGl2ZScgcGFzc0hyZWYgYXM9e2Ake2xpbmtQcmVmaXh9L2B9PlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1saSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1hJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7ku5PlupM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgcGFzc0hyZWYgYXM9e2Ake2xpbmtQcmVmaXh9L2Fib3V0YH0+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWxpJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWEnPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWFs+S6juaIkTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L0Zsb2F0QmFyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3NpZGViYXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lSGVhZGVyO1xuXG5Ib21lSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgc2lkZWJhcjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5Ib21lSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2lkZWJhcjogbnVsbCxcbn07XG4iXX0= */\n/*@ sourceURL=/home/howard/my/my-git/hxh.xyz/src/components/HomeHeader.js */")), __jsx("div", {
    className: "jsx-3698443240" + " " + 'header'
  }, __jsx("div", {
    className: "jsx-3698443240" + " " + 'title'
  }, __jsx("div", {
    className: "jsx-3698443240" + " " + 'title-box'
  }, __jsx("div", {
    style: titleColor,
    className: "jsx-3698443240" + " " + 'title-main'
  }, "AMAI-MAYOI"), __jsx("div", {
    style: titleColor,
    className: "jsx-3698443240" + " " + 'title-sub'
  }, "\u6211\u7684\u4E2A\u4EBA\u4E3B\u9875"))), __jsx("div", {
    className: "jsx-3698443240" + " " + 'sidebar'
  }, __jsx("div", {
    className: "jsx-3698443240"
  }, __jsx(_FloatBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titleColor: "rgba(255, 187, 255, 0.5)",
    height: null,
    title: "CONTENTS",
    subtitle: ""
  }, __jsx("ul", {
    className: "jsx-3698443240" + " " + 'navigation'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    passHref: true,
    as: "".concat(linkPrefix, "/")
  }, __jsx("li", {
    className: "jsx-3698443240" + " " + 'navigation-li'
  }, __jsx("a", {
    className: "jsx-3698443240" + " " + 'navigation-a'
  }, __jsx("span", {
    className: "jsx-3698443240"
  }, "\u9996\u9875")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/log",
    passHref: true,
    as: "".concat(linkPrefix, "/")
  }, __jsx("li", {
    className: "jsx-3698443240" + " " + 'navigation-li'
  }, __jsx("a", {
    className: "jsx-3698443240" + " " + 'navigation-a'
  }, __jsx("span", {
    className: "jsx-3698443240"
  }, "\u6211\u7684 Log \u66F4\u65B0")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/archive",
    passHref: true,
    as: "".concat(linkPrefix, "/")
  }, __jsx("li", {
    className: "jsx-3698443240" + " " + 'navigation-li'
  }, __jsx("a", {
    className: "jsx-3698443240" + " " + 'navigation-a'
  }, __jsx("span", {
    className: "jsx-3698443240"
  }, "\u4ED3\u5E93")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    passHref: true,
    as: "".concat(linkPrefix, "/about")
  }, __jsx("li", {
    className: "jsx-3698443240" + " " + 'navigation-li'
  }, __jsx("a", {
    className: "jsx-3698443240" + " " + 'navigation-a'
  }, __jsx("span", {
    className: "jsx-3698443240"
  }, "\u5173\u4E8E\u6211"))))))), sidebar)));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeHeader);
HomeHeader.propTypes = {
  sidebar: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
HomeHeader.defaultProps = {
  sidebar: null
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2Fib3V0LmpzLjE4NzJiODUzNjJjMGRmN2ZjODYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbG9hdEJhciBmcm9tICcuL0Zsb2F0QmFyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB0aGVtZV9wdXJwbGUsIGNvbG9yX3doaXRlIH0gZnJvbSAnLi4vY29uc3RhbnRzL0N1c3RvbVRoZW1lJztcblxuY29uc3Qge1xuICBwdWJsaWNSdW50aW1lQ29uZmlnOiB7IHN0YXRpY0ZvbGRlciwgbGlua1ByZWZpeCB9LFxufSA9IGdldENvbmZpZygpO1xuXG5jb25zdCBIb21lSGVhZGVyID0gKHsgc2lkZWJhciB9KSA9PiB7XG4gIGxldCB0aXRsZUNvbG9yID0geyBjb2xvcjogY29sb3Jfd2hpdGUgfTtcbiAgaWYgKHNpZGViYXIgPT09IG51bGwpIHtcbiAgICB0aXRsZUNvbG9yID0geyBjb2xvcjogdGhlbWVfcHVycGxlIH07XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLWJveCB7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUtbWFpbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDFweCAjOTk5O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLXN1YiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDE3cHggIzAwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uLWxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24tYSB7XG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBvdXRzZXQgI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtzdGF0aWNGb2xkZXJ9L25ldy5naWYpIG5vLXJlcGVhdCA5NSUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgY29sb3I6ICMwNjA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uLWE6aG92ZXIge1xuICAgICAgICAgIGJvcmRlcjogMXB4IGluc2V0ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICBjb2xvcjogI2YwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZS1ib3gnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLW1haW4nIHN0eWxlPXt0aXRsZUNvbG9yfT5cbiAgICAgICAgICAgICAgQU1BSS1NQVlPSVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUtc3ViJyBzdHlsZT17dGl0bGVDb2xvcn0+XG4gICAgICAgICAgICAgIOaIkeeahOS4quS6uuS4u+mhtVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyJz5cbiAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxGbG9hdEJhclxuICAgICAgICAgICAgICB0aXRsZUNvbG9yPXtgcmdiYSgyNTUsIDE4NywgMjU1LCAwLjUpYH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtudWxsfVxuICAgICAgICAgICAgICB0aXRsZT17YENPTlRFTlRTYH1cbiAgICAgICAgICAgICAgc3VidGl0bGU9e2BgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZpZ2F0aW9uJz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZiBhcz17YCR7bGlua1ByZWZpeH0vYH0+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWxpJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLWEnPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPummlumhtTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvZycgcGFzc0hyZWYgYXM9e2Ake2xpbmtQcmVmaXh9L2B9PlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1saSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1hJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7miJHnmoQgTG9nIOabtOaWsDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FyY2hpdmUnIHBhc3NIcmVmIGFzPXtgJHtsaW5rUHJlZml4fS9gfT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdmlnYXRpb24tbGknPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdmlnYXRpb24tYSc+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5LuT5bqTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIHBhc3NIcmVmIGFzPXtgJHtsaW5rUHJlZml4fS9hYm91dGB9PlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1saSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1hJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lhbPkuo7miJE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9GbG9hdEJhcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtzaWRlYmFyfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUhlYWRlcjtcblxuSG9tZUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHNpZGViYXI6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuSG9tZUhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpZGViYXI6IG51bGwsXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBNkVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9