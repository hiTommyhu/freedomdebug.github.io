import{r as l,o as p,c as t,b as n,d as a,F as b,a as r,e as s}from"./app.e9aa7bdf.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},o=r(`<h1 id="babel\u4E4B\u914D\u7F6E\u6587\u4EF6-babelrc\u5165\u95E8\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#babel\u4E4B\u914D\u7F6E\u6587\u4EF6-babelrc\u5165\u95E8\u8BE6\u89E3" aria-hidden="true">#</a> babel\u4E4B\u914D\u7F6E\u6587\u4EF6.babelrc\u5165\u95E8\u8BE6\u89E3</h1><p><strong>\u4ECB\u7ECD</strong></p><p>es6\u7279\u6027\u6D4F\u89C8\u5668\u8FD8\u6CA1\u6709\u5168\u90E8\u652F\u6301\uFF0C\u4F46\u662F\u4F7F\u7528es6\u662F\u5927\u52BF\u6240\u8D8B\uFF0C\u6240\u4EE5babel\u5E94\u8FD0\u800C\u751F\uFF0C\u7528\u6765\u5C06es6\u4EE3\u7801\u8F6C\u6362\u6210\u6D4F\u89C8\u5668\u80FD\u591F\u8BC6\u522B\u7684\u4EE3\u7801 babel\u6709\u63D0\u4F9B\u4E13\u95E8\u7684\u547D\u4EE4\u884C\u5DE5\u5177\u65B9\u4FBF\u8F6C\u7801\uFF0C\u53EF\u4EE5\u81EA\u884C\u53BB\u4E86\u89E3</p><p><strong>\u4EC0\u4E48\u662FBabel</strong></p><p>\u5B98\u65B9\u89E3\u91CA,\u662F\u4E0B\u4E00\u4EE3JavaScript \u8BED\u6CD5\u7684\u7F16\u8BD1\u5668\u3002</p><p>\u65E2\u7136\u662F\u4E0B\u4E00\u4EE3Javascript\u7684\u6807\u51C6\uFF0C\u6D4F\u89C8\u5668\u56E0\u7248\u672C\u7684\u4E0D\u540C\u5BF9\u6B64\u4F1A\u6709\u517C\u5BB9\u6027\u95EE\u9898\uFF0CJavaScript\u7684\u65B0\u7684\u65B9\u6CD5\u90FD\u4E0D\u80FD\u4F7F\u7528\uFF0C\u4F46\u662F\u76EE\u524D\u6211\u4EEC\u5728\u9879\u76EE\u5F00\u53D1\u4E00\u76F4\u63D0\u5021\u4F7F\u7528\u6700\u65B0\u7684\u8BED\u6CD5\u7CD6\u7F16\u5199\uFF0C\u4E0D\u4F46\u80FD\u51CF\u5C11\u4EE3\u7801\u91CF\uFF0C\u800C\u4E14async,await\u7B49\u65B0\u7279\u6027\u8FD8\u89E3\u51B3\u4E86\u56DE\u8C03\u7684\u7F16\u5199\u673A\u5236\uFF0C\u51CF\u8F7B\u4E86\u4EE3\u7801\u7EF4\u62A4\u6210\u672C\u3002</p><p>Babel\u5C31\u56E0\u6B64\u800C\u751F\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u653E\u5FC3\u4F7F\u7528\u5927\u90E8\u5206\u7684JavaScript\u7684\u65B0\u7684\u6807\u51C6\u7684\u65B9\u6CD5\uFF0C\u7136\u540E\u7F16\u8BD1\u6210\u517C\u5BB9\u7EDD\u5927\u591A\u6570\u7684\u4E3B\u6D41\u6D4F\u89C8\u5668\u7684\u4EE3\u7801\u3002\u5728\u9879\u76EE\u5DE5\u7A0B\u811A\u624B\u67B6\u4E2D\uFF0C\u4E00\u822C\u4F1A\u4F7F\u7528.babelrc\u6587\u4EF6\uFF0C\u901A\u8FC7\u914D\u7F6E\u4E00\u4E9B\u53C2\u6570\u914D\u5408webpack\u8FDB\u884C\u6253\u5305\u538B\u7F29\u3002\u4E5F\u901A\u8FC7\u7F51\u4E0A\u4E86\u89E3\uFF0C\u5199\u6CD5\u5404\u6709\u4E0D\u540C\uFF0C\u53C2\u6570\u4E5F\u5927\u4E0D\u76F8\u540C\uFF0C\u56E0\u6B64\uFF0C\u6211\u91CD\u65B0\u6574\u7406\u4E00\u4EFD\u8D44\u6599\uFF0C\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u4E0B\u5404\u4E2A\u914D\u7F6E\u9879\u7684\u610F\u4E49\u6240\u5728\uFF0C\u4EE5\u4FBF\u6E05\u6670\u4E86\u89E3\u5982\u679C\u4F7F\u7528\u3002</p><p>\u4EE5\u4E0B\u914D\u7F6E\u4E3B\u8981\u6B63\u5BF9webpack3+\u5199\u6CD5\u3002</p><p><strong>Babel\u8F6C\u8BD1\u5668</strong></p><p>\u5728.babelrc\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u4E3B\u8981\u662F\u5BF9\u9884\u8BBE\uFF08presets\uFF09\u548C\u63D2\u4EF6\uFF08plugins\uFF09\u8FDB\u884C\u914D\u7F6E\uFF0C\u56E0\u6B64\u4E0D\u540C\u7684\u8F6C\u8BD1\u5668\u4F5C\u7528\u4E0D\u540C\u7684\u914D\u7F6E\u9879\uFF0C\u5927\u81F4\u53EF\u5206\u4E3A\u4EE5\u4E0B\u4E09\u9879\uFF1A</p><p>1.\u8BED\u6CD5\u8F6C\u4E49\u5668\u3002\u4E3B\u8981\u5BF9javascript\u6700\u65B0\u7684\u8BED\u6CD5\u7CD6\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5E76\u4E0D\u8D1F\u8D23\u8F6C\u8BD1javascript\u65B0\u589E\u7684api\u548C\u5168\u5C40\u5BF9\u8C61\u3002\u4F8B\u5982let/const\u5C31\u53EF\u4EE5\u88AB\u7F16\u8BD1\uFF0C\u800Cincludes/Object.assign\u7B49\u5E76\u4E0D\u80FD\u88AB\u7F16\u8BD1\u3002\u5E38\u7528\u5230\u7684\u8F6C\u8BD1\u5668\u5305\u6709\uFF0Cbabel-preset-env\u3001babel-preset-es2015\u3001babel-preset-es2016\u3001babel-preset-es2017\u3001babel-preset-latest\u7B49\u3002\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u53EF\u4EE5\u53EA\u9009\u7528babel-preset-env\u6765\u4EE3\u66FF\u4F59\u4E0B\u7684\uFF0C\u4F46\u662F\u8FD8\u9700\u8981\u914D\u4E0Ajavascirpt\u7684\u5236\u4F5C\u89C4\u8303\u4E00\u8D77\u4F7F\u7528\uFF0C\u540C\u65F6\u4E5F\u662F\u5B98\u65B9\u63A8\u8350</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;presets&quot;: [&quot;env&quot;, {
   &quot;modules&quot;: false
  }],
  &quot;stage-2&quot;
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>2.\u8865\u4E01\u8F6C\u4E49\u5668\u3002\u4E3B\u8981\u8D1F\u8D23\u8F6C\u8BD1javascript\u65B0\u589E\u7684api\u548C\u5168\u5C40\u5BF9\u8C61\uFF0C\u4F8B\u5982babel-plugin-transform-runtime\u8FD9\u4E2A\u63D2\u4EF6\u80FD\u591F\u7F16\u8BD1Object.assign,\u540C\u65F6\u4E5F\u53EF\u4EE5\u5F15\u5165babel-polyfill\u8FDB\u4E00\u6B65\u5BF9includes\u8FD9\u7C7B\u7528\u6CD5\u4FDD\u8BC1\u5728\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u3002Object.assign \u4F1A\u88AB\u7F16\u8BD1\u6210\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><p>\u590D\u5236\u4EE3\u7801\u4EE3\u7801\u5982\u4E0B:</p><p>__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()</p><p>3.jsx\u548Cflow\u63D2\u4EF6\uFF0C\u8FD9\u7C7B\u8F6C\u8BD1\u5668\u7528\u6765\u8F6C\u8BD1JSX\u8BED\u6CD5\u548C\u79FB\u9664\u7C7B\u578B\u58F0\u660E\u7684\uFF0C\u4F7F\u7528Rect\u7684\u65F6\u5019\u4F60\u5C06\u7528\u5230\u5B83\uFF0C\u8F6C\u8BD1\u5668\u540D\u79F0\u4E3Ababel-preset-react</p><p><strong>\u521B\u5EFA\u9884\u8BBE(presets)</strong></p><p>\u4E3B\u8981\u901A\u8FC7npm\u5B89\u88C5babel-preset-xx\u63D2\u4EF6\u6765\u914D\u5408\u4F7F\u7528\uFF0C\u4F8B\u5982\u901A\u8FC7 npm install babel-preset-stage-2 babel-preset-env --save-dev \u5B89\u88C5\uFF0C\u4F1A\u6709\u76F8\u5E94\u5982\u4E0B\u914D\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;presets&quot;: [
  [&quot;env&quot;, options],
  &quot;stage-2&quot;
 ]
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>stage-2\u914D\u7F6E</strong></p><p>babel\u4E3B\u8981\u63D0\u4F9B\u4EE5\u4E0B\u51E0\u79CD\u8F6C\u4E49\u5668\u5305,\u62EC\u53F7\u91CC\u9762\u662F\u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6\u7684\u914D\u7F6E\u9879</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>babel-preset-stage-0(stage-0) 
babel-preset-stage-1(stage-1) 
babel-preset-stage-2(stage-2) 
babel-preset-stage-3(stage-3)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0D\u540C\u9636\u6BB5\u7684\u8F6C\u8BD1\u5668\u4E4B\u95F4\u662F\u5305\u542B\u7684\u5173\u7CFB\uFF0Cpreset-stage-0\u8F6C\u8BD1\u5668\u9664\u4E86\u5305\u542B\u4E86preset-stage-1\u7684\u6240\u6709\u529F\u80FD\u8FD8\u589E\u52A0\u4E86transform-do-expressions\u63D2\u4EF6\u548Ctransform-function-bind\u63D2\u4EF6\uFF0C\u540C\u6837preset-stage-1\u8F6C\u8BD1\u5668\u9664\u4E86\u5305\u542Bpreset-stage-2\u7684\u5168\u90E8\u529F\u80FD\u5916\u8FD8\u589E\u52A0\u4E86\u4E00\u4E9B\u989D\u5916\u7684\u529F\u80FD\u3002</p><p><strong>options\u914D\u7F6E\u4ECB\u7ECD</strong></p><p>\u5B98\u65B9\u63A8\u8350\u4F7F\u7528babel-preset-env\u6765\u66FF\u4EE3\u4E00\u4E9B\u63D2\u4EF6\u5305\u7684\u5B89\u88C5\uFF08es2015-arrow-functions\uFF0Ces2015-block-scoped-functions\u7B49\u7B49\uFF09\uFF0C\u5E76\u4E14\u6709\u5982\u4E0B\u51E0\u79CD\u914D\u7F6E\u4FE1\u606F,\u4ECB\u7ECD\u51E0\u4E2A\u5E38\u7528\u7684\uFF0C</p><p>\u66F4\u591A\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003\u5B98\u7F51https://babeljs.io/docs/plugins/preset-env/</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;targets&quot;: {
    &quot;chrome&quot;: 52,
    &quot;browsers&quot;: [&quot;last 2 versions&quot;, &quot;safari 7&quot;],
    &quot;node&quot;:&quot;6.10&quot;
  }
  &quot;modules&quot;: false
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>targets\u53EF\u4EE5\u5236\u5B9A\u517C\u5BB9\u6D4F\u89C8\u5668\u7248\u672C\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86browsers\uFF0C\u90A3\u4E48\u5C31\u4F1A\u8986\u76D6targets\u539F\u672C\u5BF9\u6D4F\u89C8\u5668\u7684\u9650\u5236\u914D\u7F6E\u3002</p><p>targets.node\u6B63\u5BF9node\u7248\u672C\u8FDB\u884C\u7F16\u8BD1</p><p>modules\u901A\u5E38\u90FD\u4F1A\u8BBE\u7F6E\u4E3Afalse\uFF0C\u56E0\u4E3A\u9ED8\u8BA4\u90FD\u662F\u652F\u6301CommonJS\u89C4\u8303\uFF0C\u540C\u65F6\u8FD8\u6709\u5176\u4ED6\u914D\u7F6E\u53C2\u6570\uFF1A&quot;amd&quot; | &quot;umd&quot; | &quot;systemjs&quot; | &quot;commonjs&quot;\uFF0Csystemjs\u6211\u8FD8\u4E0D\u77E5\u9053\u89C4\u8303\u5199\u6CD5\u662F\u4EC0\u4E48\uFF0Camd\u548Cumd\u4EE5\u53CAcommonjs\u76F8\u5BF9\u6BD4\u8F83\u719F\u6089\uFF0C\u4E0B\u9762\u7B80\u8981\u5217\u4E3E\u4E0B\u4E66\u5199\u89C4\u8303\u3002</p><p>amd\u4EE3\u7801\u89C4\u8303\uFF0C\u5728ng1\u4E2D\u4F1A\u7528\u5230\u6BD4\u8F83\u591A\uFF0C\u4E3B\u8981\u7528\u4E8E\u4F9D\u8D56\u6CE8\u5165\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>define([&#39;jquery&#39;], function ($) {
  //  \u65B9\u6CD5
  function myFunc(){};
 
  //  \u66B4\u9732\u516C\u5171\u65B9\u6CD5
  return myFunc;
})

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>commonjs\u89C4\u8303\uFF0C\u4E5F\u662Fnode\u73AF\u5883\u4E2D\u5C0A\u5D07\u7684\u4E00\u79CD\u89C4\u8303\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var $ = require(&#39;jquery&#39;);
//  \u65B9\u6CD5
function myFunc(){};
 
//  \u66B4\u9732\u516C\u5171\u65B9\u6CD5\uFF08\u4E00\u4E2A\uFF09
module.exports = myFunc;
{% endcodeblock %}
&gt;umd\u89C4\u8303\uFF0C\u517C\u5BB9amd\u4EE5\u53CAcommonjs\u89C4\u8303\uFF0C\u76EE\u524D\u5728\u7B2C\u4E09\u65B9\u63D2\u4EF6\u7F16\u5199\u4F7F\u7528\u6BD4\u8F83\u591A\uFF1A
{% codeblock lang:javascript %}
(function (root, factory) {
  if (typeof define === &#39;function&#39; &amp;&amp; define.amd) {
    // AMD
    define([&#39;jquery&#39;], factory);
  } else if (typeof exports === &#39;object&#39;) {
    // Node, CommonJS\u4E4B\u7C7B\u7684
    module.exports = factory(require(&#39;jquery&#39;));
  } else {
    // \u6D4F\u89C8\u5668\u5168\u5C40\u53D8\u91CF(root \u5373 window)
    root.returnExports = factory(root.jQuery);
  }
}(this, function ($) {
  //  \u65B9\u6CD5
  function myFunc(){};
 
  //  \u66B4\u9732\u516C\u5171\u65B9\u6CD5
  return myFunc;
}));

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><strong>\u63D2\u4EF6\uFF08plugins\uFF09</strong></p><p>\u63D2\u4EF6\u914D\u7F6E\u9879\u540C\u9884\u8BBE\u914D\u7F6E\u9879\u4E00\u6837\uFF0C\u9700\u8981\u642D\u914Dbabel\u76F8\u5E94\u7684\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E\uFF0C\u53EF\u4EE5\u9009\u62E9\u914D\u7F6E\u63D2\u4EF6\u6765\u6EE1\u8DB3\u5355\u4E2A\u9700\u6C42\uFF0C\u4F8B\u5982\u65E9\u671F\u6211\u4EEC\u4F1A\u6709\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;plugins&quot;: [
  &quot;check-es2015-constants&quot;,
  &quot;es2015-arrow-functions&quot;,
  &quot;es2015-block-scoped-functions&quot;,
  // ...
 ]
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F46\u662F\u8FD9\u4E9B\u63D2\u4EF6\u4ECE\u7EF4\u62A4\u5230\u4E66\u5199\u6781\u4E3A\u9EBB\u70E6\uFF0C\u540E\u6765\u5B98\u65B9\u7EDF\u4E00\u63A8\u8350\u4F7F\u7528env\uFF0C\u5168\u90E8\u66FF\u4EE3\u4E86\u8FD9\u4E9B\u5355\u4E00\u7684\u63D2\u4EF6\u529F\u80FD\uFF0C\u53EF\u4EE5\u7B80\u5316\u914D\u7F6E\u5982\u4E0B\uFF0C\u4E5F\u5C31\u662F\u6211\u524D\u9762\u63D0\u5230\u4E86babel-preset-env\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;presets&quot;: [
  &quot;es2015&quot;
 ]
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u91CC\u4E3B\u8981\u4ECB\u7ECD\u4E24\u6B3E\u5E38\u7528\u63D2\u4EF6\uFF0C\u5206\u522B\u662Fbabel-plugin-transform-runtime\uFF0Cbabel-plugin-syntax-dynamic-import\u3002</p><p>\u57FA\u672C\u914D\u7F6E\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;plugins&quot;: [
  &quot;syntax-dynamic-import&quot;,[&quot;transform-runtime&quot;]
 ]
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>transform-runtime</strong></p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u79CD\u5168\u5C40\u5BF9\u8C61\u6216\u8005\u5168\u5C40\u5BF9\u8C61\u65B9\u6CD5\u7F16\u8BD1\u4E0D\u8DB3\u7684\u60C5\u51B5\uFF0C\u624D\u51FA\u73B0\u4E86transform-runtime\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u4F46\u662F\u5B83\u53EA\u4F1A\u5BF9es6\u7684\u8BED\u6CD5\u8FDB\u884C\u8F6C\u6362\uFF0C\u800C\u4E0D\u4F1A\u5BF9\u65B0api\u8FDB\u884C\u8F6C\u6362\u3002\u5982\u679C\u9700\u8981\u8F6C\u6362\u65B0api\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528babel-polyfill\u6765\u89C4\u907F\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><p>\u5BF9Object.assign\u8FDB\u884C\u7F16\u8BD1\uFF0C\u914D\u7F6E\u4E0E\u672A\u914D\u7F6E\u7ECF\u8FC7webpack\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u7247\u6BB5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u672A\u8BBE\u7F6E\u4EE3\u7801\u7247\u6BB5\uFF1A
__webpack_require__(&quot;ez/6&quot;);
var aaa = 1;

function fna() {
 var dd = 33333;
 var cc = Object.assign({ key: 2 });
 var xx = String.prototype.repeat.call(&#39;b&#39;, 3);
 if (&quot;foobar&quot;.String.prototype.includes(&quot;foo&quot;)) {
  var vv = 1;
 }

 return dd;
}
// \u8BBE\u7F6E\u4EE3\u7801\u7247\u6BB5\uFF1A
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);

__webpack_require__(&quot;ez/6&quot;);
var aaa = 1;

function fna() {
 var dd = 33333;
 var cc = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({ key: 2 });
 var xx = String.prototype.repeat.call(&#39;b&#39;, 3);
 if (&quot;foobar&quot;.String.prototype.includes(&quot;foo&quot;)) {
  var vv = 1;
 }

 return dd;
}


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u5BF9class\u5B9A\u4E49\u7C7B\u4F1A\u8FDB\u884C\u7F16\u8BD1\uFF0C\u914D\u7F6E\u4E0E\u672A\u914D\u7F6E\u7ECF\u8FC7webpack\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u7247\u6BB5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u672A\u8BBE\u7F6E\u4EE3\u7801\u7247\u6BB5\uFF1A
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(&quot;Cannot call a class as a function&quot;); } }

var Canvas = function Canvas(height, width) {
 _classCallCheck(this, Canvas);

 this.height = height;
 this.width = width;
};

var Canvas2 = function Canvas2(height, width) {
 _classCallCheck(this, Canvas2);

 this.height = height;
 this.width = width;
};

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5BF9Generator\u51FD\u6570\u4E5F\u6709\u540C\u4E0A\u7684\u7F16\u8BD1\u6548\u679C\uFF0C\u76EE\u524D\u9879\u76EE\u4E2D\u4F7F\u7528\u8BE5\u51FD\u6570\u8F83\u5C0F\uFF0C\u4E00\u822C\u4F7F\u7528promise\u66FF\u4EE3\uFF0C\u4EE5\u53CAasync await\u6240\u4EE5\u672A\u5BF9\u8BE5\u51FD\u6570\u505A\u6D4B\u8BD5\u3002</p><p>\u5B98\u65B9\u8BF4\u5BF9promise\u4E5F\u4F1A\u4EA7\u751F\u7F16\u8BD1\uFF0C\u4F46\u662F\u5B9E\u9645\u6D4B\u8BD5\u7ED3\u679C\u5374\u6CA1\u6709\u6548\u679C</p><p>\u7ECF\u8FC7webpack\u6253\u5305\u6700\u7EC8\u6D4B\u8BD5\uFF0C\u5F15\u5165transform-runtime\u8BE5\u914D\u7F6E\u9879\u540E\uFF0C\u6253\u5305\u5165\u53E3js\u6587\u4EF6\u5927\u5C0F\u4F1A\u7565\u5FAE\u589E\u5927\uFF0C\u5E76\u4E0D\u50CF\u5B98\u65B9\u8BF4\u7684\u80FD\u591F\u7F29\u5C0F\u6587\u4EF6\u4F53\u79EF</p><p>\u672A\u914D\u7F6E\u7684\u6700\u7EC8\u6253\u5305\u6548\u679C\uFF1A</p><p><img src="https://img.jbzj.com/file_images/article/201802/2018222110745600.jpg?201812211832" alt="img"></p><p>\u914D\u7F6E\u540E\u7684\u6700\u7EC8\u6253\u5305\u6548\u679C\uFF1A</p><p><img src="https://img.jbzj.com/file_images/article/201802/2018222110842827.jpg?201812211915" alt="img"></p><p>\u867D\u7136\u6587\u4EF6\u5927\u5C0F\u4F1A\u6709\u6240\u589E\u5927\uFF0C\u4F46\u662F\u89E3\u51B3\u4E00\u4E9B\u517C\u5BB9\u6027\u7684\u95EE\u9898\uFF0C\u540C\u65F6\uFF0C\u4ECE\u4EE5\u4E0A\u7ED9\u51FA\u7684\u6D4B\u8BD5\u4EE3\u7801\u4F8B\u5B50\u6765\u770B\uFF0C\u4F7F\u7528transform-runtime\u540E\uFF0C\u53EF\u4EE5\u51CF\u5C11\u5185\u90E8\u5168\u5C40\u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u4ECE\u7ED3\u6784\u4E0A\u770B\u5C0A\u5D07\u4E86webpack\u7684\u6A21\u5757\u5316\u601D\u60F3\uFF0C\u6240\u4EE5\u8FD8\u662F\u5EFA\u8BAE\u4F7F\u7528\u8BE5\u63D2\u4EF6\u3002</p><p><strong>syntax-dynamic-import</strong></p><p>\u8FD9\u4E2A\u63D2\u4EF6\u4E3B\u8981\u89E3\u51B3\u52A8\u6001\u5F15\u5165\u6A21\u5757\u7684\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function nDate() {
 import(&#39;moment&#39;).then(function(moment) {
  console.log(moment().format());
 }).catch(function(err) {
  console.log(&#39;Failed to load moment&#39;, err);
 });
}
nDate();

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C.babelrc\u914D\u7F6E\u9879\u4E2D\u4F7F\u7528\u4E86&quot;stage-2&quot;\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u5B9E\u7528\u8BE5\u63D2\u4EF6\uFF0C\u540C\u6837\u652F\u6301\u52A8\u6001\u6A21\u5757\u5F15\u5165\u3002</p><p>\u4E0D\u7136\u5C31\u4F1A\u62A5\u4EE5\u4E0B\u9519\u8BEF\uFF1A</p><ol><li>Module build failed: SyntaxError: &#39;import&#39; and &#39;export&#39; may only appear at the top level, or (import \u548C export\u53EA\u80FD\u5728\u6700\u5916\u5C42\uFF0C\u4E5F\u5C31\u662F\u4E0D\u80FD\u7528\u5728\u51FD\u6570\u6216\u8005\u5757\u4E2D)</li><li>Module build failed: SyntaxError: Unexpected token, expected {</li></ol><p><strong>\u5176\u4ED6\u914D\u7F6E\u9879</strong></p><p><strong>ignore</strong></p><p>\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u53EF\u4EE5\u6307\u5B9A\u4E0D\u7F16\u8BD1\u90A3\u4E9B\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;ignore&quot;:[&quot;./module/a.js&quot;]
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>let,Object.assign,class\u5B9A\u4E49\u90FD\u672A\u7F16\u8BD1\uFF0C\u7F16\u8BD1\u6548\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>__webpack_require__(&quot;ez/6&quot;);
const aaa = 1;

function fna () {
 let dd = 33333
 let cc = Object.assign({key:2})
 let xx = String.prototype.repeat.call(&#39;b&#39;, 3)
 if (&quot;foobar&quot;.String.prototype.includes(&quot;foo&quot;)) {
  let vv = 1
 }

 return dd
}

function fna2 () {
 return fna() + aaa + __WEBPACK_IMPORTED_MODULE_0__b__[&quot;a&quot; /* default */]
}

class Canvas {
 constructor(height, width) {
  this.height = height;
  this.width = width;
 }
}

class Canvas2 {
 constructor(height, width) {
  this.height = height;
  this.width = width;
 }
}


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><strong>minified</strong></p><p>\u4E3B\u8981\u8BBE\u7F6E\u7F16\u8BD1\u540E\u662F\u5426\u662F\u538B\u7F29\uFF0Cboolean\u7C7B\u578B\uFF0C\u5982\u679C\u4F7F\u7528babel-cli\u8FDB\u884C\u6253\u5305\u7F16\u8BD1\u6587\u4EF6\u8FD9\u4E2A\u914D\u7F6E\u9879\u80FD\u591F\u8D77\u5230\u4F5C\u7528\uFF0C\u4F46\u662F\u76EE\u524D\u5927\u90E8\u5206\u8FD8\u662F\u4F1A\u4F9D\u8D56\u7B2C\u4E09\u65B9\u6253\u5305\u5DE5\u5177\uFF0C\u4F8B\u5982webpack\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u914D\u7F6E\u53C2\u6570\u4E00\u822C\u4E0D\u7528\u8BBE\u7F6E\uFF0Cwebpack\u63D2\u4EF6\u4E2D\u7684UglifyJsPlugin\u505A\u4E86\u538B\u7F29\u7684\u5DE5\u4F5C\u3002</p><p><strong>comments</strong></p><p>\u5728\u751F\u6210\u7684\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u4EA7\u751F\u6CE8\u91CA\uFF0Cboolean\u7C7B\u578B\uFF0Cwebpack\u63D2\u4EF6\u4E2D\u7684UglifyJsPlugin\u4E5F\u540C\u6837\u96C6\u6210\u4E86\u8FD9\u4E2A\u529F\u80FD\u3002</p><p><strong>env</strong></p><p>\u57FA\u672C\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;env&quot;: {
  // test \u662F\u63D0\u524D\u8BBE\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6EBABEL_ENV\u5219\u4F7F\u7528NODE_ENV\uFF0C\u5982\u679C\u90FD\u6CA1\u6709\u8BBE\u7F6E\u9ED8\u8BA4\u5C31\u662Fdevelopment
  &quot;test&quot;: {
   &quot;presets&quot;: [&quot;env&quot;, &quot;stage-2&quot;],
   // instanbul\u662F\u4E00\u4E2A\u7528\u6765\u6D4B\u8BD5\u8F6C\u7801\u540E\u4EE3\u7801\u7684\u5DE5\u5177
   &quot;plugins&quot;: [&quot;istanbul&quot;]
  }
 }
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>\u518D\u8C08\u517C\u5BB9\u6027\u95EE\u9898</strong></p>`,76),c=s("Babel\u9ED8\u8BA4\u53EA\u8F6C\u6362\u65B0\u7684JavaScript\u8BED\u6CD5\uFF0C\u800C\u4E0D\u8F6C\u6362\u65B0\u7684API\uFF0C\u6BD4\u5982Iterator\u3001Generator\u3001Set\u3001Maps\u3001Promise\u7B49\u7B49\u5168\u5C40\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u5B9A\u4E49\u5728\u5168\u5C40\u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5\uFF08\u6BD4\u5982Object.assign\uFF09\u90FD\u4E0D\u4F1A\u8F6C\u7801\uFF0C\u5177\u4F53\u7684\u53EF\u4EE5\u53C2\u8003babel-plugin-transform-runtime\u6A21\u5757\u7684 "),m={href:"https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/definitions.js",target:"_blank",rel:"noopener noreferrer"},d=s("definitions.js "),g=s("\u6587\u4EF6\u3002"),q=r(`<p>\u8FD9\u91CC\u4E3B\u8981\u6D89\u53CA\u5230babel\u7F16\u8BD1\u540E\u4F9D\u7136\u4F1A\u5B58\u5728\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u4E00\u822C\u4F1A\u4F7F\u7528transform-runtime\u548Cbabel-polyfill\u914D\u5408\u4F7F\u7528\uFF0C\u5BF9\u4E8E\u540E\u8005\u53EA\u9700\u8981\u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6require\u5F15\u5165\u5373\u53EF\u3002</p><p>\u5F53\u7136\u5728\u4F7F\u7528\u7C7B\u4F3CObject.assign\u51FD\u6570\u529F\u80FD\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528lodash\u5E93\u6765\u66FF\u4EE3\uFF0Cpromise\u53EF\u4EE5\u4F7F\u7528Q.js\u66FF\u4EE3\u7B49\u7B49\u65B9\u6848\uFF0C\u8FD9\u6837\u4F9D\u8D56\u53EF\u4EE5\u4E0D\u9700\u8981\u5F15\u5165\u4EE5\u4E0A\u63D2\u4EF6\uFF0C\u5177\u4F53\u53EF\u4EE5\u6839\u636E\u9879\u76EE\u5177\u4F53\u5B89\u6392</p><p><strong>\u603B\u7ED3</strong></p><p>.babelrc\u914D\u7F6E\u6587\u4EF6\u4E3B\u8981\u8FD8\u662F\u4EE5presets\u548Cplugins\u7EC4\u6210\uFF0C\u901A\u8FC7\u548Cwebpack\u914D\u5408\u8FDB\u884C\u4F7F\u7528\uFF0C\u5206\u4EAB\u4E0B\u6211\u4EEC\u5728\u9879\u76EE\u4E2D\u5E38\u7528\u7684\u914D\u7F6E\u3002\u4EE5\u4E0A\u90FD\u662F\u901A\u8FC7\u5B66\u4E60\u603B\u7ED3\u51FA\u6765\u7684\uFF0C\u6709\u4EC0\u4E48\u4E0D\u5BF9\u7684\u5730\u65B9\u5E0C\u671B\u6307\u51FA\u3002</p><p>vue\u9879\u76EE\u5F00\u53D1\u4F7F\u7528\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;presets&quot;: [
  [&quot;env&quot;, {
   &quot;modules&quot;: false
  }],
  &quot;stage-2&quot;
 ],
 // \u4E0B\u9762\u6307\u7684\u662F\u5728\u751F\u6210\u7684\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u4EA7\u751F\u6CE8\u91CA
 &quot;comments&quot;: false,
 &quot;plugins&quot;: [&quot;transform-runtime&quot;,&quot;syntax-dynamic-import&quot;],
 &quot;env&quot;: {
  // test \u662F\u63D0\u524D\u8BBE\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6EBABEL_ENV\u5219\u4F7F\u7528NODE_ENV\uFF0C\u5982\u679C\u90FD\u6CA1\u6709\u8BBE\u7F6E\u9ED8\u8BA4\u5C31\u662Fdevelopment
  &quot;test&quot;: {
   &quot;presets&quot;: [&quot;env&quot;, &quot;stage-2&quot;],
   // instanbul\u662F\u4E00\u4E2A\u7528\u6765\u6D4B\u8BD5\u8F6C\u7801\u540E\u4EE3\u7801\u7684\u5DE5\u5177
   &quot;plugins&quot;: [&quot;istanbul&quot;]
  }
 }
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>react\u9879\u76EE\u5F00\u53D1\u4F7F\u7528\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;presets&quot;: [
  [&quot;env&quot;, { &quot;modules&quot;: false }],
  &quot;stage-2&quot;,
  &quot;react&quot;
 ],
 &quot;plugins&quot;: [&quot;transform-runtime&quot;],
 &quot;comments&quot;: false,
 &quot;env&quot;: {
  &quot;test&quot;: {
   &quot;presets&quot;: [&quot;env&quot;, &quot;stage-2&quot;],
   &quot;plugins&quot;: [ &quot;istanbul&quot; ]
  }
 }
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4EE5\u4E0A\u5C31\u662F\u672C\u6587\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u5E0C\u671B\u5BF9\u5927\u5BB6\u7684\u5B66\u4E60\u6709\u6240\u5E2E\u52A9\uFF0C\u4E5F\u5E0C\u671B\u5927\u5BB6\u591A\u591A\u652F\u6301\u811A\u672C\u4E4B\u5BB6\u3002</p><p><strong>\u60A8\u53EF\u80FD\u611F\u5174\u8DA3\u7684\u6587\u7AE0:</strong></p>`,10),_={href:"https://www.jb51.net/article/105968.htm",target:"_blank",rel:"noopener noreferrer"},v=s("babel\u57FA\u672C\u4F7F\u7528\u8BE6\u89E3"),f={href:"https://www.jb51.net/article/141097.htm",target:"_blank",rel:"noopener noreferrer"},x=s("\u8BE6\u89E3\u5982\u4F55\u4F7F\u7528babel\u8FDB\u884Ces6\u6587\u4EF6\u7684\u7F16\u8BD1"),h={href:"https://www.jb51.net/article/129555.htm",target:"_blank",rel:"noopener noreferrer"},j=s("\u5229\u7528babel\u5C06es6\u8BED\u6CD5\u8F6Ces5\u7684\u7B80\u5355\u793A\u4F8B"),w={href:"https://www.jb51.net/article/236678.htm",target:"_blank",rel:"noopener noreferrer"},y=s("\u901A\u8FC7babel\u64CD\u4F5CAST\u7CBE\u51C6\u63D2\u5165\u914D\u7F6E\u4EE3\u7801\u5168\u6D41\u7A0B");function k(E,C){const e=l("ExternalLinkIcon");return p(),t(b,null,[o,n("p",null,[c,n("a",m,[d,a(e)]),g]),q,n("ul",null,[n("li",null,[n("a",_,[v,a(e)])]),n("li",null,[n("a",f,[x,a(e)])]),n("li",null,[n("a",h,[j,a(e)])]),n("li",null,[n("a",w,[y,a(e)])])])],64)}var B=i(u,[["render",k]]);export{B as default};
