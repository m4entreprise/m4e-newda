<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useIntersectionObserver();

onMounted(() => {
    if (sectionRef.value) {
        observe(sectionRef.value);
    }
});
</script>

<template>
    <section
        ref="sectionRef"
        class="will-fade-in bg-agency-cream py-20 md:py-32"
    >
        <div
            class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16"
        >
            <!-- Image Side -->
            <div class="order-2 lg:order-1">
                <div
                    class="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
                >
                    <img
                        src="/images/agency-workspace.jpg"
                        alt="Notre équipe au travail"
                        class="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>

            <!-- Text Side -->
            <div class="order-1 lg:order-2">
                <h2
                    class="mb-6 font-serif text-5xl font-medium text-agency-navy md:text-7xl"
                >
                    Nous ne sommes pas<br />
                    <span class="text-agency-electric italic">des robots</span>
                </h2>

                <p class="mb-6 font-sans text-lg leading-relaxed text-agency-navy">
                    Nous sommes <strong class="font-semibold text-agency-navy">5 experts passionnés</strong> qui
                    comprennent votre métier avant de coder. Notre approche allie l'artisanat du web
                    traditionnel avec les technologies modernes.
                </p>

                <p class="mb-8 font-sans text-lg leading-relaxed text-agency-navy">
                    Chaque projet est une collaboration étroite où nous prenons le temps de comprendre
                    vos besoins, votre audience et vos objectifs. Résultat : des solutions digitales qui
                    ont une âme.
                </p>

                <div class="flex flex-wrap gap-4">
                    <div
                        class="flex items-center gap-2 rounded-full border border-agency-navy/30 bg-white px-4 py-2 shadow-sm"
                    >
                        <span class="text-2xl">💡</span>
                        <span class="font-sans text-xs font-bold uppercase tracking-wider text-agency-navy"
                            >5 Experts</span
                        >
                    </div>
                    <div
                        class="flex items-center gap-2 rounded-full border border-agency-navy/30 bg-white px-4 py-2 shadow-sm"
                    >
                        <span class="text-2xl">🚀</span>
                        <span class="font-sans text-xs font-bold uppercase tracking-wider text-agency-navy"
                            >100+ Projets</span
                        >
                    </div>
                    <div
                        class="flex items-center gap-2 rounded-full border border-agency-navy/30 bg-white px-4 py-2 shadow-sm"
                    >
                        <span class="text-2xl">⭐</span>
                        <span class="font-sans text-xs font-bold uppercase tracking-wider text-agency-navy"
                            >10 Ans d'Expérience</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
