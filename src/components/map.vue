<template>
    <div class="border border-secondary rounded h-100">
        <div id="map" class="h-100 w-100"></div>
    </div>
</template>

<style scoped>

</style>

<script>
  export default {
      data() {
          return {};
      },
      mounted: function() {
          var uluru = { lat: 65.011543, lng: 25.468772 };
          var map = new google.maps.Map(document.getElementById("map"), {
              zoom: 16,
              center: uluru
          });
      },
      computed: {},
      methods: {},
      components: {}
  };
</script>