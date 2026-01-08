<template>
  <footer class="bg-gray-900 dark:bg-gray-800 text-white py-0 md:py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <a title="DEV TIT" href="#" class="text-2xl font-bold">
            <span class="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Khmersimpledev</span>
          </a>
          <p class="text-gray-400 mt-2">Web Developer</p>
        </div>

        <div class="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
          <a :title="item.name" v-for="item in menuItems" :key="item.id" :href="item.url"
            class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            {{ item.name }}
          </a>
         
        </div>
         <a title="QR Studio Tools" target="_blank" href="https://v0-free-qrcode.vercel.app"
              class="mb-3 md:mb-0 whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group">
              <span
                 class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x infinite"></span>
              <span class="relative z-10">QR Studio Tools</span>
          </a>
        <div class="flex space-x-4">
          <a :title="social.name" v-for="social in socials" :key="social.name" :href="social.url" 
            class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
            :aria-label="social.name" target="_blank" rel="noopener noreferrer">
            <i :class="`fab fa-${social.icon} text-xl`"></i>
          </a>
        </div>
      </div>

      <hr class="border-gray-800 dark:border-gray-700 my-8" />

      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          © {{currentYear}} Khmersimpledev. All rights reserved. By Mr.TIT
        </p>
        <div class="flex space-x-4 mt-4 mb-6 md:mt-0">
          <a href="#"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300 cursor-pointer">
            Privacy Policy
          </a>
          <a href="#"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300 cursor-pointer">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

defineProps({
  socials: {
    type: Array as () => Array<{ name: string; icon: string; url: string}>,
    required: true,
  },
  menuItems: {
    type: Array as () => Array<{ id: string; name: string; url: string }>,
    required: true
  }
});
const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* Footer specific styles if needed */
</style>