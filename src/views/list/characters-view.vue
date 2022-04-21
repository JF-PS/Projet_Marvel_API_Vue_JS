<template>
  <ActionBar @onChange="handleChange" :params="params" />
  <CharacterList :list="list" />
  <PaginationBar :total="total" :pages="params.limit" @onClick="handleChange" />
</template>

<script>
import { getAll } from "@/utils/marvel-api.js";
import CharacterList from "../../components/character/characters-list";
import ActionBar from "../../components/layout/action-bar";
import PaginationBar from "../../components/layout/pagination-bar";

export default {
  name: "CharactersView",
  components: {
    CharacterList,
    ActionBar,
    PaginationBar,
  },
  data() {
    return {
      list: [],
      total: 0,
      params: {
        limit: 20,
        nameStartsWith: null,
        orderBy: "name",
        offset: 0,
      },
    };
  },
  methods: {
    handleChange(key, value) {
      this.params[key] = value;

      getAll("characters", this.params).then((response) => {
        const { results, total } = response;
        this.total = total;
        this.list = results;
      });
    },
  },
  mounted() {
    this.handleChange();
  },
};
</script>

<style scoped></style>
