<template>
    <ion-page>
      <ion-content :fullscreen="true" color="light">
        <ion-card color="tertiary">
          <ion-card-content>
            <ion-row class="ion-justify-content-center ion-align-items-center ion-margin-vertical">
              <h1 class="title">Profile</h1>
            </ion-row>
            <ion-row class="ion-justify-content-center ion-align-items-center">
              <ion-thumbnail>
                <ion-img 
                  src="resources/logo.png"
                  alt="logo code cupid"
                  class="ion-margin-vertical"
                >
                </ion-img>
              </ion-thumbnail>

              <ion-fab horizontal="end">
                <ion-fab-button size="small" color="light">
                  <ion-icon :icon="pencilSharp" color="primary"></ion-icon>
                </ion-fab-button>
              </ion-fab>
            </ion-row>
            <ion-row class="ion-justify-content-center ion-align-items-center ion-margin-vertical">
              <ion-text color="light" mode="md">
                <h3>Jonh Doe, 26</h3>
              </ion-text>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-button color="primary" @click="logout">
          Log out
        </ion-button>
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonButton,
  useIonRouter,
  IonCard,
  IonCardContent,
  IonThumbnail,
  IonImg,
  IonRow,
  IonFab,
  IonFabButton,
  IonIcon,
  IonText
} from '@ionic/vue';
import { useAuthStore } from '@/store/auth';
import { pencilSharp } from 'ionicons/icons';

const authStore = useAuthStore()
const iontRouter = useIonRouter()

const logout = () => {
  authStore.logout()
  iontRouter.replace('/login')
}
</script>
  
<style scoped>
ion-card {
  border-bottom-left-radius: 200px 25px;
  border-bottom-right-radius: 200px 25px;

  margin: 0;
  min-height: 40%;
  --ion-background-color: #a020f0;
  --ion-background-color-rgb: 160, 32, 240;

  background: radial-gradient(
    rgba(188, 123, 228, 1), rgba(160, 32, 240, 1)
  );
}

ion-thumbnail {
 --size: 122px;
 --border-radius: 90px;
}

.title {
  font-size: 26px;
  margin-top: 10%;
}

ion-fab {
  margin-right: 30%;
  margin-bottom: 10%;
}

ion-text {
  margin-top: 3%;
}
</style>