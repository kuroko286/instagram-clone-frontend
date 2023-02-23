import React from "react";

function Reel() {
  return (
    <div className="reel">
      <div className="video-container">
        <video autoPlay={true}>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          ></source>
        </video>
        <span className="sound-control">
          <i class="fa-solid fa-volume-high"></i>
          {/* <i class="fa-solid fa-volume-xmark"></i> */}
        </span>
        <span className="video-control">
          <i class="fa-solid fa-play"></i>
        </span>
        <div className="reel-info">
          <div className="user-info">
            <img alt="avatar" src="https://picsum.photos/210"></img>
            <a className="user-name" href="/">
              __user1
            </a>
            <button className="follow-btn">Theo doi</button>
          </div>
          <p className="reel-description">Lorem ipsum is placeholder text</p>
          <a href="/" className="sound-info">
            <i class="fa-solid fa-music"></i>
            <p className="author">Myley Cyrus</p>
            <p className="sound-name">Flowers</p>
          </a>
        </div>
        <div className="reel-option">
          <div className="like">
            <i class="fa-regular fa-heart"></i>
            <p className="count">273 N</p>
          </div>
          <div className="comment">
            <i class="fa-regular fa-comment"></i>
            <p className="count">491</p>
          </div>
          <div className="share">
            <i class="fa-regular fa-share-from-square"></i>
          </div>
          <div className="save">
            <i class="fa-regular fa-bookmark"></i>
          </div>
          <div className="other">
            <i class="fa-solid fa-circle-info"></i>
          </div>
          <div className="sound-link">
            <img alt="avatar" src="https://picsum.photos/210"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reel;
