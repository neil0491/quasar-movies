import axios from "axios";
import { ref, reactive, onMounted, computed } from "vue";
import { api } from "boot/axios";

export function useDataKinopoisk(id) {
  const loadingData = ref(false);
  const errorData = ref(false);
  const dataFilm = ref(null);

  const getdata = async () => {
    try {
      loadingData.value = true;
      const res = await api.get(`v2.1/films/${id}`);
      dataFilm.value = res.data.data;
    } catch (error) {
      console.error(error);
      errorData.value = true;
    } finally {
      loadingData.value = false;
    }
  };
  return {
    dataFilm,
    loadingData,
    errorData,
    getdata,
  };
}
