<template>
  <div class="home-view__container">
    <BasicPresentation :backgroundUrl="urlImg">
      <template #content>
        <div class="home-view__basic-presentation__container">
          <div>
            <h2 BasicThemeCard>
              Tout ce dont vous avez besoin pour que ça se passe bien
            </h2>
            <p class="home-view__basic-presentation__container__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              aliquid exercitationem laboriosam quasi obcaecati aperiam dolores
              libero sequi, perferendis velit officiis debitis quidem eligendi
              voluptatum aliquam voluptate reprehenderit odit temporibus!
            </p>
          </div>
          <div class="home-view__basic-presentation__container__buttons">
            <router-link to="/nos-offres" class="recherche"
              >Je recherche un emploi</router-link
            >
            <router-link to="/nos-offres" class="depot"
              >Je dépose une offre</router-link
            >
          </div>
        </div>
      </template>
    </BasicPresentation>
    <Partner></Partner>
    <div class="home-view__theme">
      <BasicOptionCard
        v-for="card in themeCardContent"
        :key="card.title"
        :backgroundColor="card.backgroundColor"
      >
        <template #title>
          <h2>{{ card.title }}</h2>
        </template>
        <template #desctiption
          ><span>{{ card.description }}</span></template
        >
      </BasicOptionCard>
    </div>
    <PresentationGrid />
  </div>
</template>

<script setup lang="ts">
import BasicPresentation from "@/commun/basic-presentation.vue";
import chefImage from "@/assets/background-image/chef.jpg";
import Partner from "@/components/home/partner-banner.vue";
import { ref } from "vue";
import BasicOptionCard from "../commun/basic-option-card.vue";
import PresentationGrid from "../components/home/presentation-grid.vue";
import { BasicThemeCard } from "@/models/BasicThemeCard";

const themeCardContent = ref<BasicThemeCard[]>([
  {
    title: "Recherche d'emploi",
    description:
      "Vous êtes à la recherche d'une opportunité ? Si comme nous, vous êtes convaincus de l’importance à attacher à l'épanouissement professionnel, Happy Staff vous met en relation avec un employeur avec qui vous pourrez atteindre vos objectifs.",
    backgroundColor: " #FFDF58 ",
  },
  {
    title: "Conseil en gestion",
    description:
      "Besoin d'un regard extérieur pour optimiser votre fonctionnement dans le but d’améliorer la gestion de vos équipes et d'augmenter votre rentabilité ? Happy Staff est la solution pour vous aider à atteindre vos objectifs.",
    backgroundColor: " #00AD40 ",
  },
  {
    title: "Recherche de candidat",
    description:
      "Vous êtes à la recherche de la perle rare qui va se fondre dans votre culture d'entreprise afin de créer une équipe épanouie au quotidien ? Happy Staff vous fait rencontrer des candidats de caractère qui ont un véritable projet professionnel.",
    backgroundColor: " #004AAD ",
  },
]);
const urlImg = ref(chefImage);
</script>

<style lang="scss" scoped>
.home-view {
  &__container {
    width: 95vw;
    height: auto;
    margin: 0 auto;
  }
  &__basic-presentation {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: $l $xxl;
      height: 100%;
      & h2 {
        font-family: $poppins;
        font-size: clamp($l, 3vw, 25rem);
        font-weight: $bold;
        text-align: left;
        line-height: 1.2;
        margin: $l 0;
      }
      &__description {
        margin: 0;
        text-align: left;
        font-size: $sm;
      }
      &__buttons {
        display: flex;
        justify-content: space-between;
        a {
          padding: $sm $xxl;
          font-family: $poppins;
          font-size: $xs;
          font-weight: $bold;
          border-radius: $xs;
          text-transform: uppercase;
          text-decoration: none;
          color: $black;
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
