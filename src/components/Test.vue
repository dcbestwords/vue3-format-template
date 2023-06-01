<template>
  <div class="test">
    <h1>测试lint</h1>
  </div>
</template>

<script setup lang="ts">
// 语法和格式化测试
const tmp = "双引号";
function test() {
  var a = 1;
  console.log('111', a)
}
test()
console.log(tmp)
</script>

<style scoped>
/* style测试 */
.test{
  width:200px;
  height:400px;
  background-color:#fff;
}
</style>
