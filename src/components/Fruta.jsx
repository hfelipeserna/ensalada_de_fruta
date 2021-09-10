import React from "react";

class Fruta extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        {this.props.datos}
      </li>
    );
  }
}

export default Fruta;
