//vue.config.js

const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery"
      })
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
                      //mixin
                      @import "@/assets/scss/mixins/_breakpoints.scss";
                      @import "@/assets/scss/mixins/_boxshadow.scss";
                      @import "@/assets/scss/mixins/_clearfix.scss";
                      @import "@/assets/scss/mixins/_pushauto.scss";
                      @import "@/assets/scss/mixins/_responsiveRatio.scss";
                      @import "@/assets/scss/mixins/_pseudo.scss";
                    `
      }
    }
  }
};
