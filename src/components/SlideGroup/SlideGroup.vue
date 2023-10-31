<script lang="ts">
import { defineComponent } from "vue";
import type { Doctor } from "@/types/doctor";
import DoctorCard from "@/components/DoctorCard/DoctorCard.vue";

export default defineComponent({
  name: "SlideGroup",
  components: { DoctorCard },
  props: {
    sliderItems: {
      type: Array as () => Doctor[],
      required: true
    }
  },
  data() {
    return {
      model: null
    };
  }
});
</script>

<template>
  <v-slide-group
    v-model="model"
    class="pa-4"
    selected-class="bg-success"
    show-arrows
  >
    <v-slide-group-item
      v-for="doctor in sliderItems"
      :key="doctor.id"
    >
      <doctor-card :doctor="doctor" />
    </v-slide-group-item>
  </v-slide-group>
</template>

<style scoped>
.pa-4 {
  margin: 20px 0;
}
</style>