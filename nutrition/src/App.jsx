import React, { Component } from "react";
import FoodBox from "./component/FoodBox/FoodBox";
import FoodData from "./component/FoodData";
import Search from "./component/Search/Search";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      count: 0,
    };
  }

  handleSearch = (query) => {
    this.setState({ search: query });
  };

  handleCount = (value) => {
    this.setState({ count: value });
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">Food Explorer</h1>

        <Search handleSearch={this.handleSearch} />

        <div className="food-list">
          {FoodData.filter((food) => {
            if (this.state.search === "") return true;
            return food.name.toLowerCase().includes(this.state.search.toLowerCase());
          }).map((food) => (
            <FoodBox data={food} key={food.id} handleCount={this.handleCount} />
          ))}
        </div>
      </div>
    );
  }
}
