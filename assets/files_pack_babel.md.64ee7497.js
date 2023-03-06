import{_ as s,c as a,o as n,a as p}from"./app.7012674c.js";const y=JSON.parse('{"title":"babel\u57FA\u672C\u4F7F\u7528\u8BE6\u89E3","description":"","frontmatter":{},"headers":[],"relativePath":"files/pack/babel.md"}'),l={name:"files/pack/babel.md"},e=p(`<h1 id="babel\u57FA\u672C\u4F7F\u7528\u8BE6\u89E3" tabindex="-1">babel\u57FA\u672C\u4F7F\u7528\u8BE6\u89E3 <a class="header-anchor" href="#babel\u57FA\u672C\u4F7F\u7528\u8BE6\u89E3" aria-hidden="true">#</a></h1><p><strong>\u4EC0\u4E48\u662Fbabel?</strong></p><p>babel\u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u591A\u7528\u9014js\u7F16\u8BD1\u5668 \u70B9\u51FB\u8FDB\u5165<a href="http://babeljs.io/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a></p><p><strong>\u5B89\u88C5babel</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g babel-cli </span></span>
<span class="line"><span style="color:#A6ACCD;">npm install --save-dev babel-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>babel\u914D\u7F6E\u6587\u4EF6</strong></p><p>\u901A\u8FC7.babelrc\u6765\u8868\u793A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;presets&quot;: [ ],</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;plugins&quot;: [ ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>presets\u7528\u6765\u5B58\u653E\u4E00\u4E9B\u9884\u8BBE</p><p>plugins\u7528\u6765\u5B58\u653E\u4E00\u4E9B\u63D2\u4EF6</p><p><strong>\u547D\u4EE4\u884C\u7684\u7B80\u5355\u4F7F\u7528</strong></p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 -o (--out-file) \u53C2\u6570\u6765\u7F16\u8BD1\u4E00\u4E2A\u6587\u4EF6</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">babel es6.js -o es5.js / babel es6 --out-file es5.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u6211\u4EEC\u60F3\u7F16\u8BD1\u6574\u4E2A\u76EE\u5F55 -d (--out-dir)\u53C2\u6570</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">babel src -d build / babel src --out-dir build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u9884\u8BBE</strong></p><p>\u73B0\u5728\u6709\u4E00\u6BB5es6\u7684\u4EE3\u7801,\u6211\u4EEC\u60F3\u8981\u4F7F\u7528babel\u6765\u7F16\u8BD1\u8FD9\u6BB5\u4EE3\u7801, \u76EE\u524D\u6765\u8BF4\u901A\u8FC7\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u51E0\u4E4E\u662F\u539F\u5C01\u4E0D\u52A8\u7684\u590D\u5236\u4E86\u8FC7\u6765</p><p>es6.js</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var add = (a,b) =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(a+b)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">add(1,2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u5B89\u88C5babel-preset-es2015\u6765\u89E3\u6790es2015\u7684\u8BED\u6CD5</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev babel-preset-es2015</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u901A\u8FC7\u914D\u7F6E.babelrc\u6587\u4EF6</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;presets&quot;: [&quot;es2015&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u8FDB\u884C\u5BF9es2015\u8BED\u6CD5\u89E3\u6790\u4E86\u3002\u6700\u540E\u901A\u8FC7\u914D\u7F6Epackage.json\u7684scripts</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;build&quot;: &quot;babel src -d build -w&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\u76F4\u63A5\u5728\u547D\u4EE4\u884C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u63D2\u4EF6</strong></p><p>\u5728babel\u4E2D\u6709\u5F88\u591A\u5F88\u591A\u7684\u63D2\u4EF6, \u4F8B\u5982\u6211\u4EEC\u8981\u5C06\u4E0B\u9762\u4E00\u6BB5\u4EE3\u7801\u8F6C\u6362\u6210umd\u7684\u5F62\u5F0F,\u8BE5\u5982\u4F55\u505A\u5462?</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var add = (a,b) =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(a+b)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">add(1,2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9996\u5148\u627E\u5230\u5BF9\u5E94\u7684\u63D2\u4EF6babel-plugin-transform-es2015-modules-umd,\u5B89\u88C5\u8BE5\u63D2\u4EF6</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev babel-plugin-transform-es2015-modules-umd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u914D\u7F6E\u4E2D\u5F15\u5165</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;presets&quot;:[&quot;es2015&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;plugins&quot;:[&quot;transform-es2015-modules-umd&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u7F16\u8BD1\u540E\u5C31\u662F\u6211\u4EEC\u60F3\u8981\u7684\u4E86</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">(function (global, factory) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> if (typeof define === &quot;function&quot; &amp;&amp; define.amd) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> define([&quot;module&quot;, &quot;exports&quot;], factory);</span></span>
<span class="line"><span style="color:#A6ACCD;"> } else if (typeof exports !== &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> factory(module, exports);</span></span>
<span class="line"><span style="color:#A6ACCD;"> } else {</span></span>
<span class="line"><span style="color:#A6ACCD;"> var mod = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  exports: {}</span></span>
<span class="line"><span style="color:#A6ACCD;"> };</span></span>
<span class="line"><span style="color:#A6ACCD;"> factory(mod, mod.exports);</span></span>
<span class="line"><span style="color:#A6ACCD;"> global.sum = mod.exports;</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">})(this, function (module, exports) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> &quot;use strict&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"> Object.defineProperty(exports, &quot;__esModule&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;"> value: true</span></span>
<span class="line"><span style="color:#A6ACCD;"> });</span></span>
<span class="line"><span style="color:#A6ACCD;"> var sum = function sum(a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> return a + b;</span></span>
<span class="line"><span style="color:#A6ACCD;"> };</span></span>
<span class="line"><span style="color:#A6ACCD;"> exports.default = sum;</span></span>
<span class="line"><span style="color:#A6ACCD;"> module.exports = exports[&quot;default&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u96C6\u6210gulp</strong></p><p>babel\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528, \u4E5F\u53EF\u4EE5\u914D\u5408\u6784\u5EFA\u5DE5\u5177(gulp webpack\u7B49)\u8FDB\u884C\u7ED3\u5408</p><p>\u9996\u5148\u8981\u4E0B\u8F7Dgulp \u548Cgulp\u5BF9\u5E94\u7684babel\u63D2\u4EF6</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install gulp gulp-babel --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u521B\u5EFAgulp\u914D\u7F6Egulpfile.js</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const gulp = require(&#39;gulp&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const babel = require(&#39;gulp-babel&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;babel&#39;, ()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;"> return gulp.src(&#39;src/**/*.js&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .pipe(babel())  </span></span>
<span class="line"><span style="color:#A6ACCD;">  .pipe(gulp.dest(&#39;dist&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">gulp.task(&#39;default&#39; , [&#39;babel&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u914D\u7F6E\u4E0Bpackage.json\u4E2D\u7684scripts</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;"> &quot;dev&quot; : &quot;./node_modules/.bin/gulp&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u6267\u884C\u547D\u4EE4</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u5C31\u662F\u672C\u6587\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u5E0C\u671B\u672C\u6587\u7684\u5185\u5BB9\u5BF9\u5927\u5BB6\u7684\u5B66\u4E60\u6216\u8005\u5DE5\u4F5C\u80FD\u5E26\u6765\u4E00\u5B9A\u7684\u5E2E\u52A9\uFF0C\u540C\u65F6\u4E5F\u5E0C\u671B\u591A\u591A\u652F\u6301\u811A\u672C\u4E4B\u5BB6\uFF01</p>`,47),o=[e];function c(t,r,i,A,C,d){return n(),a("div",null,o)}var b=s(l,[["render",c]]);export{y as __pageData,b as default};
