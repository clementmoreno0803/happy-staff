<template>
  <form @submit.prevent="test">
    <div class="formulaire-contact">
      <!-- Profession -->
      <legend>
        <span class="formulaire-contact__topic-number">01.</span>Dans quel type
        de poste vous sentez-vous le plus à l’aise ?
      </legend>
      <div
        class="formulaire-contact__radio-button"
        v-for="option in selectOption"
        :key="option.value"
        :class="{ checked: formData.poste === option.value }"
      >
        <input
          type="radio"
          :id="option.value"
          :value="option.value"
          v-model="formData.poste"
          :class="{ checked: checked }"
        />
        <label :for="option.value">{{ option.value }}</label>
      </div>

      <!-- Nom -->
      <legend>
        <span class="formulaire-contact__topic-number">02. </span>Quel est votre
        nom ?
      </legend>
      <input type="text" id="name" v-model="formData.name" />

      <!-- Email -->
      <legend>
        <span class="formulaire-contact__topic-number">03. </span>Quel est votre
        email ?
      </legend>
      <input type="email" id="email" v-model="formData.email" />

      <!-- numero de telephone -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Quel est votre
        numéro de téléphone ?
      </legend>
      <input type="tel" id="tel" v-model="formData.tel" />

      <!-- numero de telephone -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Quel sont vos
        disponibilités pour une première discussion ?
      </legend>
      <input type="datetime-local" id="meeting" v-model="formData.meeting" />

      <!-- préférence de communication -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Vous êtes
        plutôt email ou téléphone ?
      </legend>
      <label
        for="preference"
        class="switch-label"
        :class="{ notChecked: !formData.preference }"
      >
        <span class="switch-switch">Téléphone</span>
      </label>
      <input type="checkbox" id="preference" v-model="formData.preference" />
      <label
        for="preference"
        class="switch-label"
        :class="{ isChecked: formData.preference }"
      >
        <span class="switch-switch">Email</span>
      </label>
      {{ formData }}
      <button type="submit">Envoyer</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FormData } from "@/models/FormData";

const formData = ref<FormData>({
  poste: "",
  email: "",
  name: "",
  tel: "",
  meeting: "",
  preference: false,
});

const test = () => {
  console.log(formData.value);
};
const selectOption = ref([
  { value: "serveur.se", optionName: "serveur.se" },
  { value: "runner", optionName: "runner" },
  { value: "mixologue", optionName: "mixologue" },
  { value: "chef.fe de salle", optionName: "chef.fe de salle" },
  { value: "commit de cuisine", optionName: "commit de cuisine" },
]);
</script>

<style lang="scss" scoped>
.formulaire-contact {
  // display: flex;
  // justify-content: center;
  // gap: $sm;
  &__topic-number {
    font-size: $l;
    font-weight: $bold;
    font-family: $poppins;
  }
  &__radio-button {
    display: flex;
    margin-top: $sm;
    position: relative;
    width: fit-content;
    border-radius: $m;
    padding: 0.5 * $xs $sm;
    border: 1px solid;
    transition: background-color 0.3s ease;
    &:hover {
      width: fit-content;
      transition: background-color 0.3s ease;
      background-color: $black;
      color: $white;
      border-radius: $m;
      padding: 0.5 * $xs $sm;
      border: 1px solid;
    }
    & label {
      cursor: pointer;
    }
    &.checked {
      transition: background-color 0.3s ease;
      background: $black;
      color: $white;
    }
    input[type="radio"] {
      display: none;
    }
  }
  .notChecked {
    color: green;
  }
  .isChecked {
    color: red;
  }
}
</style>
