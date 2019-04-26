/**
 * App Store Module
 */

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default {
  name: 'app',
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
