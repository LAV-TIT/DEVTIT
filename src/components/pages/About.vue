<script lang="ts" setup>
import Img from '../../assets/aboutme.jpg';
</script>
<template>
    <section id="about"
        class="text-gray-600 dark:text-gray-100 py-20 bg-white dark:bg-gradient-to-br from-indigo-900 to-purple-900 
        dark:from-indigo-950 dark:to-purple-950 overflow-hidden"
        ref="aboutSection">
        <div class="container mx-auto px-6">
            <div class="flex flex-col lg:flex-row items-center gap-4">
                <div class="lg:w-1/2 mb-10 md:mb-0 lg:pr-10" data-aos="fade-right">
                    <div class="relative">
                        <div
                            class="w-full h-150 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-800 rounded-2xl overflow-hidden shadow-2xl">
                            <img title="About Me" :src="Img" alt="About Me" class="w-full h-full object-cover">
                        </div>
                        <div
                            class="absolute -bottom-5 -left-5 w-32 h-32 text-[#10b981] dark:text-white bg-white dark:bg-gray-700 rounded-xl shadow-lg flex items-center justify-center">
                            <span class="text-4xl font-bold text-[#615fff] dark:text-primary-dark">1+</span>
                        </div>
                        <div
                            class="absolute -top-5 -right-5 w-32 h-32 text-[#10b981] dark:text-white bg-white dark:bg-gray-700 rounded-xl shadow-lg flex items-center justify-center">
                            <span class="text-lg font-medium text-center px-2">Years of Experience</span>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2" data-aos="fade-left">
                    <h2 class="text-3xl mt-10 lg:mt-0 md:text-4xl font-bold mb-6">About <span
                            class="text-blue-600 dark:text-blue-400">Me</span>
                    </h2>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Hello! I'm TIT, a web developer and designer with over
                        1 years of experience creating digital experiences that users
                        love. My journey in tech began when I built my first website at
                        2022, and I've been hooked ever since.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        I specialize in front-end development with a strong focus on
                        creating responsive, accessible, and performant web applications.
                    </p>

                    <div class="grid grid-cols-2 gap-6 mb-5">
                        <div>
                            <h3 class="text-xl font-bold mb-3">Education</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-graduation-cap mt-1 mr-3 text-[#615fff]"></i>
                                    <div>
                                        <p class="font-medium">Information Technology (IT)</p>
                                        <p class="text-gray-500 dark:text-gray-400 text-sm">
                                            BBU University, 2023 - Present
                                        </p>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-graduation-cap mt-1 mr-3 text-[#615fff]"></i>
                                    <div>
                                        <p class="font-medium">PEPY Empowering Youth</p>
                                        <p class="text-gray-500 dark:text-gray-400 text-sm">2022 - 2023</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-xl font-bold mb-3">Experience</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-briefcase mt-1 mr-3 text-[#615fff]"></i>
                                    <div>
                                        <p class="font-medium">Web Front Developer</p>
                                        <p class="text-gray-500 dark:text-gray-400 text-sm">
                                            ESTC , 2023 - 2024, Siem Reap
                                        </p>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-briefcase mt-1 mr-3 text-[#615fff]"></i>
                                    <div>
                                        <p class="font-medium">UI/UX Designer</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-4 mb-7">
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                            <span>Full-stack Development</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                            <span>UI/UX Design</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                            <span>Technical Writing</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                            <span>Mentoring</span>
                        </div>
                    </div>
                    <a href="#download-cv"
                        class="px-8 py-3 inline-block !rounded-button whitespace-nowrap text-[#615fff] hover:bg-[#615fff33] border-[#615fff] dark:bg-white/10 backdrop-blur-sm border dark:border-white/30 dark:text-white rounded-full hover:dark:bg-white/20 transition-all duration-300 text-lg font-medium transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                        <i class="fas fa-download mr-2"></i>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped></style>