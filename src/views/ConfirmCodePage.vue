<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1 class="title">Enter your code</h1>

      <form @submit.prevent="submitForm">
        <ion-row class="ion-margin-horizontal">
          <ion-col size="3">
            <ion-input
              v-model="input1"
              class="ion-padding"
              color="light"
              fill="outline"
              :maxlength="1"
              error-text="invalid code">
            </ion-input>
          </ion-col>
          <ion-col size="3">
            <ion-input
              v-model="input2"
              class="ion-padding"
              color="light"
              fill="outline"
              :maxlength="1"
              error-text="invalid code">

            </ion-input>
          </ion-col>
          <ion-col size="3">
            <ion-input
              v-model="input3"
              class="ion-padding"
              color="light"
              fill="outline"
              :maxlength="1"
              error-text="invalid code">

            </ion-input>
          </ion-col>
          <ion-col size="3">
            <ion-input
              v-model="input4"
              class="ion-padding"
              color="light"
              fill="outline"
              :maxlength="1"
              error-text="invalid code">
            </ion-input>
          </ion-col>
        </ion-row>

        <ion-row class="ion-padding-top"> 
          <ion-col>
            <div class="ion-text-center">
              <ion-button
                @click=""
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
import { httpRequest } from '@/utils/api';
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

const ionRouter = useIonRouter();
const message = ref('')
const header = ref('')
const isOpen = ref(false)

useBackButton(10, () => {
  ionRouter.navigate('/confirm-code', 'forward', 'replace')
})

let input1 = ref('')
let input2 = ref('')
let input3 = ref('')
let input4 = ref('')

const clearInputs = () => {
  input1.value = ''
  input2.value = ''
  input3.value = ''
  input4.value = ''
}

interface Options {
  message: string,
  header: string,
  isOpen: boolean,
}

const setOpen = (state: boolean) => isOpen.value = state 

const submitForm = async () => {
  const inputs = [input1.value, input2.value, input3.value, input4.value]
  if (inputs.some(value => value === '')) {
    return;
  }

  const payload = {
    confirmation_code: inputs.join(''),
    params: {},
    method: 'PATCH'
  }

  await confirmAccount(payload)
}

const confirmAccount = async (payload: Object) => {
  const response = await httpRequest('/auth/confirm_account', payload)

  if (response.status === 200) {
    const options: Options = {
      message: response.data.message,
      header: 'Welcome',
      isOpen: true
    }

    clearInputs
    openModal(options)
    ionRouter.replace('/home')
  } else if (response.status === 422) {
    const options: Options = {
      message: response.data.message,
      header: 'Try again!',
      isOpen: true
    }

    openModal(options)
  } else {
    console.warn(response)
  }
}

const openModal = (options: Options) => {
  message.value = options.message,
  header.value = options.header,
  isOpen.value = options.isOpen
}
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
  font-size: xx-large;
  font-size: 50px;

  --background: #f7f7f7;
  --color: #353535;
  --border-width: 0;
}

.btn-confirm {
  margin-top: 30%;
}
</style>