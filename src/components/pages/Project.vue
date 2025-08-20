<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import khmerderm from '@/assets/images/projects/khmerderm.png'
import morakot from '@/assets/images/projects/morakotangkorrestaurant.png'
import edoor from '@/assets/images/projects/edoorfrontdesk.png'
import Beyond from '@/assets/images/projects/beyondangkortours.png'
// import Beyond from '@/assets/images/projects/beyond.png'
import zgroup from '@/assets/images/projects/zgroup.png'
import transaction from '@/assets/images/projects/transaction.png'


// Projects data
const projects = [
    {
        title: "Khmer Duerm Restaurant",
        url: "https://khmerduerm.com",
        description:
            "Modern restaurant website built with WordPress and Elementor, featuring clean UI and optimized performance.",
        image: khmerderm,
        technologies: ["WordPress", "Elementor", "CSS", "PHP", "MySQL"],
    },
    {
        title: "Morakotangkor Restaurant",
        url: "https://www.morakotangkorrestaurant.com",
        description:
            "SEO-friendly restaurant website built with CMS Made Simple, focusing on simplicity and fast loading speed.",
        image: morakot,
        technologies: ["CMS Made Simple", "JavaScript", "CSS", "PHP", "MySQL"],
    },
    {
        title: "eDoor Front Desk",
        url: "https://www.edoorfrontdesk.com",
        description:
            "Elegant website with SEO optimization, built using CMS Made Simple and designed for smooth navigation.",
        image: edoor,
        technologies: ["CMS Made Simple", "JavaScript", "CSS", "PHP", "MySQL"],
    },
    {
        title: "Beyond Angkor Tours",
        url: "https://beyondangkortours.com",
        description:
            "Travel and tour website built with WordPress, responsive design and SEO for strong online presence.",
        image: Beyond,
        technologies: ["WordPress", "Elementor", "CSS", "PHP", "MySQL"],
    },
    {
        title: "Z Group",
        url: "https://zgroup.asia",
        description:
            "Corporate website developed with CMS Made Simple, featuring minimalist design and strong SEO optimization.",
        image: zgroup,
        technologies: ["CMS Made Simple", "JavaScript", "CSS", "PHP", "MySQL"],
    },
    {
        title: "Transaction Technology",
        url: "https://www.transaction.technology",
        description:
            "Professional tech website built with CMS Made Simple, optimized for speed, SEO, and usability.",
        image: transaction,
        technologies: ["CMS Made Simple", "JavaScript", "CSS", "PHP", "MySQL"],
    },

    
    {
        title: "Health & Fitness App",
        url: "",
        description:
            "Mobile application for tracking workouts, nutrition, and personal health goals.",
        image:
            "https://readdy.ai/api/search-image?query=fitness%20app%20interface%20on%20smartphone%2C%20workout%20tracking%2C%20nutrition%20planning%2C%20health%20metrics%20dashboard%2C%20modern%20mobile%20UI%20with%20purple%20and%20blue%20color%20scheme%2C%20professional%20fitness%20application%20visualization&width=400&height=300&seq=project2&orientation=landscape",
        technologies: ["React Native", "Firebase", "HealthKit", "Google Fit"],
    },
    // {
    //     title: "Real Estate Platform",
    //     url: "",
    //     description:
    //         "Web application for property listings with virtual tours and mortgage calculator.",
    //     image:
    //         "https://readdy.ai/api/search-image?query=real%20estate%20website%20interface%20on%20computer%20screen%2C%20property%20listings%20with%20high%20quality%20images%2C%20map%20integration%2C%20modern%20property%20search%20UI%20with%20purple%20and%20blue%20accents%2C%20professional%20real%20estate%20platform%20visualization&width=400&height=300&seq=project3&orientation=landscape",
    //     technologies: ["Vue.js", "Express", "PostgreSQL", "Google Maps API"],
    // },
    // {
    //     title: "Task Management Tool",
    //     url: "",
    //     description:
    //         "Collaborative project management application with real-time updates and analytics.",
    //     image:
    //         "https://readdy.ai/api/search-image?query=project%20management%20dashboard%20with%20task%20boards%2C%20timeline%20visualization%2C%20team%20collaboration%20features%2C%20modern%20task%20management%20UI%20with%20purple%20and%20blue%20color%20scheme%2C%20professional%20productivity%20tool%20interface&width=400&height=300&seq=project4&orientation=landscape",
    //     technologies: ["React", "Redux", "Socket.io", "MongoDB"],
    // },
    // {
    //     title: "AI-Powered Chatbot",
    //     url: "",
    //     description:
    //         "Intelligent customer service chatbot with natural language processing capabilities.",
    //     image:
    //         "https://readdy.ai/api/search-image?query=AI%20chatbot%20interface%20with%20conversation%20thread%2C%20natural%20language%20processing%20visualization%2C%20chat%20window%20with%20bot%20responses%2C%20modern%20messaging%20UI%20with%20purple%20and%20blue%20accents%2C%20professional%20chatbot%20application%20visualization&width=400&height=300&seq=project5&orientation=landscape",
    //     technologies: ["TensorFlow.js", "Node.js", "NLP", "WebSockets"],
    // },
];
</script>

<template>
    <section id="portfolio" class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    My <span class="text-[#615fff] dark:text-primary-dark">Projects</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    A showcase of my recent projects and the technologies I've worked
                    with real projects.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(project, index) in projects" :key="index"
                    class="group bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up" :data-aos-delay="index * 100">
                    <div class="relative h-60 overflow-hidden">
                        <img :title="project.title" :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div class="px-6 py-4 w-full">
                                <div class="flex justify-between items-center">
                                    <a :href="project.url" target="_blank"
                                        class="!rounded-button whitespace-nowrap bg-white dark:bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
                                        View Project
                                    </a>
                                    <div class="flex space-x-2">
                                        <a href="https://github.com/laV-TIT" target="_blank"
                                            class="size-8 flex pleace-items-center bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300 cursor-pointer">
                                            <i class="fab fa-github text-white"></i>
                                        </a>
                                        <a href="#"
                                            class="size-8 flex pleace-items-center bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300 cursor-pointer">
                                            <i class="fas fa-external-link-alt text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="(tech, techIndex) in project.technologies" :key="techIndex"
                                class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped></style>