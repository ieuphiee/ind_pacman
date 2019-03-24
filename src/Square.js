import React from "react";
import "./Square.css";

class Square extends React.Component {
  render() {
    const borw = this.props.value ? "white-square" : "black-square";
    return (
      <span className={`bordered-square ${borw}`}>
        {this.props.isPacman ? "PAC" : ""}
      </span>
    );
  }
}

export default Square;
