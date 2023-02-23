import React from "react";

function SearchBox() {
  return (
    <div className="search">
      <div className="top">
        <h3>Tìm kiếm</h3>
        <div className="input-container">
          <i class="fa-solid fa-magnifying-glass icon-left"></i>
          <input type={"text"} placeholder="Tìm kiếm"></input>
          <i class="fa-solid fa-circle-xmark icon-right"></i>
        </div>
      </div>
      <div className="bottom">
        <p className="title">Gần đây</p>
        <div className="content">
          <p>Không có nội dung tìm kiếm mới đây.</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
