<template>
  <section class="portfolio-stack-section bg-agency-cream">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title text-agency-navy font-serif">
        Nos <span class="text-agency-electric italic">Réalisations</span>
      </h2>
      <p class="section-subtitle font-sans" style="color: rgba(13, 30, 63, 0.7);">
        Découvrez comment nous transformons les défis en succès mesurables
      </p>
    </div>

    <!-- Sticky Cards Container -->
    <div class="sticky-scroll-container">
      <div 
        v-for="(project, index) in projects" 
        :key="project.id"
        class="card-sticky-wrapper"
        :style="getStickyWrapperStyle(index)"
      >
        <div 
          :ref="el => setCardRef(el, index)"
          class="project-card"
          :style="getCardStyle(index)"
        >
          <!-- Card Content -->
          <div class="card-grid">
            
            <!-- Left: Project Image -->
            <div class="card-image-container">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="card-image"
                @error="handleImageError"
              />
              <div class="image-gradient"></div>
            </div>

            <!-- Right: Project Info -->
            <div class="card-info">
              
              <!-- Top Content -->
              <div class="card-info-top">
                <h3 class="card-title">
                  {{ project.title }}
                </h3>
                
                <p class="card-description">
                  {{ project.description }}
                </p>

                <!-- Tech Stack Tags -->
                <div class="tech-tags">
                  <span 
                    v-for="tech in project.techStack" 
                    :key="tech"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Bottom Metric -->
              <div class="card-metric">
                <div class="metric-number">
                  {{ project.keyMetric.value }}
                </div>
                <div class="metric-text">
                  {{ project.keyMetric.label }}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <!-- Spacer pour permettre à la dernière carte de monter complètement -->
      <div style="height: 100vh;"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  customProjects: {
    type: Array,
    default: () => null
  }
});

const defaultProjects = [
  {
    id: 1,
    title: 'E-Commerce Revolution',
    description: 'Transformation digitale complète d\'une marketplace B2B avec +50K utilisateurs actifs.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    techStack: ['Vue.js', 'Laravel', 'AWS', 'Redis'],
    keyMetric: {
      value: '+380%',
      label: 'ROI sur 12 mois'
    }
  },
  {
    id: 2,
    title: 'FinTech Platform',
    description: 'Application de gestion financière temps réel pour PMEs avec intégration bancaire.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    keyMetric: {
      value: '2.3M€',
      label: 'Transactions traitées/mois'
    }
  },
  {
    id: 3,
    title: 'Health Tech Dashboard',
    description: 'Plateforme de suivi médical connectée pour 200+ établissements de santé.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    techStack: ['Next.js', 'Python', 'MongoDB', 'Kubernetes'],
    keyMetric: {
      value: '99.9%',
      label: 'Uptime garanti'
    }
  },
  {
    id: 4,
    title: 'SaaS Analytics',
    description: 'Solution d\'analytics avancée avec IA pour prédire les tendances business.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    techStack: ['Vue 3', 'FastAPI', 'TensorFlow', 'GCP'],
    keyMetric: {
      value: '45%',
      label: 'Réduction des coûts'
    }
  }
];

const projects = props.customProjects || defaultProjects;
const cardRefs = ref([]);
const cardStyles = reactive({});
const windowHeight = ref(0);

// Initialiser les styles
for (let i = 0; i < projects.length; i++) {
  cardStyles[i] = {
    transform: 'scale(1)',
    opacity: '1'
  };
}

const getStickyWrapperStyle = (index) => {
  return {
    position: 'sticky',
    top: '40px',
    zIndex: index + 1,
    '--card-index': index,
    '--sticky-top': '40px',
    paddingBottom: '10vh'
  };
};

const getCardStyle = (index) => {
  return cardStyles[index] || {};
};

const setCardRef = (el, index) => {
  if (el) {
    cardRefs.value[index] = el;
  }
};

