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
  box-sizing: border-box;
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
