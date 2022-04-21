<template>
  <div>
    <h1>Limit : {{ pages }}</h1>
    <div class="pagination-bar">
      <div
        class="pagination-item"
        v-for="n in limit"
        :key="n"
        @click="onClick(n)"
      >
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationBar",
  data() {
    return {
      limit: 20,
    };
  },
  props: {
    total: Number,
    pages: Number,
  },
  methods: {
    onClick(n) {
      const offset = n === 1 ? 0 : n * this.pages - this.pages;
      console.log(offset);
    },
  },
  watch: {},
};
</script>

<style scoped>
.pagination-bar {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.pagination-item {
  border: 1px solid;
  padding: 10px;
}
</style>
