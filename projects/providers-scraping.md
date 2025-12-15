---
---
layout: default
title: "Providers Scraping System"
permalink: /projects/providers-scraping
---
category: Data Engineering
tools: Python, BeautifulSoup, SQL, Retry
year: 2025
---


<div class="container">
  <!-- JUDUL ARTIKEL -->
  <article class="blog-article">
    <h1 class="blog-title">Providers Scraping System</h1>
    <div class="blog-meta">
      <span>Scraping</span> • <span>5 min read</span> • <span>2025</span>
    </div>
    <!-- HERO IMAGE -->
    <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="blog-hero">
    <!-- INTRO -->
    <p class="blog-lead">
      Providers Scraping System merupakan sistem automasi pengambilan data universitas
      di Australia yang dikembangkan selama program magang di
      <strong>Interlace Studies Bali</strong>.
      Sistem ini bertujuan untuk mengumpulkan data institusi pendidikan secara terstruktur
      dan siap digunakan untuk analisis lanjutan.
    </p>
    <hr>
    <!-- SECTION -->
    <h2>Latar Belakang</h2>
    <p>
      Proses pengumpulan data universitas secara manual membutuhkan waktu yang lama
      dan rentan terhadap kesalahan. Informasi seperti nama institusi, lokasi,
      CRICOS code, serta daftar program studi sering tersebar di berbagai halaman website.
    </p>
    <p>
      Oleh karena itu, dikembangkan sebuah sistem scraping otomatis yang mampu
      mengekstraksi data tersebut secara konsisten dan terintegrasi ke dalam database.
    </p>
    <!-- SECTION -->
    <h2>Tujuan Pengembangan</h2>
    <ul>
      <li>Mengotomatisasi pengambilan data universitas Australia</li>
      <li>Menyediakan dataset terstruktur untuk analisis internal</li>
      <li>Mengurangi human error dalam pengolahan data</li>
      <li>Mendukung pengambilan keputusan berbasis data</li>
    </ul>
    <!-- IMAGE CONTENT -->
    <img src="{{ site.baseurl }}/assets/img/providers-flow.jpg" class="blog-img">
    <!-- SECTION -->
    <h2>Arsitektur Sistem</h2>
    <p>
      Sistem scraping ini dibangun menggunakan pendekatan pipeline yang terdiri dari
      beberapa tahap utama:
    </p>
    <ol>
      <li><strong>Data Fetching</strong> – Mengambil halaman website universitas</li>
      <li><strong>HTML Parsing</strong> – Menyaring elemen data yang relevan</li>
      <li><strong>Data Cleaning</strong> – Normalisasi dan validasi data</li>
      <li><strong>Database Storage</strong> – Penyimpanan ke MySQL</li>
    </ol>
    <!-- SECTION -->
    <h2>Teknologi yang Digunakan</h2>
    <ul>
      <li>Python (Requests, BeautifulSoup)</li>
      <li>MySQL Database</li>
      <li>Jupyter Notebook untuk eksplorasi data</li>
      <li>Git & GitHub untuk version control</li>
    </ul>
    <!-- SECTION -->
    <h2>Hasil dan Output</h2>
    <p>
      Output utama dari sistem ini adalah dataset universitas Australia yang telah
      terstruktur dengan baik dan siap digunakan untuk analisis lanjutan,
      visualisasi data, maupun integrasi ke sistem lain.
    </p>
    <!-- CLOSING -->
    <blockquote>
      Sistem ini menjadi fondasi penting dalam pengembangan pipeline data
      pendidikan internasional di Interlace Studies Bali.
    </blockquote>
  </article>

</div>
