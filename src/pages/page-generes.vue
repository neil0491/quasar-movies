<template>
  <q-page>
    <q-scroll-area
      visible
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 100vh"
      class="col"
    >
      <div v-if="isLoading === false">
        <p>{{ $route.params.id }}</p>
        <div v-if="error === false">
          <card-film :films="films" />
          <div class="q-pa-lg flex flex-center">
            <q-pagination
              v-model="current"
              color="purple"
              :max="pages"
              boundary-numbers
            />
          </div>
        </div>
        <div v-else>{{ error.message }}</div>
      </div>
      <div v-else>Loading ...</div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { ref, watch, reactive, computed, onUpdated } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import CardFilm from "../components/CardFilm.vue";

export default {
  components: { CardFilm },
  setup() {
    const loading = ref(false);
    const error = ref(false);
    const films = reactive(ref(null));
    const route = reactive(useRoute());

    const pages = reactive(ref(null));
    const current = ref(1);

    const loadData = async (pageId, currentPage) => {
      loading.value = true;
      await axios
        .get(
          `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${pageId}&order=YEAR&type=FILM&page=${currentPage}`,
          {
            headers: {
              "Content-Type": `application/json`,
              "X-API-KEY": "1220afbe-7495-4b15-b248-073dbf409499",
            },
          }
        )
        .then((response) => {
          films.value = response.data.films;
          pages.value = response.data.pagesCount;
        })
        .catch((err) => (error.value = err))
        .finally(function () {
          loading.value = false;
        });
    };

    onUpdated(() => {
      current.value = 1;
      loadData(route.params.id, current.value);
    });
    watch(current, () => {
      loadData(route.params.id, current.value);
    });
    loadData(route.params.id, current.value);
    return {
      films,
      pages,
      current,
      isLoading: loading,
      error,

      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be3",
        width: "9px",
        opacity: 0.2,
      },
    };
  },
};
</script>

<style></style>
