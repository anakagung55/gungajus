---
layout: default
title: "ANZSCO Data Visualization Project"
permalink: /projects/anzsco-viz
category: Data Visualization
tools: Python, Pandas, Matplotlib, SQL
year: 2025
---

<!-- ================= AI PARTICLE BACKGROUND ================= -->
<style>
html, body { overflow-x:hidden; width:100%; }
#ai-bg{
  position:fixed; inset:0; z-index:-1;
  background:radial-gradient(circle,#0a0a0a,#050505);
}
#ai-bg canvas{width:100%;height:100%}
</style>

<div id="ai-bg"><canvas id="particles"></canvas></div>

<script>
const c=document.getElementById("particles"),x=c.getContext("2d");
function r(){c.width=innerWidth;c.height=innerHeight}
r();addEventListener("resize",r);
const p=[...Array(90)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+1,dx:(Math.random()-.5)*.6,dy:(Math.random()-.5)*.6}));
(function a(){
  x.clearRect(0,0,c.width,c.height);
  p.forEach(o=>{
    x.beginPath();x.arc(o.x,o.y,o.r,0,Math.PI*2);
    x.fillStyle="rgba(180,180,255,.8)";
    x.shadowBlur=15;x.shadowColor="#6f78ff";x.fill();
    o.x+=o.dx;o.y+=o.dy;
    if(o.x<0||o.x>c.width)o.dx*=-1;
    if(o.y<0||o.y>c.height)o.dy*=-1;
  });
  requestAnimationFrame(a);
})();
</script>

