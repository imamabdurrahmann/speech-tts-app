# Speech TTS App — Project Specification

## 1. Project Overview

**Project Name:** Speech TTS App
**Type:** Single Page Web Application (SPA)
**Core Functionality:** Text-to-Speech practice app with random topic generator for public speaking practice
**Target Users:** Students, job seekers, public speakers who want to practice speaking

## 2. Directory Structure

```
D:/speech-tts-app/
├── SPEC.md           # This file
├── index.html        # Main HTML structure
├── css/
│   ├── style.css     # Main styles
│   └── theme.css     # Dark/light theme
├── js/
│   ├── app.js        # Main application logic
│   ├── voices.js     # TTS voice management
│   └── sounds.js     # Sound effects via Web Audio API
└── data/
    ├── topics.js     # Speaking topic data (80 topics, 4 categories)
    ├── interview.js  # Interview questions & frameworks
    └── vocab.js      # Vocabulary words & categories (54 words)
```

## 3. Features

### 3.1 Tab Navigation
- Single-page app with 7 tab-based navigation sections: Topik, Timer, Interview, Vocab, TTS, STT, Favorit, Stats
- Only one section visible at a time — cleaner, focused interface
- Active tab persists in localStorage
- Sound effect on tab switch

### 3.2 Topic Generator
- Random topic generation with 80 topics across 4 categories: Opini, Pengalaman, Debat, Seru
- Each topic has a difficulty level: Mudah, Sedang, Sulit
- Category filter dropdown
- Difficulty filter dropdown (Semua Level, Mudah, Sedang, Sulit)
- Copy topic to clipboard
- Bookmark topic to favorites
- Generate new random topic
- **Slot Machine Animation**: When "Topik Baru" is clicked, rapidly cycles through random topics (10 spins) with a fading bounce effect that gradually slows down, then reveals the final topic with a bounce-in animation. Button is disabled during the animation (~2.5 seconds). Initial page load shows topic without animation.
- Difficulty badge displayed under topic text (color-coded: hijau=kuning=merah)

### 3.3 Daily Challenge
- Deterministic daily topic based on date (same topic all day)
- Difficulty varies by day of week
- "Selesai" button marks challenge as complete
- Celebration animation (confetti effect + bounce) on completion
- Streak counter tracking consecutive days completed
- Persisted in localStorage with date-specific keys

### 3.4 History / Riwayat
- Tracks last 50 generated topics
- Toggleable history panel within Topic tab
- Each item shows relative time ("2 jam lalu", "kemarin")
- Click item to send to TTS tab
- Copy button per item
- Automatically updated after each topic generation

### 3.5 Favorites / Tersimpan
- Bookmark icon on topic display to save/unsave topics
- Dedicated Favorites tab with all saved topics
- Per-topic actions: Salin, Gunakan (send to TTS), Hapus
- Export actions: Salin Semua, Download .txt, Share (Web Share API)
- Clear All button with confirmation
- Persisted in localStorage

### 3.6 Text-to-Speech (Core Feature)
- Convert text input to speech using Web Speech API
- Support multiple languages (Indonesian, English US, English UK, Malay)
- Adjustable speed (rate: 0.5 - 2.0)
- Adjustable pitch (pitch: 0.5 - 2.0)
- Play, pause, stop controls
- Voice selection from available browser voices
- Auto-detect available voices
- Text character counter (max 5000)
- **Language switch pause**: Automatically detects when switching to a different language/voice and inserts a brief silence pause (800ms) before speaking
- **Bilingual TTS (mixed-language)**: Automatically detects language segments within text (Indonesian vs English) and speaks each segment with the appropriate voice. Uses inter-segment pause (200ms) for natural transitions between languages.

### 3.7 Speech-to-Text (STT)
- Dedicated STT tab with microphone button
- Real-time speech recognition using Web Speech API
- Pulsing animation while recording
- Language selection dropdown for recognition language
- Editable output text area
- Actions: Hapus, Kirim ke TTS, Salin
- Recognition language persisted in localStorage

### 3.8 Timer / Stopwatch
- Large timer display (MM:SS format)
- Visual countdown ring animation (SVG circle with stroke-dashoffset)
- Duration presets: 1 menit, 2 menit, 3 menit, 5 menit, 10 menit
- **Custom duration input**: Number input (10-3600 seconds) with Set button, Enter key support, validation with shake animation
- Start / Pause / Reset controls
- Color transitions: normal (primary) → warning (yellow at 30%) → danger (red at 10%)
- Audio alert when time is up (SoundEffects.timerComplete)
- TTS voice alert ("Waktu habis!")
- Persist last used timer duration
- **Stats tracking**: Timer sessions count and total practice time tracked

### 3.9 Interview Prep
- 25 behavioral and consulting questions
- Behavioral questions with STAR method (Situation, Task, Action, Result)
- Consulting questions with PPF and MECE frameworks
- 4 Framework reference cards: STAR, PREP, PPF, MECE
- Framework tabs to switch between methods
- Expandable/collapsible STAR answer examples
- Question categories: Leadership, Teamwork, Problem Solving, Communication, Adaptability, Achievement, Conflict, Ethics
- Category filter dropdown
- Random question generator
- Copy question to clipboard
- Add question text to TTS input area
- TTS can read questions aloud

### 3.10 Learn Vocab
- 54 vocabulary words across 8 categories: Teknologi, Bisnis, Sains, Kesehatan, Sosial, Lingkungan, Emosi
- Word card displays: word, pronunciation, part of speech, definition, example sentence, speaking angle
- Speaking angle text is 100% bahasa Indonesia
- Category filter dropdown
- Random word generator
- Copy word to clipboard
- TTS pronunciation (reads word aloud)
- "Dengarkan Semua" reads word + definition + example with bilingual TTS
- Add word to TTS input area for practice

