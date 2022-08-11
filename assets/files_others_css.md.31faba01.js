import{_ as s,c as p,o as e,a}from"./app.feb1665e.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"files/others/css.md"}'),l={name:"files/others/css.md"},n=a(`<p>what</p><blockquote><p>\u6837\u5F0F\u8868</p></blockquote><p>why</p><blockquote><p>\u6E32\u67D3\u9875\u9762\uFF0C\u7ED3\u6784\u548C\u6E32\u67D3\u5206\u79BB</p></blockquote><p>css \u5947\u602A\u7528\u6CD5</p><blockquote><p>\u53D8\u91CF\uFF0C\u8BA1\u7B97\uFF0C\u4F2A\u7C7B\uFF0C\u4F2A\u5143\u7D20</p></blockquote><p>css\u9884\u7F16\u8BD1</p><p>\u201C\u539F\u751F\u7684 CSS \u4E0D\u652F\u6301\u5D4C\u5957\u5199\u6CD5, \u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 CSS \u7684\u6269\u5C55\u8BED\u8A00 Sass \u548C Less \u6765\u5B9E\u73B0\u5D4C\u5957.\u201D\uFF0C</p><p>stylus\uFF0Cless\uFF0Csass\uFF0Cscss</p><p>\u9884\u7F16\u8BD1\u8BED\u8A00\u5178\u578B\u7528\u6CD5</p><blockquote><p>\u5D4C\u5957\u8BED\u6CD5\u3001\u53D8\u91CF\u3001\u51FD\u6570\u3001\u6837\u5F0F\u6C61\u67D3\uFF0Cvue-scope\uFF0Cdeep\uFF0Crbga,\u5361\u5238 \uFF0Ccss hack\uFF0C flex\u5E03\u5C40</p></blockquote><p>css\u4E0Edom</p><p>1\u3001css\u5E76\u4E0D\u4F1A\u963B\u585EDOM\u6811\u7684\u89E3\u6790 2\u3001css\u52A0\u8F7D\u4F1A\u963B\u585EDOM\u6811\u6E32\u67D3 3\u3001css\u52A0\u8F7D\u4F1A\u963B\u585E\u540E\u9762js\u8BED\u53E5\u7684\u6267\u884C\uFF0C\u4E0D\u963B\u585Ejs\u7684\u52A0\u8F7D</p><p>css\u4E0E\u517C\u5BB9</p><p>\u9875\u7709\u5C4F\uFF0Cpostcss\uFF0Crem\uFF0Cvw\uFF0C</p><p>rem\u5BF9\u4E8E\u5185\u5D4C\uFF0C\u5916\u94FE\uFF0C\u884C\u5185\u6837\u5F0F\u7684\u5904\u7406</p><p>css\u4E0E\u7F16\u8BD1\u5DE5\u5177\uFF08gulp\uFF0Cwebpack\uFF0Cgrunt\uFF0Cvite\uFF0Crollup\uFF09</p><p>gulp\uFF1Agulp-minify-css\uFF0Cgulp-less\uFF0Cgulp-ruby-sass\uFF0C</p><p>webpack\uFF1Anode-sass\u3001style-loader\u3001css-loader\u3001sass-loader\uFF0Cpostcss-loader\uFF08<a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener noreferrer">Autoprefixer</a> \uFF09</p><p>vite\uFF1A less\u3001less-loader</p><p>rollup: postcss\u3001 rollup-plugin-postcs</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">  use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;style-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6267\u884C\u987A\u5E8F\uFF1A\u94FE\u5F0F\u7684\uFF0C\u6240\u4EE5\u5728use\u6570\u7EC4\u4E2D\u4E0B\u9762\u7684\u90E8\u5206\u4F1A\u5148\u6267\u884C\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u7684\u6267\u884C\u987A\u5E8F\u5176\u5B9E\u662Fless-loader &gt; css-loader &gt; style-loader</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5176\u5B9E\u4E3A\u5565\u662F\u4ECE\u53F3\u5F80\u5DE6\uFF0C\u800C\u4E0D\u4ECE\u5DE6\u5F80\u53F3\uFF0C\u53EA\u662FWebpack\u9009\u62E9\u4E86compose\u65B9\u5F0F\uFF0C\uFF08\u51FD\u6570\u7EC4\u5408\u7684\u4E24\u79CD\u5F62\u5F0F\uFF1A\u4E00\u79CD\u662Fpipe\uFF0C\u53E6\u4E00\u79CD\u662Fcompose\u3002\u524D\u8005\u4ECE\u5DE6\u5411\u53F3\u7EC4\u5408\u51FD\u6570\uFF0C\u540E\u8005\u65B9\u5411\u76F8\u53CD\u3002\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>less-loader\u539F\u7406\uFF0Cast\u8BED\u6CD5\u6811</p><p>CSSReset</p><p>css\u89C4\u8303</p><p>stylelint</p><p>psd\u5207\u56FE</p>`,27),o=[n];function c(t,r,i,d,u,C){return e(),p("div",null,o)}var y=s(l,[["render",c]]);export{_ as __pageData,y as default};
