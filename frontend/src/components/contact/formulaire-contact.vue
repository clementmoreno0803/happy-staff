<template>
  <Form @submit="sendFormulaireContact(formData)">
    <div class="formulaire-contact">
      <!-- Profession -->
      <legend>
        <span class="formulaire-contact__topic-number">01.</span>Dans quel type
        de poste vous sentez-vous le plus à l’aise ?
      </legend>
      <div class="formulaire-contact__radio-button">
        <div
          class="formulaire-contact__radio-button__item"
          v-for="option in selectOption"
          :key="option.value"
          :class="{ checked: formData.poste === option.value }"
        >
          <Field
            type="radio"
            :id="option.value"
            :value="option.value"
            v-model="formData.poste"
            :class="{ checked: formData.poste === option.value }"
            :name="option.value"
          />
          <label :for="option.value">{{ option.value }}</label>
        </div>
        <ErrorMessage name="poste" />
      </div>
      <!-- Nom -->
      <legend>
        <span class="formulaire-contact__topic-number">02. </span>Quel est votre
        nom ?
      </legend>
      <Field
        type="text"
        name="name"
        id="name"
        rules="required"
        v-model="formData.name"
      />
      <ErrorMessage name="name" />

      <!-- Email -->
      <legend>
        <span class="formulaire-contact__topic-number">03. </span>Quel est votre
        email ?
      </legend>
      <Field
        type="text"
        name="email"
        id="email"
        v-model="formData.email"
        rules="required|email"
      />
      <ErrorMessage name="email" />
      <!-- numero de telephone -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Quel est votre
        numéro de téléphone ?
      </legend>
      <Field
        type="text"
        id="tel"
        name="tel"
        v-model="formData.tel"
        rules="required|tel"
      />
      <ErrorMessage name="tel" />

      <!-- numero de telephone -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Quel sont vos
        disponibilités pour une première discussion ?
      </legend>
      <Field
        type="datetime-local"
        name="meeting"
        id="meeting"
        class="formulaire-contact__datetime-local"
        v-model="formData.meeting"
        rules="required"
      />
      <ErrorMessage name="meeting" />

      <!-- préférence de communication -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Vous êtes
        plutôt email ou téléphone ?
      </legend>
      <label
        for="preference"
        class="switch-label"
        :class="{ notChecked: formData.preference == 'Téléphone' }"
      >
        <span class="switch-switch">Téléphone</span>
      </label>
      <Field
        type="checkbox"
        name="preference"
        id="preference"
        v-model="formData.preference"
        value="Email"
        unchecked-value="Téléphone"
      />
      <label
        for="preference"
        class="switch-label"
        :class="{ isChecked: formData.preference === 'Email' }"
      >
        <span class="switch-switch">Email</span>
      </label>
      <button type="submit">Envoyer</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { FormData } from "@/models/FormData";
import { defineRule } from "vee-validate";
import { UseFormulaireContact } from "@/composables/UseFormulaireContact";
import { SelectOption } from "@/models/selectOption";

const { sendFormulaireContact } = UseFormulaireContact();

defineRule("required", (value: string) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});
defineRule("email", (value: string) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "This field must be a valid email";
  }
  return true;
});
defineRule("tel", (value: string) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^(0[67]\d{8}|(\+33)[67]\d{8})$/.test(value)) {
    return "Votre numéro de téléphone doit commencer par 06, 07 ou +33";
  }
  return true;
});

const formData = ref<FormData>({
  poste: "",
  email: "",
  name: "",
  tel: "",
  meeting: "",
  preference: "Téléphone",
});

const selectOption = ref<SelectOption[]>([
  { value: "serveur.se", optionName: "serveur.se" },
  { value: "runner", optionName: "runner" },
  { value: "mixologue", optionName: "mixologue" },
  { value: "chef.fe de salle", optionName: "chef.fe de salle" },
  { value: "commit de cuisine", optionName: "commit de cuisine" },
]);
</script>

<style lang="scss" scoped>
.formulaire-contact {
  width: 80vw;
  margin: 0 auto;
  text-align: left;
  input[type="text"],
  input[type="datetime-local"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-bottom: 1px solid #ccc;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 10px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
    &:focus,
    &:hover {
      border-color: #007bff;
    }
  }
  &__topic-number {
    font-size: $l;
    font-weight: $bold;
    font-family: $poppins;
  }
  &__radio-button {
    display: flex;
    // width: 50vw;
    margin: 0 auto;
    justify-content: flex-start;
    gap: 30px;
    &__item {
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
  }
  .notChecked {
    color: green;
  }
  .isChecked {
    color: red;
  }
}
</style>
