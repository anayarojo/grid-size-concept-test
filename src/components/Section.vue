<template>
  <section>
      <div class="section-content">  
        {{ title}}
      </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String
  }
}
</script>

<style lang="scss">

    section {
        background-color: #fff;

        .section-content {
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            font-weight: 600;
            font-size: 2.5rem;

            color: rgba(0,0,0,0.25);
        }
    }

</style>
