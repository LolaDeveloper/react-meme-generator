import React from "react";
import memesData from "./memesData";
import "./meme.css";
export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main className="Meme">
      <form className="form">
        <input type="text" className="formInput" placeholder="Top text" />
        <input type="text" className="formInput" placeholder="Bottom text" />
        <button className="formButton" onClick={getMemeImage}>
          {" "}
          Get a new meme image
        </button>
      </form>{" "}
      <img src={memeImage} className="meme--Image" />{" "}
    </main>
  );
}
