<template>
    <div class="css-grid-view">
        <app-section title="Sección 1" mode="grid"></app-section>
        <app-section title="Sección 2" mode="grid"></app-section>
        <app-section title="Sección 3" mode="grid"></app-section>
        <app-section title="Sección 4" mode="grid"></app-section>
    </div>
</template>

<script>
import AppSection from '../components/Section.vue'

export default {
  name: 'CssGrid',
  components: {
    AppSection
  },
}
</script>

<style lang="scss">

  .css-grid-view {
    width: 100%;
    height: 100%;

    display: grid;
    row-gap: 0.75rem;
    column-gap: 0.75rem;

    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .action-link {
    width: 100%;
    height: 100%;
  }

</style>
