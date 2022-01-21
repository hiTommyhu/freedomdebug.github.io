import{a as n}from"./app.de0f6b10.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<h1 id="\u4E8C\u5206\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a> \u4E8C\u5206\u67E5\u627E</h1><p>\u5C0F\u77E5\u8BC6\uFF0C\u5927\u6311\u6218\uFF01\u672C\u6587\u6B63\u5728\u53C2\u4E0E\u201C\u7A0B\u5E8F\u5458\u5FC5\u5907\u5C0F\u77E5\u8BC6\u201D\u521B\u4F5C\u6D3B\u52A8 \u73B0\u5728\u6709N\u4EFD\u8BD5\u5377\uFF0C\u9700\u8981\u5728\u8FD9N\u4EFD\u8BD5\u5377\u4E2D\u627E\u5230\u5F20\u4E09\u7684\u8BD5\u5377\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u5FEB\u901F\u627E\u5230\u5462\uFF1F \u8981\u662F\u4E00\u4EFD\u4E00\u4EFD\u7684\u53BB\u67E5\u627E\uFF0C\u90A3\u4E48\u6700\u574F\u7684\u60C5\u51B5\u53EF\u80FD\u8981\u67E5\u627EN\u6B21\u624D\u53EF\u4EE5\u627E\u5F97\u5230\u5F20\u4E09\u7684\u8BD5\u5377\uFF0C\u663E\u7136\u662F\u4E0D\u7B26\u5408\u671F\u671B\u7684 \u90A3\u4E48\u5982\u679C\u6211\u4EEC\u5C06\u8BD5\u5377\u6309\u7167\u59D3\u7684\u9996\u5B57\u6BCD\u8FDB\u884C\u6392\u5E8F\uFF0C\u6BCF\u6B21\u90FD\u4ECEN/2\u5904\u5F00\u59CB\u67E5\u627E\uFF0C\u82E5\u662F\u6CA1\u5339\u914D\u5230\uFF0C\u90A3\u4E48\u8FDB\u884C\u5224\u65AD\u5F20\u4E09\u9996\u5B57\u6BCDZ\u662F\u5728N/2\u7684\u5DE6\u4FA7\u8FD8\u662F\u53F3\u4FA7\uFF0C\u7136\u540E\u518D\u5728\u5269\u4F59\u7684\u4E00\u534A\u7EE7\u7EED\u6309\u7167\u4E0A\u8FF0\u987A\u5E8F\u67E5\u627E\uFF0C\u76F4\u81F3\u627E\u5230\u5F20\u4E09\u7684\u8BD5\u5377\uFF0C\u8FD9\u4E2A\u67E5\u627E\u7684\u8FC7\u7A0B\u5C31\u662F\u4E8C\u5206\u67E5\u627E \u73B0\u5728\u6709\u4E00\u4E2A\u6570\u7EC4[1, 2, 3, 12, 22, 34, 45, 51],\u67E5\u627E22\u662F\u5426\u5B58\u5728 \u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u5B9A\u4E49\u4E09\u4E2A\u53D8\u91CF\u5206\u522B\u8BB0\u5F55\u5DE6\u8FB9\u754Cl\uFF0C\u53F3\u8FB9\u754Cr\u548C\u4E2D\u95F4\u4F4D\u7F6Ec \u521D\u59CB\u5316\u4E09\u4E2A\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [1, 2, 3, 12, 22, 34, 45, 51];
let l = 0;
let r = arr.length - 1;
let c = Math.floor((l + r) / 2);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53EF\u4EE5\u5F97\u5230l = 0\uFF0Cr = 7\uFF0C c = 3 \u7B2C\u4E00\u6B21\u67E5\u627E\uFF0Carr[c]\u7684\u503C\u4E3A12\uFF0C\u5C0F\u4E8E\u76EE\u6807\u503C22\uFF0C\u5224\u65AD\u5DE6\u8FB9\u754Cl\u9700\u8981\u53F3\u79FB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>l = c + 1;
c = Math.floor((l + r) / 2);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53EF\u4EE5\u5F97\u5230 l = 4, c = 5 \u7136\u540E\u8FDB\u884C\u7B2C\u4E8C\u6B21\u67E5\u627E\uFF0Carr[c]\u7684\u503C\u4E3A34\uFF0C\u5927\u4E8E\u76EE\u6807\u503C22\uFF0C\u5224\u65AD\u53F3\u8FB9\u754Cr\u9700\u8981\u5DE6\u79FB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>r = c - 1;
c = Math.floor((l + r) / 2);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53EF\u4EE5\u5F97\u5230 c = 4, r = 4 \u7136\u540E\u8FDB\u884C\u7B2C\u4E09\u6B21\u67E5\u627E\uFF0Carr[4]\u7684\u503C\u4E3A22\uFF0C\u4E8E\u76EE\u6807\u503C22\u76F8\u7B49\uFF0C\u627E\u5230\u76EE\u6807\u503C\uFF0C\u7ED3\u675F\u67E5\u627E \u6839\u636E\u4E0A\u8FF0\u7684\u8FC7\u7A0B\u8F6C\u5316\u4E3A\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const bSearch = (arr, target) =&gt; {
    let l = 0; // \u5DE6\u8FB9\u754C
    let r = arr.length - 1; // \u53F3\u8FB9\u754C
    let c; // \u4E2D\u95F4\u4F4D\u7F6E
    let currentValue; // \u5F53\u524D\u4E2D\u95F4\u4F4D\u7F6E\u7D22\u5F15\u7684\u503C
    while (l &lt;= r) {
        c = Math.floor((l + r) / 2);
        currentValue = arr[c];
        if (currentValue === target) {
                // \u627E\u5230 \u76F4\u63A5\u8FD4\u56DE
                return c;
        } else if (currentValue &gt; target) {
                r = c - 1;
        } else {
                l = c + 1;
        }
    }

    return -1; // \u6CA1\u6709\u627E\u5230
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u6D4B\u8BD5\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [1, 2, 3, 12, 22, 34, 45, 51];

bSearch(arr, 22); // 4
bSearch(arr, 100); // -1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u67E5\u627E22\u7B26\u5408\u9884\u671F\uFF0C\u8FD4\u56DE\u7ED3\u679C4 \u82E5\u662F\u67E5\u627E100\uFF0C\u627E\u4E0D\u5230\u76F4\u63A5\u8FD4\u56DE-1</p><p>\u4F5C\u8005\uFF1ANordon \u94FE\u63A5\uFF1Ahttps://juejin.cn/post/7016511928616878111 \u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>`,13);function r(l,c){return a}var b=e(s,[["render",r]]);export{b as default};
