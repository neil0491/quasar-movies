import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import search from "./modules/search";
import kinopoiskId from "./modules/kinopoiskId";
import iframe from "./modules/iframe";
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      search,
      kinopoiskId,
      iframe,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING !== "production",
  });

  return Store;
});
