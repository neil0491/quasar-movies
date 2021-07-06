import axios from "axios";
export default {
  namespaced: true,
  state: () => ({
    queryData: [],
    error: false,
    loading: false,
  }),
  mutations: {
    SET_DATA_SEARCH(state, payload) {
      state.queryData = payload;
    },
    SET_LOADING_DATA(state, payload) {
      state.loading = payload;
    },
    SET_ERROR_DATA(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async SEARCH_INPUT({ commit }, query) {
      commit("SET_LOADING_DATA", true);
      try {
        const res = await axios.get(
          `https://videocdn.tv/api/short?api_token=PjAFmjK42Jn0PAx7HVq9096feUFaj9Q0&title=${query}`
        );
        commit("SET_DATA_SEARCH", res.data.data);
      } catch (error) {
        console.error(error);
        commit("SET_ERROR_DATA", true);
      } finally {
        commit("SET_LOADING_DATA", false);
      }
    },
  },
  getters: {
    GET_SEARCH(state) {
      return state.queryData;
    },
    ERROR_DATA(state) {
      return state.error;
    },
    LOADING_DATA(state) {
      return state.loading;
    },
  },
};
