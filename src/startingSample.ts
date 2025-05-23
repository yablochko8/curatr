import { GameState } from "./types";

const exampleImagePaths = [
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Example_image_not_to_be_used_in_article_namespace.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Grandes_Heures_Anne_de_Bretagne_Saint_Marc.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ea/Ray_and_Maria_Stata_Center_%28MIT%29.JPG",
];

const getExampleImage = () => {
  return exampleImagePaths[
    Math.floor(Math.random() * (exampleImagePaths.length - 1))
  ];
};

export const startingGameState: GameState = {
  currentRound: null,
  rounds: [
    {
      id: "round1",
      answer: {
        leftTitle: "Impressionism",
        rightTitle: "Cubism",
        notSorted: [],
        leftSorted: [
          {
            id: "artwork1",
            title: "Water Lilies",
            artist: "Claude Monet",
            imageUrl: getExampleImage(),
            style: "Impressionism",
            year: 1919,
            country: "France",
            city: "Giverny",
            genreTags: ["landscape", "nature"],
            themeTags: ["water", "garden"],
          },
          {
            id: "artwork2",
            title: "Impression, Sunrise",
            artist: "Claude Monet",
            imageUrl: getExampleImage(),
            style: "Impressionism",
            year: 1872,
            country: "France",
            city: "Paris",
            genreTags: ["landscape", "seascape"],
            themeTags: ["sunrise", "harbor"],
          },
          {
            id: "artwork3",
            title: "Dance at Le Moulin de la Galette",
            artist: "Pierre-Auguste Renoir",
            imageUrl: getExampleImage(),
            style: "Impressionism",
            year: 1876,
            country: "France",
            city: "Paris",
            genreTags: ["genre painting", "social scene"],
            themeTags: ["dance", "leisure"],
          },
        ],
        rightSorted: [
          {
            id: "artwork4",
            title: "Les Demoiselles d'Avignon",
            artist: "Pablo Picasso",
            imageUrl: getExampleImage(),
            style: "Cubism",
            year: 1907,
            country: "Spain",
            city: "Barcelona",
            genreTags: ["figure", "portrait"],
            themeTags: ["women", "transformation"],
          },
          {
            id: "artwork5",
            title: "Guitar and Violin",
            artist: "Juan Gris",
            imageUrl: getExampleImage(),
            style: "Cubism",
            year: 1913,
            country: "Spain",
            city: null,
            genreTags: ["still life"],
            themeTags: ["music", "instruments"],
          },
          {
            id: "artwork6",
            title: "Houses at l'Estaque",
            artist: "Georges Braque",
            imageUrl: getExampleImage(),
            style: "Cubism",
            year: 1908,
            country: "France",
            city: "L'Estaque",
            genreTags: ["landscape", "architecture"],
            themeTags: ["buildings", "perspective"],
          },
        ],
      },
      userGuess: {
        leftTitle: "Impressionism",
        rightTitle: "Cubism",
        notSorted: [
          {
            id: "artwork1",
            title: "Water Lilies",
            artist: "Claude Monet",
            imageUrl: getExampleImage(),
            style: "Impressionism",
            year: 1919,
            country: "France",
            city: "Giverny",
            genreTags: ["landscape", "nature"],
            themeTags: ["water", "garden"],
          },
          {
            id: "artwork2",
            title: "Impression, Sunrise",
            artist: "Claude Monet",
            imageUrl: getExampleImage(),
            style: "Impressionism",
            year: 1872,
            country: "France",
            city: "Paris",
            genreTags: ["landscape", "seascape"],
            themeTags: ["sunrise", "harbor"],
          },
          {
            id: "artwork3",
            title: "Dance at Le Moulin de la Galette",
            artist: "Pierre-Auguste Renoir",
            imageUrl: getExampleImage(),
            style: "Impressionism",
            year: 1876,
            country: "France",
            city: "Paris",
            genreTags: ["genre painting", "social scene"],
            themeTags: ["dance", "leisure"],
          },
          {
            id: "artwork4",
            title: "Les Demoiselles d'Avignon",
            artist: "Pablo Picasso",
            imageUrl: getExampleImage(),
            style: "Cubism",
            year: 1907,
            country: "Spain",
            city: "Barcelona",
            genreTags: ["figure", "portrait"],
            themeTags: ["women", "transformation"],
          },
          {
            id: "artwork5",
            title: "Guitar and Violin",
            artist: "Juan Gris",
            imageUrl: getExampleImage(),
            style: "Cubism",
            year: 1913,
            country: "Spain",
            city: null,
            genreTags: ["still life"],
            themeTags: ["music", "instruments"],
          },
          {
            id: "artwork6",
            title: "Houses at l'Estaque",
            artist: "Georges Braque",
            imageUrl: getExampleImage(),
            style: "Cubism",
            year: 1908,
            country: "France",
            city: "L'Estaque",
            genreTags: ["landscape", "architecture"],
            themeTags: ["buildings", "perspective"],
          },
        ],
        leftSorted: [],
        rightSorted: [],
      },
    },
    {
      id: "round2",
      answer: {
        leftTitle: "Surrealism",
        rightTitle: "Pop Art",
        notSorted: [],
        leftSorted: [
          {
            id: "artwork7",
            title: "The Persistence of Memory",
            artist: "Salvador Dalí",
            imageUrl: getExampleImage(),
            style: "Surrealism",
            year: 1931,
            country: "Spain",
            city: null,
            genreTags: ["landscape", "symbolic"],
            themeTags: ["time", "dreams"],
          },
          {
            id: "artwork8",
            title: "The Treachery of Images",
            artist: "René Magritte",
            imageUrl: getExampleImage(),
            style: "Surrealism",
            year: 1929,
            country: "Belgium",
            city: "Brussels",
            genreTags: ["conceptual", "text"],
            themeTags: ["perception", "reality"],
          },
          {
            id: "artwork9",
            title: "The Elephant Celebes",
            artist: "Max Ernst",
            imageUrl: getExampleImage(),
            style: "Surrealism",
            year: 1921,
            country: "Germany",
            city: null,
            genreTags: ["fantasy", "symbolic"],
            themeTags: ["machine", "transformation"],
          },
        ],
        rightSorted: [
          {
            id: "artwork10",
            title: "Campbell's Soup Cans",
            artist: "Andy Warhol",
            imageUrl: getExampleImage(),
            style: "Pop Art",
            year: 1962,
            country: "USA",
            city: "New York",
            genreTags: ["commercial", "repetition"],
            themeTags: ["consumerism", "everyday objects"],
          },
          {
            id: "artwork11",
            title: "Whaam!",
            artist: "Roy Lichtenstein",
            imageUrl: getExampleImage(),
            style: "Pop Art",
            year: 1963,
            country: "USA",
            city: "New York",
            genreTags: ["comic", "action"],
            themeTags: ["war", "explosion"],
          },
          {
            id: "artwork12",
            title:
              "Just what is it that makes today's homes so different, so appealing?",
            artist: "Richard Hamilton",
            imageUrl: getExampleImage(),
            style: "Pop Art",
            year: 1956,
            country: "UK",
            city: "London",
            genreTags: ["collage", "interior"],
            themeTags: ["consumerism", "modern life"],
          },
        ],
      },
      userGuess: {
        leftTitle: "Surrealism",
        rightTitle: "Pop Art",
        notSorted: [
          {
            id: "artwork7",
            title: "The Persistence of Memory",
            artist: "Salvador Dalí",
            imageUrl: getExampleImage(),
            style: "Surrealism",
            year: 1931,
            country: "Spain",
            city: null,
            genreTags: ["landscape", "symbolic"],
            themeTags: ["time", "dreams"],
          },
          {
            id: "artwork8",
            title: "The Treachery of Images",
            artist: "René Magritte",
            imageUrl: getExampleImage(),
            style: "Surrealism",
            year: 1929,
            country: "Belgium",
            city: "Brussels",
            genreTags: ["conceptual", "text"],
            themeTags: ["perception", "reality"],
          },
          {
            id: "artwork9",
            title: "The Elephant Celebes",
            artist: "Max Ernst",
            imageUrl: getExampleImage(),
            style: "Surrealism",
            year: 1921,
            country: "Germany",
            city: null,
            genreTags: ["fantasy", "symbolic"],
            themeTags: ["machine", "transformation"],
          },
          {
            id: "artwork10",
            title: "Campbell's Soup Cans",
            artist: "Andy Warhol",
            imageUrl: getExampleImage(),
            style: "Pop Art",
            year: 1962,
            country: "USA",
            city: "New York",
            genreTags: ["commercial", "repetition"],
            themeTags: ["consumerism", "everyday objects"],
          },
          {
            id: "artwork11",
            title: "Whaam!",
            artist: "Roy Lichtenstein",
            imageUrl: getExampleImage(),
            style: "Pop Art",
            year: 1963,
            country: "USA",
            city: "New York",
            genreTags: ["comic", "action"],
            themeTags: ["war", "explosion"],
          },
          {
            id: "artwork12",
            title:
              "Just what is it that makes today's homes so different, so appealing?",
            artist: "Richard Hamilton",
            imageUrl: getExampleImage(),
            style: "Pop Art",
            year: 1956,
            country: "UK",
            city: "London",
            genreTags: ["collage", "interior"],
            themeTags: ["consumerism", "modern life"],
          },
        ],
        leftSorted: [],
        rightSorted: [],
      },
    },
    {
      id: "round3",
      answer: {
        leftTitle: "Abstract Expressionism",
        rightTitle: "Renaissance",
        notSorted: [],
        leftSorted: [
          {
            id: "artwork13",
            title: "No. 5, 1948",
            artist: "Jackson Pollock",
            imageUrl: getExampleImage(),
            style: "Abstract Expressionism",
            year: 1948,
            country: "USA",
            city: "New York",
            genreTags: ["abstract", "action painting"],
            themeTags: ["energy", "spontaneity"],
          },
          {
            id: "artwork14",
            title: "Woman I",
            artist: "Willem de Kooning",
            imageUrl: getExampleImage(),
            style: "Abstract Expressionism",
            year: 1952,
            country: "USA",
            city: "New York",
            genreTags: ["figure", "abstract"],
            themeTags: ["femininity", "violence"],
          },
          {
            id: "artwork15",
            title: "Elegy to the Spanish Republic No. 110",
            artist: "Robert Motherwell",
            imageUrl: getExampleImage(),
            style: "Abstract Expressionism",
            year: 1971,
            country: "USA",
            city: null,
            genreTags: ["abstract", "symbolic"],
            themeTags: ["politics", "death"],
          },
        ],
        rightSorted: [
          {
            id: "artwork16",
            title: "The Birth of Venus",
            artist: "Sandro Botticelli",
            imageUrl: getExampleImage(),
            style: "Renaissance",
            year: 1485,
            country: "Italy",
            city: "Florence",
            genreTags: ["mythological", "figure"],
            themeTags: ["beauty", "classical"],
          },
          {
            id: "artwork17",
            title: "The Last Supper",
            artist: "Leonardo da Vinci",
            imageUrl: getExampleImage(),
            style: "Renaissance",
            year: 1498,
            country: "Italy",
            city: "Milan",
            genreTags: ["religious", "biblical"],
            themeTags: ["Christianity", "betrayal"],
          },
          {
            id: "artwork18",
            title: "The School of Athens",
            artist: "Raphael",
            imageUrl: getExampleImage(),
            style: "Renaissance",
            year: 1511,
            country: "Italy",
            city: "Rome",
            genreTags: ["fresco", "historical"],
            themeTags: ["philosophy", "knowledge"],
          },
        ],
      },
      userGuess: {
        leftTitle: "Abstract Expressionism",
        rightTitle: "Renaissance",
        notSorted: [
          {
            id: "artwork13",
            title: "No. 5, 1948",
            artist: "Jackson Pollock",
            imageUrl: getExampleImage(),
            style: "Abstract Expressionism",
            year: 1948,
            country: "USA",
            city: "New York",
            genreTags: ["abstract", "action painting"],
            themeTags: ["energy", "spontaneity"],
          },
          {
            id: "artwork14",
            title: "Woman I",
            artist: "Willem de Kooning",
            imageUrl: getExampleImage(),
            style: "Abstract Expressionism",
            year: 1952,
            country: "USA",
            city: "New York",
            genreTags: ["figure", "abstract"],
            themeTags: ["femininity", "violence"],
          },
          {
            id: "artwork15",
            title: "Elegy to the Spanish Republic No. 110",
            artist: "Robert Motherwell",
            imageUrl: getExampleImage(),
            style: "Abstract Expressionism",
            year: 1971,
            country: "USA",
            city: null,
            genreTags: ["abstract", "symbolic"],
            themeTags: ["politics", "death"],
          },
          {
            id: "artwork16",
            title: "The Birth of Venus",
            artist: "Sandro Botticelli",
            imageUrl: getExampleImage(),
            style: "Renaissance",
            year: 1485,
            country: "Italy",
            city: "Florence",
            genreTags: ["mythological", "figure"],
            themeTags: ["beauty", "classical"],
          },
          {
            id: "artwork17",
            title: "The Last Supper",
            artist: "Leonardo da Vinci",
            imageUrl: getExampleImage(),
            style: "Renaissance",
            year: 1498,
            country: "Italy",
            city: "Milan",
            genreTags: ["religious", "biblical"],
            themeTags: ["Christianity", "betrayal"],
          },
          {
            id: "artwork18",
            title: "The School of Athens",
            artist: "Raphael",
            imageUrl: getExampleImage(),
            style: "Renaissance",
            year: 1511,
            country: "Italy",
            city: "Rome",
            genreTags: ["fresco", "historical"],
            themeTags: ["philosophy", "knowledge"],
          },
        ],
        leftSorted: [],
        rightSorted: [],
      },
    },
  ],
  totalPoints: 0,
  isGameOver: false,
};
