!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("reactDOM")):"function"==typeof define&&define.amd?define("json-as-form",["react","reactDOM"],t):"object"==typeof exports?exports["json-as-form"]=t(require("react"),require("reactDOM")):e["json-as-form"]=t(e.react,e.reactDOM)}(window,(function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}([function(t,n){t.exports=e},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t,n){var r=n(7),o=n(19),c=n(20),i=n(21),u=n(25),l=n(27),a=Date.prototype.getTime;function f(e,t,n){var y=n||{};return!(y.strict?!c(e,t):e!==t)||(!e||!t||"object"!=typeof e&&"object"!=typeof t?y.strict?c(e,t):e==t:function(e,t,n){var c,y;if(typeof e!=typeof t)return!1;if(p(e)||p(t))return!1;if(e.prototype!==t.prototype)return!1;if(o(e)!==o(t))return!1;var g=i(e),b=i(t);if(g!==b)return!1;if(g||b)return e.source===t.source&&u(e)===u(t);if(l(e)&&l(t))return a.call(e)===a.call(t);var m=s(e),v=s(t);if(m!==v)return!1;if(m||v){if(e.length!==t.length)return!1;for(c=0;c<e.length;c++)if(e[c]!==t[c])return!1;return!0}if(typeof e!=typeof t)return!1;try{var d=r(e),h=r(t)}catch(e){return!1}if(d.length!==h.length)return!1;for(d.sort(),h.sort(),c=d.length-1;c>=0;c--)if(d[c]!=h[c])return!1;for(c=d.length-1;c>=0;c--)if(y=d[c],!f(e[y],t[y],n))return!1;return!0}(e,t,y))}function p(e){return null==e}function s(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}e.exports=f},function(e,t,n){var r=n(12),o=n(13),c=n(14);e.exports=function(e){return r(e)||o(e)||c()}},function(e,t,n){"use strict";var r=n(7),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,i=Array.prototype.concat,u=Object.defineProperty,l=u&&function(){var e={};try{for(var t in u(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),a=function(e,t,n,r){var o;t in e&&("function"!=typeof(o=r)||"[object Function]"!==c.call(o)||!r())||(l?u(e,t,{configurable:!0,enumerable:!1,value:n,writable:!0}):e[t]=n)},f=function(e,t){var n=arguments.length>2?arguments[2]:{},c=r(t);o&&(c=i.call(c,Object.getOwnPropertySymbols(t)));for(var u=0;u<c.length;u+=1)a(e,c[u],t[c[u]],n[c[u]])};f.supportsDescriptors=!!l,e.exports=f},function(e,t,n){var r=n(15),o=n(16),c=n(17);e.exports=function(e,t){return r(e)||o(e,t)||c()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";var r=Array.prototype.slice,o=n(8),c=Object.keys,i=c?function(e){return c(e)}:n(18),u=Object.keys;i.shim=function(){Object.keys?function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2)||(Object.keys=function(e){return o(e)?u(r.call(e)):u(e)}):Object.keys=i;return Object.keys||i},e.exports=i},function(e,t,n){"use strict";var r=Object.prototype.toString;e.exports=function(e){var t=r.call(e),n="[object Arguments]"===t;return n||(n="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===r.call(e.callee)),n}},function(e,t,n){"use strict";var r=Object,o=TypeError;e.exports=function(){if(null!=this&&this!==r(this))throw new o("RegExp.prototype.flags getter called on non-object");var e="";return this.global&&(e+="g"),this.ignoreCase&&(e+="i"),this.multiline&&(e+="m"),this.dotAll&&(e+="s"),this.unicode&&(e+="u"),this.sticky&&(e+="y"),e}},function(e,t,n){"use strict";var r=n(9),o=n(4).supportsDescriptors,c=Object.getOwnPropertyDescriptor,i=TypeError;e.exports=function(){if(!o)throw new i("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");if("gim"===/a/gim.flags){var e=c(RegExp.prototype,"flags");if(e&&"function"==typeof e.get&&"boolean"==typeof/a/.dotAll)return e.get}return r}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),c=n(6),i=n.n(c),u=n(5),l=n.n(u),a=n(1),f=n.n(a),p=n(0),s=n.n(p),y=n(2),g=n.n(y),b=function(e){var t=e.row,n=e.isLast,r=e.meta,o=e.showCheckBox,c=e.onChange,i=e.addNewRow,u=e.onToggleRowStatus,l=e.onRemoveRow,a=function(e){return s.a.createElement("span",{style:{color:"#167af6",fontSize:14}},'"')},p=function(e){return s.a.createElement("span",{style:{color:"#cd6a42",fontSize:14}},'"')},y=function(e){console.log(e.target.value,e.target.type,e.target.files);try{if(!r||!r.variableToType)return c(t.key,"file"==e.target.type?e.target.files[0]:e.target.value);if(Object.keys(r.variableToType).includes(t.key)&&r.variableToType[t.key].ofType&&r.variableToType[t.key].ofType.serialize){var n=r.variableToType[t.key].ofType.serialize(e.target.value);console.log("serialize value: ",n),c(t.key,n)}}catch(n){console.log("e",n),c(t.key,e.target.value)}};return s.a.createElement("div",null,o&&s.a.createElement("input",{type:"checkbox",checked:!t.disable,onChange:function(){return u(!t.disable)},style:{marginLeft:10,cursor:"pointer"}}),s.a.createElement("span",{style:{marginLeft:5,color:"#167af6"}},s.a.createElement(a,null),s.a.createElement("input",{autoFocus:t.autoFocus,type:"text",value:t.key,onChange:function(e){return c(e.target.value,t.value)},style:{outline:"none",width:"".concat(t.key.length?8*t.key.length+2:20,"px"),minWidth:"10px",border:"none",borderBottom:"1px solid #167af6",fontSize:14,color:"#167af6"},onFocus:function(){n&&t.key.length&&t.value.length&&i()}}),s.a.createElement(a,null),":"),s.a.createElement("span",{style:{marginLeft:10}},(console.log("row from jsonform: ",t),"boolean"==t.type?s.a.createElement("select",{style:{outline:"none",width:"60px",border:"none",borderBottom:"1px solid #cd6a42",fontSize:14,color:"#cd6a42"}},s.a.createElement("option",{value:!0},"True"),s.a.createElement("option",{value:!1},"False")):"file"==t.type?t.value&&t.value.name?s.a.createElement("span",{style:{borderBottom:"1px solid #cd6a42",fontSize:14,color:"#767676"}},t.value.name):s.a.createElement("input",{type:"file",onChange:function(e){return y(e)},onClick:function(e){e.target.value=null},style:{outline:"none",margin:"5px auto",width:"80px",minWidth:"10px",border:"none"}}):null!==t.value&&"object"==f()(t.value)?s.a.createElement("span",null," ","{...}"," "):[s.a.createElement(p,{key:"start-quote"}),s.a.createElement("input",{type:t.key.includes("password")?"password":"text",value:t.value||"",onChange:function(e){return y(e)},style:{outline:"none",width:"".concat(t.value?8*t.value.length+5:20,"px"),minWidth:"10px",border:"none",borderBottom:"1px solid #cd6a42",fontSize:14,color:"#cd6a42"},key:"input",onBlur:function(e){var r=e;console.log(r,event.shiftKey),n&&t.key&&t.key.length&&t.value&&t.value.length&&i()}}),s.a.createElement(p,{key:"end-quote"})])),s.a.createElement("span",{onClick:l,style:{marginLeft:10,color:"red",cursor:"pointer"}},"×"))};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.json,n=e.meta,r=e.onChange,c=e.debug,u=void 0!==c&&c,a=Object(p.useRef)(!0),y=Object(p.useRef)("object"!=f()(t)||!t.length),m=Object(p.useState)([]),d=l()(m,2),h=d[0],j=d[1];Object(p.useEffect)((function(){if(console.log(t,"json value changed"),y.current="object"!=f()(t)||!t.length,1==y.current){var e=O._parseJSON(v({},t));g()(e,h)||j(e)}else g()(t,O._toJSON())||j(o()(t))}),[t]),Object(p.useEffect)((function(){if(a.current)a.current=!1;else if(console.log("in parsed json callback"),"function"==typeof r){var e=O._toJSON();console.log(g()(e,t),e,t,988898),g()(e,t)||r(e)}}),[h]);var O={_parseJSON:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map((function(t,n){return{key:t,value:e[t],type:e.type||f()(e[t])}}))},_toJSON:function(){return console.log(y),1==y.current?h.filter((function(e){return e.key})).reduce((function(e,t){return v({},e,i()({},t.key,t.value))}),{}):h.filter((function(e){return e.key}))},_addNewRow:function(){j([].concat(o()(h),[{key:"",value:""}]))},_onChangeRow:function(e,n,r){console.log(e,n,r);var c=h.map((function(t,o){var c=v({},t);return o==r&&(c.key=e,c.value=n),c}));console.log(t),j(o()(c))},_onToggleRowStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=h.map((function(n,r){return r==t&&(n.disable=e),n}));j(n)},_onRemoveRow:function(e){var t=h.filter((function(t,n){return n!==e}));t.length?j(t):j([{key:"",value:""}])}};return s.a.createElement("div",{style:{marginLeft:10}},s.a.createElement("div",null,"{"),h.map((function(e,t){return s.a.createElement(b,{row:e,key:t,meta:n,isLast:h.length==t+1,onChange:function(e,n){return O._onChangeRow(e,n,t)},onToggleRowStatus:function(e){return O._onToggleRowStatus(e,t)},onRemoveRow:function(){return O._onRemoveRow(t)},addNewRow:O._addNewRow,showCheckBox:!y.current})})),s.a.createElement("div",null,"}"),u&&s.a.createElement("div",null,s.a.createElement("pre",null,JSON.stringify(h,2,2)),s.a.createElement("pre",null,JSON.stringify(t,2,2))))}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){"use strict";var r;if(!Object.keys){var o=Object.prototype.hasOwnProperty,c=Object.prototype.toString,i=n(8),u=Object.prototype.propertyIsEnumerable,l=!u.call({toString:null},"toString"),a=u.call((function(){}),"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(e){var t=e.constructor;return t&&t.prototype===e},s={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!s["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(e){return!0}}catch(e){return!0}return!1}();r=function(e){var t=null!==e&&"object"==typeof e,n="[object Function]"===c.call(e),r=i(e),u=t&&"[object String]"===c.call(e),s=[];if(!t&&!n&&!r)throw new TypeError("Object.keys called on a non-object");var g=a&&n;if(u&&e.length>0&&!o.call(e,0))for(var b=0;b<e.length;++b)s.push(String(b));if(r&&e.length>0)for(var m=0;m<e.length;++m)s.push(String(m));else for(var v in e)g&&"prototype"===v||!o.call(e,v)||s.push(String(v));if(l)for(var d=function(e){if("undefined"==typeof window||!y)return p(e);try{return p(e)}catch(e){return!1}}(e),h=0;h<f.length;++h)d&&"constructor"===f[h]||!o.call(e,f[h])||s.push(f[h]);return s}}e.exports=r},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,o=Object.prototype.toString,c=function(e){return!(r&&e&&"object"==typeof e&&Symbol.toStringTag in e)&&"[object Arguments]"===o.call(e)},i=function(e){return!!c(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==o.call(e)&&"[object Function]"===o.call(e.callee)},u=function(){return c(arguments)}();c.isLegacyArguments=i,e.exports=u?c:i},function(e,t,n){"use strict";var r=function(e){return e!=e};e.exports=function(e,t){return 0===e&&0===t?1/e==1/t:e===t||!(!r(e)||!r(t))}},function(e,t,n){"use strict";var r=n(22),o=RegExp.prototype.exec,c=Object.getOwnPropertyDescriptor,i=Object.prototype.toString,u="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!u)return"[object RegExp]"===i.call(e);var t=c(e,"lastIndex");return!(!t||!r(t,"value"))&&function(e){try{var t=e.lastIndex;return e.lastIndex=0,o.call(e),!0}catch(e){return!1}finally{e.lastIndex=t}}(e)}},function(e,t,n){"use strict";var r=n(23);e.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},function(e,t,n){"use strict";var r=n(24);e.exports=Function.prototype.bind||r},function(e,t,n){"use strict";var r="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,c=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==c.call(t))throw new TypeError(r+t);for(var n,i=o.call(arguments,1),u=function(){if(this instanceof n){var r=t.apply(this,i.concat(o.call(arguments)));return Object(r)===r?r:this}return t.apply(e,i.concat(o.call(arguments)))},l=Math.max(0,t.length-i.length),a=[],f=0;f<l;f++)a.push("$"+f);if(n=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(u),t.prototype){var p=function(){};p.prototype=t.prototype,n.prototype=new p,p.prototype=null}return n}},function(e,t,n){"use strict";var r=n(4),o=n(9),c=n(10),i=n(26),u=Function.call.bind(o);r(u,{getPolyfill:c,implementation:o,shim:i}),e.exports=u},function(e,t,n){"use strict";var r=n(4).supportsDescriptors,o=n(10),c=Object.getOwnPropertyDescriptor,i=Object.defineProperty,u=TypeError,l=Object.getPrototypeOf,a=/a/;e.exports=function(){if(!r||!l)throw new u("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var e=o(),t=l(a),n=c(t,"flags");return n&&n.get===e||i(t,"flags",{configurable:!0,enumerable:!1,get:e}),e}},function(e,t,n){"use strict";var r=Date.prototype.getDay,o=Object.prototype.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;e.exports=function(e){return"object"==typeof e&&null!==e&&(c?function(e){try{return r.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o.call(e))}},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),c=n(0),i=n.n(c),u=n(28),l=n.n(u),a=n(11);l.a.render(i.a.createElement((function(){var e=Object(c.useState)([{key:"name",value:"Nishchit",type:"string"},{key:"a",value:"b",type:"file"}]),t=o()(e,2),n=t[0],r=t[1];return i.a.createElement("div",null,i.a.createElement("pre",null,JSON.stringify(n,4,4)),i.a.createElement(a.default,{json:n,debug:!0,onChange:function(e){console.log(e),r(e)}}))}),null),document.getElementById("root"))}])}));
//# sourceMappingURL=index.js.map