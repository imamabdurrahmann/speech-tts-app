/* ============================================================
   INTERVIEW — Questions, Frameworks & Sample Answers
   ============================================================ */

window.INTERVIEW_DATA = {

    /* -------------------------------------------------------
       Frameworks Reference
       ------------------------------------------------------- */

    frameworks: {
        STAR: {
            title: "STAR",
            fullName: "Situation, Task, Action, Result",
            description: "Framework untuk menjawab pertanyaan behavioral dengan struktur cerita yang jelas dan terorganisir.",
            steps: [
                { label: "S", name: "Situation", desc: "Konteks dan situasi yang kamu hadapi" },
                { label: "T", name: "Task", desc: "Tugas dan tanggung jawabmu saat itu" },
                { label: "A", name: "Action", desc: "Langkah-langkah spesifik yang kamu ambil" },
                { label: "R", name: "Result", desc: "Hasil nyata dari tindakanmu (gunakan angka kalau bisa)" }
            ],
            example: "S: Saat saya bekerja sebagai tim leader di proyek X, kami menghadapi tenggat waktu yang sangat ketat.\nT: Tugas saya adalah memastikan proyek selesai tepat waktu tanpa mengorbankan kualitas.\nA: Saya melakukan reorganisasi prioritas, memecah tugas ke subunit kecil, dan mengadakan daily standup 15 menit.\nR: Proyek selesai 2 hari sebelum deadline dengan tingkat kepuasan klien 95%."
        },

        PREP: {
            title: "PREP",
            fullName: "Point, Reason, Example, Point",
            description: "Framework untuk menyampaikan pendapat atau poin argumen dengan jelas dan meyakinkan.",
            steps: [
                { label: "P", name: "Point", desc: "Nyatakan poin utama / kesimpulan di awal" },
                { label: "R", name: "Reason", desc: "Berikan alasan yang mendukung" },
                { label: "E", name: "Example", desc: "Berikan contoh konkret" },
                { label: "P", name: "Point", desc: "Ulangi poin utama untuk penutup" }
            ],
            example: "P: Saya percaya pentingnya continuous learning di era digital.\nR: Karena teknologi berubah sangat cepat, skill yang kita punya hari ini bisa obsolete dalam 2-3 tahun.\nE: Contohnya, saya secara pribadi mengambil course online setiap bulan dan berhasil meningkatkan produktivitas tim sebesar 30%.\nP: Oleh karena itu, saya berkomitmen untuk terus belajar dan membagikan pengetahuan kepada tim."
        },

        PPF: {
            title: "PPF",
            fullName: "Problem, Planning, Forecast",
            description: "Framework consulting untuk menganalisis dan memecahkan masalah bisnis secara sistematis.",
            steps: [
                { label: "P1", name: "Problem", desc: "Definisi dan scope masalah yang ingin dipecahkan" },
                { label: "P2", name: "Planning", desc: "Rencana analisis: hipotesa, data yang dibutuhkan, metodologi" },
                { label: "F", name: "Forecast", desc: "Proyeksi hasil dan rekomendasi action" }
            ],
            example: "P1: Perusahaan X mengalami penurunan revenue 15% di Q3.\nP2: Saya perlu menganalisis data penjualan per produk,Segmentasi pelanggan, dan kompetitor. Hipotesa awal: ada perubahan preferensi pasar.\nF: Dari analisis awal, produk B mengalami penurunan terbesar (-25%) karena kompetitor mengeluarkan produk serupa dengan harga 20% lebih murah. Rekomendasi: evaluate pricing strategy dan product differentiation."
        },

        MECE: {
            title: "MECE",
            fullName: "Mutually Exclusive, Collectively Exhaustive",
            description: "Prinsip pengelompokan data/informasi agar tidak tumpang tindih dan mencakup semua aspek.",
            steps: [
                { label: "ME", name: "Mutually Exclusive", desc: "Setiap item hanya masuk di satu kelompok, tidak ada yang tumpang tindih" },
                { label: "CE", name: "Collectively Exhaustive", desc: "Semua kemungkinan tercakup, tidak ada yang terlewat" }
            ],
            example: "Mengelompokkan penyebab revenue turun secara MECE:\n- Berdasarkan product (produk A, B, C, D)\n- Berdasarkan region (Jakarta, Surabaya, Bandung, Lainnya)\n- Berdasarkan channel (online, offline, marketplace)\n- Berdasarkan customer segment (B2B, B2C)\nSetiap penyebab hanya muncul di satu kelompok dan semua sudah tercakup."
        }
    },

    /* -------------------------------------------------------
       Question Categories
       ------------------------------------------------------- */

    categories: [
        { id: "all", label: "Semua Pertanyaan" },
        { id: "leadership", label: "Kepemimpinan" },
        { id: "teamwork", label: "Kerja Tim" },
        { id: "problem", label: "Pemecahan Masalah" },
        { id: "communication", label: "Komunikasi" },
        { id: "adaptability", label: "Adaptasi" },
        { id: "achievement", label: "Pencapaian" },
        { id: "conflict", label: "Konflik" },
        { id: "ethics", label: "Etika" },
        { id: "consulting", label: "Consulting" }
    ],

    /* -------------------------------------------------------
       Questions with STAR answers
       ------------------------------------------------------- */

    questions: [

        /* === LEADERSHIP === */
        {
            id: "lead-1",
            category: "leadership",
            question: "Ceritakan momen ketika kamu harus memimpin tim untuk mencapai tujuan yang sulit.",
            star: {
                situation: "Saat saya memimpin tim marketing digital untuk campaign product launch yang memiliki budget terbatas namun target reach sangat tinggi.",
                task: "Tugas saya sebagai campaign lead adalah memaksimalkan impact dengan budget 50% lebih kecil dari campaign sebelumnya.",
                action: "Saya buat strategi content repurposing — satu konten utama dipecah jadi 15+ pieces untuk berbagai platform. Saya juga negosiasi partnership dengan 3 micro-influencer. Setiap malam saya review real-time analytics dan adjust targeting.",
                result: "Campaign mencapai 2.5 juta reach (target 1 juta), engagement rate 8.5% (industry avg 2%), dan cost per reach 60% lebih rendah dari benchmark. Produk sold out dalam 2 minggu."
            },
            tags: ["leadership", "challenge"]
        },
        {
            id: "lead-2",
            category: "leadership",
            question: "Bagaimana kamu memotivasi anggota tim yang performanya di bawah standar?",
            star: {
                situation: "Ada satu anggota tim yang biasanya performanya baik, tiba-tiba performanya drop signifikan selama 2 bulan — deadline sering miss dan quality work menurun.",
                task: "Sebagai lead, tugas saya adalah membantu dia kembali ke performa terbaiknya tanpa membuat dia merasa dihakimi.",
                action: "Saya jadwalkan one-on-one private conversation. Saya mulai dengan menanyakan kabarnya dan apakah ada yang sedang dia hadapi. Setelah dia terbuka tentang masalah personal, saya bantu fleksibilitas jam kerja dan break down task jadi bagian kecil. Saya juga pairing dia dengan senior teammate.",
                result: "Dalam 6 minggu, performanya kembali 100%. Yang lebih penting, dia merasa diperdulukan dan trust dengan saya meningkat. Dia akhirnya jadi salah satu top performer di quarter berikutnya."
            },
            tags: ["leadership", "team", "performance"]
        },
        {
            id: "lead-3",
            category: "leadership",
            question: "Ceritakan kapan kamu harus mengambil keputusan penting di bawah tekanan.",
            star: {
                situation: "Saat demo produk ke client penting, sistem utama crash 30 menit sebelum presentasi dimulai.",
                task: "Saya harus memutuskan: cancel demo (risiko kehilangan client) atau cari solusi alternative.",
                action: "Saya langsung activate contingency plan. Split tim — sebagian fixing the main system, sebagian prepare backup using staging server dan pre-recorded demo. Saya komunikasi transparan ke client tentang situasi dan berikan opsi.",
                result: "Demo tetap jalan dengan staging server. Client terkesan dengan professionalism dan transparency. Mereka signed contract 3 tahun dan bilang 'cara kalian handle pressure ini yang bikin kami percaya.'"
            },
            tags: ["leadership", "pressure", "decision"]
        },

        /* === TEAMWORK === */
        {
            id: "team-1",
            category: "teamwork",
            question: "Ceritakan pengalaman bekerja dalam tim yang beragam budaya atau latar belakang berbeda.",
            star: {
                situation: "Saya pernah join tim product yang anggotanya dari 6 negara berbeda — Indonesia, India, Brazil, Germany, Jepang, dan Nigeria. Tim ini fully remote dan punya timezone overlap hanya 3 jam per hari.",
                task: "Tugas saya sebagai Indonesia representative adalah memastikan komunikasi efektif meskipun perbedaan bahasa, budaya kerja, dan timezone.",
                action: "Saya inisiatif buat 'communication handbook' yang jelas — standar penulisan agar nuance budaya tidak hilang di text. Saya jadwalkan async updates via recorded video untuk update harian. Untuk conflict resolution, saya fasilitasi open discussion dengan rule: semua perspektif harus didengar sebelum decide.",
                result: "Tim ini jadi salah satu highest-performing distributed team di perusahaan. Velocity meningkat 40% dari quarter sebelumnya. 3 anggota tim dari budaya yang awalnya paling 'different' jadi close collaborators."
            },
            tags: ["teamwork", "cross-cultural", "communication"]
        },
        {
            id: "team-2",
            category: "teamwork",
            question: "Bagaimana kamu berkontribusi pada keberhasilan tim meski peranmu bukan yang paling terlihat?",
            star: {
                situation: "Di proyek redesign website company, fokus semua orang di UX designer dan developer. Sebagai content writer, kontribusi saya sering tidak terlihat di highlight.",
                task: "Saya ingin memastikan kualitas konten bisa mendukung design yang sudah bagus, meskipun tidak ada yang expect saya di 'spotlight'.",
                action: "Saya buat system — setiap page redesign, saya prepare content brief yang include keyword research, tone guide, dan contoh microcopy. Saya juga buat template yang developer bisa use tanpa harus selalu consult saya. Di setiap standup, saya highlight content readiness, bukan hanya design progress.",
                result: "Website launch tepat waktu. Bounce rate turun 35%, avg session duration naik 2 menit. PM secara khusus mention content quality sebagai differentiator. Dan 3 developer bilang pekerjaan mereka lebih mudah karena content system yang saya buat."
            },
            tags: ["teamwork", "support", "contribution"]
        },
        {
            id: "team-3",
            category: "teamwork",
            question: "Ceritakan momen ketika kamu harus meminta bantuan dari rekan kerja.",
            star: {
                situation: "Saya dapat project deadline 2 minggu untuk bikin data analysis dashboard. Saya sudah sangat familiar dengan Python dan SQL, tapi untuk visualization, skill saya terbatas.",
                task: "Saya perlu memutuskan apakah coba handle sendiri (kemungkinan hasil suboptimal) atau minta help dari data analyst teammate yang skill visualisasinya jauh lebih jago.",
                action: "Saya jadwalkan call dengan teammate, jelaskan situation dan appreciate his expertise. Saya propose collaboration — saya handle data processing dan preparation, dia handle visualization. Kami define timeline dan check-in points. Saya juga make sure untuk credit his contribution secara fair.",
                result: "Dashboard selesai tepat waktu dengan quality yang bahkan exceed expectation. Visualization yang teammate saya buat jadi standard yang dipakai team sampai sekarang. Kami berdua dapat recognition di company all-hands."
            },
            tags: ["teamwork", "collaboration", "humility"]
        },

        /* === PROBLEM SOLVING === */
        {
            id: "problem-1",
            category: "problem",
            question: "Ceritakan masalah paling kompleks yang pernah kamu selesaikan. Bagaimana pendekatannya?",
            star: {
                situation: "Company mengalami customer churn rate naik 20% dalam 3 bulan berturut-turut. Management couldn't figure out why karena semua metrics terlihat normal.",
                task: "Saya volunteer untuk lead root cause analysis karena percaya ada insight yang belum terungkap dari data yang ada.",
                action: "Saya gunakan framework MECE untuk organize analysis. Pertama, saya breakdown churn by customer segment, product, region, dan tenure. Saya conduct exit interviews ke 50 churned customers. Saya analysis pattern dan temukan bahwa 70% churned customers adalah cohort yang onboard process-nya change 6 bulan sebelumnya — new user felt overwhelmed dan tidak get enough onboarding support.",
                result: "Rekomendasi saya: revert partial onboarding flow + add new customer success touchpoints di day-7 dan day-30. Dalam 2 bulan, churn rate turun 60% kembali ke baseline. Company estimated this saved $500K annualized revenue."
            },
            tags: ["problem-solving", "data", "impact"]
        },
        {
            id: "problem-2",
            category: "problem",
            question: "Bagaimana kamu menangani masalah yang tidak ada solusi precedent-nya?",
            star: {
                situation: "Company mau expand ke market baru tapi tidak ada data tentang competitor landscape, customer behavior, atau regulatory requirements.",
                task: "Saya harus figure out go-to-market strategy dari hampir nol.",
                action: "Saya buat lean market validation approach. Pertama, I spent 2 weeks doing extensive secondary research — industry reports, government data, academic papers. Kedua, I did 30+ customer discovery calls meskipun belum punya product untuk dijual. Third, saya buat assumption dashboard yang track semua hypothesis dan test secara iterative.",
                result: "Dalam 8 minggu, kami punya enough data untuk validate market opportunity. Kami temukan white space di segment SME yang competitors overlook. Product launched 3 bulan kemudian dan reached 1000 customers dalam 6 bulan."
            },
            tags: ["problem-solving", "innovation", "research"]
        },
        {
            id: "problem-3",
            category: "problem",
            question: "Ceritakan saat kamu harus memecah masalah besar menjadi bagian yang lebih kecil.",
            star: {
                situation: "Saya dapat tugas untuk optimize entire customer journey yang punya 12 touchpoints dan conversion rate overall hanya 2%.",
                task: "Tugas saya adalah identify dimana biggest drop-offs occur dan prioritaskan improvement effort.",
                action: "Saya buat funnel analysis dari each touchpoint. Plot conversion rate di setiap step. Visually jelas bahwa 60% of drop-offs happen di 2 stages: registration (form too long) dan first purchase (no trust signal). Saya prioritaskan these 2 first, kemudian tackle sisanya secara berurutan berdasarkan impact-to-effort ratio.",
                result: "Dalam 3 bulan, registration completion rate naik dari 35% ke 72%. First purchase conversion naik dari 8% ke 18%. Overall journey conversion meningkat dari 2% ke 5.5% — almost 3x improvement. Revenue impact: +$200K per bulan."
            },
            tags: ["problem-solving", "analytics", "prioritization"]
        },

        /* === COMMUNICATION === */
        {
            id: "comm-1",
            category: "communication",
            question: "Ceritakan momen ketika kamu harus menyampaikan berita buruk kepada stakeholder.",
            star: {
                situation: "Saya perlu inform ke board of directors bahwa flagship product — yang sudah 18 bulan dalam development — tidak akan meet Q4 launch deadline.",
                task: "Tugas saya adalah communicate delay ini dengan jujur, profesional, sambil propose path forward.",
                action: "Saya prepare materials yang include: (1) clear explanation why delay happen tanpa blame anyone, (2) realistic new timeline dengan confidence level, (3) mitigation plan untuk minimize impact, dan (4) recommendations untuk board decision. Saya juga practice delivery dengan leadership team terlebih dahulu.",
                result: "Board appreciate transparency dan strategic thinking. Mereka approved revised timeline dan additional budget untuk accelerate. Product launched Q1 tahun berikutnya dengan additional features yang make it stronger. Board chairman personally thank untuk handling difficult news professionally."
            },
            tags: ["communication", "stakeholder", "transparency"]
        },
        {
            id: "comm-2",
            category: "communication",
            question: "Bagaimana kamu menjelaskan konsep yang kompleks kepada audiens yang tidak teknis?",
            star: {
                situation: "Saya diminta presentasi ke executive team tentang cybersecurity threat landscape — audience tidak punya technical background tapi harus approve budget untuk security initiative.",
                task: "Saya perlu make technical concepts accessible dan actionable untuk audience yang decision-nya based on risk appetite, bukan technical details.",
                action: "Saya replace semua jargon dengan analogies dari everyday life. Gunakan visual metaphor — compared firewall ke 'gated community', data encryption ke 'private conversation in crowded room'. Saya buat risk matrix yang simple: impact vs likelihood. Saya highlight 3 specific threats dengan concrete scenarios dan quantified business impact.",
                result: "Budget approved 150% dari initial request. CEO comment bahwa ini 'first time actually understanding cybersecurity risk.' Presentation deck jadi template untuk security team communication ke board secara regular."
            },
            tags: ["communication", "presentation", "stakeholder"]
        },
        {
            id: "comm-3",
            category: "communication",
            question: "Ceritakan pengalaman kamu bernegosiasi untuk mencapai kesepakatan.",
            star: {
                situation: "Saya perlu negotiate vendor contract yang initially quote 3x budget saya. Vendor adalah sole supplier untuk teknologi critical, jadi leverage kami limited.",
                task: "Tugas saya adalah secure favorable terms tanpa damaging relationship atau trigger vendor walked away.",
                action: "Saya do my homework — research competitor pricing, market rate, dan vendor's cost structure. I built BATNA (Best Alternative To Negotiated Agreement). Saya approach negotiation dengan win-win mindset. I started with lower anchor but not insulting. I bundle multiple years contract untuk volume discount. I offer untuk menjadi case study/reference customer.",
                result: "Final contract: 25% below market rate, include additional services (training, support) yang originally paid separately. Vendor appreciate professional approach dan later give us early access ke technology roadmap. Relationship jadi strategic partnership."
            },
            tags: ["communication", "negotiation", "business"]
        },

        /* === ADAPTABILITY === */
        {
            id: "adapt-1",
            category: "adaptability",
            question: "Ceritakan saat kamu harus quickly adapt ke perubahan rencana yang tiba-tiba.",
            star: {
                situation: "Kami sudah 2 bulan into product development quando pandemic COVID hit. Entire market assumption invalid — user behavior change, priority shift, timeline impossible.",
                task: "Saya harus help tim reframe entire approach dalam waktu 1 minggu.",
                action: "I organized emergency sprint untuk revalidate all assumptions. I facilitated team to brainstorm new scenarios. We use rapid prototyping approach — build MVPs untuk test new hypotheses quickly. I maintain transparent communication dengan semua stakeholders tentang pivot plan.",
                result: "Team successfully pivot dalam 2 weeks. Product yang initially dirancang untuk office workers jadi perfect fit untuk remote work market. Launch timing actually advantage karena market ready. Product got 5000 users dalam 3 months, eventually acquired by larger company."
            },
            tags: ["adaptability", "resilience", "pivot"]
        },
        {
            id: "adapt-2",
            category: "adaptability",
            question: "Bagaimana kamu belajar skill baru yang di luar comfort zone dalam waktu singkat?",
            star: {
                situation: "Saya promoted dari IC (individual contributor) ke manager role. Saya perlu learn entire new skill set — people management, conflict resolution, strategic planning — dalam 60 hari sebelum predecessor leaving.",
                task: "Saya harus fast-track learning sambil tetap deliver current responsibilities dan build new team relationships.",
                action: "I buat structured learning plan: (1) read 5 books about management in 30 days, (2) find 2 mentors — experienced managers outside company, (3) weekly reflection journal untuk process learnings, (4) say yes ke every opportunity untuk practice — difficult conversations, presentations, strategic discussions. I also admit openly ke team bahwa I'm learning.",
                result: "Dalam 90 days, saya sudah handle 3 difficult performance conversations, facilitate team planning session, dan present strategic plan ke leadership. Saya dapat feedback dari team survey yang positive — 92% team satisfaction. Team tetap stabil selama transition dan actually lebih cohesive sekarang."
            },
            tags: ["adaptability", "learning", "growth"]
        },

        /* === ACHIEVEMENT === */
        {
            id: "ach-1",
            category: "achievement",
            question: "Apa pencapaian terbesar dalam kariermu yang paling kamu banggakan?",
            star: {
                situation: "Join company sebagai first hire di departemen baru. Tidak ada process, tidak ada tools, tidak ada team structure — everything from scratch.",
                task: "Saya need untuk build foundation yang sustainable dalam 12 months, dari nol.",
                action: "I start with fundamentals: hire right people, establish core processes (hiring, onboarding, performance management), create documentation culture, implement tools systematically. I also build strong relationship dengan other departments untuk cross-functional support. Every quarter I set measurable goals dan track progress transparan.",
                result: "Dalam 12 months: team grew to 12 high-performing individuals, processes standardized dan used as model untuk company, department become top 2 contributor to company revenue. Saya promoted to Senior Manager. Team retention rate 95% — highest di company."
            },
            tags: ["achievement", "building", "impact"]
        },
        {
            id: "ach-2",
            category: "achievement",
            question: "Ceritakan saat kamu melampaui expectation di sebuah peran atau proyek.",
            star: {
                situation: "Di performance review annual, manager give saya project yang 'stretch assignment' — improve customer satisfaction score yang historically always around 60%.",
                task: "Saya tidak only perlu maintain current score, tapi improve it secara signifikan.",
                action: "I deep dive ke customer feedback data — hundreds of reviews. I identify 3 root causes yang addressable: response time, issue resolution, follow-up. I implement systematic approach: create response template yang personalized, set SLA internal yang lebih aggressive, dan add proactive follow-up touchpoint. I also build feedback loop sehingga setiap customer interaction inform improvement.",
                result: "Customer satisfaction score jumped from 60% ke 87% dalam 6 months. Company attribute this ke significant reduction in churn. Saya dapat 'Above & Beyond' recognition, 20% salary increase, dan promoted to next level."
            },
            tags: ["achievement", "performance", "excellence"]
        },

        /* === CONFLICT === */
        {
            id: "conflict-1",
            category: "conflict",
            question: "Ceritakan momen ketika kamu tidak setuju dengan keputusan manager atau senior. Apa yang kamu lakukan?",
            star: {
                situation: "VP propose cost-cutting measure yang saya lihat akan negative impact ke product quality dan team morale — cutting customer support team by 30%.",
                task: "Saya need untuk advocate against this decision dengan respectful tapi clear way.",
                action: "I prepare data-driven counter-argument. I analyze impact quantitatively — customer churn risk, team productivity, brand reputation. I schedule private meeting dengan VP, present my perspective objectively. I also propose alternative cost-saving measures yang less disruptive. I make sure untuk acknowledge VP's budget concern dan offer collaborative solution.",
                result: "VP appreciate saya raising concerns professionally. Final decision: only 15% reduction + reassign some responsibilities. Follow-up: dalam 6 months, no negative impact dari smaller team karena process improvements yang saya propose alongside. VP later tell that conversation influenced how she evaluates similar decisions."
            },
            tags: ["conflict", "advocacy", "professionalism"]
        },
        {
            id: "conflict-2",
            category: "conflict",
            question: "Bagaimana kamu menangani konflik antar anggota tim?",
            star: {
                situation: "Dua senior engineer di tim punya working style conflict yang escalat — mereka berhenti talking directly dan semua komunikasi through me, causing bottleneck.",
                task: "Saya perlu resolve conflict ini restore direct communication tanpa choose sides.",
                action: "I schedule separate 1-on-1s dengan masing-masing untuk understand perspective without judgment. I identify core issue: different opinion tentang code architecture yang turned personal. I facilitate joint session dengan ground rules: focus on problem, not person, use evidence over opinions. I guide mereka untuk find common ground dan agree on decision criteria.",
                result: "Mereka resolve perbedaan dengan new architecture approach yang actually better dari both original proposals. Communication restored dan even improve — mereka start doing pair programming. Tim jadi more collaborative secara keseluruhan. And I learned that conflict, if handled well, can produce better outcomes."
            },
            tags: ["conflict", "mediation", "team"]
        },

        /* === ETHICS === */
        {
            id: "ethics-1",
            category: "ethics",
            question: "Ceritakan saat kamu menghadapi situasi etis yang sulit di tempat kerja.",
            star: {
                situation: "Saya menemukan bahwa salah satu colleague memanipulasi data metrics untuk look good di depan management. Data ini used untuk strategic decisions.",
                task: "Saya need untuk handle this situation dengan responsible way — protect integrity tanpa destroying someone's career.",
                action: "I verify my findings carefully sebelum act. I approach colleague privately dan give benefit of the doubt — maybe ada explanation. Ketika dia deny, saya escalate ke manager dengan documented evidence dan recommendation untuk review process, bukan blame person. I emphasize bahwa this is about system improvement.",
                result: "Investigation confirm manipulation. Colleague received warning dan structured improvement plan. Yang lebih important — saya advocate untuk better data validation system dan transparency measures. New system implemented prevent similar issues. Saya recognized untuk handling sensitive matter professionally."
            },
            tags: ["ethics", "integrity", "courage"]
        },
        {
            id: "ethics-2",
            category: "ethics",
            question: "Apa yang kamu lakukan ketika diminta menyelesaikan tugas yang menurutmu tidak etis?",
            star: {
                situation: "Manager meminta saya untuk 'smoothing' numbers di quarterly report — bukan fraud tapi aggressive interpretation yang technically defensible tapi spirit-nya misleading.",
                task: "Saya need untuk decline sambil maintain professional relationship dan not sabotage my career.",
                action: "I ask clarifying questions publicly dalam meeting untuk make my concerns visible without being accusatory. I document my concerns via email buat protection. I propose alternative yang accurate tapi still tell compelling story. I stay firm tapi diplomatic dalam conversation dengan manager.",
                result: "Manager back down dan agree untuk conservative approach. Report published dengan accurate numbers. Interestingly, quarterly results actually strong even without aggressive smoothing. Manager later thank saya untuk 'keeping everyone honest' dan I earned reputation untuk integrity."
            },
            tags: ["ethics", "integrity", "boundaries"]
        },

        /* === CONSULTING QUESTIONS === */
        {
            id: "consult-1",
            category: "consulting",
            question: "Bagaimana kamu akan menganalisis penurunan revenue sebuah e-commerce platform?",
            answer: "Dengan PPF framework:\n\nProblem: Identifikasi scope — periode kapan decline terjadi, magnitude, affected segments (product, geography, customer type).\n\nPlanning: Breakdown menggunakan MECE — apakah decline dari (1) kurang traffic, (2) conversion rate turun, atau (3) average order value turun. Analisis masing-masing dengan data historis dan kompetitor.\n\nForecast: Hipotesa utama kemungkinan: perubahan behavior pasca-pandemi, competitive pressure, atau UX issue. Test hipotesa dengan data. Rekomendasi: prioritaskan quick wins dengan high impact, kemudian systemic fixes. Target: recovery 70% dalam 2 quarters.",
            tags: ["consulting", "business", "analysis"]
        },
        {
            id: "consult-2",
            category: "consulting",
            question: "Apa langkah pertama yang akan kamu ambil saat joining perusahaan baru?",
            answer: "Dengan PREP:\n\nP: Langkah pertama adalah LISTEN and LEARN — memahami konteks sebelum advice.\n\nR: Karena banyak consultant/new hire fail karena terlalu cepat suggest change tanpa cukup context. Trust dengan stakeholder sangat critical untuk implement anything.\n\nE: Di pengalaman sebelumnya, saya gunakan 30-day listening tour dengan semua key stakeholders, analyze existing data dan process documentation, observe how decisions actually made versus official process. Ini memberi saya credibility untuk recommendations yang realistic.\n\nP: Jadi prioritas pertama: memahami current state dengan deep empathy, baru kemudian propose improvement dengan stakeholder buy-in.",
            tags: ["consulting", "strategy", "approach"]
        },
        {
            id: "consult-3",
            category: "consulting",
            question: "Bagaimana kamu memutuskan prioritas ketika semua hal terasa urgent?",
            answer: "Dengan MECE + impact-effort framework:\n\nPisahkan menjadi 4 quadrants berdasarkan Urgency vs Importance:\n\n1. Important + Urgent: Do first — maximum 2-3 items\n2. Important + Not Urgent: Schedule — ini biasanya strategic work\n3. Not Important + Urgent: Delegate or challenge — often disguised as important\n4. Not Important + Not Urgent: Eliminate\n\nCritical: establish clear criteria untuk 'urgent' dan 'important' bersama tim, sehingga priority decision bukan hanya top-down. Saya juga use decision matrix dengan weighted scoring untuk major decisions.",
            tags: ["consulting", "prioritization", "framework"]
        },
        {
            id: "consult-4",
            category: "consulting",
            question: "Jika kamu adalah CEO perusahaan ini, apa hal pertama yang akan kamu ubah?",
            answer: "Dengan PPF approach:\n\nP: Saya akan invest waktu di understand 'current state' sebelum ubah anything.\n\nR: Karena perubahan tanpa understanding usually wasteful atau counterproductive. Saya pernah see restructure yang terlihat good di paper tapi actually created chaos karena tidak ada enough context.\n\nE: Namun, hal yang biasanya need attention first: (1) klarifikasi vision dan strategy sehingga everyone aligned, (2) assess talent — right people di right seats, (3) simplify decision-making process — too many layers kill agility.\n\nF:Jadi priority bukan specific tactical change, tapi building foundation untuk organization ability to execute.",
            tags: ["consulting", "leadership", "strategy"]
        },
        {
            id: "consult-5",
            category: "consulting",
            question: "Bagaimana kamu mempengaruhi stakeholder yang skeptis terhadap ide kamu?",
            answer: "Dengan STAR + PREP hybrid:\n\nS: Ada VP engineering yang skeptis terhadap proposal saya untuk migrate ke cloud — dia concerned tentang reliability dan cost.\nT: Tugas saya adalah influence his buy-in tanpa forcing.\nA: Pertama, saya acknowledge his concerns legitimately. Kedua, saya gather data — benchmark, case studies, ROI calculation. Ketiga, saya propose pilot project dengan clear success metrics untuk de-risk his concern. Fourth, I involve him dalam decision process sehingga dia merasa ownership.\nR: Pilot successful — 40% cost reduction, zero downtime. VP became cloud champion dan referensi untuk other teams.\n\nKuncinya: objection often come dari valid concern, jadi handle dengan respect, evidence, dan incremental proof.",
            tags: ["consulting", "influence", "stakeholder"]
        }
    ]
};

