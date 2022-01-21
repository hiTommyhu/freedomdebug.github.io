import{a as n}from"./app.1fffe6bf.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="sold" tabindex="-1"><a class="header-anchor" href="#sold" aria-hidden="true">#</a> SOLD</h1><p>SOLID\u662FSRP\u3001OCP\u3001LSP\u3001ISP\u548CDIP\u7684\u9996\u5B57\u6BCD\u7F29\u5199\u7EC4\u6210\uFF0C\u63A5\u4E0B\u6765\u770B\u4E00\u4E0BSOLID\u7684\u5177\u4F53\u542B\u4E49</p><h2 id="\u5355\u4E00\u804C\u8D23\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E00\u804C\u8D23\u539F\u5219" aria-hidden="true">#</a> \u5355\u4E00\u804C\u8D23\u539F\u5219</h2><p>S\uFF1ASRP(The Single-Responsibility Principle) \u5355\u4E00\u804C\u8D23\u539F\u5219\uFF0C\u5176\u8868\u793A\u5BF9\u8C61\u5E94\u8BE5\u5177\u6709\u4E00\u79CD\u5355\u4E00\u529F\u80FD\u7684\u539F\u5219\uFF0C\u964D\u4F4E\u5404\u4E2A\u529F\u80FD\u4E4B\u95F4\u7684\u8026\u5408\uFF0C\u4FDD\u8BC1\u9AD8\u5185\u805A\u3001\u4F4E\u8026\u5408\u7684\u529F\u80FD \u6BD4\u5982\u6211\u4EEC\u5728\u8868\u5355\u63D0\u4EA4\u65F6\uFF0C\u4F1A\u5148\u6821\u9A8C\u8F93\u5165\u7684\u5185\u5BB9\u662F\u5426\u7B26\u5408\u671F\u671B\uFF0C\u7136\u540E\u624D\u4F1A\u8FDB\u884C\u6570\u636E\u7684\u63D0\u4EA4\uFF0C\u90A3\u4E48\u5728\u6821\u9A8C\u7684\u8FC7\u7A0B\u4E2D\u4FBF\u4F1A\u5B58\u5728\u5F88\u591A\u6821\u9A8C\u903B\u8F91\uFF0C\u6B64\u65F6\u5C06\u6BCF\u4E00\u79CD\u6821\u9A8C\u89C4\u5219\u8FDB\u884C\u62BD\u53D6\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EA\u505A\u5BF9\u5E94\u7684\u89C4\u5219\u6821\u9A8C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6821\u9A8C\u90AE\u7BB1
const validateEmail = () =&gt; {
	return new Promise((resolve, reject) =&gt; {
		// todo ...
		resolve(true)
	})
}

