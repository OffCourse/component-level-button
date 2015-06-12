import React from "react";
import classnames from "classnames";

class LevelButton extends React.Component {

  constructor(props){
    super(props);
    let { type } = this.props;
    this.name = "btn";
    this.extendedName = `${this.name}-${type}`;
  }

  classes(){
    let { current, type } = this.props;
    let activeClass = `${this.name}-is-active`;
    let isActive = current;

    return classnames({
      [this.name]: true,
      [this.extendedName]: type,
      [activeClass]: isActive
    });
  }

  render() {
    let { setLevel, type, title } = this.props;
    let selection = { type };
    return (
      <li
        onClick={ setLevel.bind(this, selection) }
        className={ this.classes() }>
        { title || "Level" }
      </li>
    );
  };
}

LevelButton.defaultProps = {
  setLevel(){}
};

LevelButton.propTypes = {
  setLevel: React.PropTypes.func,
  current: React.PropTypes.bool,
  title: React.PropTypes.string,
  type: React.PropTypes.string
};

export default LevelButton;
