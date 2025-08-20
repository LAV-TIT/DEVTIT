<template>
    <section id="home" class="pt-15 lg:pt-20 bg-gray-50 dark:bg-gradient-to-b from-gray-900 via-purple-900 to-black  text-gray-800 dark:text-gray-200 
      flex items-center justify-center relative overflow-hidden page-transition " ref="sectionRef"
        style="animation-delay: 0.1s; opacity: 1;">
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 opacity-70">
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 dark:opacity-5"></div>
        </div>

        <div class="container mx-auto px-4 lg:px-40 pt-15 pb-20 lg:py-20 relative z-10">
            <div class="flex flex-wrap justify-center flex-column md:flex-row text-center items-center">
                <div class="md:w-1/2 mb-10 md:mb-0 animate-slide-down order-2 lg:order-1">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span
                            class="text-[#615fff] dark:text-primary-dark">TIT</span></h1>
                    <h2
                        class="text-2xl md:text-3xl inline-block pr-2 font-medium mb-6 text-[#10b981] dark:text-secondary-dark  typing-animation">
                        Creative Web Developer</h2>
                    <p class="text-lg mb-8 max-w-lg mx-auto">I build beautiful, interactive web experiences with a
                        focus on performance and user experience.</p>
                    <div class="flex justify-center space-x-4">
                        <button class="ripple-btn px-6 py-3 border border-[#615fff] bg-[#615fff] hover:text-[#615fff] hover:bg-[#615fff33] dark:bg-primary-dark text-white rounded-full font-medium 
                hover:bg-opacity-90 transition-all transform hover:-translate-y-1  hover:shadow-lg cursor-pointer">
                            View My Work
                        </button>
                        <a href="#portfolio"
                            class="!rounded-button whitespace-nowrap text-[#615fff] hover:bg-[#615fff33] border-[#615fff] dark:bg-white/10 
                backdrop-blur-sm border dark:border-white/30 dark:text-white px-4 lg:px-6 xl:px-8 py-2 md:py-3 rounded-full hover:dark:bg-white/20 
                transition-all duration-300 text-lg font-medium cursor-pointer transform hover:-translate-y-1 hover:shadow-lg">
                            View Portfolio
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 mb-8 md:mb-0 flex justify-center animate-slide-in-right order-1 lg:order-2">
                    <div class="relative w-50 h-50 sm:w-64 sm:h-64 md:w-80 md:h-80">
                        <div class="absolute inset-0 bg-[#615fff] dark:bg-primary-dark rounded-full opacity-20 blur-xl">
                        </div>
                        <div
                            class="relative w-full h-full bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 float-animation">
                            <img title="DEV TIT" :src="profile" alt="DEV TIT" class="w-full h-full object-cover">
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-5 z-10 transform -translate-y-1/2 animate-bounce">
            <a href="#contact"
                class="size-12 grid place-items-center p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <i class="fas fa-chevron-down text-gray-700 dark:text-gray-300"></i>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const sectionRef = ref<HTMLElement | null>(null);
import profile from '@/assets/images/mr-tit.png';
// Expose the ref to parent component
defineExpose({
    sectionRef
});
</script>