<template>
  <div id="container">
    <div v-if="loading" class="main-detail-container loading-item">
      <IconSpinner fill="#151515" height="80px" dur="1.0s" />
    </div>
    <div v-else class="main-detail-container">
      <div class="character-details-container">
        <div id="description-container">
          <div id="title">{{ name }}</div>
          <div id="description">
            {{
              description === "" ? `No description for ${name}...` : description
            }}
          </div>
        </div>
        <div :style="src"></div>
      </div>

      <div class="title-detail-page">
        <div class="line"></div>
        <h2>Comics with {{ name }}</h2>
      </div>
      <div>
        <ItemList :list="comicsList" mode="comics" />
      </div>
    </div>
  </div>
</template>

<script>
import { getById, getCollectionURI } from "@/utils/marvel-api.js";
import ItemList from "../../components/list/item-list";
import IconSpinner from "../../components/IconSpinner";

//  <div id="picture-container">
//    <img class="img-detail" :src="src" :alt="name" />
//  </div>

export default {
  name: "CharacterDetailsView",
  props: ["id"],
  components: {
    ItemList,
    IconSpinner,
  },
  data() {
    return {
      name: "",
      src: "",
      description: "",
      comicsList: [],
      loading: true,
    };
  },
  mounted() {
    getById("characters", this.id).then((response) => {
      const { results } = response;
      const {
        name = "",
        description = "",
        thumbnail = {},
        comics = {},
      } = results[0];

      // We get the main information of the character
      const { extension = "", path = "" } = thumbnail;
      this.name = name;
      this.description = description;
      this.src = `background-image: url(${path}.${extension}); background-repeat: no-repeat; background-size: cover;`;
      this.loading = false;

      // We recover the comics where the character appeared
      const { collectionURI } = comics;
      getCollectionURI(collectionURI).then((collectionResponse) => {
        const { results: comicsList } = collectionResponse;
        this.comicsList = comicsList;
      });
    });
  },
};
</script>

<style scoped>
#container {
  background-color: #FBFCFA;
}

.loading-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-detail-container {
  min-height: 100%;
  margin: auto;
}
.character-details-container {
  border-radius: 100% 0% 100% 0% / 0% 73% 27% 100%;
  width: 100%;
  height: 59vh;
  margin-bottom: 20px;
  background-color: hsl(220, 3%, 20%);
  /* background-color: #343a43; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
}

#picture-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 10px;
}

.img-detail {
  width: 100%;
  border-radius: 5px;
}

#description-container {
  color: white;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0px 32px;
}

#title {
  font-family: "International Super Hero", sans-serif;
  font-size: 40px;
  width: 100%;
  margin-bottom: 30px;
  text-transform: uppercase;
  background: linear-gradient(90deg, rgba(253,29,29,0.9) 0%, rgba(252,176,69,1) 61%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

#description {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  letter-spacing: 0.5px;
  width: 100%;
  color: white;
  line-height: 1.5;
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
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1)
100%);
}

h2 {
  grid-area: title;
  text-align: center;
  position: relative;
  max-width: 100%;
  justify-self: start;
  color:#343a43;
}

</style>
