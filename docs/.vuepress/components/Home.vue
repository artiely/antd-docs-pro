<template>
  <div class="home-box">
    <div class="bg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="500px"
      >
        <path
          id="shape1"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M-0.011,9.318 L8.682,6.988 L11.011,15.682 L2.318,18.011 L-0.011,9.318 Z"
        ></path>
        <path
          id="shape8"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M607.694,164.319 L612.680,161.693 L615.306,166.680 L610.320,169.305 L607.694,164.319 Z"
        ></path>
        <path
          id="shape9"
          fill-rule="evenodd"
          fill="rgb(93, 203, 250)"
          d="M667.343,205.646 L679.152,213.179 L671.620,224.988 L659.810,217.456 L667.343,205.646 Z"
        ></path>
        <path
          id="shape10"
          fill-rule="evenodd"
          fill="rgb(93, 203, 250)"
          d="M915.839,-0.008 L924.997,5.833 L919.156,14.991 L909.998,9.150 L915.839,-0.008 Z"
        ></path>
        <path
          id="cir6"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M989.000,93.000 C993.418,93.000 997.000,96.582 997.000,101.000 C997.000,105.418 993.418,109.000 989.000,109.000 C984.582,109.000 981.000,105.418 981.000,101.000 C981.000,96.582 984.582,93.000 989.000,93.000 Z"
        ></path>
        <path
          id="cir5"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M1165.000,8.000 C1167.761,8.000 1170.000,10.238 1170.000,13.000 C1170.000,15.761 1167.761,18.000 1165.000,18.000 C1162.239,18.000 1160.000,15.761 1160.000,13.000 C1160.000,10.238 1162.239,8.000 1165.000,8.000 Z"
        ></path>
        <path
          id="cir4"
          fill-rule="evenodd"
          fill="rgb(93, 203, 250)"
          d="M1303.500,118.000 C1304.881,118.000 1306.000,119.119 1306.000,120.500 C1306.000,121.880 1304.881,123.000 1303.500,123.000 C1302.119,123.000 1301.000,121.880 1301.000,120.500 C1301.000,119.119 1302.119,118.000 1303.500,118.000 Z"
        ></path>
        <path
          id="cir3"
          fill-rule="evenodd"
          fill="rgb(93, 203, 250)"
          d="M61.000,112.000 C62.657,112.000 64.000,113.343 64.000,115.000 C64.000,116.657 62.657,118.000 61.000,118.000 C59.343,118.000 58.000,116.657 58.000,115.000 C58.000,113.343 59.343,112.000 61.000,112.000 Z"
        ></path>
        <path
          id="cir2"
          fill-rule="evenodd"
          fill="rgb(74, 92, 246)"
          d="M265.500,-0.000 C271.299,-0.000 276.000,4.701 276.000,10.500 C276.000,16.299 271.299,21.000 265.500,21.000 C259.701,21.000 255.000,16.299 255.000,10.500 C255.000,4.701 259.701,-0.000 265.500,-0.000 Z"
        ></path>
        <path
          id="cir1"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M185.500,131.000 C187.985,131.000 190.000,133.015 190.000,135.500 C190.000,137.985 187.985,140.000 185.500,140.000 C183.015,140.000 181.000,137.985 181.000,135.500 C181.000,133.015 183.015,131.000 185.500,131.000 Z"
        ></path>
      </svg>
    </div>
    <!--End----->
    <div class="box">
      <div class="wave one"></div>
      <div class="wave two"></div>
      <div class="wave three"></div>
    </div>
    <!-- mian start -->
    <div class="main-box">
      <div class="main-inner">
        <h1 class="flag">Tulip Scroll</h1>
        <p class="desc">一个基于 Vue 的下拉刷新/上拉加载的滚动组件</p>
        <a-button
          type="primary"
          size="large"
        >开始探索</a-button>

        <a-popover placement="bottomLeft" >
          <template slot="content">
            <img src="https://gitee.com/artiely/Figure-bed/raw/master/image/20200416115532.png" alt="">
          </template>
          <a-button
            type="primary"
            ghost
            size="large"
            style="margin-left:20px"
          >扫码体验</a-button>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css';
