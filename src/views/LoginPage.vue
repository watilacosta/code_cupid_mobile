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

      <ion-row class="ion-padding-horizontal">
        <ion-col class="ion-padding-horizontal">
          <ion-button
            id="btn_login_google"
            expand="full"
            shape="round"
            size="large"
            color="light"
            mode="md">
            <ion-grid :fixed="true">
              <ion-row class="ion-align-items-center ion-justify-content-center">
                <ion-col size="2">
                  <ion-img
                    src="resources/icons8-google-48.png"
                    alt="logo google"
                    class="ion-margin-horizontal btn-img">
                  </ion-img>
                </ion-col>
                <ion-col>Login with Google</ion-col>
              </ion-row>
            </ion-grid>
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-padding-horizontal">
        <ion-col class="ion-padding-horizontal">
          <ion-button
            id="btn_login_facebook"
            expand="full"
            shape="round"
            size="large"
            color="light"
            mode="md">
            <ion-grid :fixed="true">
              <ion-row class="ion-align-items-center ion-justify-content-center">
                <ion-col size="2">
                  <ion-img
                    src="resources/icons8-facebook-48.png"
                    alt="logo google"
                    class="ion-margin-horizontal btn-img">
                  </ion-img>
                </ion-col>
                <ion-col>Login with Facebook</ion-col>
              </ion-row>
            </ion-grid>
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-padding-horizontal">
        <ion-col class="ion-padding-horizontal">
          <ion-button
            id="btn_login_email"
            expand="full"
            shape="round"
            size="large"
            color="light"
            mode="md">
            <ion-grid :fixed="true">
              <ion-row class="ion-align-items-center ion-justify-content-center">
                <ion-col size="2">
                  <ion-img
                    src="resources/icons8-email-48.png"
                    alt="logo google"
                    class="ion-margin-horizontal btn-img">
                  </ion-img>
                </ion-col>
                <ion-col>Login with Email</ion-col>
              </ion-row>
            </ion-grid>
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row> 
        <ion-col class="ion-margin-top">
          <div class="ion-text-center">
            <ion-button
              @click="() => router.push('/sign-up')"
              id="btn-signup"
              fill="clear"
              color="light">
              Sign-up
            </ion-button>
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
  IonThumbnail,
  IonGrid
} from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
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
  margin-top: 70%;
  margin-bottom: 70%;
}

ion-button {
  --padding-top: 1%;
  --padding-bottom: 1%;
}

.btn-img {
  height: 30px;
  margin-left: 0;
}

ion-thumbnail {
  --size: 180px;
  --border-radius: 90px;
  margin-bottom: 65%;
}

#btn-signup {
  margin-top: 5%;
  margin-bottom: 0;
}
</style>
