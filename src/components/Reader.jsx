import React from "react";

class Reader extends React.Component {
  readJSON() {
    const fs = require("fs");
    const data = fs.readFileSync("../data/data.json", {
      encoding: "utf8",
      flag: "r",
    });
    return data;
  }
}

export default Reader;
