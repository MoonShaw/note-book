(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1182:function(v,_,t){"use strict";t.r(_);var e=t(15),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"_126-亿级流量大型电商网站的商品详情页系统架构的整体设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_126-亿级流量大型电商网站的商品详情页系统架构的整体设计"}},[v._v("#")]),v._v(" 126. 亿级流量大型电商网站的商品详情页系统架构的整体设计")]),v._v(" "),e("p",[v._v("商品详情页整体架构组成（也就是上一章节的第三版）")]),v._v(" "),e("p",[e("img",{attrs:{src:t(370),alt:""}})]),v._v(" "),e("ul",[e("li",[e("p",[v._v("动态渲染系统")]),v._v(" "),e("p",[v._v("将页面中静的数据，直接在变更的时候推送到缓存，然后每次请求页面动态渲染新数据")]),v._v(" "),e("p",[v._v("商品详情页系统（负责静的部分）：被动接收数据，存储 redis，nginx+lua 动态渲染")]),v._v(" "),e("p",[v._v("商品详情页动态服务系统（对外提供数据接口）")]),v._v(" "),e("ul",[e("li",[v._v("提供各种数据接口")]),v._v(" "),e("li",[v._v("动态调用依赖服务的接口，产生数据并且返回响应")]),v._v(" "),e("li",[v._v("从商品详情页系统处理出来的 redis 中，获取数据，并返回响应")])])]),v._v(" "),e("li",[e("p",[v._v("OneService 系统")]),v._v(" "),e("p",[v._v("动的部分，都是走 ajax 异步请求的，不是走动态渲染的，\n商品详情页统一服务系统（负责动的部分）")])]),v._v(" "),e("li",[e("p",[v._v("前端页面")]),v._v(" "),e("p",[v._v("静的部分，直接被动态渲染系统渲染进去了")]),v._v(" "),e("p",[v._v("动的部分，html 一到浏览器，直接走 js 脚本，ajax 异步加载")]),v._v(" "),e("p",[v._v("商品详情页，分段存储，ajax 异步分屏加载")])]),v._v(" "),e("li",[e("p",[v._v("工程运维：限流、压测、灰度发布")])])]),v._v(" "),e("p",[v._v("从上图和描述来看，暂时笔者还不知道为什么有动态渲染系统 和 OneService 系统，\n他们在这里表现出来只是少了一个 mq，但是在高峰期要么失败，要么降级，\n与 mq 排队更新，貌似是差不多的")])])}),[],!1,null,null,null);_.default=a.exports},370:function(v,_,t){v.exports=t.p+"assets/img/markdown-img-paste-20190630212922533.706759ad.png"}}]);