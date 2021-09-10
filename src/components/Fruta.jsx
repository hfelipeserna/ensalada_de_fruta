import React from "react";

class Fruta extends React.Component {
  render() {
    return (
      <li key={this.props.value.id}>
        {this.props.value}
      </li>
    );
  }
}

export default Fruta;
