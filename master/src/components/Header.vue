<template>
        <header>
            <div class="logo">
                <img src="../assets/logo.png" alt="Vue">
                <span class="company">EMMA </span>
                <span class="hospital"> XXXXXX社区医院</span>
            </div>
            <div class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#409eff" text-color="#fff" active-text-color="#e6a23c">
                    <el-submenu class="item" index="1">
                        <template slot="title">留言管理</template>
                        <el-menu-item class="subItem" index="1-1">我的留言</el-menu-item>
                        <el-menu-item class="subItem" index="1-2">我的评论</el-menu-item>
                    </el-submenu>
                    <el-menu-item class="item" index="2">个人中心</el-menu-item>
                    <el-submenu index="3"  class="item" >
                        <!-- <el-badge :is-dot="isDot" class="item">
                            <i class="icon el-icon-bell"></i>
                        </el-badge> -->
                        <template slot="title">{{name}}</template>
                        <el-menu-item class="subItem" index="3-1">忘记密码</el-menu-item>
                    </el-submenu>
                    <img v-bind:src="url" v-bind:alt="name">
                </el-menu>
            </div>
        </header>
</template>
<script>

export default {
  name: "Header",
  data() {
    return {
      name:'xujunfeng',
      url:'../assets/logo.png',
      fits: ['cover'],
      activeIndex: "1", 
    };
  }
};
</script>
<style lang="less" scoped>
@blue: #409eff;
header {
  width: 100%;
  min-width: 1200px;
  box-sizing: border-box;
  padding: 0px;
  background-color: @blue;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  .logo {
    color: #fff;
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
    .el-menu-demo {
      width: 400px;
      margin: 0 auto;
    }
    .el-menu--horizontal {
      border-bottom: 0;
    }
    .message {
      line-height: 20px;
      padding-top: 18px;
    }
    .person {
      img {
        width: 30px;
        border-radius: 15px;
      }
    }
    .item {
      width: 100px;
    }
    .subItem{
      width: 100px;
    }
    img {
      margin-top: 6px;
      width: 50px;
      height: 50px;
    }
  }
}
</style>