const flatten = (data = []) => {
  const total = [];

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

  return total;
};

export default flatten;
