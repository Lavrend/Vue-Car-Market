// ============
// Cars module for AppCore
// ============
import Vue from 'vue';
import flattenData from '@/utils/flattenData';
import paginate from '@/utils/paginate';

class CarsCore {
  constructor() {
    this.flattenCarsData = [];
    this.currentPage = 1;
    this.inited = false;
  }

  async init() {
    if (!this.inited) {
      await this.updateCarsData();
      this.inited = true;
    }

    return this;
  }

  async getCarsData() {
    const res = await Vue.http.get('cars');

    return flattenData(res.data);
  }

  async updateCarsData() {
    this.flattenCarsData = await this.getCarsData();

    return this;
  }

  getPaginationData({ page }) {
    this.currentPage = page || 1;
    const paginationData = paginate(this.flattenCarsData, this.currentPage);

    return paginationData;
  }
}

export default CarsCore;
