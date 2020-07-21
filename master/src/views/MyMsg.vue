<template>

  <div>
    <Header></Header>
    <el-container>

      <el-main style=" margin-top: 20px;">
        <el-row
          style="background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col
            :span="12"
            style="margin-top: 30px "
          >
            <label>搜索</label>
            <el-input
              style="width:80%"
              v-model="search"
              placeholder="请输入搜索内容"
            ></el-input>
            <el-button
              icon="el-icon-search"
              circle
            ></el-button>
          </el-col>
        </el-row>

        <!-- 留言展示框 -->
        <el-row
          style="background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="12">
            <!-- 单个留言卡片 -->
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
                <!-- 弹框相关 -->

                <el-button
                  style="float:left"
                  size="mini"
                  plain
                  @click="show2 = !show2"
                >查看评论 共{{headings.length}}条</el-button>
                <!-- 右边工具栏 -->
                <!-- 编辑弹框 -->
                <div id="windows">

                  <el-dialog
                    title="输入修改内容"
                    :visible.sync="open"
                    :before-close="handleClose"
                  >
                    <el-input
                      type="textarea"
                      placeholder="请修改内容"
                      v-model="text"
                      maxlength="512"
                      show-word-limit
                      class="textarea"
                    >
                    </el-input>
                    <div
                      slot="footer"
                      class="dialog-footer"
                    >
                      <el-button
                        type="primary"
                        @click="open = false"
                      >确 定</el-button>
                      <el-button @click="open = false">取 消</el-button>

                    </div>
                  </el-dialog>

                </div>
                <el-popconfirm
                  placement="top"
                  confirmButtonText='好的'
                  cancelButtonText='取消'
                  iconColor="red"
                  title="删除留言将与评论一并删除，确定吗？"
                >
                  <el-button
                    slot="reference"
                    type="text"
                  >删除</el-button>
                </el-popconfirm>
                <el-button
                  style="margin-right:5px"
                  type="text"
                  @click="open=true"
                >编辑</el-button>

              </el-row>
              <!-- 评论展示框 -->
              <!-- <Comment v-bind:show2="show2"></Comment> -->
            </el-card>
          </el-col>
        </el-row>
        <el-row
          style="height:280px;background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-pagination
            page-size:6
            layout="prev, pager, next"
            :total="headings.length"
          >
          </el-pagination>
        </el-row>
      </el-main>

    </el-container>

  </div>

</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Main from "../components/Main";
import EditWindow from "../components/Edit";

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
      open: false,
      text: "",
      search: "",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },
  name: "MyMsg",
  components: {
    Header,
    Main,
    EditWindow
  },
  methods: {
    handleClose(done) {
      this.$confirm("您还没有编辑完成，确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>


<style scoped>
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
}
.textarea >>> .el-textarea__inner {
  resize: none;
  border-radius: 5px;
  height: 150px;
  /* width:80%; */
  line-height: 1.5em;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #000000;
}

.too-bar >>> button {
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