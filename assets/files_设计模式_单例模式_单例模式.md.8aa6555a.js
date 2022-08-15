import{_ as s,c as n,o as a,a as l}from"./app.63967ee8.js";var p="/assets/1.991d001d.webp";const u=JSON.parse('{"title":"\u542B\u4E49","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u542B\u4E49","slug":"\u542B\u4E49"},{"level":2,"title":"\u5E94\u7528\u573A\u666F","slug":"\u5E94\u7528\u573A\u666F"},{"level":3,"title":"vuex","slug":"vuex"},{"level":3,"title":"Message\u7EC4\u4EF6","slug":"message\u7EC4\u4EF6"}],"relativePath":"files/\u8BBE\u8BA1\u6A21\u5F0F/\u5355\u4F8B\u6A21\u5F0F/\u5355\u4F8B\u6A21\u5F0F.md"}'),e={name:"files/\u8BBE\u8BA1\u6A21\u5F0F/\u5355\u4F8B\u6A21\u5F0F/\u5355\u4F8B\u6A21\u5F0F.md"},o=l('<h2 id="\u542B\u4E49" tabindex="-1">\u542B\u4E49 <a class="header-anchor" href="#\u542B\u4E49" aria-hidden="true">#</a></h2><p>\u5355\u4F8B\u6A21\u5F0F\u5728\u524D\u7AEF\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u975E\u5E38\u5E38\u89C1\uFF0C\u901A\u4FD7\u6765\u8BF4\u5C31\u662F\u67D0\u4E2A\u7C7B\u53EA\u80FD\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u53EA\u80FD\u5B9E\u4F8B\u5316\u4E00\u6B21\uFF0C\u4E4B\u540E\u6240\u6709\u5B9E\u4F8B\u5316\u7684\u64CD\u4F5C\u90FD\u662F\u8FD4\u56DE\u4E4B\u524D\u5DF2\u7ECF\u5B9E\u4F8B\u5316\u7684\u5B9E\u4F8B</p><img src="'+p+`"><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1">\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><h3 id="vuex" tabindex="-1">vuex <a class="header-anchor" href="#vuex" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (!Vue &amp;&amp; typeof window !== &#39;undefined&#39; &amp;&amp; window.Vue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  install(window.Vue)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function install (_Vue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (Vue &amp;&amp; _Vue === Vue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.error(&#39;[vuex] already installed. Vue.use(Vuex) should be called only once.&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Vue = _Vue</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="message\u7EC4\u4EF6" tabindex="-1">Message\u7EC4\u4EF6 <a class="header-anchor" href="#message\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>main.vue</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div v-show=&quot;visible&quot;&gt;message\u7EC4\u4EF6&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            visible: false</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        close() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.visible = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        show() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.visible = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>main.js</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import Vue from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Main from &quot;./main.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let MessageConstructor = Vue.extend(Main);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Message {</span></span>
<span class="line"><span style="color:#A6ACCD;">    /** </span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u5C55\u793A message\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    show() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.instance.show()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /** </span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u5173\u95ED message\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    close() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.instance.close()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">    /** </span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u5355\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    static getInstance() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(!this.instance) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let instance = new MessageConstructor();</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.instance = instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">            instance.$mount();</span></span>
<span class="line"><span style="color:#A6ACCD;">            document.body.appendChild(instance.$el);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.instance</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Message.getInstance().show();</span></span>
<span class="line"><span style="color:#A6ACCD;">Message.getInstance().close();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),c=[o];function t(i,C,A,r,y,D){return a(),n("div",null,c)}var h=s(e,[["render",t]]);export{u as __pageData,h as default};
