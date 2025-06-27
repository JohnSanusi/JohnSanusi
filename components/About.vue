<script setup></script>
<template>
  <section id="about" class="mt-12 p-8 flex flex-col md:flex-row gap-12">
    <div class="w-full md:w-1/2">
      <div class="relative">
        <h2 class="text-3xl font-bold tracking-normal mb-7">About Me</h2>
        <div class="absolute top-9 left-0 h-[6px] w-25 bg-blue-500"></div>
        <div class="absolute top-11 left-0 h-[6px] w-18 bg-blue-500"></div>
      </div>

      <p class="text-lg tracking-wider leading-6 mb-2 lg:text-justify">
        I'm just a curious dev who loves turning random ideas into real things.
        Whether I'm designing sleek interfaces or debugging nonsense at 2AM, I
        stay learning, building, and improving.
      </p>
      <p class="text-base tracking-wider leading-6 mb-2 lg:text-justify">
        I'm a frontend developer with 2 years of experience building clean,
        responsive, and accessible interfaces. I specialie in Nuxt and Vue, and
        I'm all about writing code that not only works - but feels smooth,
        intuitive, and user-focused.
      </p>
      <p class="text-base tracking-wider leading-6 lg:text-justify">
        Currently exploring the MEVN stack and dreaming up big projects. Let's
        build something cool.
      </p>
    </div>
    <div class="w-full md:w-1/2 p-4">
      <div class="relative">
        <h2 class="text-3xl font-bold tracking-normal mb-7">My Stack</h2>
        <div class="absolute top-9 left-0 h-[6px] w-25 bg-blue-500"></div>
        <div class="absolute top-11 left-0 h-[6px] w-18 bg-blue-500"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <p>HTML</p>
        </div>
      </div>
    </div>
  </section>
</template>
