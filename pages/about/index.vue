<template>
  <div class="min-h-screen bg-white text-gray-800">
    <header class="bg-about text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-center">
          About Our Company
        </h1>
        <p class="text-xl text-center mt-4">
          Leading the way in property management excellence
        </p>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12">
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-[#036E5C] mb-6">Our Story</h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <p class="text-lg leading-relaxed">
              Founded in 2005, our company has grown from a small local
              operation to a leading property management firm serving multiple
              regions. Our journey has been marked by a commitment to
              excellence, innovation, and customer satisfaction.
            </p>
            <p class="text-lg leading-relaxed">
              Over the years, we've managed thousands of properties, helping
              landlords maximize their investments and tenants find their
              perfect homes. Our experience has taught us that successful
              property management is about more than just collecting rent – it's
              about building relationships and communities.
            </p>
            <div class="mt-6 flex items-center space-x-4">
              <div class="flex items-center">
                <BuildingIcon class="w-8 h-8 text-[#036E5C]" />
                <span class="ml-2 font-semibold">5000+ Properties Managed</span>
              </div>
              <div class="flex items-center">
                <UsersIcon class="w-8 h-8 text-[#036E5C]" />
                <span class="ml-2 font-semibold">10000+ Happy Tenants</span>
              </div>
            </div>
          </div>
          <div class="relative h-96 md:h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1677529497048-2bf5899e68de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our growth journey"
              class="rounded-lg shadow-lg object-cover w-full h-full"
            />
            <div
              class="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md"
            >
              <p class="font-semibold text-[#036E5C]">Est. 2005</p>
              <p class="text-sm text-gray-600">18 years of excellence</p>
            </div>
          </div>
        </div>
        <div class="mt-12 bg-gray-100 p-6 rounded-lg">
          <h3 class="text-2xl font-semibold text-[#036E5C] mb-4">
            Our Growth Timeline
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="flex items-center space-x-3">
              <CalendarIcon class="w-8 h-8 text-[#036E5C]" />
              <div>
                <p class="font-semibold">2005</p>
                <p class="text-sm text-gray-600">Company Founded</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <TrendingUpIcon class="w-8 h-8 text-[#036E5C]" />
              <div>
                <p class="font-semibold">2010</p>
                <p class="text-sm text-gray-600">Expanded to 3 Cities</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <AwardIcon class="w-8 h-8 text-[#036E5C]" />
              <div>
                <p class="font-semibold">2015</p>
                <p class="text-sm text-gray-600">Industry Award Winner</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <GlobeIcon class="w-8 h-8 text-[#036E5C]" />
              <div>
                <p class="font-semibold">2023</p>
                <p class="text-sm text-gray-600">National Presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-3xl font-bold text-[#036E5C] mb-6">Our Mission</h2>
        <p class="text-xl mb-4">
          To provide unparalleled property management services that create value
          for property owners, comfortable living experiences for tenants, and
          positive impacts on the communities we serve.
        </p>
        <div class="grid md:grid-cols-3 gap-8 mt-8">
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-[#036E5C]">
              Excellence
            </h3>
            <p>
              We strive for excellence in every aspect of our operations, from
              customer service to property maintenance.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-[#036E5C]">Integrity</h3>
            <p>
              We conduct our business with the highest level of integrity,
              ensuring transparency and trust in all our dealings.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-[#036E5C]">
              Innovation
            </h3>
            <p>
              We continuously seek innovative solutions to improve our services
              and stay ahead in the property management industry.
            </p>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-3xl font-bold text-[#036E5C] mb-6">Our Team</h2>
        <p class="mb-8">
          Our success is driven by our dedicated team of professionals who bring
          a wealth of experience and expertise to every project.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="text-center"
          >
            <img
              :src="member.photo"
              :alt="member.name"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="font-semibold text-lg">{{ member.name }}</h3>
            <p class="text-sm text-gray-600">{{ member.position }}</p>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-3xl font-bold text-[#036E5C] mb-6">Our Achievements</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Awards and Recognitions</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                Best Property Management Company - Real Estate Excellence Awards
                2022
              </li>
              <li>
                Top 10 Innovative Companies in Real Estate - PropTech Innovators
                2021
              </li>
              <li>
                Customer Satisfaction Award - National Landlord Association 2020
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Key Milestones</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Expanded operations to 5 new cities in the last 2 years</li>
              <li>
                Launched an AI-powered property management platform in 2021
              </li>
              <li>
                Achieved a 98% tenant satisfaction rate in our annual survey
              </li>
              <li>
                Successfully managed over 10,000 properties since our inception
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-3xl font-bold text-[#036E5C] mb-6">
          Community Involvement
        </h2>
        <p class="mb-6">
          We believe in giving back to the communities we serve. Our company is
          actively involved in various community initiatives and charitable
          activities.
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-[#036E5C]">
              Affordable Housing Initiative
            </h3>
            <p>
              We partner with local non-profits to provide affordable housing
              solutions to low-income families.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-[#036E5C]">
              Environmental Sustainability
            </h3>
            <p>
              Our green initiative promotes eco-friendly practices in property
              management and maintenance.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3 text-[#036E5C]">
              Youth Education Program
            </h3>
            <p>
              We sponsor educational programs to support underprivileged youth
              in our communities.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-3xl font-bold text-[#036E5C] mb-6">Contact Us</h2>
        <p class="mb-6">
          We'd love to hear from you! Whether you're a property owner looking
          for management services or a potential tenant, our team is here to
          assist you.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>
            <p class="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
            <p class="mb-2"><strong>Email:</strong> info@yourcompany.com</p>
            <p class="mb-2">
              <strong>Address:</strong> 123 Property Lane, Real Estate City, ST
              12345
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Office Hours</h3>
            <p class="mb-2">
              <strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM
            </p>
            <p class="mb-2"><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
            <p class="mb-2"><strong>Sunday:</strong> Closed</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#036E5C] text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>
          &copy; 2023 Your Property Management Company. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  BuildingIcon,
  UsersIcon,
  CalendarIcon,
  TrendingUpIcon,
  AwardIcon,
  GlobeIcon,
} from "lucide-vue-next";

const teamMembers = ref([
  {
    name: "John Doe",
    position: "CEO",
    photo:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    position: "COO",
    photo:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mike Johnson",
    position: "Head of Property Management",
    photo:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarah Brown",
    position: "Customer Relations Manager",
    photo:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);
</script>

<style lang="scss" scoped>
.bg-about {
  background: rgb(3,110,92);
  background: radial-gradient(circle, rgba(3,110,92,1) 0%, rgba(3,110,92,0.7017463235294117) 65%, rgba(3,110,92,0.06869310224089631) 100%);
}
</style>
