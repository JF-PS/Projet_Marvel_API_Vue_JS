<template>
  <div class="footer-bar">Data provided by Marvel. © 2022 MARVEL</div>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style scoped>
.footer-bar {
  grid-area: footer;
  height: 60px;
  width: 100%;
  background-color: #242020;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "International Super Hero", sans-serif;
  color: white;
  font-size: 20px;
}
</style>
