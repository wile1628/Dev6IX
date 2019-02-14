import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import tb from '@/components/tb'
import Login from '@/components/Login'
// import Nnd from '@/components/Nnd'
import Vuetify from 'vuetify/es5/components/Vuetify'
// import vuetify from 'vuetify'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
