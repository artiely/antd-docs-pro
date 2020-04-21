<template>
  <div class="demo-phone">
    <iframe
      src="https://artiely.gitee.io/scroll"
      id="frame"
      frameborder="0"
      style="height:640px;width:102%;user-select:none"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    src: String
  },
  mounted () {

  }
}
window.onload = function () {
  var html =
    document.getElementById('frame').contentWindow.document.querySelector('html');
  html.style.background = "#fff";
}
</script>

<style lang="less" >
html,
body {
  background: #fff !important;
}
#frame *{
  user-select: none;
}
.demo-phone {
  position: absolute;
  top: 90px;
  right: 30px;
  z-index: 1;
  box-sizing: border-box;
  width: 360px;
  min-width: 360px;
  overflow: hidden;
  background: #fff;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
}
</style>