<script setup lang="ts">
import { reactive, ref } from "vue";
import { push, Notification } from "notivue";

const formRef = ref<HTMLFormElement | null>(null);
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = async () => {
  const contactForm = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  if (
    contactForm.name.trim() === "" ||
    contactForm.email.trim() === "" ||
    contactForm.subject.trim() === "" ||
    contactForm.message.trim() === ""
  ) {
    push.warning("please Fill all inputs");
    return;
  }

  try {
    formRef.value?.submit();
    push.success({
      title: "Message Sent",
      message: "Thanks for reaching out",
    });

    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
  } catch (err: any) {
    push.error({
      title: "Failed to send",
      message: "Something went wrong, try again",
    });
  } finally {
  }
};
</script>
<template>
  <Notivue v-slot="item" theme="white">
    <Notification :item="item" />
  </Notivue>
  <section
    id="contact"
    class="p-6 flex flex-col justify-center items-center gap-4"
  >
    <div class="relative" data-aos="fade-down" data-aos-duration="1000">
      <h2 class="text-3xl font-bold tracking-normal mb-7">Contact Me</h2>
      <div class="absolute top-9 left-0 h-[6px] w-25 bg-blue-500"></div>
      <div class="absolute top-11 left-0 h-[6px] w-18 bg-blue-500"></div>
    </div>

    <form
      ref="formRef"
      @submit.prevent="submitForm"
      action="https://formsubmit.co/johnsanusi18@gmail.com"
      method="POST"
      class="flex flex-col gap-4 w-full md:w-[50%]"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div class="w-full">
          <input
            type="text"
            v-model="formData.name"
            placeholder="John Doe"
            name="name"
            id="name"
            class="border border-gray-400 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900"
          />
        </div>
        <div class="w-full">
          <input
            type="email"
            v-model="formData.email"
            placeholder="johndoe@gmail.com"
            name="email"
            id="email"
            class="border border-gray-400 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900"
          />
        </div>
      </div>
      <div class="w-full">
        <input
          type="text"
          v-model="formData.subject"
          placeholder="Subject"
          name="subject"
          id="subject"
          class="border border-gray-400 py-2.5 px-4 font-light text-base rounded-4xl w-full bg-gray-900"
        />
      </div>
      <div>
        <textarea
          name="message"
          v-model="formData.message"
          id="message"
          col="30"
          placeholder="Your Message...."
          class="border border-gray-400 py-2.5 px-4 font-light text-base rounded-xl w-full bg-gray-900 h-40"
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-white tracking-wide bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500/50 cursor-pointer focus:ring-2 focus:outline-none focus:ring-blue-700 flex justify-center items-center font-medium rounded-4xl text-base px-4 py-3 w-38 text-center transition-all duration-200"
      >
        Send Message
      </button>
    </form>
  </section>
</template>
