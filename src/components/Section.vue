<template>
  <div class="card h-100">
    <template v-if="mode === 'default' || mode === 'grid'">
      <div class="card-body d-flex flex-column justify-content-center align-items-center h-100">
        <h1 class="text-muted font-weight-bold">{{ title }}</h1>
        <slot></slot>
      </div>
    </template>  
    <template v-else-if="mode === 'calc-px'">
      <div class="card-header bg-white">
        <h1 class="h3 text-muted font-weight-bold mb-0">
          Header
        </h1>
      </div>
      <div class="card-body d-flex flex-column">
        <div class="card-sub-header bg-primary text-white d-flex flex-column justify-content-center align-items-center h-64px">
          Subheader
        </div>
        <div class="card-sub-body bg-light text-muted d-flex flex-column justify-content-center align-items-center h-cal-100--64px">
          Subbody
        </div>
      </div>
    </template>
    <template v-else-if="mode === 'calc-rem'">
      <div class="card-header bg-white">
        <h1 class="h3 text-muted font-weight-bold mb-0">
          Header
        </h1>
      </div>
      <div class="card-body d-flex flex-column">
        <div class="card-sub-header bg-primary text-white d-flex flex-column justify-content-center align-items-center h-3rem">
          Subheader
        </div>
        <div class="card-sub-body bg-light text-muted d-flex flex-column justify-content-center align-items-center h-cal-100--3rem">
          Subbody
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    mode: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss">

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
