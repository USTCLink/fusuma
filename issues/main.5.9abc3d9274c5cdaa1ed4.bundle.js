(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
module.exports = __webpack_require__(339);


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(333);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(63)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(335);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(63)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0-title.md": 337,
	"./01-many-pages.md": 338
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 336;

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slides", function() { return slides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fusumaProps", function() { return fusumaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}/* @jsx mdx */var slides=[function(props){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h2",null,"issues"));}];var fusumaProps=[{}];var makeShortcode=function makeShortcode(name){return function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("div",props);};};var layoutProps={slides:slides};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(MDXLayout,_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h2",null,"issues"));}MDXContent.isMDXComponent=true;

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slides", function() { return slides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fusumaProps", function() { return fusumaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}/* @jsx mdx */var slides=[function(props){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("a",{href:"https://github.com/hiroppy/fusuma/issues/110",rel:"noopener","aria-label":"issue110"},"https://github.com/hiroppy/fusuma/issues/110"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("br",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"1"));},function(props){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"2"));},function(props){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"3"));},function(props){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"4"));},function(props){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"5"));},function(props){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"6"));},function(props){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"7"));}];var fusumaProps=[{sectionTitle:'many pages'},{},{},{},{},{},{}];var makeShortcode=function makeShortcode(name){return function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("div",props);};};var layoutProps={slides:slides};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])(MDXLayout,_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("a",{href:"https://github.com/hiroppy/fusuma/issues/110",rel:"noopener","aria-label":"issue110"},"https://github.com/hiroppy/fusuma/issues/110"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("br",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"1"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"2"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"3"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"4"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"6"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[/* mdx */ "a"])("h1",null,"7"));}MDXContent.isMDXComponent=true;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/webpack/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./packages/client/node_modules/react-dom/index.js
var react_dom = __webpack_require__(96);

// CONCATENATED MODULE: ./packages/client/src/utils/fetchSlides.js
function fetchSlides(dir){/**
   * get all md and html contents
   * @param {Array<string>} context - filenames
   */function fetchAll(context){return{id:context.id,slides:context.keys().sort().map(function(e){return context(e);})};}return fetchAll(dir);}
// EXTERNAL MODULE: ./packages/client/node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(95);

// CONCATENATED MODULE: ./packages/client/src/components/ToC.js
var ToC_ToC=function ToC(_ref){var list=_ref.list;return function(){return react_default.a.createElement("div",{className:"toc size-70 aligncenter"},react_default.a.createElement("ol",null,list.map(function(_ref2,i){var index=_ref2.index,title=_ref2.title;return react_default.a.createElement("li",{key:i/* fix */},react_default.a.createElement("a",{href:"#slide=".concat(index),title:title},react_default.a.createElement("span",{className:"chapter"},title),react_default.a.createElement("span",{className:"toc-page"},index)));})));};};
// CONCATENATED MODULE: ./packages/client/src/utils/createSlidesProps.js
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function createSlidesProps(slides,currentIndex){var slidesArr=[];var propsArr=[];var res={};slides.forEach(function(_ref){var slides=_ref.slides,fusumaProps=_ref.fusumaProps;slidesArr.push.apply(slidesArr,_toConsumableArray(slides));propsArr.push.apply(propsArr,_toConsumableArray(fusumaProps));});propsArr.reduce(function(acc,_ref2,i){var sectionTitle=_ref2.sectionTitle;if(sectionTitle){acc.push({title:sectionTitle,index:i+1});}return acc;},res.contentsList=[]);res.slides=slidesArr.map(function(slide,i){var props=propsArr[i];return{slide:props.contents?ToC_ToC({list:res.contentsList}):slide,fusumaProps:props};});return res;}
// EXTERNAL MODULE: ./packages/client/src/components/ContentView/Base.js + 1 modules
var Base = __webpack_require__(92);

