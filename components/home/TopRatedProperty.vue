<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-serif text-gray-900 mb-8 text-center">Top Rated Properties</h1>

      <!-- Property Type Filters -->
      <div class="mb-8 flex justify-center space-x-4">
        <button
          v-for="type in propertyTypes"
          :key="type"
          @click="selectedType = type"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
            selectedType === type
              ? 'bg-[#036E5C] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ type }}
        </button>
      </div>

      <!-- Property Grid -->
      <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="property in properties"
          :key="property.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        >
          <img :src="property.image" :alt="property.title" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-serif text-gray-900 mb-2">{{ property.name }}</h2>
            <p class="text-gray-600 mb-4">{{ property.address }}</p>
            <div class="flex justify-between items-center">
              <span class="text-[#036E5C] font-bold text-xl">${{ property?.price?.toLocaleString() }}</span>
              <div class="flex items-center">
                <StarIcon class="h-5 w-5 text-[#036E5C] mr-1" />
                <span class="text-gray-700">{{ property.rating }}</span>
              </div>
            </div>
            <div class="mt-4 flex items-center text-gray-600 text-sm">
              <BedIcon class="h-4 w-4 mr-1" />
              <span class="mr-4">{{ property.bedrooms }} Beds</span>
              <BathIcon class="h-4 w-4 mr-1" />
              <span class="mr-4">{{ property.bathrooms }} Baths</span>
              <SquareIcon class="h-4 w-4 mr-1" />
              <span>{{ property.lot_size }} sqft</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex justify-center mt-32">
          <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed ,onMounted} from 'vue'
import { StarIcon, BedIcon, BathIcon, SquareIcon } from 'lucide-vue-next'
import {fetchProperty} from '../server/supabase';
const propertyTypes = ['All', 'House', 'Apartment', 'Office', 'Land']
const selectedType = ref('All')
const properties = ref([])
const isLoading = ref(true)

const initFetch = async () => {
  properties.value = await fetchProperty({type: 'All', limit: 5})
};

onMounted(() => {
  isLoading.value = true;
  setTimeout(async () => {
    await initFetch();
    isLoading.value = false;
  }, 700);
});


watch(selectedType, async (newVal) => {
  console.log('new val', newVal);
  isLoading.value = true;
  console.log("li renterer")
  setTimeout(async () => {
    properties.value = await fetchProperty({ type: newVal });
    isLoading.value = false;
  }, 700);
});


// const filteredProperties = computed(() => {
//   if (selectedType.value === 'All') {
//     return properties.value;
//   }
//   return properties.value.filter(property => property.type === selectedType.value);
// });
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

h1, h2 {
  font-family: 'Playfair Display', serif;
}

.wrapper {
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #056E5C;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 0.8s cubic-bezier(0.5, 0.05, 0.1, 1) infinite alternate;
}

@keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

.circle:nth-child(2) {
  left: 45%;
  animation-delay: 0.2s;
}

.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}

.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: none;
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 0.8s cubic-bezier(0.5, 0.05, 0.1, 1) infinite alternate;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }

  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}

.shadow:nth-child(4) {
  left: 45%;
  animation-delay: 0.2s;
}

.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}
</style>
