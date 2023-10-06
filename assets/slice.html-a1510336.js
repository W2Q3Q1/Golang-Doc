const e=JSON.parse('{"key":"v-ec6ef644","path":"/%E8%AF%AD%E8%A8%80%E8%BF%9B%E9%98%B6/%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/slice.html","title":"slice","lang":"zh-CN","frontmatter":{"description":"阅读本文需要unsafe标准库的知识。 在了解切片的结构之前，通过几个案例来引入问题，通常会认为数组是值类型，切片是引用类型，或者说切片本身可以看作一个指针，指针指向的正是底层数组。 前者是切片指针的地址，后者是切片底层数组的地址。 官方文档中有说明使用append函数给切片添加元素时，当切片容量不足时，会创建一个新的底层数组。 println(sli...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/%E8%AF%AD%E8%A8%80%E8%BF%9B%E9%98%B6/%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/slice.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"slice"}],["meta",{"property":"og:description","content":"阅读本文需要unsafe标准库的知识。 在了解切片的结构之前，通过几个案例来引入问题，通常会认为数组是值类型，切片是引用类型，或者说切片本身可以看作一个指针，指针指向的正是底层数组。 前者是切片指针的地址，后者是切片底层数组的地址。 官方文档中有说明使用append函数给切片添加元素时，当切片容量不足时，会创建一个新的底层数组。 println(sli..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-06T02:52:12.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-06T02:52:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"slice\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-06T02:52:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]},{"level":2,"title":"创建","slug":"创建","link":"#创建","children":[{"level":3,"title":"make","slug":"make","link":"#make","children":[]},{"level":3,"title":"字面量","slug":"字面量","link":"#字面量","children":[]},{"level":3,"title":"切片表达式","slug":"切片表达式","link":"#切片表达式","children":[]}]},{"level":2,"title":"访问","slug":"访问","link":"#访问","children":[{"level":3,"title":"下标访问","slug":"下标访问","link":"#下标访问","children":[]},{"level":3,"title":"长度容量","slug":"长度容量","link":"#长度容量","children":[]}]},{"level":2,"title":"添加","slug":"添加","link":"#添加","children":[]},{"level":2,"title":"扩容","slug":"扩容","link":"#扩容","children":[]},{"level":2,"title":"拷贝","slug":"拷贝","link":"#拷贝","children":[]}],"git":{"createdTime":1676264655000,"updatedTime":1696560732000,"contributors":[{"name":"246859","email":"2633565580@qq.com","commits":2}]},"readingTime":{"minutes":28.19,"words":4229},"filePathRelative":"语言进阶/原理解析/slice.md","localizedDate":"2023年2月13日","autoDesc":true}');export{e as data};
