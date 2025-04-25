import { GameState } from "../types"

export const StartButton = ({ gameState, setGameState }: { gameState: GameState, setGameState: (gameState: GameState) => void }) => {

    const handleClick = () => {
        console.log("handleClick", gameState)

        // Check if any round has been played 
        const firstRound = gameState.rounds[0]
        const hasPlayed = gameState.rounds.some((round) =>
            round.userGuess &&
            (round.userGuess.leftSorted.length > 0 || round.userGuess.rightSorted.length > 0)
        )

        // If we've played any rounds, find the next unplayed round, otherwise use the first round
        const nextRound = hasPlayed ?
            gameState.rounds.find((round) => !round.userGuess || Object.keys(round.userGuess).length === 0) :
            firstRound

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