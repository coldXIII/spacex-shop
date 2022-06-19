import React from 'react';
import { AiFillFacebook, AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="Footer__container">
      <p> &copy; 2022 byCold </p>
      <p className="Footer__container-icons">
        <AiFillFacebook />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer