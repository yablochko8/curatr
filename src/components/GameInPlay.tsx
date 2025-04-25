import { Artwork, GameRound } from "../types"
import { Crate } from "./Crate"
import { Gallery } from "./Gallery"

type GalleryProps = {
    gameRound: GameRound
    setGameRound: (gameRound: GameRound) => void
    moveToNextRound: () => void
}

export const GameInPlay = ({ gameRound, setGameRound, moveToNextRound }: GalleryProps) => {
    console.log("Gallery round data", gameRound)
    const { userGuess } = gameRound

    const onGuess = (artwork: Artwork, side: string) => {
        // Remove artwork from notSorted
        const updatedNotSorted = userGuess.notSorted.filter(a => a.id !== artwork.id);

        // Add to appropriate sorted array
        const updatedUserGuess = {
            ...userGuess,
            notSorted: updatedNotSorted,
            [side === 'left' ? 'leftSorted' : 'rightSorted']: [...userGuess[side === 'left' ? 'leftSorted' : 'rightSorted'], artwork]
        };

        setGameRound({
            ...gameRound,
            userGuess: updatedUserGuess
        });

        if (updatedUserGuess.leftSorted.length === 3 && updatedUserGuess.rightSorted.length === 3) {
            moveToNextRound();
        }
    }

    return (
        <>
            <div className="flex flex-row h-1/2 w-full">
                <Gallery userGuess={userGuess} />
            </div>
            <div className="flex flex-row h-1/2 w-full">
                <Crate notSorted={userGuess.notSorted} onGuess={onGuess} onNext={moveToNextRound} />
            </div>
        </>
    )
}