<template>
  <div class="box" @click.self="onAlert">
    <span>新年快乐，恭喜发财！</span>
    <p>aaaaaaaaaaaaa</p>
    <input type="text" v-model="value" @input="handInput(value)">
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "App",
  setup() {
    const onAlert = () => {
      alert("恭喜发财，万事如意！");
    };
    const value = ref("");
    const handInput = (val)=>{
      console.log(val)
    }
    return {
      onAlert,
      value,
      handInput
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