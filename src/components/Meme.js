import React from "react";
import memesData from "./memesData";
import "./meme.css";
export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: " ",
    bottomText: " ",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemesImage] = React.useState(memesData);

  //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");//
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img src={meme.randomImage} className="meme--Image" />{" "}
    </main>
  );
}
