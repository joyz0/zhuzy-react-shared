/*! For license information please see useKeyPress-stories.20713d71.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_zhuzy_react_shared=self.webpackChunk_zhuzy_react_shared||[]).push([[8667],{"./node_modules/.pnpm/@xobotyi+scrollbar-width@1.9.5/node_modules/@xobotyi/scrollbar-width/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>e});var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var n=o.clientWidth;if(0!==n)return e.__cache=100-n,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}}},"./node_modules/.pnpm/@zhuzy+utils@0.1.7_@types+node@20.1.5/node_modules/@zhuzy/utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P2:()=>w,S1:()=>R,jU:()=>h,on:()=>L});const t=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);function e(t){return t&&"object"==typeof t}const a=t=>"symbol"==typeof t;const g=(t,e)=>!Object.is(t,e),h="undefined"!=typeof window;function w(t,e,n={}){const{noTrailing:o=!1,noLeading:r=!1,debounceMode:c}=n;let a,i=!1,s=0;function u(){a&&clearTimeout(a)}function l(...n){const l=this,f=Date.now()-s;function d(){s=Date.now(),e.apply(l,n)}function p(){a=void 0}i||(r||!c||a||d(),u(),void 0===c&&f>t?r?(s=Date.now(),o||(a=setTimeout(c?p:d,t))):d():!0!==o&&(a=setTimeout(c?p:d,void 0===c?t-f:t)))}return l.cancel=function(t){const{upcomingOnly:e=!1}=t||{};u(),i=!e},l}function b(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}let O,j,E;"classList"in document.documentElement?(O=function(t,e){return t.classList.contains(e)},j=function(t,e){t.classList.add(e)},E=function(t,e){t.classList.remove(e)}):(O=function(t,e){return b(e).test(t.className)},j=function(t,e){O(t,e)||(t.className=t.className+" "+e)},E=function(t,e){t.className=t.className.replace(b(e)," ")});function L(t,...e){t&&t.addEventListener&&t.addEventListener(...e)}function R(t,...e){t&&t.removeEventListener&&t.removeEventListener(...e)}const V=Symbol("iterate"),C=new WeakMap;let z;function D(t,e,n){if(void 0===z)return;let o=C.get(t);void 0===o&&C.set(t,o=new Map);let r=o.get(n);void 0===r&&o.set(n,r=new Set),r.has(z)||(r.add(z),z.deps.push(r),z.options.onTrack&&z.options.onTrack({effect:z,target:t,type:e,key:n}))}function _(t,e,n,r){const c=C.get(t);if(void 0===c)return;const a=new Set,i=new Set;if("clear"===e)c.forEach((t=>{I(a,i,t)}));else if(void 0!==n&&I(a,i,c.get(n)),"add"===e||"delete"===e){const e=function o(t){return Array.isArray(t)}(t)?"length":V;I(a,i,c.get(e))}const s=o=>{!function(t,e,n,o,r){if(t.options.onTrigger){const c={effect:t,target:e,key:o,type:n};t.options.onTrigger(r?Object.assign(c,r):c)}void 0!==t.options.scheduler?t.options.scheduler(t):t()}(o,t,e,n,r)};i.forEach(s),a.forEach(s)}function I(t,e,n){void 0!==n&&n.forEach((n=>{n.options.computed?e.add(n):t.add(n)}))}const J=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(a)),K={get:function(t=!1,n=!1){return function(t,o,r){const c=Reflect.get(t,o,r);return a(o)&&J.has(o)?c:n?(D(t,"get",o),c):(D(t,"get",o),e(c)?Y(c):c)}}(),set:function(e=!1,n=!1){return function(e,o,r,c){const a=e[o];n||(r=et(r));const i=t(e,o),s=Reflect.set(e,o,r,c);if(e===et(c)){const t={oldValue:a,newValue:r};i?g(r,a)&&_(e,"set",o,t):_(e,"add",o,t)}return s}}(),deleteProperty:function(e,n){const o=t(e,n),r=e[n],c=Reflect.deleteProperty(e,n);return c&&o&&_(e,"delete",n,{oldValue:r}),c},has:function(t,e){const n=Reflect.has(t,e);return D(t,"has",e),n},ownKeys:function(t){return D(t,"iterate",V),Reflect.ownKeys(t)}},B=t=>e(t)?Y(t):t,U=t=>Reflect.getPrototypeOf(t),Z={get(t){return function(t,e,n){return D(t=et(t),"get",e=et(e)),n(U(t).get.call(t,e))}(this,t,B)},get size(){return D(t=et(t=this),"iterate",V),Reflect.get(U(t),"size",t);var t},has:function(t){const e=et(this);return D(e,"has",t=et(t)),U(e).has.call(e,t)},add:function(t){t=et(t);const e=et(this),n=U(e),o=n.has.call(e,t),r=n.add.call(e,t);return o||_(e,"add",t,{newValue:t}),r},set:function(t,e){e=et(e);const n=et(this),o=U(n),r=o.has.call(n,t),c=o.get.call(n,t),a=o.set.call(n,t,e),i={oldValue:c,newValue:e};return r?g(e,c)&&_(n,"set",t,i):_(n,"add",t,i),a},delete:function(t){const e=et(this),n=U(e),o=n.has.call(e,t),r=n.get?n.get.call(e,t):void 0,c=n.delete.call(e,t);return o&&_(e,"delete",t,{oldValue:r}),c},clear:function(){const t=et(this),e=0!==t.size,n=t instanceof Map?new Map(t):new Set(t),o=U(t).clear.call(t);return e&&_(t,"clear",void 0,{oldTarget:n}),o},forEach:function(t,e){const n=this,o=et(n),r=B;return D(o,"iterate",V),U(o).forEach.call(o,(function(e,o){return t.call(n,r(e),r(o),n)}),e)}};["keys","values","entries",Symbol.iterator].forEach((t=>{Z[t]=function(t,e){return function(...e){const n=et(this),o="entries"===t||t===Symbol.iterator&&n instanceof Map,r=U(n)[t].apply(n,e),c=B;return D(n,"iterate",V),{next(){const{value:t,done:e}=r.next();return e?{value:t,done:e}:{value:o?[c(t[0]),c(t[1])]:c(t),done:e}},[Symbol.iterator](){return this}}}}(t)}));const q={get:(F=Z,(e,n,o)=>Reflect.get(t(F,n)&&n in e?F:e,n,o))};var F;const G=new WeakMap,H=new WeakMap,Q=new WeakSet,X=new Set([Set,Map,WeakMap,WeakSet]);function Y(t){return function(t,n,o,r,c){if(!e(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;let a=n.get(t);if(void 0!==a)return a;if(o.has(t))return t;if(!tt(t))return t;const i=X.has(t.constructor)?c:r;return a=new Proxy(t,i),n.set(t,a),o.set(a,t),a}(t,G,H,K,q)}const tt=t=>{return e=function u(t){return Object.prototype.toString.call(t).slice(8,-1)}(t),"Object,Array,Map,Set,WeakMap,WeakSet".indexOf(e)>-1&&!Q.has(t);var e};function et(t){return H.get(t)||t}},"./stories/useKeyPress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _Example$parameters,_Example$parameters2,_Example$parameters2$,_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var keys=["1","2","3","4","5","6","7","8","9","0"],Demo=function Demo(){for(var states=[],_i=0,_keys=keys;_i<_keys.length;_i++){var key=_keys[_i];states.push((0,_src__WEBPACK_IMPORTED_MODULE_1__.Kr)(key)[0])}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",maxWidth:"400px",margin:"40px auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{textAlign:"center"},children:["Try pressing numbers",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),states.reduce((function(s,pressed,index){return s+(pressed?(s?" + ":"")+keys[index]:"")}),"")]})})})};Demo.displayName="Demo";const __WEBPACK_DEFAULT_EXPORT__={title:"hook/useKeyPress",component:Demo,tags:["autodocs"],argTypes:{}};var Example={};Example.parameters=_objectSpread(_objectSpread({},Example.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var deselectCurrent=__webpack_require__("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"};module.exports=function copy(text,options){var debug,message,reselectPrevious,range,selection,mark,success=!1;options||(options={}),debug=options.debug||!1;try{if(reselectPrevious=deselectCurrent(),range=document.createRange(),selection=document.getSelection(),(mark=document.createElement("span")).textContent=text,mark.ariaHidden="true",mark.style.all="unset",mark.style.position="fixed",mark.style.top=0,mark.style.clip="rect(0, 0, 0, 0)",mark.style.whiteSpace="pre",mark.style.webkitUserSelect="text",mark.style.MozUserSelect="text",mark.style.msUserSelect="text",mark.style.userSelect="text",mark.addEventListener("copy",(function(e){if(e.stopPropagation(),options.format)if(e.preventDefault(),void 0===e.clipboardData){debug&&console.warn("unable to use e.clipboardData"),debug&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var format=clipboardToIE11Formatting[options.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(format,text)}else e.clipboardData.clearData(),e.clipboardData.setData(options.format,text);options.onCopy&&(e.preventDefault(),options.onCopy(e.clipboardData))})),document.body.appendChild(mark),range.selectNodeContents(mark),selection.addRange(range),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");success=!0}catch(err){debug&&console.error("unable to copy using execCommand: ",err),debug&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(options.format||"text",text),options.onCopy&&options.onCopy(window.clipboardData),success=!0}catch(err){debug&&console.error("unable to copy using clipboardData: ",err),debug&&console.error("falling back to prompt"),message=function format(message){var copyKey=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return message.replace(/#{\s*key\s*}/g,copyKey)}("message"in options?options.message:"Copy to clipboard: #{key}, Enter"),window.prompt(message,text)}}finally{selection&&("function"==typeof selection.removeRange?selection.removeRange(range):selection.removeAllRanges()),mark&&document.body.removeChild(mark),reselectPrevious()}return success}},"./node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function assign(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)target[key]=source[key]}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>api});var api=function init(converter,defaultAttributes){function set(name,value,attributes){if("undefined"!=typeof document){"number"==typeof(attributes=assign({},defaultAttributes,attributes)).expires&&(attributes.expires=new Date(Date.now()+864e5*attributes.expires)),attributes.expires&&(attributes.expires=attributes.expires.toUTCString()),name=encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var stringifiedAttributes="";for(var attributeName in attributes)attributes[attributeName]&&(stringifiedAttributes+="; "+attributeName,!0!==attributes[attributeName]&&(stringifiedAttributes+="="+attributes[attributeName].split(";")[0]));return document.cookie=name+"="+converter.write(value,name)+stringifiedAttributes}}return Object.create({set,get:function get(name){if("undefined"!=typeof document&&(!arguments.length||name)){for(var cookies=document.cookie?document.cookie.split("; "):[],jar={},i=0;i<cookies.length;i++){var parts=cookies[i].split("="),value=parts.slice(1).join("=");try{var found=decodeURIComponent(parts[0]);if(jar[found]=converter.read(value,found),name===found)break}catch(e){}}return name?jar[name]:jar}},remove:function(name,attributes){set(name,"",assign({},attributes,{expires:-1}))},withAttributes:function(attributes){return init(this.converter,assign({},this.attributes,attributes))},withConverter:function(converter){return init(assign({},this.converter,converter),this.attributes)}},{attributes:{value:Object.freeze(defaultAttributes)},converter:{value:Object.freeze(converter)}})}({read:function(value){return'"'===value[0]&&(value=value.slice(1,-1)),value.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(value){return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})},"./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/.pnpm/screenfull@6.0.2/node_modules/screenfull/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const methodMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],nativeAPI=(()=>{if("undefined"==typeof document)return!1;const unprefixedMethods=methodMap[0],returnValue={};for(const methodList of methodMap){const exitFullscreenMethod=methodList?.[1];if(exitFullscreenMethod in document){for(const[index,method]of methodList.entries())returnValue[unprefixedMethods[index]]=method;return returnValue}}return!1})(),eventNameMap={change:nativeAPI.fullscreenchange,error:nativeAPI.fullscreenerror};let screenfull={request:(element=document.documentElement,options)=>new Promise(((resolve,reject)=>{const onFullScreenEntered=()=>{screenfull.off("change",onFullScreenEntered),resolve()};screenfull.on("change",onFullScreenEntered);const returnPromise=element[nativeAPI.requestFullscreen](options);returnPromise instanceof Promise&&returnPromise.then(onFullScreenEntered).catch(reject)})),exit:()=>new Promise(((resolve,reject)=>{if(!screenfull.isFullscreen)return void resolve();const onFullScreenExit=()=>{screenfull.off("change",onFullScreenExit),resolve()};screenfull.on("change",onFullScreenExit);const returnPromise=document[nativeAPI.exitFullscreen]();returnPromise instanceof Promise&&returnPromise.then(onFullScreenExit).catch(reject)})),toggle:(element,options)=>screenfull.isFullscreen?screenfull.exit():screenfull.request(element,options),onchange(callback){screenfull.on("change",callback)},onerror(callback){screenfull.on("error",callback)},on(event,callback){const eventName=eventNameMap[event];eventName&&document.addEventListener(eventName,callback,!1)},off(event,callback){const eventName=eventNameMap[event];eventName&&document.removeEventListener(eventName,callback,!1)},raw:nativeAPI};Object.defineProperties(screenfull,{isFullscreen:{get:()=>Boolean(document[nativeAPI.fullscreenElement])},element:{enumerable:!0,get:()=>document[nativeAPI.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[nativeAPI.fullscreenEnabled])}}),nativeAPI||(screenfull={isEnabled:!1});const __WEBPACK_DEFAULT_EXPORT__=screenfull},"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js":module=>{module.exports=function(){var selection=document.getSelection();if(!selection.rangeCount)return function(){};for(var active=document.activeElement,ranges=[],i=0;i<selection.rangeCount;i++)ranges.push(selection.getRangeAt(i));switch(active.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":active.blur();break;default:active=null}return selection.removeAllRanges(),function(){"Caret"===selection.type&&selection.removeAllRanges(),selection.rangeCount||ranges.forEach((function(range){selection.addRange(range)})),active&&active.focus()}}}}]);