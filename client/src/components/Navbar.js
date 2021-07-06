import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const history = useHistory();

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Innovative Design Mapping
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
           
            <li>
              <Link
                to='/MarkPointOnMap'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Map
              </Link>
            </li>
          </ul>
          {/* {button && !user && <Button buttonStyle='btn--outline' onClick={onClickLogin}>SIGN IN</Button>} */}
          {/* {button && user && <Button buttonStyle='btn--outline' onClick={onClickLogout}>LOG OUT</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
