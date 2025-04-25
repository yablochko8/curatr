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
        // TODO: Make sure this correctly updates state
        console.log("onGuess", artwork, side)
        setGameRound({
            ...gameRound,
            userGuess: {
                ...userGuess,
                [side]: artwork
            }
        })
        if (userGuess.leftSorted.length === 3 && userGuess.rightSorted.length === 3) {
            moveToNextRound()
        }
    }

    return (
        <>
            <Gallery userGuess={userGuess} />
            <Crate notSorted={userGuess.notSorted} onGuess={onGuess} />
        </>
    )
}