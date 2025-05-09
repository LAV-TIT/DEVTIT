<script lang="ts" setup>
defineProps({
  socials: {
    type: Array as () => Array<{ name: string; icon: string; url: string}>,
    required: true,
  },
});
</script>
<template>
    <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800" ref="contactSection">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 overflow-hidden">
          <div class="lg:w-1/2" data-aos="fade-right">
            <form class="bg-white dark:bg-gray-700 rounded-xl shadow-md p-4 md:p-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
                  <input type="text" id="name"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 bg-white dark:bg-gray-800 dark:text-white"
                    placeholder="Your name" />
                </div>
                <div>
                  <label for="email" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                  <input type="email" id="email"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 bg-white dark:bg-gray-800 dark:text-white"
                    placeholder="Your email" />
                </div>
              </div>

              <div class="mb-6">
                <label for="subject" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Subject</label>
                <input type="text" id="subject"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 bg-white dark:bg-gray-800 dark:text-white"
                  placeholder="Subject" />
              </div>

              <div class="mb-6">
                <label for="message" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                <textarea id="message" rows="5"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 bg-white dark:bg-gray-800 dark:text-white"
                  placeholder="Your message"></textarea>
              </div>

              <button type="submit"
                class="!rounded-button whitespace-nowrap block ml-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          <div class="lg:w-1/2" data-aos="fade-left">
            <div class="bg-indigo-900 dark:bg-indigo-950 text-white rounded-xl shadow-md p-4 md:p-8 h-full">
              <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-indigo-700/50 dark:bg-indigo-800/50 p-3 rounded-lg mr-4">
                    <i class="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Location</h4>
                    <p class="text-indigo-200 dark:text-indigo-300">Siem Reap Cambodia</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-indigo-700/50 dark:bg-indigo-800/50 p-3 rounded-lg mr-4">
                    <i class="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Email</h4>
                    <a href="mailto:lavtit.nssp2021@gmail.com"
                      class="text-indigo-200 dark:text-indigo-300 hover:text-white transition-colors duration-300">lavtit.nssp2021@gmail.com</a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-indigo-700/50 dark:bg-indigo-800/50 p-3 rounded-lg mr-4">
                    <i class="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Phone</h4>
                    <a href="tel:+855889820067"
                      class="text-indigo-200 dark:text-indigo-300 hover:text-white transition-colors duration-300">
                      (+855) 889 820 067</a>
                  </div>
                </div>
              </div>

              <div class="mt-12">
                <h4 class="font-medium text-lg mb-4">Follow Me</h4>
                <div class="flex space-x-4">
                  <a :title="item.name" v-for="item in socials" :key="item.name" :href="item.url" target="_blank"
                    class="bg-indigo-700/50 dark:bg-indigo-800/50 hover:bg-indigo-700 dark:hover:bg-indigo-800 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
                    <i :class="`fab fa-${item.icon} text-xl`"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
