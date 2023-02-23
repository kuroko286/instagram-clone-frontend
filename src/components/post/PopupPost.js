import React, { useEffect } from "react";
import Overlay from "../UI/Overlay";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return <div className={`${className} custom-next-arrow`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} custom-prev-arrow`} onClick={onClick} />;
}

function PopupPost({ onClick }) {
  useEffect(() => {
    document.body.classList.add("no-scroll"); // when mounted

    return () => {
      document.body.classList.remove("no-scroll"); // when unmount
    };
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Overlay onClick={onClick}>
      <div
        className="popup-post-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="post-image-slider">
          <Slider {...settings}>
            <img
              className="post-image"
              src="https://picsum.photos/201"
              alt="poster"
            ></img>
            <img
              className="post-image"
              src="https://picsum.photos/202"
              alt="poster"
            ></img>
            <img
              className="post-image"
              src="https://picsum.photos/203"
              alt="poster"
            ></img>
            <img
              className="post-image"
              src="https://picsum.photos/204"
              alt="poster"
            ></img>
            <img
              className="post-image"
              src="https://picsum.photos/205"
              alt="poster"
            ></img>
          </Slider>
        </div>

        <div className="post-beside">
          <div className="post-title">
            <div className="post-user">
              <img
                src="https://picsum.photos/200"
                alt="user"
                className="user-avatar"
              ></img>
              <p className="user-name">_username</p>
              <div className="post-time">1 hour ago</div>
            </div>
            <div className="post-options">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="comments-container">
            <div className="post-description">
              <span className="username">_username</span>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <ul className="comments-list">
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user2</p>
                  <p className="text">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user3</p>
                  <p className="text">
                    From its medieval origins to the digital era, learn
                    everything there is to know about the ubiquitous lorem ipsum
                    passage.
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li className="comment">
                <div className="comment-info">
                  <p className="username">__user1</p>
                  <p className="text">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <i class="fa-regular fa-heart"></i>
              </li>
            </ul>
          </div>
          <div className="post-react">
            <div>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-regular fa-paper-plane"></i>
            </div>
            <div>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
          <div className="like-counter">2048 likes</div>

          <div className="add-comment">
            <input type={"text"} placeholder="Add comment..."></input>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default PopupPost;
