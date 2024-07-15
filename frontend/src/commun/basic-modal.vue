<template>
  <div>
    <div class="basic-modal__backdrop" @click="$emit('close-modal')"></div>
    <div class="basic-modal__container">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="action-btn"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

defineEmits(["close-modal"]);
</script>

<style lang="scss" scoped>
.basic-modal {
  &__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 998;
    backdrop-filter: blur(2px);
    cursor: pointer;
  }
  &__container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $white;
    width: 50vw;
    height: auto;
    padding: $l;
    border: 1px solid $grey;
    backdrop-filter: rgba(0, 0, 0, 0.6);
    z-index: 999;
    border-radius: 0.3 * $xs;
  }
}
</style>
