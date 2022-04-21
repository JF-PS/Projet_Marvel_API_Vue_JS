<template>
  <div>
    <div class="pagination-bar">
      <div class="arrow" v-if="switchBar > 0">
        <span id="back" class="material-symbols-outlined" @click="onClickBack">
          arrow_back_ios
        </span>
      </div>
      <div
        :class="
          currentRow == n ? 'pagination-item-selected' : 'pagination-item'
        "
        v-for="n in limit"
        :key="n"
        @click="onClick(n)"
      >
        {{ n + switchBar }}
      </div>
      <div class="arrow">
        <span class="material-symbols-outlined" @click="onClickNext">
          arrow_forward_ios
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationBar",
  data() {
    return {
      limit: 5,
      switchBar: 0,
      currentRow: 1,
    };
  },
  props: {
    total: Number,
    pages: Number,
  },
  methods: {
    onClick(n) {
      this.currentRow = n;
      const offset = n === 1 ? 0 : n * this.pages - this.pages;
      this.$emit("onClick", "offset", offset + this.switchBar * this.pages);
    },
    onClickNext() {
      this.currentRow = 1;
      if (this.switchBar + this.limit <= this.total)
        this.switchBar += this.limit;
    },
    onClickBack() {
      this.currentRow = 1;
      if (this.switchBar - this.limit >= 0) this.switchBar -= this.limit;
    },
  },
  watch: {},
};
</script>

<style scoped>
.pagination-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.pagination-item {
  border: none;
  padding: 10px;
  background-color: white;
  border-radius: 50px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: 0.3s;
}

.pagination-item-selected {
  border: 1px solid black;
  padding: 10px;
  background-color: orange;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.pagination-item:hover {
  background-color: orange;
  color: white;
  transform: scale(1.2);
}

.arrow {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a9a9a9;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border-radius: 10px;
  transition: 0.3s;
  color: white;
}

.arrow:hover {
  background-color: #dcdcdc;
  color: black;
}

/**
#back {
  border: 1px solid black;
}
**/
</style>
