<template>
  <main id="app">
    <app-section title="Sección 1"></app-section>
    <app-section title="Sección 2"></app-section>
    <app-section title="Sección 3"></app-section>
    <app-section title="Sección 4"></app-section>
  </main>
</template>

<script>
import AppSection from './components/Section.vue'

export default {
  name: 'App',
  components: {
    AppSection
  },
  created() {
    document.title = 'Grid CSS';
  },
}
</script>

<style lang="scss">

*, *::before, *::after {
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  main {
    width: 100%;
    height: 100vh;

    padding: 0.75rem;
    row-gap: 0.75rem;
    column-gap: 0.75rem;

    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));

    background-color: #f8fafc;
  }
}

</style>
