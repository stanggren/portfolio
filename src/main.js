import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vueScrollto from 'vue-scrollto'
import AnalyzeDashboard from './components/AnalyzeDashboard.vue'
import About from './components/About.vue'
import Landing from './components/Landing.vue'
import RecipeSearch from './components/RecipeSearch.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Landing, meta: {transitionName: 'fade'}},
  {path: '/about', component: About, meta: {transitionName: 'fade'}},
  {path: '/projects/analyzedashboard', component: AnalyzeDashboard, meta: {transitionName: 'fade'} },
  {path: '/projects/recipesearch', component: RecipeSearch, meta: {transitionName: 'fade'}}
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(vueScrollto)

Vue.config.productionTip = false

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.event = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.event)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.event)
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
