// vue.config.js
module.exports = {
    runtimeCompiler:true,
    productionSourceMap:true,
    filenameHashing:false,
    outputDir: "../public",
    configureWebpack: {
        optimization:{
            runtimeChunk:false,
            splitChunks: {
                chunks: 'all',
                name: true,
              },
        },
        plugins: [
        ]
      }
  }