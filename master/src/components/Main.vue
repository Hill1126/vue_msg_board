<template>
  <div id="Main">
    <el-container>
      <el-header class="header-bar">
        <HeaderBar></HeaderBar>
      </el-header>
      <el-main  style=" margin-top: 20px;">
        <el-row
          style="height:280px;background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="15">
            <el-input
              type="textarea"
              placeholder="请输入留言内容"
              v-model="textarea"
              maxlength="512"
              show-word-limit
              class="textarea"
            >
            </el-input>
          </el-col>
        </el-row>

        <el-row
          style="background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="15">
            <el-card
              shadow="never"
              v-for="heading in headings"
              :key=heading
            >
              <h2>{{heading}}</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              <el-button size="small">View details >></el-button>
            </el-card>
          </el-col>
        </el-row>

        <el-row
          style="background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="15">
            <el-card
              shadow="never"
              v-for="heading in headings"
              :key=heading
            >
              <h2>{{heading}}</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              <el-button size="small">View details >></el-button>
            </el-card>
          </el-col>
        </el-row>

        <el-row
          style="background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="15">
            <el-divider></el-divider>
            <p>© 2020 Company, Inc.</p>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from "./Header";
export default {
  data() {
    return {
      headings: [
        "1Heading",
        "2Heading",
        "3Heading",
        "4Heading",
        "5Heading",
        "6Heading"
      ],
      textarea: "",
      welcome: "Vue.js,Element-UI",
      pj_name: "Project Name"
    };
  },
  components: {
    HeaderBar
  },
  methods: {
 

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert(
            "Name:" +
              this.nameValidateForm.name +
              ";Password:" +
              this.nameValidateForm.password
          );
          // console.log(this.nameValidateForm.name);
        } else {
          console.log("error submit!!");
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

<style scoped>
.header-bar{
 position: fixed;
 z-index: 999;
}

.el-card {
  background: #fbfbfb;
  width: 300px;
  display: inline-block;
  margin: 0.3em;
  border-radius: 20px;
}
.grid-content {
  /* background: rgb(14, 214, 131); */
  border-radius: 4px;
  min-height: 80px;
}
.text {
  font-size: 14px;
}
.textarea >>> .el-textarea__inner {
  resize: none;
  
  border-radius: 5px;
  height: 150px;
 
  margin-top: 20px;
  padding: 0;
  line-height: 1.5em;
  float:right; font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #000000;
}
.item {
  padding: 18px 0;
}
.header-h2 {
  color: #d1d1d1;
}
.header-h2:hover {
  color: #fff;
}
.row-header {
  background: #409eff;
}
</style>