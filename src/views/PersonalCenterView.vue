<template>
  <el-container class="container">
    <el-aside class="aside-container">
      <Nav></Nav>
    </el-aside>
    <el-main class="main-container">
      <el-row justify="end">
        <el-col :span="1">
          <el-button type="success" round @click="centerDialogVisible = true" size="small">登录</el-button>

          <el-dialog v-model="centerDialogVisible" width="30%" align-center>
            <Login></Login>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="centerDialogVisible = false"> Confirm </el-button>
              </span>
            </template>
          </el-dialog>



        </el-col>
      </el-row>
      <From></From>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const centerDialogVisible = ref(false)
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
