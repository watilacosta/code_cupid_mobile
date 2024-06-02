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
      <CurrentPlaneCard :subscription="subscription"/>
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
  onIonViewWillEnter,
} from "@ionic/vue";
import CurrentPlaneCard from "@/components/CurrentPlanCard.vue";
import {ref} from "vue";
import {Subscription} from "cypress/types/net-stubbing";

const subscription = ref({} as Subscription)

const showCurrentSubscription = (() => {

})

onIonViewWillEnter(() => {
  showCurrentSubscription()
})
</script>

<style scoped>

</style>