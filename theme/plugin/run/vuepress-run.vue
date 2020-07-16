<template>
  <div v-if="dynamicComponent" class="vuepress-run">
    <component v-bind="$attrs" :is="dynamicComponent"></component>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  data () {
    return {
      dynamicComponent: null,
    }
  },
  mounted () {
    import('vue-demo-run').then(module => {
      this.dynamicComponent = module.default
    })
  },
}
</script>
