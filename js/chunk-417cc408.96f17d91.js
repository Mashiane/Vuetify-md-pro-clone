(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-417cc408"],{"0fd9":function(t,e,a){"use strict";a("4b85");var n=a("2b0e"),s=a("d9f7"),i=a("80d2");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((a,n)=>{return a[t+Object(i["E"])(n)]=e(),a},{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...r,"space-between","space-around"].includes(t),p=l("justify",()=>({type:String,default:null,validator:u})),m=t=>[...r,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:m})),g={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(v)},f={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,a){let n=f[t];if(null!=a){if(e){const a=e.replace(t,"");n+=`-${a}`}return n+=`-${a}`,n.toLowerCase()}}const x=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...p,alignContent:{type:String,default:null,validator:m},...v},render(t,{props:e,data:a,children:n}){let i="";for(const s in e)i+=String(e[s]);let o=x.get(i);if(!o){let t;for(t in o=[],g)g[t].forEach(a=>{const n=e[a],s=h(t,a,n);s&&o.push(s)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),x.set(i,o)}return t(e.tag,Object(s["a"])(a,{staticClass:"row",class:o}),n)}})},d76a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"extended-tables",fluid:"",tag:"section"}},[a("base-v-component",{attrs:{heading:"Simple Tables",link:"componetns/simple-tables"}}),a("base-material-card",{staticClass:"px-5 py-3 mb-5",attrs:{color:"success",icon:"mdi-clipboard-text",inline:"",title:"Simple Table"}},[a("v-simple-table",[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Name")]),a("th",[t._v("Job Position")]),a("th",[t._v("Since")]),a("th",{staticClass:"text-right"},[t._v("\n            Salary\n          ")]),a("th",{staticClass:"text-right"},[t._v("\n            Actions\n          ")])])]),a("tbody",[a("tr",[a("td",[t._v("1")]),a("td",[t._v("Andrew Mike")]),a("td",[t._v("Developer")]),a("td",[t._v("2013")]),a("td",{staticClass:"text-right"},[t._v("\n            € 99,225\n          ")]),a("td",{staticClass:"text-right"},t._l(t.actions,(function(e,n){return a("v-btn",{key:n,staticClass:"px-2 ml-1",attrs:{color:e.color,"min-width":"0",small:""}},[a("v-icon",{attrs:{small:""},domProps:{textContent:t._s(e.icon)}})],1)})),1)]),a("tr",[a("td",[t._v("2")]),a("td",[t._v("John Doe")]),a("td",[t._v("Designer")]),a("td",[t._v("2012")]),a("td",{staticClass:"text-right"},[t._v("\n            € 89,241\n          ")]),a("td",{staticClass:"text-right"},t._l(t.actions,(function(e,n){return a("v-btn",{key:n,staticClass:"px-1 ml-1",attrs:{color:e.color,fab:"","x-small":""}},[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)})),1)]),a("tr",[a("td",[t._v("3")]),a("td",[t._v("Alex Mike")]),a("td",[t._v("Designer")]),a("td",[t._v("2010")]),a("td",{staticClass:"text-right"},[t._v("\n            € 92,144\n          ")]),a("td",{staticClass:"text-right"},t._l(t.actions,(function(e,n){return a("v-btn",{key:n,staticClass:"ml-1",attrs:{color:e.color,fab:"",icon:"","x-small":""}},[a("v-icon",{attrs:{small:""},domProps:{textContent:t._s(e.icon)}})],1)})),1)]),a("tr",[a("td",[t._v("4")]),a("td",[t._v("Mike Monday")]),a("td",[t._v("Marketing")]),a("td",[t._v("2013")]),a("td",{staticClass:"text-right"},[t._v("\n            € 49,990\n          ")]),a("td",{staticClass:"text-right"},t._l(t.actions,(function(e,n){return a("v-btn",{key:n,staticClass:"px-1 ml-1",attrs:{color:e.color,fab:"","x-small":""}},[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)})),1)]),a("tr",[a("td",[t._v("5")]),a("td",[t._v("Paul Dickens")]),a("td",[t._v("Communications")]),a("td",[t._v("2015")]),a("td",{staticClass:"text-right"},[t._v("\n            € 69,201\n          ")]),a("td",{staticClass:"text-right"},t._l(t.actions,(function(e,n){return a("v-btn",{key:n,staticClass:"px-2 ml-1",attrs:{color:e.color,"min-width":"0",small:""}},[a("v-icon",{attrs:{small:""},domProps:{textContent:t._s(e.icon)}})],1)})),1)])])])],1),a("div",{staticClass:"py-3"}),a("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"success",icon:"mdi-clipboard",inline:"",title:"Checked Table"}},[a("v-data-table",{attrs:{headers:t.headers,items:t.selections,"hide-default-footer":"","show-select":""},scopedSlots:t._u([{key:"footer",fn:function(){return[a("v-card-text",[a("v-row",{attrs:{align:"center",justify:"end"}},[a("strong",{staticClass:"title"},[t._v("Total")]),a("div",{staticClass:"display-1 font-weight-light ml-12"},[t._v("\n              € 12,999\n            ")])])],1)]},proxy:!0}])})],1),a("div",{staticClass:"py-3"}),a("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"success",icon:"mdi-vuetify",inline:"",title:"Shopping Cart Table"}},[a("v-data-table",{attrs:{headers:t.productHeaders,items:t.products,"hide-default-footer":""},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[a("tr",[a("td",[a("v-img",{staticClass:"mx-auto",attrs:{src:n.src,"max-width":"75"}})],1),a("td",[a("div",{staticClass:"purple--text headline",domProps:{textContent:t._s(n.name)}}),a("div",{staticClass:"grey--text subtitle-1 font-weight-light"},[t._v("\n              by "+t._s(n.brand)+"\n            ")])]),a("td",{domProps:{textContent:t._s(n.color)}}),a("td",{domProps:{textContent:t._s(n.size)}}),a("td",{staticClass:"text-right",domProps:{textContent:t._s(n.price)}}),a("td"),a("td",{staticClass:"text-right",domProps:{textContent:t._s(n.amount)}})])]}},{key:"footer",fn:function(){return[a("v-divider"),a("v-card-text",[a("v-row",{attrs:{align:"center",justify:"end"}},[a("strong",{staticClass:"title"},[t._v("Total")]),a("div",{staticClass:"display-1 font-weight-light ml-12"},[t._v("\n              € 2,346\n            ")])])],1),a("v-divider"),a("div",{staticClass:"text-right py-6"},[a("v-btn",{staticClass:"mr-0",attrs:{color:"info",default:"",rounded:""}},[t._v("\n            Complete Purchase\n            "),a("v-icon",[t._v("mdi-chevron-right")])],1)],1)]},proxy:!0}])})],1)],1)},s=[],i={name:"DashboardExtendedTables",data:()=>({actions:[{color:"info",icon:"mdi-account"},{color:"success",icon:"mdi-pencil"},{color:"error",icon:"mdi-close"}],headers:[{text:"#",value:"id"},{text:"Product Name",value:"name"},{text:"Type",value:"type"},{align:"right",text:"Qty",value:"qty"},{align:"right",text:"Price",value:"price"},{align:"right",text:"Amount",value:"amount"}],productHeaders:[{sortable:!1,text:"",value:"src"},{text:"Product",value:"name"},{text:"Color",value:"color"},{text:"Size",value:"size"},{align:"right",text:"Price",value:"price"},{text:"Qty",value:"qty"},{align:"right",text:"Amount",value:"amount"}],products:[{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/product1.jpg",name:"Spring Jacket",brand:"Dolce & Gabbana",color:"Red",size:"M",price:"€ 549",amount:"€ 549",qty:1},{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/product2.jpg",name:"Short Pants",brand:"Pucca",color:"Purple",size:"M",price:"€ 499",amount:"€ 499",qty:2},{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/product3.jpg",name:"Pencil Skirt",brand:"Valentino",color:"White",size:"XL",price:"€ 799",amount:"€ 799",qty:1}],selections:[{id:1,name:"Moleskine Agenda",type:"Office",qty:25,price:"€ 49",amount:"€ 1,225"},{id:2,name:"Stabilo Pen",type:"Office",qty:30,price:"€ 10",amount:"€ 300"},{id:3,name:"A4 Paper Pack",type:"Office",qty:30,price:"€ 10.99",amount:"€ 109"},{id:4,name:"Apple iPad",type:"Meeting",qty:10,price:"€ 499",amount:"€ 4,990"},{id:5,name:"Apple iPhone",type:"Communication",qty:10,price:"€ 599",amount:"€ 5,999"}]})},o=i,r=a("2877"),l=a("6544"),c=a.n(l),d=a("8336"),u=a("99d9"),p=a("a523"),m=a("8fea"),v=a("ce7e"),g=a("132d"),f=a("adda"),h=a("0fd9"),x=a("1f4f"),y=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=y.exports;c()(y,{VBtn:d["a"],VCardText:u["b"],VContainer:p["a"],VDataTable:m["a"],VDivider:v["a"],VIcon:g["a"],VImg:f["a"],VRow:h["a"],VSimpleTable:x["a"]})}}]);
//# sourceMappingURL=chunk-417cc408.96f17d91.js.map