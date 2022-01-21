import{c as n}from"./app.dcbfd936.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/assets/1.991d001d.webp";const e={},r=n('<h1 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h1><h2 id="\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#\u542B\u4E49" aria-hidden="true">#</a> \u542B\u4E49</h2><p>\u5355\u4F8B\u6A21\u5F0F\u5728\u524D\u7AEF\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u975E\u5E38\u5E38\u89C1\uFF0C\u901A\u4FD7\u6765\u8BF4\u5C31\u662F\u67D0\u4E2A\u7C7B\u53EA\u80FD\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u53EA\u80FD\u5B9E\u4F8B\u5316\u4E00\u6B21\uFF0C\u4E4B\u540E\u6240\u6709\u5B9E\u4F8B\u5316\u7684\u64CD\u4F5C\u90FD\u662F\u8FD4\u56DE\u4E4B\u524D\u5DF2\u7ECF\u5B9E\u4F8B\u5316\u7684\u5B9E\u4F8B</p><img src="'+a+`"><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h2><h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (!Vue &amp;&amp; typeof window !== &#39;undefined&#39; &amp;&amp; window.Vue) {
  install(window.Vue)
}

function install (_Vue) {
  if (Vue &amp;&amp; _Vue === Vue) {
    console.error(&#39;[vuex] already installed. Vue.use(Vuex) should be called only once.&#39;)
    return
  }
  Vue = _Vue
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="message\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#message\u7EC4\u4EF6" aria-hidden="true">#</a> Message\u7EC4\u4EF6</h3><p>main.vue</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
    &lt;div v-show=&quot;visible&quot;&gt;message\u7EC4\u4EF6&lt;/div&gt;
&lt;/template&gt;

&lt;script type=&quot;text/babel&quot;&gt;
export default {
    data() {
        return {
            visible: false
        };
    },
    methods: {
        close() {
            this.visible = false;
        },
        show() {
            this.visible = true;
        }
    }
};
&lt;/script&gt;


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>main.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import Vue from &quot;vue&quot;;
import Main from &quot;./main.vue&quot;;
let MessageConstructor = Vue.extend(Main);

class Message {
    /** 
     * \u5C55\u793A message\u7EC4\u4EF6
     */
    show() {
        this.instance.show()
    }

    /** 
     * \u5173\u95ED message\u7EC4\u4EF6
     */
    close() {
        this.instance.close()
    }
	
    /** 
     * \u5355\u4F8B
     */
    static getInstance() {
        if(!this.instance) {
            let instance = new MessageConstructor();
            this.instance = instance;
            instance.$mount();
            document.body.appendChild(instance.$el);
        }

        return this.instance
    }
}


Message.getInstance().show();
Message.getInstance().close();

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,12);function l(p,i){return r}var u=s(e,[["render",l]]);export{u as default};
