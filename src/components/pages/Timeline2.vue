<script>

import { ref} from "vue";
// Events data
const events = ref([
    {
        title: "Web Summit 2025",
        date: "April 15-17, 2025",
        icon: ['fas', 'dog'],
        description:
            'Presented a talk on "The Future of Web Development" at the world\'s largest tech conference.',
        location: "Siem Reap Cambodia",
    },
    {
        title: "React Conference",
        date: "March 10, 2025",
        icon: ['fas', 'bolt'],
        description:
            "Led a workshop on advanced React patterns and performance optimization techniques.",
        location: "Siem Reap Cambodia",
    },
    {
        title: "UX Design Summit",
        date: "February 5, 2025",
        icon: ['fas', 'paint-brush'],
        description:
            "Participated in a panel discussion about the intersection of design and development.",
        location: "Siem Reap Cambodia",
    },
    {
        title: "Local Tech Meetup",
        date: "January 20, 2025",
        icon: ['fas', 'users'],
        description:
            "Organized and hosted a community event focused on frontend development best practices.",
        location: "Siem Reap Cambodia",
    },
])
</script>

<template>
        
    <!-- Events Section -->
    <section id="events" class="py-20 bg-white dark:bg-gray-900" ref="eventsSection">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Recent Events
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conferences, workshops, and speaking engagements where I've shared my knowledge and connected with the
            community.
          </p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#60a5fa] to-[#10b981] dark:from-primary-dark dark:to-secondary-dark">
          </div>

          <div class="space-y-10">
            <div v-for="(event, index) in events" :key="index" class="relative timeline-item" data-aos="fade-up"
              :data-aos-delay="index * 100">

              <div :class="[
                'md:flex items-center',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              ]">

                <!-- Card -->
                <div class="md:w-1/2 px-4">
                  <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                    <span class="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 block">
                      {{ event.date }}
                    </span>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {{ event.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ event.description }}</p>
                    <a href="#"
                      class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium inline-flex items-center cursor-pointer">
                      Learn more
                      <i class="fas fa-arrow-right ml-2 text-sm"></i>
                    </a>
                  </div>
                </div>

                <!-- Dot -->
                <div class="hidden md:flex justify-center w-1/12 relative z-10">
                  <div
                    class="w-6 h-6 rounded-full bg-[#615fff] dark:bg-[#60a5fa] border-4 border-white dark:border-gray-800">
                  </div>
                </div>

                <!-- Icon -->
                <div class="md:w-1/2 flex justify-center my-4 md:my-0">
                  <div
                    class="bg-indigo-500 dark:bg-indigo-600 rounded-full size-15 flex items-center justify-center shadow-md z-10">
                    <i class="fas fa-calendar-alt text-white"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

</template>