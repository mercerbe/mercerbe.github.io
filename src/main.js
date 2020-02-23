// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Vuesax
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
// Extra Utils/libs
import VueScrollTo from "vue-scrollto";

// use libs
Vue.use(Vuesax);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// set production
Vue.config.productionTip = false;

// vue instance
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
