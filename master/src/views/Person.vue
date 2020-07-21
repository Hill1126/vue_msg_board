<template>
  <div class="Person">
       <HeaderBar></HeaderBar>
    <el-container style="margin-top:100px">
       
      <el-main>
        <el-row
          type="flex"
          justify="center"
        >
          <UserInfo></UserInfo>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import HeaderBar from "../components/Header";
import UserInfo from "../components/UserInfo";
export default {
  name: "Person",
  components: {
    HeaderBar,
    UserInfo
  },
  Monuted: () => {
    this.activeIndex = "3";
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>