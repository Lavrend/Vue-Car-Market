/**
 * Mutations for the Catalog module
 */

import types from './types';

export default {
  [types.SET_ITEMS](state, { items }) {
    state.items = items;
  },

  [types.SET_SEARCH](state, { search }) {
    state.search = search;
  },

  [types.SET_PAGE](state, { page }) {
    state.currentPage = page;
  },

  [types.SET_PAGE_SIZE](state, { pageSize }) {
    state.pageSize = pageSize;
  },

  [types.SET_TOTAL](state, { total }) {
    state.total = total;
  },
};
