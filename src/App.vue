<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
   
    <div class="menubar" v-show='button'>
      <a v-link="{ path: '/' }"><div class="item"><img src="./images/mbar.png" alt=""></div></a>
      <a v-link="{ path: '/big_shot' }"><div class="item"><img src="./images/mbar.png" alt=""></div></a>
      <a v-link="{ path: '/personal_homepage' }"><div class="item"><img src="./images/mbar.png" alt=""></div></a>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
// import Hello from './components/Hello'
// import test from './components/test.vue'
export default {
  data () {
    return {
        button:true
      }
  },
  events:{//监听事件，等待派发(父子组件通信)
    'show-menu' (msg){
      this.button = msg;
    }
  },
  store
}
</script>

<style lang="less">
html,body{
  height: 100%;
}
#app{
  padding-bottom: 50px;
  .main{
    height: 100%;
  }
  .menubar{
    position: fixed;
    z-index: 9999;
    bottom: 0;
    display: flex;
    align-self:flex-end;
    background-color: white;
    height: 48px;
    width: 100%;
    a{
      flex-grow:1;
      img{
        height: 48px;
        margin-left: 40px;
      }
    }
    a:active{
      background-color: white;
    }
    a:focus{
      outline: 0 white;
      background-color: white;
    }
  }
} 


</style>
