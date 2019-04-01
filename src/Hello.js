import React, { Component } from "react";
import "./Hello.css";

// class way
class Hello extends Component {
  render() {
    return (
      <div className="f1">
        <p>Hello</p>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}

// function way
// const Hello = props => {
//   return (
//     <div>
//       Hello
//       <p>{props.greeting}</p>
//     </div>
//   );
// };

export default Hello;
