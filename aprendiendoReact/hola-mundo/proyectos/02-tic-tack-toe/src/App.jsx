import { useState, useEffect } from 'react'
import confetti from "canvas-confetti"
import { Square } from './components/Square'
import { TURNS } from './constants'
import {checkWinner,checkEndGame} from './logic/board'
import { WinnerModal } from './WinnerModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage'

function App() {
  // los Hooks nunca pueden estar dentro de un if o un ciclo en general

  // sin local storage
  // const [board, setBoard] = useState(
  //   Array(9).fill(null)
  //   ) 
  //console.log(board) --

  // con local storage
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }) 


  const [turn, setTurn] = useState(() =>{
    const turnsFromStorge = window.localStorage.getItem('turn')
    return turnsFromStorge ?? TURNS.X
  })
  
  //null es que no hayy ganador
  const [winner, setWinner] = useState(null)

  const resetGame=() =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard= (index) => {
    // no se actualiza la posicion si ya tiene un valor o si tiene un ganador
    if( board[index] || winner) return

    // El Boar se actualiza
    // los estados son inmutables, cada board o tablero es un estado diferente
    // porque si no hay problema de reenderizado, discrepancias, porque lo que se obtiene es un nuevo estado
    // y esto cambia el estado inicial

    // importantte que los estados del nuevo renderizado, siempre van a ser nuevos
    const newBoard =[... board]
    newBoard[index]=turn
    setBoard(newBoard)

    // cambio de turno
    const newTurn  = turn === TURNS.X? TURNS.O : TURNS.X
    setTurn(newTurn)

    // GUARDAR PARTIDA
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    }
    )
    // revisr si tenemos ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)// actualiza el estado
      //alert(`El ganador es:  ${newWinner}`)
    }// check if game is over
    else if(checkEndGame(newBoard)){
      setWinner(false)
    }

  }

  // si se le pasa un array vacio, solo se va a ajecutarla primera vez que renderice 
  useEffect(()=>{
    console.log('useEffect')
    },[winner])
  return(
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Setear</button>
      <section className="game">
        {
          board.map((square,index)=>{
            return( 
              <Square
                key={index}
                index={index}
                updateBoard= {updateBoard}
                >
                  {square}
                  </Square>
            )
          })
        }
      </section>  
      <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
            </Square>
            <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
            </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
   )
  
}

export default App
