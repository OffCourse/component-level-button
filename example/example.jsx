import React from "react";
import LevelButton from "../src/index.jsx";

class Example extends React.Component {

  constructor(props){
    super(props);
    this.state = { type: false };
  }

  setLevel(selection) {
    let { type } = selection;
    this.setState({ type });
  }

  render() {
    let { type } = this.state;
    let current = !!type;
    let title = "feedback";

    return (
      <section>
          <LevelButton
            current={ current }
            title={ title }
            type={ type || title }
            setLevel={ this.setLevel.bind(this) }/>
          <div>Current Type = { type }</div>
      </section>
    );
  }
}

export default Example;
