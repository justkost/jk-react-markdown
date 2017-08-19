!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.JkReactMarkdown=t(require("react")):e.JkReactMarkdown=t(e.react)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){h&&d&&(h=!1,d.length?y=d.concat(y):v=-1,y.length&&u())}function u(){if(!h){var e=o(a);h=!0;for(var t=y.length;t;){for(d=y,y=[];++v<t;)d&&d[v].run();v=-1,t=y.length}d=null,h=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,y=[],h=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||h||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(){var t=this;r(this,e),this.types={line:"line",area:"area"},this.list=[{name:"h3",symbol:"icon-header",type:this.types.line,markdown:"### "},{name:"i",symbol:"icon-italic",type:this.types.area,markdown:"*"},{name:"b",symbol:"icon-bold",type:this.types.area,markdown:"**"},{name:"ul",symbol:"icon-list-bullet",type:this.types.line,markdown:"* "},{name:"a",symbol:"icon-link",type:this.types.area,markdown:{before:"[",after:"](https://)"}}],this.getButtonByName=function(e){for(var n=0;n<t.list.length;n++)if(t.list[n].name===e)return t.list[n]}};t.default=o},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,i,a,u,c){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,a,u,c],f=0;s=new Error(t.replace(/%s/g,function(){return l[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(17)(o,!0)}else e.exports=n(16)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(3),o=r;if("production"!==t.env.NODE_ENV){var i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),s=r(c),l=n(6),f=r(l),p=n(9),d=r(p),y=n(1),h=r(y),v=n(10),m=r(v),b=n(11),g=r(b),w=new h.default,E=w.getButtonByName,O=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={selectionStr:"",selectionStart:0,selectionEnd:0,selectionlines:[]},r.onClickButton=function(e){var t=(0,g.default)({button:E(e),text:r.props.value,selectionStr:r.state.selectionStr,selectionStart:r.state.selectionStart,selectionEnd:r.state.selectionEnd,selectionlines:r.state.selectionlines});r.props.onChange(t)},r.onChange=function(e){r.props.onChange(e.target.value)},r.onSelect=function(e){var t=e.target,n=t.selectionStart,o=t.selectionEnd,i=r.props.value.substring(n,o),a=(0,m.default)(n,o,r.props.value);r.setState({selectionStr:i,selectionStart:n,selectionEnd:o,selectionlines:a})},a=n,i(r,a)}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.cols?this.props.cols:"30",t=this.props.rows?this.props.rows:"5";return s.default.createElement("div",null,s.default.createElement(d.default,{onClick:this.onClickButton}),s.default.createElement("textarea",{cols:e,rows:t,className:this.props.className,value:this.props.value,onChange:this.onChange,onSelect:this.onSelect}))}}]),t}(c.Component);O.propTypes={className:f.default.string,cols:f.default.string,rows:f.default.string,value:f.default.string,onChange:f.default.func},t.default=O},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(13),n(14);var c=n(2),s=r(c),l=n(1),f=r(l),p=n(6),d=r(p),y=new f.default,h=y.list,v=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.onClick=function(e){return function(t){t.preventDefault(),r.props.onClick(e)}},a=n,i(r,a)}return a(t,e),u(t,[{key:"render",value:function(){var e=this,t=h.map(function(t,n){return s.default.createElement("a",{href:"#",key:t.name,onClick:e.onClick(t.name),className:"JkReactMarkdown__panel__btn"},s.default.createElement("i",{className:t.symbol}))});return s.default.createElement("div",{className:"JkReactMarkdown__panel"},s.default.createElement("div",{className:"JkReactMarkdown__panel-inner"},t))}}]),t}(c.Component);v.propTypes={onClick:d.default.func},t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){for(var r=[],o=[],i=0;i<n.length;i++)"\n"===n[i]&&o.push(i);for(var a=0;a<o.length;a++){var u=o[a];u>e&&!r.length&&(a>0?r.push(o[a-1]+1):r.push(0)),u>e&&u<t&&u<n.length-1&&r.push(u+1)}return r.length||"\n"===n[n.length-1]||(o.length?r.push(o[o.length-1]+1):r.push(0)),r}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(12),a=r(i),u=n(1),c=r(u),s=new c.default,l=s.types;t.default=function(e){var t=e.button,n=e.text,r=(e.selectionStr,e.selectionStart),i=e.selectionEnd,u=e.selectionlines;if(!n)return"";if("string"!=typeof n)throw new Error("text not string");if("object"!==(void 0===t?"undefined":o(t)))throw new Error("button not object");if(t.type===l.area){var c=void 0,s=void 0,f=void 0;if("string"==typeof t.markdown)c=t.markdown,s=t.markdown,f=t.markdown.length;else{if("object"!==o(t.markdown))throw new Error("button.markdown is not string or object");c=t.markdown.before,s=t.markdown.after,f=t.markdown.before.length}var p=(0,a.default)({text:n,position:r,inserted:c});return p=(0,a.default)({text:p,position:i+f,inserted:s})}if(t.type===l.line){var d=n;return u.forEach(function(e,n){d=(0,a.default)({text:d,position:e+n*t.markdown.length,inserted:t.markdown})}),d}throw new Error("button.type error")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.text,n=e.position,r=e.inserted;if(void 0===t||void 0===n||!r)throw new Error("Missing argument");return t.substring(0,n)+r+t.substring(n)}},function(e,t){},function(e,t){},function(e,t,n){"use strict";(function(t){function r(e,n,r,c,s){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var f;try{o("function"==typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",c||"React class",r,l),f=e[l](n,l,c,r,null,a)}catch(e){f=e}if(i(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,l,typeof f),f instanceof Error&&!(f.message in u)){u[f.message]=!0;var p=s?s():"";i(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(4),i=n(7),a=n(5),u={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(3),o=n(4),i=n(5);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";(function(t){var r=n(3),o=n(4),i=n(7),a=n(5),u=n(15);e.exports=function(e,n){function c(e){var t=e&&(T&&e[T]||e[x]);if("function"==typeof t)return t}function s(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function f(e){function r(r,s,f,p,d,y,h){if(p=p||j,y=y||f,h!==a)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=p+":"+f;!u[v]&&c<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),u[v]=!0,c++)}return null==s[f]?r?new l(null===s[f]?"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(s,f,p,d,y)}if("production"!==t.env.NODE_ENV)var u={},c=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function p(e){function t(t,n,r,o,i,a){var u=t[n];if(E(u)!==e)return new l("Invalid "+o+" `"+i+"` of type `"+O(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function d(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new l("Invalid "+o+" `"+i+"` of type `"+E(u)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<u.length;c++){var s=e(u,c,r,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}return f(t)}function y(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||j;return new l("Invalid "+o+" `"+i+"` of type `"+k(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(t)}function h(e){function n(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(s(a,e[u]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function v(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=E(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(u.hasOwnProperty(s)){var f=e(u,s,r,o,i+"."+s,a);if(f instanceof Error)return f}return null}return f(t)}function m(e){function n(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,a))return null}return new l("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<e.length;o++){var u=e[o];if("function"!=typeof u)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",_(u),o),r.thatReturnsNull}return f(n)}function b(e){function t(t,n,r,o,i){var u=t[n],c=E(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(u,s,r,o,i+"."+s,a);if(p)return p}}return null}return f(t)}function g(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(g);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!g(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!g(i[1]))return!1}return!0;default:return!1}}function w(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function E(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function O(e){if(void 0===e||null===e)return""+e;var t=E(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){var t=O(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function k(e){return e.constructor&&e.constructor.name?e.constructor.name:j}var T="function"==typeof Symbol&&Symbol.iterator,x="@@iterator",j="<<anonymous>>",P={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new l("Invalid "+o+" `"+i+"` of type `"+E(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:y,node:function(){function e(e,t,n,r,o){return g(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:v,oneOf:h,oneOfType:m,shape:b};return l.prototype=Error.prototype,P.checkPropTypes=u,P.PropTypes=P,P}}).call(t,n(0))}])});