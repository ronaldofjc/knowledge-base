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
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJvbmFsZG8gRmVpdG9zYSIsImVtYWlsIjoicm9uYWxkb2ZqY0Bob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTU2ODUwMjksImV4cCI6MTU1NTk0NDIyOX0.5-dOrk50zN1DWokzza8GphId2npwTtq1pq6l6l5VEao";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
