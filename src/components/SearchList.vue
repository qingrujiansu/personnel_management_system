<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="jobNumber" label="工号" width="100" />
    <el-table-column prop="name" label="姓名" width="100" />
    <el-table-column prop="education" label="学历" width="100" />
    <el-table-column prop="workingTime" label="参加工作时间" width="110" />
    <el-table-column prop="security" label="参保情况" width="100" />
    <el-table-column prop="partyMember" label="党员情况" width="100" />
    <el-table-column prop="age" label="年龄" width="100" />
    <el-table-column prop="marital" label="婚姻状况" width="180" />
    <el-table-column prop="position" label="工作岗位" width="250" />
  </el-table>
  <el-row class="row-bg" justify="center">
    <el-col :span="12"
      ><el-pagination background layout="prev, pager, next" :total="1000"
    /></el-col>
  </el-row>
</template>

<script lang="ts" setup>
const tableData = [
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  },
  {
    jobNumber: '20202655',
    name: '小红',
    education: '本科',
    workingTime: '4年',
    security: '参保',
    partyMember: '是',
    age: '20',
    marital: '已婚',
    position: '技术部门/前端工程师/P5'
  }
]
</script>
<style lang="less">
.el-row{
    margin-top: 10px;
}
</style>