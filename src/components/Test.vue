<template>
  <div class="test">
    <h1>测试lint</h1>
  </div>
</template>

<script setup lang="ts">
// 语法和格式化测试
const tmp = "双引号";
var a=10;
function test() {
    var a = 1;
    console.log('111');
}
console.log(tmp);
</script>

<style scoped lang="scss">
//style测试
.test{
  width:200px;
  height:400px;
  background-color:#fff;
  h1{
    font-size: 16px;
  }
}
</style>
