import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'


//应用组件
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter()

//路由配置
router.map({
	'/':{
    	component: function (resolve) {
    		//webpack分割代码，异步加载组件
      require(['./components/quesList.vue'], resolve)
    }
    },
    '/big_shot': {
        component: function (resolve) {
	      require(['./components/Big_shot.vue'], resolve)
	    }
    },
    '/personal_homepage': {
        component: function (resolve) {
	      require(['./components/Personal_homepage.vue'], resolve)
	    }
    },
    '/my_question': {
        component: function (resolve) {
	      require(['./components/my_question.vue'], resolve)
	    }
    },
    '/my_answer': {
        component: function (resolve) {
	      require(['./components/my_answer.vue'], resolve)
	    }
    },
    '/details_of_my_questions':{
        component: function (resolve) {
	      require(['./components/details_of_my_questions.vue'], resolve)
	    }
    },
    '/answered':{
        component: function (resolve) {
	      require(['./components/answered.vue'], resolve)
	    }
    },
    '/my_read':{
        component: function (resolve) {
	      require(['./components/my_read.vue'], resolve)
	    }
    },
    '/other_homepage':{
    	 component: function (resolve) {
	      require(['./components/other_homepage.vue'], resolve)
	    },
	    //自路由
	    subRoutes:{
	    	'/':{
	    		component: function (resolve) {
			      require(['./components/ask.vue'], resolve)
			    }
	    	},
	    	'/right':{
	    		component: function (resolve) {
			      require(['./components/Big_shot.vue'], resolve)
			    }
	    	}
	    }
    },
    '/input_problem':{
        component: function (resolve) {
	      require(['./components/input_problem.vue'], resolve)
	    }
    },
    '/account':{
        component: function (resolve) {
	      require(['./components/account.vue'], resolve)
	    }
    },
    '/edit':{
    	component: function (resolve) {
	      require(['./components/edit.vue'], resolve)
	    }
    }
})




router.start( App, '#app')
// router.go('/bar')
/*navigator.geolocation.getCurrentPosition(function(position){ alert(position.coords.latitude);alert(navigator.onLine);
});*/

