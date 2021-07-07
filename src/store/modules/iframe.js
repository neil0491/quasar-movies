import { LocalStorage } from "quasar";

export default {
  namespaced: true,
  state: () => ({
    iframeSrc: LocalStorage.getItem("src") || null,
  }),
  mutations: {
    SET_IFRAME(state, payload) {
      state.iframeSrc = payload;
      LocalStorage.set("src", payload);
    },
  },
  actions: {},
  getters: {},
};
