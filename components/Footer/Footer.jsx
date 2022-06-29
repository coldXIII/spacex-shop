import React from 'react';
import { AiFillFacebook, AiOutlineGithub} from 'react-icons/ai';
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p> &copy; 2022 byCold </p>
      <p className={styles.icons}>
        <AiFillFacebook />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer