<template>
  <div>
    <div class="q-mx-md q-my-lg text-accent text-h6">
      Последние добавленые {{ title }}
    </div>
    <swiper
      class="swiper"
      slides-per-view="1"
      :space-between="5"
      :breakpoints="{
        '425': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 3,
        },
        '1024': {
          slidesPerView: 4,
        },
        '1400': {
          slidesPerView: 6,
        },
      }"
    >
      <swiper-slide v-for="film in films" :key="film.id">
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
      </swiper-slide>
    </swiper>
    <div class="flex justify-center q-my-lg">
      <q-btn
        rounded
        color="accent"
        label="Посмотреть все"
        :to="{ name: title }"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "CardSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    films: Array,
    title: String,
  },
  setup() {
    const $store = useStore();
    const router = useRouter();
    const handleFilm = (filmId, kpId, iframe_src) => {
      $store.commit("kinopoiskId/SET_ID", kpId);
      $store.commit("iframe/SET_IFRAME", iframe_src);
      if (kpId) {
        router.push({ name: "Просмотр", params: { id: kpId } });
      } else {
        router.push({ name: "Просмотр", params: { id: filmId } });
      }
    };
    return { handleFilm };
  },
};
</script>

<style></style>
