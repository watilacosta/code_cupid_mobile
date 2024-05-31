<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1 class="title">Enter your code</h1>

      <form @submit.prevent="submitForm">
        <ion-row class="ion-margin-horizontal">
          <ion-col size="full">
            <ion-input
              v-model="inputCode"
              color="light"
              fill="outline"
              :maxlength="4"
              error-text="invalid code">
            </ion-input>
          </ion-col>
        </ion-row>
        <ion-row class="ion-padding-top"> 
          <ion-col>
            <div class="ion-text-center">
              <ion-button
                @click="resendCode"
                fill="clear"
                color="medium"
                shape="round"
                mode="md"
              >
                Resend Code
              </ion-button>
            </div>
          </ion-col>
        </ion-row>

        <ion-row> 
          <ion-col>
            <div class="ion-text-center ion-margin-top btn-confirm">
              <ion-button
                type="submit"
                color="primary"
                expand="full"
                shape="round"
                size="large"
                mode="md"
              >
                Confirm
              </ion-button>
            </div>
          </ion-col>
        </ion-row>
        <ion-row> 
          <ion-col>
            <div class="ion-text-center">
              <ion-button
                @click="clearInputs"
                color="light"
                expand="full"
                shape="round"
                size="large"
                mode="md"
              >
                Clear
              </ion-button>
            </div>
          </ion-col>
        </ion-row>
      </form>
    </ion-content>

    <ion-alert
      :header="header"
      :message="message"
      :buttons="['Ok']"
      :is-open="isOpen"
      @didDismiss="setOpen(false)"
    ></ion-alert>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonInput,
  IonRow,
  IonCol,
  useBackButton,
  useIonRouter,
  IonButton,
  IonAlert
} from '@ionic/vue'
import { ref } from 'vue';
import api from '@/utils/api'
import storage from '@/utils/db';
import { useAuthStore } from '@/store/auth'

const ionRouter = useIonRouter();
const message = ref('')
const header = ref('')
const isOpen = ref(false)

const authStore = useAuthStore()

useBackButton(10, () => {
  ionRouter.navigate('/confirm-code', 'forward', 'replace')
})

const inputCode = ref('')

const clearInputs = () => inputCode.value = ''

interface Options {
  message: string,
  header: string,
  isOpen: boolean,
}

const setOpen = (state: boolean) => isOpen.value = state 

const submitForm = async () => {
  if (inputCode.value === '') {
    return;
  }

  const payload = {
    confirmation_code: inputCode.value,
    params: {},
    method: 'PATCH'
  }

  await confirmAccount(payload)
}

const confirmAccount = async (payload: Object) => {
  await api.patch('/auth/confirm_account', payload)
    .then((response) =>{
      const options: Options = {
        message: response.data.message,
        header: 'Welcome',
        isOpen: true
      }

      updateAuthStore(response.data.token)
      clearInputs()
      openModal(options)
      ionRouter.push('/')
    })
    .catch((error) => {
      const options: Options = {
        message: error.response.data.message,
        header: 'Try again!',
        isOpen: true
      }

      openModal(options)
    })
}

const resendCode = async () => {
  const user = await storage.get('user')

  api.post('auth/resend_code', {
    user: {
      email: user.email
    }
  })
  .then((response) => {
    const options: Options = {
      message: 'Copie o código enviado para seu dispositivo e cole no campo de confirmação.',
      header: response.data.message,
      isOpen: true
    }
    openModal(options)
  })
  .catch((error) => {
    const options: Options = {
      message: 'Informa o erro ao administrador do sistema',
      header: error.response.data.error,
      isOpen: true
    }
    openModal(options)
  })
}

const openModal = (options: Options) => {
  message.value = options.message,
  header.value = options.header,
  isOpen.value = options.isOpen
}

const updateAuthStore = (token: string) => {
  authStore.setAuthToken(token);
  authStore.authenticate();
};
</script>

<style scoped>
.title {
  color: #303030;
  font-size: 32px;
  margin-top: 10%;
  margin-bottom: 30%;
}

ion-content {
  --ion-background-color: #fff
}

ion-input {
  --background: #f7f7f7;
  --color: #353535;
  --border-width: 0;
  text-align: center;
  font-size: xx-large;
  letter-spacing: 1.8em;
}

.btn-confirm {
  margin-top: 30%;
}
</style>@/utils/apibkp