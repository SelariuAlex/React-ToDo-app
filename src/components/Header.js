import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>React TodoList</h1>
    </header>
  );
}

const headerStyle = {
  background: '#282c34',
  color: '#00d8ff',
  textAlign: 'center',
  padding: '10px'
};

export default Header;
