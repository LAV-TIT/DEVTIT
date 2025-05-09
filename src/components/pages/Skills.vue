<script lang="ts" setup>
// Skills data
import frontendImg from '../../assets/frontend.jpg';
import mobileImg from '../../assets/mobile.jpg';
import uxuiImg from '../../assets/uxui.jpg';
const skills = [
    {
        title: "Front-End Development",
        description: "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
        image: frontendImg,
        tags: [
            { name: "Tailwind CSS", icon: "fas fa-paint-brush", color: "cyan" }, // Tailwind = Cyan
            { name: "React", icon: "fab fa-react", color: "sky" },         // React = Sky Blue
            { name: "Vue", icon: "fab fa-vuejs", color: "emerald" },       // Vue = Emerald Green
            { name: "TypeScript", icon: "fas fa-code", color: "blue" },    // TypeScript = Blue

        ],
    },
    {
        title: "Mobile Development",
        description: "Building cross-platform mobile applications that deliver native-like experiences.",
        image: mobileImg,
        tags: [
            { name: "React Native", icon: "fas fa-mobile-alt", color: "sky" },
            { name: "Flutter", icon: "ri-flutter-fill", color: "blue" },
        ],
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and engaging user experiences that solve real problems.",
        image: uxuiImg,
        tags: [
            { name: "Figma", icon: "fab fa-figma", color: "purple" },
            { name: "Photoshop", icon: "fab fa-adobe", color: "indigo" },
            { name: "Illustrator", icon: "fas fa-pen-nib", color: "orange" },
        ],
    }

    // {
    //     title: "Backend Development",
    //     description:
    //         "Developing robust and scalable server-side applications and APIs.",
    //     image:
    //         "https://readdy.ai/api/search-image?query=server%20room%20with%20glowing%20blue%20and%20purple%20lights%2C%20database%20visualization%2C%20cloud%20computing%20concept%2C%20modern%20backend%20infrastructure%2C%20data%20center%20with%20futuristic%20lighting%2C%20professional%20server%20environment&width=400&height=300&seq=skill4&orientation=landscape",
    //     tags: ["Node.js", "Express", "MongoDB", "GraphQL"],
    // },
    // {
    //     title: "DevOps & Cloud",
    //     description:
    //         "Implementing CI/CD pipelines and managing cloud infrastructure.",
    //     image:
    //         "https://readdy.ai/api/search-image?query=cloud%20computing%20infrastructure%20visualization%2C%20digital%20network%20of%20connected%20servers%2C%20DevOps%20pipeline%20concept%2C%20modern%20cloud%20architecture%20with%20purple%20and%20blue%20nodes%2C%20professional%20cloud%20environment%20visualization&width=400&height=300&seq=skill5&orientation=landscape",
    //     tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    // },
    // {
    //     title: "Performance Optimization",
    //     description:
    //         "Enhancing application speed, responsiveness, and overall user experience.",
    //     image:
    //         "https://readdy.ai/api/search-image?query=performance%20metrics%20dashboard%20with%20graphs%20and%20charts%2C%20speed%20optimization%20concept%2C%20loading%20time%20visualization%2C%20modern%20analytics%20interface%20with%20purple%20and%20blue%20data%20visualization%2C%20professional%20performance%20monitoring%20environment&width=400&height=300&seq=skill6&orientation=landscape",
    //     tags: ["Lighthouse", "WebPageTest", "Core Web Vitals", "SEO"],
    // },
];

