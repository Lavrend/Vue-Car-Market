const search = (data = [], searchQuery = '') => {
  const value = String(searchQuery || '').toLowerCase();

  if (!value) {
    return data;
  }

  const filterMethod = (item = {}) => {
    const keys = Object.keys(item);

    return keys.some((key) => {
      const itemValue = String(item[key] || '');

      if (!itemValue) {
        return false;
      }

      return itemValue.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  };

  return data.filter(filterMethod);
};

export default search;
