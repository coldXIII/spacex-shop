import React from 'react';
import Link from 'next/link';
import {Cart} from '..';
import Navmenu from '../NavMenu/Navmenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import { menuItems } from '../../lib/MenuItems';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useStateContext } from '../../context/StateContext';
import styles from './navbar.module.scss'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const handleClick = () => setMobileMenu(!mobileMenu);

  return (
    <div className={styles.Navbar}>
      <p className={styles.logo}>
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt="spacex logo"
            style={{ width: '10rem' }}
            onClick={() => setShowCart(false)}
          />
        </Link>
      </p>

      <div className={styles.menu}>
        <Navmenu data={menuItems} />
      </div>

      <div className={styles.rightside}>
        <ul>
          <li>account</li>
          <li>search</li>
        </ul>

        <button
          className={styles.icon}
          onClick={() => setShowCart(true)}
        >
          <span className={styles.cart__quantity}>
            CART&nbsp;({totalQuantities})
          </span>
        </button>
      </div>
      <div className={styles.menuicon} onClick={handleClick}>
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </div>
      {mobileMenu && <MobileMenu data={menuItems} />}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
