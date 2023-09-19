import './App.css'
import Board from './components/Board'

function App() {
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X",]

  return (
    <>
      <Board board={board} onClick={null}/>
    </>
  )
}

export default App
