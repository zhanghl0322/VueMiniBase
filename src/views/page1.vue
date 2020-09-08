<template>
  <div>12121</div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "page1",
  mounted() {
      this.lodaPage();
  },
  methods: {
    lodaPage() {
      Dialog.alert({
        message: "弹窗内容1212121"
      });
    },
    delPage() {}
  }
};
</script>

<style scoped></style>
