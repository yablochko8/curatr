import { GallerySet } from "../types"

type GalleryProps = {
    userGuess: GallerySet
}

export const Gallery = ({ userGuess }: GalleryProps) => {
    const { leftTitle, rightTitle, leftSorted, rightSorted } = userGuess
    return (
        <>
            <div>
                <h1>{leftTitle}</h1>
                {leftSorted.map((artwork) => (
                    <img src={artwork.imageUrl} alt={artwork.title} />
                ))}
                <h1>{rightTitle}</h1>
                {rightSorted.map((artwork) => (
                    <img src={artwork.imageUrl} alt={artwork.title} />
                ))}
            </div>
        </>
    )
}