export interface Artwork {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  style: string;
  year: number | null;
  country: string | null;
  city: string | null;
  genreTags: string[];
  themeTags: string[];
}

/** This can represent a correct answer, a guess, or a game state. */
export type GallerySet = {
  leftTitle: string;
  rightTitle: string;
  notSorted: Artwork[];
  leftSorted: Artwork[];
  rightSorted: Artwork[];
};

/**
 * Represents a round in the game.
 */
export type GameRound = {
  id: string;
  answer: GallerySet;
  userGuess: GallerySet;
  points?: number;
};

/**
 * Represents the overall game state.
 */
export type GameState = {
  currentRound: GameRound | null;
  rounds: GameRound[];
  totalPoints: number;
  isGameOver: boolean;
};
