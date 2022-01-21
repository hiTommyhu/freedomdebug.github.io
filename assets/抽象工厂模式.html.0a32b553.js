import{d as n}from"./app.ba231ef7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/assets/1.4421df5f.webp";const e={},r=n('<h1 id="\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</h1><h2 id="\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#\u542B\u4E49" aria-hidden="true">#</a> \u542B\u4E49</h2><p>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u662F\u6307\u6709\u591A\u4E2A\u62BD\u8C61\u7C7B\u65F6\uFF0C\u4F7F\u7528\u7684\u4E00\u79CD\u5DE5\u5382\u6A21\u5F0F\uFF0C\u5176\u53EF\u4EE5\u5411\u4F7F\u7528\u65B9\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u8BA9\u4F7F\u7528\u65B9\u5728\u4E0D\u6307\u5B9A\u5177\u4F53\u5B9E\u4F8B\u7684\u60C5\u51B5\u4E0B\uFF0C\u521B\u5EFA\u540C\u4E00\u4E2A\u7C7B\u4E2D\u7684\u591A\u4E2A\u5B9E\u4F8B\u5BF9\u8C61 \u6982\u5FF5\u770B\u7740\u4E00\u5934\u96FE\u6C34\uFF0C\u4E3E\u4E00\u4E2A\u548C\u6211\u4EEC\u524D\u7AEF\u606F\u606F\u76F8\u5173\u7684\u4F8B\u5B50\uFF1A H5\u7684\u4EE3\u7801\u662F\u5177\u5907\u8DE8\u5E73\u53F0\u80FD\u529B\u7684\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528HTML+CSS+JS\u5F00\u53D1\u4E86\u4E00\u5957\u9875\u9762\uFF0C\u5176\u53EF\u4EE5\u8FD0\u884C\u5728\u4E0D\u540C\u7684\u5E73\u53F0\uFF0C\u53EF\u4EE5\u662F\u79FB\u52A8\u7AEF\u3001PC\u7AEF\uFF0C\u4E5F\u53EF\u4EE5\u662FIOS\u7AEF\u3001Android\u7AEF\uFF0C\u4E0D\u540C\u7AEF\u7684\u5C55\u793A\u5F62\u5F0F\u662F\u6709\u4E00\u4E9B\u5DEE\u5F02\u7684\uFF0C\u6BD4\u5982IOS\u548CAndroid\u90FD\u6709\u4E00\u5957\u5404\u81EA\u7684UI\u6807\u51C6\uFF0C\u540C\u4E00\u5957H5\u4EE3\u7801\u5728\u5176\u5E73\u53F0\u8FD0\u884C\u65F6\uFF0C\u5C55\u793A\u7684\u5F62\u5F0F\u7684\u4E0D\u4E00\u6837\u7684\uFF0C\u6BD4\u5982\u4E00\u4E2AButton\u5143\u7D20\uFF0C\u5728\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u5C55\u793A\u65F6\uFF0C\u662F\u6709\u5404\u81EA\u7684\u64CD\u4F5C\u7CFB\u7EDF\u8FDB\u884C\u751F\u6210 \u7ED3\u5408UML\u7406\u89E3\uFF1A</p><img src="'+a+`"><p>\u4E0A\u8FF0\u63CF\u8FF0\u901A\u8FC7\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Factory {
    /**
     * \u521B\u5EFA\u6309\u94AE
     */
    createButton() {}
}


class IosButton {
    render() {
        return &quot;IOS\u7CFB\u7EDF\u6309\u94AE&quot;;
    }
}

class AndroidButton {
    render() {
        return &quot;Android\u7CFB\u7EDF\u6309\u94AE&quot;;
    }
}

class IosFactory extends Factory {
    /**
     * \u521B\u5EFA\u6309\u94AE
     */
    createButton() {
        return new IosButton();
    }
}

class AndroidFactory extends Factory {
    /**
     * \u521B\u5EFA\u6309\u94AE
     */
    createButton() {
        return new AndroidButton();
    }
}

/**
 * button \u57FA\u7C7B
 */
class Button {
    constructor(os) {
        if(os === &#39;ios&#39;) {
            this.os = new IosFactory()
        }else {
            this.os = new AndroidFactory()
        }
    }

    render() {
        return this.os.createButton().render()
    }
}

const ios = new Button(&#39;ios&#39;)
console.log(ios.render()); // IOS\u7CFB\u7EDF\u6309\u94AE

const android = new Button(&#39;android&#39;)
console.log(android.render()); // Android\u7CFB\u7EDF\u6309\u94AE
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p>\u4E00\u4E2A\u6309\u94AE\u662F\u7684\u5B9E\u4F8B\uFF0C\u662F\u6839\u636E\u4E0D\u540C\u7684os\u8FDB\u884C\u5BF9\u5E94\u5B50\u7C7B\u7684\u521B\u5EFA \u81F3\u6B64\u53EF\u4EE5\u603B\u7ED3\u4E09\u79CD\u5DE5\u5382\u6A21\u5F0F\uFF1A \u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\uFF1A \u901A\u8FC7\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u6D3E\u751F\u7C7B\u7684\u5B9E\u4F8B \u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\uFF1A \u591A\u4E86\u4E00\u4E2A\u5DE5\u5382\u7C7B\uFF0C\u8981\u60F3\u521B\u5EFA\u5BF9\u5E94\u7684\u5B9E\u4F8B\uFF0C\u9700\u8981\u5148\u521B\u5EFA\u6B64\u5DE5\u5382\u7684\u5B9E\u4F8B\uFF0C\u518D\u901A\u8FC7\u6B64\u5DE5\u5382\u6765\u521B\u5EFA\u5177\u4F53\u5B9E\u4F8B \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\uFF1A \u540C\u4E00\u4E2A\u5DE5\u5382\u53EF\u4EE5\u521B\u5EFA\u591A\u79CD\u4EA7\u54C1 \u5728\u524D\u7AEF\u5F00\u53D1\u4E2D\u4F7F\u7528\u6700\u591A\u7684\u662F\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\uFF0C\u5176\u4F59\u4E24\u79CD\u5DE5\u5382\u6A21\u5F0F\u4F7F\u7528\u8F83\u5C11\uFF0C\u7279\u522B\u662F\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</p><p>\u4F5C\u8005\uFF1ANordon \u94FE\u63A5\uFF1Ahttps://juejin.cn/post/7016154920877293599 \u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>`,8);function l(p,b){return r}var u=s(e,[["render",l]]);export{u as default};
