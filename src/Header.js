import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a className="d-flex align-items-center link-body-emphasis text-decoration-none">
          <span className="fs-4">TodoList</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
