import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import MainSection from "../../components/UI/MainSection";
import { Link } from "react-router-dom";
import SettingAvatar from "./SettingAvatar";
import ProfileSettingPopup from "./ProfileSettingPopup";

function Profile() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [containerIndex, setContainerIndex] = useState(0);
  const handleOverlayClick = () => {
    setContainerIndex(0);
  };

  const containers = {
    0: <></>,
    1: <SettingAvatar onClick={handleOverlayClick}></SettingAvatar>,
    2: <ProfileSettingPopup onClick={handleOverlayClick}></ProfileSettingPopup>,
  };
  return (
    <>
      <MainSection>
        <div className="profile">
          <div className="profile-header">
            <div className="profile-header-top">
              <img
                className="profile-avatar"
                alt="profile avt"
                src="https://picsum.photos/200"
                onClick={() => setContainerIndex(1)}
              ></img>
              <div className="profile-info">
                <div className="profile-setting">
                  <p className="profile-name">a1__kuroko</p>
                  <button className="setting-btn">
                    Chinh sua trang ca nhan
                  </button>
                  <i
                    class="fa-solid fa-gear"
                    onClick={() => setContainerIndex(2)}
                  ></i>
                </div>
                <div className="profile-stat">
                  <p className="post-stat">
                    <span className="number">1</span> bai viet
                  </p>
                  <p className="follower-stat">
                    <span className="number">17</span> nguoi theo doi
                  </p>
                  <p className="following-stat">
                    Dang theo doi <span className="number">43</span> nguoi dung
                  </p>
                </div>
                <div className="profile-description">
                  <p className="profile-name">a1__kuroko</p>
                  <p className="profile-relate">
                    Co <span className="username">dongoc117</span>,{" "}
                    <span className="username">ttilinhchee_</span> va 16 nguoi
                    khac theo doi
                  </p>
                </div>
              </div>
            </div>
            <div className="profile-stories">
              <ul className="story-list">
                <li className="story-item">
                  <img
                    className="story-img"
                    alt="story-img"
                    src="https://picsum.photos/201"
                  ></img>
                  <p className="story-description">cute</p>
                </li>
                <li className="story-item">
                  <img
                    className="story-img"
                    alt="story-img"
                    src="https://picsum.photos/202"
                  ></img>
                  <p className="story-description">CVP</p>
                </li>
                <li className="story-item">
                  <img
                    className="story-img"
                    alt="story-img"
                    src="https://picsum.photos/203"
                  ></img>
                  <p className="story-description">A1K22❤️❤️❤️</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-main">
            <div className="profile-main-navbar">
              <Link
                to="/profile"
                className={`profile-main-navlink ${
                  activeIndex === 1 && "active"
                }`}
                onClick={() => {
                  setActiveIndex(1);
                }}
              >
                <i class="fa-solid fa-table-cells"></i>
                BAI VIET
              </Link>
              <Link
                to="/profile"
                className={`profile-main-navlink ${
                  activeIndex === 2 && "active"
                }`}
                onClick={() => {
                  setActiveIndex(2);
                }}
              >
                <i class="fa-regular fa-bookmark"></i>
                DA LUU
              </Link>
              <Link
                to="/profile"
                className={`profile-main-navlink ${
                  activeIndex === 3 && "active"
                }`}
                onClick={() => {
                  setActiveIndex(3);
                }}
              >
                <i class="fa-solid fa-user-tag"></i>
                DUOC GAN THE
              </Link>
            </div>
            <div className="profile-main-content">
              {activeIndex === 1 && (
                <ul className="post-list">
                  <li className="post-item">
                    <img src="https://picsum.photos/200" alt="img"></img>
                  </li>
                  <li className="post-item">
                    <img src="https://picsum.photos/203" alt="img"></img>
                  </li>
                  <li className="post-item">
                    <img src="https://picsum.photos/204" alt="img"></img>
                  </li>
                  <li className="post-item">
                    <img src="https://picsum.photos/205" alt="img"></img>
                  </li>
                  <li className="post-item">
                    <img src="https://picsum.photos/206" alt="img"></img>
                  </li>
                </ul>
              )}
              {activeIndex === 2 && (
                <div className="profile-collections">
                  <div>
                    <p className="profile-collection-signal">
                      Chi minh ban co the xem muc minh da luu
                    </p>
                    <button className="add-collection-btn">
                      <i class="fa-solid fa-plus"></i>Bo suu tap moi
                    </button>
                  </div>
                  <ul className="profile-collection-list">
                    <li className="profile-collection-item"></li>
                  </ul>
                </div>
              )}
              {activeIndex === 3 && (
                <div className="profile-tagged">
                  <i class="fa-solid fa-camera"></i>
                  <div className="profile-tagged-description">
                    <p className="what-tagged">Anh co mat ban</p>
                    <p className="how-tagged">
                      Khi moi nguoi gan the ban trong anh, anh se xuat hien tai
                      day.
                    </p>
                    <p className="tagged-status">Chua co anh nao</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </MainSection>
      {containers[containerIndex]}
    </>
  );
}

export default Profile;
