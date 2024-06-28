<template>
  <div class="basic-form__container">
    <slot name="title"></slot>
    <slot name="form"></slot>
    <slot name="submit"></slot>
  </div>
</template>

<style lang="scss" scoped>
.basic-form {
  &__container {
    height: max-content;
    padding: $xl;
  }
}
</style>
