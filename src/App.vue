<script setup>
import { storeToRefs } from "pinia";
import { usePythonDepsStore } from './stores/pythonDepStore';
import SelectedPackages from './components/selectedPackages.vue'
import AddPackage from "./components/addPackage.vue";
import LoadDeps from "./components/loadDeps.vue";

const store = usePythonDepsStore();
const { isLoading,
  packageNames,
  licenses,
  totalSizeBytes
} = storeToRefs(store);
const { loadDeps } = store

</script>

<template>
  <p>
    isLoading {{ isLoading }}
  </p>
  <AddPackage />
  <SelectedPackages />
  <LoadDeps/>
  <!-- <p>
    Packages {{ packageNames }}
  </p>
  <p>
    licenses {{ licenses }}
  </p>
  <p>
    totalSizeBytes {{ totalSizeBytes }}
  </p> -->
</template>
