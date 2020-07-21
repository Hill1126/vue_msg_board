 <template>
  <div class="block">
    <el-container>
      <el-row style="padding:20px;width:600px">
        <lable class="lable-style">昵称:</lable><span style="margin-left:20px">xujunfengsd</span>

      </el-row>

    </el-container>
  </div>

</template>

<script>
export default {
  name: "UserInfo",
  props: {
    size: Number
  }
};
</script>

<style lang="less" scoped>
.lable-style{
  float: left;
  font-family: "Helvetica Neue";
  font-size:20px;
}
</style>