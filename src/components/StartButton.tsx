import { GameState } from "../types"

export const StartButton = ({ setGameState }: { setGameState: (gameState: GameState) => void }) => {

    return <button onClick={() => setGameState({
        currentRound: null,
        rounds: [],
        totalPoints: 0,
        isGameOver: false
    })}>Start Game</button>
}