---
title: "Jurnal Magang"
layout: default
---

# Jurnal Magang Interlace Studies Bali

## Minggu 1 – Pengenalan & Setup
- Pengenalan lingkungan kerja, role, dan ekspektasi magang.
- Setup environment: Python, VSCode, GitHub, akses database dan file course.
- Memahami struktur data: tabel `courses`, `provider_institution`, kolom `course_description`, `entry_requirements`, dll.

## Minggu 2 – Scraping Course ACU
- Mempelajari struktur website ACU (Study Area, program, course).
- Menjalankan script untuk mengambil list Study Area.
- Mengambil link course dari file `Courses - ACU.txt`.
- Mulai menulis script Python untuk:
  - Request halaman course
  - Ambil bagian `Description`, `Entry Requirements`, dan informasi penting lainnya.

## Minggu 3 – Cleaning HTML & Generate SQL
- Membuat fungsi `clean_html()` untuk merapikan tag HTML.
- Menambah fungsi `extract_number()` untuk ambil angka dari tuition fee.
- Generate SQL otomatis:
  - `UPDATE courses SET course_description = '...', entry_requirements = '...' WHERE cricos_course_code = '...';`

## Minggu 4 – Integrasi dengan CRICOS & Provider Lain
- Menggabungkan data course dengan data CRICOS berdasarkan *course_name*.
- Menangani kasus:
  - Nama course mirip tapi tidak sama persis.
  - Course tanpa CRICOS.
- Scraping provider lain (misalnya University of Newcastle, Torrens).

*(Kamu bisa lanjut isi Minggu 5, 6, dst sesuai kenyataan)*

