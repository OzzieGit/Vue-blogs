// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)
Vue.config.productionTip = false
Vue.prototype.$http = Axios

//自定义指令
Vue.directive('rainbow',{
	bind(el,bind,vnode){
		el.style.color = '#'+Math.random().toString(16).slice(2,8)
	}
})

//自定义过滤器
Vue.filter('uppercase',value => value.toUpperCase());
Vue.filter('snippet',value => value.slice(0,120)+'...');

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
