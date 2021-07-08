import axios from "axios";
import { useRoute } from "vue-router";
import { ref, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { apiVideo } from "boot/axios";

export function usePlayerCdn() {
  const loading = ref(false);
  const error = ref(false);
  const film = ref(null);
  const route = useRoute();
  console.log(apiVideo);
  const loadData = async () => {
    loading.value = true;
    await apiVideo
      .get(
        `short?api_token=PjAFmjK42Jn0PAx7HVq9096feUFaj9Q0&id=${route.params.id}`
      )
      .then((response) => {
        film.value = response.data.data;
      })
      .catch((err) => {
        console.log(err);
        error.value = true;
      })
      .finally(function () {
        loading.value = false;
      });
  };

  loadData();

  return {
    film,
    loading,
    error,
  };
}
