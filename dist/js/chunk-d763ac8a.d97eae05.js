(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d763ac8a","chunk-5fbe524a","chunk-2d0aba8d"],{"07e1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("InfiniteScroll",{staticClass:"page-infinite-scroll",attrs:{empty:t.empty,failed:t.failed,finished:t.finished},on:{load:t.load,refresh:t.refresh},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("transition-group",{staticClass:"items",attrs:{tag:"ul",name:"item"}},t._l(t.items,function(e){return i("li",{key:e.id,staticClass:"item"},[t._v("\n      "+t._s(e.value)+"\n    ")])}),0)],1)},s=[],a=i("eae9"),o=0;function r(t){return new Promise(function(e){var i={records:[],pages:3,total:45},n=0;1===t.offset&&(o=0);while(n<t.limit)n++,o++,i.records.push({id:o,value:o});setTimeout(function(){return e(i)},~~(100*Math.random()+500))})}var l={components:{InfiniteScroll:a["a"]},data:function(){return{items:[],query:{offset:1,limit:15},loading:!0,finished:!1,failed:!1,empty:!1}},methods:{fetchData:function(){var t=this;return this.failed=!1,r(this.query).then(function(e){var i=e.records,n=e.pages,s=e.total;t.items=t.loading?t.items.concat(i):i,t.empty=!s,t.finished=t.query.offset>=n,t.query.offset++}).catch(this.failure)},load:function(t){this.fetchData().then(t)},refresh:function(t){this.query.offset=1,this.fetchData().then(t)},failure:function(){this.failed=!0}}},c=l,u=(i("0842"),i("2877")),d=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports},"0842":function(t,e,i){"use strict";var n=i("8c85"),s=i.n(n);s.a},"0949":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-swipe-item"},[t.loaded?i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"v-swipe-item-content"},[t._t("default")],2):t._e()])},s=[],a={name:"SwipeItem",props:{lazy:{type:Boolean,default:!1}},data:function(){return{show:!this.$parent.optimization,loaded:!this.lazy}}},o=a,r=(i("e177"),i("2877")),l=Object(r["a"])(o,n,s,!1,null,null,null);e["a"]=l.exports},"0d17":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-scroll-view",class:[{"v-scroll-view-hideBar":!t.scrollBar},{"v-scroll-view-disabled":!t.scrollable}]},[t.vertical?[i("div",{ref:"scroller",staticClass:"v-scroll-view-scroller v-scroll-view-vertical",on:{touchmove:function(t){t.stopPropagation()}}},[i("div",{staticClass:"v-scroll-view-slot"},[t._t("default")],2)]),t.gradient?[i("div",{staticClass:"v-scroll-view-overlay-vertical",style:{top:0,background:t.setStyle("bottom")}}),i("div",{staticClass:"v-scroll-view-overlay-vertical",style:{bottom:0,background:t.setStyle("top")}})]:t._e()]:[i("div",{ref:"scroller",staticClass:"v-scroll-view-scroller v-scroll-view-horizontal",on:{touchmove:function(t){t.stopPropagation()}}},[i("div",{style:{width:t.width}},[i("div",{staticClass:"v-scroll-view-slot",style:t.slotStyle},[t._t("default")],2)])]),t.gradient?[i("div",{staticClass:"v-scroll-view-overlay-horizontal",style:{left:0,background:t.setStyle("right")}}),i("div",{staticClass:"v-scroll-view-overlay-horizontal",style:{right:0,background:t.setStyle("left")}})]:t._e()]],2)},s=[],a=i("dd29"),o={name:"ScrollView",props:{vertical:{type:Boolean,default:!1},maxWidth:{type:String,required:!1,default:"5000px"},gradient:{type:String,default:"rgba(255, 255, 255, 1)"},scrollBar:{type:Boolean,default:!0},flex:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!0}},computed:{width:function(){return this.flex?"100%":this.maxWidth},slotStyle:function(){return this.flex?{width:"100%"}:{float:"left"}},scrollProps:function(){return this.vertical?"scrollTop":"scrollLeft"}},methods:{setStyle:function(t){return"linear-gradient(to ".concat(t,", ").concat(this.gradient,", rgba(255, 255, 255, 0))")},scrollTo:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.getScrollValue();n!==t&&(this.animate&&this.animate.stop(),i?this.animate=Object(a["a"])({targets:[[n,t]],running:function(t){e.$refs.scroller[e.scrollProps]=t[0]}}):this.$refs.scroller[this.scrollProps]=t)},scroll:function(t){var e=this,i=this.getScrollValue(),n=i+t;this.animate&&this.animate.stop(),this.animate=Object(a["a"])({targets:[[i,n]],running:function(t){e.$refs.scroller[e.scrollProps]=t[0]}})},getScrollValue:function(){return this.$refs.scroller[this.scrollProps]}}},r=o,l=(i("80b4"),i("2877")),c=Object(l["a"])(r,n,s,!1,null,null,null);e["a"]=c.exports},"15e8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PullRefresh",{attrs:{failed:t.failed},on:{refresh:t.refresh},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("transition-group",{staticClass:"items",attrs:{tag:"ul",name:"item"}},t._l(t.items,function(e){return i("li",{key:e.id,staticClass:"item"},[t._v("\n      "+t._s(e.value)+"\n    ")])}),0)],1)},s=[],a=(i("96cf"),i("1da1")),o=i("5ed3");function r(){return new Promise(function(t){var e=10,i=[];while(e--)i.push({id:e,value:(100*Math.random()).toFixed(0)});setTimeout(function(){return t(i)},~~(100*Math.random()+300))})}var l={components:{PullRefresh:o["a"]},data:function(){return{items:[],loading:!0,failed:!1}},methods:{fetchData:function(){return this.failed=!1,r().catch(this.failure)},refresh:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchData();case 2:i=t.sent,this.items=i,e();case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),failure:function(){this.failed=!0}}},c=l,u=i("2877"),d=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports},"1c52":function(t,e,i){"use strict";var n=i("b1c4"),s=i.n(n);s.a},2318:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h4",{staticClass:"text-center"},[t._v("Swpie 横向")]),i("Swipe",{staticClass:"demo-swipe",attrs:{preload:""},on:{change:t.change},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.imgs,function(t,e){return i("SwipeItem",{key:e,attrs:{lazy:""}},[i("img",{staticClass:"img",attrs:{src:t}})])}),1),i("h4",{staticClass:"text-center"},[t._v("Swpie 垂直")]),i("Swipe",{staticClass:"demo-swipe",attrs:{vertical:"",optimization:"",preload:""},on:{change:t.change},model:{value:t.index2,callback:function(e){t.index2=e},expression:"index2"}},t._l(t.imgs,function(t){return i("SwipeItem",{key:t,attrs:{lazy:""}},[i("img",{staticClass:"img",attrs:{src:t}})])}),1)],1)},s=[],a=i("6d6f"),o=i("0949"),r={components:{Swipe:a["a"],SwipeItem:o["a"]},data:function(){return{index:0,index2:0,imgs:[i("d436"),i("f744"),i("7428"),i("e805"),i("2ebf")]}},methods:{change:function(t){console.log(t)}}},l=r,c=(i("a505"),i("2877")),u=Object(c["a"])(l,n,s,!1,null,null,null);e["default"]=u.exports},"26ec":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".demo-swipe{margin:0 auto;width:100%;height:200px;background:#efefef}.demo-swipe .img{max-width:100%}",""])},"2b66":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-swipe{position:relative;z-index:2;width:100%;overflow:hidden;-webkit-user-select:none;user-select:none}.v-swipe-items{display:-webkit-box;display:-webkit-flex;display:flex;height:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease}.v-swipe-dots{position:absolute;bottom:10px;margin:0;padding:0;width:100%;list-style-type:none;text-align:center;font-size:0;-webkit-transform:translateZ(0);transform:translateZ(0)}.v-swipe-dots li{margin:0 3px;display:inline-block;width:6px;height:6px;background:#efefef;border-radius:50%;opacity:.5;-webkit-transition:opacity .3s;transition:opacity .3s}.v-swipe-dots li.v-swipe-dots-active{opacity:1}.v-swipe-vertical .v-swipe-items{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.v-swipe-vertical .v-swipe-item{height:100%}.v-swipe-vertical .v-swipe-dots{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;bottom:auto;left:10px;top:0;height:100%;width:auto}.v-swipe-vertical .v-swipe-dots li{display:block;margin:3px 0}",""])},"2ebf":function(t,e,i){t.exports=i.p+"img/timg5.944ff2fd.jpeg"},"2f66":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-infinite-scroll-footer{width:100%;height:50px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.v-infinite-scroll-empty,.v-infinite-scroll-footer{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.v-infinite-scroll-empty{min-height:400px}.v-infinite-scroll-loading{color:#d9d9d9}",""])},3474:function(t,e,i){var n=i("a6db");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("5bda9042",n,!0,{sourceMap:!1,shadowMode:!1})},4156:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-swipe-item{position:relative;-webkit-box-flex:0;-webkit-flex:0 0 100%;flex:0 0 100%}.v-swipe-item-content{height:100%}",""])},"5f31":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".demo-tab{position:absolute;top:46px;bottom:0;width:100%;height:auto}.demo-tab-item .items{margin-top:10px}",""])},"6d6f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-swipe",class:{"v-swipe-vertical":t.vertical},on:{touchstart:t.pointerdown,touchmove:t.pointermove,touchend:t.pointerup,mousedown:t.onMousedown}},[i("div",{ref:"items",staticClass:"v-swipe-items",style:t.style,on:{webkitTransitionEnd:function(e){return e.target!==e.currentTarget?null:t.transitionend(e)},transitionEnd:function(e){return e.target!==e.currentTarget?null:t.transitionend(e)}}},[t._t("default")],2),t.dot?i("ul",{staticClass:"v-swipe-dots"},t._l(t.items.length,function(e,n){return i("li",{key:e,class:{"v-swipe-dots-active":n===t.currentIndex}})}),0):t._e()])},s=[],a=(i("ac6a"),i("c5f6"),i("42a5")),o=i("6116"),r={name:"Swipe",props:{value:{type:Number,default:0},animationDuration:{type:Number,default:350},threshold:{type:Number,default:10},distance:{type:Number,default:30},friction:{type:Number,default:.2},dot:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},playInterval:{type:Number,default:2e3},vertical:{type:Boolean,default:!1},optimization:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!0},preload:{type:Boolean,default:!1},touchmove:{type:Function,required:!1},showPrev:{type:Function,required:!1},showNext:{type:Function,required:!1},offset:{type:Number,default:0}},data:function(){return{translate:0,duration:0,items:[],currentIndex:this.value}},computed:{style:function(){return{transitionDuration:"".concat(this.duration,"ms"),transform:this.vertical?"translate3d(0, ".concat(this.translate,"px, 0)"):"translate3d(".concat(this.translate,"px, 0, 0)")}},propsMap:function(){return this.vertical?{prevAction:"Down",nextAction:"Up",axis:"y",size:"height"}:{prevAction:"Right",nextAction:"Left",axis:"x",size:"width"}}},watch:{value:function(t){this.isChange||(this.isVaildIndex(t)?this.slide(t):this.$emit("input",this.getVaildIndex(t)))},vertical:function(){this.addActions()},optimization:function(t){t?this.showCurrentItem():this.showAllItems()}},created:function(){this.sliding=!1,this.items=this.$children,this.resize=Object(o["c"])(this.resize),this.removeMouseEvents=o["l"]},mounted:function(){var t=this;this.handler=new a["a"]({touchDelay:2,isPreventDefault:this.isPrevOrNextAction,isStopPropagation:this.isStopPropagation}),this.addActions(),this.showCurrentItem(),this.preloadItem(this.currentIndex),this.$nextTick(function(){t.setTranslate(t.currentIndex)}),this.bindResizeEvent()},activated:function(){this.bindResizeEvent(),this.autoPlay&&this.play()},deactivated:function(){clearTimeout(this.playTimer),this.removeResizeEvent()},beforeDestroy:function(){clearTimeout(this.playTimer),this.removeResizeEvent(),this.handler=null},methods:{pointerdown:function(t){clearTimeout(this.playTimer),this.handler.start(t),this.vector=0,this.duration=0,this.sliding=!1,this.startTranslate=this.translate},pointermove:function(t){this.handler.move(t)},pointerup:function(){this.handler.up();var t=this.shouldSliding();if(this.$emit("up",t),t)return t.restore?this.slide(this.currentIndex):t.swipeNext?this.swipeNext():t.swipePrev?this.swipePrev():void 0},onMousedown:function(t){t.preventDefault(),this.pointerdown(t),this.removeMouseEvents=Object(a["b"])(this.pointermove,this.pointerup)},isPrevOrNextAction:function(){return this.handler.is(this.propsMap.nextAction)||this.handler.is(this.propsMap.prevAction)},isStopPropagation:function(){return this.stopPropagation&&this.isPrevOrNextAction()},update:function(t,e){if(!this.sliding){var i=this.hasPrevNext(this.handler.is(this.propsMap.nextAction))?1:this.friction,n=this.vertical?e:t,s=n*i;this.showAdjacentItem(),this.vector=n,this.translate+=s,this.touchmove&&this.touchmove(this.translate,s)}},slide:function(t){t=this.getVaildIndex(t),this.sliding=!0,this.isChange=t!==this.currentIndex,this.isChange&&(this.$emit("beforeChange",t),this.showItem(t),this.preloadItem(t),this.$emit("input",t),this.$emit("change",t),this.currentIndex=t,this.isChange=!1),this.duration=this.animationDuration,this.setTranslate(t)},transitionend:function(){this.showCurrentItem(),this.sliding=!1,this.autoPlay&&this.play(),this.$emit("stop",this.currentIndex)},setTranslate:function(t){this.translate=-t*(this.getSwipeRect()[this.propsMap.size]+this.offset)},swipeNext:function(){this.slide(this.currentIndex+1)},swipePrev:function(){this.slide(this.currentIndex-1)},shouldSliding:function(){var t=this.handler.is(this.propsMap.prevAction),e=this.handler.is(this.propsMap.nextAction);if(this.sliding||!t&&!e)return!1;var i=Math.abs(this.vector)>this.threshold;if(i)return{restore:!1,swipePrev:t,swipeNext:e};var n=this.translate-this.startTranslate,s=Math.abs(n)<this.distance,a=this.translate<this.startTranslate;return{restore:s,swipeNext:a,swipePrev:!a}},isVaildIndex:function(t){return t>=0&&t<this.items.length},getVaildIndex:function(t){return Math.max(Math.min(t||0,this.items.length-1),0)},getSwipeRect:function(){return this.swipeRect||(this.swipeRect=this.$el.getBoundingClientRect())},hasPrevNext:function(t){var e=this.currentIndex-1>=0,i=this.currentIndex+1<this.items.length;return!t&&e||t&&i},play:function(){var t=this;clearTimeout(this.playTimer),this.playTimer=setTimeout(function(){var e=t.currentIndex===t.items.length-1;e?t.slide(0):t.swipeNext()},this.playInterval)},addActions:function(){var t=this.handler.options;this.vertical?(t.onLeft=null,t.onRight=null):(t.onUp=null,t.onDown=null),t["on".concat(this.propsMap.prevAction)]=this.update,t["on".concat(this.propsMap.nextAction)]=this.update},preloadItem:function(t){if(this.preload){var e=this.items[t-1],i=this.items[t+1];e&&(e.loaded=!0),i&&(i.loaded=!0)}},showItem:function(t){var e=this.items[t];e.loaded=e.show=!0},showCurrentItem:function(){var t=this;this.items[this.currentIndex].loaded=!0,this.optimization&&this.items.forEach(function(e,i){e.show=i==t.currentIndex})},showAllItems:function(){this.items.forEach(function(t){t.show=!0})},showAdjacentItem:function(){if(this.handler.is(this.propsMap.prevAction)){var t=this.currentIndex-1,e=this.items[t];e&&(this.showPrev&&this.showPrev(t),e.loaded=e.show=!0)}else if(this.handler.is(this.propsMap.nextAction)){var i=this.currentIndex+1,n=this.items[i];n&&(this.showNext&&this.showNext(i),n.loaded=n.show=!0)}},bindResizeEvent:function(){this.isBindResize||(window.addEventListener("resize",this.resize),this.isBindResize=!0)},removeResizeEvent:function(){window.removeEventListener("resize",this.resize),this.isBindResize=!1},resize:function(){this.swipeRect=null,this.getSwipeRect(),this.setTranslate(this.currentIndex),this.$emit("resize")}}},l=r,c=(i("9949"),i("2877")),u=Object(c["a"])(l,n,s,!1,null,null,null);e["a"]=u.exports},7428:function(t,e,i){t.exports=i.p+"img/timg3.92276d9c.jpeg"},"80b4":function(t,e,i){"use strict";var n=i("be05"),s=i.n(n);s.a},"8c85":function(t,e,i){var n=i("aef3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("33f98242",n,!0,{sourceMap:!1,shadowMode:!1})},"8e96":function(t,e,i){var n=i("26ec");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("5946f42f",n,!0,{sourceMap:!1,shadowMode:!1})},"962f":function(t,e,i){var n=i("4156");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("30969546",n,!0,{sourceMap:!1,shadowMode:!1})},9949:function(t,e,i){"use strict";var n=i("edfa"),s=i.n(n);s.a},"99ac":function(t,e,i){"use strict";i.r(e);var n,s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Navbar",{attrs:{title:"Tab"}}),i("Tabs",{staticClass:"demo-tab",model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[i("Tab",{staticClass:"demo-tab-item",attrs:{title:"ScrollList",lazy:""}},[i("InfiniteScrollModule")],1),i("Tab",{staticClass:"demo-tab-item",attrs:{title:"PullRefresh",lazy:""}},[i("PullRefreshModule")],1),i("Tab",{staticClass:"demo-tab-item",attrs:{title:"Swipe",lazy:""}},[i("SwipeModule")],1),i("Tab",{staticClass:"demo-tab-item",attrs:{title:"Tab4"}},[i("ul",{staticClass:"items"},[i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")]),i("li",[t._v("Tab4")])])]),i("Tab",{staticClass:"demo-tab-item",attrs:{title:"Tab5"}},[i("ul",{staticClass:"items"},[i("li",[t._v("Tab5")])])]),i("Tab",{staticClass:"demo-tab-item",attrs:{title:"Tab6"}},[i("ul",{staticClass:"items"},[i("li",[t._v("Tab6")])])]),i("Tab",{staticClass:"demo-tab-item",attrs:{lazy:"",title:"Tab7"}},[i("ul",{staticClass:"items"},[i("li",[t._v("Tab7")])])]),i("Tab",{staticClass:"demo-tab-item",attrs:{title:"Tab8"}},[i("ul",{staticClass:"items"},[i("li",[t._v("Tab8")])])])],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-tab"},[i("ScrollView",{ref:"tabBar",staticClass:"v-tab-title v-bd-y-bottom",style:t.tabBarStyle,attrs:{scrollable:t.scrollable,scrollBar:!1,flex:""}},[i("dl",{staticClass:"v-tab-title-inner",class:{"v-tab-scrollable":t.scrollable}},[t._l(t.tabBarItems,function(e,n){return i("dt",{key:n,ref:"tabBarItem",refInFor:!0,class:{"v-tab-active":n===t.value},style:{color:n===t.value?t.activeTextColor:null},on:{click:function(e){return t.tabClick(n)}}},[e.title?i("span",{staticClass:"v-tab-title"},[t._v("\n          "+t._s(e.title)+"\n        ")]):e.$slots.title?i("VNode",{attrs:{node:e.$slots.title[0]}}):t._e()],1)}),i("dd",{ref:"line",staticClass:"v-tab-line",style:t.lineStyle})],2)]),i("Swipe",{staticClass:"v-tab-content",style:t.tabContentStyle,attrs:{dot:!1,stopPropagation:!1,optimization:"",touchmove:t.touchmove},on:{change:t.slideChange,stop:function(e){return t.$emit("stop",t.value)}},model:{value:t.swipeIndex,callback:function(e){t.swipeIndex=e},expression:"swipeIndex"}},t._l(t.$slots.default,function(t,e){return i("SwipeItem",{key:e,ref:"tabs",refInFor:!0,staticClass:"v-tab-item"},[i("VNode",{attrs:{node:t}})],1)}),1)],1)},l=[],c=(i("c5f6"),{functional:!0,render:function(t,e){return e.props.node}}),u=c,d=i("2877"),h=Object(d["a"])(u,n,s,!1,null,null,null),f=h.exports,p=i("0d17"),v=i("6d6f"),m=i("0949"),b=i("6116"),w=i("1c92"),g={name:"Tab",components:{VNode:f,ScrollView:p["a"],Swipe:v["a"],SwipeItem:m["a"]},props:{value:{type:Number,default:0},scrollThreshold:{type:Number,default:4},lineColor:{type:String,default:w["properties"].primary},activeTextColor:{type:String,default:w["properties"].primary},lineAnimationDuration:{type:Number,default:500},tabBarHeight:{type:Number,default:44}},computed:{scrollable:function(){return this.tabs.length>this.scrollThreshold},swipeIndex:{get:function(){return this.value},set:function(t){return this.$emit("input",t),t}},lineStyle:function(){return{width:this.lineWidth+"px",transitionDuration:"".concat(this.duration,"ms"),transform:"translateX(".concat(this.translate,"px)"),backgroundColor:this.lineColor}},tabBarStyle:function(){return{height:this.tabBarHeight+"px",lineHeight:this.tabBarHeight+"px"}},tabContentStyle:function(){return{top:this.tabBarHeight+"px"}}},data:function(){return{tabs:[],tabBarItems:[],translate:0,duration:0,lineWidth:0}},mounted:function(){var t=this;this.tabs=this.$refs.tabs,this.tabBarItems=this.tabs.map(function(t){return t.$children[0]}),this.$nextTick(function(){setTimeout(function(){t.tabBarScrollTo(t.value,!1),t.lineScrollTo(t.value,!1),t.tabBarItems[t.value].load()})})},methods:{getBarItemWidth:function(){return this.tabBarItemWidth||(this.tabBarItemWidth=this.$refs.tabBarItem[0].getBoundingClientRect().width)},getBarItemTextWidth:function(t){var e=this.$refs.tabBarItem[t].querySelector(".v-tab-title"),i=this.getBarItemWidth();return e?Math.min(e.offsetWidth,i):i},getMaxScrollValue:function(){return this.tabs.length*this.getBarItemWidth()-b["r"].getWidth()},tabBarScrollTo:function(t,e){if(this.scrollable){var i=this.getBarItemWidth(),n=i*t+8,s=n-b["r"].getWidth()/2+i/2,a=Math.max(Math.min(this.getMaxScrollValue(),s),0),o=this.$refs.tabBar;o.scrollTo(a,e)}},lineScrollTo:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.getBarItemWidth(),n=this.getBarItemTextWidth(t),s=(i-n)/2;this.lineWidth=n,this.duration=e?this.lineAnimationDuration:0,this.translate=t*i+s},slideChange:function(t){this.lineScrollTo(t),this.tabBarItems[t].load(),t!==this.value&&(this.tabBarScrollTo(t),this.$emit("change",t))},touchmove:function(t,e){this.duration=0,this.translate-=.1*e},tabClick:function(t){t!==this.value&&(this.tabBarScrollTo(t),this.$emit("input",t),this.$emit("change",t))}}},x=g,y=(i("b5cd"),Object(d["a"])(x,r,l,!1,null,null,null)),k=y.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loaded?i("div",[t._t("default")],2):t._e()},C=[],I={name:"TabItem",props:{title:{type:String,default:""},lazy:{type:Boolean,default:!1}},data:function(){return{loaded:!this.lazy}},methods:{load:function(){this.loaded||(this.loaded=!0)}}},_=I,S=Object(d["a"])(_,T,C,!1,null,null,null),B=S.exports,M=i("07e1"),z=i("15e8"),$=i("2318"),P={name:"page-tab",components:{Tabs:k,Tab:B,InfiniteScrollModule:M["default"],PullRefreshModule:z["default"],SwipeModule:$["default"]},data:function(){return{index:0}}},N=P,R=(i("1c52"),Object(d["a"])(N,a,o,!1,null,null,null));e["default"]=R.exports},a505:function(t,e,i){"use strict";var n=i("8e96"),s=i.n(n);s.a},a6db:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-tab{position:relative;height:100%}.v-tab-title-inner{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;left:-8px;margin:0;padding:0;list-style:none;height:44px;line-height:44px;text-align:center}.v-tab-title-inner.v-tab-scrollable dt{-webkit-box-flex:0;-webkit-flex:0 0 22%;flex:0 0 22%;width:22%}.v-tab-title-inner dt{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;-webkit-transition:color .3s;transition:color .3s}.v-tab-title-inner dt.v-tab-active .v-tab-line{display:block}.v-tab-line{margin:0;width:40px;height:3px;-webkit-transition-property:width,-webkit-transform;transition-property:width,-webkit-transform;transition-property:transform,width;transition-property:transform,width,-webkit-transform}.v-tab-content,.v-tab-line{position:absolute;left:0;bottom:0}.v-tab-content{right:0;width:100%}.v-tab-item{position:relative;z-index:1;width:100%;height:100%}.v-tab-item>.v-swipe-item-content{overflow-y:auto;-webkit-overflow-scrolling:touch}",""])},aef3:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page-infinite-scroll{padding-bottom:10px}",""])},b1c4:function(t,e,i){var n=i("5f31");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("7ac3700c",n,!0,{sourceMap:!1,shadowMode:!1})},b5cd:function(t,e,i){"use strict";var n=i("3474"),s=i.n(n);s.a},b94a:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-scroll-view{position:relative;z-index:2;background-color:#fff}.v-scroll-view-scroller{width:100%;height:100%;-webkit-user-select:none;user-select:none;-webkit-overflow-scrolling:touch}.v-scroll-view-vertical{overflow-y:auto;overflow-x:hidden}.v-scroll-view-vertical .v-scroll-view-slot{padding:16px 0}.v-scroll-view-horizontal{overflow-x:auto;overflow-y:hidden}.v-scroll-view-horizontal .v-scroll-view-slot{padding:0 16px}.v-scroll-view-disabled .v-scroll-view-scroller,.v-scroll-view-hideBar{overflow:hidden}.v-scroll-view-hideBar .v-scroll-view-scroller::-webkit-scrollbar{display:none}.v-scroll-view-hideBar .v-scroll-view-vertical{padding-right:15px}.v-scroll-view-hideBar .v-scroll-view-horizontal{padding-bottom:15px}.v-scroll-view-overlay-horizontal{position:absolute;top:0;height:100%;padding:0 8px;pointer-events:none}.v-scroll-view-overlay-vertical{position:absolute;left:0;width:100%;padding:8px 0;pointer-events:none}",""])},be05:function(t,e,i){var n=i("b94a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("152d7f03",n,!0,{sourceMap:!1,shadowMode:!1})},d436:function(t,e,i){t.exports=i.p+"img/timg1.592d60b7.jpeg"},d4fd:function(t,e,i){var n=i("2f66");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("0f51879c",n,!0,{sourceMap:!1,shadowMode:!1})},dd29:function(t,e,i){"use strict";i("ac6a"),i("f751");var n={linear:function(t,e,i,n){return i*t/n+e},easeInQuad:function(t,e,i,n){return i*(t/=n)*t+e},easeOutQuad:function(t,e,i,n){return-i*(t/=n)*(t-2)+e},easeOutStrong:function(t,e,i,n){return-i*((t=t/n-1)*t*t*t-1)+e},easeInOutQuad:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeOutCubic:function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e},easeOutBack:function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*((t=t/n-1)*t*((s+1)*t+s)+1)+e}},s=n,a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},o=window.cancelAnimationFrame||function(t){clearTimeout(t)},r=function(){return(new Date).getTime()};function l(){return{time:500,type:"easeOutQuad"}}e["a"]=function(t){var e=null,i=Object.assign(l(),t),n=i.time,c=i.type,u=i.targets,d=i.running,h=i.end,f=r();function p(){var t=r(),i=1-(Math.max(0,f-t+n)/n||0),o=[];u.forEach(function(t){var e=t[0]===t[1]?t[0]:s[c](i*n,t[0],t[1]-t[0],n)||0;o.push(e)}),d(o),1===i?(v(),h&&h()):e=a(p)}function v(){o(e)}return e=a(p),{stop:v}}},e177:function(t,e,i){"use strict";var n=i("962f"),s=i.n(n);s.a},e805:function(t,e,i){t.exports=i.p+"img/timg4.345c5437.jpeg"},eae9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.pullRefresh?"PullRefresh":"div",{ref:"pullRefresh",tag:"component",attrs:{failed:t.failed,disabled:t.isLoading},on:{refresh:t.refresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("div",{ref:"container",staticClass:"v-infinite-scroll"},[t._t("default")],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"v-infinite-scroll-footer"},[t._t("loading",[i("Loading",{staticClass:"v-infinite-scroll-loading",attrs:{size:"32"}})])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.finished&&!t.empty,expression:"finished && !empty"}],staticClass:"v-infinite-scroll-footer"},[t._t("finished",[t._v("全部加载完成")])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.empty,expression:"empty"}],staticClass:"v-infinite-scroll-footer"},[t._t("empty",[i("div",{staticClass:"v-infinite-scroll-empty"},[t._v("空空如也")])])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.failed,expression:"failed"}],staticClass:"v-infinite-scroll-footer",on:{click:t.load}},[t._t("failed",[t._v("加载失败,点击重试")])],2)])},s=[],a=(i("c5f6"),i("5ed3")),o=i("7ac2"),r=i("6116"),l={name:"InfiniteScroll",components:{PullRefresh:a["a"],Loading:o["a"]},props:{value:{type:Boolean,required:!0},finished:{type:Boolean,default:!1},failed:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},offset:{type:Number,default:300},pullRefresh:{type:Boolean,default:!0}},data:function(){return{refreshing:!1,isLoading:!1}},watch:{value:{handler:function(t){t&&this.load()},immediate:!0}},mounted:function(){this.bind()},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind()},methods:{bind:function(){var t=this;this.isBind||(this.$nextTick(function(){t.onscroll=Object(r["q"])(t.update),t.scrollEl=t.pullRefresh?t.$refs.pullRefresh.scrollEl:Object(r["e"])(t.$el),t.container=t.$refs.container,Object(r["a"])(t.scrollEl,"scroll",t.onscroll)}),this.isBind=!0)},unbind:function(){Object(r["n"])(this.scrollEl,"scroll",this.onscroll),this.isBind=!1,this.scrollEl=null,this.container=null,this.onscroll=null},update:function(){this.shouldLoadMore()&&this.load()},shouldLoadMore:function(){if(this.finished||this.value||this.failed)return!1;var t=this.container.getBoundingClientRect().bottom;return t-r["r"].height()<=this.offset},load:function(){this.finished?this.done():this.isLoading||this.refreshing||(this.isLoading=!0,this.$emit("input",!0),this.$emit("load",this.done))},refresh:function(t){this.$emit("refresh",t)},done:function(){var t=this;this.$nextTick(function(){t.$emit("input",!1),t.isLoading=!1})}}},c=l,u=(i("f552"),i("2877")),d=Object(u["a"])(c,n,s,!1,null,null,null);e["a"]=d.exports},edfa:function(t,e,i){var n=i("2b66");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("152beb8f",n,!0,{sourceMap:!1,shadowMode:!1})},f552:function(t,e,i){"use strict";var n=i("d4fd"),s=i.n(n);s.a},f744:function(t,e,i){t.exports=i.p+"img/timg2.4e60382a.jpeg"}}]);