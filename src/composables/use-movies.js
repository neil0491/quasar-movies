import axios from "axios";
import { ref, reactive, onMounted, watch } from "vue";

export function useMovies(pageName, limit) {
  const loading = ref(false);
  const error = ref(false);
  const totalPage = ref(0);
  const current = ref(1);
  const films = reactive(ref(null));

  const loadData = async (page) => {
    try {
      loading.value = true;
      const res = await axios.get(
        ` https://videocdn.tv/api/${pageName}?api_token=PjAFmjK42Jn0PAx7HVq9096feUFaj9Q0&ordering=created&direction=desc&page=${page}&limit=${limit}`
      );
      films.value = res.data.data;
      totalPage.value = res.data.last_page;
    } catch (error) {
      console.error(error);
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
