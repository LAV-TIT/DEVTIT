<template>
    <header ref="headerRef"
        class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200 dark:border-gray-800"
        :class="{
            'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b-0 border-gray-50 dark:border-gray-800 py-3': isScrolled,
            'bg-white/90 dark:bg-gray-900/90 py-3 lg:py-5 ': !isScrolled
        }">
        <div class="container mx-auto px-4 md:px-6 xl:px-10 flex justify-between items-center">
            <a title="DEV TIT" href="#" class="text-2xl font-bold text-[#0de19b] transition-all duration-300"
                :class="{ 'text-xl': isScrolled }"> <i class="text-3xl ri-code-s-slash-line pe-0.5"></i>
                <span class="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">TIT</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-8">
                <a :title="item.name" v-for="(item, index) in menuItems" :key="index" :href="item.url" class="relative uppercase text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 cursor-pointer 
          after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all 
          hover:after:w-full" :class="{
            'text-indigo-600 dark:text-indigo-400 after:w-full': activeSection === item.id
        }">
                    {{ item.name }}
                </a>

                <a title="Download CV" :href="cv" download="Tit's_CV.pdf"
                    class="whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group">
                    <span
                        class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x infinite"></span>
                    <span class="relative z-10">Download CV</span>
                </a>
                <button @click="toggleDarkMode"
                    class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    aria-label="Toggle dark mode">
                    <i class="fas fa-moon text-gray-700 dark:text-yellow-300" v-if="!darkMode"></i>
                    <i class="fas fa-sun dark:text-yellow-300" v-else></i>
                </button>
            </nav>
            <div class="flex items-center lg:hidden gap-3">
                <button @click="toggleDarkMode"
                    class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    aria-label="Toggle dark mode">
                    <i class="fas fa-moon text-gray-700 dark:text-yellow-300" v-if="!darkMode"></i>
                    <i class="fas fa-sun dark:text-yellow-300" v-else></i>
                </button>
                <!-- Hamburger Menu Button -->
                <button @click="toggleMenu"
                    class="flex flex-col justify-center items-center w-10 h-10 cursor-pointer z-50"
                    aria-label="Toggle menu">
                    <span class="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 mb-1.5"
                        :class="{ 'rotate-45 translate-y-2 bg-red-500': menuOpen }"></span>
                    <span class="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 mb-1.5"
                        :class="{ 'opacity-0': menuOpen }"></span>
                    <span class="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"
                        :class="{ '-rotate-45 -translate-y-2 bg-red-500': menuOpen }"></span>
                </button>
            </div>
        </div>

        <!-- Scroll Progress Bar -->
        <div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500"
            :style="{ width: scrollProgress + '%' }"></div>
    </header>

    <!-- Mobile Menu -->
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        :class="{ 'opacity-100': menuOpen, 'opacity-0 pointer-events-none': !menuOpen }" @click="closeMenu"></div>

    <div class="fixed top-0 right-0 w-full sm:w-80 h-full bg-indigo-900 dark:bg-indigo-950 z-40 transform transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-0': menuOpen, 'translate-x-full': !menuOpen }">
        <div class="flex flex-col h-full p-10 text-white">
            <div class="flex-1 flex flex-col mt-16">
                <nav class="flex flex-col space-y-8">
                    <a :title="item.name" v-for="(item, index) in menuItems" :key="index" :href="item.url"
                        class="text-2xl font-medium hover:text-indigo-300 transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                        :class="{ 'text-indigo-500 ': activeSection === item.id }" @click="closeMenu">
                        {{ item.name }}
                    </a>

                    <a @click="closeMenu" title="Download CV" :href="cv" download="Tit's_CV.pdf"
                        class="whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group">
                        <span
                            class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x infinite"></span>
                        <span class="relative z-10">Download CV</span>
                    </a>
                </nav>
            </div>

            <div class="mt-auto">
                <div class="flex space-x-6 mb-4">
                    <a :title="social.name" v-for="social in socials" :key="social.name" :href="social.url" class="text-white hover:text-indigo-300 
                    transition-colors duration-300 cursor-pointer" :aria-label="social.name" target="_blank">
                        <i :class="`fab fa-${social.icon} text-xl`"></i>
                    </a>
                </div>
                <p class="text-sm text-indigo-200 dark:text-indigo-300">
                    © {{currentYear}} Khmersimpledev. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import cv from '../../assets/Tit_CV.pdf'
interface MenuItem {
    id: string;
    name: string;
    url: string;
}
const props = defineProps({
    socials: {
        type: Array as () => Array<{ name: string; icon: string; url: string }>,
        required: true,
    },
    isScrolled: {
        type: Boolean,
        required: true
    },
    scrollProgress: {
        type: Number,
        required: true
    },
    activeSection: {
        type: String,
        required: true
    },
    darkMode: {
        type: Boolean,
        required: true
    },
    menuItems: {
        type: Array as () => MenuItem[],
        required: true
    }
});

const emit = defineEmits(['toggleDarkMode', 'toggleMenu', 'closeMenu']);

const menuOpen = ref(false);
const headerRef = ref<HTMLElement | null>(null);
const currentYear = new Date().getFullYear();
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    emit('toggleMenu', menuOpen.value);
};

const closeMenu = () => {
    menuOpen.value = false;
    emit('closeMenu');
};

const toggleDarkMode = () => {
    emit('toggleDarkMode');
};

defineExpose({
    headerRef
});

Swal.fire({
    title: "<strong>My Portfolio</strong>",
    icon: "info",
    html: `<b>My Website under construction</b>`,
    showCloseButton: true,
});    
 
</script>
