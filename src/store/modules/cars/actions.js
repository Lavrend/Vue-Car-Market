/**
 * Actions for the Cars module
 */

import types from './types';
import AppCore from '@/core';

export default {
  async init({ dispatch }) {
    await AppCore.cars.init();
    dispatch('getItems');
  },

  async getItems({ commit }) {
    // TODO add pagination
    const items = await AppCore.cars.getItems();

    commit(types.SET_ITEMS, {
      items,
    });
  },
};
