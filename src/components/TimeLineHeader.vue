<template>
  <ion-row class="ion-justify-content-end">
    <ion-col size="6">
      <ion-thumbnail>
        <ion-img
          src="resources/logo.png"
          alt="logo code cupid"
          class="ion-margin-vertical"
        >
        </ion-img>
      </ion-thumbnail>
    </ion-col>
    <ion-col size="2">
      <ion-button shape="round" fill="clear" color="dark">
        <ion-icon :icon="funnelOutline" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-col>
  </ion-row>
</template>
<script setup lang="ts">
import {funnelOutline} from "ionicons/icons";
import {IonButton, IonCol, IonIcon, IonImg, IonRow, IonThumbnail} from "@ionic/vue";
</script>

<style scoped>
ion-thumbnail {
  margin-top: 5%;
  --size: 120px;
  --border-radius: 1px;
  height: 40px;
}

ion-button {
  width: 64px;
  height: 64px;
}
</style>