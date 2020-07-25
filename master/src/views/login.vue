<template>
  <div class="login">
    <el-row
      type="flex"
      justify="center"
    >
      <!-- justify 对齐方式 -->
      <el-col :span="6">
        <div class="grid-content">
          <h1 class="title">欢迎使用留言板！</h1>
        </div>
      </el-col>
    </el-row>

    <el-row
      type="flex"
      justify="center"
    >
      <!-- justify 对齐方式 -->
      <el-col :span="6">
        <el-card shadow="always">
          <h1 style="text-align: center;">欢迎登陆</h1>
          <el-divider></el-divider>
          <!-- form表单 -->
          <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            :rules="rules"
          >
            <!-- 用户名 -->
            <el-form-item
              label="账号"
              prop="account"
            >
              <el-input
                placeholder="请输入账号"
                type="text"
                v-model="ruleForm.account"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <!-- 密码 -->
            <el-form-item
              label="密码"
              prop="password"
            >
              <el-input
                placeholder="请输入密码"
                v-model="ruleForm.password"
                show-password
              ></el-input>
            </el-form-item>

            <!-- 按钮 -->
            <el-form-item prop="account">
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
              >提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    var notContainBlank = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      } else if (value.indexOf(" ") !== -1) {
        return callback(new Error("账号不能存在空格"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
      callback();
    };
    return {
      ruleForm: {
        account: "",
        password: ""
      },

      rules: {
        account: [
          { validator: notContainBlank, trigger: "blur" },
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "密码不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const from = this.ruleForm;
          this.$axios({
            method: "post",
            url: "/api/login",
            data: {
              account: from.account,
              password: from.password
            }
          }).then(res => {
            this.$router.push('/');
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.el-radio-group {
  display: flex;
  margin: 20px;
  /* 边缘 */
  justify-content: center;
}
.el-card {
  border-radius: 20px;
  width: 380px;
  box-shadow: 0 2px 12px 0 rgb(243, 102, 102);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.grid-content {
  /* background: rgb(14, 214, 131); */
  border-radius: 4px;
  min-height: 100px;
  width: 400px;
}
.el-row {
  margin-bottom: 20px;
}
/* .el-input{
  width: 250px;  
  } */
.el-form-item {
  width: 300px;
}
.title {
  font-family: "微软雅黑";
  margin-top: 50%;
}
</style>