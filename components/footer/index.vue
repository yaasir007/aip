<template>
  <footer class="bg-gray-100 text-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo and About -->
        <div>
          <img src="/public/logo.svg" alt="Company Logo" class="h-8 w-auto mb-4" />
          <p class="text-gray-600 text-sm">
            Your trusted partner in property management, providing exceptional service since 2005.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">Properties</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">Services</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">About Us</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center">
              <MapPinIcon class="h-5 w-5 mr-2 text-gray-500" />
              <span>123 Property St, Real City, 12345</span>
            </li>
            <li class="flex items-center">
              <PhoneIcon class="h-5 w-5 mr-2 text-gray-500" />
              <span>(123) 456-7890</span>
            </li>
            <li class="flex items-center">
              <MailIcon class="h-5 w-5 mr-2 text-gray-500" />
              <span>info@realestate.com</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter Signup -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gray-900">Stay Updated</h3>
          <form @submit.prevent="subscribeNewsletter" class="space-y-2">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full px-3 py-2 bg-white border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Social Media and Copyright -->
      <div class="mt-8 pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center">
        <div class="flex space-x-4 mb-4 sm:mb-0">
          <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            <FacebookIcon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            <TwitterIcon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            <InstagramIcon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            <LinkedinIcon class="h-6 w-6" />
          </a>
        </div>
        <div class="text-gray-600 text-sm">
          © {{ new Date().getFullYear() }} Your Real Estate Company. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-vue-next'

const email = ref('')

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic here
  console.log('Subscribing email:', email.value)
  // Reset email input after submission
  email.value = ''
}
</script>
