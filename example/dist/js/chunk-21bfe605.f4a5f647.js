(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21bfe605","chunk-5d9aad8b"],{"013f":function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return i})},"0293":function(t,e,n){var i=n("241e"),o=n("53e2");n("ce7e")("getPrototypeOf",function(){return function(t){return o(i(t))}})},"061b":function(t,e,n){t.exports=n("fa99")},1770:function(t,e,n){"use strict";var i,o=n("bd86"),a=n("7618"),s=n("d225"),r=n("b0b4"),c=n("308d"),u=n("6bb5"),l=n("4e2b"),h=(n("28a5"),n("ac6a"),Array.prototype.slice),p=function(){function t(){Object(s["a"])(this,t),this.listeners={}}return Object(r["a"])(t,[{key:"on",value:function(t,e,n){var i=this;return t.split(" ").forEach(function(t){i.listeners[t]||(i.listeners[t]=[]),e&&i.listeners[t].push({fn:e,once:n})}),this}},{key:"emit",value:function(t){var e=this,n=h.call(arguments,1);t.split(" ").forEach(function(t){var i=e.listeners[t];if(i)for(var o=i.length,a=0;a<o;a++){var s=i[a];s&&(i[a].fn.apply(e,n),i[a].once&&i.splice(a--,1))}})}},{key:"off",value:function(t,e){var n=this.listeners[t];if(n){if(!e)return void(this.listeners[t]=[]);for(var i=n.length,o=0;o<i;o++)if(n[o]&&n[o].fn===e)return void n.splice(o,1)}t||(this.listeners={})}}]),t}(),d=n("f6da");function v(t){return t.touches?t.touches:[t]}function f(t,e){return t+e}function m(t){return{x:t.map(function(t){return t.x}).reduce(f)/t.length,y:t.map(function(t){return t.y}).reduce(f)/t.length}}function b(t,e){var n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)}function y(t,e){return b(e[0],e[1])/b(t[0],t[1])}function g(t,e){var n=t.x-e.x,i=t.y-e.y;return 180*Math.atan2(i,n)/Math.PI}function _(t,e,n){var i=e.x-t.x,o=e.y-t.y,a=1-n/t.scale,s=t.x+i*a,r=t.y+o*a;return{x:s,y:r}}n.d(e,"a",function(){return x});var x=function(t){function e(t){var n;return Object(s["a"])(this,e),n=Object(c["a"])(this,Object(u["a"])(e).call(this)),n.data={},n.options=Object.assign({},e.defaultOptions,t),n.options.el&&n.bind(),n}return Object(l["a"])(e,t),Object(r["a"])(e,[{key:"setOptions",value:function(t){return Object.assign(this.options,t),this}},{key:"bind",value:function(){this._touchEvents(d["a"])}},{key:"unbind",value:function(){this._touchEvents(d["n"])}},{key:"handleEvent",value:function(t){switch(t.type){case"touchstart":this.down(t);break;case"touchmove":case"mousemove":this.move(t);break;case"touchend":this.up(t);break;case"mousedown":this._mouseEvents("down",d["a"],t);break;case"mouseup":this._mouseEvents("up",d["n"],t)}}},{key:"down",value:function(t){var e=v(t);this.moving=!1,this.touchesLength=e.length,this._startTouchesLength=this.touchesLength;var n=e[this.touchesLength-1],i=n.clientX,o=n.clientY;this.data.clientX=i,this.data.clientY=o,this.emit(this.options.eventTypes.down,t,this.data)}},{key:"move",value:function(t){var e=this.options,n=e.lockDirection,i=e.eventTypes,o=this._hasListeners(i.pinchmove),a=this._hasListeners(i.rotatemove),s=this._hasListeners(i.panmove),r=v(t);2===this.touchesLength&&(o||a)?this._gesturechange(r,t,o,a):(s||n)&&this._panmove(r,t),this.moved=this.moving=!0}},{key:"up",value:function(t){var e=this.options.eventTypes,n=e.up,i=e.pinchmove,o=e.rotatemove,a=v(t),s=this.data.type;this.touchesLength=a.length,this.emit(n,t,this.data),this.moved?(s&&-1!==s.indexOf("pan")?this._panend(t):(s===i&&this._pinchend(t),s===o&&this._rotateend(t)),this.moving=!1):1===this._startTouchesLength?this._mockDoubleTap(t):this.data.type=""}},{key:"is",value:function(t){return this.action===t}},{key:"destroy",value:function(){this.options.el&&this.unbind()}},{key:"_touchEvents",value:function(t){var e=this.options,n=e.el,i=e.touchstartEventOptions,o=e.touchmoveEventOptions,a=e.touchendEventOptions;t(n,"touchstart",this,i),t(n,"touchmove",this,o),t(n,"touchend",this,a),Object(d["i"])()||t(n,"mousedown",this,i)}},{key:"_mouseEvents",value:function(t,n,i){var o=this.options,a=o.touchmoveEventOptions,s=o.touchendEventOptions;e.preventDefault(i),this[t](i),n(document,"mousemove",this,a),n(document,"mouseup",this,s)}},{key:"_mockDoubleTap",value:function(t){var e=this,n=this.options,i=n.eventTypes,o=n.tapDelay,a=this._hasListeners(i.tap),s=this._hasListeners(i.doubletap);s?(this._tapCount=this._tapCount||0,this._tapCount++,clearTimeout(this._tapTimer),2===this._tapCount?(this._tapCount=0,this._emit(i.doubletap,t)):this._tapTimer=setTimeout(function(){e._tapCount=0,e._emit(i.tap,t)},o)):a&&this._emit(i.tap,t)}},{key:"_verifyDirection",value:function(){var t=this.options.lockDirection;return!1===t||t&&t===this.direction}},{key:"_setDirection",value:function(t,n){if(0!==t||0!==n){var i=Math.abs(t)>=Math.abs(n);i?(this.direction=e.HORIZONTAL,this._setAction(t)):(this.direction=e.VERTICAL,this._setAction(n))}}},{key:"_setAction",value:function(t){this.action=e.propsMap[this.direction][t<=0?0:1],this.isSwipe=Math.abs(t)>this.options.threshold}},{key:"_panstart",value:function(t,e){var n=t[this.touchesLength-1],i=n.clientX,o=n.clientY,a=this.options,s=a.eventTypes,r=a.position,c=r(),u=c.x,l=c.y,h=i-this.data.clientX,p=o-this.data.clientY;this._setDirection(h,p),this._verifyDirection()&&(this.startPosition={x:u,y:l},this.isSwipe=!1,this.timeStamp=e.timeStamp,this.data={clientX:i,clientY:o,vx:h,vy:p,deltaX:0,deltaY:0,time:0},this._emit(s.panstart,e))}},{key:"_panmove",value:function(t,n){var i=t[this.touchesLength-1],o=i.clientX,a=i.clientY,s=this.options,r=s.lockDirection,c=s.eventTypes;if(this.moving||this._panstart(t,n),this._verifyDirection()){var u=this.data,l=o-u.clientX,h=a-u.clientY;if(l||h){var p=u.deltaX+l,d=u.deltaY+h,v=this.startPosition,f=v.x,m=v.y,b={x:f+p,y:m+d},y=n.timeStamp-this.timeStamp;if(this.timeStamp=n.timeStamp,r){var g=this.direction===e.HORIZONTAL?l:h;this._setAction(g)}else this._setDirection(l,h);this.data={vx:l,vy:h,deltaX:p,deltaY:d,clientX:o,clientY:a,time:y,position:b},r?this._emit(this.action,n):this._emit(c.panmove,n)}}}},{key:"_panend",value:function(t){(this.touchesLength||this._verifyDirection())&&(this._emit(this.options.eventTypes.panend,t),this.moved=!1)}},{key:"_gesturechange",value:function(t,e,n,i){var o=Object(d["k"])(t).map(function(t){return{x:t.clientX,y:t.clientY}});n&&this._pinchmove(o,e),i&&this._rotatemove(o,e),this.data.zoom=o}},{key:"_pinchstart",value:function(t,e,n){var i=this.options,o=i.eventTypes,a=i.position,s=a(),r=s.x,c=s.y,u=s.scale;this.startPosition={x:r,y:c,scale:u},this.data={zoom:t,center:e,scale:1,vx:0,vy:0,deltaX:0,deltaY:0,position:{x:r,y:c,scale:u}},this._emit(o.pinchstart,n)}},{key:"_pinchmove",value:function(t,e){var n=this.options,i=n.eventTypes,o=n.origin,s=n.zoomMove,r=n.maxScale,c=n.minScale,u=m(t);this.moving||this._pinchstart(t,u,e);var l=this.data,h=y(l.zoom,t)-1,p=l.scale+=h,d=u.x-l.center.x,v=u.y-l.center.y,f=l.deltaX+d,b=l.deltaY+v,g=this.startPosition,x=g.x,k=g.y,O=g.scale,w=p*O;r&&w>r?w=r:c&&w<c&&(w=c);var T={};if(o){var E="object"===Object(a["a"])(o)?o:u,C=_(l.position,E,w);T.x=C.x,T.y=C.y,T.scale=w,s&&(T.x+=d,T.y+=v)}else T={x:x,y:k,scale:w},s&&(T.x=x+f,T.y=k+b);Object.assign(this.data,{center:u,scale:p,vx:d,vy:v,deltaX:f,deltaY:b,position:T}),this._emit(i.pinchmove,e)}},{key:"_pinchend",value:function(t){this._emit(this.options.eventTypes.pinchend,t),this.moved=!1}},{key:"_rotatestart",value:function(t,e){var n=this.options,i=n.eventTypes,o=n.position,a=o(),s=a.rotation;this.startPosition.rotation=s,this.data.rotation=0,this.data.zoom=t,this._emit(i.rotatestart,e)}},{key:"_rotatemove",value:function(t,e){var n=this.options.eventTypes;this.moving||this._rotatestart(t,e);var i=this.data,o=g(t[0],t[1])-g(i.zoom[0],i.zoom[1]),a=i.rotation+=o,s=this.startPosition.rotation,r=a+s;i.position.rotation=r,i.rotation=a,this._emit(n.rotatemove,e)}},{key:"_rotateend",value:function(t){this._emit(this.options.eventTypes.rotateend,t),this.moved=!1}},{key:"_emit",value:function(t,e){this.data.type=t,this._input(e),this.emit(t,e,this.data)}},{key:"_input",value:function(t){var e=this.options.eventTypes.input;this._hasListeners(e)&&this.emit(e,t,this.data)}},{key:"_hasListeners",value:function(t){var e=this.listeners[t];return e&&e.length}}]),e}(p),k={passive:!1};x.defaultOptions={el:null,touchstartEventOptions:k,touchmoveEventOptions:k,touchendEventOptions:k,lockDirection:!1,eventTypes:{down:"down",up:"up",panstart:"panstart",panmove:"panmove",panend:"panend",pinchstart:"pinchstart",pinchmove:"pinchmove",pinchend:"pinchend",rotatestart:"rotatestart",rotatemove:"rotatemove",rotateend:"rotateend",panleft:"panleft",panright:"panright",panup:"panup",pandown:"pandown",tap:"tap",doubletap:"doubletap",input:"input"},tapDelay:200,threshold:3,origin:!1,zoomMove:!0,position:function(){return{x:0,y:0,scale:1,rotation:0}},maxScale:null,minScale:null},x.HORIZONTAL="horizontal",x.VERTICAL="vertical",x.propsMap=(i={},Object(o["a"])(i,x.HORIZONTAL,[x.defaultOptions.eventTypes.panleft,x.defaultOptions.eventTypes.panright]),Object(o["a"])(i,x.VERTICAL,[x.defaultOptions.eventTypes.panup,x.defaultOptions.eventTypes.pandown]),i),x.rAFThrottle=d["m"],x.originZoom=_,x.preventDefault=function(t){t.cancelable&&t.preventDefault()}},"1df8":function(t,e,n){var i=n("63b6");i(i.S,"Object",{setPrototypeOf:n("ead6").set})},"25b0":function(t,e,n){n("1df8"),t.exports=n("584a").Object.setPrototypeOf},"308d":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("7618"),o=n("013f");function a(t,e){return!e||"object"!==Object(i["a"])(e)&&"function"!==typeof e?Object(o["a"])(t):e}},3328:function(t,e,n){"use strict";var i=function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i(e.tag,{tag:"component",staticClass:"v-checkbox",class:(t={},t[e.disbledClass]=e.disabled,t[e.checkedClass]=e.checked,t)},["left"===e.textAlign?i("span",{staticClass:"v-checkbox__text"},[e._t("default",[e._v(e._s(e.label))])],2):e._e(),i("input",{staticClass:"v-checkbox__input",style:e.colorStyle,attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.checked},on:{change:function(t){return e.change(t.target.checked)}}}),"right"===e.textAlign?i("span",{staticClass:"v-checkbox__text"},[e._t("default",[e._v(e._s(e.label))])],2):e._e()])},o=[],a=(n("c5f6"),n("f6da")),s={name:"Checkbox",props:{value:null,tag:{type:String,default:"label"},label:{type:[String,Number],default:""},color:{type:String,default:""},disabled:{type:Boolean,default:!1},textAlign:{type:String,default:"right"},disbledClass:{type:String,default:"v-checkbox--disbled"},checkedClass:{type:String,default:"v-checkbox--checked"}},computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.label):this.value},set:function(t){this.change(t)}},colorStyle:function(){return this.color?this.checked?{backgroundColor:this.color,borderColor:this.color}:{backgroundColor:"transparent"}:{}}},data:function(){return{parent:Object(a["f"])(this,"CheckboxGroup")}},methods:{change:function(t){if(this.parent)if(t){var e=this.parent.max;(e<0||e>this.parent.value.length)&&(this.parent.value.push(this.label),this.emitChange(t))}else{var n=this.parent.value.indexOf(this.label);-1!==n&&(this.parent.value.splice(n,1),this.emitChange(t))}else this.$emit("input",t)},emitChange:function(t){this.parent.$emit("change",this.parent.value,{checked:t,label:this.label})}}},r=s,c=(n("71a5"),n("2877")),u=Object(c["a"])(r,i,o,!1,null,null,null);e["a"]=u.exports},"4a63":function(t,e,n){var i=n("8efb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("499e").default;o("22b89b08",i,!0,{sourceMap:!1,shadowMode:!1})},"4aa6":function(t,e,n){t.exports=n("dc62")},"4d16":function(t,e,n){t.exports=n("25b0")},"4e2b":function(t,e,n){"use strict";var i=n("4aa6"),o=n.n(i),a=n("4d16"),s=n.n(a);function r(t,e){return r=s.a||function(t,e){return t.__proto__=e,t},r(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return c})},"6b71":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{overflow:"hidden"}},[n("Navbar",{attrs:{title:"Touch gestures"}}),n("div",{staticClass:"app--spacing",staticStyle:{"background-color":"#fff"}},[n("CheckboxGroup",{on:{change:t.change},model:{value:t.selectValues,callback:function(e){t.selectValues=e},expression:"selectValues"}},t._l(t.features,function(t){return n("Checkbox",{key:t,staticStyle:{margin:"5px 15px 5px 0"},attrs:{label:t}})}),1)],1),n("div",{ref:"drag",staticClass:"touch-image"},[n("img",{attrs:{src:"https://static.webfed.cn/o_1d9u7gc8c8ip1u35n111i46ehce.jpg",alt:"dragImage"}})])],1)},o=[],a=(n("ac6a"),n("1770")),s=n("a2c2"),r=n("3328"),c={drag:["panstart","panmove","panend"],zoom:["pinchstart","pinchmove","pinchend"],rotate:["rotatestart","rotatemove","rotateend"],tap:["tap"],doubletap:["doubletap"]},u={name:"page-touch",components:{CheckboxGroup:s["a"],Checkbox:r["a"]},data:function(){var t=["drag","zoom","rotate","tap","doubletap"];return{features:t,selectValues:[].concat(t)}},mounted:function(){var t=this;this.transform={x:-450,y:-150,scale:.2,rotation:0,duration:0},this.updateElement=a["a"].rAFThrottle(this.updateElement),this.touch=new a["a"]({el:this.$refs.drag,position:function(){return t.transform}}).on("down",a["a"].preventDefault),this.updateElement(),this.selectValues.forEach(function(e){t.eventOperation(!0,c[e])})},beforeDestroy:function(){this.touch.destroy()},methods:{change:function(t,e){this.eventOperation(e.checked,c[e.label])},eventOperation:function(t,e){var n=this,i=t?"on":"off";e.forEach(function(t){n.touch[i](t,n[t])})},input:function(t,e){console.log("input",e.type)},panstart:function(t,e){console.log("panstart",e.type)},panmove:function(t,e){var n=e.type,i=e.position;a["a"].preventDefault(t),i.duration=0,this.updateElement(i),console.log("panmove",n)},panend:function(t,e){console.log("panend",e.type)},pinchstart:function(t,e){console.log("pinchstart",e.type)},pinchmove:function(t,e){var n=e.type,i=e.position;a["a"].preventDefault(t),i.duration=0,this.updateElement(i),console.log("pinchmove",n)},pinchend:function(t,e){console.log("pinchend",e.type)},rotatestart:function(t,e){console.log("rotatestart",e.type)},rotatemove:function(t,e){var n=e.type,i=e.position;a["a"].preventDefault(t),this.updateElement({duration:0,rotation:i.rotation}),console.log("rotatemove",n)},rotateend:function(t,e){console.log("rotateend",e.type)},tap:function(t,e){console.log("tap",e.type),this.$toast("tap")},doubletap:function(t){a["a"].preventDefault(t),this.updateElement({scale:.2!==this.transform.scale?.2:.5,duration:300}),console.log("doubletap")},updateElement:function(t){var e=this.$refs.drag.style,n=Object.assign(this.transform,t),i=n.x,o=n.y,a=n.scale,s=n.rotation,r=n.duration;a=Math.min(Math.max(a,.1),1),e.transform=e.webkitTransform="\n        translate3d(".concat(i,"px, ").concat(o,"px, 0)\n        scale(").concat(a,")\n        rotate(").concat(s,"deg)\n      "),e.transitionDuration=e.webkitTransitionDuration="".concat(r,"ms")}}},l=u,h=(n("a498"),n("2877")),p=Object(h["a"])(l,i,o,!1,null,null,null);e["default"]=p.exports},"6bb5":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("061b"),o=n.n(i),a=n("4d16"),s=n.n(a);function r(t){return r=s.a?o.a:function(t){return t.__proto__||o()(t)},r(t)}},"6e11":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".touch-image{position:absolute;top:0;left:0;width:1280px;height:781px}.touch-image img{width:100%}",""])},"71a5":function(t,e,n){"use strict";var i=n("4a63"),o=n.n(i);o.a},"8efb":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".v-checkbox{position:relative;display:inline-block;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.v-checkbox+.v-checkbox{margin-left:15px}.v-checkbox--checked .v-checkbox__input{border-color:var(--primary);background-color:var(--primary)}.v-checkbox--disbled{cursor:default}.v-checkbox--disbled .v-checkbox__input{background-color:var(--lightGray)!important;border-color:var(--border)!important}.v-checkbox--disbled .v-checkbox__text{color:var(--textSecondary)}.v-checkbox__input{margin:0;outline:0;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:initial;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;box-sizing:border-box;position:relative;width:20px;height:20px;border-radius:50%;border:1px solid var(--border);vertical-align:middle;opacity:1;transition:.3s}.v-checkbox__input:before{content:\"\";position:absolute;top:2px;left:1px;width:16px;height:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M870.4 332.8l-89.6-89.6L416 601.6 243.2 435.2l-89.6 89.6 262.4 256z' fill='%23fff'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;z-index:2;display:none}.v-checkbox__input:checked:before{display:block}.v-checkbox__text{padding-left:6px;display:inline-block;vertical-align:middle}",""])},9427:function(t,e,n){var i=n("63b6");i(i.S,"Object",{create:n("a159")})},a2c2:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-checkbox__group"},[t._t("default")],2)},o=[],a=(n("c5f6"),"CheckboxGroup"),s={name:a,props:{value:{type:Array,default:function(){return[]}},max:{type:Number,default:-1}},data:function(){return{name:a}}},r=s,c=n("2877"),u=Object(c["a"])(r,i,o,!1,null,null,null);e["a"]=u.exports},a498:function(t,e,n){"use strict";var i=n("d0e2"),o=n.n(i);o.a},b0b4:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("85f2"),o=n.n(i);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),o()(t,i.key,i)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}},d0e2:function(t,e,n){var i=n("6e11");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("499e").default;o("ea89e794",i,!0,{sourceMap:!1,shadowMode:!1})},d225:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i})},dc62:function(t,e,n){n("9427");var i=n("584a").Object;t.exports=function(t,e){return i.create(t,e)}},ead6:function(t,e,n){var i=n("f772"),o=n("e4ae"),a=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("d864")(Function.call,n("bf0b").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:a}},fa99:function(t,e,n){n("0293"),t.exports=n("584a").Object.getPrototypeOf}}]);