<template>
	<div class="min-h-screen bg-gray-50 p-8">
		<div class="flex justify-between items-center mb-8">
			<h1 class="text-4xl font-bold text-[#036E5C]">My Listings</h1>
			<button
				@click="showForm = true"
				class="bg-[#036E5C] text-white py-2 px-4 rounded-md hover:bg-[#025a4a] transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
			>
				Create New Listing
			</button>
		</div>

		<!-- Existing Listings -->
		<div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div
				v-for="property in listings"
				:key="property.id"
				class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
			>
				<img :src="property.image" :alt="property.title" class="w-full h-64 object-cover" />
				<div class="p-6">
					<h2 class="text-2xl font-serif text-gray-900 mb-2">{{ property.name }}</h2>
					<p class="text-gray-600 mb-4">{{ property.address }}</p>
					<div class="flex justify-between items-center">
						<span class="text-[#036E5C] font-bold text-xl">${{ property?.price?.toLocaleString() }}</span>
						<div class="flex items-center">
							<StarIcon class="h-5 w-5 text-[#036E5C] mr-1" />
							<span class="text-gray-700">{{ property.rating }}</span>
						</div>
					</div>
					<div class="mt-4 flex items-center text-gray-600 text-sm">
						<BedIcon class="h-4 w-4 mr-1" />
						<span class="mr-4">{{ property.bedrooms }} Beds</span>
						<BathIcon class="h-4 w-4 mr-1" />
						<span class="mr-4">{{ property.bathrooms }} Baths</span>
						<SquareIcon class="h-4 w-4 mr-1" />
						<span>{{ property.lot_size }} sqft</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Loading Spinner -->
		<div v-else class="flex justify-center mt-32">
			<div class="wrapper">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="shadow"></div>
				<div class="shadow"></div>
				<div class="shadow"></div>
			</div>
		</div>

		<!-- Not Found -->
		<NotFound v-if="!isLoading && listings.length <= 0" />

		<!-- Popup Form -->
		<CreateListingForm v-if="showForm" @close="showForm = false" @property-created="handlePropertyCreated" />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchUserProperties, getCurrentUser } from '~/server/supabase';
import NotFound from '../../components/NotFound/NotFound.vue';
import { StarIcon, BedIcon, BathIcon, SquareIcon } from 'lucide-vue-next';
import CreateListingForm from '../../components/CreateListingForm.vue';

const listings = ref([]);
const isLoading = ref(true);
const user = ref(null);
const showForm = ref(false);

onMounted(async () => {
	try {
		user.value = await getCurrentUser();
		console.log('user.value', user.value);

		if (user.value) {
			await fetchListings();
		}
	} catch (error) {
		console.error('Error fetching properties:', error.message);
	} finally {
		isLoading.value = false;
	}
});

const fetchListings = async () => {
	listings.value = await fetchUserProperties(user.value.id);
	console.log('listings.value', listings.value);
};

const handlePropertyCreated = async () => {
	await fetchListings();
};
</script>

<style scoped>
.bg-gray-50 {
	background-color: #f9fafb;
}

/* Add any additional styles for the loading spinner here */
</style>
