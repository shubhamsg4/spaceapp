!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=(c(n(0)),c(n(16))),u=c(n(19)),l=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}t.default=[a({},r.default,{routes:[a({},l.default,{path:"/",exact:!0}),a({},u.default)]})]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,u=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,u=e}finally{try{!a&&c.return&&c.return()}finally{if(r)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=n(0),l=f(u),c=n(2),o=f(n(5)),s=n(6),i=f(n(17));function f(e){return e&&e.__esModule?e:{default:e}}n(9);var d=function(e){var t=e.spaceValues,n=e.spacedata,c=n.spaceData,o=n.loading,s=(0,u.useState)({launch_year:"",land_success:"",launch_success:""}),f=r(s,2),d=f[0],m=f[1];(0,u.useEffect)((function(){t()}),[]);var p=function(e){console.log("start"),e.preventDefault(),e.target.style.backgroundColor="green",console.log(d.launch_year),m(a({},d,{launch_year:e.target.value})),t(d),console.log(d.launch_year)},v=function(e){e.preventDefault(),m(a({},d,{launch_success:e.target.value})),t(d),console.log(d)},b=function(e){e.preventDefault(),m(a({},d,{land_success:e.target.value})),t(d),console.log(d)};return l.default.createElement(u.Fragment,null,l.default.createElement("div",{className:"screen-size"},l.default.createElement("div",{className:"grid-container-2-80"},l.default.createElement("div",{className:"filter"},l.default.createElement("h3",null,"Filters"),l.default.createElement("h5",{className:"alignment"},"Launch Year"),l.default.createElement("hr",{align:"center",className:"line"}),l.default.createElement("div",{className:"grid-container-2"},l.default.createElement("button",{className:"year-button",value:"2006",onClick:function(e){return p(e)}},"2006"),l.default.createElement("button",{className:"year-button span-data-right",value:"2007",onClick:function(e){return p(e)}},"2007"),l.default.createElement("button",{className:"year-button",value:"2008",onClick:function(e){return p(e)}},"2008"),l.default.createElement("button",{className:"year-button span-data-right",value:"2009",onClick:function(e){return p(e)}},"2009"),l.default.createElement("button",{className:"year-button ",value:"2010",onClick:function(e){return p(e)}},"2010"),l.default.createElement("button",{className:"year-button",value:"2011",onClick:function(e){return p(e)}},"2011"),l.default.createElement("button",{className:"year-button",value:"2012",onClick:function(e){return p(e)}},"2012"),l.default.createElement("button",{className:"year-button",value:"2013",onClick:function(e){return p(e)}},"2013"),l.default.createElement("button",{className:"year-button",value:"2014",onClick:function(e){return p(e)}},"2014"),l.default.createElement("button",{className:"year-button",value:"2015",onClick:function(e){return p(e)}},"2015"),l.default.createElement("button",{className:"year-button",value:"2016",onClick:function(e){return p(e)}},"2016"),l.default.createElement("button",{className:"year-button",value:"2017",onClick:function(e){return p(e)}},"2017"),l.default.createElement("button",{className:"year-button",value:"2018",onClick:function(e){return p(e)}},"2018"),l.default.createElement("button",{className:"year-button",value:"2019",onClick:function(e){return p(e)}},"2019"),l.default.createElement("button",{className:"year-button",value:"2020",onClick:function(e){return p(e)}},"2020")),l.default.createElement("h5",{className:"alignment"},"Successful Launch"),l.default.createElement("hr",{align:"center",className:"line"}),l.default.createElement("button",{className:"year-button",value:"true",onClick:function(e){return v(e)}},"True"),l.default.createElement("button",{className:"year-button span-data-right",value:"false",onClick:function(e){return v(e)}},"False"),l.default.createElement("h5",{className:"alignment"},"Successful Landing"),l.default.createElement("hr",{align:"center",className:"line"}),l.default.createElement("div",{className:"margin-bottom"},l.default.createElement("button",{className:"year-button span-data-left",value:"true",onClick:function(e){return b(e)}},"True"),l.default.createElement("button",{className:"year-button span-data-right",value:"false",onClick:function(e){return b(e)}},"False"))),l.default.createElement("div",{className:"horizontal-flex"},c.length>0?l.default.createElement(u.Fragment,null,!1===o&&c.map((function(e){return l.default.createElement(i.default,{key:e.flight_number,data:e})}))):l.default.createElement("h4",null,"No space Card availble for this details."))),l.default.createElement("h3",{className:"developer-name"},"Developed By:Shubham Goel")))};d.propTypes={spaceValues:o.default.func.isRequired,spaceData:o.default.object.isRequired},t.default={loadData:function(e){return e.dispatch((0,s.spaceValues)())},component:(0,c.connect)((function(e){return{spacedata:e.spacedata}}),{spaceValues:s.spaceValues})(d)}},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spaceValues=void 0;var a,r=n(7),u=n(8),l=(a=u)&&a.__esModule?a:{default:a};console.log("in action");t.spaceValues=function(e){return t=regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("action"),console.log(e),t.prev=2,t.next=5,l.default.get("https://api.spaceXdata.com/v3/launches?limit=100",{params:e});case 5:a=t.sent,n({type:r.SPACEDATA,payload:a.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:r.SPACEDATA_ERROR});case 12:case"end":return t.stop()}}),t,void 0,[[2,9]])})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function a(r,u){try{var l=e[r](u),c=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(c).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(c)}("next")}))},function(e){return n.apply(this,arguments)};var t,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SPACEDATA="NAVDATA",t.SPACEDATA_ERROR="NAVDATA_ERROR"},function(e,t){e.exports=require("axios")},function(e,t,n){},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";n(13);var a=o(n(14)),r=n(1),u=(o(n(15)),o(n(3))),l=o(n(20)),c=o(n(24));function o(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.default)();s.use(a.default.static("public")),s.get("*",(function(e,t){var n=(0,c.default)(e),a=(0,r.matchRoutes)(u.default,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(n):null})).map((function(e){if(e)return new Promise((function(t,n){e.then(t).catch(t)}))}));Promise.all(a).then((function(){var a={},r=(0,l.default)(e,n,a);if(a.url)return t.redirect(301,a.url);a.notFound&&t.status(404),t.send(r)}))}));var i=process.env.PORT||3e3;s.listen(i,(function(){return console.log("Server started on port "+i)}))},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-http-proxy")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(0)),r=n(1),u=(c(n(4)),n(6)),l=c(n(18));function c(e){return e&&e.__esModule?e:{default:e}}n(9);t.default={component:function(e){var t=e.route;return a.default.createElement("div",null,a.default.createElement(l.default,null),(0,r.renderRoutes)(t.routes))},loadData:function(e){return(0,e.dispatch)((0,u.spaceValues)())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=l(a),u=l(n(5));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.data;return r.default.createElement(a.Fragment,null,r.default.createElement("div",{className:"space-card"},r.default.createElement("div",{className:"container"},r.default.createElement("img",{className:"img",src:t.links.mission_patch_small,alt:"spacex_image"})),r.default.createElement("h5",{className:"blue-color"},t.mission_name," #",t.flight_number),r.default.createElement("h4",null,"Mission Ids:"),r.default.createElement("ul",null,t.mission_id.map((function(e){return r.default.createElement("li",{className:"list"},e)}))),r.default.createElement("span",{className:"span-margin"},r.default.createElement("h4",null,"Launch Year:"),r.default.createElement("h5",{className:"card-value light-blue-color"},t.launch_year)),r.default.createElement("span",{className:"span-margin"},r.default.createElement("h4",null,"Successful Launch:"),r.default.createElement("h5",{className:"card-value light-blue-color"},String(t.launch_success))),r.default.createElement("span",{className:"span-margin"},r.default.createElement("h4",null,"Successful Landing:"),r.default.createElement("h5",{className:"card-value light-blue-color"},String(t.rocket.first_stage.cores[0].land_success)))))};c.propTypes={data:u.default.object.isRequired},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),u=(a=r)&&a.__esModule?a:{default:a},l=n(10);n(2);t.default=function(){return u.default.createElement("div",null,u.default.createElement(l.Link,{to:"/"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),u=(a=r)&&a.__esModule?a:{default:a};t.default={component:function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,u.default.createElement("h1",null,"Ooops, route not found.")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(0)),r=n(21),u=n(10),l=n(2),c=n(1),o=f(n(22)),s=n(23),i=f(n(3));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){var f=(0,r.renderToString)(a.default.createElement(l.Provider,{store:t},a.default.createElement(u.StaticRouter,{location:e.path,context:n},a.default.createElement("div",null,(0,c.renderRoutes)(i.default.default))))),d=s.Helmet.renderStatic();return"\n    <html>\n      <head>\n        "+d.title.toString()+"\n        "+d.meta.toString()+'\n        <meta content="width=device-width, initial-scale=1" name="viewport" />\n        <link rel="stylesheet" type="text/css" href="./styles.css" />\n      </head>\n      <body>\n        <div id="root">'+f+"</div>\n        <script>\n          window.INITIAL_STATE = "+(0,o.default)(t.getState())+'\n        <\/script>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  '}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("react-helmet")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),r=c(n(25)),u=c(n(8)),l=c(n(26));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=u.default.create({baseURL:"http://react-ssr-api.herokuapp.com",headers:{cookie:e.get("cookie")||""}});return(0,a.createStore)(l.default,{},(0,a.applyMiddleware)(r.default.withExtraArgument(t)))}},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(11),u=n(27),l=(a=u)&&a.__esModule?a:{default:a};console.log("index reducer working"),t.default=(0,r.combineReducers)({spacedata:l.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=t.type,l=t.payload;switch(n){case r.SPACEDATA:return console.log("working"),a({},e,{spaceData:l,loading:!1});case r.SPACEDATA_ERROR:return a({},e,{error:l,loading:!1});default:return e}};var r=n(7),u={spaceData:[],error:{},loading:!0};console.log("moviedata reducer")}]);