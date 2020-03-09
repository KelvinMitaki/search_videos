import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const res = props.videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={props.onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{res}</div>;
};

export default VideoList;
