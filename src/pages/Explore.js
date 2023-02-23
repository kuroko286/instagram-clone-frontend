import React from "react";
import Footer from "../components/footer/Footer";
import MainSection from "../components/UI/MainSection";

function Explore() {
  return (
    <MainSection>
      <div className="gallery">
        <div className="gallery-1">
          <div className="gallery-item-1">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
          <div className="gallery-item-2">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
          <div className="gallery-item-3">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
          <div className="gallery-item-4">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
          <div className="gallery-item-5">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
        </div>
        <div className="gallery-2">
          <div className="gallery-item-1">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
          <div className="gallery-item-2">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
          <div className="gallery-item-3">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
          <div className="gallery-item-4">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
          <div className="gallery-item-5">
            <img alt="hinh anh" src="https://picsum.photos/200"></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </MainSection>
  );
}

export default Explore;
