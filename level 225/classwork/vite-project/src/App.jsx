import React, { useState, useEffect } from 'react';
import './App.css';
import './style.css';

const App = () => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(2);
  const [grid, setGrid] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#3498db');
  const [borderColor, setBorderColor] = useState('#cbd5e0');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const predefinedColors = ['#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#34495e'];
  const borderColors = ['#cbd5e0', '#718096', '#e2e8f0', '#4a5568', '#a0aec0', '#2d3748'];

  useEffect(() => {
    generateGrid();
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [rows, cols, isDarkMode]);

  useEffect(() => {
    if (selectedCell && selectedColor) {
      const newGrid = [...grid];
      newGrid[selectedCell.row][selectedCell.col].color = selectedColor;
      setGrid(newGrid);
    }
  }, [selectedColor]);

  const generateGrid = () => {
    const newGrid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push({ color: '', id: `${i}-${j}` });
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
    setSelectedCell(null);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedCell({ row: rowIndex, col: colIndex });
    
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex].color = selectedColor;
    setGrid(newGrid);
  };

  const handleClearCell = () => {
    if (selectedCell) {
      const newGrid = [...grid];
      newGrid[selectedCell.row][selectedCell.col].color = '';
      setGrid(newGrid);
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="controls">
        <div className="input-group">
          <label>Row:</label>
          <input 
            type="number" 
            value={rows} 
            onChange={(e) => setRows(parseInt(e.target.value) || 1)}
            min="1"
            max="10"
          />
        </div>
        
        <div className="input-group">
          <label>Column:</label>
          <input 
            type="number" 
            value={cols} 
            onChange={(e) => setCols(parseInt(e.target.value) || 1)}
            min="1"
            max="10"
          />
        </div>

        <button 
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? 'Light' : ' Dark'}
        </button>
      </div>

      <div className="color-picker">
        <label className='lbl'>Choose color:</label>
        <input 
          className='colorpicker'
          type="color" 
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
        
        <div className="predefined-colors">
          {predefinedColors.map((color, index) => (
            <button
              key={index}
              className="color-btn"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div className="border-picker">
        <label className='lbl'>Border color:</label>
        <input 
          className='colorpicker'
          type="color" 
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />
        
        <div className="border-colors">
          {borderColors.map((color, index) => (
            <button
              key={index}
              className="border-color-btn"
              style={{ backgroundColor: color }}
              onClick={() => setBorderColor(color)}
            />
          ))}
        </div>
      </div>

      <div className="action-buttons">
        <button 
          className="eraser-btn" 
          onClick={handleClearCell}
          disabled={!selectedCell}
        >
          Delete
        </button>
      </div>

      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={cell.id}
                className={`cell ${selectedCell?.row === rowIndex && selectedCell?.col === colIndex ? 'selected' : ''}`}
                style={{ 
                  backgroundColor: cell.color || 'transparent',
                  borderColor: borderColor
                }}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;