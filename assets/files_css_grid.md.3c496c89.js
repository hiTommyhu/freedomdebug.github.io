import{_ as s,c as a,o as n,a as p}from"./app.bf0a0a68.js";const y=JSON.parse('{"title":"display \u5C5E\u6027","description":"","frontmatter":{},"headers":[],"relativePath":"files/css/grid.md"}'),l={name:"files/css/grid.md"},e=p(`<h4 id="display-\u5C5E\u6027" tabindex="-1">display \u5C5E\u6027 <a class="header-anchor" href="#display-\u5C5E\u6027" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">display\uFF1Agrid</span></span>
<span class="line"><span style="color:#A6ACCD;">display\uFF1Ainline-grid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="grid-template-columns-\u5C5E\u6027\u548C-grid-template-rows-\u5C5E\u6027" tabindex="-1">grid-template-columns \u5C5E\u6027\u548C grid-template-rows \u5C5E\u6027 <a class="header-anchor" href="#grid-template-columns-\u5C5E\u6027\u548C-grid-template-rows-\u5C5E\u6027" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  /*  \u58F0\u660E\u4E86\u4E09\u5217\uFF0C\u5BBD\u5EA6\u5206\u522B\u4E3A 200px 100px 200px */</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-columns: 200px 100px 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-gap: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  /*  \u58F0\u660E\u4E86\u4E24\u884C\uFF0C\u884C\u9AD8\u5206\u522B\u4E3A 50px 50px  */</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-rows: 50px 50px; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="repeat-\u51FD\u6570" tabindex="-1">repeat() \u51FD\u6570 <a class="header-anchor" href="#repeat-\u51FD\u6570" aria-hidden="true">#</a></h4><blockquote><p>\u53EF\u4EE5\u7B80\u5316\u91CD\u590D\u7684\u503C\u3002\u8BE5\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u91CD\u590D\u7684\u6B21\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6240\u8981\u91CD\u590D\u7684\u503C\u3002\u6BD4\u5982\u4E0A\u9762\u884C\u9AD8\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u53BB\u5B9E\u73B0\uFF0C\u5B9E\u9645\u6548\u679C\u662F\u4E00\u6A21\u4E00\u6837\u7684</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> grid-template-rows: 50px 50px; </span></span>
<span class="line"><span style="color:#A6ACCD;"> /* \u4E5F\u53EF\u4EE5\u8FD9\u4E48\u5199 */</span></span>
<span class="line"><span style="color:#A6ACCD;"> grid-template-rows: repeat(2, 50px);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="auto-fill-\u5173\u952E\u5B57" tabindex="-1">auto-fill \u5173\u952E\u5B57 <a class="header-anchor" href="#auto-fill-\u5173\u952E\u5B57" aria-hidden="true">#</a></h4><blockquote><p>\u8868\u793A\u81EA\u52A8\u586B\u5145\uFF0C\u8BA9\u4E00\u884C\uFF08\u6216\u8005\u4E00\u5217\uFF09\u4E2D\u5C3D\u53EF\u80FD\u7684\u5BB9\u7EB3\u66F4\u591A\u7684\u5355\u5143\u683C\u3002<code>grid-template-columns: repeat(auto-fill, 200px)</code> \u8868\u793A\u5217\u5BBD\u662F 200 px\uFF0C\u4F46\u5217\u7684\u6570\u91CF\u662F\u4E0D\u56FA\u5B9A\u7684\uFF0C\u53EA\u8981\u6D4F\u89C8\u5668\u80FD\u591F\u5BB9\u7EB3\u5F97\u4E0B\uFF0C\u5C31\u53EF\u4EE5\u653E\u7F6E\u5143\u7D20\uFF0C\u4EE3\u7801\u4EE5\u53CA\u6548\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper-2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-columns: repeat(auto-fill, 200px);</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-gap: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-auto-rows: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="fr-\u5173\u952E\u5B57" tabindex="-1">fr \u5173\u952E\u5B57 <a class="header-anchor" href="#fr-\u5173\u952E\u5B57" aria-hidden="true">#</a></h4><blockquote><p><code>Grid</code> \u5E03\u5C40\u8FD8\u5F15\u5165\u4E86\u4E00\u4E2A\u53E6\u5916\u7684\u957F\u5EA6\u5355\u4F4D\u6765\u5E2E\u52A9\u6211\u4EEC\u521B\u5EFA\u7075\u6D3B\u7684\u7F51\u683C\u8F68\u9053\u3002<code>fr</code> \u5355\u4F4D\u4EE3\u8868\u7F51\u683C\u5BB9\u5668\u4E2D\u53EF\u7528\u7A7A\u95F4\u7684\u4E00\u7B49\u4EFD\u3002<code>grid-template-columns: 200px 1fr 2fr</code> \u8868\u793A\u7B2C\u4E00\u4E2A\u5217\u5BBD\u8BBE\u7F6E\u4E3A 200px\uFF0C\u540E\u9762\u5269\u4F59\u7684\u5BBD\u5EA6\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u5BBD\u5EA6\u5206\u522B\u4E3A\u5269\u4F59\u5BBD\u5EA6\u7684 1/3 \u548C 2/3\u3002\u4EE3\u7801\u4EE5\u53CA\u6548\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper-3 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-columns: 200px 1fr 2fr;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-gap: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-auto-rows: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="minmax-\u51FD\u6570" tabindex="-1">minmax() \u51FD\u6570 <a class="header-anchor" href="#minmax-\u51FD\u6570" aria-hidden="true">#</a></h4><blockquote><p>\u6211\u4EEC\u6709\u65F6\u5019\u60F3\u7ED9\u7F51\u683C\u5143\u7D20\u4E00\u4E2A\u6700\u5C0F\u548C\u6700\u5927\u7684\u5C3A\u5BF8\uFF0C<code>minmax()</code> \u51FD\u6570\u4EA7\u751F\u4E00\u4E2A\u957F\u5EA6\u8303\u56F4\uFF0C\u8868\u793A\u957F\u5EA6\u5C31\u5728\u8FD9\u4E2A\u8303\u56F4\u4E4B\u4E2D\u90FD\u53EF\u4EE5\u5E94\u7528\u5230\u7F51\u683C\u9879\u76EE\u4E2D\u3002\u5B83\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u4E3A\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C\u3002<code>grid-template-columns: 1fr 1fr minmax(300px, 2fr)</code> \u7684\u610F\u601D\u662F\uFF0C\u7B2C\u4E09\u4E2A\u5217\u5BBD\u6700\u5C11\u4E5F\u662F\u8981 300px\uFF0C\u4F46\u662F\u6700\u5927\u4E0D\u80FD\u5927\u4E8E\u7B2C\u4E00\u7B2C\u4E8C\u5217\u5BBD\u7684\u4E24\u500D\u3002\u4EE3\u7801\u4EE5\u53CA\u6548\u679C\u5982\u4E0B\uFF1A</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper-4 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-columns: 1fr 1fr minmax(300px, 2fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-gap: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-auto-rows: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="auto-\u5173\u952E\u5B57" tabindex="-1">auto \u5173\u952E\u5B57 <a class="header-anchor" href="#auto-\u5173\u952E\u5B57" aria-hidden="true">#</a></h4><blockquote><p>\u7531\u6D4F\u89C8\u5668\u51B3\u5B9A\u957F\u5EA6\u3002\u901A\u8FC7 <code>auto</code> \u5173\u952E\u5B57\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u6613\u5B9E\u73B0\u4E09\u5217\u6216\u8005\u4E24\u5217\u5E03\u5C40\u3002<code>grid-template-columns: 100px auto 100px</code> \u8868\u793A\u7B2C\u4E00\u7B2C\u4E09\u5217\u4E3A 100px\uFF0C\u4E2D\u95F4\u7531\u6D4F\u89C8\u5668\u51B3\u5B9A\u957F\u5EA6\uFF0C\u4EE3\u7801\u4EE5\u53CA\u6548\u679C\u5982\u4E0B</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper-5 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-columns: 100px auto 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-gap: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-auto-rows: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="grid-row-gap-\u5C5E\u6027\u3001grid-column-gap-\u5C5E\u6027\u4EE5\u53CA-grid-gap-\u5C5E\u6027" tabindex="-1">grid-row-gap \u5C5E\u6027\u3001grid-column-gap \u5C5E\u6027\u4EE5\u53CA grid-gap \u5C5E\u6027 <a class="header-anchor" href="#grid-row-gap-\u5C5E\u6027\u3001grid-column-gap-\u5C5E\u6027\u4EE5\u53CA-grid-gap-\u5C5E\u6027" aria-hidden="true">#</a></h4><blockquote><p><code>grid-row-gap</code> \u5C5E\u6027\u3001<code>grid-column-gap</code> \u5C5E\u6027\u5206\u522B\u8BBE\u7F6E\u884C\u95F4\u8DDD\u548C\u5217\u95F4\u8DDD\u3002<code>grid-gap</code> \u5C5E\u6027\u662F\u4E24\u8005\u7684\u7B80\u5199\u5F62\u5F0F\u3002</p><p><code>grid-row-gap: 10px</code> \u8868\u793A\u884C\u95F4\u8DDD\u662F 10px\uFF0C<code>grid-column-gap: 20px</code> \u8868\u793A\u5217\u95F4\u8DDD\u662F 20px\u3002<code>grid-gap: 10px 20px</code> \u5B9E\u73B0\u7684\u6548\u679C\u662F\u4E00\u6837\u7684</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-columns: 200px 100px 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-gap: 10px 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-auto-rows: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper-1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-columns: 200px 100px 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-auto-rows: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-row-gap: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-column-gap: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="grid-template-areas-\u5C5E\u6027" tabindex="-1">grid-template-areas \u5C5E\u6027 <a class="header-anchor" href="#grid-template-areas-\u5C5E\u6027" aria-hidden="true">#</a></h4><blockquote><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <em>grid-area</em> \u5C5E\u6027\u6765\u547D\u540D\u7F51\u683C\u5143\u7D20\u3002</p><p>\u547D\u540D\u7684\u7F51\u683C\u5143\u7D20\u53EF\u4EE5\u901A\u8FC7\u5BB9\u5668\u7684 grid-template-areas \u5C5E\u6027\u6765\u5F15\u7528\u3002</p><p>\u4EE5\u4E0B\u5B9E\u4F8B item1 \u547D\u540D\u4E3A &quot;myArea&quot;, \u5E76\u8DE8\u8D8A\u4E94\u5217\uFF1A</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.item1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-area: myArea;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.grid-container {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-areas: &#39;myArea myArea myArea myArea myArea&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-gap: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color: #2196F3;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.grid-container &gt; div {</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color: rgba(255, 255, 255, 0.8);</span></span>
<span class="line"><span style="color:#A6ACCD;">  text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 20px 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 30px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;grid-container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;item1&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;item2&quot;&gt;2&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;item3&quot;&gt;3&lt;/div&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;item4&quot;&gt;4&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;item5&quot;&gt;5&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;item6&quot;&gt;6&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="grid-auto-flow-\u5C5E\u6027" tabindex="-1">grid-auto-flow \u5C5E\u6027 <a class="header-anchor" href="#grid-auto-flow-\u5C5E\u6027" aria-hidden="true">#</a></h4><blockquote><p><code>grid-auto-flow</code> \u5C5E\u6027\u63A7\u5236\u7740\u81EA\u52A8\u5E03\u5C40\u7B97\u6CD5\u600E\u6837\u8FD0\u4F5C\uFF0C\u7CBE\u786E\u6307\u5B9A\u5728\u7F51\u683C\u4E2D\u88AB\u81EA\u52A8\u5E03\u5C40\u7684\u5143\u7D20\u600E\u6837\u6392\u5217\u3002\u9ED8\u8BA4\u7684\u653E\u7F6E\u987A\u5E8F\u662F&quot;\u5148\u884C\u540E\u5217&quot;\uFF0C\u5373\u5148\u586B\u6EE1\u7B2C\u4E00\u884C\uFF0C\u518D\u5F00\u59CB\u653E\u5165\u7B2C\u4E8C\u884C\uFF0C\u5373\u4E0B\u56FE\u82F1\u6587\u6570\u5B57\u7684\u987A\u5E8F <code>one</code>,<code>two</code>,<code>three</code>...\u3002\u8FD9\u4E2A\u987A\u5E8F\u7531 <code>grid-auto-flow</code> \u5C5E\u6027\u51B3\u5B9A\uFF0C\u9ED8\u8BA4\u503C\u662F <code>row</code>\u3002</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-template-columns: 100px 200px 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-auto-flow: row;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-gap: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  grid-auto-rows: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="justify-content-\u5C5E\u6027\u3001align-content-\u5C5E\u6027\u4EE5\u53CA-place-content-\u5C5E\u6027" tabindex="-1">justify-content \u5C5E\u6027\u3001align-content \u5C5E\u6027\u4EE5\u53CA place-content \u5C5E\u6027 <a class="header-anchor" href="#justify-content-\u5C5E\u6027\u3001align-content-\u5C5E\u6027\u4EE5\u53CA-place-content-\u5C5E\u6027" aria-hidden="true">#</a></h4><h4 id="grid-area-\u5C5E\u6027" tabindex="-1">grid-area \u5C5E\u6027 <a class="header-anchor" href="#grid-area-\u5C5E\u6027" aria-hidden="true">#</a></h4><h4 id="justify-self-\u5C5E\u6027\u3001align-self-\u5C5E\u6027\u4EE5\u53CA-place-self-\u5C5E\u6027" tabindex="-1">justify-self \u5C5E\u6027\u3001align-self \u5C5E\u6027\u4EE5\u53CA place-self \u5C5E\u6027 <a class="header-anchor" href="#justify-self-\u5C5E\u6027\u3001align-self-\u5C5E\u6027\u4EE5\u53CA-place-self-\u5C5E\u6027" aria-hidden="true">#</a></h4>`,32),o=[e];function c(r,i,t,d,A,C){return n(),a("div",null,o)}var u=s(l,[["render",c]]);export{y as __pageData,u as default};
