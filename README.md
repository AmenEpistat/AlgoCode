# 📚 Educational Platform - AlgoCode

![ppp](https://github.com/user-attachments/assets/2ce17dfc-989d-463f-be6f-11ef6b2a307e)

## 🧠 Vision

This project is a single-page educational platform focused on learning algorithms through a structured, modular system and visual learning maps.

The goal of the project is to design a scalable, strongly typed, and maintainable SPA with a clear domain model, where learning progress is represented as interconnected modules and steps.

This README is maintained as a **development journal** and is continuously updated as the project evolves.

---

## ⚙️ Tech Stack
- **Core:** React 19 + TypeScript + Vite
- **State:** MobX & MobX React Lite (Domain Stores)
- **UI:** Ant Design, SCSS Modules, Framer Motion
- **Tooling:** Husky, lint-staged, ESLint (Flat Config), Stylelint

---

## 📦 Architecture & State
The application uses a **Root Store pattern** with MobX to manage global state:
- **UserStore:** Tracks progress, XP, and daily activities.
- **Activity System:** A custom tracking engine that stores events and formats dates (e.g., "2 часа назад") using a custom Russian pluralization helper.

---

## 🛠 Quality Assurance (DX)
To maintain code quality in this monorepo, we've implemented:
- **Pre-commit Hooks:** Powered by Husky.
- **Lint Staged:** Automatically runs ESLint and Stylelint on changed files.
- **Strict Typing:** Full TypeScript coverage for domain entities (Modules, Steps, Tasks).

---

## 🗺 Roadmap
**✅ Completed**
- [x] Core domain model (Module / Step / Task)
- [x] MobX Store integration
- [x] Git Hooks (Husky) setup for monorepo
- [x] Task rendering by type (Theory, Quiz, Code)

**🚧 In Progress**
1. XP & Progress calculation logic
2. User Profile

**🔮 Planned**
1. Code-based tasks with validation
2. User progress persistence (Backend)
3. Authentication system

---

## 📄 Status
The project is under active development. Current focus: **Interactive Task System**.