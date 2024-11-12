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
  <section class="bg-primary-700">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1
        class="mb-4 text-2xl font-extrabold tracking-tight leading-none select-none text-gray-900 md:text-4xl lg:text-5xl"
      >
        {{ title }}
      </h1>
      <h2
        class="mb-8 text-md font-normal text-white sm:px-16 md:px-24 lg:px-48 md:text-xl lg:text-2xl"
      >
        {{ subtitle }}
      </h2>
    </div>
  </section>
</template>
