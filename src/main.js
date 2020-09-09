import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
//Vue.use(Dialog);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


//this.$store.commit('SET_INFO', {name: data.name, id: data.id})

//this.$store.dispatch('clearKeepAlive')