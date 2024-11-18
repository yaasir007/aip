<template>
  <div class="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-extrabold text-gray-900 mb-8 text-center">Top Rated Property</h2>

      <!-- Property Type Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
            v-for="type in propertyTypes"
            :key="type"
            @click="selectedType = type"
            :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md',
            selectedType === type
              ? 'bg-blue-600 text-white shadow-blue-300'
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:shadow-blue-100'
          ]"
        >
          {{ type }}
        </button>
      </div>

      <!-- Property Grid -->
      <transition-group
          name="property-list"
          tag="div"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
            v-for="property in filteredProperties"
            :key="property.id"
            class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          <div class="relative">
            <img :src="property.image" :alt="property.title" class="w-full h-56 object-cover" />
            <div class="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-semibold text-blue-600">
              {{ property.type }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ property.title }}</h3>
            <p class="text-gray-600 mb-4 flex items-center">
              <MapPinIcon class="w-4 h-4 mr-2 text-gray-400" />
              {{ property.location }}
            </p>
            <div class="flex justify-between items-center mb-6">
              <span class="text-3xl font-bold text-blue-600">${{ property.price.toLocaleString() }}</span>
              <span v-if="property.type === 'Rental'" class="text-sm text-gray-500">per month</span>
            </div>
            <div class="flex justify-between text-gray-600 border-t border-gray-100 pt-4">
              <span v-if="property.bedrooms > 0" class="flex items-center">
                <BedDoubleIcon class="w-5 h-5 mr-2 text-gray-400" />
                {{ property.bedrooms }}
              </span>
              <span v-if="property.bathrooms > 0" class="flex items-center">
                <BathIcon class="w-5 h-5 mr-2 text-gray-400" />
                {{ property.bathrooms }}
              </span>
              <span class="flex items-center">
                <SquareIcon class="w-5 h-5 mr-2 text-gray-400" />
                {{ property.area }} sqft
              </span>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { BedDoubleIcon, BathIcon, SquareIcon, MapPinIcon } from 'lucide-vue-next'

const propertyTypes = ['All', 'Apartment', 'House', 'Rental', 'Land', 'Office']
const selectedType = ref('All')

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    type: 'Apartment',
    price: 350000,
    location: 'Downtown, City Center',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Spacious Family Home',
    type: 'House',
    price: 550000,
    location: 'Suburban Area, Green Valley',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Cozy Studio for Rent',
    type: 'Rental',
    price: 1200,
    location: 'University District',
    bedrooms: 1,
    bathrooms: 1,
    area: 500,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    title: 'Prime Commercial Land',
    type: 'Land',
    price: 1000000,
    location: 'Business Park, Tech Hub',
    bedrooms: 0,
    bathrooms: 0,
    area: 10000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    title: 'Modern Office Space',
    type: 'Office',
    price: 750000,
    location: 'Financial District, City Center',
    bedrooms: 0,
    bathrooms: 2,
    area: 3000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    title: 'Luxury Penthouse',
    type: 'Apartment',
    price: 1200000,
    location: 'Skyline View, Downtown',
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const filteredProperties = computed(() => {
  return selectedType.value === 'All'
      ? properties
      : properties.filter(property => property.type === selectedType.value)
})
</script>

<style scoped>
.property-list-enter-active,
.property-list-leave-active {
  transition: all 0.5s ease;
}
.property-list-enter-from,
.property-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>