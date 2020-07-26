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

            <el-input
              style="width:80%"
              v-model="search"
              placeholder="请输入搜索内容"
            ></el-input>
            <el-button
              @click="getCommentList()"
              icon="el-icon-search"
              circle
            ></el-button>
            <el-button
              @click="search='';getCommentList()"
             
            >重置</el-button>
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
              v-for="(comment,i) in commentList"
              :key=comment._id
            >
              <el-row>
                <div class="msg-bar">
                  <img
                    class="avatar"
                    v-bind:src="comment.creator.avatar"
                  >
                  <el-link
                    type="primary"
                    :underline="false"
                  >{{comment.creator.name}}</el-link>
                </div>
              </el-row>
              <el-row>
                <span class="context">{{comment.context}}</span>
              </el-row>
              <el-row class="too-bar">
                <!-- 左边工具栏 -->
                <!-- 弹框相关 -->

                <el-button
                  style="float:left"
                  size="mini"
                  plain
                  @click="showComment(i)"
                >查看评论 共{{comment.replies.length}}条</el-button>
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
                        @click="updateComment()"
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
                  @onConfirm="deleteComment(i)"
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
                  @click="handleOpenEdit(i)"
                >编辑</el-button>

              </el-row>
              <!-- 评论展示框 -->
              <Comment
                :replyList="comment.replies"
                :show2="openState[comment._id]"
                :commentId="comment._id"
              ></Comment>
            </el-card>
          </el-col>
        </el-row>
        <el-row
          style="height:280px;background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="count"
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
import Comment from "../components/Comment";
import api from "../axios/api";
import { Message } from "element-ui";

export default {
  data() {
    return {
      commentList: [],
      show2: true,
      open: false,
      // 当前操作的留言索引
      activeIndex: 0,
      text: "",
      pageSize: 6,
      pageNum: 1,
      count: 0,
      openState: {},
      search: "",
    };
  },
  name: "MyMsg",
  components: {
    Header,
    Main,
    EditWindow,
    Comment,
  },
  methods: {
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getCommentList();
    },
    handleClose(done) {
      this.$confirm("您还没有编辑完成，确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    getCommentList() {
      const params = {
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          
      };
      if (this.search) {
        params.search = this.search;
      }
      this.axios({
        method: "get",
        url: "/api/comment/myComment",
        params,
      })
        .then((res) => {
          const data = res.data;
          this.commentList = data.data.list;
          this.count = data.data.count;
        })
        .catch((err) => {
          Message({
            message: "获取留言失败",
            type: "error",
          });
        });
    },
    showComment(index) {
      this.currentIndex = index;
      const comment = this.commentList[index];
      const value = this.openState[comment._id];
      this.$set(this.openState, comment._id, !value);
    },
    handleOpenEdit(index) {
      this.activeIndex = index;
      (this.open = true), (this.text = this.commentList[index].context);
    },
    updateComment() {
      const commentId = this.commentList[this.activeIndex]._id;
      api
        .updateComment({
          commentId,
          context: this.text,
        })
        .then((res) => {
          Message.success("更新留言成功");
          this.open = false;
          this.getCommentList();
        });
    },
    deleteComment(i) {
      this.activeIndex = i;
      const commentId = this.commentList[this.activeIndex]._id;
      api
        .deleteComment({
          commentId,
        })
        .then((res) => {
          Message.success("删除留言成功");
          this.getCommentList();
        });
    },
  },
  created() {
    // this.openState = Array(10).fill(false);
    this.getCommentList();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "getCommentList",
  },
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