import React from "react";
import Story from "./Story";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return <div className={`${className} custom-next-arrow`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} custom-prev-arrow`} onClick={onClick} />;
}

function StoryBar() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="story-bar">
      <Slider {...settings}>
        <Story seen="seen" size={200}></Story>
        <Story size={201}></Story>
        <Story size={202}></Story>
        <Story seen="seen" size={203}></Story>
        <Story size={203}></Story>
        <Story size={204}></Story>
        <Story size={205}></Story>
        <Story size={206}></Story>
        <Story size={207}></Story>
        <Story size={208}></Story>
        <Story size={209}></Story>
        <Story size={210}></Story>
        <Story size={211}></Story>
        <Story size={212}></Story>
        <Story size={213}></Story>
        <Story size={214}></Story>
        <Story size={215}></Story>
      </Slider>
    </div>
  );
}

export default StoryBar;
