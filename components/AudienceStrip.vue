<template>
  <section class="aud-strip">
    <div class="aud-strip__inner">
      <h2 class="aud-strip__heading">Train Hybrid ist für:</h2>

      <div class="aud-strip__grid">

        <!-- Läufer -->
        <div class="aud-card">
          <div class="aud-card__badge aud-card__badge--runner">
            <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="30" cy="9" r="4.5" fill="currentColor" />
              <path
                d="M22 18l-6 10h5l-2 12 10-9-4-3 3-6 4 5h6l-5-9-11 0z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 class="aud-card__title">Läufer</h3>
          <span class="aud-card__tag">Ausdauer</span>
        </div>

        <!-- Radfahrer -->
        <div class="aud-card">
          <div class="aud-card__badge aud-card__badge--cyclist">
            <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="31" cy="8.5" r="4" fill="currentColor" />
              <circle cx="10" cy="34" r="5.5" stroke="currentColor" stroke-width="2.5" />
              <circle cx="38" cy="34" r="5.5" stroke="currentColor" stroke-width="2.5" />
              <path
                d="M10 34l10-14h10l4 8H24l-4-6-4 6"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linejoin="round"
                fill="none"
              />
              <path d="M38 34l-4-8" stroke="currentColor" stroke-width="2.2" />
            </svg>
          </div>
          <h3 class="aud-card__title">Radfahrer</h3>
          <span class="aud-card__tag">Ausdauer</span>
        </div>

        <!-- Vielbeschäftigte -->
        <div class="aud-card">
          <div class="aud-card__badge aud-card__badge--busy">
            <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <!-- adult left -->
              <circle cx="17" cy="10" r="4.5" fill="currentColor" />
              <rect x="11" y="17" width="12" height="16" rx="3" fill="currentColor" />
              <!-- adult right -->
              <circle cx="31" cy="10" r="4.5" fill="currentColor" />
              <rect x="25" y="17" width="12" height="16" rx="3" fill="currentColor" />
              <!-- child -->
              <circle cx="24" cy="30" r="3.5" fill="currentColor" />
              <rect x="19" y="35" width="10" height="10" rx="2.5" fill="currentColor" />
            </svg>
          </div>
          <h3 class="aud-card__title">Vielbeschäftigte</h3>
          <span class="aud-card__tag">Alltag</span>
        </div>

        <!-- Effizienz -->
        <div class="aud-card">
          <div class="aud-card__badge aud-card__badge--efficient">
            <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path
                d="M28 4L12 26h14l-6 18L40 22H26L28 4z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 class="aud-card__title">Alle, die effizient trainieren wollen</h3>
          <span class="aud-card__tag">Effizienz</span>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section shell ────────────────────────────────────────── */
.aud-strip {
  background: #ffffff;
  position: relative;
  z-index: 1;
  padding: clamp(2.5rem, 5vh, 4rem) 1.5rem clamp(3rem, 6vh, 5rem);
}

.aud-strip__inner {
  max-width: var(--container-max-width, 1200px);
  margin: 0 auto;
}

/* ── Section heading ──────────────────────────────────────── */
.aud-strip__heading {
  margin: 0 0 clamp(1.75rem, 4vh, 2.75rem);
  font-family: var(--font-family-heading);
  font-size: clamp(1.1rem, 1.8vw, 1.45rem);
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  text-align: center;
  color: #94a3b8;
}

/* ── Cards grid ───────────────────────────────────────────── */
.aud-strip__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(1rem, 2vw, 2rem);
}

/* ── Single card ──────────────────────────────────────────── */
.aud-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: clamp(1.25rem, 2vw, 1.75rem) 1rem;
  border-radius: 1.25rem;
  background: #f8f9fa;
  text-align: center;
}

/* ── Round badge ──────────────────────────────────────────── */
.aud-card__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(64px, 8vw, 84px);
  height: clamp(64px, 8vw, 84px);
  border-radius: 50%;
  flex-shrink: 0;
}

.aud-card__badge svg {
  width: 52%;
  height: 52%;
}

.aud-card__badge--runner {
  background: #e0f2fe;
  color: #0284c7;
}

.aud-card__badge--cyclist {
  background: #dcfce7;
  color: #16a34a;
}

.aud-card__badge--busy {
  background: #fef3c7;
  color: #d97706;
}

.aud-card__badge--efficient {
  background: #fde8d8;
  color: #f97316;
}

/* ── Card text ────────────────────────────────────────────── */
.aud-card__title {
  margin: 0;
  font-family: var(--font-family-heading);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  font-weight: 700;
  color: #0f172a;
  line-height: 1.25;
}

.aud-card__tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #e2e8f0;
}

/* ── Mobile: 2-col then 1-col ─────────────────────────────── */
@media (max-width: 860px) {
  .aud-strip__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .aud-strip__grid {
    grid-template-columns: 1fr;
  }
}
</style>
