<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Profile</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-button color="primary" @click="logout">
          Log out
        </ion-button>
        <ExploreContainer name="Profile page" />
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
useIonRouter
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore()
const iontRouter = useIonRouter()

const logout = () => {
  authStore.logout()
  iontRouter.replace('/login')
}
</script>
  