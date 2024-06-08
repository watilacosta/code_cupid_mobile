<template>
  <ion-grid class="ion-padding-horizontal ">
    <ion-row class="ion-justify-content-between ion-align-items-center">
      <ion-col size="6">
        <ion-text color="dark">
          <h3>Plan Settings</h3>
        </ion-text>
      </ion-col>
    </ion-row>
  </ion-grid>
  <form class="ion-padding-horizontal">
    <ion-row>
      <ion-col>
        <ion-input
          id="inp-current-plan"
          fill="outline"
          label="Current Plan"
          type="text"
          label-placement="floating"
          readonly
          :value="currentPlan"
        >
          <ion-button
            @click="router.push('/manage-subscription')"
            fill="clear"
            slot="end"
            aria-label="Show/hide"
            shape="round"
          >
            <ion-icon slot="icon-only" :icon="openOutline" aria-hidden="true"></ion-icon>
          </ion-button>
        </ion-input>
      </ion-col>
    </ion-row>
  </form>
</template>
<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonText,
  IonIcon,
  IonButton
} from '@ionic/vue'
import { openOutline } from "ionicons/icons";
import router from '@/router';

defineProps({
  currentPlan: String
})
</script>
<style scoped>
ion-text {
  margin-top: 3%;
}

ion-button {
  --border-color: #d1d1d1;
}

ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  transform: scale(1.01);

  top: -25px;
}
</style>