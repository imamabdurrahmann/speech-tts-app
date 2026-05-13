/* ============================================================
   APP — Main Application Controller
   ============================================================ */

(function () {
    "use strict";

    /* -------------------------------------------------------
       DOM Elements
       ------------------------------------------------------- */

    var elements = {
        // Theme
        btnTheme: document.getElementById("btn-theme"),

        // Topic
        selectCategory: document.getElementById("select-category"),
        selectDifficulty: document.getElementById("select-difficulty"),
        topicDifficulty: document.getElementById("topic-difficulty"),
        btnNewTopic: document.getElementById("btn-new-topic"),
        topicText: document.getElementById("topic-text"),
        btnCopyTopic: document.getElementById("btn-copy-topic"),
        btnTopicTts: document.getElementById("btn-topic-tts"),

        // TTS
        textInput: document.getElementById("text-input"),
        charCount: document.getElementById("char-count"),
        selectLang: document.getElementById("select-lang"),
        selectVoice: document.getElementById("select-voice"),
        rangeSpeed: document.getElementById("range-speed"),
        valSpeed: document.getElementById("val-speed"),
        rangePitch: document.getElementById("range-pitch"),
        valPitch: document.getElementById("val-pitch"),
        btnPlay: document.getElementById("btn-play"),
        btnPause: document.getElementById("btn-pause"),
        btnStop: document.getElementById("btn-stop"),
        statusBar: document.getElementById("status-bar"),
        statusText: document.getElementById("status-text"),
        ttsHighlightOverlay: document.getElementById("tts-highlight-overlay"),

        // Timer
        timerTime: document.getElementById("timer-time"),
        timerLabel: document.getElementById("timer-label"),
        timerRingProgress: document.getElementById("timer-ring-progress"),
        btnTimerStart: document.getElementById("btn-timer-start"),
        btnTimerPause: document.getElementById("btn-timer-pause"),
        btnTimerReset: document.getElementById("btn-timer-reset"),

        // Practice Mode
        practiceTopic: document.getElementById("practice-topic"),
        practiceDuration: document.getElementById("practice-duration"),
        btnPracticeStart: document.getElementById("btn-practice-start"),
        btnPracticeStop: document.getElementById("btn-practice-stop"),

        // Interview
        selectInterviewCategory: document.getElementById("select-interview-category"),
        btnInterviewRandom: document.getElementById("btn-interview-random"),
        frameworkCard: document.getElementById("framework-card"),
        frameworkTitle: document.getElementById("framework-title"),
        frameworkFullname: document.getElementById("framework-fullname"),
        frameworkDesc: document.getElementById("framework-desc"),
        frameworkSteps: document.getElementById("framework-steps"),
        questionCard: document.getElementById("question-card"),
        questionCategoryLabel: document.getElementById("question-category-label"),
        questionText: document.getElementById("question-text"),
        btnInterviewCopy: document.getElementById("btn-interview-copy"),
        btnInterviewToTts: document.getElementById("btn-interview-to-tts"),
        answerSection: document.getElementById("answer-section"),
        btnToggleAnswer: document.getElementById("btn-toggle-answer"),
        answerContent: document.getElementById("answer-content"),
        answerS: document.getElementById("answer-s"),
        answerT: document.getElementById("answer-t"),
        answerA: document.getElementById("answer-a"),
        answerR: document.getElementById("answer-r"),
        consultAnswerSection: document.getElementById("consult-answer-section"),
        btnToggleConsultAnswer: document.getElementById("btn-toggle-consult-answer"),
        consultAnswerContent: document.getElementById("consult-answer-content"),
        consultAnswerText: document.getElementById("consult-answer-text"),

        // Vocab
        selectVocabCategory: document.getElementById("select-vocab-category"),
        btnVocabRandom: document.getElementById("btn-vocab-random"),
        wordCard: document.getElementById("word-card"),
        wordText: document.getElementById("word-text"),
        wordPronunciation: document.getElementById("word-pronunciation"),
        wordPos: document.getElementById("word-pos"),
        wordCategoryLabel: document.getElementById("word-category-label"),
        wordDefinition: document.getElementById("word-definition"),
        wordExample: document.getElementById("word-example"),
        wordAngle: document.getElementById("word-angle"),
        btnVocabCopy: document.getElementById("btn-vocab-copy"),
        btnVocabTts: document.getElementById("btn-vocab-tts"),
        btnVocabToTts: document.getElementById("btn-vocab-to-tts"),
        btnVocabFullTts: document.getElementById("btn-vocab-full-tts"),
        btnBookmarkTopic: document.getElementById("btn-bookmark-topic"),
        favoritesList: document.getElementById("favorites-list"),
        favoritesEmpty: document.getElementById("favorites-empty"),
        btnClearFavorites: document.getElementById("btn-clear-favorites"),
        btnTopicHistory: document.getElementById("btn-topic-history"),
        topicHistoryPanel: document.getElementById("topic-history-panel"),
        topicHistoryList: document.getElementById("topic-history-list"),
        btnCloseHistory: document.getElementById("btn-close-history"),
        btnSttToggle: document.getElementById("btn-stt-toggle"),
        sttOutput: document.getElementById("stt-output"),
        sttStatusText: document.getElementById("stt-status-text"),
        sttMicWrapper: document.getElementById("stt-mic-wrapper"),
        btnSttClear: document.getElementById("btn-stt-clear"),
        btnSttToTts: document.getElementById("btn-stt-to-tts"),
        btnSttCopy: document.getElementById("btn-stt-copy"),
        selectSttLang: document.getElementById("select-stt-lang")
    };

    /* -------------------------------------------------------
       State
       ------------------------------------------------------- */

    var currentUtterance = null;
    var highlightInterval = null;
    var highlightWordIndex = 0;
    var highlightWords = [];
    var currentSettings = {
        lang: "id-ID",
        voice: null,
        rate: 1.0,
        pitch: 1.0
    };

    /* -------------------------------------------------------
       Timer State
       ------------------------------------------------------- */

    var timerState = {
        duration: 180,
        remaining: 180,
        intervalId: null,
        isRunning: false,
        isPaused: false
    };

    /* -------------------------------------------------------
       Interview State
       ------------------------------------------------------- */

    var interviewState = {
        currentQuestion: null,
        currentCategory: "all",
        currentFramework: "STAR"
    };

    /* -------------------------------------------------------
       Vocab State
       ------------------------------------------------------- */

    var vocabState = {
        currentWord: null,
        currentCategory: "all"
    };

    /* -------------------------------------------------------
       Sound State
       ------------------------------------------------------- */

    var soundState = {
        enabled: true,
        initialized: false
    };

    /* -------------------------------------------------------
       Favorites State
       ------------------------------------------------------- */

    var favoritesState = {
        topics: []
    };

    var historyState = {
        topics: [],
        maxItems: 50,
        panelOpen: false
    };

    var statsState = {
        topicsGenerated: 0,
        timerSessions: 0,
        practiceSeconds: 0,
        categoryCounts: {
            opinion: 0,
            experience: 0,
            debate: 0,
            fun: 0
        }
    };

    /* -------------------------------------------------------
       Settings Persistence Keys
       ------------------------------------------------------- */

    var STORAGE_KEYS = {
        theme: "tts-app-theme",
        lang: "tts-app-lang",
        voice: "tts-app-voice",
        rate: "tts-app-rate",
        pitch: "tts-app-pitch",
        category: "tts-app-category",
        timerDuration: "tts-app-timer-duration",
        interviewCategory: "tts-app-interview-category",
        vocabCategory: "tts-app-vocab-category",
        soundEnabled: "tts-app-sound-enabled",
        activeTab: "tts-app-active-tab",
        favorites: "tts-app-favorites",
        history: "tts-app-history",
        sttLang: "tts-app-stt-lang",
        difficulty: "tts-app-difficulty",
        daily: "tts-app-daily",
        stats: "tts-app-stats"
    };

    /* -------------------------------------------------------
       Initialize Application
       ------------------------------------------------------- */

    function init() {
        loadSettings();
        initTheme();
        initTabs();
        initTopicGenerator();
        initVoiceManager();
        initTTSEvents();
        initCharacterCounter();
        initTimer();
        initInterview();
        initVocab();
        initFavorites();
        initHistory();
        initDailyChallenge();
        initStats();
        initSTT();
        initSound();
        initKeyboardShortcuts();
        bindEvents();
        updatePlayButtonState();
    }

    /* -------------------------------------------------------
       Keyboard Shortcuts
       ------------------------------------------------------- */

    function initKeyboardShortcuts() {
        document.addEventListener("keydown", function (e) {
            // Ignore if user is typing in an input/textarea/select
            var tag = e.target.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
                // Allow only Ctrl+Enter in textarea for play
                if (tag === "TEXTAREA" && (e.ctrlKey || e.metaKey) && e.key === "Enter") {
                    e.preventDefault();
                    if (!elements.btnPlay.disabled) {
                        elements.btnPlay.click();
                    }
                }
                return;
            }

            // Space = play/pause TTS
            if (e.code === "Space" || e.key === " ") {
                e.preventDefault();
                var currentTab = localStorage.getItem(STORAGE_KEYS.activeTab) || "topics";
                if (currentTab === "tts" && !elements.btnPlay.disabled) {
                    if (window.speechSynthesis.speaking) {
                        elements.btnPause.click();
                    } else {
                        elements.btnPlay.click();
                    }
                }
            }

            // R = random topic
            if (e.key === "r" || e.key === "R") {
                if (!elements.btnNewTopic.disabled) {
                    elements.btnNewTopic.click();
                }
            }

            // T = timer start/pause
            if (e.key === "t" || e.key === "T") {
                if (!elements.btnTimerStart.disabled) {
                    elements.btnTimerStart.click();
                }
            }
        });
    }

    /* -------------------------------------------------------
       Settings — Load from localStorage
       ------------------------------------------------------- */

    function loadSettings() {
        var theme = localStorage.getItem(STORAGE_KEYS.theme);
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
        }

        var lang = localStorage.getItem(STORAGE_KEYS.lang);
        if (lang && elements.selectLang) {
            elements.selectLang.value = lang;
            currentSettings.lang = lang;
        }

        var rate = localStorage.getItem(STORAGE_KEYS.rate);
        if (rate && elements.rangeSpeed) {
            var parsedRate = parseFloat(rate);
            elements.rangeSpeed.value = parsedRate;
            elements.valSpeed.textContent = parsedRate.toFixed(1) + "x";
            currentSettings.rate = parsedRate;
        }

        var pitch = localStorage.getItem(STORAGE_KEYS.pitch);
        if (pitch && elements.rangePitch) {
            var parsedPitch = parseFloat(pitch);
            elements.rangePitch.value = parsedPitch;
            elements.valPitch.textContent = parsedPitch.toFixed(1) + "x";
            currentSettings.pitch = parsedPitch;
        }

        var category = localStorage.getItem(STORAGE_KEYS.category);
        if (category && elements.selectCategory) {
            elements.selectCategory.value = category;
        }
    }

    /* -------------------------------------------------------
       Settings — Save to localStorage
       ------------------------------------------------------- */

    function saveSetting(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            console.warn("Tidak bisa menyimpan setting:", e);
        }
    }

    /* -------------------------------------------------------
       Theme Toggle
       ------------------------------------------------------- */

    function initTheme() {
        var savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
        if (!savedTheme) {
            var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
        }
    }

    function toggleTheme() {
        var current = document.documentElement.getAttribute("data-theme");
        var next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        saveSetting(STORAGE_KEYS.theme, next);
        if (window.SoundEffects) window.SoundEffects.toggleClick();
    }

    /* -------------------------------------------------------
       Tab Navigation
       ------------------------------------------------------- */

    function initTabs() {
        var savedTab = localStorage.getItem(STORAGE_KEYS.activeTab);
        var initialTab = savedTab || "topic";
        switchTab(initialTab, false);
    }

    function switchTab(tabName, playSound) {
        // Update tab buttons
        var tabBtns = document.querySelectorAll(".tab-btn");
        tabBtns.forEach(function (btn) {
            btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
        });

        // Update tab content
        var tabContents = document.querySelectorAll(".tab-content");
        tabContents.forEach(function (content) {
            content.classList.toggle("active", content.getAttribute("data-tab-content") === tabName);
        });

        // Persist
        localStorage.setItem(STORAGE_KEYS.activeTab, tabName);

        // Sound
        if (playSound !== false && window.SoundEffects) {
            window.SoundEffects.tabClick();
        }

        // Refresh stats when opening stats tab
        if (tabName === "stats") {
            renderStats();
        }
    }

    /* -------------------------------------------------------
       Topic Generator
       ------------------------------------------------------- */

    function initTopicGenerator() {
        // Load saved difficulty preference
        var savedDifficulty = localStorage.getItem(STORAGE_KEYS.difficulty);
        if (savedDifficulty && elements.selectDifficulty) {
            elements.selectDifficulty.value = savedDifficulty;
        }

        // Load initial topic without animation on first page load
        var category = elements.selectCategory ? elements.selectCategory.value : "all";
        var difficulty = elements.selectDifficulty ? elements.selectDifficulty.value : "all";
        var topic = window.TopicHelper.getRandom(category, difficulty);
        elements.topicText.textContent = topic.text;
        updateDifficultyBadge(topic.difficulty);
        updateBookmarkButton();
    }

    function generateNewTopic() {
        var category = elements.selectCategory ? elements.selectCategory.value : "all";
        var difficulty = elements.selectDifficulty ? elements.selectDifficulty.value : "all";
        var finalTopic = window.TopicHelper.getRandom(category, difficulty);
        var btn = elements.btnNewTopic;
        var topicEl = elements.topicText;

        // Disable button during animation
        btn.classList.add("slot-disabled");

        // Remove any leftover animation classes
        topicEl.classList.remove("slot-spin", "slot-reveal");
        topicEl.style.opacity = "0";

        // Slot machine: cycle through random topics, slowing down
        // Each spin: fade out → change text → fade in
        var spins = [
            { delay: 60,  duration: 80  },
            { delay: 80,  duration: 100 },
            { delay: 100, duration: 120 },
            { delay: 130, duration: 140 },
            { delay: 160, duration: 170 },
            { delay: 200, duration: 200 },
            { delay: 250, duration: 240 },
            { delay: 300, duration: 280 },
            { delay: 350, duration: 320 },
            { delay: 400, duration: 400 }
        ];

        var currentSpin = 0;

        function doSpin() {
            if (currentSpin >= spins.length) {
                // Final topic — reveal with bounce
                topicEl.textContent = finalTopic.text;
                topicEl.classList.remove("slot-spin");
                topicEl.style.opacity = "";
                void topicEl.offsetWidth;
                topicEl.classList.add("slot-reveal");
                if (window.SoundEffects) window.SoundEffects.generate();
                updateBookmarkButton();
                updateDifficultyBadge(finalTopic.difficulty);
                addToHistory(finalTopic.text, category);
                trackTopicGenerated(finalTopic.category || category);
                setTimeout(function () {
                    topicEl.classList.remove("slot-reveal");
                    btn.classList.remove("slot-disabled");
                }, 450);
                return;
            }

            var spin = spins[currentSpin];

            // Pick a random topic for this spin (different from final text)
            var spinTopic;
            do {
                spinTopic = window.TopicHelper.getRandom(category, difficulty);
            } while (spinTopic.text === finalTopic.text && currentSpin > 0);

            // Fade out
            topicEl.style.opacity = "0";
            topicEl.style.transform = "translateY(-8px) scale(0.97)";
            topicEl.style.filter = "blur(4px)";

            setTimeout(function () {
                // Change text
                topicEl.textContent = spinTopic.text;
                updateDifficultyBadge(spinTopic.difficulty);
                topicEl.style.transform = "translateY(8px) scale(0.97)";

                // Fade in with scale bounce
                void topicEl.offsetWidth;
                topicEl.classList.add("slot-spin");

                // Schedule next spin
                currentSpin++;
                setTimeout(doSpin, spin.delay + spin.duration);
            }, 80);

            // Remove spin class at end of animation
            setTimeout(function () {
                topicEl.classList.remove("slot-spin");
                topicEl.style.opacity = "";
                topicEl.style.transform = "";
                topicEl.style.filter = "";
            }, 80 + spin.duration);
        }

        // Start first spin
        setTimeout(doSpin, 50);
    }

    function copyTopic() {
        var text = elements.topicText.textContent;
        var btn = elements.btnCopyTopic;

        navigator.clipboard.writeText(text).then(function () {
            if (window.SoundEffects) window.SoundEffects.success();
            btn.classList.add("copied");
            var svg = btn.querySelector("svg");
            var originalSVG = svg.innerHTML;

            // Show checkmark
            svg.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
            btn.setAttribute("aria-label", "Copied!");

            setTimeout(function () {
                btn.classList.remove("copied");
                svg.innerHTML = originalSVG;
                btn.setAttribute("aria-label", "Copy topic");
            }, 2000);
        }).catch(function () {
            // Fallback for older browsers
            var textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        });
    }

    /* -------------------------------------------------------
       Voice Manager Integration
       ------------------------------------------------------- */

    function initVoiceManager() {
        if (!window.VoiceManager.isSupported()) {
            elements.selectVoice.innerHTML = '<option value="">Browser tidak mendukung TTS</option>';
            elements.btnPlay.disabled = true;
            updateStatus("error", "Browser tidak mendukung Text-to-Speech");
            return;
        }

        window.VoiceManager.init();

        window.VoiceManager.onVoicesReady(function (voices) {
            populateVoiceList(voices);
            restoreSavedVoice();
        });

        // Fallback timeout in case voices don't fire
        setTimeout(function () {
            if (!window.VoiceManager.isLoaded()) {
                var allVoices = window.VoiceManager.getVoices();
                if (allVoices.length > 0) {
                    populateVoiceList(allVoices);
                    restoreSavedVoice();
                }
            }
        }, 1000);
    }

    function autoSelectBestVoice(lang) {
        var allVoices = window.VoiceManager.getVoices();
        if (allVoices.length === 0) return;

        var langVoices = window.VoiceManager.getVoicesByLang(lang);
        langVoices = window.VoiceManager.filterOnlineVoices(langVoices);

        if (langVoices.length > 0) {
            elements.selectVoice.value = langVoices[0].name;
            currentSettings.voice = langVoices[0].name;
        } else {
            var fallback = window.VoiceManager.filterOnlineVoices(allVoices);
            if (fallback.length > 0) {
                elements.selectVoice.value = fallback[0].name;
                currentSettings.voice = fallback[0].name;
            }
        }
        saveSetting(STORAGE_KEYS.voice, currentSettings.voice);
    }

    function populateVoiceList(voices) {
        var lang = currentSettings.lang;
        var langVoices = window.VoiceManager.getVoicesByLang(lang);
        langVoices = window.VoiceManager.filterOnlineVoices(langVoices);

        if (langVoices.length === 0) {
            elements.selectVoice.innerHTML = '<option value="">Tidak ada suara tersedia</option>';
            elements.btnPlay.disabled = true;
            return;
        }

        var frag = document.createDocumentFragment();
        langVoices.forEach(function (voice) {
            var opt = document.createElement("option");
            opt.value = voice.name;
            opt.textContent = window.VoiceManager.getVoiceDisplayName(voice);
            opt.dataset.lang = voice.lang;
            frag.appendChild(opt);
        });
        elements.selectVoice.innerHTML = "";
        elements.selectVoice.appendChild(frag);
        elements.btnPlay.disabled = false;
    }

    function restoreSavedVoice() {
        var savedVoiceName = localStorage.getItem(STORAGE_KEYS.voice);
        if (savedVoiceName) {
            var options = elements.selectVoice.options;
            for (var i = 0; i < options.length; i++) {
                if (options[i].value === savedVoiceName) {
                    elements.selectVoice.selectedIndex = i;
                    currentSettings.voice = savedVoiceName;
                    break;
                }
            }
        } else {
            // Auto-select default voice for current lang
            var defaultVoice = window.VoiceManager.getDefaultVoiceForLang(currentSettings.lang);
            if (defaultVoice) {
                elements.selectVoice.value = defaultVoice.name;
                currentSettings.voice = defaultVoice.name;
            }
        }
    }

    /* -------------------------------------------------------
       TTS Events & Controls
       ------------------------------------------------------- */

    function initTTSEvents() {
        // Language change
        elements.selectLang.addEventListener("change", function () {
            var selectedLang = this.value;
            currentSettings.lang = selectedLang;
            saveSetting(STORAGE_KEYS.lang, selectedLang);

            var synthVoices = window.speechSynthesis.getVoices();
            if (synthVoices.length === 0) {
                updateStatus("error", "Suara tidak tersedia");
                return;
            }

            // Filter: lang match + exclude local/multilingual
            var langVoices = synthVoices.filter(function (v) {
                return v.lang === selectedLang;
            });
            langVoices = langVoices.filter(function (voice) {
                var name = voice.name.toLowerCase();
                if (name.indexOf("local") !== -1) return false;
                if (name.indexOf("multilingual") !== -1) return false;
                return true;
            });

            elements.selectVoice.innerHTML = "";
            if (langVoices.length === 0) {
                elements.selectVoice.innerHTML = '<option value="">Tidak ada suara tersedia</option>';
                elements.btnPlay.disabled = true;
                updateStatus("error", "Tidak ada suara untuk bahasa ini");
                return;
            }

            var frag = document.createDocumentFragment();
            langVoices.forEach(function (voice) {
                var opt = document.createElement("option");
                opt.value = voice.name;
                opt.textContent = voice.name + " (" + voice.lang + ")";
                frag.appendChild(opt);
            });
            elements.selectVoice.appendChild(frag);
            elements.btnPlay.disabled = false;

            elements.selectVoice.value = langVoices[0].name;
            currentSettings.voice = langVoices[0].name;
            saveSetting(STORAGE_KEYS.voice, currentSettings.voice);
            updateStatus("ready", "Siap");
        });

        // Voice change
        elements.selectVoice.addEventListener("change", function () {
            currentSettings.voice = this.value;
            saveSetting(STORAGE_KEYS.voice, this.value);
        });

        // Speed change
        elements.rangeSpeed.addEventListener("input", function () {
            var val = parseFloat(this.value);
            currentSettings.rate = val;
            elements.valSpeed.textContent = val.toFixed(1) + "x";
            saveSetting(STORAGE_KEYS.rate, val);
            updateSpeedPresetButtons(val);
        });

        // Speed preset buttons
        var speedPresets = document.querySelectorAll(".btn-speed-preset");
        speedPresets.forEach(function (btn) {
            btn.addEventListener("click", function () {
                var rate = parseFloat(this.getAttribute("data-rate"));
                elements.rangeSpeed.value = rate;
                currentSettings.rate = rate;
                elements.valSpeed.textContent = rate.toFixed(1) + "x";
                saveSetting(STORAGE_KEYS.rate, rate);
                updateSpeedPresetButtons(rate);
            });
        });

        // Pitch change
        elements.rangePitch.addEventListener("input", function () {
            var val = parseFloat(this.value);
            currentSettings.pitch = val;
            elements.valPitch.textContent = val.toFixed(1) + "x";
            saveSetting(STORAGE_KEYS.pitch, val);
        });

        // Play button
        elements.btnPlay.addEventListener("click", function () {
            if (!window.VoiceManager.isSupported()) {
                updateStatus("error", "Browser tidak mendukung TTS");
                return;
            }

            var text = elements.textInput.value.trim();
            if (!text) {
                updateStatus("error", "Ketik teks terlebih dahulu");
                return;
            }

            speak(text);
        });

        // Pause button
        elements.btnPause.addEventListener("click", function () {
            if (!window.VoiceManager.isSupported()) return;

            if (window.VoiceManager.isPaused()) {
                window.speechSynthesis.resume();
                updateStatus("playing", "Lanjut berbicara...");
                updatePauseButton(true);
            } else {
                window.speechSynthesis.pause();
                updateStatus("paused", "Dijeda");
                updatePauseButton(false);
            }
        });

        // Stop button
        elements.btnStop.addEventListener("click", function () {
            if (!window.VoiceManager.isSupported()) return;
            stopSpeaking();
        });
    }

    /* -------------------------------------------------------
       Word-by-Word TTS Highlighting
       ------------------------------------------------------- */

    function startHighlight(text, rate) {
        stopHighlight();

        // Split text into words
        var words = text.split(/(\s+)/);
        highlightWords = words;
        highlightWordIndex = 0;

        // Build overlay HTML
        var html = "";
        words.forEach(function (word, i) {
            html += '<span class="tts-word" data-index="' + i + '">' + escapeHtml(word) + "</span>";
        });
        elements.ttsHighlightOverlay.innerHTML = html;

        // Time per word: at rate 1.0, ~150 words/min = 400ms/word
        // Adjust for actual rate (min 0.5, max 2.0)
        var msPerWord = Math.round(400 / rate);

        highlightInterval = setInterval(function () {
            // Remove previous active
            var prev = elements.ttsHighlightOverlay.querySelector(".tts-word.active");
            if (prev) prev.classList.remove("active");

            // Highlight current word
            var current = elements.ttsHighlightOverlay.querySelector(
                '.tts-word[data-index="' + highlightWordIndex + '"]'
            );
            if (current) current.classList.add("active");

            highlightWordIndex++;

            // Stop when all words highlighted
            if (highlightWordIndex >= highlightWords.length) {
                clearInterval(highlightInterval);
                highlightInterval = null;
            }
        }, msPerWord);
    }

    function updateSpeedPresetButtons(rate) {
        var presets = document.querySelectorAll(".btn-speed-preset");
        presets.forEach(function (btn) {
            var btnRate = parseFloat(btn.getAttribute("data-rate"));
            if (Math.abs(btnRate - rate) < 0.05) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    function stopHighlight() {
        if (highlightInterval) {
            clearInterval(highlightInterval);
            highlightInterval = null;
        }
        highlightWords = [];
        highlightWordIndex = 0;
        if (elements.ttsHighlightOverlay) {
            elements.ttsHighlightOverlay.innerHTML = "";
        }
    }

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function speak(text) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Sound: TTS start
        if (window.SoundEffects) window.SoundEffects.ttsStart();

        var utterance = new SpeechSynthesisUtterance(text);

        // Set language
        utterance.lang = currentSettings.lang;

        // Set voice
        var voices = window.VoiceManager.getVoices();
        var selectedVoice = voices.find(function (v) {
            return v.name === currentSettings.voice;
        });
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else {
            var defaultVoice = window.VoiceManager.getDefaultVoiceForLang(currentSettings.lang);
            if (defaultVoice) {
                utterance.voice = defaultVoice;
            }
        }

        // Set rate and pitch
        utterance.rate = currentSettings.rate;
        utterance.pitch = currentSettings.pitch;

        // Events
        utterance.onstart = function () {
            updateStatus("playing", "Sedang berbicara...");
            updateControlButtons(true);
            updatePauseButton(true);
            startHighlight(text, currentSettings.rate);
        };

        utterance.onend = function () {
            stopHighlight();
            updateStatus("ready", "Selesai");
            updateControlButtons(false);
            if (elements.btnTopicTts) elements.btnTopicTts.classList.remove("playing");
            // Record usage after speaking ends
            window.VoiceManager.recordUsage(currentSettings.lang, currentSettings.voice);
        };

        utterance.onerror = function (event) {
            // Ignore benign errors that are expected behavior
            var ignoredErrors = {
                "canceled": true,
                "interrupted": true,
                "synthesis-failed": true,
                "no-speech": true
            };
            if (!ignoredErrors[event.error]) {
                updateStatus("error", "Error: " + event.error);
            }
            stopHighlight();
            updateControlButtons(false);
            if (elements.btnTopicTts) elements.btnTopicTts.classList.remove("playing");
            window.VoiceManager.recordUsage(currentSettings.lang, currentSettings.voice);
        };

        utterance.onpause = function () {
            updateStatus("paused", "Dijeda");
        };

        utterance.onresume = function () {
            updateStatus("playing", "Sedang berbicara...");
        };

        currentUtterance = utterance;

        // Check if language or voice has switched
        var hasSwitched = window.VoiceManager.hasSwitched(
            currentSettings.lang,
            currentSettings.voice
        );

        if (hasSwitched) {
            // Language/voice changed — add pause before speaking
            // This gives the browser time to load and switch the voice engine
            updateStatus("ready", "Switch bahasa...");
            window.speechSynthesis.speak(utterance);

            // Cancel the first utterance and re-speak after delay
            window.speechSynthesis.cancel();
            var pauseDelay = window.VoiceManager.getPauseDelay();

            setTimeout(function () {
                window.speechSynthesis.speak(utterance);
            }, pauseDelay);
        } else {
            // Same language/voice — speak immediately
            window.speechSynthesis.speak(utterance);
        }
    }

    function stopSpeaking() {
        window.speechSynthesis.cancel();
        stopHighlight();
        updateStatus("ready", "Berhenti");
        updateControlButtons(false);
        if (elements.btnTopicTts) elements.btnTopicTts.classList.remove("playing");
    }

    /* -------------------------------------------------------
       Bilingual TTS — Mixed Language Text
       Speaks text with appropriate voice per language segment
       ------------------------------------------------------- */

    /**
     * Split text into language segments
     * Each segment has {text, lang, langCode}
     */
    function splitTextByLanguage(text) {
        if (!text) return [];

        var VM = window.VoiceManager;
        var segments = [];
        var currentLang = null;
        var currentText = "";

        // Split by sentences (period, question mark, exclamation)
        var sentences = text.split(/(?<=[.!?])\s+/);

        sentences.forEach(function (sentence) {
            if (!sentence || sentence.trim().length === 0) return;

            var detected = VM.detectLanguage(sentence);

            if (detected === currentLang) {
                // Same language as current segment
                currentText += " " + sentence;
            } else {
                // Language changed — save current segment
                if (currentText.trim().length > 0) {
                    segments.push({
                        text: currentText.trim(),
                        lang: currentLang,
                        langCode: VM.getLangCodeFor(currentLang)
                    });
                }
                // Start new segment
                currentLang = detected;
                currentText = sentence;
            }
        });

        // Push final segment
        if (currentText.trim().length > 0) {
            segments.push({
                text: currentText.trim(),
                lang: currentLang,
                langCode: VM.getLangCodeFor(currentLang)
            });
        }

        return segments;
    }

    /**
     * Speak text with automatic language segmentation
     * Detects language changes and uses appropriate voice per segment
     */
    function speakWithSegments(text) {
        if (!text || text.trim().length === 0) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Sound: TTS start
        if (window.SoundEffects) window.SoundEffects.ttsStart();

        var segments = splitTextByLanguage(text);

        if (segments.length === 0) return;

        var segmentIndex = 0;
        var INTER_SEGMENT_PAUSE = 300; // ms pause between segments

        function speakNextSegment() {
            if (segmentIndex >= segments.length) {
                // All segments done
                updateStatus("ready", "Selesai");
                updateControlButtons(false);
                // Record usage with last segment's language
                var lastSeg = segments[segments.length - 1];
                window.VoiceManager.recordUsage(lastSeg.langCode, "");
                return;
            }

            var segment = segments[segmentIndex];

            var utterance = new SpeechSynthesisUtterance(segment.text);
            utterance.lang = segment.langCode;

            // Get best voice for this language
            var voice = window.VoiceManager.getBestVoiceFor(segment.langCode);
            if (voice) {
                utterance.voice = voice;
            }

            // Apply current rate and pitch
            utterance.rate = currentSettings.rate;
            utterance.pitch = currentSettings.pitch;

            utterance.onstart = function () {
                if (segmentIndex === 0) {
                    var langLabel = segment.lang === "en" ? "(EN)" : "(ID)";
                    updateStatus("playing", "Sedang berbicara... " + langLabel);
                    updateControlButtons(true);
                    updatePauseButton(true);
                }
            };

            utterance.onend = function () {
                segmentIndex++;
                if (segmentIndex < segments.length) {
                    // Pause between segments, then speak next
                    setTimeout(speakNextSegment, INTER_SEGMENT_PAUSE);
                } else {
                    speakNextSegment(); // Finish up
                }
            };

            utterance.onerror = function (event) {
                // Ignore benign errors
                var ignored = {
                    "canceled": true,
                    "interrupted": true,
                    "synthesis-failed": true,
                    "no-speech": true
                };
                if (!ignored[event.error]) {
                    console.warn("TTS segment error:", event.error);
                }
                segmentIndex++;
                if (segmentIndex < segments.length) {
                    setTimeout(speakNextSegment, INTER_SEGMENT_PAUSE);
                } else {
                    speakNextSegment();
                }
            };

            window.speechSynthesis.speak(utterance);
        }

        // Start speaking first segment
        speakNextSegment();
    }

    function updatePlayButtonState() {
        var hasText = elements.textInput.value.trim().length > 0;
        elements.btnPlay.disabled = !hasText || !window.VoiceManager.isSupported();
    }

    function updateControlButtons(isPlaying) {
        elements.btnPlay.disabled = !isPlaying ? false : false;
        elements.btnPause.disabled = !isPlaying;
        elements.btnStop.disabled = !isPlaying;
    }

    function updatePauseButton(isPaused) {
        var svg = elements.btnPause.querySelector("svg");
        if (isPaused) {
            // Show play icon
            svg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
            elements.btnPause.querySelector("span").textContent = "Lanjut";
        } else {
            // Show pause icon
            svg.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
            elements.btnPause.querySelector("span").textContent = "Jeda";
        }
    }

    function updateStatus(type, message) {
        elements.statusBar.setAttribute("data-status", type);
        elements.statusText.textContent = message;
    }

    /* -------------------------------------------------------
       Character Counter
       ------------------------------------------------------- */

    function initCharacterCounter() {
        elements.textInput.addEventListener("input", function () {
            var count = this.value.length;
            elements.charCount.textContent = count;
            updatePlayButtonState();
        });

        // Initialize count
        elements.charCount.textContent = elements.textInput.value.length;
        updatePlayButtonState();
    }

    /* -------------------------------------------------------
       Timer
       ------------------------------------------------------- */

    function initTimer() {
        // Load saved duration
        var savedDuration = localStorage.getItem(STORAGE_KEYS.timerDuration);
        if (savedDuration) {
            timerState.duration = parseInt(savedDuration, 10);
            timerState.remaining = timerState.duration;
        }

        // Update display
        updateTimerDisplay();

        // Select the active preset button
        selectActivePreset();
    }

    function selectActivePreset() {
        var presets = document.querySelectorAll(".btn-preset");
        presets.forEach(function (btn) {
            var duration = parseInt(btn.getAttribute("data-duration"), 10);
            if (duration === timerState.duration) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    function setTimerDuration(seconds) {
        timerState.duration = seconds;
        timerState.remaining = seconds;
        saveSetting(STORAGE_KEYS.timerDuration, seconds);
        updateTimerDisplay();
        selectActivePreset();
        updateTimerControls();
    }

    function startTimer() {
        if (timerState.isRunning) return;

        timerState.isRunning = true;
        timerState.isPaused = false;

        if (window.SoundEffects) window.SoundEffects.timerTick();

        var circumference = 2 * Math.PI * 90; // r=90 from SVG

        timerState.intervalId = setInterval(function () {
            timerState.remaining--;

            if (timerState.remaining <= 0) {
                timerState.remaining = 0;
                stopTimer();
                onTimerComplete();
                return;
            }

            // Update time display
            updateTimerDisplay();

            // Update ring progress
            var progress = (timerState.duration - timerState.remaining) / timerState.duration;
            var offset = circumference * (1 - progress);
            elements.timerRingProgress.style.strokeDashoffset = offset;

            // Color changes based on time remaining
            var ring = elements.timerRingProgress;
            ring.classList.remove("warning", "danger");

            if (timerState.remaining <= 10) {
                ring.classList.add("danger");
            } else if (timerState.remaining <= 30) {
                ring.classList.add("warning");
            }
        }, 1000);

        updateTimerControls();
    }

    function pauseTimer() {
        if (!timerState.isRunning) return;

        if (timerState.isPaused) {
            // Resume
            timerState.isPaused = false;
            startTimer();
            elements.timerLabel.textContent = "Berjalan";
            updatePauseTimerButton(true);
        } else {
            // Pause
            timerState.isPaused = true;
            timerState.isRunning = false;

            if (timerState.intervalId) {
                clearInterval(timerState.intervalId);
                timerState.intervalId = null;
            }

            elements.timerLabel.textContent = "Dijeda";
            updatePauseTimerButton(false);
            updateTimerControls();
        }
    }

    function stopTimer() {
        if (timerState.intervalId) {
            clearInterval(timerState.intervalId);
            timerState.intervalId = null;
        }

        timerState.isRunning = false;
        timerState.isPaused = false;
        timerState.remaining = timerState.duration;

        // Reset ring
        elements.timerRingProgress.style.strokeDashoffset = 0;
        elements.timerRingProgress.classList.remove("warning", "danger");

        elements.timerLabel.textContent = "Siap";
        updateTimerDisplay();
        updateTimerControls();
    }

    function onTimerComplete() {
        elements.timerLabel.textContent = "Waktu Habis!";

        // Track stats for completed timer session
        trackTimerSession(timerState.duration);

        // Play alert sound using SoundEffects
        if (window.SoundEffects) window.SoundEffects.timerComplete();

        // Try TTS alert
        if (window.VoiceManager && window.VoiceManager.isSupported()) {
            var alertUtterance = new SpeechSynthesisUtterance("Waktu habis!");
            alertUtterance.lang = currentSettings.lang;
            alertUtterance.rate = 1.0;
            alertUtterance.pitch = 1.0;
            window.speechSynthesis.speak(alertUtterance);
        }

        updateTimerControls();

        // If in practice mode, stop it
        if (elements.btnPracticeStop && elements.btnPracticeStop.style.display !== "none") {
            stopPracticeMode();
        }
    }

    function updateTimerDisplay() {
        var minutes = Math.floor(timerState.remaining / 60);
        var seconds = timerState.remaining % 60;
        var timeStr = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
        elements.timerTime.textContent = timeStr;
    }

    function updateTimerControls() {
        elements.btnTimerStart.disabled = timerState.isRunning;
        elements.btnTimerPause.disabled = !timerState.isRunning && !timerState.isPaused;
        elements.btnTimerReset.disabled = timerState.remaining === timerState.duration;

        // Update start button state
        var startSvg = elements.btnTimerStart.querySelector("svg");
        var startSpan = elements.btnTimerStart.querySelector("span");

        if (timerState.isRunning || timerState.isPaused) {
            startSvg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
            startSpan.textContent = timerState.isPaused ? "Lanjut" : "Jalankan";
        } else {
            startSvg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
            startSpan.textContent = "Mulai";
        }
    }

    function updatePauseTimerButton(isPaused) {
        var svg = elements.btnTimerPause.querySelector("svg");
        var span = elements.btnTimerPause.querySelector("span");

        if (isPaused) {
            svg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
            span.textContent = "Lanjut";
        } else {
            svg.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
            span.textContent = "Jeda";
        }
    }

    function initTimerEvents() {
        // Preset buttons
        var presets = document.querySelectorAll(".btn-preset");
        presets.forEach(function (btn) {
            btn.addEventListener("click", function () {
                var duration = parseInt(this.getAttribute("data-duration"), 10);
                setTimerDuration(duration);
            });
        });

        // Custom duration input
        var customInput = document.getElementById("input-custom-duration");
        var btnSetCustom = document.getElementById("btn-set-custom-duration");

        if (btnSetCustom) {
            btnSetCustom.addEventListener("click", function () {
                if (!customInput) return;
                var value = parseInt(customInput.value, 10);
                if (isNaN(value) || value < 10 || value > 3600) {
                    customInput.classList.add("error");
                    setTimeout(function () {
                        customInput.classList.remove("error");
                    }, 500);
                    if (window.SoundEffects) window.SoundEffects.error();
                    return;
                }
                setTimerDuration(value);
                // Deselect all presets
                presets.forEach(function (p) { p.classList.remove("active"); });
                if (window.SoundEffects) window.SoundEffects.toggleClick();
            });
        }

        // Enter key on custom input
        if (customInput) {
            customInput.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    btnSetCustom.click();
                }
            });
        }

        // Timer control buttons
        elements.btnTimerStart.addEventListener("click", function () {
            if (timerState.isRunning) {
                // Already running - treat as pause
                pauseTimer();
            } else if (timerState.isPaused) {
                // Resume from paused
                pauseTimer();
            } else {
                // Start fresh
                elements.timerLabel.textContent = "Berjalan";
                startTimer();
            }
        });

        elements.btnTimerPause.addEventListener("click", function () {
            pauseTimer();
        });

        elements.btnTimerReset.addEventListener("click", function () {
            stopTimer();
        });

        // Practice Mode
        elements.btnPracticeStart.addEventListener("click", startPracticeMode);
        elements.btnPracticeStop.addEventListener("click", stopPracticeMode);
    }

    /* -------------------------------------------------------
       Practice Mode — Topic + Timer + TTS
       ------------------------------------------------------- */

    function startPracticeMode() {
        var duration = parseInt(elements.practiceDuration.value, 10);
        var topic = getRandomTopicInternal();

        // Show topic
        elements.practiceTopic.textContent = topic.text;

        // Update UI
        elements.btnPracticeStart.style.display = "none";
        elements.btnPracticeStop.style.display = "inline-flex";

        // Set timer and start
        setTimerDuration(duration);
        stopTimer();
        elements.timerLabel.textContent = "Berjalan";
        startTimer();

        // Send topic to TTS and speak
        elements.textInput.value = topic.text;
        elements.charCount.textContent = topic.text.length;

        speak(topic.text);

        // Track
        addToHistory(topic.text, topic.category);
        trackTopicGenerated(topic.category);
    }

    function stopPracticeMode() {
        stopSpeaking();
        stopTimer();

        elements.btnPracticeStop.style.display = "none";
        elements.btnPracticeStart.style.display = "inline-flex";
    }

    function getRandomTopicInternal() {
        var category = elements.selectCategory ? elements.selectCategory.value : "all";
        var difficulty = elements.selectDifficulty ? elements.selectDifficulty.value : "all";

        var categoryTopics;
        if (category === "all") {
            var cats = ["opinion", "experience", "debate", "fun"];
            category = cats[Math.floor(Math.random() * cats.length)];
        }

        if (window.TOPICS && window.TOPICS[category]) {
            var list = window.TOPICS[category];
            if (difficulty !== "all") {
                list = list.filter(function (t) { return t.difficulty === difficulty; });
            }
            if (list.length === 0) list = window.TOPICS[category];
            var idx = Math.floor(Math.random() * list.length);
            return { text: list[idx].text, category: category, difficulty: list[idx].difficulty };
        }

        return { text: "Practice mode: pick a topic", category: category, difficulty: "medium" };
    }

    /* -------------------------------------------------------
       Interview Prep
       ------------------------------------------------------- */

    function initInterview() {
        // Populate category dropdown
        populateInterviewCategories();

        // Load saved category preference
        var savedCategory = localStorage.getItem(STORAGE_KEYS.interviewCategory);
        if (savedCategory && elements.selectInterviewCategory) {
            elements.selectInterviewCategory.value = savedCategory;
            interviewState.currentCategory = savedCategory;
        }

        // Show initial framework
        renderFramework("STAR");

        // Generate initial random question
        generateRandomQuestion();
    }

    function populateInterviewCategories() {
        if (!elements.selectInterviewCategory) return;

        var categories = window.InterviewHelper.getCategories();
        elements.selectInterviewCategory.innerHTML = "";

        categories.forEach(function (cat) {
            var opt = document.createElement("option");
            opt.value = cat.id;
            opt.textContent = cat.label;
            elements.selectInterviewCategory.appendChild(opt);
        });
    }

    function renderFramework(frameworkKey) {
        var framework = window.InterviewHelper.getFramework(frameworkKey);
        if (!framework) return;

        interviewState.currentFramework = frameworkKey;

        elements.frameworkTitle.textContent = framework.title;
        elements.frameworkFullname.textContent = framework.fullName;
        elements.frameworkDesc.textContent = framework.description;

        // Render steps
        elements.frameworkSteps.innerHTML = "";

        framework.steps.forEach(function (step) {
            var stepEl = document.createElement("div");
            stepEl.className = "framework-step";

            var labelEl = document.createElement("div");
            labelEl.className = "framework-step-label";
            labelEl.textContent = step.label;

            var infoEl = document.createElement("div");
            infoEl.className = "framework-step-info";

            var nameEl = document.createElement("div");
            nameEl.className = "framework-step-name";
            nameEl.textContent = step.name;

            var descEl = document.createElement("div");
            descEl.className = "framework-step-desc";
            descEl.textContent = step.desc;

            infoEl.appendChild(nameEl);
            infoEl.appendChild(descEl);
            stepEl.appendChild(labelEl);
            stepEl.appendChild(infoEl);
            elements.frameworkSteps.appendChild(stepEl);
        });

        // Update active tab
        var tabs = document.querySelectorAll(".btn-framework");
        tabs.forEach(function (tab) {
            if (tab.getAttribute("data-framework") === frameworkKey) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
    }

    function generateRandomQuestion() {
        var category = elements.selectInterviewCategory.value;
        var question = window.InterviewHelper.getRandomQuestion(category);

        if (!question) {
            elements.questionText.textContent = "Tidak ada pertanyaan untuk kategori ini.";
            elements.questionCategoryLabel.textContent = "";
            interviewState.currentQuestion = null;
            elements.answerSection.style.display = "none";
            elements.consultAnswerSection.style.display = "none";
            return;
        }

        interviewState.currentQuestion = question;

        // Set category label
        var categories = window.InterviewHelper.getCategories();
        var catObj = categories.find(function (c) { return c.id === question.category; });
        elements.questionCategoryLabel.textContent = catObj ? catObj.label : question.category;

        // Set question text
        elements.questionText.textContent = question.question;

        // Show appropriate answer section
        if (question.star) {
            // Behavioral question with STAR
            elements.answerSection.style.display = "block";
            elements.consultAnswerSection.style.display = "none";

            // Reset toggle state
            elements.btnToggleAnswer.classList.remove("open");
            elements.btnToggleAnswer.querySelector(".toggle-label").textContent = "Lihat Contoh Jawaban (STAR)";
            elements.btnToggleAnswer.querySelector(".toggle-icon").style.transform = "";
            elements.answerContent.style.display = "none";

            // Set STAR parts
            elements.answerS.textContent = question.star.situation || "-";
            elements.answerT.textContent = question.star.task || "-";
            elements.answerA.textContent = question.star.action || "-";
            elements.answerR.textContent = question.star.result || "-";
        } else if (question.answer) {
            // Consulting question
            elements.answerSection.style.display = "none";
            elements.consultAnswerSection.style.display = "block";

            // Reset toggle state
            elements.btnToggleConsultAnswer.classList.remove("open");
            elements.btnToggleConsultAnswer.querySelector(".toggle-label").textContent = "Lihat Contoh Jawaban";
            elements.btnToggleConsultAnswer.querySelector(".toggle-icon").style.transform = "";
            elements.consultAnswerContent.style.display = "none";

            elements.consultAnswerText.textContent = question.answer;
        }

        if (window.SoundEffects) window.SoundEffects.generate();
    }

    function toggleAnswer(section, content, btn) {
        var isOpen = content.style.display === "block";

        if (isOpen) {
            content.style.display = "none";
            btn.classList.remove("open");
            btn.querySelector(".toggle-icon").style.transform = "";
        } else {
            content.style.display = "block";
            btn.classList.add("open");
            btn.querySelector(".toggle-icon").style.transform = "rotate(180deg)";
        }
    }

    function copyInterviewQuestion() {
        if (!interviewState.currentQuestion) return;

        var text = interviewState.currentQuestion.question;

        navigator.clipboard.writeText(text).then(function () {
            if (window.SoundEffects) window.SoundEffects.success();
            showCopyFeedback(elements.btnInterviewCopy);
        }).catch(function () {
            // Fallback
            var textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showCopyFeedback(elements.btnInterviewCopy);
        });
    }

    function sendInterviewQuestionToTts() {
        if (!interviewState.currentQuestion) return;

        var text = interviewState.currentQuestion.question;
        elements.textInput.value = text;
        elements.charCount.textContent = text.length;
        updatePlayButtonState();

        // Scroll to TTS section
        elements.textInput.scrollIntoView({ behavior: "smooth", block: "center" });
        elements.textInput.focus();
    }

    function showCopyFeedback(btn) {
        var svg = btn.querySelector("svg");
        var originalHTML = svg.innerHTML;

        svg.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
        btn.classList.add("copied");

        setTimeout(function () {
            svg.innerHTML = originalHTML;
            btn.classList.remove("copied");
        }, 2000);
    }

    function initInterviewEvents() {
        // Random question button
        elements.btnInterviewRandom.addEventListener("click", generateRandomQuestion);

        // Category change
        elements.selectInterviewCategory.addEventListener("change", function () {
            interviewState.currentCategory = this.value;
            saveSetting(STORAGE_KEYS.interviewCategory, this.value);
            generateRandomQuestion();
        });

        // Framework tabs
        var frameworkTabs = document.querySelectorAll(".btn-framework");
        frameworkTabs.forEach(function (tab) {
            tab.addEventListener("click", function () {
                var frameworkKey = this.getAttribute("data-framework");
                renderFramework(frameworkKey);
            });
        });

        // Copy question button
        elements.btnInterviewCopy.addEventListener("click", copyInterviewQuestion);

        // Send to TTS button
        elements.btnInterviewToTts.addEventListener("click", sendInterviewQuestionToTts);

        // Toggle STAR answer
        elements.btnToggleAnswer.addEventListener("click", function () {
            toggleAnswer(elements.answerSection, elements.answerContent, elements.btnToggleAnswer);
        });

        // Toggle consulting answer
        elements.btnToggleConsultAnswer.addEventListener("click", function () {
            toggleAnswer(elements.consultAnswerSection, elements.consultAnswerContent, elements.btnToggleConsultAnswer);
        });
    }

    /* -------------------------------------------------------
       Favorites
       ------------------------------------------------------- */

    function initFavorites() {
        // Load saved favorites
        var saved = localStorage.getItem(STORAGE_KEYS.favorites);
        if (saved) {
            try {
                favoritesState.topics = JSON.parse(saved);
            } catch (e) {
                favoritesState.topics = [];
            }
        }
        renderFavorites();
        updateBookmarkButton();
    }

    function saveFavorites() {
        localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favoritesState.topics));
    }

    function isFavorite(text) {
        return favoritesState.topics.some(function (item) {
            return item.text === text;
        });
    }

    function toggleFavorite() {
        var topicText = elements.topicText.textContent;
        // Don't allow bookmarking the placeholder text
        if (topicText.indexOf("Klik tombol") !== -1) return;

        var idx = favoritesState.topics.findIndex(function (item) {
            return item.text === topicText;
        });

        if (idx !== -1) {
            // Remove
            favoritesState.topics.splice(idx, 1);
        } else {
            // Add
            var category = elements.selectCategory ? elements.selectCategory.value : "all";
            favoritesState.topics.unshift({
                text: topicText,
                category: category,
                savedAt: Date.now()
            });
        }

        saveFavorites();
        renderFavorites();
        updateBookmarkButton();

        if (window.SoundEffects) {
            if (idx !== -1) {
                window.SoundEffects.toggleClick();
            } else {
                window.SoundEffects.success();
            }
        }
    }

    function removeFavorite(text) {
        var idx = favoritesState.topics.findIndex(function (item) {
            return item.text === text;
        });
        if (idx !== -1) {
            favoritesState.topics.splice(idx, 1);
            saveFavorites();
            renderFavorites();
            updateBookmarkButton();
            if (window.SoundEffects) window.SoundEffects.toggleClick();
        }
    }

    function clearAllFavorites() {
        if (favoritesState.topics.length === 0) return;
        favoritesState.topics = [];
        saveFavorites();
        renderFavorites();
        updateBookmarkButton();
        if (window.SoundEffects) window.SoundEffects.toggleClick();
    }

    function renderFavorites() {
        var list = elements.favoritesList;
        var empty = elements.favoritesEmpty;

        if (favoritesState.topics.length === 0) {
            empty.style.display = "";
            // Remove all favorite cards
            var cards = list.querySelectorAll(".favorite-card");
            for (var i = 0; i < cards.length; i++) {
                cards[i].parentNode.removeChild(cards[i]);
            }
            return;
        }

        empty.style.display = "none";

        // Clear existing cards
        var cards = list.querySelectorAll(".favorite-card");
        for (var j = 0; j < cards.length; j++) {
            cards[j].parentNode.removeChild(cards[j]);
        }

        // Render each favorite
        for (var k = 0; k < favoritesState.topics.length; k++) {
            var item = favoritesState.topics[k];
            var card = document.createElement("div");
            card.className = "favorite-card";

            var categoryLabel = item.category && item.category !== "all"
                ? item.category.charAt(0).toUpperCase() + item.category.slice(1)
                : "Semua";

            card.innerHTML =
                '<div class="favorite-card-text">' +
                    '<span class="favorite-category">' + categoryLabel + '</span>' +
                    '<p>' + escapeHtml(item.text) + '</p>' +
                '</div>' +
                '<div class="favorite-card-actions">' +
                    '<button class="btn-icon" title="Salin" data-action="copy" data-text="' + escapeHtml(item.text) + '">' +
                        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                            '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>' +
                            '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' +
                        '</svg>' +
                    '</button>' +
                    '<button class="btn-icon" title="Gunakan" data-action="use" data-text="' + escapeHtml(item.text) + '">' +
                        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                            '<polyline points="9 18 15 12 9 6"/>' +
                        '</svg>' +
                    '</button>' +
                    '<button class="btn-icon btn-remove" title="Hapus" data-action="remove" data-text="' + escapeHtml(item.text) + '">' +
                        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                            '<polyline points="3 6 5 6 21 6"/>' +
                            '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' +
                        '</svg>' +
                    '</button>' +
                '</div>';

            list.appendChild(card);
        }
    }

    function updateBookmarkButton() {
        var btn = elements.btnBookmarkTopic;
        if (!btn) return;
        var isFav = isFavorite(elements.topicText.textContent);
        btn.classList.toggle("bookmarked", isFav);
    }

    function updateDifficultyBadge(difficulty) {
        var badge = elements.topicDifficulty;
        if (!badge) return;
        badge.className = "topic-difficulty";
        if (!difficulty) {
            badge.textContent = "";
            return;
        }
        var labels = { easy: "Mudah", medium: "Sedang", hard: "Sulit" };
        badge.textContent = labels[difficulty] || difficulty;
        badge.classList.add(difficulty);
    }

    function escapeHtml(text) {
        var div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    function buildExportText() {
        if (favoritesState.topics.length === 0) return "";
        var lines = ["TOPIK TERSIMPAN - Speech TTS App", ""];
        for (var i = 0; i < favoritesState.topics.length; i++) {
            var item = favoritesState.topics[i];
            var cat = item.category && item.category !== "all"
                ? "[" + item.category.charAt(0).toUpperCase() + item.category.slice(1) + "] "
                : "";
            lines.push((i + 1) + ". " + cat + item.text);
        }
        lines.push("", "Generated by Speech TTS App");
        return lines.join("\n");
    }

    function exportCopyAll() {
        var text = buildExportText();
        if (!text) return;
        navigator.clipboard.writeText(text).then(function () {
            if (window.SoundEffects) window.SoundEffects.success();
        }).catch(function () {});
    }

    function exportDownload() {
        var text = buildExportText();
        if (!text) return;
        var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        var date = new Date().toISOString().split("T")[0];
        a.href = url;
        a.download = "topik-tersimpan-" + date + ".txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        if (window.SoundEffects) window.SoundEffects.success();
    }

    function exportShare() {
        var text = buildExportText();
        if (!text) return;

        if (navigator.share) {
            navigator.share({
                title: "Topik Tersimpan - Speech TTS",
                text: text
            }).catch(function () {});
        } else {
            // Fallback: copy to clipboard
            exportCopyAll();
        }
    }

    function initFavoritesEvents() {
        // Bookmark button in topic tab
        elements.btnBookmarkTopic.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite();
        });

        // Clear all button
        elements.btnClearFavorites.addEventListener("click", function () {
            if (favoritesState.topics.length === 0) return;
            if (confirm("Hapus semua topik tersimpan?")) {
                clearAllFavorites();
            }
        });

        // Export buttons
        var btnExportCopy = document.getElementById("btn-export-copy");
        var btnExportDownload = document.getElementById("btn-export-download");
        var btnExportShare = document.getElementById("btn-export-share");
        if (btnExportCopy) btnExportCopy.addEventListener("click", exportCopyAll);
        if (btnExportDownload) btnExportDownload.addEventListener("click", exportDownload);
        if (btnExportShare) btnExportShare.addEventListener("click", exportShare);

        // Delegated click on favorites list
        elements.favoritesList.addEventListener("click", function (e) {
            var btn = e.target.closest("[data-action]");
            if (!btn) return;

            var action = btn.getAttribute("data-action");
            var text = btn.getAttribute("data-text");

            if (action === "copy") {
                navigator.clipboard.writeText(text).then(function () {
                    if (window.SoundEffects) window.SoundEffects.success();
                }).catch(function () {});
            } else if (action === "use") {
                // Switch to TTS tab and load text
                elements.textInput.value = text;
                updatePlayButtonState();
                switchTab("tts");
            } else if (action === "remove") {
                removeFavorite(text);
            }
        });
    }

    /* -------------------------------------------------------
       History
       ------------------------------------------------------- */

    function initHistory() {
        var saved = localStorage.getItem(STORAGE_KEYS.history);
        if (saved) {
            try {
                historyState.topics = JSON.parse(saved);
            } catch (e) {
                historyState.topics = [];
            }
        }
    }

    function saveHistory() {
        localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(historyState.topics));
    }

    function addToHistory(text, category) {
        // Don't add duplicates if same as last item
        if (historyState.topics.length > 0 && historyState.topics[0].text === text) {
            return;
        }

        historyState.topics.unshift({
            text: text,
            category: category || "all",
            timestamp: Date.now()
        });

        // Trim to max items
        if (historyState.topics.length > historyState.maxItems) {
            historyState.topics = historyState.topics.slice(0, historyState.maxItems);
        }

        saveHistory();
        renderHistory();
    }

    function clearHistory() {
        historyState.topics = [];
        saveHistory();
        renderHistory();
    }

    function renderHistory() {
        var list = elements.topicHistoryList;
        if (!list) return;

        if (historyState.topics.length === 0) {
            list.innerHTML = '<p class="history-empty">Belum ada riwayat.</p>';
            return;
        }

        var html = "";
        for (var i = 0; i < historyState.topics.length; i++) {
            var item = historyState.topics[i];
            var timeAgo = formatTimeAgo(item.timestamp);
            var shortText = item.text.length > 80 ? item.text.substring(0, 80) + "..." : item.text;
            html +=
                '<div class="history-item" data-index="' + i + '">' +
                    '<span class="history-item-text" title="' + escapeHtml(item.text) + '">' + escapeHtml(shortText) + '</span>' +
                    '<span class="history-item-time">' + timeAgo + '</span>' +
                    '<button class="btn-icon" title="Salin" data-action="copy" data-index="' + i + '">' +
                        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                            '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>' +
                            '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' +
                        '</svg>' +
                    '</button>' +
                '</div>';
        }
        list.innerHTML = html;
    }

    function formatTimeAgo(timestamp) {
        var diff = Date.now() - timestamp;
        var seconds = Math.floor(diff / 1000);
        if (seconds < 60) return " baru saja";
        var minutes = Math.floor(seconds / 60);
        if (minutes < 60) return minutes + " menit lalu";
        var hours = Math.floor(minutes / 60);
        if (hours < 24) return hours + " jam lalu";
        var days = Math.floor(hours / 24);
        if (days < 7) return days + " hari lalu";
        var d = new Date(timestamp);
        return d.getDate() + "/" + (d.getMonth() + 1);
    }

    function toggleHistoryPanel() {
        historyState.panelOpen = !historyState.panelOpen;
        var panel = elements.topicHistoryPanel;
        if (panel) {
            panel.style.display = historyState.panelOpen ? "block" : "none";
        }
        if (historyState.panelOpen) {
            renderHistory();
        }
    }

    function initHistoryEvents() {
        // History button toggle
        elements.btnTopicHistory.addEventListener("click", toggleHistoryPanel);

        // Close button
        elements.btnCloseHistory.addEventListener("click", function () {
            historyState.panelOpen = false;
            elements.topicHistoryPanel.style.display = "none";
        });

        // Delegated click on history list
        elements.topicHistoryList.addEventListener("click", function (e) {
            var btn = e.target.closest("[data-action]");
            var item = e.target.closest(".history-item");

            if (btn && btn.getAttribute("data-action") === "copy") {
                var idx = parseInt(btn.getAttribute("data-index"), 10);
                var text = historyState.topics[idx].text;
                navigator.clipboard.writeText(text).then(function () {
                    if (window.SoundEffects) window.SoundEffects.success();
                }).catch(function () {});
                return;
            }

            if (item) {
                var idx = parseInt(item.getAttribute("data-index"), 10);
                var text = historyState.topics[idx].text;
                // Stop any ongoing speech, then load into TTS
                if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
                    window.speechSynthesis.cancel();
                    if (elements.btnTopicTts) elements.btnTopicTts.classList.remove("playing");
                }
                elements.textInput.value = text;
                elements.charCount.textContent = text.length;
                updatePlayButtonState();
                switchTab("tts");
            }
        });
    }

    /* -------------------------------------------------------
       Daily Challenge
       ------------------------------------------------------- */

    function getTodayDateString() {
        var d = new Date();
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    }

    function getDailyTopic(dateStr) {
        // Deterministic random based on date string
        // Use date string as seed to pick a topic
        var hash = 0;
        for (var i = 0; i < dateStr.length; i++) {
            hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
            hash = hash & hash;
        }
        // Use hash to pick category and topic
        var categories = ["opinion", "experience", "debate", "fun"];
        var catIndex = Math.abs(hash) % categories.length;
        var category = categories[catIndex];

        var allTopics = window.TOPICS[category];
        var topicIndex = Math.abs(hash >> 4) % allTopics.length;

        // Also determine difficulty based on day of week
        var d = new Date(dateStr);
        var dayOfWeek = d.getDay();
        var difficulties = ["easy", "medium", "hard", "easy", "medium", "hard", "hard"];
        var difficulty = difficulties[dayOfWeek];

        return {
            text: allTopics[topicIndex].text,
            difficulty: allTopics[topicIndex].difficulty,
            category: category,
            date: dateStr
        };
    }

    function initDailyChallenge() {
        var today = getTodayDateString();
        var saved = localStorage.getItem(STORAGE_KEYS.daily);
        var data;

        if (saved) {
            try {
                data = JSON.parse(saved);
            } catch (e) {
                data = null;
            }
        }

        var dailyEl = document.getElementById("daily-challenge");
        var topicEl = document.getElementById("daily-topic");
        var difficultyEl = document.getElementById("daily-difficulty");
        var dateEl = document.getElementById("daily-date");
        var streakEl = document.getElementById("daily-streak");
        var completeBtn = document.getElementById("btn-daily-complete");

        // Format date
        var d = new Date();
        var dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        dateEl.textContent = d.toLocaleDateString("id-ID", dateOptions);

        // Get today's topic
        var dailyTopic = getDailyTopic(today);
        topicEl.textContent = dailyTopic.text;

        // Difficulty badge
        var diffLabels = { easy: "Mudah", medium: "Sedang", hard: "Sulit" };
        difficultyEl.textContent = diffLabels[dailyTopic.difficulty] || dailyTopic.difficulty;
        difficultyEl.className = "daily-difficulty " + (dailyTopic.difficulty || "");

        // Check if completed today
        var isCompleted = data && data.date === today && data.completed;

        if (isCompleted) {
            completeBtn.classList.add("completed");
            completeBtn.innerHTML =
                '<svg class="icon-default" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                    '<polyline points="20 6 9 17 4 12"/>' +
                '</svg>' +
                '<svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                    '<polyline points="20 6 9 17 4 12"/>' +
                '</svg>' +
                '<span>Terselesaikan</span>';
        } else {
            completeBtn.classList.remove("completed");
            completeBtn.innerHTML =
                '<svg class="icon-default" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                    '<polyline points="20 6 9 17 4 12"/>' +
                '</svg>' +
                '<svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;">' +
                    '<polyline points="20 6 9 17 4 12"/>' +
                '</svg>' +
                '<span>Selesai</span>';
        }

        // Calculate streak
        var streak = calculateStreak();
        streakEl.textContent = "🔥 " + streak + " hari";

        // Complete button handler
        completeBtn.onclick = function () {
            if (isCompleted) return;

            // Save completion (today + date-specific for streak)
            var saveData = {
                date: today,
                completed: true,
                topic: dailyTopic.text
            };
            localStorage.setItem(STORAGE_KEYS.daily, JSON.stringify(saveData));
            localStorage.setItem("tts-app-daily-" + today, JSON.stringify(saveData));

            // Update UI
            completeBtn.classList.add("completed");
            completeBtn.innerHTML =
                '<svg class="icon-default" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;">' +
                    '<polyline points="20 6 9 17 4 12"/>' +
                '</svg>' +
                '<svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                    '<polyline points="20 6 9 17 4 12"/>' +
                '</svg>' +
                '<span>Terselesaikan</span>';

            // Celebrate animation
            dailyEl.classList.remove("celebrate");
            void dailyEl.offsetWidth;
            dailyEl.classList.add("celebrate");
            setTimeout(function () {
                dailyEl.classList.remove("celebrate");
            }, 1200);

            // Update streak
            streak = calculateStreak();
            streakEl.textContent = "🔥 " + streak + " hari";

            // Update milestones
            updateMilestones();

            // Sound
            if (window.SoundEffects) window.SoundEffects.success();
        };
    }

    function calculateStreak() {
        var saved = localStorage.getItem(STORAGE_KEYS.daily);
        if (!saved) return 0;

        var streak = 0;
        var checkDate = new Date();

        while (true) {
            var dateStr = checkDate.getFullYear() + "-" + (checkDate.getMonth() + 1) + "-" + checkDate.getDate();
            var data = null;

            if (dateStr === getTodayDateString()) {
                // Today: check if completed
                try {
                    data = JSON.parse(saved);
                    if (!data || data.date !== dateStr || !data.completed) break;
                } catch (e) {
                    break;
                }
                streak++;
            } else {
                // Past days: check each day
                var dayData = localStorage.getItem("tts-app-daily-" + dateStr);
                if (dayData) {
                    try {
                        var parsed = JSON.parse(dayData);
                        if (parsed && parsed.completed) {
                            streak++;
                        } else {
                            break;
                        }
                    } catch (e) {
                        break;
                    }
                } else {
                    break;
                }
            }

            checkDate.setDate(checkDate.getDate() - 1);
        }

        return streak;
    }

    /* -------------------------------------------------------
       Stats
       ------------------------------------------------------- */

    function initStats() {
        var saved = localStorage.getItem(STORAGE_KEYS.stats);
        if (saved) {
            try {
                var data = JSON.parse(saved);
                statsState.topicsGenerated = data.topicsGenerated || 0;
                statsState.timerSessions = data.timerSessions || 0;
                statsState.practiceSeconds = data.practiceSeconds || 0;
                statsState.categoryCounts = data.categoryCounts || {
                    opinion: 0, experience: 0, debate: 0, fun: 0
                };
            } catch (e) {}
        }
        renderStats();
    }

    function saveStats() {
        localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify({
            topicsGenerated: statsState.topicsGenerated,
            timerSessions: statsState.timerSessions,
            practiceSeconds: statsState.practiceSeconds,
            categoryCounts: statsState.categoryCounts
        }));
    }

    function trackTopicGenerated(category) {
        statsState.topicsGenerated++;
        if (category && category !== "all" && statsState.categoryCounts.hasOwnProperty(category)) {
            statsState.categoryCounts[category]++;
        }
        saveStats();
    }

    function trackTimerSession(seconds) {
        statsState.timerSessions++;
        statsState.practiceSeconds += seconds;
        saveStats();
    }

    function getStreakFromStats() {
        var streak = 0;
        var checkDate = new Date();
        for (var i = 0; i < 365; i++) {
            var dateStr = checkDate.getFullYear() + "-" +
                (checkDate.getMonth() + 1) + "-" + checkDate.getDate();
            var dayData = localStorage.getItem("tts-app-daily-" + dateStr);
            if (dayData) {
                try {
                    var parsed = JSON.parse(dayData);
                    if (parsed && parsed.completed) {
                        streak++;
                        checkDate.setDate(checkDate.getDate() - 1);
                        continue;
                    }
                } catch (e) {}
            }
            break;
        }
        return streak;
    }

    function renderStats() {
        var el;

        el = document.getElementById("stat-topics");
        if (el) el.textContent = statsState.topicsGenerated;

        el = document.getElementById("stat-favorites");
        if (el) el.textContent = favoritesState.topics.length;

        el = document.getElementById("stat-timer-sessions");
        if (el) el.textContent = statsState.timerSessions;

        // Format practice time
        var seconds = statsState.practiceSeconds;
        var timeStr;
        if (seconds < 60) {
            timeStr = seconds + " detik";
        } else if (seconds < 3600) {
            timeStr = Math.round(seconds / 60) + " menit";
        } else {
            var hours = Math.floor(seconds / 3600);
            var mins = Math.round((seconds % 3600) / 60);
            if (mins === 0) {
                timeStr = hours + " jam";
            } else {
                timeStr = hours + " jam " + mins + " menit";
            }
        }
        el = document.getElementById("stat-practice-time");
        if (el) el.textContent = timeStr;

        // Streak
        var streak = getStreakFromStats();
        el = document.getElementById("stat-streak");
        if (el) el.textContent = streak;

        // Top category
        var cats = statsState.categoryCounts;
        var maxCount = 0;
        var maxCat = "-";
        var catLabels = { opinion: "Opini", experience: "Pengalaman", debate: "Debat", fun: "Seru" };
        for (var key in cats) {
            if (cats[key] > maxCount) {
                maxCount = cats[key];
                maxCat = catLabels[key] || key;
            }
        }
        if (maxCount === 0) maxCat = "-";
        el = document.getElementById("stat-top-category");
        if (el) el.textContent = maxCat;

        // Category bars
        var total = statsState.topicsGenerated;
        var barIds = {
            opinion: "bar-opinion",
            experience: "bar-experience",
            debate: "bar-debate",
            fun: "bar-fun"
        };
        var countIds = {
            opinion: "count-opinion",
            experience: "count-experience",
            debate: "count-debate",
            fun: "count-fun"
        };

        for (var k in barIds) {
            var barEl = document.getElementById(barIds[k]);
            var countEl = document.getElementById(countIds[k]);
            if (barEl) barEl.style.width = (total > 0 ? (cats[k] / total * 100) : 0) + "%";
            if (countEl) countEl.textContent = cats[k];
        }

        // Update milestones
        updateMilestones();
    }

    function updateMilestones() {
        var topics = statsState.topicsGenerated;
        var streak = getStreakFromStats();

        var milestones = [
            { id: "milestone-10", threshold: 10, value: topics },
            { id: "milestone-50", threshold: 50, value: topics },
            { id: "milestone-100", threshold: 100, value: topics },
            { id: "milestone-streak3", threshold: 3, value: streak },
            { id: "milestone-streak7", threshold: 7, value: streak },
            { id: "milestone-streak30", threshold: 30, value: streak }
        ];

        milestones.forEach(function (m) {
            var el = document.getElementById(m.id);
            if (!el) return;
            if (m.value >= m.threshold) {
                el.classList.add("unlocked");
            } else {
                el.classList.remove("unlocked");
            }
        });
    }

    function resetStats() {
        if (!confirm("Reset semua statistik?")) return;
        statsState.topicsGenerated = 0;
        statsState.timerSessions = 0;
        statsState.practiceSeconds = 0;
        statsState.categoryCounts = {
            opinion: 0, experience: 0, debate: 0, fun: 0
        };
        saveStats();
        renderStats();
        if (window.SoundEffects) window.SoundEffects.toggleClick();
    }

    function initStatsEvents() {
        var btnReset = document.getElementById("btn-reset-stats");
        if (btnReset) {
            btnReset.addEventListener("click", resetStats);
        }

        var btnExport = document.getElementById("btn-export-stats");
        if (btnExport) {
            btnExport.addEventListener("click", exportPracticeSession);
        }
    }

    function exportPracticeSession() {
        var stats = loadStats();
        var history = loadHistory();
        var favorites = loadFavorites();

        var lines = [];
        var now = new Date();
        lines.push("===========================================");
        lines.push("SPEECH TTS APP - LAPORAN LATIHAN");
        lines.push("Tanggal Export: " + now.toLocaleString("id-ID"));
        lines.push("===========================================");
        lines.push("");
        lines.push("--- STATISTIK ---");
        lines.push("Topik Dibuat: " + stats.topicsGenerated);
        lines.push("Favorit Tersimpan: " + stats.favoritesCount);
        lines.push("Sesi Timer: " + stats.timerSessions);
        lines.push("Total Waktu Latihan: " + formatPracticeTime(stats.practiceSeconds));
        lines.push("Streak Harian: " + stats.streak + " hari");
        lines.push("Kategori Favorit: " + (stats.topCategory || "-"));
        lines.push("");
        lines.push("--- DISTRIBUSI KATEGORI ---");
        if (stats.categoryCounts) {
            var cats = ["opinion", "experience", "debate", "fun"];
            var catNames = { opinion: "Opini", experience: "Pengalaman", debate: "Debat", fun: "Seru" };
            cats.forEach(function (cat) {
                var count = stats.categoryCounts[cat] || 0;
                lines.push(catNames[cat] + ": " + count);
            });
        }
        lines.push("");
        lines.push("--- RIWAYAT TOPIK (" + (history ? history.length : 0) + ") ---");
        if (history && history.length > 0) {
            history.slice(0, 50).forEach(function (item, i) {
                var time = item.timestamp ? new Date(item.timestamp).toLocaleString("id-ID") : "?";
                lines.push((i + 1) + ". [" + item.category + "] " + item.text + " (" + time + ")");
            });
        } else {
            lines.push("(tidak ada riwayat)");
        }
        lines.push("");
        lines.push("--- FAVORIT (" + (favorites ? favorites.length : 0) + ") ---");
        if (favorites && favorites.length > 0) {
            favorites.forEach(function (item, i) {
                lines.push((i + 1) + ". [" + item.category + "] " + item.text);
            });
        } else {
            lines.push("(tidak ada favorit)");
        }
        lines.push("");
        lines.push("===========================================");
        lines.push("Generated by Speech TTS App");

        var content = lines.join("\n");
        var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "speech-tts-latihan-" + now.toISOString().slice(0, 10) + ".txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        if (window.SoundEffects) window.SoundEffects.success();
    }

    function formatPracticeTime(seconds) {
        if (seconds < 60) return seconds + " detik";
        if (seconds < 3600) return Math.round(seconds / 60) + " menit";
        var h = Math.floor(seconds / 3600);
        var m = Math.round((seconds % 3600) / 60);
        return h + " jam " + m + " menit";
    }

    /* -------------------------------------------------------
       Speech-to-Text
       ------------------------------------------------------- */

    var sttState = {
        recognizing: false,
        recognition: null,
        finalTranscript: "",
        interimTranscript: ""
    };

    function initSTT() {
        // Check browser support
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            elements.sttStatusText.textContent = "Browser tidak mendukung Speech-to-Text";
            elements.btnSttToggle.disabled = true;
            elements.selectSttLang.disabled = true;
            return;
        }

        sttState.recognition = new SpeechRecognition();
        sttState.recognition.continuous = true;
        sttState.recognition.interimResults = true;
        sttState.recognition.maxAlternatives = 1;

        sttState.recognition.onstart = function () {
            sttState.recognizing = true;
            sttState.finalTranscript = "";
            elements.btnSttToggle.classList.add("recording");
            elements.sttStatusText.textContent = "Mendengarkan...";
        };

        sttState.recognition.onresult = function (event) {
            sttState.interimTranscript = "";
            sttState.finalTranscript = "";

            for (var i = event.resultIndex; i < event.results.length; i++) {
                var result = event.results[i];
                if (result.isFinal) {
                    sttState.finalTranscript += result[0].transcript;
                } else {
                    sttState.interimTranscript += result[0].transcript;
                }
            }

            // Update output with final + interim
            var displayText = sttState.finalTranscript + " " + sttState.interimTranscript;
            elements.sttOutput.textContent = displayText.trim();
        };

        sttState.recognition.onerror = function (event) {
            console.warn("STT Error:", event.error);
            stopSTT();
            if (event.error === "no-speech") {
                elements.sttStatusText.textContent = "Tidak ada suara terdeteksi. Coba lagi.";
            } else if (event.error === "not-allowed") {
                elements.sttStatusText.textContent = "Izin mikrofon ditolak. Aktifkan di pengaturan browser.";
            }
        };

        sttState.recognition.onend = function () {
            sttState.recognizing = false;
            elements.btnSttToggle.classList.remove("recording");
            // If there's accumulated text, keep it
            if (sttState.finalTranscript) {
                elements.sttOutput.textContent = sttState.finalTranscript.trim();
            }
            if (!sttState.finalTranscript) {
                elements.sttStatusText.textContent = "Tekan mic untuk mulai";
            } else {
                elements.sttStatusText.textContent = "Selesai";
            }
        };

        // Load saved language preference
        var savedLang = localStorage.getItem(STORAGE_KEYS.sttLang);
        if (savedLang && elements.selectSttLang) {
            elements.selectSttLang.value = savedLang;
            sttState.recognition.lang = savedLang;
        }
    }

    function toggleSTT() {
        if (!sttState.recognition) return;

        if (sttState.recognizing) {
            stopSTT();
        } else {
            startSTT();
        }
    }

    function startSTT() {
        if (!sttState.recognition) return;

        try {
            // Set language from dropdown
            sttState.recognition.lang = elements.selectSttLang.value;
            sttState.recognition.start();
        } catch (e) {
            // May fail if already started
            console.warn("STT start error:", e);
        }
    }

    function stopSTT() {
        if (!sttState.recognition) return;
        try {
            sttState.recognition.stop();
        } catch (e) {
            console.warn("STT stop error:", e);
        }
    }

    function initSTTEvents() {
        // Toggle recording
        elements.btnSttToggle.addEventListener("click", toggleSTT);

        // Clear button
        elements.btnSttClear.addEventListener("click", function () {
            elements.sttOutput.textContent = "";
            sttState.finalTranscript = "";
            sttState.interimTranscript = "";
            elements.sttStatusText.textContent = "Tekan mic untuk mulai";
        });

        // Send to TTS
        elements.btnSttToTts.addEventListener("click", function () {
            var text = elements.sttOutput.textContent.trim();
            if (!text) return;
            elements.textInput.value = text;
            updatePlayButtonState();
            switchTab("tts");
            if (window.SoundEffects) window.SoundEffects.success();
        });

        // Copy button
        elements.btnSttCopy.addEventListener("click", function () {
            var text = elements.sttOutput.textContent.trim();
            if (!text) return;
            navigator.clipboard.writeText(text).then(function () {
                if (window.SoundEffects) window.SoundEffects.success();
            }).catch(function () {});
        });

        // Language change
        elements.selectSttLang.addEventListener("change", function () {
            localStorage.setItem(STORAGE_KEYS.sttLang, this.value);
            if (sttState.recognition) {
                sttState.recognition.lang = this.value;
            }
        });
    }

    /* -------------------------------------------------------
       Sound Effects
       ------------------------------------------------------- */

    function initSound() {
        // Load saved sound preference
        var savedSound = localStorage.getItem(STORAGE_KEYS.soundEnabled);
        if (savedSound !== null) {
            soundState.enabled = savedSound === "true";
        }

        // Apply initial state
        if (!soundState.enabled) {
            document.documentElement.setAttribute("data-sound", "off");
        }

        // Initialize Web Audio API
        if (window.SoundEffects) {
            window.SoundEffects.init();
            window.SoundEffects.setEnabled(soundState.enabled);
        }
    }

    function toggleSound() {
        soundState.enabled = !soundState.enabled;
        window.SoundEffects.setEnabled(soundState.enabled);

        if (soundState.enabled) {
            document.documentElement.removeAttribute("data-sound");
            window.SoundEffects.click();
        } else {
            document.documentElement.setAttribute("data-sound", "off");
        }

        saveSetting(STORAGE_KEYS.soundEnabled, soundState.enabled);
    }

    /* -------------------------------------------------------
       Learn Vocab
       ------------------------------------------------------- */

    function initVocab() {
        // Populate category dropdown
        populateVocabCategories();

        // Load saved category preference
        var savedCategory = localStorage.getItem(STORAGE_KEYS.vocabCategory);
        if (savedCategory && elements.selectVocabCategory) {
            elements.selectVocabCategory.value = savedCategory;
            vocabState.currentCategory = savedCategory;
        }

        // Generate initial random word
        generateRandomWord();
    }

    function populateVocabCategories() {
        if (!elements.selectVocabCategory) return;

        var categories = window.VocabHelper.getCategories();
        elements.selectVocabCategory.innerHTML = "";

        categories.forEach(function (cat) {
            var opt = document.createElement("option");
            opt.value = cat.id;
            opt.textContent = cat.label;
            elements.selectVocabCategory.appendChild(opt);
        });
    }

    function generateRandomWord() {
        var category = elements.selectVocabCategory.value;
        var word = window.VocabHelper.getRandomWord(category);

        if (!word) {
            elements.wordText.textContent = "Tidak ada kata untuk kategori ini.";
            vocabState.currentWord = null;
            return;
        }

        vocabState.currentWord = word;
        renderWord(word);
        if (window.SoundEffects) window.SoundEffects.generate();
    }

    function renderWord(word) {
        if (!word) return;

        // Set basic info
        elements.wordText.textContent = word.word;
        elements.wordPronunciation.textContent = word.pronunciation;
        elements.wordPos.textContent = word.partOfSpeech;

        // Set category
        var categories = window.VocabHelper.getCategories();
        var catObj = categories.find(function (c) { return c.id === word.category; });
        elements.wordCategoryLabel.textContent = catObj ? catObj.label : word.category;

        // Set content
        elements.wordDefinition.textContent = word.definition;
        elements.wordExample.textContent = word.example;
        elements.wordAngle.textContent = word.speakingAngle;
    }

    function copyVocabWord() {
        if (!vocabState.currentWord) return;

        var text = vocabState.currentWord.word + " — " +
            vocabState.currentWord.partOfSpeech + ". " +
            vocabState.currentWord.definition;

        navigator.clipboard.writeText(text).then(function () {
            if (window.SoundEffects) window.SoundEffects.success();
            showVocabCopyFeedback();
        }).catch(function () {
            // Fallback
            var textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showVocabCopyFeedback();
        });
    }

    function showVocabCopyFeedback() {
        var svg = elements.btnVocabCopy.querySelector("svg");
        var originalHTML = svg.innerHTML;

        svg.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
        elements.btnVocabCopy.classList.add("copied");

        setTimeout(function () {
            svg.innerHTML = originalHTML;
            elements.btnVocabCopy.classList.remove("copied");
        }, 2000);
    }

    function playVocabWord() {
        if (!vocabState.currentWord) return;

        var word = vocabState.currentWord;
        speak(word.word);
    }

    function playVocabFullTts() {
        if (!vocabState.currentWord) return;

        var text = window.VocabHelper.getTtsText(vocabState.currentWord);
        // Use bilingual TTS to switch voices per language segment
        speakWithSegments(text);
    }

    function sendVocabToTts() {
        if (!vocabState.currentWord) return;

        var word = vocabState.currentWord;
        var text = word.word + ". " + word.example;

        elements.textInput.value = text;
        elements.charCount.textContent = text.length;
        updatePlayButtonState();

        // Scroll to TTS section
        elements.textInput.scrollIntoView({ behavior: "smooth", block: "center" });
        elements.textInput.focus();
    }

    function initVocabEvents() {
        // Random word button
        elements.btnVocabRandom.addEventListener("click", generateRandomWord);

        // Category change
        elements.selectVocabCategory.addEventListener("change", function () {
            vocabState.currentCategory = this.value;
            saveSetting(STORAGE_KEYS.vocabCategory, this.value);
            generateRandomWord();
        });

        // Copy button
        elements.btnVocabCopy.addEventListener("click", copyVocabWord);

        // TTS pronunciation button
        elements.btnVocabTts.addEventListener("click", playVocabWord);

        // Send to TTS button
        elements.btnVocabToTts.addEventListener("click", sendVocabToTts);

        // Full TTS button
        elements.btnVocabFullTts.addEventListener("click", playVocabFullTts);
    }

    /* -------------------------------------------------------
       Event Bindings
       ------------------------------------------------------- */

    function bindEvents() {
        initTimerEvents();
        initInterviewEvents();
        initVocabEvents();
        initFavoritesEvents();
        initHistoryEvents();
        initSTTEvents();
        initStatsEvents();

        // Tab navigation
        document.getElementById("tab-nav").addEventListener("click", function (e) {
            var btn = e.target.closest(".tab-btn");
            if (btn) {
                var tabName = btn.getAttribute("data-tab");
                switchTab(tabName);
                // Refresh stats when opening stats tab
                if (tabName === "stats") {
                    renderStats();
                }
            }
        });

        // Theme toggle
        elements.btnTheme.addEventListener("click", toggleTheme);

        // Sound toggle
        var btnSound = document.getElementById("btn-sound");
        if (btnSound) {
            btnSound.addEventListener("click", toggleSound);
        }

        // Topic controls
        elements.btnNewTopic.addEventListener("click", generateNewTopic);
        elements.btnCopyTopic.addEventListener("click", copyTopic);

        // TTS topic reader
        elements.btnTopicTts.addEventListener("click", function () {
            var text = elements.topicText.textContent.trim();
            if (!text || text === "Klik tombol \"Topik Baru\" untuk mendapatkan topik berbicara!") {
                return;
            }
            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
            } else if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                elements.btnTopicTts.classList.remove("playing");
            } else {
                // Send to TTS
                elements.textInput.value = text;
                elements.charCount.textContent = text.length;
                switchTab("tts");
                speak(text);
                elements.btnTopicTts.classList.add("playing");
            }
        });
        elements.selectCategory.addEventListener("change", function () {
            saveSetting(STORAGE_KEYS.category, this.value);
            generateNewTopic();
        });

        // Difficulty change
        if (elements.selectDifficulty) {
            elements.selectDifficulty.addEventListener("change", function () {
                saveSetting(STORAGE_KEYS.difficulty, this.value);
                generateNewTopic();
            });
        }

        // Load topic from topic generator to text input
        elements.topicText.addEventListener("dblclick", function () {
            elements.textInput.value = this.textContent;
            updatePlayButtonState();
            elements.charCount.textContent = this.textContent.length;
        });

        // Keyboard shortcut: Ctrl/Cmd + Enter to play
        elements.textInput.addEventListener("keydown", function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                e.preventDefault();
                if (!elements.btnPlay.disabled) {
                    elements.btnPlay.click();
                }
            }
        });

        // Handle visibility change (pause when tab hidden)
        document.addEventListener("visibilitychange", function () {
            if (document.hidden && window.VoiceManager.isSpeaking()) {
                // Don't stop, just let it continue
            }
        });
    }

    /* -------------------------------------------------------
       Start Application
       ------------------------------------------------------- */

    // Wait for DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
