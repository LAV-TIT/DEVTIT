<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
// Refs
// Stats data
const stats = [
  { value: "12+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
  { value: "5", label: "Awards Won" },
];
</script> 
<template>
    <!-- Stats Section -->
    <section class="py-16 bg-indigo-50 dark:bg-gray-900">
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
</template>
<style scoped></style>