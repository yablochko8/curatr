import { Artwork } from "../types"
import { CrateQueueItem } from "./CrateQueueItem"

export const Crate = ({ notSorted, onGuess, onNext }: { notSorted: Artwork[], onGuess: (artwork: Artwork, side: string) => void, onNext: () => void }) => {
    return (
        <div className="flex flex-row w-full border-t-2 border-black p-8 justify-center">
            {/* Show the next image really big, with buttons below it */}
            {notSorted.length > 0 && (
                <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-4">
                        <button onClick={() => onGuess(notSorted[0], "left")}>Left</button>
                        <button onClick={() => onGuess(notSorted[0], "right")}>Right</button>
                    </div>
                    <img className="h-full p-4" src={notSorted[0].imageUrl} alt={notSorted[0].title} />
                </div>
            )}
            {/* Show the rest of the images in a grid, with no buttons */}
            <div className="flex flex-col p-8 gap-4">
                {notSorted.length > 1 && notSorted.map((artwork) => (
                    <CrateQueueItem artwork={artwork} />
                ))}
            </div>
            {
                notSorted.length === 0 && (
                    <button onClick={onNext}>Next Round</button>
                )
            }
        </div>
    )
}