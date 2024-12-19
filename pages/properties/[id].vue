<template>
	<div v-if="property" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Image Carousel -->
		<div class="mb-8">
			<swiper
				:modules="[Navigation, Pagination]"
				:slides-per-view="1"
				:space-between="30"
				navigation
				:pagination="{ clickable: true }"
				:loop="true"
				class="h-[400px] md:h-[500px] lg:h-[600px]"
			>
				<swiper-slide v-for="(image, index) in carouselImages" :key="index">
					<img :src="image" :alt="`${property.name} - View ${index + 1}`" class="w-full h-full object-cover rounded-lg" />
				</swiper-slide>
			</swiper>
		</div>

		<!-- Property Details -->
		<div class="flex flex-col lg:flex-row gap-8">
			<div class="lg:w-2/3 shadow-[0px_-2px_6px_rgba(0,0,0,0.1),0px_2px_6px_rgba(0,0,0,0.08)] rounded-lg p-6 bg-white">
				<div class="flex items-center gap-4 mb-4">
					<h1 class="text-3xl font-bold">{{ property.name }}</h1>
					<span class="px-3 py-1 bg-green-500 text-white text-sm rounded-full">{{ property.property_status }}</span>
				</div>
				<p class="text-gray-600 mb-6">{{ property.address }}</p>

				<!-- Property Features -->
				<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
					<div class="flex items-center gap-2">
						<i class="pi pi-home text-gray-400"></i>
						<div>
							<p class="text-sm text-gray-500">Living Area</p>
							<p class="font-semibold">{{ property.sq_footage }} sqft</p>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<i class="pi pi-building text-gray-400"></i>
						<div>
							<p class="text-sm text-gray-500">Bedrooms</p>
							<p class="font-semibold">{{ property.bedrooms }}</p>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<i class="pi pi-shield text-gray-400"></i>
						<div>
							<p class="text-sm text-gray-500">Bathrooms</p>
							<p class="font-semibold">{{ property.bathrooms }}</p>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<i class="pi pi-calendar text-gray-400"></i>
						<div>
							<p class="text-sm text-gray-500">Year Built</p>
							<p class="font-semibold">{{ new Date(property.year_built).getFullYear() }}</p>
						</div>
					</div>
				</div>

				<!-- Description -->
				<div class="mb-8">
					<h2 class="text-xl font-semibold mb-4">Description</h2>
					<p class="text-gray-600 leading-relaxed">{{ property.property_description }}</p>
				</div>

				<!-- Additional Details -->
				<div class="mb-8">
					<h2 class="text-xl font-semibold mb-4">Additional Details</h2>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<p class="text-sm text-gray-500">Property ID</p>
							<p class="font-semibold">{{ property.property_id }}</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Property Type</p>
							<p class="font-semibold">{{ property.property_type }}</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Lot Size</p>
							<p class="font-semibold">{{ property.lot_size }} acres</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Agency</p>
							<p class="font-semibold">{{ property.agency }}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="lg:w-1/3">
				<div class="bg-white rounded-lg shadow-[0px_-2px_6px_rgba(0,0,0,0.1),0px_2px_6px_rgba(0,0,0,0.08)] rounded-lg p-6 bg-white p-6">
					<h3 class="text-xl font-semibold mb-4">Contact our Team!</h3>
					<div class="mb-4"></div>
					<form @submit.prevent="sendWhatsAppMessage">
						<div class="mb-4">
							<label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
							<input
								type="text"
								id="name"
								v-model="form.name"
								required
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div class="mb-4">
							<label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
							<input
								type="email"
								id="email"
								v-model="form.email"
								required
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div class="mb-4">
							<label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
							<input
								type="tel"
								id="phone"
								v-model="form.phone"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div class="mb-4">
							<label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
							<textarea
								id="message"
								v-model="form.message"
								rows="4"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							></textarea>
						</div>
						<button
							type="submit"
							class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
						>
							<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
								/>
							</svg>
							Send WhatsApp Message
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchOneProperty } from '../../server/supabase';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const property = ref(null);
const route = useRoute();

const carouselImages = computed(() => {
	if (!property.value) return [];
	return Array(5).fill(property.value.image);
});

onMounted(() => {
	asyncData();
});

const asyncData = async () => {
	const id = route.params.id;
	console.log('id:', id);
	property.value = await fetchOneProperty(id);
	console.log(property.value);
};

const form = reactive({
	name: '',
	email: '',
	phone: '',
	message: ''
});

const sendWhatsAppMessage = () => {
	const phoneNumber = '+23057905369';
	const message = encodeURIComponent(
		`Hello, I'm interested in the property: ${property.value.name} (ID: ${property.value.property_id})\n\n` +
			`Name: ${form.name}\n` +
			`Email: ${form.email}\n` +
			`Phone: ${form.phone}\n\n` +
			`Message: ${form.message}` +
			`Id:${property.id}`
	);

	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
	window.open(whatsappUrl, '_blank');

	// Reset form after sending
	Object.keys(form).forEach((key) => (form[key] = ''));
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
	color: white;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 30px 20px;
	border-radius: 5px;
}

.swiper-pagination-bullet-active {
	background-color: white;
}
</style>