/* ============================================================
   INTERVIEW HELPERS
   ============================================================ */

window.InterviewHelper = {

    /**
     * Get random question by category
     * @param {string} categoryId - Category ID or "all"
     * @returns {Object} Random question object
     */
    getRandomQuestion: function (categoryId) {
        var questions = window.INTERVIEW_DATA.questions;
        var filtered;

        if (categoryId === "all" || !categoryId) {
            filtered = questions;
        } else {
            filtered = questions.filter(function (q) {
                return q.category === categoryId;
            });
        }

        if (filtered.length === 0) {
            return null;
        }

        var index = Math.floor(Math.random() * filtered.length);
        return filtered[index];
    },

    /**
     * Get question by ID
     * @param {string} questionId - Question ID
     * @returns {Object} Question object or null
     */
    getQuestionById: function (questionId) {
        var questions = window.INTERVIEW_DATA.questions;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].id === questionId) {
                return questions[i];
            }
        }
        return null;
    },

    /**
     * Get all questions by category
     * @param {string} categoryId - Category ID
     * @returns {Array} Array of question objects
     */
    getQuestionsByCategory: function (categoryId) {
        if (categoryId === "all") {
            return window.INTERVIEW_DATA.questions;
        }
        return window.INTERVIEW_DATA.questions.filter(function (q) {
            return q.category === categoryId;
        });
    },

    /**
     * Get all categories
     * @returns {Array} Array of category objects
     */
    getCategories: function () {
        return window.INTERVIEW_DATA.categories;
    },

    /**
     * Get framework by key
     * @param {string} key - Framework key (STAR, PREP, PPF, MECE)
     * @returns {Object} Framework object
     */
    getFramework: function (key) {
        return window.INTERVIEW_DATA.frameworks[key] || null;
    },

    /**
     * Get all frameworks
     * @returns {Object} All frameworks
     */
    getAllFrameworks: function () {
        return window.INTERVIEW_DATA.frameworks;
    },

    /**
     * Get count by category
     * @returns {Object} Category counts
     */
    getCountByCategory: function () {
        var questions = window.INTERVIEW_DATA.questions;
        var counts = { all: questions.length };
        var categories = window.INTERVIEW_DATA.categories;

        for (var i = 0; i < categories.length; i++) {
            var cat = categories[i];
            if (cat.id !== "all") {
                counts[cat.id] = questions.filter(function (q) {
                    return q.category === cat.id;
                }).length;
            }
        }

        return counts;
    }
};
