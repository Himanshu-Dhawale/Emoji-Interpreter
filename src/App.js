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
  var [likeCounter, Aloo] = useState("");

  function emojiHandeler(event) {
    var userInput = event.target.value;
    var likeCounter = emojiDictionary[userInput];
    Aloo(likeCounter);
  }
  function showemojiClickHandler(showemoji) {
    var likeCounter = emojiDictionary[showemoji];
    Aloo(likeCounter);
  }

  return (
    <div className="App">
      <h1>EMOJIPEDIA</h1>
      <input onChange={emojiHandeler} />
      <h2>{likeCounter}</h2>
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
