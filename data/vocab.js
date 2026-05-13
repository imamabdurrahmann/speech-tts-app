/* ============================================================
   VOCAB — Vocabulary Words for Speaking Practice
   ============================================================ */

window.VOCAB_DATA = {

    /* -------------------------------------------------------
       Categories
       ------------------------------------------------------- */

    categories: [
        { id: "all", label: "Semua Kata" },
        { id: "technology", label: "Teknologi" },
        { id: "business", label: "Bisnis" },
        { id: "science", label: "Sains" },
        { id: "health", label: "Kesehatan" },
        { id: "social", label: "Sosial" },
        { id: "environment", label: "Lingkungan" },
        { id: "emotions", label: "Emosi" }
    ],

    /* -------------------------------------------------------
       Vocabulary Words
       Each word has:
         - word: the vocabulary term
         - pronunciation: phonetic spelling
         - partOfSpeech: noun, verb, adjective, etc.
         - definition: clear explanation
         - example: example sentence
         - speakingAngle: how to use this word in speech
       ------------------------------------------------------- */

    words: [

        /* === TECHNOLOGY === */
        {
            id: "tech-1",
            category: "technology",
            word: "Disruptive",
            pronunciation: "/dis-RUP-tiv/",
            partOfSpeech: "adjective",
            definition: "Teknologi atau inovasi yang secara fundamental mengubah cara industri bekerja dan menggulingkan pemain yang sudah ada.",
            example: "The smartphone was a disruptive technology that changed how we communicate, shop, and access information.",
            speakingAngle: "Gunakan untuk teknologi atau perubahan yang mengubah paradigma. Kata ini menunjukkan pemahaman tentang inovasi yang mengubah pasar. Contoh: 'AI adalah teknologi disruptif yang mengubah hampir setiap sektor industri.'"
        },
        {
            id: "tech-2",
            category: "technology",
            word: "Scalability",
            pronunciation: "/skay-luh-BIL-uh-tee/",
            partOfSpeech: "noun",
            definition: "Kemampuan suatu sistem atau infrastruktur untuk berkembang dan menangani beban yang lebih besar secara efisien.",
            example: "Cloud computing offers excellent scalability, allowing businesses to increase resources on demand.",
            speakingAngle: "Sering dipakai dalam konteks teknologi dan bisnis. Tunjukkan bahwa kamu paham tentang perencanaan kapasitas. Contoh: 'Sebelum meningkatkan skala, pastikan sistem punya skalabilitas yang cukup untuk menangani pertumbuhan.'"
        },
        {
            id: "tech-3",
            category: "technology",
            word: "Algorithm",
            pronunciation: "/AL-guh-rith-um/",
            partOfSpeech: "noun",
            definition: "Serangkaian instruksi atau aturan yang diikuti komputer untuk menyelesaikan masalah atau menyelesaikan tugas.",
            example: "Social media platforms use algorithms to determine what content appears on your feed.",
            speakingAngle: "Bisa dipakai untuk topik teknologi, etika, atau dampak media sosial. Jangan cuma sebut algoritma, tapi jelaskan apa yang dilakukan. Contoh: 'Algoritma platform media sosial menentukan informasi apa yang kita lihat setiap hari.'"
        },
        {
            id: "tech-4",
            category: "technology",
            word: "Cybersecurity",
            pronunciation: "/SAHY-bur-siy-kyoor-i-tee/",
            partOfSpeech: "noun",
            definition: "Praktik melindungi sistem, jaringan, dan program dari serangan digital atau peretasan.",
            example: "As more businesses move online, cybersecurity has become a top priority for organizations of all sizes.",
            speakingAngle: "Relevan untuk diskusi tentang privasi, keamanan data, dan kebijakan. Bisa dikaitkan dengan kasus peretasan atau regulasi. Contoh: 'Investasi di bidang keamanan siber sama pentingnya dengan investasi di pengembangan produk.'"
        },
        {
            id: "tech-5",
            category: "technology",
            word: "Automation",
            pronunciation: "/aw-tuh-MAY-shun/",
            partOfSpeech: "noun",
            definition: "Penggunaan teknologi untuk melakukan tugas-tugas secara otomatis tanpa campur tangan manusia.",
            example: "Automation in manufacturing has significantly increased production efficiency and reduced labor costs.",
            speakingAngle: "Topik hangat tentang automation versus lapangan kerja. Selalu gunakan dengan nuansa yang tepat karena automation memang menggantikan beberapa pekerjaan tapi juga menciptakan yang baru. Contoh: 'Otomatisasi mengubah sifat pekerjaan, bukan menghilangkan pekerjaan secara keseluruhan.'"
        },
        {
            id: "tech-6",
            category: "technology",
            word: "Artificial Intelligence",
            pronunciation: "/ar-tuh-FISH-ul in-TEL-uh-juns/",
            partOfSpeech: "noun (phrase)",
            definition: "Kemampuan mesin dan komputer untuk meniru kemampuan berpikir dan belajar manusia.",
            example: "Artificial intelligence is transforming healthcare by helping doctors diagnose diseases more accurately.",
            speakingAngle: "Kata ini sangat serbaguna dan bisa dipakai untuk hampir semua topik. Selalu berikan contoh konkret. Contoh: 'AI bukan hanya tentang robot, tapi tentang pengambilan keputusan yang lebih cepat dan akurat.'"
        },
        {
            id: "tech-7",
            category: "technology",
            word: "User Experience",
            pronunciation: "/YOO-zur ik-STEE-ree-uns/",
            partOfSpeech: "noun (phrase)",
            definition: "Keseluruhan pengalaman pengguna saat berinteraksi dengan produk, layanan, atau sistem.",
            example: "A good user experience design focuses on making products intuitive and enjoyable to use.",
            speakingAngle: "Gunakan saat membahas pengembangan produk atau kepuasan pengguna. Fokus pada dampak ke pengguna. Contoh: 'Pengalaman pengguna yang baik bukan soal estetika, tapi seberapa mudah pengguna menyelesaikan tugasnya.'"
        },
        {
            id: "tech-8",
            category: "technology",
            word: "Data-Driven",
            pronunciation: "/DAY-tuh DRIV-un/",
            partOfSpeech: "adjective",
            definition: "Pendekatan pengambilan keputusan berdasarkan analisis data dan bukti, bukan hanya intuisi atau pengalaman.",
            example: "Data-driven companies are 23 times more likely to acquire customers and 6 times more likely to retain them.",
            speakingAngle: "Sering dipakai dalam konteks bisnis modern. Kontraskan dengan keputusan berbasis perasaan atau opiniseorang. Contoh: 'Perusahaan yang berbasis data punya keunggulan kompetitif karena keputusan mereka didasarkan bukti, bukan asumsi.'"
        },
        {
            id: "tech-9",
            category: "technology",
            word: "Cloud Computing",
            pronunciation: "/klowd kum-PYOO-ting/",
            partOfSpeech: "noun (phrase)",
            definition: "Penyampaian layanan komputasi seperti server, penyimpanan, database, jaringan melalui internet.",
            example: "Small businesses can now access enterprise-level infrastructure through cloud computing at a fraction of the cost.",
            speakingAngle: "Bahas tentang aksesibilitas dan demokratisasi teknologi. Kontraskan dengan infrastruktur TI tradisional. Contoh: 'Komputasi awan membuat startup bisa bersaing dengan perusahaan besar karena akses ke infrastruktur yang sama.'"
        },
        {
            id: "tech-10",
            category: "technology",
            word: "Internet of Things",
            pronunciation: "/IN-tur-net uv THINGZ/",
            partOfSpeech: "noun (phrase)",
            definition: "Konsep jaringan perangkat fisik yang terhubung ke internet dan saling bertukar data tanpa campur tangan manusia.",
            example: "Smart thermostats, fitness trackers, and connected refrigerators are examples of the Internet of Things in daily life.",
            speakingAngle: "Relevan untuk rumah cerdas, kota cerdas, atau pemantauan kesehatan. Bahas tentang kenyamanan versus pertukaran privasi. Contoh: 'Internet of Things mengubah rumah jadi lingkungan yang cerdas, tapi juga menimbulkan pertanyaan tentang privasi data.'"
        },

        /* === BUSINESS === */
        {
            id: "biz-1",
            category: "business",
            word: "Stakeholder",
            pronunciation: "/STAYK-hohl-der/",
            partOfSpeech: "noun",
            definition: "Setiap pihak yang memiliki kepentingan dalam keberhasilan atau kegagalan suatu organisasi atau proyek.",
            example: "Effective leaders consider the needs of all stakeholders, including employees, customers, shareholders, and the community.",
            speakingAngle: "Kata yang kuat untuk menunjukkan pemahaman tentang kompleksitas organisasi. Selalu identifikasi siapa stakeholder-nya. Contoh: 'Dalam keputusan ini, kita perlu mempertimbangkan perspektif semua stakeholder, dari karyawan sampai komunitas.'"
        },
        {
            id: "biz-2",
            category: "business",
            word: "Leverage",
            pronunciation: "/LEV-er-ij/",
            partOfSpeech: "verb / noun",
            definition: "Menggunakan sesuatu secara strategis untuk mendapatkan keuntungan atau dampak yang lebih besar.",
            example: "We can leverage our existing customer base to launch the new product line.",
            speakingAngle: "Kata serbaguna yang bisa dipakai untuk sumber daya, relasi, teknologi, atau data. Tapi jangan terlalu sering dipakai. Contoh: 'Daripada mulai dari nol, manfaatkan jaringan yang sudah ada untuk mempercepat pertumbuhan.'"
        },
        {
            id: "biz-3",
            category: "business",
            word: "ROI (Return on Investment)",
            pronunciation: "/ri-TURN on in-VEST-munt/",
            partOfSpeech: "noun (phrase)",
            definition: "Ukuran keuntungan atau return yang diperoleh dari investasi dibandingkan dengan biaya yang dikeluarkan.",
            example: "The marketing team demonstrated a strong ROI, generating three dollars for every dollar spent on advertising.",
            speakingAngle: "Wajib untuk topik bisnis dan keuangan. Jangan cuma sebut ROI, tapi kuantifikasi nilainya. Contoh: 'Kita memperkirakan ROI sekitar 200% dalam 12 bulan dari investasi ini.'"
        },
        {
            id: "biz-4",
            category: "business",
            word: "Pivot",
            pronunciation: "/PIV-uht/",
            partOfSpeech: "verb",
            definition: "Mengubah arah strategi bisnis secara fundamental berdasarkan feedback atau perubahan kondisi pasar.",
            example: "Many successful companies had to pivot during the pandemic, shifting from physical retail to e-commerce.",
            speakingAngle: "Pivot bukan berarti gagal, tapi berarti adaptif dan cerdas. Gunakan untuk cerita tentang ketahanan dan pemikiran strategis. Contoh: 'Pivot bukan tanda kelemahan, justru tanda bahwa kita responsif terhadap sinyal pasar.'"
        },
        {
            id: "biz-5",
            category: "business",
            word: "Benchmark",
            pronunciation: "/BENCH-mark/",
            partOfSpeech: "noun / verb",
            definition: "Standar atau tolok ukur yang digunakan untuk membandingkan performa atau kualitas.",
            example: "We use industry benchmarks to evaluate our performance against competitors.",
            speakingAngle: "Gunakan untuk menunjukkan bahwa kamu tahu standar industri dan punya data untuk mendukung klaim. Contoh: 'Skor kepuasan pelanggan kita di 92%, ini di atas standar industri yang sekitar 78%.'"
        },
        {
            id: "biz-6",
            category: "business",
            word: "Synergy",
            pronunciation: "/SIN-er-jee/",
            partOfSpeech: "noun",
            definition: "Kombinasi dua atau lebih elemen yang menghasilkan hasil lebih besar dari jumlah masing-masing bagian secara terpisah.",
            example: "The merger created synergies that reduced operational costs by 30 percent.",
            speakingAngle: "Sering dipakai dalam konteks M&A atau kolaborasi. Jangan pakai secara kosong, tapi konkretkan sinerginya apa. Contoh: 'Sinergi antara tim produk dan penjualan terlihat dari: produk jadi lebih sesuai dengan kebutuhan pelanggan.'"
        },
        {
            id: "biz-7",
            category: "business",
            word: "Agile",
            pronunciation: "/AJ-ul/",
            partOfSpeech: "adjective",
            definition: "Pendekatan manajemen yang menekankan fleksibilitas, adaptasi cepat, dan pengiriman nilai secara iteratif.",
            example: "Agile methodology allows teams to respond to changes quickly and deliver value to customers faster.",
            speakingAngle: "Agile bukan hanya untuk teknologi, bisa untuk gaya manajemen, budaya organisasi, atau pola pikir. Contoh: 'Pendekatan agile bukan cuma tentang sprint dan rapat harian, ini tentang budaya yang menerima perubahan.'"
        },
        {
            id: "biz-8",
            category: "business",
            word: "Monetize",
            pronunciation: "/MON-uh-tahyz/",
            partOfSpeech: "verb",
            definition: "Mengubah sesuatu menjadi sumber pendapatan atau menghasilkan uang dari suatu aktivitas, aset, atau platform.",
            example: "The company struggled to monetize its large user base until it introduced a premium subscription model.",
            speakingAngle: "Relevan untuk startup, kreator konten, atau bisnis platform. Selalu bicara tentang model bisnis juga. Contoh: 'Platform ini punya jutaan pengguna, tantangannya adalah bagaimana menghasilkan pendapatan tanpa membuat pengguna kecewa.'"
        },
        {
            id: "biz-9",
            category: "business",
            word: "Upskill",
            pronunciation: "/UP-skil/",
            partOfSpeech: "verb",
            definition: "Melatih atau mengembangkan skill baru untuk meningkatkan kemampuan kerja seseorang.",
            example: "Companies are investing in upskilling programs to prepare their workforce for digital transformation.",
            speakingAngle: "Upskill versus reskill, upskill berarti meningkatkan skill yang sudah ada, reskill berarti belajar skill yang sama sekali baru. Gunakan untuk topik pengembangan tenaga kerja. Contoh: 'Peningkatan skill bukan pengeluaran, ini investasi yang memberikan hasil dalam bentuk produktivitas dan retensi.'"
        },
        {
            id: "biz-10",
            category: "business",
            word: "Due Diligence",
            pronunciation: "/doo DIL-uh-jens/",
            partOfSpeech: "noun (phrase)",
            definition: "Proses investigasi dan analisis menyeluruh sebelum mengambil keputusan bisnis atau investasi.",
            example: "Before acquiring the startup, we conducted thorough due diligence on their financials, technology, and team.",
            speakingAngle: "Menunjukkan bahwa kamu teliti dan tidak membuat keputusan gegabah. Gunakan untuk M&A, kemitraan, atau diskusi investasi. Contoh: 'Due diligence menunjukkan ada beberapa hal yang perlu ditangani sebelum kita melanjutkan.'"
        },

        /* === SCIENCE === */
        {
            id: "sci-1",
            category: "science",
            word: "Correlation",
            pronunciation: "/kor-uh-LAY-shun/",
            partOfSpeech: "noun",
            definition: "Hubungan statistik antara dua variabel yang bergerak bersama, tapi tidak berarti satu menyebabkan yang lain.",
            example: "There is a strong correlation between education levels and income, but this does not prove causation.",
            speakingAngle: "PENTING: korelasi bukan berarti kausalitas. Gunakan untuk mengajarkan pemikiran kritis dalam analisis data. Contoh: 'Data menunjukkan korelasi, tapi kita perlu penelitian lebih dalam untuk membuktikan kausalitas.'"
        },
        {
            id: "sci-2",
            category: "science",
            word: "Peer Review",
            pronunciation: "/peer ri-VYOO/",
            partOfSpeech: "noun (phrase)",
            definition: "Proses evaluasi karya ilmiah oleh ahli lain di bidang yang sama sebelum dipublikasikan.",
            example: "Peer review ensures that scientific claims are scrutinized by qualified experts before being accepted as valid research.",
            speakingAngle: "Bahas tentang kredibilitas dan ketelitian dalam komunikasi sains. Kontraskan dengan informasi yang belum melalui tinjauan sejawat. Contoh: 'Klaim ini belum melalui tinjauan sejawat, jadi kita perlu hati-hati sebelum menerimanya sebagai fakta.'"
        },
        {
            id: "sci-3",
            category: "science",
            word: "Hypothesis",
            pronunciation: "/hahy-POTH-uh-sis/",
            partOfSpeech: "noun",
            definition: "Penjelasan awal yang bisa diuji dan diuji kebenarannya melalui eksperimen atau pengamatan.",
            example: "The scientist formed a hypothesis that increased screen time would negatively affect sleep quality in teenagers.",
            speakingAngle: "Penting untuk pola pikir ilmiah. Hipotesis adalah prediksi yang bisa diuji, bukan tebakan random. Contoh: 'Berdasarkan pengamatan kita, hipotesis saya adalah: faktor X adalah penyebab utama dari fenomena ini.'"
        },
        {
            id: "sci-4",
            category: "science",
            word: "Replication",
            pronunciation: "/rep-luh-KAY-shun/",
            partOfSpeech: "noun",
            definition: "Upaya untuk mengulang penelitian atau eksperimen untuk memverifikasi apakah hasil yang sama bisa dicapai.",
            example: "A scientific finding becomes more credible when it can be replicated by independent research teams.",
            speakingAngle: "Replication crisis adalah topik penting dalam komunikasi sains. Bicara tentang reprodusibilitas dan kredibilitas. Contoh: 'Klaim ini menarik, tapi kalau belum ada studi replikasi, kita perlu tetap berhati-hati.'"
        },
        {
            id: "sci-5",
            category: "science",
            word: "Empirical",
            pronunciation: "/em-PIR-i-kuhl/",
            partOfSpeech: "adjective",
            definition: "Berdasarkan pengamatan, eksperimen, atau pengalaman langsung, bukan teori atau spekulasi.",
            example: "The decision to change the policy was based on empirical evidence from pilot programs.",
            speakingAngle: "Bukti empiris berasal dari data atau pengalaman nyata, bukan teoretis atau berbasis opini. Contoh: 'Pendekatan kita berbasis empiris, kita sudah menguji di 3 pasar sebelum peluncuran penuh.'"
        },
        {
            id: "sci-6",
            category: "science",
            word: "Paradigm Shift",
            pronunciation: "/PAR-uh-dahym SHIFT/",
            partOfSpeech: "noun (phrase)",
            definition: "Perubahan fundamental dalam cara pandang atau konsep dasar yang mengubah pemahaman di seluruh bidang.",
            example: "The discovery of DNA caused a paradigm shift in how we understand genetics and biology.",
            speakingAngle: "Gunakan untuk menggambarkan perubahan besar yang mengubah cara pandang. Tapi jangan terlalu sering dipakai, hanya untuk perubahan yang benar-benar mendasar. Contoh: 'Pandemi menyebabkan pergeseran paradigma dalam cara kita memandang kerja jarak jauh dan transformasi digital.'"
        },
        {
            id: "sci-7",
            category: "science",
            word: "Variable",
            pronunciation: "/VAIR-ee-uh-buhl/",
            partOfSpeech: "noun",
            definition: "Faktor yang bisa berubah atau bervariasi dan dapat diukur dalam suatu penelitian atau eksperimen.",
            example: "In the study, the independent variable was the amount of sleep, and the dependent variable was cognitive performance.",
            speakingAngle: "Berguna untuk diskusi tentang metodologi penelitian. Identifikasi variabel apa yang diteliti. Contoh: 'Salah satu keterbatasan dari studi ini adalah adanya variabel confounding, ada faktor lain yang mungkin mempengaruhi hasil.'"
        },
        {
            id: "sci-8",
            category: "science",
            word: "Systemic",
            pronunciation: "/sis-TEM-ik/",
            partOfSpeech: "adjective",
            definition: "Berhubungan dengan atau mempengaruhi keseluruhan sistem, bukan hanya bagian tertentu.",
            example: "Climate change is a systemic problem that requires coordinated global action across multiple sectors.",
            speakingAngle: "Gunakan untuk menunjukkan pemahaman bahwa masalah kompleks butuh solusi holistik. Contoh: 'Kemiskinan bukan kegagalan individu, ini masalah sistemik yang membutuhkan pendekatan multifaceted.'"
        },

        /* === HEALTH === */
        {
            id: "health-1",
            category: "health",
            word: "Holistic",
            pronunciation: "/hoh-LIS-tik/",
            partOfSpeech: "adjective",
            definition: "Pendekatan yang mempertimbangkan keseluruhan orang atau sistem, fisik, mental, emosional, dan sosial.",
            example: "Holistic healthcare considers not just physical symptoms but also mental well-being, lifestyle, and social factors.",
            speakingAngle: "Kontraskan dengan pendekatan yang cuma fokus satu aspek. Holistik berarti melihat keseluruhan orang. Contoh: 'Kesehatan bukan cuma tidak sakit, pendekatan holistik melihat kesejahteraan fisik, mental, dan sosial sebagai satu kesatuan.'"
        },
        {
            id: "health-2",
            category: "health",
            word: "Preventive",
            pronunciation: "/pri-VEN-tiv/",
            partOfSpeech: "adjective",
            definition: "Tindakan atau langkah yang dilakukan untuk mencegah masalah kesehatan sebelum terjadi.",
            example: "Preventive medicine focuses on maintaining health and preventing diseases rather than treating them after they occur.",
            speakingAngle: "Preventif versus reaktif. Pencegahan lebih baik dan lebih murah daripada pengobatan. Contoh: 'Investasi di kesehatan preventif lebih hemat biaya daripada pengobatan, setiap satu dolar untuk pencegahan menghemat sepuluh dolar untuk pengobatan.'"
        },
        {
            id: "health-3",
            category: "health",
            word: "Mental Health",
            pronunciation: "/MEN-tuhl helth/",
            partOfSpeech: "noun (phrase)",
            definition: "Kondisi kesejahteraan emosional, psikologis, dan sosial seseorang yang mempengaruhi cara berpikir, merasa, dan bertindak.",
            example: "Companies are increasingly recognizing the importance of supporting employee mental health as part of their wellness programs.",
            speakingAngle: "Topik yang sangat penting. Bicara tentang penghapusan stigma dan dukungan sistemik. Contoh: 'Kesehatan mental adalah prioritas, bukan kemewahan, sama pentingnya dengan kesehatan fisik.'"
        },
        {
            id: "health-4",
            category: "health",
            word: "Resilience",
            pronunciation: "/ri-ZIL-yuns/",
            partOfSpeech: "noun",
            definition: "Kemampuan untuk pulih dari kesulitan, beradaptasi terhadap perubahan, dan tetap kuat di bawah tekanan.",
            example: "Building resilience involves developing coping strategies, maintaining social support, and fostering a positive mindset.",
            speakingAngle: "Resiliensi bukan berarti tidak pernah kesulitan, tapi kemampuan untuk bangkit kembali. Bicara tentang resiliensi individu dan organisasi. Contoh: 'Resiliensi bukan tentang menghindari stres, tapi tentang punya alat untuk menghadapi dan pulih dari kemalangan.'"
        },
        {
            id: "health-5",
            category: "health",
            word: "Burnout",
            pronunciation: "/BURN-owt/",
            partOfSpeech: "noun",
            definition: "Kondisi kelelahan fisik, emosional, dan mental yang disebabkan oleh stres berlebihan dan kurangnya keseimbangan hidup.",
            example: "Remote workers experiencing burnout often struggle to disconnect from work when their home becomes their office.",
            speakingAngle: "Topik yang sangat relevan di era budaya kerja modern. Bicara tentang tanda-tanda, penyebab, dan pencegahan. Contoh: 'Burnout tidak terjadi dalam semalam, ini proses bertahap yang dimulai dari stres kronis yang tidak ditangani.'"
        },
        {
            id: "health-6",
            category: "health",
            word: "Wellbeing",
            pronunciation: "/WEL-bee-ing/",
            partOfSpeech: "noun",
            definition: "Kondisi umum kesehatan, kebahagiaan, dan kepuasan seseorang, mencakup fisik, mental, emosional, dan sosial.",
            example: "Organizations that prioritize employee wellbeing report higher productivity, lower absenteeism, and better retention rates.",
            speakingAngle: "Kesejahteraan lebih luas dari kesehatan. Mencakup semua dimensi kehidupan. Contoh: 'Kesejahteraan bukan cuma soal makan sehat dan olahraga, ini juga tentang tujuan hidup, hubungan, dan keamanan finansial.'"
        },

        /* === SOCIAL === */
        {
            id: "social-1",
            category: "social",
            word: "Empathy",
            pronunciation: "/EM-puh-thee/",
            partOfSpeech: "noun",
            definition: "Kemampuan untuk memahami dan merasakan apa yang orang lain rasakan, melihat situasi dari perspektif mereka.",
            example: "Good leaders practice empathy, taking time to understand their team members' perspectives and challenges.",
            speakingAngle: "Empati versus simpati. Empati berarti memahami DAN merasakan bersama seseorang. Sangat penting untuk kepemimpinan dan keterampilan interpersonal. Contoh: 'Empati bukan berarti setuju dengan semua orang, tapi berarti kita bisa memahami dari mana mereka berasal.'"
        },
        {
            id: "social-2",
            category: "social",
            word: "Inclusion",
            pronunciation: "/in-KLOO-zhun/",
            partOfSpeech: "noun",
            definition: "Praktik menciptakan lingkungan di mana setiap orang merasa diterima, dihargai, dan memiliki akses yang sama.",
            example: "Inclusion goes beyond diversity, it's about creating an environment where diverse people can fully participate and contribute.",
            speakingAngle: "Inklusi versus keragaman. Keragaman berarti siapa yang ada di ruangan, inklusi berarti apakah mereka merasa diterima dan dihargai. Contoh: 'Keragaman itu penting, tapi tanpa inklusi, tim yang beragam tidak akan bekerja maksimal.'"
        },
        {
            id: "social-3",
            category: "social",
            word: "Stereotype",
            pronunciation: "/STER-ee-uh-tahyp/",
            partOfSpeech: "noun",
            definition: "Generalisasi yang disederhanakan tentang kelompok tertentu yang tidak mempertimbangkan perbedaan individu.",
            example: "Stereotypes can lead to unconscious bias, affecting how people are treated in workplaces and social settings.",
            speakingAngle: "Bicara tentang dampak stereotip terhadap individu dan masyarakat. Tentang kesadaran dan upaya sadar untuk menghindari. Contoh: 'Kita semua punya stereotip, yang penting adalah kesadaran diri dan kemauan untuk menantang asumsi kita sendiri.'"
        },
        {
            id: "social-4",
            category: "social",
            word: "Empowerment",
            pronunciation: "/em-POW-ermunt/",
            partOfSpeech: "noun",
            definition: "Proses memberikan individu atau kelompok kekuatan, otoritas, dan kepercayaan diri untuk mengambil kontrol atas hidup mereka.",
            example: "Women's empowerment programs focus on education, economic independence, and equal opportunities.",
            speakingAngle: "Penguatan versus pemberdayaan. Pemberdayaan berarti memberikan kekuatan dan kekuasaan, bukan cuma memberikan alat. Contoh: 'Pemberdayaan bukan tentang melakukan sesuatu UNTUK orang lain, tapi tentang memberi mereka sumber daya dan kepercayaan diri untuk melakukan sendiri.'"
        },
        {
            id: "social-5",
            category: "social",
            word: "Polarization",
            pronunciation: "/poh-ler-uh-ZAY-shun/",
            partOfSpeech: "noun",
            definition: "Proses di mana masyarakat menjadi semakin terpecah menjadi kelompok-kelompok dengan pandangan yang saling bertentangan.",
            example: "Social media algorithms can contribute to polarization by creating echo chambers that reinforce existing beliefs.",
            speakingAngle: "Topik yang sangat relevan di era media sosial. Bicara tentang penyebab dan solusi. Contoh: 'Polarisasi terjadi ketika kita hanya melihat perspektif yang sudah sejalan dengan kita, solusinya adalah mencari secara aktif berbagai sudut pandang.'"
        },
        {
            id: "social-6",
            category: "social",
            word: "Microaggression",
            pronunciation: "/MAHY-kroh-uh-GRESH-uhn/",
            partOfSpeech: "noun",
            definition: "Komentar atau tindakan halus yang menyampaikan pesan negatif tentang identitas atau kelompok tertentu.",
            example: "Microaggressions can accumulate over time and significantly impact the mental health of targeted individuals.",
            speakingAngle: "Topik yang nuanced. Tidak selalu intencional, tapi dampaknya tetap nyata. Contoh: 'Microaggression sering bukan berarti bermaksud jahat, tapi yang sama pentingnya adalah mengakui dampaknya, bukan cuma niat.'"
        },
        {
            id: "social-7",
            category: "social",
            word: "Equity",
            pronunciation: "/EK-wi-tee/",
            partOfSpeech: "noun",
            definition: "Prinsip memberikan apa yang dibutuhkan setiap orang untuk mencapai hasil yang adil.",
            example: "Equity means providing resources and opportunities based on individual needs, not treating everyone exactly the same.",
            speakingAngle: "Keadilan versus kesetaraan. Kesetaraan berarti perlakuan yang sama, keadilan berarti hasil yang adil. Contoh: 'Kesetaraan adalah tentang memberi semua orang sumber daya yang sama, keadilan adalah tentang memberi semua orang apa yang mereka butuhkan untuk berhasil.'"
        },

        /* === ENVIRONMENT === */
        {
            id: "env-1",
            category: "environment",
            word: "Sustainability",
            pronunciation: "/suh-STAY-nuh-bil-i-tee/",
            partOfSpeech: "noun",
            definition: "Praktik memenuhi kebutuhan saat ini tanpa mengorbankan kemampuan generasi masa depan untuk memenuhi kebutuhan mereka.",
            example: "Sustainability in business means balancing profit with environmental responsibility and social impact.",
            speakingAngle: "Keberlanjutan bukan cuma lingkungan, ada tiga pilar: lingkungan, sosial, dan ekonomi. Contoh: 'Keberlanjutan bukan pengeluaran, ini investasi jangka panjang yang menguntungkan baik planet maupun keuntungan.'"
        },
        {
            id: "env-2",
            category: "environment",
            word: "Carbon Footprint",
            pronunciation: "/KAR-buhn FOOT-print/",
            partOfSpeech: "noun (phrase)",
            definition: "Total jumlah gas rumah kaca yang dihasilkan oleh aktivitas seseorang, organisasi, atau produk.",
            example: "Companies are reducing their carbon footprint by switching to renewable energy and optimizing supply chains.",
            speakingAngle: "Gunakan secara khusus, bicara tentang cara khusus untuk mengurangi. Contoh: 'Jejak karbon pribadi bisa dikurangi melalui tiga area utama: transportasi, pola makan, dan kebiasaan konsumsi.'"
        },
        {
            id: "env-3",
            category: "environment",
            word: "Circular Economy",
            pronunciation: "/SUR-kyuh-ler i-KON-uh-mee/",
            partOfSpeech: "noun (phrase)",
            definition: "Sistem ekonomi yang bertujuan untuk menghilangkan sampah dan memaksimalkan penggunaan sumber daya melalui penggunaan ulang, perbaikan, pembaruan, dan daur ulang.",
            example: "A circular economy model transforms waste into resources, reducing the need for new raw materials and minimizing environmental impact.",
            speakingAngle: "Kontraskan dengan ekonomi linear. Circular berarti model yang berkelanjutan. Contoh: 'Ekonomi sirkular mengubah cara pandang kita dari pengelolaan sampah menjadi pengelolaan sumber daya, tidak ada yang menjadi sampah jika dirancang dengan benar.'"
        },
        {
            id: "env-4",
            category: "environment",
            word: "Climate Change",
            pronunciation: "/KLAY-muht CHAYNJ/",
            partOfSpeech: "noun (phrase)",
            definition: "Perubahan jangka panjang dalam pola cuaca dan suhu global akibat aktivitas manusia, terutama emisi gas rumah kaca.",
            example: "Climate change is accelerating extreme weather events, affecting agriculture, water resources, and public health worldwide.",
            speakingAngle: "Perubahan iklim versus cuaca. Perubahan iklim berarti tren jangka panjang, bukan satu kejadian cuaca. Contoh: 'Satu gelombang panas bukan perubahan iklim, tapi pola cuaca ekstrem yang semakin sering selama puluhan tahun adalah perubahan iklim.'"
        },
        {
            id: "env-5",
            category: "environment",
            word: "Biodiversity",
            pronunciation: "/BAHY-oh-dy-VER-si-tee/",
            partOfSpeech: "noun",
            definition: "Keberagaman kehidupan di bumi, termasuk spesies tumbuhan, hewan, mikroorganisme, dan ekosistem yang mereka huni.",
            example: "Biodiversity is essential for ecosystem services like pollination, water purification, and climate regulation.",
            speakingAngle: "Keanekaragaman hayati berarti variasi kehidupan. Bicara tentang mengapa ini penting untuk kelangsungan hidup dan jasa ekosistem. Contoh: 'Kehilangan keanekaragaman hayati itu serius karena setiap spesies punya peran dalam ekosistem, ketika satu hilang, efeknya menyebar ke seluruh rantai makanan.'"
        },

        /* === EMOTIONS === */
        {
            id: "emo-1",
            category: "emotions",
            word: "Mindfulness",
            pronunciation: "/MAHYND-ful-nes/",
            partOfSpeech: "noun",
            definition: "Praktik memperhatikan pikiran, perasaan, dan sensasi fisik di saat ini tanpa menghakimi.",
            example: "Practicing mindfulness for just ten minutes a day can significantly reduce stress and improve focus.",
            speakingAngle: "Mindfulness bukan meditasi. Meditasi adalah praktik, mindfulness adalah keadaan kesadaran. Contoh: 'Mindfulness bukan tentang tidak punya pikiran, tapi tentang mengamati pikiran tanpa terbawa arus olehnya.'"
        },
        {
            id: "emo-2",
            category: "emotions",
            word: "Vulnerability",
            pronunciation: "/vul-ner-uh-BIL-i-tee/",
            partOfSpeech: "noun",
            definition: "Kondisi terbuka dan jujur tentang perasaan, kelemahan, atau ketakutan seseorang.",
            example: "Leaders who show vulnerability build stronger connections with their teams and create a culture of trust.",
            speakingAngle: "Kerentanan adalah kekuatan, bukan kelemahan. Bicara tentang kepemimpinan autentik dan keamanan psikologis. Contoh: 'Menunjukkan kerentanan bukan berarti lemah, justru membutuhkan keberanian untuk mengakui bahwa kita tidak punya semua jawaban.'"
        },
        {
            id: "emo-3",
            category: "emotions",
            word: "Authenticity",
            pronunciation: "/aw-then-TIS-i-tee/",
            partOfSpeech: "noun",
            definition: "Kualitas menjadi jujur dan konsisten antara nilai internal dan tindakan eksternal.",
            example: "Authenticity in leadership means staying true to your values even when facing pressure to compromise them.",
            speakingAngle: "Autentik berarti tulus, tidak palsu atau dibuat-buat. Bicara tentang kepercayaan dan kredibilitas. Contoh: 'Orang-orang mempercayai pemimpin yang autentik karena mereka tahu bahwa apa yang kamu lihat adalah apa yang kamu dapat, tidak ada agenda tersembunyi.'"
        },
        {
            id: "emo-4",
            category: "emotions",
            word: "Self-Efficacy",
            pronunciation: "/self-EF-i-kuh-see/",
            partOfSpeech: "noun",
            definition: "Kepercayaan diri seseorang bahwa mereka mampu menyelesaikan tugas dan mencapai tujuan.",
            example: "Students with high self-efficacy are more likely to embrace challenges and persist through difficulties.",
            speakingAngle: "Self-efficacy versus kepercayaan diri. Self-efficacy adalah keyakinan akan kemampuan sendiri, bukan cuma merasa baik. Contoh: 'Self-efficacy bisa dibangun melalui empat sumber: pengalaman keberhasilan, pembelajaran dari orang lain, persuasi sosial, dan pengelolaan kondisi fisik.'"
        },
        {
            id: "emo-5",
            category: "emotions",
            word: "Ambiguity",
            pronunciation: "/am-buh-GYOO-i-tee/",
            partOfSpeech: "noun",
            definition: "Kondisi ketidakpastian atau keadaan yang bisa diinterpretasikan dengan berbagai cara.",
            example: "Thriving in ambiguity requires comfort with uncertainty, strong problem-solving skills, and adaptability.",
            speakingAngle: "Di era VUCA, kemampuan menangani ambiguitas adalah keterampilan yang kritis. Contoh: 'Kemampuan untuk beroperasi dalam ambiguitas adalah keunggulan kompetitif, banyak orang yang kesulitan di area abu-abu.'"
        },
        {
            id: "emo-6",
            category: "emotions",
            word: "Imposter Syndrome",
            pronunciation: "/im-POS-ter SIN-drohm/",
            partOfSpeech: "noun (phrase)",
            definition: "Perasaan bahwa pencapaian diri adalah kebetulan atau penipuan, meski nyata keberhasilan yang sudah dicapai.",
            example: "Even highly accomplished professionals experience imposter syndrome, feeling they do not deserve their success.",
            speakingAngle: "Topik yang relatable dan penting. Bicara tentang prevalensi dan strategi untuk mengelola. Contoh: 'Imposter syndrome menyerang mayoritas orang berprestasi, yang penting bukan menghilangkannya, tapi belajar mengelolanya dan tidak membiarkannya menghambat.'"
        },
        {
            id: "emo-7",
            category: "emotions",
            word: "Gratitude",
            pronunciation: "/GRAT-i-tood/",
            partOfSpeech: "noun",
            definition: "Kualitas bersyukurnya dan menghargai apa yang ada dalam hidup seseorang.",
            example: "Practicing gratitude daily has been shown to improve mental health, relationships, and overall well-being.",
            speakingAngle: "Praktik rasa syukur berbasis sains. Bicara tentang riset dan implementasi praktis. Contoh: 'Penelitian menunjukkan bahwa orang yang rutin berlatih rasa syukur melaporkan tingkat kebahagiaan 25% lebih tinggi, dan ini bukan korelasi, sudah terbukti secara eksperimental.'"
        },
        {
            id: "emo-8",
            category: "emotions",
            word: "Compassion",
            pronunciation: "/kuhm-PASH-uhn/",
            partOfSpeech: "noun",
            definition: "Kesadaran dan empati terhadap penderitaan orang lain, disertai dengan keinginan untuk membantu.",
            example: "Compassion in the workplace means supporting colleagues through difficult times without judgment.",
            speakingAngle: "Belas kasih versus empati. Belas kasih berarti empati plus keinginan untuk bertindak. Bicara tentang belas kasihan praktis. Contoh: 'Kepemimpinan yang penuh belas kasih bukan berarti lemah, justru sebaliknya, hal ini menciptakan lingkungan di mana orang merasa aman untuk mengambil risiko dan menunjukkan kelemahan.'"
        }
    ]
};

