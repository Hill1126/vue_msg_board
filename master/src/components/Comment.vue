<template>
  <div>
    <transition name="el-zoom-in-top">

      <div
        v-if="show2"
        class="comment-block"
      >

        <!-- <div class="transition-box">.el-zoom-in-top</div> -->
        <div
          class="reply-block"
          v-for="(reply,i) in replyList"
          :key="reply._id"
        >
          <div style="word-wrap:break-word;">
            <img v-bind:src="reply.createUser.avatar">
            <div class="user">

              {{reply.createUser.name}}
            </div>
            回复<div class="user">@{{reply.toUser.name}}</div>:
            {{reply.context}}
            <div class="reply-info-bar">
              <span>{{reply.createTime}}</span>
              <el-link
                icon="el-icon-edit"
                @click="handleReply(i)"
              >回复</el-link>
               <el-link
                v-if="reply.editAuth"
                icon="el-icon-delete"
                @click="deleteReply(i)"
              >删除</el-link>
            </div>
          </div>
        </div>
      </div>

    </transition>
    <el-dialog
      class="textarea"
      title="请输入回复内容"
      :visible.sync="openEditWindow"
      :before-close="handleClose"
    >
      <el-input
        type="textarea"
        placeholder="请输入回复内容"
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
        <el-button @click="openEditWindow = false;editText=''">取 消</el-button>

      </div>
    </el-dialog>
  </div>

</template>
<script>

</script>
<script>
import { Loading, Message } from "element-ui";
import api from "../axios/api";

export default {
  data: () => ({
  
    show: false,
    currentIndex: 0,
    openEditWindow: false,
    editText: ""
  }),
  props: {
    show2: Boolean,
    replyList: {
      default: []
    },
    commentId:String,

  },
  watch: {
    show2: {
      deep: true,
      handler(nv, ov) {
        this.params.show = nv.show2;
        this.init();
      }
    }
  },
  methods: {
    handleReply(index) {
      this.currentIndex = index;
      this.openEditWindow = true;
    },    
    createReply(){
      const reply = this.replyList[this.currentIndex];
      api.createReply(this.commentId,reply.createUser._id,this.editText).then(res => {
        this.editText = "";
        Message.success('新增评论成功');
        this.getCommentById(this.commentId);
      }).finally(()=>{
        this.openEditWindow =false;
      });
    },
     handleClose(done) {
      this.$confirm("您还没有回复完成，确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getCommentById(commentId){
        this.axios({
          method:'get',
          url:`/api/comment/${commentId}`
        }).then(res=>{
          this.replyList = res.data.data.replies;
        });
    },
    deleteReply(i){
      console.log(this.commentId);
      const reply = this.replyList[this.currentIndex];
      api.deleteReply({
        commentId:this.commentId,
        replyId:reply._id,
      }).then(res => {
         
          Message.success('删除回复成功')
           this.getCommentById(this.commentId);
        })
    }
  }
};
</script>

<style scoped>
.reply-info-bar {
  padding-top: 5px;

  vertical-align: middle;
  font-size: 10px;
}
.reply-info-bar >>> .el-link {
  font-size: 10px;
  margin-left: 30px !important;
}

.comment-block {
  border-radius: 2px;
  width: 100%;
  background-color: #fbfbfb;
  margin-left: 15px;
  max-height: 500px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #fbfbfb;
  text-align: center;
  color: black;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}

.reply-block {
  height: 100%;
  text-align: left; /*设置文本水平居中*/
  line-height: 100%; /*设置line-height与父级元素的height相等*/
  padding-bottom: 5px;
}

img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
   margin-top: 20px;
}
.user {
  vertical-align: middle;
  display: inline;
  color: #409eff;
  cursor: pointer;
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
</style>