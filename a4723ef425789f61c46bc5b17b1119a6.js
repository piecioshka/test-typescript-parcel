require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({4:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var o=function(){return function(){console.log("lib class")}}();exports.Lib=o;
},{}],5:[function(require,module,exports) {
"use strict";function e(){console.log("pure")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.pure=e;
},{}],2:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./lib"),r=require("./pure");console.log(":: main ::"),new e.Lib,r.pure();
},{"./lib":4,"./pure":5}]},{},[2])