import React from 'react';
import { AiFillFacebook, AiOutlineGithub } from 'react-icons/ai';
import styles from './footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div className={styles.Footer}>
      <p> &copy; {currentYear} byCold </p>
      <p className={styles.icons}>
        <AiFillFacebook />
        <AiOutlineGithub />
      </p>
    </div>
  );
};

export default Footer;
