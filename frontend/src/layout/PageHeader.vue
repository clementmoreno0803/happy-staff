<template>
  <div>
    <nav>
      <img src="@/assets/LOGOHappyStaffHD.webp" class="logo" />
      <div class="navigation">
        <router-link to="/">Home</router-link>
        <router-link v-if="!statut" to="/happy-candidat"
          >Happy Candidat</router-link
        >
        <router-link
          v-if="statut === 'particulier'"
          :to="`/happy-candidat/${user}`"
          >Happy Candidat</router-link
        >
        <router-link to="/nos-offres">Nos Offres</router-link>
        <router-link v-if="!statut" to="/espace-employeur"
          >Espace Employeur</router-link
        >
        <router-link
          v-if="statut === 'entreprise'"
          :to="`/espace-employeur/${user}`"
          >Espace Employeur</router-link
        >
        <router-link to="/espace-contact">Contact</router-link>
      </div>
      <div class="login">
        <router-link v-if="!user" to="/LogIn">Se connecter</router-link>
        <li v-if="user"><a @click="logout">Logout</a></li>
        <router-link to="/espace-enregistrement">
          <span class="enregistrement">S'enregistrer</span>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = ref(sessionStorage.getItem("user"));
const statut = ref(sessionStorage.getItem("statut"));

const logout = () => {
  sessionStorage.clear();
  user.value = "";
  statut.value = "";
  router.push("/login");
};
</script>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  margin: $m auto 30px;
  a {
    &:-webkit-any-link {
      text-decoration: none;
      color: #535353;
    }
    &.router-link-exact-active {
      color: #000000;
      font-weight: bold;
    }
  }

  .navigation {
    gap: 30px;
    display: inline-flex;
  }
  .login {
    gap: 20px;
    display: inline-flex;
    li {
      list-style: none;
      :hover {
        cursor: pointer;
      }
    }
    .enregistrement {
      padding: 8px;
      border-radius: 6px;
      color: white;
      background-color: #000;
    }
  }
}
</style>
