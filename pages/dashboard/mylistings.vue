<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <h1 class="text-3xl font-bold text-[#036E5C] mb-6">My Listings</h1>

    <!-- Example Listings Content -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Replace with actual data fetching logic or dynamic listings -->
      <div v-for="listing in listings" :key="listing.id" class="bg-white p-6 rounded-lg shadow-lg">
        <img :src="listing.image" alt="Listing Image" class="w-full h-40 object-cover rounded-md mb-4" />
        <h3 class="font-semibold text-lg text-[#036E5C]">{{ listing.title }}</h3>
        <p class="text-gray-600 mt-2">{{ listing.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// definePageMeta({
//   middleware: 'auth',
// });

const listings = ref([
  {
    id: 1,
    title: 'Cozy 2-Bedroom Apartment',
    description: 'A beautiful and cozy 2-bedroom apartment in the city center.',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 2,
    title: 'Modern Office Space',
    description: 'A modern office space with plenty of natural light and a great view.',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 3,
    title: 'Luxury Villa',
    description: 'A luxurious villa with a private pool and garden.',
    image: 'https://via.placeholder.com/200',
  },
]);
</script>

<style scoped>
/* Optional styles for layout */
.bg-gray-50 {
  background-color: #f9fafb;
}
</style>