// CONCATENATED MODULE: ./packages/client/src/router.js
function router(){if(location.search.includes('presenter=host'))return'host';if(location.search.includes('presenter=view'))return'view';return'common';}
// CONCATENATED MODULE: ./packages/client/src/components/AppContainer.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var AppContainer_AppContainer=function AppContainer(_ref){var originalSlides=_ref.slides,hash=_ref.hash;var parsedUrl=new URL(window.location.href);var params=parsedUrl.searchParams;var isLive=params.get('isLive');var index=parsedUrl.hash.match(/^#slide=(.+?)$/);index=index!==null?index[1]-1:0;var setCommentsListComponent=/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _ref3,CommentsList;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Promise.all(/* import() | live */[__webpack_require__.e(13), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 642));case 2:_ref3=_context.sent;CommentsList=_ref3.CommentsList;AddCommentsListComponents(CommentsList);case 5:case"end":return _context.stop();}}},_callee);}));return function setCommentsListComponent(){return _ref2.apply(this,arguments);};}();// TODO: fix
// don't use async/await
var setSidebarComponent=function setSidebarComponent(){Promise.all(/* import() | Sidebar */[__webpack_require__.e(0), __webpack_require__.e(12), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 643)).then(function(_ref4){var Sidebar=_ref4.Sidebar;AddSidebarComponent(Sidebar);});};var changeSidebarState=function changeSidebarState(){var isSidebar=params.get('sidebar')==='false'||!true||mode!=='common'?false:true;updateOpenSidebarStatus(false);updateSidebarStatus(isSidebar);};var setContentViewComponent=/*#__PURE__*/function(){var _ref5=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var _ref6,Comp;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(mode==='common')){_context2.next=4;break;}AddContentComponent(Base["a" /* Base */]);_context2.next=16;break;case 4:if(!(mode==='view')){_context2.next=10;break;}_context2.next=7;return Promise.all(/* import() | presenter.view */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 646));case 7:_context2.t0=_context2.sent;_context2.next=13;break;case 10:_context2.next=12;return Promise.all(/* import() | presenter.host */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 645));case 12:_context2.t0=_context2.sent;case 13:_ref6=_context2.t0;Comp=_ref6.default;AddContentComponent(Comp);case 16:case"end":return _context2.stop();}}},_callee2);}));return function setContentViewComponent(){return _ref5.apply(this,arguments);};}();var goTo=function goTo(num){if(window.slide){window.slide.goToSlide(num);}};var onSetSidebarOpen=function onSetSidebarOpen(_ref7){var isOpen=_ref7.isOpen;console.log('aaaa',isOpenSidebar);if(isOpenSidebar!==isOpen){updateOpenSidebarStatus(isOpen);}};var onChangeSlideIndex=function onChangeSlideIndex(currentIndex){updateCurrentIndex(currentIndex);};var onRunPresentationMode=function onRunPresentationMode(){window.slide=null;AddContentComponent(null);updateMode('host');};var terminate=function terminate(){window.slide=null;AddContentComponent(null);updateMode('common');};var initialMode=router();var createdProps=createSlidesProps(originalSlides,index);var _useState=Object(react["useState"])(initialMode),_useState2=_slicedToArray(_useState,2),mode=_useState2[0],updateMode=_useState2[1];// common, view, host
var _useState3=Object(react["useState"])(createdProps.slides),_useState4=_slicedToArray(_useState3,2),slides=_useState4[0],updateSlides=_useState4[1];var _useState5=Object(react["useState"])(createdProps.contentsList),_useState6=_slicedToArray(_useState5,2),contentsList=_useState6[0],updateContentsList=_useState6[1];var _useState7=Object(react["useState"])(true),_useState8=_slicedToArray(_useState7,2),isSidebar=_useState8[0],updateSidebarStatus=_useState8[1];var _useState9=Object(react["useState"])(false),_useState10=_slicedToArray(_useState9,2),isOpenSidebar=_useState10[0],updateOpenSidebarStatus=_useState10[1];var _useState11=Object(react["useState"])(index),_useState12=_slicedToArray(_useState11,2),currentIndex=_useState12[0],updateCurrentIndex=_useState12[1];var _useState13=Object(react["useState"])(null),_useState14=_slicedToArray(_useState13,2),SidebarComponent=_useState14[0],AddSidebarComponent=_useState14[1];// for lazyload
var _useState15=Object(react["useState"])(mode==='common'?Base["a" /* Base */]:undefined),_useState16=_slicedToArray(_useState15,2),ContentComponent=_useState16[0],AddContentComponent=_useState16[1];var _useState17=Object(react["useState"])(null),_useState18=_slicedToArray(_useState17,2),CommentsListComponent=_useState18[0],AddCommentsListComponents=_useState18[1];// for lazyload
Object(react["useEffect"])(function(){changeSidebarState();if(!SidebarComponent){setSidebarComponent();}if(mode==='host'){AddCommentsListComponents(null);}else if(undefined&&isLive!=='false'){setCommentsListComponent();}if(!ContentComponent){setContentViewComponent();}},[mode]);// for HMR
if(false){ var _createdProps, _useState19, _useState20, prevHash, updatePrevHash; }return react_default.a.createElement(react_default.a.Fragment,null,isSidebar&&react_default.a.createElement(react_default.a.Fragment,null,SidebarComponent&&react_default.a.createElement(SidebarComponent,{goTo:goTo,isOpen:isOpenSidebar,terminate:terminate,contents:contentsList,onStateChange:onSetSidebarOpen,currentIndex:currentIndex,runPresentationMode:onRunPresentationMode}),react_default.a.createElement(index_esm["f" /* MdMenu */],{className:"btn-sidebar",onClick:function onClick(){return onSetSidebarOpen({isOpen:true});}})),ContentComponent&&react_default.a.createElement(ContentComponent,{hash:hash,slides:slides,terminate:terminate,currentIndex:currentIndex,onChangeSlideIndex:onChangeSlideIndex}),CommentsListComponent&&react_default.a.createElement(CommentsListComponent,null));};
// EXTERNAL MODULE: ./packages/client/assets/style/webSlides.css
var webSlides = __webpack_require__(332);

