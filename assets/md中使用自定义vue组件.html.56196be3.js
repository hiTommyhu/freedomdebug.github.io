import{r as a,o as e,c as p,d as t,F as o,b as s,e as r,a as l}from"./app.9494965f.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=s("h1",{id:"md\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49vue\u7EC4\u4EF6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#md\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49vue\u7EC4\u4EF6","aria-hidden":"true"},"#"),r(" md\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49vue\u7EC4\u4EF6")],-1),b=s("p",null,"Preview",-1),m=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @vuepress/plugin-register-components@2.0.0-beta.23
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>//.vuepress/components/MyTemplate.vue</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>MyTemplate<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
 
 <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 
 <span class="token punctuation">}</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
 
 <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
 
 <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>.vuepress/components</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>const <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>
module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    plugins: <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
          <span class="token string">&#39;@vuepress/plugin-register-components&#39;</span>,
            <span class="token punctuation">{</span>
                componentsDir: path.resolve<span class="token punctuation">(</span>__dirname, <span class="token string">&#39;./components&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,5);function d(k,g){const n=a("MyTemplate");return e(),p(o,null,[i,b,t(n),m],64)}var h=c(u,[["render",d]]);export{h as default};
