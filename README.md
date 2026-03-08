# 🛡️ Sentinel — Showcase Website

A modern, single-page showcase website for the **Sentinel** hybrid AI-powered home surveillance system. Built with React, Vite, and Framer Motion.

> Sentinel fuses Wi-Fi Channel State Information (CSI) sensing with edge computer vision to deliver intelligent, privacy-preserving surveillance that sees beyond what cameras alone ever could.

---

## 🎨 Design

The site uses a dark, premium aesthetic with glassmorphism effects and smooth scroll-triggered animations.

| Token   | Hex       | Usage               |
|---------|-----------|---------------------|
| Cream   | `#FFFCF2` | Text, headings      |
| Tan     | `#CCC589` | Secondary accents   |
| Brown   | `#403D39` | Card surfaces       |
| Dark    | `#252422` | Background          |
| Orange  | `#EB5E28` | Primary CTA, highlights |

---

## 📄 Sections

- **Hero** — Vision statement with animated gradient orbs and call-to-action
- **Features** — Six frosted-glass cards covering core capabilities (Computer Vision, Wi-Fi CSI, Multi-Modal Fusion, Privacy, Adaptive Learning, Scalability)
- **How It Works** — Four-step pipeline: Sense → Process → Fuse → Alert
- **Team** — Project members and supervisors
- **Download** — Direct APK download for the Sentinel Mobile App
- **Footer** — University affiliation and branding

---

## 🛠️ Tech Stack

| Technology       | Purpose                            |
|------------------|------------------------------------|
| React 19         | Component-based UI                 |
| Vite 7           | Fast dev server & build tooling    |
| Tailwind CSS 4   | Utility-first styling              |
| Framer Motion    | Scroll animations & micro-interactions |
| Lucide React     | Icon set                           |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The dev server will start at `http://localhost:5173/`.

---

## 📦 APK Download

Place the compiled Sentinel Mobile App `.apk` file in the `public/` directory as `Sentinel.apk`. The download button on the site links to `/Sentinel.apk` automatically.

---

## 👥 Team

- **Affan Hameed**
- **Bilal Mehmood**
- **Shoaib Mehmood**

**Supervised by:** Dr. Zeshan Khan  
**Co-supervised by:** Dr. Subhan Ullah

Department of Software Engineering  
National University of Computer and Emerging Sciences, Islamabad

---

## 📁 Project Structure

```
Sentinel-Web/
├── public/
│   └── Sentinel.apk          # Mobile app APK
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Frosted glass navigation
│   │   ├── Hero.jsx           # Hero section with animated orbs
│   │   ├── Features.jsx       # Feature cards grid
│   │   ├── HowItWorks.jsx     # Pipeline steps
│   │   ├── Team.jsx           # Team member cards
│   │   ├── Download.jsx       # APK download section
│   │   └── Footer.jsx         # Footer
│   ├── App.jsx                # Root component
│   ├── index.css              # Design system & tokens
│   └── main.jsx               # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 📜 License

Final Year Project — FAST NUCES Islamabad © 2026
