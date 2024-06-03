<template>
  <ion-card>
    <ion-card-header>
      <ion-grid class="ion-no-padding ion-no-margin ion-margin-top">
        <ion-row class="ion-justify-content-between ion-align-items-center">
          <ion-col>
            <ion-card-title>Current Plan</ion-card-title>
          </ion-col>
          <ion-col size="auto">{{ props.subscription?.planName }}</ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid class="ion-no-padding ion-no-margin ion-margin-top">
        <ion-row class="ion-justify-content-between ion-align-items-center">
          <ion-col>
            <ion-card-subtitle>Time Period</ion-card-subtitle>
          </ion-col>
          <ion-col size="auto">
            {{ props.subscription?.startDate }} - {{ props.subscription?.endDate }}
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-header>
    <ion-row class="ion-justify-content-center
      ion-align-items-center
      ion-margin-horizontal
      ion-margin-bottom"
    >
      <ion-col class="ion-margin-start">
        <ion-button shape="round" fill="outline">Unsubscribe</ion-button>
      </ion-col>
      <ion-col class="ion-margin-end">
        <ion-button shape="round" class="ion-no-margin">Upgrade</ion-button>
      </ion-col>
    </ion-row>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCol,
  IonRow,
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton
} from "@ionic/vue";
import { Subscription } from "@/models/Subscription";

const props = defineProps({ subscription: Object })
</script>

<style scoped>
ion-card-title {
  font-size: 22px;
  font-weight: bold;
}

ion-card-subtitle {
  font-size: 18px;
  font-weight: bold;
}

ion-button {
  width: 136px;
  height: 40px;
}
</style>
