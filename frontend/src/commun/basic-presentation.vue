<template>
  <div class="basic-presentatation__container" :style="backgroundStyle">
    <div class="basic-presentatation__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import type { BasicPresentation } from "@/models/BasicPresentation";

const props = defineProps<BasicPresentation>();

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.backgroundUrl})`,
  backgroundSize: "60%",
  backgroundPositionY: "center",
  backgroundPositionX: "left",
}));
</script>

<style lang="scss" scoped>
.basic-presentatation {
  &__container {
    position: relative;
    width: 95vw;
    margin: 0 auto;
    border-radius: 2rem;
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
  }
  &__content {
    width: 50%;
    height: auto;
    min-height: 70vh;
    border-radius: 1rem;
    background: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
