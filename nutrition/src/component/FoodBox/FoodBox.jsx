import React, { Component } from "react";
import List from "../List";
import "./FoodBox.css";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      totalAmount: 0,
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    const updatedCount = count + 1;
    const totalAmount = updatedCount * this.props.data.cal;

    this.setState({
      count: updatedCount,
      totalAmount: totalAmount,
    });
  };

  handleReset = () => {
    this.setState({ count: 0, totalAmount: 0 });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="food">
        <img src={data.img} alt="" />
        <div className="info">
          <p>{data.name}</p>
          <span>Calories: {data.cal}</span>
        </div>
        <div className="input">
          <button onClick={this.handleIncrement}>+</button>
          <input
            value={this.state.count}
            type="number"
            placeholder="Enter number here"
            readOnly
          />
          <button onClick={this.handleReset}>Reset</button>
        </div>
        <List
          count={this.state.count}
          name={data.name}
          total={this.state.totalAmount}
          reset={this.handleReset}
        />
      </div>
    );
  }
}
