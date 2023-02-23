import React from "react";

function Story() {
  return (
    <>
      <div className="story-video">
        <video controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="story-user-info">
        <img alt="avatar" src="https://picsum.photos/210"></img>
        <a className="user-name" href="/">
          __user1
        </a>
        <span className="time">2 gio</span>
      </div>
    </>
  );
}

export default Story;
