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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {{ property.title }}
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
              <span>{{ property.sqft }} sqft</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-[#036E5C]"
                >${{ property.price.toLocaleString() }}</span
              >
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
import { ref, computed } from "vue";
import { BedIcon, BathIcon, SquareIcon, SlidersIcon } from "lucide-vue-next";

const searchQuery = ref("");

const properties = ref([
  {
    id: 1,
    title: "Modern Downtown Apartment",
    address: "123 Main St, Cityville, ST 12345",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    price: 350000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Spacious Suburban Home",
    address: "456 Oak Ave, Suburbia, ST 67890",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    price: 550000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Cozy Studio Loft",
    address: "789 Pine St, Downtown, ST 54321",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 800,
    price: 200000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Luxury Penthouse Suite",
    address: "101 Skyline Blvd, Metropolis, ST 11111",
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3000,
    price: 1200000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Charming Cottage",
    address: "202 Meadow Ln, Countryside, ST 22222",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1000,
    price: 275000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Modern Townhouse",
    address: "303 Urban St, Cityscape, ST 33333",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    price: 450000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Beachfront Condo",
    address: "404 Shoreline Dr, Seaside, ST 44444",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    price: 600000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Mountain View Cabin",
    address: "505 Summit Rd, Highlands, ST 55555",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    price: 400000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Historic Brownstone",
    address: "606 Heritage Ave, Oldtown, ST 66666",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    price: 750000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Eco-Friendly Green Home",
    address: "707 Sustainable Way, Greenville, ST 77777",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1700,
    price: 500000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    title: "Urban Micro-Apartment",
    address: "808 Compact St, Metrocity, ST 88888",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 500,
    price: 180000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Lakefront Family Home",
    address: "909 Lakeview Dr, Watertown, ST 99999",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    price: 850000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    title: "Modern Suburban Home",
    address: "123 Maple St, Greenfield, CA 90210",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    price: 650000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    title: "Countryside Retreat",
    address: "789 Country Ln, Farmville, TX 75001",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 4000,
    price: 1200000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    title: "City Penthouse",
    address: "456 Highrise Blvd, Metropolis, NY 10001",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2500,
    price: 950000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    title: "Historic Colonial",
    address: "111 Old Town Rd, Williamsburg, VA 23185",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3700,
    price: 890000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    title: "Beachside Villa",
    address: "222 Ocean Ave, Santa Monica, CA 90401",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3200,
    price: 1150000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    title: "Rustic Cabin",
    address: "333 Forest Dr, Pineville, CO 80010",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    price: 450000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    title: "Downtown Condo",
    address: "444 Main St, Downtown, IL 60601",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    price: 700000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    title: "Suburban Ranch",
    address: "555 Apple Ln, Pleasantville, NJ 07001",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2700,
    price: 600000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    title: "Luxury Apartment",
    address: "666 Luxury Ave, Richland, CA 94016",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    price: 850000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    title: "Urban Loft",
    address: "777 Skyline Blvd, Urbania, OR 97005",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1900,
    price: 750000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    title: "Mountain Chalet",
    address: "888 Summit Rd, Alpine, CO 81211",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3600,
    price: 1100000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    title: "Lakefront Mansion",
    address: "999 Lakeside Blvd, Waterside, MI 48201",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5000,
    price: 2000000,
    image:
      "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);

const filteredProperties = computed(() => {
  return properties.value.filter(
    (property) =>
      property.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
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
</style>
