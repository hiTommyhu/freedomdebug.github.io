import{_ as s,c as a,o as n,a as e}from"./app.e1d3f026.js";const u=JSON.parse('{"title":"node\u5E38\u7528\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"chalk","slug":"chalk"},{"level":2,"title":"shelljs","slug":"shelljs"},{"level":2,"title":"recast","slug":"recast"}],"relativePath":"files/nodejs/npm.md"}'),l={name:"files/nodejs/npm.md"},c=e(`<h1 id="node\u5E38\u7528\u5305" tabindex="-1">node\u5E38\u7528\u5305 <a class="header-anchor" href="#node\u5E38\u7528\u5305" aria-hidden="true">#</a></h1><h2 id="chalk" tabindex="-1">chalk <a class="header-anchor" href="#chalk" aria-hidden="true">#</a></h2><blockquote><p>\u529F\u80FD: \u63A7\u5236\u53F0\u6253\u5370\u5E26\u989C\u8272\u7684\u8BF4\u660E</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const chalk = require(&#39;chalk&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">chalk.red(&#39;xxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">chalk.green(&#39;xxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">chalk.yellow(&#39;xxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="shelljs" tabindex="-1">shelljs <a class="header-anchor" href="#shelljs" aria-hidden="true">#</a></h2><blockquote><p>\u529F\u80FD\uFF1A\u6267\u884C\u811A\u672C\u547D\u4EE4</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const shell = require(&#39;shelljs&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const shellPromise = (cmd, silent = true) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        shell.exec(cmd, { silent: silent }, function(code, stdout, stderr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return code === 0 ? resolve(stdout) : reject(stderr)</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const test =  async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const currentBranch =  (await shellPromise(&#39;git branch --show-current&#39;) || &#39;&#39;).trim()</span></span>
<span class="line"><span style="color:#A6ACCD;">  return currentBranch</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="recast" tabindex="-1">recast <a class="header-anchor" href="#recast" aria-hidden="true">#</a></h2><blockquote><p>\u73A9\u8F6CAST</p></blockquote>`,9),p=[c];function t(o,r,i,d,h,A){return n(),a("div",null,p)}var _=s(l,[["render",t]]);export{u as __pageData,_ as default};
