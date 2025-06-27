<script setup>
import { computed, ref } from "vue";

let navOpen = ref(false);

const toggleNavOpen = computed(() => {
  if (!navOpen.value) {
    navOpen.value = true;
  } else if (navOpen.value) {
    navOpen.value = false;
  }
});
let Links = [
  { name: "About", to: "/#about" },
  { name: "Services", to: "/#services" },
  { name: "Projects", to: "/#projects" },
  { name: "Contact", to: "/#contact" },
];
</script>
<template>
  <nav
    class="bg-black/20 fixed w-full z-20 top-0 start-0 shadow-md backdrop-blur-md"
    data-aos="fade-down"
    data-aos-duration="1000"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5"
    >
      <NuxtLink to="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <h1 class="text-3xl md:text-4xl font-bold text-blue-500">Nullpad.</h1>
      </NuxtLink>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a
          href="#"
          class="tracking-wide hover:bg-gray-900 cursor-pointer focus:ring-4 focus:outline-none md:flex md:items-center md:justify-center lg:flex lg:items-center lg:justify-center font-medium rounded-3xl text-sm px-2 py-1 md:text-base md:px-3 md:py-2 md:w-34 border-[1.5px] border-gray-200 text-center transition-all duration-200 mr-4"
        >
          <NuxtImg src="/icons/github.svg" alt="github" class="w-8 h-8" />
          Github
        </a>
      </div>
      <div
        class="hidden items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li v-for="link in Links" :key="link.to">
            <a
              @click="toggleNavOpen"
              :href="link.to"
              class="block py-2 px-2 text-lg font-light rounded-sm hover:text-blue-500 md:p-0"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
