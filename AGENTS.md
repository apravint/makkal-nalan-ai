# AGENTS.md - Developer & AI Agent Guide for makkal-nalan-ai 🤖

## 🎯 Repository Overview
**makkal-nalan-ai**: Makkal Nalan AI is a bilingual (Tamil & English) citizen welfare navigator and eligibility matching application for Android and Web. It empowers everyday citizens, students, farmers, women, and senior citizens to discover government welfare schemes, understand eligibility criteria in simple language, check required documents, and apply with confidence. - 🌐 Bilingual (தமிழ் & English): Complete interface and database accessible in both Tamil and English with 1-tap switching.

---

## 🏗️ Repository Architecture
Key directories and entrypoints: `.github/, LICENSE, README.md, android/, web/`.

### Tech Stack & Runtime
- **Architecture:** Hybrid Web Application (`web/`) + Native Android Wrapper (`android/`)
- **Frontend:** HTML5, Modern Vanilla JS / CSS3, responsive mobile UI
- **Mobile Engine:** Android SDK / Gradle (`android/`)

## ⚙️ Executable Verification Commands

### 1. Web Local Preview & Syntax Verification
```bash
# Run local preview server from repository root
python3 -m http.server 8000 --directory web
```

### 2. Android Build Check (when Android SDK is available)
```bash
cd android && ./gradlew assembleDebug
```

---

## 🛡️ Coding & Safety Guidelines for Autonomous Agents

1. **Documentation Integrity:** Preserve all existing docstrings, header comments, and licensing banners. Never delete context unless specifically instructed.
2. **Zero Hardcoded Secrets:** Never embed API keys, OAuth tokens, personal access tokens, or sensitive credentials in committed files. Read credentials exclusively from environment variables or secure credential paths.
3. **Git Hygiene:**
   - Do not force-push (`git push --force`) or execute destructive resets.
   - Never modify root git configurations or harness infrastructure outside task scope.
   - Keep git diffs atomic, focused, and verified before committing.
4. **Agent Workflow Protocol:**
   - **Plan:** Inspect codebase architecture and dependencies before editing.
   - **Act:** Make minimal, clean, high-precision changes.
   - **Verify:** Run the appropriate verification commands listed above.
   - **Reflect:** Confirm zero regressions and review `git diff`.

---
*Maintained by Ayyappa Pravin • Built for Antigravity, Claude, Cursor & Autonomous AI Agents.*
