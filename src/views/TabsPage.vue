<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button tab="like" href="/tabs/like">
          <ion-icon aria-hidden="true" :icon="heartOutline" />
        </ion-tab-button>

        <ion-tab-button tab="message" href="/tabs/message">
          <ion-icon aria-hidden="true" :icon="chatbubblesOutline" />
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon aria-hidden="true" :icon="personOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
  IonRouterOutlet
} from '@ionic/vue';

import {
  homeOutline,
  heartOutline,
  chatbubblesOutline,
  personOutline
} from 'ionicons/icons';
</script>