/* ============================================================
   VOCAB HELPERS
   ============================================================ */

window.VocabHelper = {

    /**
     * Get random word by category
     * @param {string} categoryId - Category ID or "all"
     * @returns {Object} Random word object
     */
    getRandomWord: function (categoryId) {
        var words = window.VOCAB_DATA.words;
        var filtered;

        if (categoryId === "all" || !categoryId) {
            filtered = words;
        } else {
            filtered = [];
            for (var i = 0; i < words.length; i++) {
                if (words[i].category === categoryId) {
                    filtered.push(words[i]);
                }
            }
        }

        if (filtered.length === 0) {
            return null;
        }

        var index = Math.floor(Math.random() * filtered.length);
        return filtered[index];
    },

    /**
     * Get all categories
     * @returns {Array} Array of category objects
     */
    getCategories: function () {
        return window.VOCAB_DATA.categories;
    },

    /**
     * Get count by category
     * @returns {Object} Category counts
     */
    getCountByCategory: function () {
        var words = window.VOCAB_DATA.words;
        var categories = window.VOCAB_DATA.categories;
        var counts = { all: words.length };

        for (var i = 0; i < categories.length; i++) {
            var cat = categories[i];
            if (cat.id !== "all") {
                var count = 0;
                for (var j = 0; j < words.length; j++) {
                    if (words[j].category === cat.id) {
                        count++;
                    }
                }
                counts[cat.id] = count;
            }
        }

        return counts;
    },

    /**
     * Get full text for TTS
     * @param {Object} wordObj - Word object
     * @returns {string} Text for TTS
     */
    getTtsText: function (wordObj) {
        if (!wordObj) return "";
        return wordObj.word + ". " +
            wordObj.partOfSpeech + ". " +
            wordObj.definition + ". " +
            "Contoh: " + wordObj.example + ". " +
            "Sudut pandang berbicara: " + wordObj.speakingAngle;
    }
};
