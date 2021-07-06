const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { name: "Главная", path: "", component: () => import("pages/Index.vue") },
      {
        name: "Фильмы",
        path: "/movies",
        component: () => import("pages/page-movies.vue"),
      },
      {
        name: "Аниме",
        path: "/animes",
        component: () => import("pages/page-animes.vue"),
      },
      {
        name: "Сериалы",
        path: "/series",
        component: () => import("pages/page-serials.vue"),
      },
      {
        name: "ТВ-шоу",
        path: "/tv-show",
        component: () => import("pages/page-show.vue"),
      },
      {
        name: "Результат поиск",
        path: "/search",
        component: () => import("pages/page-search.vue"),
      },

      {
        name: "Фильм",
        path: "/film/:id",
        component: () => import("pages/page-film.vue"),
      },
      {
        name: "Топ 250 по Кинопоиску",
        path: "/kinopoisk",
        component: () => import("pages/page-kinopoisk.vue"),
      },
      {
        name: "Топ 100 Просматриваемых",
        path: "/watched-movies",
        component: () => import("pages/watched-movies.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
