import bluePottery from "../assets/images/stories/bluePottery.webp";
import ajrakh from "../assets/images/stories/ajrakh.webp";
import whistlingVillage from "../assets/images/stories/whistlingvillage.webp";
import rootBridges from "../assets/images/stories/RootBridge.webp";
import desertMusicians from "../assets/images/stories/desertmusic.webp";
import blackRice from "../assets/images/stories/blackrice.webp";
import bambooMakers from "../assets/images/stories/bamboomakers.webp";
import templeCarvings from "../assets/images/stories/templecarvings.webp";

const gameQuestions = [
  {
    id: 1,
    question: "The Blue Pottery of Jaipur belongs to which state?",
    image: bluePottery,
    options: ["Rajasthan", "Gujarat", "Punjab", "Bihar"],
    answer: "Rajasthan",
  },

  {
    id: 2,
    question: "The Whistling Village is found in which state?",
    image: whistlingVillage,
    options: ["Meghalaya", "Assam", "Manipur", "Nagaland"],
    answer: "Meghalaya",
  },

  {
    id: 3,
    question: "The Black Rice of Manipur belongs to which state?",
    image: blackRice,
    options: ["Manipur", "Bihar", "Assam", "Tripura"],
    answer: "Manipur",
  },

  {
    id: 4,
    question:
      "The Bamboo Makers of the Northeast are associated with which state?",
    image: bambooMakers,
    options: ["Assam", "Rajasthan", "Gujarat", "Kerala"],
    answer: "Assam",
  },

  {
    id: 5,
    question: "The Living Root Bridges are famous in which state?",
    image: rootBridges,
    options: ["Meghalaya", "Sikkim", "Nagaland", "Assam"],
    answer: "Meghalaya",
  },

  {
    id: 6,
    question:
      "The Desert's Hereditary Musicians are associated with which state?",
    image: desertMusicians,
    options: ["Rajasthan", "Gujarat", "Punjab", "Haryana"],
    answer: "Rajasthan",
  },

  {
    id: 7,
    question:
      "The Language of Stone refers to temple carvings from which state?",
    image: templeCarvings,
    options: ["Tamil Nadu", "Kerala", "Karnataka", "Odisha"],
    answer: "Tamil Nadu",
  },

  {
    id: 8,
    question: "The Art of Ajrakh Printing is associated with which state?",
    image: ajrakh,
    options: ["Gujarat", "Rajasthan", "Maharashtra", "Goa"],
    answer: "Gujarat",
  },
];
export default gameQuestions;
