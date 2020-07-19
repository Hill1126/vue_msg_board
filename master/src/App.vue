<template>
  <div id="app">
    <el-container>
      <el-main>
         <Main></Main> 
      </el-main>
    </el-container>
   

  </div>
</template>


<script>
import HeaderBar from './components/Header'
import Main from './components/Main'
export default {
  components: {
    HeaderBar,
    Main,
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
  // color: #2c3e50;
}
.body{
  background:#eeeeee;
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
<style >

.el-popover{

  min-width: 80px !important;
}


</style>