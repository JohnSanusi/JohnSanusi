<script setup>
import { LazyNuxtImg } from "#components";
</script>
<template>
  <section id="gallery" class="mt-10 p-6 flex flex-col text-white bg-slate-900">
    <p
      data-aos="fade-in"
      data-aos-duration="1000"
      class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 flex justify-center items-center font-medium rounded-3xl text-sm w-40 md:text-base px-2 py-2 text-center mb-2 self-center"
    >
      Projects
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"></div>
  </section>
</template>
