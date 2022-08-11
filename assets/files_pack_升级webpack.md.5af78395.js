import{_ as e,c as s,o as a,a as n}from"./app.feb1665e.js";const b=JSON.parse(`{"title":"webpack 3.6\u5347\u7EA7\u5230webpack5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u59CB","slug":"\u5F00\u59CB"},{"level":2,"title":"webpack.config.js","slug":"webpack-config-js"},{"level":2,"title":"package.json>scripts","slug":"package-json-scripts"},{"level":2,"title":"Webpack5\u65E0\u6CD5\u4F7F\u7528uglifyjs-webpack-plugin\u538B\u7F29js\uFF1A ERESOLVE unable to resolve dependency tree","slug":"webpack5\u65E0\u6CD5\u4F7F\u7528uglifyjs-webpack-plugin\u538B\u7F29js\uFF1A-eresolve-unable-to-resolve-dependency-tree"},{"level":2,"title":"webpack\u4E2D \u6CE8\u91CA\u62A5\u9519Unknown word \uFF0Cmiss \u201C}\u201D","slug":"webpack\u4E2D-\u6CE8\u91CA\u62A5\u9519unknown-word-\uFF0Cmiss-\u201C-\u201D"},{"level":2,"title":"\u6253\u5305\u7EC4\u4EF6\u62A5\u9519\uFF1AError: Cannot find module \u2018vue/compiler-sfc\u2018","slug":"\u6253\u5305\u7EC4\u4EF6\u62A5\u9519\uFF1Aerror-cannot-find-module-\u2018vue-compiler-sfc\u2018"},{"level":2,"title":"webpack warning - WARNING in DefinePlugin Conflicting values for 'process .  env . NODE_ENV'","slug":"webpack-warning-warning-in-defineplugin-conflicting-values-for-process-env-node-env"},{"level":2,"title":"Webpack\u6253\u5305UMD\u7684export\u8981\u5E26default\u8BBF\u95EE\u95EE\u9898","slug":"webpack\u6253\u5305umd\u7684export\u8981\u5E26default\u8BBF\u95EE\u95EE\u9898"},{"level":2,"title":"\u4F7F\u7528 webpack \u6253\u5305\uFF0C\u56FE\u7247\u5730\u5740\u53D8\u6210\u4E86 [object Module]\uFF0Cfile-loader\uFF081.1.5=\u300B6.2.0\uFF09","slug":"\u4F7F\u7528-webpack-\u6253\u5305\uFF0C\u56FE\u7247\u5730\u5740\u53D8\u6210\u4E86-object-module-\uFF0Cfile-loader\uFF081-1-5-\u300B6-2-0\uFF09"},{"level":2,"title":"\u8F85\u52A9\u5DE5\u5177","slug":"\u8F85\u52A9\u5DE5\u5177"},{"level":2,"title":"\u76F8\u5173\u94FE\u63A5","slug":"\u76F8\u5173\u94FE\u63A5"}],"relativePath":"files/pack/\u5347\u7EA7webpack.md"}`),l={name:"files/pack/\u5347\u7EA7webpack.md"},p=n(`<h1 id="webpack-3-6\u5347\u7EA7\u5230webpack5" tabindex="-1">webpack 3.6\u5347\u7EA7\u5230webpack5 <a class="header-anchor" href="#webpack-3-6\u5347\u7EA7\u5230webpack5" aria-hidden="true">#</a></h1><p>\u5E73\u53F0window\uFF0Cnodejs14.7.1</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u7248\u672C\u67E5\u770B\u5DE5\u5177\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">ncu</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn upgrade-interactive --latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5F00\u59CB" tabindex="-1">\u5F00\u59CB <a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a></h2><p>1\u3001\u4FEE\u6539package.json\u4E2D\u7248\u672C\u4E3Awebpack\u6700\u65B0\u7248\u672C5.70.0\uFF08\u622A\u81F320220308\uFF09</p><p>2\u3001\u6267\u884C\u9879\u76EEyarn dev\uFF0C\u67E5\u770B\u9519\u8BEF\u5E76\u9010\u4E00\u89E3\u51B3</p><p>vue\u548Cvue-template-compiler\u9700\u8981\u540C\u7248\u672C</p><p>\u589E\u52A0webpack-cli</p><h2 id="webpack-config-js" tabindex="-1">webpack.config.js <a class="header-anchor" href="#webpack-config-js" aria-hidden="true">#</a></h2><p>\u53BB\u6389loader\u4E2D\u7684query\u53C2\u6570\uFF0C\u6539\u4E3Aoptions</p><p>\u589E\u52A0mode</p><p>module.rules.</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { VueLoaderPlugin } = require(&quot;vue-loader&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">		{</span></span>
<span class="line"><span style="color:#A6ACCD;">        	test: /\\.vue$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &quot;vue-loader&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">	]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	new VueLoaderPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BFC\u51FA\u5BF9\u8C61\u52A0.default</p><h2 id="package-json-scripts" tabindex="-1">package.json&gt;scripts <a class="header-anchor" href="#package-json-scripts" aria-hidden="true">#</a></h2><blockquote><p>\u589E\u52A0--trace-deprecation\u663E\u793A\u9519\u8BEF</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;dev&quot;: &quot;cross-env NODE_ENV=test  node --trace-deprecation apps&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="webpack5\u65E0\u6CD5\u4F7F\u7528uglifyjs-webpack-plugin\u538B\u7F29js\uFF1A-eresolve-unable-to-resolve-dependency-tree" tabindex="-1">Webpack5\u65E0\u6CD5\u4F7F\u7528uglifyjs-webpack-plugin\u538B\u7F29js\uFF1A ERESOLVE unable to resolve dependency tree <a class="header-anchor" href="#webpack5\u65E0\u6CD5\u4F7F\u7528uglifyjs-webpack-plugin\u538B\u7F29js\uFF1A-eresolve-unable-to-resolve-dependency-tree" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install terser-webpack-plugin -D</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F15\u5165\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">const TerserWebpackPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// \u914D\u7F6E\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  optimization: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    minimize: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    minimizer: [new TerserWebpackPlugin ()],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="webpack\u4E2D-\u6CE8\u91CA\u62A5\u9519unknown-word-\uFF0Cmiss-\u201C-\u201D" tabindex="-1">webpack\u4E2D \u6CE8\u91CA\u62A5\u9519Unknown word \uFF0Cmiss \u201C}\u201D <a class="header-anchor" href="#webpack\u4E2D-\u6CE8\u91CA\u62A5\u9519unknown-word-\uFF0Cmiss-\u201C-\u201D" aria-hidden="true">#</a></h2><blockquote><p>loader\u7684\u987A\u5E8F\u914D\u7F6E\u9519\u8BEF</p></blockquote><ol><li>\u4E00\u4E9Bcss\u9884\u7F16\u8BD1\u5E93\u662F\u652F\u6301\u884C\u5185\u6CE8\u91CA\u5BF9\uFF0C\u4F8B\u5982 <code>less</code>,<code>sass</code>\u6216\u8005<code>scss</code>;</li></ol><p>\u7B2C\u4E8C\u4E2A\u95EE\u9898\uFF1Awebpack loader\u6267\u884C\u987A\u5E8F</p><p>webpack \u7684loader\u6267\u884C\u662F \u4ECE\u4E0B\u5230\u4E0A\uFF0C\u6216\u8005\u4ECE\u53F3\u5230\u5DE6 \uFF08\u5B89\u88C5\u914D\u7F6E\u6587\u4EF6\u7684\u987A\u5E8F\uFF09</p><p>\u6240\u4EE5\u4F60\u7684\u7B2C\u4E00\u4E2A\u5199\u6CD5\u7684\u6267\u884C\u987A\u5E8F\u662F\uFF1A postcss-loader--&gt;less-loader--&gt;css-loader;</p><p>\u5176\u5B9E\u4F60\u8FD9\u4E2A\u6267\u884C\u987A\u5E8F\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u884C\u5185\u6CE8\u91CA\u6709\u95EE\u9898\uFF0C\u5E94\u8BE5\u5F88\u591A <code>less</code>\u8BED\u6CD5\u90FD\u4F1A\u51FA\u95EE\u9898\uFF1B\u56E0\u4E3A\u4F60\u662F\u8FD9\u6837\u7684</p><p>demo.less--&gt;postcss-loader; \u4F60\u7528 <code>postcss-loader</code> \u53BB\u5904\u7406\u4E00\u4E2A <code>less</code>\u8BED\u6CD5\u7684\u6587\u4EF6\uFF1B\u672C\u8EAB<code>postcss-loader</code>\u5C31\u662F\u4E0D\u662F\u4E3A <code>less</code>\u8BBE\u8BA1\u7684\uFF0C\u6240\u4EE5\u5C31\u662F\u672C\u8D28\u4E0A\u4ECE\u9519\u8BEF</p><p>\u7136\u540E\u4F60\u7684\u7B2C\u4E8C\u4E2A\u5199\u6CD5\u5C31\u5BF9\u4E86\uFF1A demo.less--&gt;less-loader--&gt;(demo.css)--&gt;postcss-loader--&gt;css.loader</p><p>\u56E0\u4E3A <code>less-loader</code> \u5DF2\u7ECF\u628A \u4F60\u7684 less\u6587\u4EF6 \u5904\u7406\u6210\u4E86 \u6807\u51C6\u7684 <code>css</code> \u6587\u4EF6\uFF0C\u6240\u4EE5\u540E\u7EED\u7684\u89E3\u6790\u5C31\u4E0D\u4F1A\u51FA\u9519</p><h2 id="\u6253\u5305\u7EC4\u4EF6\u62A5\u9519\uFF1Aerror-cannot-find-module-\u2018vue-compiler-sfc\u2018" tabindex="-1">\u6253\u5305\u7EC4\u4EF6\u62A5\u9519\uFF1AError: Cannot find module \u2018vue/compiler-sfc\u2018 <a class="header-anchor" href="#\u6253\u5305\u7EC4\u4EF6\u62A5\u9519\uFF1Aerror-cannot-find-module-\u2018vue-compiler-sfc\u2018" aria-hidden="true">#</a></h2><blockquote><p>\u5B89\u88C5\u4F4E\u7248\u672C\u7684vue-loader</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i vue-loader@15 -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="webpack-warning-warning-in-defineplugin-conflicting-values-for-process-env-node-env" tabindex="-1">webpack warning - WARNING in DefinePlugin Conflicting values for &#39;process . env . NODE_ENV&#39; <a class="header-anchor" href="#webpack-warning-warning-in-defineplugin-conflicting-values-for-process-env-node-env" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">new webpack.DefinePlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;process.<wbr>env&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // This has effect on the react lib size</span></span>
<span class="line"><span style="color:#A6ACCD;">        NODE_ENV: JSON.stringify(&quot;production&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">     },</span></span>
<span class="line"><span style="color:#A6ACCD;">     // antdesign\u4E0A\u4F20\u56FE\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;process.<wbr>env.TEST_IE&quot;: &quot;false&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}),</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="webpack\u6253\u5305umd\u7684export\u8981\u5E26default\u8BBF\u95EE\u95EE\u9898" tabindex="-1">Webpack\u6253\u5305UMD\u7684export\u8981\u5E26default\u8BBF\u95EE\u95EE\u9898 <a class="header-anchor" href="#webpack\u6253\u5305umd\u7684export\u8981\u5E26default\u8BBF\u95EE\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u89C1\u9644\u4EF6</p><h2 id="\u4F7F\u7528-webpack-\u6253\u5305\uFF0C\u56FE\u7247\u5730\u5740\u53D8\u6210\u4E86-object-module-\uFF0Cfile-loader\uFF081-1-5-\u300B6-2-0\uFF09" tabindex="-1">\u4F7F\u7528 webpack \u6253\u5305\uFF0C\u56FE\u7247\u5730\u5740\u53D8\u6210\u4E86 [object Module]\uFF0Cfile-loader\uFF081.1.5=\u300B6.2.0\uFF09 <a class="header-anchor" href="#\u4F7F\u7528-webpack-\u6253\u5305\uFF0C\u56FE\u7247\u5730\u5740\u53D8\u6210\u4E86-object-module-\uFF0Cfile-loader\uFF081-1-5-\u300B6-2-0\uFF09" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u95EE\u9898\u662F <code>file-loader</code> \u5728 5.0.0 \u7684<a href="https://github.com/webpack-contrib/file-loader/blob/master/CHANGELOG.md#500-2019-11-22" target="_blank" rel="noopener noreferrer">\u66F4\u65B0</a>\u4E2D\u9020\u6210\u7684\uFF1A</p><blockquote><p>BREAKING CHANGES</p><p>minimum required nodejs version is 10.13.0 rename the esModules option to esModule switch to ES modules by default (the option esModule is true by default)</p></blockquote><p>\u4ECE\u66F4\u65B0\u65E5\u5FD7\u770B\u5230\uFF0C5.0.0 \u9ED8\u8BA4\u5C06 <code>esModule</code> \u8BBE\u7F6E\u4E3A\u4E86 <code>true</code>\u3002\u6240\u4EE5\u6211\u4EEC\u53EA\u8981\u663E\u793A\u7684\u5C06\u5B83\u518D\u6539\u4E3A <code>false</code> \u5C31\u597D\u4E86\uFF0C\u4E0B\u9762\u662F\u4E00\u6BB5\u914D\u7F6E\u793A\u4F8B\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	test: /\\.(png|jpe?g)(\\?.*)?$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">	loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		esModule: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">		limit: 10000</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>url-loader</code> \u662F\u5BF9 <code>file-loader</code> \u7684\u5C01\u88C5\uFF0C\u76EE\u7684\u662F\u53EF\u4EE5\u4F7F\u7528 <code>limit</code> \u6765\u5224\u65AD\u662F\u5426\u628A\u56FE\u7247\u7F16\u8BD1\u6210 <strong>base64</strong> \u683C\u5F0F\uFF0C\u6700\u540E\u8FD8\u662F\u4F1A\u8C03\u7528 <code>file-loader</code>\uFF0C\u6240\u4EE5\u8BBE\u7F6E <code>esModule</code> \u540C\u6837\u6709\u6548\u3002</p><h2 id="\u8F85\u52A9\u5DE5\u5177" tabindex="-1">\u8F85\u52A9\u5DE5\u5177 <a class="header-anchor" href="#\u8F85\u52A9\u5DE5\u5177" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g npm-check-updates// \u5305\u68C0\u67E5\uFF0C\u5728package.json\u76EE\u5F55ncu</span></span>
<span class="line"><span style="color:#A6ACCD;">webpack-bundle-analyzer // \u6253\u5305\u5206\u6790</span></span>
<span class="line"><span style="color:#A6ACCD;">webpackbar // \u6253\u5305\u8FDB\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u76F8\u5173\u94FE\u63A5" tabindex="-1">\u76F8\u5173\u94FE\u63A5 <a class="header-anchor" href="#\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a></h2><p><a href="https://www.5axxw.com/questions/content/fzsiy7" target="_blank" rel="noopener noreferrer">\u8BBE\u7F6EWebpack\u548CBabel\u65F6\u51FA\u73B0\u95EE\u9898</a></p>`,46),o=[p];function c(r,t,i,d,u,A){return a(),s("div",null,o)}var g=e(l,[["render",c]]);export{b as __pageData,g as default};
