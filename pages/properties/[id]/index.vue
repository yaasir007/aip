<template>
  <div class="min-h-screen bg-white">
    <!-- Property Images Gallery -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="col-span-1 md:col-span-2 lg:col-span-2 h-[400px]">
          <img
              src="https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Main Property Image"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div class="hidden lg:grid grid-rows-2 gap-4">
          <img
              src="https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Property Image"
            class="w-full h-full object-cover rounded-lg"
          />
          <img
              src="https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Property Image"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>

    <!-- Property Details -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div class="flex-1">
          <div class="flex items-center gap-4 mb-4">
            <h1 class="text-3xl font-bold">Luxury Family Home</h1>
            <span class="px-3 py-1 bg-emerald-500 text-white text-sm rounded-full">For Rent</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Featured</span>
          </div>
          <p class="text-gray-600 mb-6">1421 San Pedro St, Los Angeles, CA 90015</p>

          <!-- Property Features -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div class="flex items-center gap-2">
              <i class="pi pi-home text-gray-400"></i>
              <div>
                <p class="text-sm text-gray-500">Living Area</p>
                <p class="font-semibold">3,500 sqft</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <i class="pi pi-building text-gray-400"></i>
              <div>
                <p class="text-sm text-gray-500">Bedrooms</p>
                <p class="font-semibold">4</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <i class="pi pi-shield text-gray-400"></i>
              <div>
                <p class="text-sm text-gray-500">Bathrooms</p>
                <p class="font-semibold">3.5</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <i class="pi pi-car text-gray-400"></i>
              <div>
                <p class="text-sm text-gray-500">Garage</p>
                <p class="font-semibold">2 Cars</p>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Description</h2>
            <p class="text-gray-600 leading-relaxed">
              This stunning luxury family home offers the perfect blend of elegance and comfort.
              Featuring modern architecture, high-end finishes, and thoughtfully designed spaces,
              this property provides an exceptional living experience. The open-concept layout,
              floor-to-ceiling windows, and premium appliances make this home perfect for both
              family living and entertaining.
            </p>
          </div>
        </div>

        <!-- Price and Agent Card -->
        <div class="w-full lg:w-80 bg-white rounded-lg border p-6">
          <div class="text-3xl font-bold mb-6">$15,000<span class="text-gray-500 text-lg">/mo</span></div>

          <!-- Agent Info -->
          <div class="flex items-center gap-4 mb-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Agent"
              class="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 class="font-semibold">Sarah Johnson</h3>
              <p class="text-gray-500 text-sm">Luxury Property Specialist</p>
            </div>
          </div>

          <!-- Contact Buttons -->
          <div class="space-y-3">
            <button class="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Contact Agent
            </button>
            <button class="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {fetchProperty} from '../server/supabase';
const properties = ref([])
const isLoading = ref(true)

const initFetch = async () => {
  properties.value = await fetchProperty({})
};

onMounted(() => {
  isLoading.value = true;
  setTimeout(async () => {
    await initFetch();
    isLoading.value = false;
  }, 700);
});

const route = useRoute();
const id = route.params.id;


</script>
