
import "font-awesome/css/font-awesome.css"
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVkdWFyZG8gTW9yaXR6IiwiZW1haWwiOiJlZHVhcmRvLm1vcml0ekBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTYyMjY4MjEsImV4cCI6MTU1NjQ4NjAyMX0.5dfsp2g-kLVpxrU1JAu7947xc1RNAB6f6RyQ6fJGVoI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')