import { GameRound } from "../types"

type GalleryProps = {
    gameRound: GameRound
    setGameRound: (gameRound: GameRound) => void
    moveToNextRound: () => void
}

export const Gallery = ({ gameRound, setGameRound, moveToNextRound }: GalleryProps) => {
    console.log("Gallery round data", gameRound)
    return <div>Gallery</div>
}