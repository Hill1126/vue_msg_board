<template>
  <div>
    <transition name="el-zoom-in-top">

      <div
        v-if="show2"
        class="comment-block"
      >

        <!-- <div class="transition-box">.el-zoom-in-top</div> -->
        <div class="reply-block"
         v-for="r in reply"
         :key=r
         >
          <img v-bind:src="url">
          <div class="user">

            用户1
          </div>
          回复<div class="user">@用户2</div>:{{r}}
          <div class="reply-info-bar">
            <span>{{Date.now()}}</span>
              <el-link icon="el-icon-edit" >回复</el-link>
            </div>
        </div>
      </div>

    </transition>

  </div>

</template>

<script>
export default {
  data: () => ({
    url:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      reply:['你这条留言好好啊！','zhegebutaixing','这是什么贵'],
  }),
  props: {
    show2: Boolean
  }
};
</script>

<style lang='less' scoped>

.reply-info-bar{
  padding-top: 5px;
  
  vertical-align: middle;
  font-size: 10px;
  .el-link {
    font-size: 10px;
    margin-left: 30px !important;
  }
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
  // margin-top: 20px;
}
.user {
  vertical-align: middle;
  display: inline;
  color: #409eff;
  cursor: pointer;
}
</style>