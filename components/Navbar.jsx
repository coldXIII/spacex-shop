import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Navmenu from './Navmenu';
import { FaTimes, FaBars } from 'react-icons/fa';
import  {menuItems}  from '../lib/MenuItems';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const handleClick = () => setMobileMenu(!mobileMenu);

  return (
    <div className="Navbar">
      <p className="Navbar__logo">
        <Link href="/" >
          <img
            src="/assets/logo.png"
            alt="spacex logo"
            style={{ width: '10rem' }}
            onClick={() => setShowCart(false)}
          />
        </Link>
      </p>

      <div className="Navbar__menu">
        <Navmenu data={menuItems} />
      </div>

      <div className="Navbar__right">
        <ul>
          <li>account</li>
          <li>search</li>
        </ul>

        <button
          className="Navbar__right-cart-icon"
          onClick={() => setShowCart(true)}
        >
          <span className="Navbar__right-cart-item-quantity">
            CART&nbsp;({totalQuantities})
          </span>
        </button>
       
      </div>
      <div className="menu-icon" onClick={handleClick}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      {mobileMenu && <MobileMenu data={menuItems} />}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
