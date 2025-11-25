<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import ExpertiseSection from '@/components/sections/ExpertiseSection.vue';
import FooterSection from '@/components/sections/FooterSection.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import PortfolioStackSection from '@/components/sections/PortfolioStackSection.vue';
import TeamSection from '@/components/sections/TeamSection.vue';
import MethodSection from '@/components/sections/MethodSection.vue';
import { Head } from '@inertiajs/vue3';

withDefaults(
    defineProps<{
        canRegister: boolean;
    }>(),
    {
        canRegister: true,
    },
);
</script>

<template>
    <Head title="Accueil - L'Ingénierie Digitale avec une Âme">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
        />
        <meta
            name="description"
            content="Agence web et pub qui allie l'artisanat digital à l'échelle industrielle. Création de sites vitrines, e-commerce et solutions métiers avec une approche humaine."
        />
    </Head>

    <div class="overflow-visible">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <PortfolioStackSection />
        <TeamSection />
        <MethodSection />
        <ContactSection />
        <FooterSection />
    </div>
</template>
