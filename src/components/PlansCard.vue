<template>
  <ion-card color="light">
    <ion-card-header>
      <ion-card-title>Plans</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-row class="ion-justify-content-center ion-align-items-center">
        <ion-button shape="round" size="large">
          <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        </ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-center ion-align-items-center ion-margin-vertical">
        <h2>Unlimited Likes</h2>
      </ion-row>
      <ion-row class="ion-justify-content-center ion-align-items-center">
        <h3>Send as many likes as you want</h3>
      </ion-row>

      <ion-row class="ion-margin-vertical ion-padding-vertical row-plans">
        <ion-col
          v-for="plan in plans"
          :key="plan.name"
        >
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <h3 class="plan-name">{{ plan.duration_in_months }}</h3>
          </ion-row>
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <h3 class="plan-months">{{ plan.duration_in_months == 1 ? 'Month' : 'Months' }}</h3>
          </ion-row>
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <h3>$ {{ plan.price }}/mo</h3>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonRow,
  IonCol
} from "@ionic/vue";
import { heart } from "ionicons/icons";

defineProps({
  plans: {
    type: Array<any>,
    required: true
  }
})
</script>

<style scoped>
ion-card {
  margin-top: 10%;
  border-radius: 15px;
}

ion-card-title {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
}

ion-button {
  width: 57px;
  height: 57px;
}
h2 {
  font-size: 21px;
  font-weight: bold;
}

h3 {
  font-size: 14px;
}

.plan-name {
  font-size: 29px;
  font-weight: bold;
}

.plan-months {
  font-weight: bold;
}

.row-plans {
  border: 1px solid #e0ac08;
}
</style>
