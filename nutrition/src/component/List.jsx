import { Component } from "react";

export default class List extends Component {
  render() {
    const { count, name, total, reset } = this.props;

    return (
      <>
        <div style={{ textTransform: "capitalize" }} className="output">
          <span>{count}</span> {name} = <span>{total}</span> Calories
        </div>
      </>
    );
  }
}