module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/pe/' : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    dll: {
      entry: ['vue', 'vuetify', 'vuex', 'vue-axios', 'axios'],
    },
  },
}
