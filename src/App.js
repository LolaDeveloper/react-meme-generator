import Meme from "./components/Meme";
import "./App.css";

export default function App() {
  return (
    <div className="  App">
      <header className="App-header">
        <img
          src="../images/troll-face.png"
          alt="troll face"
          className="headerImage"
        />
        <h2 className="headerTitle">Meme Generator</h2>
        <small>
          <h4 className="headerSubTitle"> React course- project 3</h4>
        </small>
      </header>
      <div className="container">
        <Meme />
        <footer>
          This project was coded by{" "}
          <a
            href="https://lola-portfolio.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Funmilola
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LolaDeveloper/react-meme-generator"
            target="_blank"
            rel=" noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
