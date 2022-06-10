<script setup>
import SelectedPackages from './components/selectedPackages.vue'
import AddPackage from "./components/addPackage.vue";
import LoadDeps from "./components/loadDeps.vue";
import ShowResults from "./components/showResults.vue"

</script>

<template>
  <div class='flex-col justify-center w-ful'>
    <h1 class="text-6xl flex justify-center text-center">Python Project Analyser</h1>
  <AddPackage />
  <SelectedPackages />
  <LoadDeps/>
  <ShowResults />
  </div>
</template>
