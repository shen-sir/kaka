import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // 初始状态
  // 用户类
  user:{},
  // 首页问答列表
  Home_ask_list:[],
  // 大V用户
  HotUser:{
    "start_business":{},
    "cos_play":{},
    "e_sport":{},
    "net_hot_user":{},
    "normal":{}
  },
  count: 0// 这一条是测试
}

// 创建一个对象存储一系列 mutation 函数
const mutations = {
  // TODO: 放置状态变更函数
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  INCREMENT (state, amount) {
    // 这一条是测试
    state.count = state.count + amount
  },
  // 首页问答列表
  HOME_ASK_LIST (state, data) {
    // debugger;
    for(let i = 0;i<data.data.result.questions.length;i++){
      state.Home_ask_list.push(data.data.result.questions[i])
    }
    console.log(state.Home_ask_list)
  },
  // 登录用户信息
  USER (state, data) {
    state.user = data;
    // debugger
  },
  HOTUSER (state,data){
    // debugger;
    /*这里需要注意，修改state时如果是数组需要用vue包装过的方法，故它们能触发视图更新，
    state本来就都要声明的（因为有初始值），所以不能直接修改state对象的项的引用地址，这样无法触发更新，
    要先声明所有项再去添加
    */
    const newdata = data.data.result.hotUserList;
    for(let i=0;i<newdata.length;i++){
        switch (newdata[i].type){
          case "start_business":
          state.HotUser.start_business = newdata[i];
          break;
          case "cos_play":
          state.HotUser.cos_play = newdata[i];
          break;
          case "e_sport":
          state.HotUser.e_sport = newdata[i];
          break;
          case "net_hot_user":
          state.HotUser.net_hot_user = newdata[i];
          break;
          case "normal":
          state.HotUser.normal = newdata[i];
          break;
        }
    }
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// store 连接到应用中
export default new Vuex.Store({
  state,
  mutations
})