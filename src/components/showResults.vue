<script setup>
import { storeToRefs } from "pinia";
import { usePythonDepsStore } from '../stores/pythonDepStore';
import { computed } from "@vue/reactivity";

const store = usePythonDepsStore();
const { isLoading,
    packageNames,
    licenses,
    totalSizeBytes
} = storeToRefs(store);

const totalSizeText = computed(() => {
    const size = totalSizeBytes.value
    if (size < 1e6) {
        return `${totalSizeBytes.value / 1e3} kB`
    }
    if (size < 1e9) {
        return `${totalSizeBytes.value / 1e6} MB`
    }
    if (size < 1e12) {
        return `${totalSizeBytes.value / 1e9} GB`
    }
    return `${totalSizeBytes.value / 1e12} TB`
})

const sortStrings = function(a, b) {
  const nameA = a.toUpperCase(); // ignore upper and lowercase
  const nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

</script>

<template>
    <div class='flex justify-center w-full'>
        <div v-if="isLoading" class="md:w-3/4 w-full">
            Loading
        </div>
        <div v-else class="md:w-3/4 w-full">

            <div class="flex justify-center w-full text-2xl">{{ totalSizeText }}</div>
            <div class="flex justify-center w-full">


                <div class="text-2xl grid grid-cols-2 w-full">
                    
                    <div class="bg-white shadow-xl rounded-lg w-full">
                        <h2 class="text-4xl flex justify-center">Needed licenses</h2>
                        <ul class="divide-y divide-gray-300">
                            <li v-for="license in licenses.sort(sortStrings)" :key="license" class="p-4 hover:bg-gray-200">
                                {{ license }}</li>
                        </ul>
                    </div>

                    <div class="bg-white shadow-xl rounded-lg w-full">
                        <h2 class="text-4xl flex justify-center">All packages</h2>
                        <ul class="divide-y divide-gray-300">
                            <li v-for="packageName in packageNames.sort(sortStrings)" :key="packageName"
                                class="p-4 hover:bg-gray-200">
                                {{ packageName }}</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>