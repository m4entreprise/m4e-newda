<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useIntersectionObserver();

const expertiseAreas = [
    {
        id: 'vitrines',
        title: 'Sites Vitrines',
        description:
            'Créez une présence en ligne qui reflète l\'authenticité de votre marque. Nous concevons des sites vitrines élégants qui racontent votre histoire.',
        image: '/images/expertise-vitrines.jpg',
        gradient: 'from-purple-900/90 to-indigo-900/90',
        icon: '🎨',
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce',
        description:
            'Des boutiques en ligne qui convertissent. Expérience utilisateur fluide, paiements sécurisés, et gestion optimisée pour booster vos en ligne.',
        image: '/images/expertise-ecommerce.jpg',
        gradient: 'from-emerald-900/90 to-teal-900/90',
        icon: '🛒',
    },
    {
        id: 'saas',
        title: 'Solutions Métiers (LMS/SaaS)',
        description:
            'Applications web sur mesure pour automatiser vos processus. Plateformes LMS, ERP, CRM et outils métiers conçus pour votre croissance.',
        image: '/images/expertise-saas.jpg',
        gradient: 'from-blue-900/90 to-cyan-900/90',
        icon: '⚙️',
    },
    {
        id: 'google-ads',
        title: 'Google Ads & SEO',
        description:
            'Maximisez votre ROI avec des campagnes ciblées. Stratégies d\'acquisition, optimisation continue et reporting transparent pour booster vos ventes.',
        image: '/images/expertise-google-ads.jpg',
        gradient: 'from-orange-900/90 to-red-900/90',
        icon: '📈',
    },
];

onMounted(() => {
    if (sectionRef.value) {
        observe(sectionRef.value);
    }
});
</script>

<template>
    <section ref="sectionRef" class="will-fade-in bg-agency-navy py-20 md:py-32">
        <div class="mx-auto max-w-7xl px-6">
            <!-- Section Header -->
            <div class="mb-16 text-center">
                <h2
                    class="mb-4 font-serif text-5xl font-medium text-agency-cream md:text-7xl"
                >
                    Nos <span class="text-agency-electric italic">Expertises</span>
                </h2>
                <p class="font-sans text-lg text-agency-cream/90">
                    Quatre pôles d'excellence pour répondre à tous vos besoins digitaux
                </p>
            </div>

            <!-- Expertise Cards Grid -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div
                    v-for="expertise in expertiseAreas"
                    :key="expertise.id"
                    class="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                    <!-- Background Image -->
                    <div class="absolute inset-0">
                        <img
                            :src="expertise.image"
                            :alt="expertise.title"
                            class="h-full w-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-50"
                            loading="lazy"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-r transition-opacity duration-500"
                            :class="expertise.gradient"
                        ></div>
                    </div>

                    <!-- Content -->
                    <div class="relative z-10 p-8 md:p-10 lg:p-12">
                        <div class="flex flex-col gap-4">
                            <div
                                class="flex-shrink-0 text-5xl opacity-80 transition-transform duration-500 group-hover:scale-110"
                            >
                                {{ expertise.icon }}
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="mb-4 font-serif text-2xl font-semibold text-agency-cream md:text-3xl"
                                >
                                    {{ expertise.title }}
                                </h3>
                                <p
                                    class="font-sans text-lg leading-relaxed text-white"
                                >
                                    {{ expertise.description }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Hover Accent -->
                    <div
                        class="absolute bottom-0 left-0 h-1 w-0 bg-agency-electric transition-all duration-500 group-hover:w-full"
                    ></div>
                </div>
            </div>
        </div>
    </section>
</template>
