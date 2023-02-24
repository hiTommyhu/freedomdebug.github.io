import{_ as s,c as a,o as e,a as n}from"./app.834c9cf3.js";const v=JSON.parse('{"title":"vuecli5\u6253\u5F00\u7684\u662F0.0.0.0:8080\u89E3\u51B3","description":"","frontmatter":{},"headers":[],"relativePath":"files/vue/vue2.md"}'),p={name:"files/vue/vue2.md"},l=n(`<h1 id="vuecli5\u6253\u5F00\u7684\u662F0-0-0-0-8080\u89E3\u51B3" tabindex="-1">vuecli5\u6253\u5F00\u7684\u662F0.0.0.0:8080\u89E3\u51B3 <a class="header-anchor" href="#vuecli5\u6253\u5F00\u7684\u662F0-0-0-0-8080\u89E3\u51B3" aria-hidden="true">#</a></h1><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add ip -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>vue.config.js</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      host: require(&#39;ip&#39;).address(),</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>package.json</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;dev&quot;: &quot;yarn serve --port 8080 --open&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;serve&quot;: &quot;vue-cli-service serve&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),o=[l];function c(t,r,i,d,u,A){return e(),a("div",null,o)}var _=s(p,[["render",c]]);export{v as __pageData,_ as default};
