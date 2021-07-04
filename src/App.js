import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😀": "smiley",
  "😍": "Love",
  "🤩": "Exitement",
  "😜": "Naughty",
  "🤑": "Money Face",
  "😏": "Quirky Face"
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
