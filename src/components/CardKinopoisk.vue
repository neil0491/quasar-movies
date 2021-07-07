<template>
  <div class="q-pa-md">
    <div class="row items-start q-col-gutter-md">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-2"
        v-for="film in films"
        :key="film.filmId"
      >
        <div class="my-card" @click="handleFilm(film.filmId, film.iframe_src)">
          <q-card>
            <q-img
              height="350px"
              :alt="film.ru_title"
              loading="lazy"
              spinner-color="accent"
              :src="film.posterUrlPreview"
            >
              <div class="absolute-bottom blur-bg">
                <q-card-actions>
                  <div class="text-capacitor btn-link">
                    {{ film.nameRu }} / {{ film.nameEn }}
                  </div>
                </q-card-actions>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardKinopoisk",
  props: ["films"],
  setup(props) {
    console.log(props);
  },
  methods: {
    handleFilm(filmId, iframe_src) {
      this.$store.commit("kinopoiskId/SET_ID", filmId);
      this.$store.commit("iframe/SET_IFRAME", iframe_src);
      this.$router.push({ name: "Фильм", params: { id: filmId } });
    },
  },
});
</script>
