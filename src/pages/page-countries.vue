<template>
  <q-page>
    {{ films }}
    <div v-if="loading === false">
      <p>{{ $route.params.id }}</p>
      <div v-if="noData === true">No Data</div>
      <div v-else>
        <card-film :films="films" />
      </div>
    </div>
    <div v-else>Loading ...</div>
  </q-page>
</template>

<script>
import { ref, onUpdated, reactive, defineComponent } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import CardFilm from "../components/CardFilm.vue";

export default defineComponent({
  components: { CardFilm },
  setup() {
    let loading = ref(false);
    let noData = ref(false);
    const films = ref(null);
    const pages = ref(null);
    const route = reactive(useRoute());

    const loadData = async (pageId) => {
      loading.value = true;
      noData.value = false;
      await axios
        .get(
          `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?country=${pageId}&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&page=1`,
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
        .catch((err) => {
          console.error(err);
          if (err.response.status == "404") {
            console.log(err.response.status);
            noData.value = true;
          }
        })
        .finally(function () {
          loading.value = false;
        });
    };
    onUpdated(() => {
      loadData(route.params.id);
    });

    loadData(route.params.id);

    return {
      films,
      pages,
      loading,
      noData,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
