import { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <label htmlFor="search">Search</label>
        <input
          type="search"
          name=""
          id="search"
          onChange={(e) => this.props.handleSearch(e.target.value)}
        />
      </div>
    );
  }
}