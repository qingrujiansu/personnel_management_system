<template>
  <div>
    <el-col :span="12">
      <el-menu
        active-text-color="#E1FB08"
        background-color="#00A396"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="white"
        @open="handleOpen"
        @close="handleClose"
        :router=true
      >
        <el-menu-item index="/" default-active>
          <el-icon><document /></el-icon>
          <span>系统介绍</span>
        </el-menu-item>
        <el-sub-menu index="/personal-management">
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>人事管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/search">
              <el-icon><Search /></el-icon>
              <span>员工信息查询</span>
            </el-menu-item>
            <el-menu-item index="/information-management">
              <el-icon><Edit /></el-icon>
              <span>信息管理</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="/employee-self-service">
          <el-icon><document /></el-icon>
          <span>员工自助服务</span>
        </el-menu-item>
        <el-menu-item index="/personal-center">
          <el-icon><setting /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.el-menu {
  height: 100vh;
  width: 100vh;
}

.el-menu-item-group {
  color: #000;
}
</style>
