<template>
    <div class="h-100 w-100">
        <canvas id="world" class="border border-primary rounded h-100 w-100"></canvas>
    </div>
</template>

<style scoped>

</style>

<script>
  import Axios from "axios";
  import * as THREE from "three";
  import "three-examples/loaders/GLTFLoader";
  import "three-examples/loaders/FBXLoader";
  import "three-examples/controls/OrbitControls";

  export default {
    data() {
      return {};
    },
    mounted: function() {
      // Basic setup
      var canvasElement = document.getElementById("world");
      const scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(
        75,
        canvasElement.offsetWidth / canvasElement.offsetHeight,
        0.1,
        1000
      );
      camera.position.set(20, 20, 20);

      var renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
        alpha: true
      });
      renderer.setSize(canvasElement.offsetWidth, canvasElement.offsetHeight);
      scene.background = new THREE.Color(0xffffff);

      var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
      scene.add(light);

      var sun = new THREE.DirectionalLight(0xffffff);
      sun.position.set(0, 0, 1);
      scene.add(sun);

      var controls = new THREE.OrbitControls(camera, renderer.domElement);
      // enable animation loop when using damping or autorotation
      //controls.enableDamping = true;
      //controls.dampingFactor = 0.25;
      controls.enableZoom = true;

      // Loading glTF object
      var loader = new THREE.GLTFLoader();

      // Load a glTF resource
      loader.load(
        "http://localhost:8003/oulu/block6/building_1/Building1_2.gltf",
        function(gltf) {
          scene.add(gltf.scene);
        }
      );

      // Render scene
      function animate() {
        requestAnimationFrame(animate);
        //controls.update();
        renderer.render(scene, camera);
      }
      animate();
    },
    computed: {},
    methods: {},
    components: {}
  };
</script>