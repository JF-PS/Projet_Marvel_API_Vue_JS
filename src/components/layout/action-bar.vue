<template>
  <div class="bar-container">
    <div class="action-bar">
      <div class="item-action">
        <input
          type="text"
          name="search"
          v-model="startWith"
          placeholder="name start.."
        />
      </div>
      <div class="item-action">
        <select name="limit" v-model="limit" class="field">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="item-action">
        <select name="order by" v-model="orderBy" class="field">
          <option
            v-for="(option, index) in orderOption"
            :key="index"
            :value="option.value"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
export default {
  name: "ActionBar",
  props: {
    params: Object,
    orderOption: Array,
  },
  data() {
    return {
      startWith: String,
      limit: Number,
      orderBy: String,
    };
  },
  methods: {
    onChange(key, value) {
      this.$emit("onChange", key, value);
    },
    debouceFilterNameStart: debounce((onChange, startWith) => {
      onChange("startWith", startWith);
    }, 500),
  },
  watch: {
    startWith() {
      this.debouceFilterNameStart(this.onChange, this.startWith);
    },
    limit() {
      this.onChange("limit", +this.limit);
    },
    orderBy() {
      this.onChange("orderBy", this.orderBy);
    },
  },
  mounted() {
    const { startWithWith, limit, orderBy } = this.params;
    this.startWith = startWithWith;
    this.limit = limit;
    this.orderBy = orderBy;
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
