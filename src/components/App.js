import React from "react";
import SearchBar from "./SearchBar";
import youtube, { KEY } from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit("on and on");
  }
  onTermSubmit = async term => {
    const result = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 50,
        key: KEY,
        q: term
      }
    });

    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />

        <VideoDetail video={this.state.selectedVideo} />

        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
