import Troll from "./images/troll-face.png";
import "./App.css";

export default function App() {
  return (
    <div className="  App">
      <header className="App-header">
        <img src={Troll} alt="troll face" className="headerImage" />
        <h2 className="headerTitle">Meme Generator</h2>
        <small>
          <h4 className="headerSubTitle"> React course- project 3</h4>
        </small>
      </header>
      <div className="container">
        <footer>
          This project was coded by{" "}
          <a href="#" target="_blank" rel=" noopener norefferer">
            Funmilola
          </a>{" "}
          and is{" "}
          <a href="#" target="_blank" rel=" noopener norefferer">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
