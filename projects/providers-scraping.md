---
layout: default
title: Providers Scraping System
---

<style>
/* Blog Header */
.blog-header {
  width: 100%;
  padding: 60px 20px 40px;
  background: linear-gradient(135deg,#0059b2,#009c74);
  color: white;
  text-align: center;
  border-radius: 0 0 20px 20px;
}

.blog-header h1 {
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 700;
}

.blog-header p {
  font-size: 15px;
  opacity: .9;
}

/* Blog content */
.blog-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: #1e1f22;
  border-radius: 14px;
  color: #f2f2f2;
  line-height: 1.7;
}

.blog-container img {
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
}

.blog-container h2 {
  margin-top: 35px;
  margin-bottom: 10px;
  color: #00d07e;
}

.back-btn {
  display: inline-block;
  background: #00d07e;
  color: #000;
  padding: 10px 18px;
  border-radius: 8px;
  margin-top: 15px;
  text-decoration: none;
  font-weight: 600;
}

/* Related Posts */
.related-posts {
  max-width: 1100px;
  margin: 50px auto;
  padding: 10px;
}

.related-title {
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: bold;
  color: white;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap: 20px;
}

.related-card {
  background: #1f1f1f;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #2a2a2a;
  transition: .3s;
}

.related-card:hover {
  transform: translateY(-5px);
  border-color: #00d07e;
}

.related-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.related-card-body {
  padding: 15px;
}

.related-card-body h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #00d07e;
}

.related-card-body p {
  font-size: 14px;
  opacity: .8;
}

.related-card-body a {
  margin-top: 12px;
  display: inline-block;
  padding: 8px 14px;
  background: #00d07e;
  color: #000;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
}
</style>


<!-- NAVBAR SAMA SEPERTI HALAMAN AWAL -->
{% include navbar.html %}


<!-- BLOG HEADER -->
<div class="blog-header">
  <h1>Providers Scraping System</h1>
  <p>Dokumentasi project scraping data universitas Australia untuk Interlace Studies Bali.</p>
</div>


<!-- BLOG CONTENT -->
<div class="blog-container">

  <img src="/assets/img/providers-thumb.jpg">

  <h2>📌 Ringkasan Project</h2>
  <p>
    Project ini bertujuan membangun sistem scraping otomatis untuk mengambil data dari
    berbagai universitas & college di Australia. 
    Semua data hasil scraping digunakan untuk memperbarui database Interlace Studies Bali.
  </p>

  <h2>📊 Data yang Diambil</h2>
  <ul>
    <li>Deskripsi course (HTML clean)</li>
    <li>CRICOS code</li>
    <li>Tuition fee (offshore)</li>
    <li>Total duration</li>
    <li>Entry requirements</li>
    <li>Apply form URL</li>
    <li>Campus availability</li>
  </ul>

  <img src="/assets/img/providers-workflow.jpg">

  <h2>🧪 Teknologi yang Digunakan</h2>
  <ul>
    <li>Python Requests</li>
    <li>BeautifulSoup Parsing</li>
    <li>Regex Cleaner</li>
    <li>Modular Extractor per provider</li>
    <li>SQL Automation untuk update database</li>
  </ul>

  <h2>⚙ Contoh Kode</h2>
  <pre>
soup = BeautifulSoup(html, "html.parser")
description = soup.select_one(".course-description")
cleaned = clean_html(str(description))
  </pre>

  <h2>🚧 Challenges & Solutions</h2>
  <p><b>1. HTML setiap provider berbeda</b><br>
  → Solusi: extractor modular & dynamic selector.</p>

  <p><b>2. CRICOS tidak muncul</b><br>
  → Solusi: dataset CRICOS terpisah berdasarkan nama course.</p>

  <p><b>3. HTML berantakan</b><br>
  → Solusi: regex cleaner + normalizer.</p>

  <p><b>4. Timeout & Error 500</b><br>
  → Solusi: retry logic & delay incremental.</p>

  <a class="back-btn" href="/">← Kembali ke Beranda</a>
</div>


<!-- RELATED POSTS -->
<div class="related-posts">
  <div class="related-title">📚 Postingan Terkait</div>

  <div class="related-grid">
    <div class="related-card">
      <img src="/assets/img/jobportal-thumb.png">
      <div class="related-card-body">
        <h3>IT Job Portal Scraping</h3>
        <p>Mengambil data lowongan IT dari Jora, Indeed, dan Seek…</p>
        <a href="/blog/job-portal.html">Baca selengkapnya</a>
      </div>
    </div>
    <div class="related-card">
      <img src="/assets/img/anzsco-thumb.png">
      <div class="related-card-body">
        <h3>ANZSCO Scraping</h3>
        <p>Scraping informasi ANZSCO untuk pemetaan job family…</p>
        <a href="/blog/anzsco.html">Baca selengkapnya</a>
      </div>
    </div>
    <div class="related-card">
      <img src="/assets/img/visual-thumb.png">
      <div class="related-card-body">
        <h3>IT Job Visualization</h3>
        <p>Dashboard visual untuk tren pekerjaan IT Australia…</p>
        <a href="/blog/visualization.html">Baca selengkapnya</a>
      </div>
    </div>

  </div>
</div>
