<script setup>
import SelectedPackages from './components/selectedPackages.vue'
import AddPackage from "./components/addPackage.vue";
import LoadDeps from "./components/loadDeps.vue";
import ShowResults from "./components/showResults.vue"

</script>

<template>
  <div class='flex-col justify-center w-full'>
    <h1 class="text-6xl flex justify-center text-center m-4">Python Project Insight</h1>
    <div class="w-full flex justify-center">
      <div class="md:w-3/4 w-full m-4">
        <p>
          This project has a total of 5300+ python packages connected to each other based on dependencies.
          Together they from a graph in Neo4j.
          Typing in all your packages will go through this graph to find out what is the total size of all packages, and
          what are alle the licenses you need.


        </p>
        <p class="py-2 text-xl">
          Hosted by
          <a class="text-blue-700 underline" href="https://dot-asterisk.nl">Dot
            Asterisk
          </a>
        </p>
      </div>
    </div>

    <AddPackage />
    <SelectedPackages />
    <LoadDeps />
    <ShowResults />

    <div class="w-full flex justify-center">
      <div class="md:w-3/4 w-full m-4 flex justify-around">
        <a href="https://github.com/wagenrace/python_dep_frontend"
          class="w-1/5 bg-blue-600 text-white rounded-full text-center m-1 p-1 font-mono">Code front-end</a>
        <a href="https://github.com/wagenrace/python_dep_graph"
          class="w-1/5 bg-blue-600 text-white rounded-full text-center m-1 p-1 font-mono">Code back-end</a>
        <a href="https://twitter.com/wagenrace"
          class="w-1/5 bg-blue-600 text-white rounded-full text-center m-1 p-1 font-mono">Twitter</a>
        <a href="https://www.linkedin.com/in/tom-nijhof-2a058893/"
          class="w-1/5 bg-blue-600 text-white rounded-full text-center m-1 p-1 font-mono">LinkedIn</a>
      </div>
    </div>
  </div>
</template>
