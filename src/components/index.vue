<template>
    <div class="row justify-content-center h-100">
        <div class="col align-self-center h-75">
            <ModelViewComponent></ModelViewComponent>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
    import ModelViewComponent from "./model-view.vue";

    export default {
      data() {
        return {};
      },
      computed: {},
      methods: {},
      components: {
        ModelViewComponent: ModelViewComponent
      }
    };
</script>