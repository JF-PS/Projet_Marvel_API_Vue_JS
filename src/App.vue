<template>
  <div id="AppBox">
    <AppBar />
    <router-view></router-view>
    <FooterBar />
  </div>
</template>

<script>
import AppBar from "./components/layout/app-bar";
import FooterBar from "./components/layout/footer-bar";
export default {
  name: "App",
  components: {
    AppBar,
    FooterBar,
  },
};
</script>

<style>
#app {
  border: 5px solid orange;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100%;
}

#AppBox {
  background-image: url("./assets/projet-background.png");
}
</style>
