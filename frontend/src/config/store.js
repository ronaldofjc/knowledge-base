import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    user: {
      name: "Usuário Mock",
      email: "mock@hotmail.com"
    }
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible;
      } else {
        state.isMenuVisible = isVisible;
      }

      //console.log("toogle menu = " + state.isMenuVisible);
    }
  }
});
