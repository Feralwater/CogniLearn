<template>
  <v-container class="container">
    <h1 class="mainHeading">Login</h1>
    <div class="login--preview">
      <v-img :src="doctorIcon" max-width="350" min-width="300"/>
      <div class="login--form">
        <p class="login--text">
          Log in to your account to see your appointments and manage your
          profile.
        </p>
        <v-form @submit.prevent="login">
          <v-text-field
            v-model.trim="loginStore.user"
            label="Your name"
            color="primary"
            variant="underlined"
            clearable
            persistent-clear
            :counter="20"
            :rules="[
              v => !!v || 'Name is required',
              v => (v && v.length <= 20) || 'Name must be less than 20 characters',
              ]"
          />
          <v-btn
            class="login-btn"
            :disabled="!valid"
            color="primary"
            type="submit"
          >
            Login
          </v-btn>
        </v-form>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import doctor from "@/assets/icons/doctor.svg";
import { useLoginStore } from "@/stores/login";
import { Routes } from "@/router/routes";
import { useRouter } from "vue-router";

export default {
  setup() {
    const loginStore = useLoginStore();
    const router = useRouter();

    const login = () => {
      loginStore.login(loginStore.user);
      router.push(Routes.Profile);
    };
    return {
      loginStore,
      login
    };
  },

  data() {
    return {
      doctorIcon: doctor
    };
  },
  computed: {
    valid() {
      if (!this.loginStore.user) {
        return false;
      }
      if (this.loginStore.user.length > 20) {
        return false;
      }
      return this.loginStore.user.length > 0;
    }
  }
};
</script>

<style scoped>
@import "@/views/LoginView/LoginView.css";
</style>