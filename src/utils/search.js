const search = (data = [], searchQuery = '') => {
  let values = String(searchQuery || '').toLowerCase();

  if (!values) return data;

  values = values.split(' ');

  const filterMethod = (item = {}) => {
    const keys = Object.keys(item);

    return keys.some((key) => {
      const itemValue = String(item[key] || '');

      if (!itemValue) return false;

      return values.some(value => itemValue.toLowerCase().indexOf(value.toLowerCase()) > -1);
    });
  };

  return data.filter(filterMethod);
};

export default search;
