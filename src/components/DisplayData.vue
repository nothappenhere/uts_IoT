<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let sensorValue = ref([])

async function fetchSensors() {
  try {
    const response = await axios.get('http://localhost:8000/api/sensors')
    sensorValue.value = response.data
  } catch (error) {
    console.error('Error fetching sensor data:', error)
  }
}

onMounted(() => {
  fetchSensors()
})
</script>

<template>
  <h1>test</h1>
  <div class="max-w-3xl sm:mx-auto mx-5 mt-5">
    <section class="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <h1 class="grid-cols-1 sm:col-span-3 text-center text-3xl font-bold text-gray-900">
        All Temperature Values
      </h1>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Maximum Temperature</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img src="@/assets/img/temperature-high.svg" alt="" class="w-5 h-5" />
          </div>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
            :value="sensorValue.suhumax"
            readonly
          />
        </div>
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Average Temperature</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img src="@/assets/img/temperature-half.svg" alt="" class="w-5 h-5" />
          </div>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
            :value="sensorValue.suhuRataRata.toFixed(2)"
            readonly
          />
        </div>
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900">Minimum Temperature</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img src="@/assets/img/temperature-low.svg" alt="" class="w-5 h-5" />
          </div>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
            :value="sensorValue.suhumin"
            readonly
          />
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
      <h1 class="col-span-1 sm:col-span-2 text-center text-3xl font-bold text-gray-900">
        All Sensor Values
      </h1>

      <div
        v-for="sensor in sensorValue.nilai_suhu_max_humid_max"
        :key="sensor.idx"
        class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
      >
        <div class="space-y-3">
          <h5 class="text-xl font-bold text-gray-900 text-center">Data ke {{ sensor.idx }}</h5>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Temperature</label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              :value="sensor.suhu"
              disabled
              readonly
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Humidity</label
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              :value="sensor.humid"
              disabled
              readonly
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Brightness</label
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              :value="sensor.kecerahan"
              disabled
              readonly
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Time Stamp</label
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              :value="sensor.timestamp"
              disabled
              readonly
            />
          </div>
        </div>
      </div>
    </section>

    
  </div>
</template>
