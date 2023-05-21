<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-input
          v-model="input1"
          class="w-50 m-2"
          size="large"
          placeholder="请输入需要查询员工的工号"
          :prefix-icon="Search"
        />
      </el-header>
      <el-main>
        <DetailedInformation></DetailedInformation>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

<style lang="less" scoped></style>
