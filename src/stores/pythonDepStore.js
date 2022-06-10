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
        "https://python-dep-graph.herokuapp.com/getPackagesInfo",
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

    packageNames.value = response.data.packageNames;
    licenses.value = response.data.licenses;
    totalSizeBytes.value = response.data.totalSizeBytes;

    isLoading.value = false;
  }

  return {
    startPackages,
    isLoading,
    packageNames,
    licenses,
    totalSizeBytes,
    loadDeps,
  };
});
