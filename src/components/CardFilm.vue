<template>
  <div class="q-pa-md">
    <div class="row items-start q-col-gutter-md">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-2"
        v-for="film in films"
        :key="film.id"
      >
        <div @click="handleFilm(film.id, film.kinopoisk_id)">
          <q-card class="my-card">
            <q-img
              height="350px"
              :alt="film.ru_title"
              loading="lazy"
              spinner-color="accent"
              :src="`https://kinopoiskapiunofficial.tech/images/posters/kp_small/${film.kinopoisk_id}.jpg`"
            >
              <div class="absolute-bottom blur-bg">
                <q-card-actions>
                  <div class="text-capacitor btn-link">
                    {{ film.ru_title }} / {{ film.orig_title }}
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
  name: "CardFilms",
  props: ["films"],
  methods: {
    handleFilm(filmId, kpId) {
      this.$store.commit("kinopoiskId/SET_ID", kpId);
      this.$router.push({ name: "Фильм", params: { id: filmId } });
    },
  },
});
</script>

<style lang="scss" scoped></style>
