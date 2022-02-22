import React from "react";
import "./meme.css";
export default function Meme() {
  return (
    <main className="Meme">
      <form className="form">
        <input type="text" className="formInput" placeholder="Top text" />
        <input type="text" className="formInput" placeholder="Bottom text" />
        <button className="formButton"> Get a new meme image</button>
      </form>
    </main>
  );
}
