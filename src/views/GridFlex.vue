<template>
    <div class="app-view">
        <app-section title="Sección 1" mode="calc-rem"></app-section>
        <app-section title="Sección 2" mode="calc-rem"></app-section>
        <app-section title="Sección 3" mode="calc-rem"></app-section>
        <app-section title="Sección 4" mode="calc-rem"></app-section>
    </div>
</template>

<script>
import AppSection from '../components/Section.vue'

export default {
  name: 'GridCalc',
  components: {
    AppSection
  },
}
</script>
