<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Message</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="light">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Message</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Message page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
