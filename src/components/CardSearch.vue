<template>
  <div class="q-pa-md">
    <div v-if="films.length !== 0" class="row items-start q-col-gutter-md">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-2"
        v-for="film in films"
        :key="film.id"
      >
        <div @click="handleFilm(film.id, film.kp_id, film.iframe_src)">
          <q-card class="my-card">
            <q-img
              height="350px"
              :alt="film.ru_title"
              loading="lazy"
              spinner-color="accent"
              :src="`https://kinopoiskapiunofficial.tech/images/posters/kp_small/${film.kp_id}.jpg`"
            >
              <div class="absolute-bottom blur-bg">
                <q-card-actions>
                  <div class="text-capacitor btn-link">
                    {{ film.title }} / {{ film.orig_title }}
                  </div>
                </q-card-actions>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center text-accent text-h5 q-my-lg">
      По данному запросу ничего не найдено
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardSearch",
  props: ["films"],
  setup(props) {
    console.log(props);
  },
  methods: {
    handleFilm(filmId, kpId, iframe_src) {
      this.$store.commit("kinopoiskId/SET_ID", kpId);
      this.$store.commit("iframe/SET_IFRAME", iframe_src);
      if (kpId) {
        this.$router.push({ name: "Фильм", params: { id: kpId } });
      } else {
        this.$router.push({ name: "Фильм", params: { id: filmId } });
      }
    },
  },
});
</script>
