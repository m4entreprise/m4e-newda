<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useIntersectionObserver();

const currentYear = new Date().getFullYear();

onMounted(() => {
    if (sectionRef.value) {
        observe(sectionRef.value);
    }
});
</script>

<template>
    <footer
        ref="sectionRef"
        id="contact"
        class="will-fade-in bg-agency-cream py-20 md:py-32"
    >
        <div class="mx-auto max-w-7xl px-6">
            <!-- Manifesto -->
            <div class="mb-16 text-center">
                <blockquote
                    class="font-serif text-3xl font-medium leading-relaxed text-agency-navy md:text-4xl lg:text-5xl"
                >
                    "Le digital n'est pas qu'une question de code.<br />
                    C'est une question <span class="text-agency-electric">d'âme</span>."
                </blockquote>
            </div>

            <!-- Contact Information -->
            <div
                class="mb-12 grid grid-cols-1 gap-8 border-t border-agency-navy/10 pt-12 md:grid-cols-3"
            >
                <!-- Address -->
                <div class="text-center md:text-left">
                    <h3 class="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-agency-navy/70">
                        Adresse
                    </h3>
                    <p class="font-sans text-lg text-agency-navy">
                        Rue de la Digue 92<br />
                        4683 Oupeye, Belgique
                    </p>
                </div>

                <!-- Contact -->
                <div class="text-center">
                    <h3 class="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-agency-navy/70">
                        Contact
                    </h3>
                    <p class="font-sans text-lg text-agency-navy">
                        <a
                            href="mailto:contact@m4entreprise.be"
                            class="transition-colors hover:text-agency-electric"
                        >
                            contact@m4entreprise.be
                        </a>
                        <br />
                        <a
                            href="tel:+3243785206"
                            class="transition-colors hover:text-agency-electric"
                        >
                            +32 4 37 85 20 6
                        </a>
                    </p>
                </div>

                <!-- Social -->
                <div class="text-center md:text-right">
                    <h3 class="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-agency-navy/70">
                        Suivez-nous
                    </h3>
                    <div class="flex justify-center gap-4 md:justify-end">
                        <a
                            href="https://www.linkedin.com/company/m4-entreprise"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-10 w-10 items-center justify-center rounded-full border border-agency-navy/20 text-agency-navy transition-all hover:border-agency-electric hover:bg-agency-electric hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <span class="font-sans text-sm font-bold">in</span>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61555838617465"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-10 w-10 items-center justify-center rounded-full border border-agency-navy/20 text-agency-navy transition-all hover:border-agency-electric hover:bg-agency-electric hover:text-white"
                            aria-label="Facebook"
                        >
                            <span class="font-sans text-sm font-bold">fb</span>
                        </a>
                        <a
                            href="https://www.instagram.com/m4entreprise.be/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-10 w-10 items-center justify-center rounded-full border border-agency-navy/20 text-agency-navy transition-all hover:border-agency-electric hover:bg-agency-electric hover:text-white"
                            aria-label="Instagram"
                        >
                            <span class="font-sans text-sm font-bold">IG</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-agency-navy/10 pt-8 text-center">
                <p class="font-sans text-sm text-agency-navy">
                    © {{ currentYear }} M4 Entreprise. Tous droits réservés. Fait avec
                    <span class="text-red-500">♥</span> à Liège.
                </p>
            </div>
        </div>
    </footer>
</template>
