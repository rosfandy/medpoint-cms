# Medpoint System - Frontend (CMS)

## Introduction

**Medpoint System** adalah sebuah platform yang memungkinkan pengguna untuk melakukan berbagai jenis reservasi medis online, termasuk konsultasi dokter, tes laboratorium, tindakan medis, dan vaksinasi. Sistem ini memudahkan pengguna dengan proses reservasi yang lebih efisien sehingga tidak perlu melakukan pendaftaran ulang secara offline saat menjalani tindakan medis.

### Fitur Utama

- **Reservasi Medis Online:** Pengguna dapat melakukan reservasi untuk konsultasi dokter, tes laboratorium, tindakan medis, dan vaksinasi.
- **Pencarian Dokter dan Fasilitas Kesehatan:** Memudahkan pengguna untuk menemukan dokter dan fasilitas kesehatan terdekat.
- **Penjadwalan Janji Temu:** Pengguna dapat menjadwalkan janji temu dengan dokter atau tindakan medis.

## Deskripsi Sistem

**Frontend** dari **Medpoint System** (CMS) dikembangkan menggunakan bahasa pemrograman **TypeScript** dan framework **React JS**. Frontend ini bertanggung jawab untuk menyediakan antarmuka pengguna yang interaktif dan responsif, memungkinkan pengguna untuk mengelola reservasi medis, data dokter, dan informasi pengguna dengan mudah. Sistem ini memudahkan admin dan super admin dalam mengelola data master, jadwal, dan pembayaran.

## Teknologi yang Digunakan

<p align="center">
<a href="https://www.typescriptlang.org/">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<a href="https://react.dev/">
<img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge">
</a>
<a href="https://vite.dev/">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"></a>
<a href="https://tailwindcss.com/">
<img src="https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC">
</a>
<a href="https://www.postgresql.org/">
<img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white">
<a href="https://supabase.com/">
<img src="https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge">
</a>
</p>

- **Bahasa Pemrograman:** Typescript
- **Framework:**
  - React
  - Vite
  - TailwindCSS
- **Database:** PostgreSql + Supabase

## Dokumentasi ViteJS

Untuk informasi lebih lanjut tentang framework Vite, dapat mengunjungi [Dokumentasi ViteJS](https://vite.dev/).

## Folder Structure

```javascript
├── public                      # Folder contain assets
│   ├── icon.svg
│   └── ...
│
├── src
│   ├── components              # Folder contain components
│   │   ├── form                # Example components
│   │   │   ├── LoginForm.tsx
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── data
│   │  ├── repositories
│   │  │  └── supabaseClient.ts  # Example repositories
│   │  └── services
│   │     └── api_auth.ts        # Example service
│   │
│   ├── pages                    # Folder contain pages
│   │   ├── home
│   │   │   └── HomePage.tsx     # Example page
│   │   └── ...
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── ...
│
├── .env
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── ...
```
