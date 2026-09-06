export type RescuePet = {
  id: string;
  name: string;
  species: string;
  age: string;
  status: string;
  description: string;
  trait: string;
};

export const rescuePets: RescuePet[] = [
  {
    id: "buster",
    name: "Buster",
    species: "Terrier mix",
    age: "2 years",
    status: "Ready for a home",
    description: "A tennis-ball expert with a big smile and an even bigger heart.",
    trait: "PLAYFUL",
  },
  {
    id: "mochi",
    name: "Mochi",
    species: "Tuxedo cat",
    age: "4 years",
    status: "Ready for a home",
    description: "A quiet cuddle bug who prefers sunny windows and gentle people.",
    trait: "SWEET",
  },
  {
    id: "pepper",
    name: "Pepper",
    species: "Beagle mix",
    age: "1 year",
    status: "Meet and greet open",
    description: "Curious, clever, and happiest when her people are nearby.",
    trait: "CURIOUS",
  },
];

export const impactStats = [
  { value: "842", label: "rescues" },
  { value: "12k", label: "meals served" },
  { value: "100%", label: "love" },
];