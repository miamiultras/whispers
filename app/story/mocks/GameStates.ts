import { GameState } from "../interfaces/Game";

export const gameStatesMock: GameState[] = [
  {
    id: "state1",
    text: "You wake up in a dark room, surrounded by whispers. You reach into your pockets and find a box of matches and an unknown pill. The voices tell you to take the pill.",
    paths: [
      { id: "path1", text: "Lit up a match", next: "state2" },
      { id: "path2", text: "Take the pill", next: "state3" },
    ],
  },
  {
    id: "state2",
    text: 'You lit up a match and see a sign on the box of matches that says "You are the key." The match goes out, and you hear a voice urging you to burn the box of matches.',
    paths: [
      { id: "path3", text: "Burn the box of matches", next: "state4" },
      { id: "path4", text: "Take a look inside your pocket", next: "state5" },
    ],
  },
  {
    id: "state3",
    text: "You took the pill and the darkness slowly fades away. You hear more voices and see a door in front of you.",
    paths: [
      { id: "path5", text: "Go through the door", next: "state10" },
      { id: "path6", text: "Vomit the pill", next: "state8" },
    ],
  },
  {
    id: "state4",
    text: "You burn the box of matches, and the room is once again filled with darkness. Panic sets in, and you start beating the walls.",
    paths: [{ id: "path7", text: "Eat the pill", next: "state3" }],
  },
  {
    id: "state5",
    text: "You take a look inside your pocket and find an old key. You light another match and see wooden doors in front of you.",
    paths: [
      { id: "path8", text: "Open the door", next: "state6" },
      {
        id: "path9",
        text: "Throw away the key and eat the pill",
        next: "state3",
      },
    ],
  },
  {
    id: "state6",
    text: `You open the door, but behind it, there's only a concrete wall like the rest of the room. Feeling hopeless, you break the old door and make a pile of wood. You light it on fire using the last match and see a sign at the bottom of the box that says "Wake up." You throw the box into the fire.`,
    paths: [
      { id: "path10", text: "Jump into the fire", next: "state7" },
      { id: "path11", text: "Eat the pill", next: "state3" },
    ],
  },
  {
    id: "state7",
    text: `You jump into the fire, and the room disappears. You find yourself falling through a black hole, feeling like it's never-ending. Eventually, you land and start losing consciousness. A voice urges you not to give up.`,
    paths: [
      { id: "path12", text: "Open your eyes", next: "state8" },
      { id: "path13", text: "Give up", next: "state1" },
    ],
  },
  {
    id: "state8",
    text: "You open your eyes and wake up in a garden, with the sun shining. You are covered in vomit and see half of the pill. You hear a voice telling you to eat the pill.",
    paths: [
      { id: "path14", text: "Throw away the pill", next: "state9" },
      { id: "path15", text: "Eat the pill", next: "state10" },
    ],
  },
  {
    id: "state9",
    text: "You throw away the pill and start crying. The sun disappears, and it starts raining heavily. The rain mixes with your tears, and you begin to drown in it.",
    paths: [
      { id: "path16", text: "Try to swim and stay alive", next: "state11" },
      { id: "path17", text: "Let the water consume you", next: "state1" },
    ],
  },
  {
    id: "state10",
    text: `You went through the door and wake up in your house. Memories flood back, and you recall your inner struggle. You prepare breakfast, but instead of food, there's a familiar pill on the plate.`,
    paths: [
      { id: "path18", text: "Eat the pill", next: "state1" },
      {
        id: "path19",
        text: "Throw away the plate",
        next: "state8",
      },
    ],
  },
  {
    id: "state11",
    text: 'The rain stops, and the water slowly recedes. Exhausted but relieved, you hear a voice saying, "Don\'t resist." A stranger appears before you, showing two hands—one with the familiar pill and another with a box of matches.',
    paths: [
      { id: "path20", text: "Choose the pill", next: "state3" },
      { id: "path21", text: "Choose the box of matches", next: "state2" },
    ],
  },
];
