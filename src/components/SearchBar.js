import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onInputSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onInputSubmit} className="ui form">
          <div style={{ textAlign: "center" }} className="field">
            <h1>Search</h1>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
