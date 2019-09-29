const { ENV } = require('./configs/env');

const routerConfig = {};
if (ENV.BASE_URL) {
  routerConfig.base = ENV.BASE_URL;
}

module.exports = {
  mode: 'universal',
  srcDir: 'app',

  router: {
    ...routerConfig,
  },

  render: {
    /**
     * compression を通すと2重に Gzip がかかりブラウザが表示できないので
     * なにもしないミドルウェアを定義しておく
     */
    compressor: (req, res, next) => {
      next();
    },
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  env: {
    NODE_VERSION: process.versions.node,
  },
}
