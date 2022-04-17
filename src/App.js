import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <video
          height="326px"
          className="video_nft"
          autoPlay
          loop
          playsInline
          controls
        >
          <source src="https://ipfs.atomichub.io/ipfs/QmU2PrqwxcZFiGRAG2he6RumSizsVEAfa6uSmJieYJyLnX" />
        </video>
      </div>
    </div>
  );
}

export default App;
