import React from "react";
import Reel from "../components/reel/Reel";
import MainSection from "../components/UI/MainSection";

function Reels() {
  return (
    <MainSection>
      <div className="reels">
        <Reel></Reel>
        <Reel></Reel>
        <Reel></Reel>
        <Reel></Reel>
        <Reel></Reel>
      </div>
    </MainSection>
  );
}

export default Reels;
