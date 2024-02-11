import {WINNER_COMBOS } from '../constants'

export const checkWinner =(boardToCheck) =>{
    // revisamos todas las posiciones ganadoras
    // para ver si x u o es ganador
    for(const combo of WINNER_COMBOS){
      const [a,b,c]=combo
      if(
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  export const checkEndGame=(newBoard)=>{
    // revisamos si hay empate 
    // si todos los campos tienen dato, este es un empate
      return newBoard.every((Square) => Square !== null)
  }
