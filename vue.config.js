const { join } = require('path');
const { createReadStream } = require('fs');

module.exports = {
  runtimeCompiler: true,

  devServer: {
    port: 9000,

    setup(app) {
      app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
      });

      app.get('/api/catalog', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        createReadStream(join(process.cwd(), 'api/catalog.json'), { encoding: 'utf-8' })
          .pipe(res);
      });
    },
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/variables.scss"; @import "@/styles/mixins.scss";',
      },
    },
  },
};
