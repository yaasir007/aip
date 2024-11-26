<template>
  <div class="max-w-7xl mx-auto px-4 py-16" style="height: 80vh;">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Want to publish your property?</h2>
      <p class="text-lg text-gray-600">
        Grab the opportunity to publish your properties on our platform for free!
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mt-16">
      <template v-for="(step, index) in steps" :key="step.title">
        <div
            class="text-center"
        >
          <div class="relative inline-block">
            <div
                class="w-24 h-24 bg-white rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center mx-auto overflow-hidden"
            >
              <component :is="step.icon" class="w-8 h-8 text-gray-700" />
            </div>
            <div
                class="bg-[#036E5C] absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium transition-all duration-300 ease-in-out"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </div>
          </div>
          <h3 class="text-xl font-bold mt-6 mb-4">{{ step.title }}</h3>
          <p class="text-gray-600 leading-relaxed">
            {{ step.description }}
          </p>
            <div class="mt-4">
              <button class="bg-[#036E5C] text-white px-4 py-2 rounded-full hover:bg-primary-dark transform transition duration-500 hover:scale-105">
                {{ step.cta }}
              </button>
            </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UserIcon, SearchIcon, SendIcon } from 'lucide-vue-next'

const hoveredStep = ref(null)

const steps = [
  {
    icon: UserIcon,
    title: 'Create An Account',
    description: 'Create an account to be granted more facilities and your panel to monitor your properties',
    cta: 'Sign Up Now'
  },
  {
    icon: SearchIcon,
    title: 'List your property',
    description: 'Fill the form along with all relevant images of your property to give it an edge! 😄',
    cta: 'Start Listing'
  },
  {
    icon: SendIcon,
    title: 'Let the Magic Happen! ✨',
    description: 'You will be notified whenever there is some interest for your listing!',
    cta: 'Get Notified'
  }
]
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.5s both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-bounce-delay-0 { animation: bounce 1s infinite 0.1s; }
.animate-bounce-delay-1 { animation: bounce 1s infinite 0.2s; }
.animate-bounce-delay-2 { animation: bounce 1s infinite 0.3s; }

@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.bg-primary {
  @apply bg-emerald-500;
}

.bg-primary-dark {
  @apply bg-emerald-600;
}
</style>
