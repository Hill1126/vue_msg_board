<template>
  <div>
    <el-container>
      <transition name="el-zoom-in-top">

        <div
          v-if="show2"
          class="comment-block"
        >

          <div class="transition-box">.el-zoom-in-top</div>
        <span>.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.
            zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top
            .el-zoom-in-top
            .el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top
            .el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top
            .el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top
            .el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top
            .el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top.el-zoom-in-top</span>
        </div>

      </transition>
    </el-container>
  </div>

</template>

<script>
export default {
  data: () => ({}),
  props: {
    show2: Boolean
  }
};
</script>

<style lang='less' scoped>
.comment-block {
  border-radius: 2px;
  display: flex;
  margin-top: 10px;
  width: 100%;
  background-color: red;
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
</style>