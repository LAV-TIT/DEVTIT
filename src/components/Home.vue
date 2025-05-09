<!-- ======================== single page =============================-->

<template>
  <div ref="cursor" class="custom-cursor hidden md:block fixed top-0 
    left-0 w-5 h-5 bg-indigo-500/50 rounded-full 
    pointer-events-none z-50 transition-all duration-200"></div>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Dark Mode Toggle -->
    <!-- Header -->
    <header ref="headerRef"
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200 dark:border-gray-800"
      :class="{
        'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b-0 border-gray-50 dark:border-gray-800 py-3': isScrolled,
        'bg-white/90 dark:bg-gray-900/90 py-3 lg:py-5 ': !isScrolled
      }">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-[#0de19b] transition-all duration-300"
          :class="{ 'text-xl': isScrolled }"> <i class="text-3xl ri-code-s-slash-line pe-0.5"></i>
          <span class="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">TIT</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <a v-for="(item, index) in menuItems" :key="index" :href="item.url" class="relative uppercase text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 cursor-pointer 
            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all 
            hover:after:w-full" :class="{
              'text-indigo-600 dark:text-indigo-400 after:w-full': activeSection === item.id
            }">
            {{ item.name }}
          </a>

          <a href="#download-cv"
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
          <button @click="toggleMenu" class="flex flex-col justify-center items-center w-10 h-10 cursor-pointer z-50"
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

    <div
      class="fixed top-0 right-0 w-full sm:w-80 h-full bg-indigo-900 dark:bg-indigo-950 z-40 transform transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': menuOpen, 'translate-x-full': !menuOpen }">
      <div class="flex flex-col h-full p-10 text-white">
        <div class="flex-1 flex flex-col mt-16">
          <nav class="flex flex-col space-y-8">
            <a v-for="(item, index) in menuItems" :key="index" :href="item.url"
              class="text-2xl font-medium hover:text-indigo-300 transition-all duration-300 cursor-pointer transform hover:translate-x-2"
              :class="{ 'text-indigo-300': activeSection === item.id }" @click="closeMenu">
              {{ item.name }}
            </a>

            <a @click="closeMenu" href="#download-cv"
              class="whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group">
              <span
                class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x infinite"></span>
              <span class="relative z-10">Download CV</span>
            </a>
          </nav>
        </div>

        <div class="mt-auto">
          <div class="flex space-x-6 mb-4">
            <a href="#" class="text-white hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
              <i class="fab fa-instagram text-xl"></i>
            </a>
          </div>
          <p class="text-sm text-indigo-200 dark:text-indigo-300">
            © 2025 Dev TIT. All rights reserved.
          </p>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="pt-15 lg:pt-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 
      flex items-center justify-center relative overflow-hidden page-transition"
        style="animation-delay: 0.1s; opacity: 1;" ref="homeSection">
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
                        class="text-2xl md:text-3xl inline-block pr-2 font-medium mb-6 text-[#10b981] dark:text-secondary-dark typing-animation">
                        Creative Developer</h2>
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
                            <img src="https://i.pinimg.com/736x/33/07/a3/3307a386b206282ce7e0f0136889f714.jpg"
                                alt="Profile" class="w-full h-full object-cover">
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
    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800" ref="skillsSection">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span class="text-[#615fff] dark:text-primary-dark">Expertise</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've honed my skills across various technologies and design
            principles to deliver exceptional digital experiences.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(skill, index) in skills" :key="index"
            class="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="h-50 md:h-55 xl:h-60 overflow-hidden">
              <img :src="skill.image" :alt="skill.title"
                class="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {{ skill.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ skill.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, tagIndex) in skill.tags" :key="tagIndex"
                  class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative h-[60vh] lg:h-[80vh] flex items-center">
      <div class="absolute inset-0 overflow-hidden">
        <div class="relative w-full h-full">
          <div class="w-full h-full"
            style="background-attachment: fixed;background-size: cover;background-position: center;background-image: 
            url('https://scontent.fpnh18-6.fna.fbcdn.net/v/t39.30808-6/475789728_640960045168822_162423395347598915_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEbE0L3cE7Po_SQg9KSvbOByZocygzS-V_JmhzKDNL5X1X8_HeBG-7TYtnXweW_X2PMVhDtW3K0RfnXvl7B70gS&_nc_ohc=fkOx31bk_T0Q7kNvwGg017d&_nc_oc=Adn_Il3zRPg-0Dh5NhdH4A_DFfquKAJCEnQAAJw5n9IblEEdWYoj2SClJuNT8wPdlRc&_nc_zt=23&_nc_ht=scontent.fpnh18-6.fna&_nc_gid=mKKOCot8zEsvPAC4Cd5ltg&oh=00_AfGxSd0b3tS6hCslXWFTBQDTDPgJjFNRY41aMMqG1j4y2g&oe=6812C1EA');">
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/100"></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-2xl m-auto text-center" data-aos="fade-right" data-aos-duration="1000">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Creative <span class="bg-gradient-to-r from-indigo-500
             to-purple-600 bg-clip-text text-transparent">Developer</span> &
            <span class="bg-gradient-to-r from-indigo-500 
            to-purple-600 bg-clip-text text-transparent">Designer</span>
          </h1>
          <p class="text-xl text-white/90 mb-8">
            Crafting digital experiences that blend innovation with
            functionality. I transform ideas into engaging web solutions.
          </p>
          <div class="flex justify-center flex-wrap gap-4">
            <a href="#contact"
              class="!rounded-button whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-lg font-medium cursor-pointer">
              Get in Touch
            </a>
          </div>
        </div>

      </div>

      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" class="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
          <i class="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>

    <section id="events" class="py-20 bg-white dark:bg-gray-900" ref="eventsSection">
      <div class="container mx-auto px-4 lg:px-20">
        <div class="text-center mb-16 " data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl dark:text-white font-bold mb-4">Recent <span
              class="text-[#615fff] dark:text-primary-dark">Events</span></h2>
          <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">Conferences, workshops, and speaking engagements
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
                md:shadow-none md:border-0 md:border-gray-200 md:dark:border-gray-500 
                ">
                  <!-- Left content (Date + Title) -->
                  <div :class="['md:w-5/12 mb-4 md:mb-0', index % 2 === 0 ? 'md:text-right' : 'order-3']">
                    <!-- Date + Icon Row -->
                    <div class="gap-1 flex items-center " :class="index % 2 === 0 ? 'md:justify-end' : ''">
                      <p class="text-sm" :class="[
                        index % 4 === 0 ? 'text-indigo-500' :
                          index % 4 === 1 ? 'text-green-500' :
                            index % 4 === 2 ? 'text-pink-500' :
                              'text-yellow-500',
                        index % 2 === 0 ? 'order-1' : 'order-2'
                      ]">
                        {{ event.date }}
                      </p>
                      <div class="rounded-full size-8 flex items-center justify-center shadow-md z-10" :class="[
                        index % 4 === 0 ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900' :
                          index % 4 === 1 ? 'bg-green-100 text-green-600 dark:bg-green-900' :
                            index % 4 === 2 ? 'bg-pink-100 text-pink-600 dark:bg-pink-900' :
                              'bg-yellow-100 text-yellow-600 dark:bg-yellow-900',
                        index % 2 === 0 ? 'md:order-2' : 'md:ml-0'
                      ]">
                        <i class="fas fa-calendar-alt"></i>
                      </div>
                    </div>
                    <h3 class="text-xl font-bold dark:text-gray-200">{{ event.title }}</h3>
                  </div>

                  <!-- Center Dot -->
                  <div class="absolute left-[-32px] md:static md:flex justify-center"
                    :class="index % 2 === 0 ? '' : 'order-2'">
                    <div class="w-6 h-6 rounded-full border-4 border-white dark:border-gray-800" :class="[
                      index % 4 === 0 ? 'bg-[#615fff] dark:bg-primary-dark' :
                        index % 4 === 1 ? 'bg-[#34d399]' :
                          index % 4 === 2 ? 'bg-pink-400' :
                            'bg-yellow-400'
                    ]">
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

    <!-- About Section -->
    <section id="about"
      class="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 dark:from-indigo-950 dark:to-purple-950 text-white  overflow-hidden"
      ref="aboutSection">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-4">
          <div class="lg:w-1/2 mb-10 md:mb-0 lg:pr-10" data-aos="fade-right">
            <div class="relative">
              <div class="w-full h-150 bg-gradient-to-br to-secondary-light dark:from-primary-dark 
                dark:to-secondary-dark rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://scontent.fpnh18-6.fna.fbcdn.net/v/t39.30808-6/475789728_640960045168822_162423395347598915_n.jpg?stp=dst-jpg_s960x960_tt6&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=cc71e4&amp;_nc_eui2=AeEbE0L3cE7Po_SQg9KSvbOByZocygzS-V_JmhzKDNL5X1X8_HeBG-7TYtnXweW_X2PMVhDtW3K0RfnXvl7B70gS&amp;_nc_ohc=fkOx31bk_T0Q7kNvwGg017d&amp;_nc_oc=Adn_Il3zRPg-0Dh5NhdH4A_DFfquKAJCEnQAAJw5n9IblEEdWYoj2SClJuNT8wPdlRc&amp;_nc_zt=23&amp;_nc_ht=scontent.fpnh18-6.fna&amp;_nc_gid=mKKOCot8zEsvPAC4Cd5ltg&amp;oh=00_AfGxSd0b3tS6hCslXWFTBQDTDPgJjFNRY41aMMqG1j4y2g&amp;oe=6812C1EA"
                  alt="About Me" class="w-full h-full object-cover ">
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
            <h2 class="text-3xl mt-10 lg:mt-0 md:text-4xl font-bold mb-6">About <span class="text-[#10b981]">Me</span>
            </h2>
            <p class="text-lg text-indigo-100 dark:text-indigo-200 mb-6">
              Hello! I'm John, a passionate web developer and designer with over
              8 years of experience creating digital experiences that users
              love. My journey in tech began when I built my first website at
              15, and I've been hooked ever since.
            </p>
            <p class="text-lg text-indigo-100 dark:text-indigo-200 mb-8">
              I specialize in front-end development with a strong focus on
              creating responsive, accessible, and performant web applications.
              When I'm not coding, you can find me speaking at tech conferences,
              mentoring junior developers, or exploring the latest design
              trends.
            </p>

            <div class="grid grid-cols-2 gap-6 mb-5">
              <div>
                <h3 class="text-xl font-bold mb-3">Education</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-graduation-cap mt-1 mr-3 text-indigo-300 dark:text-indigo-400"></i>
                    <div>
                      <p class="font-medium">MSc in Computer Science</p>
                      <p class="text-indigo-200 dark:text-indigo-300 text-sm">
                        Stanford University, 2018
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-graduation-cap mt-1 mr-3 text-indigo-300 dark:text-indigo-400"></i>
                    <div>
                      <p class="font-medium">BSc in Software Engineering</p>
                      <p class="text-indigo-200 dark:text-indigo-300 text-sm">MIT, 2016</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-bold mb-3">Experience</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-briefcase mt-1 mr-3 text-indigo-300 dark:text-indigo-400"></i>
                    <div>
                      <p class="font-medium">Senior Developer</p>
                      <p class="text-indigo-200 dark:text-indigo-300 text-sm">
                        Google, 2020-Present
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-briefcase mt-1 mr-3 text-indigo-300 dark:text-indigo-400"></i>
                    <div>
                      <p class="font-medium">UI/UX Designer</p>
                      <p class="text-indigo-200 dark:text-indigo-300 text-sm">Apple, 2018-2020</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-wrap gap-4 mb-5">
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-sky-400  mr-2"></div>
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
              class="!rounded-button whitespace-nowrap inline-flex items-center bg-white dark:bg-indigo-100 text-indigo-900 px-8 py-3 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-200 transition-all duration-300 text-lg font-medium cursor-pointer">
              <i class="fas fa-download mr-2"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <Project />
    <!-- Stats Section -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" :key="index" class="text-center" data-aos="fade-up"
            :data-aos-delay="index * 100">
            <div class="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800" ref="contactSection">
      <div class="container mx-auto px-6">
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
            <form class="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8">
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
                class="!rounded-button whitespace-nowrap w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          <div class="lg:w-1/2" data-aos="fade-left">
            <div class="bg-indigo-900 dark:bg-indigo-950 text-white rounded-xl shadow-md p-8 h-full">
              <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-indigo-700/50 dark:bg-indigo-800/50 p-3 rounded-lg mr-4">
                    <i class="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Location</h4>
                    <p class="text-indigo-200 dark:text-indigo-300">San Francisco, California</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-indigo-700/50 dark:bg-indigo-800/50 p-3 rounded-lg mr-4">
                    <i class="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Email</h4>
                    <a href="mailto:hello@johndoe.com"
                      class="text-indigo-200 dark:text-indigo-300 hover:text-white transition-colors duration-300">hello@johndoe.com</a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-indigo-700/50 dark:bg-indigo-800/50 p-3 rounded-lg mr-4">
                    <i class="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Phone</h4>
                    <a href="tel:+1234567890"
                      class="text-indigo-200 dark:text-indigo-300 hover:text-white transition-colors duration-300">+1
                      (234) 567-890</a>
                  </div>
                </div>
              </div>

              <div class="mt-12">
                <h4 class="font-medium text-lg mb-4">Follow Me</h4>
                <div class="flex space-x-4">
                  <a href="#"
                    class="bg-indigo-700/50 dark:bg-indigo-800/50 hover:bg-indigo-700 dark:hover:bg-indigo-800 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
                    <i class="fab fa-github text-xl"></i>
                  </a>
                  <a href="#"
                    class="bg-indigo-700/50 dark:bg-indigo-800/50 hover:bg-indigo-700 dark:hover:bg-indigo-800 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
                    <i class="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#"
                    class="bg-indigo-700/50 dark:bg-indigo-800/50 hover:bg-indigo-700 dark:hover:bg-indigo-800 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
                    <i class="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#"
                    class="bg-indigo-700/50 dark:bg-indigo-800/50 hover:bg-indigo-700 dark:hover:bg-indigo-800 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
                    <i class="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-gray-800 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <a href="#" class="text-2xl font-bold">
              <span class="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Dev TIT</span>
            </a>
            <p class="text-gray-400 mt-2">Creative Developer & Designer</p>
          </div>

          <div class="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#home"
              class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Home</a>
            <a href="#skills"
              class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Skills</a>
            <a href="#events"
              class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Events</a>
            <a href="#about"
              class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">About</a>
            <a href="#contact"
              class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a>
          </div>

          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <i class="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        <hr class="border-gray-800 dark:border-gray-700 my-8" />

        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Dev TIT. All rights reserved.
          </p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300 cursor-pointer">Privacy
              Policy</a>
            <a href="#"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300 cursor-pointer">Terms
              of
              Service</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <button @click="scrollToTop"
      class="!rounded-button whitespace-nowrap fixed bottom-6 right-6 bg-indigo-600 dark:bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-all duration-300 z-20 cursor-pointer"
      :class="{ 'opacity-100 translate-y-0': showBackToTop, 'opacity-0 translate-y-10 pointer-events-none': !showBackToTop }">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import Hero from "./pages/Hero.vue";
