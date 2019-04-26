/**
 * Actions for the App module
 */

import types from './types';

export default {
  setPageReady({ commit }, ready) {
    commit(types.SET_APP_READY, ready);
  },
};
