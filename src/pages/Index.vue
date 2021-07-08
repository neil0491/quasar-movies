<template>
  <q-page padding>
    <card-slider title="Фильмы" :films="films" />
    <card-slider title="Сериалы" :films="fetchSerials.films.value" />
    <card-slider title="Аниме" :films="fetchAnime.films.value" />
    <card-slider title="ТВ-шоу" :films="fetchShow.films.value" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useMovies } from "../composables/use-movies";
import { ref } from "vue";

import CardSlider from "../components/CardSlider.vue";

export default defineComponent({
  name: "PageIndex",
  components: { CardSlider },
  setup() {
    const pageName = "movies";
    const serials = "tv-series";
    const show = "show-tv-series";
    const anime = "animes";
    const limitPage = 15;
    const { loading, error, films } = useMovies(pageName, limitPage);
    const fetchSerials = useMovies(serials, limitPage);
    const fetchShow = useMovies(show, limitPage);
    const fetchAnime = useMovies(anime, limitPage);

    return {
      loading,
      error,
      films,
      fetchSerials,
      fetchShow,
      fetchAnime,
    };
  },
});
</script>

<style lang="scss" scoped></style>
