import axios from "axios";
import { ref, onUpdated, onMounted, computed } from "vue";

export function useSearch(query) {
  const loading = ref(false);
  const error = ref(false);
  const films = ref([]);

  const loadData = async () => {
    loading.value = true;
    try {
      const res = await axios.get(
        `https://videocdn.tv/api/short?api_token=PjAFmjK42Jn0PAx7HVq9096feUFaj9Q0&title=${query}`
      );
      films.value = res.data.data;
      console.log(res.data.data);
    } catch (error) {
      error.value = true;
    } finally {
      loading.value;
    }
  };
  // onUpdated(() => {
  //   console.log("updated()", films.value);
  // });
  loadData();
  return {
    error,
    films,
    loadData,
  };
}
