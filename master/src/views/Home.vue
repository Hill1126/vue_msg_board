<template>
  <div class="home">
   
    <HeaderBar></HeaderBar>
    <Main></Main>
  </div>
</template>

<script>
import HeaderBar from '../components/Header'
import Main from "../components/Main";
export default {
  name: "Home",
  components: {
    Main,
    HeaderBar
  }
};
</script>
