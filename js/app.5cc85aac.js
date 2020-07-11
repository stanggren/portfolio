(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],p=0,u=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"39cb":function(t,e,a){},"447d":function(t,e,a){},"4fbf":function(t,e,a){t.exports=a.p+"img/recipesearch.ec96650f.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=a("8c4f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[a("router-view")],1)],1)},r=[],o=(a("ac1f"),a("1276"),"fade"),c={name:"App",data:function(){return{transitionName:o}},created:function(){var t=this;this.$router.beforeEach((function(e,a,i){var n=e.meta.transitionName||a.meta.transitionName;if("slide"===n){var s=e.path.split("/").length,r=a.path.split("/").length;n=s<r?"slide-right":"slide-left"}t.transitionName=n||o,i()}))}},l=c,d=(a("034f"),a("2877")),p=Object(d["a"])(l,s,r,!1,null,null,null),u=p.exports,m=a("f13c"),h=a.n(m),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about-section"}},[i("div",{staticClass:"menu-container"},[i("div",{staticClass:"about-text"},[i("div",[i("p",{staticClass:"menu-header"},[t._v("Analyze Dashboard")]),t._m(0),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("My main focus was on developing the frontend which consumes data from a document database and displays it through charts and tables. Each chart and table is built as separate modules for the reason of reusing them as widgets on the Visit Group platform.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("The dashboard also includes a datepicker where the user can set a desired timespan for the data to be displayed in. Re-rendering the data after given timespan does not require a pageload due to the separation of logic. Instead data is fetched asynchronous and thus rendered individually for each module.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("The analyze dashboard went in to production in December 2019 and is being used both by employees and customers of Visit Group.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("My time at Visit Group and working on this project has given me good insight in customer based development within an agile workflow.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px","font-style":"oblique"}},[t._v("Reference is available.")]),i("p",{staticClass:"modal-click show-image link",attrs:{id:"show-image"},on:{click:function(e){t.showModal=!0}}},[t._v("Show image")])]),t._m(1),i("div",{staticClass:"return-container"},[i("router-link",{staticStyle:{"text-decoration":"none",display:"flex","flex-direction":"row"},attrs:{to:"/about"}},[i("img",{staticClass:"return-img",attrs:{src:a("f5a4")}}),i("p",{staticClass:"return-text link"},[t._v("return")])])],1)])]),i("div",{staticClass:"content-container"},[t._m(2),i("p",{staticClass:"modal-click enlarge-image link",on:{click:function(e){t.showModal=!0}}},[t._v("Enlarge image")])]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal-overlay",on:{click:function(e){t.showModal=!1}}}):t._e()]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal"},[i("div",[i("img",{attrs:{src:a("aae2"),alt:"Dashboard 1"}})])]):t._e()])],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{attrs:{id:"header"}},[t._v(" During my internship at "),a("a",{staticClass:"link",attrs:{href:"https://www.visitgroup.com/"}},[t._v("Visit Group")]),t._v(" I got the opportunity to build a dashboard. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-container"},[a("p",{staticClass:"menu-header"},[t._v("Tools")]),a("ul",{staticClass:"tools"},[a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("C# (ASP.NET)")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("Vue.JS (Vuex)")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("GIT")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("HTML")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("CSS")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("Elasticsearch")]),a("li",[t._v("Highcharts")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{rel:"preload",src:a("aae2"),alt:"Dashboard 1"}})])}],g={name:"AnalyzeDashboard",data:function(){return{showModal:!1}}},_=g,b=(a("628f"),Object(d["a"])(_,f,v,!1,null,"08c85edc",null)),y=b.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about-section"}},[i("div",{staticClass:"menu-container"},[i("div",{staticClass:"about-text"},[i("div",[i("router-link",{staticClass:"logo-container",attrs:{to:"/"}},[i("h1",{attrs:{id:"A"}},[t._v("A")]),i("h1",{attrs:{id:"slash"}},[t._v("/")]),i("h1",{attrs:{id:"S"}},[t._v("S")])]),t._m(0),i("p",{staticClass:"sub-header"},[t._v("A Gothenburg based web developer with main passion in design and neat user interfaces.")])],1),i("div",{staticClass:"link-container"},[i("p",{staticClass:"menu-header"},[t._v("Projects")]),i("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideProjectInfo,expression:"hideProjectInfo"}],staticStyle:{"padding-inline-start":"0px"}},t._l(t.projectList,(function(e){return i("li",{key:e.id,staticStyle:{"list-style":"none"},on:{click:function(a){return t.showProjectInfo(e.id)}}},[i("p",{staticClass:"title",class:{activeTitle:t.active_el==e.id}},[t._v(t._s(e.title))]),i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("p",{staticClass:"project-info",class:{activeInfo:t.active_el==e.id}},[t._v(t._s(e.text))]),e.isRouter?i("div",{staticClass:"project-link",class:{activeLink:t.active_el==e.id}},[i("router-link",{staticClass:"activeLinkText",attrs:{to:e.link}},[t._v(t._s(e.linkText))])],1):i("div",{staticClass:"project-link",class:{activeLink:t.active_el==e.id}},[i("a",{staticClass:"activeLinkText",attrs:{href:e.link}},[t._v(t._s(e.linkText))])])])])})),0)]),t._m(1),i("div",{staticClass:"link-container"},[i("p",{staticClass:"menu-header"},[t._v("Contact")]),i("div",{staticClass:"skills"},[i("a",{staticStyle:{"margin-bottom":"8px"},attrs:{href:"https://github.com/stanggren"}},[t._v("GitHub")]),i("a",{staticStyle:{"margin-bottom":"8px"},attrs:{href:"https://www.linkedin.com/in/andreas-stanggren-6a27a8176/"}},[t._v("LinkedIn")]),i("a",{staticStyle:{"margin-bottom":"8px",cursor:"pointer"},on:{click:function(e){t.showModal=!0}}},[t._v("CV")]),i("p",[t._v("astanggren@gmail.com")])])])])]),t._m(2),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal-overlay",on:{click:function(e){t.showModal=!1}}}):t._e()]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal"},[i("div",[i("img",{attrs:{src:a("f472"),alt:"Dashboard 1"}})])]):t._e()])],1)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-container"},[a("p",{staticClass:"header"},[t._v("I'm Andreas Stanggren -")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-container",staticStyle:{"margin-top":"12px!important"}},[a("p",{staticClass:"menu-header"},[t._v("Skills")]),a("div",{staticClass:"skills"},[a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("JavaScript")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("Vue.JS")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("React.JS")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("HTML5")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("CSS3")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("C#")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("ASP .NET")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("REST")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("GIT")]),a("p",[t._v("Agile workflow")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-container"},[i("div",[i("img",{staticClass:"aboutImage",attrs:{rel:"preload",id:"phoneImage",src:a("5fa1"),alt:"leaf"}})])])}],k={name:"About",data:function(){return{projectList:[{id:"1",title:"Analyze Dashboard",text:"A dashboard displaying sales data. Built with Vue.JS and C# ASP.NET.",link:"/projects/analyzedashboard",linkText:"More info",isRouter:!0},{id:"2",title:"Recipe search",text:"React application where the user can search recipes from an API.",link:"/projects/recipesearch",linkText:"More info",isRouter:!0},{id:"3",title:"Weather forecast",text:"Weather forecast built with WPF and XAML. The user can choose between location and span of days.",link:"https://github.com/stanggren/WeatherForecast",linkText:"GitHub repo",isRouter:!1},{id:"4",title:"Dice game",text:"Simple DOM game built with Javascript.",link:"https://github.com/stanggren/Dice-Game",linkText:"GitHub repo",isRouter:!1}],active_el:0,showModal:!1}},methods:{showProjectInfo:function(t){this.active_el==t?this.active_el=0:this.active_el=t},hideProjectInfo:function(){this.active_el=0}}},S=k,C=(a("a4f8"),Object(d["a"])(S,w,x,!1,null,"4fef111c",null)),j=C.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticStyle:{display:"flex","flex-direction":"column"}},[t._m(0),a("span"),a("div",{staticClass:"svg_wrapper",attrs:{id:"enter"}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"#5a5c61"},attrs:{to:"/about"}},[a("p",{staticClass:"hide-color link",attrs:{id:"click"}},[t._v("Click here to enter")])])],1)])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header-container"},[a("h1",{attrs:{id:"A"}},[t._v("A")]),a("h1",{attrs:{id:"slash"}},[t._v("/")]),a("h1",{attrs:{id:"S"}},[t._v("S")])]),a("p",{attrs:{id:"sub-header"}},[t._v("A portfolio by Andreas Stanggren")])])}],T={name:"Landing"},A=T,P=(a("6498"),Object(d["a"])(A,M,E,!1,null,"c93bfeee",null)),O=P.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about-section"}},[i("div",{staticClass:"menu-container"},[i("div",{staticClass:"about-text"},[i("div",[i("p",{staticClass:"menu-header"},[t._v("Recipe search")]),i("p",{attrs:{id:"header"}},[t._v("One of my first projects working with React.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("Mainly developed this project to learn the basics of the framework and creating a responsive design.")]),t._m(0),t._m(1),i("p",{staticClass:"modal-click show-image link",attrs:{id:"show-image"},on:{click:function(e){t.showModal=!0}}},[t._v("Show image")])]),t._m(2),i("div",{staticClass:"return-container"},[i("router-link",{staticStyle:{"text-decoration":"none",display:"flex","flex-direction":"row"},attrs:{to:"/about"}},[i("img",{staticClass:"return-img",attrs:{src:a("f5a4")}}),i("p",{staticClass:"return-text link"},[t._v("return")])])],1)])]),i("div",{staticClass:"content-container"},[t._m(3),i("p",{staticClass:"modal-click enlarge-image link",on:{click:function(e){t.showModal=!0}}},[t._v("Enlarge image")])]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal-overlay",on:{click:function(e){t.showModal=!1}}}):t._e()]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal"},[i("div",[i("img",{attrs:{src:a("4fbf"),alt:"Dashboard 1"}})])]):t._e()])],1)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v(" Using an API from "),a("a",{staticClass:"link",attrs:{href:"https://www.edamam.com/"}},[t._v("Edamam")]),t._v(" the user can search recipes and tick off ingredients from each recipe. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v(" Either visit the recipe search "),a("a",{staticClass:"link",attrs:{href:"https://stanggren.github.io/recipe-api/"}},[t._v("website")]),t._v(" or check out the GitHub "),a("a",{staticClass:"link",attrs:{href:"https://github.com/stanggren/recipe-api"}},[t._v("repo")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-container"},[a("p",{staticClass:"menu-header"},[t._v("Tools")]),a("ul",{staticClass:"tools"},[a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("React.JS")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("HTML")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("CSS")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{rel:"preload",src:a("4fbf"),alt:"Dashboard 1"}})])}],R={name:"RecipeSearch",data:function(){return{showModal:!1}}},L=R,D=(a("7a3d"),Object(d["a"])(L,$,I,!1,null,"100bb1ae",null)),N=D.exports;i["a"].use(n["a"]);var G=[{path:"/",component:O,meta:{transitionName:"fade"}},{path:"/about",component:j,meta:{transitionName:"fade"}},{path:"/projects/analyzedashboard",component:y,meta:{transitionName:"fade"}},{path:"/projects/recipesearch",component:N,meta:{transitionName:"fade"}}],V=new n["a"]({routes:G,mode:"history"});i["a"].use(h.a),i["a"].config.productionTip=!1,i["a"].directive("click-outside",{bind:function(t,e,a){t.event=function(i){t==i.target||t.contains(i.target)||a.context[e.expression](i)},document.body.addEventListener("click",t.event)},unbind:function(t){document.body.removeEventListener("click",t.event)}}),new i["a"]({router:V,render:function(t){return t(u)}}).$mount("#app")},"5fa1":function(t,e,a){t.exports=a.p+"img/leaf2.0879154f.png"},"628f":function(t,e,a){"use strict";var i=a("39cb"),n=a.n(i);n.a},6498:function(t,e,a){"use strict";var i=a("dc48"),n=a.n(i);n.a},"7a3d":function(t,e,a){"use strict";var i=a("d939"),n=a.n(i);n.a},"85ec":function(t,e,a){},a4f8:function(t,e,a){"use strict";var i=a("447d"),n=a.n(i);n.a},aae2:function(t,e,a){t.exports=a.p+"img/dashboard-1.dd0d416b.jpg"},d939:function(t,e,a){},dc48:function(t,e,a){},f472:function(t,e,a){t.exports=a.p+"img/ASCV.ea107c36.png"},f5a4:function(t,e,a){t.exports=a.p+"img/return.3d136b26.png"}});
//# sourceMappingURL=app.5cc85aac.js.map