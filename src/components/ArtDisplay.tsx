import { Artwork } from "../types"

export const ArtDisplay = ({ artwork }: { artwork: Artwork }) => {
    return (
        <div>
            <h3>{artwork.title}</h3>
            <img className="h-24" src={artwork.imageUrl} alt={artwork.title} />
        </div>
    )
}