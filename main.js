/* =========================================================
   INVESTASI FANTASY JOURNEY — MAIN.JS (FULL)
   8 Realms + Epilog | HTML/CSS/Bootstrap + Vanilla JS
   ========================================================= */

const realms = [
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
        text: `<strong>Kamu tiba di Sanctuary Gate</strong>, dunia paling damai di seluruh Celestial Dungeon.<br>
              Udara di sini terasa hangat dan menenangkan, seolah berkata,<br>
              “Mulailah dari tempat yang aman.”<br>
              Di depanmu berdiri <strong>Guardian Lumi</strong>, makhluk cahaya kecil dengan jubah putih.<br>
              Ia tersenyum lembut dan berkata,<br>
              <strong>“Di sini, kita belajar tentang tempat paling aman untuk menyimpan energi finansialmu.”</strong>`
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e2.webp",
        text:
          "Lumi menjelaskan: tabungan itu paling rendah risiko, cocok untuk pemula. Deposito mirip tabungan, tapi disimpan lebih lama dengan bunga lebih tinggi."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm1/realm-1_e3.webp",
        text:
          "Cahaya perisai LPS menyelimuti kristal. Artinya, simpanan di bank tertentu dijamin sampai batas tertentu. Aman, tapi potensi untungnya kecil."
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm1/realm-1_r.webp",
        text:
          "Lumi: “Challenge pertama! Kristal mana yang melambangkan instrumen paling rendah risiko?”",
        choices: [
          { label: "Kristal putih (paling aman)", correct: true },
          { label: "Kristal biru (risiko sedang)", correct: false },
          { label: "Kristal merah (risiko tinggi)", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm1/realm-1_c.webp",
        text:
          "Benar! Kamu memilih yang paling aman. Portal Sanctuary terbuka untuk perjalanan berikutnya."
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm1/realm-1_w.webp",
        text:
          "Masih salah. Ingat: di awal perjalanan, kita mulai dari risiko paling rendah. Ulangi realm ini ya."
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
        text:
          "Kamu masuk ke Citadel of Bonds, benteng megah yang stabil. Di sini, energi mengalir teratur seperti obligasi."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e2.webp",
        text:
          "Sky Guardian menjelaskan: obligasi adalah surat utang. Kamu meminjamkan dana ke pemerintah (SBN) atau perusahaan, lalu menerima kupon/bunga."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm2/realm-2_e3.webp",
        text:
          "Stability Core menunjukkan indikator risiko. Obligasi pemerintah cenderung lebih stabil, obligasi korporasi bisa lebih tinggi imbalnya tapi risikonya naik."
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm2/realm-2_r.webp",
        text:
          "Lumi: “Mana yang paling menggambarkan obligasi: meminjamkan dana dan mendapat bunga berkala?”",
        choices: [
          { label: "Kristal emas (pemerintah/SBN)", correct: true },
          { label: "Menara saham fluktuatif", correct: false },
          { label: "Token digital liar", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm2/realm-2_c.webp",
        text:
          "Tepat! Obligasi adalah energi stabil dengan bunga berkala. Portal hijau Citadel terbuka!"
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm2/realm-2_w.webp",
        text:
          "Belum tepat. Obligasi berbeda dari saham dan crypto. Coba ulangi edukasinya dulu."
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
        text:
          "Portal membawa kamu ke Nexus of Funds, ruang energi bercabang. Di sini, banyak aliran digabung menjadi satu kekuatan."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e2.webp",
        text:
          "Fund Weaver berkata: reksa dana adalah wadah dana bersama yang dikelola manajer investasi. Uangmu dipakai membeli banyak aset sekaligus."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm3/realm-3_e3.webp",
        text:
          "Ada beberapa jenis: pasar uang (lebih rendah risiko), pendapatan tetap, campuran, hingga reksa dana saham (risiko lebih tinggi). Diversifikasi menurunkan risiko total."
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm3/realm-3_r.webp",
        text:
          "Lumi: “Kalau energi bercabang ke banyak aset sekaligus, itu menggambarkan apa?”",
        choices: [
          { label: "Diversifikasi reksa dana", correct: true },
          { label: "Satu aset tunggal saja", correct: false },
          { label: "Kontrak leverage ekstrem", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm3/realm-3_c.webp",
        text:
          "Benar! Reksa dana menggabungkan banyak aset agar risiko lebih tersebar. Portal warna-warni terbuka!"
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm3/realm-3_w.webp",
        text:
          "Salah. Reksa dana itu bukan satu aset tunggal. Coba ulangi realm ini."
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
        text:
          "Kamu tiba di Aurum Cavern, gua emas hangat. Kilauannya stabil, seperti emas sebagai penyimpan nilai."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e2.webp",
        text:
          "Golem Emas berbisik: emas cenderung tahan inflasi dan cocok untuk jangka menengah–panjang. Tapi kenaikan harganya tidak secepat saham."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm4/realm-4_e3.webp",
        text:
          "Emas bisa dibeli fisik atau digital melalui platform legal. Risiko emas moderat, lebih tinggi dari obligasi tapi lebih rendah dari saham."
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm4/realm-4_r.webp",
        text:
          "Lumi: “Instrumen apa yang identik dengan kilau hangat dan stabil ini?”",
        choices: [
          { label: "Emas (penyimpan nilai stabil)", correct: true },
          { label: "Saham yang naik-turun cepat", correct: false },
          { label: "Crypto yang sangat volatil", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm4/realm-4_c.webp",
        text:
          "Tepat! Kilau Aurum adalah emas. Portal emas terbuka untuk menuju menara berikutnya."
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm4/realm-4_w.webp",
        text:
          "Belum tepat. Kilau stabil ini bukan fluktuasi saham/crypto. Coba ulangi."
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
        text:
          "Kamu berdiri di kaki Equinox Spire, menara angin perubahan. Di sini, energi bergerak cepat layaknya pasar saham."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e2.webp",
        text:
          "Sky Broker menjelaskan: saham berarti kepemilikan sebagian perusahaan. Jika perusahaan tumbuh, nilaimu bisa naik."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm5/realm-5_e3.webp",
        text:
          "Namun harga saham bisa naik atau turun dalam waktu singkat. Blue-chip lebih stabil, growth bisa lebih tinggi potensi untung tapi risikonya besar."
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm5/realm-5_r.webp",
        text:
          "Lumi: “Apa karakter utama investasi saham?”",
        choices: [
          { label: "Nilainya bisa naik dan turun cepat", correct: true },
          { label: "Selalu stabil setiap hari", correct: false },
          { label: "Keuntungan dijamin tetap", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm5/realm-5_c.webp",
        text:
          "Benar! Saham adalah angin perubahan: peluang besar, risiko juga nyata. Portal puncak terbuka!"
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm5/realm-5_w.webp",
        text:
          "Salah. Saham tidak stabil dan tidak menjamin untung pasti. Ulangi realm ini."
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
        text:
          "Kamu masuk Crypto Nebula, awan energi digital yang berputar liar. Partikel cahayanya indah, tapi tak terduga."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e2.webp",
        text:
          "Nebula Navigator berkata: crypto adalah aset digital. Harganya bisa naik sangat cepat, namun juga jatuh seketika."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm6/realm-6_e3.webp",
        text:
          "Penting membedakan crypto legal (terdaftar Bappebti) dan yang ilegal. Yang tak terdaftar sering jadi sarang penipuan."
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm6/realm-6_r.webp",
        text:
          "Lumi: “Apa ciri utama crypto sebagai investasi?”",
        choices: [
          { label: "Volatilitas sangat tinggi", correct: true },
          { label: "Stabil seperti deposito", correct: false },
          { label: "Untung pasti harian", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm6/realm-6_c.webp",
        text:
          "Tepat! Crypto bisa melonjak atau jatuh drastis. Portal nebula terbuka menuju arena berbahaya!"
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm6/realm-6_w.webp",
        text:
          "Belum tepat. Crypto tidak stabil dan tidak menjamin profit pasti. Ulangi realm ini."
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
        text:
          "Kamu dilempar ke Futures Arena, gelanggang energi berlipat. Suasana bising dan penuh kilatan listrik."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e2.webp",
        text:
          "Mecha Warden menjelaskan: futures adalah kontrak jual-beli di masa depan. Leverage membuat potensi untung besar… tapi risiko juga berlipat."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm7/realm-7_e3.webp",
        text:
          "Jika harga bergerak melawan posisimu, kamu bisa terkena margin call dan kehilangan dana cepat. Ini instrumen berisiko tertinggi sebelum realm final."
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm7/realm-7_r.webp",
        text:
          "Lumi: “Apa karakter utama futures?”",
        choices: [
          { label: "Leverage → risiko & potensi rugi sangat tinggi", correct: true },
          { label: "Aman stabil seperti obligasi", correct: false },
          { label: "Keuntungan pasti 10% per hari", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm7/realm-7_c.webp",
        text:
          "Benar! Futures adalah arena kekuatan berlipat yang berbahaya. Portal terakhir terbuka!"
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm7/realm-7_w.webp",
        text:
          "Salah. Futures bukan instrumen aman & bukan profit pasti. Ulangi realm ini dulu."
      }
    ]
  },

  // =======================================================
  // REALM 8 — Abyss of Lies (Final Boss / Penipuan)
  // =======================================================
  {
    id: 8,
    name: "Abyss of Lies",
    character: "assets/characters/realm8_shadow-whisperer.webp",
    bg: "assets/backgrounds/bg_realm-8.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e1.webp",
        text:
          "Kamu tiba di istana hitam melayang: Abyss of Lies. Ribuan bisikan janji palsu memenuhi udara."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e2.webp",
        text:
          "Deception King memunculkan ilusi: “profit harian”, “tanpa risiko”, “robot trading auto kaya”. Janji ini adalah senjata mereka."
      },
      {
        type: "edu",
        img: "assets/illustrations/realm8/realm-8_e3.webp",
        text:
          "Ia menunjukkan sisi terang (legal diawasi OJK/Bappebti/BI) dan sisi gelap (ponzi, robot trading bodong, aplikasi ilegal). Kenali red flag-nya."
      },
      {
        type: "riddle",
        img: "assets/illustrations/realm8/realm-8_r.webp",
        text:
          "FINAL BOSS! Lumi: “Apa tanda paling umum penipuan investasi?”",
        choices: [
          { label: "Janji untung tetap harian tanpa risiko", correct: true },
          { label: "Terdaftar resmi OJK/Bappebti", correct: false },
          { label: "Transparan menjelaskan risiko", correct: false }
        ]
      },
      {
        type: "correct",
        img: "assets/illustrations/realm8/realm-8_c.webp",
        text:
          "Jawabanmu benar! Deception King runtuh jadi cahaya. Kamu menang dan siap kembali ke dunia nyata."
      },
      {
        type: "wrong",
        img: "assets/illustrations/realm8/realm-8_w.webp",
        text:
          "Salah. Itulah cara korban terjebak: percaya janji tanpa logika. Ulangi realm final ini!"
      }
    ]
  },

  // =======================================================
  // EPILOG — Return to the Real World
  // =======================================================
  {
    id: 9,
    name: "Epilog",
    bg: "assets/backgrounds/bg_epilog.webp",
    pages: [
      {
        type: "edu",
        img: "assets/illustrations/epilog.webp",
        text:
          "Portal terakhir menutup perlahan. Lumi berbisik: “Perjalananmu selesai, tapi keputusan nyata dimulai sekarang. Gunakan pengetahuanmu untuk melangkah bijak dan waspada.”"
      },
      {
        type: "correct",
        img: "assets/illustrations/epilog.webp",
        text:
          "Terima kasih sudah menyelesaikan perjalanan edukasi investasi ini. Kamu bisa kembali ke beranda atau mengulang dari awal."
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
