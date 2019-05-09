import React, { Component } from "react";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  changeColor = () => {
    this.setState({ color: this.props.newColor() });
  };

  componentDidMount = () => {
    this.setState({ color: this.props.newColor() });
    setInterval(() => {
      this.changeColor();
    }, Math.random() * 15000 + 3000);
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          width: this.props.tileSize,
          height: this.props.tileSize
        }}
        onClick={this.changeColor}
      />
    );
  }
}

export default Tile;
