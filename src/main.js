import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// import menubar from './components/menubar.vue'
Vue.use(VueRouter)

var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})


// var App = Vue.extend({})

var router = new VueRouter()

/*new Vue({
  el: 'body',
  components: { menubar }
})*/
var vm = new Vue({
	el:'',
	data:{
		a :1
	}
});
/*router.map({
    '/foo': {
        component: function (resolve) {
      require(['./App.vue'], resolve)
    }
    },
    '/bar': {
        component: function (resolve) {
      require(['./components/test.vue'], resolve)
    }
    },
    '/menubar':{
    	component: function (resolve) {
      require(['./components/menubar.vue'], resolve)
    }
    }
})*/




router.start( App, '#app')
/*navigator.geolocation.getCurrentPosition(function(position){ alert(position.coords.latitude);alert(navigator.onLine);
});*/

