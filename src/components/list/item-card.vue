<template>
  <div class="card" v-on:click="onClick()">
    <div
      :class="`item-picture ${
        mode == 'characters' ? 'heroes-size' : 'comics-size'
      }`"
    >
      <img :id="id" :src="src" :alt="name" />
    </div>
    <div class="item-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    character: {},
    mode: String,
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
      this.$router.push(`/${this.mode}/${this.id}`);
    },
  },
  mounted() {
    const { id = null, name = "", title = "", thumbnail = {} } = this.character;
    const { extension = "", path = "" } = thumbnail;
    this.id = id;
    const descriptionCard = name == "" ? title : name;
    this.name =
      descriptionCard.length > 18
        ? `${descriptionCard.substr(0, 18)}...`
        : descriptionCard;
    this.src = `${path}.${extension}`;
  },
};
</script>

<style scoped>
.card {
  background-color: #242020;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 300px;
  width: 210px;
  box-shadow: -5px 15px 25px rgba(112, 112, 112, 0.4);
  justify-self: center;
}

.item-picture {
  position: relative;
  overflow: hidden;
}

.heroes-size {
  height: 300px;
  width: 270px;
}

.comics-size {
  width: 210px;
  height: 370px;
}

.item-picture > img {
  width: 100%;
  height: 100%;
  margin: auto;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.item-picture:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.item-name {
  font-family: "International Super Hero", sans-serif;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
}
</style>
