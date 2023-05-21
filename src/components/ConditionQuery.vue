<template>
  <div class="common-layout">
    <el-row>
      <el-col :span="8" justify="space-between"
        ><el-cascader :options="educationOptions" placeholder="学历" clearable style="width: 240px"
      /></el-col>

      <el-col :span="8"
        ><el-cascader
          :options="workingTimeOptions"
          placeholder="参加工作时间"
          clearable
          style="width: 240px"
      /></el-col>
      <el-col :span="8"
        ><el-cascader
          :options="securityOptions"
          placeholder="参保情况"
          clearable
          style="width: 240px"
      /></el-col>
    </el-row>
    <el-row>
      <el-col :span="8" justify="space-between"
        ><el-cascader
          :options="partyMemberOptions"
          placeholder="党员情况"
          clearable
          style="width: 240px"
      /></el-col>
      <el-col :span="8"
        ><el-cascader :options="ageOptions" placeholder="年龄" clearable style="width: 240px"
      /></el-col>
      <el-col :span="8"
        ><el-cascader
          :options="maritalOptions"
          placeholder="婚姻状况"
          clearable
          style="width: 240px"
      /></el-col>
    </el-row>
    <el-row justify="space-between">
      <el-col :span="6"
        ><el-cascader
          :options="positionOptions"
          placeholder="工作岗位"
          clearable
          style="width: 240px"
      /></el-col>
      <el-col :span="8"><el-button type="success">点击查询</el-button></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const educationOptions = [
  {
    value: 'primary',
    label: '小学'
  },
  {
    value: 'secondarySchool',
    label: '中学'
  },
  {
    value: 'juniorCollege',
    label: '专科'
  },
  {
    value: 'masterCandidate',
    label: '硕士研究生'
  },
  {
    value: 'doctoralCandidate',
    label: '博士研究生'
  }
]
const workingTimeOptions = [
  {
    value: 'withinOneYear',
    label: '一年以内'
  },
  {
    value: 'oneYear',
    label: '一年'
  },
  {
    value: 'twoYears',
    label: '两年'
  },
  {
    value: 'threeYears',
    label: '三年'
  },
  {
    value: 'fourYears',
    label: '四年'
  },
  {
    value: 'moreThanFiveYears',
    label: '五年以上'
  }
]

const securityOptions = [
  {
    value: 'insured',
    label: '参保'
  },
  {
    value: 'uninsured',
    label: '未参保'
  }
]

const partyMemberOptions = [
  {
    value: 'partyMember',
    label: '党员'
  },
  {
    value: 'noPartyMember',
    label: '非党员'
  }
]

const ageOptions = [
  {
    value: 'eighteenToTwenty',
    label: '18-20'
  },
  {
    value: 'twentyOneToTwentyFive',
    label: '21-25'
  },
  {
    value: 'twentySixToThirty',
    label: '26-30'
  },
  {
    value: 'thirtyOneToThirtyFive',
    label: '31-35'
  },
  {
    value: 'thirtySixToForty',
    label: '36-40'
  },
  {
    value: 'fortyOneToFortyFive',
    label: '41-45'
  },
  {
    value: 'fortySixToFifty',
    label: '46-50'
  },
  {
    value: 'fiftyOneToFiftyFive',
    label: '51-55'
  },
  {
    value: 'fiftySixToSixty',
    label: '56-60'
  }
]

const maritalOptions = [
  {
    value: 'spinsterhood',
    label: '未婚'
  },
  {
    value: 'married',
    label: '已婚'
  },
  {
    value: 'divorced',
    label: '离异'
  }
]
const positionOptions = [
  {
    value: 'technicalSection',
    label: '技术部门',
    children: [
      {
        value: 'frontendEngineer',
        label: '前端工程师',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      },
      {
        value: 'backendEngineer',
        label: '后端工程师',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      },
      {
        value: 'testEngineer',
        label: '测试工程师',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      },
      {
        value: 'productManager',
        label: '产品经理',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      },
      {
        value: 'technicalArchitect',
        label: '技术架构师',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      },
      {
        value: 'operatingEngineer',
        label: '运维工程师',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      }
    ]
  },
  {
    value: 'operationDepartment',
    label: '运营部门',
    children: [
      {
        value: 'userOperationManager',
        label: '用户运营经理',
        children: [
          {
            value: 'M2',
            label: 'M2'
          },
          {
            value: 'M3',
            label: 'M3'
          }
        ]
      },
      {
        value: 'marketingManager',
        label: '市场推广经理',
        children: [
          {
            value: 'M2',
            label: 'M2'
          },
          {
            value: 'M3',
            label: 'M3'
          }
        ]
      },
      {
        value: 'dataAnalyst',
        label: '数据分析师',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      },
      {
        value: 'contentEditor',
        label: '内容编辑师',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      }
    ]
  },
  {
    value: 'humanResourcesDepartment',
    label: '人力资源部门',
    children: [
      {
        value: 'humanResourcesDirector',
        label: '人力资源总监',
        children: [
          {
            value: 'M4',
            label: 'M4'
          },
          {
            value: 'M5',
            label: 'M5'
          }
        ]
      },
      {
        value: 'humanResourcesManager',
        label: '人力资源经理',
        children: [
          {
            value: 'M2',
            label: 'M2'
          },
          {
            value: 'M3',
            label: 'M3'
          }
        ]
      },
      {
        value: 'humanResourcesAssistant',
        label: '人力资源助理',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      }
    ]
  },
  {
    value: 'financeDepartment',
    label: '财务部门',
    children: [
      {
        value: 'financialAnalyst',
        label: '财务分析师',
        children: [
          {
            value: 'M4',
            label: 'M4'
          },
          {
            value: 'M5',
            label: 'M5'
          }
        ]
      },
      {
        value: 'financialAccountant',
        label: '财务会计',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      }
    ]
  },
  {
    value: 'technicalSection',
    label: '行政部门',
    children: [
      {
        value: 'officeAdministrator',
        label: '办公室管理员',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      },
      {
        value: 'administrativeAssistant',
        label: '行政助理',
        children: [
          {
            value: 'P4',
            label: 'P4'
          },
          {
            value: 'P5',
            label: 'P5'
          },
          {
            value: 'P6',
            label: 'P6'
          }
        ]
      }
    ]
  }
]

</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
