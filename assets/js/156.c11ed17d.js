(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1095:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_003-小型电商网站的商品详情页的页面静态化架构以及其缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_003-小型电商网站的商品详情页的页面静态化架构以及其缺陷"}},[t._v("#")]),t._v(" 003. 小型电商网站的商品详情页的页面静态化架构以及其缺陷")]),t._v(" "),a("p",[t._v("本课程的案例背景是商品详情页的系统架构，以此基础讲解 -> 缓存架构 -> 高并发 -> 高可用")]),t._v(" "),a("p",[t._v("电商网站里，大概可以说分成两种，")]),t._v(" "),a("ul",[a("li",[t._v("小型电商，简单的一种架构方案，页面静态化的方案；")]),t._v(" "),a("li",[t._v("大型电商，复杂的一套架构，大电商，国内排名前几的电商，用得应该咱们这里讲解的这套大型的详情页架构（核心思想）")])]),t._v(" "),a("p",[t._v("为了讲解大型电商的详情页架构，这里先把小型的讲解下")]),t._v(" "),a("p",[t._v("部分页面静态化或全量的页面静态化")]),t._v(" "),a("p",[t._v("先来看看页面静态化带来的问题，假设有一个商品详情页的模板如下")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t商品名称：#{productName}\n\t\t商品价格：#{productPrice}\n\t\t商品描述：#{productDesc}\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("里面的占位语法需要数据来填充，比如保存在 mysql 中的，此时数据变化了或者模板变化了，都需要重新渲染成 html 页面，放在 nginx 上，供用户访问。如果只是某一个商品数据变化了只影响了一个页面那还好说，直接重新渲染这一个即可，但是有商品推荐的，可能其他商品详情页面里面也会出现。这个时候就比较难判定了，可能只会全量渲染了")]),t._v(" "),a("p",[t._v("那么问题来了，对于小网站，页面很少，很实用，非常简单，使用的模板引擎有 velocity、freemarker 等，页面数据管理的 cms 系统，内容管理系统等做一个一键全量渲染功能即可")]),t._v(" "),a("p",[t._v("对于大型网站来说，比如淘宝，他们的商品数据太多了，根本就没有这么多的时间去重新渲染，上亿的商品等，可能需要好几天")])])}),[],!1,null,null,null);s.default=e.exports}}]);