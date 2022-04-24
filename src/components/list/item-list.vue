<template>
  <div class="character-list">
    <ItemCard
      v-for="item in list"
      :key="item.id"
      :character="item"
      :mode="mode"
    />
  </div>
</template>

<script>
import ItemCard from "./item-card";
export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
  props: {
    list: Array,
    mode: String,
  },
};
</script>

<style scoped>
.character-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 50px;
  row-gap: 40px;
  margin: 60px auto 0;
  max-width: 100%;
  padding: 32px;
}

.character-list::-webkit-scrollbar {
  display: none;
}
</style>
