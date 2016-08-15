import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)
const router = new VueRouter()

//路由配置
router.map({
	'/':{
    	component: function (resolve) {
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
    }
})




router.start( App, '#app')
// router.go('/bar')
/*navigator.geolocation.getCurrentPosition(function(position){ alert(position.coords.latitude);alert(navigator.onLine);
});*/

