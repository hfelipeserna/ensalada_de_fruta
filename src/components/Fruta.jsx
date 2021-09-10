import React from "react";

class Fruta extends React.Component {
  render() {
    return (
      <li key={this.props.datos.id}>
        {this.props.datos}
      </li>
    );
  }
}

export default Fruta;
