<template>
  <div>
    <h1 class="heading">Login to your personal account</h1>
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
            v-model.trim="loginStore.user"
            label="Your name"
            color="primary"
            variant="underlined"
            clearable
            persistent-clear
            :rules="[v => !!v || 'Name is required']"
          />
          <v-btn
            class="login-btn"
            :disabled="!valid"
            color="primary"
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
import { useLoginStore } from "@/stores/login";
import { Routes } from "@/router/routes";
import { useRouter } from "vue-router";

export default {
  setup() {
    const loginStore = useLoginStore();
    const router = useRouter();

    const login = () => {
      loginStore.login( loginStore.user );
      router.push(Routes.Home);
    };
    return {
      loginStore,
      login,
    };
  },

  data() {
    return {
      doctorIcon: doctor,
    };
  },
  computed: {
    valid() {
      if(!this.loginStore.user) return false;
      return this.loginStore.user.length > 0;
    },
  },
};
</script>

<style scoped>
@import "@/views/LoginView/LoginView.css";
</style>