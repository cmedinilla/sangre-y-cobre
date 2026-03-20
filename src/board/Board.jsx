// En src/board/Board.jsx
import React, { useState } from 'react';

export const ChapultepecBoard = ({ G, ctx, moves }) => {
  const { cells, units, terrain } = G;
  
  // Memoria local de React para saber qué celda seleccionamos primero
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (index) => {
    const unitId = cells[index];

    // Caso A: No tenemos nada seleccionado
    if (selectedCell === null) {
      // Solo seleccionamos si hay una unidad y nos pertenece en este turno
      if (unitId && units[unitId].player === ctx.currentPlayer) {
        setSelectedCell(index);
      }
    } 
    // Caso B: Ya tenemos una unidad seleccionada
    else {
      // Si hacemos clic en la misma unidad, la deseleccionamos
      if (selectedCell === index) {
        setSelectedCell(null);
        return;
      }
      
      // Si hacemos clic en una celda vacía, intentamos movernos
      if (!unitId) {
        moves.moveUnit(selectedCell, index);
        setSelectedCell(null); // Limpiamos la selección después de mover
      }
    }
  };

  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 60px)',
    gridTemplateRows: 'repeat(6, 60px)',
    gap: '2px',
    margin: '20px auto',
    width: 'fit-content',
    backgroundColor: '#222',
    border: '4px solid #333'
  };

  const getTerrainColor = (terrainType) => terrainType === 'colina' ? '#8b5a2b' : '#4f8f00';

  const renderUnit = (unitId, index) => {
    if (!unitId) return null;
    const unit = units[unitId];
    const isMexico = unit.player === '0';
    const isSelected = selectedCell === index; // Verificamos si es la unidad activa
    
    return (
      <div 
        title={`${unit.name} - HP: ${unit.hp}`}
        style={{ 
          fontSize: '28px', 
          textShadow: '0px 0px 4px rgba(0,0,0,0.8)',
          border: isSelected ? '2px solid yellow' : 'none', // Feedback visual
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isSelected ? 'rgba(255, 255, 0, 0.3)' : 'transparent'
        }}
      >
        {isMexico ? '🇲🇽' : '🇺🇸'}
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Defensa de Chapultepec</h1>
      <h2>Turno: {ctx.currentPlayer === '0' ? 'México (Defensores)' : 'EEUU (Atacantes)'}</h2>
      
      <div style={boardStyle}>
        {cells.map((unitId, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            style={{
              backgroundColor: getTerrainColor(terrain[index]),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
            }}
          >
            {renderUnit(unitId, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
