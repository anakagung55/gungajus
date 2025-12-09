---
layout: default
title: Aju's Blog
---

<!-- ================= AI PARTICLE BACKGROUND ================= -->
<div id="ai-bg">
  <canvas id="particles"></canvas>
</div>

<!-- ================= NAVBAR ================= -->
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

<!-- ================= SLIDESHOW HEADER ================= -->
<div class="slideshow-container">

  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header1.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header2.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header3.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header4.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header5.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header6.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header7.jpg">

  <div class="header-title">Magang Interlace Studies Bali</div>

</div>

<br>

<!-- ================= POST SECTION ================= -->
<div class="container">

  <div class="section-title">Postingan Terbaru</div>

  <!-- Toggle Button Grid / List -->
  <div class="view-toggle">
    <button id="gridView" class="toggle-btn active">
      <span class="icon-grid">
        <span></span><span></span>
        <span></span><span></span>
      </span>
    </button>
    <button id="listView" class="toggle-btn">
      <span class="icon-list"><span></span></span>
    </button>
  </div>

  <!-- ================= GRID MODE ================= -->
  <div class="posts-grid grid-mode">
      <div class="post-card grid-item">
        <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">Providers Scraping System</div>
            <div class="overlay-desc">Scraping data universitas Australia lengkap ...</div>
            <div class="post-meta">Scraping • 5 min read • 2025</div>
            <a href="{{ site.baseurl }}/projects/providers-scraping" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>
      <div class="post-card grid-item">
        <img src="{{ site.baseurl }}/assets/img/jobportal-thumb.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">IT Job Portal Scraping</div>
            <div class="overlay-desc">Mengambil data lowongan pekerjaan IT dan memetakannya sebagai dataset analisis.</div>
            <div class="post-meta">Scraping • 5 min read • 2025</div>
            <a href="{{ site.baseurl }}/projects/scraping-job-portal" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>
      <div class="post-card grid-item">
        <img src="{{ site.baseurl }}/assets/img/anzsco-thumb.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">ANZSCO Scraping</div>
            <div class="overlay-desc">Scraping informasi ANZSCO untuk pemetaan job family dan skill level.</div>
            <div class="post-meta">Scraping • 5 min read • 2025</div>
            <a href="{{ site.baseurl }}/projects/anzsco-scraping" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>
      <div class="post-card grid-item">
        <img src="{{ site.baseurl }}/assets/img/itjobs-viz-thumb.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">IT Job Visualization</div>
            <div class="overlay-desc">Visualisasi tren role pekerjaan IT berdasarkan dataset job scraping.</div>
            <div class="post-meta">Visualitation • 5 min read • 2025</div>
            <a href="{{ site.baseurl }}/projects/itjobs-viz" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>
      <div class="post-card grid-item">
        <img src="{{ site.baseurl }}/assets/img/anzsco-viz-thumb.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">ANZSCO Data Visualitation</div>
            <div class="overlay-desc">Visualisasi data ANZSCO menggunakan Looker Studio.</div>
            <div class="post-meta">Scraping • 5 min read • 2025</div>
            <a href="{{ site.baseurl }}/projects/anzsco-viz" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>
      <div class="post-card grid-item">
        <img src="{{ site.baseurl }}/assets/img/ass-scraping.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">Skill Assessment Scraping</div>
            <div class="overlay-desc">Scraping Website Skill Assessment di Australia.</div>
            <div class="post-meta">Scraping • 5 min read • 2025</div>
            <a href="{{ site.baseurl }}/projects/assessment-scraping" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>

  </div> <!-- END GRID -->

  <!-- ================= LIST MODE ================= -->
  <div class="posts-list list-mode" style="display:none;">

      {% include post-list.html %}

  </div>

</div> <!-- END CONTAINER -->

<!-- ================= FOOTER ================= -->
<div class="footer-bg">
  <svg class="footer-wave" viewBox="0 0 1440 500" preserveAspectRatio="none">
    <defs>
      <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1976ff"/>
        <stop offset="50%" stop-color="#6a5bff"/>
        <stop offset="100%" stop-color="#a431ff"/>
      </linearGradient>
    </defs>
    <path d="M0,150 C300,250 600,50 900,150 C1200,250 1500,70 1800,150 L1800,500 L0,500 Z"></path>
    <path d="M1800,150 C2100,250 2400,50 2700,150 C3000,250 3300,70 3600,150 L3600,500 L1800,500 Z"></path>
  </svg>

  <footer class="footer">
    <h2 class="footer-brand">Aju's Blog</h2>
    <p class="footer-sub">Built with ❤️ using Jekyll • 2025</p>
    <div class="footer-links">
      <a href="/">Blog</a>
      <a href="/galeri">Galeri</a>
      <a href="/tentang">Tentang</a>
      <a href="/lokasi">Lokasi</a>
    </div>
    <p class="footer-copy">© 2025 Aju’s Blog — All Rights Reserved.</p>
  </footer>
</div>

<!-- ================= JAVASCRIPT FILES ================= -->
<script src="{{ site.baseurl }}/assets/js/particles.js"></script>
<script src="{{ site.baseurl }}/assets/js/navbar.js"></script>
<script src="{{ site.baseurl }}/assets/js/toggle-view.js"></script>
<script src="{{ site.baseurl }}/assets/js/comments.js"></script>
