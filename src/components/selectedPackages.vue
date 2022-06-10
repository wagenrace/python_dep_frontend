<script setup>
import { storeToRefs } from "pinia";
import { usePythonDepsStore } from '../stores/pythonDepStore';

const store = usePythonDepsStore();
const { startPackages } = storeToRefs(store);

function removeItemOnce(value) {
    const index = startPackages.value.indexOf(value);
    if (index > -1) {
        startPackages.value.splice(index, 1);
    }
}

function removeAllItems() {
    startPackages.value = []
}
</script>

<template>
    <div class='flex-col flex-wrap justify-center w-full'>
        <div class='flex flex-wrap justify-center w-full'>
            <span
                class="m-1 bg-gray-200 hover:bg-gray-300 rounded-md px-2 font-bold text-sm leading-loose cursor-pointer select-none"
                @click="removeAllItems()">Clear all packages</span>
        </div>
        <div class='flex flex-wrap justify-center w-full'>
            <span class="m-1 px-2 font-bold text-xs leading-loose">Double click to remove a package</span>
        </div>
        <div class='flex flex-wrap justify-center'>

            <span v-for="packageName in startPackages" :key="packageName"
                class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer select-none"
                @dblclick="removeItemOnce(packageName)">
                {{ packageName }}
            </span>
        </div>
    </div>
</template>