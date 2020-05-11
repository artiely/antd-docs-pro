# 常见问题

## 为什么无法下拉
请确保容器的高度撑开，一般需添加样式
```css
html,body,#app,#app>div{
  height:100%
}
```
::: demo
```vue
<template>
  <div class="box-vue">Vue {{ message }}</div>
</template>
<script>
export default {
  data: () => ({ message: 'Hello World' })
}
</script>
<style>
.box-vue { color: red; }
</style>
```
:::

<[vuese](@/theme/components/Ads.vue)