<script setup>
const projects = [
  {
    name: " EzzyGabby Photography",
    description:
      "  A minimalist and modern portfolio site built to showcase creative work in a clean, distraction-free layout. Designed to reflect the photographer's visual style and provide a seamless browsing experience ",
    link: {
      live: "https://ezzygabby.vercel.app",
      github: "https://github.com/JohnSanusi/EzzyGabby",
    },
    techs: [
      {
        name: "Nuxt.js",
        icon: "/icons/nuxt.svg",
      },
      {
        name: "Tailwind",
        icon: "/icons/tailwindcss.svg",
      },
      {
        name: "Vercel",
        icon: "/icons/vercel.svg",
      },
    ],
  },

  {
    name: "GHIT",
    description:
      "A responsive and branded website for a modern tech school, focused on clear structure and intuitive navigation. Built to communicate the school's mission and offerings with a polished user experience",
    link: {
      live: "https://ghit.vercel.app",
      github: "https://github.com/JohnSanusi/GHIT",
    },
    techs: [
      {
        name: "Nuxt.js",
        icon: "/icons/nuxt.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwindcss.svg",
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
        name: "Vercel",
        icon: "/icons/vercel.svg",
      },
      {
        name: "Render",
        icon: "/icons/render.svg",
      },
    ],
  },
  {
    name: " GHIT-Admin",
    description:
      "A custom-built admin interfae for managing student data, courses, amd registerations, Designed with simplicity and clarity in mind to support day-to-day administrative tasks efficiently",
    link: {
      live: "#",
      github: "https://github.com/JohnSanusi/GHIT-ADMIN",
    },
    techs: [
      {
        name: "Nuxt.js",
        icon: "/icons/nuxt.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwindcss.svg",
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
        name: "Vercel",
        icon: "/icons/vercel.svg",
      },
      {
        name: "Render",
        icon: "/icons/render.svg",
      },
    ],
  },
];
</script>
<template>
  <section id="projects" class="mt-10 p-6 flex flex-col">
    <div class="relative" data-aos="fade-down" data-aos-duration="1000">
      <h2 class="text-3xl font-bold tracking-normal mb-7">Recent Works</h2>
      <div class="absolute top-9 left-0 h-[6px] w-25 bg-blue-500"></div>
      <div class="absolute top-11 left-0 h-[6px] w-18 bg-blue-500"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
      <div v-for="(project, index) in projects" :key="index">
        <div
          class="bg-gray-900 rounded-xl p-6 shadow-md flex flex-col gap-4 w-full max-w-sm h-auto md:h-80"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <!-- Title -->
          <h3 class="text-xl font-bold">{{ project.name }}</h3>

          <!-- Description -->
          <p class="text-sm">
            {{ project.description }}
          </p>

          <!-- Tech Stack Icons -->
          <h3 class="text-base font-bold">Technologies:</h3>
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 items-center"
          >
            <div
              v-for="(tech, index) in project.techs"
              :key="index"
              class="flex flex-col items-center"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                :src="tech.icon"
                class="w-6 h-6 skrink-0 object-contain filter invert brightness-125"
              />
              <span class="mt-1 text-sm">{{ tech.name }}</span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex gap-4 mt-auto">
            <a
              :href="project.link.live"
              target="_blank"
              class="bg-blue-500 px-4 py-2 text-sm rounded hover:bg-blue-600 transition"
            >
              Live Site
            </a>
            <a
              :href="project.link.github"
              target="_blank"
              class="bg-gray-700 px-4 py-2 text-sm rounded hover:bg-gray-600 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
