import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="account">
        <div className="avatar">
          <img alt="avatar" src="https://picsum.photos/210"></img>
        </div>
        <div className="info">
          <p className="name1">__user1</p>
          <p className="name2">Nguyen Van A</p>
        </div>
        <p className="exchange">Chuyen</p>
      </div>
      <div className="suggest">
        <div className="title">
          <p className="title-text">Goi y cho ban</p>
          <p className="title-link">Xem tat ca</p>
        </div>
        <ul className="people">
          <li className="person">
            <div className="avatar">
              <img alt="avatar" src="https://picsum.photos/220"></img>
            </div>
            <div className="info">
              <p className="username">__user1</p>
              <p className="linked">Co __user2 + 26 nguoi nua theo doi</p>
            </div>
            <p className="add">Theo doi</p>
          </li>
          <li className="person">
            <div className="avatar">
              <img alt="avatar" src="https://picsum.photos/221"></img>
            </div>
            <div className="info">
              <p className="username">__user2</p>
              <p className="linked">Co __user3 + 16 nguoi nua theo doi</p>
            </div>
            <p className="add">Theo doi</p>
          </li>
          <li className="person">
            <div className="avatar">
              <img alt="avatar" src="https://picsum.photos/223"></img>
            </div>
            <div className="info">
              <p className="username">__user3</p>
              <p className="linked">Co __user4 + 6 nguoi nua theo doi</p>
            </div>
            <p className="add">Theo doi</p>
          </li>
          <li className="person">
            <div className="avatar">
              <img alt="avatar" src="https://picsum.photos/225"></img>
            </div>
            <div className="info">
              <p className="username">__user4</p>
              <p className="linked">Co __user5 + 3 nguoi nua theo doi</p>
            </div>
            <p className="add">Theo doi</p>
          </li>
          <li className="person">
            <div className="avatar">
              <img alt="avatar" src="https://picsum.photos/226"></img>
            </div>
            <div className="info">
              <p className="username">__user5</p>
              <p className="linked">Co __user6 + 5 nguoi nua theo doi</p>
            </div>
            <p className="add">Theo doi</p>
          </li>
        </ul>
      </div>
      <div className="footer">
        <ul className="link-list">
          <li className="link">Gioi thieu</li>
          <li className="link">Tro giup</li>
          <li className="link">Bao chi</li>
          <li className="link">API</li>
          <li className="link">Viec lam</li>
          <li className="link">Quyen rieng tu</li>
          <li className="link">Dieu khoan</li>
          <li className="link">Vi tri</li>
          <li className="link">Ngon ngu</li>
        </ul>
        <div className="copyright">© 2023 INSTAGRAM FROM META</div>
      </div>
    </div>
  );
}

export default SideBar;
