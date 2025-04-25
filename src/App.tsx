import { useState } from 'react'
import './App.css'
import { GameRound, GameState } from './types'
import { StartButton } from './components/StartButton'
import { GameInPlay } from './components/GameInPlay'
import { startingGameState } from './startingSample'

function App() {
  const [gameState, setGameState] = useState<GameState>(startingGameState)

  const setGameRound = (gameRound: GameRound) => {
    console.log("handle any update to the state of the game, specific to that round")
    setGameState({
      currentRound: gameRound,
      rounds: gameState?.rounds || [],
      totalPoints: gameState?.totalPoints || 0,
      isGameOver: gameState?.isGameOver || false
    })
  }

  const moveToNextRound = () => {
    console.log("move to next round")
  }

  return (
    <>
      {gameState.currentRound && (
        <GameInPlay
          gameRound={gameState.currentRound}
          setGameRound={setGameRound}
          moveToNextRound={moveToNextRound} />
      )}

      {!gameState.currentRound && (
        <StartButton gameState={gameState} setGameState={setGameState} />
      )}
    </>
  )
}

export default App
