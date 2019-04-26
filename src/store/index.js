import Vue from 'vue';
import Vuex from 'vuex';

// Logs all Vuex mutations and actions
import createLogger from 'vuex/dist/logger';

import config from '@/config';
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,

  strict: config.DEBUG,
  plugins: config.DEBUG ? [createLogger()] : [],
});
