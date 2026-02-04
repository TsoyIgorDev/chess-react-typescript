import { useEffect, useState } from 'react'
import BoardComponent from './components/BoardComponent'
import './index.css'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'
import LostFigures from './components/LostFigures'

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
  useEffect(() => {
    restart();
  }, [])

  function restart() {
    const newBoard = new Board();
    setCurrentPlayer(whitePlayer);
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className='app'>
      <h3 className="text-3xl font-medium">Ход игрока: {currentPlayer?.color}</h3>
      <div className='grid grid-cols-3 gap-2.5'>
        <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />
        <div className='right'>
          <div>
            <LostFigures title="Черные фигуры:" figures={board.lostBlackFigures} />
            <LostFigures title="Белые фигуры:" figures={board.lostWhiteFigures} />
          </div>
          <button className='button' onClick={() => restart()}>
            Начать заново
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
