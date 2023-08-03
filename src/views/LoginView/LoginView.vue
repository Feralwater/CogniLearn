<template>
  <div>
    <v-img :src="doctorIcon" width="300" />
    <h1>Login to your personal account</h1>
    <p>
      To make the most of your learning experience and access exclusive content, we
      encourage you to create an account or log in. By signing up, you'll be able to personalize your learning journey,
      track your progress, and bookmark your favorite articles and resources.
    </p>
    <v-form>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        color="success"
        @click="login"
      >Login
      </v-btn>
    </v-form>
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

<style lang="scss" scoped>

</style>