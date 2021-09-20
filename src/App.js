import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😝": "Squinting Face with Tongue",
  "☘️": "Shamrock",
  "🍀": "Four Leaf Clover",
  "🍁": "Maple Leaf",
  "🍂": "Fallen Leaf",
  "🍃": "Leaf Fluttering In Wind",
  "🌼": "Blossom",
  "🌻": "Sunflower",
  "🌷": "Tulip",
  "🌱": "Seedling",
  "🌲": "Evergreen Tree",
  "🌳": "Deciduous Tree",
  "🌴": "Palm Tree",
  "🌵": "Cactus",
  "🌾": "Sheaf Of Rice",
  "🌿": "Herb",
  "🦂": "Scorpion",
  "🦟": "Mosquito",
  "🦠": "Microbe",
  "💐": "Bouquet",
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🏵️": "Rosette",
  "🌹": "Rose",

  "🐇": "Rabbit",
  "🐿️": "Chipmunk",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐨": "Koala",
  "🐏": "Ram",
  "🐐": "Goat",
  "🐪": "Camel",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐄": "Cow",
  "🐷": "Pig Face",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐂": "Ox",
  "🦝": "Raccoon",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🦄": "Unicorn",
  "🦍": "Gorilla",
  "🐕": "Dog",
  "🐺": "Wolf",
  "🦊": "Fox"
};

var emojis = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandeler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }
    setMeaning(emojiMeaning);
  }

  // function inputHandlerEvent(event) {
  //   var userInput = event.target.value;
  //   var meaning = emojiDictionary[userInput];

  //   setMeaning(meaning);
  // }
  function showemojiClickHandler(showemoji) {
    var meaning = emojiDictionary[showemoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EMOJIPEDIA</h1>
      <input onChange={emojiHandeler} />
      <h2>{meaning}</h2>
      <div>
        <h3>Emojis we Know</h3>
        {emojis.map(function (showemoji) {
          return (
            <span
              key={showemoji}
              onClick={() => showemojiClickHandler(showemoji)}
            >
              {showemoji}
              {""}
            </span>
          );
        })}
      </div>
    </div>
  );
}
