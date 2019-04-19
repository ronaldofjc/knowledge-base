import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import "./config/msgs";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

// TEMPORARIO
require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJvbmFsZG8gRmVpdG9zYSIsImVtYWlsIjoicm9uYWxkb2ZqY0Bob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTU1NDI0NzIsImV4cCI6MTU1NTgwMTY3Mn0.yfgWjOW9DkOWScXJJ4KcKR8wDNeQplbX1N8ph2b-Pw8";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
