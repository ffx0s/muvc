(function(e){function t(t){for(var o,i,a=t[0],l=t[1],c=t[2],d=0,p=[];d<a.length;d++)i=a[d],n[i]&&p.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,a=1;a<r.length;a++){var l=r[a];0!==n[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={1:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;s.push([4,0]),r()})({"3AGG":function(e,t,r){},4:function(e,t,r){e.exports=r("Vtdi")},"4ibZ":function(e,t,r){"use strict";var o=r("W6Dj"),n=r.n(o);n.a},EDI0:function(e,t,r){},L8lK:function(e,t,r){},MifX:function(e,t,r){"use strict";var o=r("3AGG"),n=r.n(o);n.a},Vtdi:function(e,t,r){"use strict";r.r(t);r("VRzm");var o=r("Kw5r"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("ScrollToggle"),r("ScrollView"),r("Validator")],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("ScrollView X")]),r("ScrollView",{staticStyle:{margin:"0 auto",width:"300px",height:"100px",border:"1px solid #2c3e50"},attrs:{scrollX:""}},e._l([1,2,3,4,5,6,7],function(t){return r("div",{key:t,staticStyle:{float:"left","margin-right":"10px",width:"100px",height:"100px",background:"#eaeaea"}},[e._v("\n    "+e._s(t)+"\n  ")])})),r("h4",[e._v("ScrollView Y")]),r("ScrollView",{staticStyle:{margin:"0 auto",width:"100px",height:"300px",border:"1px solid #2c3e50"}},e._l([1,2,3,4,5,6,7],function(t){return r("div",{key:t,staticStyle:{width:"100px",height:"100px",background:"#eaeaea","margin-bottom":"10px"}},[e._v("\n    "+e._s(t)+"\n  ")])}))],1)},a=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scroll-view",class:this.scrollX?"x":"y",on:{touchmove:function(e){e.stopPropagation()}}},[this.scrollX?[r("div",{style:{width:this.maxWidth+"px"}},[r("div",{staticClass:"left"},[e._t("default")],2)])]:[e._t("default")]],2)},c=[],u=(r("xfY5"),{name:"ScrollView",props:{maxWidth:{type:Number,required:!1,default:5e3},scrollX:{type:Boolean,required:!1,default:!1}}}),d=u,p=(r("MifX"),r("KHd+")),f=Object(p["a"])(d,l,c,!1,null,"7ab0984c",null),m=f.exports,h={components:{ScrollView:m}},v=h,g=Object(p["a"])(v,i,a,!1,null,null,null),w=g.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ScrollToggle",[r("header",{staticStyle:{width:"100%",height:"45px","line-height":"45px","border-bottom":"1px solid #eaeaea",background:"#fff"}},[r("strong",[e._v("ScrollToggle top")])])]),r("ScrollToggle",{staticStyle:{"z-index":"5"},attrs:{position:"bottom"}},[r("header",{staticStyle:{width:"100%",height:"45px","line-height":"45px","border-top":"1px solid #eaeaea",background:"#fff"}},[r("strong",[e._v("ScrollToggle bottom")])])])],1)},y=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scroll-toggle-wrap",style:e.style},[r("div",{staticClass:"scroll-toggle",class:{toggle:e.show,fixed:e.status,"position-top":e.status&&"top"===e.position,"position-bottom":e.status&&"bottom"===e.position}},[e._t("default")],2)])},x=[],k=r("yT7P"),S=!1;try{var j=Object.defineProperty({},"passive",{get:function(){S=!0}});window.addEventListener("testPassive",null,j),window.removeEventListener("testPassive",null,j)}catch(e){}function O(e,t,r,o){e.addEventListener(t,r,S?Object(k["a"])({capture:!1,passive:!0,once:!1},o):!!o)}function C(e,t,r,o){e.removeEventListener(t,r,o)}function T(){return document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop}var E={name:"ScrollToggle",props:{disabled:{type:Boolean,default:!1},position:{type:String,default:"top"},height:{type:[Number,String],default:0}},data:function(){return{show:!1,status:"",isBind:!1,lastScrollTop:0,style:{}}},created:function(){this.bind()},mounted:function(){var e={height:(this.height||this.$el.firstChild.getBoundingClientRect().height)+"px"};"bottom"===this.position&&(e.position="fixed",e.bottom=0),this.style=e},activated:function(){this.bind()},deactivated:function(){this.unbind()},destroyed:function(){this.unbind()},methods:{bind:function(){this.isBind||(this.isBind=!0,O(window,"scroll",this.scrollHandle=this.scrollHandle.bind(this)))},unbind:function(){this.isBind=!1,C(window,"scroll",this.scrollHandle)},scrollHandle:function(){if(!this.disabled){var e=T(),t=3;Math.abs(e-this.lastScrollTop)>t&&(e>this.lastScrollTop?(this.status="down",this.show=!1):(this.status="up",this.show=!0)),e<=0&&(this.show=!1,this.status=""),this.lastScrollTop=e}}}},V=E,$=(r("4ibZ"),Object(p["a"])(V,_,x,!1,null,"3c5cf0e0",null)),P=$.exports,A={components:{ScrollToggle:P}},q=A,L=Object(p["a"])(q,b,y,!1,null,null,null),B=L.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"300px",margin:"0 auto"}},[r("h4",[e._v("Form validator")]),r("Validator",{ref:"form",attrs:{model:e.form,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.error,n=t.check;return[r("div",{staticClass:"row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.form.username},on:{blur:function(e){n("username")},input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),r("p",{staticClass:"error-info"},[e._v(e._s(o.username))])]),r("div",{staticClass:"row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"password",placeholder:"密码",autocomplete:""},domProps:{value:e.form.password},on:{blur:function(e){n("password")},input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),r("p",{staticClass:"error-info"},[e._v(e._s(o.password))])]),r("div",{staticClass:"row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password2,expression:"form.password2"}],attrs:{type:"password",placeholder:"确认密码",autocomplete:""},domProps:{value:e.form.password2},on:{blur:function(e){n("password2")},input:function(t){t.target.composing||e.$set(e.form,"password2",t.target.value)}}}),r("p",{staticClass:"error-info"},[e._v(e._s(o.password2))])]),r("div",{staticClass:"row"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.type,expression:"form.type"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.form,"type",t.target.multiple?r:r[0])},function(e){n("type")}]}},[r("option",{attrs:{value:""}},[e._v("会员类型")]),e._l(e.options,function(t,o){return r("option",{key:o,domProps:{value:t.value}},[e._v("\n            "+e._s(t.name)+"\n          ")])})],2),r("p",{staticClass:"error-info"},[e._v(e._s(o.type))])]),r("div",{staticClass:"row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.checked,expression:"form.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.checked)?e._i(e.form.checked,null)>-1:e.form.checked},on:{change:[function(t){var r=e.form.checked,o=t.target,n=!!o.checked;if(Array.isArray(r)){var s=null,i=e._i(r,s);o.checked?i<0&&e.$set(e.form,"checked",r.concat([s])):i>-1&&e.$set(e.form,"checked",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"checked",n)},function(e){n("checked")}]}}),e._v("我已阅读和接受xxx\n        "),r("p",{staticClass:"error-info"},[e._v(e._s(o.checked))])]),r("div",{staticClass:"row"},[r("button",{on:{click:e.submit}},[e._v("注册")])])]}}])})],1)},N=[],X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"validator",on:{submit:function(e){e.preventDefault()}}},[e._t("default",null,{error:e.error,check:e.check})],2)},D=[],G=(r("yt8O"),r("RW0V"),r("rGqo"),{props:{model:{type:Object,default:function(){}},rules:{type:Object,default:function(){}}},data:function(){var e={};return Object.keys(this.model).forEach(function(t){e[t]=""}),{error:e}},methods:{check:function(e){var t=this;this.rules[e].some(function(r,o){var n=t.model[e];if(r.required&&("string"===typeof n&&!n.trim()||"boolean"===typeof n&&!n)||(r.min||r.max)&&(n.length<r.min||n.length>r.max))return t.error[e]=t.rules[e][o].message,!0;if(r.validator){var s=r.validator(r,n);if("string"===typeof s)return t.error[e]=s,!0}t.error[e]=""})},checkAll:function(e){var t=this,r=!0,o=[];return Object.keys(this.model).forEach(function(e){t.check(e),t.error[e]&&(r=!1,o.push(t.error[e]))}),o[0]&&e&&e(o),r}}}),H=G,W=Object(p["a"])(H,X,D,!1,null,null,null),K=W.exports,Z={name:"ValidatorExample",components:{Validator:K},data:function(){var e=this,t=function(t,r){return""===r?"请再次输入密码":r!==e.form.password?"两次输入密码不一致":void 0};return{form:{username:"",password:"",password2:"",type:"",checked:!1},rules:{username:[{required:!0,message:"请填写用户名"}],password:[{required:!0,message:"请填写密码"},{min:6,max:12,message:"请填写6-12位数的密码"}],password2:[{validator:t}],type:[{required:!0,message:"请选择会员类型"}],checked:[{required:!0,message:"请阅读并同意注册条款"}]},options:[{name:"黄金会员",value:1},{name:"钻石会员",value:2},{name:"青铜会员",value:3}]}},methods:{submit:function(){this.$refs.form.checkAll()&&alert("提交数据中...")}}},R=Z,Y=(r("b1ec"),Object(p["a"])(R,M,N,!1,null,"34a1be33",null)),z=Y.exports,I={name:"app",components:{ScrollView:w,ScrollToggle:B,Validator:z}},J=I,F=(r("ZL7j"),Object(p["a"])(J,n,s,!1,null,null,null)),Q=F.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(Q)}}).$mount("#app")},W6Dj:function(e,t,r){},ZL7j:function(e,t,r){"use strict";var o=r("EDI0"),n=r.n(o);n.a},b1ec:function(e,t,r){"use strict";var o=r("L8lK"),n=r.n(o);n.a}});
//# sourceMappingURL=app.d513b905.js.map