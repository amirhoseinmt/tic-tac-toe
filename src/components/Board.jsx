import React from 'react'
import Box from './Box'

const Board = ({ board, onClick }) => {
  return (
    <div>   
        {board.map((value, index) => {
            return <Box value={value} onClick={() => onClick(index)}/>            
        })}
    </div>
  )
}

export default Board