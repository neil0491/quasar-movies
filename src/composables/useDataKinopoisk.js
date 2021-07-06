import axios from "axios";
import { ref, reactive, onMounted, computed } from "vue";

export function useDataKinopoisk(id) {
  const loadingData = ref(false);
  const errorData = ref(false);
  const dataFilm = ref(null);

  const getdata = async () => {
    try {
      loadingData.value = true;
      const res = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`,
        {
          headers: {
            "Content-Type": `application/json`,
            "X-API-KEY": "1220afbe-7495-4b15-b248-073dbf409499",
          },
        }
      );
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
