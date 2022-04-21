<template>
  <div>
    <div class="pagination-bar">
      <div class="arrow" v-if="switchBar > 0" @click="onClickUltimeBack">
        <span class="material-symbols-outlined">
          <span id="arrowMaxBack" class="material-symbols-outlined">
            double_arrow
          </span>
        </span>
      </div>
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
      <div class="arrow" v-if="isNext === false">
        <span class="material-symbols-outlined" @click="onClickNext">
          arrow_forward_ios
        </span>
      </div>
      <div class="arrow" v-if="isNext === false">
        <span class="material-symbols-outlined">
          <span class="material-symbols-outlined" @click="onClickUltimeNext">
            double_arrow
          </span>
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
      switchBar: 0,
      currentRow: 1,
    };
  },
  props: {
    total: Number,
    pages: Number,
  },
  computed: {
    limit() {
      let myLimit = 5;

      for (let i = myLimit; i >= 1; --i) {
        if (i * this.pages > this.total) {
          myLimit = i;
        }
      }

      return myLimit;
    },
    isNext() {
      let stop = false;
      console.log(this.limit);
      if (this.limit < 5) stop = true;
      return stop;
    },
  },
  methods: {
    onClick(n) {
      this.currentRow = n;
      this.onOffsetChange();
    },
    onClickNext() {
      if (this.switchBar + 1 <= this.total) {
        this.switchBar++;
        this.onOffsetChange();
      }
    },
    onClickUltimeNext() {
      this.currentRow = 5;
      this.switchBar = parseInt(this.total / 20) - this.limit;
      this.$emit("onClick", "offset", this.total - this.pages);
    },
    onClickUltimeBack() {
      this.currentRow = 1;
      this.switchBar = 0;
      this.$emit("onClick", "offset", 0);
    },
    onClickBack() {
      if (this.switchBar - 1 >= 0) {
        this.switchBar--;
        this.onOffsetChange();
      }
    },
    onOffsetChange() {
      const offset =
        (this.currentRow + this.switchBar) * this.pages - this.pages;
      this.$emit("onClick", "offset", offset);
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
#arrowMaxBack {
  transform: translateX(180px) rotate(360deg);
}
**/

/**
#back {
  border: 1px solid black;
}
**/
</style>
