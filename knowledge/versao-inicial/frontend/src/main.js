import "font-awesome/css/font-awesome.css"
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
// require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVkdWFyZG8gTW9yaXR6IiwiZW1haWwiOiJlZHVhcmRvLm1vcml0ekBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTgxOTg0OTksImV4cCI6MTU1ODQ1NzY5OX0.Mb4rs1vv06jpCpKzS6CcQWmAYhib8DMovg_gO_DCnnc'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')