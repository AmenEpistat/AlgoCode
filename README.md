# 📚 Educational Platform - AlgoCode

![ppp](https://github.com/user-attachments/assets/2ce17dfc-989d-463f-be6f-11ef6b2a307e)

## 🧠 Vision

This project is a single-page educational platform focused on learning algorithms through a structured, modular system and visual learning maps.

The goal of the project is to design a scalable, strongly typed, and maintainable SPA with a clear domain model, where learning progress is represented as interconnected modules and steps.

This README is maintained as a **development journal** and is continuously updated as the project evolves.

---

## ⚙️ Tech Stack

- React
- TypeScript
- Vite
- Ant Design
- SCSS

---

## 📦 Domain Model

The application is structured around the following core entities:

- **Module** — a learning module
- **Step** — a unit inside a module (theory or practice)
- **Task** — a learning task (theory, code, test)

Base entity shared across domain objects:

```ts
export interface Text {
  id: string;
  title: string;
  description: string;
}
```
## Current State

- Project initialized with Vite + React + TypeScript
- Core domain model defined (Module / Step / Task)
- Type definitions separated into dedicated files
- Basic project structure established
  
## 🗺 Roadmap
**🚧 In Progress**
1) Task rendering by type
2) Progress calculation logic
   
**🔮 Planned**
1) Code-based tasks with validation
2) User progress persistence
3) Authentication system
4) Backend API integration

## 📄 Status
The project is under active development.
Architecture and implementation details may change as the project evolves.

