<template>
  <q-page padding>
    <!-- content -->
    <!-- <div :v-if="error === true">Error page {{ error }}</div> -->
    <div v-if="loading === false">
      <card-kinopoisk :films="films" />
    </div>
    <div v-else>
      <card-loader />
    </div>

    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        color="accent"
        :max="totalPage"
        :max-pages="4"
        :boundary-numbers="true"
      />
    </div>
  </q-page>
</template>

<script>
import { useTopMovies } from "../composables/useTopMovies.js";
import CardKinopoisk from "../components/CardKinopoisk.vue";
import CardLoader from "../components/CardLoader.vue";

export default {
  components: { CardKinopoisk, CardLoader },
  setup() {
    const pageName = "TOP_250_BEST_FILMS";
    const { loading, error, films, totalPage, current } =
      useTopMovies(pageName);
    return {
      current,
      loading,
      error,
      films,
      totalPage,
    };
  },
};
</script>
