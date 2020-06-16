(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1289:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_093-深入分析-hystrix-执行时的-8-大流程步骤以及内部原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_093-深入分析-hystrix-执行时的-8-大流程步骤以及内部原理"}},[t._v("#")]),t._v(" 093. 深入分析 hystrix 执行时的 8 大流程步骤以及内部原理")]),t._v(" "),e("p",[t._v("之前几讲，我们用实际的业务背景给了一些可用性的问题;\n然后借着那些最最基础的可用性的问题，然后讲解了 hystrix 最基本的支持高可用的技术：资源隔离 + 限流")]),t._v(" "),e("p",[t._v("创建 command，执行这个 command，配置这个 command 对应的 group 和线程池，以及线程池/信号量的容量和大小")]),t._v(" "),e("p",[t._v("我们要去讲解一下，你开始执行这个 command，调用了这个 command 的 "),e("code",[t._v("execute()")]),t._v(" 方法以后，\nhystrix 内部的底层的执行流程和步骤以及原理是什么呢？\n在讲解这个流程的过程中，我们会带出来 hystrix 其他的一些核心以及重要的功能")]),t._v(" "),e("p",[t._v("画图分析整个 8 大步骤的流程，然后再对每个步骤进行细致的讲解；")]),t._v(" "),e("p",[t._v("由于是笔记，先贴上完整的图")]),t._v(" "),e("p",[t._v("视频讲解图")]),t._v(" "),e("p",[e("img",{attrs:{src:s(405),alt:""}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Netflix/Hystrix/wiki/How-it-Works#flow-chart",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方图"),e("OutboundLink")],1),t._v(" - 英文不好进行了翻译")]),t._v(" "),e("p",[e("img",{attrs:{src:s(406),alt:""}})]),t._v(" "),e("p",[t._v("汉化语句:")]),t._v(" "),e("ul",[e("li",[t._v("available in cache？ 是否有缓存？")]),t._v(" "),e("li",[t._v("circuit breaker open？ 断路器是否打开？")]),t._v(" "),e("li",[t._v("Semaphore / Thread pool rejected? 信号量/线程池被拒绝?")]),t._v(" "),e("li",[t._v("execution fails? 执行失败？")]),t._v(" "),e("li",[t._v("fallback successful? fallback 是否执行成?")]),t._v(" "),e("li",[t._v("no;failed or not implemented 没有;失败或没有实现")]),t._v(" "),e("li",[t._v("report metrics 报告治标")]),t._v(" "),e("li",[t._v("calculate circuit health 断路器健康检查计算")])]),t._v(" "),e("p",[t._v("下面来逐一讲解每个步骤的原理")]),t._v(" "),e("h2",{attrs:{id:"_1-构建一个-hystrixcommand-或者-hystrixobservablecommand"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建一个-hystrixcommand-或者-hystrixobservablecommand"}},[t._v("#")]),t._v(" 1. 构建一个 HystrixCommand 或者 HystrixObservableCommand")]),t._v(" "),e("p",[t._v("一个 HystrixCommand 或一个 HystrixObservableCommand 对象，代表了对某个依赖服务发起的一次请求或者调用,\n构造的时候，可以在构造函数中传入任何需要的配置参数")]),t._v(" "),e("ul",[e("li",[t._v("HystrixCommand：主要用于仅仅会返回一个结果的调用")]),t._v(" "),e("li",[t._v("HystrixObservableCommand：主要用于可能会返回多条结果的调用")])]),t._v(" "),e("h2",{attrs:{id:"_2-调用-command-的执行方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-调用-command-的执行方法"}},[t._v("#")]),t._v(" 2. 调用 command 的执行方法")]),t._v(" "),e("p",[t._v("执行 Command 就可以发起一次对依赖服务的调用，\n要执行 Command，需要在 4 个方法中选择其中的一个："),e("code",[t._v("execute()")]),t._v("、"),e("code",[t._v("queue()")]),t._v("、"),e("code",[t._v("observe()")]),t._v("、"),e("code",[t._v("toObservable()")])]),t._v(" "),e("p",[t._v("其中 "),e("code",[t._v("execute()")]),t._v(" 和 "),e("code",[t._v("queue()")]),t._v(" 仅仅对 HystrixCommand 适用")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("execute()")])]),t._v(" "),e("p",[t._v("调用后直接 block 住，属于同步调用，直到依赖服务返回单条结果，或者抛出异常")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("queue()")])]),t._v(" "),e("p",[t._v("返回一个 Future，属于异步调用，后面可以通过 Future 获取单条结果")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("observe()")])]),t._v(" "),e("p",[t._v("订阅一个 Observable 对象，Observable 代表的是依赖服务返回的结果，获取到一个那个代表结果的 Observable 对象的拷贝对象")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("toObservable()")])]),t._v(" "),e("p",[t._v("返回一个 Observable 对象，如果我们订阅这个对象，就会执行 command 并且获取返回结果")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("返回值")]),t._v(" "),e("th",[t._v("command")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("K")]),t._v(" "),e("td",[e("code",[t._v("value = command.execute();")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Future<K>")])]),t._v(" "),e("td",[e("code",[t._v("fValue = command.queue();")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Observable<K>")])]),t._v(" "),e("td",[e("code",[t._v("ohValue = command.observe();")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Observable<K>")])]),t._v(" "),e("td",[e("code",[t._v("ocValue = command.toObservable();")])])])])]),t._v(" "),e("p",[t._v("注意，上面 4 种结果都依赖 toObservable()；这句话怎么理解？")]),t._v(" "),e("p",[t._v("拿 execute 来举例，可以看到源码中的确是使用了 toObservable() 来调用的结果")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netflix"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hystrix"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommand")]),t._v("#execute\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("queue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exceptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sneakyThrow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decomposeException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ncom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netflix"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hystrix"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommand")]),t._v("#queue\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Future")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("queue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n     * The Future returned by Observable.toBlocking().toFuture() does not implement the\n     * interruption of the execution thread when the "mayInterrupt" flag of Future.cancel(boolean) is set to true;\n     * thus, to comply with the contract of Future, we must wrap around it.\n     */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Future")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" delegate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toObservable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBlocking")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFuture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])]),e("h2",{attrs:{id:"_3-检查是否开启缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-检查是否开启缓存"}},[t._v("#")]),t._v(" 3. 检查是否开启缓存")]),t._v(" "),e("p",[t._v("从这一步开始，进入我们的底层的运行原理啦，了解 hysrix 的一些更加高级的功能和特性")]),t._v(" "),e("p",[t._v("如果这个 command 开启了请求缓存（request cache），而且这个调用的结果在缓存中存在，那么直接从缓存中返回结果")]),t._v(" "),e("h2",{attrs:{id:"_4-检查是否开启了短路器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-检查是否开启了短路器"}},[t._v("#")]),t._v(" 4. 检查是否开启了短路器")]),t._v(" "),e("p",[t._v("检查这个 command 对应的依赖服务是否开启了短路器，如果断路器被打开了，那么 hystrix 就不会执行这个 command，\n而是直接去执行 fallback 降级机制")]),t._v(" "),e("h2",{attrs:{id:"_5-检查线程池-队列-semaphore-是否已经满了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-检查线程池-队列-semaphore-是否已经满了"}},[t._v("#")]),t._v(" 5. 检查线程池/队列/ semaphore 是否已经满了")]),t._v(" "),e("p",[t._v("如果 command 对应的线程池/队列/ semaphore 已经满了，那么也不会执行 command，而是直接去调用 fallback 降级机制")]),t._v(" "),e("h2",{attrs:{id:"_6-执行-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-执行-command"}},[t._v("#")]),t._v(" 6. 执行 command")]),t._v(" "),e("p",[t._v("调用 HystrixObservableCommand.construct() 或 HystrixCommand.run() 来实际执行这个 command")]),t._v(" "),e("ul",[e("li",[t._v("HystrixCommand.run() 是返回一个单条结果，或者抛出一个异常")]),t._v(" "),e("li",[t._v("HystrixObservableCommand.construct() 是返回一个 Observable 对象，可以获取多条结果")])]),t._v(" "),e("p",[t._v("如果执行超过了 timeout 时长的话，那么 command 所在的线程就会抛出一个 TimeoutException，\n如果 timeout 了，也会去执行 fallback 降级机制，而且就不会管 run() 或 construct() 返回的值了")]),t._v(" "),e("p",[t._v("这里要注意的一点是，我们是不可能终止掉一个调用严重延迟的依赖服务的线程的，只能说给你抛出来一个 TimeoutException，\n但是还是可能会因为严重延迟的调用线程占满整个线程池的")]),t._v(" "),e("p",[t._v("对于上面一段话，本人知识储备不能很好的理解这一段话， hystrix 抛出了一个超时异常，但是对应的线程可能被卡住回不来?\n这里的细节有点懵逼")]),t._v(" "),e("p",[t._v("如果没有 timeout 的话，那么就会拿到一些调用依赖服务获取到的结果，然后 hystrix 会做一些 logging 记录和 metric 统计")]),t._v(" "),e("h2",{attrs:{id:"_7-短路健康检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-短路健康检查"}},[t._v("#")]),t._v(" 7. 短路健康检查")]),t._v(" "),e("p",[t._v("Hystrix 会将每一个依赖服务的调用成功、失败、拒绝、超时、等事件，都会发送给 circuit breaker 断路器，\n短路器就会对调用成功/失败/拒绝/超时等事件的次数进行统计")]),t._v(" "),e("p",[t._v("短路器会根据这些统计次数来决定是否要进行短路，如果打开了短路器，那么在一段时间内就会直接短路，\n然后如果在之后第一次检查发现调用成功了，就关闭断路器")]),t._v(" "),e("h2",{attrs:{id:"_8-调用-fallback-降级机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-调用-fallback-降级机制"}},[t._v("#")]),t._v(" 8. 调用 fallback 降级机制")]),t._v(" "),e("p",[t._v("在以下几种情况中，hystrix 会调用 fallback 降级机制：")]),t._v(" "),e("ul",[e("li",[t._v("run() 或 construct() 抛出一个异常")]),t._v(" "),e("li",[t._v("短路器打开")]),t._v(" "),e("li",[t._v("线程池/队列/ semaphore 满了")]),t._v(" "),e("li",[t._v("command 执行超时了")])]),t._v(" "),e("p",[t._v("即使在降级中，一定要进行网络调用，也应该将那个调用放在一个 HystrixCommand 中，进行隔离")]),t._v(" "),e("ul",[e("li",[t._v("在 HystrixCommand 中，实现 getFallback() 方法，可以提供降级机制")]),t._v(" "),e("li",[t._v("在 HystirxObservableCommand 中，实现一个 resumeWithFallback() 方法，返回一个 Observable 对象，可以提供降级结果")])]),t._v(" "),e("p",[t._v("如果 fallback 返回了结果，那么 hystrix 就会返回这个结果")]),t._v(" "),e("ul",[e("li",[t._v("对于 HystrixCommand，会返回一个 Observable 对象，其中会发返回对应的结果")]),t._v(" "),e("li",[t._v("对于 HystrixObservableCommand，会返回一个原始的 Observable 对象")])]),t._v(" "),e("p",[t._v("如果没有实现 fallback，或者是 fallback 抛出了异常，Hystrix 会返回一个 Observable，但是不会返回任何数据")]),t._v(" "),e("p",[t._v("不同的 command 执行方式，其 fallback 为空或者异常时的返回结果不同")]),t._v(" "),e("ul",[e("li",[t._v("对于execute()：直接抛出异常")]),t._v(" "),e("li",[t._v("对于queue()：返回一个 Future，调用 get() 时抛出异常")]),t._v(" "),e("li",[t._v("对于observe()：返回一个 Observable 对象，但是调用 subscribe() 方法订阅它时，立即抛出调用者的 onError 方法")]),t._v(" "),e("li",[t._v("对于toObservable()：返回一个 Observable 对象，但是调用 subscribe() 方法订阅它时，立即抛出调用者的 onError 方法")])]),t._v(" "),e("h2",{attrs:{id:"不同的执行方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同的执行方式"}},[t._v("#")]),t._v(" 不同的执行方式")]),t._v(" "),e("ul",[e("li",[t._v("execute()：获取一个 Future.get()，然后拿到单个结果")]),t._v(" "),e("li",[t._v("queue()：返回一个 Future")]),t._v(" "),e("li",[t._v("observer()：立即订阅 Observable，然后启动 8 大执行步骤，返回一个拷贝的 Observable，订阅时立即回调给你结果")]),t._v(" "),e("li",[t._v("toObservable()：返回一个原始的 Observable，必须手动订阅才会去执行 8 大步骤")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("官网教程机翻之后，最后发现本笔记和官网教程的相似程度居然在 80% 以上")])])])}),[],!1,null,null,null);a.default=n.exports},405:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-20190602213228335.dac02a26.png"},406:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-20190602213908788.97e9dc6f.png"}}]);