import{_ as s,c as n,o as a,a as l}from"./app.4adcf08f.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"files/\u8BBE\u8BA1\u6A21\u5F0F/\u5DE5\u5382\u6A21\u5F0F/imgs/\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u4F7F\u7528\u573A\u666F\u5B9E\u6218.md"}'),e={name:"files/\u8BBE\u8BA1\u6A21\u5F0F/\u5DE5\u5382\u6A21\u5F0F/imgs/\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u4F7F\u7528\u573A\u666F\u5B9E\u6218.md"},p=l(`<p>\u5C0F\u77E5\u8BC6\uFF0C\u5927\u6311\u6218\uFF01\u672C\u6587\u6B63\u5728\u53C2\u4E0E\u201C\u7A0B\u5E8F\u5458\u5FC5\u5907\u5C0F\u77E5\u8BC6\u201D\u521B\u4F5C\u6D3B\u52A8 \u4E0A\u6587\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u5DE5\u5382\u6A21\u5F0F\u7684\u6982\u5FF5\uFF0C\u672C\u7BC7\u5C06\u7ED3\u5408\u5DE5\u5382\u6A21\u5F0F\u8FDB\u884C\u6848\u4F8B\u5B9E\u6218 \u524D\u7AEF\u5F00\u53D1\u8005\u5BF9\u4E8EJQ\u80AF\u5B9A\u662F\u975E\u5E38\u719F\u6089\u7684\uFF0C\u63A5\u4E0B\u6765\u4FBF\u901A\u8FC7JQ\u7684\u7B80\u5355\u5B9E\u73B0\u8BB2\u89E3\u5DE5\u5382\u6A21\u5F0F \u9996\u5148\u51C6\u5907html\u548Ccss HTML: \u7B80\u5355\u7684\u4E00\u4E2A\u65E0\u5E8F\u5217\u8868</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;li&gt;11&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;li&gt;22&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;li&gt;33&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>CSS\uFF1A\u4EC5\u4EC5\u5199\u4E86\u4E00\u4E2A\u6837\u5F0F\u7C7B\uFF0C\u4FBF\u4E8E\u63A5\u4E0B\u6765\u64CD\u4F5C\u4F7F\u7528</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.red {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u73B0\u5728\u6709\u4E2A\u9700\u6C42\uFF0C\u9700\u8981\u5C06li\u7684\u5185\u5BB9\u53D8\u4E3A\u7EA2\u8272 \u7B80\u5355\u7C97\u66B4\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const elements = document.querySelectorAll(&#39;li&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i = 0; i &lt; elements.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  elements[i].classList.add(&#39;red&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u5DF2\u7ECF\u6EE1\u8DB3\u8981\u6C42\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u9700\u6C42\u53D8\u66F4\uFF0C\u9700\u8981\u5C06\u9875\u9762\u4E2DP\u7684\u6807\u7B7E\u5185\u5BB9\u90FD\u53D8\u4E3A\u7EFF\u8272\uFF0C\u4E0A\u8FF0\u5B9E\u73B0\u4EE3\u7801\u4EC5\u9700\u8981\u4FEE\u6539\u4E24\u5904\u4FBF\u53EF\u4EE5\u5B9E\u73B0</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">-- const elements = document.querySelectorAll(&#39;li&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">++ const elements = document.querySelectorAll(&#39;p&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i = 0; i &lt; elements.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">--  elements[i].classList.add(&#39;red&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">++  elements[i].classList.add(&#39;green&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u6700\u7B80\u5355\u7684\u4F18\u5316\u4FBF\u662F\u5C06\u4EE3\u7801\u62BD\u79BB\u4E3A\u51FD\u6570</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const addClassByEle = (selectr, className) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const elements = document.querySelectorAll(selectr)</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; elements.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    elements[i].classList.add(className)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">addClassByEle(&#39;li&#39;, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u5DF2\u7ECF\u6EE1\u8DB3\u529F\u80FD\u9700\u6C42\u548C\u51FD\u6570\u7684\u62BD\u79BB\uFF0C\u4F46\u662F\u4E00\u4E2A\u51FD\u6570\u505A\u4E86\u592A\u591A\u7684\u4E8B\u60C5\uFF0C\u8DDD\u79BB\u6211\u4EEC\u7684\u76EE\u6807\u8FD8\u6709\u4E00\u4E9B\u8DDD\u79BB \u63A5\u4E0B\u6765\u770B\u4E00\u770B\uFF0C\u901A\u8FC7\u5DE5\u5382\u6A21\u5F0F\u8FDB\u884C\u5C01\u88C5\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class JQuery {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(selector) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.selector = selector;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const elements = document.querySelectorAll(selector);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length = elements.length;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; elements.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this[i] = elements[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    addClass(className) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this[i].classList.add(className);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** </span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u5DE5\u5382\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;">window.$ = function (selector) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new JQuery(selector);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">window.onload = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const elements = $(&quot;li&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    elements.addClass(&quot;red&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C$\u51FD\u6570\u5373\u4E3A\u4E00\u4E2A\u5DE5\u5382\u6A21\u5F0F\uFF0C\u6211\u4EEC\u8C03\u7528\u5176\u4FBF\u53EF\u4EE5\u521B\u5EFA\u6211\u4EEC\u9700\u8981\u7684\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u4E0D\u9700\u8981\u5173\u5FC3\u5177\u4F53\u7684\u5B9E\u73B0\uFF0CaddClass\u8D1F\u8D23\u804C\u8D23\u5355\u4E00\u539F\u5219\uFF0C\u6574\u4E2AJQuery\u5BF9\u6269\u5C55\u662F\u5B8C\u5168\u5F00\u653E\u7684\uFF0C\u540C\u65F6\u4E5F\u5E76\u6CA1\u6709\u63D0\u4F9B\u4FEE\u6539\u5185\u90E8\u7684\u65B9\u6CD5\uFF0C\u7B26\u5408\u5F00\u653E\u5C01\u95ED\u539F\u5219</p><p>\u4F5C\u8005\uFF1ANordon \u94FE\u63A5\uFF1A<a href="https://juejin.cn/post/7015836971041816606" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7015836971041816606</a> \u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>`,14),c=[p];function o(t,r,i,A,C,y){return a(),n("div",null,c)}var _=s(e,[["render",o]]);export{D as __pageData,_ as default};
