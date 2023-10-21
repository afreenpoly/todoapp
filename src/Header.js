import React from 'react'

function Header() {
  const headerStyle = {
    backgroundColor: "#AEDEFC",
    padding: "10px",
    marginBottom: "20px",
    fontFamily: "'Playfair Display', serif",
    fontWeight: 500,
    fontSize: "30px",
  };

  return <div style={headerStyle}>Todo List</div>;
}

export default Header;