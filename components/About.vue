<script setup>
const techs = [
  {
    name: "Vue.js",
    icon: "/icons/vue.svg",
  },
  {
    name: "Nuxt.js",
    icon: "/icons/nuxt.svg",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    icon: "/icons/ts.svg",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "Express.js",
    icon: "/icons/express.svg",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
  },
  {
    name: "GitHub",
    icon: "/icons/github.svg",
  },
  {
    name: "Vercel",
    icon: "/icons/vercel.svg",
  },
  {
    name: "Render",
    icon: "/icons/render.svg",
  },
];
</script>
<template>
  <section
    id="about"
    class="mt-12 p-8 flex flex-col md:flex-row gap-16 items-start text-left"
  >
    <div class="w-full md:w-1/2">
      <div class="relative" data-aos="fade-down" data-aos-duration="1000">
        <h2 class="text-3xl font-bold tracking-normal mb-7">About Me</h2>
        <div class="absolute top-9 left-0 h-[6px] w-25 bg-blue-500"></div>
        <div class="absolute top-11 left-0 h-[6px] w-18 bg-blue-500"></div>
      </div>

      <p
        class="text-base tracking-wider leading-6 mb-2 lg:text-justify"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        I'm just a curious dev who loves turning random ideas into real things.
        Whether I'm designing sleek interfaces or debugging nonsense at 2AM, I
        stay learning, building, and improving.
      </p>
      <p
        class="text-base tracking-wider leading-6 mb-2 lg:text-justify"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        I'm an 18 yrs old full stack developer in Lagos, Nigeria with 2 years of
        experience building clean, responsive, and accessible interfaces. I
        specialie in Nuxt and Vue, and I'm all about writing code that not only
        works - but feels smooth, intuitive, and user-focused.
      </p>
      <p
        class="text-base tracking-wider leading-6 lg:text-justify"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        Currently exploring the MEVN stack and dreaming up big projects. Let's
        build something cool.
      </p>
    </div>
    <div class="w-full md:w-1/2 flex flex-col justify-start">
      <div class="relative mb-8" data-aos="fade-down" data-aos-duration="1000">
        <h2 class="text-3xl font-bold tracking-normal mb-7">My Stack</h2>
        <div class="absolute top-9 left-0 h-[6px] w-25 bg-blue-500"></div>
        <div class="absolute top-11 left-0 h-[6px] w-18 bg-blue-500"></div>
      </div>

      <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
        <div
          v-for="(tech, index) in techs"
          :key="index"
          class="flex flex-col items-center"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <img
            :src="tech.icon"
            class="w-12 h-12 filter invert brightness-125"
          />
          <span class="mt-1 text-sm">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
