<template>
    <div class="row justify-content-center h-100">
        <div class="col-7 align-self-center h-75">
            <ModelViewComponent></ModelViewComponent>
        </div>
        <div class="col-5">
            <div class="h-50">
                <ControlComponent></ControlComponent>
            </div>
            <div class="h-50">
                <MapComponent></MapComponent>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
    import ModelViewComponent from "./model-view.vue";
    import MapComponent from "./map.vue";
    import ControlComponent from "./control.vue";

    export default {
        data() {
            return {};
        },
        computed: {},
        methods: {},
        components: {
            ModelViewComponent: ModelViewComponent,
            ControlComponent: ControlComponent,
            MapComponent: MapComponent
        }
    };
</script>