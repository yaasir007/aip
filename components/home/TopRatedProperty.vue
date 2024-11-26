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
            <h2 class="text-2xl font-serif text-gray-900 mb-2">{{ property.title }}</h2>
            <p class="text-gray-600 mb-4">{{ property.location }}</p>
            <div class="flex justify-between items-center">
              <span class="text-[#036E5C] font-bold text-xl">${{ property.price.toLocaleString() }}</span>
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
              <span>{{ property.area }} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { StarIcon, BedIcon, BathIcon, SquareIcon } from 'lucide-vue-next'

const propertyTypes = ['All', 'House', 'Apartment', 'Office', 'Land']
const selectedType = ref('All')

const properties = [
  {
    id: 1,
    title: 'Luxurious Beachfront Villa',
    type: 'House',
    location: 'Malibu, California',
    price: 12500000,
    rating: 4.9,
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    image: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Modern Downtown Penthouse',
    type: 'Apartment',
    location: 'New York City, New York',
    price: 8750000,
    rating: 4.8,
    bedrooms: 4,
    bathrooms: 4.5,
    area: 4200,
    image: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Prime Office Space',
    type: 'Office',
    location: 'San Francisco, California',
    price: 15000000,
    rating: 4.7,
    bedrooms: 0,
    bathrooms: 4,
    area: 10000,
    image: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    title: 'Scenic Mountain Estate',
    type: 'House',
    location: 'Aspen, Colorado',
    price: 18500000,
    rating: 4.9,
    bedrooms: 8,
    bathrooms: 9,
    area: 12000,
    image: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    title: 'Exclusive Waterfront Land',
    type: 'Land',
    location: 'Lake Tahoe, Nevada',
    price: 7500000,
    rating: 4.6,
    bedrooms: 0,
    bathrooms: 0,
    area: 87120, // 2 acres
    image: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    title: 'Luxury High-Rise Condo',
    type: 'Apartment',
    location: 'Miami, Florida',
    price: 6250000,
    rating: 4.8,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3800,
    image: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const filteredProperties = computed(() => {
  if (selectedType.value === 'All') {
    return properties
  }
  return properties.filter(property => property.type === selectedType.value)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

h1, h2 {
  font-family: 'Playfair Display', serif;
}
</style>
