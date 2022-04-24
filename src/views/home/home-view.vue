<template>
  <div v-if="loading" class="main-container loading-item">
    <IconSpinner fill="#151515" height="80px" dur="1.0s" />
  </div>
  <div v-else class="main-container">
    <div class="fakeNews"></div>
    <div class="fakeNews1"></div>
  </div>
</template>

<script>
import IconSpinner from "../../components/IconSpinner";

export default {
  name: "HomeView",
  components: {
    IconSpinner,
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

.fakeNews {
  clip-path: polygon(0 0, 100% 0, 100% 74%, 0 100%);
  background-image:linear-gradient(rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("../../assets/home-movie.jpg") ;
  background-repeat:no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vh;
  cursor: pointer;
}

.fakeNews1 {
  clip-path: polygon(0 26%, 100% 0, 100% 100%, 0 100%);
  background-image: linear-gradient(rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("../../assets/home-comic.jpg");
  background-repeat:no-repeat;
  background-size: cover;
  cursor: pointer;
  width: 100%;
  height: 60vh;
  /* transform: rotate(180deg); */
}
</style>
