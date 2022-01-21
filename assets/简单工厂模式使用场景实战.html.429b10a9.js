import{d as n}from"./app.490c4567.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},l=n(`<p>\u5C0F\u77E5\u8BC6\uFF0C\u5927\u6311\u6218\uFF01\u672C\u6587\u6B63\u5728\u53C2\u4E0E\u201C\u7A0B\u5E8F\u5458\u5FC5\u5907\u5C0F\u77E5\u8BC6\u201D\u521B\u4F5C\u6D3B\u52A8 \u4E0A\u6587\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u5DE5\u5382\u6A21\u5F0F\u7684\u6982\u5FF5\uFF0C\u672C\u7BC7\u5C06\u7ED3\u5408\u5DE5\u5382\u6A21\u5F0F\u8FDB\u884C\u6848\u4F8B\u5B9E\u6218 \u524D\u7AEF\u5F00\u53D1\u8005\u5BF9\u4E8EJQ\u80AF\u5B9A\u662F\u975E\u5E38\u719F\u6089\u7684\uFF0C\u63A5\u4E0B\u6765\u4FBF\u901A\u8FC7JQ\u7684\u7B80\u5355\u5B9E\u73B0\u8BB2\u89E3\u5DE5\u5382\u6A21\u5F0F \u9996\u5148\u51C6\u5907html\u548Ccss HTML: \u7B80\u5355\u7684\u4E00\u4E2A\u65E0\u5E8F\u5217\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul&gt;
  &lt;li&gt;11&lt;/li&gt;
  &lt;li&gt;22&lt;/li&gt;
  &lt;li&gt;33&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>CSS\uFF1A\u4EC5\u4EC5\u5199\u4E86\u4E00\u4E2A\u6837\u5F0F\u7C7B\uFF0C\u4FBF\u4E8E\u63A5\u4E0B\u6765\u64CD\u4F5C\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.red {
  color: red;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u73B0\u5728\u6709\u4E2A\u9700\u6C42\uFF0C\u9700\u8981\u5C06li\u7684\u5185\u5BB9\u53D8\u4E3A\u7EA2\u8272 \u7B80\u5355\u7C97\u66B4\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const elements = document.querySelectorAll(&#39;li&#39;)
for (let i = 0; i &lt; elements.length; i++) {
  elements[i].classList.add(&#39;red&#39;)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6B64\u65F6\u5DF2\u7ECF\u6EE1\u8DB3\u8981\u6C42\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u9700\u6C42\u53D8\u66F4\uFF0C\u9700\u8981\u5C06\u9875\u9762\u4E2DP\u7684\u6807\u7B7E\u5185\u5BB9\u90FD\u53D8\u4E3A\u7EFF\u8272\uFF0C\u4E0A\u8FF0\u5B9E\u73B0\u4EE3\u7801\u4EC5\u9700\u8981\u4FEE\u6539\u4E24\u5904\u4FBF\u53EF\u4EE5\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-- const elements = document.querySelectorAll(&#39;li&#39;)
++ const elements = document.querySelectorAll(&#39;p&#39;)
for (let i = 0; i &lt; elements.length; i++) {
--  elements[i].classList.add(&#39;red&#39;)
++  elements[i].classList.add(&#39;green&#39;)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6B64\u65F6\u6700\u7B80\u5355\u7684\u4F18\u5316\u4FBF\u662F\u5C06\u4EE3\u7801\u62BD\u79BB\u4E3A\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const addClassByEle = (selectr, className) =&gt; {
  const elements = document.querySelectorAll(selectr)
  for (let i = 0; i &lt; elements.length; i++) {
    elements[i].classList.add(className)
  }
}

addClassByEle(&#39;li&#39;, &#39;red&#39;);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6B64\u65F6\u5DF2\u7ECF\u6EE1\u8DB3\u529F\u80FD\u9700\u6C42\u548C\u51FD\u6570\u7684\u62BD\u79BB\uFF0C\u4F46\u662F\u4E00\u4E2A\u51FD\u6570\u505A\u4E86\u592A\u591A\u7684\u4E8B\u60C5\uFF0C\u8DDD\u79BB\u6211\u4EEC\u7684\u76EE\u6807\u8FD8\u6709\u4E00\u4E9B\u8DDD\u79BB \u63A5\u4E0B\u6765\u770B\u4E00\u770B\uFF0C\u901A\u8FC7\u5DE5\u5382\u6A21\u5F0F\u8FDB\u884C\u5C01\u88C5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class JQuery {
    constructor(selector) {
        this.selector = selector;
        const elements = document.querySelectorAll(selector);
        this.length = elements.length;

        for (let i = 0; i &lt; elements.length; i++) {
            this[i] = elements[i];
        }
    }

    addClass(className) {
        for (let i = 0; i &lt; this.length; i++) {
            this[i].classList.add(className);
        }
    }
}

/** 
 * \u5DE5\u5382\u51FD\u6570
*/
window.$ = function (selector) {
    return new JQuery(selector);
};

window.onload = () =&gt; {
    const elements = $(&quot;li&quot;);
    elements.addClass(&quot;red&quot;);
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u901A\u8FC7\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C$\u51FD\u6570\u5373\u4E3A\u4E00\u4E2A\u5DE5\u5382\u6A21\u5F0F\uFF0C\u6211\u4EEC\u8C03\u7528\u5176\u4FBF\u53EF\u4EE5\u521B\u5EFA\u6211\u4EEC\u9700\u8981\u7684\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u4E0D\u9700\u8981\u5173\u5FC3\u5177\u4F53\u7684\u5B9E\u73B0\uFF0CaddClass\u8D1F\u8D23\u804C\u8D23\u5355\u4E00\u539F\u5219\uFF0C\u6574\u4E2AJQuery\u5BF9\u6269\u5C55\u662F\u5B8C\u5168\u5F00\u653E\u7684\uFF0C\u540C\u65F6\u4E5F\u5E76\u6CA1\u6709\u63D0\u4F9B\u4FEE\u6539\u5185\u90E8\u7684\u65B9\u6CD5\uFF0C\u7B26\u5408\u5F00\u653E\u5C01\u95ED\u539F\u5219</p><p>\u4F5C\u8005\uFF1ANordon \u94FE\u63A5\uFF1Ahttps://juejin.cn/post/7015836971041816606 \u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>`,14);function a(r,t){return l}var c=s(e,[["render",a]]);export{c as default};
