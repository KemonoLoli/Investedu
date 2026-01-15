/* =========================================================
   INVESTASI FANTASY JOURNEY — MAIN.JS (FULL)
   8 Realms + Epilog | HTML/CSS/Bootstrap + Vanilla JS
   ========================================================= */

const realms = [
  // =======================================================
  // PROLOG — Awal Perjalanan
  // =======================================================
  {
    id: 0,
    name: "Prolog: Awal Perjalanan",
    bg: "assets/backgrounds/bg_prolog.webp",
    pages: [
      {
        type: "prolog",
        img: "assets/backgrounds/bg_prolog.webp",
        text: `Di antara dunia nyata dan dunia tak kasatmata,<br>
terbentang dimensi bernama <b>Celestial Dungeon</b>.`,
        button: "Lanjut"
      },
      {
        type: "prolog",
        img: "assets/backgrounds/bg_prolog.webp",
        text: `Tempat seluruh pengetahuan tentang investasi<br>
mewujud menjadi kekuatan yang dapat disentuh.`,
        button: "Lanjut"
      },
      {
        type: "prolog",
        img: "assets/backgrounds/bg_prolog.webp",
        text: `Dalam kekacauan yang mulai bangkit,<br>
secercah cahaya bernama <b>Lumi</b> memanggilmu.`,
        button: "Lanjut"
      },
      {
        type: "prolog",
        img: "assets/backgrounds/bg_prolog.webp",
        text: `<b>“Penjelajah… langkahmu dimulai di Sanctuary Gate.”</b>`,
        button: "Mulai Perjalanan"
      }
    ]
  },

  // =======================================================
  // REALM 1 — Sanctuary Gate (Tabungan & Deposito)
  // =======================================================
  {
    id: 1,
    name: "Sanctuary Gate",
    character: "assets/characters/realm1_lumi.webp",
    bg: "assets/backgrounds/bg_realm-1.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e1.webp",
        text: `Kamu tiba di Sanctuary Gate, dunia paling damai.<br>
              Udara di sini terasa hangat dan menenangkan.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e1.webp",
        text: `Guardian Lumi, makhluk cahaya kecil, menyapa:<br>
              “Di sini, kita belajar tempat paling aman untuk energimu.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e2.webp",
        text: `Lumi mengangkat tongkatnya. Simbol muncul:<br>
              <b>Tabungan, Giro, Deposito.</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e2.webp",
        text: `“Tempat ini rumah bagi Energy Crystals yang stabil.<br>
              Nilainya tumbuh pelan, tapi jarang menurun.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e2.webp",
        text: `“Seperti tabungan dan deposito di dunia manusia—<br>
              risiko rendah, stabil, dan aman.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e3.webp",
        text: `Muncul kristal biru kehijauan.<br>
              “Jika ada masalah, <b>LPS Shield</b> akan melindungimu.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e3.webp",
        text: `“Inilah mengapa Sanctuary Gate adalah langkah awal<br>
              sebelum menjelajahi realm lainnya.”`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm1/realm-1_r.webp",
        text:
          "Instrumen mana yang paling aman dan dijamin oleh LPS Shield?",
        choices: [
          { label: "Saham Blue-chip", correct: false },
          { label: "Deposito Bank", correct: true },
          { label: "Crypto Legal", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm1/realm-1_c.webp",
        text: `Lumi tersenyum lebar.<br>
              “Betul! Deposito Bank adalah crystal paling stabil.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm1/realm-1_w.webp",
        text: `Lumi menatapmu penuh pengertian.<br>
              “Hmm… jawabannya belum tepat. Ayo coba lagi.”`
      }
    ]
  },

  // =======================================================
  // REALM 2 — Citadel of Bonds (Obligasi)
  // =======================================================
  {
    id: 2,
    name: "Citadel of Bonds",
    character: "assets/characters/realm2_bond-sentinel.webp",
    bg: "assets/backgrounds/bg_realm-2.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e1.webp",
        text: `Kamu tiba di Citadel of Bonds, istana megah tempat<br>
              para penguasa menjaga <b>Janji Energi</b>.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e1.webp",
        text: `Seorang Bond Sentinel muncul dengan perisai bercahaya.<br>
              “Di sini, kita belajar investasi berbasis janji.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e2.webp",
        text: `Bond Sentinel mengetuk lantai—DONG!<br>
              Dua kristal besar melayang di tengah ruangan.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e2.webp",
        text: `“Obligasi adalah janji membayar kembali energi<br>
              dengan imbal hasil,” jelasnya.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e2.webp",
        text: `Kristal Emas: <b>SBN (Obligasi Pemerintah)</b>.<br>
              Risiko rendah karena dijamin negara.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e2.webp",
        text: `Kristal Biru: <b>Obligasi Korporasi</b>.<br>
              Imbal hasil lebih tinggi, tapi tergantung kekuatan perusahaan.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e3.webp",
        text: `Kalian turun ke ruang Stability Core.<br>
              “Risiko obligasi bergantung pada si pembuat janji.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e3.webp",
        text: `Negara → Stabil (Hijau).<br>
              Perusahaan Kuat → Stabil berdenyut (Kuning).<br>
              Perusahaan Lemah → Bergetar keras (Merah).`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm2/realm-2_r.webp",
        text: `“Pecahkan Riddle of the Bond Oath.<br>
              Mana yang obligasinya paling aman karena dijamin negara?”`,
        choices: [
          { label: "SBN (Obligasi Pemerintah)", correct: true },
          { label: "Obligasi Korporasi", correct: false },
          { label: "Crypto Token", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm2/realm-2_c.webp",
        text: `Sentinel tersenyum bangga.<br>
              “Betul. Janji negara adalah yang paling kuat.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm2/realm-2_w.webp",
        text: `Stability Core bergetar merah.<br>
              “Kurang tepat. Pahami lagi sumber kekuatan obligasi.”`
      }
    ]
  },

  // =======================================================
  // REALM 3 — Nexus of Funds (Reksa Dana)
  // =======================================================
  {
    id: 3,
    name: "Nexus of Funds",
    character: "assets/characters/realm3_fund-weaver.webp",
    bg: "assets/backgrounds/bg_realm-3.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e1.webp",
        text: `Selamat datang di <b>Nexus of Funds</b>.<br>
              Tempat energi berbagai sumber bertemu dan dikelola.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e1.webp",
        text: `<b>Fund Weaver</b> muncul membawa tongkat bercabang tiga.<br>
              “Di sini, energi digabung dan dikelola profesional.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e2.webp",
        text: `Empat lingkaran sihir terbentuk.<br>
              Inilah energi utama Reksa Dana:`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e2.webp",
        text: `<b>1. Pasar Uang</b> → Stabil, risiko sangat rendah.<br>
              <b>2. Pendapatan Tetap</b> → Mayoritas obligasi.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e2.webp",
        text: `<b>3. Campuran</b> → Gabungan saham & obligasi.<br>
              <b>4. Saham</b> → Potensi tinggi, risiko lebih besar.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e3.webp",
        text: `Di depan mesin <b>Prism Engine</b>, Weaver berkata:<br>
              “Reksa Dana dikelola oleh Fund Manager.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e3.webp",
        text: `“Mereka ahli mengatur strategi dan risiko.<br>
              Inilah kekuatan <b>Diversifikasi</b>.”`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm3/realm-3_r.webp",
        text: `“Manakah yang melambangkan kekuatan utama Reksa Dana?”`,
        choices: [
          { label: "Dikelola profesional & terdiversifikasi", correct: true },
          { label: "Dijamin pemerintah sepenuhnya", correct: false },
          { label: "Keuntungannya selalu tetap setiap hari", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm3/realm-3_c.webp",
        text: `“Tepat! Keunggulan utamanya adalah diversifikasi.<br>
              Portal berikutnya telah terbuka.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm3/realm-3_w.webp",
        text: `Aliran energi terputus.<br>
              “Salah. Ingat, kuncinya adalah diversifikasi. Coba lagi.”`
      }
    ]
  },

  // =======================================================
  // REALM 4 — Aurum Cavern (Emas)
  // =======================================================
  {
    id: 4,
    name: "Aurum Cavern",
    character: "assets/characters/realm4_aurum-guardian.webp",
    bg: "assets/backgrounds/bg_realm-4.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e1.webp",
        text: `Kamu masuk ke <b>Aurum Cavern</b>, gua purba nan hangat.<br>
              Tetesan cahaya emas jatuh seperti hujan.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e1.webp",
        text: `<b>Aurum Guardian</b>, golem emas, menyapamu.<br>
              “Di sini belajar aset yang bertahan melintasi zaman.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e2.webp",
        text: `Hologram emas batangan muncul.<br>
              “Emas adalah penyimpan nilai tepercaya ribuan tahun.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e2.webp",
        text: `“Harganya bisa naik turun jangka pendek,<br>
              tapi cenderung stabil dalam jangka panjang.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e3.webp",
        text: `Di ruang stabilisasi energi, Golem berkata:<br>
              “Saat dunia kacau, Penjelajah mencari perlindungan di sini.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e3.webp",
        text: `“Emas adalah <b>Safe Haven</b>.<br>
              Aset pelindung saat ketidakpastian melanda.”`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm4/realm-4_r.webp",
        text: `“Pahamilah denyut emas.<br>
              Mana sifat utama Safe Haven ini?”`,
        choices: [
          {
            label: "Stabil & dicari saat kondisi tak menentu",
            correct: true
          },
          { label: "Selalu untung tetap setiap hari", correct: false },
          { label: "Risiko ekstrem seperti spekulasi", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm4/realm-4_c.webp",
        text: `Golem menunduk hormat.<br>
              “Bijak. Emas adalah pelindung nilai, bukan pengejar laba instan.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm4/realm-4_w.webp",
        text: `Batu emas bergetar.<br>
              “Emas bukan alat spekulasi liar. Coba lagi.”`
      }
    ]
  },

  // =======================================================
  // REALM 5 — Equinox Spire (Saham)
  // =======================================================
  {
    id: 5,
    name: "Equinox Spire",
    character: "assets/characters/realm5_sky-broker.webp",
    bg: "assets/backgrounds/bg_realm-5.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e1.webp",
        text: `Kamu tiba di <b>Equinox Spire</b>, menara menembus awan.<br>
              Angin berputar kencang di sini.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e1.webp",
        text: `<b>Sky Broker</b> bersayap hologram menyambutmu.<br>
              “Ini dunia yang berubah cepat seperti pasar saham.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e2.webp",
        text: `Grafik holografik muncul.<br>
              “Di sini, kau memiliki bagian dari perusahaan.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e2.webp",
        text: `“Saat perusahaan tumbuh, energimu tumbuh.<br>
              Tapi harga bisa naik <b>dan</b> turun dengan cepat.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e3.webp",
        text: `Di balkon menara, ada dua platform energi.<br>
              <b>Platform Biru</b>: Perusahaan mapan (Blue-chip).`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e3.webp",
        text: `<b>Platform Merah</b>: Perusahaan tumbuh (Growth).<br>
              Potensi besar, tapi risiko lebih tinggi.`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm5/realm-5_r.webp",
        text: `“Pahami arah angin saham.<br>
              Mana ciri utama kepemilikan bisnis ini?”`,
        choices: [
          { label: "Nilai bisa naik-turun cepat (fluktuatif)", correct: true },
          { label: "Selalu stabil setiap hari", correct: false },
          { label: "Dijamin pasti tumbuh oleh pemerintah", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm5/realm-5_c.webp",
        text: `Sky Broker tersenyum.<br>
              “Benar. Saham penuh peluang, namun juga berisiko.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm5/realm-5_w.webp",
        text: `Angin berputar kacau.<br>
              “Saham tidak sestabil itu. Pelajari lagi.”`
      }
    ]
  },

  // =======================================================
  // REALM 6 — Crypto Nebula (Crypto Legal)
  // =======================================================
  {
    id: 6,
    name: "Crypto Nebula",
    character: "assets/characters/realm6_nebula-navigator.webp",
    bg: "assets/backgrounds/bg_realm-6.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e1.webp",
        text: `Kamu melayang di <b>Crypto Nebula</b>.<br>
              Partikel cahaya menari seperti hujan digital.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e1.webp",
        text: `<b>Nebula Navigator</b> muncul dari balik kabut.<br>
              “Selamat datang di dunia peluang dan ketidakpastian ekstrem.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e2.webp",
        text: `Token digital berputar cepat.<br>
              “Crypto adalah aset digital dengan volatilitas tinggi.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e2.webp",
        text: `Grafik bergerak liar bak roller coaster.<br>
              “Bisa naik drastis, tapi bisa juga turun seketika.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e3.webp",
        text: `Dua pilar energi menjulang.<br>
              <b>Pilar Biru</b> (Stabil): Crypto legal terdaftar Bappebti.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e3.webp",
        text: `<b>Pilar Merah</b> (Bergetar): Crypto tak terdaftar.<br>
              Sering menjadi sarang penipuan.`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm6/realm-6_r.webp",
        text: `“Apa yang membuat aset ini sangat berisiko?”`,
        choices: [
          { label: "Bisa naik & turun sangat cepat (Volatil)", correct: true },
          { label: "Selalu stabil seperti deposito", correct: false },
          { label: "Dijamin untung tetap harian", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm6/realm-6_c.webp",
        text: `Navigator berpendar lembut.<br>
              “Tepat. Volatilitas tinggi adalah sifat alaminya.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm6/realm-6_w.webp",
        text: `Nebula bergerak kacau.<br>
              “Salah. Crypto tidak stabil. Coba lagi.”`
      }
    ]
  },

  // =======================================================
  // REALM 7 — Futures Arena (Futures/Derivatif)
  // =======================================================
  {
    id: 7,
    name: "Futures Arena",
    character: "assets/characters/realm7_mecha-warden.webp",
    bg: "assets/backgrounds/bg_realm-7.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e1.webp",
        text: `Selamat datang di <b>Futures Arena</b>, gelanggang penuh listrik.<br>
              <b>Mecha Warden</b> mendarat dengan dentuman keras. BOOM!`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e1.webp",
        text: `“Di sini, kekuatanmu bisa berlipat…<br>
              atau menghancurkanmu dalam sekejap.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e2.webp",
        text: `Hologram grafik laser muncul.<br>
              “Futures adalah kontrak jual-beli di masa depan.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e2.webp",
        text: `“Dengan <b>Leverage</b>, daya belimu berlipat ganda.<br>
              Begitu juga risikonya.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e3.webp",
        text: `Alarm berbunyi: <b>MARGIN CALL!</b><br>
              “Sedikit harga bergerak lawan arah, energimu bisa habis.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e3.webp",
        text: `Mecha Warden menatap serius.<br>
              “Ini adalah realm dengan risiko tertinggi.”`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm7/realm-7_r.webp",
        text: `“Apa sifat utama futures yang berbahaya?”`,
        choices: [
          {
            label: "Leverage tinggi = Risiko kerugian tinggi",
            correct: true
          },
          { label: "Aman & stabil seperti deposito", correct: false },
          { label: "Untung 10% per hari pasti", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm7/realm-7_c.webp",
        text: `Warden memberi hormat.<br>
              “Benar. Kekuatan berlipat membawa bahaya besar.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm7/realm-7_w.webp",
        text: `Listrik menyambar liar.<br>
              “Salah. Futures bukan area main-main. Ulangi.”`
      }
    ]
  },

  // =======================================================
  // REALM 8 — Abyss of Lies (Final Boss / Penipuan)
  // =======================================================
  {
    id: 8,
    name: "Void of Deception",
    character: "assets/characters/realm8_shadow-whisperer.webp",
    bg: "assets/backgrounds/bg_realm-8.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e1.webp",
        text: `Portal membuangmu ke <b>Abyss of Lies</b>.<br>
              Istana hitam menjulang di kehampaan.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e1.webp",
        text: `Muncul <b>Deception King</b>, raja tipu daya.<br>
              “Kau belum melihat penipuan sejati,” bisiknya.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e2.webp",
        text: `Ia menebar ilusi janji manis:<br>
              “Profit 1% per hari! Tanpa risiko! Pasti kaya!”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e2.webp",
        text: `“Senjata kami adalah JANJI.<br>
              Membuat manusia menutup mata pada logika.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e3.webp",
        text: `King memegang dua kristal.<br>
              <b>Putih</b>: Legal (diawasi OJK/Bappebti).`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e3.webp",
        text: `<b>Hitam</b>: Ilegal.<br>
              “Hidup dari keserakahan korban.”`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm8/realm-8_r.webp",
        text: `“Sebutkan tanda pasti sebuah investasi bodong!”`,
        choices: [
          {
            label: "Menjanjikan untung tetap/besar tanpa risiko",
            correct: true
          },
          { label: "Terdaftar resmi di OJK/Bappebti", correct: false },
          { label: "Transparan soal risiko", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm8/realm-8_c.webp",
        text: `King retak dan hancur jadi cahaya.<br>
              <b>“Kau mampu melihat kebenaran…”</b>`
      },
      {
        type: "correct",
        img: "assets/illustrations/realm8/realm-8_c.webp",
        text: `Dungeon runtuh. Portal putih terbuka.<br>
              “Kau telah mengalahkan Penguasa Tipu Daya.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm8/realm-8_w.webp",
        text: `King tertawa, menelanmu dalam bayangan.<br>
              “Terpedaya lagi! Ulangi dari awal.”`
      }
    ]
  },

  // =======================================================
  // EPILOG — Return to the Real World
  // =======================================================
  {
    id: 9,
    name: "Realm of Clarity",
    bg: "assets/backgrounds/bg_prolog.webp",
    pages: [
      {
        type: "epilog",
        img: "assets/illustrations/epilog.webp",
        text: `Di ruang putih tak berujung, pengetahuanmu menyatu.<br>
              Harmoni antara keamanan, pertumbuhan, dan kewaspadaan.`
      },
      {
        type: "epilog",
        img: "assets/illustrations/epilog.webp",
        text: `Lumi tersenyum bangga di kejauhan.<br>
              “Kau bukan hanya bertahan—kau memahami.”`
      },
      {
        type: "epilog",
        img: "assets/illustrations/epilog.webp",
        button: "Selesai",
        text: `“Kini kau siap melangkah ke dunia nyata.<br>
              Perjalananmu di Celestial Dungeon telah selesai.”`
      }
    ]
  }
];

// =========================================================
// STATE
// =========================================================
let currentRealmIndex = 0;
let currentPageIndex = 0;
let totalGamePages = 0;

// =========================================================
// HELPERS
// =========================================================
function countTotalPages() {
  let count = 0;
  // Sum all pages excluding 'wrong' pages (optional, 
  // currently we count them but progress bar logic mimics linear flow)
  // Improved logic: Count only 'linear' pages (prolog, edu, riddle, correct, epilog)
  // 'wrong' pages are side-tracks.

  // To keep it simple for the progress bar:
  // We'll map each realm's "main path" length.
  // Actually, simplest is to just sum realm.pages.length, 
  // but since 'wrong' is hidden unless triggered, it might skew 100%.

  // Let's just sum all pages in the data, it's a rough indicator anyway.
  realms.forEach(r => {
    count += r.pages.length;
  });
  return count;
}

// Helper to get total pages passed BEFORE this realm
function getPreviousPagesCount(realmIdx) {
  let count = 0;
  for (let i = 0; i < realmIdx; i++) {
    count += realms[i].pages.length;
  }
  return count;
}

function saveProgress() {
  localStorage.setItem(
    "progress",
    JSON.stringify({
      realm: currentRealmIndex,
      page: currentPageIndex
    })
  );
}

function loadProgress() {
  const saved = localStorage.getItem("progress");
  if (!saved) return;
  try {
    const p = JSON.parse(saved);
    if (typeof p.realm === "number" && typeof p.page === "number") {
      currentRealmIndex = p.realm;
      currentPageIndex = p.page;
    }
  } catch (e) {
    // ignore
  }
}

// shuffle utility
function shuffleChoices(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// =========================================================
// RENDER
// =========================================================
function renderScene(contentHtml) {
  const realm = realms[currentRealmIndex];
  const characterHtml = realm.character
    ? `<div class="character-pane"><img src="${realm.character}" class="character-image" alt="Karakter ${realm.name}"></div>`
    : "";
  return `
    <div class="scene">
      ${characterHtml}
      ${contentHtml}
    </div>
  `;
}

function updateProgress() {
  if (totalGamePages === 0) totalGamePages = countTotalPages();

  const pagesBefore = getPreviousPagesCount(currentRealmIndex);
  const currentGlobal = pagesBefore + currentPageIndex + 1;

  // Cap at 100%
  let percent = (currentGlobal / totalGamePages) * 100;
  if (percent > 100) percent = 100;

  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  if (bar) bar.style.width = `${percent}%`;
  if (text) {
    // Show simpler progress text
    const realm = realms[currentRealmIndex];
    const totalRealmPages = realm.pages.length;
    text.textContent = `${realm.name} — Hal ${currentPageIndex + 1} / ${totalRealmPages}`;
  }
}

function loadPage() {
  const app = document.getElementById("app");
  const realm = realms[currentRealmIndex];

  // Safety check
  if (!realm || !realm.pages[currentPageIndex]) {
    // fallback if index out of bounds (e.g. data change)
    currentRealmIndex = 0;
    currentPageIndex = 0;
    return loadPage();
  }

  const page = realm.pages[currentPageIndex];

  // cleanup old classes
  Array.from(document.body.classList).forEach(cls => {
    if (cls.startsWith("realm-")) document.body.classList.remove(cls);
  });

  // set new classes & bg
  document.body.classList.add(`realm-${realm.id}`);
  document.body.style.backgroundImage = `url(${realm.bg})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.classList.toggle("prolog-mode", page.type === "prolog");
  document.body.classList.toggle("epilog-mode", page.type === "epilog");

  // PROLOG
  if (page.type === "prolog") {
    app.innerHTML = `
      <div class="prolog-overlay">
        <div class="prolog-text">
          <p class="realm-text mb-3">${page.text}</p>
          <button class="btn btn-success nav-button" onclick="nextPage()">
            ${page.button || "Lanjut"}
          </button>
        </div>
      </div>
    `;
    updateProgress();
    return;
  }

  // EDU / STORY
  if (page.type === "edu") {
    // If it's pure logic explanation, maybe reuse image or not
    app.innerHTML = renderScene(`
      <div class="page text-center">
        <img src="${page.img}" class="realm-image mb-3" alt="${realm.name}">
        <p class="realm-text">${page.text}</p>
        <button class="btn btn-primary nav-button mt-3" onclick="nextPage()">Lanjut</button>
      </div>
    `);
    updateProgress();
    return;
  }

  // EPILOG
  if (page.type === "epilog") {
    const btnAction = (page.button === "Selesai") ? "restartGame()" : "nextPage()";
    app.innerHTML = `
      <div class="epilog-overlay">
        <div class="epilog-content text-center">
          <img src="assets/characters/realm1_lumi.webp" class="epilog-character mb-3" alt="Lumi">
          <p class="realm-text">${page.text}</p>
          <button class="btn btn-success nav-button mt-3" onclick="${btnAction}">
            ${page.button || "Lanjut"}
          </button>
        </div>
      </div>
    `;
    updateProgress();
    return;
  }

  // RIDDLE
  if (page.type === "riddle") {
    // Always shuffle choices on render
    const shuffled = shuffleChoices(page.choices);

    app.innerHTML = renderScene(`
      <div class="page text-center">
        <img src="${page.img}" class="realm-image mb-3" alt="Riddle">
        <p class="realm-text">${page.text}</p>
        <div class="choices mt-3">
          ${shuffled
        .map(
          (c) => `
            <button class="btn btn-outline-light choice-btn mb-2" onclick="answer(${c.correct})">
              ${c.label}
            </button>
          `
        )
        .join("")}
        </div>
      </div>
    `);
    updateProgress();
    return;
  }

  // CORRECT
  if (page.type === "correct") {
    // Check if the NEXT page is also "correct" (multi-stage success)
    const nextPage = realm.pages[currentPageIndex + 1];
    const hasMoreCorrectPages = (nextPage && nextPage.type === "correct");

    // If more correct pages exist, just go next. Otherwise, leave realm.
    const btnAction = hasMoreCorrectPages ? "nextPage()" : "nextRealm()";
    const btnText = hasMoreCorrectPages ? "Lanjut" : "Masuk Portal";

    app.innerHTML = renderScene(`
      <div class="page text-center">
        <img src="${page.img}" class="realm-image mb-3" alt="Correct">
        <p class="realm-text">${page.text}</p>
        <button class="btn btn-success nav-button mt-3" onclick="${btnAction}">
          ${btnText}
        </button>
      </div>
    `);
    updateProgress();
    return;
  }

  // WRONG
  if (page.type === "wrong") {
    app.innerHTML = renderScene(`
      <div class="page text-center">
        <img src="${page.img}" class="realm-image mb-3" alt="Wrong">
        <p class="realm-text">${page.text}</p>
        <button class="btn btn-danger nav-button mt-3" onclick="retryRealm()">Ulangi</button>
      </div>
    `);
    updateProgress();
    return;
  }
}

// =========================================================
// ACTIONS
// =========================================================
function nextPage() {
  const realm = realms[currentRealmIndex];
  currentPageIndex++;

  if (currentPageIndex >= realm.pages.length) {
    // Just in case
    nextRealm();
    return;
  }

  saveProgress();
  loadPage();
}

function answer(isCorrect) {
  const realm = realms[currentRealmIndex];
  const page = realm.pages[currentPageIndex];

  if (isCorrect) {
    // Find 'correct' page index
    const correctIdx = realm.pages.findIndex(p => p.type === "correct");
    // If multiple correct pages (unlikely structure), pick first found
    if (correctIdx !== -1) currentPageIndex = correctIdx;
  } else {
    // Find 'wrong' page index
    const wrongIdx = realm.pages.findIndex(p => p.type === "wrong");
    if (wrongIdx !== -1) currentPageIndex = wrongIdx;
  }

  saveProgress();
  loadPage();
}

function retryRealm() {
  currentPageIndex = 0; // Back to start of this realm
  saveProgress();
  loadPage();
}

function nextRealm() {
  currentRealmIndex++;
  currentPageIndex = 0;

  if (currentRealmIndex >= realms.length) {
    // End of game
    currentRealmIndex = realms.length - 1;
  }

  saveProgress();
  loadPage();
}

function restartGame() {
  localStorage.removeItem("progress");
  currentRealmIndex = 0;
  currentPageIndex = 0;
  loadPage();
}

// =========================================================
// INIT
// =========================================================
window.addEventListener("load", () => {
  // calculate totals once
  totalGamePages = countTotalPages();

  // load saved or start fresh
  if (localStorage.getItem("progress")) {
    loadProgress();
  }

  loadPage();
});
