import React from "react";

function Overlay({ onClick, children }) {
  return (
    <div className="overlay" onClick={onClick}>
      {children}
    </div>
  );
}

export default Overlay;
