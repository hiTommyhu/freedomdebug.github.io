import{_ as p,c as l,e as t,w as a,a as u,r as e,o as i,b as n,d as s}from"./app.c19d5535.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"files/practices/threejs.md"}'),r={name:"files/practices/threejs.md"},k=u(`<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;importmap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;imports&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;three&quot;: &quot;../../../node_modules/three/build/three.module.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">threejs.html:1 Uncaught TypeError: Failed to resolve module specifier &quot;../../../node_modules/three/build/three.module.js&quot;. Invalid relative url or base scheme isn&#39;t hierarchical.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),d=n("div",null,"height:400",-1),m=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token constant"},"THREE"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"../../../node_modules/three/build/three.module.js"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token function-variable function"},"draw"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" scene "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("Scene")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// \u900F\u89C6\u6444\u50CF\u673A"),s(`
      `),n("span",{class:"token comment"},"// PerspectiveCamera\uFF08\u89C6\u91CE\u89D2\u5EA6\uFF08FOV\uFF09, \u957F\u5BBD\u6BD4\uFF08aspect ratio\uFF09, \u8FDC\u526A\u5207\u9762, \u8FD1\u526A\u5207\u9762\uFF09"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" container "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'container'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" camera "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("PerspectiveCamera")]),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
        container`),n("span",{class:"token punctuation"},"."),s("clientWidth "),n("span",{class:"token operator"},"/"),s(" container"),n("span",{class:"token punctuation"},"."),s("clientHeight"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"100"),s(`
      `),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// \u6E32\u67D3\u5668"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" renderer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("WebGLRenderer")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      renderer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setSize"),n("span",{class:"token punctuation"},"("),s("container"),n("span",{class:"token punctuation"},"."),s("clientWidth"),n("span",{class:"token punctuation"},","),s(" container"),n("span",{class:"token punctuation"},"."),s("clientHeight"),n("span",{class:"token punctuation"},")"),s(`
      container`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"appendChild"),n("span",{class:"token punctuation"},"("),s("renderer"),n("span",{class:"token punctuation"},"."),s("domElement"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// BoxGeometry\uFF08\u7ACB\u65B9\u4F53\uFF09x,y,z"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" geometry "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("BoxGeometry")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// \u6750\u8D28"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" material "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("MeshBasicMaterial")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0x00ff00"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// \u7F51\u683C"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" cube "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("THREE"),n("span",{class:"token punctuation"},"."),s("Mesh")]),n("span",{class:"token punctuation"},"("),s("geometry"),n("span",{class:"token punctuation"},","),s(" material"),n("span",{class:"token punctuation"},")"),s(`
      scene`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("cube"),n("span",{class:"token punctuation"},")"),s(`

      camera`),n("span",{class:"token punctuation"},"."),s("position"),n("span",{class:"token punctuation"},"."),s("z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),s(`
      `),n("span",{class:"token comment"},"// \u6E32\u67D3\u573A\u666F,\u52A8\u753B\u5FAA\u73AF"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"animate"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//requestAnimationFrame\u7684\u4F18\u70B9\uFF0C\u6700\u91CD\u8981\u7684\u4E00\u70B9\u5C31\u662F\u5F53\u7528\u6237\u5207\u6362\u5230\u5176\u5B83\u7684\u6807\u7B7E\u9875\u65F6\uFF0C\u5B83\u4F1A\u6682\u505C\uFF0C\u4ECE\u800C\u8282\u7701\u8D44\u6E90"),s(`
        `),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),s("animate"),n("span",{class:"token punctuation"},")"),s(`

        cube`),n("span",{class:"token punctuation"},"."),s("rotation"),n("span",{class:"token punctuation"},"."),s("x "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"0.01"),s(`
        cube`),n("span",{class:"token punctuation"},"."),s("rotation"),n("span",{class:"token punctuation"},"."),s("y "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"0.01"),s(`

        renderer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),s("scene"),n("span",{class:"token punctuation"},","),s(" camera"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token function"},"animate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"draw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("less"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},"#containers"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("125"),n("span",{class:"token punctuation"},","),s(" 247"),n("span",{class:"token punctuation"},","),s(" 108"),n("span",{class:"token punctuation"},","),s(" 0.699"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function y(g,h,w,_,f,E){const o=e("demo"),c=e("clientOnly");return i(),l("div",null,[k,t(c,null,{default:a(()=>[t(o,{"initial-value":`<template>
  <div id="container" style="height:200px"></div>
</template>


<script>
import * as THREE from "../../../node_modules/three/build/three.module.js"
import { onMounted } from 'vue'

export default {
  setup() {
    let draw = () => {
      const scene = new THREE.Scene()
      // \u900F\u89C6\u6444\u50CF\u673A
      // PerspectiveCamera\uFF08\u89C6\u91CE\u89D2\u5EA6\uFF08FOV\uFF09, \u957F\u5BBD\u6BD4\uFF08aspect ratio\uFF09, \u8FDC\u526A\u5207\u9762, \u8FD1\u526A\u5207\u9762\uFF09
      let container = document.getElementById('container')
      const camera = new THREE.PerspectiveCamera(
        30,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      )
      // \u6E32\u67D3\u5668
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(renderer.domElement)
      // BoxGeometry\uFF08\u7ACB\u65B9\u4F53\uFF09x,y,z
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      // \u6750\u8D28
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      // \u7F51\u683C
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5
      // \u6E32\u67D3\u573A\u666F,\u52A8\u753B\u5FAA\u73AF
      const animate = function () {
        //requestAnimationFrame\u7684\u4F18\u70B9\uFF0C\u6700\u91CD\u8981\u7684\u4E00\u70B9\u5C31\u662F\u5F53\u7528\u6237\u5207\u6362\u5230\u5176\u5B83\u7684\u6807\u7B7E\u9875\u65F6\uFF0C\u5B83\u4F1A\u6682\u505C\uFF0C\u4ECE\u800C\u8282\u7701\u8D44\u6E90
        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)
      }

      animate()
    }

    onMounted(() => {
      draw()
    })
  },
}
<\/script>

<style lang="less" scoped>
#containers {
  width: 100%;
  height: 300px;
  background: rgba(125, 247, 108, 0.699);
}
</style>
`,direction:"",lang:"vue",height:"400"},{description:a(()=>[d]),highlight:a(()=>[m]),_:1})]),_:1})])}var C=p(r,[["render",y]]);export{b as __pageData,C as default};
