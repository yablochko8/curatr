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

    // Find the index of the current round
    const currentRoundIndex = gameState.rounds.findIndex(round => round.id === gameState.currentRound?.id)

    // TODO: Fix the fact that we're not saving the state of the current round into the rounds array

    // Find the next round after the current one that hasn't been played
    const nextRound = gameState.rounds.slice(currentRoundIndex + 1).find(round =>
      round.userGuess.leftSorted.length === 0 && round.userGuess.rightSorted.length === 0
    )

    if (nextRound) {
      console.log("nextRound found", nextRound)
      setGameState({
        ...gameState,
        currentRound: nextRound,
      })
    }
    else {
      console.log("no nextRound found")
      setGameState({
        ...gameState,
        isGameOver: true
      })
      return
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen">
      {gameState.currentRound && (
        <GameInPlay
          gameRound={gameState.currentRound}
          setGameRound={setGameRound}
          moveToNextRound={moveToNextRound} />
      )}

      {!gameState.currentRound && (
        <StartButton gameState={gameState} setGameState={setGameState} />
      )}
    </div>
  )
}

export default App
