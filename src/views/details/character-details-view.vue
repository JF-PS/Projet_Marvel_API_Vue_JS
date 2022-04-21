<template>
  <div>{{ JSON.stringify(character) }}</div>
</template>

<script>
import { getById } from "@/utils/marvel-api.js";
// import CharacterList from "../components/character/characters-list";

export default {
  name: "CharacterDetailsView",
  props: ["id"],
  //   components: {
  //     CharacterList,
  //   },
  data() {
    return {
      character: null,
    };
  },
  mounted() {
    getById("characters", this.id).then((response) => {
      const { results } = response;
      console.log(results);
      this.character = results;
    });
  },
};
</script>

<style scoped></style>
