import{a as n}from"./app.ce6d0e9c.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";var s="/assets/1.5910eb31.webp";const a={},r=n('<h1 id="\u9002\u914D\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F</h1><h2 id="\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#\u542B\u4E49" aria-hidden="true">#</a> \u542B\u4E49</h2><p>\u9002\u914D\u5668\u6A21\u5F0F\u53C8\u79F0\u4E3A\u5305\u88C5\u5668\u6A21\u5F0F\uFF0C\u5C06\u4E00\u4E2A\u7C7B\u7684\u63A5\u53E3\u8F6C\u5316\u4E3A\u7528\u6237\u9700\u8981\u7684\u53E6\u5916\u4E00\u4E2A\u63A5\u53E3\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u89E3\u51B3\u5BF9\u8C61\u4E4B\u95F4\u63A5\u53E3\u4E0D\u517C\u5BB9\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u968F\u7740\u4E1A\u52A1\u8FED\u4EE3\u5347\u7EA7\u51FA\u73B0\u4E86\u65E7\u7684\u63A5\u53E3\u4E0E\u5FC3\u7684\u63A5\u53E3\u4E0D\u517C\u5BB9\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4E0D\u53EF\u80FD\u5F3A\u5236\u4F7F\u7528\u65E7\u63A5\u53E3\u7684\u7528\u6237\u53BB\u5347\u7EA7\uFF0C\u800C\u662F\u5728\u4E2D\u95F4\u52A0\u4E00\u4E2A\u9002\u914D\u5668\u8FDB\u884C\u8F6C\u6362\uFF0C\u8BA9\u65E7\u63A5\u53E3\u7684\u4F7F\u7528\u8005\u65E0\u611F\u4F7F\u7528\uFF0C\u4FDD\u8BC1\u4E86\u7A33\u5B9A\u6027\uFF0C\u5728\u65E5\u5E38\u751F\u6D3B\u4E2D\u9002\u914D\u5668\u7684\u6848\u4F8B\u968F\u5904\u53EF\u89C1\uFF0C\u6BD4\u5982\u8033\u673A\u63D2\u53E3\u4E0D\u7EDF\u4E00\u3001\u5145\u7535\u63A5\u53E3\u4E0D\u7EDF\u4E00\u7B49\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u4E00\u4E2A\u9002\u914D\u5668\u6765\u89E3\u51B3\u95EE\u9898</p><img src="'+s+`"><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h2><p>\u5F00\u53D1\u4E2D\u5E38\u7528\u7684axios\uFF0C\u5176\u652F\u6301node\u7AEF\u548C\u6D4F\u89C8\u5668\u7AEF\uFF0C\u90A3\u4E48\u5728\u4E0D\u540C\u7AEF\u8C03\u7528axios\u9700\u8981\u8FDB\u884C\u4E0D\u540C\u7684\u5904\u7406\uFF0C\u800C\u8FD9\u4E9B\u5BF9\u4E8E\u4F7F\u7528\u8005\u800C\u8A00\u90FD\u662F\u65E0\u611F\u7684\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528\u7684\u65F6\u5019\u90FD\u662F\u4F7F\u7528\u540C\u4E00\u5957API\u76F4\u63A5\u5E72\u5C31\u5B8C\u4E8B\u4E86\uFF0C\u4E0D\u4F1A\u5728\u610F\u5185\u90E8\u5177\u4F53\u505A\u4E86\u4E9B\u4EC0\u4E48\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u4F7F\u7528\u9002\u914D\u5668\u6765\u62B9\u5E73\u4E0D\u540C\u7AEF\u7684\u5DEE\u5F02\uFF0C\u8BA9\u4F7F\u7528\u8005\u7528\u7740\u5F00\u5FC3</p><p>\u63A5\u4E0B\u6765\u53EF\u4EE5\u6A21\u62DF\u7B80\u5355\u5B9E\u73B0\u8FD9\u4E2A\u8FC7\u7A0B \u4F7F\u7528axios\u8BF7\u6C42\u4E00\u4E2A\u63A5\u53E3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>axios({
    url: &quot;xxx&quot;,
    method: &quot;GET&quot;,
})
    .then((res) =&gt; {
        console.log(&quot;success:&quot;, res);
    })
    .catch((err) =&gt; {
        console.log(&quot;fail:&quot;, err);
    });
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u63A5\u4E0B\u6765\u9700\u8981\u624B\u52A8\u5B9E\u73B0axios\u51FD\u6570\uFF1A function axios(config) { let adaptor = getDefaultAdaptor();</p><pre><code>// \u65E0\u8BBA\u662Fnode\u7AEF \u8FD8\u662F \u6D4F\u89C8\u5668\u7AEF\uFF0C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u90FD\u53EA\u662F\u8F6C\u5165\u4E00\u4E2Aconfig\u914D\u7F6E\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61
return adaptor(config);
</code></pre><p>}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0A\u6587\u8BF4\u5230\u56E0\u4E3Aaxios\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u7AEF\u548Cnode\u7AEF\u4F7F\u7528\uFF0CgetDefaultAdaptor\u51FD\u6570\u5C31\u662F\u8D77\u5230\u9002\u914D\u5668\u7684\u4F5C\u7528\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u73AF\u5883\u5206\u522B\u521B\u5EFA\u4E0D\u540C\u7684adaptor
/**
 * \u9002\u914D\u5668
 */
function getDefaultAdaptor() {
    let adaptor;

    if (typeof XMLHttpRequest !== &quot;undefined&quot;) {
        // \u662F\u6D4F\u89C8\u5668\u73AF\u5883
        adaptor = xhr;
    } else if (typeof process !== &quot;undefined&quot;) {
        // node \u73AF\u5883
        adaptor = http;
    }

    return adaptor;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5176\u4E2Dxhr\u548Chttp\u4E3A\u4E24\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA\u5177\u4F53\u7684\u8BF7\u6C42\uFF0C\u81F3\u6B64\u9002\u914D\u5668\u7684\u4F7F\u7528\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u63A5\u4E0B\u6765\u5C31\u770B\u770B\u4E0D\u540C\u7AEF\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u63A5\u53E3\u8BF7\u6C42 \u6D4F\u89C8\u5668\u7AEF\uFF1A /**</p><ul><li><p>\u6D4F\u89C8\u5668\u73AF\u5883 */ function xhr(config) { return new Promise((resolve, reject) =&gt; { const req = new XMLHttpRequest(); req.open(config.method, config.url, true);</p><pre><code> req.onreadystatechange = function () {
     if (req.readyState === 4) {
         if (req.status &gt;= 200 &amp;&amp; req.status &lt; 300) {
             resolve(req.responseText);
         } else {
             reject(&quot;\u8BF7\u6C42\u5931\u8D25&quot;);
         }
     }
 };

 req.send();
</code></pre><p>}); }</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
node\u7AEF\uFF1A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>/**</p><ul><li><p>node \u73AF\u5883 */ function http(config) { const url = require(&quot;url&quot;); const http = require(&quot;http&quot;); // \u5C06\u9700\u8981\u7684\u53C2\u6570 \u89E3\u6790\u51FA\u6765 const { hostname, port, path } = url.parse(config.url); return new Promise((resolve, reject) =&gt; { const options = { hostname, port, path, method: config.method, };</p><pre><code> const req = http.request(options, function (response) {
     let chunks = [];

     response.on(&quot;data&quot;, (chunk) =&gt; {
         chunks.push(chunk);
     });

     response.on(&quot;end&quot;, () =&gt; {
         const res = Buffer.concat(chunks).toString();
         resolve(res);
     });
 });

 // \u76D1\u542C\u8BF7\u6C42\u5F02\u5E38
 req.on(&quot;error&quot;, (err) =&gt; {
     reject(err);
 });

 // \u8BF7\u6C42\u53D1\u9001\u5B8C\u6BD5
 ren.end();
</code></pre><p>}); }</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F5C\u8005\uFF1ANordon
\u94FE\u63A5\uFF1Ahttps://juejin.cn/post/7016215674322157581
\u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1
\u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,18);function t(p,o){return r}var u=e(a,[["render",t]]);export{u as default};
