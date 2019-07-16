import Vue from "vue";
import "./plugins/vuetify";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

const fireConfig = {
  apiKey: "AIzaSyDaU_8YncoS5tnY6HTIahKciIMUlQ5bmF0",
  authDomain: "tasker-59969.firebaseapp.com",
  databaseURL: "https://tasker-59969.firebaseio.com",
  projectId: "tasker-59969",
  storageBucket: "",
  messagingSenderId: "865633482633",
  appId: "1:865633482633:web:f56b3880ca7413c4"
};
export const db = firebase.initializeApp(fireConfig).firestore();

const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
