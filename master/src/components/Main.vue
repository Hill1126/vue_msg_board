<template>
  <div id="Main">
    <el-container>
      <el-header class="header-bar">
        <HeaderBar></HeaderBar>
      </el-header>
      <el-main style=" margin-top: 20px;">
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
            <el-button
              type="primary"
              round
              style=" float:right;margin-top: 5px;"
              @click="postComment()"
            >提交留言</el-button>
          </el-col>
        </el-row>
        <el-row
          style="background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="18">
            <el-card
              shadow="never"
              v-for="heading in headings"
              :key=heading
            >
              <el-row>
                <div class="msg-bar">
                  <img
                    class="avatar"
                    v-bind:src="url"
                  >
                  <span>{{heading}}</span>
                </div>
              </el-row>
              <el-row>
                <span>{{msg[0]}}</span>
              </el-row>
              <el-row class="too-bar">
                <el-button-group >
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="small"
                  ></el-button>
                  <el-button
                    type="danger"
                    icon="el-icon-delete"
                    size="small"
                  ></el-button>
                </el-button-group>
              </el-row>
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
      msg: [
        "longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong",
        "shortshort"
      ],
      textarea: "",
      welcome: "Vue.js,Element-UI",
      pj_name: "Project Name",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },
  components: {
    HeaderBar
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    postComment(){
      alert(this.textarea);
    }
  }
};
</script>

<style scoped>
.header-bar {
  position: fixed;
  z-index: 999;
}

.el-card {
  background: #fbfbfb;
  width: 900px;
  display: inline-block;
  margin: 0.3em;
  border-radius: 20px;
}
.grid-content {
  background: rgb(14, 214, 131);
  border-radius: 4px;
  min-height: 80px;
}
.text {
  font-size: 14px;
}
.msg-bar {
  padding: 10px;
}
.msg-bar >>> span {
  float: left;
  margin-top: 5px;
}
span {
  word-break: normal;
  width: auto;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  text-align: left;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  float: left;
}
.textarea >>> .el-textarea__inner {
  resize: none;

  border-radius: 5px;
  height: 150px;

  margin-top: 20px;
  padding: 0;
  line-height: 1.5em;
  float: right;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #000000;
}
.too-bar >>> .el-button-group{
  float:right;  
  margin-bottom: 5px;
}
.too-bar >>> .el-button-group{
  float:right;  
  margin-bottom: 5px;
}
.el-button {
  float: "right";
  margin-block: 5px;
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