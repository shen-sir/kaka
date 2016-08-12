<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
   
    <div class="menubar">
      <a v-link="{ path: '/' }"><div class="item"><img src="./images/mbar.png" alt=""></div></a>
      <a v-link="{ path: '/bar' }"><div class="item"><img src="./images/mbar.png" alt=""></div></a>
      <a v-link="{ path: '/foo' }"><div class="item"><img src="./images/mbar.png" alt=""></div></a>
    </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'
// import test from './components/test.vue'
// console.log(Hello)
export default {
  // components: {
  //   Hello
  // }
}
</script>

<style lang="less">
html,body{
  height: 100%;
}
#app{
  padding-bottom: 50px;
  // display: flex;
  // height: 619px;
  // overflow-x: hidden;
  .main{
    height: 100%;
    // border: 1px solid black;
    // background-color: #f0f0f0;
  }
  .menubar{
    position: fixed;
    z-index: 9999;
    bottom: 0;
    display: flex;
    align-self:flex-end;
    background-color: white;
    // border-top:1px solid black;
    height: 48px;
    width: 100%;
    a{
      flex-grow:1;
      // border: 1px solid black;
      img{
        height: 48px;
      }
    }
  }
} 


</style>
