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
        <div id="picture-side" :style="src"></div>
      </div>

      <h2>Comics with {{ name }}</h2>
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
//       <img class="img-detail" :src="src" :alt="name" />
//     </div>

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
      this.src = `background-image: url(${path}.${extension}); background-repeat: no-repeat;`;
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
  background-color: white;
}

.loading-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-detail-container {
  min-height: 70vh;
  margin: auto;
}
.character-details-container {
  border-radius: 100% 0% 100% 0% / 0% 73% 27% 100%;
  width: 100%;
  height: 60vh;
  margin-bottom: 20px;
  background-color: #202020;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  justify-items: start | end;
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
  margin-left: 32px;
}

#title {
  font-family: "International Super Hero", sans-serif;
  font-size: 40px;
  width: 100%;
  margin-bottom: 30px;
  color: white;
  text-transform: uppercase;
}

#description {
  font-size: 20px;
  width: 100%;
  color: white;
}

h2 {
  margin: 100px 0px 0px 0px;
  text-align: center;
  position: relative;
  max-width: 750px;
  justify-content: start;
}

h2:before {
  content: "";
  display: block;
  width: 120px;
  height: 3px;
  background: orange;
  position: absolute;
  left: 0;
  top: 50%;
}

/**#picture-side {
  justify-self: end;
}**/
</style>
