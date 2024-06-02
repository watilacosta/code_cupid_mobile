<template>
  <ion-page>
    <PageTitle title="Menage Subscription" />

    <ion-content class="ion-padding" color="light">
      <ion-button
        @click="() => router.go(-1)"
        shape="round"
        fill="clear"
        color="medium"
      >
        <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
      </ion-button>
      <CurrentPlaneCard />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import router from "@/router";
import { arrowBack } from "ionicons/icons";
import {
  IonButton,
  IonIcon,
  IonContent,
  IonPage,
} from "@ionic/vue";
import CurrentPlaneCard from "@/components/CurrentPlaneCard.vue";
</script>

<style scoped>

</style>