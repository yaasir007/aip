<template>
  <div class="container mx-auto p-6">
    <button>logout</button>
    <h2 class="text-3xl font-bold mb-4">My Profile</h2>

    <div class="bg-white shadow-md rounded-md p-6">
      <div class="flex items-center space-x-4">
        <!-- User Avatar (you can customize this part) -->
        <div class="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
          <span class="text-xl text-white">A</span> <!-- Placeholder for the avatar -->
        </div>

        <!-- User Info -->
        <div>
          <p class="font-semibold text-xl">{{user?.user_metadata.name}}</p>
          <p class="text-gray-500">{{user?.email}}</p>
          <p class="text-gray-400">Member since 2024</p>
        </div>
      </div>

      <div class="mt-6">
        <button class="bg-blue-500 text-white py-2 px-4 rounded-md">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCurrentUser } from '~/server/supabase'


const user = ref(null)

onMounted(async () => {
  user.value = await getCurrentUser()
})
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
