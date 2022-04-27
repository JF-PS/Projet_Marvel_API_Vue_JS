<template>
  <div v-if="loading" class="main-container loading-item">
    <IconSpinner fill="#151515" height="80px" dur="1.0s" />
  </div>
  <div v-else class="main-container">
    <div class="characters-part">
      <div class="info-characters">
        <h2>Characters</h2>
        <p>
          Find the list of all the characters of the Marvel universe. For more
          informations don't hesitate to click on the card of your favorite
          character.
        </p>
        <button @click="onClick('characters')">En découvrir plus</button>
      </div>
      <div class="characters-img"></div>
    </div>

    <div class="comics-part">
      <div class="comics-img"></div>
      <div class="info-comics">
        <h2>Comics</h2>
        <p>
          Find the list of all the comics of the Marvel universe. And for more
          informations don't hesitate to click on the card of the comic that you
          unknown.
        </p>
        <button @click="onClick('comics')">En découvrir plus</button>
      </div>
    </div>
  </div>
</template>

<script>
import IconSpinner from "../../components/IconSpinner";

export default {
  name: "AboutView",
  methods: {
    onClick(service) {
      this.$router.push(`/${service}`);
    },
  },
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

.characters-part {
  display: grid;
  grid-template-columns: 400px 1fr;
}

.comics-part {
  display: grid;
  grid-template-columns: 1fr 400px;
}

.info-characters {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px 0px 24px 32px;
}

.info-comics {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px 32px 24px 0px;
}

h2 {
  font-family: "International Super Hero", sans-serif;
  font-size: 30px;
  width: 100%;
  margin-bottom: 0px;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 0.9) 0%,
    rgba(252, 176, 69, 1) 61%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

button {
  border: 2px solid #242020;
  padding: 10px;
  background: white;
  font-size: 16px;
  margin-top: 8px;
  min-height: 40px;
  width: 300px;
  cursor: pointer;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition-property: color;
  transition-duration: 0.3s;
}

button::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background: linear-gradient(
    100deg,
    rgba(253, 29, 29, 0.9) 0%,
    rgba(252, 176, 69, 1) 61%
  );
}

button:hover {
  border: 2px solid white;
  color: whitesmoke;
}

button:hover::before {
  transform: scaleX(1);
}
.characters-img {
  clip-path: polygon(40% 0, 100% 0%, 100% 100%, 0 100%);
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url("../../assets/home-movie.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vh;
  cursor: pointer;
}

.comics-img {
  clip-path: polygon(0 0, 60% 0, 100% 100%, 0 100%);
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url("../../assets/home-comic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  width: 100%;
  height: 60vh;
}
</style>
