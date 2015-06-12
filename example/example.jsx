import React from "react";
import LevelButton from "../src/index.jsx";

class Example extends React.Component {

  constructor(props){
    super(props);
    this.state = { type: false };
  }

  setLevel(selection) {
    console.log(selection);
    let { type } = selection;
    this.setState({ type });
  }

  render() {
    let { type } = this.state;
    let current = !!type;

    return (
      <section>
          <LevelButton
            current={ current }
            type={ type || "feedback" }
            setLevel={ this.setLevel.bind(this) }/>
          <div>Current Type = { type }</div>
      </section>
    );
  }
}

export default Example;
