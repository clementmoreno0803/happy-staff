<template>
  <div class="basic-filter__container">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.basic-filter {
  &__container {
    width: fit-content;
    padding: $sm $l;
    color: $black;
    font-size: $m;
  }
  &:hover {
    background: $black;
    color: $white;
  }
}
</style>
