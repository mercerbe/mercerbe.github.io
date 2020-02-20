// Vue
import Vue from "vue";
import App from "./App.vue";
// Vuesax
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

// use libs
Vue.use(Vuesax);

// set production
Vue.config.productionTip = false;

// vue instance
new Vue({
  render: h => h(App)
}).$mount("#app");
