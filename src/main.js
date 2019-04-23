import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Amplify.configure({
  Auth: {
    identityPoolId: 'us-west-2:36ff72b3-e36c-4293-88ed-e5d522e477fc',
    region: 'us-west-2',
    userPoolId: 'us-west-2_6xXZqkmmO',
    userPoolWebClientId: '48alm118d7hrcttmds5132876v'
  }
})
Vue.prototype.$apiEndpoint = 'https://1fpfajsbfb.execute-api.us-west-2.amazonaws.com/prod/secured/'
Vue.prototype.$host = '1fpfajsbfb.execute-api.us-west-2.amazonaws.com'

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
