<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useIntersectionObserver();

const steps = [
    {
        id: 1,
        number: '01',
        title: 'Découverte',
        description: 'Nous prenons le temps de comprendre votre vision, vos objectifs et votre audience. Cette phase est cruciale pour établir les fondations solides de votre projet digital.',
        duration: '1-2 semaines',
        keyPoints: [
            'Analyse approfondie de vos besoins métier',
            'Étude de votre marché et de vos concurrents',
            'Définition des objectifs et KPIs',
            'Identification de votre audience cible',
        ],
    },
    {
        id: 2,
        number: '02',
        title: 'Stratégie',
        description: 'Élaboration d\'une stratégie digitale sur mesure, adaptée à vos besoins spécifiques. Nous concevons un plan d\'action détaillé pour garantir l\'atteinte de vos objectifs.',
        duration: '2-3 semaines',
        keyPoints: [
            'Définition de l\'architecture et des fonctionnalités',
            'Planification du parcours utilisateur (UX)',
            'Choix des technologies adaptées',
            'Roadmap et planning de réalisation',
        ],
    },
    {
        id: 3,
        number: '03',
        title: 'Création',
        description: 'Design et développement avec une attention particulière aux détails et à l\'expérience utilisateur. Notre équipe donne vie à votre projet avec excellence et créativité.',
        duration: '4-8 semaines',
        keyPoints: [
            'Design UI/UX sur mesure et moderne',
            'Développement avec les meilleures pratiques',
            'Tests continus et ajustements itératifs',
            'Validation régulière avec vous',
        ],
    },
    {
        id: 4,
        number: '04',
        title: 'Lancement',
        description: 'Déploiement soigné et accompagnement pour assurer le succès de votre projet. Nous restons à vos côtés pour garantir une mise en ligne sans accroc.',
        duration: '1-2 semaines',
        keyPoints: [
            'Tests finaux et optimisation des performances',
            'Déploiement sécurisé en production',
            'Formation à l\'utilisation de votre solution',
            'Support et maintenance continue',
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
    <section ref="sectionRef" class="will-fade-in relative overflow-hidden bg-agency-cream py-20 md:py-32">
        <!-- Background Elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-agency-electric/5 blur-3xl"></div>
            <div class="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-agency-neon/5 blur-3xl"></div>
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-6">
            <!-- Section Header -->
            <div class="mb-16 text-center">
                <h2 class="mb-4 font-serif text-5xl font-medium text-agency-navy md:text-7xl">
                    Notre <span class="text-agency-electric italic">Méthode</span>
                </h2>
                <p class="mx-auto max-w-2xl font-sans text-lg text-agency-navy">
                    Une approche structurée et collaborative pour transformer vos idées en réalité digitale
                </p>
            </div>

            <!-- Timeline -->
            <div class="relative">
                <!-- Vertical Timeline Line (hidden on mobile) -->
                <div class="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
                    <!-- Glow effect background -->
                    <div
                        class="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 opacity-10 blur-lg"
                        style="background: linear-gradient(to bottom, hsl(195, 100%, 50%), hsl(145, 80%, 50%), hsl(195, 100%, 50%));"
                    ></div>

                    <!-- Main line with gradient -->
                    <div
                        class="relative h-full w-0.5"
                        style="background: linear-gradient(to bottom,
                            hsla(195, 100%, 50%, 0.15),
                            hsla(195, 100%, 50%, 0.4) 20%,
                            hsla(145, 80%, 50%, 0.4) 50%,
                            hsla(195, 100%, 50%, 0.4) 80%,
                            hsla(195, 100%, 50%, 0.15));"
                    ></div>

                    <!-- Animated glow line -->
                    <div
                        class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 animate-pulse"
                        style="background: linear-gradient(to bottom,
                            transparent,
                            hsla(195, 100%, 60%, 0.3) 30%,
                            hsla(145, 80%, 50%, 0.3) 50%,
                            hsla(195, 100%, 60%, 0.3) 70%,
                            transparent);
                            box-shadow: 0 0 10px hsla(195, 100%, 50%, 0.2);"
                    ></div>
                </div>

                <!-- Steps -->
                <div class="space-y-16 md:space-y-24">
                    <div
                        v-for="(step, index) in steps"
                        :key="step.id"
                        class="relative"
                    >
                        <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
                            <!-- Left Side -->
                            <div
                                :class="[
                                    'group',
                                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                                ]"
                            >
                                <div
                                    :class="[
                                        'relative rounded-2xl border-2 border-agency-navy/10 bg-white p-8 shadow-lg transition-all duration-500 hover:border-agency-electric/30 hover:shadow-2xl',
                                        index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                                    ]"
                                >
                                    <!-- Gradient overlay on hover -->
                                    <div class="absolute inset-0 bg-gradient-to-br from-agency-electric/0 to-agency-neon/0 transition-all duration-500 group-hover:from-agency-electric/3 group-hover:to-agency-neon/3"></div>

                                    <!-- Content -->
                                    <div class="relative z-10">
                                        <div class="mb-3 flex items-center gap-3">
                                            <!-- Mobile number badge -->
                                            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-agency-electric to-agency-neon font-sans text-sm font-bold text-white md:hidden">
                                                {{ step.number }}
                                            </span>
                                            <h3 class="font-serif text-3xl font-semibold text-agency-navy">
                                                {{ step.title }}
                                            </h3>
                                            <span class="rounded-full bg-agency-electric/10 px-3 py-1 font-sans text-xs font-bold text-agency-electric">
                                                {{ step.duration }}
                                            </span>
                                        </div>

                                        <p class="mb-6 font-sans text-base leading-relaxed text-agency-navy">
                                            {{ step.description }}
                                        </p>

                                        <!-- Key Points -->
                                        <div class="space-y-3">
                                            <h4 class="font-sans text-sm font-bold uppercase tracking-wider text-agency-navy">
                                                Points clés
                                            </h4>
                                            <ul class="space-y-2">
                                                <li
                                                    v-for="(point, idx) in step.keyPoints"
                                                    :key="idx"
                                                    class="flex items-start gap-3 font-sans text-sm text-agency-navy"
                                                >
                                                    <span class="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-agency-electric/20 text-xs font-bold text-agency-electric">
                                                        ✓
                                                    </span>
                                                    <span class="leading-relaxed">{{ point }}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- Connection line to timeline (desktop only) -->
                                    <div
                                        :class="[
                                            'absolute top-1/2 -z-10 hidden -translate-y-1/2 transition-all duration-500 md:block',
                                            index % 2 === 0 ? '-right-8' : '-left-8'
                                        ]"
                                    >
                                        <!-- Main connection line -->
                                        <div
                                            :class="[
                                                'h-0.5 w-8 transition-all duration-500 group-hover:w-12',
                                                index % 2 === 0 ? 'origin-left' : 'origin-right'
                                            ]"
                                            :style="{
                                                background: index % 2 === 0
                                                    ? 'linear-gradient(to right, hsl(195, 100%, 50%), hsla(195, 100%, 50%, 0.2))'
                                                    : 'linear-gradient(to left, hsl(195, 100%, 50%), hsla(195, 100%, 50%, 0.2))'
                                            }"
                                        ></div>
                                        <!-- Glow effect on hover -->
                                        <div
                                            :class="[
                                                'absolute top-1/2 h-2 w-8 -translate-y-1/2 opacity-0 blur-sm transition-all duration-500 group-hover:w-12 group-hover:opacity-30',
                                                index % 2 === 0 ? 'left-0' : 'right-0'
                                            ]"
                                            style="background: hsl(195, 100%, 50%);"
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Side (Decorative Number - desktop only) -->
                            <div
                                :class="[
                                    'hidden md:block',
                                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                                ]"
                            >
                                <div
                                    :class="[
                                        'flex items-center',
                                        index % 2 === 0 ? 'justify-start pl-16' : 'justify-end pr-16'
                                    ]"
                                >
                                    <span
                                        class="font-serif text-9xl font-bold transition-all duration-700 hover:scale-105"
                                        style="background: linear-gradient(135deg, hsla(195, 100%, 50%, 0.15), hsla(145, 80%, 50%, 0.1));
                                               -webkit-background-clip: text;
                                               -webkit-text-fill-color: transparent;
                                               background-clip: text;
                                               text-shadow: 0 0 60px hsla(195, 100%, 50%, 0.1);"
                                    >
                                        {{ step.number }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 text-center">
                <p class="mb-6 font-sans text-lg text-agency-navy">
                    Prêt à commencer votre projet ?
                </p>
                <a
                    href="#contact"
                    class="group inline-flex items-center gap-2 rounded-full bg-agency-navy px-8 py-4 font-sans font-bold text-agency-cream transition-all hover:bg-agency-electric hover:text-agency-navy"
                >
                    Discutons-en
                    <svg
                        class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>
