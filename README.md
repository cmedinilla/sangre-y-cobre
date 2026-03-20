# Sangre y Bronce: 1847 (POC) 🦅🇲🇽

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![boardgame.io](https://img.shields.io/badge/boardgame.io-white?style=for-the-badge)](https://boardgame.io/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

## About The Project

**Sangre y Bronce** is a Proof of Concept (POC) for a turn-based tactical strategy game set during the historical **Battle of Chapultepec (1847)**. 

The strategy gaming genre is heavily saturated with WWII and European theaters. This project aims to bring the rich, dramatic, and highly tactical military history of Mexico to the forefront. Players command either the defending Mexican forces holding the high ground of the *Castillo de Chapultepec*, or the invading US Army pushing up the hill.

This demo strictly focuses on validating core tactical mechanics: grid-based movement, terrain elevation advantages, and turn-based combat, inspired by classics like *Final Fantasy Tactics* and *XCOM*.

## Architecture & Tech Stack

This project strictly separates the game state/logic from the rendering layer to ensure maximum scalability.

* **UI & Metagame:** React (optimized via React Compiler) powered by Vite.
* **Game Engine (Brain):** [boardgame.io](https://boardgame.io/) for deterministic state management, move validation, and turn phases.
* **Rendering (Phase 2):** PixiJS for WebGL canvas rendering and 2D animations.
* **Future Cloud Infrastructure:** The architecture is designed to eventually support asynchronous multiplayer and persistent state via a **Node.js** backend, deployed on **AWS**.

## Getting Started

To run this POC locally, follow these steps:

### Prerequisites
* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

   ```sh
   git clone [https://github.com/your_username/patria-tactics.git](https://github.com/your_username/patria-tactics.git)
   npm install
   npm run dev
   ```
### Roadmap & Features
[x] Initial board setup and CSS Grid rendering.

[x] Unit placement and base attributes (HP, Attack, Defense).

[ ] Implement strict movement ranges (Grid pathfinding).

[ ] Turn system toggle (End Turn logic).

[ ] Combat mathematics (Damage calculation & terrain modifiers).

[ ] Replace basic DOM rendering with PixiJS canvas.

### Directory Structure
/src
  ├── /game         # Core logic, state, and rules (boardgame.io)
  ├── /board        # Grid rendering and tile interaction
  ├── /ui           # HUD, menus, and React components
  └── App.jsx       # Client wrapper and initialization

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. If you have a suggestion that would make this better, please fork the repo and create a pull request.

- Fork the Project

- Create your Feature Branch (git checkout -b feature/AmazingMechanic)

- Commit your Changes (git commit -m 'Add some AmazingMechanic')

- Push to the Branch (git push origin feature/AmazingMechanic)

- Open a Pull Request

### License

Distributed under the MIT License. See LICENSE for more information.
