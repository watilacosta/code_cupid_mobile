<template>
    <ion-page>
      <ion-content :fullscreen="true" color="light">
        <ProfileTopCard :user="user"/>
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
        <form @submit.prevent="updateProfile" class="ion-padding-horizontal">
          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Username"
                class="ion-margin-bottom"
                type="text"
                id="username"
                label-placement="floating"
                v-model="user.username"
                :disabled="accountDisable"
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
                id="phone"
                mode="md"
                label-placement="floating"
                v-model="user.phone_number"
                :disabled="accountDisable"
              />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Birthdate"
                class="ion-margin-bottom"
                type="date"
                id="birthdate"
                label-placement="floating"
                v-model="computedBirthdate"
                :disabled="accountDisable"
              />

              <ion-datetime
                presentation="date"
              />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-input
                fill="outline"
                label="Email"
                label-placement="floating"
                id="email"
                v-model="user.email"
                :disabled="accountDisable"
              />
            </ion-col>
          </ion-row>
          <ion-button
            fill="solid"
            expand="block"
            shape="round"
            v-show="btnAccountShow"
            :strong="true"
            type="submit"
            class="ion-color-primary ion-margin-top"
          >
            Save
          </ion-button>
        </form>

        <PlanSettings />
        <DiscoverySettings />

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

        <ion-toast
          :is-open="isOpen"
          message="Your information has been updated successfully."
          :duration="4000"
          position="top"
          :icon="notificationsOutline"
          @didDismiss="setOpen(false)"
        />
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  IonToast,
  onIonViewWillEnter,
  useIonRouter,
  IonDatetime
} from '@ionic/vue';
import { notificationsOutline } from "ionicons/icons";

import { useAuthStore } from '@/store/auth';
import { useUserStore } from '@/store/user';
import { User } from '@/models/User';
import { computed, ref } from 'vue';
import moment from 'moment';
import ProfileTopCard from "@/components/ProfileTopCard.vue";
import UserService from "@/services/UserService";
import PlanSettings from '@/components/PlanSettings.vue';
import DiscoverySettings from "@/components/DiscoverySettings.vue";

const authStore = useAuthStore()
const userStore = useUserStore()
const ionRouter = useIonRouter()

const service = UserService

const user = ref({} as User)
const accountDisable = ref(true)
const btnAccountShow = ref(false)
const isOpen = ref(false)

const setOpen = (state: boolean) => isOpen.value = state

const logout = () => {
  authStore.logout()
  ionRouter.replace('/login')
}

const computedBirthdate = computed({
  get: () => moment(user.value.birthdate).format('YYYY/MM/DD'),
  set: (inputValue) => user.value.birthdate = new Date(inputValue)
})

const fetchCurrentUser = () => user.value = userStore.getCurrentUser

const editAccount = (() => {
  toggleInputsEnabled()
})

const toggleInputsEnabled = (() => {
  accountDisable.value = !accountDisable.value
  btnAccountShow.value = !btnAccountShow.value
})

const updateProfile = async () => {
  await service.update(user.value as User)
    .then((response) => {
      user.value = response.data.user
      isOpen.value = true
      toggleInputsEnabled()
    }).catch((error) => {
      console.log('ERROR', error)
    })
}

const deleteAccount = (() => console.log('delete account...'))

onIonViewWillEnter(() => {
  fetchCurrentUser()
})
</script>
  
<style scoped>
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