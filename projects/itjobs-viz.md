---
layout: default
title: "IT Job Visualization Project"
permalink: /projects/itjobs-viz
category: Data Analysis
tools: Python, Pandas, Looker Studio
year: 2025
---

<!-- ================= BLOG CONTENT ================= -->
<style>
.blog-wrap {
  max-width: 900px;
  margin: 60px auto;
  padding: 40px;
  background: rgba(30,34,40,.88);
  border-radius: 18px;
  color: #e5e5e5;
  line-height: 1.85;
  box-shadow: 0 20px 40px rgba(0,0,0,.45);
  backdrop-filter: blur(6px);
}
.blog-wrap h1 {
  font-size: 38px;
  color: #fff;
}
.blog-meta {
  font-size: 14px;
  opacity: .7;
  margin-bottom: 30px;
}
.blog-wrap h2 {
  margin-top: 45px;
  font-size: 26px;
  color: #fff;
}
.blog-wrap p,
.blog-wrap li {
  color: #e0e0e0;
}
blockquote {
  margin: 40px 0;
  padding: 20px 26px;
  background: linear-gradient(135deg,#1f2a44,#2a2f36);
  border-left: 4px solid #6f78ff;
  border-radius: 12px;
  color: #dbe2ff;
}
</style>

<div class="blog-wrap">
  <h1>IT Job Visualization Project</h1>
  <div class="blog-meta">Data Analysis • 5 min read • 2025</div>

  <img src="{{ site.baseurl }}/assets/img/itjobs-viz-thumb.jpg"
       style="width:100%;border-radius:14px;margin:30px 0;">

  <p>
    <strong>IT Job Visualization Project</strong> merupakan proyek analisis dan
    visualisasi data yang bertujuan untuk menggambarkan
    <strong>tren kebutuhan pekerjaan IT</strong> di Australia berdasarkan
    dataset hasil web scraping dari berbagai <em>job portal</em>.
    Proyek ini dikembangkan sebagai bagian dari pipeline data
    selama program magang di <strong>Interlace Studies Bali</strong>.
  </p>

  <h2>Latar Belakang</h2>
  <p>
    Informasi mengenai kebutuhan tenaga kerja IT di Australia
    tersebar di berbagai platform lowongan kerja dan sulit dianalisis
    secara manual. Setiap portal memiliki format data yang berbeda,
    mulai dari penamaan role, deskripsi pekerjaan, hingga requirement skill.
  </p>

  <p>
    Tanpa visualisasi yang terstruktur, sulit bagi calon migran,
    konsultan pendidikan, maupun analis data untuk memahami
    <em>role IT apa yang paling dibutuhkan</em>,
    <em>tren skill yang dominan</em>, serta
    <em>perubahan kebutuhan pasar kerja</em>.
  </p>

  <h2>Tujuan Pengembangan</h2>
  <ul>
    <li>Menyajikan insight kebutuhan pekerjaan IT secara visual</li>
    <li>Mengidentifikasi role IT yang paling banyak dicari</li>
    <li>Menganalisis tren skill dan teknologi yang dominan</li>
    <li>Mendukung pengambilan keputusan berbasis data</li>
  </ul>

  <h2>Workflow Sistem</h2>
  <img src="{{ site.baseurl }}/assets/img/itjobs-viz-flow.jpg"
       style="width:100%;border-radius:14px;margin:20px 0;">

  <p>
    Proses dimulai dari pengambilan dataset hasil scraping job portal,
    kemudian dilakukan pembersihan dan normalisasi data.
    Data yang telah bersih dianalisis menggunakan Python
    sebelum divisualisasikan dalam bentuk dashboard interaktif.
  </p>

  <p>
    Visualisasi mencakup distribusi role IT,
    frekuensi kemunculan skill tertentu,
    serta perbandingan tren antar kategori pekerjaan.
  </p>

  <h2>Teknologi yang Digunakan</h2>
  <ul>
    <li>Python (Pandas, NumPy)</li>
    <li>Data Cleaning & Transformation</li>
    <li>Looker Studio / Data Visualization Tools</li>
    <li>MySQL Database</li>
    <li>Git & GitHub</li>
  </ul>

  <blockquote>
    IT Job Visualization membantu menjembatani data mentah
    hasil scraping menjadi insight visual yang mudah dipahami
    untuk analisis kebutuhan pasar kerja IT.
  </blockquote>
</div>

<!-- ================= RELATED PROJECTS ================= -->
<style>
.related-projects {
  max-width: 1200px;
  margin: 120px auto 100px;
  padding: 0 20px;
}
.related-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 35px;
  color: #fff;
}
.related-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
.related-card {
  position: relative;
  height: 220px;
  border-radius: 18px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  text-decoration: none;
  box-shadow: 0 14px 35px rgba(0,0,0,.55);
  transition: transform .45s ease, box-shadow .45s ease;
}
.related-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 0 20px rgba(111,120,255,.45),
    0 0 40px rgba(164,49,255,.35);
}
.related-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(25,118,255,.55),
    rgba(164,49,255,.35),
    rgba(0,0,0,.85)
  );
  opacity: 0;
  transition: opacity .45s ease;
}
.related-card:hover .related-overlay {
  opacity: 1;
}
.related-content {
  position: absolute;
  inset: 0;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .45s ease, transform .45s ease;
}
.related-card:hover .related-content {
  opacity: 1;
  transform: translateY(0);
}
.related-content h3,
.related-content p {
  color: #fff !important;
}
.related-btn {
  margin-top: 14px;
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg,#1976ff,#a431ff);
  border-radius: 10px;
  width: fit-content;
}
@media (max-width: 900px) {
  .related-row {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="related-projects">
  <div class="related-title">Related Projects</div>
  <div class="related-row">
    <a href="{{ site.baseurl }}/projects/providers-scraping"
       class="related-card"
       style="background-image:url('{{ site.baseurl }}/assets/img/providers-thumb.jpg')">
      <div class="related-overlay"></div>
      <div class="related-content">
        <h3>Providers Scraping</h3>
        <p>University & Course Data Automation</p>
        <span class="related-btn">Baca selengkapnya →</span>
      </div>
    </a>
    <a href="{{ site.baseurl }}/projects/anzsco-scraping"
       class="related-card"
       style="background-image:url('{{ site.baseurl }}/assets/img/anzsco-thumb.jpg')">
      <div class="related-overlay"></div>
      <div class="related-content">
        <h3>ANZSCO Scraping</h3>
        <p>Occupation Classification Dataset</p>
        <span class="related-btn">Baca selengkapnya →</span>
      </div>
    </a>
    <a href="{{ site.baseurl }}/projects/assessment-scraping"
       class="related-card"
       style="background-image:url('{{ site.baseurl }}/assets/img/ass-scraping.jpg')">
      <div class="related-overlay"></div>
      <div class="related-content">
        <h3>Skill Assessment</h3>
        <p>Assessment Authority Scraping</p>
        <span class="related-btn">Baca selengkapnya →</span>
      </div>
    </a>
  </div>
</section>
