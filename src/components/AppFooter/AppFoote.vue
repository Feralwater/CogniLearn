<script lang="ts">
import { defineComponent } from "vue";
import { Routes } from "@/router/routes";

export default defineComponent({
  name: "AppFooter",
  data() {
    return {
      Routes
    };
  }
});
</script>

<template>
  <footer class="footer">
    <p>
      We are here to help you.
      <router-link :to="Routes.Contact">Contact us</router-link>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--secondary);
  color: var(--white);
  padding: 15px 10px;
  text-align: center;
  margin: auto 0 0 0;
}

.footer p {
  font-size: 14px;
  margin: 0;
}

.footer a {
  color: var(--tertiary);
  text-decoration: none;
  font-weight: bold;
  margin-left: 4px;
}

.footer a:hover {
  text-decoration: underline;
}
</style>