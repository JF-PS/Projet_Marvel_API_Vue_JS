<template>
  <ActionBar @onChange="filterCharacters" />
  <PaginationBar :total="total" :pages="limitRow" />
  <CharacterList :list="list" />
</template>

<script>
import { getAll } from "@/utils/marvel-api.js";
import CharacterList from "../components/character/characters-list";
import ActionBar from "../components/layout/action-bar";
import PaginationBar from "../components/layout/pagination-bar";

export default {
  name: "HomeView",
  components: {
    CharacterList,
    ActionBar,
    PaginationBar,
  },
  data() {
    return {
      list: [],
      total: 0,
      limitRow: "20",
    };
  },
  methods: {
    filterCharacters(nameStart, limit = 20, orderBy, offset = 0) {
      const params = {
        limit,
        nameStartsWith: nameStart,
        orderBy,
        offset,
      };

      this.limitRow = limit;
      console.log(this.limitRow);

      getAll("characters", params).then((response) => {
        const { results, total } = response;
        this.total = total;
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
