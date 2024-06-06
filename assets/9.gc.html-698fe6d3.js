const e=JSON.parse('{"key":"v-2b72c473","path":"/essential/impl/9.gc.html","title":"垃圾回收","lang":"zh-CN","frontmatter":{"description":"垃圾回收要干的事就是将不再使用的对象内存释放，腾出空间给其它对象使用。就这么简单的一句描述但它实现起来却非常不简单，垃圾回收的发展历史已经有了几十年，最早在上世纪60年代的Lisp语言就首次采用了垃圾回收机制，我们所熟知的Python，Objective-C，其主要的GC机制就是引用计数，Java，C#采用的是分代回收。早期Go的垃圾回收机制十分的简陋...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/essential/impl/9.gc.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"垃圾回收"}],["meta",{"property":"og:description","content":"垃圾回收要干的事就是将不再使用的对象内存释放，腾出空间给其它对象使用。就这么简单的一句描述但它实现起来却非常不简单，垃圾回收的发展历史已经有了几十年，最早在上世纪60年代的Lisp语言就首次采用了垃圾回收机制，我们所熟知的Python，Objective-C，其主要的GC机制就是引用计数，Java，C#采用的是分代回收。早期Go的垃圾回收机制十分的简陋..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-06T15:25:05.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-06T15:25:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾回收\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-06T15:25:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"标记","slug":"标记","link":"#标记","children":[{"level":3,"title":"标记-清除","slug":"标记-清除","link":"#标记-清除","children":[]},{"level":3,"title":"三色标记","slug":"三色标记","link":"#三色标记","children":[]},{"level":3,"title":"不变性","slug":"不变性","link":"#不变性","children":[]}]},{"level":2,"title":"屏障","slug":"屏障","link":"#屏障","children":[{"level":3,"title":"插入写屏障","slug":"插入写屏障","link":"#插入写屏障","children":[]},{"level":3,"title":"删除写屏障","slug":"删除写屏障","link":"#删除写屏障","children":[]},{"level":3,"title":"混合写屏障","slug":"混合写屏障","link":"#混合写屏障","children":[]},{"level":3,"title":"着色缓存","slug":"着色缓存","link":"#着色缓存","children":[]}]},{"level":2,"title":"回收","slug":"回收","link":"#回收","children":[]}],"git":{"createdTime":1706620150000,"updatedTime":1717687505000,"contributors":[{"name":"246859","email":"2633565580@qq.com","commits":1},{"name":"yihhao wang","email":"2633565580@qq.com","commits":1}]},"readingTime":{"minutes":26.63,"words":3995},"filePathRelative":"essential/impl/9.gc.md","localizedDate":"2024年1月30日","autoDesc":true}');export{e as data};
