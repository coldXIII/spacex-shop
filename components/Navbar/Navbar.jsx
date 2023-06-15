import React from 'react';
import Link from 'next/link';
import { Cart } from '..';
import { useState } from 'react';
import { menuItems } from '../../lib/MenuItems';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useStateContext } from '../../context/StateContext';
import { signIn, signOut, useSession } from 'next-auth/react';
import Navmenu from '../NavMenu/Navmenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './navbar.module.scss';

const Navbar = () => {
  const { data: session } = useSession();
  const [mobileMenu, setMobileMenu] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const handleClick = () => setMobileMenu(!mobileMenu);

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_API_URL });
  };

  return (
    <nav className={styles.Navbar}>
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
          {!session?.user && <li onClick={handleGoogleSignIn}>login</li>}
          {session?.user?.name && (
            <>
              <li onClick={() => signOut()}>LogOut</li>
              <li>
                <Link href="/account">account</Link>
              </li>
            </>
          )}
        </ul>
        <button className={styles.icon} onClick={() => setShowCart(true)}>
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
    </nav>
  );
};

export default Navbar;
