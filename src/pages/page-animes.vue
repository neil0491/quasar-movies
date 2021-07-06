<template>
  <q-page padding>
    <!-- content -->
    <!-- <div :v-if="error === true">Error page {{ error }}</div> -->

    <card-film :films="films" />

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
import { computed } from "vue";
import { useMovies } from "../composables/use-movies";
import CardFilm from "../components/CardFilm.vue";

export default {
  components: { CardFilm },
  setup() {
    const pageName = "animes";
    const { loading, error, films, totalPage, current } = useMovies(pageName);

    return {
      current,
      loading,
      error,
      films,
      totalPage: computed(() => totalPage.value),
    };
  },
};
</script>
