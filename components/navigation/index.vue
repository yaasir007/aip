<template>
	<header class="bg-white">
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex-1 md:flex md:items-center md:gap-12">
					<a class="flex items-center" href="/">
						<img v-if="viewport.isLessThan('tablet')" src="/public/Icon.svg" alt="" width="50" />
						<img v-else src="/public/Full.svg" alt="" width="150" />
					</a>
				</div>

				<div class="md:flex md:items-center md:gap-12">
					<nav aria-label="Global" class="hidden md:block">
						<ul class="flex items-center gap-6 text-sm">
							<NuxtLink to="/properties" class="text-gray-500 transition hover:text-gray-500/75"> Properties </NuxtLink>

							<NuxtLink to="/about" class="text-gray-500 transition hover:text-gray-500/75"> About </NuxtLink>

							<NuxtLink to="/faqs" class="text-gray-500 transition hover:text-gray-500/75"> FAQs </NuxtLink>
						</ul>
					</nav>

					<div class="flex items-center gap-4">
						<div class="sm:flex sm:gap-4" v-if="!loggedIn">
							<NuxtLink to="/auth/signin" class="rounded-md bg-[#036E5C] px-5 py-2.5 text-sm font-medium text-white shadow"> Login </NuxtLink>

							<div class="hidden sm:flex">
								<NuxtLink to="/auth/signup" class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#036E5C]"> Register </NuxtLink>
							</div>
						</div>
						<div class="sm:flex sm:gap-4" v-else>
							<NuxtLink to="/dashboard/mylistings" class="rounded-md bg-[#036E5C] px-5 py-2.5 text-sm font-medium text-white shadow">
								My Listings
							</NuxtLink>
							<NuxtLink to="/dashboard/myprofile" class="flex items-center">
								<!-- Avatar image -->
								<User class="w-8 h-8 mr-3 flex" />
							</NuxtLink>
						</div>

						<div class="block md:hidden">
							<button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
								<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { isLoggedIn, subscribeToAuthChanges } from '~/server/supabase';
import { User } from 'lucide-vue-next';

const viewport = useViewport();
const loggedIn = ref(false);
const sessionChecked = ref(false);

onMounted(() => {
	// Subscribe to auth state changes
	const unsubscribe = subscribeToAuthChanges((isLoggedInState) => {
		loggedIn.value = isLoggedInState;
		sessionChecked.value = true; // Auth state is now determined
	});

	// Cleanup subscription when the component is destroyed
	onBeforeUnmount(() => {
		unsubscribe();
	});

	// Perform initial session check
	(async () => {
		loggedIn.value = await isLoggedIn();
		console.log('loggedIn.value', loggedIn.value);
		sessionChecked.value = true; // Auth state is now determined
	})();
});
</script>
