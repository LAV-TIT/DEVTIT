<template>
  <footer class="bg-gray-900 dark:bg-gray-800 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <a title="DEV TIT" href="#" class="text-2xl font-bold">
            <span class="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Dev TIT</span>
          </a>
          <p class="text-gray-400 mt-2">Creative Web Developer & Designer</p>
        </div>

        <div class="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
          <a :title="item.name" v-for="item in menuItems" :key="item.id" :href="item.url"
            class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            {{ item.name }}
          </a>
        </div>

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
          © 2025 Khmersimpledev. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
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
</script>

<style scoped>
/* Footer specific styles if needed */
</style>