---
title: "Magang Interlace Studies Bali"
layout: default
---

# Magang Interlace Studies Bali – Gung Ajus
Selamat datang di blog perjalanan magang saya!  
Saya **Anak Agung Bagus Jelantik Kusuma**, mahasiswa **Ilmu Komputer Universitas Pendidikan Ganesha (Undiksha)**.  

Selama magang di **Interlace Studies Bali**, saya berfokus pada pengembangan sistem data, otomasi scraping, data cleaning, serta perapian struktur database untuk mendukung proses operasional Education & Migration Consultancy.

Blog ini saya buat sebagai dokumentasi perjalanan, proses belajar, hasil kerja, dan perkembangan keterampilan saya selama magang.

---

## 🌏 **Tentang Peran Magang Saya**
Saya berkontribusi dalam project data engineering dan otomasi internal, utamanya pada:

### 🔎 1. **Web Scraping & Data Extraction**
Mengambil data ratusan program studi dari universitas dan college di Australia, seperti:
- Australian Catholic University (ACU)
- University of Newcastle
- Torrens University
- Federation University  
dan provider lainnya.

Data yang dikumpulkan meliputi:
- Course description  
- Entry requirements  
- Tuition fee  
- CRICOS code  
- Total duration  
- Apply form link  
- Campus availability  
dan elemen penting lainnya.

---

### 🧹 2. **Data Cleaning & Normalisasi HTML**
Saya mengembangkan fungsi Python untuk:
- Merapikan tag HTML yang berantakan  
- Menghapus whitespace yang tidak perlu  
- Menstandarkan struktur sebelum dimasukkan ke database  
- Menangani kasus data yang tidak konsisten antar provider

---

### 🛠 3. **SQL Automation**
Membuat script otomatis untuk menghasilkan:
- `UPDATE courses SET ... WHERE cricos_course_code = '...'`
- `INSERT INTO courses ...` saat provider baru ditambahkan
- Sinkronisasi CRICOS dengan nama course menggunakan fuzzy matching

Automation ini menghemat **±80% waktu manual staff** dalam memasukkan data.

---

### 📊 4. **Data Analysis & Reporting**
Saya juga melakukan:
- Validasi data  
- Perhitungan kondisi boolean (misal: Entry Requirements True/False)  
- Filtering dan pencarian data berbasis nama program  
- Analisis data di Google Sheets

---

### 🤖 5. **Eksperimen Automation Agent**
Membuat pipeline mini-agent untuk:
- Membaca HTML course  
- Membersihkan konten  
- Menyusun ulang format deskripsi  
- Menghasilkan SQL secara otomatis  

Eksperimen ini bertujuan mempercepat proses standar input data bagi tim Interlace.

---

## 🚀 **Skill yang Saya Kembangkan Selama Magang**
### **Hard Skills**
- Python (Requests, BeautifulSoup, Pandas)
- Web Scraping
- Data Cleaning & Normalization
- SQL (UPDATE/INSERT automation)
- Regex untuk ekstraksi pola text
- Integrasi data dari multi-provider
- Git & GitHub workflow
- Google Sheets data operations

### **Soft Skills**
- Problem solving di situasi real-world
- Manajemen waktu & task prioritization
- Kolaborasi dengan tim internasional (agency)
- Dokumentasi teknis yang jelas dan terstruktur
- Konsistensi dalam quality control data

---
# 🎨 Tech Profile

## 🛠 Tech Stack  
<p align="left">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Web%20Scraping-00ACC1?style=for-the-badge&logo=webflow&logoColor=white" />
  <img src="https://img.shields.io/badge/BeautifulSoup-5C6BC0?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Regex-F44336?style=for-the-badge" />
  <img src="https://img.shields.io/badge/SQL-00618A?style=for-the-badge&logo=database&logoColor=white" />
  <img src="https://img.shields.io/badge/Data%20Cleaning-4CAF50?style=for-the-badge" />
  <img src="https://img.shields.io/badge/GitHub%20Workflow-24292F?style=for-the-badge&logo=github&logoColor=white" />
</p>

## 🌱 Soft Skills  
<p align="left">
  <img src="https://img.shields.io/badge/Problem%20Solving-8E24AA?style=flat-square" />
  <img src="https://img.shields.io/badge/Attention%20to%20Detail-1976D2?style=flat-square" />
  <img src="https://img.shields.io/badge/Documentation-43A047?style=flat-square" />
  <img src="https://img.shields.io/badge/Team%20Collaboration-EC407A?style=flat-square" />
