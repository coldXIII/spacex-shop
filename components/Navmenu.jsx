import { createItemFromDescriptor } from '@babel/core/lib/config/item';
import React, { useState } from 'react';

const Navmenu = ({ data }) => {
  const [toggleState, setToggleState] = useState(null);
  const toggleDropdown = (index) => {
    setToggleState(index);
    setTimeout(() => {
      setToggleState(null);
    }, 3000);
  };

  return (
      <ul className="Navmenu">
        {data.map((item, index) => (
          <li
            className="Navmenu__link"
            key={index + item.title}
            onMouseEnter={() => toggleDropdown(index)}
          >
            {item.title}
            <ul
              className={toggleState === index ? 'Dropdown active' : 'Dropdown'}
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
