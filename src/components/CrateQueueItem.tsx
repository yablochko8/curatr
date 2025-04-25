import { Artwork } from "../types"

export const CrateQueueItem = ({ artwork }: { artwork: Artwork }) => {
    return (
        <div className="w-16 h-16 overflow-hidden">
            <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover"
            />
        </div>
    )
}