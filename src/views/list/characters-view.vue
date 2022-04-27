<template>
  <ActionBar
    @onChange="handleChange"
    :params="params"
    :orderOption="orderOption"
  />
  <div v-if="loading" class="main-container loading-item">
    <IconSpinner fill="#151515" height="80px" dur="1.0s" />
  </div>
  <div v-else class="main-container">
    <div class="title-detail-page">
      <div class="line"></div>
      <h2>Find all Marvel's characters</h2>
    </div>
    <div class="listContainer"><ItemList :list="list" mode="characters" /></div>
    <PaginationBar
      :total="total"
      :limitePages="params.limit"
      @onClick="handleChange"
    />
  </div>
</template>

<script>
import { getAll } from "@/utils/marvel-api.js";
import ItemList from "../../components/list/item-list";
import ActionBar from "../../components/layout/action-bar";
import PaginationBar from "../../components/layout/pagination-bar";
import IconSpinner from "../../components/IconSpinner";

export default {
  name: "CharactersView",
  components: {
    ItemList,
    ActionBar,
    PaginationBar,
    IconSpinner,
  },
  data() {
    return {
      list: [],
      total: 0,
      params: {
        limit: 20,
        offset: 0,
        orderBy: "name",
        nameStartsWith: null,
      },
      orderOption: [
        { name: "Name ASC", value: "name" },
        { name: "modified ASC", value: "modified" },
        { name: "Name DESC", value: "-name" },
        { name: "modified DESC", value: "-modified" },
      ],
      loading: true,
    };
  },
  methods: {
    handleChange(key, value) {
      this.params[key === "startWith" ? "nameStartsWith" : key] = value;

      getAll("characters", this.params).then((response) => {
        const { results, total } = response;
        this.total = total;
        this.list = results;
        this.loading = false;
      });
    },
  },
  mounted() {
    this.handleChange();
  },
};
</script>

<style scoped>
.loading-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-container {
  grid-area: content;
}

.title-detail-page {
  display: grid;
  grid-template-areas: "line title";
  grid-template-columns: 120px 1fr;
  grid-template-rows: auto;
  align-items: center;
}

.line {
  grid-area: line;
  height: 3px;
  margin-right: 24px;
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%);
}

h2 {
  grid-area: title;
  text-align: center;
  position: relative;
  max-width: 750px;
  justify-self: start;
  color:#343a43;
}
</style>
