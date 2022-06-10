<script setup>
import { storeToRefs } from "pinia";
import { usePythonDepsStore } from '../stores/pythonDepStore';
import {ref} from 'vue'
const store = usePythonDepsStore();
const { startPackages } = storeToRefs(store);
const newPackageName = ref("")
function addPackage(e) {
    e.preventDefault()
    if(startPackages.value.includes(newPackageName.value)){
        return
    }
    startPackages.value.push(newPackageName.value);
}
</script>

<template>
    <form v-on:submit="addPackage">
        <div class="px-4 py-6 sm:grid grid-cols-2 gap-x-6 max-w-full mx-auto">
            <div class="flex-col space-y-4">
                <input type="text" placeholder="Name" v-model="newPackageName"
                    class="border-2 w-3/4 px-4 py-2 rounded-md text-md text-gray-700 outline-none" />
                <button
                    class="w-1/4 mt-4 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white py-2 rounded-md text-lg font-semibold">
                    Add Package</button>
            </div>

        </div>
    </form>

</template>