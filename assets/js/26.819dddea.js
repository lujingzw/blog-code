(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{442:function(s,t,a){"use strict";a.r(t);var e=a(15),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"body-parser-处理多层对象的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-parser-处理多层对象的问题"}},[s._v("#")]),s._v(" body-parser 处理多层对象的问题")]),s._v(" "),a("blockquote",[a("p",[s._v("参考："),a("code",[s._v("https://blog.csdn.net/guzhao593/article/details/83933105")]),a("br"),s._v("\n参考："),a("code",[s._v("https://www.jianshu.com/p/80b502efe255")])])]),s._v(" "),a("h2",{attrs:{id:"body-parser简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-parser简介"}},[s._v("#")]),s._v(" "),a("code",[s._v("body-parser")]),s._v("简介")]),s._v(" "),a("p",[s._v("具体用法可以查看"),a("code",[s._v("https://www.jianshu.com/p/80b502efe255")]),s._v("，这里不做过多解释")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("body-parser")]),s._v("模块是一个"),a("code",[s._v("Express")]),s._v("中间件")]),s._v(" "),a("li",[a("code",[s._v("body-parser")]),s._v("是一个"),a("code",[s._v("HTTP")]),a("em",[s._v("请求体解析中间件")])]),s._v(" "),a("li",[s._v("可以解析 JSON、Raw、文本、URL-encoded 格式的请求体")]),s._v(" "),a("li",[s._v("请求体解析后，解析值都会被放到"),a("code",[s._v("req.body")]),s._v("属性，内容为空时是一个"),a("code",[s._v("{}")]),s._v("空对象。")])]),s._v(" "),a("h2",{attrs:{id:"遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),a("ol",[a("li",[s._v("我写接口和前台交互的时候，前台经常是将一个对象或者某个值传递到接口，"),a("code",[s._v("body-parser")]),s._v("可以很好的将它们转换成"),a("code",[s._v("key：value")]),s._v("的形式，方面获取接收到的值。")]),s._v(" "),a("li",[s._v("现在有这么一个需求，我要将一个数组对象传递到接口，并且将对收到的数组对象进行处理并且存储起来。")])]),s._v(" "),a("h4",{attrs:{id:"前台发送的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前台发送的值"}},[s._v("#")]),s._v(" 前台发送的值")]),s._v(" "),a("ul",[a("li",[s._v("前台发送数据使用的是"),a("code",[s._v("application/x-www-form-urlencoded")]),s._v("格式，并用"),a("code",[s._v("qs.stringify")]),s._v("处理之后发送")]),s._v(" "),a("li",[s._v("发送的数据"),a("br"),s._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/body-parser-1.png",alt:"图片"}})])]),s._v(" "),a("h4",{attrs:{id:"后端接收到的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端接收到的值"}},[s._v("#")]),s._v(" 后端接收到的值")]),s._v(" "),a("ul",[a("li",[s._v("后端使用"),a("code",[s._v("body-parser")]),s._v("处理接收的数据，使用"),a("code",[s._v("bodyParser.json")]),s._v("格式")]),s._v(" "),a("li",[s._v("此时接收到的值"),a("br"),s._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/body-parser-2.png",alt:"图片"}})]),s._v(" "),a("li",[s._v("这不是我们想要的结果")])]),s._v(" "),a("h3",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),a("p",[s._v("通过查找资料发现，"),a("code",[s._v("body-parser")]),s._v("只能处理对象的一层，如果对象有多层，也只处理第一层，而仅凭"),a("code",[s._v("body-parser")]),s._v("是没办法解决的，所以我们需要一个可以处理多层的工具，这里我使用了"),a("code",[s._v("qs")]),s._v("模块")]),s._v(" "),a("ul",[a("li",[s._v("引入"),a("code",[s._v("qs")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入qs模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" qs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'qs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("使用："),a("code",[s._v("body-parser")]),s._v("可以不用改，仅仅将"),a("code",[s._v("req.body")]),s._v("用"),a("code",[s._v("qs.parse()")]),s._v("解析就可以结果")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("结果"),a("br"),s._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/body-parser-3.png",alt:"图片"}})])]),s._v(" "),a("li",[a("p",[s._v("这样我们得到了我们想要的数据，也许还有其他的方法，这里没有继续深入挖掘。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);