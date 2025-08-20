<script lang="ts" setup>
import { ref } from "vue";
// Refs
const events = ref([
    {
        title: "Incubaction Garage",
        date: "January 16 -18 2025",
        icon: ['fas', 'users'],
        description:
            "in recognition of successfully completing the incubation garage program held by Build Bright University, Siem Reap Campus on 16-18 January 2025"
            + "We commend your dedication and creativity throughout the competition.",
        location: "At BBU, Siem Reap, Cambodia",
        color: "yellow",
    },
    {
        title: "Junior web developer",
        date: "Nov 2024 - Dec 2024",
        icon: ['fas', 'dog'],
        description: "I attended the junior web developer contest season1 at Build Bright University "
            + "Campus from 25 November 2024 to 2 December 2024. learn basic of web and design (html css js and figma)",
        location: "Siem Reap, Cambodia",
        color: "indigo"
    },
    {
        title: "Siem Reap Coding Club",
        date: "April 2022 - 2023",
        icon: ['fas', 'bolt'],
        description:
            "I attending with Siem Reap Coding Club located at YISI office, Siem Reap Province. I have Learn"
            + "about coding (HTML, CSS and JavaScript) and basic computer.",
        location: "Siem Reap, Cambodia",
        color: "green"
    },
    {
        title: "Human Rights Training",
        date: "June 2022 ",
        icon: ['fas', 'bolt'],
        description:
            "I joint the training about human rights, socio-economic rights, good governance, and good public services at PEPY Learning Center. ",
        location: "Siem Reap, Cambodia",
        color: "green"
    },
    {
        title: "Volunteer/ Community Experiences",
        date: "June 2022-December 2022",
        icon: ['fas', 'paint-brush'],
        description:
            "I join the group of 6 members at PEPY Empowering Youth to do community payback project about the environment. "
            + "I have learnt a lot about how to work as a team, project management, and built Strong relationship with my friends",
        location: "Siem Reap, Cambodia",
        color: "pink",
    },
    {
        title: "Soft-Skill Training with Friend International",
        date: "October 2022 – November 2022",
        icon: ['fas', 'paint-brush'],
        description:
            "I have joined the Soft-Skill Training with Friend International 5 weeks. I learned about soft-skills "
            + "such as teamwork, Time management, Self-awareness, Self-Motivation, communication, financial management, conflict resolution, and self-values.",
        location: "Siem Reap, Cambodia",
        color: "teal",
    },

    {
        title: "Malk talk",
        date: "July 09, 2022",
        icon: ['fas', 'paint-brush'],
        description:
            "has successfully completed a one-day Media and Information Literacy (MIL) Talk on"
            + "July 09, 2022, in Siem Reap province. This training was organized by the Cambodian"
            + "Center for Independent Media (CCIM)",
        location: "Siem Reap, Cambodia",
        color: "pink",
    },

])

</script>
<template>

    <section id="events" class="py-20 bg-indigo-50 dark:bg-gray-900" ref="eventsSection">
        <div class="container mx-auto px-4 lg:px-20">
            <div class="text-center mb-16 " data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl dark:text-white font-bold mb-4">Recent <span
                        class="text-[#615fff] dark:text-primary-dark">Events</span></h2>
                <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">Conferences, workshops, and speaking
                    engagements
                    where I've shared my knowledge and connected with the community.</p>
            </div>

            <div class="max-w-7xl mx-auto">
                <div class="relative">
                    <!-- Timeline line -->
                    <div
                        class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#615fff] to-[#34d399] dark:from-primary-dark dark:to-[#34d399]">
                    </div>
                    <!-- Timeline items -->

                    <div class="space-y-8">
                        <div v-for="(event, index) in events" :key="index" class="relative timeline-item ml-5 md:ml-0"
                            data-aos="fade-up" :data-aos-delay="index * 100">
                            <div class="md:flex justify-between items-center p-6 dark:text-gray-200 bg-white dark:bg-gray-700 rounded-lg 
            shadow-md border border-gray-200 dark:border-gray-500 
            md:p-0 md:dark:text-transparent md:bg-transparent md:dark:bg-transparent md:rounded-lg 
            md:shadow-none md:border-0 md:border-gray-200 md:dark:border-gray-500">
                                <!-- Left content (Date + Title) -->
                                <div :class="['md:w-5/12 mb-4 md:mb-0', index % 2 === 0 ? 'md:text-right' : 'order-3']">
                                    <!-- Date + Icon Row -->
                                    <div class="gap-1 flex items-center"
                                        :class="index % 2 === 0 ? 'md:justify-end' : ''">
                                        <p class="text-sm"
                                            :class="`text-${event.color}-500 dark:text-${event.color}-300`">
                                            {{ event.date }}
                                        </p>
                                        <div class="rounded-full size-8 flex items-center justify-center shadow-md z-10"
                                            :class="`bg-${event.color}-100 text-${event.color}-500 dark:bg-${event.color}-900 dark:text-${event.color}-300`">
                                            <i class="fas fa-calendar-alt"></i>
                                        </div>
                                    </div>
                                    <h3 class="text-xl font-bold dark:text-gray-200">{{ event.title }}</h3>
                                </div>

                                <!-- Center Dot -->
                                <div class="absolute left-[-32px] md:static md:flex justify-center"
                                    :class="index % 2 === 0 ? '' : 'order-2'">
                                    <div class="w-6 h-6 rounded-full border-4 border-white dark:border-gray-800"
                                        :class="`bg-${event.color}-500 dark:bg-${event.color}-600`">
                                    </div>
                                </div>

                                <!-- Right content (Description + Location) -->
                                <div :class="['md:w-5/12', index % 2 !== 0 ? 'order-1' : '']">
                                    <div class="md:p-6 md:dark:text-gray-200 md:bg-white md:dark:bg-gray-700 md:rounded-lg md:shadow-md 
                    md:border md:border-gray-200 md:dark:border-gray-500">
                                        <p>{{ event.description }}</p>
                                        <p class="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <i class="fas fa-map-marker-alt mr-2 text-red-400"></i>
                                            <span>{{ event.location }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
