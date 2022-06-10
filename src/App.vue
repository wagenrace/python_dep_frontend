<script setup>
import { storeToRefs } from "pinia";
import { usePythonDepsStore } from './stores/pythonDepStore';

const store = usePythonDepsStore();
const { isLoading,
  packageNames,
  licenses,
  totalSizeBytes
} = storeToRefs(store);
const { loadDeps } = store
loadDeps()
</script>

<template>
  <p>
    isLoading {{ isLoading }}
  </p>
  <p>
    Packages {{ packageNames }}
  </p>
  <p>
    licenses {{ licenses }}
  </p>
  <p>
    totalSizeBytes {{ totalSizeBytes }}
  </p>
</template>
