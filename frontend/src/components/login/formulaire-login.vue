<template>
  <div>
    <Form>
      <legend for="Email">Adresse Mail :</legend>
      <Field
        type="text"
        v-model="loginVerification.email"
        name="email"
        id="Email"
      />
      <legend for="Password">Mot de passe :</legend>
      <Field
        type="password"
        v-model="loginVerification.password"
        name="password"
        id="Password"
      />
      <button type="submit">Se connecter</button>
    </Form>
    {{ loginVerification }}
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";

const loginVerification = ref({ email: "", password: "" });
</script>

<style scoped>
legend {
  text-align: left;
}
input {
  width: 100%;
  text-align: left;
}
</style>
