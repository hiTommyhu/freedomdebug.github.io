import{_ as s,c as a,o as n,a as l}from"./app.01954d48.js";const d=JSON.parse('{"title":"yaml","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u8BED\u6CD5","slug":"\u57FA\u672C\u8BED\u6CD5"},{"level":3,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B"},{"level":3,"title":"YAML \u5BF9\u8C61","slug":"yaml-\u5BF9\u8C61"},{"level":3,"title":"YAML \u6570\u7EC4","slug":"yaml-\u6570\u7EC4"},{"level":3,"title":"\u590D\u5408\u7ED3\u6784","slug":"\u590D\u5408\u7ED3\u6784"},{"level":3,"title":"\u7EAF\u91CF","slug":"\u7EAF\u91CF"},{"level":3,"title":"\u5F15\u7528","slug":"\u5F15\u7528"}],"relativePath":"files/others/yaml.md"}'),p={name:"files/others/yaml.md"},e=l(`<h1 id="yaml" tabindex="-1">yaml <a class="header-anchor" href="#yaml" aria-hidden="true">#</a></h1><p>js-yaml: <a href="https://www.npmjs.com/package/js-yaml" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/js-yaml</a></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add js</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">jsyaml </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-yaml</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> jsyaml </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">js-yaml</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> yamlStr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> yamlJson </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> jsyaml</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(yamlStr) </span><span style="color:#676E95;font-style:italic;">// \u8F6Cjson</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> yaml </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> jsyaml</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dump</span><span style="color:#A6ACCD;">(yamlJson)  </span><span style="color:#676E95;font-style:italic;">// \u8F6Cyaml</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u4E2A\u5728\u7EBF\u7684yaml\u548Cjson\u8F6C\u6362\u5DE5\u5177\uFF1A<a href="https://oktools.net/json2yaml" target="_blank" rel="noopener noreferrer">https://oktools.net/json2yaml</a></p><blockquote><p>\u6269\u5C55\u9605\u8BFB</p></blockquote><p>YAML \u662F &quot;YAML Ain&#39;t a Markup Language&quot;\uFF08YAML \u4E0D\u662F\u4E00\u79CD\u6807\u8BB0\u8BED\u8A00\uFF09\u7684\u9012\u5F52\u7F29\u5199\u3002\u5728\u5F00\u53D1\u7684\u8FD9\u79CD\u8BED\u8A00\u65F6\uFF0CYAML \u7684\u610F\u601D\u5176\u5B9E\u662F\uFF1A&quot;Yet Another Markup Language&quot;\uFF08\u4ECD\u662F\u4E00\u79CD\u6807\u8BB0\u8BED\u8A00\uFF09\u3002</p><p>YAML \u7684\u8BED\u6CD5\u548C\u5176\u4ED6\u9AD8\u7EA7\u8BED\u8A00\u7C7B\u4F3C\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7B80\u5355\u8868\u8FBE\u6E05\u5355\u3001\u6563\u5217\u8868\uFF0C\u6807\u91CF\u7B49\u6570\u636E\u5F62\u6001\u3002\u5B83\u4F7F\u7528\u7A7A\u767D\u7B26\u53F7\u7F29\u8FDB\u548C\u5927\u91CF\u4F9D\u8D56\u5916\u89C2\u7684\u7279\u8272\uFF0C\u7279\u522B\u9002\u5408\u7528\u6765\u8868\u8FBE\u6216\u7F16\u8F91\u6570\u636E\u7ED3\u6784\u3001\u5404\u79CD\u914D\u7F6E\u6587\u4EF6\u3001\u503E\u5370\u8C03\u8BD5\u5185\u5BB9\u3001\u6587\u4EF6\u5927\u7EB2\uFF08\u4F8B\u5982\uFF1A\u8BB8\u591A\u7535\u5B50\u90AE\u4EF6\u6807\u9898\u683C\u5F0F\u548CYAML\u975E\u5E38\u63A5\u8FD1\uFF09\u3002</p><p>YAML \u7684\u914D\u7F6E\u6587\u4EF6\u540E\u7F00\u4E3A <strong>.yml</strong>\uFF0C\u5982\uFF1A<strong>runoob.yml</strong> \u3002</p><h3 id="\u57FA\u672C\u8BED\u6CD5" tabindex="-1">\u57FA\u672C\u8BED\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a></h3><ul><li>\u5927\u5C0F\u5199\u654F\u611F</li><li>\u4F7F\u7528\u7F29\u8FDB\u8868\u793A\u5C42\u7EA7\u5173\u7CFB</li><li>\u7F29\u8FDB\u4E0D\u5141\u8BB8\u4F7F\u7528tab\uFF0C\u53EA\u5141\u8BB8\u7A7A\u683C</li><li>\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u4E0D\u91CD\u8981\uFF0C\u53EA\u8981\u76F8\u540C\u5C42\u7EA7\u7684\u5143\u7D20\u5DE6\u5BF9\u9F50\u5373\u53EF</li><li>&#39;#&#39;\u8868\u793A\u6CE8\u91CA</li></ul><hr><h3 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h3><p>YAML \u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u6570\u636E\u7C7B\u578B\uFF1A</p><ul><li>\u5BF9\u8C61\uFF1A\u952E\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u53C8\u79F0\u4E3A\u6620\u5C04\uFF08mapping\uFF09/ \u54C8\u5E0C\uFF08hashes\uFF09 / \u5B57\u5178\uFF08dictionary\uFF09</li><li>\u6570\u7EC4\uFF1A\u4E00\u7EC4\u6309\u6B21\u5E8F\u6392\u5217\u7684\u503C\uFF0C\u53C8\u79F0\u4E3A\u5E8F\u5217\uFF08sequence\uFF09 / \u5217\u8868\uFF08list\uFF09</li><li>\u7EAF\u91CF\uFF08scalars\uFF09\uFF1A\u5355\u4E2A\u7684\u3001\u4E0D\u53EF\u518D\u5206\u7684\u503C</li></ul><h3 id="yaml-\u5BF9\u8C61" tabindex="-1">YAML \u5BF9\u8C61 <a class="header-anchor" href="#yaml-\u5BF9\u8C61" aria-hidden="true">#</a></h3><p>\u5BF9\u8C61\u952E\u503C\u5BF9\u4F7F\u7528\u5192\u53F7\u7ED3\u6784\u8868\u793A <strong>key: value</strong>\uFF0C\u5192\u53F7\u540E\u9762\u8981\u52A0\u4E00\u4E2A\u7A7A\u683C\u3002</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 <strong>key:{key1: value1, key2: value2, ...}</strong>\u3002</p><p>\u8FD8\u53EF\u4EE5\u4F7F\u7528\u7F29\u8FDB\u8868\u793A\u5C42\u7EA7\u5173\u7CFB\uFF1B</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">key: </span></span>
<span class="line"><span style="color:#A6ACCD;">    child-key: value</span></span>
<span class="line"><span style="color:#A6ACCD;">    child-key2: value2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8F83\u4E3A\u590D\u6742\u7684\u5BF9\u8C61\u683C\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u95EE\u53F7\u52A0\u4E00\u4E2A\u7A7A\u683C\u4EE3\u8868\u4E00\u4E2A\u590D\u6742\u7684 key\uFF0C\u914D\u5408\u4E00\u4E2A\u5192\u53F7\u52A0\u4E00\u4E2A\u7A7A\u683C\u4EE3\u8868\u4E00\u4E2A value\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">?  </span></span>
<span class="line"><span style="color:#A6ACCD;">    - complexkey1</span></span>
<span class="line"><span style="color:#A6ACCD;">    - complexkey2</span></span>
<span class="line"><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - complexvalue1</span></span>
<span class="line"><span style="color:#A6ACCD;">    - complexvalue2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u610F\u601D\u5373\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u4E00\u4E2A\u6570\u7EC4 [complexkey1,complexkey2]\uFF0C\u5BF9\u5E94\u7684\u503C\u4E5F\u662F\u4E00\u4E2A\u6570\u7EC4 [complexvalue1,complexvalue2]</p><h3 id="yaml-\u6570\u7EC4" tabindex="-1">YAML \u6570\u7EC4 <a class="header-anchor" href="#yaml-\u6570\u7EC4" aria-hidden="true">#</a></h3><p>\u4EE5 <strong>-</strong> \u5F00\u5934\u7684\u884C\u8868\u793A\u6784\u6210\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- A</span></span>
<span class="line"><span style="color:#A6ACCD;">- B</span></span>
<span class="line"><span style="color:#A6ACCD;">- C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>YAML \u652F\u6301\u591A\u7EF4\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u884C\u5185\u8868\u793A\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">key: [value1, value2, ...]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6570\u636E\u7ED3\u6784\u7684\u5B50\u6210\u5458\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5219\u53EF\u4EE5\u5728\u8BE5\u9879\u4E0B\u9762\u7F29\u8FDB\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">-</span></span>
<span class="line"><span style="color:#A6ACCD;"> - A</span></span>
<span class="line"><span style="color:#A6ACCD;"> - B</span></span>
<span class="line"><span style="color:#A6ACCD;"> - C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E00\u4E2A\u76F8\u5BF9\u590D\u6742\u7684\u4F8B\u5B50\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">companies:</span></span>
<span class="line"><span style="color:#A6ACCD;">    -</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: company1</span></span>
<span class="line"><span style="color:#A6ACCD;">        price: 200W</span></span>
<span class="line"><span style="color:#A6ACCD;">    -</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: company2</span></span>
<span class="line"><span style="color:#A6ACCD;">        price: 500W</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u610F\u601D\u662F companies \u5C5E\u6027\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20\u53C8\u662F\u7531 id\u3001name\u3001price \u4E09\u4E2A\u5C5E\u6027\u6784\u6210\u3002</p><p>\u6570\u7EC4\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6D41\u5F0F(flow)\u7684\u65B9\u5F0F\u8868\u793A\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">companies: [{id: 1,name: company1,price: 200W},{id: 2,name: company2,price: 500W}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u590D\u5408\u7ED3\u6784" tabindex="-1">\u590D\u5408\u7ED3\u6784 <a class="header-anchor" href="#\u590D\u5408\u7ED3\u6784" aria-hidden="true">#</a></h3><p>\u6570\u7EC4\u548C\u5BF9\u8C61\u53EF\u4EE5\u6784\u6210\u590D\u5408\u7ED3\u6784\uFF0C\u4F8B\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">languages:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - Ruby</span></span>
<span class="line"><span style="color:#A6ACCD;">  - Perl</span></span>
<span class="line"><span style="color:#A6ACCD;">  - Python </span></span>
<span class="line"><span style="color:#A6ACCD;">websites:</span></span>
<span class="line"><span style="color:#A6ACCD;">  YAML: yaml.org </span></span>
<span class="line"><span style="color:#A6ACCD;">  Ruby: ruby-lang.org </span></span>
<span class="line"><span style="color:#A6ACCD;">  Python: python.org </span></span>
<span class="line"><span style="color:#A6ACCD;">  Perl: use.perl.org</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8F6C\u6362\u4E3A json \u4E3A\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{ </span></span>
<span class="line"><span style="color:#A6ACCD;">  languages: [ &#39;Ruby&#39;, &#39;Perl&#39;, &#39;Python&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  websites: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    YAML: &#39;yaml.org&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Ruby: &#39;ruby-lang.org&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Python: &#39;python.org&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Perl: &#39;use.perl.org&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7EAF\u91CF" tabindex="-1">\u7EAF\u91CF <a class="header-anchor" href="#\u7EAF\u91CF" aria-hidden="true">#</a></h3><p>\u7EAF\u91CF\u662F\u6700\u57FA\u672C\u7684\uFF0C\u4E0D\u53EF\u518D\u5206\u7684\u503C\uFF0C\u5305\u62EC\uFF1A</p><ul><li>\u5B57\u7B26\u4E32</li><li>\u5E03\u5C14\u503C</li><li>\u6574\u6570</li><li>\u6D6E\u70B9\u6570</li><li>Null</li><li>\u65F6\u95F4</li><li>\u65E5\u671F</li></ul><p>\u4F7F\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u5FEB\u901F\u4E86\u89E3\u7EAF\u91CF\u7684\u57FA\u672C\u4F7F\u7528\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">boolean: </span></span>
<span class="line"><span style="color:#A6ACCD;">    - TRUE  #true,True\u90FD\u53EF\u4EE5</span></span>
<span class="line"><span style="color:#A6ACCD;">    - FALSE  #false\uFF0CFalse\u90FD\u53EF\u4EE5</span></span>
<span class="line"><span style="color:#A6ACCD;">float:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 3.14</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 6.8523015e+5  #\u53EF\u4EE5\u4F7F\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">int:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 123</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 0b1010_0111_0100_1010_1110    #\u4E8C\u8FDB\u5236\u8868\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">null:</span></span>
<span class="line"><span style="color:#A6ACCD;">    nodeName: &#39;node&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent: ~  #\u4F7F\u7528~\u8868\u793Anull</span></span>
<span class="line"><span style="color:#A6ACCD;">string:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u54C8\u54C8</span></span>
<span class="line"><span style="color:#A6ACCD;">    - &#39;Hello world&#39;  #\u53EF\u4EE5\u4F7F\u7528\u53CC\u5F15\u53F7\u6216\u8005\u5355\u5F15\u53F7\u5305\u88F9\u7279\u6B8A\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    - newline</span></span>
<span class="line"><span style="color:#A6ACCD;">      newline2    #\u5B57\u7B26\u4E32\u53EF\u4EE5\u62C6\u6210\u591A\u884C\uFF0C\u6BCF\u4E00\u884C\u4F1A\u88AB\u8F6C\u5316\u6210\u4E00\u4E2A\u7A7A\u683C</span></span>
<span class="line"><span style="color:#A6ACCD;">date:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 2018-02-17    #\u65E5\u671F\u5FC5\u987B\u4F7F\u7528ISO 8601\u683C\u5F0F\uFF0C\u5373yyyy-MM-dd</span></span>
<span class="line"><span style="color:#A6ACCD;">datetime: </span></span>
<span class="line"><span style="color:#A6ACCD;">    -  2018-02-17T15:02:31+08:00    #\u65F6\u95F4\u4F7F\u7528ISO 8601\u683C\u5F0F\uFF0C\u65F6\u95F4\u548C\u65E5\u671F\u4E4B\u95F4\u4F7F\u7528T\u8FDE\u63A5\uFF0C\u6700\u540E\u4F7F\u7528+\u4EE3\u8868\u65F6\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5F15\u7528" tabindex="-1">\u5F15\u7528 <a class="header-anchor" href="#\u5F15\u7528" aria-hidden="true">#</a></h3><p><strong>&amp;</strong> \u951A\u70B9\u548C ***** \u522B\u540D\uFF0C\u53EF\u4EE5\u7528\u6765\u5F15\u7528:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">defaults: &amp;defaults</span></span>
<span class="line"><span style="color:#A6ACCD;">  adapter:  postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">  host:     localhost</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">development:</span></span>
<span class="line"><span style="color:#A6ACCD;">  database: myapp_development</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;&lt;: *defaults</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test:</span></span>
<span class="line"><span style="color:#A6ACCD;">  database: myapp_test</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;&lt;: *defaults</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u76F8\u5F53\u4E8E:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">defaults:</span></span>
<span class="line"><span style="color:#A6ACCD;">  adapter:  postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">  host:     localhost</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">development:</span></span>
<span class="line"><span style="color:#A6ACCD;">  database: myapp_development</span></span>
<span class="line"><span style="color:#A6ACCD;">  adapter:  postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">  host:     localhost</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test:</span></span>
<span class="line"><span style="color:#A6ACCD;">  database: myapp_test</span></span>
<span class="line"><span style="color:#A6ACCD;">  adapter:  postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">  host:     localhost</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>&amp;</strong> \u7528\u6765\u5EFA\u7ACB\u951A\u70B9\uFF08defaults\uFF09\uFF0C<strong>&lt;&lt;</strong> \u8868\u793A\u5408\u5E76\u5230\u5F53\u524D\u6570\u636E\uFF0C***** \u7528\u6765\u5F15\u7528\u951A\u70B9\u3002</p><p>\u4E0B\u9762\u662F\u53E6\u4E00\u4E2A\u4F8B\u5B50:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- &amp;showell Steve </span></span>
<span class="line"><span style="color:#A6ACCD;">- Clark </span></span>
<span class="line"><span style="color:#A6ACCD;">- Brian </span></span>
<span class="line"><span style="color:#A6ACCD;">- Oren </span></span>
<span class="line"><span style="color:#A6ACCD;">- *showell </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8F6C\u4E3A JavaScript \u4EE3\u7801\u5982\u4E0B:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[ &#39;Steve&#39;, &#39;Clark&#39;, &#39;Brian&#39;, &#39;Oren&#39;, &#39;Steve&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u53C2\u8003\u5730\u5740\uFF1A</p><ul><li><a href="https://www.ruanyifeng.com/blog/2016/07/yaml.html" target="_blank" rel="noopener noreferrer">https://www.ruanyifeng.com/blog/2016/07/yaml.html</a></li></ul></blockquote>`,55),o=[e];function c(t,r,A,i,C,y){return n(),a("div",null,o)}var u=s(p,[["render",c]]);export{d as __pageData,u as default};
