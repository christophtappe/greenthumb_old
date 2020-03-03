import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Green Thumb</h1>
    </header>
  )
}

const headerStyle = {
  background: 'darkgreen',
  color: '#fff',
  testAlign: 'center',
  padding: '10px'
}

export default Header
