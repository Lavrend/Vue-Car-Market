// ============
// Catalog module for AppCore
// ============
import Vue from 'vue';

import _flatten from '@/utils/flatten';
import _search from '@/utils/search';
import _paginate from '@/utils/paginate';

class CatalogCore {
  constructor() {
    this.flattenData = [];
    this.inited = false;
  }

  async init() {
    if (!this.inited) {
      await this.setFlattenData();
      this.inited = true;
    }

    return this;
  }

  async getFlattenData() {
    const res = await Vue.http.get('catalog');

    return _flatten(res.data);
  }

  async setFlattenData() {
    this.flattenData = await this.getFlattenData();

    return this;
  }

  getSearchResult(data = [], search = '') {
    return _search(data, search);
  }

  getPaginationData(data = [], page = 1, pageSize) {
    return _paginate(data, page, pageSize);
  }

  getTotalData(search = '', page = 1, pageSize) {
    const searchData = this.getSearchResult(this.flattenData, search);

    return this.getPaginationData(searchData, page, pageSize);
  }
}

export default CatalogCore;
