<script setup lang="ts">
import { onMounted, ref } from 'vue';

const videoRef = ref<HTMLVideoElement | null>(null);

const clients = [
    { name: 'Biokin', logo: '/images/logos/biokin.webp' },
    { name: 'Conulex', logo: '/images/logos/conulex.png' },
    { name: 'Dusart', logo: '/images/logos/dusart.png' },
    { name: 'Verifresh', logo: '/images/logos/verifresh.png' },
    { name: 'Fitness Education', logo: '/images/logos/fitness-education.png' },
];

onMounted(() => {
    // Set video playback rate
    if (videoRef.value) {
        videoRef.value.playbackRate = 0.2;
    }
});
</script>

<template>
    <section class="relative overflow-hidden bg-agency-navy">
        <!-- Video Background -->
        <div class="absolute inset-0 overflow-hidden">
            <video
                ref="videoRef"
                autoplay
                muted
                loop
                playsinline
                class="absolute inset-0 h-full w-full object-cover"
                style="filter: brightness(0.4) blur(8px); transform: scale(1.1);"
            >
                <source src="/12359943_1920_1080_24fps.mp4" type="video/mp4" />
            </video>

            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-agency-navy/60"></div>
        </div>

        <!-- Hero Content -->
        <div class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
            <!-- Main Title -->
            <h1 class="mb-6 font-serif text-6xl font-medium leading-tight text-agency-cream md:text-7xl lg:text-8xl">
                L'Ingénierie Digitale<br />
                avec une <span class="text-agency-electric italic">Âme</span>
            </h1>

            <!-- Subtitle -->
            <p class="mb-12 max-w-3xl font-sans text-xl leading-relaxed text-agency-cream/90 md:text-2xl">
                Nous créons des solutions web sur mesure qui allient l'excellence technique à une approche profondément humaine
            </p>

            <!-- CTA Buttons -->
            <div class="mb-20 flex flex-wrap items-center justify-center gap-4">
                <a
                    href="#contact"
                    class="group inline-flex items-center gap-2 rounded-full bg-agency-electric px-8 py-4 font-sans font-bold text-agency-navy transition-all hover:bg-agency-electric/90"
                >
                    Démarrer un projet
                    <svg
                        class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>

                <a
                    href="#portfolio"
                    class="inline-flex items-center gap-2 rounded-full border-2 border-agency-cream/30 px-8 py-4 font-sans font-bold text-agency-cream transition-all hover:border-agency-cream hover:bg-white/5"
                >
                    Nos réalisations
                </a>
            </div>

            <!-- Clients Banner -->
            <div class="w-full max-w-6xl">
                <div class="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm">
                    <p class="mb-6 font-sans text-sm font-bold uppercase tracking-wider text-agency-cream/80">
                        Ils nous font confiance
                    </p>
                    <div class="grid grid-cols-2 items-center gap-8 md:grid-cols-5">
                        <div
                            v-for="client in clients"
                            :key="client.name"
                            class="flex items-center justify-center"
                        >
                            <img
                                :src="client.logo"
                                :alt="client.name"
                                class="h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

