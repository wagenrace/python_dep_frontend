import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const usePythonDepsStore = defineStore("pythonDepsStore", () => {
  // State
  const startPackages = ref([]);
  const packageNames = ref([]);
  const licenses = ref([]);
  const totalSizeBytes = ref(0);
  const isLoading = ref(false);

  async function _fetchResults() {
    // Fetching new data
    const response = await axios
      .post(
        "https://wagenrace-dev.app.dot-asterisk.nl/getPackagesInfoV2/",
        startPackages.value
      )
      .catch((e) => {
        const Error =
          e.response.data.Error || "The experiment could not be found";
        return { Error };
      });

    return response;
  }

  async function loadDeps() {
    isLoading.value = true;

    const response = await _fetchResults();

    const error = response.Error || null;

    if (error) {
      isLoading.value = false;
      return;
    }

    console.log(response);

    licenses.value = response.data;
    totalSizeBytes.value = response.data.reduce(
      (prev, cur) => prev + cur.totalSizeBytes,
      0
    );

    isLoading.value = false;
  }

  return {
    startPackages,
    isLoading,
    licenses,
    totalSizeBytes,
    loadDeps,
  };
});
