<script setup>
import { LazyNuxtImg } from "#components";
</script>
<template>
  <section id="projects" class="mt-10 p-6 flex flex-col">
    <div class="relative" data-aos="fade-down" data-aos-duration="1000">
      <h2 class="text-3xl font-bold tracking-normal mb-7">Recent Works</h2>
      <div class="absolute top-9 left-0 h-[6px] w-25 bg-blue-500"></div>
      <div class="absolute top-11 left-0 h-[6px] w-18 bg-blue-500"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div v-for="(project, index) in projects" :key="index">
        <div
          class="overflow-hidden rounded-xl flex flex-col gap-4 group hover:shadow-white hover:shadow-lg transition duration-300"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div
            class="w-full  bg-gray-900 p-3 h-auto md:h-70"
          >
         
            <h1 class="text-xl md:text-2xl font-bold mb-1">
              {{ project.name }}
            </h1>
            <p class="mb-2 text-base text-center">{{ project.description }}</p>
            a
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
