import React from "react";

class Fruta extends React.Component {
  render() {
    return (
      <li>
        {this.props.datos}
      </li>
    );
  }
}

export default Fruta;
