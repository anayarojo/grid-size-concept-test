<template>
  <section>
    <div v-if="mode === 'default'" class="section-content section-default">
        {{ title }}
      </div>
      <div v-else-if="mode === 'grid'" class="section-content section-grid">
        {{ title }}
      </div>
      <div v-else-if="mode === 'calc-px'" class="section-content section-grid-calc-px">
        <div class="section-header">
          Header
        </div>
        <div class="section-body">
          Body
        </div>
      </div>
      <div v-else-if="mode === 'calc-rem'" class="section-content section-grid-calc-rem">
        <div class="section-header">
          Header
        </div>
        <div class="section-body">
          Body
        </div>
      </div>
  </section>
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

    section {
        width: 100%;
        height: 100%;
        background-color: #fff;

        .section-content {
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;

            font-weight: 600;
            font-size: 2.5rem;

            color: rgba(0,0,0,0.25);

          &.section-default, &.section-grid {
            justify-content: center;
            align-items: center;
          }

          &.section-grid-calc-px {

            .section-header {
              background: rgba($color: red, $alpha: 0.7);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .section-body {
              height: calc(100% - 45px);
              background: rgba($color: blue, $alpha: 0.7);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          }

          &.section-grid-calc-rem {

            .section-header {
              height: 5rem;
              background: rgba($color: red, $alpha: 0.7);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .section-body {
              height: calc(100% - 5rem);
              background: rgba($color: blue, $alpha: 0.7);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          }
        }
    }

</style>
