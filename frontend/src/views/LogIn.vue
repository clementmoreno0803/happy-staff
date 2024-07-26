<template>
  <div class="login__container">
    <BasicPresentation :backgroundUrl="urlImg">
      <template #content>
        <div class="login__basic-presentation__container">
          <div>
            <h2 BasicThemeCard>Heureux de vous retrouver</h2>
            <p class="login__basic-presentation__container__description">
              Veuillez renseigner vos informations
            </p>
          </div>
          <formulaireLogin></formulaireLogin>
        </div>
      </template>
    </BasicPresentation>
  </div>
</template>

<script setup lang="ts">
import BasicPresentation from "@/commun/basic-presentation.vue";
import cuisineImage from "@/assets/background-image/cuisine.jpg";
import formulaireLogin from "@/components/login/formulaire-login.vue";
import { ref } from "vue";

const urlImg = ref(cuisineImage);
</script>

<style lang="scss" scoped>
.login {
  &__container {
    width: 95vw;
    margin: 0 auto;
  }
  &__basic-presentation {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: $l $xxl;
      height: 100%;
      min-height: 500px;
      & h2 {
        font-family: $poppins;
        font-size: clamp($l, 2vw, 20rem);
        font-weight: $bold;
        text-align: left;
        line-height: 1.2;
        margin: $l 0 0;
      }
      &__description {
        margin: 0;
        text-align: left;
        font-size: $sm;
      }
      .recherche {
        background: $secondary-color;
      }
      .depot {
        background: $forth-color;
        color: $white;
      }
    }
  }
  &__theme {
    display: flex;
    justify-content: space-between;
    padding: $xl;

    span {
      font-size: $sm;
    }
  }
}
</style>
