<template>
  <div class="min-h-screen bg-white text-gray-800">
    <div class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-center text-[#036E5C] mb-8">Frequently Asked Questions</h1>

      <p class="text-center mb-8 text-gray-600">
        Find answers to common questions about our property management services. Can't find what you're looking for? Feel free to contact us.
      </p>

      <div class="mb-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search FAQs..."
          class="w-full px-4 py-2 rounded-lg border-2 border-[#036E5C] focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
        />
      </div>

      <div v-for="(category, index) in filteredFAQs" :key="index" class="mb-8">
        <h2 class="text-2xl font-semibold text-[#036E5C] mb-4">{{ category.category }}</h2>
        <div v-for="(faq, faqIndex) in category.faqs" :key="faqIndex" class="mb-4">
          <button
            @click="toggleFAQ(faq)"
            class="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <span class="font-medium">{{ faq.question }}</span>
            <ChevronDownIcon
              :class="{ 'transform rotate-180': faq.isOpen }"
              class="w-5 h-5 text-[#036E5C] transition-transform duration-200"
            />
          </button>
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div v-if="faq.isOpen" class="p-4 bg-white border border-gray-200 rounded-b-lg">
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>

      <div class="mt-12 p-6 bg-[#036E5C] rounded-lg text-white text-center">
        <h2 class="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p class="mb-4">Our team is here to help. Contact us for personalized assistance.</p>
        <button class="bg-white text-[#036E5C] font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronDownIcon } from 'lucide-vue-next'

const searchQuery = ref('')

const faqData = ref([
  {
    category: 'General',
    faqs: [
      {
        question: 'What services do you offer?',
        answer: 'We offer a comprehensive range of property management services including tenant screening, rent collection, property maintenance, financial reporting, and more.',
        isOpen: false
      },
      {
        question: 'How do you handle tenant complaints?',
        answer: 'We have a dedicated team that promptly addresses tenant concerns. We aim to resolve issues within 24-48 hours, depending on the nature of the complaint.',
        isOpen: false
      }
    ]
  },
  {
    category: 'Financial',
    faqs: [
      {
        question: 'How often will I receive rental income?',
        answer: 'We typically process rental payments to property owners on a monthly basis, usually within the first week of each month.',
        isOpen: false
      },
      {
        question: 'What fees do you charge for your services?',
        answer: 'Our fees vary depending on the services required. We generally charge a percentage of the monthly rent, which covers most of our standard services. Please contact us for a detailed quote.',
        isOpen: false
      }
    ]
  },
  {
    category: 'Maintenance',
    faqs: [
      {
        question: 'How do you handle property maintenance and repairs?',
        answer: 'We have a network of trusted contractors for various maintenance needs. For minor repairs, we handle them promptly. For major repairs, we consult with property owners before proceeding.',
        isOpen: false
      },
      {
        question: 'Do you conduct regular property inspections?',
        answer: 'Yes, we conduct routine property inspections to ensure the property is well-maintained and to identify any potential issues early on.',
        isOpen: false
      }
    ]
  }
])

const filteredFAQs = computed(() => {
  if (!searchQuery.value) return faqData.value

  return faqData.value.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)
})

const toggleFAQ = (faq) => {
  faq.isOpen = !faq.isOpen
}
</script>
