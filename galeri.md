---
layout: default
title: Galeri
permalink: /galeri/
---
<style>
html, body {
  overflow-x: hidden;
}
#ai-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(circle at center, #0a0a0a, #050505);
}
#ai-bg canvas {
  width: 100%;
  height: 100%;
}
</style>

<div id="ai-bg">
  <canvas id="particles"></canvas>
</div>

<script>
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = Array.from({length: 90}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*2+1,
  dx:(Math.random()-.5)*.6,
  dy:(Math.random()-.5)*.6
}));

(function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(180,180,255,.8)";
    ctx.shadowBlur=12;
    ctx.shadowColor="#6f78ff";
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animate);
})();
</script>
<!-- ================= NAVBAR  ================= -->
<style>
/* NAVBAR FUTURISTIK */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 14px 0;
  transition: background 0.35s ease, box-shadow 0.35s ease;
  backdrop-filter: blur(10px);
}

/* Normal (transparan) */
.navbar:not(.scrolled) {
  background: rgba(0, 0, 0, 0.25);
  box-shadow: none;
}

/* Saat scroll → aktif neon */
.navbar.scrolled {
  background: linear-gradient(135deg, #1976ff55, #a431ff55);
  box-shadow: 
    0 0 12px rgba(77, 97, 255, .6),
    0 0 25px rgba(164, 49, 255, .4);
}

/* INNER CONTAINER */
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* BRAND */
.navbar-left {
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-shadow: 0 0 12px rgba(255,255,255,0.5);
}

/* MENU */
.navbar-right {
  display: flex;
  gap: 24px;
}

.navbar-right a {
  color: white;
  font-size: 15px;
  text-decoration: none;
  transition: 0.25s ease;
  padding: 4px 10px;
  border-radius: 8px;
}

/* Hover neon effect */
.navbar-right a:hover {
  background: linear-gradient(135deg, #1976ff, #a431ff);
  box-shadow:
    0 0 8px rgba(77, 97, 255, .6),
    0 0 16px rgba(164, 49, 255, .5);
  transform: translateY(-2px);
}

/* OFFSET CONTENT BELOW NAVBAR */
.header-offset {
  margin-top: 90px;
}

/* RESPONSIVE NAVBAR */
@media (max-width: 768px) {
  .nav-inner {
    flex-direction: column;
    gap: 10px;
  }
  .navbar-right {
    gap: 14px;
  }
  .navbar-left {
    font-size: 18px;
  }
}
</style>

<div class="navbar">
  <div class="nav-inner">
    <div class="navbar-left">Aju's Blog</div>
    <div class="navbar-right">
      <a href="{{ site.baseurl }}/">Blog</a>
      <a href="{{ site.baseurl }}/galeri">Galeri</a>
      <a href="https://anakagung55.github.io/Portfolio/">Tentang</a>
      <a href="{{ site.baseurl }}/lokasi">Lokasi</a>
    </div>
  </div>
</div>

<script>
window.addEventListener("scroll",()=>{
  document.querySelector(".navbar")
    .classList.toggle("scrolled",scrollY>20);
});
</script>
<style>
.gallery-wrap{
  max-width:1200px;
  margin:80px auto;
  padding:0 20px;
}
.gallery-title{
  text-align:center;
  font-size:36px;
  color:#fff;
  margin-bottom:40px;
}
.gallery-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
  gap:24px;
}
.gallery-item{
  position:relative;
  border-radius:18px;
  overflow:hidden;
  cursor:pointer;
}
.gallery-item img{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:.4s ease;
}
.gallery-item:hover img{
  transform:scale(1.08);
}
.gallery-overlay{
  position:absolute; inset:0;
  background:rgba(0,0,0,.65);
  opacity:0;
  transition:.4s ease;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  text-align:center;
  padding:20px;
}
.gallery-item:hover .gallery-overlay{
  opacity:1;
}
</style>

<section class="gallery-wrap">
  <h1 class="gallery-title">Galleries & Activities</h1>

  <div class="gallery-grid">
    <div class="gallery-item"
      data-title="Hari Pertama Bootcamp di Interlace"
      data-desc="Bootcamp perkenalan lingkungan kantor dan karyawan-karyawan yang ada di Interlace,sesi ini sangat mengesankan,bertemu dan berkenalan dengan orang-orang baru"
      data-date="11 Agustus, 2025"
      data-img="{{ site.baseurl }}/assets/img/header1.jpg">
      <img src="{{ site.baseurl }}/assets/img/header1.jpg">
      <div class="gallery-overlay">
        <h3>Hari Pertama Bootcamp di Interlace</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Hari Kedua Bootcamp di Interlace"
      data-desc="Bootcamp tentang overview bagaimana Kondisi geografis di Australia,Pekerjaan apa yang ada,Career path jika mau ke Austalia,sesi ini sangat mengesankan,bisa menambah wawasan baru tentang Australia"
      data-date="Agustus 12, 2025"
      data-img="{{ site.baseurl }}/assets/img/header2.jpg">
      <img src="{{ site.baseurl }}/assets/img/header2.jpg">
      <div class="gallery-overlay">
        <h3>Hari Kedua Bootcamp di Interlace</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Hari Kelima Bootcamp di Interlace"
      data-desc="Pengenalan dengan pihak kampus di Australia yang bekerja sama dengan Interlace,mendapat insight bagaimana cara dari scrath,apply sampai mendapat offering letter dari pihak kampus"
      data-date="Agustus 13, 2025"
      data-img="{{ site.baseurl }}/assets/img/header3.jpg">
      <img src="{{ site.baseurl }}/assets/img/header3.jpg">
      <div class="gallery-overlay">
        <h3>Hari Kelima Bootcamp di Interlace</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Hari Ketujuh Bootcamp di Interlace"
      data-desc="Pengenalan dengan pihak kampus di Australia yang bekerja sama dengan Interlace,mendapat insight bagaimana cara dari scrath,apply sampai mendapat offering letter dari pihak kampus"
      data-date="Agustus 14, 2025"
      data-img="{{ site.baseurl }}/assets/img/header4.jpg">
      <img src="{{ site.baseurl }}/assets/img/header4.jpg">
      <div class="gallery-overlay">
        <h3>Hari Ketujuh Bootcamp di Interlace</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Kunjungan Pertama Dosen Pembimbing ke lapangan"
      data-desc="Di kunjungan pertama ini kami memaparkan apa saja yang kami kerjakan di Interlace ini,dan juga projek apa saja yang sedang digarap"
      data-date="September 23, 2025"
      data-img="{{ site.baseurl }}/assets/img/header5.jpg">
      <img src="{{ site.baseurl }}/assets/img/header5.jpg">
      <div class="gallery-overlay">
        <h3>Kunjungan Pertama Dosen Pembimbing</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Kunjungan Kampus Australia"
      data-desc="Kunjungan dari pihak kampus yang kerja sama dengan Interlace,mereka memaparkan bagaimana kondisi kampus mereka disana dan sharing tentang kehidupan di Australia"
      data-date="September 30, 2025"
      data-img="{{ site.baseurl }}/assets/img/header6.jpg">
      <img src="{{ site.baseurl }}/assets/img/header6.jpg">
      <div class="gallery-overlay">
        <h3>Kunjungan Kampus Australia/h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Kunjungan Bapak Kaprodi ke Interlace"
      data-desc="Kunjungan bapak Kaprodi Ilmu Komputer ke Interlace membawakan semacam gift untuk pihak Interlace dan sharing terhadap kehidupan magang di Interlace"
      data-date="November 2, 2025"
      data-img="{{ site.baseurl }}/assets/img/header7.jpg">
      <img src="{{ site.baseurl }}/assets/img/header7.jpg">
      <div class="gallery-overlay">
        <h3>Kunjungan Bapak Kaprodi ke Interlace</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Perayaan Graduation Senior Staff di Interlace"
      data-desc="Momen kebersamaan untuk merayakan salah satu staff di Interlace"
      data-date="November 12, 2025"
      data-img="{{ site.baseurl }}/assets/img/header8.jpg">
      <img src="{{ site.baseurl }}/assets/img/header8.jpg">
      <div class="gallery-overlay">
        <h3>Perayaan Graduation Senior Staff di Interlace</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Momen Daily Stand Up Meeting"
      data-desc="Daily Stand Up meeting merupakan habbit kerja di Interlace yakni sharing progress project setiap hari di jam 9 pagi sebelum memulai pekerjaan"
      data-date="September 28, 2025"
      data-img="{{ site.baseurl }}/assets/img/header9.jpg">
      <img src="{{ site.baseurl }}/assets/img/header9.jpg">
      <div class="gallery-overlay">
        <h3>Momen Daily Stand Up Meeting</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Momen Kebersamaan Interlace"
      data-desc="Momen kebersamaan dalam rangka perayaan setelah sharing final project ke pihak Interlace Australia,perayaan ini dirayakan dengan membeli pizza untuk semua kru"
      data-date="November 29, 2025"
      data-img="{{ site.baseurl }}/assets/img/header11.jpg">
      <img src="{{ site.baseurl }}/assets/img/header11.jpg">
      <div class="gallery-overlay">
        <h3>"Momen Kebersamaan Interlac</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Presentasi project ke Pihak Interlace Australia"
      data-desc="Momen tim IT Interlace Bali sharing finalproject yang sudah dikerjakan selama milestone berlangsung,dan diterima positif dengan pihak Interlace Australia"
      data-date="November 29, 2025"
      data-img="{{ site.baseurl }}/assets/img/header10.jpg">
      <img src="{{ site.baseurl }}/assets/img/header10.jpg">
      <div class="gallery-overlay">
        <h3>Presentasi project ke Pihak Interlace Australia</h3>
      </div>
    </div>
    <div class="gallery-item"
      data-title="Sharing Proggress dengan IT Team Australia"
      data-desc="Mendiskusikan project yang sudah dan akan dilakukan bersama pihak IT Interlace Australia"
      data-date="November 30, 2025"
      data-img="{{ site.baseurl }}/assets/img/header12.jpg">
      <img src="{{ site.baseurl }}/assets/img/header12.jpg">
      <div class="gallery-overlay">
        <h3>Sharing Proggress dengan IT Team Australia</h3>
      </div>
    </div>
  </div>
</section>
<style>
.modal{
  position:fixed; inset:0;
  background:rgba(0,0,0,.85);
  display:none;
  align-items:center;
  justify-content:center;
  z-index:99999;
}
.modal-content{
  background:#111;
  max-width:1000px;
  width:90%;
  border-radius:18px;
  display:flex;
  overflow:hidden;
}
.modal-content img{
  width:60%;
  object-fit:cover;
}
.modal-text{
  padding:24px;
  color:#fff;
}
.modal-close{
  position:absolute;
  top:20px; right:30px;
  font-size:28px;
  cursor:pointer;
  color:#fff;
}
</style>

<div class="modal" id="modal">
  <span class="modal-close" onclick="closeModal()">✕</span>
  <div class="modal-content">
    <img id="modalImg">
    <div class="modal-text">
      <h2 id="modalTitle"></h2>
      <p id="modalDesc"></p>
      <small id="modalDate"></small>
    </div>
  </div>
</div>

<script>
const modal=document.getElementById("modal");
document.querySelectorAll(".gallery-item").forEach(item=>{
  item.onclick=()=>{
    modal.style.display="flex";
    modalImg.src=item.dataset.img;
    modalTitle.innerText=item.dataset.title;
    modalDesc.innerText=item.dataset.desc;
    modalDate.innerText="Posted on: "+item.dataset.date;
  }
});
function closeModal(){
  modal.style.display="none";
}
</script>
