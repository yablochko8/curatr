import { GallerySet } from "../types"
import { ArtDisplay } from "./ArtDisplay"

type GalleryProps = {
    userGuess: GallerySet
}

export const Gallery = ({ userGuess }: GalleryProps) => {
    const { leftTitle, rightTitle, leftSorted, rightSorted } = userGuess
    return (
        <>
            <div className="flex flex-row w-full justify-between p-4">
                <div className="flex flex-col w-1/2 items-center p-2">
                    <h1 className="text-xl font-bold mb-4">{leftTitle}</h1>
                    <div className="flex flex-row gap-4 flex-wrap justify-center">
                        {leftSorted.map((artwork) => (
                            <ArtDisplay artwork={artwork} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-1/2 items-center p-2">
                    <h1 className="text-xl font-bold mb-4">{rightTitle}</h1>
                    <div className="flex flex-row gap-4 flex-wrap justify-center">
                        {rightSorted.map((artwork) => (
                            <ArtDisplay artwork={artwork} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}