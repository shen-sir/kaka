import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// import menubar from './components/menubar.vue'
Vue.use(VueRouter)


const router = new VueRouter()


router.map({
	'/':{
    	component: function (resolve) {
      require(['./components/quesList.vue'], resolve)
    }
    },
    '/foo': {
        component: function (resolve) {
      require(['./App.vue'], resolve)
    }
    },
    '/bar': {
        component: function (resolve) {
      require(['./components/Hello.vue'], resolve)
    }
    }
})




router.start( App, '#app')
// router.go('/bar')
/*navigator.geolocation.getCurrentPosition(function(position){ alert(position.coords.latitude);alert(navigator.onLine);
});*/