const updateTransforms = () => {
  if (!windowHeight.value) return;
  
  cardRefs.value.forEach((card, index) => {
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const stickyTop = 40;
    
    // Calculer la distance par rapport au point sticky
    const distanceFromSticky = rect.top - stickyTop;
    
    // Progression basée sur le scroll (0 = au point sticky, 1 = complètement recouverte)
    const scrollRange = windowHeight.value * 0.5;
    const progress = Math.max(0, Math.min(1, -distanceFromSticky / scrollRange));
    
    // Calculer les valeurs de transform - la carte devient complètement invisible
    const scale = 1 - (progress * 0.15); // 1.0 -> 0.85
    const opacity = 1 - progress; // 1.0 -> 0.0 (complètement invisible)
    
    cardStyles[index] = {
      transform: `scale(${scale})`,
      opacity: String(opacity),
      transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
    };
  });
};

let rafId = null;
const handleScroll = () => {
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
  rafId = requestAnimationFrame(updateTransforms);
};

const handleResize = () => {
  windowHeight.value = window.innerHeight;
  updateTransforms();
};

const handleImageError = (e) => {
  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%231e1e2f" width="800" height="600"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage%3C/text%3E%3C/svg%3E';
};

onMounted(() => {
  windowHeight.value = window.innerHeight;
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
  
  nextTick(() => {
    setTimeout(updateTransforms, 300);
  });
});

onUnmounted(() => {
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.portfolio-stack-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;
}

/* Subtle grain texture */
.portfolio-stack-section::before {
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

.section-header {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
  text-align: center;
}

.section-title {
  font-size: 3.75rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.25rem;
  max-width: 42rem;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
}

.sticky-scroll-container {
  position: relative;
  width: 100%;
}

.card-sticky-wrapper {
  position: sticky;
  top: var(--sticky-top);
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  z-index: calc(100 - var(--card-index));
}

.project-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  height: 85vh;
  min-height: 600px;
  max-height: 800px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.1) inset;
  will-change: transform, opacity;
  transform-origin: center top;
}

.project-card:hover {
  border-color: color-mix(in srgb, var(--agency-electric-blue), transparent 70%);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.2),
    0 0 40px color-mix(in srgb, var(--agency-electric-blue), transparent 85%);
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 100%;
}

.card-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  min-height: 400px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .card-image {
  transform: scale(1.05);
}

.image-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  pointer-events: none;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 3rem;
  font-weight: 600;
  color: var(--agency-navy);
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.card-description {
  font-family: var(--font-sans);
  color: color-mix(in srgb, var(--agency-navy), transparent 25%);
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-weight: 400;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-tag {
  font-family: var(--font-sans);
  padding: 0.5rem 1rem;
  background-color: color-mix(in srgb, var(--agency-electric-blue), transparent 85%);
  border: 1px solid color-mix(in srgb, var(--agency-electric-blue), transparent 70%);
  border-radius: 2rem;
  color: var(--agency-electric-blue);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background-color: color-mix(in srgb, var(--agency-electric-blue), transparent 75%);
  border-color: color-mix(in srgb, var(--agency-electric-blue), transparent 50%);
  transform: translateY(-2px);
}

.card-metric {
  padding: 2rem;
  background: linear-gradient(135deg, color-mix(in srgb, var(--agency-electric-blue), transparent 85%), color-mix(in srgb, var(--agency-neon-green), transparent 85%));
  border: 1px solid color-mix(in srgb, var(--agency-electric-blue), transparent 75%);
  border-radius: 1rem;
  text-align: center;
}

.metric-number {
  font-family: var(--font-serif);
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--agency-electric-blue), var(--agency-neon-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.metric-text {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  color: color-mix(in srgb, var(--agency-navy), transparent 30%);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .card-sticky-wrapper {
    position: relative !important;
    top: auto !important;
    padding-bottom: 3rem !important;
  }
  
  .project-card {
    height: auto;
    min-height: auto;
    max-height: none;
    padding: 1.5rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .card-image-container {
    min-height: 300px;
  }

  .card-info {
    padding: 0;
  }

  .card-title {
    font-size: 2rem;
  }

  .card-description {
    font-size: 1rem;
  }

  .metric-number {
    font-size: 3rem;
  }

  .metric-text {
    font-size: 1rem;
  }
}
</style>
