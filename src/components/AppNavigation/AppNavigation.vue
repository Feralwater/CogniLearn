<script setup lang="ts">
import { Routes } from "@/router/routes";
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();

const logout = () => {
  loginStore.logout();
};

const props = defineProps<{
  links: { text: string; route: string }[];
}>();

</script>

<template>
  <nav class="navigation d-none d-sm-flex">
    <v-list class="navigation-list header-container">
      <v-list-item class="navigation-item" v-for="link in props.links" :key="link.route">
        <router-link :to="link.route" class="navigation-link">{{ link.text }}</router-link>
      </v-list-item>
      <v-list-item class="navigation-item">
        <router-link
          v-if="!loginStore.isAuthenticated"
          :to="Routes.Login" class="navigation-link">Login
        </router-link>
        <span v-else class="navigation-link" @click="logout">Logout</span>
      </v-list-item>
    </v-list>
  </nav>
</template>

<style scoped>

.navigation {
  width: 100%;
  background-color: var(--primary);
}

.navigation-list {
  display: flex;
  padding: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary);
}

.navigation-item {
  text-transform: uppercase;
}

.navigation-link {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  display: block;
  padding: 4px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.navigation-link:before {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  content: "";
  height: 2px;
  background-color: var(--white);
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.navigation-link:hover:before {
  transform: scaleX(1);
}

</style>