/* ============================================================
   SOUNDS — Web Audio API Sound Effects
   No external files needed — all sounds generated programmatically
   ============================================================ */

window.SoundEffects = (function () {
    "use strict";

    /* -------------------------------------------------------
       Private State
       ------------------------------------------------------- */

    var audioContext = null;
    var soundEnabled = true;

    /* -------------------------------------------------------
       Initialize Audio Context
       Must be called from a user interaction (click/tap)
       ------------------------------------------------------- */

    function init() {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("Web Audio API tidak didukung browser ini.");
            soundEnabled = false;
        }
    }

    /* -------------------------------------------------------
       Resume Audio Context (required after user interaction)
       ------------------------------------------------------- */

    function resume() {
        if (!audioContext) {
            init();
        }
        if (audioContext && audioContext.state === "suspended") {
            audioContext.resume();
        }
    }

    /* -------------------------------------------------------
       Check if sound is enabled
       ------------------------------------------------------- */

    function isEnabled() {
        return soundEnabled;
    }

    /* -------------------------------------------------------
       Toggle sound on/off
       ------------------------------------------------------- */

    function setEnabled(enabled) {
        soundEnabled = enabled;
    }

    /* -------------------------------------------------------
       Play a beep with given parameters
       ------------------------------------------------------- */

    function playBeep(frequency, duration, type, volume, delay) {
        if (!soundEnabled || !audioContext) return;

        resume();

        var osc = audioContext.createOscillator();
        var gain = audioContext.createGain();

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.type = type || "sine";
        osc.frequency.value = frequency;

        var startTime = audioContext.currentTime + (delay || 0);
        var endTime = startTime + duration;

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(volume || 0.2, startTime + 0.01);
        gain.gain.linearRampToValueAtTime(0, endTime);

        osc.start(startTime);
        osc.stop(endTime + 0.01);
    }

    /* -------------------------------------------------------
       Sound Effects
       ------------------------------------------------------- */

    function click() {
        playBeep(800, 0.05, "sine", 0.1);
    }

    function generate() {
        if (!soundEnabled || !audioContext) return;
        resume();
        playBeep(400, 0.08, "sine", 0.12, 0);
        playBeep(600, 0.08, "sine", 0.12, 0.08);
        playBeep(900, 0.12, "sine", 0.15, 0.16);
    }

    function success() {
        if (!soundEnabled || !audioContext) return;
        resume();
        playBeep(880, 0.15, "sine", 0.15, 0);
        playBeep(1320, 0.2, "sine", 0.12, 0.12);
    }

    function timerTick() {
        playBeep(600, 0.06, "square", 0.08);
    }

    function timerComplete() {
        if (!soundEnabled || !audioContext) return;
        resume();
        playBeep(660, 0.15, "sine", 0.2, 0);
        playBeep(880, 0.15, "sine", 0.2, 0.25);
        playBeep(1100, 0.2, "sine", 0.2, 0.5);
    }

    function error() {
        playBeep(200, 0.15, "sawtooth", 0.08);
    }

    function toggleClick() {
        playBeep(1000, 0.04, "sine", 0.08);
    }

    function tabClick() {
        playBeep(700, 0.04, "sine", 0.08);
    }

    function ttsStart() {
        playBeep(500, 0.03, "sine", 0.05);
    }

    /* -------------------------------------------------------
       Public API
       ------------------------------------------------------- */

    return {
        init: init,
        resume: resume,
        isEnabled: isEnabled,
        setEnabled: setEnabled,
        click: click,
        generate: generate,
        success: success,
        timerTick: timerTick,
        timerComplete: timerComplete,
        error: error,
        toggleClick: toggleClick,
        tabClick: tabClick,
        ttsStart: ttsStart
    };
})();
