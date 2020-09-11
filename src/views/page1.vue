<template>
  <div>12121</div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "page1",
  mounted() {
    this.lodaPage();

    new Promise(resolve => {
      setTimeout(() => {
        resolve("hello");
      }, 2000);
    })
      .then(val => {
        console.log(val); //  参数val = 'hello'
        return new Promise(resolve => {
          setTimeout(() => {
            resolve("world");
          }, 2000);
        });
      })
      .then(val => {
        console.log(val); // 参数val = 'world'
      });
  },
  methods: {
    lodaPage() {
      // Dialog.alert({
      //   message: "弹窗内容1212121"
      // });
      this.$store.commit('SET_INFO', {name: '1212', id: '8888'})

      console.log(this.$store.state.user.info);
    },
    delPage() {}
  }
};
</script>

<style scoped></style>
