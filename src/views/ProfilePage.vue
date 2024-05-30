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
                <h3>{{ user?.username ? user?.username : user?.email}}, {{ user?.age }}</h3>
              </ion-text>
            </ion-row>
          </ion-card-content>
        </ion-card>

        <ion-grid class="ion-padding-horizontal ">
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col size="6">
              <ion-text color="dark">
                <h3>Account Settings</h3>
              </ion-text>
            </ion-col>
            <ion-col size="2">
              <a @click="editAccount" class="link">Edit</a>
            </ion-col>
          </ion-row>
        </ion-grid>

        <form class="ion-padding-horizontal">
          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Username"
                class="ion-margin-bottom"
                type="text"
                label-placement="floating"
                :value="user?.username"
                :disabled="true"
              />
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Phone number"
                class="ion-margin-bottom"
                type="text"
                label-placement="floating"
                :value="user?.phone_number"
                :disabled="true"
              />
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Birthdate"
                class="ion-margin-bottom"
                label-placement="floating"
                :value="computedDate"
                :disabled="true"
              />
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Email"
                label-placement="floating"
                :value="user?.email"
                :disabled="true"
              />
            </ion-col>
          </ion-row>
        </form>

        <ion-grid class="ion-padding-horizontal ">
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col size="6">
              <ion-text color="dark">
                <h3>Plan Settings</h3>
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>

        <form class="ion-padding-horizontal">
          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Current Plan"
                type="text"
                label-placement="floating"
                value="Free"
                :disabled="true"
              />
            </ion-col>
          </ion-row>
        </form>

        <ion-grid class="ion-padding-horizontal ">
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col size="12">
              <ion-text color="dark">
                <h3>Discovery Settings</h3>
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>

        <form class="ion-padding-horizontal">
          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Location"
                class="ion-margin-bottom"
                type="text"
                label-placement="floating"
                value="Brasil"
                :disabled="true"
              />
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Language"
                class="ion-margin-bottom"
                type="text"
                label-placement="floating"
                value="Português BR"
                :disabled="true"
              />
            </ion-col>
          </ion-row>
          
          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Show Me"
                class="ion-margin-bottom"
                type="text"
                label-placement="floating"
                value="Women"
                :disabled="true"
              />
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-range
                @ionChange="onAgeRangeChange"
                :dual-knobs="true"
                :value="{ lower: minAgeRange, upper: maxAgeRange }"
                :min="18"
                :max="100"
                :pin="true"
                class="ion-margin-horizontal"
                aria-label="Age Range"
                label-placement="stacked"
                label="Age Range"
                mode="md"
              />
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-range
                @ionChange="onDistanceChange"
                :min="1"
                :max="200"
                :pin="true"
                aria-label="Max Distance"
                label-placement="stacked"
                label="Maximum distance (Km)"
                class="ion-margin-horizontal"
              />
            </ion-col>
          </ion-row>
        </form>

        <ion-button
          @click="logout"
          fill="outline"
          expand="block"
          :strong="true"
          class="ion-margin-horizontal logout"
        >
          Logout
        </ion-button>
        <ion-button
          @click="deleteAccount"
          fill="outline"
          expand="block"
          :strong="true"
          class="ion-margin-horizontal ion-margin-bottom delete-account"
        >
          Delete Account
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
  IonCol,
  IonGrid,
  IonFab,
  IonFabButton,
  IonIcon,
  IonText,
  IonInput,
  IonRange,
  onIonViewWillEnter,
} from '@ionic/vue';

import { useAuthStore } from '@/store/auth';
import { pencilSharp } from 'ionicons/icons';
import { useUserStore } from '@/store/user';
import { User } from '@/models/User';
import { computed, ref } from 'vue';
import moment from 'moment';

const authStore = useAuthStore()
const userStore = useUserStore()
const iontRouter = useIonRouter()

let user = ref({} as User | null)
let minAgeRange = ref(18)
let maxAgeRange = ref(50)
let maxDistance = ref(200)

const logout = () => {
  authStore.logout()
  iontRouter.replace('/login')
}

const computedDate = computed(() => moment(user.value?.birthdate).format('DD/MM/YYYY'))

const fetchCurrentUser = () => user.value = userStore.getCurrentUser
const editAccount      = (() => console.log('Edit Account'))
const deleteAccount    = (() => console.log('delete account...'))

const onAgeRangeChange = ({ detail }: any) => {
  minAgeRange.value = detail.value.lower
  maxAgeRange.value = detail.value.upper
};

const onDistanceChange = ({ detail }: any) => {
  maxDistance.value = detail.value
}

onIonViewWillEnter(() => {
  fetchCurrentUser()
})


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

ion-button {
  --border-color: #d1d1d1;
}

ion-button.logout {
  color: #2f2f2f;
  margin-top: 5%;
}

ion-button.delete-account {
  color: #c5000f;
  margin-top: 3%;
}

.link {
  font-size: 16px;
  color: #247DCF;
}

ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  transform: scale(1.01);

  top: -25px;
}
</style>