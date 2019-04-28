/**
 * Actions for the Catalog module
 */

import types from './types';
import AppCore from '@/core';

export default {
  async init({ dispatch }) {
    await AppCore.catalog.init();
    dispatch('setItems');
  },

  setItems({ commit, state }) {
    const paginationData = AppCore.catalog.getTotalData(state.search, state.currentPage);

    commit(types.SET_TOTAL, {
      total: paginationData.total,
    });

    commit(types.SET_ITEMS, {
      items: paginationData.items,
    });
  },

  setCurrentPage({ dispatch, commit }, { page }) {
    commit(types.SET_PAGE, {
      page,
    });

    dispatch('setItems');
  },

  setSearchFilter({ dispatch, commit, state }, { search }) {
    const len = search.length;
    const minLength = 2;

    if (!state.search && len < minLength) return;

    commit(types.SET_SEARCH, {
      search: len >= minLength ? search : '',
    });

    dispatch('setCurrentPage', {
      page: 1,
    });
  },
};
