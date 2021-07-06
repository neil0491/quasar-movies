<template>
  <q-page padding>
    <!-- content -->
    <!-- <div :v-if="error === true">Error page {{ error }}</div> -->

    <card-kinopoisk :films="films" />

    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        color="accent"
        :max="totalPage"
        :max-pages="4"
        :boundary-numbers="true"
      />
    </div>
    <!-- <div v-else>Loading . . .</div> -->
  </q-page>
</template>

<script>
import { useTopMovies } from "../composables/useTopMovies.js";
import CardKinopoisk from "../components/CardKinopoisk.vue";

export default {
  components: { CardKinopoisk },
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
