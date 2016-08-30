import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // 初始状态
  // 用户类
  user:{},
  // 首页问答列表
  Home_ask_list:[
    {a:1},
    {a:1},
    {a:1},
    {a:1},
    {a:1},
    {a:1},
  ],
  count: 0
}

// 创建一个对象存储一系列 mutation 函数
const mutations = {
  // TODO: 放置状态变更函数
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  INCREMENT (state, amount) {
    state.count = state.count + amount
  },
  HOME_ASK_LIST (state, data) {
    state.Home_ask_list = state.Home_ask_list.push(data)
  },
  USER (state, data) {
    state.user = data
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// store 连接到应用中
export default new Vuex.Store({
  state,
  mutations
})