// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Vuesax
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

// use libs
Vue.use(Vuesax);

// set production
Vue.config.productionTip = false;

// vue instance
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
