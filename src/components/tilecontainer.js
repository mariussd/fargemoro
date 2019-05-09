import React, { Component } from "react";
import Tile from "./tile";

class TileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tilecount: this.props.tilecount,
      tiles: []
    };
  }

  createTiles = () => {
    let tiles_tmp = [];

    for (let i = 0; i < this.state.tilecount; i++) {
      tiles_tmp.push({
        key: i
      });
    }

    this.setState({ tiles: tiles_tmp });
  };

  getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  componentDidMount = () => {
    this.createTiles();
  };

  render() {
    return (
      <div
        style={{
          width: this.props.useWidth,
          height: this.props.useHeight,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {this.state.tiles.map(tile => {
          return (
            <Tile
              key={tile.key}
              primary_color={tile.p_color}
              secondary_color={tile.s_color}
              newColor={this.getRandomColor}
              tileSize={this.props.tileSize}
            />
          );
        })}
      </div>
    );
  }
}

export default TileContainer;
