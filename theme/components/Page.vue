<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-antdocs-content" />
    <div style="margin-top:-100px;padding-bottom:20px">
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <slot name="bottom" />
    </div>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="less">
@import '../styles/palette.less';
@import "../styles/wrapper.less";
#app,.theme-container,.page{
  height: 100%;
}
.theme-antdocs-content{
  min-height: 100%;
  padding-bottom: 100px!important;
}
.page {
  padding-bottom: 2rem;
  display: block;
}
#message-container{
  z-index: 999;
}
@media (max-width: @MQMobile) {
  .page {
    margin-top: -@navbarHeight;
  }
}
</style>
