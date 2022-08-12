# Button 按钮

:::demo 使用`type`，`plain`，`round`来定义 Button 的样式

```vue
<template>
  Small
  <button style="color: red">按钮1</button>
  Middle
  <button type="size">按钮2</button>
  Large
  <button>按钮3</button>
  Disabled
  <button disabled>按钮4</button>
</template>
```
:::





:::demo column

```vue
<template>
  <button class="demo-btn" @click="count--">-</button>
  <b class="demo-count" :class="{ red: count >= 3 }">{{ count }}</b>
  <button class="demo-btn" @click="count++">+</button>
</template>
<script setup>
import { ref } from "vue";
const count = ref(0);
const text = ref("");
</script>
<style>
/* 默认 scoped */
.demo-btn {
  padding: 0 10px;
  border: 1px solid #ccc;
}
.demo-count {
  display: inline-block;
  text-align: center;
  margin: 0 10px;
  min-width: 30px;
}
/* global */

:global(.red) {
  color: red;
}
</style>
```

:::

