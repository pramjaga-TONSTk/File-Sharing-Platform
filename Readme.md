# 📂 Client-Side File Transfer & Telemetry Platform

A lightweight, modern, and responsive web application built with **Vanilla JavaScript, HTML5, and Modern CSS**. It demonstrates client-side file ingestion, real-time upload telemetry simulation, authentication gatekeeping, and session persistence without external heavyweight frameworks.

Developed as a mini-project by a 2nd-year **Artificial Intelligence & Data Science (AI & DS)** engineering student to explore client-side data handling, browser APIs, and stateful UI/UX design.

---

## 🌟 Key Features

- **🔐 Gated Authentication**: Clean sign-in interface that protects the transfer workspace and preserves the user session in `localStorage`.
- **📁 HTML5 Drag & Drop File API**: Seamless file selection via native drag-and-drop or file browser with instant metadata extraction (file name, size, type).
- **📊 Real-Time In-Page Telemetry**:
  - Dynamic circular SVG progress gauge powered by mathematical `stroke-dashoffset` calculations.
  - Live byte counter displaying transferred data volume (e.g., `12.4 MB of 28.0 MB`) alongside dynamic percentage increments.
  - Linear secondary progress indicator.
- **⚡ In-Memory Blob Generation**: Generates temporary in-memory URLs (`URL.createObjectURL`) for instant local file verification and download without external redirects.
- **📝 Audit & Transfer History**: Chronological log of past transfers with file types, timestamps, and sizes, saved across browser sessions using `localStorage`.
- **🔊 Web Audio API Integration**: Native synthesizer generating completion chimes programmatically using JavaScript oscillators without requiring external audio files.
- **🎨 Minimalist UI/UX**: High-contrast modern interface featuring clean white cards, a solid dark navigation header, and a soft rose accent palette (`#e05688`).

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic layout, native Drag & Drop API, and File API |
| **CSS3** | Flexbox, Grid, CSS Variables, keyframe animations, and responsive breakpoints |
| **Vanilla JavaScript (ES6+)** | State management, progress timer simulation, DOM manipulation, and Web Audio API |
| **Feather Icons** | Lightweight vector UI icons |

---

## 📂 Project Structure

```text
├── index.html       # Application markup and view structures
├── style.css        # Theme variables, layouts, and animations
├── script.js        # Auth state, dropzone handlers, telemetry, and storage
└── README.md        # Project documentation