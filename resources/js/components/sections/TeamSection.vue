<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useIntersectionObserver();

const team = [
    {
        id: 1,
        name: 'Thomas Filograna',
        role: 'Co-Founder & CEO',
        image: '/images/thomas-filograna.jpeg',
        hobbyImage: '/images/team-1-hobby.jpg',
        hobby: 'Littérature',
    },
    {
        id: 2,
        name: 'Jonathan Filograna',
        role: 'Co-Founder & CTO',
        image: '/images/team-2.jpg',
        hobbyImage: '/images/team-2-hobby.jpg',
        hobby: 'Musique',
    },
    {
        id: 3,
        name: 'Malko Beschopss',
        role: 'Artistic Direction',
        image: '/images/team-3.jpg',
        hobbyImage: '/images/team-3-hobby.jpg',
        hobby: 'Photographie',
    },
    {
        id: 4,
        name: 'Thomas Dusart',
        role: 'Technician',
        image: '/images/team-4.jpg',
        hobbyImage: '/images/team-4-hobby.jpg',
        hobby: 'Cuisine',
    },
    {
        id: 5,
        name: 'Noah Campana',
        role: 'Technician',
        image: '/images/team-5.jpg',
        hobbyImage: '/images/team-5-hobby.jpg',
        hobby: 'Randonnée',
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
                    L'équipe derrière <span class="text-agency-electric italic">la Magie</span>
                </h2>
                <p class="font-sans text-lg text-agency-cream/90">
                    Une équipe passionnée qui vit pour le digital
                </p>
            </div>

            <!-- Group Photo -->
            <div class="mb-16">
                <div
                    class="overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                >
                    <img
                        src="/images/team-group.jpg"
                        alt="Notre équipe"
                        class="h-auto w-full object-cover"
                        style="max-height: 500px"
                        loading="lazy"
                    />
                </div>
            </div>

            <!-- Individual Portraits -->
            <div
                class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            >
                <div
                    v-for="member in team"
                    :key="member.id"
                    class="group relative"
                >
                    <!-- Card Container -->
                    <div
                        class="overflow-hidden rounded-xl bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <!-- Image Container with Hover Effect -->
                        <div class="relative aspect-[3/4] overflow-hidden">
                            <!-- Default Portrait -->
                            <img
                                :src="member.image"
                                :alt="member.name"
                                class="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out group-hover:opacity-0"
                                loading="lazy"
                            />

                            <!-- Hobby Image (shown on hover) -->
                            <img
                                :src="member.hobbyImage"
                                :alt="`${member.name} - ${member.hobby}`"
                                class="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 ease-out group-hover:opacity-100"
                                loading="lazy"
                            />

                            <!-- Hobby Badge (appears on hover) -->
                            <div
                                class="absolute right-3 top-3 translate-x-2 -translate-y-2 scale-90 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                            >
                                <div
                                    class="rounded-full border-2 border-agency-cream bg-agency-navy px-4 py-2 shadow-xl"
                                >
                                    <span
                                        class="font-sans text-xs font-bold uppercase tracking-wider text-agency-electric"
                                    >
                                        {{ member.hobby }}
                                    </span>
                                </div>
                            </div>

                        </div>

                        <!-- Info Section -->
                        <div class="p-4">
                            <h3
                                class="mb-1 font-serif text-xl font-semibold text-agency-cream"
                            >
                                {{ member.name }}
                            </h3>
                            <p class="font-sans text-xs font-bold uppercase tracking-wider text-agency-electric">
                                {{ member.role }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
