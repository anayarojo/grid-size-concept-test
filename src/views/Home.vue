<template>
    <div class="app-view">
      <app-section title="CSS Grid">
        <router-link class="d-block btn btn-outline-primary" 
        to="/css-grid">
          Show
        </router-link>
      </app-section>
      <app-section title="Grid + Calc Px">
        <router-link class="d-block btn btn-outline-primary" 
        to="/grid-calc-px">
          Show
        </router-link>
      </app-section>
      <app-section title="Grid + Calc Rem">
        <router-link class="d-block btn btn-outline-primary" 
        to="/grid-calc-rem">
          Show
        </router-link>
      </app-section>
      <app-section title="Grid + Flex">
        <router-link class="d-block btn btn-outline-primary" 
        to="/grid-flex">
            Show
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
