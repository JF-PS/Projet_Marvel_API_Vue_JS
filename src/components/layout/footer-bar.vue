<template>
  <div class="footer-bar">
    <p>Data provided by Marvel. © 2022 MARVEL</p>
  </div>
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
  justify-content: right;
  align-items: center;
}

p {
  font-family: "International Super Hero", sans-serif;
  color: white;
  font-size: 16px;
  padding-right: 32px;
}
</style>
