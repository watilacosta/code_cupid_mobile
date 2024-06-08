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
                @click="toggleDatePicker()"
                v-model="computedBirthdate"
                :disabled="accountDisable"
                readonly
                fill="outline"
                label="Birthdate"
                class="ion-margin-bottom"
                type="date"
                id="birthdate"
                label-placement="floating"
              />
            </ion-col>
          </ion-row>
          <ion-datetime
            v-if="datetimeOpen"
            v-model="computedBirthdate"
            ref="datetime"
            :prefer-wheel="true"
            presentation="date"
            color="primary"
            id="datetime"
          >
            <span slot="title">Select your Birthdate</span>
            <ion-buttons slot="buttons">
              <ion-button color="primary" @click="cancelDatetime()">Cancel</ion-button>
              <ion-button color="primary" @click="confirmDatetime()">Done</ion-button>
            </ion-buttons>
          </ion-datetime>
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
          <ion-grid class="ion-margin-vertical">
            <ion-row class="ion-justify-content-evenly ion-align-items-center">
              <ion-col size="3" class="col-gender">
                <ion-button
                  id="btnFemale"
                  shape="round"
                  size="large"
                  :color="genderColor('female')"
                  @click="setGender('female')"
                  :disabled="accountDisable"
                >
                  <ion-icon slot="icon-only" :icon="maleOutline"></ion-icon>
                </ion-button>
                <ion-text class="ion-no-margin" :color="accountDisable ? 'medium' : ''">
                  Female
                </ion-text>
              </ion-col>
              <ion-col size="3" class="col-gender">
                <ion-button
                  id="btnMale"
                  shape="round"
                  size="large"
                  :color="genderColor('male')"
                  @click="setGender('male')"
                  :disabled="accountDisable"
                >
                  <ion-icon slot="icon-only" :icon="femaleOutline"></ion-icon>
                </ion-button>
                <ion-text class="ion-no-margin" :color="accountDisable ? 'medium' : ''">
                  Male
                </ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-button
            fill="solid"
            expand="block"
            shape="round"
            v-show="btnAccountShow"
            :strong="true"
            type="submit"
            size="large"
            class="ion-color-primary ion-margin-top"
          >
            Save
          </ion-button>
        </form>

        <PlanSettings :current-plan="currentPlan" />
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
          @didDismiss="openToast(false)"
        />
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  IonToast,
  onIonViewWillEnter,
  useIonRouter,
} from '@ionic/vue';
import { femaleOutline, maleOutline, notificationsOutline } from "ionicons/icons";
import { useAuthStore } from '@/store/auth';
import { useUserStore } from '@/store/user';
import { User } from '@/models/User';
import {computed, ref} from 'vue';
import moment from 'moment';
import ProfileTopCard from "@/components/ProfileTopCard.vue";
import UserService from "@/services/UserService";
import PlanSettings from '@/components/PlanSettings.vue';
import DiscoverySettings from "@/components/DiscoverySettings.vue";
import convertKeysToCamelCase from "@/utils/convertSnakeToCamel";

const service = UserService
const authStore = useAuthStore()
const userStore = useUserStore()
const ionRouter = useIonRouter()

const user = ref({} as User)
const accountDisable = ref(true)
const btnAccountShow = ref(false)
const isOpen = ref(false)
const datetimeOpen = ref(false)
const datetime = ref()
const currentPlan = ref("")

const genderColor = ((gender: string) => {
  return user.value.gender === gender ? 'primary' : 'light'
})

const setGender = ((gender: string) => {
  user.value.gender = gender
})

const setCurrentPlan = (() => {
  const currentSubscriptionData = convertKeysToCamelCase(user.value.subscription)

  currentPlan.value = currentSubscriptionData.planName
})

const computedBirthdate = computed({
  get: () => moment(user.value.birthdate).format('YYYY-MM-DD'),
  set: (inputValue) => {
    const [year, month, day] = inputValue.split('-').map(Number)

    user.value.birthdate = new Date(year, month - 1, day)
  }
})

const cancelDatetime = () => {
  datetime.value.$el.cancel();
  toggleDatePicker()
}

const confirmDatetime = () => {
  datetime.value.$el.confirm();
  toggleDatePicker()
}

const toggleDatePicker = () => {
  datetimeOpen.value = !datetimeOpen.value
  btnAccountShow.value = !btnAccountShow.value
}

const openToast = (state: boolean) => isOpen.value = state

const logout = () => {
  authStore.logout()
  ionRouter.replace('/login')
}

const fetchCurrentUser = () => user.value = userStore.getCurrentUser

const editAccount = (() => {
  toggleInputsEnabled()
})

const toggleInputsEnabled = (() => {
  accountDisable.value = !accountDisable.value
  btnAccountShow.value = !btnAccountShow.value
  datetimeOpen.value = false
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
  setCurrentPlan()
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

ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  transform: scale(1.01);

  top: -25px;
}

ion-datetime {
  margin-left: 1%;
  margin-bottom: 20px;
  min-width: 98%;
  border-radius: 6px;
  box-shadow: rgba(var(--ion-color-tertiary-rgb), 0.2) 0 5px 12px -3px;

  --background: #f6f8fc;
  --background-rgb: 246,248,252;
}

.col-gender {
  justify-content: center;
  text-align: center;
}

.link {
  font-size: 16px;
  color: #247DCF;
}
</style>