// \u6821\u9A8C\u5E74\u9F84
const validateAge = () =&gt; {
	return new Promise((resolve, reject) =&gt; {
		// todo ...
		resolve(true)
	})
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5F00\u653E\u5C01\u95ED\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u5F00\u653E\u5C01\u95ED\u539F\u5219" aria-hidden="true">#</a> \u5F00\u653E\u5C01\u95ED\u539F\u5219</h2><p>O\uFF1AOCP(The Open/Closed Principle) \u5F00\u653E\u5C01\u95ED\u539F\u5219\uFF0C\u5176\u8868\u793A\u201C\u7A0B\u5E8F\u4E2D\u5BF9\u4E8E\u6269\u5C55\u5F00\u53D1\uFF0C\u5BF9\u4E8E\u4FEE\u6539\u5C01\u95ED\u201D\uFF0C\u4E00\u4E2A\u7C7B\u6216\u8005\u51FD\u6570\u786E\u5B9A\u5176\u80FD\u529B\u4E4B\u540E\uFF0C\u4FBF\u4E0D\u80FD\u518D\u5BF9\u5176\u539F\u6709\u80FD\u529B\u8FDB\u884C\u4FEE\u6539\uFF0C\u53EA\u80FD\u5728\u5176\u539F\u6709\u529F\u80FD\u4E4B\u4E0A\u8FDB\u884C\u6269\u5C55\u65B0\u7684\u80FD\u529B \u7EE7\u7EED\u4E0A\u9762\u7684\u8868\u5355\u6821\u9A8C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/** 
 * \u6821\u9A8C\u901A\u8FC7\u8D70 resolve\uFF0C \u4E0D\u901A\u8FC7\u8D70 reject
*/
const validate = () =&gt; {
	return new Promise((resolve, reject) =&gt; {
		Promise.all([validateEmail(), validateAge()]).then(res =&gt; {
			console.log(&#39;\u6821\u9A8C\u6210\u529F&#39;, res);
			resolve(true)
		}).catch(err =&gt; {
			console.log(&#39;\u6821\u9A8C\u5931\u8D25&#39;,err);
			resolve(err)
		})
	})
}

/** 
 * \u63D0\u4EA4\u6570\u636E
*/
const submit = async () =&gt; {
	// 1. \u6821\u9A8C\u6570\u636E
	const pass = await validate()
	console.log(&#39;pass&#39;, pass);
	
	if(pass) {
		// 2 \u63D0\u4EA4\u6570\u636E
	}else {
		// todo ...
	}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u82E5\u662F\u6B64\u65F6\u518D\u589E\u52A0\u4E00\u79CD\u6821\u9A8C\u89C4\u5219\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6821\u9A8C\u65F6\u95F4
const validateTime = () =&gt; {
	return new Promise((resolve, reject) =&gt; {
		// todo ...
		resolve(true)
	})
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4EC5\u4EC5\u6269\u5C55Promise.all\u5373\u53EF\uFF0C\u4E0D\u4F1A\u5BF9\u539F\u6709\u7684\u4E1A\u52A1\u903B\u8F91\u4EA7\u751F\u5F71\u54CD\uFF0C\u4E4B\u540E\u518D\u65B0\u589E\u6821\u9A8C\u89C4\u5219\u76F4\u63A5\u589E\u52A0\u65B0\u7684\u6821\u9A8C\u51FD\u6570\u5373\u53EF tips\uFF1A \u6BD4\u5982\u73B0\u5728\u5E38\u7528\u7684element-ui\u6846\u67B6\u4E2D\uFF0CPromise.all\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u901A\u8FC7\u8868\u5355\u5143\u7D20\u4E0A\u7ED1\u5B9Aprops\u5C5E\u6027\u8FDB\u884C\u81EA\u52A8\u6821\u9A8C\u7684\uFF0C\u5E76\u4E0D\u4F1A\u5982\u4E0A\u8FF0\u4EE3\u7801\u8FD9\u822C\u663E\u793A\u8C03\u7528\uFF0C\u6B64\u5904\u4F7F\u7528Promise.all\u662F\u4E3A\u4E86\u65B9\u4FBF\u7406\u89E3 \u6821\u9A8C\u51FD\u6570\u4E2D\u5E76\u6CA1\u6709\u5177\u4F53\u5B9E\u73B0\u6821\u9A8C\u89C4\u5219\uFF0C\u5177\u4F53\u4E1A\u52A1\u903B\u8F91\u6839\u636E\u4E1A\u52A1\u7F16\u5199</p><h2 id="\u91CC\u6C0F\u66FF\u6362\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u91CC\u6C0F\u66FF\u6362\u539F\u5219" aria-hidden="true">#</a> \u91CC\u6C0F\u66FF\u6362\u539F\u5219</h2><p>L\uFF1ALSP(The Liskov Substitution Principle) \u91CC\u6C0F\u66FF\u6362\u539F\u5219\uFF0C\u5176\u8868\u793A\u201C\u7A0B\u5E8F\u4E2D\u7684\u5BF9\u8C61\u5E94\u8BE5\u662F\u53EF\u4EE5\u5728\u4E0D\u6539\u53D8\u7A0B\u5E8F\u6B63\u786E\u6027\u7684\u524D\u63D0\u4E0B\u88AB\u5B83\u7684\u5B50\u7C7B\u6240\u66FF\u6362\u201D\uFF0C\u57FA\u7C7B\u80FD\u591F\u4F7F\u7528\u7684\u5730\u65B9\uFF0C\u5B50\u7C7B\u90FD\u53EF\u4EE5\u5B8C\u5168\u8986\u76D6\u3001\u66FF\u6362\u57FA\u7C7B\uFF0C\u4F7F\u7528\u57FA\u7C7B\u548C\u5B50\u7C7B\u90FD\u4E0D\u5F71\u54CD\u7A0B\u5E8F\u7684\u6B63\u5E38\u8FD0\u8F6C\uFF0C\u529F\u80FD\u5B8C\u5168\u4E00\u81F4\uFF0C\u4E3B\u8981\u5F3A\u8C03\u7684\u5C31\u662F\u7EE7\u627F\u7684\u5B9E\u73B0\uFF0CJS\u4E2D\u4F7F\u7528\u8F83\u5C11 \u5148\u770B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Cat {
	constructor(name) {
		this.name = name;
	}

	eat() {}
}

class BritishShorthair extends Cat {
	constructor(name) {
		super(name);
	}

	eat() {}
}

const animal = new Cat(&quot;\u732B\u7C7B&quot;);
const bs = new BritishShorthair(&quot;\u82F1\u77ED&quot;);

const my = {
	pet(p: Cat) { // \u9650\u5236\u4F20\u9012\u662FCat\u6216\u8005Cat\u7684\u5B50\u7C7B
		console.log(\`\u6211\u7684\u5BA0\u7269\u662F\${p.name}\`);
	}
}

my.pet(bs)
my.pet(animal)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u6709\u4E00\u4E2ACat\u7C7B\u548C\u4E00\u4E2ABritishShorthair\u7C7B\uFF0CBritishShorthair\u4F5C\u4E3ACat\u7684\u5B50\u7C7B\uFF0C\u6211\u6709\u4E00\u4E2A\u5BA0\u7269\uFF0C\u8FD9\u4E2A\u5BA0\u7269\u662F\u4E00\u4E2A\u732B\uFF0C\u90A3\u4E48\u6B64\u65F6\u5F53\u6211\u5411\u5916\u4ECB\u7ECD\u6211\u7684\u5BA0\u7269\u65F6\uFF0C\u6211\u53EF\u4EE5\u8BF4\u6211\u7684\u5BA0\u7269\u662F\u4E00\u4E2ABritishShorthair\uFF0C\u4E5F\u53EF\u4EE5\u8BF4\u662FCat\uFF0C\u56E0\u4E3A\u82F1\u77ED\u5C5E\u4E8E\u732B\u7684\u7EC6\u5316\u7684\u4E00\u4E2A\u5206\u652F\uFF0C\u5728\u6B64\u53EF\u4EE5\u5B8C\u5168\u66FF\u6362Cat\u7684\u4F7F\u7528</p><h2 id="\u63A5\u53E3\u9694\u79BB\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u9694\u79BB\u539F\u5219" aria-hidden="true">#</a> \u63A5\u53E3\u9694\u79BB\u539F\u5219</h2><p>I\uFF1AISP(The Interface Segregation Principle) \u63A5\u53E3\u9694\u79BB\u539F\u5219\uFF0C\u5176\u8868\u793A\u4E00\u4E2A\u63A5\u53E3\u5E94\u8BE5\u62E5\u6709\u5C3D\u53EF\u80FD\u5C11\u7684\u884C\u4E3A\uFF0C\u4FDD\u6301\u5176\u5355\u4E00\u72EC\u7ACB\uFF0C\u5FC5\u79D2\u51FA\u73B0\u80D6\u63A5\u53E3\u3002\u5BF9\u4E8E\u4E0D\u540C\u7684\u529F\u80FD\u7684\u6A21\u5757\u5206\u522B\u4F7F\u7528\u4E0D\u540C\u63A5\u53E3\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u540C\u4E00\u4E2A\u901A\u7528\u7684\u63A5\u53E3\uFF0C\u6709\u4E9B\u7C7B\u4F3C\u4E8E\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF0C\u5728JS\u4E2D\u65E0\u63A5\u53E3\u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u5229\u7528TS\u4E2D\u7684\u63A5\u53E3\u8FDB\u884C\u5B9E\u73B0 \u5C06\u4E0D\u540C\u7684\u63A5\u53E3\u8FDB\u884C\u62C6\u5206\uFF0C\u4E92\u76F8\u9694\u79BB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    alert() {
        console.log(&#39;Car alert&#39;);
    }
    lightOn() {
        console.log(&#39;Car light on&#39;);
    }
    lightOff() {
        console.log(&#39;Car light off&#39;);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u4F9D\u8D56\u5012\u7F6E\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u5012\u7F6E\u539F\u5219" aria-hidden="true">#</a> \u4F9D\u8D56\u5012\u7F6E\u539F\u5219</h2><p>D\uFF1ADIP(The Dependency-Inversion Principle) \u4F9D\u8D56\u5BFC\u81F4(\u53CD\u8F6C)\u539F\u5219\uFF0C\u9AD8\u5C42\u6A21\u5757\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u4F4E\u5C42\u6A21\u5757\uFF0C\u4E24\u8005\u90FD\u5E94\u8BE5\u4F9D\u8D56\u5176\u62BD\u8C61\uFF1B\u62BD\u8C61\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u7EC6\u8282\uFF0C\u7EC6\u8282\u5E94\u8BE5\u4F9D\u8D56\u4E8E\u62BD\u8C61\uFF0C\u4F7F\u7528\u65B9\u53EA\u5173\u6CE8\u63A5\u53E3\u800C\u4E0D\u5173\u6CE8\u5177\u4F53\u7C7B\u7684\u5B9E\u73B0\uFF0CJS\u4E2D\u4F7F\u7528\u8F83\u5C11 \u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2Dpet\u7684\u53C2\u6570\u5E94\u8BE5\u4F7F\u7528Cat\uFF0C\u800C\u4E0D\u662FBritishShorthair\uFF0C\u6BD4\u5982\u4E4B\u540E\u53C8\u517B\u4E86\u4E00\u4E2A\u5176\u4ED6\u54C1\u79CD\u7684\u732B\u54AA\uFF0C\u4E0D\u4F1A\u5F71\u54CDpet\u7684\u8C03\u7528\uFF0C\u53CD\u4E4B\u5219\u4F1A\u5F71\u54CD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const my = {
	pet(p: Cat) { // \u9650\u5236\u4F20\u9012\u662FCat\u6216\u8005Cat\u7684\u5B50\u7C7B
		console.log(\`\u6211\u7684\u5BA0\u7269\u662F\${p.name}\`);
	}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F5C\u8005\uFF1ANordon \u94FE\u63A5\uFF1Ahttps://juejin.cn/post/7015582644645675044 \u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>`,22);function r(l,p){return e}var b=s(a,[["render",r]]);export{b as default};