const technos = [
    {
        name: 'HTML/CSS',
        icon: 'fab fa-html5',
        percentage: 95,
        color: 'blue'
    },
    {
        name: 'JavaScript',
        icon: 'fab fa-js',
        percentage: 85,
        color: 'yellow'
    },
    {
        name: 'Tailwind CSS',
        icon: 'fab fa-css3-alt',
        percentage: 90,
        color: 'blue'
    },
    {
        name: 'React',
        icon: 'fab fa-react',
        percentage: 80,
        color: 'indigo'
    },
    {
        name: 'Vue.js',
        icon: 'fab fa-vuejs',
        percentage: 85,
        color: 'emerald'
    },
    {
        name: 'Node.js',
        icon: 'fab fa-node-js',
        percentage: 75,
        color: 'green'
    },
    {
        name: 'Express.js',
        icon: 'fab fa-node-js',
        percentage: 85,
        color: 'green'
    },
    {
        name: 'Laravel',
        icon: 'fab fa-laravel',
        percentage: 88,
        color: 'red'
    },

    {
        name: 'ASP.NET',
        icon: 'fab fa-microsoft',
        percentage: 85,
        color: 'fuchsia'
    },

    {
        name: 'Git',
        icon: 'fab fa-git-alt',
        percentage: 70,
        color: 'red'
    },
    {
        name: 'CMS WordPress (plugin)',
        icon: 'fa-brands fa-wordpress',
        percentage: 85,
        color: 'blue'
    },
    {
        name: 'CMS Made Simple',
        icon: 'fas fa-file-alt',  // Alternative: 'fas fa-cog' or 'fas fa-wrench'
        percentage: 95,
        color: 'orange'  // Using orange as it's not assigned to other major CMS platforms
    },
]

</script>

<template>

    <section id="skills" class="py-20 bg-white dark:bg-gray-800" ref="skillsSection">
        <div class="container mx-auto px-4 md:px-6 xl:px-10">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    My <span class="text-[#615fff] dark:text-primary-dark">Experience</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    These​ technology are what I've used. I've honed my skills across various technologies and design
                    principles to deliver exceptional digital experiences.
                </p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-5 md:mb-20 ">
                <!-- Skill items will be looped here -->
                <div v-for="(techno, index) in technos" :key="index"
                    class="bg-gray-50 dark:bg-gray-700 p-6 py-4 rounded-lg shadow-md aos-init aos-animate w-full max-w-md"
                    :class="{
                        'last:col-span-full sm:last:col-span-1 lg:last:col-start-2': technos.length % 3 !== 0, // Center last item if odd
                    }" data-aos="fade-up" :data-aos-delay="index * 100">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                            :class="`bg-${techno.color}-100 dark:bg-${techno.color}-900`">
                            <i
                                :class="`${techno.icon} text-${techno.color}-500 dark:text-${techno.color}-300 text-xl`"></i>
                        </div>
                        <div>
                            <h3 class="text-md font-semibold dark:text-gray-100">{{ techno.name }}</h3>
                            <span class="font-medium"
                                :class="`text-${techno.color}-500 dark:text-${techno.color}-300`">{{
                                    techno.percentage }}%</span>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 overflow-hidden">
                        <div class="progress-bar h-2.5 rounded-full" :style="{ width: `${techno.percentage}%` }"
                            :class="`bg-${techno.color}-500`" data-aos="progress-fill" :data-aos-delay="index * 100"
                            :data-aos-duration="500"></div>
                    </div>
                </div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(skill, index) in skills" :key="index"
                    class="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                    data-aos="fade-up" :data-aos-delay="index * 100">
                    <!-- Image with smooth hover zoom -->
                    <div class="h-48 md:h-52 xl:h-56 overflow-hidden">
                        <img :title="skill.title" :src="skill.image" :alt="skill.title"
                            class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
                    </div>

                    <!-- Content -->
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">
                            {{ skill.title }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                            {{ skill.description }}
                        </p>

                        <!-- Tags with icons -->
                        <div class="flex flex-wrap gap-2">
                            <span v-for="(tag, tagIndex) in skill.tags" :key="tagIndex"
                                :class="`inline-flex items-center gap-1.5 bg-${tag.color}-100 
                                dark:bg-${tag.color}-900/30 text-${tag.color}-700 dark:text-${tag.color}-200 
                                text-xs font-medium px-3 py-1 rounded-full border border-${tag.color}-100 dark:border-${tag.color}-800`">
                                <i :class="`${tag.icon} text-${tag.color}-500 dark:text-${tag.color}-100`"></i>
                                {{ tag.name }}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped>
.bg-red-500 {
    background-color: var(--color-red-500);
}
/* .progress-bar {
    transition: width 0.5s ease-out;
}

[data-aos="progress-fill"].aos-animate {
    width: var(--progress-width) !important;
} */
</style>