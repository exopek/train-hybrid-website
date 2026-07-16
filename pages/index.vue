<template>
  <div class="home-page">
    <!-- HERO -->
    <HeroSplitSection />

    <!-- ERFOLGSGESCHICHTEN -->
    <SuccessStoriesSection />

    <!-- PROGRAMM-INHALTE 2×2 GRID -->
    <FeatureGrid />

    <!-- FAQ -->
    <HomeFAQSection />
  </div>
</template>

<script setup lang="ts">
import HeroSplitSection from '~/components/HeroSplitSection.vue'
import FeatureGrid from '~/components/FeatureGrid.vue'
import HomeFAQSection from '~/components/HomeFAQSection.vue'
import SuccessStoriesSection from '~/components/SuccessStoriesSection.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

/* ── Shared layout ── */
.section-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-4xl) var(--container-padding);
}

.section-container--narrow {
  max-width: 52rem;
}

.section-eyebrow {
  margin: 0 0 var(--spacing-xl);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-brand-accent);
}

</style>
