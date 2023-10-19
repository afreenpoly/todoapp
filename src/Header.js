import React from 'react'

function Header() {
  const headerStyle = {
    backgroundColor: "#98E4FF",
    padding: "10px",
    margin: "0",
    fontFamily: "'Playfair Display', serif",
    fontWeight: 500,
    fontSize: "30px",
  };

  return <div style={headerStyle}>Todo List</div>;
}

export default Header;