<template>
  <section class="expertises-section bg-agency-navy" style="background-color: hsl(220, 65%, 15%) !important;">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nos Expertises</h2>
        <p class="section-subtitle">L'excellence digitale à votre service</p>
      </div>

      <div 
        ref="gridContainer"
        class="bento-grid"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <!-- Spotlight Effect -->
        <div 
          class="spotlight"
          :style="spotlightStyle"
        ></div>

        <!-- Carte 1: Solutions Métiers (2 colonnes) -->
        <div class="expertise-card card-large" data-card="1">
          <div class="card-content">
            <div class="icon-wrapper">
              <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 class="card-title">Solutions Métiers</h3>
            <p class="card-description">L'automatisation au service de votre croissance.</p>
          </div>
        </div>

        <!-- Carte 2: E-Commerce (1 colonne, 2 rangées) -->
        <div class="expertise-card card-tall" data-card="2">
          <div class="card-content">
            <div class="icon-wrapper">
              <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h3 class="card-title">E-Commerce</h3>
            <p class="card-description">Des boutiques conçues pour convertir.</p>
          </div>
        </div>

        <!-- Carte 3: Sites Vitrines -->
        <div class="expertise-card card-medium" data-card="3">
          <div class="card-content">
            <div class="icon-wrapper">
              <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 class="card-title">Sites Vitrines</h3>
            <p class="card-description">Votre identité, sublimée.</p>
          </div>
        </div>

        <!-- Carte 4: Google Ads & SEO -->
        <div class="expertise-card card-medium" data-card="4">
          <div class="card-content">
            <div class="icon-wrapper">
              <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 class="card-title">Google Ads & SEO</h3>
            <p class="card-description">Acquisition & ROI.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const gridContainer = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const isHovering = ref(false);

const spotlightStyle = computed(() => {
  if (!isHovering.value) {
    return {
      opacity: 0
    };
  }

  return {
    left: `${mouseX.value}px`,
    top: `${mouseY.value}px`,
    opacity: 1
  };
});

const handleMouseMove = (event) => {
  if (!gridContainer.value) return;

  const rect = gridContainer.value.getBoundingClientRect();
  mouseX.value = event.clientX - rect.left;
  mouseY.value = event.clientY - rect.top;
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

.expertises-section {
  min-height: 100vh;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

/* Subtle grain texture */
.expertises-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 600;
  color: hsl(36, 40%, 96%);
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: hsla(36, 40%, 96%, 0.7);
  margin: 0;
  font-weight: 400;
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 24px;
  position: relative;
  isolation: isolate;
}

.spotlight {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(0, 206, 255, 0.12) 0%,
    rgba(0, 206, 255, 0.04) 30%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
  will-change: transform;
}

/* Expertise Cards */
.expertise-card {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

/* Card Layouts */
.card-large {
  grid-column: span 2;
  grid-row: span 1;
}

.card-tall {
  grid-column: span 1;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-medium {
  grid-column: span 1;
  grid-row: span 1;
}

/* Hover Effects */
.expertise-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(0, 206, 255, 0.08) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.expertise-card:hover {
  background: rgba(20, 20, 40, 0.6);
  border-color: rgba(0, 206, 255, 0.3);
  transform: translateY(-8px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(0, 206, 255, 0.1);
}

.expertise-card:hover::before {
  opacity: 1;
}

/* Card Content */
.card-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 206, 255, 0.1);
  border-radius: 20px;
  margin-bottom: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-icon {
  width: 40px;
  height: 40px;
  color: hsl(195, 100%, 50%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.expertise-card:hover .icon-wrapper {
  background: rgba(0, 206, 255, 0.15);
  transform: scale(1.1);
}

.expertise-card:hover .card-icon {
  transform: scale(1.15);
  color: hsl(195, 100%, 60%);
  filter: drop-shadow(0 0 8px rgba(0, 206, 255, 0.5));
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  color: hsl(36, 40%, 96%);
  margin: 0 0 16px 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: hsla(36, 40%, 96%, 0.8);
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 300px);
  }

  .card-large {
    grid-column: span 2;
  }

  .card-tall {
    grid-column: span 1;
    grid-row: span 1;
  }

  .card-medium {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .expertises-section {
    padding: 80px 0;
  }

  .container {
    padding: 0 24px;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .bento-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 16px;
  }

  .card-large,
  .card-tall,
  .card-medium {
    grid-column: span 1;
    grid-row: span 1;
  }

  .expertise-card {
    padding: 32px;
    min-height: 280px;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-description {
    font-size: 1rem;
  }

  .icon-wrapper {
    width: 64px;
    height: 64px;
  }

  .card-icon {
    width: 32px;
    height: 32px;
  }

  .spotlight {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .expertise-card {
    padding: 24px;
    min-height: 240px;
  }
}
</style>
