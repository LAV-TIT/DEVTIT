<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import Header from "./components/layout/Header.vue";
import Hero from './components/pages/Hero.vue';
import Skills from './components/pages/Skills.vue';
import EventTimeline from "./components/pages/EventTimeline.vue";
import About from './components/pages/About.vue';
import Project from './components/pages/Project.vue';
import StatSection from "./components/pages/StatSection.vue";
import Contact from './components/pages/Contact.vue';
import CV from "./components/pages/Cv.vue";
import Footer from "./components/pages/Footer.vue";
import * as echarts from "echarts";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { provide } from 'vue';
// ... your socials ref

// State
const isScrolled = ref(false);
const scrollProgress = ref(0);
const showBackToTop = ref(false);
const activeSection = ref("home");
const darkMode = ref(false);
const menuOpen = ref(false);

const snowflakesContainer = ref<HTMLElement | null>(null)
const snowflakeCount = 150

// Refs
const cursor = ref<HTMLElement | null>(null);
const heroSection = ref<InstanceType<typeof Hero> | null>(null);
const skillsSection = ref<InstanceType<typeof Skills> | null>(null);
const eventsSection = ref<InstanceType<typeof EventTimeline> | null>(null);
const aboutSection = ref<InstanceType<typeof About> | null>(null);
const contactSection = ref<InstanceType<typeof Contact> | null>(null);
const cvSection = ref<InstanceType<typeof CV> | null>(null);
// Menu items
const menuItems = [
  { id: "home", name: "Home", url: "#home" },
  { id: "skills", name: "Skills", url: "#skills" },
  { id: "events", name: "Events", url: "#events" },
  { id: "about", name: "About", url: "#about" },
  { id: "contact", name: "Contact", url: "#contact" },
  { id: "cv", name: "CV", url: "#cv" },
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
// const events = ref([
//   {
//     title: "Web Summit 2025",
//     date: "April 15-17, 2025",
//     icon: ['fas', 'dog'],
//     description:
//       'Presented a talk on "The Future of Web Development" at the world\'s largest tech conference.',
//     location: "Siem Reap Cambodia",
//   },
//   {
//     title: "React Conference",
//     date: "March 10, 2025",
//     icon: ['fas', 'bolt'],
//     description:
//       "Led a workshop on advanced React patterns and performance optimization techniques.",
//     location: "Siem Reap Cambodia",
//   },
//   {
//     title: "UX Design Summit",
//     date: "February 5, 2025",
//     icon: ['fas', 'paint-brush'],
//     description:
//       "Participated in a panel discussion about the intersection of design and development.",
//     location: "Siem Reap Cambodia",
//   },
//   {
//     title: "Local Tech Meetup",
//     date: "January 20, 2025",
//     icon: ['fas', 'users'],
//     description:
//       "Organized and hosted a community event focused on frontend development best practices.",
//     location: "Siem Reap Cambodia",
//   },
// ])

const socials = [
  {
    name: "Facebook",
    url: "https://web.facebook.com/tit1912",
    icon: "facebook",
    username: "yourusername",
  },
  {
    name: "GitHub",
    url: "https://github.com/lAV-TIT",
    icon: "github",
    username: "yourusername",
    repositories: 24,
    followers: 42
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lav-tit-33606a311/",
    icon: "linkedin",
    username: "yourprofile",
    connections: 500
  },

  {
    name: "YouTube",
    url: "https://www.youtube.com/yourchannel",
    icon: "youtube",
    username: "Your Channel",
    subscribers: 15000
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@yourusername",
    icon: "tiktok",
    username: "@yourusername",
    followers: 8500
  },
];
// Methods
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

const handleMenuToggle = (isOpen: boolean) => {
  menuOpen.value = isOpen;
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

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  // Update header state
  isScrolled.value = scrollPosition > 50;

  // Update scroll progress
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (scrollPosition / windowHeight) * 100;

  // Show/hide back to top button
  showBackToTop.value = scrollPosition > 500;

  // Update active section
  updateActiveSection();
};

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  const sections = [
    { ref: heroSection.value?.$el, id: "home" },
    { ref: skillsSection.value?.$el, id: "skills" },
    { ref: eventsSection.value?.$el, id: "events" },
    { ref: aboutSection.value?.$el, id: "about" },
    { ref: contactSection.value?.$el, id: "contact" },
    { ref: cvSection.value?.$el, id: "cv" },
  ];
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section.ref && section.ref.offsetTop <= scrollPosition) {
      activeSection.value = section.id;
      break;
    }
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
  //==== snow ===========
  
  if (!snowflakesContainer.value) return

  for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake()
  }

  function createSnowflake() {
    if (!snowflakesContainer.value) return

    const snowflake = document.createElement('div')
    snowflake.className = 'animate-snowfall dark:bg-white bg-indigo-700 '

    // Random size between 1px and 5px
    const size = Math.random() * 3 + 1
    snowflake.style.width = `${size}px`
    snowflake.style.height = `${size}px`

    // Random opacity for more natural look
    snowflake.style.opacity = `${Math.random() * 0.7 + 0.3}`

    // Random position across the viewport width
    snowflake.style.left = `${Math.random() * 100}vw`

    // Random animation duration (5-15 seconds)
    const duration = Math.random() * 10 + 5
    snowflake.style.animationDuration = `${duration}s`

    // Random delay so they don't all start at once
    snowflake.style.animationDelay = `${Math.random() * 5}s`

    snowflakesContainer.value.appendChild(snowflake)

    // Reset snowflake position when animation completes
    snowflake.addEventListener('animationiteration', () => {
      snowflake.style.left = `${Math.random() * 100}vw`
    })
  }
  //=====end snow==========
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<template>

  <div ref="cursor" class="custom-cursor hidden md:block fixed top-0 
      left-0 w-5 h-5 bg-indigo-500/50 rounded-full 
      pointer-events-none z-50 transition-all duration-200">
  </div>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    
    <div class="bg-gray-900 w-full overflow-hidden relative">
      <Header :isScrolled="isScrolled" :scrollProgress="scrollProgress" :activeSection="activeSection"
      :darkMode="darkMode" :menuItems="menuItems" :socials="socials" @toggleDarkMode="toggleDarkMode"
      @toggleMenu="handleMenuToggle" @closeMenu="closeMenu"></Header>

      <Hero ref="heroSection"/>
      <div ref="snowflakesContainer" id="snowflakes-container"></div>

      <Skills ref="skillsSection" :skills="skills" />
    </div>
    <EventTimeline ref="eventsSection" />

    <About ref="aboutSection" />

    <Project />

    <StatSection />
    <CV ref="cvSection"/>
    <Contact :socials="socials"  ref="contactSection" />

    <Footer :menuItems="menuItems" :socials="socials" />

    <!-- Back to Top Button -->
    <button @click="scrollToTop"
      class="!rounded-button whitespace-nowrap fixed bottom-6 right-6 bg-indigo-600 dark:bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-all duration-300 z-20 cursor-pointer"
      :class="{ 'opacity-100 translate-y-0': showBackToTop, 'opacity-0 translate-y-10 pointer-events-none': !showBackToTop }">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
  
</template>
<style>
@keyframes snowfall {
  0% {
    transform: translateY(-10vh) translateX(0);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateY(100vh) translateX(10vw);
    opacity: 0;
  }
}

.animate-snowfall {
  animation: snowfall linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
}



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
</style>