<template>
  <div v-if="loading" class="main-detail-container loading-item">
    <IconSpinner fill="#151515" height="80px" dur="1.0s" />
  </div>
  <div v-else class="main-detail-container">
    <div class="character-details-container">
      <div id="picture-container">
        <img class="img-detail" :src="src" :alt="name" />
      </div>
      <div id="description-container">
        <div id="title">{{ name }}</div>
        <div id="description">
          {{
            description === "" ? `No description for ${name}...` : description
          }}
        </div>
      </div>
    </div>
    <div>
      <ItemList :list="comicsList" mode="comics" />
    </div>
  </div>
</template>

<script>
import { getById, getCollectionURI } from "@/utils/marvel-api.js";
import ItemList from "../../components/list/item-list";
import IconSpinner from "../../components/IconSpinner";

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
      this.src = `${path}.${extension}`;
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
.loading-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-detail-container {
  min-height: 70vh;
  margin: auto;
  max-width: 70%;
}
.character-details-container {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #202020;
  display: flex;
  border-radius: 5px;
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
  width: 100%;
  padding: 20px;
}

#title {
  font-family: "International Super Hero", sans-serif;
  font-size: 40px;
  width: 100%;
  margin-bottom: 30px;
  color: white;
}

#description {
  font-family: "International Super Hero", sans-serif;
  font-size: 20px;
  width: 100%;
  color: white;
}
</style>
