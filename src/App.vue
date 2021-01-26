<template>
  <div class="box" @click="testFunction">新年快乐，恭喜发财！</div>
</template>

<script>
export default {
  name: "App",
  setup() {
    const testFunction = () => {
      alert("alert");
    };
    return {
      testFunction
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/mixin.scss";
.box {
  color: $colors;
}
</style>