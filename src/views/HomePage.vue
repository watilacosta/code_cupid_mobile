<template>
  <ion-page>
    <ion-content :fullscreen="true" color="light">
      <ion-row class="ion-justify-content-center ion-align-items-center">
        <ion-thumbnail>
          <ion-img
              src="resources/logo.png"
              alt="logo code cupid"
              class="ion-margin-vertical"
          >
          </ion-img>
        </ion-thumbnail>
      </ion-row>

      <div class="card-container ion-margin-horizontal">
        <ion-card class="ion-no-margin">
          <img src="/resources/myphoto.jpg" alt="timeline-photo"/>
          <div class="card-text">Wátila, 36</div>
        </ion-card>
      </div>

      <ion-grid>
        <ion-row class="ion-justify-content-around ion-margin-vertical ion-padding-vertical">
          <ion-col size="3" class="ion-padding-start ion-margin-start">
            <ion-button shape="round" color="danger">
              <ion-icon :icon="closeOutline" slot="icon-only" size="large"></ion-icon>
            </ion-button>
          </ion-col>
          <ion-col size="3" class="ion-padding-start ion-margin-start">
            <ion-button shape="round">
              <ion-icon :icon="heartSharp" slot="icon-only" size="large"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonThumbnail,
  IonImg,
  IonCard,
  IonIcon,
  IonButton,
} from '@ionic/vue';
import { closeOutline, heartSharp } from "ionicons/icons";
</script>

<style scoped>
ion-thumbnail {
  margin-top: 5%;
  --size: 120px;
  --border-radius: 1px;
  height: 50px;
}

ion-button {
  width: 64px;
  height: 64px;
}

.card-container {
  height: 70%;
  margin-top: 10%;
  margin-bottom: 1%;
}

.card-container ion-card {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 5%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-container ion-card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5%;
}

.card-text {
  position: absolute;
  bottom: 30px;
  left: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
}
</style>
