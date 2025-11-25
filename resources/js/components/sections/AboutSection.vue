<template>
  <section ref="sectionRef" class="about-section bg-[#F9F8F4] py-24 will-fade-in">
    <div class="container mx-auto px-6 md:px-12">
      <!-- Desktop: Overlay Layout | Mobile: Stacked Layout -->
      <div class="relative flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
        
        <!-- Image Container (Left) -->
        <div class="w-full md:w-5/12 relative z-10">
          <div class="relative overflow-hidden shadow-xl">
            <img 
              src="/images/about-agency.jpg" 
              alt="Notre équipe au travail" 
              class="w-full h-auto object-cover"
            />
          </div>
        </div>

        <!-- Text Block (Right) - Overlapping on Desktop -->
        <div class="w-full md:w-7/12 md:-ml-24 md:mt-12">
          <div class="bg-white p-8 md:p-12 shadow-xl relative z-20">
            <!-- Title -->
            <h2 class="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nous ne sommes pas <span class="text-agency-electric italic">des robots</span>
            </h2>

            <!-- Description -->
            <p class="font-sans text-gray-700 text-lg leading-relaxed mb-8">
              M4 Entreprise, c'est une agence digitale qui met l'humain au cœur de chaque projet. 
              Nous croyons que la technologie doit servir vos ambitions, pas l'inverse. 
              Notre équipe passionnée combine expertise technique et créativité pour transformer 
              vos idées en solutions digitales qui font la différence.
            </p>

            <p class="font-sans text-gray-700 text-lg leading-relaxed mb-12">
              Que vous soyez une startup ambitieuse ou une entreprise établie, nous créons 
              des expériences digitales qui captivent vos utilisateurs et propulsent votre croissance.
            </p>

            <!-- Stats Section -->
            <div class="flex flex-row items-center justify-between gap-6">
              <!-- Stat 1 -->
              <div class="flex-1 text-center">
                <div class="flex items-center justify-center mb-2">
                  <svg class="w-8 h-8 text-agency-electric" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">150+</div>
                <div class="text-sm text-gray-600 font-sans">Projets réalisés</div>
              </div>

              <!-- Separator -->
              <div class="h-16 w-px bg-gray-300"></div>

              <!-- Stat 2 -->
              <div class="flex-1 text-center">
                <div class="flex items-center justify-center mb-2">
                  <svg class="w-8 h-8 text-agency-electric" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">100+</div>
                <div class="text-sm text-gray-600 font-sans">Clients satisfaits</div>
              </div>

              <!-- Separator -->
              <div class="h-16 w-px bg-gray-300"></div>

              <!-- Stat 3 -->
              <div class="flex-1 text-center">
                <div class="flex items-center justify-center mb-2">
                  <svg class="w-8 h-8 text-agency-electric" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">10+</div>
                <div class="text-sm text-gray-600 font-sans">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

const sectionRef = ref(null);
const { observe } = useIntersectionObserver();

onMounted(() => {
  if (sectionRef.value) {
    observe(sectionRef.value);
  }
});
</script>

<style scoped>
/* Responsive adjustments */
@media (max-width: 768px) {
  .about-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>
