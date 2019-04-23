import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Amplify.configure({
  Auth: {
    identityPoolId: '########',
    region: '#########',
    userPoolId: '##########',
    userPoolWebClientId: '############'
  }
})
Vue.prototype.$apiEndpoint = '#################'

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
