<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AnalysisCtaButton from '~/components/design-system-ui-components/AnalysisCtaButton.vue'

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    headline?: string
    subhead?: string
    ctaLabel?: string
  }>(),
  {
    eyebrow: 'Krafttraining für Ausdauersportler',
    headline: 'Krafttraining in deiner Ausdauerroutine.',
    subhead: 'Finde in 2 Minuten heraus, wie dein persönlicher Hybrid-Plan aussehen kann – ohne zusätzliche Trainingstage und inklusive 150€ Integrationsbonus.',
    ctaLabel: 'Jetzt Test starten →',
  },
)

const sectionRef = ref<HTMLElement | null>(null)

const testimonials = [
  { name: 'Mara', sport: 'Marathon', quote: 'Beine stabiler, Läufe fühlen sich leichter an.' },
  { name: 'Jonas', sport: 'Radsport', quote: 'Mehr Druck am Berg, weniger Ermüdung.' },
  { name: 'Lea', sport: 'Triathlon', quote: 'Schulter stabil, Schwimmen bleibt sauber.' },
  { name: 'Tim', sport: 'Trailrunning', quote: 'Weniger Kniezwicken, mehr Kontrolle bergab.' },
  { name: 'Alina', sport: 'Ultra', quote: 'Mehr Stabilität in langen Belastungen.' },
  { name: 'Ben', sport: 'Gravel', quote: 'Körper bleibt ruhig, Output steigt.' },
]
const rowA = [...testimonials, ...testimonials]
const rowB = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]

onMounted(async () => {
  if (!process.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const gsapModule = await import('gsap')
  const gsap = gsapModule.gsap || gsapModule.default || gsapModule

  if (!sectionRef.value) return

  gsap.from(sectionRef.value.querySelector('.intro-hero__text'), {
    opacity: 0,
    y: 24,
    duration: 0.9,
    ease: 'power3.out',
    delay: 0.15,
  })
})
</script>

<template>
  <section ref="sectionRef" class="intro-hero">
    <div class="intro-hero__marquee intro-hero__marquee--top" aria-hidden="true">
      <div class="intro-hero__marquee-track intro-hero__marquee-track--left">
        <article v-for="(item, i) in rowA" :key="`top-${i}`" class="intro-hero__testimonial">
          <p class="intro-hero__testimonial-quote">"{{ item.quote }}"</p>
          <span class="intro-hero__testimonial-meta">{{ item.name }} · {{ item.sport }}</span>
        </article>
      </div>
    </div>

    <div class="intro-hero__backdrop" aria-hidden="true">
      <div class="intro-hero__halo intro-hero__halo--left" />
      <div class="intro-hero__halo intro-hero__halo--right" />
      <div class="intro-hero__heatmap" />
    </div>

    <div class="intro-hero__content">
      <div class="intro-hero__text">
        <p class="intro-hero__eyebrow">{{ props.eyebrow }}</p>
        <h1 class="intro-hero__headline">{{ props.headline }}</h1>
        <p class="intro-hero__subhead">{{ props.subhead }}</p>
        <AnalysisCtaButton :label="props.ctaLabel" variant="hero" />
      </div>
    </div>

    <div class="intro-hero__marquee intro-hero__marquee--bottom" aria-hidden="true">
      <div class="intro-hero__marquee-track intro-hero__marquee-track--right">
        <article v-for="(item, i) in rowB" :key="`bot-${i}`" class="intro-hero__testimonial">
          <p class="intro-hero__testimonial-quote">"{{ item.quote }}"</p>
          <span class="intro-hero__testimonial-meta">{{ item.name }} · {{ item.sport }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-hero {
  position: relative;
  display: flex;
  height: 100svh;
  background: var(--color-background);
  color: var(--color-text-primary);
}

.intro-hero__backdrop {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.intro-hero__halo {
  position: absolute;
  border-radius: 50%;
  filter: blur(64px);
  opacity: 0.55;
}

.intro-hero__halo--left {
  top: -18%;
  left: -12%;
  width: min(56rem, 70vw);
  height: min(56rem, 70vw);
  background:
    radial-gradient(
      circle,
      color-mix(in srgb, var(--color-brand-secondary) 12%, transparent) 0%,
      transparent 68%
    );
}

.intro-hero__halo--right {
  right: -16%;
  bottom: -24%;
  width: min(52rem, 66vw);
  height: min(52rem, 66vw);
  background:
    radial-gradient(
      circle,
      color-mix(in srgb, var(--color-brand-accent) 10%, transparent) 0%,
      transparent 70%
    );
}

.intro-hero__heatmap {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(
      circle at 18% 16%,
      color-mix(in srgb, var(--color-brand-secondary) 8%, transparent) 0,
      transparent 22%
    ),
    radial-gradient(
      circle at 84% 24%,
      color-mix(in srgb, var(--color-brand-accent) 7%, transparent) 0,
      transparent 18%
    ),
    repeating-radial-gradient(
      circle at 14% 12%,
      color-mix(in srgb, var(--color-brand-secondary) 7%, transparent) 0 1px,
      transparent 1px 10px
    ),
    repeating-radial-gradient(
      circle at 88% 76%,
      color-mix(in srgb, var(--color-brand-accent) 5%, transparent) 0 1px,
      transparent 1px 12px
    );
  opacity: 0.9;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.45));
}

.intro-hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(100%, var(--container-max-width));
  margin: 0 auto;
  padding:
    calc(var(--spacing-4xl) + var(--spacing-lg))
    var(--container-padding)
    var(--spacing-4xl);
  text-align: center;
}

