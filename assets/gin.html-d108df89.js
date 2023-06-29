const l=JSON.parse('{"key":"v-3cb2abac","path":"/%E8%AF%AD%E8%A8%80%E8%BF%9B%E9%98%B6/%E5%AE%9E%E7%94%A8%E6%A1%86%E6%9E%B6/gin.html","title":"Gin","lang":"zh-CN","frontmatter":{"description":"官方文档：Gin Web Framework (gin-gonic.com) (https://gin-gonic.com/zh-cn/) 仓库地址：gin-gonic/gin: Gin is a HTTP web framework written in Go (Golang) (https://github.com/gin-gonic/gin) 官...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/Golang-Doc/%E8%AF%AD%E8%A8%80%E8%BF%9B%E9%98%B6/%E5%AE%9E%E7%94%A8%E6%A1%86%E6%9E%B6/gin.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"Gin"}],["meta",{"property":"og:description","content":"官方文档：Gin Web Framework (gin-gonic.com) (https://gin-gonic.com/zh-cn/) 仓库地址：gin-gonic/gin: Gin is a HTTP web framework written in Go (Golang) (https://github.com/gin-gonic/gin) 官..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-13T05:04:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-13T05:04:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gin\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-13T05:04:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"教程","slug":"教程","link":"#教程","children":[]},{"level":2,"title":"参数解析","slug":"参数解析","link":"#参数解析","children":[{"level":3,"title":"路由参数","slug":"路由参数","link":"#路由参数","children":[]},{"level":3,"title":"URL参数","slug":"url参数","link":"#url参数","children":[]},{"level":3,"title":"表单参数","slug":"表单参数","link":"#表单参数","children":[]}]},{"level":2,"title":"数据解析","slug":"数据解析","link":"#数据解析","children":[{"level":3,"title":"Json数据绑定","slug":"json数据绑定","link":"#json数据绑定","children":[]},{"level":3,"title":"表单数据绑定","slug":"表单数据绑定","link":"#表单数据绑定","children":[]},{"level":3,"title":"URL数据绑定","slug":"url数据绑定","link":"#url数据绑定","children":[]},{"level":3,"title":"多次绑定","slug":"多次绑定","link":"#多次绑定","children":[]}]},{"level":2,"title":"数据校验","slug":"数据校验","link":"#数据校验","children":[{"level":3,"title":"简单示例","slug":"简单示例","link":"#简单示例","children":[]}]},{"level":2,"title":"数据响应","slug":"数据响应","link":"#数据响应","children":[{"level":3,"title":"简单示例","slug":"简单示例-1","link":"#简单示例-1","children":[]},{"level":3,"title":"HTML渲染","slug":"html渲染","link":"#html渲染","children":[]},{"level":3,"title":"快速响应","slug":"快速响应","link":"#快速响应","children":[]},{"level":3,"title":"异步处理","slug":"异步处理","link":"#异步处理","children":[]}]},{"level":2,"title":"文件传输","slug":"文件传输","link":"#文件传输","children":[{"level":3,"title":"单文件上传","slug":"单文件上传","link":"#单文件上传","children":[]},{"level":3,"title":"多文件上传","slug":"多文件上传","link":"#多文件上传","children":[]},{"level":3,"title":"文件下载","slug":"文件下载","link":"#文件下载","children":[]}]},{"level":2,"title":"路由管理","slug":"路由管理","link":"#路由管理","children":[{"level":3,"title":"路由组","slug":"路由组","link":"#路由组","children":[]},{"level":3,"title":"404路由","slug":"_404路由","link":"#_404路由","children":[]},{"level":3,"title":"405路由","slug":"_405路由","link":"#_405路由","children":[]},{"level":3,"title":"重定向","slug":"重定向","link":"#重定向","children":[]}]},{"level":2,"title":"中间件","slug":"中间件","link":"#中间件","children":[{"level":3,"title":"全局中间件","slug":"全局中间件","link":"#全局中间件","children":[]},{"level":3,"title":"局部中间件","slug":"局部中间件","link":"#局部中间件","children":[]},{"level":3,"title":"中间件原理","slug":"中间件原理","link":"#中间件原理","children":[]},{"level":3,"title":"计时器中间件","slug":"计时器中间件","link":"#计时器中间件","children":[]}]},{"level":2,"title":"服务配置","slug":"服务配置","link":"#服务配置","children":[{"level":3,"title":"Http配置","slug":"http配置","link":"#http配置","children":[]},{"level":3,"title":"静态资源配置","slug":"静态资源配置","link":"#静态资源配置","children":[]},{"level":3,"title":"跨域配置","slug":"跨域配置","link":"#跨域配置","children":[]}]},{"level":2,"title":"会话控制","slug":"会话控制","link":"#会话控制","children":[{"level":3,"title":"Cookie","slug":"cookie","link":"#cookie","children":[]},{"level":3,"title":"Session","slug":"session","link":"#session","children":[]},{"level":3,"title":"JWT","slug":"jwt","link":"#jwt","children":[]}]},{"level":2,"title":"日志管理","slug":"日志管理","link":"#日志管理","children":[{"level":3,"title":"控制台颜色","slug":"控制台颜色","link":"#控制台颜色","children":[]},{"level":3,"title":"日志写入文件","slug":"日志写入文件","link":"#日志写入文件","children":[]},{"level":3,"title":"路由调试日志格式","slug":"路由调试日志格式","link":"#路由调试日志格式","children":[]}]}],"git":{"createdTime":1676264655000,"updatedTime":1676264655000,"contributors":[{"name":"246859","email":"2633565580@qq.com","commits":1}]},"readingTime":{"minutes":52.15,"words":7822},"filePathRelative":"语言进阶/实用框架/gin.md","localizedDate":"2023年2月13日","autoDesc":true}');export{l as data};
