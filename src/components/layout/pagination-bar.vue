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
    limitePages: Number,
  },
  computed: {
    limit() {
      let myLimit = 5;

      for (let i = myLimit; i >= 1; --i) {
        if (i * this.limitePages > this.total) {
          myLimit = i;
        }
      }

      return myLimit;
    },
    isNext() {
      let stop = false;
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
      this.$emit("onClick", "offset", this.total - this.limitePages);
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
        (this.currentRow + this.switchBar) * this.limitePages -
        this.limitePages;
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
  justify-content: right;
  align-items: center;
  margin: 32px 40px 32px 0px;
}

.pagination-item {
  border: none;
  padding: 10px;
  background-color: #dcdcdc;
  border-radius: 50px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: 0.3s; */
}

.pagination-item-selected {
  border: none;
  padding: 10px;
  background-color: orange;
  border-radius: 50px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.pagination-item:hover {
  background-color: #bbbbbb;
  color: white;
  transform: scale(1.1);
}

.arrow {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  transition: 0.3s;
  color: #343a43;
}

.arrow:hover {
  background-color: grey;
  color: white;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  padding: 10px;
}

.material-symbols-outlined {
  font-size: 18px;
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
