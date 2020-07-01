import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onFormSubmit = (event, props) => {
    event.preventDefault();
    this.props.onImageSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Image Search </label>
          <input
            type="text"
            value={this.state.term}
            onChange={(event) => this.setState({ term: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
