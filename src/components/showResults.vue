<script setup>
import { storeToRefs } from "pinia";
import { usePythonDepsStore } from '../stores/pythonDepStore';
import { computed } from "@vue/reactivity";

const store = usePythonDepsStore();
const { isLoading,
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

const sortStrings = function (a, b) {
    const nameA = a.licenses.toUpperCase(); // ignore upper and lowercase
    const nameB = b.licenses.toUpperCase(); // ignore upper and lowercase
    if(nameA == nameB) {
        return 0;
    }
    if(nameA === "NOT FOUND"){
        return -1;
    }
    if(nameB === "NOT FOUND"){
        return 1
    }

    if(nameA === "UNKNOWN"){
        return 1;
    }
    if(nameB === "UNKNOWN"){
        return -1
    }

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

                <div class="bg-white shadow-xl rounded-lg w-full">
                    <div class="grid grid-cols-2">
                        <h2 class="text-4xl flex justify-center">Needed licenses</h2>
                        <h2 class="text-4xl flex justify-center">All packages</h2>
                    </div>
                    <ul class="divide-y divide-gray-300">
                        <li v-for="license in licenses.sort(sortStrings)" :key="license.licenses"
                            class="p-4 hover:bg-gray-200 text-2xl grid grid-cols-2 w-full">
                            <div class="">
                                {{ license.licenses }}

                            </div>
                            <div>
                        <li v-for="packageName in license.packageNames" :key="license.licenses"
                            class="p-4 text-2xl w-full">
                            {{ packageName }}
                        </li>
                </div>
                </li>
                </ul>
            </div>
        </div>

    </div>
    </div>
</template>