<template>
  <ion-card>
    <ion-card-header>
      <ion-grid class="ion-no-padding ion-no-margin ion-margin-top">
        <ion-row>
          <ion-col>
            <ion-card-title>Plans</ion-card-title>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-header>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle
} from "@ionic/vue";
</script>

<style scoped>
ion-card {
  margin-top: 10%;
}
</style>
