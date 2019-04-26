// ============
// Cars module for AppCore
// ============
import Vue from 'vue';
import flattenData from '@/utils/flattenData';

class CarsCore {
  constructor() {
    this.flattenCarsData = [];
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

  getItems() {
    return this.flattenCarsData;
  }
}

export default CarsCore;
