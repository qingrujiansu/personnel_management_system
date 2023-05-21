<template>
  <el-radio-group v-model="size">
    <el-radio label="large">Large</el-radio>
    <el-radio>Default</el-radio>
    <el-radio label="small">Small</el-radio>
  </el-radio-group>

  <el-descriptions class="margin-top" title="员工信息" :column="3" :size="size" border>
    <template #extra>
      <el-button type="danger">删除</el-button>
    </template>

    <el-descriptions-item label="证件照" label-align="left" align="center"
      ><el-image style="width: 50px; height: 50px" :src="identification" fit="fit"
    /></el-descriptions-item>


    <el-descriptions-item label="姓名">小红</el-descriptions-item>
    <el-descriptions-item label="性别">女</el-descriptions-item>
    <el-descriptions-item label="年龄">18</el-descriptions-item>
    <el-descriptions-item label="身高">170</el-descriptions-item>
    <el-descriptions-item label="体重">90</el-descriptions-item>
    <el-descriptions-item label="出生日期">2000.1.1</el-descriptions-item>
    <el-descriptions-item label="银行卡号">430225200108236555</el-descriptions-item>
    <el-descriptions-item label="家庭常驻地址">湖南省长沙市天心区中南林业科技大学</el-descriptions-item>
    <el-descriptions-item label="社保">参保</el-descriptions-item>
    <el-descriptions-item label="手机号码">15570891929</el-descriptions-item>
    <el-descriptions-item label="Email">2789930689@qq.com</el-descriptions-item>
    <el-descriptions-item label="学历">本科</el-descriptions-item>
    <el-descriptions-item label="婚姻状况">未婚</el-descriptions-item>
    <el-descriptions-item label="工号">20202655</el-descriptions-item>
    <el-descriptions-item label="入职时间">2023年5月20日</el-descriptions-item>
    <el-descriptions-item label="在职">是</el-descriptions-item>
    <el-descriptions-item label="职位">技术部门/前端工程师/P4</el-descriptions-item>
    <el-descriptions-item label="奖惩情况">无</el-descriptions-item>
  </el-descriptions>

  <el-divider>
    <el-icon><star-filled /></el-icon>
  </el-divider>

  <el-cascader :options="options" />
  <form class="ui reply form">
    <div class="field">
      <textarea></textarea>
    </div>
    <div class="ui primary submit labeled icon button" style="background-color: #64CB8C;"><i class="icon edit"></i> 确认修改</div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import identification from '@/assets/images/identification.png'
import { Iphone, Location, OfficeBuilding, Tickets, User } from '@element-plus/icons-vue'
const options = [
  {
    value: 'idPhoto',
    label: '证件照'
  },
  {
    value: 'name',
    label: '姓名'
  },
  {
    value: 'gender',
    label: '性别'
  },
  {
    value: 'age',
    label: '年龄'
  },
  {
    value: 'height',
    label: '身高'
  },
  {
    value: 'weight',
    label: '体重'
  },
  {
    value: 'birthDate',
    label: '出生日期'
  },
  {
    value: 'idNumber',
    label: '身份证号'
  },
  {
    value: 'bankCardNumber',
    label: '银行卡号'
  },
  {
    value: 'homeAddress',
    label: '家庭常驻地址'
  },
  {
    value: 'socialSecurity',
    label: '社保'
  },
  {
    value: 'phoneNumber',
    label: '手机号码'
  },
  {
    value: 'email',
    label: 'Email'
  },
  {
    value: 'education',
    label: '学历'
  },
  {
    value: 'partyMember',
    label: '党员'
  },
  {
    value: 'maritalStatus',
    label: '婚姻状况'
  },
  {
    value: 'dateOfEntry',
    label: '入职时间'
  },
  {
    value: 'inService',
    label: '在职'
  },
  {
    value: 'position',
    label: '职位'
  },
  {
    value: 'rewardsAndPunishments',
    label: '奖惩情况'
  }
]
const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px'
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default
  }
})
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px'
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default
  }
})
</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
