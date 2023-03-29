import{_ as s,c as n,o as a,a as l}from"./app.01954d48.js";const d=JSON.parse('{"title":"\u4EE3\u7801\u788E\u7247","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom","slug":"vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom"},{"level":3,"title":"vue3","slug":"vue3"},{"level":3,"title":"vue2","slug":"vue2"},{"level":2,"title":"other","slug":"other"},{"level":2,"title":"\u590D\u5236\u4E00\u4E2A\u6570\u7EC4","slug":"\u590D\u5236\u4E00\u4E2A\u6570\u7EC4"},{"level":2,"title":"axios\u5C01\u88C5","slug":"axios\u5C01\u88C5"}],"relativePath":"files/others/codes.md"}'),p={name:"files/others/codes.md"},e=l(`<h1 id="\u4EE3\u7801\u788E\u7247" tabindex="-1">\u4EE3\u7801\u788E\u7247 <a class="header-anchor" href="#\u4EE3\u7801\u788E\u7247" aria-hidden="true">#</a></h1><ul><li><a href="https://github.com/freedomdebug/praise-animation" target="_blank" rel="noopener noreferrer">\u76F4\u64AD\u70B9\u8D5Ecss\u548Ccanvas\u5B9E\u73B0https://github.com/freedomdebug/praise-animation</a></li></ul><h2 id="vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom" tabindex="-1">vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom <a class="header-anchor" href="#vue\u5C06\u7EC4\u4EF6\u6302\u8F7D\u5230\u6307\u5B9Adom" aria-hidden="true">#</a></h2><h3 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// index.vue</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="axios\u5C01\u88C5" tabindex="-1">axios\u5C01\u88C5 <a class="header-anchor" href="#axios\u5C01\u88C5" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#A6ACCD;">    timeout: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    headers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        get: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded;charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        post: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Content-Type&#39;: &#39;application/json;charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    validateStatus: (status) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (status &gt;= 200 &amp;&amp; status &lt; 300) || status === 403</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">const pending = new Map()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u83B7\u53D6\u8BF7\u6C42\u6307\u7EB9</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param config </span></span>
<span class="line"><span style="color:#A6ACCD;"> * @returns </span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const getRequestFingerPrint = (config: AxiosRequestConfig):string =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return [</span></span>
<span class="line"><span style="color:#A6ACCD;">        config.url</span></span>
<span class="line"><span style="color:#A6ACCD;">    ].join(&#39;&amp;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6DFB\u52A0\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} config </span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const addPending = (config: AxiosRequestConfig) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const fingerPrint = getRequestFingerPrint(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!pending.has(fingerPrint)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            pending.set(fingerPrint, cancel)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u79FB\u9664\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} config </span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const removePending = (config: AxiosRequestConfig) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const fingerPrint = getRequestFingerPrint(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (pending.has(fingerPrint)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const cancel = pending.get(fingerPrint)</span></span>
<span class="line"><span style="color:#A6ACCD;">        cancel(fingerPrint)</span></span>
<span class="line"><span style="color:#A6ACCD;">        pending.delete(fingerPrint)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;cancel request\u4E0D\u5B58\u5728\u6216\u5DF2\u5B8C\u6210\uFF01&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u901A\u8FC7\u8BF7\u6C42\u63A5\u53E3\u5730\u5740\u53D6\u6D88\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param url </span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const cancelSingleRequestByUrl = (url: string): void =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    removePending({url})</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6E05\u7A7A pending \u4E2D\u7684\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">export const clearPending = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (const [fingerPrint, cancel] of pending) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        cancel(fingerPrint)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    pending.clear()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BF7\u6C42\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">instance.interceptors.request.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">    (config: InternalAxiosRequestConfig) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        removePending(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">        addPending(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return config</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, (error) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        error.data = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        error.data.msg = &#39;\u670D\u52A1\u5668\u5F02\u5E38\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\uFF01&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Promise.resolve(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u54CD\u5E94\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">instance.interceptors.response.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">    (res: AxiosResponse) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        removePending(res.config)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if ((res.status &gt;= 200 &amp;&amp; res.status &lt; 300) || res.status === 403) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return res.data</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let error = new Error(res.statusText)</span></span>
<span class="line"><span style="color:#A6ACCD;">            error.message = JSON.stringify(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw error</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, (err) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (axios.isCancel(err)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;repeated request: &#39; + err.message)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let error = new Error(err.statusText)</span></span>
<span class="line"><span style="color:#A6ACCD;">            err.message = error</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw error</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Promise.reject(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function post&lt;T = any&gt;(url: string, data: any): Promise&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return instance.request({url, method: &#39;POST&#39;, data})</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    request: instance,</span></span>
<span class="line"><span style="color:#A6ACCD;">    post,</span></span>
<span class="line"><span style="color:#A6ACCD;">    cancelSingleRequestByUrl,</span></span>
<span class="line"><span style="color:#A6ACCD;">    cancelAllRequest: clearPending,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,15),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}var g=s(p,[["render",c]]);export{d as __pageData,g as default};
