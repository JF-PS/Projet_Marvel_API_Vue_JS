<template>
  <ActionBar @onChange="filterCharacters" />
  <CharacterList :list="list" />
</template>

<script>
import { getAll } from "@/utils/marvel-api.js";
import CharacterList from "../components/character/characters-list";
import ActionBar from "../components/layout/action-bar";

export default {
  name: "HomeView",
  components: {
    CharacterList,
    ActionBar,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    filterCharacters(nameStart, limit, orderBy) {
      const params = {
        limit,
        nameStartsWith: nameStart,
        orderBy,
      };

      getAll("characters", params).then((response) => {
        const { results } = response;
        this.list = results;
      });
    },
  },
  mounted() {
    this.filterCharacters();
  },
};
</script>

<style scoped></style>
