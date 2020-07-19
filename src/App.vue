<template>
  <main id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </main>
</template>

<script>
export default {
  name: 'App',
  created() {
    document.title = 'Grid CSS';
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Your Website';
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss">

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: auto;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    width: 100%;
    height: 100vh;
    padding: 0.75rem;
    background-color: #f8fafc;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .app-view {
    width: 100%;
    height: 100%;

    display: grid;
    row-gap: 0.75rem;
    column-gap: 0.75rem;

    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .h-64px {
    height: 64px;
  }

  .h-cal-100--64px {
    height: calc(100% - 64px);
  }

  .h-3rem {
    height: 3rem;
  }
  
  .h-cal-100--3rem {
    height: calc(100% - 3rem);
  }

</style>
