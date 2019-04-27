/**
 * Actions for the Cars module
 */

import types from './types';
import AppCore from '@/core';

export default {
  async init({ dispatch }) {
    await AppCore.cars.init();
    dispatch('setItems');
  },

  setItems({ commit, state }) {
    const paginationData = AppCore.cars.getPaginationData({
      page: state.currentPage,
    });

    commit(types.SET_TOTAL, {
      total: paginationData.total,
    });

    commit(types.SET_ITEMS, {
      items: paginationData.items,
    });
  },

  setCurrentPage({ commit, dispatch }, { page }) {
    commit(types.SET_PAGE, {
      page,
    });

    dispatch('setItems');
  },
};
