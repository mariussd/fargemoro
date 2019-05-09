import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/tile";
import Tile from "./components/tile";
import TileContainer from "./components/tilecontainer";

const tileSize = 50;

function getTileCount() {
  return [
    Math.ceil(window.innerWidth / tileSize),
    Math.ceil(window.innerHeight / tileSize)
  ];
}

function App() {
  const tilecount = getTileCount();

  return (
    <div className="App">
      <TileContainer
        tilecount={tilecount[0] * tilecount[1]}
        useWidth={tilecount[0] * tileSize}
        useHeight={tilecount[1] * tileSize}
        tileSize={tileSize}
      />
    </div>
  );
}

export default App;
