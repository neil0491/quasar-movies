<template>
  <q-page padding>
    <!-- content -->
    <!-- <div :v-if="error === true">Error page {{ error }}</div> -->
    <div v-if="loading !== true">
      <card-film :films="films" />
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
import { useMovies } from "../composables/use-movies";
import CardFilm from "../components/CardFilm.vue";
import CardLoader from "../components/CardLoader.vue";

export default {
  components: { CardLoader, CardFilm },
  setup() {
    const pageName = "movies";
    const { loading, error, films, totalPage, loadData, current } =
      useMovies(pageName);

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
