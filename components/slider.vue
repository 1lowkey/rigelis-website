<template>
  <div class="slider-viewport" @keydown.left.prevent="prev" @keydown.right.prevent="next" tabindex="0" ref="viewport">
    <div
      v-for="(s, i) in slides"
      :key="i"
      :class="['slide', { active: i === current }]"
      :aria-hidden="i === current ? 'false' : 'true'"
    >
      <!-- Background image if provided -->
      <template v-if="s.type === 'intro'">
        <img v-if="s.image" :src="s.image" :alt="s.title" style="width:100%;height:100%;object-fit:cover" />
        <div class="overlay">
          <div class="content">
            <h2>{{ s.title }}</h2>
            <p>{{ s.text }}</p>
          </div>
        </div>
      </template>

      <template v-else-if="s.type === 'team'">
        <img v-if="s.image" :src="s.image" :alt="s.title" style="width:100%;height:100%;object-fit:cover;filter:brightness(.35)" />
        <div class="overlay" style="padding:2rem;">
          <div class="content">
            <h2>{{ s.title }}</h2>
            <div class="team-grid" style="margin-top:1.25rem">
              <div v-for="(m, idx) in s.members" :key="idx" class="team-card">
                <h3>{{ m.name }}</h3>
                <p class="role">{{ m.role }}</p>
                <p class="desc">{{ m.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>

   <template v-else-if="s.type === 'partners'">
  <!-- background image -->
  <img v-if="s.image" :src="s.image" :alt="s.title"
       style="width:100%; height:100%; object-fit:cover; position:absolute; inset:0; z-index:1;" />

  <!-- overlay content -->
  <div class="overlay" style="position:relative; z-index:2; text-align:center; padding:2rem;">
    <h2>{{ s.title }}</h2>
    <div class="partners-grid">
      <div v-for="(p, idx) in s.partners" :key="idx" class="partner">
        <img v-if="p.logo" :src="p.logo" :alt="p.name" />
      </div>
    </div>
  </div>
</template>
    </div>        

    <!-- controls -->
    <div class="slider-controls">
      <button class="btn" @click="prev" aria-label="Previous slide">‹</button>
      <button class="btn" @click="next" aria-label="Next slide">›</button>
    </div>

    <div class="indicators" role="tablist">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :class="{ active: i === current }"
        @click="go(i)"
        :aria-label="`Go to slide ${i+1}`"
        :aria-selected="i === current"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
const props = defineProps({
  slides: { type: Array, required: true },
  interval: { type: Number, default: 5000 }
})


const current = ref(0)
let timer = null
const viewport = ref(null)

function next(){
  current.value = (current.value + 1) % props.slides.length
}
function prev(){                
  current.value = (current.value - 1 + props.slides.length) % props.slides.length
}
function go(i){ current.value = i }

onMounted(()=>{
  timer = setInterval(next, props.interval)
  // keyboard focus
  if(viewport.value) viewport.value.focus()
})
onUnmounted(()=> clearInterval(timer))

watch(current, ()=> {
  // reset timer on manual change
  clearInterval(timer)
  timer = setInterval(next, props.interval)
})
</script>

<style scoped>
/* small local adjustments inside component are handled by global CSS */
</style>