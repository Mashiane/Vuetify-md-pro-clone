(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60ce562d"],{"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("71d9"),o=i("80d2");const r=Object(o["i"])("v-toolbar__title"),l=Object(o["i"])("v-toolbar__items");s["a"]},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("fe6c"),o=i("58df");function r(t,e=[]){return Object(o["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"40dc":function(t,e,i){"use strict";i("8b0d");var s=i("71d9");function o(t,e){const i=e.value,s=e.options||{passive:!0},o=e.arg?document.querySelector(e.arg):window;o&&(o.addEventListener("scroll",i,s),t._onScroll={callback:i,options:s,target:o})}function r(t){if(!t._onScroll)return;const{callback:e,options:i,target:s}=t._onScroll;s.removeEventListener("scroll",e,i),delete t._onScroll}const l={inserted:o,unbind:r};var a=l,n=i("3a66"),c=i("d9bd"),h=i("2b0e"),d=h["a"].extend({name:"scrollable",directives:{Scroll:l},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(c["c"])(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),p=i("d10f"),u=i("f2e7"),v=i("80d2"),m=i("58df");const f=Object(m["a"])(s["a"],d,p["a"],u["a"],Object(n["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=f.extend({name:"v-app-bar",directives:{Scroll:a},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return d.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...s["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return s["a"].options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,i=t,o=i-e,r=o/this.computedScrollThreshold,l=this.currentScroll*r;return Math.max(e,i-l)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=s["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:s["a"].options.computed.isCollapsed.call(this)},isProminent(){return s["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...s["a"].options.computed.styles.call(this),fontSize:Object(v["f"])(this.computedFontSize,"rem"),marginTop:Object(v["f"])(this.computedMarginTop),transform:`translateY(${Object(v["f"])(this.computedTransform)})`,left:Object(v["f"])(this.computedLeft),right:Object(v["f"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=s["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render(t){const e=s["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5e23":function(t,e,i){},"71d9":function(t,e,i){"use strict";i("5e23");var s=i("8dd9"),o=i("adda"),r=i("80d2"),l=i("d9bd");e["a"]=s["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...s["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(r["f"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(l["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(r["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["f"])(this.computedContentHeight)}},Object(r["r"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["f"])(this.extensionHeight)}},Object(r["r"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8b0d":function(t,e,i){},"8e07":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{staticStyle:{width:"auto"},attrs:{absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[i("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){t.$vuetify.breakpoint.smAndDown?t.setDrawer(!t.drawer):t.$emit("input",!t.value)}}},[t.value?i("v-icon",[t._v("\n      mdi-view-quilt\n    ")]):i("v-icon",[t._v("\n      mdi-dots-vertical\n    ")])],1),i("v-toolbar-title",{staticClass:"hidden-sm-and-down",domProps:{textContent:t._s(t.$route.name)}}),i("v-spacer"),i("v-text-field",{staticClass:"mb-2",staticStyle:{"max-width":"165px"},attrs:{label:t.$t("search"),color:"secondary","hide-details":""},scopedSlots:t._u([t.$vuetify.breakpoint.mdAndUP?{key:"append-outer",fn:function(){return[i("v-btn",{staticClass:"mt-n2",attrs:{fab:"",small:""}},[i("v-icon",[t._v("mdi-magnify")])],1)]},proxy:!0}:null],null,!0)}),i("div",{staticClass:"mx-3"}),i("v-btn",{attrs:{"min-width":"0",text:""}},[i("v-icon",[t._v("mdi-view-dashboard")])],1),i("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.attrs,o=e.on;return[i("v-btn",t._g(t._b({attrs:{"min-width":"0",text:""}},"v-btn",s,!1),o),[i("v-badge",{attrs:{color:"red",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[i("span",{staticClass:"caption"},[t._v("5")])]},proxy:!0}],null,!0)},[i("v-icon",[t._v("mdi-bell")])],1)],1)]}}])},[i("v-list",{attrs:{tile:!1,nav:""}},[i("div",t._l(t.notifications,(function(e,s){return i("app-bar-item",{key:"item-"+s},[i("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)})),1)])],1),i("v-menu",{attrs:{bottom:"",left:"","min-width":"200","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.attrs,o=e.on;return[i("v-btn",t._g(t._b({attrs:{"min-width":"0",text:""}},"v-btn",s,!1),o),[i("v-icon",[t._v("mdi-account")])],1)]}}])},[i("v-list",{attrs:{tile:!1,flat:"",nav:""}},[t._l(t.profile,(function(e,s){return[e.divider?i("v-divider",{key:"divider-"+s,staticClass:"mb-2 mt-2"}):i("app-bar-item",{key:"item-"+s,attrs:{to:"/"}},[i("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]}))],2)],1)],1)},o=[],r=i("16b7"),l=i("f2e7"),a=i("58df"),n=i("d9bd"),c=Object(a["a"])(r["a"],l["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(n["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(n["c"])("v-hover should only contain a single element",this),t)}}),h=i("da13"),d=i("2f62"),p={name:"DashboardCoreAppBar",components:{AppBarItem:{render(t){return t(c,{scopedSlots:{default:({hover:e})=>t(h["a"],{attrs:this.$attrs,class:{"black--text":!e,"white--text secondary elevation-12":e},props:{activeClass:"",dark:e,link:!0,...this.$attrs}},this.$slots.default)}})}}},props:{value:{type:Boolean,default:!1}},data:()=>({notifications:["Mike John Responded to your email","You have 5 new tasks","You're now friends with Andrew","Another Notification","Another one"],profile:[{title:"Profile"},{title:"Settings"},{divider:!0},{title:"Log out"}]}),computed:{...Object(d["c"])(["drawer"])},methods:{...Object(d["b"])({setDrawer:"SET_DRAWER"})}},u=p,v=i("2877"),m=i("6544"),f=i.n(m),b=i("40dc"),g=(i("ff44"),i("a9ad")),S=i("fe6c"),y=i("f40d"),O=Object(a["a"])(g["a"],l["a"],Object(S["b"])(["left","bottom"]),y["a"]).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render(t){const e=this.$slots.badge&&[t("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return t("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},e):e])}}),x=i("8336"),_=i("ce7e"),w=i("132d"),T=i("8860"),B=i("5d23"),$=i("e449"),k=i("2fa4"),C=i("8654"),A=i("2a7f"),j=Object(v["a"])(u,s,o,!1,null,null,null);e["default"]=j.exports;f()(j,{VAppBar:b["a"],VBadge:O,VBtn:x["a"],VDivider:_["a"],VIcon:w["a"],VList:T["a"],VListItemTitle:B["c"],VMenu:$["a"],VSpacer:k["a"],VTextField:C["a"],VToolbarTitle:A["a"]})},ff44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-60ce562d.cd71b8b4.js.map