import{_ as s,c as n,o as a,a as p}from"./app.89e845e1.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"files/WebWorker/\u6D45\u6790Web Worker\u4F7F\u7528\u6280\u5DE7\u53CA\u5B9E\u6218\u573A\u666F.md"}'),e={name:"files/WebWorker/\u6D45\u6790Web Worker\u4F7F\u7528\u6280\u5DE7\u53CA\u5B9E\u6218\u573A\u666F.md"},l=p(`<p>\u4EE5\u524D\u6211\u4EEC\u603B\u8BF4\uFF0CJS\u662F\u5355\u7EBF\u7A0B\u6CA1\u6709\u591A\u7EBF\u7A0B\uFF0C\u5F53JS\u5728\u9875\u9762\u4E2D\u8FD0\u884C\u957F\u8017\u65F6\u540C\u6B65\u4EFB\u52A1\u7684\u65F6\u5019\u5C31\u4F1A\u5BFC\u81F4\u9875\u9762\u5047\u6B7B\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\uFF0C\u4ECE\u800C\u9700\u8981\u8BBE\u7F6E\u628A\u4EFB\u52A1\u653E\u5728\u4EFB\u52A1\u961F\u5217\u4E2D\uFF1B\u6267\u884C\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u4E5F\u5E76\u975E\u591A\u7EBF\u7A0B\u8FDB\u884C\u7684\uFF0C\u7136\u800C\u73B0\u5728HTML5\u63D0\u4F9B\u4E86\u6211\u4EEC\u524D\u7AEF\u5F00\u53D1\u8FD9\u6837\u7684\u80FD\u529B - Web Workers API\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u4E00\u770B Web Worker \u662F\u4EC0\u4E48\uFF0C\u600E\u4E48\u53BB\u4F7F\u7528\u5B83\uFF0C\u5728\u5B9E\u9645\u751F\u4EA7\u4E2D\u5982\u4F55\u53BB\u7528\u5B83\u6765\u8FDB\u884C\u4EA7\u51FA\u3002</p><p>\u4E00\u3001\u6982\u8FF0 \u3000\u3000JavaScript \u8BED\u8A00\u91C7\u7528\u7684\u662F\u5355\u7EBF\u7A0B\u6A21\u578B\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6240\u6709\u4EFB\u52A1\u53EA\u80FD\u5728\u4E00\u4E2A\u7EBF\u7A0B\u4E0A\u5B8C\u6210\uFF0C\u4E00\u6B21\u53EA\u80FD\u505A\u4E00\u4EF6\u4E8B\u3002\u524D\u9762\u7684\u4EFB\u52A1\u6CA1\u505A\u5B8C\uFF0C\u540E\u9762\u7684\u4EFB\u52A1\u53EA\u80FD\u7B49\u7740\u3002\u968F\u7740\u7535\u8111\u8BA1\u7B97\u80FD\u529B\u7684\u589E\u5F3A\uFF0C\u5C24\u5176\u662F\u591A\u6838 CPU \u7684\u51FA\u73B0\uFF0C\u5355\u7EBF\u7A0B\u5E26\u6765\u5F88\u5927\u7684\u4E0D\u4FBF\uFF0C\u65E0\u6CD5\u5145\u5206\u53D1\u6325\u8BA1\u7B97\u673A\u7684\u8BA1\u7B97\u80FD\u529B\u3002</p><p>Web Workers \u4F7F\u5F97\u4E00\u4E2AWeb\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u5728\u4E0E\u4E3B\u6267\u884C\u7EBF\u7A0B\u5206\u79BB\u7684\u540E\u53F0\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u4E00\u4E2A\u811A\u672C\u64CD\u4F5C\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u53EF\u4EE5\u5728\u4E00\u4E2A\u5355\u72EC\u7684\u7EBF\u7A0B\u4E2D\u6267\u884C\u8D39\u65F6\u7684\u5904\u7406\u4EFB\u52A1\uFF0C\u4ECE\u800C\u5141\u8BB8\u4E3B\uFF08\u901A\u5E38\u662FUI\uFF09\u7EBF\u7A0B\u8FD0\u884C\u800C\u4E0D\u88AB\u963B\u585E\u3002</p><p>Web Worker \u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u4E3A JavaScript \u521B\u9020\u591A\u7EBF\u7A0B\u73AF\u5883\uFF0C\u5141\u8BB8\u4E3B\u7EBF\u7A0B\u521B\u5EFA Worker \u7EBF\u7A0B\uFF0C\u5C06\u4E00\u4E9B\u4EFB\u52A1\u5206\u914D\u7ED9\u540E\u8005\u8FD0\u884C\u3002</p><p>\u5728\u4E3B\u7EBF\u7A0B\u8FD0\u884C\u7684\u540C\u65F6\uFF0Cworker\u7EBF\u7A0B\u4E5F\u5728\u8FD0\u884C\uFF0C\u76F8\u4E92\u4E0D\u5E72\u6270\u3002\u7B49\u5230 Worker \u7EBF\u7A0B\u5B8C\u6210\u8BA1\u7B97\u4EFB\u52A1\uFF0C\u518D\u628A\u7ED3\u679C\u8FD4\u56DE\u7ED9\u4E3B\u7EBF\u7A0B\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u4E3B\u7EBF\u7A0B\u53EF\u4EE5\u628A\u4E00\u4E9B\u8BA1\u7B97\u5BC6\u96C6\u578B\u6216\u9AD8\u5EF6\u8FDF\u7684\u4EFB\u52A1\u4EA4\u7ED9worker\u7EBF\u7A0B\u6267\u884C\uFF0C\u88AB Worker \u7EBF\u7A0B\u8D1F\u62C5\u4E86\uFF0C\u8FD9\u6837\u4E3B\u7EBF\u7A0B\uFF08\u901A\u5E38\u8D1F\u8D23 UI \u4EA4\u4E92\uFF09\u5C31\u4F1A\u5F88\u8F7B\u677E\u6D41\u7545\uFF0C\u4E0D\u4F1A\u88AB\u963B\u585E\u6216\u62D6\u6162\u3002</p><p>\u4F46\u662F\u6CE8\u610F\u8FD9\u5E76\u4E0D\u662F\u610F\u5473\u7740JS\u8BED\u8A00\u672C\u8EAB\u652F\u6301\u4E86\u591A\u7EBF\u7A0B\u80FD\u529B\uFF0C\u800C\u662F\u6D4F\u89C8\u5668\u4F5C\u4E3A\u5BBF\u4E3B\u73AF\u5883\u63D0\u4F9B\u4E86JS\u4E00\u4E2A\u591A\u7EBF\u7A0B\u8FD0\u884C\u7684\u73AF\u5883\u3002</p><p>\u800C\u4E14Worker \u7EBF\u7A0B\u4E00\u65E6\u65B0\u5EFA\u6210\u529F\uFF0C\u5C31\u4F1A\u59CB\u7EC8\u8FD0\u884C\uFF0C\u4E0D\u4F1A\u88AB\u4E3B\u7EBF\u7A0B\u4E0A\u7684\u6D3B\u52A8\uFF08\u6BD4\u5982\u7528\u6237\u70B9\u51FB\u6309\u94AE\u3001\u63D0\u4EA4\u8868\u5355\uFF09\u6253\u65AD\u3002\u8FD9\u6837\u6709\u5229\u4E8E\u968F\u65F6\u54CD\u5E94\u4E3B\u7EBF\u7A0B\u7684\u901A\u4FE1\u3002\u4F46\u662F\uFF0C\u8FD9\u4E5F\u9020\u6210\u4E86 Worker \u6BD4\u8F83\u8017\u8D39\u8D44\u6E90\uFF0C\u4E0D\u5E94\u8BE5\u8FC7\u5EA6\u4F7F\u7528\uFF0C\u800C\u4E14\u4E00\u65E6\u4F7F\u7528\u5B8C\u6BD5\uFF0C\u5C31\u5E94\u8BE5\u6CE8\u610F\u53CA\u65F6\u5173\u95ED\u3002</p><p>\u6216\u8005\u8BF4\uFF1A\u5982\u679Cworker\u65E0\u5B9E\u4F8B\u5F15\u7528\uFF0C\u8BE5worker\u7A7A\u95F2\u540E\u7ACB\u5373\u4F1A\u88AB\u5173\u95ED\uFF1B\u5982\u679Cworker\u5B9E\u5217\u5F15\u7528\u4E0D\u4E3A0\uFF0C\u8BE5worker\u7A7A\u95F2\u4E5F\u4E0D\u4F1A\u88AB\u5173\u95ED\u3002</p><p>\u4E8C\u3001\u4F7F\u7528 1\u3001\u9650\u5236 \u3000\u3000worker\u7EBF\u7A0B\u7684\u4F7F\u7528\u6709\u4E00\u4E9B\u6CE8\u610F\u70B9\uFF1A</p><p>\uFF081\uFF09\u540C\u6E90\u9650\u5236\uFF1A\u5206\u914D\u7ED9 Worker \u7EBF\u7A0B\u8FD0\u884C\u7684\u811A\u672C\u6587\u4EF6\uFF0C\u5FC5\u987B\u4E0E\u4E3B\u7EBF\u7A0B\u7684\u811A\u672C\u6587\u4EF6\u540C\u6E90\u3002</p><p>\uFF082\uFF09\u6587\u4EF6\u9650\u5236\uFF1A\u4E3A\u4E86\u5B89\u5168\uFF0CWorker \u7EBF\u7A0B\u65E0\u6CD5\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u5373\u4E0D\u80FD\u6253\u5F00\u672C\u673A\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF08file://\uFF09\uFF0C\u5B83\u6240\u52A0\u8F7D\u7684\u811A\u672C\u5FC5\u987B\u6765\u81EA\u7F51\u7EDC\uFF0C\u4E14\u9700\u8981\u4E0E\u4E3B\u7EBF\u7A0B\u7684\u811A\u672C\u540C\u6E90\u3002</p><p>\uFF083\uFF09DOM\u64CD\u4F5C\u9650\u5236\uFF1Aworker\u7EBF\u7A0B\u5728\u4E0E\u4E3B\u7EBF\u7A0B\u7684window\u4E0D\u540C\u7684\u53E6\u4E00\u4E2A\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF0C\u5176\u4E2D\u65E0\u6CD5\u8BFB\u53D6\u4E3B\u7EBF\u7A0B\u6240\u5728\u7F51\u9875\u7684DOM\u5BF9\u8C61\uFF0C\u4E5F\u4E0D\u80FD\u83B7\u53D6 document\u3001window\u7B49\u5BF9\u8C61\uFF0C\u4F46\u662F\u53EF\u4EE5\u83B7\u53D6navigator\u3001location(\u53EA\u8BFB)\u3001XMLHttpRequest\u3001setTimeout\u7B49\u6D4F\u89C8\u5668API\u3002</p><p>\uFF084\uFF09\u901A\u4FE1\u9650\u5236\uFF1Aworker\u7EBF\u7A0B\u4E0E\u4E3B\u7EBF\u7A0B\u4E0D\u5728\u540C\u4E00\u4E2A\u4E0A\u4E0B\u6587\uFF0C\u4E0D\u80FD\u76F4\u63A5\u901A\u4FE1\uFF0C\u9700\u8981\u901A\u8FC7postMessage\u65B9\u6CD5\u4F20\u9012\u6D88\u606F\u6765\u901A\u4FE1\u3002</p><p>\uFF085\uFF09\u811A\u672C\u9650\u5236\uFF1Aworker\u7EBF\u7A0B\u4E0D\u80FD\u6267\u884Calert\u3001confirm\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528 XMLHttpRequest \u5BF9\u8C61\u53D1\u51FAajax\u8BF7\u6C42\u3002</p><p>2\u3001\u57FA\u672C\u7528\u6CD5 \uFF081\uFF09Worker()\u6784\u9020\u51FD\u6570 \u3000\u3000\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u751F\u6210 Worker \u7EBF\u7A0B\u5F88\u5BB9\u6613\uFF1A\u4E3B\u7EBF\u7A0B\u91C7\u7528new\u547D\u4EE4\uFF0C\u8C03\u7528Worker()\u6784\u9020\u51FD\u6570\uFF0C\u65B0\u5EFA\u4E00\u4E2A Worker \u7EBF\u7A0B\u3002</p><p>var myWorker = new Worker(jsUrl, options) \u3000\u3000\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u811A\u672C\u7684\u7F51\u5740\uFF08\u5FC5\u987B\u9075\u5B88\u540C\u6E90\u653F\u7B56\uFF09\uFF0C\u8BE5\u53C2\u6570\u662F\u5FC5\u9700\u7684\uFF0C\u4E14\u53EA\u80FD\u52A0\u8F7D JS \u811A\u672C\uFF0C\u5426\u5219\u62A5\u9519\u3002\u8BE5\u6587\u4EF6\u5C31\u662F Worker \u7EBF\u7A0B\u6240\u8981\u6267\u884C\u7684\u4EFB\u52A1\u3002\u7531\u4E8E Worker \u4E0D\u80FD\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u811A\u672C\u5FC5\u987B\u6765\u81EA\u7F51\u7EDC\u3002\u5982\u679C\u4E0B\u8F7D\u6CA1\u6709\u6210\u529F\uFF08\u6BD4\u5982404\u9519\u8BEF\uFF09\uFF0CWorker \u5C31\u4F1A\u9ED8\u9ED8\u5730\u5931\u8D25\u3002</p><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u914D\u7F6E\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u53EF\u9009\u3002\u5B83\u7684\u4E00\u4E2A\u4F5C\u7528\u5C31\u662F\u6307\u5B9A Worker \u7684\u540D\u79F0\uFF0C\u7528\u6765\u533A\u5206\u591A\u4E2A Worker \u7EBF\u7A0B\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u4E3B\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">var myWorker = new Worker(&#39;worker.js&#39;, { name : &#39;myWorker&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Worker \u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">self.name // myWorker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\uFF0C\u4E3B\u7EBF\u7A0B\u8C03\u7528worker.postMessage()\u65B9\u6CD5\uFF0C\u5411 Worker \u53D1\u6D88\u606F\u3002</p><p>\uFF082\uFF09\u6D88\u606F\u4F20\u9012 \u4E3B\u7EBF\u7A0B\uFF1A</p><p>\u7136\u540E\uFF0C\u4E3B\u7EBF\u7A0B\u8C03\u7528worker.postMessage()\u65B9\u6CD5\uFF0C\u5411 Worker \u53D1\u6D88\u606F\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">worker.postMessage(&#39;Hello World&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">worker.postMessage({method: &#39;echo&#39;, args: [&#39;Work&#39;]});</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000worker.postMessage()\u65B9\u6CD5\u7684\u53C2\u6570\uFF0C\u5C31\u662F\u4E3B\u7EBF\u7A0B\u4F20\u7ED9 Worker \u7684\u6570\u636E\u3002\u5B83\u53EF\u4EE5\u662F\u5404\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5305\u62EC\u4E8C\u8FDB\u5236\u6570\u636E\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\uFF0C\u4E3B\u7EBF\u7A0B\u901A\u8FC7worker.onmessage\u6307\u5B9A\u76D1\u542C\u51FD\u6570\uFF0C\u63A5\u6536\u5B50\u7EBF\u7A0B\u53D1\u56DE\u6765\u7684\u6D88\u606F\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">worker.onmessage = function (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;Received message &#39; + event.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">  doSomething();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function doSomething() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6267\u884C\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">  worker.postMessage(&#39;Work done!&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u4E8B\u4EF6\u5BF9\u8C61\u7684data\u5C5E\u6027\u53EF\u4EE5\u83B7\u53D6 Worker \u53D1\u6765\u7684\u6570\u636E\u3002</p><p>Worker \u5B8C\u6210\u4EFB\u52A1\u4EE5\u540E\uFF0C\u4E3B\u7EBF\u7A0B\u5C31\u53EF\u4EE5\u628A\u5B83\u5173\u6389\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">worker.terminate();</span></span>
<span class="line"><span style="color:#A6ACCD;">Worker \u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000Worker \u7EBF\u7A0B\u5185\u90E8\u9700\u8981\u6709\u4E00\u4E2A\u76D1\u542C\u51FD\u6570\uFF0C\u76D1\u542Cmessage\u4E8B\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">self.addEventListener(&#39;message&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  self.postMessage(&#39;You said: &#39; + e.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Cself\u4EE3\u8868\u5B50\u7EBF\u7A0B\u81EA\u8EAB\uFF0C\u5373\u5B50\u7EBF\u7A0B\u7684\u5168\u5C40\u5BF9\u8C61\u3002\u56E0\u6B64\uFF0C\u7B49\u540C\u4E8E\u4E0B\u9762\u4E24\u79CD\u5199\u6CD5\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5199\u6CD5\u4E00</span></span>
<span class="line"><span style="color:#A6ACCD;">this.addEventListener(&#39;message&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.postMessage(&#39;You said: &#39; + e.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, false);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5199\u6CD5\u4E8C</span></span>
<span class="line"><span style="color:#A6ACCD;">addEventListener(&#39;message&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  postMessage(&#39;You said: &#39; + e.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, false);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9664\u4E86\u4F7F\u7528self.addEventListener()\u6307\u5B9A\u76D1\u542C\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528self.onmessage\u6307\u5B9A\u3002\u76D1\u542C\u51FD\u6570\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u5B83\u7684data\u5C5E\u6027\u5305\u542B\u4E3B\u7EBF\u7A0B\u53D1\u6765\u7684\u6570\u636E\u3002</p><p>self.postMessage()\u65B9\u6CD5\u7528\u6765\u5411\u4E3B\u7EBF\u7A0B\u53D1\u9001\u6D88\u606F\u3002</p><p>\u6839\u636E\u4E3B\u7EBF\u7A0B\u53D1\u6765\u7684\u6570\u636E\uFF0CWorker \u7EBF\u7A0B\u53EF\u4EE5\u8C03\u7528\u4E0D\u540C\u7684\u65B9\u6CD5\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">self.addEventListener(&#39;message&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var data = e.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (data.cmd) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;start&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      self.postMessage(&#39;WORKER STARTED: &#39; + data.msg);</span></span>
<span class="line"><span style="color:#A6ACCD;">      break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;stop&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      self.postMessage(&#39;WORKER STOPPED: &#39; + data.msg);</span></span>
<span class="line"><span style="color:#A6ACCD;">      self.close(); // Terminates the worker.</span></span>
<span class="line"><span style="color:#A6ACCD;">      break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      self.postMessage(&#39;Unknown command: &#39; + data.msg);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}, false);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Cself.close()\u7528\u4E8E\u5728 Worker \u5185\u90E8\u5173\u95ED\u81EA\u8EAB\u3002</p><p>\uFF083\uFF09API\u5B9E\u4F8B \u3000\u3000\u5173\u4E8Eapi\u4EC0\u4E48\u7684\uFF0C\u76F4\u63A5\u4E0A\u4F8B\u5B50\u5927\u6982\u5C31\u80FD\u660E\u767D\u4E86\uFF0C\u9996\u5148\u662Fworker\u7EBF\u7A0B\u7684js\u6587\u4EF6\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// workerThread1.js</span></span>
<span class="line"><span style="color:#A6ACCD;">let i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function simpleCount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  i++</span></span>
<span class="line"><span style="color:#A6ACCD;">  self.postMessage(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(simpleCount, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">simpleCount()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">self.onmessage = ev =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  postMessage(ev.data + &#39; \u5475\u5475~&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728HTML\u6587\u4EF6\u4E2D\u7684body\u4E2D\uFF1A</p><p>// \u4E3B\u7EBF\u7A0B\uFF0CHTML\u6587\u4EF6\u7684body\u6807\u7B7E\u4E2D</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Worker \u8F93\u51FA\u5185\u5BB9\uFF1A&lt;span id=&#39;app&#39;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;input type=&#39;text&#39; title=&#39;&#39; id=&#39;msg&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button onclick=&#39;sendMessage()&#39;&gt;\u53D1\u9001&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button onclick=&#39;stopWorker()&#39;&gt;stop!&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script type=&#39;text/javascript&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof(Worker) === &#39;undefined&#39;)    // \u4F7F\u7528Worker\u524D\u68C0\u67E5\u4E00\u4E0B\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.writeln(&#39; Sorry! No Web Worker support.. &#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.w = new Worker(&#39;workerThread1.js&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.w.onmessage = ev =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.getElementById(&#39;app&#39;).innerHTML = ev.data</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    window.w.onerror = err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      w.terminate()</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(error.filename, error.lineno, error.message) // \u53D1\u751F\u9519\u8BEF\u7684\u6587\u4EF6\u540D\u3001\u884C\u53F7\u3001\u9519\u8BEF\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    function sendMessage() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const msg = document.getElementById(&#39;msg&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      window.w.postMessage(msg.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    function stopWorker() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      window.w.terminate()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u81EA\u5DF1\u8FD0\u884C\u4E00\u4E0B\u770B\u770B\u6548\u679C\uFF0C\u4E0A\u9762\u7528\u5230\u4E86\u4E00\u4E9B\u5E38\u7528\u7684api\uFF1A</p><p>\u4E3B\u7EBF\u7A0B\u4E2D\u7684api\uFF0Cworker\u8868\u793A\u662F Worker \u7684\u5B9E\u4F8B\uFF1A</p><p>worker.postMessage: \u4E3B\u7EBF\u7A0B\u5F80worker\u7EBF\u7A0B\u53D1\u6D88\u606F\uFF0C\u6D88\u606F\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u6570\u636E\uFF0C\u5305\u62EC\u4E8C\u8FDB\u5236\u6570\u636E worker.terminate: \u4E3B\u7EBF\u7A0B\u5173\u95EDworker\u7EBF\u7A0B worker.onmessage: \u6307\u5B9Aworker\u7EBF\u7A0B\u53D1\u6D88\u606F\u65F6\u7684\u56DE\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7worker.addEventListener(&#39;message&#39;,cb)\u7684\u65B9\u5F0F worker.onerror: \u6307\u5B9Aworker\u7EBF\u7A0B\u53D1\u751F\u9519\u8BEF\u65F6\u7684\u56DE\u8C03\uFF0C\u4E5F\u53EF\u4EE5 worker.addEventListener(&#39;error&#39;,cb) \u3000\u3000Worker\u7EBF\u7A0B\u4E2D\u5168\u5C40\u5BF9\u8C61\u4E3A self\uFF0C\u4EE3\u8868\u5B50\u7EBF\u7A0B\u81EA\u8EAB\uFF0C\u8FD9\u65F6 this\u6307\u5411self\uFF0C\u5176\u4E0A\u6709\u4E00\u4E9Bapi\uFF1A</p><p>self.postMessage: worker\u7EBF\u7A0B\u5F80\u4E3B\u7EBF\u7A0B\u53D1\u6D88\u606F\uFF0C\u6D88\u606F\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u6570\u636E\uFF0C\u5305\u62EC\u4E8C\u8FDB\u5236\u6570\u636E self.close: worker\u7EBF\u7A0B\u5173\u95ED\u81EA\u5DF1 self.onmessage: \u6307\u5B9A\u4E3B\u7EBF\u7A0B\u53D1worker\u7EBF\u7A0B\u6D88\u606F\u65F6\u7684\u56DE\u8C03\uFF0C\u4E5F\u53EF\u4EE5self.addEventListener(&#39;message&#39;,cb) self.onerror: \u6307\u5B9Aworker\u7EBF\u7A0B\u53D1\u751F\u9519\u8BEF\u65F6\u7684\u56DE\u8C03\uFF0C\u4E5F\u53EF\u4EE5 self.addEventListener(&#39;error&#39;,cb) \u3000\u3000\u6CE8\u610F\uFF0Cw.postMessage(aMessage, transferList) \u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0CaMessage \u662F\u53EF\u4EE5\u4F20\u9012\u4EFB\u4F55\u7C7B\u578B\u6570\u636E\u7684\uFF0C\u5305\u62EC\u5BF9\u8C61\uFF0C\u8FD9\u79CD\u901A\u4FE1\u662F\u62F7\u8D1D\u5173\u7CFB\uFF0C\u5373\u662F\u4F20\u503C\u800C\u4E0D\u662F\u4F20\u5740\uFF0CWorker \u5BF9\u901A\u4FE1\u5185\u5BB9\u7684\u4FEE\u6539\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u4E3B\u7EBF\u7A0B\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u6D4F\u89C8\u5668\u5185\u90E8\u7684\u8FD0\u884C\u673A\u5236\u662F\uFF0C\u5148\u5C06\u901A\u4FE1\u5185\u5BB9\u4E32\u884C\u5316\uFF0C\u7136\u540E\u628A\u4E32\u884C\u5316\u540E\u7684\u5B57\u7B26\u4E32\u53D1\u7ED9 Worker\uFF0C\u540E\u8005\u518D\u5C06\u5B83\u8FD8\u539F\u3002\u4E00\u4E2A\u53EF\u9009\u7684 Transferable \u5BF9\u8C61\u7684\u6570\u7EC4\uFF0C\u7528\u4E8E\u4F20\u9012\u6240\u6709\u6743\u3002\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u7684\u6240\u6709\u6743\u88AB\u8F6C\u79FB\uFF0C\u5728\u53D1\u9001\u5B83\u7684\u4E0A\u4E0B\u6587\u4E2D\u5C06\u53D8\u4E3A\u4E0D\u53EF\u7528\uFF08\u4E2D\u6B62\uFF09\uFF0C\u5E76\u4E14\u53EA\u6709\u5728\u5B83\u88AB\u53D1\u9001\u5230\u7684worker\u4E2D\u53EF\u7528\u3002\u53EF\u8F6C\u79FB\u5BF9\u8C61\u662F\u5982ArrayBuffer\uFF0CMessagePort\u6216ImageBitmap\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0CtransferList\u6570\u7EC4\u4E2D\u4E0D\u53EF\u4F20\u5165null\u3002</p><p>Transferable \u63A5\u53E3\u4EE3\u8868\u4E00\u4E2A\u80FD\u5728\u4E0D\u540C\u53EF\u6267\u884C\u4E0A\u4E0B\u6587\u4E4B\u95F4\uFF0C\u4F8B\u5982\u5982\u4E3B\u7EBF\u7A0B\u548C Worker \u4E4B\u95F4\uFF0C\u76F8\u4E92\u4F20\u9012\u7684\u5BF9\u8C61\u3002\u8FD9\u662F\u4E00\u4E2A\u62BD\u8C61\u63A5\u53E3\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5BF9\u8C61\u5C5E\u4E8E\u6B64\u7C7B\u578B\u3002\u5B83\u4E5F\u6CA1\u6709\u5B9A\u4E49\u4EFB\u4F55\u65B9\u6CD5\u548C\u5C5E\u6027\uFF1B\u5B83\u53EA\u662F\u4E00\u4E2A\u6807\u7B7E\uFF0C\u7528\u6765\u6307\u793A\u5BF9\u8C61\u5728\u7279\u5B9A\u573A\u5408\u4E0B\uFF0C\u6BD4\u5982\u5982\u901A\u8FC7 Worker.postMessage() \u65B9\u6CD5\u4F20\u9012\u5230 Worker\uFF0C\u662F\u53EF\u7528\u7684\u3002</p><p>\u5907\u6CE8\uFF1A\u6280\u672F\u4E0A\uFF0CTransferable \u63A5\u53E3\u5DF2\u4E0D\u590D\u5B58\u5728\u3002\u4F46\u662F\uFF0CTransferable \u5BF9\u8C61\u7684\u6548\u7528\u4F9D\u65E7\u5B58\u5728\uFF0C\u53EA\u662F\u5176\u5B9E\u73B0\u88AB\u79FB\u5230\u4E86\u66F4\u52A0\u5E95\u5C42\u7684\u4F4D\u7F6E\u3002\uFF08\u8F6C\u800C\u901A\u8FC7WebIDL \u62D3\u5C55\u5C5E\u6027 [Transferable] \u5B9E\u73B0\uFF09\u3002</p><p>ArrayBuffer\u3001MessagePort \u548C ImageBitmap \u5B9E\u73B0\u4E86\u6B64\u63A5\u53E3\u3002</p><p>\u66F4\u8BE6\u7EC6\u7684API\u53C2\u89C1 MDN - WorkerGlobalScope\u3002</p><p>\uFF084\uFF09Worker \u52A0\u8F7D\u811A\u672C \u3000\u3000Worker \u5185\u90E8\u5982\u679C\u8981\u52A0\u8F7D\u5176\u4ED6\u811A\u672C\uFF0C\u6709\u4E00\u4E2A\u4E13\u95E8\u7684\u65B9\u6CD5importScripts()\u3002</p><p>worker\u7EBF\u7A0B\u4E2D\u52A0\u8F7D\u811A\u672C\u7684api\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">importScripts(&#39;script1.js&#39;)    // \u52A0\u8F7D\u5355\u4E2A\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">importScripts(&#39;script1.js&#39;, &#39;script2.js&#39;)    // \u52A0\u8F7D\u591A\u4E2A\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF085\uFF09\u9519\u8BEF\u5904\u7406 \u3000\u3000\u4E3B\u7EBF\u7A0B\u53EF\u4EE5\u76D1\u542C Worker \u662F\u5426\u53D1\u751F\u9519\u8BEF\u3002\u5982\u679C\u53D1\u751F\u9519\u8BEF\uFF0CWorker \u4F1A\u89E6\u53D1\u4E3B\u7EBF\u7A0B\u7684error\u4E8B\u4EF6\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">worker.onerror(function (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log([</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;ERROR: Line &#39;, e.lineno, &#39; in &#39;, e.filename, &#39;: &#39;, e.message</span></span>
<span class="line"><span style="color:#A6ACCD;">  ].join(&#39;&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6216\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">worker.addEventListener(&#39;error&#39;, function (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Worker \u5185\u90E8\u4E5F\u53EF\u4EE5\u76D1\u542Cerror\u4E8B\u4EF6\u3002</p><p>\uFF086\uFF09\u5173\u95ED Worker</p><p>\u4F7F\u7528\u5B8C\u6BD5\uFF0C\u4E3A\u4E86\u8282\u7701\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u5FC5\u987B\u5173\u95ED Worker\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u4E3B\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">worker.terminate();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Worker \u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">self.close();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E09\u3001\u6570\u636E\u901A\u4FE1 \u3000\u3000\u524D\u9762\u8BF4\u8FC7\uFF0C\u4E3B\u7EBF\u7A0B\u4E0E Worker \u4E4B\u95F4\u7684\u901A\u4FE1\u5185\u5BB9\uFF0C\u53EF\u4EE5\u662F\u6587\u672C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5BF9\u8C61\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u79CD\u901A\u4FE1\u662F\u62F7\u8D1D\u5173\u7CFB\uFF0C\u4E5F\u5C31\u662F\u4F20\u503C\u800C\u4E0D\u662F\u4F20\u5740\uFF0CWorker \u5BF9\u901A\u4FE1\u5185\u5BB9\u7684\u4FEE\u6539\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u4E3B\u7EBF\u7A0B\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u6D4F\u89C8\u5668\u5185\u90E8\u7684\u8FD0\u884C\u673A\u5236\u662F\uFF0C\u5148\u5C06\u901A\u4FE1\u5185\u5BB9\u4E32\u884C\u5316\uFF0C\u7136\u540E\u628A\u4E32\u884C\u5316\u540E\u7684\u5B57\u7B26\u4E32\u53D1\u7ED9 Worker\uFF0C\u540E\u8005\u518D\u5C06\u5B83\u8FD8\u539F\u3002</p><p>\u4E3B\u7EBF\u7A0B\u4E0E Worker \u4E4B\u95F4\u4E5F\u53EF\u4EE5\u4EA4\u6362\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u6BD4\u5982 File\u3001Blob\u3001ArrayBuffer \u7B49\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u5728\u7EBF\u7A0B\u4E4B\u95F4\u53D1\u9001\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E3B\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">var uInt8Array = new Uint8Array(new ArrayBuffer(10));</span></span>
<span class="line"><span style="color:#A6ACCD;">for (var i = 0; i &lt; uInt8Array.length; ++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  uInt8Array[i] = i * 2; // [0, 2, 4, 6, 8,...]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">worker.postMessage(uInt8Array);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Worker \u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">self.onmessage = function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var uInt8Array = e.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  postMessage(&#39;Inside worker.js: uInt8Array.toString() = &#39; + uInt8Array.toString());</span></span>
<span class="line"><span style="color:#A6ACCD;">  postMessage(&#39;Inside worker.js: uInt8Array.byteLength = &#39; + uInt8Array.byteLength);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F46\u662F\uFF0C\u62F7\u8D1D\u65B9\u5F0F\u53D1\u9001\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u4F1A\u9020\u6210\u6027\u80FD\u95EE\u9898\u3002\u6BD4\u5982\uFF0C\u4E3B\u7EBF\u7A0B\u5411 Worker \u53D1\u9001\u4E00\u4E2A 500MB \u6587\u4EF6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6D4F\u89C8\u5668\u4F1A\u751F\u6210\u4E00\u4E2A\u539F\u6587\u4EF6\u7684\u62F7\u8D1D\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CJavaScript \u5141\u8BB8\u4E3B\u7EBF\u7A0B\u628A\u4E8C\u8FDB\u5236\u6570\u636E\u76F4\u63A5\u8F6C\u79FB\u7ED9\u5B50\u7EBF\u7A0B\uFF0C\u4F46\u662F\u4E00\u65E6\u8F6C\u79FB\uFF0C\u4E3B\u7EBF\u7A0B\u5C31\u65E0\u6CD5\u518D\u4F7F\u7528\u8FD9\u4E9B\u4E8C\u8FDB\u5236\u6570\u636E\u4E86\uFF0C\u8FD9\u662F\u4E3A\u4E86\u9632\u6B62\u51FA\u73B0\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u4FEE\u6539\u6570\u636E\u7684\u9EBB\u70E6\u5C40\u9762\u3002\u8FD9\u79CD\u8F6C\u79FB\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u53EB\u505ATransferable Objects\u3002\u8FD9\u4F7F\u5F97\u4E3B\u7EBF\u7A0B\u53EF\u4EE5\u5FEB\u901F\u628A\u6570\u636E\u4EA4\u7ED9 Worker\uFF0C\u5BF9\u4E8E\u5F71\u50CF\u5904\u7406\u3001\u58F0\u97F3\u5904\u7406\u30013D \u8FD0\u7B97\u7B49\u5C31\u975E\u5E38\u65B9\u4FBF\u4E86\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u6027\u80FD\u8D1F\u62C5\u3002</p><p>\u5982\u679C\u8981\u76F4\u63A5\u8F6C\u79FB\u6570\u636E\u7684\u63A7\u5236\u6743\uFF0C\u5C31\u8981\u4F7F\u7528\u4E0B\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Transferable Objects \u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">worker.postMessage(arrayBuffer, [arrayBuffer]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F8B\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">var ab = new ArrayBuffer(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">worker.postMessage(ab, [ab]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u56DB\u3001\u540C\u9875\u9762\u7684 Web Worker \u3000\u3000\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0CWorker \u8F7D\u5165\u7684\u662F\u4E00\u4E2A\u5355\u72EC\u7684 JavaScript \u811A\u672C\u6587\u4EF6\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u8F7D\u5165\u4E0E\u4E3B\u7EBF\u7A0B\u5728\u540C\u4E00\u4E2A\u7F51\u9875\u7684\u4EE3\u7801\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;script id=&quot;worker&quot; type=&quot;app/worker&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          addEventListener(&#39;message&#39;, function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">            postMessage(&#39;some message&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u662F\u4E00\u6BB5\u5D4C\u5165\u7F51\u9875\u7684\u811A\u672C\uFF0C\u6CE8\u610F\u5FC5\u987B\u6307\u5B9Ascript\u6807\u7B7E\u7684type\u5C5E\u6027\u662F\u4E00\u4E2A\u6D4F\u89C8\u5668\u4E0D\u8BA4\u8BC6\u7684\u503C\uFF0C\u4E0A\u4F8B\u662Fapp/worker\u3002</p><p>\u7136\u540E\uFF0C\u8BFB\u53D6\u8FD9\u4E00\u6BB5\u5D4C\u5165\u9875\u9762\u7684\u811A\u672C\uFF0C\u7528 Worker \u6765\u5904\u7406\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var blob = new Blob([document.querySelector(&#39;#worker&#39;).textContent]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    var url = window.URL.createObjectURL(blob);</span></span>
<span class="line"><span style="color:#A6ACCD;">    var worker = new Worker(url);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    worker.onmessage = function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // e.data === &#39;some message&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5148\u5C06\u5D4C\u5165\u7F51\u9875\u7684\u811A\u672C\u4EE3\u7801\uFF0C\u8F6C\u6210\u4E00\u4E2A\u4E8C\u8FDB\u5236\u5BF9\u8C61\uFF0C\u7136\u540E\u4E3A\u8FD9\u4E2A\u4E8C\u8FDB\u5236\u5BF9\u8C61\u751F\u6210 URL\uFF0C\u518D\u8BA9 Worker \u52A0\u8F7D\u8FD9\u4E2A URL\u3002\u8FD9\u6837\u5C31\u505A\u5230\u4E86\uFF0C\u4E3B\u7EBF\u7A0B\u548C Worker \u7684\u4EE3\u7801\u90FD\u5728\u540C\u4E00\u4E2A\u7F51\u9875\u4E0A\u9762\u3002</p><p>\u4E94\u3001\u5B9E\u6218\u573A\u666F \u3000\u3000\u4E2A\u4EBA\u89C9\u5F97\uFF0CWeb Worker\u6211\u4EEC\u53EF\u4EE5\u5F53\u505A\u8BA1\u7B97\u5668\u6765\u7528\uFF0C\u9700\u8981\u7528\u7684\u65F6\u5019\u638F\u51FA\u6765\u6441\u4E00\u6441\uFF0C\u4E0D\u7528\u7684\u65F6\u5019\u4E00\u5B9A\u8981\u6536\u8D77\u6765\u3002</p><p>1\u3001\u52A0\u5BC6\u6570\u636E\uFF1A\u6709\u4E9B\u52A0\u89E3\u5BC6\u7684\u7B97\u6CD5\u6BD4\u8F83\u590D\u6742\uFF0C\u6216\u8005\u5728\u52A0\u89E3\u5BC6\u5F88\u591A\u6570\u636E\u7684\u65F6\u5019\uFF0C\u8FD9\u4F1A\u975E\u5E38\u8017\u8D39\u8BA1\u7B97\u8D44\u6E90\uFF0C\u5BFC\u81F4UI\u7EBF\u7A0B\u65E0\u54CD\u5E94\uFF0C\u56E0\u6B64\u8FD9\u662F\u4F7F\u7528Web Worker\u7684\u597D\u65F6\u673A\uFF0C\u4F7F\u7528Worker\u7EBF\u7A0B\u53EF\u4EE5\u8BA9\u7528\u6237\u66F4\u52A0\u65E0\u7F1D\u7684\u64CD\u4F5CUI\u3002</p><p>2\u3001\u9884\u53D6\u6570\u636E\uFF1A\u6709\u65F6\u5019\u4E3A\u4E86\u63D0\u5347\u6570\u636E\u52A0\u8F7D\u901F\u5EA6\uFF0C\u53EF\u4EE5\u63D0\u524D\u4F7F\u7528Worker\u7EBF\u7A0B\u83B7\u53D6\u6570\u636E\uFF0C\u56E0\u4E3AWorker\u7EBF\u7A0B\u662F\u53EF\u4EE5\u662F\u7528 XMLHttpRequest \u7684\u3002</p><p>3\u3001\u9884\u6E32\u67D3\uFF1A\u5728\u67D0\u4E9B\u6E32\u67D3\u573A\u666F\u4E0B\uFF0C\u6BD4\u5982\u6E32\u67D3\u590D\u6742\u7684canvas\u7684\u65F6\u5019\u9700\u8981\u8BA1\u7B97\u7684\u6548\u679C\u6BD4\u5982\u53CD\u5C04\u3001\u6298\u5C04\u3001\u5149\u5F71\u3001\u6750\u6599\u7B49\uFF0C\u8FD9\u4E9B\u8BA1\u7B97\u7684\u903B\u8F91\u53EF\u4EE5\u4F7F\u7528Worker\u7EBF\u7A0B\u6765\u6267\u884C\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2AWorker\u7EBF\u7A0B\u3002</p><p>4\u3001\u590D\u6742\u6570\u636E\u5904\u7406\u573A\u666F\uFF1A\u67D0\u4E9B\u68C0\u7D22\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u5206\u6790\u4F1A\u975E\u5E38\u8017\u8D39\u65F6\u95F4\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528Web Worker\u6765\u8FDB\u884C\uFF0C\u4E0D\u5360\u7528\u4E3B\u7EBF\u7A0B\u3002</p><p>5\u3001\u9884\u52A0\u8F7D\u56FE\u7247\uFF1A\u6709\u65F6\u5019\u4E00\u4E2A\u9875\u9762\u6709\u5F88\u591A\u56FE\u7247\uFF0C\u6216\u8005\u6709\u51E0\u4E2A\u5F88\u5927\u7684\u56FE\u7247\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4E1A\u52A1\u9650\u5236\u4E0D\u8003\u8651\u61D2\u52A0\u8F7D\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528Web Worker\u6765\u52A0\u8F7D\u56FE\u7247\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E00\u4E0B\u8FD9\u7BC7\u6587\u7AE0\u7684\u63A2\u7D22\uFF0C\u8FD9\u91CC\u7B80\u5355\u63D0\u8981\u4E00\u4E0B\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E3B\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">let w = new Worker(&quot;js/workers.js&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">w.onmessage = function (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var img = document.createElement(&quot;img&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  img.src = window.URL.createObjectURL(event.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.querySelector(&#39;#result&#39;).appendChild(img)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// worker\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [...\u597D\u591A\u56FE\u7247\u8DEF\u5F84];</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i = 0, len = arr.length; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let req = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#A6ACCD;">  req.open(&#39;GET&#39;, arr[i], true);</span></span>
<span class="line"><span style="color:#A6ACCD;">  req.responseType = &quot;blob&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  req.setRequestHeader(&quot;client_type&quot;, &quot;DESKTOP_WEB&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  req.onreadystatechange = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (req.readyState == 4) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      postMessage(req.response);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  req.send(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u5B9E\u6218\u7684\u65F6\u5019\u6CE8\u610F</p><p>\u867D\u7136\u4F7F\u7528worker\u7EBF\u7A0B\u4E0D\u4F1A\u5360\u7528\u4E3B\u7EBF\u7A0B\uFF0C\u4F46\u662F\u542F\u52A8worker\u4F1A\u6BD4\u8F83\u8017\u8D39\u8D44\u6E90 \u4E3B\u7EBF\u7A0B\u4E2D\u4F7F\u7528XMLHttpRequest\u5728\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u6D4F\u89C8\u5668\u53E6\u5F00\u4E86\u4E00\u4E2A\u5F02\u6B65http\u8BF7\u6C42\u7EBF\u7A0B\uFF0C\u4F46\u662F\u4EA4\u4E92\u8FC7\u7A0B\u4E2D\u8FD8\u662F\u8981\u6D88\u8017\u4E3B\u7EBF\u7A0B\u8D44\u6E90 \u3000\u3000\u5728 Webpack \u9879\u76EE\u91CC\u9762\u4F7F\u7528 Web Worker \u8BF7\u53C2\u7167\uFF1A\u600E\u4E48\u5728 ES6+Webpack \u4E0B\u4F7F\u7528 Web Worker</p><p>1\u3001Worker \u7EBF\u7A0B\u5B8C\u6210\u8F6E\u8BE2</p><p>\u6709\u65F6\uFF0C\u6D4F\u89C8\u5668\u9700\u8981\u8F6E\u8BE2\u670D\u52A1\u5668\u72B6\u6001\uFF0C\u4EE5\u4FBF\u7B2C\u4E00\u65F6\u95F4\u5F97\u77E5\u72B6\u6001\u6539\u53D8\u3002\u8FD9\u4E2A\u5DE5\u4F5C\u53EF\u4EE5\u653E\u5728 Worker \u91CC\u9762\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function createWorker(f) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var blob = new Blob([&#39;(&#39; + f.toString() +&#39;)()&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">      var url = window.URL.createObjectURL(blob);</span></span>
<span class="line"><span style="color:#A6ACCD;">      var worker = new Worker(url);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return worker;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var pollingWorker = createWorker(function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var cache;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      function compare(new, old) { ... };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      setInterval(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fetch(&#39;/my-api-endpoint&#39;).then(function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var data = res.json();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!compare(data, cache)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            cache = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">            self.postMessage(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    pollingWorker.onmessage = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // render data</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    pollingWorker.postMessage(&#39;init&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CWorker \u6BCF\u79D2\u949F\u8F6E\u8BE2\u4E00\u6B21\u6570\u636E\uFF0C\u7136\u540E\u8DDF\u7F13\u5B58\u505A\u6BD4\u8F83\u3002\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u5C31\u8BF4\u660E\u670D\u52A1\u7AEF\u6709\u4E86\u65B0\u7684\u53D8\u5316\uFF0C\u56E0\u6B64\u5C31\u8981\u901A\u77E5\u4E3B\u7EBF\u7A0B\u3002</p><p>2\u3001Worker \u65B0\u5EFA Worker</p><p>Worker \u7EBF\u7A0B\u5185\u90E8\u8FD8\u80FD\u518D\u65B0\u5EFA Worker \u7EBF\u7A0B\uFF08\u76EE\u524D\u53EA\u6709 Firefox \u6D4F\u89C8\u5668\u652F\u6301\uFF09\u3002\u4E0B\u9762\u7684\u4F8B\u5B50\u662F\u5C06\u4E00\u4E2A\u8BA1\u7B97\u5BC6\u96C6\u7684\u4EFB\u52A1\uFF0C\u5206\u914D\u523010\u4E2A Worker\u3002</p><p>\u4E3B\u7EBF\u7A0B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    var worker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker.onmessage = function (event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.getElementById(&#39;result&#39;).textContent = event.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // worker.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // settings</span></span>
<span class="line"><span style="color:#A6ACCD;">    var num_workers = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var items_per_worker = 1000000;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // start the workers</span></span>
<span class="line"><span style="color:#A6ACCD;">    var result = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var pending_workers = num_workers;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (var i = 0; i &lt; num_workers; i += 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var worker = new Worker(&#39;core.js&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      worker.postMessage(i * items_per_worker);</span></span>
<span class="line"><span style="color:#A6ACCD;">      worker.postMessage((i + 1) * items_per_worker);</span></span>
<span class="line"><span style="color:#A6ACCD;">      worker.onmessage = storeResult;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // handle the results</span></span>
<span class="line"><span style="color:#A6ACCD;">    function storeResult(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      result += event.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">      pending_workers -= 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (pending_workers &lt;= 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">        postMessage(result); // finished!</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CWorker \u7EBF\u7A0B\u5185\u90E8\u65B0\u5EFA\u4E8610\u4E2A Worker \u7EBF\u7A0B\uFF0C\u5E76\u4E14\u4F9D\u6B21\u5411\u8FD910\u4E2A Worker \u53D1\u9001\u6D88\u606F\uFF0C\u544A\u77E5\u4E86\u8BA1\u7B97\u7684\u8D77\u70B9\u548C\u7EC8\u70B9\u3002\u8BA1\u7B97\u4EFB\u52A1\u811A\u672C\u7684\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// core.js</span></span>
<span class="line"><span style="color:#A6ACCD;">var start;</span></span>
<span class="line"><span style="color:#A6ACCD;">onmessage = getStart;</span></span>
<span class="line"><span style="color:#A6ACCD;">function getStart(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  start = event.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onmessage = getEnd;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var end;</span></span>
<span class="line"><span style="color:#A6ACCD;">function getEnd(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  end = event.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onmessage = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">  work();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function work() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var result = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (var i = start; i &lt; end; i += 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // perform some complex calculation here</span></span>
<span class="line"><span style="color:#A6ACCD;">    result += 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  postMessage(result);</span></span>
<span class="line"><span style="color:#A6ACCD;">  close();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,85),o=[l];function r(c,t,A,C,i,y){return a(),n("div",null,o)}var k=s(e,[["render",r]]);export{d as __pageData,k as default};
