<template>
  <div class="box" @click.self="onAlert">
    <span>新年快乐，恭喜发财！</span>
    <p>aaaaaaaaaaaaa</p>
  </div>
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
  border: 1px solid #ccc;
}
</style>