</p>



## ⭐ **Apa yang Membuat Project Ini Menarik?**
- Data dari tiap universitas **tidak seragam**, sehingga saya harus membuat sistem yang fleksibel dan tahan error.
- Halaman provider sering berubah struktur — ini memberi saya pengalaman nyata menghadapi real scraping challenges.
- Saya belajar bagaimana data mentah diubah menjadi format standar untuk operasional sebuah perusahaan edukasi internasional.
- Saya melihat dampak langsung pekerjaan saya pada efisiensi tim Interlace.

---

## 📚 **Isi Blog Ini**
Blog ini berisi:
1. **Jurnal Mingguan** – apa yang saya pelajari dan capai setiap minggu  
2. **Highlight Project** – pembahasan mendalam scraping, SQL automation, dan data cleaning  
3. **Refleksi Akhir** – insight, tantangan, dan pencapaian utama selama magang  
4. **Dokumentasi Teknis** – snippet kode, contoh output SQL, dan alur proyek

---

## 👉 Arahkan ke Jurnal Magang
Silakan baca jurnal mingguan saya di sini:

📘 **[Jurnal Magang Interlace Studies Bali](./journal.md)**  
Tempat saya menuliskan proses belajar, pencapaian, dan tantangan dari minggu ke minggu.

---

---

---

# 🚀 Highlight Projects

Berikut adalah rangkaian proyek yang saya bangun selama magang, berkaitan dengan data scraping, data engineering, visualisasi data, dan otomasi proses pekerjaan.

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-decoration: none;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.project-thumb {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.project-body {
  padding: 15px;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1a202c;
}

.project-desc {
  font-size: 0.9rem;
  color: #4a5568;
  margin-top: 6px;
}
</style>

<div class="project-grid">

<!-- PROVIDERS SCRAPING -->
<a href="/projects/providers-scraping.md" class="project-card">
  <img src="/assets/img/providers-thumb.jpg" class="project-thumb" alt="Providers Scraping">
  <div class="project-body">
    <div class="project-title">Providers Scraping System</div>
    <div class="project-desc">Scraping data universitas & college (Australia) mencakup description, CRICOS, tuition fee, duration, dan entry requirements.</div>
  </div>
</a>

<!-- JOB PORTAL SCRAPING -->
<a href="/projects/scraping-job-portal.md" class="project-card">
  <img src="/assets/img/jobportal-thumb.jpg" class="project-thumb" alt="Job Portal Scraping">
  <div class="project-body">
    <div class="project-title">Job Portal Scraping (IT Job Market)</div>
    <div class="project-desc">Mengambil lowongan IT dari berbagai portal pekerjaan & menyiapkan data untuk analisis demand pasar teknologi.</div>
  </div>
</a>

<!-- ANZSCO SCRAPING -->
<a href="/projects/anzsco-scraping.md" class="project-card">
  <img src="/assets/img/anzsco-thumb.jpg" class="project-thumb" alt="ANZSCO Scraping">
  <div class="project-body">
    <div class="project-title">ANZSCO Scraping Automation</div>
    <div class="project-desc">Scraping klasifikasi pekerjaan ANZSCO untuk memetakan job requirements berdasarkan standar Australia.</div>
  </div>
</a>

<!-- ANZSCO VISUALIZATION -->
<a href="/projects/anzsco-viz.md" class="project-card">
  <img src="/assets/img/anzsco-viz-thumb.jpg" class="project-thumb" alt="ANZSCO Visualization">
  <div class="project-body">
    <div class="project-title">ANZSCO Data Visualization</div>
    <div class="project-desc">Visualisasi hasil scraping ANZSCO menggunakan grafik & mapping kategori pekerjaan.</div>
  </div>
</a>

<!-- IT JOBS VISUALIZATION -->
<a href="/projects/itjobs-viz.md" class="project-card">
  <img src="/assets/img/itjobs-viz-thumb.jpg" class="project-thumb" alt="IT Jobs Visualization">
  <div class="project-body">
    <div class="project-title">IT Job Demand Visualization</div>
    <div class="project-desc">Analisis visual tren permintaan pekerjaan IT berdasarkan data lowongan dari portal-portal besar.</div>
  </div>
</a>

</div>

---



Terima kasih sudah berkunjung — semoga blog ini membantu memberikan gambaran tentang perjalanan magang saya dan bisa jadi referensi untuk mahasiswa lain yang ingin belajar di bidang data engineering & automation!