import Project from "./pages/Project.vue";
import * as echarts from "echarts";
import AOS from 'aos';
import 'aos/dist/aos.css';
// State
const menuOpen = ref(false);
const isScrolled = ref(false);
const scrollProgress = ref(0);
const showBackToTop = ref(false);
const activeSection = ref("home");
const darkMode = ref(false);

// Refs
const headerRef = ref<HTMLElement | null>(null);
const homeSection = ref<HTMLElement | null>(null);
const skillsSection = ref<HTMLElement | null>(null);
const eventsSection = ref<HTMLElement | null>(null);
const aboutSection = ref<HTMLElement | null>(null);
const contactSection = ref<HTMLElement | null>(null);
const chartContainer = ref<HTMLElement | null>(null);
const availabilityChart = ref<HTMLElement | null>(null);
const cursor = ref<HTMLElement | null>(null);
// Menu items
const menuItems = [
  { id: "home", name: "Home", url: "#home" },
  { id: "skills", name: "Skills", url: "#skills" },
  { id: "events", name: "Events", url: "#events" },
  { id: "about", name: "About", url: "#about" },
  { id: "contact", name: "Contact", url: "#contact" },
];

// Skills data
const skills = [
  {
    title: "Front-End Development",
    description:
      "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
    image:
      "https://readdy.ai/api/search-image?query=modern%20web%20development%20concept%20with%20code%20on%20screen%2C%20abstract%20digital%20interface%20with%20HTML%2C%20CSS%2C%20and%20JavaScript%20code%20elements%2C%20professional%20coding%20environment%20with%20purple%20and%20blue%20color%20scheme%2C%20clean%20modern%20workspace&width=400&height=300&seq=skill1&orientation=landscape",
    tags: ["React", "Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user experiences that solve real problems.",
    image:
      "https://readdy.ai/api/search-image?query=UI%20UX%20design%20workspace%20with%20wireframes%20and%20prototypes%20on%20screen%2C%20digital%20design%20tools%2C%20color%20palettes%2C%20user%20flow%20diagrams%2C%20modern%20minimal%20design%20studio%20with%20purple%20and%20blue%20accents%2C%20professional%20design%20environment&width=400&height=300&seq=skill2&orientation=landscape",
    tags: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
  },
  {
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications that deliver native-like experiences.",
    image:
      "https://readdy.ai/api/search-image?query=mobile%20app%20development%20concept%20with%20smartphone%20mockups%20displaying%20app%20interfaces%2C%20code%20in%20background%2C%20modern%20mobile%20development%20environment%20with%20purple%20and%20blue%20color%20scheme%2C%20professional%20mobile%20development%20workspace&width=400&height=300&seq=skill3&orientation=landscape",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    title: "Backend Development",
    description:
      "Developing robust and scalable server-side applications and APIs.",
    image:
      "https://readdy.ai/api/search-image?query=server%20room%20with%20glowing%20blue%20and%20purple%20lights%2C%20database%20visualization%2C%20cloud%20computing%20concept%2C%20modern%20backend%20infrastructure%2C%20data%20center%20with%20futuristic%20lighting%2C%20professional%20server%20environment&width=400&height=300&seq=skill4&orientation=landscape",
    tags: ["Node.js", "Express", "MongoDB", "GraphQL"],
  },
  {
    title: "DevOps & Cloud",
    description:
      "Implementing CI/CD pipelines and managing cloud infrastructure.",
    image:
      "https://readdy.ai/api/search-image?query=cloud%20computing%20infrastructure%20visualization%2C%20digital%20network%20of%20connected%20servers%2C%20DevOps%20pipeline%20concept%2C%20modern%20cloud%20architecture%20with%20purple%20and%20blue%20nodes%2C%20professional%20cloud%20environment%20visualization&width=400&height=300&seq=skill5&orientation=landscape",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing application speed, responsiveness, and overall user experience.",
    image:
      "https://readdy.ai/api/search-image?query=performance%20metrics%20dashboard%20with%20graphs%20and%20charts%2C%20speed%20optimization%20concept%2C%20loading%20time%20visualization%2C%20modern%20analytics%20interface%20with%20purple%20and%20blue%20data%20visualization%2C%20professional%20performance%20monitoring%20environment&width=400&height=300&seq=skill6&orientation=landscape",
    tags: ["Lighthouse", "WebPageTest", "Core Web Vitals", "SEO"],
  },
];

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



// Stats data
const stats = [
  { value: "12+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
  { value: "5", label: "Awards Won" },
];

// Methods
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = "";
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'disabled');
  }
};

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  // Update header state
  isScrolled.value = scrollPosition > 50;

  // Update scroll progress
  const windowHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (scrollPosition / windowHeight) * 100;

  // Show/hide back to top button
  showBackToTop.value = scrollPosition > 500;

  // Update active section
  updateActiveSection();
};

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  const sections = [
    { ref: homeSection.value, id: "home" },
    { ref: skillsSection.value, id: "skills" },
    { ref: eventsSection.value, id: "events" },
    { ref: aboutSection.value, id: "about" },
    { ref: contactSection.value, id: "contact" },
  ];

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section.ref && section.ref.offsetTop <= scrollPosition) {
      activeSection.value = section.id;
      break;
    }
  }
};

