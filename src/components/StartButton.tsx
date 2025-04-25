import { GameState } from "../types"

export const StartButton = ({ gameState, setGameState }: { gameState: GameState, setGameState: (gameState: GameState) => void }) => {

    return <button onClick={() => setGameState({
        ...gameState,
        currentRound: null,
        rounds: [],
        totalPoints: 0,
        isGameOver: false
    })}>Start Game</button>
}