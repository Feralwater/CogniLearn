<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalWindow",
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    }
  }
});
</script>

<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  min-width: 30%;
}
</style>