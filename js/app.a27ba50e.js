(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],p=0,h=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"09ef":function(t,e,a){},"25b6":function(t,e,a){"use strict";var i=a("34e8"),s=a.n(i);s.a},"34e8":function(t,e,a){},"4fbf":function(t,e,a){t.exports=a.p+"img/recipesearch.ec96650f.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=a("8c4f"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[a("router-view")],1)],1)},r=[],o=(a("ac1f"),a("1276"),"fade"),l={name:"App",data:function(){return{transitionName:o}},created:function(){var t=this;this.$router.beforeEach((function(e,a,i){var s=e.meta.transitionName||a.meta.transitionName;if("slide"===s){var n=e.path.split("/").length,r=a.path.split("/").length;s=n<r?"slide-right":"slide-left"}t.transitionName=s||o,i()}))}},c=l,d=(a("034f"),a("2877")),p=Object(d["a"])(c,n,r,!1,null,null,null),h=p.exports,m=a("f13c"),u=a.n(m),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about-section"}},[i("div",{staticClass:"menu-container"},[i("div",{staticClass:"about-text"},[i("div",[i("p",{staticClass:"menu-header"},[t._v("Analyze Dashboard")]),t._m(0),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("My main focus was on developing the frontend which consumes data from a document database and displays it through charts and tables. Each chart and table is built as separate modules for the reason of reusing them as widgets on the Visit Group platform.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("The dashboard also includes a datepicker where the user can set a desired timespan for the data to be displayed in. Re-rendering the data after given timespan does not require a pageload due to the separation of logic. Instead data is fetched asynchronous and thus rendered individually for each module.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("The analyze dashboard went in to production in December 2019 and is being used both by employees and customers of Visit Group.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("My time at Visit Group and working on this project has given me good insight in customer based development within an agile workflow.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px","font-style":"oblique"}},[t._v("Reference is available.")]),i("p",{staticClass:"modal-click show-image link",attrs:{id:"show-image"},on:{click:function(e){t.showModal=!0}}},[t._v("Show image")])]),t._m(1),i("div",{staticClass:"return-container"},[i("router-link",{staticStyle:{"text-decoration":"none",display:"flex","flex-direction":"row"},attrs:{to:"/about"}},[i("img",{staticClass:"return-img",attrs:{src:a("f5a4")}}),i("p",{staticClass:"return-text link"},[t._v("return")])])],1)])]),i("div",{staticClass:"content-container"},[t._m(2),i("p",{staticClass:"modal-click enlarge-image link",on:{click:function(e){t.showModal=!0}}},[t._v("Enlarge image")])]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal-overlay",on:{click:function(e){t.showModal=!1}}}):t._e()]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal"},[i("div",[i("img",{attrs:{src:a("aae2"),alt:"Dashboard 1"}})])]):t._e()])],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{attrs:{id:"header"}},[t._v(" During my internship at "),a("a",{staticClass:"link",attrs:{href:"https://www.visitgroup.com/"}},[t._v("Visit Group")]),t._v(" I got the opportunity to build a dashboard. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-container"},[a("p",{staticClass:"menu-header"},[t._v("Tools")]),a("ul",{staticClass:"tools"},[a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("C# (ASP.NET)")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("Vue.JS (Vuex)")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("GIT")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("HTML")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("CSS")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("Elasticsearch")]),a("li",[t._v("Highcharts")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{rel:"preload",src:a("aae2"),alt:"Dashboard 1"}})])}],g={name:"AnalyzeDashboard",data:function(){return{showModal:!1}}},_=g,k=(a("e343"),Object(d["a"])(_,f,v,!1,null,"120a5399",null)),y=k.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about-section"}},[i("div",{staticClass:"menu-container"},[i("div",{staticClass:"about-text"},[i("div",[i("router-link",{staticClass:"logo-container",attrs:{to:"/"}},[i("h1",{attrs:{id:"A"}},[t._v("A")]),i("h1",{attrs:{id:"slash"}},[t._v("/")]),i("h1",{attrs:{id:"S"}},[t._v("S")])]),i("p",{staticClass:"header"},[t._v("I'm Andreas Stanggren -")]),i("p",{staticClass:"sub-header"},[t._v("A Gothenburg based web developer with main passion in design and neat user interfaces.")])],1),i("div",{staticClass:"link-container"},[i("p",{staticClass:"menu-header"},[t._v("Projects")]),i("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideProjectInfo,expression:"hideProjectInfo"}],staticStyle:{"padding-inline-start":"0px"}},t._l(t.projectList,(function(e){return i("li",{key:e.id,staticStyle:{"list-style":"none"},on:{click:function(a){return t.showProjectInfo(e.id)}}},[i("p",{staticClass:"title",class:{activeTitle:t.active_el==e.id}},[t._v(t._s(e.title))]),i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("p",{staticClass:"project-info",class:{activeInfo:t.active_el==e.id}},[t._v(t._s(e.text))]),e.isRouter?i("div",{staticClass:"project-link",class:{activeLink:t.active_el==e.id}},[i("router-link",{staticClass:"activeLinkText",attrs:{to:e.link}},[t._v(t._s(e.linkText))])],1):i("div",{staticClass:"project-link",class:{activeLink:t.active_el==e.id}},[i("a",{staticClass:"activeLinkText",attrs:{href:e.link}},[t._v(t._s(e.linkText))])])])])})),0)]),t._m(0),i("div",{staticClass:"link-container"},[i("p",{staticClass:"menu-header"},[t._v("Contact")]),i("div",{staticClass:"skills"},[i("a",{staticStyle:{"margin-bottom":"8px"},attrs:{href:"https://github.com/stanggren"}},[t._v("GitHub")]),i("a",{staticStyle:{"margin-bottom":"8px"},attrs:{href:"https://www.linkedin.com/in/andreas-stanggren-6a27a8176/"}},[t._v("LinkedIn")]),i("a",{staticStyle:{"margin-bottom":"8px",cursor:"pointer"},on:{click:function(e){t.showModal=!0}}},[t._v("CV")]),i("p",[t._v("astanggren@gmail.com")])])])])]),i("div",{staticClass:"content-container"},[i("div",{staticClass:"svg-container"},[i("svg",{staticStyle:{"enable-background":"new 0 0 600 600"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 600 600","xml:space":"preserve"}},[i("path",{staticStyle:{fill:"none",stroke:"none","stroke-miterlimit":"10"},attrs:{d:"M5.5,624.5"}}),i("g",[i("path",{staticClass:"path",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M132.573,587.123\n\t\tc74.659-162.667,139.986-179.662,222.811-281.633S481.372,42.066,481.372,42.066"}})]),i("path",{staticClass:"path leaf4-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M435.436,275.735\n\tc-11.103,12.398,2.77,40.463,27.391,61.042s59.797,3.085,59.797,3.085"}}),i("path",{staticClass:"path leaf4-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M435.436,275.735\n\tc7.081-8.177,37.82-9.483,63.365,9.937c25.466,19.36,21.629,53.758,21.463,56.915"}}),i("path",{staticClass:"path line4-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M405.144,230.775\n\tc17.28,50.611,30.46,44.499,30.46,44.499"}}),i("path",{staticClass:"path leaf2-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M267.951,471.842\n\tc-12.335,11.174-1.461,40.531,20.881,63.564c22.342,23.033,59.15,9.3,59.15,9.3"}}),i("path",{staticClass:"path leaf2-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M267.951,471.842\n\tc7.894-7.395,38.603-5.49,61.984,16.486c23.31,21.908,15.91,55.719,15.415,58.842"}}),i("path",{staticClass:"path line2-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M242.509,423.97\n\tc11.912,52.137,25.657,47.43,25.657,47.43"}}),i("path",{staticClass:"path leaf5-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M415.44,99.332\n\tc11.408-12.118-1.762-40.519-25.862-61.705s-59.702-4.573-59.702-4.573"}}),i("path",{staticClass:"path leaf5-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M415.44,99.332\n\tc-7.282,7.998-38.045,8.538-63.098-11.512c-24.976-19.988-20.284-54.279-20.039-57.432"}}),i("path",{staticClass:"path line5-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M444.604,145.032\n\tc-16.015-51.026-29.342-45.243-29.342-45.243"}}),i("path",{staticClass:"path leaf3-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M300.39,293.887\n\tc12.902-10.514,3.578-40.399-17.529-64.568c-21.107-24.169-58.583-12.379-58.583-12.379"}}),i("path",{staticClass:"path leaf3-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M300.39,293.887\n\tc-8.27,6.972-38.837,3.465-61.038-19.704c-22.133-23.097-12.975-56.474-12.318-59.567"}}),i("path",{staticClass:"path line3-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M323.294,343.023\n\tc-9.17-52.688-23.142-48.707-23.142-48.707"}}),i("path",{staticClass:"path leaf1-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M134.519,481.989\n\tc12.131-11.395,0.729-40.551-22.025-63.176s-59.309-8.23-59.309-8.23"}}),i("path",{staticClass:"path leaf1-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M134.519,481.989\n\tc-7.759,7.536-38.497,6.186-62.272-15.364c-23.702-21.484-16.913-55.422-16.475-58.554"}}),i("path",{staticClass:"path line1-delay",staticStyle:{fill:"none",stroke:"#313335","stroke-width":"8","stroke-miterlimit":"10"},attrs:{d:"M160.822,529.393\n\tc-12.852-51.913-26.509-46.959-26.509-46.959"}})])])]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal-overlay",on:{click:function(e){t.showModal=!1}}}):t._e()]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal"},[i("div",[i("img",{attrs:{src:a("f472"),alt:"Dashboard 1"}})])]):t._e()])],1)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-container",staticStyle:{"margin-top":"12px!important"}},[a("p",{staticClass:"menu-header"},[t._v("Skills")]),a("div",{staticClass:"skills"},[a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("JavaScript")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("Vue.JS")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("React.JS")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("HTML5")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("CSS3")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("C#")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("ASP .NET")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("REST")]),a("p",{staticStyle:{"margin-bottom":"8px"}},[t._v("GIT")]),a("p",[t._v("Agile workflow")])])])}],S={name:"About",data:function(){return{projectList:[{id:"1",title:"Analyze Dashboard",text:"A dashboard displaying sales data. Built with Vue.JS and C# ASP.NET.",link:"/projects/analyzedashboard",linkText:"More info",isRouter:!0},{id:"2",title:"Recipe search",text:"React application where the user can search recipes from an API.",link:"/projects/recipesearch",linkText:"More info",isRouter:!0},{id:"3",title:"Weather forecast",text:"Weather forecast built with WPF and XAML. The user can choose between location and span of days.",link:"https://github.com/stanggren/WeatherForecast",linkText:"GitHub repo",isRouter:!1},{id:"4",title:"Dice game",text:"Simple DOM game built with Javascript.",link:"https://github.com/stanggren/Dice-Game",linkText:"GitHub repo",isRouter:!1}],active_el:0,showModal:!1}},methods:{showProjectInfo:function(t){this.active_el==t?this.active_el=0:this.active_el=t},hideProjectInfo:function(){this.active_el=0}}},x=S,C=(a("25b6"),Object(d["a"])(x,b,w,!1,null,"3ca2dc42",null)),M=C.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticStyle:{display:"flex","flex-direction":"column"}},[t._m(0),a("span"),a("div",{staticClass:"svg_wrapper",attrs:{id:"enter"}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"#5a5c61"},attrs:{to:"/about"}},[a("p",{staticClass:"hide-color link",attrs:{id:"click"}},[t._v("Click here to enter")])])],1)])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header-container"},[a("h1",{attrs:{id:"A"}},[t._v("A")]),a("h1",{attrs:{id:"slash"}},[t._v("/")]),a("h1",{attrs:{id:"S"}},[t._v("S")])]),a("p",{attrs:{id:"sub-header"}},[t._v("A portfolio by Andreas Stanggren")])])}],T={name:"Landing"},A=T,P=(a("e1f0"),Object(d["a"])(A,j,E,!1,null,"6c30de56",null)),O=P.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about-section"}},[i("div",{staticClass:"menu-container"},[i("div",{staticClass:"about-text"},[i("div",[i("p",{staticClass:"menu-header"},[t._v("Recipe search")]),i("p",{attrs:{id:"header"}},[t._v("One of my first projects working with React.")]),i("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v("Mainly developed this project to learn the basics of the framework and creating a responsive design.")]),t._m(0),t._m(1),i("p",{staticClass:"modal-click show-image link",attrs:{id:"show-image"},on:{click:function(e){t.showModal=!0}}},[t._v("Show image")])]),t._m(2),i("div",{staticClass:"return-container"},[i("router-link",{staticStyle:{"text-decoration":"none",display:"flex","flex-direction":"row"},attrs:{to:"/about"}},[i("img",{staticClass:"return-img",attrs:{src:a("f5a4")}}),i("p",{staticClass:"return-text link"},[t._v("return")])])],1)])]),i("div",{staticClass:"content-container"},[t._m(3),i("p",{staticClass:"modal-click enlarge-image link",on:{click:function(e){t.showModal=!0}}},[t._v("Enlarge image")])]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal-overlay",on:{click:function(e){t.showModal=!1}}}):t._e()]),i("transition",{attrs:{name:"modalFade",appear:""}},[t.showModal?i("div",{staticClass:"modal"},[i("div",[i("img",{attrs:{src:a("4fbf"),alt:"Dashboard 1"}})])]):t._e()])],1)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v(" Using an API from "),a("a",{staticClass:"link",attrs:{href:"https://www.edamam.com/"}},[t._v("Edamam")]),t._v(" the user can search recipes and tick off ingredients from each recipe. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"font-weight":"500","margin-top":"10px"}},[t._v(" Either visit the recipe search "),a("a",{staticClass:"link",attrs:{href:"https://stanggren.github.io/recipe-api/"}},[t._v("website")]),t._v(" or check out the GitHub "),a("a",{staticClass:"link",attrs:{href:"https://github.com/stanggren/recipe-api"}},[t._v("repo")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-container"},[a("p",{staticClass:"menu-header"},[t._v("Tools")]),a("ul",{staticClass:"tools"},[a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("React.JS")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("HTML")]),a("li",{staticStyle:{"margin-bottom":"8px"}},[t._v("CSS")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{rel:"preload",src:a("4fbf"),alt:"Dashboard 1"}})])}],R={name:"RecipeSearch",data:function(){return{showModal:!1}}},I=R,D=(a("ec15"),Object(d["a"])(I,$,L,!1,null,"df91eb8c",null)),N=D.exports;i["a"].use(s["a"]);var G=[{path:"/",component:O,meta:{transitionName:"fade"}},{path:"/about",component:M,meta:{transitionName:"fade"}},{path:"/projects/analyzedashboard",component:y,meta:{transitionName:"fade"}},{path:"/projects/recipesearch",component:N,meta:{transitionName:"fade"}}],V=new s["a"]({routes:G,mode:"history"});i["a"].use(u.a),i["a"].config.productionTip=!1,i["a"].directive("click-outside",{bind:function(t,e,a){t.event=function(i){t==i.target||t.contains(i.target)||a.context[e.expression](i)},document.body.addEventListener("click",t.event)},unbind:function(t){document.body.removeEventListener("click",t.event)}}),new i["a"]({router:V,render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,a){},aae2:function(t,e,a){t.exports=a.p+"img/dashboard-1.dd0d416b.jpg"},bcd3:function(t,e,a){},cffe:function(t,e,a){},e1f0:function(t,e,a){"use strict";var i=a("cffe"),s=a.n(i);s.a},e343:function(t,e,a){"use strict";var i=a("bcd3"),s=a.n(i);s.a},ec15:function(t,e,a){"use strict";var i=a("09ef"),s=a.n(i);s.a},f472:function(t,e,a){t.exports=a.p+"img/ASCV.ea107c36.png"},f5a4:function(t,e,a){t.exports=a.p+"img/return.3d136b26.png"}});
//# sourceMappingURL=app.a27ba50e.js.map