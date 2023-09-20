import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)

  const handleBoxClick = (boxIndex) => {
    const updateBoard = board.map((value, index) => {
      if( index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  }

  return (
    <div>
      <Board board={board} onClick={handleBoxClick}/>
    </div>
  )
}

export default App