const initAvailabilityChart = () => {
  if (availabilityChart.value) {
    const chart = echarts.init(availabilityChart.value);

    const option = {
      animation: false,
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: "{b}: {c}%",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        max: 100,
        axisLabel: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
      yAxis: {
        type: "category",
        data: [
          "Sunday",
          "Saturday",
          "Friday",
          "Thursday",
          "Wednesday",
          "Tuesday",
          "Monday",
        ],
        axisLabel: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
        },
      },
      series: [
        {
          name: "Availability",
          type: "bar",
          data: [30, 40, 80, 90, 70, 85, 60],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#a78bfa" },
              { offset: 1, color: "#818cf8" },
            ]),
          },
          barWidth: "60%",
          label: {
            show: true,
            position: "right",
            color: "rgba(255, 255, 255, 0.7)",
            formatter: "{c}%",
          },
        },
      ],
    };

    chart.setOption(option);

    // Handle resize
    const resizeChart = () => {
      chart.resize();
    };

    window.addEventListener("resize", resizeChart);

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener("resize", resizeChart);
      chart.dispose();
    });
  }
};

// Lifecycle hooks
onMounted(() => {
  // Check for saved dark mode preference
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.value = true;
    document.documentElement.classList.add('dark');
  }

  // Initialize AOS
  if (typeof window !== "undefined" && AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initialize chart
  nextTick(() => {
    initAvailabilityChart();
  });

  // Initial call to set states
  handleScroll();


  const el = cursor.value;
  if (!el) return;

  // Move cursor
  document.addEventListener('mousemove', (e) => {
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;
  });

  // Click effects
  document.addEventListener('mousedown', () => {
    el.style.width = '15px';
    el.style.height = '15px';
    el.style.backgroundColor = 'rgba(99, 102, 241, 0.7)';
  });

  document.addEventListener('mouseup', () => {
    el.style.width = '20px';
    el.style.height = '20px';
    el.style.backgroundColor = 'rgba(99, 102, 241, 0.5)';
  });

  // Hover on interactive elements
  const targets = document.querySelectorAll('a, button, input, textarea, .hamburger, .theme-switch');
  targets.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
    });
    item.addEventListener('mouseleave', () => {
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.backgroundColor = 'rgba(99, 102, 241, 0.5)';
    });
  });


});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>

<style scoped>
@supports(scroll-margin: 4em 0 0 0) {
  :target {
    margin: 0;
    /* padding: 0; */
    padding-block: calc(0.25rem*20);
    scroll-margin: 6em 0 0 0;
  }
}

.typing-animation {
  overflow: hidden;
  /* Ensures the text doesn't overflow during animation */
  border-right: 2px solid #10b981;
  /* Creates the typing cursor effect */
  white-space: nowrap;
  /* Keeps the text on a single line */
  animation:
    typing 3.5s steps(40, end),
    blink-caret 0.75s step-end infinite;
}

/* The typing effect */
/* @keyframes typing {
  from { width: 0 }
  to { width: 100% }
} */

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: #10b981;
  }

}

@keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #6366f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4f46e5;
}

/* Remove default number input arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Custom Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Ensure minimum height for content */
.min-h-screen {
  height: 100vh;
}

/* Container width */
.container {
  max-width: 1440px;
}


@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(99, 102, 241, 0.5);
  pointer-events: none;
  z-index: 999;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, background-color 0.2s;
  mix-blend-mode: difference;
}
</style>  i have this code vue ts I want to use like component section but ref not working How to do . Give me full code conponet ref component