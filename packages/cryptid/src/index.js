// character generator = "cryptid"
// dungeon generator = "dengen"

const pipe = (...fns) => (accu) => fns.reduce((arg, fn) => fn(arg), accu);

const adjectives = ["run down", "ecstatic", "beautiful"];
const nouns = ["vase", "car", "cavern"];
const locations = ["Limponk", "Kaschink", "Vaarbaf"];
const object = ["doomsday machine"];

const rndItmFrm = (arr) => arr[Math.floor(Math.random() * arr.length)];

const wordify = (wordlist) => (clause) => {
  return `${clause}${rndItmFrm(wordlist)}`;
};

const spaceify = (clause) => {
  return `${clause} `;
};

const prepositionify = (clause) => `${clause} of`;

export const logger = (clause) => {
  console.log(clause);
  return clause;
};

const adjectify = wordify(adjectives);
const nounify = wordify(nouns);
const locateify = wordify(locations);

const test = pipe(
  adjectify,
  spaceify,
  nounify,
  prepositionify,
  spaceify,
  locateify,
  spaceify,
  logger
);

test("");

// randomly decide if food is carried
// resolve which food and quantity
// decide which kind of bag holds the food
// fill inventory with remaining slots

const container = ["rucksack", "knapsack", "backpack", "pouch", "etui"];
const food = ["bread", "shrimp", "tomato"];
const inventory = ["lint"];

export const duct = (...fns) => (accu) =>
  fns.reduce((arg, fn) => fn(arg), accu);

export const carriesFood = () => (obj) => {
  return {
    ...obj,
    food: true,
    inventory: [],
  };
};

export const whichItem = (foodlist, key) => (obj) => {
  return { ...obj, [key]: [...obj[key], rndItmFrm(foodlist)] };
};
