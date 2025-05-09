<script lang="ts" setup>

</script>
<template>
    <section id="cv" class="py-15 md:py-20 bg-white dark:bg-gray-700">
        <div class="container mx-auto px-4 md:px-6 lg:px-15 xl:px-40">
            <h2 class="text-3xl font-bold text-center mb-12 gradient-text dark:text-gray-50" data-aos="fade-down">
                My <span class="text-[#615fff] dark:text-primary-dark">CV</span>
            </h2>
            <div class="flex flex-col lg:flex-row bg-white dark:bg-gray-800 shadow-xl rounded-lg 
            overflow-hidden border border-gray-100 dark:border-gray-500">
                <!-- Sidebar -->
                <div class="lg:w-1/3 bg-navy px-4 md:p-8 py-8 md:py-20 bg-indigo-800 text-gray-200 dark:text-gray-200"
                    data-aos="fade-right">
                    <!-- Profile -->
                    <div class="text-center mb-8">
                        <div class="w-32 h-32 rounded-full border-4 border-white mx-auto mb-4 overflow-hidden">
                            <img src="https://i.pinimg.com/736x/33/07/a3/3307a386b206282ce7e0f0136889f714.jpg" alt="Profile" class="w-full h-full object-cover">
                        </div>
                        <h1 class="text-2xl font-bold mb-1">Lav Tit</h1>
                        <p class="text-sm uppercase tracking-wider text-gray-300 mb-4">Senior WEB DEVELOPER</p>
                        <div class="flex justify-center space-x-3 text-indigo-600">
                            <a href="#"
                                class="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#"
                                class="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#"
                                class="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Contact -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">Contact</h3>
                        <div class="space-y-3">
                            <div class="flex items-start">
                                <i class="fas fa-envelope mt-1 mr-3 text-sm"></i>
                                <span class="text-sm">lav.tit@example.com</span>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-phone-alt mt-1 mr-3 text-sm"></i>
                                <span class="text-sm">(+855) 889 820 067</span>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-map-marker-alt mt-1 mr-3 text-sm"></i>
                                <span class="text-sm">Siem Reap, Cambodia</span>
                            </div>
                        </div>
                    </div>

                    <!-- Education -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">Education
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <h4 class="font-medium">Information Technology (IT)</h4>
                                <p class="text-sm text-gray-300">Build Bright University</p>
                                <p class="text-xs text-gray-400">2023 - Present</p>
                            </div>
                            <div>
                                <h4 class="font-medium">Web Development</h4>
                                <p class="text-sm text-gray-300">Code Academy</p>
                                <p class="text-xs text-gray-400">2021</p>
                            </div>
                        </div>
                    </div>

                    <!-- Skills -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">Skills</h3>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span>HTML/CSS</span>
                                    <span>95%</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5">
                                    <div class="bg-blue-500 h-1.5 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span>JavaScript</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5">
                                    <div class="bg-yellow-500 h-1.5 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span>React</span>
                                    <span>80%</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5">
                                    <div class="bg-purple-500 h-1.5 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span>Node.js</span>
                                    <span>75%</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5">
                                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 75%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Languages -->
                    <div>
                        <h3 class="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">Languages
                        </h3>
                        <div class="space-y-3">
                            <!-- <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span>English</span>
                                    <span>Fluent</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5">
                                    <div class="bg-red-500 h-1.5 rounded-full" style="width: 100%"></div>
                                </div>
                            </div> -->
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span>English</span>
                                    <span>Intermediate</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5">
                                    <div class="bg-orange-500 h-1.5 rounded-full" style="width: 70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="lg:w-2/3 p-4 md:p-8 bg-white dark:bg-gray-800" data-aos="fade-left">
                    <!-- Profile Summary -->
                    <div class="mb-8">
                        <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white/90 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Profile</h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            Passionate junior web developer with 2+ years of experience building responsive and
                            user-friendly web applications. Strong foundation in front-end technologies with growing
                            expertise in full-stack development. Committed to writing clean, efficient code and
                            continuously expanding my skill set.
                        </p>
                    </div>

                    <!-- Work Experience -->
                    <div class="mb-8">
                        <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white/90 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Work Experience</h3>
                        <div class="space-y-6">
                            <!-- Job 1 -->
                            <div class="flex">
                                <div class="mr-4 relative">
                                    <div class="timeline-dot"></div>
                                    <div
                                        class="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2">
                                    </div>
                                </div>
                                <div class="pb-6">
                                    <h4 class="font-semibold text-gray-800 dark:text-white/90">Frontend Developer</h4>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">TechSolutions Inc. | Jan
                                        2022 - Present</p>
                                    <ul
                                        class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                                        <li>Developed responsive user interfaces using React and Tailwind CSS</li>
                                        <li>Collaborated with designers to implement pixel-perfect UI components</li>
                                        <li>Optimized application performance, reducing load times by 30%</li>
                                        <li>Participated in code reviews and mentored junior team members</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Job 2 -->
                            <div class="flex">
                                <div class="mr-4 relative">
                                    <div class="timeline-dot"></div>
                                    <div
                                        class="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2">
                                    </div>
                                </div>
                                <div class="pb-6">
                                    <h4 class="font-semibold text-gray-800 dark:text-white/90">Web Development Intern</h4>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Digital Creations | Jun
                                        2021 - Dec 2021</p>
                                    <ul
                                        class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                                        <li>Assisted in building and maintaining client websites</li>
                                        <li>Implemented new features using JavaScript and jQuery</li>
                                        <li>Fixed bugs and improved existing codebase</li>
                                        <li>Gained experience with WordPress theme development</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Job 3 -->
                            <div class="flex">
                                <div class="mr-4 relative">
                                    <div class="timeline-dot"></div>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 dark:text-white/90">Freelance Web Developer</h4>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Self-Employed | 2020 - 2021
                                    </p>
                                    <ul
                                        class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                                        <li>Designed and developed websites for small businesses</li>
                                        <li>Worked directly with clients to understand requirements</li>
                                        <li>Managed projects from conception to deployment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Projects -->
                    <div>
                        <h3
                            class="text-xl font-semibold mb-4 text-gray-800 dark:text-white/90 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Projects</h3>

                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Project 1 -->
                            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h4 class="font-semibold mb-2 dark:text-gray-200">E-commerce Dashboard</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">React, Node.js, MongoDB</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Admin dashboard for managing
                                    products, orders, and customers with real-time analytics.</p>
                            </div>

                            <!-- Project 2 -->
                            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h4 class="font-semibold mb-2 dark:text-gray-200">Task Management App</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">Vue.js, Firebase</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Collaborative task management
                                    application with drag-and-drop interface.</p>
                            </div>

                            <!-- Project 3 -->
                            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h4 class="font-semibold mb-2 dark:text-gray-200">Weather Application</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">JavaScript, API Integration</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Real-time weather forecast
                                    application with location detection.</p>
                            </div>

                            <!-- Project 4 -->
                            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h4 class="font-semibold mb-2 dark:text-gray-200">Portfolio Website</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">HTML, CSS, JavaScript</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Responsive portfolio website with
                                    animated elements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
:root{
    --tw-gradient-to-position:'';
}
.to-secondary {
    --tw-gradient-to: #E91E63 var(--tw-gradient-to-position);
}
.timeline-dot {
    position: relative;
}

.timeline-dot::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(45deg, #60a5fa, #E91E63);
    z-index: 1;
    animation: pulse 2s infinite;
}
</style>