<template>
  <div>
    <h1>Our Clinics</h1>
    <div id="map" style="height: 400px;"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initMap();
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

        const clinics = [
          { name: "Clinic A", lat: 40.7128, lng: -74.0060, phone: "123-456-7890" },
          { name: "Clinic A", lat: 48.8566, lng: 2.3522, phone: "123-456-7890" },
          { name: "Clinic B", lat: 51.5074, lng: -0.1278, phone: "123-456-7890" },
          { name: "Clinic C", lat: 41.3851, lng: 2.1734, phone: "123-456-7890" },
          { name: "Clinic D", lat: 52.5200, lng: 13.4050, phone: "123-456-7890" },
          { name: "Clinic E", lat: 41.9028, lng: 12.4964, phone: "123-456-7890" },
          { name: "Clinic F", lat: 48.2082, lng: 16.3738, phone: "123-456-7890" },
          { name: "Clinic G", lat: 52.3667, lng: 4.8945, phone: "123-456-7890" },
          { name: "Clinic H", lat: 59.3293, lng: 18.0686, phone: "123-456-7890" },
          { name: "Clinic I", lat: 60.1699, lng: 24.9384, phone: "123-456-7890" },
          { name: "Clinic J", lat: 52.2297, lng: 21.0122, phone: "123-456-7890" }
        ];

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
