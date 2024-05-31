<template>
  <ion-card color="tertiary">
    <ion-card-content>
      <ProfileTitle title="Profile" />
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
          <h2>{{ computedUser.username
              ? computedUser.username
              : computedUser.email}}, {{ computedUser.age }}
          </h2>
        </ion-text>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>
<script setup lang="ts">
import { pencilSharp } from "ionicons/icons";
import {
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonRow,
  IonText,
  IonThumbnail
} from "@ionic/vue";
import { User } from "@/models/User";
import {computed} from "vue";
import ProfileTitle from "@/components/ProfileTitle.vue";

const props = defineProps({
  user: {}
})

const computedUser = computed(() => props.user as User)
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
  --size: 150px;
  --border-radius: 90px;
}

ion-fab {
  margin-right: 25%;
  margin-bottom: 15%;
}

ion-text {
  margin-top: 5%;
}
</style>