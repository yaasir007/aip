<template>
  <div class="min-h-screen bg-signin flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
      <div class="p-8">
        <h2 class="text-3xl font-bold text-center text-[#025a4a] mb-6">Create an Account</h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#025a4a] focus:border-[#025a4a]"
              :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#025a4a] focus:border-[#025a4a]"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#025a4a] focus:border-[#025a4a]"
              :class="{ 'border-red-500': errors.password }"
            />
            <p v-if="errors.password" class="mt-1 text-xs text-red-500">{{ errors.password }}</p>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#025a4a] focus:border-[#025a4a]"
              :class="{ 'border-red-500': errors.confirmPassword }"
            />
            <p v-if="errors.confirmPassword" class="mt-1 text-xs text-red-500">{{ errors.confirmPassword }}</p>
          </div>

          <div class="flex items-center">
            <input
              id="terms"
              v-model="agreeToTerms"
              type="checkbox"
              required
              class="h-4 w-4 text-[#025a4a] focus:ring-[#025a4a] border-gray-300 rounded"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-700">
              I agree to the <a href="#" class="text-[#025a4a] hover:underline">Terms and Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#025a4a] hover:bg-[#014a3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#025a4a]"
          >
            Sign Up
          </button>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <button
              @click="signUpWithSocial('google')"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <!-- <GoogleIcon class="h-5 w-5 text-[#025a4a]" /> -->
            </button>
            <button
              @click="signUpWithSocial('facebook')"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FacebookIcon class="h-5 w-5 text-[#025a4a]" />
            </button>
            <button
              @click="signUpWithSocial('twitter')"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <TwitterIcon class="h-5 w-5 text-[#025a4a]" />
            </button>
          </div>
        </div>
      </div>

      <div class="px-8 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-center">
        <p class="text-sm text-gray-600">
          Already have an account?
          <a href="#" class="font-medium text-[#025a4a] hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { FacebookIcon, TwitterIcon } from 'lucide-vue-next'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeToTerms = ref(false)
const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const validateForm = () => {
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''

  if (!name.value.trim()) {
    errors.name = 'Name is required'
  }

  if (!email.value) {
    errors.email = 'Email is required'
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errors.email = 'Invalid email format'
  }

  if (!password.value) {
    errors.password = 'Password is required'
  } else if (password.value.length < 8) {
    errors.password = 'Password must be at least 8 characters long'
  }

  if (password.value !== confirmPassword.value) {
    errors.confirmPassword = 'Passwords do not match'
  }

  if (!agreeToTerms.value) {
    return false
  }

  return !errors.name && !errors.email && !errors.password && !errors.confirmPassword
}

const handleSubmit = () => {
  if (validateForm()) {
    // Implement your sign-up logic here
    console.log('Sign up with:', { name: name.value, email: email.value, password: password.value })
  }
}

const signUpWithSocial = (provider) => {
  // Implement your social sign-up logic here
  console.log('Sign up with:', provider)
}
</script>


<style>
.bg-signin {
  background: rgb(3, 110, 92);
  background: radial-gradient(
    circle,
    rgba(3, 110, 92, 1) 0%,
    rgba(3, 110, 92, 0.7017463235294117) 65%,
    rgba(3, 110, 92, 0.06869310224089631) 100%
  );
}
</style>
