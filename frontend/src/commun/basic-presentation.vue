<template>
  <div class="basic-presentatation__container" :style="backgroundStyle">
    <div class="basic-presentatation__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import type { BasicPresentation } from "@/models/basic-presentation";

const props = defineProps<BasicPresentation>();

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.backgroundUrl})`,
  backgroundSize: "50%",
  backgroundPositionY: "center",
}));
</script>

<style lang="scss" scoped>
.basic-presentatation {
  &__container {
    position: relative;
    width: 95vw;
    margin: 0 auto;
    height: 80vh;
    border-radius: 2rem;
    background-size: cover;
  }
  &__content {
    width: 50%;
    height: 100%;
    border-radius: 1rem;
    background: $primary-color;
    position: absolute;
    right: 0;
  }
}
</style>
