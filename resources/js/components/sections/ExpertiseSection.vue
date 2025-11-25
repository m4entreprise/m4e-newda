<template>
  <section class="expertises-section bg-agency-navy">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title font-serif">Nos <span class="text-agency-electric italic">Expertises</span></h2>
        <p class="section-subtitle font-sans">L'excellence digitale à votre service</p>
      </div>

      <div 
        ref="gridContainer"
        class="bento-grid"
        :class="{ 'has-active-card': activeCard !== null }"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <!-- Spotlight Effect -->
        <div 
          class="spotlight"
          :style="spotlightStyle"
        ></div>

        <!-- Carte 1: Solutions Métiers (2 colonnes) -->
        <div 
          class="expertise-card card-large" 
          :class="{ 
            'is-active': activeCard === 1, 
            'is-inactive': activeCard !== null && activeCard !== 1 
          }"
          data-card="1"
          @click="openCard(1)"
        >
          <div class="card-background">
            <img src="/images/expertise-solutions-metiers.png" alt="Solutions Métiers" class="card-image" />
            <div class="card-overlay"></div>
          </div>
          <div class="card-content">
            <!-- Bouton de fermeture -->
            <button v-if="activeCard === 1" @click.stop="closeCard" class="close-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div class="icon-wrapper">
              <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 class="card-title font-serif">Solutions Métiers</h3>
            <p class="card-description font-sans">L'automatisation au service de votre croissance.</p>
            
            <!-- Contenu détaillé (visible uniquement quand la carte est active) -->
            <div v-if="activeCard === 1" class="card-details">
              <div class="details-content">
                <h4 class="details-title font-serif">Transformez votre entreprise</h4>
                <p class="details-text font-sans">
                  Nous concevons des solutions métiers sur mesure qui automatisent vos processus, 
                  optimisent vos workflows et libèrent le potentiel de vos équipes. De la gestion 
                  de projet aux outils de collaboration, en passant par les systèmes CRM et ERP, 
                  nous créons des plateformes qui s'adaptent à vos besoins spécifiques.
                </p>
                <ul class="details-list font-sans">
                  <li>✓ Applications métiers personnalisées</li>
                  <li>✓ Intégration API & systèmes existants</li>
                  <li>✓ Automatisation des processus</li>
                  <li>✓ Tableaux de bord analytiques</li>
                  <li>✓ Formation & accompagnement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte 2: E-Commerce (1 colonne, 2 rangées) -->
        <div 
          class="expertise-card card-tall" 
          :class="{ 
            'is-active': activeCard === 2, 
            'is-inactive': activeCard !== null && activeCard !== 2 
          }"
          data-card="2"
          @click="openCard(2)"
        >
          <div class="card-background">
            <img src="/images/expertise-ecommerce.png" alt="E-Commerce" class="card-image" />
            <div class="card-overlay"></div>
          </div>
          <div class="card-content card-content-compact">
            <!-- Bouton de fermeture -->
            <button v-if="activeCard === 2" @click.stop="closeCard" class="close-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div class="icon-wrapper">
              <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h3 class="card-title font-serif">E-Commerce</h3>
            <p class="card-description font-sans">Des boutiques conçues pour convertir.</p>
            
            <!-- Contenu détaillé -->
            <div v-if="activeCard === 2" class="card-details">
              <div class="details-content">
                <h4 class="details-title font-serif">Vendez plus, vendez mieux</h4>
                <p class="details-text font-sans">
                  Créez une expérience d'achat exceptionnelle avec nos solutions e-commerce 
                  performantes. De la conception UX/UI à l'optimisation du tunnel de conversion, 
                  nous construisons des boutiques en ligne qui transforment vos visiteurs en clients 
                  fidèles. Shopify, WooCommerce, ou solutions sur mesure : nous maîtrisons toutes 
                  les plateformes.
                </p>
                <ul class="details-list font-sans">
                  <li>✓ Boutiques Shopify & WooCommerce</li>
                  <li>✓ Solutions e-commerce sur mesure</li>
                  <li>✓ Optimisation du taux de conversion</li>
                  <li>✓ Intégration paiement & logistique</li>
                  <li>✓ Marketing automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte 3: Sites Vitrines -->
        <div 
          class="expertise-card card-medium" 
          :class="{ 
            'is-active': activeCard === 3, 
            'is-inactive': activeCard !== null && activeCard !== 3 
          }"
          data-card="3"
          @click="openCard(3)"
        >
          <div class="card-background">
            <img src="/images/expertise-sites-vitrines.png" alt="Sites Vitrines" class="card-image" />
            <div class="card-overlay"></div>
          </div>
          <div class="card-content">
            <!-- Bouton de fermeture -->
            <button v-if="activeCard === 3" @click.stop="closeCard" class="close-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div class="icon-wrapper">
              <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 class="card-title font-serif">Sites Vitrines</h3>
            <p class="card-description font-sans">Votre identité, sublimée.</p>
            
            <!-- Contenu détaillé -->
            <div v-if="activeCard === 3" class="card-details">
              <div class="details-content">
                <h4 class="details-title font-serif">Votre vitrine digitale</h4>
                <p class="details-text font-sans">
                  Faites une première impression mémorable avec un site vitrine qui reflète 
                  parfaitement votre identité de marque. Design moderne, animations subtiles, 
                  performance optimale et SEO intégré : nous créons des sites qui captivent 
                  vos visiteurs et renforcent votre crédibilité.
                </p>
                <ul class="details-list font-sans">
                  <li>✓ Design sur mesure & responsive</li>
                  <li>✓ Animations & micro-interactions</li>
                  <li>✓ Performance & SEO optimisés</li>
                  <li>✓ CMS intuitif (WordPress, Strapi...)</li>
                  <li>✓ Maintenance & évolutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte 4: Google Ads & SEO -->
        <div 
          class="expertise-card card-medium" 
          :class="{ 
            'is-active': activeCard === 4, 
            'is-inactive': activeCard !== null && activeCard !== 4 
          }"
          data-card="4"
          @click="openCard(4)"
        >
          <div class="card-background">
            <img src="/images/expertise-google-ads-seo.png" alt="Google Ads & SEO" class="card-image" />
            <div class="card-overlay"></div>
          </div>
          <div class="card-content">
            <!-- Bouton de fermeture -->
            <button v-if="activeCard === 4" @click.stop="closeCard" class="close-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div class="icon-wrapper">
              <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 class="card-title font-serif">Google Ads & SEO</h3>
            <p class="card-description font-sans">Acquisition & ROI.</p>
            
            <!-- Contenu détaillé -->
            <div v-if="activeCard === 4" class="card-details">
              <div class="details-content">
                <h4 class="details-title font-serif">Soyez visible, soyez trouvé</h4>
                <p class="details-text font-sans">
                  Dominez les résultats de recherche et maximisez votre retour sur investissement 
                  avec nos stratégies d'acquisition digitale. SEO technique, campagnes Google Ads 
                  optimisées, et analytics avancés : nous transformons le trafic en opportunités 
                  commerciales concrètes.
                </p>
                <ul class="details-list font-sans">
                  <li>✓ Audit SEO & stratégie de contenu</li>
                  <li>✓ Optimisation technique & on-page</li>
                  <li>✓ Campagnes Google Ads performantes</li>
                  <li>✓ Tracking & analytics avancés</li>
                  <li>✓ Reporting & optimisation continue</li>
                </ul>
              </div>
            </div>
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
const activeCard = ref(null);

