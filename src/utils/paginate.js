import config from '@/config';

const paginate = (data = [], page = 1, pageSize = config.DEFAULT_PAGE_SIZE) => {
  const result = data;
  const currentPage = page - 1; // indent pages for start with 0

  return {
    page,
    pageSize,
    total: data.length,
    items: result.slice(currentPage * pageSize, (currentPage + 1) * pageSize),
  };
};

export default paginate;
