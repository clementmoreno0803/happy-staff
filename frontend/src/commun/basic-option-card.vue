<template>
  <div
    class="basic-theme-card__container"
    :style="{ border: `3px ${props.backgroundColor} solid` }"
  >
    <slot name="title"></slot>
    <slot name="desctiption"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { BasicThemeCard } from "@/models/BasicThemeCard";
const props = defineProps<BasicThemeCard>();
</script>

<style lang="scss" scoped>
.basic-theme-card {
  display: flex;
  justify-content: space-between;
  &__container {
    width: calc(30vw - 2 * $xl);
    height: auto;
    border-radius: $xl;
    padding: $l;
    transition: all 0.4s ease-out;
    &:hover {
      transition: all 0.4s ease-in;
      opacity: 0.7;
      cursor: pointer;
    }
  }
}
</style>

export { BasicThemeCard };@/models/BasicThemeCard
