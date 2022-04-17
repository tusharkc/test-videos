import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/NgrI5qwayVc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