// EXTERNAL MODULE: ./packages/client/assets/style/common.css
var common = __webpack_require__(334);

// CONCATENATED MODULE: ./packages/client/src/setup/css.js

// CONCATENATED MODULE: ./packages/client/src/index.js
function src_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function src_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){src_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){src_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function createBody(){var slides=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var hash=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var renderMethod= false?undefined:react_dom["hydrate"];renderMethod(react_default.a.createElement(AppContainer_AppContainer,{slides:slides,hash:hash}),document.getElementById('root'));}src_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var slidesInfo,_ref2,setTargetBlank;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:slidesInfo=fetchSlides(__webpack_require__(336));if(false){}createBody(slidesInfo.slides);if(false){}_context.next=6;return __webpack_require__.e(/* import() | target-blank */ 9).then(__webpack_require__.bind(null, 641));case 6:_ref2=_context.sent;setTargetBlank=_ref2.setTargetBlank;setTargetBlank();case 9:case"end":return _context.stop();}}},_callee);}))();

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./packages/webpack/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./packages/client/node_modules/prismjs/components/prism-core.js
var prism_core = __webpack_require__(130);
var prism_core_default = /*#__PURE__*/__webpack_require__.n(prism_core);

// EXTERNAL MODULE: ./packages/client/node_modules/prismjs/components/prism-clike.js
var prism_clike = __webpack_require__(326);

// EXTERNAL MODULE: ./packages/client/node_modules/prismjs/components/prism-javascript.js
var prism_javascript = __webpack_require__(327);

// EXTERNAL MODULE: ./packages/client/node_modules/prismjs/themes/prism.css
var prism = __webpack_require__(328);

// EXTERNAL MODULE: ./packages/client/node_modules/classnames/index.js
var classnames = __webpack_require__(131);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./packages/client/node_modules/webslides/static/js/webslides.js
var webslides = __webpack_require__(331);

// CONCATENATED MODULE: ./packages/client/src/setup/webSlides.js
function setup(_ref){var _ref$showIndex=_ref.showIndex,showIndex=_ref$showIndex===void 0?true:_ref$showIndex;var ws=new window.WebSlides({loop:true,showIndex:showIndex,navigateOnScroll:false});return ws;}
// CONCATENATED MODULE: ./packages/client/src/components/ContentView/Base.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var articleClass= false?undefined:undefined;var mermaid=null;function reloadChart(){if(mermaid){mermaid.reload();}}function setupMermaid(){return _setupMermaid.apply(this,arguments);}function _setupMermaid(){_setupMermaid=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _ref3,Mermaid;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Promise.all(/* import() | Mermaid */[__webpack_require__.e(11), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 644));case 2:_ref3=_context.sent;Mermaid=_ref3.Mermaid;mermaid=new Mermaid();mermaid.init();case 6:case"end":return _context.stop();}}},_callee);}));return _setupMermaid.apply(this,arguments);}var Base=Object(react["memo"])(function(_ref){var slides=_ref.slides,onChangeSlideIndex=_ref.onChangeSlideIndex,hash=_ref.hash;// for SSR
if(false){}// setup
Object(react["useEffect"])(function(){if(!window.slide){window.slide=setup({});// for presenter:view
window.slide.el.addEventListener('ws:slide-change',function(e){if(false){}if(onChangeSlideIndex){onChangeSlideIndex(e.detail.currentSlide0);}});}if(false){}prism_core_default.a.highlightAll();},[]);return react_default.a.createElement("article",{className:articleClass,id:"webslides"},slides.map(function(_ref2,i){var Slide=_ref2.slide,fusumaProps=_ref2.fusumaProps;return react_default.a.createElement("section",{key:i,className:classnames_default()('aligncenter',fusumaProps.classes,fusumaProps.sectionTitle?'section-title':undefined)},react_default.a.createElement(Slide,null));}));},function(prevProps,nextProps){return prevProps.hash===nextProps.hash;});

/***/ })

},[[133,8,10]],[0,12,3]]);