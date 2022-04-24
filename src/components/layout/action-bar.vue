<template>
  <div class="bar-container">
    <div class="action-bar">
      <div class="item-action">
        <input
          type="text"
          name="search"
          v-model="nameWith"
          placeholder="Search by name"
          class="search-bar"
        />
      </div>
      <div class="item-action">
        <select name="limit" v-model="limit" class="field limit-field">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="item-action">
        <select name="order by" v-model="orderBy" class="field orderBy-field">
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
  grid-area: ActionBar;
  top: 60px;
  position: sticky;
  z-index: 1001;
  background-color: #FBFCFA;
}
.action-bar {
  margin: 16px 0px 16px 56px;
  height: 80px;
  display: flex;
  flex-direction: row;
}

.search-bar {
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 40px;
  width: 250px;
  margin: auto;
  position: relative;
  padding: 0px 16px;
  color: #8F8F8F;
  background-clip: padding-box;
  border-radius: 50px;
  border-color: orange;
}

.item-action {
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  margin-right: 40px;
}

.field {
  height: 40px;
  border-radius: 8px;
  box-shadow: -4px 4px 30px rgba(112, 112, 112, 0.3);
  padding: 0px 16px;
  border: none;
}

.limit-field {
  width: 120px;
}

.orderBy-field {
  width: 250px;
}

</style>
