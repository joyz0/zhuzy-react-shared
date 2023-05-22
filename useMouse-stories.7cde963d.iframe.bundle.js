/*! For license information please see useMouse-stories.7cde963d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_zhuzy_react_shared=self.webpackChunk_zhuzy_react_shared||[]).push([[7333],{"./node_modules/.pnpm/@zhuzy+utils@0.1.3_@types+node@20.1.5/node_modules/@zhuzy/utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P2:()=>f,S1:()=>w,jU:()=>s,on:()=>L});const s="undefined"!=typeof window;function f(n,e,t={}){const{noTrailing:o=!1,noLeading:c=!1,debounceMode:i}=t;let s,u=!1,r=0;function a(){s&&clearTimeout(s)}function f(...t){const f=this,l=Date.now()-r;function d(){r=Date.now(),e.apply(f,t)}function p(){s=void 0}u||(c||!i||s||d(),a(),void 0===i&&l>n?c?(r=Date.now(),o||(s=setTimeout(i?p:d,n))):d():!0!==o&&(s=setTimeout(i?p:d,void 0===i?n-l:n)))}return f.cancel=function(n){const{upcomingOnly:e=!1}=n||{};a(),u=!e},f}function d(n){return new RegExp("(^|\\s+)"+n+"(\\s+|$)")}let p,m,g;"classList"in document.documentElement?(p=function(n,e){return n.classList.contains(e)},m=function(n,e){n.classList.add(e)},g=function(n,e){n.classList.remove(e)}):(p=function(n,e){return d(e).test(n.className)},m=function(n,e){p(n,e)||(n.className=n.className+" "+e)},g=function(n,e){n.className=n.className.replace(d(e)," ")});function L(n,...e){n&&n.addEventListener&&n.addEventListener(...e)}function w(n,...e){n&&n.removeEventListener&&n.removeEventListener(...e)}},"./stories/useMouse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Example$parameters,_Example$parameters2,_Example$parameters2$,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"hook/useMouse",component:function Demo(){var ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),state=(0,_src__WEBPACK_IMPORTED_MODULE_1__.ii)(ref);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre",{children:JSON.stringify(state,null,2)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{ref,style:{position:"relative",width:"400px",height:"400px",backgroundColor:"whitesmoke"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{style:{position:"absolute",left:"".concat(state.elX,"px"),top:"".concat(state.elY,"px"),pointerEvents:"none",transform:"scale(4)"},children:"🐭"})})]})},tags:["autodocs"],argTypes:{}};var Example={};Example.parameters=_objectSpread(_objectSpread({},Example.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var deselectCurrent=__webpack_require__("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"};module.exports=function copy(text,options){var debug,message,reselectPrevious,range,selection,mark,success=!1;options||(options={}),debug=options.debug||!1;try{if(reselectPrevious=deselectCurrent(),range=document.createRange(),selection=document.getSelection(),(mark=document.createElement("span")).textContent=text,mark.ariaHidden="true",mark.style.all="unset",mark.style.position="fixed",mark.style.top=0,mark.style.clip="rect(0, 0, 0, 0)",mark.style.whiteSpace="pre",mark.style.webkitUserSelect="text",mark.style.MozUserSelect="text",mark.style.msUserSelect="text",mark.style.userSelect="text",mark.addEventListener("copy",(function(e){if(e.stopPropagation(),options.format)if(e.preventDefault(),void 0===e.clipboardData){debug&&console.warn("unable to use e.clipboardData"),debug&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var format=clipboardToIE11Formatting[options.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(format,text)}else e.clipboardData.clearData(),e.clipboardData.setData(options.format,text);options.onCopy&&(e.preventDefault(),options.onCopy(e.clipboardData))})),document.body.appendChild(mark),range.selectNodeContents(mark),selection.addRange(range),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");success=!0}catch(err){debug&&console.error("unable to copy using execCommand: ",err),debug&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(options.format||"text",text),options.onCopy&&options.onCopy(window.clipboardData),success=!0}catch(err){debug&&console.error("unable to copy using clipboardData: ",err),debug&&console.error("falling back to prompt"),message=function format(message){var copyKey=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return message.replace(/#{\s*key\s*}/g,copyKey)}("message"in options?options.message:"Copy to clipboard: #{key}, Enter"),window.prompt(message,text)}}finally{selection&&("function"==typeof selection.removeRange?selection.removeRange(range):selection.removeAllRanges()),mark&&document.body.removeChild(mark),reselectPrevious()}return success}},"./node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function assign(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)target[key]=source[key]}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>api});var api=function init(converter,defaultAttributes){function set(name,value,attributes){if("undefined"!=typeof document){"number"==typeof(attributes=assign({},defaultAttributes,attributes)).expires&&(attributes.expires=new Date(Date.now()+864e5*attributes.expires)),attributes.expires&&(attributes.expires=attributes.expires.toUTCString()),name=encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var stringifiedAttributes="";for(var attributeName in attributes)attributes[attributeName]&&(stringifiedAttributes+="; "+attributeName,!0!==attributes[attributeName]&&(stringifiedAttributes+="="+attributes[attributeName].split(";")[0]));return document.cookie=name+"="+converter.write(value,name)+stringifiedAttributes}}return Object.create({set,get:function get(name){if("undefined"!=typeof document&&(!arguments.length||name)){for(var cookies=document.cookie?document.cookie.split("; "):[],jar={},i=0;i<cookies.length;i++){var parts=cookies[i].split("="),value=parts.slice(1).join("=");try{var found=decodeURIComponent(parts[0]);if(jar[found]=converter.read(value,found),name===found)break}catch(e){}}return name?jar[name]:jar}},remove:function(name,attributes){set(name,"",assign({},attributes,{expires:-1}))},withAttributes:function(attributes){return init(this.converter,assign({},this.attributes,attributes))},withConverter:function(converter){return init(assign({},this.converter,converter),this.attributes)}},{attributes:{value:Object.freeze(defaultAttributes)},converter:{value:Object.freeze(converter)}})}({read:function(value){return'"'===value[0]&&(value=value.slice(1,-1)),value.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(value){return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})},"./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/.pnpm/screenfull@6.0.2/node_modules/screenfull/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const methodMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],nativeAPI=(()=>{if("undefined"==typeof document)return!1;const unprefixedMethods=methodMap[0],returnValue={};for(const methodList of methodMap){const exitFullscreenMethod=methodList?.[1];if(exitFullscreenMethod in document){for(const[index,method]of methodList.entries())returnValue[unprefixedMethods[index]]=method;return returnValue}}return!1})(),eventNameMap={change:nativeAPI.fullscreenchange,error:nativeAPI.fullscreenerror};let screenfull={request:(element=document.documentElement,options)=>new Promise(((resolve,reject)=>{const onFullScreenEntered=()=>{screenfull.off("change",onFullScreenEntered),resolve()};screenfull.on("change",onFullScreenEntered);const returnPromise=element[nativeAPI.requestFullscreen](options);returnPromise instanceof Promise&&returnPromise.then(onFullScreenEntered).catch(reject)})),exit:()=>new Promise(((resolve,reject)=>{if(!screenfull.isFullscreen)return void resolve();const onFullScreenExit=()=>{screenfull.off("change",onFullScreenExit),resolve()};screenfull.on("change",onFullScreenExit);const returnPromise=document[nativeAPI.exitFullscreen]();returnPromise instanceof Promise&&returnPromise.then(onFullScreenExit).catch(reject)})),toggle:(element,options)=>screenfull.isFullscreen?screenfull.exit():screenfull.request(element,options),onchange(callback){screenfull.on("change",callback)},onerror(callback){screenfull.on("error",callback)},on(event,callback){const eventName=eventNameMap[event];eventName&&document.addEventListener(eventName,callback,!1)},off(event,callback){const eventName=eventNameMap[event];eventName&&document.removeEventListener(eventName,callback,!1)},raw:nativeAPI};Object.defineProperties(screenfull,{isFullscreen:{get:()=>Boolean(document[nativeAPI.fullscreenElement])},element:{enumerable:!0,get:()=>document[nativeAPI.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[nativeAPI.fullscreenEnabled])}}),nativeAPI||(screenfull={isEnabled:!1});const __WEBPACK_DEFAULT_EXPORT__=screenfull},"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js":module=>{module.exports=function(){var selection=document.getSelection();if(!selection.rangeCount)return function(){};for(var active=document.activeElement,ranges=[],i=0;i<selection.rangeCount;i++)ranges.push(selection.getRangeAt(i));switch(active.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":active.blur();break;default:active=null}return selection.removeAllRanges(),function(){"Caret"===selection.type&&selection.removeAllRanges(),selection.rangeCount||ranges.forEach((function(range){selection.addRange(range)})),active&&active.focus()}}}}]);