const spotlightStyle = computed(() => {
  if (!isHovering.value || activeCard.value !== null) {
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
  if (!gridContainer.value || activeCard.value !== null) return;

  const rect = gridContainer.value.getBoundingClientRect();
  mouseX.value = event.clientX - rect.left;
  mouseY.value = event.clientY - rect.top;
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};

const openCard = (cardId) => {
  if (activeCard.value === null) {
    activeCard.value = cardId;
  }
};

const closeCard = () => {
  activeCard.value = null;
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
  font-size: 4rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
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
    rgba(0, 194, 255, 0.15) 0%,
    rgba(0, 194, 255, 0.05) 30%,
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
  position: absolute;
  background: rgba(13, 18, 30, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 48px;
  overflow: hidden;
  transition: 
    width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    top 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  cursor: pointer;
}

/* État inactif - cartes qui se réduisent */
.expertise-card.is-inactive {
  opacity: 0;
  transform: scale(0.9);
  pointer-events: none;
  z-index: 1;
}

/* État actif - carte qui s'agrandit pour occuper toute la grille */
.expertise-card.is-active {
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 1000;
  cursor: default;
  overflow-y: auto;
  background: rgba(13, 18, 30, 0.95);
  border-color: rgba(0, 194, 255, 0.4);
  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.6),
    0 0 60px rgba(0, 194, 255, 0.15);
  padding: 0 48px 48px 48px;
}

/* Désactiver le hover sur les cartes inactives */
.has-active-card .expertise-card:not(.is-active):hover {
  transform: scale(0.9);
  background: rgba(13, 18, 30, 0.6);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: none;
}

/* Card Background Images */
.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 26, 0.85) 0%,
    rgba(20, 20, 40, 0.75) 100%
  );
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Card Layouts */
.card-large[data-card="1"] {
  top: 0;
  left: 0;
  width: calc(66.666% - 16px);
  height: 300px;
}

