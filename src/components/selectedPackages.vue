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
</script>

<template>
    <div class='flex flex-wrap'>
        <span v-for="packageName in startPackages" :key="packageName"
            class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer select-none"
            @dblclick="removeItemOnce(packageName)">
            {{ packageName }}
        </span>
    </div>
</template>