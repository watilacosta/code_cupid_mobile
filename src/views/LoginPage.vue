<template>
  <ion-page>
    <ion-content :fullscreen="true" class="bg-login">
      <ion-row class="ion-justify-content-center ion-align-items-center">
        <ion-thumbnail>
          <ion-img
            src="resources/logo.png"
            alt="logo code cupid"
            class="ion-margin-vertical">
          </ion-img>
        </ion-thumbnail>
      </ion-row>
      <ion-row>
        <ion-col class="ion-margin-bottom">
          <div class="ion-text-center ion-margin-horizontal ion-padding-horizontal">
            <ion-text color="light">
              By clicking Log In, you agree with our <u>Terms</u>.
              Learn how we process your data in our <u>Privacy
              Policy</u> <u>and Cookies Policy</u>.
            </ion-text>
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="ion-margin-horizontal ion-padding-horizontal">
        <ion-col class="ion-padding-horizontal">
          <ion-button
            id="btn_login_google"
            expand="full"
            shape="round"
            size="large"
            color="light"
            mode="md">
            <ion-img
              src="resources/icons8-google-48.png"
              alt="logo google"
              class="ion-margin-horizontal btn-img">
            </ion-img>
            Login with Google
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-margin-horizontal ion-padding-horizontal">
        <ion-col class="ion-padding-horizontal">
          <ion-button
            id="btn_login_facebook"
            expand="full"
            shape="round"
            size="large"
            color="light"
            mode="md">
            <ion-img
              src="resources/icons8-facebook-48.png"
              alt="logo google"
              class="ion-margin-horizontal btn-img">
            </ion-img>
            Login with Facebook
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-margin-horizontal ion-padding-horizontal">
        <ion-col class="ion-padding-horizontal">
          <ion-button
            id="btn_login_phone"
            expand="full"
            shape="round"
            size="large"
            color="light"
            mode="md"
          >
            <ion-img
              src="resources/icons8-email-48.png"
              alt="logo google"
              class="ion-margin-horizontal btn-img">
            </ion-img>
            Login with Email
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row> 
        <ion-col class="ion-margin-top">
          <div class="ion-text-center">
            <ion-button id="btn-signup" fill="clear" color="light">Sign-up</ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage,
  IonContent,
  IonImg,
  IonCol, 
  IonRow,
  IonButton,
  IonText,
  IonThumbnail
} from '@ionic/vue';
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';

const authStore = useAuthStore()
const email = ref("")
const password = ref("")
</script>

<style scoped>
.bg-login {
	--ion-background-color: #a020f0;
  --ion-background-color-rgb: 160, 32, 240;

  background: linear-gradient(
    45deg, rgba(188, 123, 228, 1), rgba(160, 32, 240, 1)
  );
}

.ion-margin-vertical {
  margin-top: 128px;
  margin-bottom: 128px;
}

ion-button {
  --padding-top: 10px;
  --padding-bottom: 10px;
}

.btn-img {
  height: 30px;
  margin-left: 0;
}

ion-thumbnail {
  --size: 180px;
  --border-radius: 90px;
  margin-bottom: 256px;
}

#btn-signup {
  margin-top: 50px;
  margin-bottom: 0;
}
</style>