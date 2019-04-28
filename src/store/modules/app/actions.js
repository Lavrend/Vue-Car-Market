/**
 * Actions for the App module
 */

import types from './types';

export default {
  setPageReady({ commit }, ready) {
    commit(types.SET_APP_READY, ready);
  },

  setSearchActive({ commit }, { active }) {
    commit(types.SET_SEARCH_ACTIVE, active);
  },

  searchToggle({ dispatch, state }) {
    const active = !state.isSearchActive;

    if (active && state.isPaginationActive) {
      dispatch('setPaginationActive', {
        active: false,
      });
    }

    dispatch('setSearchActive', {
      active,
    });
  },
};
