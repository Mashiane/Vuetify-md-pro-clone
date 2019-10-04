(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-803ae6b0"],{"0fd9":function(t,e,a){"use strict";a("4b85");var i=a("2b0e"),s=a("d9f7"),o=a("80d2");const n=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return n.reduce((a,i)=>{return a[t+Object(o["E"])(i)]=e(),a},{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:h})),v=t=>[...r,"space-between","space-around","stretch"].includes(t),m=l("alignContent",()=>({type:String,default:null,validator:v})),f={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},p={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,a){let i=p[t];if(null!=a){if(e){const a=e.replace(t,"");i+=`-${a}`}return i+=`-${a}`,i.toLowerCase()}}const y=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:v},...m},render(t,{props:e,data:a,children:i}){let o="";for(const s in e)o+=String(e[s]);let n=y.get(o);if(!n){let t;for(t in n=[],f)f[t].forEach(a=>{const i=e[a],s=g(t,a,i);s&&n.push(s)});n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(o,n)}return t(e.tag,Object(s["a"])(a,{staticClass:"row",class:n}),i)}})},"368e":function(t,e,a){},"38e4":function(t,e,a){"use strict";a.r(e);var i=function(){var t,e=this,a=e.$createElement,i=e._self._c||a;return i("v-container",{attrs:{id:"alerts",fluid:"",tag:"section"}},[i("base-v-component",{attrs:{heading:"Alerts",link:"components/alerts"}}),i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",[i("v-card-text",[i("base-subheading",{attrs:{subheading:"Notification Style"}}),i("base-material-alert",{attrs:{color:"info",dark:""}},[e._v("\n            This is a plain notification.\n          ")]),i("base-material-alert",{attrs:{color:"info",dark:"",dismissible:""}},[e._v("\n            This is a notification with close button.\n          ")]),i("base-material-alert",{attrs:{color:"info",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v("\n            This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.\n          ")]),i("base-material-alert",{attrs:{color:"primary",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v("\n            You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.\n          ")])],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",[i("v-card-text",[i("base-subheading",{attrs:{subheading:"Notification states"}}),e._l(e.colors,(function(t){return i("base-material-alert",{key:t,attrs:{color:t,dark:"",dismissible:""}},[i("span",{staticClass:"text-uppercase",domProps:{textContent:e._s(t)}}),e._v(' — This is a regular alert made with the color of "'+e._s(t)+'"\n          ')])})),i("base-material-alert",{attrs:{color:"secondary",dark:"",dismissible:""}},[i("span",[e._v("PRIMARY")]),e._v(' — This is a regular alert made with the color "secondary"\n          ')]),i("base-material-alert",{attrs:{color:"pink darken-1",dark:"",dismissible:""}},[i("span",[e._v("PINK DARKEN-1")]),e._v(' — This is a regular alert made with the color "pink darken-1"\n          ')])],2)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-text",{staticClass:"text-center"},[i("base-subheading",{staticClass:"text-center",attrs:{subheading:"Snackbar Locations"}}),i("v-row",{staticClass:"mt-n12",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"6"}},[i("v-row",e._l(e.directions,(function(t){return i("v-col",{key:t,attrs:{cols:"4"}},[i("v-btn",{staticClass:"v-btn--block",attrs:{color:"secondary",default:""},on:{click:function(a){e.randomColor(),e.direction=t,e.snackbar=!0}}},[e._v("\n                    "+e._s(t)+"\n                  ")])],1)})),1)],1)],1),i("base-subheading",{staticClass:"text-center",attrs:{subheading:"Dialogs"}}),i("v-row",{staticClass:"mt-n12",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"6"}},[i("v-row",[i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"secondary",default:"",rounded:""},on:{click:function(t){e.dialog=!0}}},[e._v("\n                    Classic Dialog\n                  ")])],1),i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"info",default:"",rounded:""},on:{click:function(t){e.dialog2=!0}}},[e._v("\n                    Notice Modal\n                  ")])],1),i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"pink darken-1",dark:"",default:"",rounded:""},on:{click:function(t){e.dialog3=!0}}},[e._v("\n                    Small Alert Modal\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1),i("base-material-snackbar",e._b({attrs:{type:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},"base-material-snackbar",(t={},t[e.parsedDirection[0]]=!0,t[e.parsedDirection[1]]=!0,t),!1),[e._v("\n    Welcome to "),i("span",{staticClass:"font-weight-bold"},[e._v(" MATERIAL DASHBOARD PRO ")]),e._v(" — a beautiful admin panel for every web developer.\n  ")]),i("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",{staticClass:"text-center"},[i("v-card-title",[e._v("\n        Dialog Title\n\n        "),i("v-spacer"),i("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog=!1}}},[e._v("\n          mdi-close\n        ")])],1),i("v-card-text",[e._v("\n        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n      ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          Close\n        ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[i("v-card",[i("v-card-title",[e._v("\n        How do you become an affiliate?\n\n        "),i("v-spacer"),i("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog2=!1}}},[e._v("\n          mdi-close\n        ")])],1),i("v-card-text",{staticClass:"body-1 text-center"},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"8"}},[i("div",[i("div",[i("strong",[e._v("1. Register")])]),i("div",{staticClass:"grey--text"},[e._v("\n                The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you.\n              ")])])]),i("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[i("v-sheet",[i("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-1.jpg",height:"100",width:"200"}})],1)],1),i("v-col",{attrs:{cols:"12",md:"8"}},[i("div",[i("div",[i("strong",[e._v("2. Apply")])]),i("div",{staticClass:"grey--text"},[e._v("\n                The first step is to create an account at "),i("a",{attrs:{href:"http://www.creative-tim.com/"}},[e._v("Creative Tim")]),e._v(". You can choose a social network or go for the classic version, whatever works best for you.\n              ")])])]),i("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[i("v-sheet",[i("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-2.jpg",height:"100",width:"200"}})],1)],1),i("v-col",{attrs:{cols:"12"}},[e._v("\n            If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!\n          ")])],1),i("v-btn",{staticClass:"mt-6",attrs:{color:"info",depressed:"",default:"",rounded:""},on:{click:function(t){e.dialog2=!1}}},[e._v("\n          Sounds good\n        ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"300"},model:{value:e.dialog3,callback:function(t){e.dialog3=t},expression:"dialog3"}},[i("v-card",[i("v-card-title",[e._v("\n        Are you sure?\n\n        "),i("v-spacer"),i("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog3=!1}}},[e._v("\n          mdi-close\n        ")])],1),i("v-card-text",{staticClass:"pb-6 pt-12 text-center"},[i("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(t){e.dialog3=!1}}},[e._v("\n          Nevermind\n        ")]),i("v-btn",{attrs:{color:"success",text:""},on:{click:function(t){e.dialog3=!1}}},[e._v("\n          Yes\n        ")])],1)],1)],1)],1)},s=[],o={name:"DashboardNotifications",data:()=>({color:"info",colors:["info","success","warning","error"],dialog:!1,dialog2:!1,dialog3:!1,direction:"top center",directions:["top left","top center","top right","bottom left","bottom center","bottom right"],snackbar:!1}),computed:{parsedDirection(){return this.direction.split(" ")}},methods:{randomColor(){this.color=this.colors[Math.floor(Math.random()*this.colors.length)]}}},n=o,r=a("2877"),l=a("6544"),c=a.n(l),d=a("8336"),h=a("b0af"),u=a("99d9"),v=a("62ad"),m=a("a523"),f=(a("368e"),a("4ad4")),p=a("b848"),g=a("75eb"),y=a("e707"),b=a("e4d3"),w=a("21be"),k=a("f2e7"),C=a("a293"),x=a("80d2"),_=a("bfc5"),S=a("58df"),$=a("d9bd");const O=Object(S["a"])(f["a"],p["a"],g["a"],y["a"],b["a"],w["a"],k["a"]);var A=O.extend({name:"v-dialog",directives:{ClickOutside:C["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object($["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&(this.$emit("click:outside"),this.persistent&&this.overlay?(this.noClickAnimation||this.overlay.$el!==e&&!this.overlay.$el.contains(e)||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):y["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onKeydown(t){if(t.keyCode===x["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||t.target===document.activeElement||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],a={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(a.style={maxWidth:"none"===this.maxWidth?void 0:Object(x["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(x["f"])(this.width)}),e.push(this.genActivator());let i=t("div",a,this.showLazyContent(this.getContentSlot()));return this.transition&&(i=t("transition",{props:{name:this.transition,origin:this.origin}},[i])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(_["a"],{props:{root:!0,light:this.light,dark:this.dark}},[i])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}}),T=a("132d"),E=a("adda"),j=a("0fd9"),I=a("8dd9"),N=a("2fa4"),B=Object(r["a"])(n,i,s,!1,null,null,null);e["default"]=B.exports;c()(B,{VBtn:d["a"],VCard:h["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VCol:v["a"],VContainer:m["a"],VDialog:A,VIcon:T["a"],VImg:E["a"],VRow:j["a"],VSheet:I["a"],VSpacer:N["a"]})},"3c93":function(t,e,a){},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var i=a("2b0e");function s(t){return i["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:o}=i;if(o){i.attrs={};const t=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=` ${t.join(" ")}`)}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,s)}})}var o=a("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:i}){let s;const{attrs:n}=a;return n&&(a.attrs={},s=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(o["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}})},e707:function(t,e,a){"use strict";a("3c93");var i=a("a9ad"),s=a("7560"),o=a("f2e7"),n=a("58df"),r=Object(n["a"])(i["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),l=r,c=a("80d2"),d=a("2b0e");e["a"]=d["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{overlay:null}},watch:{hideOverlay(t){t?this.removeOverlay():this.genOverlay()}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(c["t"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(c["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c["x"].up,c["x"].pageup],a=[c["x"].down,c["x"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!a.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=t.path||this.composedPath(t),a=t.deltaY;if("keydown"===t.type&&e[0]===document.body){const t=this.$refs.dialog,e=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(e,t))||this.shouldScroll(t,a)}for(let i=0;i<e.length;i++){const t=e[i];if(t===document)return!0;if(t===document.documentElement)return!0;if(t===this.$refs.content)return!0;if(this.hasScrollbar(t))return this.shouldScroll(t,a)}return!0},composedPath(t){if(t.composedPath)return t.composedPath();const e=[];let a=t.target;while(a){if(e.push(a),"HTML"===a.tagName)return e.push(document),e.push(window),e;a=a.parentElement}return e},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(c["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-803ae6b0.0f01bf67.js.map