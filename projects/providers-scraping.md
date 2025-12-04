---
title: "Providers Scraping System"
layout: default
---

<!-- ========================================================== -->
<!--                SLIDESHOW HEADER (SAMA DENGAN INDEX)        -->
<!-- ========================================================== -->

<style>
.header-wrapper {
  margin-top: 70px;
}

.slideshow-container {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 12px;
}

.slide-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  animation: fadeSlide 35s infinite;
}

/* Delay for 7 photos */
.slide-img:nth-child(1) { animation-delay: 0s; }
.slide-img:nth-child(2) { animation-delay: 5s; }
.slide-img:nth-child(3) { animation-delay: 10s; }
.slide-img:nth-child(4) { animation-delay: 15s; }
.slide-img:nth-child(5) { animation-delay: 20s; }
.slide-img:nth-child(6) { animation-delay: 25s; }
.slide-img:nth-child(7) { animation-delay: 30s; }

@keyframes fadeSlide {
  0%   { opacity: 0; }
  10%  { opacity: 1; }
  25%  { opacity: 1; }
  35%  { opacity: 0; }
  100% { opacity: 0; }
}

.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 34px;
  font-weight: 700;
  text-shadow: 0px 0px 12px rgba(0,0,0,0.7);
  text-align: center;
  z-index: 5;
}
</style>


<br><br>

# 🧩 Providers Scraping System  
*Scraping data universitas & college Australia untuk kebutuhan database Interlace Studies Bali.*

<img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" style="width:100%; border-radius:12px; margin-top:12px;">

---

# 📌 **Ringkasan Project**
Pada project ini saya membangun sistem scraping otomatis untuk mengambil data kursus dari berbagai penyedia pendidikan di Australia, seperti:

- Australian Catholic University  
- University of Newcastle  
- Federation University  
- Torrens University  
- Kings Own Institute  
- Dan puluhan provider lainnya  

Tujuan utamanya adalah **mengambil data course secara lengkap & konsisten**, kemudian memasukkannya ke database Interlace.

---

# 🔍 **Data yang Diambil**
Setiap halaman course diproses untuk mengekstrak:

- Deskripsi Program (HTML clean)
- CRICOS code
- Tuition fee (offshore)
- Total duration
- Entry requirements
- Apply form URL
- Campus availability  
- URL halaman course

Semua data kemudian dibersihkan dan distandardisasi.

---

# 🛠 **Teknologi yang Digunakan**
- **Python**  
- **Requests + BeautifulSoup**  
- **Regex HTML Cleaning**  
- **Custom Extractor per Provider**  
- **SQL Automation (INSERT & UPDATE)**  
- **Retry Logic untuk Error 500/Timeout**

---

# ⚙️ **Arsitektur Scraping**
