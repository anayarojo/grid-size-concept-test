<template>
    <div class="app-view">
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
