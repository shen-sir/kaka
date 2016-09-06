// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
export const incrementCounter = function ({ dispatch, state }) {
	// 这一条是测试
  	dispatch('INCREMENT', 1)
}
// 首页问答列表
export const inhome_ask_list = function ({ dispatch, state },data) {
	// alert(1);
  	dispatch('HOME_ASK_LIST', data)
}
// 登录用户信息
export const inuser = function ({ dispatch, state },data) {
	// alert(1);
  	dispatch('USER', data)
}
// 大V
export const inhotuser = function ({ dispatch, state },data) {
	// alert(1);
	
	// debugger;
  	dispatch('HOTUSER', data)
}
