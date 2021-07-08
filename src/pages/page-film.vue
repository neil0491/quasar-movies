<template>
  <q-page padding>
    <!-- {{ dataFilm }} -->
    <div
      class="
        flex
        justify-between
        items-center
        text-body1 text-accent text-right
        q-mr-xl q-my-md
      "
    >
      <q-btn
        size="1.2rem"
        flat
        round
        color="accent"
        icon="fa fa-chevron-left"
        @click="handelBackRoute"
      />
      <div>
        {{ dataFilm?.slogan }}
      </div>
    </div>
    <div
      v-if="dataFilm"
      class="row items-start justify-center q-col-gutter-lg q-pa-md"
    >
      <div class="col-12 col-sm-6 col-md-3">
        <q-img
          height="100%"
          spinner-color="accent"
          :src="dataFilm?.posterUrl"
          class="poster-img rounded-borders shadow-10"
        />
      </div>
      <div class="col-12 col-sm-6 col-md-9">
        <h1 class="text-h5 text-accent">
          {{ dataFilm?.nameRu }}
          <span v-if="dataFilm?.nameRu">/</span>
          {{ dataFilm?.nameEn }}
        </h1>
        <div class="text-body1 width-text">
          {{ dataFilm?.description }}
        </div>
        <div>
          <div class="q-mt-lg text-subtitle2">
            <strong class="text-blue-grey-2">Год:</strong>
            {{ dataFilm?.year }}
          </div>
          <div class="q-my-lg-md">
            <strong class="text-blue-grey-2">Страна:</strong>
            <span
              class="q-mx-xs"
              v-for="(country, index) in dataFilm?.countries"
              :key="index"
              >{{ country.country }}</span
            >
          </div>
          <div class="q-my-lg-md">
            <strong class="text-blue-grey-2">Жанр:</strong>
            <span
              class="q-mx-xs"
              v-for="(genre, index) in dataFilm?.genres"
              :key="index"
              >{{ genre.genre }}</span
            >
          </div>
        </div>
      </div>
      <div class="q-mr-auto" v-if="dataFilm?.facts.length !== 0">
        <!-- <div class="text-h5 text-accent">Знаете ли вы, что…</div> -->
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            dense
            dense-toggle
            icon="fa fa-list"
            label="Знаете ли вы, что…"
          >
            <ul>
              <li v-for="(fact, index) in dataFilm?.facts" :key="index">
                <div v-html="fact"></div>
              </li>
            </ul>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
    <div v-else-if="loading">
      <q-skeleton animation="pulse" height="400px" />
    </div>
    <div v-else class="flex justify-center text-accent text-h5 q-my-lg">
      К сожелению, нет информации.
    </div>

    <div class="q-pa-md">
      <q-btn
        class="q-mb-lg"
        color="accent"
        icon-right="fa fa-play"
        label="смотреть"
        padding="0.8rem 3rem"
        @click="isOpenPlayer = !isOpenPlayer"
        v-show="!isOpenPlayer"
      />
      <div v-show="isOpenPlayer">
        <q-btn
          class="q-mb-lg"
          color="accent"
          icon-right="fa fa-times"
          label="Закрыть плеер"
          padding="0.8rem 3rem"
          @click="isOpenPlayer = !isOpenPlayer"
        />
        <div v-if="$route.params.id != $store.state.kinopoiskId.id">
          <q-video
            :ratio="16 / 9"
            :src="`https://${$store.state.iframe.iframeSrc}`"
            frameborder="0"
            allowfullscreen
          />
        </div>
        <div v-else>
          <q-video
            :ratio="16 / 9"
            :src="`https://1.svetacdn.in/R2w6Nvw11JVw?kp_id=${$store.state.kinopoiskId.id}`"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { usePlayerCdn } from "../composables/usePlayerCdn.js";
import { useDataKinopoisk } from "../composables/useDataKinopoisk.js";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const isOpenPlayer = ref(false);
    const router = useRouter();

    const { film, loading, error } = usePlayerCdn();
    const { dataFilm, loadingData, errorData, getdata } = useDataKinopoisk(
      store.state.kinopoiskId.id
    );
    const handelBackRoute = () => {
      router.go(-1);
    };

    getdata();
    return {
      film,
      loading,
      error,
      dataFilm,
      loadingData,
      errorData,
      handelBackRoute,
      isOpenPlayer,
    };
  },
};
</script>

<style scoped lang="scss">
.width-text {
  @media (min-width: $breakpoint-md-max) {
    width: 750px;
  }
}
.title-text {
  font-size: 2rem;
  line-height: 1.5;
  padding: 0;
}
.poster-img {
  border-radius: 15px;
  @media (max-width: $breakpoint-sm-max) {
    height: 150px;
  }
}
</style>
