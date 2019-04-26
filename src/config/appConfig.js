export default {
  DEBUG: process.env.NODE_ENV !== 'production',
  API_HOST: process.env.API_HOST || 'api/',

  navMenu: [
    {
      title: 'Home',
      link: '/',
    },

    {
      title: 'Catalog',
      link: '/catalog',
    },

    {
      title: 'About',
      link: '/about',
    },
  ],
};
