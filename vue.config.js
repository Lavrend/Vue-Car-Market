module.exports = {
  runtimeCompiler: true,

  devServer: {
    host: 'localhost',
    port: 9000,
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/variables.scss"; @import "@/styles/mixins.scss";',
      },
    },
  },
};
