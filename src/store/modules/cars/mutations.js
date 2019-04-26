/**
 * Mutations for the Cars module
 */

import types from './types';

export default {
  [types.SET_ITEMS](state, { items }) {
    state.items = items;
  },

  [types.SET_PAGE](state, { page }) {
    state.page = page;
  },
};
