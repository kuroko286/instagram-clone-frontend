import React from "react";
import MainSection from "../components/UI/MainSection";

function ChatBox() {
  return (
    <MainSection>
      <div className="inbox">
        <div className="inbox-container">
          <div className="inbox-bar">
            <div className="inbox-bar-top">
              <p className="account">
                __user1234{" "}
                <svg
                  aria-label="Biểu tượng mũi tên xuống"
                  class="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="20"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                </svg>
              </p>
              <i class="fa-regular fa-share-from-square"></i>
            </div>
            <div className="inbox-bar-bottom">
              <ul className="contact-list">
                <li className="contact-item">
                  <img
                    alt="useravt"
                    className="user-avatar"
                    src="https://picsum.photos/260"
                  ></img>
                  <div className="user-info">
                    <p className="user-name">Nguyen Van A</p>
                    <p className="user-status">Hoat dong hom nay</p>
                  </div>
                </li>
                <li className="contact-item">
                  <img
                    alt="useravt"
                    className="user-avatar"
                    src="https://picsum.photos/261"
                  ></img>
                  <div className="user-info">
                    <p className="user-name">__user286</p>
                    <p className="user-status">
                      Ban da tra loi tin cau ho{" "}
                      <span className="time">19 tuan</span>
                    </p>
                  </div>
                </li>
                <li className="contact-item">
                  <img
                    alt="useravt"
                    className="user-avatar"
                    src="https://picsum.photos/262"
                  ></img>
                  <div className="user-info">
                    <p className="user-name">#someone</p>
                    <p className="user-status">Hoat dong 2 gio truoc</p>
                  </div>
                </li>
                <li className="contact-item">
                  <img
                    alt="useravt"
                    className="user-avatar online"
                    src="https://picsum.photos/268"
                  ></img>
                  <span className="circle"></span>
                  <div className="user-info">
                    <p className="user-name">Le Van Q</p>
                    <p className="user-status">Dang hoat dong</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="inbox-main">
            {/* <div className="inbox-start">
              <i class="fa-regular fa-share-from-square"></i>
              <h3>Tin nhan cua ban</h3>
              <p>Gui anh va tin nhan rieng tu cho ban be hoac nhom.</p>
              <button className="start-btn">Gui tin nhan</button>
            </div> */}
            <div className="dialog-container">
              <div className="dialog-header">
                <div className="user-info">
                  <img alt="useravt" src="https://picsum.photos/260"></img>
                  <div className="info-text">
                    <p className="username">Nguyen Van A</p>
                    <p className="status">Hoat dong 2 gio truoc</p>
                  </div>
                </div>
                <div className="dialog-option">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="dialog-main">
                <ul className="dialog-list">
                  <li className="dialog-part">
                    <p className="time">Thang 9 8, 2022 6:03 chieu</p>
                    <div className="message-container">
                      <p className="self-message">
                        Năm mươi, sáu mươi năm sau liệu chúng ta sẽ như thế nào
                        nhỉ?
                      </p>
                    </div>
                    <div className="message-container">
                      <p className="self-message">
                        Không biết tuổi trẻ đã suy nghĩ bao lần về câu hỏi này ?
                      </p>
                    </div>
                    <div className="message-container">
                      <p className="opposite-message">
                        Ta thường mơ về những chuyến đi của tuổi trẻ, chuyến đi
                        của thanh xuân mang theo bao hoài bão mộng mơ.
                      </p>
                    </div>
                    <div className="message-container">
                      <p className="self-message">10d</p>
                    </div>
                  </li>
                  <li className="dialog-part">
                    <p className="time">Thang 9 26, 2022 11:02 chieu</p>
                    <div className="message-container">
                      <p className="opposite-message">{`“ Năm mươi, sáu mươi năm sau liệu chúng ta sẽ như thế nào nhỉ?

Không biết tuổi trẻ đã suy nghĩ bao lần về câu hỏi này ?

Liệu có mở lại cuốn nhật kí mộng mơ tuổi trẻ, những kỉ niệm thuở mười tám, đôi mươi.

Ta thường mơ về những chuyến đi của tuổi trẻ, chuyến đi của thanh xuân mang theo bao hoài bão mộng mơ.
Tuổi trẻ cuồng nhiệt nhỉ! Mình đã sống với tất những gì bản muốn mà không phải bận tâm điều gì.

Giờ đây,
Có một nơi, nơi mà ta có thể nhớ những nỗi nhớ, hay kỉ niệm trên dấu chân của tuổi trẻ cũng làm ta mỉn cười mãn nguyện… “`}</p>
                    </div>
                    <div className="message-container">
                      <p className="opposite-message">meee</p>
                    </div>
                  </li>
                </ul>
                <div className="dialog-bottom">
                  <div className="dialog-input">
                    <i class="fa-regular fa-heart"></i>
                    <input type={"text"} placeholder="Nhan tin..."></input>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
}

export default ChatBox;
