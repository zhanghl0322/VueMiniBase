import Vue from "vue";
import VueRouter from "vue-router";

//按需加载避免进入首页时加载内容过多  import引入会打包并成一个js  require会将你的component分别打包成不同的js  这里按需换取自用方式
const Home = resolve => require(["../views/Home"], resolve);
const About = resolve => require(["../views/About"], resolve);
const Page1 = resolve => require(["../views/page1"], resolve);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "Index",
    meta: {
      title: "首页"
    }
  },
  {
    path: "/about",
    component: About,
    name: "About",
    meta: {
      title: "关于"
    }
  },
  {
    path: "/page1",
    component: Page1,
    name: "Page1",
    meta: {
      title: "Page测试页面"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
