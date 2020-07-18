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
              v-for="(heading,i) in headings"
              :key=heading
            >
              <el-row>
                <div class="msg-bar">
                  <img
                    class="avatar"
                    v-bind:src="url"
                  >
                  <el-link
                    type="primary"
                    :underline="false"
                  >{{heading}}</el-link>
                </div>
              </el-row>
              <el-row>
                <span class="context">{{msg[i]}}</span>
              </el-row>
              <el-row class="too-bar">
                <!-- 左边工具栏 -->

                <el-button
                  size="mini"
                  plain
                  @click="show2 = !show2"
                >查看评论 共{{headings.length}}条</el-button>
                <!-- 右边工具栏 -->
                <el-popover
                  placement="right"
                  min-width="50"
                  width="50"
                >
                  <el-popconfirm
                    placement="top"
                    confirmButtonText='好的'
                    cancelButtonText='取消'
                    icon="el-icon-info"
                    iconColor="red"
                    title="删除留言将与评论一并删除，确定吗？"
                  >
                    <el-button
                      style="border: none;"
                      slot="reference"
                      size="mini"
                      plain
                    >删除</el-button>
                  </el-popconfirm>
                  <el-button
                    size="mini"
                    slot="reference"
                    icon="el-icon-more"
                  ></el-button>
                </el-popover>
              </el-row>
              <Comment v-bind:show2="show2"></Comment>
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
import Comment from "./Comment";
export default {
  data() {
    return {
      headings: [
        "HILL",
        "xujunfeng",
        "的说法是",
        "hlll",
        "5Heading",
        "6Heading"
      ],
      msg: [
        "longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong",
        "shortshort"
      ],
      show2: true,
      textarea: "",
      welcome: "Vue.js,Element-UI",
      pj_name: "Project Name",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },
  components: {
    HeaderBar,
    Comment
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    postComment() {
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

.el-link.el-link--primary {
  padding-top: 10px;
  margin-left: 10px;
  float: left !important;
}
.context {
  word-break: normal;
  width: auto;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  text-align: left;
  padding-top: 10px;
  padding-left: 15px;
  padding-bottom: 15px;
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
.too-bar >>> button {
  background: #fbfbfb;
  border: none;
  float: right;
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