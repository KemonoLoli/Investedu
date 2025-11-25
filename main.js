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
terbentang sebuah dimensi bernama <b>Celestial Dungeon</b> —<br>
tempat seluruh pengetahuan tentang risiko dan peluang investasi<br>
mewujud menjadi kekuatan yang dapat disentuh.<br><br>
Dalam kekacauan yang mulai bangkit, secercah cahaya bernama <b>Lumi</b><br>
membisikkan panggilan pertamamu:<br><br>
<b>“Penjelajah… langkahmu dimulai di Sanctuary Gate.”</b>`,
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
        text: `Kamu tiba di Sanctuary Gate, dunia paling damai di seluruh Celestial Dungeon.<br>
              Udara di sini terasa hangat dan menenangkan, seolah berkata,<br>
              “Mulailah dari tempat yang aman.”<br><br>
              Di depamu berdiri Guardian Lumi, makhluk cahaya kecil dengan jubah putih.<br>
              Ia tersenyum lembut dan berkata,<br>
              “Di sini, kita belajar tentang tempat paling aman untuk menyimpan energi finansialmu.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e2.webp",
        text: `Lumi mengangkat tongkatnya, dan cahaya membentuk simbol-simbol: Tabungan, Giro, Deposito.<br><br>
              “Tempat ini,” kata Lumi, “adalah rumah bagi Energy Crystals yang tidak mudah berubah bentuk. Nilainya mungkin tumbuh pelan… tapi jarang sekali menurun.”<br><br>
              “Ini seperti tabungan dan deposito di dunia manusia — risiko rendah, stabil, dan aman.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e3.webp",
        text: `Dari balik kabut muncul sebuah kristal besar berwarna biru kehijauan. Lumi menjelaskan,<br><br>
              “Jika sesuatu yang buruk terjadi pada penjaga tempat ini, LPS Shield akan melindungi sebagian besar energimu.”<br><br>
              Ia berputar pelan di sekelilingmu.<br>
              “Inilah mengapa Sanctuary Gate adalah langkah pertama sebelum kau menjelajahi realm lainnya.”`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm1/realm-1_r.webp",
        text:
          "Instrumen mana yang paling aman dan dijamin oleh LPS Shield di dunia manusia?",
        choices: [
          { label: "Saham Blue-chip", correct: false },
          { label: "Deposito Bank", correct: true },
          { label: "Crypto Legal", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm1/realm-1_c.webp",
        text: `Lumi tersenyum lebar dan berkata,<br>
              “Betul! Deposito Bank adalah crystal paling stabil di Sanctuary Gate.”<br><br>
              Portal berwarna emas terbuka di hadapanmu.<br>
              “Kau siap masuk ke realm berikutnya.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm1/realm-1_w.webp",
        text: `Lumi menatapmu dengan mata penuh pengertian.<br>
              “Hmm… sepertinya jawabannya belum tepat.”<br><br>
              Kabut perlahan menutup jalan keluar.<br>
              “Ayo coba lagi. Kita harus memahami dasarnya sebelum melangkah lebih jauh.”`
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
        text: `Portal dari Sanctuary Gate membawamu ke Citadel of Bonds,<br>
sebuah istana megah tempat para penguasa menjaga Janji Energi —<br>
janji untuk mengembalikan energi kepada pemberi pinjaman.<br><br>
Di depan gerbang, seorang Bond Sentinel muncul, membawa perisai bercahaya.<br><br>
“Selamat datang, Penjelajah,” katanya.<br>
“Di tempat ini, kita belajar tentang kekuatan investasi yang berbasis janji.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e2.webp",
        text: `Bond Sentinel mengetuk lantai — DONG!<br><br>
