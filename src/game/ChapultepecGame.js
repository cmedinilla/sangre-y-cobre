// src/game/ChapultepecGame.js

import { INVALID_MOVE } from 'boardgame.io/core';

export const ChapultepecGame = {
  name: 'patria-tactics-poc',

  setup: () => {
    // 1. Definimos las estadísticas de las unidades
    const initialUnits = {
      'mex_1': { id: 'mex_1', name: 'Cadete', hp: 10, attack: 3, defense: 4, movement: 2, range: 1, player: '0', position: 2 },
      'mex_2': { id: 'mex_2', name: 'Infantería MX', hp: 15, attack: 4, defense: 2, movement: 3, range: 1, player: '0', position: 3 },
      'usa_1': { id: 'usa_1', name: 'Tirador', hp: 8, attack: 5, defense: 1, movement: 2, range: 3, player: '1', position: 32 },
      'usa_2': { id: 'usa_2', name: 'Infantería US', hp: 15, attack: 4, defense: 2, movement: 3, range: 1, player: '1', position: 33 },
    };

    // 2. Creamos el tablero (Array de 36 posiciones). null = vacío
    const cells = Array(36).fill(null);

    // 3. Colocamos las unidades en sus posiciones iniciales dentro del tablero
    Object.values(initialUnits).forEach(unit => {
      cells[unit.position] = unit.id;
    });

    // 4. (Opcional pero recomendado) Mapa de elevación para el Castillo
    // Las filas 0 y 1 (casillas 0-11) son "altura alta", el resto es planicie.
    const terrain = Array(36).fill('planicie');
    for(let i = 0; i < 12; i++) terrain[i] = 'colina';

    // Retornamos el estado global (G)
    return {
      cells: cells,
      units: initialUnits,
      terrain: terrain
    };
  },

  turn: {
    // Fases del turno y límites
  },

  moves: {
    moveUnit: ({ G, playerID }, fromIndex, toIndex) => {
      const unitId = G.cells[fromIndex];
      
      // 1. Validaciones de seguridad
      if (!unitId) return INVALID_MOVE; // No hay unidad para mover
      if (G.units[unitId].player !== playerID) return INVALID_MOVE; // No es tu unidad
      if (G.cells[toIndex] !== null) return INVALID_MOVE; // La celda destino está ocupada
      
      // 2. Ejecutar el movimiento
      G.cells[fromIndex] = null;         // Vaciamos la celda original
      G.cells[toIndex] = unitId;         // Ponemos la unidad en la nueva celda
      G.units[unitId].position = toIndex; // Actualizamos el registro interno de la unidad
    },
  },
};
