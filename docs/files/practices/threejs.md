```
<script type="importmap">
  {
    "imports": {
      "three": "../../../node_modules/three/build/three.module.js"
    }
  }
</script>
```

```
threejs.html:1 Uncaught TypeError: Failed to resolve module specifier "../../../node_modules/three/build/three.module.js". Invalid relative url or base scheme isn't hierarchical.
```

:::demo height:400

```vue
<template>
  <div id="container" style="height:200px"></div>
</template>


<script>
import * as THREE from "../../../node_modules/three/build/three.module.js"
import { onMounted } from 'vue'

export default {
  setup() {
    let draw = () => {
      const scene = new THREE.Scene()
      // 透视摄像机
      // PerspectiveCamera（视野角度（FOV）, 长宽比（aspect ratio）, 远剪切面, 近剪切面）
      let container = document.getElementById('container')
      const camera = new THREE.PerspectiveCamera(
        30,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      )
      // 渲染器
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(renderer.domElement)
      // BoxGeometry（立方体）x,y,z
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      // 材质
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      // 网格
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5
      // 渲染场景,动画循环
      const animate = function () {
        //requestAnimationFrame的优点，最重要的一点就是当用户切换到其它的标签页时，它会暂停，从而节省资源
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
</script>

<style lang="less" scoped>
#containers {
  width: 100%;
  height: 300px;
  background: rgba(125, 247, 108, 0.699);
}
</style>
```

:::