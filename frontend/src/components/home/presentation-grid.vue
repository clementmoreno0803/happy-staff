<template>
  <div>
    <h2>L’humain au centre de nos préoccupations</h2>
    <div class="presentation-grid">
      <div class="presentation-grid__avantages">
        <div class="presentation-grid__avantages__background-image"></div>
        <div
          class="presentation-grid__avantages__caroussel"
          @mousemove="updateMousePosition"
        >
          <Flicking :options="{ align: 'prev', circular: true }">
            <div
              v-for="value in ourDifference"
              :key="value.id"
              class="presentation-grid__avantages__caroussel__panel"
            >
              <fa :icon="value.icon">
                {{ value.icon }}
              </fa>
              <h3>NOTRE DIFFERENCE</h3>
              <h4>{{ value.title }}</h4>
              <p>{{ value.description }}</p>
            </div>
          </Flicking>
        </div>
      </div>
      <div class="presentation-grid__equipe">
        <div
          v-for="equipe in equipes"
          :key="equipe.name"
          class="presentation-grid__equipe__card"
        >
          <div
            class="presentation-grid__equipe__card__background-image"
            :style="{
              backgroundImage: `url(${equipe.photo})`,
            }"
          ></div>
          <div class="presentation-grid__equipe__description">
            <h3>{{ equipe.name }}</h3>
            <h4>{{ equipe.position }}</h4>
            <p>{{ equipe.presentation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Flicking from "@egjs/vue3-flicking";
import { DifferenceCarousel } from "@/models/DifferenceCarrousel";
import { PositionEnum } from "@/models/enums/PositionEnum";
import { PresentationEquipe } from "@/models/PresentationEquipe";
import orcunImage from "@/assets/fondateurs/orcun.webp";
import candiceImage from "@/assets/fondateurs/candice.webp";

const ourDifference = ref<DifferenceCarousel[]>([
  {
    id: 0,
    icon: "heart",
    title: "Empathie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid exercitationem laboriosam quasi obcaecati aperiam dolores libero sequi, perferendis velit officiis debitis quidem eligendi voluptatum aliquam voluptate reprehenderit odit temporibus!",
  },
  {
    id: 1,
    icon: "bomb",
    title: "Réactivité",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid exercitationem laboriosam quasi obcaecati aperiam dolores libero sequi, perferendis velit officiis debitis quidem eligendi voluptatum aliquam voluptate reprehenderit odit temporibus!",
  },
  {
    id: 2,
    icon: "layer-group",
    title: "Verrouillage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid exercitationem laboriosam quasi obcaecati aperiam dolores libero sequi, perferendis velit officiis debitis quidem eligendi voluptatum aliquam voluptate reprehenderit odit temporibus!",
  },
  {
    id: 3,
    icon: "user",
    title: "Personnalisation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid exercitationem laboriosam quasi obcaecati aperiam dolores libero sequi, perferendis velit officiis debitis quidem eligendi voluptatum aliquam voluptate reprehenderit odit temporibus!",
  },
  {
    id: 4,
    icon: "handshake",
    title: "Accompagnement",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid exercitationem laboriosam quasi obcaecati aperiam dolores libero sequi, perferendis velit officiis debitis quidem eligendi voluptatum aliquam voluptate reprehenderit odit temporibus!",
  },
  {
    id: 5,
    icon: "money-bill",
    title: "Tarifs concurrentiels",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid exercitationem laboriosam quasi obcaecati aperiam dolores libero sequi, perferendis velit officiis debitis quidem eligendi voluptatum aliquam voluptate reprehenderit odit temporibus!",
  },
  {
    id: 6,
    icon: "seedling",
    title: "Vision jeune et tendance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid exercitationem laboriosam quasi obcaecati aperiam dolores libero sequi, perferendis velit officiis debitis quidem eligendi voluptatum aliquam voluptate reprehenderit odit temporibus!",
  },
]);
const equipes = ref<PresentationEquipe[]>([
  {
    photo: orcunImage,
    name: "Orçun KAYA",
    position: PositionEnum.COFONDATEUR,
    presentation:
      "12 ans de métier en restaurationClient, serveur, gérant ou formateur j’ai passé toutes les étapes dans la restauration.Au fil des années, j’ai nourri ma passion avec l’humain, le partage de connaissances et le service. Les attentes d’un client, d’un employeur et d’un candidat n’ont plus de secret pour moi. Je suis au service de l’employeur qui cherche du résultat, au service du candidat qui recherche un épanouissement professionnel ainsi que du client (à table) qui recherche une expérience unique.",
  },
  {
    photo: candiceImage,
    name: "Candice GAUVIGNON",
    position: PositionEnum.COFONDATEUR,
    presentation:
      "5 ans de métier de service et restaurationAprès des études axées sur le service, le commerce, le tourisme et l’événementiel, j’ai découvert le monde de la restauration. Des années passionnantes et pleines de challenges en tant que directrice d’établissement.​Mes missions chez Happy Staff sont l’organisation, la communication et le marketing. Je supervise toute la partie administration et gestion !",
  },
]);

const mouseX = ref(0);
const mouseY = ref(0);

const updateMousePosition = (event: MouseEvent) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

watchEffect(() => {
  document.documentElement.style.setProperty("--mouse-x", `${mouseX.value}px`);
  document.documentElement.style.setProperty("--mouse-y", `${mouseY.value}px`);
});
</script>

<style lang="scss" scoped>
@import url("../../../node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");
.presentation-grid {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;

  &__avantages {
    display: flex;
    width: 100%;
    height: 350px;

    &__background-image {
      border-top-left-radius: $sm;
      border-bottom-left-radius: $sm;
      width: 60%;
      height: 100%;
      background-image: url("@/assets/background-image/we-hear-you.jpg");
      background-size: cover;
      background-position-y: center;
    }
    &__caroussel {
      position: relative;
      cursor: none;
      width: 45%;
      background: $primary-color;
      border-top-right-radius: $sm;
      border-bottom-right-radius: $sm;
      padding: $xl;
      text-align: left;
      &__panel {
        position: relative;
        svg {
          font-size: $m;
          position: absolute;
          right: 0;
        }
        h3 {
          font-size: $l;
          font-weight: $bold;
        }
        h4 {
          text-transform: uppercase;
          font-size: $m;
          font-weight: $bold;
        }
      }
      &::after {
        position: fixed;
        z-index: 999;
        content: "Swipe";
        width: $xl;
        height: $xl;
        opacity: 1;
        font-weight: 800;
        border-radius: 50%;
        border: 1px $black solid;
        padding: 1rem;
        font-size: $sm;
        transform: translate(5px, 5px);
        display: flex;
        justify-content: center;
        align-items: center;
        top: var(--mouse-y, 0);
        left: var(--mouse-x, 0);
        opacity: 0;
        backdrop-filter: blur(3px);
      }
      &:hover::after {
        opacity: 1;
        transition: opacity 0.6s ease-in;
      }
    }
  }
  &__equipe {
    display: flex;
    justify-content: space-between;
    margin-top: $xl;
    gap: $xl;
    &__card {
      display: flex;
      border-radius: $sm;
      background: $primary-color;
      max-height: 400px;
      width: 90vw;
      &__background-image {
        width: 70%;
        height: 100%;
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        background-position-y: 30%;
        background-position-x: center;
      }
    }
    &__description {
      padding: $l;
      text-align: left;
      h3,
      h4 {
        margin: 0;
      }
      width: 90%;
      height: fit-content;
    }
  }
}
</style>
