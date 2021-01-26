<template>
  <div class="box" @click="onAlert">新年快乐，恭喜发财！</div>
</template>

<script>
export default {
  name: "App",
  setup() {
    const onAlert = () => {
      alert("恭喜发财，万事如意！");
    };
    return {
      onAlert,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/mixin.scss";
.box {
  color: $colors;
}
</style>