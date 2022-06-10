<script setup>
import { usePythonDepsStore } from '../stores/pythonDepStore';
const store = usePythonDepsStore();
const { loadDeps } = store
</script>

<template>
    <div class="px-4 py-6 sm:grid grid-cols-2 gap-x-6 max-w-full mx-auto">
        <button
            class="w-3/4 mt-4 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white py-2 rounded-md text-lg font-semibold"
            @click="loadDeps()">
            Load Dependencies</button>


    </div>

</template>