<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <HeaderBar ></HeaderBar>
      </el-header>
      <el-main> <router-view/>  </el-main>
    </el-container>
     <el-footer>{{msg}}</el-footer>

  </div>
</template>


<script>
import HeaderBar from './components/Header'
export default {
  components: {
    HeaderBar,
  },
  data() {
    return {
      msg : '你好',
    }
  }
}
</script>



<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
