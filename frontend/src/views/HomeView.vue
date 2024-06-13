<template>
  <div class="home">
    <BasicPresentation :backgroundUrl="urlImg">
      <template #content>
        <div class="home-view__container">
          <h2>Tout ce dont vous avez besoin pour que ça se passe bien</h2>
        </div>
      </template>
    </BasicPresentation>
  </div>
</template>

<script setup lang="ts">
import BasicPresentation from "@/commun/basic-presentation.vue";
import chefImage from "@/assets/background-image/chef.jpg";
import { ref } from "vue";

const urlImg = ref(chefImage);
</script>

<style lang="scss" scoped>
.home-view {
  &__container {
    padding: 1.5rem;
    & h2 {
      font-family: $poppins;
      font-size: 2.5rem;
    }
  }
}
</style>
