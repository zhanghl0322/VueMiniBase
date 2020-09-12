import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Utils from "./common/utils";
import { Dialog } from "vant";
Vue.config.productionTip = false;

// 挂载到Vue实例上面
// 区别：
// 1、不是为了vue写的插件(插件内要处理)不支持Vue.use()加载方式
// 2、非vue官方库不支持new Vue()方式
// 3、每一个vue组件都是Vue的实例，所以组件内this可以拿到Vue.prototype上添加的属性和方法。

//页面调用方式: this.Utils
Vue.prototype.Utils = Utils;

//页面调用方式: this.$dialog
Vue.use(Dialog);

//路由守护
router.beforeEach((route, redirect, next) => {
  console.table("路由守护", route);
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//this.$store.commit('SET_INFO', {name: data.name, id: data.id})

//this.$store.dispatch('clearKeepAlive')
