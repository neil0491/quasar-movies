import axios from "axios";
import { ref, reactive, onMounted, watch } from "vue";

export function useTopMovies(pageName) {
  const loading = ref(false);
  const error = ref(false);
  const totalPage = ref(null);
  const current = ref(1);
  const films = reactive(ref(null));

  const loadData = async (page) => {
    try {
      loading.value = true;
      const res = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${pageName}&page=${page}`,
        {
          headers: {
            "Content-Type": `application/json`,
            "X-API-KEY": "1220afbe-7495-4b15-b248-073dbf409499",
          },
        }
      );
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
