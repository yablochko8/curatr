import { GameState } from "../types"

export const StartButton = ({ gameState, setGameState }: { gameState: GameState, setGameState: (gameState: GameState) => void }) => {

    const handleClick = () => {
        console.log("handleClick", gameState)

        // Identify which is the next round that has not been played
        const hasPlayed = gameState.rounds.some((round) => round.userGuess)
        const firstRound = gameState.rounds[0]
        const nextRound = hasPlayed ? gameState.rounds.find((round) => !round.userGuess) : firstRound

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

    return <button onClick={handleClick}>Start Game</button>
}