.card-tall[data-card="2"] {
  top: 0;
  left: calc(66.666% + 8px);
  width: calc(33.333% - 16px);
  height: 624px;
}

.card-medium[data-card="3"] {
  top: 324px;
  left: 0;
  width: calc(33.333% - 16px);
  height: 300px;
}

.card-medium[data-card="4"] {
  top: 324px;
  left: calc(33.333% + 8px);
  width: calc(33.333% - 16px);
  height: 300px;
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
    rgba(0, 194, 255, 0.08) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.expertise-card:hover {
  background: rgba(13, 18, 30, 0.8);
  border-color: rgba(0, 194, 255, 0.3);
  transform: translateY(-8px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(0, 194, 255, 0.05);
}

.expertise-card:hover .card-image {
  opacity: 0.35;
  transform: scale(1.05);
}

.expertise-card:hover .card-overlay {
  background: linear-gradient(
    135deg,
    rgba(10, 10, 26, 0.7) 0%,
    rgba(20, 20, 40, 0.6) 100%
  );
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

/* Ajuster l'espacement pour les cartes actives */
.expertise-card.is-active .card-content {
  justify-content: flex-start;
  padding-top: 0;
}

.expertise-card.is-active .icon-wrapper {
  margin-top: 0;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 194, 255, 0.1);
  border-radius: 20px;
  margin-bottom: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.card-icon {
  width: 40px;
  height: 40px;
  color: #00c2ff;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.expertise-card:hover .icon-wrapper {
  background: rgba(0, 194, 255, 0.2);
  transform: scale(1.1);
}

.expertise-card:hover .card-icon {
  transform: scale(1.15);
  color: #4dd0e1;
  filter: drop-shadow(0 0 8px rgba(0, 194, 255, 0.5));
}

.card-title {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.card-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
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

/* Compact Card Content (E-Commerce) */
.card-content-compact {
  justify-content: flex-end;
}

.card-content-compact .icon-wrapper {
  margin-bottom: 16px;
}

.card-content-compact .card-title {
  margin-bottom: 8px;
}

/* Contenu détaillé (visible uniquement quand la carte est active) */
.card-details {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.details-content {
  max-width: 800px;
}

.details-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #00c2ff;
  margin: 0 0 20px 0;
  letter-spacing: -0.01em;
}

.details-text {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0 0 24px 0;
}

.details-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.details-list li {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.9);
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.details-list li:last-child {
  border-bottom: none;
}

.details-list li:hover {
  color: #00c2ff;
  padding-left: 8px;
}

/* Bouton de fermeture */
.close-button {
  position: sticky;
  top: 16px;
  float: right;
  margin-left: auto;
  margin-right: -16px;
  margin-top: 16px;
  margin-bottom: 16px;

  /* Dimensions fixes pour un cercle parfait */
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;

  /* Forme circulaire parfaite */
  border-radius: 50%;

  /* Centrage de l'icône */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Style par défaut */
  background: rgba(255, 255, 255, 0.05);
  border: none;

  /* Autres propriétés */
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  /* Empêcher la déformation */
  flex-shrink: 0;
  padding: 0;
}

.close-button svg {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg) scale(1.15);
  box-shadow: 0 6px 20px rgba(0, 194, 255, 0.4);
}

.close-button:hover svg {
  color: #ffffff;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Scrollbar personnalisée pour les cartes actives */
.expertise-card.is-active::-webkit-scrollbar {
  width: 8px;
}

.expertise-card.is-active::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.expertise-card.is-active::-webkit-scrollbar-thumb {
  background: rgba(0, 194, 255, 0.3);
  border-radius: 4px;
}

.expertise-card.is-active::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 194, 255, 0.5);
}
</style>
