<template>
  <form class="input-search q-my-sm" @submit.prevent="handelBtn">
    <q-input
      bg-color="indigo-1"
      placeholder="Поиск ..."
      type="text"
      item-aligned
      outlined
      rounded
      dense
      v-model="search"
      :input-style="{ paddingLeft: '0.5rem' }"
    >
      <template v-slot:append>
        <q-btn @click="handelBtn" unelevated size="md" dense round flat>
          <q-icon name="fa fa-search" />
        </q-btn>
      </template>
    </q-input>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions({
      searchQuery: "search/SEARCH_INPUT",
    }),
    handelBtn() {
      this.searchQuery(this.search);
      this.search = "";
      this.$router.push({ path: "/search" });
    },
  },
};
</script>

<style></style>
