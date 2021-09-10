import React from "react";

class Fruta extends React.Component {
  render() {
    return (
      <li>
        {this.props.value}
      </li>
    );
  }
}

export default Fruta;
