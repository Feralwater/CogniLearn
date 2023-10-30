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
  <nav class="header-navigation d-none d-sm-flex">
    <ul class="header-navigation-list header-container">
      <li class="header-navigation-item" v-for="link in props.links" :key="link.route">
        <router-link :to="link.route" class="header-link">{{ link.text }}</router-link>
      </li>
      <li class="header-navigation-item">
        <router-link
          v-if="!loginStore.isAuthenticated"
          :to="Routes.Login" class="header-link">Login
        </router-link>
        <span v-else class="header-link" @click="logout">Logout</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header-navigation {
  width: 100%;
  background-color: var(--vt-c-green);
}

.header-navigation-list {
  list-style-type: none;
  padding: 0 15px;
}

.header-navigation-item {
  display: inline-block;
  text-transform: uppercase;
}

.header-link {
  color: var(--vt-c-white);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  display: block;
  padding: 15px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.header-link:before {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  content: " ";
  height: 3px;
  background-color: var(--vt-c-white);
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.header-link:hover:before {
  transform: scaleX(1);
}
</style>