import React, { useEffect } from "react";
import Overlay from "../../components/UI/Overlay";

function SettingAvatar({ onClick }) {
  useEffect(() => {
    document.body.classList.add("no-scroll"); // when mounted

    return () => {
      document.body.classList.remove("no-scroll"); // when unmount
    };
  }, []);
  return (
    <Overlay onClick={onClick}>
      <div
        className="set-avt-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ul className="set-avt-option-list">
          <li className="option-item title">Thay doi anh dai dien</li>
          <li className="option-item upload-avt">Tai anh len</li>
          <li className="option-item remove-avt">Go anh hien tai</li>
          <li className="option-item cancel">Huy</li>
        </ul>
      </div>
    </Overlay>
  );
}

export default SettingAvatar;
