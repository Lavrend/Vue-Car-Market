const flatten = (data = []) => {
  const total = [];

  const sortBy = key => (a, b) => {
    if (a[key] > b[key]) return 1;
    if (b[key] > a[key]) return -1;

    return 0;
  };

  data.forEach((country) => {
    country.children.forEach((brand) => {
      brand.children.forEach((model) => {
        const result = {
          [country.type]: country.value,
          [brand.type]: brand.value,
          [model.type]: model.value,
          year: null,
          vin: null,
        };

        if (model.children.type === 'year') {
          const itemDeep = model.children;
          const itemsWithVin = itemDeep.children.filter(item => item.value);

          if (!itemsWithVin.length) {
            itemsWithVin.push(itemDeep);
          }

          itemsWithVin.forEach((item) => {
            total.push({
              ...result,
              [model.children.type]: model.children.value || null,
              [item.type]: item.value || null,
            });
          });

          return;
        }

        total.push({
          ...result,
          [model.children.type]: model.children.value || null,
        });
      });
    });
  });

  return total.sort(sortBy('brand')).map((item, index) => {
    item.itemId = index + 1;
    return item;
  });
};

export default flatten;
