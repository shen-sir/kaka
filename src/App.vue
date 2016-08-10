<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
   
    <div class="menubar">
      <div class="item"><img src="./images/mbar.png" alt=""></div>
      <div class="item"><img src="./images/mbar.png" alt=""></div>
      <div class="item"><img src="./images/mbar.png" alt=""></div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
// import test from './components/test.vue'
// console.log(Hello)
export default {
  components: {
    Hello/*,
    test (a){
      require(['./components/test.vue'],a)
      
    }*/
  }
}
document.title="问答!!";
</script>

<style lang="less">
html,body{
  height: 100%;
}
#app{
  // display: flex;
  height: 619px;
  overflow-x: hidden;
  .main{
    height: 100%;
    // border: 1px solid black;
    // background-color: #f0f0f0;
  }
  .menubar{
    position: fixed;
    bottom: 0;
    display: flex;
    align-self:flex-end;
    // border-top:1px solid black;
    height: 48px;
    width: 100%;
    .item{
      flex-grow:1;
      // border: 1px solid black;
      img{
        height: 48px;
      }
    }
  }
} 


</style>
