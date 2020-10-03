import React from 'react';
import './Menu.scss';

function Menu({ title }) {  
  function Navbar({ children, title }) {
    return (
      <nav className="navbar">
        <h3 className='navbar-heading' data-testid='navbar-main'>
          {title}
        </h3>
        <ul className="navbar-nav">{children}</ul>
      </nav>
    );
  }

  return (
    <Navbar title={title}></Navbar>
  );
}
  
export default Menu;