webpackJsonp([1],{0:function(t,s){},"4vdM":function(t,s){},"9KUP":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={props:{size:{type:Number},score:{type:Number}},data:function(){return{}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0||NaN;isNaN(s)&&(e=!1);for(var i=Math.floor(s);i>0;i--)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}},components:{},methods:{}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t,e){return s("span",{key:e,staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var r=e("VU/8")(a,n,!1,function(t){e("qyEC")},"data-v-07129b6e",null).exports,o={props:{size:{type:Number},index:{type:Number}},data:function(){return{}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},computed:{avtiveIcon:function(){return"icon-"+this.size+" "+this.classMap[this.index]}}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"seller-icon-wrapper"},[s("span",{staticClass:"icon",class:this.avtiveIcon})])},staticRenderFns:[]};var l=e("VU/8")(o,c,!1,function(t){e("4vdM")},"data-v-2098b13c",null).exports,v={name:"SellHeader",props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},closeDetail:function(){this.detailShow=!1}},components:{star:r,sellerIcon:l}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("sellerIcon",{attrs:{size:1,index:t.seller.supports[0].type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])],1):t._e(),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()])]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-content"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-component"},[e("star",{attrs:{size:24,score:t.seller.score}})],1),t._v(" "),t._m(0),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"supports-item"},[e("sellerIcon",{attrs:{size:2,index:s.type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}),0):t._e(),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"bulletin"},[e("div",{staticClass:"text"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:t.closeDetail}})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),this._v(" "),s("div",{staticClass:"text"},[this._v("店铺信息")]),this._v(" "),s("div",{staticClass:"line"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),this._v(" "),s("div",{staticClass:"text"},[this._v("商家公告")]),this._v(" "),s("div",{staticClass:"line"})])}]};var u={name:"App",data:function(){return{seller:{}}},components:{sellHeader:e("VU/8")(v,d,!1,function(t){e("9KUP")},"data-v-30d83157",null).exports},created:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/seller").then(function(s){0===(s=s.body).errno&&(t.seller=s.data.seller)},function(t){})}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("sell-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var f=e("VU/8")(u,p,!1,function(t){e("tcTO")},"data-v-133e4bf2",null).exports,h=e("/ocq"),_={props:{food:{type:Object}},data:function(){return{}},components:{},methods:{addCount:function(t){if(!t._constructed)return!1;this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("cart-add",t.target)},removeCount:function(t){if(!t._constructed)return!1;this.food.count&&this.food.count--}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cart-control"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),t.removeCount(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.addCount(s)}}})],1)},staticRenderFns:[]};var m=e("VU/8")(_,C,!1,function(t){e("Wie2")},"data-v-182c769e",null).exports,g=e("GQaK"),w={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:{show:!1},dropballs:[],fold:!0,listShow:!1}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice>0&&this.totalPrice<this.minPrice?"还差"+(this.minPrice-this.totalPrice)+"元起送":this.totalPrice>=this.minPrice?"去结算":void 0},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"}},watch:{totalCount:function(){if(!this.totalCount)return this.listShow=!1,this.fold=!0,!1},fold:function(t){var s=this;this.listShow=!t,t||this.$nextTick(function(){s.scroll?s.scroll.refresh():s.scroll=new g.a(s.$refs.shopcartList,{click:!0})})}},components:{cartControl:m},methods:{drop:function(t){var s=this.balls;s.show||(s.show=!0,s.el=t,this.dropballs.push(s))},beforeEnter:function(t,s){var e=this.balls;if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=window.innerHeight-i.top-22;t.style.display="",t.style.webkitTransform="translate3d(0, -"+n+"px, 0)",t.style.transform="translate3d(0, -"+n+"px, 0)",t.style.transition="all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+a+"px, 0, 0)",r.style.transform="translate3d("+a+"px, 0, 0)",r.style.transition="all 0.4s linear"}},enter:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0, 0, 0)",t.style.transform="translate3d(0, 0, 0)",t.style.transition="all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)";var s=t.getElementsByClassName("inner-hook")[0];s.style.webkitTransform="translate3d(0, 0, 0)",s.style.transform="translate3d(0, 0, 0)",s.style.transition="all 0.4s linear"}),s()},afterEnter:function(t){var s=this.dropballs.shift();s&&(s.show=!1,t.style.display="none")},toggltList:function(){if(!this.totalCount)return!1;this.fold=!this.fold},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},closeMask:function(){this.fold=!0},gotoPay:function(){window.alert("你需要支付￥"+this.totalPrice+"元")}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-cart-wrapper"},[e("div",{staticClass:"shop-cart"},[e("div",{staticClass:"content",on:{click:t.toggltList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount> 0"}],staticClass:"count"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.gotoPay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("transition",{attrs:{name:"cartlist"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("div",{staticClass:"text"},[t._v("购物车")]),t._v(" "),e("div",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"shopcartList",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s,i){return e("li",{key:i,staticClass:"good"},[e("span",{staticClass:"foodname"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"price"},[t._v("￥"+t._s(s.count*s.price))]),t._v(" "),e("div",{staticClass:"cart-control-wrapper"},[e("cartControl",{attrs:{food:s}})],1)])}),0)])])])],1),t._v(" "),e("transition",{attrs:{name:"list-bg"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shop-list-bg",on:{click:t.closeMask}})])],1)},staticRenderFns:[]};var x=e("VU/8")(w,y,!1,function(t){e("UYax")},"data-v-009e9678",null).exports;function b(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:k(a))}return s}function k(t){return("00"+t).substr(t.length)}var T={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},data:function(){return{ratingType:this.selectType,isContent:this.onlyContent}},computed:{positive:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negative:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t,s){if(!s._constructed)return!1;this.ratingType=t,this.$emit("changeType",t)},toggleContent:function(t){if(!t._constructed)return!1;this.isContent=!this.isContent,this.$emit("changeOnlyContent",this.isContent)}}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"desc positive",class:{active:2===t.ratingType},on:{click:function(s){return t.select(2,s)}}},[t._v("\n      "+t._s(t.desc.all)+"\n      "),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"desc positive",class:{active:0===t.ratingType},on:{click:function(s){return t.select(0,s)}}},[t._v("\n      "+t._s(t.desc.positive)+"\n      "),e("span",{staticClass:"count"},[t._v(t._s(t.positive.length))])]),t._v(" "),e("span",{staticClass:"desc negative",class:{active:1===t.ratingType},on:{click:function(s){return t.select(1,s)}}},[t._v("\n      "+t._s(t.desc.negative)+"\n      "),e("span",{staticClass:"count"},[t._v(t._s(t.negative.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:!0===t.isContent},on:{click:function(s){return t.toggleContent(s)}}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div")])},staticRenderFns:[]};var N=e("VU/8")(T,$,!1,function(t){e("tvlJ")},"data-v-01c6e5c6",null).exports,P={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split-content"})},staticRenderFns:[]};var E=e("VU/8")({data:function(){return{}}},P,!1,function(t){e("Ypin")},"data-v-f0e32dac",null).exports,S={props:{food:{type:Object}},data:function(){return{showDrag:!1,selectType:2,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},components:{cartControl:m,split:E,ratingselect:N},filters:{formatDate:function(t){return b(new Date(t),"yyyy-MM-dd hh:mm")}},methods:{show:function(){var t=this;this.showDrag=!0,this.$nextTick(function(){t.selectType=2,t.onlyContent=!1,t.scroll?t.scroll.refresh():t.scroll=new g.a(t.$refs.foodDetail,{click:!0})})},hide:function(){this.showDrag=!1},addcart:function(t,s){if(!s._constructed)return!1;i.a.set(t,"count",1)},changeType:function(t){var s=this;this.$nextTick(function(){s.selectType=t})},changeOnlyContent:function(t){var s=this;this.$nextTick(function(){s.onlyContent=t})},need:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"foodDetail"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDrag,expression:"showDrag"}],ref:"foodDetail",staticClass:"food-detail-wrapper"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"header-img"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back-icon",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"name"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥ "+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartControl",{attrs:{food:t.food}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"buy",on:{click:function(s){return t.addcart(t.food,s)}}},[t._v("加入购物车")])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{ratings:t.food.ratings,selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc},on:{changeType:function(s){return t.changeType(s)},changeOnlyContent:function(s){return t.changeOnlyContent(s)}}}),t._v(" "),e("div",{staticClass:"rating-list"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings,expression:"food.ratings"}]},t._l(t.food.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.need(s.rateType,s.text),expression:"need(rating.rateType,rating.text)"}],key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v("\n                "+t._s(s.text)+"\n              ")])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings,expression:"!food.ratings"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var D={data:function(){return{goods:[],foodsHeightList:[],scrollY:0,seller:{},selectedFood:{}}},created:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/goods").then(function(s){0===(s=s.body).errno&&(t.goods=s.data.goods,t.$nextTick(function(){t._initBScroll(),t._calculateHeight()}))},function(t){})},components:{sellerIcon:l,shopCart:x,cartControl:m,food:e("VU/8")(S,F,!1,function(t){e("omsb")},"data-v-1d2c4c92",null).exports},methods:{_initBScroll:function(){var t=this;this.menuScroll=new g.a(this.$refs.menuWrapper,{click:!0}),this.foodScroll=new g.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},scrollToFoods:function(t,s){if(s._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("foods-scorll")[t];this.foodScroll.scrollToElement(e,300)}},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("foods-scorll"),s=0;this.foodsHeightList.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.foodsHeightList.push(s)}},chooseFood:function(t,s){if(!s._constructed)return!1;this.selectedFood=t,this.$refs.foodDetail.show()}},computed:{currentIndex:function(){for(var t=0;t<this.foodsHeightList.length;t++){var s=this.foodsHeightList[t],e=this.foodsHeightList[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",{staticClass:"menu-list"},t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item",class:{currentIndex:t.currentIndex===i},on:{click:function(s){return t.scrollToFoods(i,s)}}},[e("span",{staticClass:"name border-1px"},[e("sellerIcon",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],attrs:{size:3,index:s.type}}),t._v("\n          "+t._s(s.name)+"\n        ")],1)])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"food-list foods-scorll"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,i){return e("li",{key:i,staticClass:"food-item border-1px",on:{click:function(e){return t.chooseFood(s,e)}}},[e("div",{staticClass:"food-image"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"food-text"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"foods.oldPrice"}],staticClass:"old"},[t._v("￥ "+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cart-control-wrapper"},[e("cartControl",{attrs:{food:s}})],1)])])}),0)])}),0)]),t._v(" "),e("shop-cart",{ref:"shopcart",attrs:{deliveryPrice:3,minPrice:20,selectFoods:t.selectFoods}}),t._v(" "),e("food",{ref:"foodDetail",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var M=e("VU/8")(D,R,!1,function(t){e("b7Kg")},"data-v-454da070",null).exports,U=e("woOf"),H=e.n(U),O={data:function(){return{seller:{},ratings:[],selectType:2,onlyContent:!1,desc:{all:"全部",positive:"满意",negative:"不满意"}}},filters:{formatDate:function(t){return b(new Date(t),"yyyy-MM-dd hh:mm")}},components:{star:r,split:E,ratingselect:N},created:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/seller").then(function(s){0===(s=s.body).errno&&(t.seller=H()({},t.seller,s.data.seller))},function(t){}),this.$http.get("https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/ratings").then(function(s){0===(s=s.body).errno&&(t.ratings=s.data.ratings,t.$nextTick(function(){t._initScroll()}))},function(t){})},methods:{_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new g.a(this.$refs.ratingWrapper,{click:!0})},need:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},changeType:function(t){var s=this;this.$nextTick(function(){s.selectType=t})},changeOnlyContent:function(t){var s=this;this.$nextTick(function(){s.onlyContent=t})}}},z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingWrapper",staticClass:"rating-wrapper"},[e("div",{staticClass:"rating-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("div",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"zonghe"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rankRate"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{staticClass:"star",attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{staticClass:"star",attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("ratingselect",{attrs:{ratings:t.ratings,selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc},on:{changeType:function(s){return t.changeType(s)},changeOnlyContent:function(s){return t.changeOnlyContent(s)}}}),t._v(" "),e("div",{staticClass:"rating-list"},[e("ul",t._l(t.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.need(s.rateType,s.text),expression:"need(item.rateType,item.text)"}],key:i,staticClass:"rating border-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"item.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend,expression:"item.recommend"}],staticClass:"recommend-wrapper"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(" "),t._l(s.recommend,function(s,i){return e("span",{key:i,staticClass:"recommend"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}),0)])],1)],1)])},staticRenderFns:[]};var W=e("VU/8")(O,z,!1,function(t){e("Q7hw")},"data-v-36f80f0a",null).exports,I=e("mvHQ"),L=e.n(I);var V={data:function(){return{seller:{id:(t={},(s=window.location.search.match(/[?&][^?&]+=[^?&]+/g))&&s.forEach(function(s){var e=s.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);t[i]=a}),t).id},favorite:!1};var t,s},created:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/seller").then(function(s){var e,i,a,n;0===(s=s.body).errno&&(t.seller=H()({},t.seller,s.data.seller),t.favorite=(e=t.seller.id,i="favorite",a=!1,(n=window.localStorage.__seller__)&&(n=JSON.parse(n)[e])&&n[i]||a),t.$nextTick(function(){if(t.scroll?t.scroll.refresh():t.scroll=new g.a(t.$refs.sellWrapper,{click:!0}),t.seller.pics){var s=126*t.seller.pics.length-6;t.$refs.picList.style.width=s+"px",t.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new g.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}))},function(t){})},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},components:{star:r,split:E,sellerIcon:l},methods:{toggleFavorite:function(t){if(!t._constructed)return!1;var s,e,i,a;this.favorite=!this.favorite,s=this.seller.id,e="favorite",i=this.favorite,(a=window.localStorage.__seller__)?(a=JSON.parse(a))[s]||(a[s]={}):(a={})[s]={},a[s][e]=i,localStorage.__seller__=L()(a)}}},Y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellWrapper",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{staticClass:"star",attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",{staticClass:"title"},[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",{staticClass:"title"},[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",{staticClass:"title"},[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:function(s){return t.toggleFavorite(s)}}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"supports-item border-1px"},[e("sellerIcon",{staticClass:"icon",attrs:{size:4,index:s.type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}),0):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}),0)])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info-item border-1px"},[t._v(t._s(s))])}),0)])],1)])},staticRenderFns:[]};var B=e("VU/8")(V,Y,!1,function(t){e("hM08")},"data-v-63b3ae6b",null).exports;i.a.use(h.a);var A=new h.a({routes:[{path:"/",name:"goods",component:M,alias:"/goods"},{path:"/ratings",name:"ratings",component:W},{path:"/seller",name:"seller",component:B}],linkActiveClass:"active"}),j=e("8+8L");i.a.use(j.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:A,components:{App:f},template:"<App/>"})},Q7hw:function(t,s){},UYax:function(t,s){},Wie2:function(t,s){},Ypin:function(t,s){},b7Kg:function(t,s){},hM08:function(t,s){},omsb:function(t,s){},qyEC:function(t,s){},tcTO:function(t,s){},tvlJ:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.f3aad0290209635074fb.js.map