<!-- ================= NAVBAR ================= -->
<style>
.navbar{position:fixed;top:0;width:100%;z-index:9999;padding:14px 0;
backdrop-filter:blur(10px);transition:.35s}
.navbar:not(.scrolled){background:rgba(0,0,0,.25)}
.navbar.scrolled{background:linear-gradient(135deg,#1976ff55,#a431ff55);
box-shadow:0 0 25px rgba(120,90,255,.6)}
.nav-inner{max-width:1200px;margin:auto;padding:0 22px;
display:flex;justify-content:space-between;align-items:center}
.navbar-left{color:#fff;font-weight:700;font-size:20px}
.navbar-right{display:flex;gap:24px}
.navbar-right a{color:#fff;text-decoration:none;padding:4px 10px;border-radius:8px}
.navbar-right a:hover{background:linear-gradient(135deg,#1976ff,#a431ff)}
.header-offset{margin-top:90px}
</style>

<div class="navbar">
  <div class="nav-inner">
    <div class="navbar-left">Aju's Blog</div>
    <div class="navbar-right">
      <a href="{{ site.baseurl }}/">Blog</a>
      <a href="{{ site.baseurl }}/galeri">Galeri</a>
      <a href="{{ site.baseurl }}/tentang">Tentang</a>
      <a href="{{ site.baseurl }}/lokasi">Lokasi</a>
    </div>
  </div>
</div>
<div class="header-offset"></div>

<script>
addEventListener("scroll",()=>document.querySelector(".navbar")
.classList.toggle("scrolled",scrollY>20));
</script>

<!-- ================= BLOG CONTENT ================= -->
<style>
.blog-wrap{
max-width:900px;margin:60px auto;padding:40px;
background:rgba(30,34,40,.88);border-radius:18px;
color:#e5e5e5;line-height:1.85;
box-shadow:0 20px 40px rgba(0,0,0,.45)}
.blog-wrap h1{font-size:38px;color:#fff}
.blog-meta{opacity:.7;margin-bottom:30px}
.blog-wrap h2{margin-top:45px;font-size:26px;color:#fff}
blockquote{margin:40px 0;padding:20px 26px;
background:linear-gradient(135deg,#1f2a44,#2a2f36);
border-left:4px solid #6f78ff;border-radius:12px}
</style>

<div class="blog-wrap">
<h1>ANZSCO Data Visualization Project</h1>
<div class="blog-meta">Data Visualization • 5 min read • 2025</div>

<img src="{{ site.baseurl }}/assets/img/anzsco-viz.jpg"
style="width:100%;border-radius:14px;margin:30px 0;">

<p>
<strong>ANZSCO Data Visualization Project</strong> merupakan proyek visualisasi
data berbasis dataset <em>Australian and New Zealand Standard Classification of Occupations (ANZSCO)</em>.
Proyek ini bertujuan untuk menyajikan struktur klasifikasi pekerjaan secara visual
agar mudah dianalisis dalam konteks migrasi dan kebutuhan tenaga kerja.
</p>

<h2>Latar Belakang</h2>
<p>
Dataset ANZSCO bersifat hierarkis dan kompleks, terdiri dari major group,
sub-major, minor group, hingga occupation unit.
Tanpa visualisasi yang tepat, data ini sulit dipahami oleh
konsultan migrasi, analis data, maupun pencari kerja.
</p>

<h2>Tujuan Pengembangan</h2>
<ul>
<li>Menyajikan struktur ANZSCO secara visual dan interaktif</li>
<li>Mengidentifikasi distribusi occupation berdasarkan sektor</li>
<li>Mendukung analisis keterkaitan skill, job demand, dan migrasi</li>
<li>Menjadi dasar integrasi dengan job market & skill assessment data</li>
</ul>

<h2>Workflow Sistem</h2>
<img src="{{ site.baseurl }}/assets/img/anzsco-viz-flow.jpg"
style="width:100%;border-radius:14px;margin:20px 0;">

<p>
Proses dimulai dari pengolahan dataset ANZSCO hasil scraping,
dilanjutkan dengan normalisasi struktur hierarki,
dan diakhiri dengan visualisasi berbasis grafik dan diagram.
</p>

<h2>Teknologi yang Digunakan</h2>
<ul>
<li>Python (Pandas, NumPy)</li>
<li>Matplotlib & Seaborn</li>
<li>MySQL Database</li>
<li>Jupyter Notebook</li>
</ul>

<blockquote>
Visualisasi ANZSCO membantu menjembatani data klasifikasi pekerjaan
dengan analisis kebutuhan tenaga kerja dan migrasi berbasis data.
</blockquote>
</div>

<!-- ================= RELATED PROJECTS ================= -->
<style>
.related-projects{max-width:1200px;margin:120px auto;padding:0 20px}
.related-row{display:grid;grid-template-columns:repeat(3,1fr);gap:25px}
.related-card{position:relative;height:220px;border-radius:18px;
background-size:cover;background-position:center;overflow:hidden}
.related-overlay{position:absolute;inset:0;
background:linear-gradient(135deg,rgba(25,118,255,.55),rgba(164,49,255,.35),rgba(0,0,0,.85));
opacity:0;transition:.45s}
.related-card:hover .related-overlay{opacity:1}
.related-content{position:absolute;inset:0;padding:28px;
display:flex;flex-direction:column;justify-content:center;
opacity:0;transform:translateY(20px);transition:.45s}
.related-card:hover .related-content{opacity:1;transform:none}
.related-content h3,.related-content p{color:#fff}
.related-btn{margin-top:12px;padding:10px 18px;
background:linear-gradient(135deg,#1976ff,#a431ff);
border-radius:10px;color:#fff;font-size:13px}
@media(max-width:900px){.related-row{grid-template-columns:1fr}}
</style>

<section class="related-projects">
<div class="related-row">
<a href="{{ site.baseurl }}/projects/anzsco-scraping" class="related-card"
style="background-image:url('{{ site.baseurl }}/assets/img/anzsco-thumb.jpg')">
<div class="related-overlay"></div>
<div class="related-content">
<h3>ANZSCO Scraping</h3>
<p>Occupation Data Extraction</p>
<span class="related-btn">Baca selengkapnya →</span>
</div></a>

<a href="{{ site.baseurl }}/projects/assessment-scraping" class="related-card"
style="background-image:url('{{ site.baseurl }}/assets/img/ass-scraping.jpg')">
<div class="related-overlay"></div>
<div class="related-content">
<h3>Skill Assessment</h3>
<p>Assessment Authority Data</p>
<span class="related-btn">Baca selengkapnya →</span>
</div></a>

<a href="{{ site.baseurl }}/projects/itjobs-viz" class="related-card"
style="background-image:url('{{ site.baseurl }}/assets/img/itjobs-viz-thumb.jpg')">
<div class="related-overlay"></div>
<div class="related-content">
<h3>IT Job Visualization</h3>
<p>Job Market Analysis</p>
<span class="related-btn">Baca selengkapnya →</span>
</div></a>
</div>
</section>
