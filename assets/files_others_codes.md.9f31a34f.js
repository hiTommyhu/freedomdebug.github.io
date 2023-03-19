import{_ as s,c as n,o as a,a as e}from"./app.01954d48.js";const D=JSON.parse('{"title":"\u4EE3\u7801\u788E\u7247","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom","slug":"vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom"},{"level":3,"title":"vue3","slug":"vue3"},{"level":3,"title":"vue2","slug":"vue2"},{"level":2,"title":"other","slug":"other"},{"level":2,"title":"\u590D\u5236\u4E00\u4E2A\u6570\u7EC4","slug":"\u590D\u5236\u4E00\u4E2A\u6570\u7EC4"}],"relativePath":"files/others/codes.md"}'),l={name:"files/others/codes.md"},p=e(`<h1 id="\u4EE3\u7801\u788E\u7247" tabindex="-1">\u4EE3\u7801\u788E\u7247 <a class="header-anchor" href="#\u4EE3\u7801\u788E\u7247" aria-hidden="true">#</a></h1><ul><li><a href="https://github.com/freedomdebug/praise-animation" target="_blank" rel="noopener noreferrer">\u76F4\u64AD\u70B9\u8D5Ecss\u548Ccanvas\u5B9E\u73B0https://github.com/freedomdebug/praise-animation</a></li></ul><h2 id="vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom" tabindex="-1">vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom <a class="header-anchor" href="#vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom" aria-hidden="true">#</a></h2><h3 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">let sidebarShow: any;</span></span>
<span class="line"><span style="color:#A6ACCD;">const createDialog = async (visible: boolean, data?: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const HelloWorld = (await import(&quot;../components/Sidebar.vue&quot;)).default;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let app = createApp(</span></span>
<span class="line"><span style="color:#A6ACCD;">    h(HelloWorld, {</span></span>
<span class="line"><span style="color:#A6ACCD;">      visible,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data,</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!sidebarShow) sidebarShow = app;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (visible) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sidebarShow.mount(&quot;.hahaah&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sidebarShow.unmount();</span></span>
<span class="line"><span style="color:#A6ACCD;">    sidebarShow = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6302\u8F7Dvue\u7EC4\u4EF6\u5230\u6307\u5B9A\u7684target dom</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {*} component \u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {*} options \u7EC4\u4EF6\u5C5E\u6027\uFF08\u5F53\u524D\u652F\u6301 propsData \u5BF9\u5E94component.props\uFF0C listeners\u5BF9\u5E94component\u7684\u4E8B\u4EF6@Event\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {*} target \u76EE\u6807dom</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @returns</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">function ComponentMount(component, options, target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!target) target = document.body</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { propsData, listeners} = options</span></span>
<span class="line"><span style="color:#A6ACCD;">    const instance = new (Vue.extend(component))({</span></span>
<span class="line"><span style="color:#A6ACCD;">        propsData: propsData || {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.$mount()</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.keys(listeners || {}).forEach(eventKey =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        instance.$on(eventKey, (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (typeof listeners[eventKey] === &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                listeners[eventKey]()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    target.appendChild(instance.$el)</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.remove = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        target.removeChild(instance.$el)</span></span>
<span class="line"><span style="color:#A6ACCD;">        instance.$destroy()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return instance</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default ComponentMount</span></span>
<span class="line"><span style="color:#A6ACCD;">export {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ComponentMount</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>use</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import dialog from &#39;./components/dialog.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">this.dialogInstance = new ComponentMount(</span></span>
<span class="line"><span style="color:#A6ACCD;">    dialog,</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        propsData: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            value: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            user: this.user,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        listeners: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            success: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.handleDialogSuccess()</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            input: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.showDialog = false</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.dialogInstance.remove()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="other" tabindex="-1">other <a class="header-anchor" href="#other" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u83B7\u53D6dom\u540E\u518Dappend</span></span>
<span class="line"><span style="color:#A6ACCD;">this.$refs.box.$el</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u590D\u5236\u4E00\u4E2A\u6570\u7EC4" tabindex="-1">\u590D\u5236\u4E00\u4E2A\u6570\u7EC4 <a class="header-anchor" href="#\u590D\u5236\u4E00\u4E2A\u6570\u7EC4" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[].slice()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),o=[p];function c(t,r,i,C,A,d){return a(),n("div",null,o)}var u=s(l,[["render",c]]);export{D as __pageData,u as default};
