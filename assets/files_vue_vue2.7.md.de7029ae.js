import{_ as s,c as n,o as a,a as l}from"./app.c34d342f.js";const d=JSON.parse('{"title":"\u6307\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6307\u4EE4","slug":"\u6307\u4EE4"}],"relativePath":"files/vue/vue2.7.md"}'),p={name:"files/vue/vue2.7.md"},e=l(`<h2 id="\u6307\u4EE4" tabindex="-1">\u6307\u4EE4 <a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u9650\u6D41</span></span>
<span class="line"><span style="color:#A6ACCD;"> * &lt;button v-throttle /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> * &lt;button v-throttle=&quot;500&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const throttle = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    inserted(el, binding) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let throttleTime = binding.value</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!throttleTime) { </span></span>
<span class="line"><span style="color:#A6ACCD;">            throttleTime = 2000</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        el.addEventListener(&#39;click&#39;, e =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            el.classList.add(&#39;disabled&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            el.disabled = true</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                el.disabled = false</span></span>
<span class="line"><span style="color:#A6ACCD;">                el.classList.remove(&#39;disabled&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, throttleTime)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6309\u94AE\u70B9\u51FB\u6001\uFF08\u7F29\u653E\u4E00\u4E0B\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"> * &lt;button v-click-scale /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> * &lt;button v-click-scale=&quot;0.85&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const clickScale = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    inserted(el, binding) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let scale = binding.value</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!scale) { </span></span>
<span class="line"><span style="color:#A6ACCD;">            scale = 0.95</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.addEventListener(&#39;click&#39;, e =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            el.style.transform = \`scale(\${scale})\`</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                el.style.transform = &#39;scale(1)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, 100)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throttle,</span></span>
<span class="line"><span style="color:#A6ACCD;">    clickScale</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),t=[e];function c(o,i,A,C,r,y){return a(),n("div",null,t)}var _=s(p,[["render",c]]);export{d as __pageData,_ as default};
