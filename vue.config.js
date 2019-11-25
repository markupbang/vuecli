//vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
                        //base
                        @import "@/assets/scss/base/_typography.scss";
                        @import "@/assets/scss/base/_variables.scss";
                        @import "@/assets/scss/base/_reset.scss";

                        //mixin
                        @import "@/assets/scss/mixins/_breakpoints.scss";
                        @import "@/assets/scss/mixins/_boxshadow.scss";
                        @import "@/assets/scss/mixins/_clearfix.scss";
                        @import "@/assets/scss/mixins/_pushauto.scss";
                        @import "@/assets/scss/mixins/_responsiveRatio.scss";

                        //vandors
                        @import "@/assets/scss/vendors/_font-awesome-5.7.2.scss";
                    `
      }
    }
  }
};
