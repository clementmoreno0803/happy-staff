<template>
  <basicModal>
    <template #title><h2>Vous n’êtes pas connecté</h2></template>
    <template #content
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
      sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
      semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
      molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
      enim.</template
    >
    <template #action-btn>
      <button @click="router.push('/login')" class="basic-modal__action-btn">
        <h4>Je me connecte à mon espace personnel</h4>
      </button>
      <button @click="router.push('/')" class="basic-modal__home-btn">
        Je retourne à la page d’accueil
      </button></template
    >
  </basicModal>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import basicModal from "@/commun/basic-modal.vue";

const router = useRouter();
</script>

<style lang="scss" scoped>
h2 {
  font-family: $poppins;
  margin: $xs 0;
}
.basic-modal {
  border-radius: 5 * $xs;
  &__action-btn {
    background: $forth-color;
    color: $white;
    width: 100%;
    padding: $xs $l;
    border-radius: 0.3 * $xs;
    border: none;
    cursor: pointer;
    margin: $xl 0 $sm;

    h4 {
      text-align: center;
      margin: 0;
    }
  }
  &__home-btn {
    background: $white;
    color: $forth-color;
    width: 100%;
    padding: $xs $l;
    border-radius: 0.3 * $xs;
    border: 1px solid $forth-color;
    cursor: pointer;
  }
}
</style>
