import{a as n}from"./app.6c521b5e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/assets/1.3429bb50.webp";const e={},r=n(`<h1 id="\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F</h1><p>\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F(Factory Method)\u53C8\u79F0\u4E3A\u591A\u6001\u6027\u5DE5\u5382\u6A21\u5F0F\uFF0C\u5176\u6838\u5FC3\u4E0D\u518D\u50CF\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u90A3\u6837\u8D1F\u8D23\u6240\u6709\u7684\u5B50\u7C7B\u7684\u521B\u5EFA\uFF0C\u800C\u662F\u5C06\u5177\u4F53\u7684\u521B\u5EFA\u5DE5\u4F5C\u4EA4\u7ED9\u5B50\u7C7B\u53BB\u5B8C\u6210 \u5728\u524D\u6587\u5DF2\u7ECF\u4ECB\u7ECD\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F \u65F6\uFF0C\u5199\u4E86\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
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
      throw new Error(&quot;\u6682\u4E0D\u652F\u6301\u8BE5\u89D2\u8272\u7684\u521B\u5EFA&quot;);
  }
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u867D\u7136\u5176\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u521B\u5EFA\u5B9E\u4F8B\u7684\u65F6\u5019\u5F88\u723D\uFF0C\u4E0D\u7528\u5173\u5FC3\u5185\u90E8\u5177\u4F53\u7684\u5B9E\u73B0\uFF0C\u901A\u8FC7\u89C2\u5BDF\u4EE3\u7801\uFF0C\u53EF\u4EE5\u53D1\u73B0\u5176\u5B58\u5728\u7684\u95EE\u9898\uFF1A</p><p>\u4E0D\u7B26\u5408\u8BBE\u8BA1\u539F\u5219-\u5F00\u653E\u5C01\u95ED\u539F\u5219</p><p>\u5F53\u6BCF\u4E00\u6B21\u65B0\u589E\u4E00\u4E2A\u6743\u9650\u89D2\u8272\u7684\u65F6\u5019\uFF0C\u5BF9\u9700\u8981\u5BF9\u4E0A\u9762\u7684\u4EE3\u7801\u8FDB\u884C\u4FEE\u6539\uFF0C\u4E25\u91CD\u7834\u574F\u4E86\u539F\u6709\u7684\u4EE3\u7801\u548C\u4E1A\u52A1\u903B\u8F91\uFF0C\u4E0E\u5F00\u653E\u5C01\u95ED\u539F\u5219\u80CC\u79BB</p><p>\u5BB9\u6613\u53D8\u6210\u9762\u6761\u4EE3\u7801</p><p>\u867D\u7136\u89D2\u8272\u8D8A\u6765\u8D8A\u591A\uFF0C\u90A3\u4E48\u5185\u90E8\u7684case\u4E5F\u4F1A\u968F\u4E4B\u53D8\u5F97\u8D8A\u6765\u8D8A\u591A\uFF0C\u7B80\u5355\u5DE5\u5382\u51FD\u6570\u7684\u5185\u5BB9\u4E5F\u968F\u7740\u53D8\u5F97\u5197\u4F59 \u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u662F\u5E0C\u671B\u5728\u65B0\u589E\u65B0\u7684\u6743\u9650\u89D2\u8272\u65F6\uFF0C\u5BF9\u4E8E\u8001\u7684\u4EE3\u7801\u65E0\u4EFB\u4F55\u7684\u4FEE\u6539\u4FBF\u53EF\u4EE5\u5B8C\u6210\u65B0\u529F\u80FD\u7684\u589E\u52A0 \u9996\u5148\u770B\u4E00\u4E0B\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u7684UML\uFF1A <img src="`+a+`"></p><p>\u5176\u76F8\u6BD4\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\uFF0C\u4F1A\u591A\u4E86\u4E00\u4E2A\u5DE5\u5382\u65B9\u6CD5\uFF0CAdmin\u7C7B\u5BF9\u5E94\u591A\u4E86\u4E00\u4E2AAdminFactory\u7C7B\uFF0C\u73B0\u5728\u53EA\u9700\u8981\u901A\u8FC7AdminFactory\u7C7B\u521B\u5EFA\u5B9E\u4F8B\u5373\u53EF \u63A5\u4E0B\u6765\u770B\u770B\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u5982\u4F55\u521B\u5EFA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Person {
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
 * \u7BA1\u7406\u5458\u7684\u5DE5\u5382\u65B9\u6CD5
 */
class AdminFactory {
    static create(name) {
        return new Admin(name, [&quot;user&quot;, &quot;salary&quot;, &quot;vacation&quot;]);
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

/**
 * \u5458\u5DE5\u7684\u5DE5\u5382\u65B9\u6CD5
 */
class StaffFactory {
    static create(name) {
        return new Staff(name, [&quot;vacation&quot;]);
    }
}

const admin = AdminFactory.create(&quot;\u7BA1\u7406\u5458&quot;);
const zs = StaffFactory.create(&quot;\u5F20\u4E09&quot;);
const ls = StaffFactory.create(&quot;\u674E\u56DB&quot;);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u82E5\u662F\u9700\u8981\u521B\u5EFA\u65B0\u7684\u6743\u9650\u89D2\u8272\uFF0C\u53EA\u9700\u8981\u521B\u5EFA\u5BF9\u5E94\u7684\u5DE5\u5382\u65B9\u6CD5\u5373\u53EF\uFF0C\u5B8C\u5168\u7B26\u5408\u5F00\u653E\u5C01\u95ED\u539F\u5219\uFF0C\u4E5F\u53EF\u4EE5\u907F\u514D\u9762\u6761\u5F0F\u4EE3\u7801\uFF0C\u5177\u4F53\u5B9E\u4F8B\u521B\u5EFA\u90FD\u662F\u901A\u8FC7\u5BF9\u5E94\u5DE5\u5382\u65B9\u6CD5\u521B\u5EFA</p><p>\u4F5C\u8005\uFF1ANordon \u94FE\u63A5\uFF1Ahttps://juejin.cn/post/7016149646334492679 \u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>`,12);function p(l,b){return r}var i=s(e,[["render",p]]);export{i as default};
