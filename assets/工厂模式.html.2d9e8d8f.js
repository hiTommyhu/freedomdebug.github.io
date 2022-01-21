import{c as n}from"./app.163a6e0d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/assets/1.249a9640.webp";const e={},r=n(`<h1 id="\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u6A21\u5F0F</h1><h2 id="\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#\u542B\u4E49" aria-hidden="true">#</a> \u542B\u4E49</h2><p>\u73B0\u5728\u9700\u8981\u5F00\u53D1\u4E00\u4E2A\u7CFB\u7EDF\uFF0C\u91CC\u9762\u5B58\u5728\u4E0D\u540C\u7684\u89D2\u8272\uFF0C\u6700\u5E38\u89C1\u7684\u5C31\u662F\u7BA1\u7406\u5458\u3001\u5458\u5DE5\u7684\u89D2\u8272\uFF0C\u7136\u540E\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684\u89D2\u8272\u5206\u53D1\u4E0D\u540C\u7684\u6743\u9650</p><p>\u62FF\u5230\u9700\u6C42\u4E4B\u540E\u7ACB\u9A6C\u64B8\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Person {
    constructor(name, permission) {
	this.name = name;
	this.permission = permission;
    }
}

/**
 * \u7BA1\u7406\u5458
 */
class Admin extends Person {
    constructor(name, permission) {
        super(name, permission);
    }
}

/**
 * \u5458\u5DE5
 */
class Staff extends Person {
    constructor(name, permission) {
        super(name, permission);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u7BA1\u7406\u5458\u548C\u5458\u5DE5\u5E94\u5B58\u5728\u5176\u4ED6\u5DEE\u5F02\uFF0C\u4E0A\u8FF0\u4EE3\u7801\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\uFF0C\u6CA1\u6709\u7740\u91CD\u4F53\u73B0\u7EC6\u8282\u5DEE\u5F02 \u521B\u5EFA\u597D\u57FA\u7C7B\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u4FBF\u6839\u636E\u89D2\u8272\u4F7F\u7528new\u5173\u952E\u5B57\u76F4\u63A5\u5B9E\u4F8B\u5316\u5B50\u7C7B\uFF0C\u4FBF\u53EF\u4EE5\u5F88\u5F00\u5FC3\u7684\u5C06\u529F\u80FD\u5F00\u53D1\u5B8C\u6210</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const admin = new Admin(&#39;\u7BA1\u7406\u5458&#39;, [&#39;user&#39;, &#39;salary&#39;, &#39;vacation&#39;]);
const zs = new Staff(&#39;\u5F20\u4E09&#39;, [&#39;vacation&#39;]);
const ls = new Staff(&#39;\u674E\u56DB&#39;, [&#39;vacation&#39;]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u901A\u8FC7\u89C2\u5BDF\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF1A</p><p>\u4EE3\u7801\u4E4B\u95F4\u7684\u8026\u5408\u6027\u6BD4\u8F83\u5F3A\u3001\u4F9D\u8D56\u5177\u4F53\u7C7B\u7684\u5B9E\u73B0</p><p>\u5F53\u6211\u60F3\u8981\u5177\u4F53\u521B\u5EFA\u67D0\u4E2A\u7C7B\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5173\u6CE8\u5230\u5177\u4F53\u7684\u7C7B\uFF0C\u6BD4\u5982\u5F53\u6211\u521B\u5EFA\u4E00\u4E2A\u7BA1\u7406\u5458\u6743\u9650\u7684\u89D2\u8272\uFF0C\u9700\u8981\u76F4\u63A5new Admin\u6765\u521B\u5EFA\uFF0C\u548C\u7C7B\u7684\u8026\u5408\u6027\u592A\u5F3A</p><p>\u4EE3\u7801\u8F83\u4E3A\u5197\u4F59</p><p>\u5F53\u6211\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5458\u5DE5\u89D2\u8272\u65F6\uFF0C\u4F20\u9012\u7ED9Staff\u7684\u53C2\u6570\u90FD\u662F\u4E0D\u53D8\u7684\uFF0C\u53D8\u5F97\u662Fname\uFF0C\u4F1A\u4EA7\u751F\u5927\u91CF\u7684\u91CD\u590D\u7684\u4EE3\u7801</p><p>\u4E0D\u5229\u4E8E\u6269\u5C55\u3001\u7EF4\u62A4</p><p>\u968F\u7740\u4E1A\u52A1\u8FED\u4EE3\uFF0C\u4E0D\u8BBA\u662F\u65B0\u589E\u6743\u9650\u8FD8\u662F\u4FEE\u6539\u4E0D\u540C\u89D2\u8272\u7684\u6743\u9650\u90FD\u5C06\u662F\u4E00\u4E2A\u4EE4\u4EBA\u5934\u75BC\u7684\u4E8B\u60C5 \u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * type\uFF1A\u89D2\u8272\u7C7B\u578B - \u7BA1\u7406\u5458\u3001\u5458\u5DE5
 * name\uFF1A\u5BF9\u5E94\u89D2\u8272\u7684\u540D\u5B57
 */
const Factory = (type, name) =&gt; {
    switch (type) {
        case &quot;admin&quot;: // \u521B\u5EFA\u7BA1\u7406\u5458
            return new Admin(name, [&quot;user&quot;, &quot;salary&quot;, &quot;vacation&quot;]);
        case &quot;staff&quot;: // \u521B\u5EFA\u5458\u5DE5
            return new Staff(name, [&quot;vacation&quot;]);
        default: // \u5065\u58EE\u6027\u5904\u7406
            throw new Error(&quot;\u6682\u4E0D\u652F\u6301\u6539\u89D2\u8272\u7684\u521B\u5EFA&quot;);
    }
};

console.log(Factory(&quot;admin&quot;, &quot;\u7BA1\u7406\u5458&quot;));
console.log(Factory(&quot;staff&quot;, &quot;\u5F20\u4E09&quot;));
console.log(Factory(&quot;&quot;, &quot;\u5F20\u4E09&quot;));
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u901A\u8FC7\u4E00\u4E2A\u51FD\u6570\u5C06\u521B\u5EFA\u5BF9\u8C61\u7684\u8FC7\u7A0B\u5355\u72EC\u5C01\u88C5\uFF0C\u5916\u754C\u5728\u8C03\u7528\u5DE5\u5382\u6A21\u5F0F\u51FD\u6570\u521B\u5EFA\u5BF9\u8C61\u65F6\u4E0D\u9700\u8981\u5173\u6CE8\u5404\u4E2A\u89D2\u8272\u5177\u4F53\u5982\u4F55\u5B9E\u73B0\uFF0C\u53EA\u8D1F\u8D23\u8C03\u7528\u65F6\u4F20\u9012\u76F8\u5E94\u7684\u53C2\u6570\u5373\u53EF \u5C31\u50CF\u6211\u4EEC\u81EA\u5DF1\u53BB\u83DC\u5E02\u573A\u4E70\u83DC\u81EA\u5DF1\u52A8\u624B\u7092\u83DC\u65F6\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u6309\u90E8\u5C31\u73ED\u7684\u6D17\u83DC\u3001\u5207\u83DC\u3001\u7092\u83DC\u3001\u88C5\u76D8\u7B49\u64CD\u4F5C\uFF0C\u7136\u540E\u624D\u80FD\u5F97\u5230\u4E00\u76D8\u83DC\u3002\u53BB\u996D\u5E97\u76F4\u63A5\u4E0B\u5355\u8BA9\u53A8\u5E08\u7092\u83DC\u65F6\u6211\u4EEC\u5E76\u4E0D\u5173\u5FC3\u53A8\u5E08\u5982\u4F55\u505A\u7684\uFF0C\u6700\u7EC8\u4F1A\u76F4\u63A5\u5C06\u4E00\u76D8\u83DC\u7AEF\u5230\u6211\u4EEC\u7684\u9910\u684C\u4E0A\uFF0C\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u5C31\u7C7B\u4F3C\u76F4\u63A5\u53BB\u9910\u9986\u70B9\u5355 \u4E0B\u9762\u770B\u4E00\u4E0B\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u7684UML\uFF1A</p><img src="`+a+'"><p>\u4F5C\u8005\uFF1ANordon \u94FE\u63A5\uFF1Ahttps://juejin.cn/post/7015812263344881701 \u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>',18);function p(l,t){return r}var u=s(e,[["render",p]]);export{u as default};
