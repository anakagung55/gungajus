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
<style>
.navbar{
  position:fixed; top:0; width:100%;
  z-index:9999;
  backdrop-filter:blur(10px);
  padding:14px 0;
}
.navbar.scrolled{
  background:linear-gradient(135deg,#1976ff55,#a431ff55);
  box-shadow:0 0 20px rgba(111,120,255,.5);
}
.nav-inner{
  max-width:1200px;
  margin:auto;
  padding:0 22px;
  display:flex;
  justify-content:space-between;
}
.navbar a{
  color:#fff;
  margin-left:20px;
  text-decoration:none;
}
.header-offset{margin-top:90px;}
</style>

<div class="navbar">
  <div class="nav-inner">
    <strong>Aju's Blog</strong>
    <div>
      <a href="/">Blog</a>
      <a href="/galeri">Galeri</a>
      <a href="/tentang">Tentang</a>
      <a href="/lokasi">Lokasi</a>
    </div>
  </div>
</div>
<div class="header-offset"></div>

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
      data-date="June 29, 2025"
      data-img="{{ site.baseurl }}/assets/img/header1.jpg">
      <img src="{{ site.baseurl }}/assets/img/header1.jpg">
      <div class="gallery-overlay">
        <h3>Hari Pertama Bootcamp di Interlace</h3>
      </div>
    </div>

    <!-- DUPLIKASI ITEM DI ATAS UNTUK FOTO LAIN -->
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
