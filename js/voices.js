/* ============================================================
   VOICES — Web Speech API Voice Management
   ============================================================ */

window.VoiceManager = (function () {
    "use strict";

    /* -------------------------------------------------------
       Private State
       ------------------------------------------------------- */

    var voices = [];
    var voicesLoaded = false;
    var synth = null;
    var onVoicesReadyCallback = null;
    var lastLang = null;
    var lastVoiceName = null;

    // Pause delay in ms when switching languages/voices
    var PAUSE_DELAY = 800;

    /* -------------------------------------------------------
       Language to voice name prefix mapping
       ------------------------------------------------------- */

    var langVoiceMap = {
        "id-ID": ["Indonesian", "id_"],
        "ms-MY": ["Malay", "ms_"],
        "en-US": ["English United States", "en-US", "English US"],
        "en-GB": ["English United Kingdom", "en-GB", "English UK"]
    };

    /* -------------------------------------------------------
       Initialize
       ------------------------------------------------------- */

    function init() {
        if (!("speechSynthesis" in window)) {
            console.warn("Web Speech API tidak didukung di browser ini.");
            return;
        }

        synth = window.speechSynthesis;

        // Some browsers load voices async
        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = onVoicesChanged;
        }

        // Try loading immediately (some browsers)
        loadVoices();

        // Safari needs a small delay
        setTimeout(function () {
            if (!voicesLoaded) {
                loadVoices();
            }
        }, 100);
    }

    /* -------------------------------------------------------
       Load all available voices
       ------------------------------------------------------- */

    function loadVoices() {
        if (!synth) return;

        var availableVoices = synth.getVoices();

        if (availableVoices && availableVoices.length > 0) {
            voices = availableVoices;
            voicesLoaded = true;

            if (onVoicesReadyCallback && typeof onVoicesReadyCallback === "function") {
                onVoicesReadyCallback(voices);
            }
        }
    }

    /* -------------------------------------------------------
       Voices changed callback
       ------------------------------------------------------- */

    function onVoicesChanged() {
        loadVoices();
    }

    /* -------------------------------------------------------
       Get all loaded voices
       ------------------------------------------------------- */

    function getVoices() {
        return voices;
    }

    /* -------------------------------------------------------
       Check if voices are loaded
       ------------------------------------------------------- */

    function isLoaded() {
        return voicesLoaded;
    }

    /* -------------------------------------------------------
       Set callback for when voices are ready
       ------------------------------------------------------- */

    function onVoicesReady(callback) {
        if (voicesLoaded && voices.length > 0) {
            callback(voices);
        } else {
            onVoicesReadyCallback = callback;
        }
    }

    /* -------------------------------------------------------
       Get voices filtered by language code
       ------------------------------------------------------- */

    function getVoicesByLang(langCode) {
        if (!voices || voices.length === 0) return [];

        // Direct match first
        var filtered = voices.filter(function (voice) {
            return voice.lang === langCode;
        });

        // If no direct match, try partial match
        if (filtered.length === 0) {
            filtered = voices.filter(function (voice) {
                return voice.lang.indexOf(langCode.split("-")[0]) === 0;
            });
        }

        return filtered;
    }

    /* -------------------------------------------------------
       Get the best default voice for a language
       ------------------------------------------------------- */

    function getDefaultVoiceForLang(langCode) {
        var filtered = getVoicesByLang(langCode);
        filtered = filterOnlineVoices(filtered);
        if (filtered.length > 0) return filtered[0];
        var fallback = filterOnlineVoices(voices);
        return fallback.length > 0 ? fallback[0] : null;
    }

    /* -------------------------------------------------------
       Get human-readable voice name from lang code
       ------------------------------------------------------- */

    function getVoiceDisplayName(voice) {
        var name = voice.name || "Unknown Voice";
        var lang = voice.lang || "";
        return name + " (" + lang + ")";
    }

    /* -------------------------------------------------------
       Check if TTS is supported
       ------------------------------------------------------- */

    function isSupported() {
        return "speechSynthesis" in window;
    }

    /* -------------------------------------------------------
       Check if currently speaking
       ------------------------------------------------------- */

    function isSpeaking() {
        if (!synth) return false;
        return synth.speaking;
    }

    function isPaused() {
        if (!synth) return false;
        return synth.paused;
    }

    /* -------------------------------------------------------
       Language/Voice Switch Detection
       ------------------------------------------------------- */

    /**
     * Check if the language or voice has changed since last speak
     * @param {string} langCode - Current language code
     * @param {string} voiceName - Current voice name
     * @returns {boolean} True if switch detected
     */
    function hasSwitched(langCode, voiceName) {
        if (lastLang !== langCode) return true;
        if (lastVoiceName !== voiceName) return true;
        return false;
    }

    /**
     * Update the last used language/voice
     * @param {string} langCode - Language code just used
     * @param {string} voiceName - Voice name just used
     */
    function recordUsage(langCode, voiceName) {
        lastLang = langCode;
        lastVoiceName = voiceName;
    }

    /**
     * Get the pause delay for language switch
     * @returns {number} Delay in milliseconds
     */
    function getPauseDelay() {
        return PAUSE_DELAY;
    }

    /* -------------------------------------------------------
       Language Detection for Mixed Text
       ------------------------------------------------------- */

    /**
     * Common English words that appear in Indonesian text
     */
    var englishIndicatorWords = [
        "the", "and", "or", "but", "is", "are", "was", "were", "be", "been",
        "have", "has", "had", "do", "does", "did", "will", "would", "could",
        "should", "may", "might", "must", "can", "to", "of", "in", "for",
        "on", "with", "at", "by", "from", "as", "into", "through", "during",
        "that", "this", "these", "those", "it", "its", "they", "their",
        "we", "our", "you", "your", "he", "she", "him", "her", "his",
        "all", "each", "every", "both", "few", "more", "most", "other",
        "some", "such", "no", "nor", "not", "only", "own", "same", "so",
        "than", "too", "very", "just", "also", "now", "here", "there",
        "when", "where", "why", "how", "what", "which", "who", "whom",
        "because", "about", "after", "before", "between", "if", "then",
        "else", "while", "although", "however", "therefore", "thus",
        "well", "way", "ways", "thing", "things", "one", "two",
        "first", "second", "third", "replication", "crisis", "reproducibility",
        "credibility", "study", "claim", "cautious", "evidence", "research",
        "example", "data", "analysis", "team", "impact", "experience",
        "example", "research", "finding", "independent", "scientific", "science"
    ];

    /**
     * Detect the primary language of a text segment
     * Returns 'en' for English, 'id' for Indonesian
     * @param {string} text - Text to analyze
     * @returns {string} 'en' or 'id'
     */
    function detectLanguage(text) {
        if (!text || text.length === 0) return "id";

        var lowerText = text.toLowerCase();

        // Count English indicator words
        var englishCount = 0;
        englishIndicatorWords.forEach(function (word) {
            // Use word boundary matching
            var regex = new RegExp("\\b" + word + "\\b", "gi");
            var matches = lowerText.match(regex);
            if (matches) {
                englishCount += matches.length;
            }
        });

        // Count uppercase letters (English words in mixed text often capitalized)
        var upperCount = 0;
        for (var i = 0; i < text.length; i++) {
            var ch = text[i];
            if (ch >= "A" && ch <= "Z") upperCount++;
        }

        // Check for English-specific patterns
        var hasEnglishPattern =
            /[A-Z][a-z]+[A-Z]/.test(text) || // CamelCase words
            /\b[A-Z][a-z]+/.test(text); // Capitalized words (proper nouns)

        // Check for common Indonesian markers
        var indonesianPatterns = [
            /\b(dari|yang|dan|di|dengan|untuk|pada|dalam|ini|itu|adalah|akan|sudah|maka|telah|dapat|juga|tapi|atau|oleh|karena|ada|untuk)\b/i
        ];
        var indonesianCount = 0;
        indonesianPatterns.forEach(function (regex) {
            var matches = lowerText.match(regex);
            if (matches) indonesianCount += matches.length;
        });

        // Decision: if enough English indicators, it's English
        // Also count individual uppercase words as strong English indicators
        var englishScore = englishCount + (hasEnglishPattern ? 3 : 0) + (upperCount > 3 ? 2 : 0);
        var indonesianScore = indonesianCount;

        // If Indonesian markers are strong and no strong English signals
        if (indonesianScore >= 2 && englishScore < 3) {
            return "id";
        }

        // If English signals are strong
        if (englishScore >= 3) {
            return "en";
        }

        // Default to Indonesian (main app language)
        return "id";
    }

    /**
     * Filter voices: keep only Online, exclude Local and Multilingual
     */
    function filterOnlineVoices(voiceList) {
        return voiceList.filter(function (voice) {
            var name = voice.name.toLowerCase();
            if (name.indexOf("local") !== -1) return false;
            if (name.indexOf("multilingual") !== -1) return false;
            return true;
        });
    }

    /**
     * Get the best voice for a language code
     * Tries exact match first, then language family, then fallback
     * @param {string} langCode - e.g., 'id-ID', 'en-US', 'en'
     * @returns {Object|null} Voice object
     */
    function getBestVoiceFor(langCode) {
        if (!voices || voices.length === 0) return null;

        // Try exact match
        var exact = voices.filter(function (v) { return v.lang === langCode; });
        exact = filterOnlineVoices(exact);
        if (exact.length > 0) return exact[0];

        // Try language family (e.g., 'en' matches 'en-US', 'en-GB')
        var langPrefix = langCode.split("-")[0];
        var family = voices.filter(function (v) {
            return v.lang.indexOf(langPrefix) === 0;
        });
        family = filterOnlineVoices(family);
        if (family.length > 0) return family[0];

        // Fallback
        var filtered = filterOnlineVoices(voices);
        return filtered.length > 0 ? filtered[0] : null;
    }

    /**
     * Get the standard language code for a detected language
     * @param {string} detected - 'en' or 'id'
     * @returns {string} Standard lang code
     */
    function getLangCodeFor(detected) {
        if (detected === "en") return "en-US";
        return "id-ID";
    }

    /* -------------------------------------------------------
       Public API
       ------------------------------------------------------- */

    return {
        init: init,
        getVoices: getVoices,
        isLoaded: isLoaded,
        isSupported: isSupported,
        isSpeaking: isSpeaking,
        isPaused: isPaused,
        onVoicesReady: onVoicesReady,
        getVoicesByLang: getVoicesByLang,
        getDefaultVoiceForLang: getDefaultVoiceForLang,
        getVoiceDisplayName: getVoiceDisplayName,
        hasSwitched: hasSwitched,
        recordUsage: recordUsage,
        getPauseDelay: getPauseDelay,
        detectLanguage: detectLanguage,
        getBestVoiceFor: getBestVoiceFor,
        getLangCodeFor: getLangCodeFor,
        filterOnlineVoices: filterOnlineVoices
    };
})();
