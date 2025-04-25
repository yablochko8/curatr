import { GallerySet } from "../types"
import { ArtDisplay } from "./ArtDisplay"

type GalleryProps = {
    userGuess: GallerySet
}

export const Gallery = ({ userGuess }: GalleryProps) => {
    const { leftTitle, rightTitle, leftSorted, rightSorted } = userGuess
    return (
        <>
            <div className="flex flex-row w-full">
                <div className="flex flex-col">

                    <h1>{leftTitle}</h1>
                    <div className="flex flex-row">
                        {leftSorted.map((artwork) => (
                            <ArtDisplay artwork={artwork} />
                        ))}

                    </div>
                </div>
                <div className="flex flex-col">
                    <h1>{rightTitle}</h1>
                    <div className="flex flex-row">
                        {rightSorted.map((artwork) => (
                            <ArtDisplay artwork={artwork} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}