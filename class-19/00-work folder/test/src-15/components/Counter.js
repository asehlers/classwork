import React from "react";
import PanelBody from "./PanelBody.js";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
          <PanelBody count={this.state.count} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} />
      </div>
    );
  }
}

export default Counter;
