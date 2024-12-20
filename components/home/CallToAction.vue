<template>
	<div class="bg-gradient-to-r from-[#056e5c] to-[#14b8aa] text-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
		<div class="max-w-6xl mx-auto relative z-10">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-6 animate-fade-in-down">House Solutions</h2>
			<p class="text-lg text-center mb-8 max-w-2xl mx-auto animate-fade-in-up">Sustainable technology for cutting-edge property protection.</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div
					v-for="(feature, index) in features"
					:key="index"
					class="flex items-center bg-white bg-opacity-10 rounded-lg p-4 transform transition duration-300 hover:bg-opacity-20"
				>
					<div class="bg-white rounded-full p-2 mr-4">
						<component :is="feature.icon" class="w-8 h-8 text-[#056e5c]" />
					</div>
					<div class="text-left">
						<h3 class="text-xl font-semibold mb-1">{{ feature.title }}</h3>
						<p class="text-sm text-teal-100">{{ feature.description }}</p>
					</div>
				</div>
			</div>
			<div class="mt-10 text-center">
				<button class="bg-white text-[#056e5c] font-bold py-2 px-6 rounded-full hover:bg-teal-100 transition duration-300 text-sm">
					Discover Solutions
				</button>
			</div>
		</div>
		<div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
			<div class="absolute top-0 left-0 w-full h-full animate-float">
				<Sun class="absolute top-1/4 left-1/4 w-16 h-16 text-yellow-300" />
				<Camera class="absolute top-3/4 right-1/4 w-16 h-16 text-blue-300" />
				<ShieldCheck class="absolute bottom-1/4 left-1/3 w-16 h-16 text-green-300" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { Sun, Camera, ShieldCheck } from 'lucide-vue-next';

const features = [
	{
		icon: Sun,
		title: 'Solar-Powered',
		description: 'Clean energy for advanced security systems.'
	},
	{
		icon: Camera,
		title: 'Smart Surveillance',
		description: 'AI-enhanced 24/7 monitoring and alerts.'
	},
	{
		icon: ShieldCheck,
		title: 'Integrated Protection',
		description: 'Comprehensive eco-friendly safeguarding.'
	}
];
</script>

<style scoped>
@keyframes float {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-10px);
	}
	100% {
		transform: translateY(0px);
	}
}

@keyframes fadeInDown {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-float {
	animation: float 6s ease-in-out infinite;
}

.animate-fade-in-down {
	animation: fadeInDown 0.8s ease-out;
}

.animate-fade-in-up {
	animation: fadeInUp 0.8s ease-out;
}
</style>
