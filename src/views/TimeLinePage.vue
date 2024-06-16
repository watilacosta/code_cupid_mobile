<template>
  <ion-page>
    <ion-content :fullscreen="true" color="light">
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

      <div v-for="profile in profiles"
        :key="profile.id"
      >
        <div class="card-container ion-margin-horizontal">
          <ion-card class="ion-no-margin">
            <img src="/resources/myphoto.jpg" alt="timeline-photo"/>
            <div class="card-text">{{ profile.username || 'Guest' }}, {{ profile.age }}</div>
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
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import TimeLineService from '@/services/TimeLineService';
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
  onIonViewWillEnter,
} from '@ionic/vue';
import { closeOutline, funnelOutline, heartSharp } from "ionicons/icons";
import { ref } from 'vue';

const service = TimeLineService;
const profiles = ref([] as Array<Profile>);

interface Profile {
  id: number,
  username: string,
  age: number,
  gender: string
}

const listProfiles = async () => {
  await service.list()
    .then((response) => profiles.value = response.data)
    .catch((error) => console.log(error))
}

onIonViewWillEnter(() => listProfiles())
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

.card-container {
  height: 68%;
  margin-top: 8%;
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
