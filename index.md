<!-- ===================================================== -->
<!--             DISABLE CAYMAN DEFAULT HEADER             -->
<!-- ===================================================== -->
<style>
.page-header {
    display: none !important;
}
</style>

<!-- ===================================================== -->
<!--                 FULL ADVANCED CUSTOM HEADER           -->
<!-- ===================================================== -->

<!-- GOOGLE FONT -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap">

<style>
body {
  font-family: 'Poppins', sans-serif !important;
  transition: background 0.3s ease, color 0.3s ease;
  background: var(--bg);
  color: var(--text);
  margin: 0;
}

/* ========================= */
/*         DARK MODE         */
/* ========================= */
:root {
  --bg: #ffffff;
  --text: #333;
  --nav-bg: rgba(255,255,255,0.3);
  --hero-title: white;
  --hero-sub: #e6e6e6;
}
.dark-mode {
  --bg: #0d1117;
  --text: #d1d5db;
  --nav-bg: rgba(0,0,0,0.4);
  --hero-title: white;
  --hero-sub: #cccccc;
}

/* ========================= */
/*          NAVBAR           */
/* ========================= */
.navbar {
  width: 100%;
  padding: 16px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--nav-bg);
  backdrop-filter: blur(15px);
  position: fixed;
  top: 0;
  z-index: 999;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-left: 22px;
  font-weight: 500;
  transition: 0.25s;
}

.navbar a:hover {
  opacity: 0.7;
  transform: translateY(-2px);
}

/* Dark Mode Button */
.toggle-btn {
  background: none;
  border: 1px solid rgba(255,255,255,0.4);
  padding: 6px 12px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
.toggle-btn:hover {
  background: rgba(255,255,255,0.2);
}

/* ========================= */
/*       PARTICLES JS        */
/* ========================= */
#particles-js {
  position: absolute;
  width: 100%;
  height: 530px;
  z-index: -1;
  top: 0;
}

/* ========================= */
/*         HERO SECTION      */
/* ========================= */
.hero {
  width: 100%;
  height: 530px;
  background: linear-gradient(135deg, #0057ff, #00b894, #00cec9);
  background-size: 200% 200%;
  animation: gradientFlow 7s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 80px;
  margin-top: -60px; /* FIX UTK CAYMAN */
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Avatar */
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid rgba(255,255,255,0.8);
  margin-bottom: 15px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

/* Typing Animation */
.typing {
  color: var(--hero-sub);
  font-size: 20px;
  margin-top: 10px;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 0;
  overflow: hidden;
  animation: typing 3s steps(40) forwards, blink 0.8s step-end infinite;
}

@keyframes typing { from { width: 0; } to { width: 360px; } }
@keyframes blink { 50% { border-color: transparent; } }

.hero-title {
  color: var(--hero-title);
  font-size: 52px;
  font-weight: 800;
  margin: 0;
}

.hero-btn {
  margin-top: 28px;
  padding: 12px 28px;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.25s;
}
.hero-btn:hover {
  background: rgba(255,255,255,0.35);
  transform: translateY(-3px);
}
</style>

<!-- ========================= -->
<!--        NAVBAR HTML        -->
<!-- ========================= -->
<div class="navbar">
  <div style="color:white; font-size:20px; font-weight:600;">Interlace Internship</div>
  <div>
    <button class="toggle-btn" onclick="toggleDarkMode()">🌙</button>
    <a href="/">Home</a>
    <a href="#highlight">Projects</a>
    <a href="./journal">Journal</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<!-- ========================= -->
<!--     PARTICLES BACKGROUND  -->
<!-- ========================= -->
<script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
<div id="particles-js"></div>
<script>
particlesJS.load('particles-js','https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/particles.json');
</script>

<!-- ========================= -->
<!--          HERO AREA        -->
<!-- ========================= -->
<div class="hero">
  <img src="/assets/img/avatar.jpg" class="avatar">

  <h1 class="hero-title">Magang Interlace Studies Bali</h1>

  <div class="typing">Data Engineering & Automation Intern</div>

  <a class="hero-btn" href="https://github.com/YOUR_USERNAME" target="_blank">🌐 View GitHub</a>
</div>

<script>
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
</script>

<br><br><br><br>
