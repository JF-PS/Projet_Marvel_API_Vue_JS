<template>
  <div class="character-list">
    <CharacterCard v-for="item in list" :key="item.id" :character="item" />
  </div>
</template>

<script>
import CharacterCard from "./character-card";
export default {
  name: "CharactersList",
  components: {
    CharacterCard,
  },
  props: {
    list: Array,
  },
};
</script>

<style scoped>
.character-list {
  max-width: 70%;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  overflow-y: scroll;
}

.character-list::-webkit-scrollbar {
  display: none;
}
</style>
