<template>
  <div class="character-container" v-on:click="onClick()">
    <div class="character-picture"><img :id="id" :src="src" :alt="name" /></div>
    <div class="character-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {},
  },
  data() {
    return {
      id: null,
      name: "",
      src: "",
    };
  },
  methods: {
    onClick() {
      this.$router.push(`/characters/${this.id}`);
    },
  },
  mounted() {
    const { id = null, name = "", thumbnail = {} } = this.character;
    const { extension = "", path = "" } = thumbnail;
    this.id = id;
    this.name = name;
    this.src = `${path}.${extension}`;
  },
};
</script>

<style scoped>
.character-container {
  background-image: url("../../assets/character-background.png");
  cursor: pointer;
  border: 1px solid;
  padding: 10px 10px 0px 10px;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.character-picture {
  border: 1px solid;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  position: relative;
  border: 1px solid #333;
  overflow: hidden;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.character-picture:hover {
  border: 1px solid white;
}

.character-picture > img {
  vertical-align: top;
  width: 100%;
  height: 100%;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.character-picture:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/**
// font-family: 'International Super Hero', sans-serif;
// font-family: 'International Super Hero Out', sans-serif;
// font-family: 'International Super Hero Exp', sans-serif;
// font-family: 'International Super Hero Cond', sans-serif;
// font-family: 'International Super Hero Light', sans-serif;
 **/

.character-name {
  font-family: "International Super Hero", sans-serif;
  font-size: 20px;
  width: 100%;
  text-align: center;
  padding: 10px 0px 10px 0px;
}
</style>
