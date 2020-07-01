import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../Api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div>
        <h1>This is my First React App</h1>
        <SearchBar onImageSubmit={this.onSearchSubmit} />
        <ImageList Images={this.state.images} />
      </div>
    );
  }
}

export default App;
