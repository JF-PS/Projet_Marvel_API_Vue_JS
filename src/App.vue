<template>
  <div id="AppBox">
    <AppBar />
    <router-view class="content"></router-view>
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
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #FBFCFA;
}

#AppBox {
  display: grid;
  grid-template-areas: "AppBar"
                      "Menu"
                      "ActionBar"
                      "content"
                      "footer";
  grid-template-rows: auto auto auto 1fr 60px;
  /* height: 100vh; */
}

.content {
  grid-area: content;
}
</style>
