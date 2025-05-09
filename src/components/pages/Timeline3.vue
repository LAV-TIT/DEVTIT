<template>
    <section id="events" class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4 lg:px-20">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl dark:text-white font-bold mb-4">Recent <span
              class="text-[#615fff] dark:text-primary-dark">Engagements</span></h2>
          <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">Where I've shared knowledge and connected with
            the tech community.</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Vertical connecting line -->
            <div
              class="absolute left-1 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#615fff] to-[#34d399] dark:from-primary-dark dark:to-secondary-dark">
            </div>

            <!-- Timeline items -->
            <div class="space-y-12 pl-5 md:pl-0">
              <!-- Event 1 -->
              <div class="relative flex items-start">
                <!-- Dot indicator -->
                <div
                  class="absolute -left-6 md:left-1/2 md:-translate-x-1/2 mt-4 w-4 h-4 rounded-full bg-[#615fff] dark:bg-primary-dark border-4 border-white dark:border-gray-900">
                </div>

                <!-- Content card -->
                <div
                  class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full hover:shadow-lg transition-all duration-300">
                  <div class="flex items-center mb-3">
                    <div class="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-4">
                      <i class="fas fa-code text-indigo-600 dark:text-indigo-300"></i>
                    </div>
                    <div>
                      <span class="text-sm font-medium text-indigo-600 dark:text-indigo-400">June 2023</span>
                      <h3 class="text-xl font-bold text-gray-800 dark:text-white">Web Dev Conference</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Spoke about modern frontend architectures and
                    performance optimization techniques.</p>
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>Siem Reap, Cambodia</span>
                  </div>
                </div>
              </div>

              <!-- Event 2 -->
              <div class="relative flex items-start">
                <!-- Dot indicator -->
                <div
                  class="absolute -left-6 md:left-1/2 md:-translate-x-1/2 mt-4 w-4 h-4 rounded-full bg-[#34d399] border-4 border-white dark:border-gray-900">
                </div>

                <!-- Content card -->
                <div
                  class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full hover:shadow-lg transition-all duration-300">
                  <div class="flex items-center mb-3">
                    <div class="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-4">
                      <i class="fas fa-pencil-ruler text-green-600 dark:text-green-300"></i>
                    </div>
                    <div>
                      <span class="text-sm font-medium text-green-600 dark:text-green-400">March 2023</span>
                      <h3 class="text-xl font-bold text-gray-800 dark:text-white">UX Design Workshop</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Conducted a 2-day workshop on user-centered design
                    principles and prototyping.</p>
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>Siem Reap, Cambodia</span>
                  </div>
                </div>
              </div>

              <!-- Event 3 -->
              <div class="relative flex items-start">
                <!-- Dot indicator -->
                <div
                  class="absolute -left-6 md:left-1/2 md:-translate-x-1/2 mt-4 w-4 h-4 rounded-full bg-[#615fff] dark:bg-primary-dark border-4 border-white dark:border-gray-900">
                </div>

                <!-- Content card -->
                <div
                  class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full hover:shadow-lg transition-all duration-300">
                  <div class="flex items-center mb-3">
                    <div class="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-4">
                      <i class="fas fa-trophy text-purple-600 dark:text-purple-300"></i>
                    </div>
                    <div>
                      <span class="text-sm font-medium text-purple-600 dark:text-purple-400">January 2023</span>
                      <h3 class="text-xl font-bold text-gray-800 dark:text-white">Tech Startup Hackathon</h3>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">Won first place with a productivity app for remote
                    teams.</p>
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>Siem Reap, Cambodia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>