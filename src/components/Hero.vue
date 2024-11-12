<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Ujian Tengah Semester - IoT',
  },
  subtitle: {
    type: String,
    default: '15-2022-166 | Muhammad Rizky Akbar',
  },
})
</script>

<template>
  <section class="bg-[#FA9F42]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1
        class="mb-4 text-2xl font-extrabold tracking-tight leading-none select-none text-black md:text-4xl lg:text-5xl"
      >
        {{ title }}
      </h1>
      <h2
        class="mb-8 text-md font-normal text-white sm:px-16 md:px-24 lg:px-48 md:text-xl lg:text-2xl"
      >
        {{ subtitle }}
      </h2>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#0B6E4F] hover:bg-green-900 focus:ring-4 focus:ring-green-500"
        >
          Get started
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
