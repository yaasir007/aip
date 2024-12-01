<script setup>
</script>

<template>
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="flex items-center" href="/">
            <!-- <span style="font-family: 'Avenir Next Condensed'; font-size: 2rem; text-decoration: underline;">AIP</span> -->
            <img src="/public/Full.png" alt="" width="180">
            <!-- <span style="font-size: 1.35rem;font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;font-weight: 600; color: #036E5C;">aip</span> -->
          </a>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <NuxtLink to="/properties" class="text-gray-500 transition hover:text-gray-500/75" >
                Properties
              </NuxtLink>

              <NuxtLink to="/about" class="text-gray-500 transition hover:text-gray-500/75" >
                About
              </NuxtLink>

              <!-- <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
              </li>

              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
              </li>

              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
              </li>

              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
              </li> -->

              <NuxtLink to="/faqs" class="text-gray-500 transition hover:text-gray-500/75" >
                FAQs
              </NuxtLink>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <NuxtLink to="/auth/signin" class="rounded-md bg-[#036E5C] px-5 py-2.5 text-sm font-medium text-white shadow" >
                Login
              </NuxtLink>

              <div class="hidden sm:flex">
                <NuxtLink to="/auth/signup" class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#036E5C]" >
                  Register
                </NuxtLink>
              </div>
            </div>

            <div class="block md:hidden">
              <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
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
