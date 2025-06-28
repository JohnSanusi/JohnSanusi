<script setup>
const services = [
  {
    icon: "pi pi-desktop",
    name: " Frontend Development",
    description:
      "Building responsive, accessible, and high-performance uer interface using Vue, Nuxt, and Tailwind Css.",
  },

  {
    icon: "pi pi-database",
    name: " Backend Development",
    description:
      "Designing and implementing  robust backend systems with Node.js, Express, and MongoDB to handle real world data and functionality.",
  },
  {
    icon: "pi pi-cog",
    name: " Full Stack Development",
    description:
      "Delivering complete end-to-end web applications, from dynamic user interfaces to secure server-side logic.",
  },
  {
    icon: "pi pi-bolt",
    name: "Performance Optimization",
    description:
      "Enhancing website speed, responsiveness, and Lighthouse scores through careful auditing and optimization techniques",
  },
];
</script>
<template>
  <section id="services" class="p-6 text-white flex flex-col justify-center">
    <div class="relative" data-aos="fade-down" data-aos-duration="1000">
      <h2 class="text-3xl font-bold tracking-normal mb-7">My Services</h2>
      <div class="absolute top-9 left-0 h-[6px] w-25 bg-blue-500"></div>
      <div class="absolute top-11 left-0 h-[6px] w-18 bg-blue-500"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
      <div v-for="(service, index) in services" :key="index">
        <div
          class="overflow-hidden rounded-xl flex flex-col gap-4 group hover:shadow-white hover:shadow-lg transition duration-300"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div
            class="w-full flex flex-col justify-center items-center bg-gray-900 p-3 h-auto md:h-50"
          >
            <div
              class="flex justify-center items-center text-center w-14 h-14 px-2 py-2 rounded-full mb-2 group-hover:shadow-lg group-hover:bg-blue-500 transition duration-200"
            >
              <i
                :class="service.icon"
                class="text-3xl font-bold text-blue-500 group-hover:text-gray-200"
              ></i>
            </div>
            <h1 class="text-xl md:text-2xl font-bold mb-1">
              {{ service.name }}
            </h1>
            <p class="mb-2 text-base text-center">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