### 3.11 Sound Effects
- Web Audio API-based sound effects (no external files needed)
- Generated programmatically using oscillators
- Sound on button interactions:
  - Topic generate: ascending 3-tone whoosh
  - Interview/Vocab random: ascending tone
  - Timer start: soft tick
  - Timer complete: 3-tone alarm
  - Copy success: soft chime
  - TTS start: subtle click
  - Error: soft low buzz
  - Tab switch: soft click
  - Bookmark: success/error tone
  - Daily challenge complete: celebration chime
- Sound toggle button in header (on/off)
- Sound settings saved to localStorage

### 3.12 Stats / Statistik
- Dedicated Stats tab
- Tracked metrics:
  - Total topics generated
  - Total favorites saved
  - Timer sessions completed
  - Total practice time (formatted: detik/menit/jam)
  - Current daily streak (calculated from daily challenge history)
  - Most used category
- Visual bar chart showing topic distribution per category
- Reset button with confirmation
- Auto-refreshes when opening Stats tab
- Persisted in localStorage

### 3.13 Settings Persistence
- All preferences saved to localStorage:
  - Theme (dark/light)
  - Active tab
  - Language, voice, speed, pitch
  - Category filter
  - Difficulty filter
  - Timer duration
  - Interview/Vocab category
  - Sound on/off
  - STT recognition language
  - Favorites list
  - Daily challenge completion
  - Stats data

### 3.14 TTS Reader for Topics
- "Dengarkan" button on the Topic display (speaker icon)
- Click to read the current topic aloud via TTS
- Automatically switches to TTS tab when clicked
- Pulsing animation while speaking
- Stop/resume on second click
- Also available when browsing history items

### 3.15 Word-by-Word TTS Highlighting
- Karaoke-style word highlighting in the TTS text input area
- Words are highlighted sequentially as TTS speaks
- Uses estimated timing based on speech rate (400ms/word at 1.0x)
- Highlighted words appear with primary color background
- Overlay positioned absolutely over the textarea
- Automatically cleared when speech ends, pauses, or stops

### 3.16 Practice Mode
- Located at the top of the Timer tab
- One-click "Mode Latihan" combines: random topic + timer + TTS
- Duration presets: 1, 2, 3, 5 minutes
- Automatically generates random topic and reads it aloud
- Starts countdown timer simultaneously
- Topic is loaded into the practice display
- "Stop" button to end practice early
- Auto-stops when timer completes
- Tracks stats (topic generated, timer session)
- Gradient card design with purple-indigo theme

### 3.17 TTS Speed Presets
- Three preset buttons below the speed slider: Lambat (0.7x), Normal (1.0x), Cepat (1.5x)
- Clicking a preset updates the slider value and applies the speed
- Slider changes also update the active preset highlight
- Active preset shown with primary color fill
- Persisted to localStorage

### 3.18 Keyboard Shortcuts
- **Space**: Play/pause TTS (when on TTS tab, works even if input not focused)
- **R**: Generate new random topic (from any tab)
- **T**: Start/pause timer (from any tab)
- **Ctrl+Enter**: Play TTS (from within textarea)
- Ignores shortcuts when user is typing in input/textarea/select fields

### 3.19 Progress Milestones
- Achievement badges displayed in the Stats tab
- Milestones unlock when thresholds are reached:
  - Topik Pertama (10 topics generated)
  - Super Latihan (50 topics generated)
  - Master (100 topics generated)
  - Streak 3 Hari (3-day daily challenge streak)
  - Streak 7 Hari (7-day streak)
  - Streak 30 Hari (30-day streak)
- Unlocked milestones: gradient background, full opacity, primary-colored icon
- Locked milestones: faded, grayscale appearance
- Auto-updates when stats change (topic generated, daily challenge completed)
- CSS Grid layout with 6 badges

### 3.20 Export Practice Sessions
- "Export" button in the Stats tab header
- Downloads a .txt file with:
  - Current date and time
  - All statistics (topics, favorites, timer sessions, practice time, streak)
  - Category distribution counts
  - Last 50 history items with timestamps
  - All favorites list
- Filename: `speech-tts-latihan-YYYY-MM-DD.txt`
- Success sound effect on download

## 4. Technical Stack

- **HTML5** — Semantic markup
- **CSS3** — Modern styling with CSS variables
- **JavaScript (ES5)** — Vanilla JS (var keyword), no frameworks
- **Web Speech API** — Browser-native TTS and STT
- **Web Audio API** — Programmatic sound generation
- **localStorage** — Persistence

## 5. Browser Compatibility

- Chrome 33+
- Firefox 49+
- Safari 7+ (limited STT support)
- Edge 14+
- Opera 21+
- **Note:** Speech-to-Text works best in Chrome/Edge

## 6. Design Language

- **Theme:** Modern, clean, minimalist with dark/light mode
- **Colors:**
  - Primary: #6366f1 (Indigo)
  - Secondary: #8b5cf6 (Purple)
  - Success: #10b981 (Emerald)
  - Warning: #f59e0b (Amber)
  - Error: #ef4444 (Red)
  - Background Light: #f8fafc
  - Background Dark: #0f172a
  - Text Light: #1e293b
  - Text Dark: #f1f5f9
- **Font:** System font stack (no external dependencies)
- **Icons:** Inline SVG (no icon library needed)
- **Animations:** CSS transitions + keyframe animations

## 7. Performance Goals

- First paint: < 1 second
- No external dependencies (zero network requests)
- Minimal JavaScript footprint
- Optimized CSS (no unused styles)
