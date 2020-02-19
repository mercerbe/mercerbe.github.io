// VUE CLI STANDARD IMPORTS
import Vue from "vue";
import App from "./App.vue";
// VUESAX DEPENDENCIES
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";

// WATCH FOR PRODUCTION
Vue.config.productionTip = false;

// VUE INSTANCE
new Vue({
  Vuesax,
  render: h => h(App)
}).$mount("#app");
