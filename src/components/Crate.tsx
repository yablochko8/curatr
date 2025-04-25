import { Artwork } from "../types"

export const Crate = ({ notSorted, onGuess }: { notSorted: Artwork[], onGuess: (artwork: Artwork, side: string) => void }) => {
    return (
        <div>
            <h1>Artbox</h1>
            {notSorted.map((artwork) => (
                <div>
                    <img src={artwork.imageUrl} alt={artwork.title} />
                    <button onClick={() => onGuess(artwork, "left")}>Left</button>
                    <button onClick={() => onGuess(artwork, "right")}>Right</button>
                </div>
            ))}
        </div>
    )
}