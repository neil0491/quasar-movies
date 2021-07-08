import { ref, onMounted, watch } from "vue";
import { api } from "boot/axios";

export function useTopMovies(pageName) {
  const loading = ref(false);
  const error = ref(false);
  const totalPage = ref(0);
  const current = ref(1);
  const films = ref(null);
  const loadData = async (page) => {
    try {
      loading.value = true;
      const res = await api.get(`v2.2/films/top?type=${pageName}&page=${page}`);
      films.value = res.data.films;
      totalPage.value = res.data.pagesCount;
    } catch (error) {
      error.value = true;
    } finally {
      loading.value = false;
    }
  };
  onMounted(loadData(current.value));
  watch(current, loadData);
  return {
    loading,
    error,
    films,
    totalPage,
    current,
    loadData,
  };
}