Dua kristal besar melayang di tengah ruangan.<br><br>
“Obligasi adalah janji untuk membayar kembali energi dengan imbal hasil,” jelasnya.<br><br>
Ia menunjuk kristal emas:<br>
“Ini adalah SBN — Obligasi Pemerintah. Risikonya rendah karena dijamin negara.”<br><br>
Ia menunjuk kristal biru:<br>
“Dan ini Obligasi Korporasi. Imbal hasil lebih tinggi, tapi tergantung kekuatan perusahaan.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e3.webp",
        text: `Kamu dibawa ke lantai bawah istana, tempat mesin raksasa bernama<br>
Stability Core berdetak perlahan.<br><br>
Bond Sentinel menjelaskan:<br><br>
“Risiko obligasi bergantung pada siapa yang membuat janji itu.”<br><br>
Jika negara → mesin stabil (hijau).<br>
Jika perusahaan kuat → mesin stabil namun lebih berdenyut (kuning).<br>
Jika perusahaan lemah → mesin bergetar keras (merah).<br><br>
“Karena itu, memahami sumber janji adalah kunci realm ini.”`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm2/realm-2_r.webp",
        text: `Bond Sentinel berdiri tegak.<br><br>
“Untuk meninggalkan Citadel ini, kau harus memecahkan Riddle of the Bond Oath.”<br><br>
Ia mengangkat perisainya, dan tiga hologram muncul berputar perlahan.<br><br>
“Di antara tiga sumber ini, mana yang membuat obligasi paling aman karena kekuatan janjinya dijamin seluruh negeri?”<br><br>
Cahaya ruangan meredup.<br>
“Pilihlah dengan benar. Jika salah, lingkaran janji akan menutup dan kau harus mencoba kembali.”`,
        choices: [
          { label: "SBN (Obligasi Pemerintah)", correct: true },
          { label: "Obligasi Korporasi", correct: false },
          { label: "Crypto Token", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm2/realm-2_c.webp",
        text: `Bond Sentinel tersenyum bangga.<br><br>
“Betul. Janji dari negara adalah yang paling kuat dan paling aman.”<br><br>
Gerbang raksasa perlahan terbuka, memperlihatkan portal berwarna hijau-emerald.<br><br>
“Majulah, Penjelajah. Di realm berikutnya, kekuatan energi dikelola oleh para Master Diversifier.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm2/realm-2_w.webp",
        text: `Bond Sentinel menggeleng pelan.<br><br>
“Janji yang salah akan mengguncang kestabilan.”<br><br>
Stability Core di belakangnya bergetar dan memercikkan cahaya merah.<br><br>
“Kembali dan pelajari lagi, Penjelajah. Kau belum memahami sumber kekuatan obligasi.”`
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
        text: `Portal membawamu ke <b>Nexus of Funds</b>, sebuah dunia tempat energi dari berbagai sumber bertemu dan dikelola.<br>
Cahaya biru, hijau, ungu, dan emas mengalir seperti sungai di udara.<br><br>
Tiba-tiba, seorang <b>Fund Weaver</b> — makhluk yang tampak seperti penyihir data — muncul membawa tongkat bercabang tiga.<br><br>
Ia berkata lembut,<br>
“Selamat datang, Penjelajah. Di sinilah berbagai energi digabung dan dikelola secara profesional.”`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e2.webp",
        text: `Fund Weaver mengayunkan tongkatnya.<br>
<b>WHOOOSH!</b><br><br>
Empat lingkaran sihir terbentuk di sekelilingmu.<br><br>
“Inilah empat energi utama dalam Reksa Dana,” jelasnya.<br><br>
<b>• Pasar Uang</b> → stabil, sangat rendah risiko<br>
<b>• Pendapatan Tetap</b> → mayoritas obligasi<br>
<b>• Campuran</b> → gabungan saham & obligasi<br>
<b>• Saham</b> → potensi tinggi, risiko lebih besar<br><br>
Aliran energi itu saling berkaitan namun berbeda kekuatannya.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e3.webp",
        text: `Kamu melihat sebuah mesin besar bernama <b>Prism Engine</b>, perangkat raksasa yang menyerap beragam aliran cahaya.<br><br>
Fund Weaver berkata,<br>
“Reksa Dana dikelola oleh Fund Manager — para ahli yang mengatur strategi dan mengendalikan risiko.”<br><br>
Aliran cahaya masuk ke mesin, menyatu, lalu keluar sebagai energi yang lebih teratur.<br><br>
“Inilah kekuatan diversifikasi. Energi dari banyak sumber membuatmu tidak bergantung pada satu titik saja.”`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm3/realm-3_r.webp",
        text: `Fund Weaver mengangkat tongkatnya, dan seluruh Nexus menjadi tenang.<br><br>
“Untuk lolos dari dunia para Pengelola Energi ini,” katanya,<br>
“kau harus memahami inti dari kekuatan Reksa Dana.”<br><br>
Ia menunjuk tiga jalur cahaya yang mengalir.<br>
“Dari tiga jalur ini, manakah yang melambangkan kekuatan utama Reksa Dana — energi dari banyak sumber yang dikelola profesional?”<br><br>
Cahaya semakin terang, menunggu jawabanmu.`,
        choices: [
          { label: "Dikelola profesional dan terdiversifikasi", correct: true },
          { label: "Dijamin pemerintah sepenuhnya", correct: false },
          { label: "Keuntungannya selalu tetap setiap hari", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm3/realm-3_c.webp",
        text: `Fund Weaver tersenyum, suaranya bergema seperti mistisisme teknologi.<br><br>
“Tepat! Keunggulan Reksa Dana adalah energi yang terdiversifikasi dan dikelola oleh para ahli.”<br><br>
Cahaya di Nexus bersatu membentuk portal berputar yang indah.<br><br>
“Langkahlah, Penjelajah. Realm berikutnya akan membawamu ke kekuatan yang telah dijaga sejak zaman kuno.”`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm3/realm-3_w.webp",
        text: `Fund Weaver menghela napas pelan.<br><br>
“Diversifikasi adalah inti Nexus… dan kau melewatkannya.”<br><br>
Aliran energi terputus, menciptakan suara <b>CRACK—CRRRT</b>.<br><br>
“Cobalah lagi. Para Penjelajah sejati tidak boleh salah memahami aliran energi.”`
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
        text: `Setelah melewati Nexus of Funds, portal membawamu ke sebuah <b>gua purba</b> yang memancarkan cahaya hangat.<br><br>
Tetesan cahaya emas berjatuhan dari langit-langit seperti hujan ringan.<br><br>
Seekor <b>Aurum Guardian</b> — makhluk berbentuk golem emas dengan mata biru lembut — muncul dari balik batuan.<br><br>
<b>“Selamat datang di Aurum Cavern,”</b> katanya dengan suara berat namun ramah.<br>
<b>“Di sini, kita belajar tentang aset yang bertahan melintasi zaman.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e2.webp",
        text: `Golem itu mengangkat lengannya, dan hologram emas batangan muncul.<br><br>
<b>“Emas adalah penyimpan nilai yang telah dipercaya sejak ribuan tahun,”</b> jelasnya.<br><br>
Grafik holografik muncul: naik perlahan, turun sebentar, lalu naik lagi dalam jangka panjang.<br><br>
<b>“Nilainya bisa naik turun dalam jangka pendek… tetapi cenderung stabil dalam jangka panjang.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e3.webp",
        text: `Kamu mengikuti Aurum Guardian ke ruang yang lebih dalam.<br><br>
Sebuah mesin kuno-futuristik terlihat menstabilkan energi emas.<br><br>
<b>“Di masa chaos, banyak Penjelajah mencari perlindungan di sini,”</b> kata Golem itu.<br><br>
<b>“Emas adalah safe haven — aset yang sering dicari saat dunia sedang tidak menentu.”</b><br><br>
Cahaya emas menari di udara, menenangkan pikiranmu.`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm4/realm-4_r.webp",
        text: `Aurum Guardian berdiri tegap dan menancapkan tongkat emasnya ke tanah.<br><br>
<b>“Untuk meninggalkan gua ini, kau harus memahami denyut emas.”</b><br><br>
Ruangan bergema lembut.<br><br>
<b>“Di antara tiga sumber energi ini, manakah yang mewakili sifat safe haven: stabil, bertahan lama, dan sering dicari saat ketidakpastian melanda?”</b><br><br>
Cahaya emas memperjelas riddle ini — lembut namun tegas.`,
        choices: [
          {
            label: "Nilainya stabil dan sering dicari saat kondisi tidak menentu",
            correct: true
          },
          { label: "Selalu memberikan keuntungan tetap setiap hari", correct: false },
          { label: "Risiko ekstrem seperti aset spekulatif", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm4/realm-4_c.webp",
        text: `Aurum Guardian menundukkan kepala dengan hormat.<br><br>
<b>“Bijak sekali. Emas memang bukan untuk mengejar keuntungan cepat, tetapi untuk perlindungan nilai.”</b><br><br>
Cahaya emas membuka portal berkilau.<br><br>
<b>“Majulah. Realm selanjutnya penuh dengan pertumbuhan dan tantangan baru.”</b>`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm4/realm-4_w.webp",
        text: `Aurum Guardian menatapmu penuh pengertian.<br><br>
<b>“Emas tidak menjanjikan keuntungan tetap… dan bukan pula aset liar.”</b><br><br>
Batu-batu emas bergetar, menandakan jawaban yang kurang tepat.<br><br>
<b>“Kembalilah mempelajari esensi emas. Cobalah lagi.”</b>`
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
        text: `Setelah keluar dari Aurum Cavern, kamu muncul di kaki sebuah <b>menara yang menjulang menembus awan</b>.<br>
Angin berputar-putar, membuat rambutmu terangkat sedikit.<br><br>
Seorang <b>Sky Broker</b> — manusia dengan sayap holografik — melayang turun menyambutmu.<br><br>
<b>“Selamat datang di Equinox Spire.<br>
Dunia yang berubah cepat seperti pasar saham.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e2.webp",
        text: `Sky Broker mengetukkan tongkat datanya, dan grafik holografik muncul di udara.<br><br>
<b>“Di sini, kepemilikanmu adalah bagian dari sebuah perusahaan.<br>
Saat perusahaan tumbuh, energimu juga tumbuh.”</b><br><br>
Grafik naik perlahan… lalu tiba-tiba turun cepat.<br><br>
<b>“Namun ingat,”</b> ujarnya sambil tersenyum,<br>
<b>“harga saham bisa naik <i>dan</i> turun dalam waktu singkat.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e3.webp",
        text: `Sky Broker membawamu ke balkon menara.<br><br>
Dua platform energi melayang di hadapanmu:<br><br>
• <b>Platform Biru Stabil</b> → perusahaan besar & mapan (blue-chip)<br>
• <b>Platform Merah Bergetar</b> → perusahaan cepat tumbuh namun fluktuatif (growth)<br><br>
Ia berkata,<br>
<b>“Saham blue-chip cenderung lebih stabil.<br>
Saham growth bisa memberi potensi besar, tapi risikonya lebih tinggi.”</b>`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm5/realm-5_r.webp",
        text: `Angin tiba-tiba berhenti.<br>
Sky Broker mengibaskan sayap holografiknya.<br><br>
<b>“Untuk mencapai puncak menara ini,”</b> katanya,<br>
<b>“kau harus memahami arah angin saham.”</b><br><br>
Ia menunjuk tiga simbol yang berputar perlahan.<br>
<b>“Manakah yang menggambarkan ciri utama saham:<br>
kepemilikan bisnis yang nilainya bisa naik-turun secara cepat?”</b><br><br>
Angin kembali bergerak, menunggu jawabanmu.`,
        choices: [
          { label: "Nilainya bisa naik dan turun dengan cepat", correct: true },
          { label: "Nilainya selalu stabil setiap hari", correct: false },
          { label: "Dijamin pertumbuhan pasti oleh pemerintah", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm5/realm-5_c.webp",
        text: `Sky Broker tersenyum lebar.<br><br>
<b>“Benar sekali. Saham adalah perjalanan angin perubahan — cepat, penuh peluang, namun juga penuh risiko.”</b><br><br>
Menara bergetar lembut, membuka portal bercahaya di puncaknya.<br><br>
<b>“Mari, Penjelajah. Perjalananmu menuju dunia digital yang lebih liar akan dimulai.”</b>`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm5/realm-5_w.webp",
        text: `Sky Broker menunduk, sayap holografiknya meredup.<br><br>
<b>“Tidak, tidak… saham tidak pernah stabil seperti itu.”</b><br><br>
Angin berputar lagi, mendorongmu perlahan ke platform awal.<br><br>
<b>“Coba lagi. Pahami angin, dan kau akan menguasai menara ini.”</b>`
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
        text: `Portal membawamu ke tengah <b>nebula kosmik</b> yang berputar cepat.<br>
Partikel cahaya menari-nari seperti hujan bintang digital.<br><br>
Dari dalam kabut muncul sosok <b>Nebula Navigator</b> — makhluk astral dengan tubuh yang terbuat dari kode bercahaya.<br><br>
<b>“Selamat datang di Crypto Nebula,”</b> katanya.<br>
<b>“Dunia yang penuh peluang… dan ketidakpastian ekstrem.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e2.webp",
        text: `Navigator mengangkat tangannya, dan token digital mulai berputar cepat.<br><br>
<b>“Crypto adalah aset digital yang nilainya bisa naik sangat cepat… tetapi juga turun seketika.”</b><br><br>
Grafik holografik muncul, bergerak liar seperti roller coaster.<br><br>
<b>“Volatilitasnya tinggi. Banyak yang tertarik, namun banyak pula yang terjebak karena tidak memahami risikonya.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e3.webp",
        text: `Navigator menunjuk dua pilar energi yang menjulang.<br><br>
<b>“Di nebula ini, penting membedakan yang resmi dan yang berbahaya.”</b><br><br>
Pilar biru bersinar stabil.<br>
<b>“Crypto legal hanya yang terdaftar di Bappebti.”</b><br><br>
Pilar merah bergetar keras.<br>
<b>“Sementara yang tak terdaftar sering menjadi sarang penipuan.”</b><br><br>
Cahaya nebula berubah, memberi tanda bahwa ujian akan dimulai.`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm6/realm-6_r.webp",
        text: `Nebula meredup, seolah menahan napas menunggu jawabanmu.<br><br>
Nebula Navigator menatapmu dengan serius.<br><br>
<b>“Untuk melintasi Crypto Nebula, kau harus memahami apa yang membuat aset digital ini sangat berisiko.”</b><br><br>
Ia menggerakkan jarinya, dan grafik volatilitas ekstrem muncul di udara.<br><br>
<b>“Dari tiga simbol ini, mana yang paling tepat menggambarkan karakter utama crypto?”</b><br><br>
Partikel cahaya melayang-layang seperti menunggu keputusanmu.`,
        choices: [
          { label: "Harganya bisa naik dan turun dengan sangat cepat", correct: true },
          { label: "Selalu stabil seperti deposito", correct: false },
          { label: "Dijamin keuntungan tetap setiap hari", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm6/realm-6_c.webp",
        text: `Nebula Navigator tersenyum, tubuhnya berpendar lembut.<br><br>
<b>“Tepat! Crypto adalah dunia volatilitas tinggi — bisa naik tinggi, atau jatuh tanpa peringatan.”</b><br><br>
Pusaran kosmik terbuka, membentuk jalur menuju arena berikutnya.<br><br>
<b>“Arahkan langkahmu. Realm berikutnya penuh pertempuran energi yang dahsyat.”</b>`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm6/realm-6_w.webp",
        text: `Nebula Navigator menggeleng perlahan.<br><br>
<b>“Crypto tidak pernah stabil… dan tidak pernah menjamin keuntungan pasti.”</b><br><br>
Partikel nebula bergerak kacau.<br><br>
<b>“Pelajari kembali denyut energi ini, dan coba lagi.”</b>`
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
        text: `Portal membawamu ke tengah <b>Gelanggang Raksasa</b> yang dipenuhi percikan listrik dan energi yang meloncat-loncat.<br><br>
Seekor <b>Mecha Warden</b> — robot penjaga setinggi 4 meter — mendarat di depanmu dengan dentuman keras.<br><br>
<b>BOOM!</b><br><br>
<b>“Selamat datang di Futures Arena,”</b> suaranya bergema metalik.<br>
<b>“Di sini, kekuatanmu dapat berlipat… atau menghancurkanmu dalam sekejap.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e2.webp",
        text: `Mecha Warden mengangkat tangan robotiknya dan menampilkan hologram raksasa di udara.<br><br>
<b>“Futures adalah kontrak untuk membeli atau menjual sesuatu di masa depan.”</b><br><br>
Sinar laser membentuk grafik ekstrem yang bergerak liar.<br><br>
<b>“Dengan leverage, kekuatanmu bisa berlipat ganda… tetapi begitu pula risikonya.”</b><br><br>
Grafik tiba-tiba jatuh dalam satu hentakan.<br><br>
<b>“Satu gerakan kecil harga bisa berarti untung besar… atau kerugian instan.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e3.webp",
        text: `Di sisi arena, kamu melihat <b>Mecha Assist</b> yang menunjuk layar darurat bertuliskan <b>MARGIN CALL</b>.<br><br>
Alarm berbunyi keras:<br>
<b>WEEOO—WEEOO—WEEOO</b><br><br>
Mecha Warden menjelaskan,<br>
<b>“Karena leverage, sedikit saja harga bergerak melawan posisimu, kau bisa kehilangan seluruh energimu dengan cepat.”</b><br><br>
Ia menatapmu serius:<br>
<b>“Inilah realm dengan risiko tertinggi di seluruh dungeon sebelum Final.”</b>`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm7/realm-7_r.webp",
        text: `Mecha Warden menancapkan pedang energinya ke lantai.<br><br>
<b>“Untuk meninggalkan Futures Arena, kau harus memahami inti kekuatan berlipat ini.”</b><br><br>
Gelanggang berubah menjadi labirin listrik yang bergetar.<br><br>
<b>“Di antara simbol ini, mana yang paling menggambarkan sifat utama futures sebagai investasi?”</b><br><br>
Cahaya listrik memantul-mantul, menunggu jawabanmu.`,
        choices: [
          {
            label: "Menggunakan leverage sehingga risiko dan potensi kerugian sangat tinggi",
            correct: true
          },
          { label: "Nilainya stabil seperti deposito", correct: false },
          { label: "Selalu memberikan keuntungan 10% per hari", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm7/realm-7_c.webp",
        text: `Mecha Warden mengetukkan tinjunya ke dada sebagai salam hormat.<br><br>
<b>“Jawabanmu tepat. Futures adalah gelanggang kekuatan berlipat… namun juga bahaya besar.”</b><br><br>
Lantai arena retak dan membuka jalan menuju portal gelap berwarna ungu tua.<br><br>
<b>“Fokuslah, Penjelajah. Realm berikutnya adalah yang paling berbahaya dari semua.”</b>`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm7/realm-7_w.webp",
        text: `Mecha Warden menggeleng perlahan.<br><br>
<b>“Tidak tepat. Futures bukan dunia stabil… dan tidak pernah menjanjikan keuntungan pasti.”</b><br><br>
Listrik liar menutup jalan keluar.<br><br>
<b>“Pelajari kembali energi berlipat ini. Cobalah lagi.”</b>`
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
        text: `Setelah meninggalkan Futures Arena, portal menghempaskanmu ke sebuah <b>kehampaan mengerikan</b>.<br><br>
Sebuah <b>istana hitam raksasa</b> menjulang di tengah kegelapan, melayang tanpa fondasi.<br>
Bayangan-bayangan berteriak tanpa suara mengelilinginya.<br><br>
Pintu istana terbuka perlahan…<br><br>
Dari dalam muncul sosok tinggi berbalut jubah kabut hitam —<br>
<b>The Deception King</b>, penguasa segala tipu daya investasi.<br><br>
<b>“Akhirnya kau datang, Penjelajah…”</b><br>
Suaranya bergema seperti ribuan bisikan.<br><br>
<b>“Kau telah belajar banyak… namun kau belum melihat bentuk penipuan yang sejati.”</b>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e2.webp",
        text: `Deception King mengangkat tangan besarnya.<br><br>
<b>BRAKKK!</b><br><br>
Ruangan dipenuhi ilusi:<br>
• “Profit 1% per hari!”<br>
• “Dijamin tanpa risiko!”<br>
• “Robot trading otomatis kaya!”<br>
• Struktur piramida bercahaya.<br><br>
<b>“Lihatlah…”</b> katanya.<br>
<b>“Ini adalah senjata kami: JANJI.<br>
Janji manis yang membuat manusia menutup mata pada logika.”</b><br><br>
Ilusi itu tampak indah… namun auranya terasa kejam.`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e3.webp",
        text: `Deception King mengangkat dua kristal besar.<br><br>
<b>Kristal Putih Murni</b> berputar pelan.<br>
<b>Kristal Hitam Beracun</b> berdenyut seperti jantung monster.<br><br>
<b>“Layanan legal,”</b> katanya sambil menunjuk cahaya putih,<br>
<b>“diawasi oleh OJK, Bappebti, atau Bank Indonesia.”</b><br><br>
Ia menggenggam kristal hitam, dan asap beracun menyeruak.<br><br>
<b>“Sedangkan layanan gelap… hidup dari keserakahan korban yang tak siap.”</b><br><br>
Tanah bergetar. Ujian terakhir akan segera dimulai.`
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm8/realm-8_r.webp",
        text: `Deception King duduk di takhta hitam raksasa.<br>
Gema ribuan bisikan memenuhi udara.<br><br>
Tiga ilusi melayang di atas altar:<br>
• Tawaran “Keuntungan Pasti Harian” (merah)<br>
• Sertifikat legal OJK/Bappebti (biru)<br>
• Aplikasi abal-abal tanpa izin (hitam)<br><br>
Ia menatapmu dengan cahaya merah menyala.<br><br>
<b>“Inilah ujian terakhir.”</b><br><br>
Dungeon runtuh perlahan, menyisakan takhta dan lantai retak.<br><br>
<b>“Sebutkan tanda paling jelas… tanda yang tak terbantahkan… bahwa sebuah ‘investasi’ adalah penipuan.”</b><br><br>
<b>“Jawablah. Atau hilang selamanya dalam Abyss of Lies.”</b>`,
        choices: [
          {
            label: "Menjanjikan keuntungan tetap setiap hari tanpa risiko",
            correct: true
          },
          { label: "Terdaftar resmi di OJK/Bappebti", correct: false },
          { label: "Memberi edukasi risiko secara transparan", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm8/realm-8_c.webp",
        text: `Deception King terdiam.<br>
Matanya meredup.<br><br>
<b>“Kau… mampu melihat kebenaran…”</b><br><br>
Retakan cahaya muncul di tubuhnya.<br>
<b>CRAAAACK—WOOOM!</b><br><br>
Sang raja runtuh menjadi butiran cahaya.<br><br>
Dungeon gelap hancur dan berubah menjadi ruang terang.<br><br>
Sebuah portal putih terbentuk di depanmu.<br><br>
<b>“Kau telah mengalahkan Penguasa Tipu Daya.”</b><br>
<b>“Pengetahuanmu kini dapat melindungimu di dunia nyata.”</b>`
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm8/realm-8_w.webp",
        text: `Deception King tertawa keras,<br>
suaranya seperti ribuan bisikan menghantam telingamu.<br><br>
<b>“SALAH.”</b><br><br>
Bayangannya membesar, menelan seluruh ruangan.<br><br>
<b>“Begitulah korban jatuh… percaya janji palsu tanpa logika.”</b><br><br>
Lantai runtuh di bawahmu.<br><br>
<b>“Kembalilah. Kau belum siap.”</b>`
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
        button: "Selesai",
        text: `Cahaya dari portal terakhir menghilang perlahan, meninggalkanmu dalam ruang putih tak berujung.<br><br>
Di sini, seluruh pengetahuan yang kau kumpulkan dari delapan realm<br>
mulai menyatu sebagai cahaya yang berputar lembut di sekelilingmu —<br>
<b>harmoni antara dasar yang aman, peluang pertumbuhan, risiko tinggi, dan kewaspadaan terhadap penipuan.</b><br><br>
Lumi muncul sebagai titik cahaya biru di kejauhan, suaranya hangat namun penuh rasa hormat:<br><br>
<b>“Penjelajah… kau telah melalui perjalanan yang tak mudah.<br>
Kau bukan hanya bertahan—kau memahami.”</b><br><br>
Cahaya mengembang, membentuk simbol akhir yang tenang dan bersih.<br>
<b>Dengan ini, perjalananmu di Celestial Dungeon resmi selesai.<br>
Kini kau melangkah ke dunia nyata dengan pemahaman dan keberanian baru.”</b>`
      }
    ]
  }
];

// total struktur
const TOTAL_REALMS = 8;
const PAGES_PER_REALM = 5;
const TOTAL_PAGES = TOTAL_REALMS * PAGES_PER_REALM;

// =========================================================
// STATE
// =========================================================
let currentRealmIndex = 0;
let currentPageIndex = 0;

// =========================================================
// HELPERS: SAVE / LOAD PROGRESS
// =========================================================
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
    // ignore corrupted storage
  }
}

// =========================================================
// RENDER PAGE
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

function updateProgress(realmIndex, pageIndex) {
  const currentPageGlobal = (realmIndex - 1) * PAGES_PER_REALM + pageIndex;
  const percent = (currentPageGlobal / TOTAL_PAGES) * 100;

  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  if (bar) bar.style.width = `${percent}%`;
  if (text)
    text.textContent = `Realm ${realmIndex} / ${TOTAL_REALMS} — Halaman ${pageIndex} / ${PAGES_PER_REALM}`;
}

function loadPage() {
  const app = document.getElementById("app");
  const realm = realms[currentRealmIndex];
  const page = realm.pages[currentPageIndex];

  // set realm background + tint class for CSS
  Array.from(document.body.classList).forEach(cls => {
    if (cls.startsWith("realm-")) document.body.classList.remove(cls);
  });
  document.body.classList.add(`realm-${realm.id}`);
  document.body.style.backgroundImage = `url(${realm.bg})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.minHeight = "100vh";
  document.body.classList.toggle("prolog-mode", page.type === "prolog");
  document.body.classList.toggle("epilog-mode", page.type === "epilog");

  if (page.type === "prolog") {
    app.innerHTML = `
      <div class="prolog-overlay">
        <div class="prolog-text">
          <p class="realm-text mb-3">${page.text}</p>
          <button class="btn btn-success nav-button" onclick="nextRealm()">
            ${page.button || "Mulai"}
          </button>
        </div>
      </div>
    `;
    return;
  }

  if (page.type === "edu") {
    app.innerHTML = renderScene(`
      <div class="page text-center">
        <img src="${page.img}" class="realm-image mb-3" alt="${realm.name}">
        <p class="realm-text">${page.text}</p>
        <button class="btn btn-primary nav-button mt-3" onclick="nextPage()">Lanjut</button>
      </div>
    `);
    updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
    return;
  }

  if (page.type === "epilog") {
    app.innerHTML = `
      <div class="epilog-overlay">
        <div class="epilog-content text-center">
          <img src="assets/characters/realm1_lumi.webp" class="epilog-character mb-3" alt="Lumi">
          <p class="realm-text">${page.text}</p>
          <button class="btn btn-success nav-button mt-3" onclick="restartGame()">
            ${page.button || "Selesai"}
          </button>
        </div>
      </div>
    `;
    updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
    return;
  }

  if (page.type === "riddle") {
    app.innerHTML = renderScene(`
      <div class="page text-center">
        <img src="${page.img}" class="realm-image mb-3" alt="Riddle ${realm.name}">
        <p class="realm-text">${page.text}</p>
        <div class="choices mt-3">
          ${page.choices
            .map(
              (c, i) => `
            <button class="btn btn-outline-light choice-btn mb-2" onclick="answer(${i})">
              ${c.label}
            </button>
          `
            )
            .join("")}
        </div>
      </div>
    `);
    updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
    return;
  }

  if (page.type === "correct") {
    const isEpilog = realm.id === 9;
    app.innerHTML = renderScene(`
      <div class="page text-center">
        <img src="${page.img}" class="realm-image mb-3" alt="Correct ${realm.name}">
        <p class="realm-text">${page.text}</p>
        ${
          isEpilog
            ? `<button class="btn btn-success nav-button mt-3" onclick="restartGame()">Ulang dari Awal</button>`
            : `<button class="btn btn-success nav-button mt-3" onclick="nextRealm()">Masuk Portal</button>`
        }
      </div>
    `);
    updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
    return;
  }

  if (page.type === "wrong") {
    app.innerHTML = renderScene(`
      <div class="page text-center">
        <img src="${page.img}" class="realm-image mb-3" alt="Wrong ${realm.name}">
        <p class="realm-text">${page.text}</p>
        <button class="btn btn-danger nav-button mt-3" onclick="retryRealm()">Ulangi</button>
      </div>
    `);
    updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
    return;
  }
}

// =========================================================
// NAVIGATION
// =========================================================
function nextPage() {
  const realm = realms[currentRealmIndex];
  currentPageIndex++;

  if (currentPageIndex >= realm.pages.length) {
    // safety: move to next realm if pages exceed
    nextRealm();
    return;
  }

  saveProgress();
  loadPage();
  updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
}

function answer(choiceIndex) {
  const realm = realms[currentRealmIndex];
  const page = realm.pages[currentPageIndex];
  const picked = page.choices[choiceIndex];

  if (picked.correct) {
    currentPageIndex = realm.pages.findIndex(p => p.type === "correct");
    if (currentPageIndex === -1) currentPageIndex = realm.pages.length - 1;
  } else {
    currentPageIndex = realm.pages.findIndex(p => p.type === "wrong");
    if (currentPageIndex === -1) currentPageIndex = realm.pages.length - 1;
  }

  saveProgress();
  loadPage();
  updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
}

function retryRealm() {
  currentPageIndex = 0;
  saveProgress();
  loadPage();
  updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
}

function nextRealm() {
  currentRealmIndex++;
  currentPageIndex = 0;

  if (currentRealmIndex >= realms.length) {
    currentRealmIndex = realms.length - 1;
  }

  saveProgress();
  loadPage();
  updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
}

function restartGame() {
  currentRealmIndex = 0;
  currentPageIndex = 0;
  saveProgress();
  loadPage();
  updateProgress(currentRealmIndex + 1, currentPageIndex + 1);
}

// =========================================================
// INIT
// =========================================================
window.addEventListener("load", () => {
  // start fresh on each reload
  localStorage.removeItem("progress");
  currentRealmIndex = 0;
  currentPageIndex = 0;
  loadPage();
});
