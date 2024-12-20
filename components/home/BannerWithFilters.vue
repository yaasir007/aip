<template>
	<div class="relative bg-gray-900 text-white">
		<!-- Hero Background -->
		<div class="absolute inset-0 overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Real Estate Background"
				class="w-full h-full object-cover object-center"
			/>
			<div class="absolute inset-0 bg-black bg-opacity-60"></div>
		</div>

		<!-- Hero Content -->
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">Find Your Perfect Property</h1>
			<p class="text-xl text-center mb-12 max-w-3xl mx-auto">
				Discover a wide range of properties tailored to your needs. Use our advanced filters to find exactly what you're looking for.
			</p>

			<!-- Basic Filter -->
			<div class="bg-[#FEF4E0] bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 max-w-4xl mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<!-- <div>
            <label for="HeadlineAct" class="block text-sm font-medium"> Headliner </label>

            <select
              name="HeadlineAct"
              id="HeadlineAct"
              class="mt-1 w-full border-gray-300 px-2 py-1.5 rounded-sm text-gray-700 sm:text-sm"
            >
              <option value="">Please select</option>
              <option value="JM">John Mayer</option>
              <option value="SRV">Stevie Ray Vaughn</option>
              <option value="JH">Jimi Hendrix</option>
              <option value="BBK">B.B King</option>
              <option value="AK">Albert King</option>
              <option value="BG">Buddy Guy</option>
              <option value="EC">Eric Clapton</option>
            </select>
          </div> -->

					<div class="relative">
						<label for="property-type" class="block text-sm font-medium mb-1">Property Type</label>
						<select
							id="property-type"
							v-model="filters.propertyType"
							class="w-full bg-white bg-opacity-30 rounded-md border-0 text-white appearance-none px-2 py-1.5 focus:ring-2 focus:ring-white"
						>
							<option value="">Any</option>
							<option value="house">House</option>
							<option value="apartment">Apartment</option>
							<option value="condo">Condo</option>
							<option value="townhouse">Townhouse</option>
							<option value="land">Land</option>
						</select>
						<ChevronDownIcon class="absolute right-3 top-9 w-5 h-5 text-white pointer-events-none" />
					</div>

					<div>
						<label for="location" class="block text-sm font-medium mb-1">Location</label>
						<input
							type="text"
							id="location"
							v-model="filters.location"
							placeholder="Enter city or zip code"
							class="w-full px-2 py-1.5 bg-white bg-opacity-20 rounded-md border-0 text-white placeholder-gray-300 focus:ring-2 focus:ring-white"
						/>
					</div>
					<div class="relative">
						<label for="price-range" class="block text-sm font-medium mb-1">Price Range</label>
						<select
							id="price-range"
							v-model="filters.priceRange"
							class="w-full bg-white px-2 py-1.5 bg-opacity-20 rounded-md border-0 text-white appearance-none pr-8 focus:ring-2 focus:ring-white"
						>
							<option value="">Any</option>
							<option value="0-100000">$0 - $100,000</option>
							<option value="100000-250000">$100,000 - $250,000</option>
							<option value="250000-500000">$250,000 - $500,000</option>
							<option value="500000-1000000">$500,000 - $1,000,000</option>
							<option value="1000000+">$1,000,000+</option>
						</select>
						<ChevronDownIcon class="absolute right-3 top-9 w-5 h-5 text-white pointer-events-none" />
					</div>
				</div>
				<div class="mt-6 flex justify-center items-center">
					<!-- <button @click="openAdvancedFilter" class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#036E5C] hover:underline flex items-center">
            <SlidersIcon class="w-4 h-4 mr-1" />
            Advanced Filter
          </button> -->
					<button @click="search" class="bg-[#036E5C] hover:bg-blue-700 text-white px-5 py-2.5 rounded-md flex items-center">
						<SearchIcon class="w-4 h-4 mr-1" />
						Search
					</button>
				</div>
			</div>
		</div>

		<!-- Advanced Filter Modal -->
		<Teleport to="body">
			<div v-if="isAdvancedFilterOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
				<div class="bg-white rounded-lg p-6 w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
					<div class="flex justify-between items-center mb-4">
						<h3 class="text-lg font-medium text-gray-900">Advanced Filters</h3>
						<button @click="closeAdvancedFilter" class="text-gray-400 hover:text-gray-500">
							<XIcon class="w-6 h-6" />
						</button>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label for="bedrooms" class="block text-sm font-medium text-gray-700">Bedrooms</label>
							<div class="mt-1 relative rounded-md shadow-sm">
								<input
									type="number"
									id="bedrooms"
									v-model.number="advancedFilters.bedrooms"
									min="0"
									class="block p-2 w-full pr-10 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
									placeholder="Any"
								/>
								<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
									<BedIcon class="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>
						<div>
							<label for="bathrooms" class="block text-sm font-medium text-gray-700">Bathrooms</label>
							<div class="mt-1 relative rounded-md shadow-sm">
								<input
									type="number"
									id="bathrooms"
									v-model.number="advancedFilters.bathrooms"
									min="0"
									step="0.5"
									class="p-2 block w-full pr-10 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
									placeholder="Any"
								/>
								<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
									<ShowerHeadIcon class="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>
						<div>
							<label for="square-feet" class="block text-sm font-medium text-gray-700">Square Feet</label>
							<div class="mt-1 relative rounded-md shadow-sm">
								<input
									type="number"
									id="square-feet"
									v-model.number="advancedFilters.squareFeet"
									min="0"
									class="p-2 block w-full pr-10 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
									placeholder="Any"
								/>
								<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
									<SquareIcon class="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>
						<div>
							<label for="year-built" class="block text-sm font-medium text-gray-700">Year Built</label>
							<div class="mt-1 relative rounded-md shadow-sm">
								<input
									type="number"
									id="year-built"
									v-model.number="advancedFilters.yearBuilt"
									min="1800"
									max="2099"
									class="p-2 block w-full pr-10 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
									placeholder="Any"
								/>
								<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
									<CalendarIcon class="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>
						<div>
							<label for="lot-size" class="block text-sm font-medium text-gray-700">Lot Size (acres)</label>
							<div class="mt-1 relative rounded-md shadow-sm">
								<input
									type="number"
									id="lot-size"
									v-model.number="advancedFilters.lotSize"
									min="0"
									step="0.1"
									class="p-2 block w-full pr-10 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
									placeholder="Any"
								/>
								<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
									<TreesIcon class="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>
						<div>
							<label for="stories" class="block text-sm font-medium text-gray-700">Stories</label>
							<div class="mt-1 relative rounded-md shadow-sm">
								<input
									type="number"
									id="stories"
									v-model.number="advancedFilters.stories"
									min="1"
									max="100"
									class="p-2 block w-full pr-10 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
									placeholder="Any"
								/>
								<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
									<HomeIcon class="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>
						<div class="md:col-span-2">
							<label class="block text-sm font-medium text-gray-700 mb-2">Property Features</label>
							<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
								<label v-for="feature in propertyFeatures" :key="feature" class="inline-flex items-center">
									<input
										type="checkbox"
										v-model="advancedFilters.features"
										:value="feature"
										class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
									/>
									<span class="ml-2 text-sm text-gray-700">{{ feature }}</span>
								</label>
							</div>
						</div>
						<div class="md:col-span-2">
							<label class="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
							<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
								<label v-for="amenity in amenities" :key="amenity" class="inline-flex items-center">
									<input
										type="checkbox"
										v-model="advancedFilters.amenities"
										:value="amenity"
										class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
									/>
									<span class="ml-2 text-sm text-gray-700">{{ amenity }}</span>
								</label>
							</div>
						</div>
					</div>
					<div class="mt-6 flex justify-end space-x-3">
						<button
							@click="closeAdvancedFilter"
							class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 sm:text-sm"
						>
							Cancel
						</button>
						<button
							@click="applyAdvancedFilters"
							class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#036E5C] text-base font-medium text-white sm:text-sm"
						>
							Apply Filters
						</button>
					</div>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { SlidersIcon, SearchIcon, XIcon, ChevronDownIcon, BedIcon, ShowerHeadIcon, SquareIcon, CalendarIcon, TreesIcon, HomeIcon } from 'lucide-vue-next';

const filters = reactive({
	propertyType: '',
	location: '',
	priceRange: ''
});

const advancedFilters = reactive({
	bedrooms: null,
	bathrooms: null,
	squareFeet: null,
	yearBuilt: null,
	lotSize: null,
	stories: null,
	features: [],
	amenities: []
});

const propertyFeatures = ['Garage', 'Basement', 'Fireplace', 'Central Air', 'Hardwood Floors', 'Solar Panels', 'Smart Home', 'Waterfront', 'Mountain View'];

const amenities = ['Pool', 'Gym', 'Tennis Court', 'Playground', 'Clubhouse', 'Gated Community', 'Pet Friendly', 'Elevator', 'Parking'];

const isAdvancedFilterOpen = ref(false);

const openAdvancedFilter = () => {
	isAdvancedFilterOpen.value = true;
};

const closeAdvancedFilter = () => {
	isAdvancedFilterOpen.value = false;
};

const applyAdvancedFilters = () => {
	console.log('Applied advanced filters:', advancedFilters);
	closeAdvancedFilter();
};

const search = () => {
	console.log('Searching with filters:', { ...filters, ...advancedFilters });
};
</script>
