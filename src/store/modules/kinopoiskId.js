import { LocalStorage } from "quasar";

export default {
  namespaced: true,
  state: () => ({
    id: LocalStorage.getItem("id") || null,
  }),
  mutations: {
    SET_ID(state, payload) {
      state.id = payload;
      LocalStorage.set("id", payload);
    },
  },
  actions: {},
  getters: {},
};
