<template>
  <div>
    <h3>{{ clinic.name }}</h3>
    <p>Country: {{ clinic.country }}</p>
    <p>City: {{ clinic.city }}</p>
    <p>Medical Director: {{ clinic.medicalDirector }}</p>
    <p>Phone: {{ clinic.phone }}</p>
  </div>
</template>

<script>
export default {
  props: {
    clinic: {
      type: {
        name: String,
        country: String,
        city: String,
        medicalDirector: String,
        phone: String,
      },
      required: true,
    },
  },

};
</script>

<style scoped>

</style>