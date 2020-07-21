 <template>
  <div class="block">
    <el-container>
      <el-row style="padding:20px;width:600px">
        <div style="margin-bottom:20px ;">
          <el-avatar
            shape="square"
            :size="100"
            fit="scale-down"
            :src="url"
          ></el-avatar>
        </div>
        <div>
          <lable class="lable-style">账号:</lable><span class="span-style">1015599722</span>
        </div>
        <div>
          <lable class="lable-style">昵称:</lable><span class="span-style">xujunfengsd</span>
        </div>
        <div>
          <lable class="lable-style">邮箱:</lable><span class="span-style">xujunfengsd@qq.com</span>
        </div>
        <div>
          <lable class="lable-style">简介:</lable><span >这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介
            
            这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介
            这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介
            这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介这是一段很长的简介</span>
        </div>

      </el-row>

    </el-container>
  </div>

</template>

<script>
export default {
  name: "UserInfo",
  props: {
    size: Number
  },
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  }
};
</script>

<style lang="less" scoped>
.lable-style {
  float: left;
  font-family: "Helvetica Neue";
  font-size: 24px;
}
.span-style {
  font-family: "PingFang SC";
  margin-left: 20px;
  font-size: 24px;
}
</style>