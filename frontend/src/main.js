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
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJvbmFsZG8gRmVpdG9zYSIsImVtYWlsIjoicm9uYWxkb2ZqY0Bob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTYwNjUzMjQsImV4cCI6MTU1NjMyNDUyNH0.1L9h05Lsjsiwt-8DG02wGHLSDu4oEAyddZydNhY2PGg";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
