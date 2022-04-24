<template>
  <div class="app-bar"></div>
  <div class="nav-bar">
    <div class="item-bar" @click="onClick('home')">Home</div>
    <div class="item-bar" @click="onClick('characters')">Character</div>
    <div class="item-bar" @click="onClick('comics')">Comic</div>
    <div class="item-bar" @click="onClick('about')">About</div>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    onClick(service) {
      this.$router.push(`/${service}`);
    },
  },
};
</script>

<style scoped>
.app-bar {
  height: 200px;
  border: 1px solid;
  background-image: url("../../assets/nav-bar-background.png");
}
.nav-bar {
  z-index: 1000;
  top: 0;
  position: sticky;
  height: 60px;
  width: 100%;
  background-color: #343a43;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.item-bar {
  width: 100%;
  height: 100%;
  font-family: "International Super Hero", sans-serif;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

.item-bar:hover {
  font-family: "International Super Hero", sans-serif;
  color: orange;
  font-size: 30px;
  cursor: pointer;
}
</style>
