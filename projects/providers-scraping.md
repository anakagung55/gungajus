---
title: "Providers Scraping System"
layout: default
---

# 🏫 Providers Scraping System
> _Scraping sistematis untuk mengambil data course dari universitas & college di Australia, termasuk ACU, University of Newcastle, Torrens, Federation, dan lainnya._

Proyek ini merupakan bagian inti dari magang saya di **Interlace Studies Bali**.  
Tujuannya adalah membangun sistem scraping yang mampu mengekstraksi data course secara konsisten dari berbagai provider pendidikan Australia, meskipun tiap website memiliki struktur HTML yang berbeda.

---

# 🎯 **Objective**
- Mengambil data course secara otomatis dari provider Australia.
- Menstandarkan data agar siap disimpan ke database Interlace.
- Mengurangi input manual dan mempercepat proses operasional tim.
- Membuat pipeline yang fleksibel agar bisa digunakan pada banyak provider.

---

# 📌 **Data yang Diekstraksi**
Sistem scraping ini mengambil berbagai elemen penting, termasuk:

- 📝 Course Description  
- 🎓 Entry Requirements  
- 🏷 CRICOS Code  
- 💰 Tuition Fee (Offshore)  
- ⏳ Total Duration  
- 📍 Campuses / Study Mode  
- 🔗 Apply Form URL  

Semua data kemudian dibersihkan dan dipadukan dalam struktur yang konsisten.

---

# 🧩 **Arsitektur Pipeline Scraping**

Provider Website
│
▼
HTML Fetching (Requests + Retry Logic)
│
▼
HTML Parser (BeautifulSoup)
│
▼
Content Extractor (Description, Entry Req, Duration, Tuition, CRICOS)
│
▼
HTML Cleaner (Regex Normalization)
│
▼
SQL Generator (UPDATE / INSERT)
│
▼
MySQL Database (courses)


---

# 🛠 **Tools & Libraries**
- **Python**
- **Requests** (HTTP fetching)
- **BeautifulSoup4** (HTML parsing)
- **Regex / re** (text cleaning)
- **Pandas** (dataset merge & cleaning)
- **MySQL** (final data storage)
- **GitHub** (versioning)

---



