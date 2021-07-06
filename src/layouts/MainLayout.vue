<template>
  <q-layout view="lhr LpR lFr" class="bg-primary text-indigo-1">
    <q-header reveal elevated class="text-indigo-1 border-bottom">
      <q-toolbar>
        <q-btn
          class="lt-md"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ $route.name }}
        </q-toolbar-title>

        <search-film></search-film>
        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="250"
      class="bg-secondary"
    >
      <q-list padding class="q-mt-xl">
        <q-item
          :inset-level="0.4"
          exact
          active-class="my-exact-active-class"
          clickable
          v-ripple
          manual-focus
          :to="{ name: 'Главная' }"
        >
          <q-item-section avatar>
            <q-icon name="fa fa-home" />
          </q-item-section>
          <q-item-section class="text-h6">Главная</q-item-section>
        </q-item>
      </q-list>

      <q-list padding>
        <q-item
          :inset-level="0.4"
          exact
          active-class="my-exact-active-class"
          v-for="item in menu"
          :key="item.id"
          clickable
          v-ripple
          manual-focus
          :to="{ name: item.name }"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section class="text-h6">{{ item.name }}</q-item-section>
        </q-item>
      </q-list>

      <q-list padding>
        <q-item
          :inset-level="0.4"
          exact
          active-class="my-exact-active-class"
          v-for="item in topFilms"
          :key="item.id"
          clickable
          v-ripple
          manual-focus
          :to="{ path: item.path }"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section class="text-h6">{{ item.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, reactive, computed, onUpdated } from "vue";
import { useStore } from "vuex";
import SearchFilm from "../components/SearchFilm.vue";

export default {
  components: { SearchFilm },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const menu = reactive([
      {
        id: 2,
        name: "Фильмы",
        icon: "fas fa-play",
      },
      {
        id: 3,
        name: "Аниме",
        icon: "fas fa-video",
      },
      {
        id: 4,
        name: "Сериалы",
        icon: "fas fa-compact-disc",
      },
      {
        id: 5,
        name: "ТВ-шоу",
        icon: "fas fa-tv",
      },
    ]);

    const topFilms = reactive([
      {
        id: 0,
        name: "ТОП 250 по Кинопоиск",
        icon: "fas fa-play-circle",
        path: "/kinopoisk",
      },
      {
        id: 1,
        name: "ТОП 100 Просмотров",
        icon: "fas fa-star",
        path: "/watched-movies",
      },
    ]);

    const $store = useStore();

    return {
      menu,
      topFilms,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss">
.my-exact-active-class {
  color: $accent;
}
.input-search {
  width: 50%;
}
.border-bottom {
  border-bottom: 1px solid $secondary;
}
</style>
