import{_ as s,c as a,o as e,a as n}from"./app.834c9cf3.js";const C=JSON.parse('{"title":"vuecli5\u6253\u5F00\u7684\u662F0.0.0.0:8080\u89E3\u51B3","description":"","frontmatter":{},"headers":[{"level":2,"title":"vuecli5\u6253\u5F00\u7684\u662F0.0.0.0:8080\u89E3\u51B3","slug":"vuecli5\u6253\u5F00\u7684\u662F0-0-0-0-8080\u89E3\u51B3"},{"level":2,"title":"v-html\u6837\u5F0F\u4E22\u5931","slug":"v-html\u6837\u5F0F\u4E22\u5931"}],"relativePath":"files/vue/vue2.md"}'),l={name:"files/vue/vue2.md"},p=n(`<h2 id="vuecli5\u6253\u5F00\u7684\u662F0-0-0-0-8080\u89E3\u51B3" tabindex="-1">vuecli5\u6253\u5F00\u7684\u662F0.0.0.0:8080\u89E3\u51B3 <a class="header-anchor" href="#vuecli5\u6253\u5F00\u7684\u662F0-0-0-0-8080\u89E3\u51B3" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add ip -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>vue.config.js</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      host: require(&#39;ip&#39;).address(),</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>package.json</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;dev&quot;: &quot;yarn serve --port 8080 --open&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;serve&quot;: &quot;vue-cli-service serve&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="v-html\u6837\u5F0F\u4E22\u5931" tabindex="-1">v-html\u6837\u5F0F\u4E22\u5931 <a class="header-anchor" href="#v-html\u6837\u5F0F\u4E22\u5931" aria-hidden="true">#</a></h2><ul><li>\u4F7F\u7528\u5168\u5C40\u6837\u5F0F\uFF0C\u6CE8\u610F\u6837\u5F0F\u6C61\u67D3</li><li>\u4F7F\u7528/deep/ .class {}</li></ul>`,8),c=[p];function o(t,r,i,d,u,v){return e(),a("div",null,c)}var _=s(l,[["render",o]]);export{C as __pageData,_ as default};
