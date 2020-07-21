<template>
  <el-container>
    <el-main>
      <Main></Main>
    </el-main>
  </el-container>
</template>

<script>

import Main from '../components/Main'
export default {
  components: {
    Main,
  },
  data() {
    return {
      msg : '你好',
    }
  }
}
</script>
