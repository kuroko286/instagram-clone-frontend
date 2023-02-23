import React from "react";
import Post from "../components/post/Post";
import SideBar from "../components/sidebar/SideBar";
import StoryBar from "../components/story/StoryBar";
import MainSection from "../components/UI/MainSection";

function Home() {
  return (
    <MainSection>
      <div className="home">
        <div>
          <StoryBar></StoryBar>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div>
          <SideBar></SideBar>
        </div>
      </div>
    </MainSection>
  );
}

export default Home;
