import Vue from 'vue';

import router from '@/router';
import store from '@/store';
import App from '@/App.vue';

import config from '@/config';

// Plugins
import '@/plugins/http';

Vue.config.productionTip = false;
Vue.config.devtools = config.DEBUG;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
