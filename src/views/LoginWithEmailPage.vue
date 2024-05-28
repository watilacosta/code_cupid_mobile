<template>
	<ion-page>
		<ion-content class="ion-padding" color="light">
      <ion-row class="ion-justify-content-center ion-align-items-center">
        <ion-thumbnail>
          <ion-img 
            src="resources/logo.png"
            alt="logo code cupid"
            class="ion-margin-vertical"
          >
          </ion-img>
        </ion-thumbnail>
      </ion-row>
			<ion-row class="ion-justify-content-center ion-align-items-center ion-margin-bottom">
        <h1 class="title">Sign in</h1>
      </ion-row>

      <form @submit.prevent="handleSubmit">
        <ion-row>
          <ion-col>
            <ion-input
              v-model="email"
              type="email"
              color="light"
              fill="outline"
              label-placement="stacked"
              placeholder="Email"
              error-text="Invalid Format email"
            >
            <ion-icon slot="start" :icon="mailSharp" aria-hidden="true" />
            </ion-input>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-input
              v-model="password"
              type="password"
              color="light"
              fill="outline"
              label-placement="stacked"
              placeholder="Password"
              error-text="Invalid password"
            >
            <ion-icon slot="start" :icon="lockClosed" aria-hidden="true" />
            </ion-input>
          </ion-col>
        </ion-row>

        <ion-row class="ion-margin-top">
          <ion-col>
            <ion-button
              type="submit"
              fill="solid"
              color="primary"
              expand="full"
              shape="round"
              size="large"
              mode="md"
            >
              Login
            </ion-button>
          </ion-col>
        </ion-row>
      </form>

      <ion-row> 
        <ion-col>
          <div class="ion-text-center">
            <ion-button
              @click="() => router.replace('/sign-up')"
              fill="clear"
              color="medium"
              expand="full"
              shape="round"
              size="large"
              mode="md"
            >
             Register
            </ion-button>
          </div>
        </ion-col>
      </ion-row>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/store/auth';
import api from '@/utils/api';
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonInput,
  IonThumbnail,
  IonImg,
  IonIcon,
  IonButton,
  useIonRouter
} from '@ionic/vue'
import { lockClosed, mailSharp } from 'ionicons/icons';
import { ref } from 'vue';

let email = ref('')
let password = ref('')

const authStore = useAuthStore()
const ionRouter = useIonRouter()

interface LoginPayload  {
  user: {
    email: string,
    password: string
  }
}

const handleSubmit = async () => {
  const payload: LoginPayload = {
    user: {
      email: email.value,
      password: password.value
    }
  }

  await login(payload)
}

const login = async (payload: LoginPayload) => {
  await api.post('auth/login', payload)
    .then((response) => {
      authStore.setAuthToken(response.data.token)
      authStore.authenticate()
      ionRouter.replace('/')
    })
    .catch((error) => {
      console.log(error.response.data.error)
    })
}
</script>

<style scoped>
.title {
  color: #303030;
  font-size: 32px;
  margin-top: 10%;
}

ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}

ion-thumbnail {
  --size: 130px;
  --border-radius: 90px;
  margin-bottom: 5%;
  margin-top: 20%;
}
</style>