<template>
  <q-page padding class="">
    <!-- {{ films }} -->
    <div class="q-mx-md q-mt-lg text-accent text-h5">
      Последнее добавленые Фильмы
    </div>
    <div>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="accent"
        control-type="regular"
        navigation="false"
        arrows
        infinite
        height="400px"
        class="bg-transparent rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs no-wrap">
            <div class="col" v-for="film in films" :key="film.id">
              <q-card
                class="my-card"
                @click="handleFilm(film.id, film.kinopoisk_id, film.iframe_src)"
              >
                <q-img
                  height="350px"
                  :alt="films.ru_title"
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
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs no-wrap">
            <div class="col" v-for="film in films" :key="film.id">
              <q-card
                class="my-card"
                @click="handleFilm(film.id, film.kinopoisk_id, film.iframe_src)"
              >
                <q-img
                  height="350px"
                  :alt="films.ru_title"
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
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div
            class="
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/cat.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/linux-avatar.png"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div
            class="
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/material.png"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/donuts.png"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <!-- <div>Последнее добавленые Сериалы</div>
    <div>Последнее добавленые ТВ-Шоу</div>
    <div>Последнее добавленые ТВ-Шоу</div>
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-2"
      v-for="film in films"
      :key="film.id"
    >
      <q-card
        class="my-card"
        @click="handleFilm(film.id, film.kinopoisk_id, film.iframe_src)"
      >
        <q-img
          height="350px"
          :alt="films.ru_title"
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
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useMovies } from "../composables/use-movies";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const pageName = "movies";
    const limitPage = 5;
    const { loading, error, films, totalPage, current } = useMovies(
      pageName,
      limitPage
    );

    const $store = useStore();
    const router = useRouter();
    const handleFilm = (filmId, kpId, iframe_src) => {
      $store.commit("kinopoiskId/SET_ID", kpId);
      $store.commit("iframe/SET_IFRAME", iframe_src);
      if (kpId) {
        router.push({ name: "Фильм", params: { id: kpId } });
      } else {
        console.log(filmId);
        router.push({ name: "Фильм", params: { id: filmId } });
      }
    };
    return {
      loading,
      error,
      films,
      handleFilm,
      slide: ref(1),
    };
  },
});
</script>

<style lang="scss" scoped></style>
