import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Amplify.configure({
  Auth: {
    identityPoolId: '<your-identity-pool-id>',
    region: 'us-west-2',
    userPoolId: '<your-user-pool-id>',
    userPoolWebClientId: '<your-user-pool-client-id>'
  }
})
Vue.prototype.$apiEndpoint = '<your-api-gateway-endpoint>'

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
