<template>
  <div>
    <nav>
      <img src="@/assets/LOGOHappyStaffHD.webp" class="logo" />
      <div class="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/happy-candidat/:id">Happy Candidat</router-link>
        <router-link to="/nos-offres">Nos Offres</router-link>
        <router-link to="/espace-employeur/:id">Espace Employeur</router-link>
        <router-link to="/espace-contact">Contact</router-link>
      </div>
      <div class="login">
        <router-link to="/LogIn">Se connecter</router-link>
        <router-link to="/espace-enregistrement">
          <span class="enregistrement">S'enregistrer</span>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  margin: 0 auto 30px;
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
    .enregistrement {
      padding: 8px;
      border-radius: 6px;
      color: white;
      background-color: #000;
    }
  }
}
</style>
