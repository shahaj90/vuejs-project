(function(t){function e(e){for(var o,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0101c9e5":"7f35b589","chunk-2d0b1dc7":"96ed8b83","chunk-2d21eafb":"6ac1410a","chunk-2d22c341":"6f995396","chunk-634c71cd":"196b52bc","chunk-83a25144":"2594c953","chunk-9ed55f70":"f6d3434b"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0101c9e5":1,"chunk-83a25144":1,"chunk-9ed55f70":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0101c9e5":"864cefa8","chunk-2d0b1dc7":"31d6cfe0","chunk-2d21eafb":"31d6cfe0","chunk-2d22c341":"31d6cfe0","chunk-634c71cd":"31d6cfe0","chunk-83a25144":"172ba03b","chunk-9ed55f70":"4b9bc6ea"}[t]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],h.parentNode.removeChild(h),n(i)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuejs-project-deploy/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1dff":function(t,e,n){"use strict";var o=n("2b0e"),r=n("fb9a"),a=n.n(r),i={primary:"#7367F0",success:"#28C76F",danger:"#EA5455",warning:"#FF9F43",dark:"#1E1E1E"},s={disableCustomizer:!1,disableThemeTour:!1,footerType:"static",hideScrollToTop:!1,mainLayoutType:"horizontal",navbarColor:"#fff",navbarType:"hidden",routerTransition:"zoom-fade",rtl:!1,sidebarCollapsed:!1,theme:"light",userInfoLocalStorageKey:"userInfo"};o["default"].use(a.a,{theme:{colors:i},rtl:s.rtl}),e["a"]=s},"3a10":function(t,e,n){},"3f31":function(t,e,n){t.exports=n.p+"img/avatar-s-11.1a620230.jpg"},"41a6":function(t,e,n){},"41cb":function(t,e,n){"use strict";var o=n("2b0e"),r=n("8c4f");o["default"].use(r["a"]);var a=new r["a"]({mode:"history",base:"/vuejs-project-deploy/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"",component:function(){return n.e("chunk-83a25144").then(n.bind(null,"f135"))},children:[{path:"/",name:"home",component:function(){return n.e("chunk-9ed55f70").then(n.bind(null,"bca8"))}},{path:"/MakePayment",name:"home",component:function(){return n.e("chunk-2d21eafb").then(n.bind(null,"d72d"))}},{path:"/page2",name:"page-2",component:function(){return n.e("chunk-2d0b1dc7").then(n.bind(null,"223d"))}}]},{path:"",component:function(){return n.e("chunk-2d22c341").then(n.bind(null,"f1dd"))},children:[{path:"/pages/login",name:"page-login",component:function(){return n.e("chunk-0101c9e5").then(n.bind(null,"8b48"))}},{path:"/pages/error-404",name:"page-error-404",component:function(){return n.e("chunk-634c71cd").then(n.bind(null,"c0ba"))}}]},{path:"*",redirect:"/pages/error-404"}]});a.afterEach((function(){var t=document.getElementById("loading-bg");t&&(t.style.display="none")})),e["a"]=a},4363:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o,r,a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.vueAppClasses,attrs:{id:"app"}},[n("router-view",{on:{setAppClasses:t.setAppClasses}})],1)},s=[],c=(n("96cf"),n("3b8d")),l=(n("4917"),n("1dff")),u={data:function(){return{vueAppClasses:[]}},watch:{"$store.state.theme":function(t){this.toggleClassInBody(t)},"$vs.rtl":function(t){document.documentElement.setAttribute("dir",t?"rtl":"ltr")}},methods:{toggleClassInBody:function(t){"dark"==t?(document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"),document.body.classList.add("theme-dark")):"semi-dark"==t?(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.classList.add("theme-semi-dark")):(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"))},setAppClasses:function(t){this.vueAppClasses.push(t)},handleWindowResize:function(){this.$store.commit("UPDATE_WINDOW_WIDTH",window.innerWidth),document.documentElement.style.setProperty("--vh","".concat(.01*window.innerHeight,"px"))},handleScroll:function(){this.$store.commit("UPDATE_WINDOW_SCROLL_Y",window.scrollY)}},mounted:function(){this.toggleClassInBody(l["a"].theme),this.$store.commit("UPDATE_WINDOW_WIDTH",window.innerWidth);var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.$vs.rtl?"rtl":"ltr",document.documentElement.setAttribute("dir",e),window.addEventListener("resize",this.handleWindowResize),window.addEventListener("scroll",this.handleScroll);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("scroll",this.handleScroll)}},d=u,h=n("2877"),f=Object(h["a"])(d,i,s,!1,null,null,null),p=f.exports,m=n("7bb1"),g=n("fb9a"),v=n.n(g),b=(n("c789"),n("04f2"),n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"convstooltip",staticClass:"con-vs-tooltip",on:{mouseleave:t.mouseleavex,mouseenter:t.mouseenterx,mouseup:t.destroy}},[n("transition",{attrs:{name:"tooltip-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],ref:"vstooltip",staticClass:"vs-tooltip",class:["vs-tooltip-"+(t.positionx||t.position),"vs-tooltip-"+t.color,{"after-none":t.noneAfter}],style:t.style},[t.title?n("h4",[t._v(t._s(t.title))]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")])]),t._t("default")],2)}),C=[],y=(n("0b21"),n("c5f6"),{insertBody:function(t){document.body.insertBefore(t,document.body.firstChild)},removeBody:function(t){var e=document.body;e.removeChild(t)},changePosition:function(t,e,n){var o=0,r=0,a=0,i=window.pageYOffset||document.documentElement.scrollTop;t.getBoundingClientRect().top+300>=window.innerHeight?setTimeout((function(){o=n?t.getBoundingClientRect().top-e.clientHeight+i:t.getBoundingClientRect().top-e.clientHeight+t.clientHeight+i}),1):o=n?t.getBoundingClientRect().top+t.clientHeight+i+5:t.getBoundingClientRect().top+i,r=t.getBoundingClientRect().left,a=t.offsetWidth;var s={left:"".concat(r,"px"),top:"".concat(o,"px"),width:"".concat(a,"px")};return s}}),_=(n("6762"),n("a481"),n("386d"),n("28a5"),{darken:function(t,e){var n=t.split(","),o=e<0?0:255,r=e<0?-1*e:e,a=parseInt(n[0].slice(4)),i=parseInt(n[1]),s=parseInt(n[2]);return"rgb("+(Math.round((o-a)*r)+a)+","+(Math.round((o-i)*r)+i)+","+(Math.round((o-s)*r)+s)+")"},getColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(/^[#]/.test(t)){var o=this.hexToRgb(t);t=1==e?"rgb(".concat(o.r,",").concat(o.g,",").concat(o.b,")"):"rgba(".concat(o.r,",").concat(o.g,",").concat(o.b,",").concat(e,")")}else/^rgba/.test(t)?-1!=t.search(/.([0-9]\))$/)||n||(t=t.replace(/.?([0-9]\))$/,"".concat(e,")"))):/^(rgb)/.test(t)&&1!=e&&(t=t.replace(/^(rgb)/,"rgba"),t=t.replace(/\)$/,",".concat(e,")")));return t},isColor:function(t){var e=["primary","secondary","success","danger","warning","dark","light"];return e.includes(t)},RandomColor:function(){function t(t,e){return Math.floor(Math.random()*(e-t))+t}return"rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")")},rColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^[#]/.test(t)){var n=this.hexToRgb(t);t="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(e,")")}else if(/^[rgb]/.test(t)){var o=t.split(")")[0];/^[rgba]/.test(t)?o+=")":(o.replace("rgb","rgba"),o+=",".concat(e,")")),t=o}var r=["primary","success","danger","warning","dark"];return t?/[#()]/.test(t)?t:r.includes(t)?"rgba(var(--".concat(t,"),").concat(e,")"):"rgba(var(--primary),".concat(e,")"):"rgba(var(--primary),".concat(e,")")},contrastColor:function(t){var e=t;if(/[#]/g.test(t)){var n=this.hexToRgb(t);e="rgb(".concat(n.r,",").concat(n.g,",").concat(n.b,")")}var o=e.replace(/^(rgb|rgba)\(/,"").replace(/\)$/,"").replace(/\s/g,"").split(","),r=(299*o[0]+587*o[1]+114*o[2])/1e3;return r>=128},setCssVariable:function(t,e){"undefined"!==typeof window&&document.documentElement.style.setProperty(t,e)},hexToRgb:function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,(function(t,e,n,o){return e+e+n+n+o+o}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},getVariable:function(t,e){return String(t.getPropertyValue(e)).trim()},changeColor:function(t){var e,n=["primary","success","danger","warning","dark"];if(n.includes(t)){var o=getComputedStyle(document.documentElement);e=this.getVariable(o,"--"+t)}else if(/[rgb()]/g.test(t))e=t.replace(/[rgb()]/g,"");else if(/[#]/g.test(t)){var r=this.hexToRgb(t);e="".concat(r.r,",").concat(r.g,",").concat(r.b)}else e="--"+t;return e}}),x={name:"vx-tooltip",props:{title:{default:null,type:[String,Number]},text:{default:null,type:[String,Number]},color:{default:null,type:String},position:{default:"top",type:String},delay:{default:"0s",type:[Number,String]}},data:function(){return{cords:{},active:!1,widthx:"auto",positionx:null,noneAfter:!1}},computed:{style:function(){return{left:this.cords.left,top:this.cords.top,transitionDelay:this.active?this.delay:"0s",background:_.getColor(this.color,1),width:this.widthx}}},methods:{mouseenterx:function(){var t=this;this.active=!0,this.$nextTick((function(){y.insertBody(t.$refs.vstooltip),t.changePosition(t.$refs.convstooltip,t.$refs.vstooltip)}))},mouseleavex:function(){this.active=!1},changePosition:function(t,e){this.noneAfter=!1,this.positionx=null;var n=t.closest(".con-vs-tooltip"),o=window.pageYOffset||document.documentElement.scrollTop,r=n.getBoundingClientRect().top+o-e.clientHeight-4,a=n.getBoundingClientRect().left-e.clientWidth/2+n.clientWidth/2,i=n.clientWidth;"bottom"==this.position?r=n.getBoundingClientRect().top+o+n.clientHeight+4:"left"==this.position?(a=n.getBoundingClientRect().left-e.clientWidth-4,r=n.getBoundingClientRect().top+o+n.clientHeight/2-e.clientHeight/2,-1==Math.sign(a)&&(a=n.getBoundingClientRect().left,r=n.getBoundingClientRect().top+o+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)):"right"==this.position&&(a=n.getBoundingClientRect().left+n.clientWidth+4,r=n.getBoundingClientRect().top+o+n.clientHeight/2-e.clientHeight/2,window.innerWidth-(a+e.clientWidth)<=20&&(a=n.getBoundingClientRect().left-e.clientWidth/2-10,r=n.getBoundingClientRect().top+o+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)),this.cords={left:"".concat(a,"px"),top:"".concat(r,"px"),width:"".concat(i,"px")}},destroy:function(){var t=this;this.active=!1,this.$nextTick((function(){t.active&&y.removeBody(t.$refs.vstooltip)}))}}},w=x,A=Object(h["a"])(w,b,C,!1,null,null,null),E=A.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({ref:"card",staticClass:"vx-card",class:[{"overflow-hidden":t.tempHidden},{"no-shadow":t.noShadow},{"rounded-none":t.noRadius},{"card-border":t.cardBorder},t.cardClasses],style:t.cardStyles},t.$listeners),[t.hasHeader?n("div",{staticClass:"vx-card__header"},[n("div",{staticClass:"vx-card__title"},[this.$props.title?n("h4",{class:t.titleClasses,style:t.titleStyles},[t._v(t._s(t.title))]):t._e(),this.$props.subtitle?n("h6",{class:t.subtitleClasses,style:t.subtitleStyles},[t._v(t._s(t.subtitle))]):t._e()]),t.hasAction?n("div",{staticClass:"vx-card__actions"},[t._t("actions",[(t.actionButtons||t.collapseAction||t.refreshContentAction||t.removeCardAction)&&!t.codeToggler?n("div",{staticClass:"vx-card__action-buttons"},[t.actionButtons||t.collapseAction?n("feather-icon",{staticClass:"ml-4",class:{rotate180:!t.isContentCollapsed},attrs:{icon:"ChevronUpIcon"},on:{click:t.toggleContent}}):t._e(),t.actionButtons||t.refreshContentAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"RotateCwIcon"},on:{click:t.refreshcard}}):t._e(),t.actionButtons||t.removeCardAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"XIcon"},on:{click:t.removeCard}}):t._e()],1):t._e(),t.codeToggler&&!t.actionButtons?n("div",{staticClass:"vx-card__code-toggler sm:block hidden"},[n("feather-icon",{class:{"border border-solid border-primary border-t-0 border-r-0 border-l-0":t.showCode},attrs:{icon:"CodeIcon"},on:{click:t.toggleCode}})],1):t._e()])],2):t._e()]):t._e(),n("div",{ref:"content",staticClass:"vx-card__collapsible-content vs-con-loading__container",class:[{collapsed:t.isContentCollapsed},{"overflow-hidden":t.tempHidden}],style:t.StyleItems},[t._t("no-body"),this.$slots.default?n("div",{staticClass:"vx-card__body"},[t._t("default")],2):t._e(),t._t("no-body-bottom"),this.$slots.footer?n("div",{staticClass:"vx-card__footer"},[t._t("footer")],2):t._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:this.$slots.codeContainer,expression:"this.$slots.codeContainer"}],ref:"codeContainer",staticClass:"vx-card__code-container",class:{collapsed:!t.showCode},style:t.codeContainerStyles},[n("div",{staticClass:"code-content"},[n("prism",{key:t.$vs.rtl,attrs:{language:t.codeLanguage}},[t._t("codeContainer")],2)],1)])])},k=[],S=n("8d51"),R=n.n(S),I={name:"vx-card",props:{title:String,subtitle:String,actionButtons:{type:Boolean,default:!1},actionButtonsColor:{type:String,default:"success"},codeToggler:{type:Boolean,default:!1},noShadow:{default:!1,type:Boolean},noRadius:{default:!1,type:Boolean},cardBorder:{default:!1,type:Boolean},codeLanguage:{default:"markup",type:String},collapseAction:{default:!1,type:Boolean},refreshContentAction:{default:!1,type:Boolean},removeCardAction:{default:!1,type:Boolean},headerBackground:{default:"",type:String},cardBackground:{default:"",type:String},contentColor:{default:"",type:String},titleColor:{default:"",type:String},subtitleColor:{default:"#b8c2cc",type:String}},data:function(){return{isContentCollapsed:!1,showCode:!1,maxHeight:null,cardMaxHeight:null,codeContainerMaxHeight:"0px",tempHidden:!1}},computed:{hasAction:function(){return this.$slots.actions||this.actionButtons||this.collapseAction||this.refreshContentAction||this.removeCardAction||this.codeToggler},hasHeader:function(){return this.hasAction||this.title||this.subtitle},StyleItems:function(){return{maxHeight:this.maxHeight}},cardStyles:function(){var t={maxHeight:this.cardMaxHeight};return _.isColor(this.cardBackground)||(t.background=_.getColor(this.cardBackground)),_.isColor(this.contentColor)||(t.color=_.getColor(this.contentColor)),t},codeContainerStyles:function(){return{maxHeight:this.codeContainerMaxHeight}},cardClasses:function(){var t="";return _.isColor(this.cardBackground)&&(t+=" bg-".concat(this.cardBackground)),_.isColor(this.contentColor)&&(t+=" text-".concat(this.contentColor)),t.trim()},titleStyles:function(){return{color:_.getColor(this.titleColor)}},titleClasses:function(){var t="";return _.isColor(this.titleColor)&&(t+=" text-".concat(this.titleColor)),t.trim()},subtitleStyles:function(){var t={};return _.isColor(this.subtitleColor)||(t.color=_.getColor(this.subtitleColor)),t},subtitleClasses:function(){var t="";return _.isColor(this.subtitleColor)&&(t+=" text-".concat(this.subtitleColor)),t.trim()}},methods:{toggleContent:function(){var t=this;this.$refs.content.style.overflow="hidden";var e=this.$refs.content.scrollHeight;"1.5rem"==this.maxHeight?(this.maxHeight="".concat(e,"px"),setTimeout((function(){t.maxHeight="none",t.$refs.content.style.overflow=null}),300)):(this.maxHeight="".concat(e,"px"),setTimeout((function(){t.maxHeight="1.5rem",t.$refs.content.style.overflow=null}),50)),this.isContentCollapsed=!this.isContentCollapsed,this.$emit("toggleCollapse",this.isContentCollapsed)},refreshcard:function(){this.$vs.loading({container:this.$refs.content,scale:.5}),this.tempHidden=!0,this.$emit("refresh",this)},removeRefreshAnimation:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;setTimeout((function(){t.$vs.loading.close(t.$refs.content),t.tempHidden=!1}),e)},removeCard:function(){var t=this,e=this.$refs.card.scrollHeight;this.cardMaxHeight="".concat(e,"px"),this.$el.style.overflow="hidden",setTimeout((function(){t.cardMaxHeight="0px"}),50),this.$emit("remove")},toggleCode:function(){var t=this;this.tempHidden=!0,this.showCode=!this.showCode;var e=this.$refs.codeContainer.scrollHeight;"0px"==this.codeContainerMaxHeight?(this.codeContainerMaxHeight="".concat(e,"px"),setTimeout((function(){t.codeContainerMaxHeight="none",t.tempHidden=!1}),300)):(this.codeContainerMaxHeight="".concat(e,"px"),setTimeout((function(){t.codeContainerMaxHeight="0px",t.tempHidden=!1}),150))}},components:{Prism:R.a}},P=I,H=(n("89b8"),Object(h["a"])(P,T,k,!1,null,null,null)),B=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list"},t._l(t.list,(function(e,o){return n("li",{key:o,staticClass:"list__item"},[n("feather-icon",{staticClass:"w-5 h-5 mr-1",attrs:{icon:t.rtlSpecificIcon}}),n("span",{domProps:{innerHTML:t._s(e)}})],1)})),0)},O=[],N=(n("2fdb"),{name:"vx-list",props:{list:{type:Array,required:!0},icon:{type:String,default:"ChevronsRightIcon"}},computed:{rtlSpecificIcon:function(){var t=this.icon;return this.$vs.rtl&&(t.includes("Left")?t=t.replace("Left","Right"):t.includes("Right")&&(t=t.replace("Right","Left"))),t}}}),M=N,$=(n("dca1"),Object(h["a"])(M,L,O,!1,null,null,null)),D=$.exports,W=function(t,e){var n=e._c;return n("div",{staticClass:"vx-breadcrumb",class:e.data.staticClass},[n("ul",{staticClass:"flex flex-wrap items-center"},[n("li",{staticClass:"inline-flex items-end"},[n("router-link",{attrs:{to:"/"}},[n("feather-icon",{attrs:{icon:"HomeIcon",svgClasses:"h-5 w-5 mb-1 stroke-current text-primary"}})],1),n("span",{staticClass:"breadcrumb-separator mx-2"},[n("feather-icon",{attrs:{icon:e.props.isRTL?"ChevronsLeftIcon":"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1),e._l(e.props.route.meta.breadcrumb.slice(1,-1),(function(t,o){return n("li",{key:o,staticClass:"inline-flex items-center"},[t.url?n("router-link",{attrs:{to:t.url}},[e._v(e._s(t.title))]):n("span",{staticClass:"text-primary cursor-default"},[e._v(e._s(t.title))]),n("span",{staticClass:"breadcrumb-separator mx-2 flex items-start"},[n("feather-icon",{attrs:{icon:e.props.isRTL?"ChevronsLeftIcon":"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1)})),n("li",{staticClass:"inline-flex"},[e.props.route.meta.breadcrumb.slice(-1)[0].active?n("span",{staticClass:"cursor-default"},[e._v(e._s(e.props.route.meta.breadcrumb.slice(-1)[0].title))]):e._e()])],2)])},U=[],j={name:"vx-breadcrumb"},V=j,G=Object(h["a"])(V,W,U,!0,null,null,null),Y=G.exports,F=n("0a35"),z={functional:!0,name:"feather-icon",props:{icon:{required:!0},svgClasses:{type:[String,Object,Array],default:""},badge:{}},render:function(t,e){var n=e.props,o=e.data;o.staticClass?o.staticClass=o.staticClass+" feather-icon select-none relative":o.staticClass="feather-icon select-none relative";var r=t(F[n.icon],{class:n.svgClasses}),a=t("span",{class:"feather-icon-badge bg-primary text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center",style:"top: -7px; right: -5px"},[n.badge]),i=[r];return n.badge&&i.push(a),t("span",o,i)}},q=z,J=(n("9943"),Object(h["a"])(q,o,r,!1,null,null,null)),X=J.exports,K=function(t,e){var n=e._c;return n("div",{staticClass:"vx-input-group flex",class:e.data.staticClass},[e.slots().prepend?n("div",{staticClass:"vx-input-group-prepend flex",class:e.props.prependClasses},[e._t("prepend")],2):e._e(),n("div",{staticClass:"vx-input-group-default flex-grow"},[e._t("default")],2),e.slots().append?n("div",{staticClass:"vx-input-group-append flex",class:e.props.appendClasses},[e._t("append")],2):e._e()])},Q=[],Z={name:"vx-input-group",props:{prependClasses:{type:String},appendClasses:{type:String}}},tt=Z,et=(n("a4fc"),Object(h["a"])(tt,K,Q,!0,null,null,null)),nt=et.exports,ot=n("4a7a"),rt=n.n(ot);a["default"].component(E.name,E),a["default"].component(B.name,B),a["default"].component(D.name,D),a["default"].component(Y.name,Y),a["default"].component(X.name,X),a["default"].component(nt.name,nt),rt.a.props.components.default=function(){return{Deselect:{render:function(t){return t("feather-icon",{props:{icon:"XIcon",svgClasses:"w-4 h-4 mt-1"}})}},OpenIndicator:{render:function(t){return t("feather-icon",{props:{icon:"ChevronDownIcon",svgClasses:"w-5 h-5"}})}}}},a["default"].component(rt.a);n("c1c3"),n("5aea");var at=n("41cb"),it=n("2f62"),st={pages:{key:"title",data:[{title:"Home",url:"/",icon:"HomeIcon",is_bookmarked:!1},{title:"Page 2",url:"/page2",icon:"FileIcon",is_bookmarked:!1}]}},ct={uid:0,displayName:"John Doe",about:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",photoURL:n("3f31"),status:"online",userRole:"admin"},lt=function(){var t=" -webkit- -moz- -o- -ms- ".split(" "),e=function(t){return window.matchMedia(t).matches};if("ontouchstart"in window||window.DocumentTouch)return!0;var n=["(",t.join("touch-enabled),("),"heartz",")"].join("");return e(n)},ut={AppActiveUser:ct,bodyOverlay:!1,isVerticalNavMenuActive:!0,is_touch_device:lt(),mainLayoutType:l["a"].mainLayoutType||"vertical",navbarSearchAndPinList:st,reduceButton:l["a"].sidebarCollapsed,verticalNavMenuWidth:"default",verticalNavMenuItemsMin:!1,scrollY:0,starredPages:st["pages"].data.filter((function(t){return t.is_bookmarked})),theme:l["a"].theme||"light",themePrimaryColor:l["a"].primary,windowWidth:null,institutionName:localStorage.getItem("institutionName")||null,ApplicantInfoSearch:localStorage.getItem("applicantId")||null},dt=ut,ht={windowBreakPoint:function(t){return t.windowWidth>=1200?"xl":t.windowWidth>=992?"lg":t.windowWidth>=768?"md":t.windowWidth>=576?"sm":"xs"},scrollbarTag:function(t){return t.is_touch_device?"div":"VuePerfectScrollbar"}},ft=ht,pt=(n("ac6a"),n("456d"),n("20d6"),{TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE:function(t,e){t.isVerticalNavMenuActive=e},TOGGLE_REDUCE_BUTTON:function(t,e){t.reduceButton=e},UPDATE_MAIN_LAYOUT_TYPE:function(t,e){t.mainLayoutType=e},UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN:function(t,e){t.verticalNavMenuItemsMin=e},UPDATE_VERTICAL_NAV_MENU_WIDTH:function(t,e){t.verticalNavMenuWidth=e},UPDATE_STARRED_PAGE:function(t,e){var n=t.navbarSearchAndPinList["pages"].data.findIndex((function(t){return t.url==e.url}));if(t.navbarSearchAndPinList["pages"].data[n].is_bookmarked=e.val,e.val)t.starredPages.push(t.navbarSearchAndPinList["pages"].data[n]);else{var o=t.starredPages.findIndex((function(t){return t.url==e.url}));t.starredPages.splice(o,1)}},ARRANGE_STARRED_PAGES_LIMITED:function(t,e){var n=t.starredPages.slice(10);t.starredPages=e.concat(n)},ARRANGE_STARRED_PAGES_MORE:function(t,e){var n=!1,o=t.starredPages[10],r=t.starredPages.slice(0,10);t.starredPages=r.concat(e),t.starredPages.slice(0,10).map((function(t){e.indexOf(t)>-1&&(n=!0)})),n||t.starredPages.splice(10,0,o)},TOGGLE_CONTENT_OVERLAY:function(t,e){t.bodyOverlay=e},UPDATE_PRIMARY_COLOR:function(t,e){t.themePrimaryColor=e},UPDATE_THEME:function(t,e){t.theme=e},UPDATE_WINDOW_WIDTH:function(t,e){t.windowWidth=e},UPDATE_WINDOW_SCROLL_Y:function(t,e){t.scrollY=e},UPDATE_USER_INFO:function(t,e){for(var n=JSON.parse(localStorage.getItem("userInfo"))||t.AppActiveUser,o=0,r=Object.keys(e);o<r.length;o++){var a=r[o];null!=e[a]&&(t.AppActiveUser[a]=e[a],n[a]=e[a])}localStorage.setItem("userInfo",JSON.stringify(n))}}),mt=pt,gt={updateVerticalNavMenuWidth:function(t,e){var n=t.commit;n("UPDATE_VERTICAL_NAV_MENU_WIDTH",e)},updateStarredPage:function(t,e){var n=t.commit;n("UPDATE_STARRED_PAGE",e)},arrangeStarredPagesLimited:function(t,e){var n=t.commit;n("ARRANGE_STARRED_PAGES_LIMITED",e)},arrangeStarredPagesMore:function(t,e){var n=t.commit;n("ARRANGE_STARRED_PAGES_MORE",e)},toggleContentOverlay:function(t){var e=t.commit;e("TOGGLE_CONTENT_OVERLAY")},updateTheme:function(t,e){var n=t.commit;n("UPDATE_THEME",e)},updateUserInfo:function(t,e){var n=t.commit;n("UPDATE_USER_INFO",e)}},vt=gt;a["default"].use(it["a"]);var bt=new it["a"].Store({getters:ft,mutations:mt,state:dt,actions:vt,strict:!1}),Ct=n("6591");n("c197"),n("84bf");a["default"].use(v.a),a["default"].use(m["a"]),window.axios=n("bc3a"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var yt=document.head.querySelector('meta[name="csrf-token"]');yt?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=yt.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"),a["default"].use(Ct["VueHammer"]),n("3a10"),window.apiUrl="http://api.fems.education/api/v1/",a["default"].config.productionTip=!1,new a["default"]({router:at["a"],store:bt,render:function(t){return t(p)}}).$mount("#app")},"5aea":function(t,e,n){},"89b8":function(t,e,n){"use strict";var o=n("e8ae"),r=n.n(o);r.a},9943:function(t,e,n){"use strict";var o=n("4363"),r=n.n(o);r.a},a4fc:function(t,e,n){"use strict";var o=n("e84c"),r=n.n(o);r.a},c1c3:function(t,e,n){},dca1:function(t,e,n){"use strict";var o=n("41a6"),r=n.n(o);r.a},e84c:function(t,e,n){},e8ae:function(t,e,n){}});
//# sourceMappingURL=app.deb135c6.js.map