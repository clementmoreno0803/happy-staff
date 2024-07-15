<template>
  <div class="top-card__container">
    <slot name="title" class="top-card__title"><h2></h2></slot>
    <slot name="content"></slot>
    <slot name="action-btn"></slot>
  </div>
</template>

<style lang="scss" scoped>
.top-card {
  &__container {
    position: relative;
    width: fit-content;
    max-width: 55vw;
    padding: $m $l;
    border: 1px solid $grey;
    border-radius: $xs;
  }
}
</style>
