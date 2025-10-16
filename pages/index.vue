<template>
  <div>
    <!-- NAV -->
    <header class="navbar container" role="banner">
      <div class="logo-text" style="display:flex;align-items:center;gap:.75rem">
        <img src="/logo.jpg" alt="Rigelis logo" class="logo" />
        <div>
          <h1>Rigelis Inc</h1>
          <div style="font-size:.8rem;color:var(--muted)">Software for pharmacies</div>
        </div>
      </div>

      <nav>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Slider -->
    <Slider :slides="slides" :interval="5500" />

    <!-- About -->
    <section id="about" class="section">
      <div class="container">
        <h2>About Rigelis Inc</h2>
        <p>
          Rigelis Inc is a pioneering technology company dedicated to transforming the pharmacy and healthcare sector through an all-in-one pharmacy operating system — connecting pharmacies with service providers, streamlining operations, and improving patient service delivery.
        </p>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="section">
      <div class="container">
        <h2>Testimonials</h2>
        <div class="test-grid">
          <div class="test-card">
            <h4>Dr. Ama Mensah</h4>
            <div class="org">HealthPlus Pharmacy, Accra</div>
            <p>Rigelis Inc's platform has completely transformed the way we manage our pharmacy...</p>
          </div>
          <div class="test-card">
            <h4>Kwesi Appiah</h4>
            <div class="org">MedLink Pharmacy Network</div>
            <p>Partnering with Rigelis Inc has been a game-changer for our operations...</p>
          </div>
          <div class="test-card">
            <h4>Dr. Nana Osei</h4>
            <div class="org">CityCare Pharmacy, Kumasi</div>
            <p>Rigelis Inc’s OS gives us insights and tools to enhance patient care...</p>
          </div>
          <div class="test-card">
            <h4>Lydia Boateng</h4>
            <div class="org">PharmaConnect Limited</div>
            <p>The support and expertise from Rigelis Inc are unmatched...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section">
      <div class="container">
        <h2>Contact Us</h2>
        <div class="contact-card">
          <p><strong>📍 Office:</strong>La-Bawaleshi Rd.</p>
          <p><strong>📧 Email:</strong>rigelis@rigelisinc</p>
          <p><strong>📞 Phone:</strong> +233 24 679 0052</p>
        </div>
      </div>
    </section>

    <footer style="padding:2rem 0;text-align:center;background:var(--bg);margin-top:2rem">
      <div class="container">
        <div style="color:var(--muted)">© {{ new Date().getFullYear() }} Rigelis Inc — All rights reserved.</div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import Slider from '/components/slider.vue'
import { ref } from 'vue'

const current = ref(0)
const isPaused = ref(false)    // ✅ add this
let timer = null
const viewport = ref(null)


function startTimer() {
  timer = setInterval(() => {
    if (!isPaused.value) next()  // only advance if not paused
  }, props.interval)
}


// 1️⃣ List all image files (only image formats, ignore PDFs)
const partnerFilenames = [
  'Aide-Life.jpeg',
  'Arzthena Logo.jpg',
  'Beked Pharmacy.jpeg',
  'Big Maron Logo.jpeg',
  'Big Maron Pharmacy.jpeg',
  'CARL CHEMIST.jpeg',
  'Cliffco Pharmacy.PNG',
  'Copy of Copy of Edimida Pharmacy.jpeg',
  'Copy of Edimida Pharmacy.jpeg',
  'Copy of VICDORIS.jpeg',
  'Dinkal logo.jpg',
  'Dzofam logo.jpg',
  'Edimida-Pharmacy.jpeg',
  'Elhams Logo.jpg',
  'Fractal Pharmacy Logo.jpg',
  'Fresh Spring Pharmacy.jpeg',
  'Fresh Spring.jpg',
  'GABEJOSH LOGO.jpg',
  'Gapec.jpg',
  'Gasto Pharmacy.jpg',
  'GIDIMAX.jpeg',
  'Glomax pharmacy.jpeg',
  'Jennich Pharmaceutials logo.jpg',
  'LEMON PHARMACY.jpeg',
  'LESSONS.png',
  'LLYODS.jpeg',
  'M&E Healthway.jpg',
  'Madina Estate Pharmacy.jpeg',
  'MAY MART.jpeg',
  'MEDITAB HEALTH SHOPPE.jpeg',
  'nadorg.jpg',
  'NAVIA PAHRMACY.jpeg',
  'New heights Logo.jpg',
  'NOVOMED PHARMACY.jpg',
  'Novomed.jpg',
  'Peru Pharmacy.jpeg',
  'Pillcheck Pharmacy.jpeg',
  'Pillchek.jpg',
  'Pillmart-Pharmacy.jpeg',
  'Premier iBS logo.png',
  'Premier Point.jpg',
  'ROCK CHEMIST.jpeg',
  'Royal Avenue Pharmacy.jpeg',
  'Royal Avenue.jpg',
  'VICDORIS.jpeg',
  'WINSTIN PHARMACY.jpeg'
]

// 2️⃣ Define slides
const slides = ref([
  {
    type: 'intro',
    title: 'Welcome to Rigelis Inc',
    text: 'Transforming pharmacy operations — smarter, faster, and seamless!',
    image: '/images/intro.jpg'
  },
  {
    type: 'team',
    title: 'Our Team',
    text: 'Meet the people building Rigelis OS',
    image: '/images/team-hero.jpg',
    members: [
      { name: 'Andrews Paanii Quao', role: 'CEO', desc: 'Leading the company vision and strategy for digital pharmacy solutions.' },
      { name: 'Christian Apeku', role: 'Lead Frontend Developer', desc: 'Designing and implementing user-friendly interfaces.' },
      { name: 'Daniel Kusi', role: 'CTO', desc: 'Overseeing technology infrastructure and ensuring system scalability.' },
      { name: 'Dominic Amuah', role: 'Customer Support', desc: 'Helping users resolve issues and providing excellent service.' },
      { name: 'Enoch Crentsil', role: 'Customer Support', desc: 'User assistance and onboarding support.' },
      { name: 'Hanifah', role: 'Accountant', desc: 'Handling finance and operations.' },
    ]
  },
  {
    type: 'partners',
    title: 'Our Partners',
    text: 'We collaborate with established healthcare organisations',
    image: '/images/partners-hero.jpg',
    partners: partnerFilenames.map(name => ({
      name,
      logo: `/Pharmacy-Logos/${encodeURIComponent(name)}` // encode spaces and special characters
    }))
  }
])
</script>