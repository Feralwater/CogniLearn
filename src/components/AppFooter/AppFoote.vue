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
    <div class="container">
      <div class="content has-text-centered">
        <p>
          We are here to help you.
          <router-link :to="Routes.Contact">Contact us</router-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--primary);
  padding: 20px 15px;
  text-align: center;
  margin: auto 0 0 0;
}

.footer p {
  color: var(--white);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.footer a {
  display: inline-block;
  color: var(--white);
}

.footer a:hover {
  color: var(--white);
  transform: scale(1.05);
}

</style>