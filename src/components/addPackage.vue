<script setup>
import { storeToRefs } from "pinia";
import { usePythonDepsStore } from '../stores/pythonDepStore';
import { ref } from 'vue'
const store = usePythonDepsStore();
const { startPackages } = storeToRefs(store);
const newPackageName = ref("")
function addPackage(e) {
    e.preventDefault()
    if (startPackages.value.includes(newPackageName.value)) {
        return
    }
    startPackages.value.push(newPackageName.value);
    newPackageName.value = ""
}
</script>

<template>
    <div class='flex justify-center w-full'>
        <form v-on:submit="addPackage" class="md:w-3/4 w-full m-4">
            <div class="flex-col space-y-4">
                <input type="text" placeholder="e.q. tensorflow, numpy, tomni, pandas" v-model="newPackageName"
                    class="border-2 w-3/4 px-4 py-2 rounded-md text-md text-gray-700 outline-none" />
                <button
                    class="w-1/4 mt-4 bg-gradient-to-tr from-blue-700 to-blue-900 text-white py-2 rounded-md text-lg font-semibold">
                    Add Package</button>
            </div>
        </form>
    </div>
</template>