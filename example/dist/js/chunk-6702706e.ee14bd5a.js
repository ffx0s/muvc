(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6702706e"],{3328:function(e,t,a){"use strict";var l=function(){var e,t=this,a=t.$createElement,l=t._self._c||a;return l(t.tag,{tag:"component",staticClass:"v-checkbox",class:(e={},e[t.disbledClass]=t.disabled,e[t.checkedClass]=t.checked,e)},["left"===t.textAlign?l("span",{staticClass:"v-checkbox__text"},[t._t("default",[t._v(t._s(t.label))])],2):t._e(),l("input",{staticClass:"v-checkbox__input",style:t.colorStyle,attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:t.checked},on:{change:function(e){return t.change(e.target.checked)}}}),"right"===t.textAlign?l("span",{staticClass:"v-checkbox__text"},[t._t("default",[t._v(t._s(t.label))])],2):t._e()])},c=[],n=(a("c5f6"),a("f6da")),o={name:"Checkbox",props:{value:null,tag:{type:String,default:"label"},label:{type:[String,Number],default:""},color:{type:String,default:""},disabled:{type:Boolean,default:!1},textAlign:{type:String,default:"right"},disbledClass:{type:String,default:"v-checkbox--disbled"},checkedClass:{type:String,default:"v-checkbox--checked"}},computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.label):this.value},set:function(e){this.change(e)}},colorStyle:function(){return this.color?this.checked?{backgroundColor:this.color,borderColor:this.color}:{backgroundColor:"transparent"}:{}}},data:function(){return{parent:Object(n["f"])(this,"CheckboxGroup")}},methods:{change:function(e){if(this.parent)if(e){var t=this.parent.max;(t<0||t>this.parent.value.length)&&(this.parent.value.push(this.label),this.emitChange(e))}else{var a=this.parent.value.indexOf(this.label);-1!==a&&(this.parent.value.splice(a,1),this.emitChange(e))}else this.$emit("input",e)},emitChange:function(e){this.parent.$emit("change",this.parent.value,{checked:e,label:this.label})}}},i=o,r=(a("71a5"),a("2877")),s=Object(r["a"])(i,l,c,!1,null,null,null);t["a"]=s.exports},4581:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar",{attrs:{title:"Checkbox"}}),a("CheckboxGroup",{model:{value:e.selectCitys,callback:function(t){e.selectCitys=t},expression:"selectCitys"}},[a("Group",{attrs:{title:"CheckboxGroup"}},e._l(e.citys,function(e,t){return a("Cell",{key:t,attrs:{clickable:3!==e.id,tag:"label"}},[a("Checkbox",{attrs:{slot:"title",tag:"div",label:e.name,disabled:3===e.id},slot:"title"})],1)}),1)],1),a("div",{staticClass:"app--spacing",staticStyle:{"background-color":"#fff"}},[e._m(0),a("CheckboxGroup",{attrs:{max:2},on:{change:e.change},model:{value:e.selectCitys2,callback:function(t){e.selectCitys2=t},expression:"selectCitys2"}},e._l(e.citys,function(e){return a("Checkbox",{key:e.id,attrs:{label:e.name}})}),1),a("br"),a("p",[e._v("颜色")]),a("Checkbox",{attrs:{color:"#4caf50"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("\n      我已阅读和接受 "),a("span",{staticStyle:{color:"red"}},[e._v("《用户服务协议》")])]),a("br"),a("br"),a("p",[e._v("禁用")]),a("Checkbox",{attrs:{disabled:""},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},[e._v(" 禁用状态 ")]),a("Checkbox",{attrs:{disabled:""},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}},[e._v(" 禁用状态 ")]),a("br"),a("br")],1)],1)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("限制可选数，max："),a("strong",{staticStyle:{color:"red"}},[e._v("2")])])}],n=a("a2c2"),o=a("3328"),i=a("2a19"),r=a("acb3"),s={name:"page-checkbox",components:{CheckboxGroup:n["a"],Checkbox:o["a"],Group:i["a"],Cell:r["a"]},data:function(){return{value:!0,value2:!1,value3:!0,value4:!1,citys:[{id:1,name:"北京"},{id:2,name:"上海"},{id:3,name:"广州"},{id:4,name:"深圳"}],selectCitys:["北京","深圳","广州"],selectCitys2:["深圳"]}},methods:{change:function(e,t){this.$toast(t.label)}}},u=s,d=a("2877"),b=Object(d["a"])(u,l,c,!1,null,null,null);t["default"]=b.exports},"4a63":function(e,t,a){var l=a("8efb");"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var c=a("499e").default;c("22b89b08",l,!0,{sourceMap:!1,shadowMode:!1})},"71a5":function(e,t,a){"use strict";var l=a("4a63"),c=a.n(l);c.a},"8efb":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".v-checkbox{position:relative;display:inline-block;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.v-checkbox+.v-checkbox{margin-left:15px}.v-checkbox--checked .v-checkbox__input{border-color:var(--primary);background-color:var(--primary)}.v-checkbox--disbled{cursor:default}.v-checkbox--disbled .v-checkbox__input{background-color:var(--lightGray)!important;border-color:var(--border)!important}.v-checkbox--disbled .v-checkbox__text{color:var(--textSecondary)}.v-checkbox__input{margin:0;outline:0;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:initial;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;box-sizing:border-box;position:relative;width:20px;height:20px;border-radius:50%;border:1px solid var(--border);vertical-align:middle;opacity:1;transition:.3s}.v-checkbox__input:before{content:\"\";position:absolute;top:2px;left:1px;width:16px;height:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M870.4 332.8l-89.6-89.6L416 601.6 243.2 435.2l-89.6 89.6 262.4 256z' fill='%23fff'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;z-index:2;display:none}.v-checkbox__input:checked:before{display:block}.v-checkbox__text{padding-left:6px;display:inline-block;vertical-align:middle}",""])},a2c2:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-checkbox__group"},[e._t("default")],2)},c=[],n=(a("c5f6"),"CheckboxGroup"),o={name:n,props:{value:{type:Array,default:function(){return[]}},max:{type:Number,default:-1}},data:function(){return{name:n}}},i=o,r=a("2877"),s=Object(r["a"])(i,l,c,!1,null,null,null);t["a"]=s.exports}}]);