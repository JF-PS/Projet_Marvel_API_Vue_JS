<template>
  <div class="bar-container">
    <div class="action-bar">
      <div class="item-action">
        <input
          type="text"
          name="search"
          v-model="nameStart"
          placeholder="name start.."
        />
      </div>
      <div class="item-action">
        <select name="result per page" v-model="limit" class="field">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="item-action">
        <select name="order by" v-model="orderBy" class="field">
          <option value="name">Name ASC</option>
          <option value="modified">modified ASC</option>
          <option value="-name">Name DESC</option>
          <option value="-modified">modified DESC</option>
        </select>
      </div>
      <div class="item-action">
        <button v-on:click="onSubmit()" class="button">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionBar",
  data() {
    return {
      nameStart: "",
      limit: 20,
      orderBy: "name",
    };
  },
  methods: {
    onChange() {
      console.log(this.orderBy);
      this.$emit("onChange", this.nameStart, this.limit, this.orderBy);
    },
  },
  watch: {
    nameStart() {
      this.onChange();
    },
    limit() {
      this.onChange();
    },
    orderBy() {
      this.onChange();
    },
  },
};
</script>

<style scoped>
.bar-container {
  background-color: #242020;
  top: 60px;
  position: sticky;
  z-index: 1001;
}
.action-bar {
  margin: auto;
  max-width: 70%;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.item-action {
  width: 100%;
  height: 100%;
  font-family: "International Super Hero", sans-serif;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

.item-action:hover {
  font-family: "International Super Hero", sans-serif;
  color: orange;
  font-size: 30px;
  cursor: pointer;
}
</style>
