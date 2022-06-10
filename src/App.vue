<script setup>
import SelectedPackages from './components/selectedPackages.vue'
import AddPackage from "./components/addPackage.vue";
import LoadDeps from "./components/loadDeps.vue";
import ShowResults from "./components/showResults.vue"

</script>

<template>
  <div class='flex-col justify-center w-full'>
    <h1 class="text-6xl flex justify-center text-center m-4">Python Project Analyser</h1>
    <div class="w-full flex justify-center">
      <p class="md:w-3/4 w-full m-4">
        This project has a total of 5000 python packages connected to each other based on dependencies.
        Together they from a graph in Neo4j.
        Typing in all your packages will go through this graph to find out what is the total size of all packages, and
        what are alle the licenses you need.
      </p>
    </div>
    <AddPackage />
    <SelectedPackages />
    <LoadDeps />
    <ShowResults />
  </div>
</template>
