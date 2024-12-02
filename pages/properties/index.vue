<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-properties text-white py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">Our Properties</h1>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <div class="mb-6 flex justify-between">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search properties..."
          class="w-4/5 px-4 py-2 rounded-lg border-2 border-[#036E5C] focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
        />
        <button
          @click="openAdvancedFilter"
          class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#036E5C] hover:underline flex items-center"
        >
          <SlidersIcon class="w-4 h-4 mr-1" />
          Advanced Filter
        </button>
      </div>

      <div v-if="isLoading" class="flex justify-center mt-32">
        <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="property.image"
            :alt="property.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-[#036E5C] mb-2">
              {{ property.name }}
            </h2>
            <p class="text-gray-600 mb-2">{{ property.address }}</p>
            <div class="flex items-center mb-2">
              <BedIcon class="w-5 h-5 text-[#036E5C] mr-2" />
              <span class="mr-4">{{ property.bedrooms }} Beds</span>
              <BathIcon class="w-5 h-5 text-[#036E5C] mr-2" />
              <span>{{ property.bathrooms }} Baths</span>
            </div>
            <div class="flex items-center mb-4">
              <SquareIcon class="w-5 h-5 text-[#036E5C] mr-2" />
              <span>{{ property.lot_size }} sqft</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-[#036E5C]">
                ${{ property.price.toLocaleString() }}
              </span>
              <button
                class="bg-[#036E5C] text-white px-4 py-2 rounded-lg hover:bg-[#025a4a] transition-colors duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="filteredProperties.length === 0" class="text-center mt-8">
        <p class="text-xl text-gray-600">
          No properties found matching your search criteria.
        </p>
      </div>
    </main>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from "vue";
import { BedIcon, BathIcon, SquareIcon, SlidersIcon } from "lucide-vue-next";
import {fetchProperty} from '../server/supabase';

const isLoading = ref(true)

const searchQuery = ref("");

const properties = ref([])


const initFetch = async () => {
  properties.value = await fetchProperty('All')
};

onMounted(() => {
  isLoading.value = true;
  setTimeout(async () => {
    await initFetch();
    isLoading.value = false;
  }, 700);
});


const filteredProperties = computed(() => {
  return properties.value
  // return properties.value.filter(
  //   (property) =>
  //     property.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
  //     property.address.toLowerCase().includes(searchQuery.value.toLowerCase())
  // );
});
</script>

<style scoped>
.bg-properties {
  background: rgb(3, 110, 92);
  background: radial-gradient(
    circle,
    rgba(3, 110, 92, 1) 0%,
    rgba(3, 110, 92, 0.7017463235294117) 65%,
    rgba(3, 110, 92, 0.06869310224089631) 100%
  );
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
