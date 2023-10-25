<template>
  <div>
    <v-img
      :src="banner"
      gradient="to right, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.1)"
      max-height="600px"
      cover
    >
      <div class="home-banner">
        <h1 class="home-heading">
          Welcome to Mind Masters
        </h1>
        <p class="subheading mb-6">
          Our psychology app is designed to help you understand yourself better and gain insights into your mental
          well-being. Whether you want to learn more about psychology, take quizzes, or find support in times of need,
          our app has something for everyone.
        </p>
        <v-btn
          class="btn"
          @click="navigateToDepressionTest"
          color="primary"
        >
          Take Mood Assessment Quiz
        </v-btn>
      </div>
    </v-img>
    <section>
      <h2 class="home-heading-2">Our Doctors</h2>
      <div class="home-slider">
        <slide-group :sliderItems="doctors" />
      </div>
    </section>
  </div>
</template>

<script>
import banner from "@/assets/banner.jpg";
import { Routes } from "@/router/routes";
import SlideGroup from "@/components/SlideGroup/SlideGroup.vue";
import { doctors } from "@/data/doctors";

export default {
  components: { SlideGroup },
  name: "HomeView",
  methods: {
    navigateToDepressionTest() {
      this.$router.push(Routes.Quiz);
    }
  },
  data() {
    return {
      banner,
      doctors
    };
  }
};
</script>

<style>
@import "./HomeView.css";
</style>
