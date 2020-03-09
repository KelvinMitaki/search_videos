import React from "react";

const VideoDetail = props => {
  if (!props.video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={props.video.snippet.title} />
      </div>
      <div className="ui segment">
        <div className="ui header"> {props.video.snippet.title}</div>
        <p> {props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
