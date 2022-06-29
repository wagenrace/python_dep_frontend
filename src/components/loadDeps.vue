<script setup>
import { usePythonDepsStore } from '../stores/pythonDepStore';
const store = usePythonDepsStore();
const { loadDeps } = store
</script>

<template>
    <div class='flex justify-center w-full'>
        <button
            class="md:w-3/4 w-full m-4 bg-gradient-to-tr from-blue-700 to-blue-900 hover:to-blue-400 text-white p-2 rounded-md text-lg font-semibold"
            @click="loadDeps()">
            Load Dependencies</button>
    </div>
</template>