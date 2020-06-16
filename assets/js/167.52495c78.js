(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1132:function(s,n,a){"use strict";a.r(n);var e=a(15),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_053-部署分发层-nginx-以及基于-lua-完成基于商品-id-的定向流量分发策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_053-部署分发层-nginx-以及基于-lua-完成基于商品-id-的定向流量分发策略"}},[s._v("#")]),s._v(" 053. 部署分发层 nginx 以及基于 lua 完成基于商品 id 的定向流量分发策略")]),s._v(" "),a("p",[s._v("eshop-03 上也需要搭建一个 应用层 nginx，"),a("RouterLink",{attrs:{to:"/cache-pdp/052.html#搭建另外一个应用层-nginx"}},[s._v("参考上一章节")])],1),s._v(" "),a("p",[s._v("nginx 三台的作用：")]),s._v(" "),a("ul",[a("li",[s._v("eshop-01：应用层")]),s._v(" "),a("li",[s._v("eshop-02：应用层")]),s._v(" "),a("li",[s._v("eshop-03：分发层")])]),s._v(" "),a("p",[s._v("在 eshop-cache03 中编写 lua 脚本，完成基于商品 id 的流量分发策略")]),s._v(" "),a("p",[s._v("这里简化业务逻辑，实际上在你的公司中，你可以随意根据自己的业务逻辑和场景，去制定自己的流量分发策略")]),s._v(" "),a("p",[s._v("步骤如下：")]),s._v(" "),a("ol",[a("li",[s._v("获取请求参数，比如 productId")]),s._v(" "),a("li",[s._v("对 productId 进行 hash")]),s._v(" "),a("li",[s._v("hash 值对应用服务器数量取模，获取到一个应用服务器")]),s._v(" "),a("li",[s._v("利用 http 发送请求到应用层 nginx")]),s._v(" "),a("li",[s._v("获取响应后返回")])]),s._v(" "),a("p",[s._v("为了能分发看出来效果，我们把之前 hello 输出信息修改为自己的主机名，如 "),a("code",[s._v("hello world,eshop-cache03")])]),s._v(" "),a("p",[s._v("使用 lua 转发需要用到 lua 的 http 包，这里导入下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/hello/lualib/resty/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/pintsized/lua-resty-http/master/lib/resty/http_headers.lua  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/pintsized/lua-resty-http/master/lib/resty/http.lua\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("脚本编写")]),s._v(" "),a("p",[s._v("/usr/hello/lua/hello.lua")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('-- 拿一个地址来说明：http://eshop-cache03/lua?method=hello&productId=1\n-- 获取问号后面的参数列表\nlocal uri_args = ngx.req.get_uri_args()\n-- 获取参数\nlocal productId = uri_args["productId"]\n\n-- 定义后端应用 ip\nlocal host = {"192.168.99.170", "192.168.99.171"}\n-- 对商品 id 取模并计算 hash 值\nlocal hash = ngx.crc32_long(productId)\nhash = (hash % 2) + 1  \n-- 拼接 http 前缀\nbackend = "http://"..host[hash]\n\n-- 获取到参数中的路径，比如你要访问 /hello，这个例子中是需要传递访问路径的\nlocal method = uri_args["method"]\n-- 拼接具体的访问地址不带 host，如：/hello?productId=1\nlocal requestBody = "/"..method.."?productId="..productId\n\n-- 获取 http 包\nlocal http = require("resty.http")  \nlocal httpc = http.new()  \n\n-- 访问，这里有疑问：万一有 cooke 这些脚本支持吗？会很麻烦吗？\nlocal resp, err = httpc:request_uri(backend, {  \n    method = "GET",  \n    path = requestBody,\n    keepalive=false\n})\n\n-- 如果没有响应则输出一个 err 信息\nif not resp then  \n    ngx.say("request error :", err)  \n    return  \nend\n\n-- 有响应测输出响应信息\nngx.say(resp.body)  \n\n-- 关闭 http 客户端实例\nhttpc:close()\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("p",[s._v("刷新配置："),a("code",[s._v("/usr/servers/nginx/sbin/nginx -s reload")])]),s._v(" "),a("p",[s._v("访问")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("这里的意思是，访问 03 这台分发 nginx，但是需要告诉它我访问后端哪个服务路径\n由于后端两个 nginx 都只有 /lua 这个请求路径，所以就访问了它\nhttp://eshop-cache03/lua?method=lua&productId=1\n页面输出：hello world,eshop-cache02\n\nhttp://eshop-cache03/lua?method=lua&productId=4\n页面输出：hello world,eshop-cache01\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("基于商品 id 的定向流量分发策略的 lua 脚本就开发完了，而且也测试过了")]),s._v(" "),a("p",[s._v("我们就可以看到，如果你请求的是固定的某一个商品，那么就一定会将流量打到固定的一个应用 nginx 上面去")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果访问报错，可以查看 nginx 的错误日志：cat /usr/servers/nginx/logs/error.log")])]),s._v(" "),a("p",[s._v("一开始访问报错，看错误日志看到的，百度了下解决了在请求的时候增加了 "),a("code",[s._v("keepalive=false")]),s._v(" 参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("2019/04/02 02:00:33 [error] 8451#0: *16 lua entry thread aborted: runtime error: /usr/hello/lualib/resty/http.lua:926: bad argument #2 to 'set_keepalive' (number expected, got nil)\nstack traceback:\ncoroutine 0:\n\t[C]: in function 'set_keepalive'\n\t/usr/hello/lualib/resty/http.lua:926: in function 'request_uri'\n\t/usr/hello/lua/hello.lua:25: in function </usr/hello/lua/hello.lua:1>, client: 192.168.99.111, server: _, request: \"GET /lua?method=lua&productId=1 HTTP/1.1\", host: \"eshop-cache03\"\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);