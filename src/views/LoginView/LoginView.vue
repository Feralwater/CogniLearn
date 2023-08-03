<template>
  <div>
    <h1>Login to your personal account</h1>
    <div class="login--preview">
      <div>
        <v-img :src="doctorIcon" width="350" />
      </div>
      <div class="login--form">
        <p>
          Log in to access exclusive content. You'll be able to personalize your learning
          journey, track your progress, and bookmark your favorite articles and resources.
        </p>
        <v-form>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          />
          <v-btn
            :disabled="!valid"
            color="success"
            @click="login"
          >Login
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import doctor from "@/assets/icons/doctor.svg";
import { Routes } from "@/router/routes";

export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be at least 8 characters"
      ],
      doctorIcon: doctor
    };
  },
  computed: {
    valid() {
      return this.email && this.password;
    }
  },
  methods: {
    login() {
      this.$router.push(Routes.Home);
    }
  }
};
</script>

<style scoped>
@import "@/views/LoginView/LoginView.css";
</style>