<template>
  <q-page padding>
    <!-- content -->
    <!-- <div :v-if="error === true">Error page {{ error }}</div> -->
    <div v-if="loading === false">
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
import { computed } from "vue";
import { useMovies } from "../composables/use-movies";
import CardFilm from "../components/CardFilm.vue";
import CardLoader from "../components/CardLoader.vue";

export default {
  components: { CardFilm, CardLoader },
  setup() {
    const pageName = "show-tv-series";
    const { loading, error, films, totalPage, current } = useMovies(pageName);
    console.log(films);
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
