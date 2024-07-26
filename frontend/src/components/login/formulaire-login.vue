<template>
  <div>
    <Form @submit="useUserLogin(loginVerification)">
      <legend for="Email">Adresse Mail :</legend>
      <Field
        type="text"
        v-model="loginVerification.email"
        name="email"
        id="Email"
        placeholder="Entrez votre email..."
        required
      />
      <legend for="Password">Mot de passe :</legend>
      <Field
        type="password"
        v-model="loginVerification.password"
        name="password"
        id="Password"
        placeholder="Entrez votre mot de passe..."
        required
      />
      <button type="submit" class="formulaire-login__submit">
        Se connecter
      </button>
      <router-link to="/espace-enregistrement"
        ><h5>Pas de compte ? <b>Enregistrez-vous ici</b></h5></router-link
      >
    </Form>
  </div>
</template>

<script setup lang="ts">
import { useLogin } from "@/composables/UseLogin";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";

const { useUserLogin } = useLogin();
const loginVerification = ref({ email: "", password: "" });
</script>

<style lang="scss" scoped>
.formulaire-login {
  min-height: 800px;
  &__submit {
    width: 100%;
    margin-top: $l;
    background: $forth-color;
    color: $white;
    padding: $sm;
    border-radius: 0.5 * $xs;
    font-weight: $bold;
    text-transform: uppercase;
    font-family: $poppins;
    border: none;
    cursor: pointer;
  }
}
a {
  &:-webkit-any-link {
    text-decoration: none;
  }
  h5 {
    font-weight: $normal;
    cursor: pointer;
    color: $black;
    text-decoration: none;
  }
}
legend {
  text-align: left;
  font-size: $sm;
  font-weight: $semi-bold;
  font-family: $poppins;
  margin: $sm 0;
}
input {
  height: $xl;
  opacity: 0.3;
  position: relative;
  width: calc(100% - $m);
  text-align: left;
  padding-left: $sm;
  font-size: $sm;
  border: 1px solid #505050;
  border-radius: 0.3 * $sm;
  &::placeholder {
    color: #505050;
  }
}
</style>
