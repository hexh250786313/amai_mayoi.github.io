(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0iUn":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return r})},"1HF/":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return e("URMD")}])},MI3g:function(t,n,e){"use strict";var r=e("XVgq"),i=e.n(r),o=e("Z7t5"),a=e.n(o);function c(t){return(c="function"==typeof a.a&&"symbol"==typeof i.a?function(t){return typeof t}:function(t){return t&&"function"==typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t})(t)}function u(t){return(u="function"==typeof a.a&&"symbol"===c(i.a)?function(t){return c(t)}:function(t){return t&&"function"==typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":c(t)})(t)}function s(t,n){return!n||"object"!==u(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}e.d(n,"a",function(){return s})},Tit0:function(t,n,e){"use strict";var r=e("SqZg"),i=e.n(r),o=e("TRZx"),a=e.n(o);function c(t,n){return(c=a.a||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=i()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}e.d(n,"a",function(){return u})},URMD:function(t,n,e){"use strict";e.r(n);var r=e("0iUn"),i=e("sLSF"),o=e("MI3g"),a=e("a7VT"),c=e("Tit0"),u=e("vYYK"),s=e("q1tI"),f=e.n(s),l=(e("MaXC"),e("4IMT")),p=e.n(l),b=e("MX0m"),m=e.n(b),d=e("nOHt"),x=e.n(d),y=e("yLiY"),h=e.n(y),w=f.a.createElement,g=h()().publicRuntimeConfig.linkPrefix,k=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(a.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t;switch(this.props.statusCode){case 200:case 404:t=function(){return w("div",{className:"jsx-1795853223 container"},w(m.a,{id:"1795853223"},[".container.jsx-1795853223{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".error-image.jsx-1795853223{width:200px;height:200px;margin:10px 0;}"]),w("img",{alt:"error-img",src:"/static/empty.png",className:"jsx-1795853223 error-image"}),w("h3",{className:"jsx-1795853223"},"The page is not found | 404\uff5e"),w(p.a,{onClick:function(){return x.a.push("".concat(g,"/"))},type:"primary",ghost:!0},"Back Home"))};break;case 500:t=function(){return w("div",{className:"jsx-1023012036 container"},w(m.a,{id:"1023012036"},[".container.jsx-1023012036{position:absolute;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".error-image.jsx-1023012036{width:200px;height:200px;margin:10px 0;}"]),w("img",{alt:"error-img",src:"/static/unknown_error.png",className:"jsx-1023012036 error-image"}),w("h3",{className:"jsx-1023012036"},"The page is error | 500\uff5e"),w(p.a,{onClick:function(){return x.a.push("".concat(g,"/"))},type:"primary",ghost:!0},"Back Home"))}}return w(t,null)}}]),n}(s.Component);Object(u.a)(k,"defaultProps",{statusCode:200});var j=k;e.d(n,"default",function(){return _});var v=f.a.createElement,_=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(a.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){return v(j,{statusCode:this.props.statusCode||200})}}],[{key:"getInitialProps",value:function(t){var n=t.res,e=t.err;return{statusCode:n?n.statusCode:e?e.statusCode:null}}}]),n}(f.a.Component);Object(u.a)(_,"defaultProps",{statusCode:200})},a7VT:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("Bhuq"),i=e.n(r),o=e("TRZx"),a=e.n(o);function c(t){return(c=a.a?i.a:function(t){return t.__proto__||i()(t)})(t)}},sLSF:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var r=e("hfKm"),i=e.n(r);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(t,r.key,r)}}function a(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},vYYK:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("hfKm"),i=e.n(r);function o(t,n,e){return n in t?i()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}}},[["1HF/",1,0]]]);