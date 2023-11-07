<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomSelect",
  props: {
    items: {
      type: Array as () => Array<{ value: string; title: string }>,
      default: () => [],
      required: true
    },
    modelValue: {
      type: String,
      default: "",
      required: true
    }
  },
  methods: {
    onChange(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLSelectElement).value);
    }
  }
});
</script>

<template>
    <select :value="modelValue" @change="onChange" class="select">
      <option disabled value="" selected>Choose from the list</option>
      <option v-for="item in items" :key="item.value" :value="item.value">
        {{ item.title }}
      </option>
    </select>
</template>

<style scoped>
.select {
  padding: 8px;
  border-radius: 6px;
  outline: 1px solid var(--primary);
}
</style>