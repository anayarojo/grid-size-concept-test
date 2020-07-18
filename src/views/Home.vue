<template>
    <div class="home-view">
        <router-link class="action-link" to="/css-grid">
            <app-section title="CSS Grid"></app-section>
        </router-link>
        <router-link class="action-link" to="/grid-calc-px">
            <app-section title="Grid + Calc Px"></app-section>
        </router-link>
        <router-link class="action-link" to="/grid-calc-rem">
            <app-section title="Grid + Calc Rem"></app-section>
        </router-link>
        <router-link class="action-link" to="/">
            <app-section title="Other"></app-section>
        </router-link>
    </div>
</template>

<script>
import AppSection from '../components/Section.vue'

export default {
  name: 'Home',
  components: {
    AppSection
  },
}
</script>

<style lang="scss">

  .home-view {
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
