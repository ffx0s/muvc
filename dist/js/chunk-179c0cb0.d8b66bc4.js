(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-179c0cb0"],{"0b16":function(t,e,l){e=t.exports=l("2350")(!1),e.push([t.i,".page-scroll-view-x{margin:0 auto;max-width:500px;width:90%;height:100px}.page-scroll-view-x .page-scroll-item{margin-right:10px;float:left}.page-scroll-view-y{margin:0 auto;width:100px;height:300px}.page-scroll-view-y .page-scroll-item{margin-bottom:10px}.page-scroll-item{width:100px;height:100px;line-height:100px;background:#eaeaea;text-align:center}.page-scroll-item:last-child{margin-right:0;margin-bottom:0}.page-scroll-view{background-color:#fff}",""])},"0d17":function(t,e,l){"use strict";var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"v-scroll-view",class:[{"v-scroll-view-hideBar":!t.scrollBar},{"v-scroll-view-disabled":!t.scrollable}]},[t.vertical?[l("div",{ref:"scroller",staticClass:"v-scroll-view-scroller v-scroll-view-vertical",on:{touchmove:function(t){t.stopPropagation()}}},[l("div",{staticClass:"v-scroll-view-slot"},[t._t("default")],2)]),t.gradient?[l("div",{staticClass:"v-scroll-view-overlay-vertical",style:{top:0,background:t.setStyle("bottom")}}),l("div",{staticClass:"v-scroll-view-overlay-vertical",style:{bottom:0,background:t.setStyle("top")}})]:t._e()]:[l("div",{ref:"scroller",staticClass:"v-scroll-view-scroller v-scroll-view-horizontal",on:{touchmove:function(t){t.stopPropagation()}}},[l("div",{style:{width:t.width}},[l("div",{staticClass:"v-scroll-view-slot",style:t.slotStyle},[t._t("default")],2)])]),t.gradient?[l("div",{staticClass:"v-scroll-view-overlay-horizontal",style:{left:0,background:t.setStyle("right")}}),l("div",{staticClass:"v-scroll-view-overlay-horizontal",style:{right:0,background:t.setStyle("left")}})]:t._e()]],2)},r=[],i=(l("ac6a"),l("f751"),{linear:function(t,e,l,o){return l*t/o+e},easeInQuad:function(t,e,l,o){return l*(t/=o)*t+e},easeOutQuad:function(t,e,l,o){return-l*(t/=o)*(t-2)+e},easeOutStrong:function(t,e,l,o){return-l*((t=t/o-1)*t*t*t-1)+e},easeInOutQuad:function(t,e,l,o){return(t/=o/2)<1?l/2*t*t+e:-l/2*(--t*(t-2)-1)+e},easeOutCubic:function(t,e,l,o){return l*((t=t/o-1)*t*t+1)+e}}),s=i,a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},n=window.cancelAnimationFrame||function(t){clearTimeout(t)},c=function(){return(new Date).getTime()};function v(){return{time:500,type:"easeOutQuad"}}var u=function(t){var e=null,l=Object.assign(v(),t),o=l.time,r=l.type,i=l.targets,u=l.running,d=l.end,f=c();function p(){var t=c(),l=1-(Math.max(0,f-t+o)/o||0),n=[];i.forEach(function(t){var e=t[0]===t[1]?t[0]:s[r](l*o,t[0],t[1]-t[0],o)||0;n.push(e)}),u(n),1===l?(h(),d&&d()):e=a(p)}function h(){n(e)}return e=a(p),{stop:h}},d={name:"ScrollView",props:{vertical:{type:Boolean,default:!1},maxWidth:{type:String,required:!1,default:"5000px"},gradient:{type:String,default:"rgba(255, 255, 255, 1)"},scrollBar:{type:Boolean,default:!0},flex:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!0}},computed:{width:function(){return this.flex?"100%":this.maxWidth},slotStyle:function(){return this.flex?{width:"100%"}:{float:"left"}},scrollProps:function(){return this.vertical?"scrollTop":"scrollLeft"}},methods:{setStyle:function(t){return"linear-gradient(to ".concat(t,", ").concat(this.gradient,", rgba(255, 255, 255, 0))")},scrollTo:function(t){var e=this,l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this.getScrollValue();o!==t&&(this.animate&&this.animate.stop(),l?this.animate=u({targets:[[o,t]],running:function(t){e.$refs.scroller[e.scrollProps]=t[0]}}):this.$refs.scroller[this.scrollProps]=t)},scroll:function(t){var e=this,l=this.getScrollValue(),o=l+t;this.animate&&this.animate.stop(),this.animate=u({targets:[[l,o]],running:function(t){e.$refs.scroller[e.scrollProps]=t[0]}})},getScrollValue:function(){return this.$refs.scroller[this.scrollProps]}}},f=d,p=(l("80b4"),l("2877")),h=Object(p["a"])(f,o,r,!1,null,null,null);e["a"]=h.exports},"305b":function(t,e,l){var o=l("0b16");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=l("499e").default;r("fccfcede",o,!0,{sourceMap:!1,shadowMode:!1})},7060:function(t,e,l){"use strict";var o=l("305b"),r=l.n(o);r.a},7431:function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-scroll-view"},[l("Navbar",{attrs:{title:"ScrollView"}}),l("div",{staticClass:"page-spacing"},[l("h4",{staticClass:"text-center"},[t._v("ScrollView X")]),l("ScrollView",{ref:"x",staticClass:"page-scroll-view-x"},t._l(t.items,function(e){return l("div",{key:e,staticClass:"page-scroll-item"},[t._v(t._s(e))])}),0),l("br"),l("div",{staticClass:"text-center"},[l("VButton",{attrs:{outline:""},on:{click:t.scroll}},[t._v("滚100像素")]),l("VButton",{attrs:{type:"primary"},on:{click:t.scrollTo}},[t._v("滚到300像素")])],1),l("h4",{staticClass:"text-center"},[t._v("ScrollView Y")]),l("ScrollView",{ref:"y",staticClass:"page-scroll-view-y",attrs:{vertical:""}},t._l(t.items,function(e){return l("div",{key:e,staticClass:"page-scroll-item"},[t._v(t._s(e))])}),0)],1)],1)},r=[],i=l("0d17"),s={name:"page-scroll-view",components:{ScrollView:i["a"]},data:function(){return{items:[1,2,3,4,5,6,7,8,9,10]}},methods:{scrollTo:function(){this.$refs.x.scrollTo(300),this.$refs.y.scrollTo(300)},scroll:function(){this.$refs.x.scroll(100),this.$refs.y.scroll(100)}}},a=s,n=(l("7060"),l("2877")),c=Object(n["a"])(a,o,r,!1,null,null,null);e["default"]=c.exports},"80b4":function(t,e,l){"use strict";var o=l("be05"),r=l.n(o);r.a},b94a:function(t,e,l){e=t.exports=l("2350")(!1),e.push([t.i,".v-scroll-view{position:relative;z-index:2;background-color:#fff}.v-scroll-view-scroller{width:100%;height:100%;-webkit-user-select:none;user-select:none;-webkit-overflow-scrolling:touch}.v-scroll-view-vertical{overflow-y:auto;overflow-x:hidden}.v-scroll-view-vertical .v-scroll-view-slot{padding:16px 0}.v-scroll-view-horizontal{overflow-x:auto;overflow-y:hidden}.v-scroll-view-horizontal .v-scroll-view-slot{padding:0 16px}.v-scroll-view-disabled .v-scroll-view-scroller,.v-scroll-view-hideBar{overflow:hidden}.v-scroll-view-hideBar .v-scroll-view-scroller::-webkit-scrollbar{display:none}.v-scroll-view-hideBar .v-scroll-view-vertical{padding-right:15px}.v-scroll-view-hideBar .v-scroll-view-horizontal{padding-bottom:15px}.v-scroll-view-overlay-horizontal{position:absolute;top:0;height:100%;padding:0 8px;pointer-events:none}.v-scroll-view-overlay-vertical{position:absolute;left:0;width:100%;padding:8px 0;pointer-events:none}",""])},be05:function(t,e,l){var o=l("b94a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=l("499e").default;r("152d7f03",o,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-179c0cb0.d8b66bc4.js.map