<template>
  <div id="Main">
    <el-container>

      <el-main style=" margin-top: 20px;">
        <el-row
          style="height:280px;background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="12">
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
        <!-- 留言展示框 -->
        <el-row
          v-loading="loading"
          style="min-height:400px;background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="12">
            <!-- 单个留言卡片 -->
            <el-card
              shadow="never"
              v-for="(item,i) in commentList"
              :key="item._id"
            >
              <el-row>
                <div class="msg-bar">
                  <img
                    class="avatar"
                    v-bind:src="item.creator.avatar"
                  >
                  <el-link
                    type="primary"
                    :underline="false"
                  >{{item.creator.name}}</el-link>
                </div>
              </el-row>
              <el-row>
                <span class="context">{{item.context}}</span>
              </el-row>
              <el-row class="too-bar">
                <!-- 左边工具栏 -->

                <el-button
                  style="float:left"
                  size="mini"
                  plain
                  @click="getReplyList(i)"
                >查看评论 共{{item.replies.length}}条</el-button>
                <el-button
                  size="mini"
                  style="float:left"
                  @click="handleReply(i)"
                >回复</el-button>
                <!-- 右边工具栏 -->
                <el-popover
                  placement="right"
                  min-width="50"
                  width="50"
                  v-if="item.creator.editAuth"
                >
                  <el-popconfirm
                    placement="top"
                    confirmButtonText='好的'
                    cancelButtonText='取消'
                    icon="el-icon-info"
                    iconColor="red"
                    @onConfirm="deleteComment(i)"
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
              <!-- 评论展示框 -->
              <Comment
                :replyList="item.replies"
                :show2="openState[i]"
                :commentId="item._id"
              ></Comment>
            </el-card>
          </el-col>
        </el-row>
        <el-row
          style="height:50px;background:#eeeeee;"
          type="flex"
          justify="center"
        >
          <el-pagination
            page-size:6
            layout="prev, pager, next"
            :total="count"
          >
          </el-pagination>
        </el-row>
        <!-- <el-row
          style="background:#eeeeee"
          type="flex"
          justify="center"
        >
          <el-col :span="15">
            <el-divider></el-divider>
            <p>© 2020 Company, Inc.</p>
          </el-col>
        </el-row> -->
      </el-main>

    </el-container>
     <el-dialog
      class="textarea"
      title="输入修改内容"
      :visible.sync="openEditWindow"
      :before-close="handleClose"
    >
      <el-input
        type="textarea"
        placeholder="请修改内容"
        maxlength="512"
        show-word-limit
        v-model="editText"
      >

      </el-input>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="createReply()"
        >确 定</el-button>
        <el-button @click="openEditWindow = false">取 消</el-button>

      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Loading, Message } from "element-ui";
import Comment from "../components/Comment";

export default {
  components: {
    Comment
  },
  data() {
    return {
      openEditWindow:false,
      commentList: [],
      openState: {},
      loading: false,
      show2: false,
      currentIndex:0,
      textarea: "",
      count: 0,
      editText:'',
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },

  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    postComment() {
      // 校验参数
      if (this.textarea.trim() === "") {
        Message.error("留言信息不能为空");
        return;
      }
      this.axios({
        method: "post",
        url: "/api/comment",
        data: {
          context: this.textarea
        }
      }).then(res => {
        this.textarea = "";
        this.getCommentList();
      });
    },
    getCommentList() {
      this.loading = true;
      this.axios({
        method: "get",
        url: "/api/comment"
      }).then(res => {
        this.loading = false;
        const data = res.data;
        this.commentList = data.data.list;
        this.count = data.data.count;
      }).catch(err =>{
         Message({
                message:'获取留言失败',
                type: 'error',
            });
            this.loading = false;
      });
    },
    getReplyList(index) {
      this.currentIndex = index;
      const value = this.openState[index];
      this.$set(this.openState, index, !value);
    },
    handleReply(index) {
      this.currentIndex = index;
      this.openEditWindow = true;
    },
    handleClose(done) {
      this.$confirm("您还没有回复完成，确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    createReply(){
      const comment = this.commentList[this.currentIndex];
      this.axios({
        method: "post",
        url: `/api/reply/${comment._id}`,
        data: {
          context: this.editText,
          toUser:this.commentList[this.currentIndex].creator._id,
        }
      }).then(res => {
        this.editText = "";
        Message.success('新增评论成功');
        this.getCommentList();
      }).finally(()=>{
        this.openEditWindow =false;
      });
    },
    deleteComment(i){
      const comment = this.commentList[i];
       this.axios({
        method: "delete",
        url: `/api/comment/${comment._id}`,
      }).then(res => {
        Message.success('删除评论成功');
        this.getCommentList();
      });
    }
  },

  created() {
    this.openState = Array(10).fill(false);
    this.getCommentList();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "getCommentList"
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