.intro-hero__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  max-width: 58rem;
}

.intro-hero__eyebrow {
  margin: 0;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-text-secondary) 80%, transparent);
}

.intro-hero__headline {
  margin: 0;
  font-family: var(--font-family-heading);
  font-size: clamp(2.75rem, 7vw, 6rem);
  font-weight: var(--font-weight-bold);
  line-height: 0.98;
  letter-spacing: -0.05em;
  text-wrap: balance;
}

.intro-hero__subhead {
  margin: 0;
  max-width: 42rem;
  font-size: clamp(1rem, 1.6vw, 1.35rem);
  line-height: 1.5;
  color: var(--color-text-secondary);
  text-wrap: balance;
}

/* ── Testimonial marquees ── */
.intro-hero__marquee {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
}

.intro-hero__marquee--top {
  top: 0;
  padding-top: calc(var(--header-height) + 3rem);
  padding-bottom: 3rem;
  background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--color-background) 80%, transparent),
    transparent
  );
}

.intro-hero__marquee--bottom {
  bottom: 0;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: linear-gradient(
    to top,
    color-mix(in srgb, var(--color-background) 80%, transparent),
    transparent
  );
}

.intro-hero__marquee-track {
  display: flex;
  gap: var(--spacing-md);
  width: max-content;
  animation: marquee-left 32s linear infinite;
}

.intro-hero__marquee-track--right {
  animation-name: marquee-right;
}

.intro-hero__testimonial {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  min-width: 260px;
  max-width: 300px;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent);
  background: color-mix(in srgb, var(--color-background-secondary) 55%, transparent);
  backdrop-filter: blur(10px);
}

.intro-hero__testimonial-quote {
  margin: 0;
  font-size: var(--font-size-sm);
  line-height: 1.45;
  color: color-mix(in srgb, var(--color-text-primary) 80%, transparent);
}

.intro-hero__testimonial-meta {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: color-mix(in srgb, var(--color-text-secondary) 70%, transparent);
  letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .intro-hero__text {
    gap: var(--spacing-md);
    max-width: 24rem;
  }

  .intro-hero__headline {
    font-size: clamp(2.3rem, 12vw, 3.75rem);
  }
}

@keyframes marquee-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes marquee-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
</style>
