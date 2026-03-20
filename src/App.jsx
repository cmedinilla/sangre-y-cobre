// src/App.jsx
import { Client } from 'boardgame.io/react';
import { ChapultepecGame } from './game/ChapultepecGame';
import { ChapultepecBoard } from './board/Board';

const App = Client({
  game: ChapultepecGame,
  board: ChapultepecBoard,
  numPlayers: 2, // Jugador 0 (México) vs Jugador 1 (EEUU)
});

export default App;
