<template>
  <header class="header-bar">
    <div class="logo">
      <img
        src="../assets/logo.png"
        alt="Vue"
      >
      <span
        @click="pushTO('/')"
        class="company"
      >留言板 </span>
      <span
        @click="pushTO('/')"
        class="hospital"
      > MSG_Board</span>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#409eff"
        text-color="#fff"
        active-text-color="#e6a23c"
      >
        <el-menu-item
          class="item"
          @click="pushTO('/')"
          index="1"
        >首页</el-menu-item>
        <el-submenu
          class="item"
          index="2"
        >

          <template
            slot="title"
            class="item"
          >留言管理</template>
          <el-menu-item
            class="subItem"
            @click="pushTO('/myMsg')"
            index="2-1"
          >我的留言</el-menu-item>
          <el-menu-item
            class="subItem"
            @click="pushTO('/myReply')"
            index="2-2"
          >我的评论</el-menu-item>
        </el-submenu>
        <el-menu-item
          class="item"
          index="3"
          @click="pushTO('/person')"
        >个人中心</el-menu-item>
        <el-submenu
          index="4"
          class="item"
        >
          <template
            slot="title"
            class="item"
          >{{name}}</template>
          <el-menu-item
            class="subItem"
            index="4-1"
          >忘记密码</el-menu-item>
        </el-submenu>
        <img
          v-bind:src="url"
          v-bind:alt="name"
        >
      </el-menu>

    </div>
  </header>

</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      name: "xujunfeng",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      fits: ["cover"],
      activeIndex: "1"
    };
  },
  methods: {
    pushTO(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="less" scoped>
@blue: #000000;
header {
  //margin-left: 3%;
  width: 99%;
  min-width: 1200px;
  top: 0px;
  box-sizing: border-box;
  padding: 0px;
  background-color: #409EFF;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 999;

  .logo {
    color:  #409EFF;
    height: 60px;
    img {
      width: 50px;
      height: 43px;
      margin-top: 10px;
      margin-right: 20px;
    }
    .company {
      vertical-align: 20%;
      font-size: 24px;
      font-weight: 400;
    }
    .hospital {
      vertical-align: 35%;
    }
  }
  .nav {
    float: right;
    .el-menu-demo {
      width: 500px;
      margin: 0 auto;
    }
    .el-menu--horizontal {
      border-bottom: 0;
      height: 60px;
    }
    .person {
      img {
        width: 30px;
        border-radius: 15px;
      }
    }
    .item {
     
      width: 100px;
      float: center;
      border-bottom: 0px solid transparent;
    }
    .subItem {
      width: 100px;
    }
    img {
      border-radius: 25px;
      margin-right: 35px;
      margin-top: 6px;
      width: 50px;
      height: 50px;
    }
  }
}
</style>