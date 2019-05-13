import "font-awesome/css/font-awesome.css"
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVkdWFyZG8gTW9yaXR6IiwiZW1haWwiOiJlZHVhcmRvLm1vcml0ekBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTc3ODQzMzQsImV4cCI6MTU1ODA0MzUzNH0.GNBGgVJxH_3RmdIKiZTh4ZinvBl5WvhbPaA31KMmr-4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')