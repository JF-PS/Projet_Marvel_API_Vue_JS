<template>
  <div class="main-container">
    <div class="title-section">
      <div class="line"></div>
      <h2>Notre groupe</h2>
    </div>

    <div class="text-section">
      <p>Jean-François Pitcherit-Steinbrucker et Morgane Duluc</p>
      <p>Vous trouverez <a href="https://github.com/JF-PS/Projet_Marvel_API_Vue_JS">ici</a> le lien de notre repositorie.</p>
    </div>

    <div class="title-section">
      <div class="line"></div>
      <h2>Objectifs</h2>
    </div>
    <div class="text-section">
      <p>Via l’API de Marvel, nous devions créer une interface permettant de naviguer parmi différents comics ou héros de la licence. Les pages où sont listées ces derniers devaient contenir un système de pagination et un système de recherche.</p>

      <p>Plus, ces listes se devaient d'être cliquables et nous rediriger vers les pages détails.</p>

      <p>Sur la page d’un héros, il devait être possible de voir l’ensemble des comics dans lequel ce dernier apparaît
      et d’y accéder. Et inversement, sur la page d’un comic, il doit être possible de voir l’ensemble des héros
      qui apparaissent et d'accéder à leur page.</p>
    </div>

    <div class="title-section">
      <div class="line"></div>
      <h2>Contraintes</h2>
    </div>
    <div class="text-section">
      <p>L'application devra disposer de</p>
        <ul>
          <li>Un linter,</li>
          <li>Une pagination efficace afin de ne pas surcharger votre application,</li>
          <li>Un routing cohérent (standard REST),</li>
          <li>Une recherche permettant d'accéder directement à des entités précises,</li>
          <li>Un UX / UI design correct.</li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutView",
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
  padding-top: 32px;
}

.title-section {
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
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%);
}

h2 {
  grid-area: title;
  text-align: center;
  position: relative;
  max-width: 750px;
  justify-self: start;
  color:#343a43;
}

.text-section {
  padding: 0px 32px;
}

p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

li {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}
</style>
