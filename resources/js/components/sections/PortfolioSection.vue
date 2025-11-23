<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useIntersectionObserver();

const projects = [
    {
        id: 1,
        title: 'Boutique Artisanale',
        category: 'E-Commerce',
        image: '/images/portfolio-1.jpg',
        kpis: [
            { label: 'Conversion', value: '+145%' },
            { label: 'Temps de chargement', value: '1.2s' },
        ],
    },
    {
        id: 2,
        title: 'Plateforme LMS',
        category: 'SaaS',
        image: '/images/portfolio-2.jpg',
        kpis: [
            { label: 'Utilisateurs actifs', value: '5000+' },
            { label: 'Satisfaction', value: '98%' },
        ],
    },
    {
        id: 3,
        title: 'Site Vitrine Premium',
        category: 'Vitrine',
        image: '/images/portfolio-3.jpg',
        kpis: [
            { label: 'Trafic', value: '+230%' },
            { label: 'Engagement', value: '4.5min' },
        ],
    },
    {
        id: 4,
        title: 'Application Mobile',
        category: 'E-Commerce',
        image: '/images/portfolio-4.jpg',
        kpis: [
            { label: 'Téléchargements', value: '10k+' },
            { label: 'Note App Store', value: '4.8/5' },
        ],
    },
    {
        id: 5,
        title: 'Dashboard Analytics',
        category: 'SaaS',
        image: '/images/portfolio-5.jpg',
        kpis: [
            { label: 'Données traitées', value: '1M+/jour' },
            { label: 'Uptime', value: '99.9%' },
        ],
    },
    {
        id: 6,
        title: 'Campagne Digitale',
        category: 'Pub',
        image: '/images/portfolio-6.jpg',
        kpis: [
            { label: 'Impressions', value: '2.5M' },
            { label: 'ROI', value: '+380%' },
        ],
    },
];

onMounted(() => {
    if (sectionRef.value) {
        observe(sectionRef.value);
    }
});
</script>

<template>
    <section ref="sectionRef" class="will-fade-in bg-agency-cream py-20 md:py-32">
        <div class="mx-auto max-w-7xl px-6">
            <!-- Section Header -->
            <div class="mb-16 text-center">
                <h2
                    class="mb-4 font-serif text-5xl font-medium text-agency-navy md:text-7xl"
                >
                    Nos <span class="text-agency-electric italic">Derniers Projets</span>
                </h2>
                <p class="font-sans text-lg text-agency-navy">
                    Des réalisations concrètes qui parlent d'elles-mêmes
                </p>
            </div>

            <!-- Portfolio Grid -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="project in projects"
                    :key="project.id"
                    class="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <!-- Project Image -->
                    <div class="relative aspect-[4/3] overflow-hidden">
                        <img
                            :src="project.image"
                            :alt="project.title"
                            class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50"
                            loading="lazy"
                        />

                        <!-- Overlay with KPIs (appears on hover) -->
                        <div
                            class="absolute inset-0 flex flex-col items-center justify-center bg-agency-navy/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        >
                            <h3
                                class="mb-2 font-serif text-2xl font-semibold text-agency-cream"
                            >
                                {{ project.title }}
                            </h3>
                            <span
                                class="mb-6 inline-block rounded-full bg-agency-electric/20 px-4 py-1 font-sans text-sm text-agency-electric"
                            >
                                {{ project.category }}
                            </span>

                            <div class="flex gap-6">
                                <div
                                    v-for="kpi in project.kpis"
                                    :key="kpi.label"
                                    class="text-center"
                                >
                                    <div
                                        class="mb-1 font-sans text-2xl font-bold text-agency-electric"
                                    >
                                        {{ kpi.value }}
                                    </div>
                                    <div class="font-sans text-xs text-agency-cream/90">
                                        {{ kpi.label }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Project Info (visible by default) -->
                    <div class="p-6">
                        <h3
                            class="mb-2 font-serif text-xl font-semibold text-agency-navy transition-colors group-hover:text-agency-electric"
                        >
                            {{ project.title }}
                        </h3>
                        <span
                            class="inline-block font-sans text-sm font-bold text-agency-electric"
                        >
                            {{ project.category }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
