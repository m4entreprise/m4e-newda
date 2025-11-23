<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

const sectionRef = ref<HTMLElement | null>(null);
const { observe } = useIntersectionObserver();

const form = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
});

const isSubmitting = ref(false);

const submitForm = async () => {
    isSubmitting.value = true;
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    isSubmitting.value = false;
    // Reset form
    form.value = { name: '', email: '', phone: '', message: '' };
    alert('Message envoyé avec succès !');
};

onMounted(() => {
    if (sectionRef.value) {
        observe(sectionRef.value);
    }
});
</script>

<template>
    <section id="contact" ref="sectionRef" class="will-fade-in relative overflow-hidden bg-agency-navy py-20 md:py-32">
        <!-- Background Elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-agency-electric/10 blur-3xl"></div>
            <div class="absolute -left-1/4 bottom-1/4 h-96 w-96 rounded-full bg-agency-neon/5 blur-3xl"></div>
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-6">
            <div class="grid gap-12 lg:grid-cols-2 lg:gap-24">
                <!-- Contact Info -->
                <div class="flex flex-col justify-center">
                    <h2 class="mb-6 font-serif text-4xl font-medium text-agency-cream md:text-5xl lg:text-6xl">
                        Parlons de votre <br />
                        <span class="text-agency-electric italic">futur projet</span>
                    </h2>
                    <p class="mb-12 font-sans text-lg text-agency-cream/80">
                        Vous avez une vision ? Nous avons l'expertise pour la concrétiser.
                        Écrivez-nous et commençons à construire quelque chose d'extraordinaire.
                    </p>

                    <div class="space-y-8">
                        <div class="flex items-start gap-4">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-2xl text-agency-electric">
                                📍
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-medium text-agency-cream">Nous trouver</h3>
                                <p class="font-sans text-agency-cream/60">
                                    Rue de la Digue 92<br />
                                    4683 Oupeye, Belgique
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-2xl text-agency-electric">
                                📧
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-medium text-agency-cream">Nous écrire</h3>
                                <p class="font-sans text-agency-cream/60">
                                    <a
                                        href="mailto:contact@m4entreprise.be"
                                        class="transition-colors hover:text-agency-electric"
                                    >
                                        contact@m4entreprise.be
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-2xl text-agency-electric">
                                📱
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-medium text-agency-cream">Nous appeler</h3>
                                <p class="font-sans text-agency-cream/60">
                                    <a
                                        href="tel:+3243785206"
                                        class="transition-colors hover:text-agency-electric"
                                    >
                                        +32 4 37 85 20 6
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div>
                            <label for="name" class="mb-2 block font-sans text-sm font-medium text-agency-cream/80">Nom complet</label>
                            <input
                                type="text"
                                id="name"
                                v-model="form.name"
                                required
                                class="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-agency-cream placeholder-white/20 focus:border-agency-electric focus:outline-none focus:ring-1 focus:ring-agency-electric"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label for="email" class="mb-2 block font-sans text-sm font-medium text-agency-cream/80">Email professionnel</label>
                            <input
                                type="email"
                                id="email"
                                v-model="form.email"
                                required
                                class="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-agency-cream placeholder-white/20 focus:border-agency-electric focus:outline-none focus:ring-1 focus:ring-agency-electric"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div>
                            <label for="phone" class="mb-2 block font-sans text-sm font-medium text-agency-cream/80">Numéro de téléphone</label>
                            <input
                                type="tel"
                                id="phone"
                                v-model="form.phone"
                                required
                                class="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-agency-cream placeholder-white/20 focus:border-agency-electric focus:outline-none focus:ring-1 focus:ring-agency-electric"
                                placeholder="+32 4 12 34 56 78"
                            />
                        </div>

                        <div>
                            <label for="message" class="mb-2 block font-sans text-sm font-medium text-agency-cream/80">Votre message</label>
                            <textarea
                                id="message"
                                v-model="form.message"
                                required
                                rows="4"
                                class="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-agency-cream placeholder-white/20 focus:border-agency-electric focus:outline-none focus:ring-1 focus:ring-agency-electric"
                                placeholder="Parlez-nous de votre projet..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            :disabled="isSubmitting"
                            class="group relative w-full overflow-hidden rounded-lg bg-agency-electric px-6 py-4 font-sans font-bold text-agency-navy transition-all hover:bg-agency-electric/90 disabled:opacity-70"
                        >
                            <span class="relative z-10 flex items-center justify-center gap-2">
                                <span v-if="isSubmitting">Envoi en cours...</span>
                                <span v-else>Envoyer le message</span>
                                <svg
                                    v-if="!isSubmitting"
                                    class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
