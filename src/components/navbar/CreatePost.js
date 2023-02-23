import React, { useEffect, useRef } from "react";
import Overlay from "../UI/Overlay";

function CreatePost({ onClick }) {
  useEffect(() => {
    document.body.classList.add("no-scroll"); // when mounted

    return () => {
      document.body.classList.remove("no-scroll"); // when unmount
    };
  }, []);

  const fileSelectRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    fileSelectRef.current.click();
  };

  return (
    <Overlay onClick={onClick}>
      <div
        className="create-post-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="container-header">
          <p className="container-title">Tao bai viet moi</p>
        </div>
        <div className="container-main">
          <i class="fa-solid fa-photo-film"></i>
          <p>Keo anh va video vao day</p>
          <button type="button" onClick={handleClick}>
            Chon tu may tinh
          </button>
        </div>
        <form>
          <input type={"file"} hidden ref={fileSelectRef} multiple></input>
        </form>
      </div>
      <i class="fa-solid fa-xmark close-btn"></i>
    </Overlay>
  );
}

export default CreatePost;
