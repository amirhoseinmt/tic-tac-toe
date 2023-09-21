import React, { useState } from 'react'
import Board from './Board'

const PLAYER_X = "X";
const PLAYER_O = "O";

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  return (
    <div>
        <h1>TicTacToe</h1>
        <Board tiles={tiles}/>
    </div>
  )
}

export default TicTacToe