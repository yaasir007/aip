<template>
	<div class="min-h-screen bg-signin flex items-center justify-center p-4">
		<div class="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
			<div class="p-8">
				<h2 class="text-3xl font-bold text-center text-[#025a4a] mb-6">Sign In</h2>

				<form @submit.prevent="handleSubmit" class="space-y-6">
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

					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<input
								id="remember-me"
								v-model="rememberMe"
								type="checkbox"
								class="h-4 w-4 text-[#025a4a] focus:ring-[#025a4a] border-gray-300 rounded"
							/>
							<label for="remember-me" class="ml-2 block text-sm text-gray-700">Remember me</label>
						</div>
						<a href="#" class="text-sm text-[#025a4a] hover:underline">Forgot password?</a>
					</div>

					<button
						type="submit"
						class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#025a4a] hover:bg-[#014a3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#025a4a]"
					>
						Sign In
					</button>
				</form>

				<div class="mt-6">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300"></div>
						</div>
						<!-- <div class="relative flex justify-center text-sm">
							<span class="px-2 bg-white text-gray-500">Or continue with</span>
						</div> -->
					</div>
					<!--
            <div class="mt-6 grid grid-cols-3 gap-3">
              <button
                @click="signInWithSocial('google')"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              ></button>
              <button
                @click="signInWithSocial('facebook')"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FacebookIcon class="h-5 w-5 text-[#025a4a]" />
              </button>
              <button
                @click="signInWithSocial('twitter')"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <TwitterIcon class="h-5 w-5 text-[#025a4a]" />
              </button>
            </div>
          -->
				</div>
			</div>

			<div class="px-8 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-center">
				<p class="text-sm text-gray-600">
					Don't have an account?
					<a @click="goToSignUp" class="font-medium text-[#025a4a] hover:underline cursor-pointer">Sign up</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { FacebookIcon, TwitterIcon } from 'lucide-vue-next';
import { signInWithEmail } from '~/server/supabase';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const errors = reactive({
	email: '',
	password: ''
});
const router = useRouter();

const goToSignUp = () => {
	window.location.href = '/auth/signup';
};

const validateForm = () => {
	errors.email = '';
	errors.password = '';

	if (!email.value) {
		errors.email = 'Email is required';
	} else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
		errors.email = 'Invalid email format';
	}

	if (!password.value) {
		errors.password = 'Password is required';
	} else if (password.value.length < 8) {
		errors.password = 'Password must be at least 8 characters long';
	}

	return !errors.email && !errors.password;
};

const handleSubmit = async () => {
	// Implement your sign-in logic here
	console.log('terfffeer');
	if (validateForm()) {
		// Implement your sign-in logic here
		console.log('Sign in with:', { email: email.value, password: password.value, rememberMe: rememberMe.value });
		errors.password = await signInWithEmail(email.value, password.value, router);
	}
};

const signInWithSocial = (provider) => {
	// Implement your social sign-in logic here
	console.log('Sign in with:', provider);
};
</script>

<style>
.bg-signin {
	background: rgb(3, 110, 92);
	background: radial-gradient(circle, rgba(3, 110, 92, 1) 0%, rgba(3, 110, 92, 0.7017463235294117) 65%, rgba(3, 110, 92, 0.06869310224089631) 100%);
}
</style>
