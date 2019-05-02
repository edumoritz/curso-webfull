
import "font-awesome/css/font-awesome.css"
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVkdWFyZG8gTW9yaXR6IiwiZW1haWwiOiJlZHVhcmRvLm1vcml0ekBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTY3NTYxODYsImV4cCI6MTU1NzAxNTM4Nn0.AbW0NsfdMJ2iHPwvHZGXu2XiOjnmMBPTiG6wT1eGrgA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')