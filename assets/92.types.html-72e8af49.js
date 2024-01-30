import{_ as t,V as p,W as o,X as n,Y as s,Z as i,a0 as a,F as c}from"./framework-f06be456.js";const l={},u=a(`<h1 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h1><p>在之前的数据类型的小节中已经简单了介绍过了Go中的所有内置的数据类型，这些内置的基础类型，是后续自定义类型的基础。Go是一个典型的静态类型语言，所有变量的类型都会在编译期确定好，并且在整个程序的生命周期都不会再改变，这一小节会简单的介绍下Go的类型系统和基本使用。</p><br><h2 id="静态强类型" tabindex="-1"><a class="header-anchor" href="#静态强类型" aria-hidden="true">#</a> 静态强类型</h2><p>Go是一个静态强类型语言，静态指的是Go所有变量的类型早在编译期间就已经确定了，在程序的生命周期都不会再发生改变，尽管Go中的短变量声明有点类似动态语言的写法，但其变量类型是由编译器自行推断的，最根本的区别在于它的类型一旦推断出来后不会再发生变化，动态语言则完全相反。所以下面的代码完全无法通过编译，因为a是<code>int</code>类型的变量，不能赋值字符串。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">64</span>
	a <span class="token operator">=</span> <span class="token string">&quot;64&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// cannot use &quot;64&quot; (untyped string constant) as int value in assignment</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>强类型则指的是在程序中执行严格的类型检查，如果出现类型不匹配的情况时，会立即告诉程序员不应该这么做，而不是像动态语言一样去尝试推断可能的结果。所以下面的代码无法通过编译，因为两者类型不同，无法进行运算。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token comment">// invalid operation: 1 + &quot;1&quot; (mismatched types untyped int and untyped string)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="类型后置" tabindex="-1"><a class="header-anchor" href="#类型后置" aria-hidden="true">#</a> 类型后置</h2><p>Go为什么要把类型声明放在后面而不是前面，很大程度上是从C语言吸取了教训，拿官方的一个例子展示效果，这是一个函数指针</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说实话不认真看很难知道这是一个什么类型，在Go中类似的写法如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Go的声明方式始终遵循名字在前面，类型在后面的原则，从左往右读，大概第一眼就可以知道这是一个函数，且返回值为<code>func(int,int) int</code>。当类型变得越来越复杂时，类型后置在可读性上要好得多，Go在许多层面的设计都是为了可读性而服务的。</p><br><h2 id="类型声明" tabindex="-1"><a class="header-anchor" href="#类型声明" aria-hidden="true">#</a> 类型声明</h2><p>在Go中通过类型声明，可以声明一个自定义名称的新类型，声明一个新类型通常需要一个类型名称以及一个基础类型，简单的例子如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MyInt <span class="token builtin">int64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述类型声明中，通过<code>type</code>关键字声明了一个基础类型为<code>int64</code>名为<code>MyInt</code>的类型。在Go中，每一个新声明的类型都必须有一个与之对应的基础类型，且类型名称不建议与已有的内置标识符重复。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MyInt <span class="token builtin">int64</span>

<span class="token keyword">type</span> MyFloat64 <span class="token builtin">float64</span>

<span class="token keyword">type</span> MyMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token comment">// 可以通过编译，但是不建议使用，这会覆盖原有的类型</span>
<span class="token keyword">type</span> <span class="token builtin">int</span> <span class="token builtin">int64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过类型声明的类型都是新类型，不同的类型无法进行运算，即便基础类型是相同的。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MyFloat64 <span class="token builtin">float64</span>

<span class="token keyword">var</span> f1 MyFloat64
<span class="token keyword">var</span> f <span class="token builtin">float64</span>
f1 <span class="token operator">=</span> <span class="token number">0.2</span>
f <span class="token operator">=</span> <span class="token number">0.1</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f1 <span class="token operator">+</span> f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>invalid operation<span class="token punctuation">:</span> f1 <span class="token operator">+</span> f <span class="token punctuation">(</span>mismatched types MyFloat64 and <span class="token builtin">float64</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2><p>类型别名与类型声明则不同，类型别名仅仅只是一个别名，并不是创建了一个新的类型，简单的例子如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Int <span class="token operator">=</span> <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>两者是都是同一个类型，仅仅叫的名字不同，所以也就可以进行运算，所以下例自然也就可以通过编译。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Int <span class="token operator">=</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> a Int <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">2</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p>类型别名对于一些特别复杂的类型有很大的用处，例如现在有一个类型<code>map[string]map[string]int</code>，这是一个二维map，现有一个函数参数是<code>map[string]map[string]int</code>类型，如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">PrintMyMap</span><span class="token punctuation">(</span>mymap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>mymap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下，就没有必要使用类型声明了，因为前者是声明了一个新的类型，无法作为该函数的参数，使用类型别名后的例子如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TwoDMap <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">PrintMyMap</span><span class="token punctuation">(</span>mymap TwoDMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>mymap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用类型别名后看起来会简洁一些。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>内置类型<code>any</code>就是<code>interface{}</code>的类型别名，两者完全等价，仅仅叫法不一样。</p></div><br><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2><p>在Go中，只存在显式的类型转换，<strong>不存在隐式类型转换</strong>，因此不同类型的变量无法进行运算，无法作为参数传递。类型转换适用的前提是知晓被转换变量的类型和要转换成的目标类型，例子如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MyFloat64 <span class="token builtin">float64</span>

<span class="token keyword">var</span> f1 MyFloat64
<span class="token keyword">var</span> f <span class="token builtin">float64</span>
f1 <span class="token operator">=</span> <span class="token number">0.2</span>
f <span class="token operator">=</span> <span class="token number">0.1</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span> <span class="token operator">+</span> f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.30000000000000004
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过显式的将<code>MyFloat64</code> 转换为<code>float64</code>类型，才能进行加法运算。类型转换的另一个前提是：被转换类型必须是可以被目标类型代表的（Representability），例如<code>int</code>可以被<code>int64</code>类型所代表，也可以被<code>float64</code>类型代表，所以它们之间可以进行显式的类型转换，但是<code>int</code>类型无法被<code>string</code>和<code>bool</code>类型代表，因为也就无法进行类型转换。</p>`,44),d={class:"hint-container tip"},r=n("p",{class:"hint-container-title"},"提示",-1),k={href:"https://go.dev/ref/spec#Representability",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>即便两个类型可以相互代表，类型转换的结果也不总是正确的，看下面的一个例子：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> num1 <span class="token builtin">int8</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> num2 <span class="token builtin">int32</span> <span class="token operator">=</span> <span class="token number">512</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">int32</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">int8</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>num1</code>被正确的转换为了<code>int32</code>类型，但是<code>num2</code>并没有。这是一个典型的数值溢出问题，<code>int32</code>能够表示31位整数，<code>int8</code>只能表示7位整数，高精度整数在向低精度整数转换时会抛弃高位保留低位，因此<code>num1</code>的转换结果就是0。在数字的类型转换中，通常建议小转大，而不建议大转小。</p><br><p>在使用类型转换时，对于一些类型需要避免歧义，例子如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">*</span><span class="token function">Point</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// 等价于 *(Point(p))</span>
<span class="token punctuation">(</span><span class="token operator">*</span>Point<span class="token punctuation">)</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>  <span class="token comment">// 将p转换为类型 *Point</span>
<span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token function">int</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>    <span class="token comment">// 等价于 &lt;-(chan int(c))</span>
<span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment">// 将c转换为类型  &lt;-chan int</span>
<span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>      <span class="token comment">// 将x转换为类型 func()</span>
<span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment">// 将x转换为类型 func() int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h2><p>类型断言通常用于判断某一接口类型的变量是否属于某一个类型，示例如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> b
<span class="token keyword">if</span> intVal<span class="token punctuation">,</span> ok <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intVal<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;error type&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于<code>interface{}</code>是空接口类型，空接口类型可以代表所有的类型，但是<code>int</code>类型无法代表<code>interface{}</code>类型，所以无法使用类型转换。而类型断言就可以判断其底层类型是否为想要的类型，类型断言语句有两个返回值，一个是类型转换过后的值，另一个是转换结果的布尔值。</p><h2 id="类型判断" tabindex="-1"><a class="header-anchor" href="#类型判断" aria-hidden="true">#</a> 类型判断</h2><p>在Go中，<code>switch</code>语句还支持一种特殊的写法，通过这种写法可以根据不同的<code>case</code>做出不同的逻辑处理，使用的前提是入参必须是接口类型，示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">switch</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;float&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过<code>unsafe</code>包下提供的操作，可以绕过Go的类型系统，就可以做到原本无法通过编译的类型转换操作。</p></div>`,18);function m(b,g){const e=c("ExternalLinkIcon");return p(),o("div",null,[u,n("div",d,[r,n("p",null,[s("关于代表（Representabilitsy）的定义可以前往"),n("a",k,[s("参考手册 - Representability"),i(e)]),s("以了解更多细节。")])]),v])}const y=t(l,[["render",m],["__file","92.types.html.vue"]]);export{y as default};