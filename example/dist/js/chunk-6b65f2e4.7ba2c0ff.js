(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b65f2e4","chunk-9d4413b6"],{"0293":function(t,e,i){var a=i("241e"),n=i("53e2");i("ce7e")("getPrototypeOf",function(){return function(t){return n(a(t))}})},"061b":function(t,e,i){t.exports=i("fa99")},"07e1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("InfiniteScroll",{staticClass:"infinite-scroll",attrs:{empty:t.empty,failed:t.failed,finished:t.finished,waveColor:"#f0eff5"},on:{load:t.load,refresh:t.refresh},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("transition-group",{staticClass:"app__items",attrs:{tag:"ul",name:t.transitionName}},t._l(t.items,function(t){return i("Card",{key:t.id,attrs:{tag:"li",item:t}})}),1)],1)},n=[],s=i("cebc"),l=i("0de0"),o=i("90e0"),r=i("c4c8"),c={components:{Card:l["a"],InfiniteScroll:o["a"]},data:function(){return{items:[],loading:!0,finished:!1,failed:!1,empty:!1,transitionName:"item"}},created:function(){this.query={offset:0,limit:15}},methods:{fetchData:function(t){var e=this;return this.failed=!1,Object(r["b"])(t).then(function(i){var a=i.records,n=i.pages,s=i.total;e.loading?(e.transitionName="item",e.items=e.items.concat(a),e.query.offset=t.offset):(e.transitionName="",e.items=a,e.query.offset=1),e.empty=!s,e.finished=t.offset>=n}).catch(this.failure)},load:function(t){this.fetchData(Object(s["a"])({},this.query,{offset:this.query.offset+1})).then(t)},refresh:function(t){this.fetchData(Object(s["a"])({},this.query,{offset:1})).then(t)},failure:function(){this.failed=!0}}},d=c,u=(i("a7d0"),i("2877")),f=Object(u["a"])(d,a,n,!1,null,null,null);e["default"]=f.exports},"0ca5":function(t,e,i){var a=i("b57b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("f474bdda",a,!0,{sourceMap:!1,shadowMode:!1})},"0de0":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tag,{tag:"component",staticClass:"v-c2"},[i("div",{staticClass:"v-c2__image",class:t.loadingClass},[t.item.image?i("img",{attrs:{src:t.item.image}}):t._e()]),i("div",{staticClass:"v-c2__detail"},[i("div",{staticClass:"v-c2__title",class:t.loadingClass},[t._v(t._s(t.item.title))]),i("div",{staticClass:"v-c2__description",class:t.loadingClass},[t._v("\n      "+t._s(t.item.description)+"\n    ")])])])},n=[],s={name:"v-card-c2",props:{tag:{type:String,default:"div"},loading:{type:Boolean,default:!1},item:{type:Object,default:function(){return{image:"",title:"",description:""}}}},computed:{loadingClass:function(){return this.loading?"v-skeleton":""}}},l=s,o=(i("ef5d"),i("2877")),r=Object(o["a"])(l,a,n,!1,null,null,null);e["a"]=r.exports},"12b3":function(t,e,i){var a=i("3acd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("57d2f32c",a,!0,{sourceMap:!1,shadowMode:!1})},"17a6":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-c1{width:100%;background-color:#fff}.v-c1__image{width:100%;height:130px;overflow:hidden}.v-c1__image img{max-width:100%}.v-c1__detail{padding:10px 15px}.v-c1__title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;min-height:26px;font-weight:450}.v-c1__description{margin-top:5px;min-height:80px;font-size:14px}",""])},"1df8":function(t,e,i){var a=i("63b6");a(a.S,"Object",{setPrototypeOf:i("ead6").set})},2318:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h4",{staticClass:"text-center"},[t._v("Swpie 横向")]),i("Swipe",{staticClass:"swipe",attrs:{preload:"",vertical:t.vertical},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.imgs,function(t,e){return i("SwipeItem",{key:e,attrs:{lazy:""}},[i("img",{staticClass:"img",attrs:{src:t}})])}),1),i("h4",{staticClass:"text-center"},[t._v("Swpie 垂直")]),i("Swipe",{staticClass:"swipe",attrs:{vertical:"",optimization:"",preload:""},model:{value:t.index2,callback:function(e){t.index2=e},expression:"index2"}},t._l(t.imgs,function(t){return i("SwipeItem",{key:t,attrs:{lazy:""}},[i("img",{staticClass:"img",attrs:{src:t}})])}),1)],1)},n=[],s=i("802d"),l=i("0678"),o={components:{Swipe:s["a"],SwipeItem:l["a"]},data:function(){return{vertical:!1,index:0,index2:0,imgs:["https://static.webfed.cn/o_1d9u7gc8cedal1q1nhuc8g243d.jpg?imageView2/0/w/700","https://static.webfed.cn/o_1d9u7gc8c8ip1u35n111i46ehce.jpg?imageView2/0/w/700","https://static.webfed.cn/o_1d9u7gc8cnpnke014pnu1g25ch.jpg?imageView2/0/w/700","https://static.webfed.cn/o_1d9u7gc8ceef1kip1f6kg0jb67g.jpg?imageView2/0/w/700"]}}},r=o,c=(i("a505"),i("2877")),d=Object(c["a"])(r,a,n,!1,null,null,null);e["default"]=d.exports},"25b0":function(t,e,i){i("1df8"),t.exports=i("584a").Object.setPrototypeOf},"26ec":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".swipe{margin:0 auto;width:100%;height:200px;background:#fff}.swipe .img{max-width:100%}",""])},"29b6":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".infinite-scroll{padding-bottom:10px}",""])},"3acd":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-tab__nav{position:relative;margin:0;padding:0;list-style:none;height:44px;line-height:44px;text-align:center;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex}.v-tab__nav dt{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 8px;min-width:50px;-webkit-box-sizing:border-box;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;-webkit-transition:color .3s;transition:color .3s}.v-tab__nav--scrollable{display:block}.v-tab__nav--scrollable dt{float:left}.v-tab__nav--active{color:#2196f3}.v-tab__nav-line{position:absolute;left:0;bottom:0;margin:0;width:40px;-webkit-transition-property:width,-webkit-transform;transition-property:width,-webkit-transform;transition-property:transform,width;transition-property:transform,width,-webkit-transform}",""])},"3b86":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-c4{font-size:12px;line-height:18px;background-color:#fff;border-radius:4px}.v-c4__header{padding:10px 10px 0}.v-c4__content{padding:10px}.v-c4__list{list-style:none;padding:0;margin:0}.v-c4__list li{margin-bottom:10px}.v-c4__item-image{width:90px;height:90px;border-radius:5px;background-position:50%;background-repeat:no-repeat}.v-c4__item-info{margin-left:10px}.v-c4__item-info,.v-c4__item-title{-webkit-box-flex:1;-ms-flex:1;flex:1}.v-c4__item-title{margin-bottom:5px}.v-c4__item-price{margin-left:10px;text-align:right}.v-c4__item-number{color:#8e8e90}.v-c4__footer{padding:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.v-c4__total{text-align:right}.v-c4_row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.v-c4_between,.v-c4_row{display:-webkit-box;display:-ms-flexbox;display:flex}.v-c4_between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}",""])},"4aa6":function(t,e,i){t.exports=i("dc62")},"4c1f":function(t,e,i){var a=i("6dc3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("a35a6bdc",a,!0,{sourceMap:!1,shadowMode:!1})},"4d16":function(t,e,i){t.exports=i("25b0")},"4ec8":function(t,e,i){var a=i("29b6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("878d5d48",a,!0,{sourceMap:!1,shadowMode:!1})},5005:function(t,e,i){"use strict";var a=i("4c1f"),n=i.n(a);n.a},"5c35":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-infinite-scroll__footer{width:100%;min-height:52px;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.v-infinite-scroll__empty,.v-infinite-scroll__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.v-infinite-scroll__empty{min-height:400px}.v-infinite-scroll__loading{color:#d9d9d9}",""])},"5e62":function(t,e,i){var a=i("7752");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("659c7993",a,!0,{sourceMap:!1,shadowMode:!1})},"6dc3":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-tab{position:relative;height:100%}.v-tab__content{position:absolute;bottom:0;left:0;right:0;width:100%}.v-tab__item{position:relative;z-index:1;width:100%;height:100%}.v-tab__item>.v-swipe__content{overflow-y:auto;-webkit-overflow-scrolling:touch}",""])},7752:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-c2{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px;background-color:#fff}.v-c2__image{width:100px;height:100px;background-color:#f0eff5;border-radius:5px}.v-c2__image img{max-width:100%;border-radius:inherit}.v-c2__detail{margin-left:10px;-webkit-box-flex:1;-ms-flex:1;flex:1}.v-c2__title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;min-height:26px;font-weight:450}.v-c2__description{margin-top:5px;height:62px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-size:14px}",""])},7769:function(t,e,i){var a=i("5c35");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("3cefd642",a,!0,{sourceMap:!1,shadowMode:!1})},"7d81":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-scroll-view",class:[{"v-scroll-view--hidebar":!t.scrollBar},{"v-scroll-view--disabled":!t.scrollable}]},[t.vertical?[i("div",{ref:"scroller",staticClass:"v-scroll-view__scroller v-scroll-view--vertical"},[i("div",{staticClass:"v-scroll-view__slot"},[t._t("default")],2)]),t.gradient?[i("div",{staticClass:"v-scroll-view__voverlay",style:{top:0,background:t.setStyle("bottom")}}),i("div",{staticClass:"v-scroll-view__voverlay",style:{bottom:0,background:t.setStyle("top")}})]:t._e()]:[i("div",{ref:"scroller",staticClass:"v-scroll-view__scroller v-scroll-view--horizontal"},[i("div",{style:{width:t.width}},[i("div",{staticClass:"v-scroll-view__slot",style:t.slotStyle},[t._t("default")],2)])]),t.gradient?[i("div",{staticClass:"v-scroll-view__hoverlay",style:{left:0,background:t.setStyle("right")}}),i("div",{staticClass:"v-scroll-view__hoverlay",style:{right:0,background:t.setStyle("left")}})]:t._e()]],2)},n=[],s=(i("83d8"),i("4c72")),l={name:"ScrollView",props:{vertical:{type:Boolean,default:!1},scrollWidth:{type:Number,required:!1,default:5e3},gradient:{type:String,default:"rgba(255, 255, 255, 1)"},scrollBar:{type:Boolean,default:!0},flex:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!0}},computed:{width:function(){return this.flex?"100%":this.scrollWidth+"px"},slotStyle:function(){return this.flex?{width:"100%"}:{float:"left"}},scrollProps:function(){return this.vertical?"scrollTop":"scrollLeft"}},methods:{setStyle:function(t){return"linear-gradient(to ".concat(t,", ").concat(this.gradient,", rgba(255, 255, 255, 0))")},scrollTo:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.getScrollValue();a!==t&&(this.animate&&this.animate.stop(),i?this.animate=Object(s["a"])({targets:[[a,t]],running:function(t){e.$refs.scroller[e.scrollProps]=Math.ceil(t[0])}}):this.$refs.scroller[this.scrollProps]=t)},scroll:function(t){var e=this,i=this.getScrollValue(),a=i+t;this.animate&&this.animate.stop(),this.animate=Object(s["a"])({targets:[[i,a]],running:function(t){e.$refs.scroller[e.scrollProps]=Math.ceil(t[0])}})},getScrollValue:function(){return this.$refs.scroller[this.scrollProps]}}},o=l,r=(i("c3df"),i("2877")),c=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=c.exports},"87a0":function(t,e,i){"use strict";var a=i("f789f"),n=i.n(a);n.a},"8e96":function(t,e,i){var a=i("26ec");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("5946f42f",a,!0,{sourceMap:!1,shadowMode:!1})},"90e0":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("WithScroll",{attrs:{onscroll:t.update,rAF:""}},[i(t.pullRefresh?"PullRefresh":"div",t._b({tag:"component",attrs:{failed:t.failed,disabled:t.isLoading},on:{refresh:t.refresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},"component",t.$attrs,!1),[i("div",{ref:"container",staticClass:"v-infinite-scroll"},[t._t("default")],2),i("div",{class:t.footerClass},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],class:t.loadingClass},[t._t("loading",[i("Loading",{staticClass:"v-infinite-scroll__loading",attrs:{size:"32"}})])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.finished&&!t.empty,expression:"finished && !empty"}],class:t.finishedClass},[t._t("finished",[t._v("全部加载完成")])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.empty,expression:"empty"}],class:t.emptyClass},[t._t("empty",[t._v("空空如也")])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.failed&&!t.finished,expression:"failed && !finished"}],class:t.failedClass,on:{click:t.load}},[t._t("failed",[t._v("加载失败,点击重试")])],2)])])],1)},n=[],s=(i("83d8"),i("78a4a")),l=i("b4b5"),o=i("992d"),r=i("cef0"),c={name:"InfiniteScroll",inheritAttrs:!1,components:{WithScroll:o["a"],PullRefresh:s["a"],Loading:l["a"]},props:{value:{type:Boolean,required:!0},finished:{type:Boolean,default:!1},failed:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},offset:{type:Number,default:300},pullRefresh:{type:Boolean,default:!0},footerClass:{type:String,default:"v-infinite-scroll__footer"},loadingClass:{type:String,default:""},finishedClass:{type:String,default:""},emptyClass:{type:String,default:"v-infinite-scroll__empty"},failedClass:{type:String,default:""}},data:function(){return{refreshing:!1,isLoading:!1}},watch:{value:{handler:function(t){t&&this.load()},immediate:!0}},methods:{update:function(){this.shouldLoadMore()&&this.load()},shouldLoadMore:function(){if(this.finished||this.value||this.failed)return!1;var t=this.$refs.container.getBoundingClientRect().bottom;return t-r["s"].height()<=this.offset},load:function(){this.finished?this.done():this.isLoading||this.refreshing||(this.isLoading=!0,this.$emit("input",!0),this.$emit("load",this.done))},refresh:function(t){this.$emit("refresh",t)},done:function(){var t=this;this.$nextTick(function(){t.$emit("input",!1),t.isLoading=!1})}}},d=c,u=(i("cc5c"),i("2877")),f=Object(u["a"])(d,a,n,!1,null,null,null);e["a"]=f.exports},9427:function(t,e,i){var a=i("63b6");a(a.S,"Object",{create:i("a159")})},"97b3":function(t,e,i){"use strict";var a=i("bda4"),n=i.n(a);n.a},"992d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default")],2)},n=[],s=(i("83d8"),i("cef0")),l={name:"WithScroll",props:{rAF:Boolean,wait:Number,onscroll:{type:Function,default:function(){}}},mounted:function(){this.bind()},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind(),this.handleScroll=null},methods:{bind:function(){this.isBind||(this.handleScroll=this.rAF?Object(s["m"])(this.handleScroll):Object(s["q"])(this.handleScroll,this.wait),this.scrollEl=Object(s["e"])(this.$el),Object(s["a"])(this.scrollEl,"scroll",this.handleScroll),this.isBind=!0)},unbind:function(){this.isBind&&(Object(s["n"])(this.scrollEl,"scroll",this.handleScroll),this.isBind=!1,this.scrollEl=null)},handleScroll:function(){this.scrollTop=Object(s["f"])(this.scrollEl),this.onscroll(this.scrollTop)},setScrollTop:function(t){Object(s["o"])(this.scrollEl,t)}}},o=l,r=i("2877"),c=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=c.exports},"99ac":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Navbar",{attrs:{title:"Tab"}},[i("VButton",{attrs:{slot:"right",type:"primary",text:""},on:{click:function(e){return t.$router.push({name:"tab2"})}},slot:"right"},[t._v("\n      TabView\n    ")])],1),i("Tabs",{attrs:{navbar:""},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[i("Tab",{attrs:{title:"Skeleton",lazy:""}},[i("SkeletonModule",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1),i("Tab",{attrs:{title:"ImgViewer",lazy:""}},[i("ImageViewerModule")],1),i("Tab",{attrs:{title:"InfiniteScroll",lazy:""}},[i("InfiniteScrollModule")],1),i("Tab",{attrs:{title:"PullRefresh",lazy:""}},[i("PullRefreshModule")],1),i("Tab",{attrs:{title:"Swipe",lazy:""}},[i("SwipeModule")],1)],1)],1)},n=[],s=i("da29"),l=i("9c82"),o=i("07e1"),r=i("15e8"),c=i("2318"),d=i("729c"),u=i("c8f3"),f=i("d968"),h={name:"page-tab",mixins:[f["a"]],components:{Tabs:s["a"],Tab:l["a"],InfiniteScrollModule:o["default"],PullRefreshModule:r["default"],SwipeModule:c["default"],ImageViewerModule:d["default"],SkeletonModule:u["default"]},data:function(){return{index:0,loading:!0}}},p=h,v=i("2877"),b=Object(v["a"])(p,a,n,!1,null,null,null);e["default"]=b.exports},"9c82":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loaded?i("div",[t._t("default")],2):t._e()},n=[],s={name:"TabItem",props:{title:{type:String,default:""},lazy:{type:Boolean,default:!1}},data:function(){return{loaded:!this.lazy}},methods:{load:function(){this.loaded||(this.loaded=!0)}}},l=s,o=i("2877"),r=Object(o["a"])(l,a,n,!1,null,null,null);e["a"]=r.exports},a030:function(t,e){t.exports={properties:{primary:"#2196f3",success:"#4caf50",error:"#ff5252",warning:"#ffa93a",lightGray:"#e5e5e5",textPrimary:"#000000",textRegular:"#8e8e90",textSecondary:"#d9d9d9",border:"#d9d9d9",background:"#f0eff5"}}},a505:function(t,e,i){"use strict";var a=i("8e96"),n=i.n(a);n.a},a7d0:function(t,e,i){"use strict";var a=i("4ec8"),n=i.n(a);n.a},b57b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-scroll-view{position:relative;z-index:2;background-color:#fff}.v-scroll-view__scroller{width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-overflow-scrolling:touch}.v-scroll-view--vertical{overflow-y:auto;overflow-x:hidden;-ms-touch-action:pan-y;touch-action:pan-y}.v-scroll-view--vertical .v-scroll-view__slot{padding:16px 0}.v-scroll-view--horizontal{overflow-x:auto;overflow-y:hidden;-ms-touch-action:pan-x;touch-action:pan-x}.v-scroll-view--horizontal .v-scroll-view__slot{padding:0 16px}.v-scroll-view--disabled .v-scroll-view__scroller{overflow:hidden;-ms-touch-action:none;touch-action:none}.v-scroll-view--disabled .v-scroll-view__hoverlay,.v-scroll-view--disabled .v-scroll-view__voverlay{display:none}.v-scroll-view--disabled .v-scroll-view__slot{padding:0}.v-scroll-view--hidebar{overflow:hidden}.v-scroll-view--hidebar .v-scroll-view__scroller::-webkit-scrollbar{display:none}.v-scroll-view--hidebar .v-scroll-view--vertical{padding-right:15px}.v-scroll-view--hidebar .v-scroll-view--horizontal{padding-bottom:15px}.v-scroll-view__hoverlay{position:absolute;top:0;height:100%;padding:0 8px;pointer-events:none}.v-scroll-view__voverlay{position:absolute;left:0;width:100%;padding:8px 0;pointer-events:none}",""])},bda4:function(t,e,i){var a=i("17a6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("4b1d68f3",a,!0,{sourceMap:!1,shadowMode:!1})},c3df:function(t,e,i){"use strict";var a=i("0ca5"),n=i.n(a);n.a},c8f3:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app--spacing"},[t.loading?t._m(0):i("Card1",{attrs:{item:t.item}}),i("br"),t.loading?t._m(1):i("Card2",{attrs:{item:t.item2}}),i("br"),t.loading?t._m(2):i("Card3",{attrs:{item:t.item3}}),i("br"),t.loading?t._m(3):i("Card4",{attrs:{item:t.item4}},[i("template",{slot:"btns"},[i("VButton",{attrs:{small:"",outline:""}},[t._v("查看物流")]),i("VButton",{attrs:{small:"",outline:""}},[t._v("延长收货")]),i("VButton",{attrs:{small:"",outline:"",type:"warning"}},[t._v("确认收货")])],1)],2)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card1",{attrs:{loading:""}})},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card2",{attrs:{loading:""}})},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card3",{attrs:{loading:""}})},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card4",{attrs:{loading:""}})}],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-c1"},[i("div",{staticClass:"v-c1__image",class:t.loadingClass},[t.item.image?i("img",{attrs:{src:t.item.image}}):t._e()]),i("div",{staticClass:"v-c1__detail"},[i("div",{staticClass:"v-c1__title",class:t.loadingClass},[t._v(t._s(t.item.title))]),i("div",{staticClass:"v-c1__description",class:t.loadingClass},[t._v("\n      "+t._s(t.item.description)+"\n    ")])])])},l=[],o={name:"v-card-c1",props:{loading:{type:Boolean,default:!1},item:{type:Object,default:function(){return{image:"",title:"",description:""}}}},computed:{loadingClass:function(){return this.loading?"v-skeleton":""}}},r=o,c=(i("97b3"),i("2877")),d=Object(c["a"])(r,s,l,!1,null,null,null),u=d.exports,f=i("0de0"),h=i("1511"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-c4"},[i("div",{staticClass:"v-c4__header v-c4_between"},[i("div",{staticClass:"v-c4__header-shopname",class:t.loadingClass},[t._v("\n      "+t._s(t.item.shopname)+"\n    ")]),i("div",{staticClass:"v-color-warning",class:t.loadingClass},[t._v(t._s(t.item.status))])]),i("div",{staticClass:"v-c4__content"},[i("ul",{staticClass:"v-c4__list"},[i("li",{staticClass:"v-c4_row"},[i("div",{staticClass:"v-c4__item-image",class:t.loadingClass,style:t.imageStyle}),i("div",{staticClass:"v-c4__item-info v-c4_between",class:t.loadingClass},[i("div",{staticClass:"v-c4__item-title"},[t._v(t._s(t.item.title))]),i("div",{staticClass:"v-c4__item-price"},[i("div",[t._v(t._s(t.item.price))]),i("div",{staticClass:"v-c4__item-number"},[t._v("x"+t._s(t.item.number))])])])])]),i("div",{staticClass:"v-c4__total"},[i("span",{class:t.loadingClass},[i("span",{staticClass:"v-c4__item-number"},[t._v("共"+t._s(t.item.number)+"件商品")]),t._v("\n         合计: ￥"+t._s(t.item.price)+"\n      ")])])]),i("div",{staticClass:"v-c4__footer v-c4_between v-bd-top"},[i("span",{staticClass:"v-color-error"},[t._v(t._s(t.item.message))]),i("div",{staticClass:"v-c4__footer-actions"},[t._t("btns")],2)])])},v=[],b={name:"v-card-c4",props:{item:{type:Object,default:function(){return{image:"",title:"",price:"",number:"",status:"____________",shopname:"_______________",message:""}}},loading:{type:Boolean,default:!1}},computed:{imageStyle:function(){return this.item.image?{backgroundImage:"url("+this.item.image+")",backgroundSize:"cover"}:{}},loadingClass:function(){return this.loading?"v-skeleton":""}}},m=b,_=(i("87a0"),Object(c["a"])(m,p,v,!1,null,null,null)),g=_.exports,w={components:{Card1:u,Card2:f["a"],Card3:h["a"],Card4:g},props:{value:{type:Boolean,default:!0}},computed:{loading:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},data:function(){return{item:{image:"https://static.webfed.cn/o_1dcbbpm8510miv7h1b0i1qvn1tln9.jpeg?imageView2/0/w/700",title:"江苏省",description:"江苏省，简称苏，是中华人民共和国省级行政区，位于华东地区，省会南京市。“江苏”之名可追溯至清初设置的江苏布政使司，是当时江宁府和苏州府两府首字之合称。"},item2:{image:"http://static.webfed.cn/Fv3hleoT5ts5kNSrqWpXTV6mrztB?imageView2/0/w/300",title:"江苏省",description:"江苏省，简称苏，是中华人民共和国省级行政区，位于华东地区，省会南京市。“江苏”之名可追溯至清初设置的江苏布政使司，是当时江宁府和苏州府两府首字之合称。"},item3:{image:"http://static.webfed.cn/FksNjHhy7Je-dpNJanGFwXDjH2xf",name:"在沙漠里打滚",date:"2018-08-18",content:"卖家超级好，有问题反馈了，很快就给解决，东西好评，还会再来。"},item4:{image:"https://static.webfed.cn/o_1dcbc380up531sgu178aebf62ph.jpg?imageView2/0/w/300",title:"安岳黄柠檬新鲜12个当季水果一二级小果皮薄多汁包邮非青香水柠檬",price:23,number:1,status:"卖家已发货",shopname:"润宁生鲜旗舰店"}}},mounted:function(){var t=this;setTimeout(function(){t.loading=!1},2e3)}},x=w,y=Object(c["a"])(x,a,n,!1,null,null,null);e["default"]=y.exports},cc5c:function(t,e,i){"use strict";var a=i("7769"),n=i.n(a);n.a},d968:function(t,e,i){"use strict";var a=i("cef0");e["a"]={mounted:function(){Object(a["b"])().mobile||this.$modal("仅支持移动设备！")}}},da29:function(t,e,i){"use strict";var a,n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-tab"},[t._t("header"),i("TabNav",t._b({ref:"nav",attrs:{index:t.value,tabs:t.tabs},on:{itemClick:t.itemClick}},"TabNav",t.$attrs,!1)),i("Swipe",{staticClass:"v-tab__content",style:{top:t.navHeight+"px",bottom:t.offset+"px"},attrs:{dot:!1,stopPropagation:!1,touchmove:t.move,showPrev:t.scrollToTop,showNext:t.scrollToTop,optimization:""},on:{up:t.up,beforeChange:t.beforeChange,change:t.change},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.$slots.default,function(t,e){return i("SwipeItem",{key:e,ref:"swipeItem",refInFor:!0,staticClass:"v-tab__item"},[i("VNode",{attrs:{node:t}})],1)}),1)],2)},l=[],o=(i("83d8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ScrollView",{ref:"scrollView",staticClass:"v-bd-bottom",style:t.navStyle,attrs:{scrollBar:!1,scrollWidth:t.scrollWidth,scrollable:t.scrollable,flex:t.flex},nativeOn:{"&touchstart":function(e){return t.touchstart(e)},touchmove:function(e){return t.touchmove(e)}}},[i("dl",{ref:"nav",staticClass:"v-tab__nav",class:{"v-tab__nav--scrollable":t.scrollable}},[t._l(t.tabs,function(e,a){var n;return i("dt",{key:a,ref:"item",refInFor:!0,class:(n={},n[t.activeClass]=a===t.index,n),on:{click:function(e){return t.$emit("itemClick",a)}}},[e.title?i("span",[t._v(" "+t._s(e.title)+" ")]):e.$slots.title?i("VNode",{attrs:{node:e.$slots.title[0]}}):t._e()],1)}),i("dd",{staticClass:"v-tab__nav-line",style:t.lineStyle})],2)])}),r=[],c=i("7d81"),d={functional:!0,render:function(t,e){return e.props.node}},u=d,f=i("2877"),h=Object(f["a"])(u,a,n,!1,null,null,null),p=h.exports,v=i("ec31"),b=i("cef0"),m=i("a030"),_={name:"TabNav",components:{ScrollView:c["a"],VNode:p},props:{tabs:Array,index:Number,lineAnimationDuration:{type:Number,default:500},lineColor:{type:String,default:m["properties"].primary},lineHeight:{type:Number,default:3},navHeight:{type:Number,default:44},scrollThreshold:{type:Number,default:4},activeClass:{type:String,default:"v-tab__nav--active"}},data:function(){return{lineWidth:0,translate:0,duration:0,scrollWidth:5e3,scrollable:!0,flex:!1}},computed:{lineStyle:function(){return{width:this.lineWidth+"px",height:this.lineHeight+"px",transitionDuration:"".concat(this.duration,"ms"),transform:"translateX(".concat(this.translate,"px)"),backgroundColor:this.lineColor}},navStyle:function(){return{height:this.navHeight+"px",lineHeight:this.navHeight+"px"}}},mounted:function(){var t=this;this.padding=16,this.handler=new v["a"]({isStopPropagation:this.isStopPropagation,isPreventDefault:this.isPreventDefault}),this.$nextTick(function(){t.getScrollWidth(),t.scrollWidth<b["s"].width()&&(t.flex=!0,t.scrollable=!1),t.$nextTick(function(){t.select(t.index,!1)})})},methods:{getScrollWidth:function(){var t=this.$refs.nav.getBoundingClientRect().width+2*this.padding;return this.scrollWidth=t,t},getItemWidth:function(t){return this.$refs.item[t].getBoundingClientRect().width},getItemOffsetLeft:function(t){return this.$refs.item[t].offsetLeft},getMaxScrollValue:function(){return this.scrollWidth-b["s"].getWidth()},select:function(t,e){this.scrollTo(t,e),this.lineMoveTo(t,e)},scrollTo:function(t,e){var i=this.getItemWidth(t),a=this.getItemOffsetLeft(t)+this.padding,n=a-b["s"].getWidth()/2+i/2,s=Math.max(Math.min(this.getMaxScrollValue(),n),0);this.$refs.scrollView.scrollTo(s,e)},lineMoveTo:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.getItemWidth(t);this.lineWidth=i,this.duration=e?this.lineAnimationDuration:0,this.translate=this.getItemOffsetLeft(t)},lineMove:function(t){this.duration=0,this.translate-=.1*t},touchstart:function(t){this.handler.start(t)},touchmove:function(t){this.handler.move(t)},isStopPropagation:function(){return this.handler.is("panleft")||this.handler.is("panright")},isPreventDefault:function(){return this.handler.is("panup")||this.handler.is("pandown")}}},g=_,w=(i("ea01"),Object(f["a"])(g,o,r,!1,null,null,null)),x=w.exports,y=i("802d"),S=i("0678"),k=i("d225"),T=i("b0b4"),C=i("7618");function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,e){return!e||"object"!==Object(C["a"])(e)&&"function"!==typeof e?O(t):e}var E=i("061b"),M=i.n(E),$=i("4d16"),W=i.n($);function B(t){return B=W.a?M.a:function(t){return t.__proto__||M()(t)},B(t)}var V=i("4aa6"),I=i.n(V);function N(t,e){return N=W.a||function(t,e){return t.__proto__=e,t},N(t,e)}function z(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=I()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}var P=i("bd86"),A=function(){function t(e,i){Object(k["a"])(this,t),this.tabEl=e,this.wrapScrollEl=Object(b["e"])(e),this.tabScrollEls=i.map(function(t){return t.$el.children[0]}),this.handleWrapStart=this.handleWrapStart.bind(this),this.handleWrapMove=this.handleWrapMove.bind(this)}return Object(T["a"])(t,[{key:"_isVertical",value:function(){return null===this.isVertical&&(this.isVertical=Math.abs(this.dif.y)>=Math.abs(this.dif.x)),this.isVertical}},{key:"resetState",value:function(){}},{key:"tabScrollToTop",value:function(){}},{key:"getTabOffsetTop",value:function(){return this.tabEl.offsetTop-this.options.offset}}]),t}(),D=i("4c72"),H=function(t){function e(t,i,a){var n;return Object(k["a"])(this,e),n=j(this,B(e).call(this,t,i)),n.options=Object.assign({},e.defaultOptions,a),n.lastScrollTop=0,n.action="",n.bind(),n}return z(e,t),Object(T["a"])(e,[{key:"handleWrapStart",value:function(t){var e=t.touches[0],i=e.clientX,a=e.clientY;this.last={x:i,y:a},this.dif={x:0,y:0},this.isVertical=null,this.action="",this.tabOffsetTop=this.getTabOffsetTop()}},{key:"handleWrapMove",value:function(t){var e=t.touches[0],i=e.clientX,a=e.clientY,n=this.last.x-i,s=this.last.y-a;this.dif={x:n,y:s},this.last={x:i,y:a};var l=this._isVertical()&&Math.abs(s)>=2;if(l){var o=this.dif.y<0;o?("pandown"!==this.action&&this.animate(0),this.action="pandown"):("panup"!==this.action&&this.animate(this.tabOffsetTop),this.action="panup")}}},{key:"bind",value:function(){this.isBind||(Object(b["a"])(this.wrapScrollEl,"touchstart",this.handleWrapStart),Object(b["a"])(this.wrapScrollEl,"touchmove",this.handleWrapMove),this.isBind=!0)}},{key:"unbind",value:function(){this.isBind&&(Object(b["n"])(this.wrapScrollEl,"touchstart",this.handleWrapStart),Object(b["n"])(this.wrapScrollEl,"touchmove",this.handleWrapMove),this.isBind=!1)}},{key:"resetState",value:function(){this.lastScrollTop=0}},{key:"animate",value:function(t){var e=this,i=Object(b["f"])(this.wrapScrollEl);i!==t&&(this.inAnimation&&this.animation.stop(),this.inAnimation=!0,this.animation=Object(D["a"])({targets:[[i,t]],running:function(t){Object(b["o"])(e.wrapScrollEl,Math.ceil(t[0]))},stop:function(){e.inAnimation=!1}}))}}]),e}(A);Object(P["a"])(H,"defaultOptions",{offset:0});i("af89");var L=function(t){function e(t,i,a){var n;return Object(k["a"])(this,e),n=j(this,B(e).call(this,t,i)),n.options=Object.assign({},e.defaultOptions,a),n.tabIndex=n.options.tabIndex,n.tabOffsetTop=n.getTabOffsetTop(),n.tabScrollEnd=!0,n.handleTabScroll=Object(b["m"])(n.handleTabScroll.bind(O(n))),n.handleWrapEnd=n.handleWrapEnd.bind(O(n)),n.bind(),n}return z(e,t),Object(T["a"])(e,[{key:"handleTabScroll",value:function(t){var e=this,i=t.target.scrollTop;this.inTabAnimation||this.ticking||(this.tabScrollEnd=!1,clearTimeout(this.tabScrollTimer),this.tabScrollTimer=setTimeout(function(){e.tabScrollEnd=!0},100)),"end"===this.touchEventName&&i<0&&(this.inAnimation||this.setWrapScrollTop(this.wrapScrollTop-Math.abs(.3*i)))}},{key:"bind",value:function(){var t=this;this.isBind||(this.tabScrollEls.forEach(function(e){Object(b["a"])(e,"scroll",t.handleTabScroll)}),Object(b["a"])(this.wrapScrollEl,"touchstart",this.handleWrapStart),Object(b["a"])(this.wrapScrollEl,"touchmove",this.handleWrapMove,{passive:!1}),Object(b["a"])(this.wrapScrollEl,"touchend",this.handleWrapEnd),this.isBind=!0)}},{key:"unbind",value:function(){var t=this;this.isBind&&(this.tabScrollEls.forEach(function(e){Object(b["n"])(e,"scroll",t.handleTabScroll)}),Object(b["n"])(this.wrapScrollEl,"touchstart",this.handleWrapStart),Object(b["n"])(this.wrapScrollEl,"touchmove",this.handleWrapMove,{passive:!1}),Object(b["n"])(this.wrapScrollEl,"touchend",this.handleWrapEnd),this.isBind=!1)}},{key:"animate",value:function(t,e){var i=this;if(!this.inAnimation&&(this.wrapScrollTop=Object(b["f"])(this.wrapScrollEl),t=Math.max(t,0),this.wrapScrollTop!==t)){if(0===t){var a=350;Math.abs(this.wrapScrollTop-t)<a&&(e=a)}var n=this.getTabScrollTop(this.tabIndex),s=this.tabScrollEls[this.tabIndex],l=s.scrollHeight,o=s.offsetHeight,r=l-o,c=this.tabScrollEnd;this.inAnimation=!0,this.animation=Object(D["a"])({time:e,type:"easeOutCubic",targets:[[this.wrapScrollTop,t]],running:function(t){var e=Math.ceil(t[0]);if(i.wrapScrollTop<i.tabOffsetTop)i.setWrapScrollTop(e),c=i.tabScrollEnd;else if(c){i.inTabAnimation=!0;var a=n+(e-i.tabOffsetTop);a<r?i.setTabScrollTop(i.tabIndex,a):i.animation.stop()}},stop:function(){i.inAnimation=!1,i.inTabAnimation=!1}})}}},{key:"handleWrapStart",value:function(t){this.inAnimation&&this.animation.stop();var e=t.touches[0],i=e.clientX,a=e.clientY;this.touchEventName="start",this.dif={x:0,y:0,time:0},this.last={x:i,y:a,time:t.timeStamp},this.tabOffsetTop=this.getTabOffsetTop(),this.wrapScrollTop=Object(b["f"])(this.wrapScrollEl),this.firstStuck=this.isStuck(),this.isVertical=null,this.ticking=!1}},{key:"handleWrapMove",value:function(t){var e=t.touches[0],i=e.clientX,a=e.clientY,n=this.last.x-i,s=this.last.y-a;this.touchEventName="move",this.dif={x:n,y:s,time:t.timeStamp-this.last.time},this.last={x:i,y:a,time:t.timeStamp};var l=this._isVertical(),o=l&&0!==s;if(o){var r=s>0,c=this.getTabScrollTop(this.tabIndex);if(this.firstStuck)c<=0&&!r&&(this.firstStuck=!1);else{t.cancelable&&t.preventDefault();var d=.8*s,u=this.isStuck();u&&(r||c>0)?(this.tabScrollEnd&&this.setTabScrollTop(this.tabIndex,s,!0),this.ticking=!0):this.setWrapScrollTop(this.wrapScrollTop+d)}}else t.cancelable&&t.preventDefault()}},{key:"handleWrapEnd",value:function(){if(this.touchEventName="end",this._isVertical()){var t=this._isFastMove();if(t&&!this.firstStuck){var e=this.wrapScrollTop+t.y;this.animate(e,t.time)}}}},{key:"_isFastMove",value:function(){var t=.2,e=this.dif.y/this.dif.time;if(Math.abs(e)>t){var i=420,a=2,n=e*(i/a);return{y:n,time:3*i}}}},{key:"isStuck",value:function(){return this.wrapScrollTop>=this.tabOffsetTop}},{key:"setWrapScrollTop",value:function(t){t=Math.min(Math.max(t,0),this.tabOffsetTop),this.wrapScrollTop=t,Object(b["o"])(this.wrapScrollEl,t)}},{key:"setTabScrollTop",value:function(t,e,i){i?this.tabScrollEls[t].scrollTop+=e:this.tabScrollEls[t].scrollTop=e}},{key:"getTabScrollTop",value:function(t){return this.tabScrollEls[t].scrollTop}},{key:"tabScrollToTop",value:function(t){var e=this;this.inAnimation&&this.animation.stop(),setTimeout(function(){e.isStuck()||e.setTabScrollTop(t,0)})}}]),e}(A);Object(P["a"])(L,"defaultOptions",{offset:0,tabIndex:0});var q={name:"Tab",components:{TabNav:x,VNode:p,Swipe:y["a"],SwipeItem:S["a"]},props:{value:{type:Number,default:0},offset:{type:Number,default:0},navbar:{type:Boolean,default:!1},header:{type:Boolean,default:!1}},computed:{index:{get:function(){return this.value},set:function(t){return this.$emit("input",t),t}}},data:function(){return{tabs:[],navHeight:this.$attrs.navHeight||x.props.navHeight.default}},mounted:function(){var t;this.tabs=this.$refs.swipeItem.map(function(t){return t.$children[0]}),this.tabs[this.value].load(),this.header?t=L:this.navbar&&(t=H),t&&(this.handler=new t(this.$el,this.$refs.swipeItem,{offset:this.offset,tabIndex:this.value}))},beforeDestroy:function(){this.handler&&(this.handler.unbind(),this.handler=null)},methods:{beforeChange:function(t){this.handler&&(this.handler.tabIndex=t,this.handler.tabScrollToTop(t))},change:function(t){this.tabs[t].load(),this.$refs.nav.select(t),this.handler&&this.handler.resetState(),this.$emit("change",t)},move:function(t,e){this.$refs.nav.lineMove(e)},up:function(){this.$refs.nav.lineMoveTo(this.value)},itemClick:function(t){t!==this.value&&this.$emit("input",t)},scrollToTop:function(t){this.handler&&this.handler.tabScrollToTop(t)}}},F=q,R=(i("5005"),Object(f["a"])(F,s,l,!1,null,null,null));e["a"]=R.exports},dc62:function(t,e,i){i("9427");var a=i("584a").Object;t.exports=function(t,e){return a.create(t,e)}},ea01:function(t,e,i){"use strict";var a=i("12b3"),n=i.n(a);n.a},ead6:function(t,e,i){var a=i("f772"),n=i("e4ae"),s=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=i("d864")(Function.call,i("bf0b").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:a(t,i),t}}({},!1):void 0),check:s}},ef5d:function(t,e,i){"use strict";var a=i("5e62"),n=i.n(a);n.a},f789f:function(t,e,i){var a=i("3b86");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("cacaca5a",a,!0,{sourceMap:!1,shadowMode:!1})},fa99:function(t,e,i){i("0293"),t.exports=i("584a").Object.getPrototypeOf}}]);