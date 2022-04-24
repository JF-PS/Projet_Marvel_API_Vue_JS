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
  /*box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  overflow-y: scroll;*/

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  row-gap: 40px;
  margin: 60px auto 0;
  max-width: 100%;
  padding: 24px;
}

.character-list::-webkit-scrollbar {
  display: none;
}
</style>
