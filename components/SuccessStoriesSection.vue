<script setup lang="ts">
import { ref } from "vue"

const videoRef = ref<HTMLVideoElement | null>(null)
const videoRef2 = ref<HTMLVideoElement | null>(null)

const playVideo = () => {
  if (!videoRef.value) return
  videoRef.value.muted = true
  videoRef.value.play().catch(() => {})
}

const pauseVideo = () => {
  if (!videoRef.value) return
  videoRef.value.pause()
  videoRef.value.currentTime = 0
}

const playVideo2 = () => {
  if (!videoRef2.value) return
  videoRef2.value.muted = true
  videoRef2.value.play().catch(() => {})
}

const pauseVideo2 = () => {
  if (!videoRef2.value) return
  videoRef2.value.pause()
  videoRef2.value.currentTime = 0
}
</script>

<template>
  <section class="stories">
    <div class="stories__header">
      <h2 class="stories__headline">So habe ich <span class="headline-gradient">Krafttraining</span> in bestehende Routinen <span class="headline-gradient">integriert</span>.</h2>
      <p class="stories__subline">Deine Routine ist die nächste. Wann starten wir?</p>
    </div>
    <div class="stories__inner">

      <article class="story-card" @mouseenter="playVideo" @mouseleave="pauseVideo">
        <img src="/krafttraining-rennradfahrer-thumbnail.jpg" alt="" class="story-card__img" loading="lazy" />
        <video
          ref="videoRef"
          class="story-card__video"
          src="/rennradfahrer-krafttraining.mp4"
          :muted="true"
          loop
          playsinline
          preload="metadata"
        />
        <div class="story-card__overlay" />
        <div class="story-card__text">
          <p class="story-card__quote">„Platzhalter Erfolgsgeschichte 1"</p>
          <span class="story-card__name">Sascha V. aus Burgdorf · Rennradfahrer</span>
        </div>
      </article>

      <article class="story-card" @mouseenter="playVideo2" @mouseleave="pauseVideo2">
        <img src="/krafttraining-outdoor-laufen-gehen-gravel.jpg" alt="" class="story-card__img" loading="lazy" />
        <video
          ref="videoRef2"
          class="story-card__video"
          src="/laufen-krafttraining-ausdauertraining.mp4"
          :muted="true"
          loop
          playsinline
          preload="metadata"
        />
        <div class="story-card__overlay" />
        <div class="story-card__text">
          <p class="story-card__quote">„Platzhalter Erfolgsgeschichte 2"</p>
          <span class="story-card__name">Das bin ich. · Hier beim Laufen.</span>
        </div>
      </article>

      <article class="story-card">
        <img src="/krafttraining-outdoorsport-joggen-laufen-gravelbike.jpg" alt="" class="story-card__img" loading="lazy" />
        <div class="story-card__overlay" />
        <div class="story-card__text">
          <p class="story-card__quote">„Platzhalter Erfolgsgeschichte 3"</p>
          <span class="story-card__name">Name · Sportart</span>
        </div>
      </article>

    </div>
  </section>
</template>

<style scoped>
.stories {
  background: #f5f5f0;
  padding: 2rem var(--container-padding);
  padding-top: 5rem;
}

.stories__header {
  max-width: var(--container-max-width);
  margin: 0 auto 2rem;
  text-align: center;
}

.stories__headline {
  margin: 0 0 0.5rem;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
}


.stories__subline {
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
  color: #555;
}

.stories__inner {
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.story-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 9 / 16;
  cursor: pointer;
}

.story-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.55s ease, opacity 0.4s ease;
}

.story-card:hover .story-card__img {
  transform: scale(1.04);
}

.story-card:has(.story-card__video):hover .story-card__img {
  opacity: 0;
}

.story-card__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.story-card:hover .story-card__video {
  opacity: 1;
}

.story-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.4) 48%,
    rgba(0, 0, 0, 0.08) 100%
  );
  pointer-events: none;
}

.story-card__text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: clamp(1rem, 2.2vw, 1.6rem);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.story-card__quote {
  margin: 0;
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  font-weight: 500;
  line-height: 1.5;
  color: #ffffff;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
}

.story-card__name {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 640px) {
  .stories__inner {
    grid-template-columns: repeat(3, 80vw);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .stories__inner::-webkit-scrollbar {
    display: none;
  }

  .story-card {
    scroll-snap-align: center;
  }
}
</style>
