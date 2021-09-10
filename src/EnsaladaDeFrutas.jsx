import React from "react";
import Fruta from "./components/Fruta"
import data from "./data/data.json";

class EnsaladaDeFrutas extends React.Component {
  render() {
    return (
      <div>
        <h1>Ensalada de frutas. Contiene:</h1>
        <ul>
          {data.map((frutaName, index) => (
            <React.Fragment>
                <Fruta key={index.toString()} value={frutaName.nombre} />
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
}

export default EnsaladaDeFrutas;
