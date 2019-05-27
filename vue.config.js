const host = 'localhost'
const port = 8081

module.exports = {
    configureWebpack: {
      devtool: 'source-map'
    },
    lintOnSave: false,
    publicPath: `http://${host}:${port}/`,
    devServer: {
      port,
      host,
      hotOnly: true,
      clientLogLevel: 'warning',
      inline: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      },
      /*Workaround to fix [WDS] Disconnected!
      //https://github.com/vuejs/vue-cli/issues/3173#issuecomment-449573901
      https://github.com/vuejs/vue/issues/9249*/
      disableHostCheck: true, // process.env.NODE_ENV === 'development'
      //https: true,
      useLocalIp: false,
    }
  }