<template>
	<teleport to="body">
		<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div class="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
				<div class="flex justify-between items-center mb-6">
					<h2 class="text-3xl font-bold text-[#036E5C]">Create New Listing</h2>
					<button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<form @submit.prevent="handleSubmit" class="space-y-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div class="space-y-2">
							<label for="name" class="block text-sm font-medium text-gray-700">Property Name</label>
							<input
								v-model="form.name"
								id="name"
								type="text"
								required
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
								placeholder="Enter property name"
							/>
						</div>
						<div class="space-y-2">
							<label for="address" class="block text-sm font-medium text-gray-700">Address</label>
							<input
								v-model="form.address"
								id="address"
								type="text"
								required
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
								placeholder="Enter property address"
							/>
						</div>
						<div class="space-y-2">
							<label for="price" class="block text-sm font-medium text-gray-700">Price</label>
							<div class="relative">
								<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
								<input
									v-model.number="form.price"
									id="price"
									type="number"
									required
									min="0"
									class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
									placeholder="Enter price"
								/>
							</div>
						</div>
						<div class="space-y-2">
							<label for="property_type" class="block text-sm font-medium text-gray-700">Property Type</label>
							<select
								v-model="form.property_type"
								id="property_type"
								required
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
							>
								<option value="" disabled selected>Select property type</option>
								<option value="House">House</option>
								<option value="Apartment">Apartment</option>
								<option value="Condo">Condo</option>
							</select>
						</div>
						<div class="space-y-2">
							<label for="bedrooms" class="block text-sm font-medium text-gray-700">Bedrooms</label>
							<input
								v-model.number="form.bedrooms"
								id="bedrooms"
								type="number"
								required
								min="0"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
								placeholder="Number of bedrooms"
							/>
						</div>
						<div class="space-y-2">
							<label for="bathrooms" class="block text-sm font-medium text-gray-700">Bathrooms</label>
							<input
								v-model.number="form.bathrooms"
								id="bathrooms"
								type="number"
								step="0.5"
								required
								min="0"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
								placeholder="Number of bathrooms"
							/>
						</div>
						<div class="space-y-2">
							<label for="lot_size" class="block text-sm font-medium text-gray-700">Lot Size (sqft)</label>
							<input
								v-model.number="form.lot_size"
								id="lot_size"
								type="number"
								required
								min="0"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
								placeholder="Enter lot size"
							/>
						</div>
						<div class="space-y-2">
							<label for="year_built" class="block text-sm font-medium text-gray-700">Year Built</label>
							<input
								v-model.number="form.year_built"
								id="year_built"
								type="number"
								required
								min="1800"
								:max="new Date().getFullYear()"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
								placeholder="Enter year built"
							/>
						</div>
					</div>
					<div class="space-y-2">
						<label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
						<input
							v-model="form.image"
							id="image"
							type="url"
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#036E5C] focus:border-transparent"
							placeholder="Enter image URL"
						/>
					</div>
					<div>
						<button
							type="submit"
							class="w-full bg-[#036E5C] text-white py-2 px-4 rounded-md hover:bg-[#025a4a] transition duration-300 text-lg font-semibold"
						>
							Create Listing
						</button>
					</div>
				</form>
			</div>
		</div>
	</teleport>
</template>

<script setup>
import { ref } from 'vue';
import { createProperty, getCurrentUser } from '~/server/supabase';

const emit = defineEmits(['close', 'property-created']);

const form = ref({
	name: '',
	address: '',
	price: null,
	property_type: '',
	bedrooms: null,
	bathrooms: null,
	lot_size: null,
	year_built: null,
	image: '',
	rating: 0,
	validated: false
});

const handleSubmit = async () => {
	try {
		const user = await getCurrentUser();
		if (!user) {
			throw new Error('User not authenticated');
		}

		const propertyData = {
			...form.value,
			user_id: user.id,
			created_at: new Date().toISOString()
		};

		await createProperty(propertyData);
		alert('Property created successfully!');

		// Reset form
		Object.keys(form.value).forEach((key) => {
			form.value[key] = key === 'validated' ? false : key === 'rating' ? 0 : '';
		});

		// Emit events to close the popup and refresh the listings
		emit('close');
		emit('property-created');
	} catch (error) {
		console.error('Error creating property:', error.message);
		alert('Failed to create property. Please try again.');
	}
};
</script>
