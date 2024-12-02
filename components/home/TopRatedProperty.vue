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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="property in filteredProperties"
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed ,onMounted} from 'vue'
import { StarIcon, BedIcon, BathIcon, SquareIcon } from 'lucide-vue-next'
import {supabase} from '../server/supabase';
const propertyTypes = ['All', 'House', 'Apartment', 'Office', 'Land']
const selectedType = ref('All')
const properties = ref([])

const initFetch = async () => {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6);

    if (error) {
      throw error;
    }

    console.log('Fetched properties:', data);

    properties.value = data;
    console.log("properties.value:", properties.value);
  } catch (err) {
    console.error('Error fetching properties:', err);
  }
};

onMounted(() => {
  initFetch();
});

watch(selectedType, (newVal) => {

})


const filteredProperties = computed(() => {
  if (selectedType.value === 'All') {
    return properties.value;
  }
  return properties.value.filter(property => property.type === selectedType.value);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

h1, h2 {
  font-family: 'Playfair Display', serif;
}
</style>
