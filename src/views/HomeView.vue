<template>
  <el-container class="container">
    <el-aside class="aside-container">
      <Nav></Nav>
    </el-aside>
    <el-main class="main-container">
      系统介绍
    </el-main>
  </el-container>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.aside-container {
  width: 15%;
  overflow-x: hidden;
}
.main-container {
  height: 100vh;
  // min-height: 100%; /* 设置最小高度为100% */
  overflow-y: auto;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
