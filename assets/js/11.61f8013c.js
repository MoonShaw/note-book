(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1381:function(t,a,s){"use strict";s.r(a);var r=s(15),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"float-浮动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#float-浮动"}},[t._v("#")]),t._v(" float 浮动")]),t._v(" "),r("p",[t._v("本节能学到的知识:")]),t._v(" "),r("p",[t._v("通过追溯CSS/HTML发展历史，知道Float出现的原本作用是什么，从而可以帮助我们解答很多疑惑。")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-float-的历史"}},[t._v("1. float 的历史")])]),r("li",[r("a",{attrs:{href:"#_2-包裹与破坏"}},[t._v("2. 包裹与破坏")]),r("ul",[r("li",[r("a",{attrs:{href:"#包裹"}},[t._v("包裹")])]),r("li",[r("a",{attrs:{href:"#具有包裹性的其他元素"}},[t._v("具有包裹性的其他元素")])]),r("li",[r("a",{attrs:{href:"#破坏"}},[t._v("破坏")])]),r("li",[r("a",{attrs:{href:"#具有破坏性的其他元素"}},[t._v("具有破坏性的其他元素")])])])]),r("li",[r("a",{attrs:{href:"#_3-被误解的-float-浮动"}},[t._v("3. 被误解的 float 浮动")]),r("ul",[r("li",[r("a",{attrs:{href:"#结论"}},[t._v("结论")])])])]),r("li",[r("a",{attrs:{href:"#_4-清除浮动"}},[t._v("4. 清除浮动")]),r("ul",[r("li",[r("a",{attrs:{href:"#方法差异"}},[t._v("方法差异")])]),r("li",[r("a",{attrs:{href:"#clear-通常应用形式"}},[t._v("clear 通常应用形式")])]),r("li",[r("a",{attrs:{href:"#bfc-haslayout-通常声明"}},[t._v("BFC/haslayout 通常声明")])]),r("li",[r("a",{attrs:{href:"#浮动的滥用"}},[t._v("浮动的滥用")])]),r("li",[r("a",{attrs:{href:"#clear-与-margin-重叠"}},[t._v("clear 与 margin 重叠")])])])]),r("li",[r("a",{attrs:{href:"#_5-浮动的滥用"}},[t._v("5. 浮动的滥用")]),r("ul",[r("li",[r("a",{attrs:{href:"#为啥浮动可以用来砌砖头"}},[t._v("为啥浮动可以用来砌砖头?")])]),r("li",[r("a",{attrs:{href:"#砌砖布局的问题"}},[t._v("砌砖布局的问题")])])])]),r("li",[r("a",{attrs:{href:"#_7-float-与流体布局"}},[t._v("7. float 与流体布局")]),r("ul",[r("li",[r("a",{attrs:{href:"#看家本领-文字环绕"}},[t._v("看家本领-文字环绕")])]),r("li",[r("a",{attrs:{href:"#文字环绕变声-左青龙右白虎"}},[t._v("文字环绕变声-左青龙右白虎")])]),r("li",[r("a",{attrs:{href:"#文字环绕衍生-单侧固定"}},[t._v("文字环绕衍生-单侧固定")])]),r("li",[r("a",{attrs:{href:"#dom-与显示位置匹配的单侧固定布局"}},[t._v("DOM 与显示位置匹配的单侧固定布局")])]),r("li",[r("a",{attrs:{href:"#高级进化-智能自适应尺寸"}},[t._v("高级进化-智能自适应尺寸")])])])]),r("li",[r("a",{attrs:{href:"#_8-float-与兼容性"}},[t._v("8. float 与兼容性")]),r("ul",[r("li",[r("a",{attrs:{href:"#让-ie7-飙泪的浮动问题"}},[t._v("让 IE7 飙泪的浮动问题")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"_1-float-的历史"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-float-的历史"}},[t._v("#")]),t._v(" 1. float 的历史")]),t._v(" "),r("p",[t._v("设计的初衷不是为了高大上的布局，而仅仅是文字环绕效果。 （文字环绕图文），可以感受 "),r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/1-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("文字环绕效果感受"),r("OutboundLink")],1),t._v(" ，记得需要先看问题的效果，再去看解决后的效果，就有直观的感受了")]),t._v(" "),r("h2",{attrs:{id:"_2-包裹与破坏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-包裹与破坏"}},[t._v("#")]),t._v(" 2. 包裹与破坏")]),t._v(" "),r("p",[t._v("增强浮动的感性认知，让我们更好更快的理解一些特性")]),t._v(" "),r("h3",{attrs:{id:"包裹"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#包裹"}},[t._v("#")]),t._v(" 包裹")]),t._v(" "),r("p",[r("img",{attrs:{src:s(537),alt:"image-20200430223436013"}})]),t._v(" "),r("ul",[r("li",[t._v("收缩：只会在容器内，被包裹住")]),t._v(" "),r("li",[t._v("坚挺：之前没有高度，现在高度和容器一样高")]),t._v(" "),r("li",[t._v("隔绝：里面的人发生任何的事情，对外面都没有任何的影响，这种特性称为 "),r("strong",[t._v("BFC（Block formatting context 块级格式化上下文）")])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("特别注意")]),t._v(" "),r("p",[t._v("包裹性是指把 float 施加到父元素上，父元素会包裹住子元素")])]),t._v(" "),r("h3",{attrs:{id:"具有包裹性的其他元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#具有包裹性的其他元素"}},[t._v("#")]),t._v(" 具有包裹性的其他元素")]),t._v(" "),r("ul",[r("li",[r("p",[r("code",[t._v("display:inline-block/table-cell/...")])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("position:absolute/fixed/sticky")])]),t._v(" "),r("p",[t._v("absolute 近亲，这个在 absolute 章节讲解")])]),t._v(" "),r("li",[r("p",[r("code",[t._v("overflow:hidden/scrool")])]),t._v(" "),r("p",[t._v("给父元素增加 overflow: hidden;（宽度要是固定或则100%（块级元素宽度默认就是100%））")]),t._v(" "),r("blockquote",[r("p",[t._v("原理：使用了overflow:hidden 的父元素要计算超出的部分然后进行隐藏，那么他就会撑开自身把所有的子元素包裹进来。 --  来自百度不权威的解说")])])])]),t._v(" "),r("h3",{attrs:{id:"破坏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#破坏"}},[t._v("#")]),t._v(" 破坏")]),t._v(" "),r("p",[r("img",{attrs:{src:s(538),alt:"image-20200430224837356"}})]),t._v(" "),r("p",[t._v("没有 float 之前，父容器被这个小人高度撑开，增加 float 后，容器被破坏，它的表现就是：脱离文档流，让父元素的高度塌陷")]),t._v(" "),r("h3",{attrs:{id:"具有破坏性的其他元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#具有破坏性的其他元素"}},[t._v("#")]),t._v(" 具有破坏性的其他元素")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("display:none")])]),t._v(" "),r("li",[r("code",[t._v("position:absolute (近亲)/fixed/sticky")])])]),t._v(" "),r("p",[t._v("因此：浮动是魔鬼，三无准则：无宽度、无图片、无浮动")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("特别注意")]),t._v(" "),r("p",[t._v("破坏性是指把 float 施加到子元素上，父元素高度塌陷")])]),t._v(" "),r("h2",{attrs:{id:"_3-被误解的-float-浮动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-被误解的-float-浮动"}},[t._v("#")]),t._v(" 3. 被误解的 float 浮动")]),t._v(" "),r("p",[r("strong",[t._v("浮动使高度塌陷不是 Bug，而是标准")])]),t._v(" "),r("p",[t._v("在当时 CSS 盒模型的基础上，要这么才能让文字环绕图片？设计者很巧妙的使用了破坏熟悉（关于盒模型是个很庞大的概念，自己去深入理解），下面用一个小图来讲解")]),t._v(" "),r("p",[r("img",{attrs:{src:s(539),alt:"image-20200430230422572"}})]),t._v(" "),r("p",[t._v("大哥被限制在红框中了，为了放荡一下，给自己增加了 float 属性，然后可见，开始靠边站、并且容器高度塌陷，由于塌陷，下面的美女元素就自动靠在图片后面了")]),t._v(" "),r("p",[r("img",{attrs:{src:s(540),alt:"image-20200430225939109"}})]),t._v(" "),r("p",[t._v("下面再来看一个图片理解浮动")]),t._v(" "),r("p",[r("img",{attrs:{src:s(541),alt:"image-20200430230859499"}})]),t._v(" "),r("p",[t._v("对图片施加 "),r("code",[t._v("float:left")]),t._v(" 后，破坏了容器高度")]),t._v(" "),r("p",[r("img",{attrs:{src:s(542),alt:"image-20200430231559212"}})]),t._v(" "),r("p",[t._v("并且浮动具有偏移的特性，偏移到了左侧")]),t._v(" "),r("p",[r("img",{attrs:{src:s(543),alt:"image-20200430231754050"}})]),t._v(" "),r("h3",{attrs:{id:"结论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),r("p",[t._v("浮动的破坏性只是单纯为了实现文字环绕效果而已，因此：父容器高度塌陷根本就不是 BUG，是 "),r("strong",[t._v("特性")])]),t._v(" "),r("h2",{attrs:{id:"_4-清除浮动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-清除浮动"}},[t._v("#")]),t._v(" 4. 清除浮动")]),t._v(" "),r("p",[t._v("清除浮动的目的是 "),r("strong",[t._v("清除浮动带来的影响")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(544),alt:"image-20200430232441121"}})]),t._v(" "),r("p",[t._v("有两大基本方法：")]),t._v(" "),r("ul",[r("li",[t._v("在脚底插入 "),r("code",[t._v("clear:both;")])]),t._v(" "),r("li",[t._v("让父元素 BFC（高级浏览器的特性），低级浏览器使用 haslayout")])]),t._v(" "),r("h3",{attrs:{id:"方法差异"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法差异"}},[t._v("#")]),t._v(" 方法差异")]),t._v(" "),r("p",[r("img",{attrs:{src:s(545),alt:"image-20200430232736578"}})]),t._v(" "),r("ul",[r("li",[r("p",[t._v("clear：就如同在峡谷两侧搭建了索道，可以正常通行，但是可以和外界有 "),r("strong",[t._v("接触")]),t._v("，并且发生，环境重叠效果")])]),t._v(" "),r("li",[r("p",[t._v("BFC：产生了一个封闭的结构，不会产生重叠，例如浮动，让文字环绕它，而不是重叠它")])])]),t._v(" "),r("h3",{attrs:{id:"clear-通常应用形式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clear-通常应用形式"}},[t._v("#")]),t._v(" clear 通常应用形式")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("HTML block 水平元素底部")]),t._v(" "),r("p",[t._v("如："),r("code",[t._v("<div></div>")]),t._v("，")]),t._v(" "),r("p",[t._v("缺点：有很多裸露的 div 标签站位")])]),t._v(" "),r("li",[r("p",[t._v("CSS after 伪元素底部生成")]),t._v(" "),r("p",[r("code",[t._v(".clearfix:after{}")])]),t._v(" "),r("p",[t._v("缺点：低版本浏览器 IE6/7 不支持")])])]),t._v(" "),r("h3",{attrs:{id:"bfc-haslayout-通常声明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bfc-haslayout-通常声明"}},[t._v("#")]),t._v(" BFC/haslayout 通常声明")]),t._v(" "),r("p",[t._v("让标签产生 BFC 的属性有如下常用的：")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("float:left/right")])]),t._v(" "),r("li",[r("code",[t._v("position:absolute/fixed")])]),t._v(" "),r("li",[r("code",[t._v("overflow:hidden/scroll(IE7+)")])]),t._v(" "),r("li",[r("code",[t._v("display:inline-block/table-cell(IE8+)")])]),t._v(" "),r("li",[r("code",[t._v("width/height/ zoom:1(可以让 IE6/IE7 产生 haslayout)")])])]),t._v(" "),r("p",[t._v("这只是其中一部分，还有其他的自行了解")]),t._v(" "),r("p",[t._v("以上声明的不足：")]),t._v(" "),r("ul",[r("li",[t._v('无法 "一方通行"：你不能保证每个元素都施加这些声明')]),t._v(" "),r("li",[t._v("兼容性问题：zoom 可以一方通行，但是仅限于 IE 浏览器")])]),t._v(" "),r("p",[t._v("那么经过权衡利弊之后，使用以下代码来达到清除浮动的效果")]),t._v(" "),r("div",{staticClass:"language-css line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// ie8 以上 .clearfix 是塌陷的元素\n.clearfix:after")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("block"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("both"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// 该方法也是可以的，代码更简洁了"),r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";省略了很多声明\n.clearfix:after")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("table"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("both"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// ie6/7\n.clearfix")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("*"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])]),r("h3",{attrs:{id:"浮动的滥用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浮动的滥用"}},[t._v("#")]),t._v(" 浮动的滥用")]),t._v(" "),r("p",[r("img",{attrs:{src:s(546),alt:"image-20200430234627513"}})]),t._v(" "),r("p",[t._v("你只应该将 "),r("code",[t._v(".clearfix")]),t._v(" 应用在包含浮动子元素的 "),r("strong",[t._v("父级元素")]),t._v(" 上")]),t._v(" "),r("p",[t._v("滥用不只是浪费的问题，而是会让乱入的 haslayout 在 ie6/7 上做出出格的事情，因为浮动也会触发 haslayout ，所以浮动在 ie6/7 下回显得很魔性")]),t._v(" "),r("h3",{attrs:{id:"clear-与-margin-重叠"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clear-与-margin-重叠"}},[t._v("#")]),t._v(" clear 与 margin 重叠")]),t._v(" "),r("p",[t._v("这个是一个"),r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/1-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("感受题，注意仔细观察体验"),r("OutboundLink")],1),t._v("，请前往查看尝试效果")]),t._v(" "),r("h2",{attrs:{id:"_5-浮动的滥用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-浮动的滥用"}},[t._v("#")]),t._v(" 5. 浮动的滥用")]),t._v(" "),r("p",[t._v("不在其职而谋其政，我本流体布局生，无奈苦逼砌砖头")]),t._v(" "),r("p",[r("img",{attrs:{src:s(547),alt:"image-20200501001157286"}})]),t._v(" "),r("p",[t._v("一块一块的砖头，可以堆一堵墙出来。")]),t._v(" "),r("h3",{attrs:{id:"为啥浮动可以用来砌砖头"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为啥浮动可以用来砌砖头"}},[t._v("#")]),t._v(" 为啥浮动可以用来砌砖头?")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("元素 block 块状化（砖头化）："),r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/5/%E6%B5%AE%E5%8A%A8%E4%B8%8Edisplay:block%E5%8C%96.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动与display:block化 demo 演示"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("原本不是 block 的元素，被施加了 float 后，会变成 block 的")])]),t._v(" "),r("li",[r("p",[t._v("破坏性造成的紧密排列特性（去空格化）")]),t._v(" "),r("p",[t._v("让元素环绕，空格、换行符也属于元素")])])]),t._v(" "),r("h4",{attrs:{id:"去空格化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#去空格化"}},[t._v("#")]),t._v(" 去空格化")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/5/%E6%B5%AE%E5%8A%A8%E5%8E%BB%E7%A9%BA%E6%A0%BC.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动去空格 demo 演示 1"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:s(548),alt:"image-20200501002909403"}})]),t._v(" "),r("p",[t._v("去掉换行产生的间隔，发现下面的 P 标签的距离和上面的重叠了")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/5/%E6%B5%AE%E5%8A%A8%E5%8E%BB%E7%A9%BA%E6%A0%BC2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动去空格 demo 演示 2"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:s(549),alt:"image-20200501003259558"}})]),t._v(" "),r("p",[t._v("换行和空格，被 float 后，4 个 "),r("strong",[t._v("空格跟随在了按钮后面")]),t._v("，还记得浮动的特质吗？"),r("strong",[t._v("文字环绕！")])]),t._v(" "),r("p",[t._v("他们效果是有区别的，可以看到图片上面两个按钮离上排的距离不一样，"),r("strong",[t._v("导致这个的原因是")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("使用换行符与空格一样，会被跟随在按钮后面，"),r("strong",[t._v("但是换行符看不见也不能选中")]),t._v("，它占据的空间很少，可以看到第一个 demo 中的按钮仅靠在上排的")]),t._v(" "),r("li",[t._v("使用换行符就不一样了，换行符是可以被选中的，它是占据空间的，所以下排的按钮靠不上去")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(550),alt:"image-20200501005345375"}})]),t._v(" "),r("p",[t._v("根据浏览器的盒模型来看，P 标签有上下的 margin 16 ，由于换行符不占据空间，下排的按钮几乎上是贴着上排的按钮的，这里是否也是由于 margin 值被重叠的缘故，导致 margin 穿透了呢？")]),t._v(" "),r("h4",{attrs:{id:"砖头是如何砌起来的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#砖头是如何砌起来的"}},[t._v("#")]),t._v(" 砖头是如何砌起来的")]),t._v(" "),r("p",[r("img",{attrs:{src:s(551),alt:"image-20200501005733302"}})]),t._v(" "),r("p",[t._v("可以看到，利用浮动的块状化、去空格化 就想现实世界中搭积木一样简单好用，着也是浮动被乱用的原因之一")]),t._v(" "),r("h3",{attrs:{id:"砌砖布局的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#砌砖布局的问题"}},[t._v("#")]),t._v(" 砌砖布局的问题")]),t._v(" "),r("ol",[r("li",[t._v("妙脆角-嘎吱脆：容错性交叉，容易出问题，比如错位")]),t._v(" "),r("li",[t._v("吝啬鬼-重用废：这种布局需要元素固定尺寸，很难重复使用")]),t._v(" "),r("li",[t._v("洋葱头-IE7 飙泪：在低版本的 IE 下问题很多")])]),t._v(" "),r("p",[t._v("还有其他的问题，所以尽量少使用该布局")]),t._v(" "),r("h2",{attrs:{id:"_7-float-与流体布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-float-与流体布局"}},[t._v("#")]),t._v(" 7. float 与流体布局")]),t._v(" "),r("p",[t._v("我本流体布局生，春江流水应犹在：float 设计就是为了文字环绕，文字环绕也就是 "),r("strong",[t._v("流体布局")]),t._v("，因此要把浮动使用在流体布局中，才是发挥它的优势")]),t._v(" "),r("h3",{attrs:{id:"看家本领-文字环绕"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#看家本领-文字环绕"}},[t._v("#")]),t._v(" 看家本领-文字环绕")]),t._v(" "),r("p",[r("img",{attrs:{src:s(552),alt:"image-20200501010938286"}})]),t._v(" "),r("p",[t._v("float 的看家本领就是文字环绕，float 后跟随着许多跟随元素")]),t._v(" "),r("h3",{attrs:{id:"文字环绕变声-左青龙右白虎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文字环绕变声-左青龙右白虎"}},[t._v("#")]),t._v(" 文字环绕变声-左青龙右白虎")]),t._v(" "),r("p",[r("img",{attrs:{src:s(553),alt:"image-20200501011119120"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/6/%E6%96%87%E5%AD%97%E7%8E%AF%E7%BB%95%E5%8F%98%E8%BA%AB-%E5%B7%A6%E9%9D%92%E9%BE%99%E5%8F%B3%E7%99%BD%E8%99%8E.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文字环绕变身-左青龙右白虎 demo 演示 "),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("注意，上述的顺序，文字只能在后面，前面两个浮动后，文字才会跟随上去，否则会造成，右白虎前面有文字，看起来掉在了下一行")]),t._v(" "),r("h3",{attrs:{id:"文字环绕衍生-单侧固定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文字环绕衍生-单侧固定"}},[t._v("#")]),t._v(" 文字环绕衍生-单侧固定")]),t._v(" "),r("p",[r("img",{attrs:{src:s(554),alt:"image-20200501012612231"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/6/%E6%B5%AE%E5%8A%A8%E4%B8%8E%E5%8D%95%E4%BE%A7%E5%B0%BA%E5%AF%B8%E5%9B%BA%E5%AE%9A%E7%9A%84%E6%B5%81%E4%BD%93%E5%B8%83%E5%B1%80.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动与单侧尺寸固定的流体布局 demo 演示 "),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("上图中，上面的实现标识了两种：")]),t._v(" "),r("ul",[r("li",[t._v("传统的实现：\n"),r("ul",[r("li",[t._v("左侧固定宽度 + 左浮动")]),t._v(" "),r("li",[t._v("右侧固定宽度 + 右浮动")])])]),t._v(" "),r("li",[t._v("文字环绕流布局实现：\n"),r("ul",[r("li",[t._v("左侧固定宽度 + 左浮动")]),t._v(" "),r("li",[t._v("右侧利用跟随自适应+ 占位（不会跑到头像下面去）")])])])]),t._v(" "),r("h3",{attrs:{id:"dom-与显示位置匹配的单侧固定布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dom-与显示位置匹配的单侧固定布局"}},[t._v("#")]),t._v(" DOM 与显示位置匹配的单侧固定布局")]),t._v(" "),r("p",[r("img",{attrs:{src:s(555),alt:"image-20200501015735029"}})]),t._v(" "),r("ul",[r("li",[t._v("页面视觉与 DOM 元素相反的实现\n"),r("ul",[r("li",[t._v("头像区域：右浮动 + 宽度固定")]),t._v(" "),r("li",[t._v("内容区域：由于位置本身就在后面，环绕文字； + margin-rigft ；")])])]),t._v(" "),r("li",[t._v("页面视觉与 DOM 元素一致的实现\n"),r("ul",[r("li",[t._v("内容区域：一个额外的容器进行宽度 100% 自适应 + 左浮动")]),t._v(" "),r("li",[t._v("头像区域：\n"),r("ul",[r("li",[t._v("左浮动，跟随内容区域，由于内容区域 100% 宽度，导致头像往下掉")]),t._v(" "),r("li",[t._v("利用 margin-left 负值达到显示在同一行中")])])])])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/6/%E6%B5%AE%E5%8A%A8%E4%B8%8E%E5%8F%B3%E4%BE%A7%E5%B0%BA%E5%AF%B8%E5%9B%BA%E5%AE%9A%E7%9A%84%E6%B5%81%E4%BD%93%E5%B8%83%E5%B1%80.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动与单侧尺寸固定的流体布局 demo 演示 "),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"高级进化-智能自适应尺寸"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高级进化-智能自适应尺寸"}},[t._v("#")]),t._v(" 高级进化-智能自适应尺寸")]),t._v(" "),r("p",[t._v("左右两边都可以自适应")]),t._v(" "),r("p",[r("img",{attrs:{src:s(556),alt:"image-20200501014118024"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/6/%E6%B5%AE%E5%8A%A8%E4%B8%8E%E4%B8%A4%E4%BE%A7%E7%9A%86%E8%87%AA%E9%80%82%E5%BA%94%E7%9A%84%E6%B5%81%E4%BD%93%E5%B8%83%E5%B1%80.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动与两侧皆自适应的流体布局 demo 演示 "),r("OutboundLink")],1),t._v("，实现方式：")]),t._v(" "),r("ul",[r("li",[t._v("头像：左浮动")]),t._v(" "),r("li",[t._v("内容：使用 "),r("code",[t._v("display: table-cell")])])]),t._v(" "),r("p",[t._v("达成头像宽度更改，内容自适应；")]),t._v(" "),r("p",[t._v("有一个不是问题的问题：当整个面变宽度特别小的时候，内容会掉在头像下面，因为正常来说都不会达到这么窄的情况")]),t._v(" "),r("p",[t._v("等等还有很多其他的布局应用，这里不再继续")]),t._v(" "),r("h2",{attrs:{id:"_8-float-与兼容性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-float-与兼容性"}},[t._v("#")]),t._v(" 8. float 与兼容性")]),t._v(" "),r("p",[t._v("IE 6 太古老不兼容太多，不要管了。")]),t._v(" "),r("h3",{attrs:{id:"让-ie7-飙泪的浮动问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#让-ie7-飙泪的浮动问题"}},[t._v("#")]),t._v(" 让 IE7 飙泪的浮动问题")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("含 clear 的浮动元素包裹不正确的问题")])]),t._v(" "),r("li",[r("p",[t._v("浮动元素倒数 2 个莫名其妙垂直间距的问题")])]),t._v(" "),r("li",[r("p",[t._v("浮动元素最后一个字符重复的问题")])]),t._v(" "),r("li",[r("p",[t._v("浮动元素楼梯排列问题")])]),t._v(" "),r("li",[r("p",[t._v("浮动元素和文本不在同一行的问题")]),t._v(" "),r("p",[t._v("前面几个 BUG 太匪夷所思，直接忽略掉，这一个可能会常见。")]),t._v(" "),r("div",{staticClass:"language-html line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  文字标题\n  \t"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),r("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("right")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("右浮动"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n以上代码，span 标签使用右浮动后，会导致包裹住它的的 inline-box 的高度塌陷，从而只能包裹住文字，正常情况下，会浮动在右侧，与文字标题在一行。而在 IE7，它会掉下来在另外一行\n为了兼容的化，使用：文字标题左浮动，span 右浮动，就一样的了\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])])])]),t._v(" "),r("p",[t._v("忠告：合理使用浮动，不要用浮动去做那些砌砖的布局，多多使用它的文字环绕特性实现流体布局或其他的应用")]),t._v(" "),r("p",[t._v("下面的演示，不是练习，直接感受就好，需要在 IE7 上和 IE8 上观看他们的表现差距：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/7/%E5%90%ABclear%E7%9A%84%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E5%8C%85%E8%A3%B9%E4%B8%8D%E6%AD%A3%E7%A1%AE%E7%9A%84bug.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("含clear的浮动元素包裹不正确的bug"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/7/%E6%B5%AE%E5%8A%A8%E4%B8%8E%E5%90%8C%E4%B8%80%E8%A1%8C%E7%9A%84%E5%B7%AE%E5%BC%82.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动与同一行的差异"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/7/%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E5%80%92%E6%95%B02%E4%B8%AA%E6%B5%AE%E5%8A%A8%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E9%87%8D%E5%A4%8Dbug.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动元素倒数2个浮动最后一个字符重复bug"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zq99299/css-zxx/tree/master/float/7/%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E5%80%92%E6%95%B02%E4%B8%AA%E8%8E%AB%E5%90%8D%E5%9E%82%E7%9B%B4%E9%97%B4%E8%B7%9Dbug%EF%BC%88%E8%B6%85%E8%BF%873%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浮动元素倒数2个莫名垂直间距bug（超过3浮动元素）"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports},537:function(t,a,s){t.exports=s.p+"assets/img/image-20200430223436013.27317a11.png"},538:function(t,a,s){t.exports=s.p+"assets/img/image-20200430224837356.fa8a06e8.png"},539:function(t,a,s){t.exports=s.p+"assets/img/image-20200430230422572.01585ff8.png"},540:function(t,a,s){t.exports=s.p+"assets/img/image-20200430225939109.710af9f1.png"},541:function(t,a,s){t.exports=s.p+"assets/img/image-20200430230859499.bd747729.png"},542:function(t,a,s){t.exports=s.p+"assets/img/image-20200430231559212.7c7d6b26.png"},543:function(t,a,s){t.exports=s.p+"assets/img/image-20200430231754050.8073ef8b.png"},544:function(t,a,s){t.exports=s.p+"assets/img/image-20200430232441121.c6c2bb1f.png"},545:function(t,a,s){t.exports=s.p+"assets/img/image-20200430232736578.ba12854a.png"},546:function(t,a,s){t.exports=s.p+"assets/img/image-20200430234627513.136fc858.png"},547:function(t,a,s){t.exports=s.p+"assets/img/image-20200501001157286.8f36a33a.png"},548:function(t,a,s){t.exports=s.p+"assets/img/image-20200501002909403.8e9dfadf.png"},549:function(t,a,s){t.exports=s.p+"assets/img/image-20200501003259558.54682c06.png"},550:function(t,a,s){t.exports=s.p+"assets/img/image-20200501005345375.bbda501e.png"},551:function(t,a,s){t.exports=s.p+"assets/img/image-20200501005733302.e57dd354.png"},552:function(t,a,s){t.exports=s.p+"assets/img/image-20200501010938286.80f12e30.png"},553:function(t,a,s){t.exports=s.p+"assets/img/image-20200501011119120.d3d68db6.png"},554:function(t,a,s){t.exports=s.p+"assets/img/image-20200501012612231.866ebadf.png"},555:function(t,a,s){t.exports=s.p+"assets/img/image-20200501015735029.3c3ced55.png"},556:function(t,a,s){t.exports=s.p+"assets/img/image-20200501014118024.a099be80.png"}}]);