import Popover from 'ant-design-vue/lib/popover';
import 'ant-design-vue/lib/popover/style/css';
export default {
  components: {
    'a-button': Button,
    'a-popover': Popover,
  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #f3f3f3;
}

.home-box {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1500px;
  overflow: hidden;
  margin-left:-6rem;
  margin-right: -6rem;
  .flag {
    font-family: Avenir-Heavy;
    font-size: 68px;
    color: #0d1a26;
    letter-spacing: 0;
    line-height: 76px;
    font-weight: 500;
    margin: 0;
  }
  .desc {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #314659;
    letter-spacing: 0;
    line-height: 38px;
    margin: 16px auto 20px;
  }
  .main-box {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    .main-inner {
      width: 1000px;
      margin: 0 auto;
    }
  }
}
.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.box {
  position: absolute;
  top: 0;
  transform: rotate(80deg);
  left: 20%;
}

.wave {
  position: absolute;
  opacity: 0.4;
  width: 1200px;
  height: 1000px;
  border-radius: 43%;
}

.wave.one {
  animation: rotate 7000ms infinite linear;
  opacity: 0.1;
  background: rgba(149, 84, 255, 0.31);
}

.wave.two {
  animation: rotate 3000ms infinite linear;
  opacity: 0.1;
  background: rgba(149, 84, 255, 0.31);
}

.wave.three {
  animation: rotate 7500ms infinite linear;
  background-color: rgba(149, 84, 255, 0.31);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

#shape10,
#shape9,
#shape8,
#shape1 {
  transform-box: fill-box;
  transform-origin: center;
  -webkit-animation: rotate-center 2s cubic-bezier(0.445, 0.05, 0.55, 0.95)
    infinite alternate both;
  animation: rotate-center 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite
    alternate both;
}

#cir1,
#cir2,
#cir3 {
  transform-box: fill-box;
  transform-origin: center;
  -webkit-animation: rotate-scale-down-diag-2 2s linear infinite both;
  animation: rotate-scale-down-diag-2 2s linear infinite both;
}

#cir4,
#cir5,
#cir6 {
  transform-box: fill-box;
  transform-origin: center;
  -webkit-animation: rotate-scale-down-diag-2 1s linear infinite both;
  animation: rotate-scale-down-diag-2 1s linear infinite both;
}

/**
 * ----------------------------------------
 * animation rotate-center
 * ----------------------------------------
 */
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/**
 * ----------------------------------------
 * animation rotate-scale-down-diag-2
 * ----------------------------------------
 */
@-webkit-keyframes rotate-scale-down-diag-2 {
  0% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
    transform: scale(1) rotate3d(-1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
    transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 360deg);
    transform: scale(1) rotate3d(-1, 1, 0, 360deg);
  }
}
@keyframes rotate-scale-down-diag-2 {
  0% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
    transform: scale(1) rotate3d(-1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
    transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 360deg);
    transform: scale(1) rotate3d(-1, 1, 0, 360deg);
  }
}

#_checkbox {
  display: none;
}

label {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: #f72414;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: 0 7px 10px #ffbeb8;
  cursor: pointer;
  transition: 0.2s ease transform, 0.2s ease background-color,
    0.2s ease box-shadow;
  overflow: hidden;
  z-index: 1;
  border: 2px solid rgba(0, 0, 0, 0.44);
}

label:before {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  background-color: #fff;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: inset 0 7px 10px #ffbeb8;
  transition: 0.2s ease width, 0.2s ease height;
  border: 1px solid black;
}

label:hover:before {
  width: 55px;
  height: 55px;
  box-shadow: inset 0 7px 10px #ff9d96;
}

label:active {
  transform: translateY(-50%) scale(0.9);
}

#tick_mark {
  position: absolute;
  top: -1px;
  right: 0;
  left: 0;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-left: 14px;
  transform: rotateZ(-40deg);
}

#tick_mark:before,
#tick_mark:after {
  content: '';
  position: absolute;
  background-color: #fff;
  border-radius: 2px;
  opacity: 0;
  transition: 0.2s ease transform, 0.2s ease opacity;
}

#tick_mark:before {
  left: 0;
  bottom: 0;
  width: 10px;
  height: 30px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
  transform: translateY(-68px);
}

#tick_mark:after {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
  transform: translateX(78px);
}

#_checkbox:checked + label {
  background-color: #07d410;
  box-shadow: 0 7px 10px #92ff97;
}

#_checkbox:checked + label:before {
  width: 0;
  height: 0;
}

#_checkbox:checked + label #tick_mark:before,
#_checkbox:checked + label #tick_mark:after {
  transform: translate(0);
  opacity: 1;
}
</style>