<template>
  <ion-page>
    <ion-content :fullscreen="true" color="light">
      <LoaderBar v-if="showLoaderBar" />
      <TimeLineHeader />
      <div
        v-if="currentProfile"
        class="card-container ion-margin-horizontal"
      >
        <SwipeCard @swipeEnd="handleSwipeEnd" :key="currentProfile.id">
          <ion-card class="ion-no-margin ion-no-padding">
            <img
              class="photo"
              :src="currentProfile.photoUrl || '/resources/myphoto.jpg'"
              alt="timeline-photo"
            />
            <div class="card-text">
              {{ currentProfile.username || 'Guest' }},
              {{ currentProfile.age }}
            </div>
          </ion-card>
        </SwipeCard>
        <ion-grid>
          <ion-row class="ion-justify-content-around ion-margin-vertical
            ion-padding-vertical"
          >
            <ion-col size="3" class="ion-padding-start ion-margin-start">
              <ion-button shape="round" color="danger">
                <ion-icon
                  :icon="closeOutline"
                  slot="icon-only"
                  size="large">
                </ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="3" class="ion-padding-start ion-margin-start">
              <ion-button shape="round">
                <ion-icon
                  :icon="heartSharp"
                  slot="icon-only"
                  size="large">
                </ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
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
  IonIcon,
  IonButton,
  IonCard,
  onIonViewWillEnter,
} from '@ionic/vue';
import { closeOutline, heartSharp } from "ionicons/icons";
import {computed, ref} from 'vue';
import LoaderBar from "@/components/LoaderBar.vue";
import SwipeCard from "@/components/SwipeCard.vue";
import TimeLineHeader from "@/components/TimeLineHeader.vue";
import TimeLineService from '@/services/TimeLineService';
import { Profile } from "@/models/Profile";
import {useTimelineProfiles} from "@/store/timeline_profiles";

const service = TimeLineService;
const profiles = ref([] as Array<Profile>);
const showLoaderBar = ref(false)
const currentIndex = ref(0)

const profileStore = useTimelineProfiles()

const currentProfile = computed(() => profiles.value[currentIndex.value])

const listProfiles = async () => {
  await service.list()
    .then((response) => {
      profileStore.setProfiles(response.data);
      profiles.value = profileStore.listProfiles
    })
    .catch((error) => console.log(error))
    .finally(() => showLoaderBar.value = false)
}

const handleSwipeEnd = () => {
  if (currentIndex.value < profiles.value.length - 1) {
    currentIndex.value += 1;
    profiles.value = profileStore
      .listProfiles
      .filter((_, index) => index > (currentIndex.value - 1));
  } else {
    alert('Sem perfis.');
  }
}

onIonViewWillEnter(() => {
  showLoaderBar.value = true
  listProfiles()
})
</script>

<style scoped>
ion-card {
  user-select: none;
  will-change: transform;
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
  overflow: hidden;
}

.card-container ion-card img {
  object-fit: cover;
  width: 100%;
  min-height: 100%;
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

.photo {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 5%;
}
</style>
