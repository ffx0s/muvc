(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-053a25f2"],{4581:function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar",{attrs:{title:"Checkbox"}}),a("CheckboxGroup",{model:{value:e.selectCitys,callback:function(t){e.selectCitys=t},expression:"selectCitys"}},[a("Group",{attrs:{title:"多选 - 左对齐"}},e._l(e.citys,function(e,t){return a("Cell",{key:t,attrs:{clickable:3!==e.id}},[a("template",{slot:"title"},[a("Checkbox",{attrs:{label:e.name,disabled:3===e.id}})],1)],2)}),1)],1),a("CheckboxGroup",{model:{value:e.selectCitys,callback:function(t){e.selectCitys=t},expression:"selectCitys"}},[a("Group",{attrs:{title:"多选 - 右对齐"}},e._l(e.citys,function(e,t){return a("Cell",{key:t,attrs:{clickable:3!==e.id}},[a("Checkbox",{attrs:{label:e.name,disabled:3===e.id,textAlign:"left"}})],1)}),1)],1),a("div",{staticClass:"app--spacing",staticStyle:{"background-color":"#fff"}},[e._m(0),a("CheckboxGroup",{attrs:{max:2},on:{change:e.change},model:{value:e.selectCitys2,callback:function(t){e.selectCitys2=t},expression:"selectCitys2"}},e._l(e.citys,function(e){return a("Checkbox",{key:e.id,attrs:{label:e.name}})}),1),a("br"),a("p",[e._v("颜色")]),a("Checkbox",{attrs:{color:"#4caf50"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("\n      我已阅读和接受 "),a("span",{staticStyle:{color:"red"}},[e._v("《用户服务协议》")])]),a("br"),a("br"),a("p",[e._v("禁用")]),a("Checkbox",{attrs:{disabled:""},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},[e._v(" 禁用状态 ")]),a("Checkbox",{attrs:{disabled:""},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}},[e._v(" 禁用状态 ")]),a("br"),a("br")],1)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("多选 - 平铺 - 最多选"),a("strong",{staticStyle:{color:"red"}},[e._v("2")]),e._v("个")])}],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-checkbox__group"},[e._t("default")],2)},o=[],i=(a("83d8"),"CheckboxGroup"),r={name:i,props:{value:{type:Array,default:function(){return[]}},max:{type:Number,default:-1}},data:function(){return{name:i}}},s=r,u=(a("5396"),a("2877")),d=Object(u["a"])(s,n,o,!1,null,null,null),p=d.exports,b=a("59da"),h=a("dfae"),v=a("6391"),x={name:"page-checkbox",components:{CheckboxGroup:p,Checkbox:b["a"],Group:h["a"],Cell:v["a"]},data:function(){return{value:!0,value2:!1,value3:!0,value4:!1,citys:[{id:1,name:"北京"},{id:2,name:"上海"},{id:3,name:"广州"},{id:4,name:"深圳"}],selectCitys:["北京","深圳","广州"],selectCitys2:["深圳"]}},methods:{change:function(e,t){this.$toast(t)}}},f=x,k=Object(u["a"])(f,c,l,!1,null,null,null);t["default"]=k.exports},5396:function(e,t,a){"use strict";var c=a("c320"),l=a.n(c);l.a},"59da":function(e,t,a){"use strict";var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"v-checkbox",class:{"v-checkbox--disbled":e.disabled}},["left"===e.textAlign?[a("span",{staticClass:"v-checkbox__text"},[e._t("default",[e._v(e._s(e.label))])],2),e._v("\n     \n  ")]:e._e(),a("input",{staticClass:"v-checkbox__input",style:e.inputStyle,attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.checked},on:{change:function(t){return e.change(t.target.checked)}}}),"right"===e.textAlign?[e._v("\n     \n    "),a("span",{staticClass:"v-checkbox__text"},[e._t("default",[e._v(e._s(e.label))])],2)]:e._e()],2)},l=[],n=(a("83d8"),a("cef0")),o=a("a030"),i={name:"Checkbox",props:{value:null,label:{type:[String,Number],default:""},color:{type:String,default:o["properties"].primary},disabled:{type:Boolean,default:!1},textAlign:{type:String,default:"right"}},computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.label):this.value},set:function(e){this.change(e)}},inputStyle:function(){return this.checked?{backgroundColor:this.color,borderColor:this.color}:{backgroundColor:"transparent"}}},data:function(){return{parent:Object(n["g"])(this,"CheckboxGroup")}},methods:{change:function(e){if(this.parent)if(e){var t=this.parent.max;(t<0||t>this.parent.value.length)&&(this.parent.value.push(this.label),this.emitChange(e))}else{var a=this.parent.value.indexOf(this.label);-1!==a&&(this.parent.value.splice(a,1),this.emitChange(e))}else this.$emit("input",e)},emitChange:function(e){this.parent.$emit("change",this.parent.value,{checked:e,label:this.label})}}},r=i,s=(a("687b"),a("2877")),u=Object(s["a"])(r,c,l,!1,null,null,null);t["a"]=u.exports},"5dc0":function(e,t,a){var c=a("ddd4");"string"===typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);var l=a("499e").default;l("48980e04",c,!0,{sourceMap:!1,shadowMode:!1})},"687b":function(e,t,a){"use strict";var c=a("5dc0"),l=a.n(c);l.a},"947c":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'.v-checkbox__group .v-cell__content{padding:0}.v-checkbox__group .v-cell__left{width:100%}.v-checkbox__group .v-cell__left .v-checkbox,.v-checkbox__group .v-cell__right .v-checkbox{padding-top:11px;padding-bottom:11px;width:100%}.v-checkbox__group .v-checkbox__text{font-size:16px}.v-checkbox__group .v-cell__right .v-checkbox{text-align:justify;color:#000}.v-checkbox__group .v-cell__right .v-checkbox:after{display:inline-block;overflow:hidden;width:100%;height:0;content:"";vertical-align:top}',""])},a030:function(e,t){e.exports={properties:{primary:"#2196f3",success:"#4caf50",error:"#ff5252",warning:"#ffa93a",lightGray:"#e5e5e5",textPrimary:"#000000",textRegular:"#8e8e90",textSecondary:"#d9d9d9",border:"#d9d9d9",background:"#f0eff5"}}},c320:function(e,t,a){var c=a("947c");"string"===typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);var l=a("499e").default;l("2bcfae44",c,!0,{sourceMap:!1,shadowMode:!1})},ddd4:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".v-checkbox{position:relative;display:inline-block;vertical-align:middle;font-size:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-checkbox+.v-checkbox{margin-left:15px}.v-checkbox--disbled{cursor:default}.v-checkbox--disbled .v-checkbox__input{background-color:#e5e5e5!important;border-color:#d9d9d9!important}.v-checkbox--disbled .v-checkbox__text{color:#d9d9d9}.v-checkbox__input{margin:0;outline:0;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:initial;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:20px;height:20px;border-radius:50%;border:1px solid #d9d9d9;vertical-align:middle;opacity:1;-webkit-transition:.3s;transition:.3s}.v-checkbox__input:before{content:\"\";position:absolute;top:2px;left:1px;width:16px;height:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M870.4 332.8l-89.6-89.6L416 601.6 243.2 435.2l-89.6 89.6 262.4 256z' fill='%23fff'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;z-index:2;display:none}.v-checkbox__input:checked:before{display:block}.v-checkbox__text{padding-left:6px;font-size:14px;display:inline-block;vertical-align:middle}",""])}}]);