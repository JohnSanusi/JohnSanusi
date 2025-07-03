<script setup></script>
<template>
  <section id="hero" class="pt-32 p-6">
    <div
      class="w-full flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <div class="w-full md:w-1/2">
        <NuxtImg
          src="/pfp.jpg"
          class="w-25 max-w-[400px] h-25 rounded-full md:hidden mb-2"
          alt="Profile Pic"
          data-aos="fade-in"
          data-aos-duration="1000"
        />

        <h1
          class="text-3xl md:text-4xl lg:text-5xl flex flex-col tracking-normal font-bold"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Hi, I'm John Sanusi,
        </h1>
        <h1
          class="text-3xl md:text-4xl lg:text-5xl flex flex-col tracking-normal font-bold mb-1 text-blue-500"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Software Developer
        </h1>
        <p
          class="text-gray-400 text-base tracking-wider mb-3 leading-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Building modern web experiences <br />
          with code and creativity
        </p>
        <div
          class="flex flex-row gap-4 items-center"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <a
            href="/#projects"
            class="tracking-wide cursor-pointer flex justify-center items-center font-semibold rounded-lg bg-blue-600 px-2 py-2.5 md:w-32 hover:shadow-lg hover:shadow-blue-900 hover:scale-105 transition-all duration-300"
          >
            Resume <i class="pi pi-download ml-1 text-lg font-semibold"></i>
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2 justify-center hidden md:flex">
        <div class="relative w-70 h-75 group mt-5">
          <NuxtImg
            src="/pfp-desktop.jpg"
            class="w-full h-full object-cover z-10 relative transition-all duration-300 group-hover:scale-95 group-hover:translate-x-4 group-hover:translate-y-4 cursor-pointer"
            alt="Profile Pic"
          />
          <div class="absolute top-8 left-8 w-full h-full z-0">
            <div
              class="absolute bottom-0 right-0 h-55 w-[15px] bg-blue-500"
            ></div>
            <div
              class="absolute bottom-0 right-0 h-[15px] w-60 bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
