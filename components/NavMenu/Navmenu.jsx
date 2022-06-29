import React, { useState } from 'react';
import styles from './navmenu.module.scss'

const Navmenu = ({ data }) => {
  const [toggleState, setToggleState] = useState(null);
  const toggleDropdown = (index) => {
    setToggleState(index);
    setTimeout(() => {
      setToggleState(null);
    }, 3000);
  };

  return (
      <ul className={styles.Navmenu}>
        {data.map((item, index) => (
          <li
            className={styles.link}
            key={index + item.title}
            onMouseEnter={() => toggleDropdown(index)}
          >
            {item.title}
            <ul
              className={toggleState === index ? styles.Dropdown : styles.DropdownHidden}
            >
              {item.links.map((link, index) => (
                <li key={index + link}>{link}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
  );
};

export default Navmenu;
