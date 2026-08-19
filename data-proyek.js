/* =========================================================================
   DATA PROYEK — SATU-SATUNYA TEMPAT UNTUK MENGEDIT ISI PROYEK
   -------------------------------------------------------------------------
   File ini dipakai oleh dua halaman sekaligus:
     • index.html   → preview foto yang muncul saat kursor diarahkan ke proyek
     • proyek.html  → halaman detail per proyek (proyek.html?id=asr, dst.)

   CARA MENAMBAHKAN FOTO:
     1. Simpan foto/screenshot di folder "gambar" (folder ini sudah ada).
     2. Ukuran ideal: JPG atau PNG, lebar ± 1600px.
     3. Tulis nama filenya di array "foto" di bawah, contoh:
          foto: [
            { src: "gambar/asr-1.png", caption: "Kurva loss pelatihan" },
            { src: "gambar/asr-2.png", caption: "Contoh hasil transkripsi" }
          ]
     Selama array "foto" masih kosong, halaman otomatis menampilkan slide
     placeholder supaya animasi slide-nya tetap kelihatan.
   ========================================================================= */

window.DATA_PROYEK = [
  {
    id: "asr",
    nomor: "01",
    kategori: "Riset / Tugas Akhir",
    judul: "Riset ASR: BiGRU vs BiLSTM pada CRNN-CTC",
    judulPendek: "Riset ASR: BiGRU vs BiLSTM",
    tagline: "Membandingkan dua layer rekuren dua arah untuk pengenalan ucapan Bahasa Indonesia.",
    ringkas: "Tugas akhir yang membandingkan dua varian layer rekuren dua arah untuk pengenalan ucapan Bahasa Indonesia, dilatih pada 30.256 data dari korpus Mozilla Common Voice. BiLSTM unggul dengan WER 26,36% dan CER 6,59%.",
    tagsRingkas: "Python · PyTorch",
    tags: ["Python", "PyTorch", "Deep Learning", "CRNN", "CTC Loss", "Mel-Spectrogram"],
    meta: [
      { label: "Tahun", value: "2025 — 2026" },
      { label: "Peran", value: "Peneliti tunggal" },
      { label: "Konteks", value: "Tugas Akhir S1 Informatika, Universitas Al Azhar Indonesia" }
    ],
    deskripsi: [
      "Riset ini membandingkan kinerja dua varian layer rekuren dua arah — BiGRU dan BiLSTM — di dalam arsitektur hibrida Convolutional Recurrent Neural Network (CRNN) untuk pengenalan ucapan otomatis Bahasa Indonesia. Sinyal audio diubah menjadi Mel-Spectrogram, lalu dilatih end-to-end memakai fungsi kerugian Connectionist Temporal Classification (CTC) sehingga model bisa belajar tanpa penyelarasan manual antara audio dan teks.",
      "Data berasal dari korpus publik Mozilla Common Voice Bahasa Indonesia. Eksperimen dijalankan bertahap agar setiap perubahan bisa diukur pengaruhnya secara terpisah: mulai dari baseline, lalu penambahan regularisasi dan augmentasi, hingga perluasan jumlah data latih."
    ],
    sorotan: [
      "Tiga tahap eksperimen: baseline (12.138 data) → regularisasi &amp; augmentasi → perluasan dataset (30.256 data)",
      "Evaluasi memakai dua metrik standar ASR: Word Error Rate (WER) dan Character Error Rate (CER)",
      "Pengujian ulang dengan tiga seed acak (7, 42, 2025) untuk memastikan hasil bukan kebetulan",
      "Selisih WER antar kedua model terbukti signifikan secara statistik lewat uji paired bootstrap",
      "Perluasan dataset menjadi faktor paling dominan terhadap akurasi — lebih besar pengaruhnya dibanding pemilihan jenis layer",
      "BiGRU melatih sekitar 11% lebih cepat, jadi tetap relevan saat waktu komputasi jadi pertimbangan"
    ],
    angka: [
      { nilai: "26,36%", label: "WER BiLSTM", nota: "hasil terbaik" },
      { nilai: "6,59%", label: "CER BiLSTM", nota: "hasil terbaik" },
      { nilai: "28,13%", label: "WER BiGRU", nota: "pembanding" },
      { nilai: "30.256", label: "Data latih", nota: "Mozilla Common Voice" }
    ],
    // Contoh: { src: "gambar/asr-arsitektur.png", caption: "Diagram arsitektur CRNN-CTC" }
    foto: [],
    tautan: [
      { label: "Baca laporan lengkap (PDF)", href: "Laporan-Tugas-Akhir-Trecya-Dewi-Kusumaningrum.pdf" },
      { label: "Repo GitHub", href: "https://github.com/Trecyadw/indonesian-asr-crnn-ctc" },
      { label: "Artikel jurnal", href: "", segera: true }
    ]
  },

  {
    id: "nr-order",
    nomor: "02",
    kategori: "Proyek Freelance",
    judul: "NR Order System",
    judulPendek: "NR Order System",
    tagline: "Sistem pemesanan barang untuk server roleplay GTA V (FiveM) Night Runner Car Club.",
    ringkas: "Sistem pemesanan dan marketplace untuk server roleplay GTA V (FiveM): katalog barang dengan batas stok, pelacakan status pesanan, dan panel admin untuk kelola produk, pesanan, serta peran pengguna.",
    tagsRingkas: "Next.js · TypeScript · Node.js",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "SQL", "Autentikasi", "Panel Admin"],
    meta: [
      { label: "Tahun", value: "2025 — 2026" },
      { label: "Peran", value: "Desain &amp; pengembangan (full-stack)" },
      { label: "Konteks", value: "Pesanan klien — server roleplay GTA V (FiveM), Night Runner Car Club" }
    ],
    deskripsi: [
      "NR Order System adalah sistem pemesanan barang untuk Night Runner Car Club, sebuah komunitas di server roleplay GTA V (FiveM). Sebelumnya pesanan anggota dicatat manual dan berserakan di chat, sehingga admin sulit tahu siapa memesan apa dan mana yang sudah dikerjakan. Sistem ini memindahkan alur itu ke web: anggota mendaftar, memilih barang dari katalog, dan memantau sendiri status pesanannya.",
      "Aturan main komunitas ikut dikodekan ke dalam sistem, bukan ditulis sebagai catatan yang mudah diabaikan: harga sudah termasuk pajak 30%, tiap pesanan membutuhkan 200 Metal Scrap, dan setiap barang punya batas jumlah pesanan sendiri. Pembayaran tetap diselesaikan di dalam game, jadi tugas web ini adalah mencatat pesanan dan menjaga statusnya tetap jelas untuk kedua pihak.",
      "Proyeknya disusun dalam tiga bagian terpisah — client, server, dan database — supaya tiap bagian bisa dikembangkan tanpa mengganggu yang lain. Sisi tampilan memakai Next.js dengan TypeScript dan Tailwind CSS, sisi belakang memakai Node.js dengan basis data SQL."
    ],
    sorotan: [
      "Tiga peran pengguna dengan hak akses berbeda: member, staff, dan admin",
      "Katalog produk berkategori (senjata, amunisi, rompi, perlengkapan) lengkap dengan stok dan batas maksimum pesanan per barang",
      "Status pesanan bertingkat — pending, processed, completed — yang bisa dipantau anggota tanpa perlu bertanya ke admin",
      "Panel admin untuk menambah, mengubah, menonaktifkan, dan me-restock produk tanpa menyentuh basis data",
      "Rekap admin per pengguna: jumlah pesanan, jumlah item, total belanja, dan berapa yang masih tertahan di tiap status",
      "Manajemen akun: ubah peran pengguna dan nonaktifkan akun, dengan pencarian berdasarkan username, nama IC, atau peran",
      "Aturan komunitas ditegakkan sistem: pajak 30% sudah menyatu di harga dan tiap barang punya limit sendiri"
    ],
    angka: [
      { nilai: "3", label: "Peran pengguna", nota: "member · staff · admin" },
      { nilai: "4", label: "Kategori produk", nota: "senjata, amunisi, rompi, perlengkapan" },
      { nilai: "3", label: "Tahap status pesanan", nota: "pending → processed → completed" },
      { nilai: "30%", label: "Pajak", nota: "otomatis menyatu di harga" }
    ],
    foto: [
      { src: "gambar/nr-order-1-beranda.jpg", caption: "Halaman depan — alur pemesanan dalam empat langkah" },
      { src: "gambar/nr-order-2-signin.jpg", caption: "Halaman masuk anggota" },
      { src: "gambar/nr-order-3-produk.jpg", caption: "Katalog produk dengan stok dan batas pesanan" },
      { src: "gambar/nr-order-4-admin-produk.jpg", caption: "Panel admin — tambah produk dan kelola stok" },
      { src: "gambar/nr-order-5-admin-orders.jpg", caption: "Rekap pesanan admin per pengguna" },
      { src: "gambar/nr-order-6-admin-users.jpg", caption: "Manajemen akun dan peran pengguna" }
    ],
    tautan: [
      { label: "Repo GitHub", href: "", segera: true },
      { label: "Live demo", href: "", segera: true }
    ]
  },

  {
    id: "flappy-ayang",
    nomor: "03",
    kategori: "Proyek Freelance",
    judul: "Flappy Ayang — Mini Game",
    judulPendek: "Flappy Ayang",
    tagline: "Game terbang bergaya piksel yang rintangannya diberi nama masalah hubungan jarak jauh.",
    ringkas: "Mini game bergaya piksel dengan satu tombol: terbang menembus rintangan bernama LDR, Overthink, dan Waktu untuk mengumpulkan 23 hati.",
    tagsRingkas: "Game Design · HTML5 Canvas",
    tags: ["Game Design", "HTML5 Canvas", "JavaScript", "Pixel Art", "Web Audio"],
    meta: [
      { label: "Tahun", value: "2025" },
      { label: "Peran", value: "Konsep, desain visual, &amp; pengembangan" },
      { label: "Konteks", value: "Mini game pesanan klien" }
    ],
    deskripsi: [
      "Flappy Ayang adalah mini game satu tombol bergaya piksel yang dimainkan langsung dari browser. Pemain menerbangkan karakter melewati celah antar rintangan, dan tiap rintangan sengaja diberi nama masalah yang khas hubungan jarak jauh — LDR, Overthink, dan Waktu — sehingga tema ceritanya terbaca langsung dari papan permainannya sendiri, tanpa perlu teks pengantar.",
      "Tujuan permainan bukan skor tak terbatas, melainkan mengumpulkan 23 hati. Angka itu membuat permainan punya garis akhir yang jelas, jadi pemain tahu kapan ia menang. Kontrolnya disamakan untuk semua perangkat: ketuk layar di ponsel, tombol spasi atau panah atas di komputer."
    ],
    sorotan: [
      "Tiga keadaan layar yang dirancang terpisah: layar mulai, permainan berjalan, dan layar gagal dengan tombol coba lagi",
      "Rintangan diberi label LDR, Overthink, dan Waktu — tema cerita disampaikan lewat elemen permainan, bukan lewat teks",
      "Target 23 hati sebagai garis akhir, ditampilkan terus di pojok kiri atas",
      "Satu kontrol untuk semua perangkat: ketuk layar, spasi, atau panah atas",
      "Musik lofi latar dengan tombol jeda supaya pemain bisa mematikannya kapan saja",
      "Papan permainan berformat potret dan tetap utuh saat dibuka dari ponsel"
    ],
    angka: [],
    foto: [
      { src: "gambar/flappy-ayang-1-mulai.png", caption: "Layar mulai — aturan main dan tombol Mulai Terbang" },
      { src: "gambar/flappy-ayang-2-main.png", caption: "Permainan berjalan — rintangan Overthink dan hati yang harus diambil" },
      { src: "gambar/flappy-ayang-3-gameover.png", caption: "Layar gagal dengan tombol coba lagi" }
    ],
    tautan: [
      { label: "Mainkan demo", href: "", segera: true }
    ]
  },

  {
    id: "maze-ayang",
    nomor: "04",
    kategori: "Proyek Freelance",
    judul: "Maze Ayang — Mini Game Labirin",
    judulPendek: "Maze Ayang",
    tagline: "Labirin piksel serba merah muda: menyusuri jalan, memungut bunga, sampai bertemu di ujung.",
    ringkas: "Mini game labirin bergaya piksel — pemain menyusuri lorong, mengumpulkan bunga yang tersebar, dan berjalan menuju karakter yang menunggu di seberang.",
    tagsRingkas: "Game Design · Level Design",
    tags: ["Game Design", "Level Design", "HTML5 Canvas", "JavaScript", "Pixel Art", "Kontrol WASD"],
    meta: [
      { label: "Tahun", value: "2025" },
      { label: "Peran", value: "Konsep, desain level, &amp; pengembangan" },
      { label: "Konteks", value: "Mini game pesanan klien" }
    ],
    deskripsi: [
      "Maze Ayang adalah permainan labirin bergaya piksel dengan palet merah muda yang konsisten dari dinding sampai bingkai halaman. Pemain menggerakkan karakter menyusuri lorong, memungut bunga yang tersebar di beberapa titik, lalu menuju karakter pasangan yang menunggu di sisi seberang peta.",
      "Labirinnya dirancang manual, bukan diacak, supaya tiap jalan buntu punya alasan: ada cabang yang sengaja menggoda karena terlihat lebih pendek, dan ada bunga yang hanya bisa diambil kalau pemain mau memutar. Karakter digerakkan dengan tombol W, A, S, D, dan musik lofi latar bisa dijeda lewat tombol di atas papan."
    ],
    sorotan: [
      "Tata letak labirin dirancang manual supaya jalan buntu dan jalan memutar terasa disengaja",
      "Bunga tersebar sebagai alasan untuk menjelajah, bukan sekadar menuju garis akhir",
      "Satu palet merah muda dipakai konsisten dari dinding, bingkai, sampai latar halaman",
      "Digerakkan dengan tombol W, A, S, D — satu tekan, satu langkah",
      "Musik lofi latar dengan tombol jeda di atas papan permainan"
      /* Opsional: kalau ada lebih dari satu level, tulis jumlahnya di sini. */
    ],
    angka: [],
    foto: [
      { src: "gambar/maze-ayang-1-labirin.png", caption: "Papan labirin dengan bunga yang tersebar" }
      /* Tambahkan tangkapan layar lain di sini, misalnya layar mulai atau layar menang. */
    ],
    tautan: [
      { label: "Mainkan demo", href: "", segera: true }
    ]
  }
  ,

  {
    id: "portofolio",
    nomor: "05",
    kategori: "Proyek Personal",
    judul: "Website Portofolio Ini",
    judulPendek: "Website Portofolio",
    tagline: "Dibangun sendiri dari nol tanpa framework — termasuk halaman yang sedang kamu baca ini.",
    ringkas: "Website portofolio yang sedang kamu buka: dibangun dari nol tanpa framework, dengan isi seluruh proyek terpusat di satu berkas data.",
    tagsRingkas: "HTML · CSS · JavaScript",
    tags: ["HTML", "CSS", "JavaScript", "Tanpa Framework", "Desain Responsif", "Aksesibilitas"],
    meta: [
      { label: "Tahun", value: "2026" },
      { label: "Peran", value: "Desain &amp; pengembangan" },
      { label: "Konteks", value: "Proyek pribadi" }
    ],
    deskripsi: [
      "Website ini saya rancang dan bangun sendiri dari nol, tanpa memakai framework atau templat jadi — hanya HTML, CSS, dan JavaScript langsung. Pilihan itu disengaja: untuk situs sekecil ini, framework justru menambah berat muat tanpa memberi keuntungan berarti, dan tanpa lapisan itu saya bisa mengatur sendiri tiap detail tampilannya.",
      "Susunannya dibuat supaya mudah dirawat. Seluruh isi proyek — judul, deskripsi, sorotan, foto, dan tautan — terkumpul di satu berkas data. Menambah proyek baru cukup menulis satu entri di sana, dan halaman detailnya langsung ada tanpa perlu membuat file HTML baru, karena satu halaman template melayani semua proyek lewat parameter di alamat."
    ],
    sorotan: [
      "Dibangun tanpa framework — HTML, CSS, dan JavaScript langsung, tanpa proses build",
      "Isi seluruh proyek terpusat di satu berkas data; satu halaman template melayani semua halaman detail",
      "Pratinjau foto mengikuti gerak kursor dan berganti sendiri saat baris proyek disentuh kursor",
      "Di layar sentuh, pratinjau itu otomatis berganti jadi slider di dalam baris — bukan fitur yang mati begitu saja",
      "Menghormati setelan prefers-reduced-motion: animasi dimatikan bagi pengguna yang menyetelnya",
      "Gambar dipilih formatnya per kebutuhan — JPEG untuk tangkapan layar bergradasi gelap, PNG palet untuk ilustrasi piksel",
      "Alamat yang salah tidak jadi jalan buntu: halaman menampilkan daftar proyek yang tersedia"
    ],
    angka: [],
    foto: [
      { src: "gambar/portofolio-1-hero.jpg", caption: "Bagian pembuka dengan ilustrasi piksel" },
      { src: "gambar/portofolio-2-tentang.jpg", caption: "Bagian Tentang dan daftar organisasi kampus" },
      { src: "gambar/portofolio-3-proyek.jpg", caption: "Daftar proyek dengan kartu hasil riset ASR" },
      { src: "gambar/portofolio-4-kemampuan.jpg", caption: "Bagian Kemampuan dan Pengalaman" }
      /* Boleh ditambah tangkapan layar halaman detail proyek kalau ada. */
    ],
    tautan: [
      { label: "Repo GitHub", href: "https://github.com/Trecyadw/trecyadw.github.io" }
    ]
  }
];
