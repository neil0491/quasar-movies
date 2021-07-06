<template>
  <q-page padding>
    <card-search :films="$store.getters['search/GET_SEARCH']" />
  </q-page>
</template>

<script>
import CardSearch from "../components/CardSearch.vue";

export default {
  components: { CardSearch },
};
</script>
