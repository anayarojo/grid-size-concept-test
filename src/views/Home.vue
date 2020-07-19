<template>
    <div class="home-view">
      <app-section title="CSS Grid">
        <router-link class="d-block btn btn-outline-primary" 
        to="/css-grid">
          Show
          <i class="fas fa-fw fa-angle-double-right"></i>
        </router-link>
      </app-section>
      <app-section title="Grid + Calc Px">
        <router-link class="d-block btn btn-outline-primary" 
        to="/grid-calc-px">
          Show
          <i class="fas fa-fw fa-angle-double-right"></i>
        </router-link>
      </app-section>
      <app-section title="Grid + Calc Rem">
        <router-link class="d-block btn btn-outline-primary" 
        to="/grid-calc-rem">
          Show
          <i class="fas fa-fw fa-angle-double-right"></i>
        </router-link>
      </app-section>
      <app-section title="Other">
        <router-link class="d-block btn btn-outline-primary" 
        to="/">
            Show
            <i class="fas fa-fw fa-angle-double-right"></i>
        </router-link>
      </app-section>
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
