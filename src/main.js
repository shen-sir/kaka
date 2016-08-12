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
    '/bar': {
        component: function (resolve) {
      require(['./components/Big_shot.vue'], resolve)
    }
    },
    '/foo': {
        component: function (resolve) {
      require(['./components/Personal_homepage.vue'], resolve)
    }
    }
})




router.start( App, '#app')
// router.go('/bar')
/*navigator.geolocation.getCurrentPosition(function(position){ alert(position.coords.latitude);alert(navigator.onLine);
});*/

