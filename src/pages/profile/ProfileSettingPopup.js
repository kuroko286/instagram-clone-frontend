import React, { useEffect } from "react";
import Overlay from "../../components/UI/Overlay";

function ProfileSettingPopup({ onClick }) {
  useEffect(() => {
    document.body.classList.add("no-scroll"); // when mounted

    return () => {
      document.body.classList.remove("no-scroll"); // when unmount
    };
  }, []);
  return (
    <Overlay onClick={onClick}>
      <div
        className="setting-profile-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ul className="setting-option-list">
          <li className="option-item">Ung dung va trang web</li>
          <li className="option-item">Ma QR</li>
          <li className="option-item">Thong bao</li>
          <li className="option-item">Noi dung ban nhin thay</li>
          <li className="option-item">Ai co the xem noi dung cua ban</li>
          <li className="option-item">
            Cach nguoi khac co the tuong tac voi ban
          </li>
          <li className="option-item">Giam sat</li>
          <li className="option-item">Du lieu va file phuong tien cua ban</li>
          <li className="option-item">Bao cao su co</li>
          <li className="option-item">Dang xuat</li>
          <li className="option-item">Huy</li>
        </ul>
      </div>
    </Overlay>
  );
}

export default ProfileSettingPopup;
