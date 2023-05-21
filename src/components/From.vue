<template>
  <el-form
    label-position="right"
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >

  <el-form-item label="证件照" required>
      <el-upload
        class="avatar-uploader"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </el-form-item>


    <el-row>
      <el-col :span="8">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="年龄" prop="count">
          <el-select-v2 v-model="ruleForm.count" placeholder="Activity count" :options="options" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="身高" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="体重" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="出生日期" required>
      <el-form-item prop="date1">
        <el-date-picker
          v-model="ruleForm.date1"
          type="date"
          label="Pick a date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-form-item>
    </el-form-item>

    <el-row>
      <el-col :span="12">
        <el-form-item label="身份证" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="银行卡号" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="家庭常住地址" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>

    <el-row>
      <el-col :span="8">
        <el-form-item label="社保" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="参保" />
            <el-radio label="未参保" />
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="手机号码" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Email" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <el-form-item label="学历" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="小学" value="primary" />
            <el-option label="中学" value="secondarySchool" />
            <el-option label="专科" value="juniorCollege" />
            <el-option label="本科" value="regularCollege" />
            <el-option label="硕士研究生" value="masterCandidate" />
            <el-option label="博士研究生" value="doctoralCandidate" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="党员" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是" />
            <el-radio label="否" />
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="婚姻状况" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="未婚" />
            <el-radio label="已婚" />
            <el-radio label="离异" />
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="入职时间" required>
          <el-form-item prop="date1">
            <el-date-picker
              v-model="ruleForm.date1"
              type="date"
              label="Pick a date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-form-item>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="在职" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是" />
            <el-radio label="否" />
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="职位" prop="resource">
      <el-cascader :options="positionOptions" clearable />
    </el-form-item>

    <el-form-item label="奖惩情况" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>

    <el-row class="row-bg" justify="center">
      <el-col :span="6">
        <el-form-item>
          <el-button type="success" @click="submitForm(ruleFormRef)"> 提交 </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item></el-col
      >
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

// 上传图片
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change'
    }
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change'
    }
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change'
    }
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change'
    }
  ],
  desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}))

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
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
