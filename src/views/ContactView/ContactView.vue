<template>
  <div>
    <h1>Our Clinics</h1>
    <div v-for="clinic in clinics" :key="clinic.id">
      <ContactCard :clinic="clinic" />
    </div>
    <div id="map" style="height: 400px;"></div>
  </div>
</template>

<script>
import { clinics } from "@/data/clinicData";
import ContactCard from "@/components/ContactCard/ContactCard.vue";
export default {
  components: {
    ContactCard,
  },

  mounted() {
    this.initMap();
  },
  data() {
    return {
      clinics: clinics,
    };
  },
  methods: {
    initMap() {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.defer = true;

      const apiLoaded = new Promise((resolve) => {
        script.onload = resolve;
      });

      document.head.appendChild(script);

      apiLoaded.then(() => {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 50, lng: -40},
          zoom: 3
        });

        clinics.forEach((clinic) => {
          const marker = new google.maps.Marker({
            position: { lat: clinic.lat, lng: clinic.lng },
            map: map,
            title: clinic.name
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${clinic.name}</h3><p>Address: 123 Main St, City, State</p><p>Phone: ${clinic.phone}</p>`
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        });
      });
    }
  }
};

</script>

<style>
#map {
  width: 100%;
}
</style>
